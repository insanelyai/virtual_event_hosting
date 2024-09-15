import React from 'react';
import Image from 'next/image'; // Import Image from next/image

export default function Header() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/pic1.jpg" // Path to your image in the public folder
        alt="Community Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Text Overlay on Image */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-4 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ml-10">
          Discover Your Community <br />Where Passions Turn into Connections
        </h1>
        <p className="text-2xl mb-6 max-w-lg ml-10">
          No matter what excites you—whether it’s art, fitness, tech, or
          learning something new—there’s a community waiting for you. Thousands
          of people are coming together every day to share their passions and
          experiences. Why wait? Join in on the excitement today.
        </p>
        <button
          id="join"
          className="ml-10 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
        >
          Get Started with Us
        </button>
      </div>
    </div>
  );
}
