"use client";

// next
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">LoginPage</h1>
        <p className="text-gray-600">Welcome to your LoginPage</p>

        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
