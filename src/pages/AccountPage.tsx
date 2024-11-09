import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface Profile {
  username: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
}

const initialProfile: Profile = {
  username: '',
  full_name: '',
  email: '',
  phone: '',
  address: ''
};

export default function AccountPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>(initialProfile);

  useEffect(() => {
    if (user) {
      getProfile();
    }
  }, [user]);

  async function getProfile() {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username, full_name, email, phone, address')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      if (data) {
        setProfile({
          username: data.username || '',
          full_name: data.full_name || '',
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        ...profile,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>
        <form onSubmit={updateProfile} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                disabled
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50"
                value={user?.email || ''}
              />
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="username"
                id="username"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={profile.full_name}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="mt-1">
              <textarea
                name="address"
                id="address"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}