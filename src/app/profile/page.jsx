/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

// pages/profile.js
export default function Profile() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Profile</h2>
          <p className="text-lg">
            Manage your account information and preferences.
          </p>
        </section>

        {/* Profile Card */}
        <section className="bg-gray-800 bg-opacity-30 p-8 rounded-lg max-w-xl mx-auto">
          <div className="text-center mb-8">
            <img
              src="/placeholder-avatar.png"
              alt="User Avatar"
              className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 mb-4"
            />
            <h3 className="text-2xl font-bold">John Doe</h3>
            <p className="text-yellow-300">johndoe@example.com</p>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value="John Doe"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value="johndoe@example.com"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="text-center mt-8">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition">
              Update Profile
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-center py-6 mt-12">
        <p className="text-gray-400">© 2024 BrandLogo. All rights reserved.</p>
      </footer>
    </div>
  );
}
