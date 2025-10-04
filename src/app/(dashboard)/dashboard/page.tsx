"use client";

// next
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
