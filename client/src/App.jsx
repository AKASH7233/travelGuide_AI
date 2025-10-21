import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryBuilder from './pages/ItineraryBuilder';
import SuggestedTrips from './pages/SuggestedTrips';
import TripDetail from './pages/TripDetail';
import TripDetails from './pages/TripDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyItineraries from './pages/MyItineraries';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/itinerary" element={<ItineraryBuilder />} />
              <Route path="/suggestions" element={<SuggestedTrips />} />
              <Route path="/trip/:id" element={<TripDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/my-itineraries" element={<MyItineraries />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
