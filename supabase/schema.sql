-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create profiles table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  full_name text,
  email text unique not null,
  phone text,
  address text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create accounts table
create table if not exists public.accounts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  account_type text not null check (account_type in ('checking', 'savings', 'investment')),
  account_number text unique not null,
  balance decimal(12,2) default 0.00 not null check (balance >= 0),
  currency text default 'USD' not null,
  is_active boolean default true not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create transactions table
create table if not exists public.transactions (
  id uuid default uuid_generate_v4() primary key,
  account_id uuid references public.accounts on delete cascade not null,
  transaction_type text not null check (transaction_type in ('deposit', 'withdrawal', 'transfer')),
  amount decimal(12,2) not null,
  description text,
  status text default 'completed' not null check (status in ('pending', 'completed', 'failed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Row Level Security (RLS) policies
alter table public.profiles enable row level security;
alter table public.accounts enable row level security;
alter table public.transactions enable row level security;

-- Profiles policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Accounts policies
create policy "Users can view their own accounts"
  on public.accounts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own accounts"
  on public.accounts for insert
  with check (auth.uid() = user_id);

-- Transactions policies
create policy "Users can view their own transactions"
  on public.transactions for select
  using (
    exists (
      select 1 from public.accounts
      where accounts.id = transactions.account_id
      and accounts.user_id = auth.uid()
    )
  );

create policy "Users can insert their own transactions"
  on public.transactions for insert
  with check (
    exists (
      select 1 from public.accounts
      where accounts.id = account_id
      and accounts.user_id = auth.uid()
    )
  );

-- Functions
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Triggers
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();