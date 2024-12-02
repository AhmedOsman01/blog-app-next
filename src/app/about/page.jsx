/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

// pages/about.js
export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600  min-h-screen h-auto text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            We’re a team of passionate individuals dedicated to delivering
            exceptional services. Our mission is to empower businesses and
            communities through innovation and collaboration.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-800 bg-opacity-30 p-8 rounded-lg mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            To provide top-notch solutions that inspire creativity, drive
            progress, and create meaningful change for our clients and partners.
          </p>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">Innovation</h4>
            <p>
              We embrace creativity and strive to be at the forefront of
              innovation.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">Collaboration</h4>
            <p>
              Working together with our clients and team is key to achieving
              success.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">Integrity</h4>
            <p>
              Honesty and transparency are the cornerstones of our
              relationships.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/placeholder-team-1.jpg"
                alt="Team Member 1"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h5 className="text-xl font-semibold">Jane Doe</h5>
              <p>CEO</p>
            </div>
            <div className="text-center">
              <img
                src="/placeholder-team-2.jpg"
                alt="Team Member 2"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h5 className="text-xl font-semibold">John Smith</h5>
              <p>CTO</p>
            </div>
            <div className="text-center">
              <img
                src="/placeholder-team-3.jpg"
                alt="Team Member 3"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h5 className="text-xl font-semibold">Emily Johnson</h5>
              <p>COO</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
