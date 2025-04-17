// components/DevelopersSection.tsx

import React from 'react';
import { FiMail, FiTwitter } from 'react-icons/fi'; // Importing icons from react-icons
import Image, { StaticImageData } from 'next/image';

// Importing local images
import yo from '../../public/devs/yo.jpg';
import abraham from '../../public/devs/abraham.jpg';
import dave from '../../public/devs/dave.jpg';

interface Developer {
  name: string;
  role: string;
  image: StaticImageData; // Updated to use StaticImageData type
  email: string;
  telegram: string;
}

const developers: Developer[] = [
  { name: 'Dawit Elias', role: 'CEO, Full stack developer, marketing manager', image: dave, email: 'john@example.com', telegram: 'dawiteliaskassaye' },
  { name: 'Abraham Tikuye', role: 'CTO, Lead project manager,  FrontEnd Developer', image: abraham, email: 'abrahamtikuye@example.com', telegram: 'abrahamt17' },
  { name: 'Yonas Getnet', role: 'Cyber security, mobile developer', image: yo, email: 'alice@example.com', telegram: 'yobyte' },
];

const DevelopersSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 mt-10">Meet Our Developers</h2>
        <div className="grid gap-12 md:grid-cols-2 whitespace-pre lg:grid-cols-3">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mb-6"
                  width={128}
                  height={128}
                />
                <h3 className="text-2xl font-semibold text-gray-900">{dev.name}</h3>
                <p className="text-gray-600 text-lg mb-4">{dev.role}</p>
                <div className="flex space-x-4">
                  <a href={`mailto:${dev.email}`} className="text-gray-600 hover:text-blue-500">
                    <FiMail className="w-6 h-6" />
                  </a>
                  <a href={`https://t.me/${dev.telegram}`} className="text-gray-600 hover:text-blue-500">
                    <FiTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
