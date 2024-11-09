import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <>
                <Link
                  to="/account"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <User className="h-5 w-5 mr-1" />
                  Account
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center ml-4 px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}