import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">FinBank</span>
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  Personal
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-1 rounded-md">
                  <Link to="/accounts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accounts</Link>
                  <Link to="/cards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cards</Link>
                  <Link to="/loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Loans</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  Business
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-1 rounded-md">
                  <Link to="/business-accounts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Accounts</Link>
                  <Link to="/merchant-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Merchant Services</Link>
                  <Link to="/treasury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Treasury</Link>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                About
              </Link>
              
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            {user ? (
              <>
                <Link
                  to="/account"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/personal"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Personal
            </Link>
            <Link
              to="/business"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Business
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
              <div className="space-y-1">
                <Link
                  to="/account"
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <Link
                  to="/auth"
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}