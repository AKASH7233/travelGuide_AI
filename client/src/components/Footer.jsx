import { Link } from 'react-router-dom';
import { Plane, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <Plane className="w-8 h-8 text-primary-400" />
              <span>AI Travel Guide</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your intelligent companion for personalized travel planning. 
              Let AI create the perfect itinerary tailored to your preferences.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/itinerary" className="hover:text-primary-400 transition-colors">Plan Trip</Link>
              </li>
              <li>
                <Link to="/suggestions" className="hover:text-primary-400 transition-colors">Explore Destinations</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@aitravelguide.com" className="hover:text-primary-400 transition-colors">
                  info@aitravelguide.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AI Travel Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
