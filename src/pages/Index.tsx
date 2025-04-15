
import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, Clock, ShieldCheck, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JyotirlingaCard from '@/components/JyotirlingaCard';
import PackageCard from '@/components/PackageCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import TestimonialCard from '@/components/TestimonialCard';
import { jyotirlingaData } from '@/data/jyotirlingas';
import { packageData } from '@/data/packages';
import { teamData } from '@/data/team';
import { testimonialData } from '@/data/testimonials';
import { cn } from '@/lib/utils';

const Index = () => {
  const [visibleLingas, setVisibleLingas] = useState(6);
  const [showAllLingas, setShowAllLingas] = useState(false);
  
  const toggleLingasDisplay = () => {
    if (showAllLingas) {
      setVisibleLingas(6);
      setShowAllLingas(false);
    } else {
      setVisibleLingas(jyotirlingaData.length);
      setShowAllLingas(true);
    }
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = ['All Packages', 'North India', 'South India', 'West India', 'East India'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 relative">
        <div className="absolute inset-0 bg-temple-gradient -z-10"></div>
        <div className="sacred-pattern absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <span className="bg-saffron/20 text-saffron-dark px-3 py-1 rounded-full text-sm mb-4 inline-block">
                Spiritual Journey
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover The Divine <br/>
                <span className="text-saffron">12 Jyotirlingas</span> <br/>
                Sacred Yatra
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Embark on a spiritual journey to explore the divine presence of Lord Shiva through the sacred Jyotirlinga temples across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-saffron to-saffron-dark text-white py-3 px-6 rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Plan Your Yatra <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white border border-gray-300 py-3 px-6 rounded-md hover:shadow-md transition-all duration-300 flex items-center justify-center">
                  Learn More
                </button>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <ShieldCheck className="h-6 w-6 text-spiritual" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Safe Travel</p>
                    <p className="text-sm text-gray-600">Secure & Protected</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-full shadow-md mr-4">
                    <Heart className="h-6 w-6 text-saffron" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Devotion First</p>
                    <p className="text-sm text-gray-600">Spiritual Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1599030284356-4c5a2f0c9079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Jyotirlinga Temple" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-sm">India's Sacred Pilgrimage</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">12 Divine Journeys, One Spiritual Path</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20 hidden md:block">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-saffron mr-2" />
                  <span className="text-sm font-medium">Available All Year</span>
                </div>
                <div className="flex items-center ml-4">
                  <Clock className="h-4 w-4 text-saffron mr-2" />
                  <span className="text-sm font-medium">Flexible Duration</span>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                Customized packages for all 12 Jyotirlingas
              </div>
            </div>
            
            <div className="absolute -z-10 w-72 h-72 bg-spiritual-glow rounded-full -right-10 -top-10"></div>
            <div className="absolute -z-10 w-48 h-48 bg-spiritual-glow rounded-full -left-10 -bottom-10 opacity-70"></div>
          </div>
        </div>
      </section>
      
      {/* Jyotirlingas Section */}
      <section id="jyotirlingas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 12 Sacred Jyotirlingas</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Journey through India's most revered Shiva temples, each housing a divine Jyotirlinga that manifests Lord Shiva's infinite presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jyotirlingaData.slice(0, visibleLingas).map((linga) => (
              <JyotirlingaCard 
                key={linga.id}
                name={linga.name}
                location={linga.location}
                description={linga.description}
                imageUrl={linga.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={toggleLingasDisplay}
              className="bg-transparent hover:bg-saffron-light border border-saffron text-saffron hover:text-saffron-dark transition-colors duration-300 font-medium py-2 px-6 rounded inline-flex items-center"
            >
              {showAllLingas ? 'Show Less' : 'View All Jyotirlingas'}
              <ArrowRight className={cn("ml-2 h-5 w-5 transition-transform", showAllLingas ? "rotate-90" : "")} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="bg-spiritual-light/20 text-spiritual-dark px-3 py-1 rounded-full text-sm mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elevate Your Spiritual Journey
            </h2>
            <p className="text-gray-700">
              We offer comprehensive Jyotirlinga tours with expert guidance, comfortable stays, and authentic spiritual experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-saffron">
              <div className="bg-saffron/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customized Itineraries</h3>
              <p className="text-gray-700">
                Flexible schedules tailored to your spiritual needs and preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-spiritual">
              <div className="bg-spiritual/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spiritual Guides</h3>
              <p className="text-gray-700">
                Knowledgeable guides who explain the significance and history of each temple.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-sacred">
              <div className="bg-sacred/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sacred">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Time-Efficient Tours</h3>
              <p className="text-gray-700">
                Well-planned routes to help you visit multiple Jyotirlingas in one journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-earth">
              <div className="bg-earth/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-earth">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Assistance</h3>
              <p className="text-gray-700">
                Help with accommodation, transport, meal arrangements, and temple rituals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-leaf-light/20 text-leaf-dark px-3 py-1 rounded-full text-sm mb-4 inline-block">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Spiritual Journey</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Carefully crafted travel packages to help you experience the divine energy of Jyotirlingas.
            </p>
          </div>
          
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-300 ${
                    activeTabIndex === index
                      ? 'bg-spiritual text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.map(pkg => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                duration={pkg.duration}
                destinations={pkg.destinations}
                price={pkg.price}
                imageUrl={pkg.imageUrl}
                rating={pkg.rating}
                featured={pkg.featured}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-saffron/10 to-spiritual/10 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 180C55.8 180 20 144.2 20 100C20 55.8 55.8 20 100 20C144.2 20 180 55.8 180 100C180 144.2 144.2 180 100 180Z" fill="#FF9800" />
                <path d="M100 40C67.9 40 42 65.9 42 98C42 130.1 67.9 156 100 156C132.1 156 158 130.1 158 98C158 65.9 132.1 40 100 40ZM100 136C78.9 136 62 119.1 62 98C62 76.9 78.9 60 100 60C121.1 60 138 76.9 138 98C138 119.1 121.1 136 100 136Z" fill="#2196F3" />
                <circle cx="100" cy="100" r="20" fill="#DAA520" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-semibold mb-2">Looking for a Custom Package?</h3>
                <p className="text-gray-700 max-w-xl">
                  We can create a personalized spiritual journey based on your specific requirements, time constraints, and budget.
                </p>
              </div>
              <button className="bg-gradient-to-r from-saffron to-saffron-dark text-white py-3 px-6 rounded-md hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-sacred/20 text-sacred-dark px-3 py-1 rounded-full text-sm mb-4 inline-block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Pilgrims</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover how our spiritual journeys have touched the lives of pilgrims and seekers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialData.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                imageUrl={testimonial.imageUrl}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="bg-spiritual-light/20 text-spiritual-dark px-3 py-1 rounded-full text-sm mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Experts</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our dedicated team is committed to providing you with the most enriching spiritual journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamData.map(member => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-saffron/5 to-spiritual/5 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  At Jyotirlinga Yatra Explorer, we are dedicated to helping spiritual seekers experience the divine energy of the sacred Jyotirlingas. We believe that a journey to these temples is not just a pilgrimage but a transformative spiritual experience.
                </p>
                <p className="text-gray-700">
                  Our mission is to make these sacred journeys accessible, comfortable, and meaningful for all devotees, ensuring that the focus remains on the spiritual connection rather than logistical challenges.
                </p>
              </div>
              
              <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-saffron rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Spiritual Authenticity</h4>
                      <p className="text-gray-600 text-sm">Preserving the true essence of the spiritual journey</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-spiritual rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Pilgrim Care</h4>
                      <p className="text-gray-600 text-sm">Ensuring comfort and safety throughout the journey</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sacred rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Knowledge Sharing</h4>
                      <p className="text-gray-600 text-sm">Educating pilgrims about the history and significance of each site</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-leaf rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Responsible Tourism</h4>
                      <p className="text-gray-600 text-sm">Respecting local customs and preserving sacred sites</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-saffron/30 to-spiritual/30 relative">
        <div className="absolute inset-0 sacred-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto om-symbol">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Divine Journey Today</h2>
            <p className="text-lg text-gray-800 mb-8">
              Take the first step toward a spiritually enriching experience with our expertly guided Jyotirlinga tours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-saffron to-saffron-dark text-white py-3 px-6 rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Plan Your Yatra <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white py-3 px-6 rounded-md hover:shadow-md transition-all duration-300 flex items-center justify-center">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
