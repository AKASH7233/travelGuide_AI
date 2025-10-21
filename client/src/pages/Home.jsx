import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Calendar, Heart } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your AI-Powered Travel Companion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Create personalized itineraries in seconds with the power of artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/itinerary">
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                  Plan Your Trip
                </Button>
              </Link>
              <Link to="/suggestions">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Suggestions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose AI Travel Guide?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 animate-slide-up">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Planning</h3>
              <p className="text-gray-600">
                Advanced AI analyzes your preferences to create the perfect itinerary tailored just for you
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Itineraries</h3>
              <p className="text-gray-600">
                Get day-by-day breakdowns with activities, timings, costs, and local recommendations
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Experience</h3>
              <p className="text-gray-600">
                Choose your travel style, budget, and interests for a truly customized adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enter Your Details</h3>
                  <p className="text-gray-600">
                    Tell us where you want to go, when, and what you're interested in
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Creates Your Itinerary</h3>
                  <p className="text-gray-600">
                    Our AI analyzes thousands of options to craft the perfect plan for you
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Start Your Adventure</h3>
                  <p className="text-gray-600">
                    Download your itinerary and embark on an unforgettable journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of travelers who trust AI Travel Guide
          </p>
          <Link to="/itinerary">
            <Button variant="secondary" className="text-lg px-8 py-4">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
