import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Trip from '../models/Trip.js';

dotenv.config();

const seedTrips = [
  {
    destination: 'Paris, France',
    duration: 7,
    travelStyle: 'Romantic',
    budget: 'Moderate',
    highlights: [
      'Visit the iconic Eiffel Tower and enjoy panoramic city views',
      'Explore world-class art at the Louvre Museum',
      'Stroll through charming Montmartre and see Sacré-Cœur',
      'Cruise along the Seine River at sunset',
      'Experience authentic French cuisine in local bistros'
    ],
    bestTimeToVisit: 'April to June, September to October',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    isFeatured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival and First Impressions',
        activities: [
          {
            time: 'Morning',
            activity: 'Arrival and Hotel Check-in',
            description: 'Arrive in Paris, check into your hotel, and freshen up',
            duration: '2-3 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Afternoon',
            activity: 'Champs-Élysées and Arc de Triomphe',
            description: 'Walk down the famous avenue and visit the Arc de Triomphe',
            duration: '2 hours',
            estimatedCost: '$15'
          },
          {
            time: 'Evening',
            activity: 'Dinner in Latin Quarter',
            description: 'Enjoy traditional French cuisine in a cozy bistro',
            duration: '2 hours',
            estimatedCost: '$50'
          }
        ],
        estimatedCost: '$65',
        tips: 'Buy a Paris Museum Pass to save money on attractions. Use the Metro for affordable transportation.'
      }
    ]
  },
  {
    destination: 'Tokyo, Japan',
    duration: 10,
    travelStyle: 'Cultural',
    budget: 'Moderate',
    highlights: [
      'Experience ancient traditions at Senso-ji Temple',
      'Witness the famous Shibuya Crossing',
      'Explore the vibrant neighborhoods of Harajuku and Akihabara',
      'Enjoy authentic sushi at Tsukiji Outer Market',
      'Visit peaceful gardens and historic temples'
    ],
    bestTimeToVisit: 'March to May (Cherry Blossom Season), September to November',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    isFeatured: true,
    itinerary: []
  },
  {
    destination: 'Bali, Indonesia',
    duration: 8,
    travelStyle: 'Relaxation',
    budget: 'Budget',
    highlights: [
      'Relax on pristine beaches in Seminyak and Nusa Dua',
      'Visit ancient temples like Tanah Lot and Uluwatu',
      'Experience traditional Balinese spa treatments',
      'Explore terraced rice paddies in Ubud',
      'Watch stunning sunsets from beach clubs'
    ],
    bestTimeToVisit: 'April to October (Dry Season)',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    isFeatured: true,
    itinerary: []
  },
  {
    destination: 'New York City, USA',
    duration: 5,
    travelStyle: 'Family',
    budget: 'Luxury',
    highlights: [
      'Visit iconic landmarks like Statue of Liberty and Empire State Building',
      'Explore world-class museums including MET and Natural History Museum',
      'Experience Broadway shows in Times Square',
      'Walk through Central Park and visit the zoo',
      'Enjoy diverse culinary experiences from around the world'
    ],
    bestTimeToVisit: 'April to June, September to early November',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    isFeatured: true,
    itinerary: []
  },
  {
    destination: 'Santorini, Greece',
    duration: 6,
    travelStyle: 'Romantic',
    budget: 'Luxury',
    highlights: [
      'Watch breathtaking sunsets in Oia village',
      'Explore white-washed buildings with blue domes',
      'Relax on unique volcanic beaches',
      'Visit ancient archaeological sites in Akrotiri',
      'Taste local wines at traditional wineries'
    ],
    bestTimeToVisit: 'April to November',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    isFeatured: true,
    itinerary: []
  },
  {
    destination: 'Swiss Alps, Switzerland',
    duration: 7,
    travelStyle: 'Adventure',
    budget: 'Luxury',
    highlights: [
      'Ski or snowboard on world-class slopes',
      'Take scenic train rides through mountain passes',
      'Hike stunning alpine trails in summer',
      'Visit charming mountain villages like Zermatt',
      'Experience Swiss chocolate and cheese traditions'
    ],
    bestTimeToVisit: 'December to March (Skiing), June to September (Hiking)',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    isFeatured: true,
    itinerary: []
  },
  {
    destination: 'Dubai, UAE',
    duration: 5,
    travelStyle: 'Solo',
    budget: 'Luxury',
    highlights: [
      'Visit the world\'s tallest building, Burj Khalifa',
      'Shop at luxury malls and traditional souks',
      'Experience desert safari and dune bashing',
      'Relax at pristine beaches and beach clubs',
      'Enjoy world-class dining and nightlife'
    ],
    bestTimeToVisit: 'November to March',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    isFeatured: false,
    itinerary: []
  },
  {
    destination: 'Iceland',
    duration: 9,
    travelStyle: 'Adventure',
    budget: 'Moderate',
    highlights: [
      'Witness the Northern Lights (Aurora Borealis)',
      'Relax in natural hot springs like Blue Lagoon',
      'Explore dramatic waterfalls and black sand beaches',
      'Visit ice caves and glacier lagoons',
      'Drive the famous Golden Circle route'
    ],
    bestTimeToVisit: 'June to August (Midnight Sun), September to March (Northern Lights)',
    imageUrl: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
    isFeatured: false,
    itinerary: []
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');

    // Clear existing trips
    await Trip.deleteMany({});
    console.log('🗑️  Cleared existing trips');

    // Insert seed data
    await Trip.insertMany(seedTrips);
    console.log('✅ Seed data inserted successfully');

    console.log(`\n📊 Summary:`);
    console.log(`   ${seedTrips.length} trips added`);
    console.log(`   ${seedTrips.filter(t => t.isFeatured).length} featured trips`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
