"use client";

import Link from "next/link";

// pages/contact.js
export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Contact Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg">
            Have questions or want to work with us? Drop us a message!
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-800 bg-opacity-30 p-8 rounded-lg mb-12">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            action="#"
            method="POST"
          >
            <div className="col-span-2">
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
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div className="col-span-2">
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
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg text-gray-900"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full p-3 rounded-lg text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Our Office</h3>
            <p>1234 Main Street, Suite 100</p>
            <p>City, State, ZIP</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Call Us</h3>
            <p>(123) 456-7890</p>
            <p>Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
            <p>contact@brandlogo.com</p>
          </div>
        </section>
      </main>

   
    </div>
  );
}
