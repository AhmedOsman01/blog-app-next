"use client ";

import Link from "next/link";

// pages/index.js
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Welcome to Osman Blog</h2>
          <p className="text-lg leading-relaxed mb-8">
            Empowering businesses and communities with cutting-edge solutions.
          </p>
          <Link
            href="/"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Explore Services
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Innovative Solutions</h3>
            <p>
              We deliver innovative solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
            <p>
              Our team of experts ensures your success at every step of the way.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p>
              Count on us for round-the-clock support and seamless operations.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-800 bg-opacity-30 p-8 rounded-lg mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="italic">
                BrandLogo transformed our business with their solutions!
              </p>
              <p className="text-yellow-300 mt-2">- Jane Doe, CEO</p>
            </div>
            <div>
              <p className="italic">
                Their team is amazing and their support is unmatched.
              </p>
              <p className="text-yellow-300 mt-2">- John Smith, CTO</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
}
