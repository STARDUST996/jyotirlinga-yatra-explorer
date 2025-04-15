
import React from 'react';
import { Clock, MapPin, Calendar, Users } from 'lucide-react';

interface PackageCardProps {
  title: string;
  duration: string;
  destinations: string[];
  price: string;
  imageUrl: string;
  rating: number;
  featured?: boolean;
}

const PackageCard = ({
  title,
  duration,
  destinations,
  price,
  imageUrl,
  rating,
  featured = false,
}: PackageCardProps) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${featured ? 'border-2 border-sacred' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-0 bg-sacred text-white px-4 py-1 text-sm font-semibold shadow-md z-10">
          Popular
        </div>
      )}
      
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={index < rating ? "#DAA520" : "none"}
              stroke={index < rating ? "#DAA520" : "#6B7280"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-0.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-spiritual" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-start text-sm text-gray-600">
            <MapPin size={16} className="mr-2 mt-0.5 text-spiritual" />
            <span>{destinations.join(', ')}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center pt-3 border-t border-gray-100">
          <div className="text-lg font-bold text-saffron-dark">
            {price}
            <span className="text-xs text-gray-500 font-normal"> /person</span>
          </div>
          
          <button className="bg-gradient-to-r from-spiritual to-spiritual-dark text-white px-3 py-1.5 rounded hover:shadow-md transition-all duration-300 text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
