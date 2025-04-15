
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  imageUrl: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, location, imageUrl, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 transition-transform duration-300 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={index < rating ? "#DAA520" : "none"}
            stroke={index < rating ? "#DAA520" : "#6B7280"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-0.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <div className="relative mb-6">
        <svg
          className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-saffron opacity-20"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h4v10h-10z" />
        </svg>
        <p className="text-gray-700 italic z-10 relative">{quote}</p>
      </div>

      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h5 className="font-semibold text-gray-800">{author}</h5>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
