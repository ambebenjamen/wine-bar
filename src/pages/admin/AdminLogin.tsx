
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-white to-gold-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-wine-600 to-wine-800 p-3 rounded-lg group-hover:from-wine-700 group-hover:to-wine-900 transition-all duration-300">
              <Wine className="h-8 w-8 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-serif font-bold text-wine-900 mt-4">
            Admin Portal
          </h1>
          <p className="text-wine-600 mt-2">
            Sign in to manage your wine store
          </p>
        </div>
        
        <SignIn 
          afterSignInUrl="/admin"
          redirectUrl="/admin"
          appearance={{
            elements: {
              formButtonPrimary: 'bg-wine-600 hover:bg-wine-700',
              card: 'shadow-xl border-0',
            }
          }}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
