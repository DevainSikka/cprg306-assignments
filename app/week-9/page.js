'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      {!user ? (
        <button 
          onClick={gitHubSignIn} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-2">Welcome, {user.displayName} ({user.email})</p>
          <button 
            onClick={firebaseSignOut} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mb-4">
            Logout
          </button>
          <div>
            <Link href="/week-9/shopping-list" className="text-blue-500 hover:underline">
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}