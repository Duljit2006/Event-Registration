'use client';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from './AuthProvider';
import { useState } from 'react';

export default function GoogleSignInButton() {
  const { user, loading } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-space-sm">
        <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">
          {user.displayName}
        </span>
        <div className="group relative">
          <button 
            className="inline-flex items-center justify-center p-space-xs rounded-full hover:bg-surface-container-high transition-colors"
          >
            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover" 
              src={user.photoURL || "/avatar.png"} 
            />
          </button>
          <div className="absolute right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-lowest shadow-lg rounded-xl p-2 min-w-[120px]">
             <button onClick={handleSignOut} className="w-full text-left px-4 py-2 font-label-md text-label-md text-error hover:bg-error-container rounded-lg transition-colors">
               Sign Out
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button 
      onClick={handleSignIn}
      disabled={isSigningIn}
      className="hidden sm:inline-flex items-center justify-center px-space-lg h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-[0_1px_3px_1px_rgba(32,33,36,0.05),0_1px_2px_0px_rgba(32,33,36,0.08)] disabled:opacity-70"
    >
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4 mr-2" />
      {isSigningIn ? 'Signing in...' : 'Sign In'}
    </button>
  );
}
