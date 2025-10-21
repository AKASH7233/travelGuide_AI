import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, Trash2, Eye } from 'lucide-react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ItineraryCard from '../components/ItineraryCard';

const MyItineraries = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [itineraries, setItineraries] = useState([]);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadItineraries();
  }, [user, navigate]);

  const loadItineraries = () => {
    const saved = JSON.parse(localStorage.getItem('itineraries') || '[]');
    const userItineraries = saved.filter(item => item.userId === user?.id);
    setItineraries(userItineraries);
  };

  const handleView = (itinerary) => {
    setSelectedItinerary(itinerary);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this itinerary?')) {
      const saved = JSON.parse(localStorage.getItem('itineraries') || '[]');
      const updated = saved.filter(item => item.id !== id);
      localStorage.setItem('itineraries', JSON.stringify(updated));
      loadItineraries();
    }
  };

  const handleDownload = (itinerary) => {
    const dataStr = JSON.stringify(itinerary.itinerary, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `itinerary-${itinerary.destination}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderFormattedText = (text) => {
    if (!text) return text;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Itineraries</h1>
            <p className="text-xl text-gray-600">View and manage your saved travel plans</p>
          </div>

          {itineraries.length === 0 ? (
            <div className="card p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No Itineraries Yet</h2>
                <p className="text-gray-600 mb-6">
                  You haven't saved any itineraries. Start planning your next adventure!
                </p>
                <Button variant="primary" onClick={() => navigate('/itinerary')}>
                  Plan Your First Trip
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itineraries.map((item) => (
                <div key={item.id} className="card p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.destination}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration} days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.travelStyle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{item.budget}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    Saved on {new Date(item.savedAt).toLocaleDateString()}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => handleView(item)}
                      className="flex-1 text-sm"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleDownload(item)}
                      className="text-sm"
                    >
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleDelete(item.id)}
                      className="text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View Itinerary Modal */}
          {showModal && selectedItinerary && (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={selectedItinerary.destination}>
              <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Overview */}
                {selectedItinerary.itinerary.overview && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Trip Overview</h3>
                    <p className="text-gray-700">{selectedItinerary.itinerary.overview}</p>
                    {selectedItinerary.itinerary.totalEstimatedCost && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="font-semibold">
                          Total Cost: <span className="text-primary-600">{selectedItinerary.itinerary.totalEstimatedCost}</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Daily Itinerary */}
                {selectedItinerary.itinerary.days?.map((day, index) => (
                  <ItineraryCard
                    key={index}
                    day={day.day}
                    activities={day.activities}
                    tips={day.tips}
                    estimatedCost={day.estimatedCost}
                  />
                ))}

                {/* Important Notes */}
                {selectedItinerary.itinerary.importantNotes && selectedItinerary.itinerary.importantNotes.length > 0 && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Important Notes</h3>
                    <ul className="space-y-2">
                      {selectedItinerary.itinerary.importantNotes.map((note, index) => (
                        <li key={index} className="text-blue-800 flex items-start text-sm">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="flex-1">{renderFormattedText(note)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyItineraries;
