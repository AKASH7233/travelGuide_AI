import { Link } from 'react-router-dom';
import { Menu, X, Plane, User, LogOut, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary-600">
            <Plane className="w-8 h-8" />
            <span>AI Travel Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/itinerary" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Plan Trip
            </Link>
            <Link to="/suggestions" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Explore
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/my-itineraries" className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-2">
                  <BookMarked className="w-4 h-4" />
                  My Itineraries
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <button onClick={handleLogout} className="btn-outline flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/itinerary"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Plan Trip
              </Link>
              <Link
                to="/suggestions"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                Explore
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/my-itineraries"
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <BookMarked className="w-4 h-4" />
                    My Itineraries
                  </Link>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700 mb-3">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{user?.name}</span>
                    </div>
                    <button onClick={handleLogout} className="btn-outline w-full flex items-center justify-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-primary text-center"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
