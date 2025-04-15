
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-saffron to-spiritual-dark rounded-full p-1.5">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-['Cormorant_Garamond']">
                <span className="text-saffron">Jyotirlinga</span>{" "}
                <span className="text-spiritual-light">Yatra</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Embark on a spiritual journey to explore the divine presence of Lord Shiva through the sacred Jyotirlinga temples across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sacred">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#jyotirlingas" className="text-gray-400 hover:text-saffron transition-colors duration-300">The 12 Jyotirlingas</a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-saffron transition-colors duration-300">Travel Packages</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-saffron transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-saffron transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sacred">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Somnath, Gujarat</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Kedarnath, Uttarakhand</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Kashi Vishwanath, Varanasi</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Mahakaleshwar, Ujjain</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-saffron transition-colors duration-300">Rameshwaram, Tamil Nadu</a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4 text-sacred">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-saffron mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 8862 794 5327</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-saffron mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@jyotirlinga-yatra.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-saffron mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Spiritual Path, Divine District
                  <br />
                  Sacred City, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Jyotirlinga Yatra Explorer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-saffron text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
