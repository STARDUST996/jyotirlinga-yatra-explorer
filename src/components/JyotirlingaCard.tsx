
import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JyotirlingaCardProps {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const JyotirlingaCard = ({ name, location, description, imageUrl, className }: JyotirlingaCardProps) => {
  return (
    <div className={cn("temple-card group", className)}>
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={14} className="mr-1 text-saffron" />
          <span>{location}</span>
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
        <button className="mt-4 bg-transparent border border-saffron text-saffron hover:bg-saffron hover:text-white transition-colors duration-300 py-2 px-4 rounded text-sm">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default JyotirlingaCard;
