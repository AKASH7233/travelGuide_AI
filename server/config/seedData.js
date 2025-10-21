import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Trip from '../models/Trip.js';

dotenv.config();

const seedTrips = [
  {
    destination: 'Goa, India',
    duration: 5,
    travelStyle: 'Relaxation',
    budget: 'Moderate',
    highlights: [
      'Relax on pristine beaches from North to South Goa',
      'Experience vibrant nightlife and beach parties',
      'Explore Portuguese colonial architecture in Old Goa',
      'Try authentic Goan cuisine and fresh seafood',
      'Visit spice plantations and waterfalls'
    ],
    bestTimeToVisit: 'November to February',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    isFeatured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival & North Goa Beaches',
        activities: [
          {
            time: 'Morning',
            activity: 'Arrival in Goa',
            description: 'Arrive at Goa Airport and transfer to North Goa hotel',
            duration: '2 hours',
            estimatedCost: '₹800'
          },
          {
            time: 'Afternoon',
            activity: 'Calangute & Baga Beach',
            description: 'Relax on popular beaches, try water sports',
            duration: '3 hours',
            estimatedCost: '₹1,500'
          },
          {
            time: 'Evening',
            activity: 'Tito\'s Lane & Nightlife',
            description: 'Experience Goa\'s famous nightlife scene',
            duration: '3 hours',
            estimatedCost: '₹2,000'
          }
        ],
        estimatedCost: '₹4,300',
        tips: 'Rent a scooter for easy beach hopping (₹300/day). Try seafood shacks on the beach for authentic experience.'
      },
      {
        day: 2,
        title: 'Old Goa Heritage Tour',
        activities: [
          {
            time: 'Morning',
            activity: 'Basilica of Bom Jesus',
            description: 'Visit UNESCO World Heritage Site and St. Francis Xavier\'s tomb',
            duration: '1.5 hours',
            estimatedCost: '₹0'
          },
          {
            time: 'Afternoon',
            activity: 'Se Cathedral & Churches',
            description: 'Explore Portuguese colonial architecture',
            duration: '2 hours',
            estimatedCost: '₹0'
          },
          {
            time: 'Evening',
            activity: 'Panjim City Walk',
            description: 'Stroll through Latin Quarter (Fontainhas) and enjoy Goan dinner',
            duration: '3 hours',
            estimatedCost: '₹1,500'
          }
        ],
        estimatedCost: '₹1,500',
        tips: 'Dress modestly for churches. Try bebinca (traditional Goan dessert) at local bakeries.'
      },
      {
        day: 3,
        title: 'South Goa & Beach Day',
        activities: [
          {
            time: 'Morning',
            activity: 'Palolem Beach',
            description: 'Visit the most beautiful beach in South Goa',
            duration: '3 hours',
            estimatedCost: '₹500'
          },
          {
            time: 'Afternoon',
            activity: 'Cabo de Rama Fort',
            description: 'Explore historic fort with stunning ocean views',
            duration: '2 hours',
            estimatedCost: '₹0'
          },
          {
            time: 'Evening',
            activity: 'Beach Shack Dinner',
            description: 'Fresh seafood dinner by the sea',
            duration: '2 hours',
            estimatedCost: '₹1,200'
          }
        ],
        estimatedCost: '₹1,700',
        tips: 'South Goa is quieter and more peaceful than North. Book beach huts in advance during peak season.'
      },
      {
        day: 4,
        title: 'Adventure & Nature',
        activities: [
          {
            time: 'Morning',
            activity: 'Dudhsagar Waterfalls',
            description: 'Trek or jeep ride to India\'s 5th tallest waterfall',
            duration: '4 hours',
            estimatedCost: '₹2,500'
          },
          {
            time: 'Afternoon',
            activity: 'Spice Plantation Tour',
            description: 'Learn about spices and enjoy traditional Goan lunch',
            duration: '3 hours',
            estimatedCost: '₹800'
          },
          {
            time: 'Evening',
            activity: 'Anjuna Flea Market',
            description: 'Shop for souvenirs, handicrafts, and jewelry',
            duration: '2 hours',
            estimatedCost: '₹1,000'
          }
        ],
        estimatedCost: '₹4,300',
        tips: 'Dudhsagar is best visited during monsoon (June-Sept) but closed sometimes due to heavy rain.'
      },
      {
        day: 5,
        title: 'Water Activities & Departure',
        activities: [
          {
            time: 'Morning',
            activity: 'Dolphin Watching',
            description: 'Early morning boat trip to spot dolphins',
            duration: '2 hours',
            estimatedCost: '₹600'
          },
          {
            time: 'Afternoon',
            activity: 'Last Beach Time & Lunch',
            description: 'Final beach relaxation and lunch',
            duration: '2 hours',
            estimatedCost: '₹800'
          },
          {
            time: 'Evening',
            activity: 'Airport Transfer',
            description: 'Depart from Goa with amazing memories',
            duration: '1 hour',
            estimatedCost: '₹800'
          }
        ],
        estimatedCost: '₹2,200',
        tips: 'Pack beach essentials and sunscreen. Buy local cashew feni (liquor) as souvenirs.'
      }
    ]
  },
  {
    destination: 'Manali, India',
    duration: 6,
    travelStyle: 'Adventure',
    budget: 'Budget',
    highlights: [
      'Experience thrilling adventure activities like paragliding and river rafting',
      'Explore ancient Hadimba Temple and Tibetan monasteries',
      'Visit Solang Valley for snow activities',
      'Trek to scenic spots and waterfalls',
      'Enjoy local Himachali cuisine and culture'
    ],
    bestTimeToVisit: 'October to June',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    isFeatured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Local Sightseeing',
        activities: [
          {
            time: 'Morning',
            activity: 'Arrival in Manali',
            description: 'Arrive by bus/car from Delhi/Chandigarh, check into hotel',
            duration: '1 hour',
            estimatedCost: '₹0'
          },
          {
            time: 'Afternoon',
            activity: 'Hadimba Temple & Van Vihar',
            description: 'Visit ancient wooden temple and walk through cedar forest',
            duration: '3 hours',
            estimatedCost: '₹200'
          },
          {
            time: 'Evening',
            activity: 'Mall Road Exploration',
            description: 'Shop and try local food at cafes',
            duration: '2 hours',
            estimatedCost: '₹500'
          }
        ],
        estimatedCost: '₹700',
        tips: 'Book hotels near Mall Road for convenience. Carry warm clothes even in summer - evenings are cold.'
      },
      {
        day: 2,
        title: 'Solang Valley Adventure',
        activities: [
          {
            time: 'Morning',
            activity: 'Drive to Solang Valley',
            description: 'Scenic drive through mountains (14km from Manali)',
            duration: '1 hour',
            estimatedCost: '₹400'
          },
          {
            time: 'Afternoon',
            activity: 'Adventure Activities',
            description: 'Paragliding, zorbing, cable car rides (snow activities in winter)',
            duration: '4 hours',
            estimatedCost: '₹3,000'
          },
          {
            time: 'Evening',
            activity: 'Return to Manali',
            description: 'Relax and dinner at local restaurant',
            duration: '2 hours',
            estimatedCost: '₹600'
          }
        ],
        estimatedCost: '₹4,000',
        tips: 'Bargain for adventure activities. Visit early to avoid crowds and better weather conditions.'
      },
      {
        day: 3,
        title: 'Rohtang Pass Excursion',
        activities: [
          {
            time: 'Morning',
            activity: 'Early Start to Rohtang Pass',
            description: 'Drive to 13,050 ft high mountain pass (51km, permit required)',
            duration: '2 hours',
            estimatedCost: '₹1,500'
          },
          {
            time: 'Afternoon',
            activity: 'Snow Activities & Sightseeing',
            description: 'Play in snow, enjoy stunning Himalayan views',
            duration: '3 hours',
            estimatedCost: '₹1,000'
          },
          {
            time: 'Evening',
            activity: 'Return Journey',
            description: 'Drive back to Manali via scenic route',
            duration: '2 hours',
            estimatedCost: '₹0'
          }
        ],
        estimatedCost: '₹2,500',
        tips: 'Rohtang Pass open May-Nov only. Get online permit in advance (mandatory). Carry warm clothes and sunglasses.'
      },
      {
        day: 4,
        title: 'Kasol & Manikaran Day Trip',
        activities: [
          {
            time: 'Morning',
            activity: 'Drive to Kasol',
            description: 'Scenic drive to hippie village in Parvati Valley (75km)',
            duration: '2.5 hours',
            estimatedCost: '₹800'
          },
          {
            time: 'Afternoon',
            activity: 'Kasol Village & Cafes',
            description: 'Explore Israeli cafes, river side walks, local markets',
            duration: '2 hours',
            estimatedCost: '₹500'
          },
          {
            time: 'Evening',
            activity: 'Manikaran Hot Springs',
            description: 'Visit holy Gurudwara with natural hot springs',
            duration: '2 hours',
            estimatedCost: '₹200'
          }
        ],
        estimatedCost: '₹1,500',
        tips: 'Try langar (free meal) at Manikaran Gurudwara. Kasol is perfect for budget backpackers.'
      },
      {
        day: 5,
        title: 'Old Manali & Nature Trails',
        activities: [
          {
            time: 'Morning',
            activity: 'Old Manali Village',
            description: 'Explore hippie cafes, Manu Temple, local culture',
            duration: '2 hours',
            estimatedCost: '₹300'
          },
          {
            time: 'Afternoon',
            activity: 'Jogini Waterfall Trek',
            description: 'Easy 2-3 km trek to beautiful waterfall',
            duration: '3 hours',
            estimatedCost: '₹100'
          },
          {
            time: 'Evening',
            activity: 'Riverside Cafes',
            description: 'Relax at cafes along Beas River',
            duration: '2 hours',
            estimatedCost: '₹600'
          }
        ],
        estimatedCost: '₹1,000',
        tips: 'Old Manali has best cafes and laid-back vibe. Try apple pie and Himachali trout.'
      },
      {
        day: 6,
        title: 'Local Culture & Departure',
        activities: [
          {
            time: 'Morning',
            activity: 'Naggar Castle',
            description: 'Visit historic wooden castle with art gallery',
            duration: '2 hours',
            estimatedCost: '₹300'
          },
          {
            time: 'Afternoon',
            activity: 'Shopping & Last Moments',
            description: 'Buy Himachali handicrafts, woolens, and souvenirs',
            duration: '2 hours',
            estimatedCost: '₹1,000'
          },
          {
            time: 'Evening',
            activity: 'Departure',
            description: 'Board bus/taxi for onward journey',
            duration: '1 hour',
            estimatedCost: '₹0'
          }
        ],
        estimatedCost: '₹1,300',
        tips: 'Book return bus tickets in advance during peak season. Carry cash - many places don\'t accept cards.'
      }
    ]
  },
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Shinjuku Exploration',
        activities: [
          {
            time: 'Morning',
            activity: 'Arrival and Hotel Check-in',
            description: 'Arrive at Narita/Haneda Airport, take the train to your hotel in Shinjuku',
            duration: '2-3 hours',
            estimatedCost: '$30'
          },
          {
            time: 'Afternoon',
            activity: 'Shinjuku Gyoen National Garden',
            description: 'Explore this beautiful Japanese garden with traditional landscapes',
            duration: '2 hours',
            estimatedCost: '$5'
          },
          {
            time: 'Evening',
            activity: 'Omoide Yokocho & Kabukicho',
            description: 'Experience Tokyo nightlife and try yakitori at local izakayas',
            duration: '3 hours',
            estimatedCost: '$40'
          }
        ],
        estimatedCost: '$75',
        tips: 'Get a Suica card for easy train travel. Explore the Tokyo Metropolitan Government Building for free city views.'
      },
      {
        day: 2,
        title: 'Traditional Tokyo - Asakusa & Ueno',
        activities: [
          {
            time: 'Morning',
            activity: 'Senso-ji Temple',
            description: 'Visit Tokyo\'s oldest temple and shop at Nakamise Street',
            duration: '2 hours',
            estimatedCost: '$10'
          },
          {
            time: 'Afternoon',
            activity: 'Ueno Park & Museums',
            description: 'Explore museums and the beautiful park (Tokyo National Museum recommended)',
            duration: '3 hours',
            estimatedCost: '$20'
          },
          {
            time: 'Evening',
            activity: 'Ameyoko Shopping Street',
            description: 'Browse local markets and have dinner at a traditional restaurant',
            duration: '2 hours',
            estimatedCost: '$35'
          }
        ],
        estimatedCost: '$65',
        tips: 'Visit temples early to avoid crowds. Try traditional Japanese sweets from street vendors.'
      },
      {
        day: 3,
        title: 'Modern Tokyo - Shibuya & Harajuku',
        activities: [
          {
            time: 'Morning',
            activity: 'Meiji Shrine',
            description: 'Visit this peaceful Shinto shrine surrounded by forest',
            duration: '1.5 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Afternoon',
            activity: 'Harajuku & Takeshita Street',
            description: 'Explore youth fashion culture and try crepes',
            duration: '2 hours',
            estimatedCost: '$25'
          },
          {
            time: 'Evening',
            activity: 'Shibuya Crossing & Shopping',
            description: 'Experience the world\'s busiest crossing and explore Shibuya',
            duration: '3 hours',
            estimatedCost: '$50'
          }
        ],
        estimatedCost: '$75',
        tips: 'Visit Shibuya Sky for amazing city views. Don\'t miss the Hachiko statue photo opportunity.'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Seminyak',
        activities: [
          {
            time: 'Morning',
            activity: 'Airport Transfer',
            description: 'Arrive at Ngurah Rai Airport and transfer to Seminyak hotel',
            duration: '1 hour',
            estimatedCost: '$10'
          },
          {
            time: 'Afternoon',
            activity: 'Seminyak Beach',
            description: 'Relax on the beautiful beach and enjoy the ocean',
            duration: '3 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Sunset at La Plancha',
            description: 'Watch sunset from colorful beanbags with drinks',
            duration: '2 hours',
            estimatedCost: '$15'
          }
        ],
        estimatedCost: '$25',
        tips: 'Negotiate taxi fares in advance. Try local warungs for cheap, delicious food.'
      },
      {
        day: 2,
        title: 'Ubud Culture & Nature',
        activities: [
          {
            time: 'Morning',
            activity: 'Tegalalang Rice Terraces',
            description: 'Explore the famous terraced rice fields',
            duration: '2 hours',
            estimatedCost: '$5'
          },
          {
            time: 'Afternoon',
            activity: 'Sacred Monkey Forest',
            description: 'Walk through the forest sanctuary with playful monkeys',
            duration: '2 hours',
            estimatedCost: '$7'
          },
          {
            time: 'Evening',
            activity: 'Ubud Traditional Market',
            description: 'Shop for handicrafts and souvenirs',
            duration: '2 hours',
            estimatedCost: '$20'
          }
        ],
        estimatedCost: '$32',
        tips: 'Don\'t feed the monkeys and keep your belongings secure. Bargain at the market.'
      },
      {
        day: 3,
        title: 'Temple Tour Day',
        activities: [
          {
            time: 'Morning',
            activity: 'Tirta Empul Temple',
            description: 'Experience the holy water purification ritual',
            duration: '2 hours',
            estimatedCost: '$3'
          },
          {
            time: 'Afternoon',
            activity: 'Tanah Lot Temple',
            description: 'Visit the iconic temple on the rock formation',
            duration: '2 hours',
            estimatedCost: '$5'
          },
          {
            time: 'Evening',
            activity: 'Sunset at Tanah Lot',
            description: 'Watch spectacular sunset views',
            duration: '1 hour',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$8',
        tips: 'Wear sarong at temples (usually provided). Visit during low tide for best photos.'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Manhattan Icons',
        activities: [
          {
            time: 'Morning',
            activity: 'Statue of Liberty & Ellis Island',
            description: 'Ferry to Liberty Island and explore the iconic statue',
            duration: '4 hours',
            estimatedCost: '$50'
          },
          {
            time: 'Afternoon',
            activity: 'Wall Street & 9/11 Memorial',
            description: 'Visit Financial District and pay respects at the memorial',
            duration: '2 hours',
            estimatedCost: '$20'
          },
          {
            time: 'Evening',
            activity: 'Brooklyn Bridge Walk',
            description: 'Walk across the iconic bridge at sunset',
            duration: '1.5 hours',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$70',
        tips: 'Book Statue of Liberty tickets in advance. Comfortable walking shoes essential.'
      },
      {
        day: 2,
        title: 'Midtown Manhattan',
        activities: [
          {
            time: 'Morning',
            activity: 'Empire State Building',
            description: 'Enjoy panoramic views from the observation deck',
            duration: '2 hours',
            estimatedCost: '$45'
          },
          {
            time: 'Afternoon',
            activity: 'Times Square & Broadway',
            description: 'Explore the neon-lit heart of NYC',
            duration: '2 hours',
            estimatedCost: '$30'
          },
          {
            time: 'Evening',
            activity: 'Broadway Show',
            description: 'Experience a world-class Broadway musical',
            duration: '3 hours',
            estimatedCost: '$200'
          }
        ],
        estimatedCost: '$275',
        tips: 'Book Broadway tickets online for discounts. Visit TKTS for same-day deals.'
      },
      {
        day: 3,
        title: 'Central Park & Museums',
        activities: [
          {
            time: 'Morning',
            activity: 'Central Park Exploration',
            description: 'Walk, bike, or take a horse carriage through the park',
            duration: '3 hours',
            estimatedCost: '$40'
          },
          {
            time: 'Afternoon',
            activity: 'Metropolitan Museum of Art',
            description: 'Explore one of the world\'s greatest art museums',
            duration: '3 hours',
            estimatedCost: '$30'
          },
          {
            time: 'Evening',
            activity: 'Dinner on 5th Avenue',
            description: 'Fine dining experience',
            duration: '2 hours',
            estimatedCost: '$150'
          }
        ],
        estimatedCost: '$220',
        tips: 'MET has a suggested admission price. Pack snacks for the park.'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Oia Sunset',
        activities: [
          {
            time: 'Morning',
            activity: 'Airport Transfer to Hotel',
            description: 'Arrive at Santorini Airport and transfer to your luxury hotel in Oia',
            duration: '1 hour',
            estimatedCost: '$50'
          },
          {
            time: 'Afternoon',
            activity: 'Oia Village Exploration',
            description: 'Wander through the charming white-washed streets',
            duration: '3 hours',
            estimatedCost: '$30'
          },
          {
            time: 'Evening',
            activity: 'Oia Sunset Experience',
            description: 'Watch the world-famous sunset from the castle ruins',
            duration: '2 hours',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$80',
        tips: 'Book hotels with caldera views early. Arrive at sunset spot 1 hour early for best position.'
      },
      {
        day: 2,
        title: 'Volcanic Adventure',
        activities: [
          {
            time: 'Morning',
            activity: 'Volcano Boat Tour',
            description: 'Sail to Nea Kameni volcanic island and hike the crater',
            duration: '3 hours',
            estimatedCost: '$60'
          },
          {
            time: 'Afternoon',
            activity: 'Hot Springs Swim',
            description: 'Swim in the warm volcanic hot springs',
            duration: '1 hour',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Fira Town Dinner',
            description: 'Romantic dinner with caldera views',
            duration: '2 hours',
            estimatedCost: '$100'
          }
        ],
        estimatedCost: '$160',
        tips: 'Bring water shoes for hot springs. Book catamaran tours for sunset experiences.'
      },
      {
        day: 3,
        title: 'Beach & Wine Day',
        activities: [
          {
            time: 'Morning',
            activity: 'Red Beach Visit',
            description: 'Explore the unique red volcanic beach near Akrotiri',
            duration: '2 hours',
            estimatedCost: '$10'
          },
          {
            time: 'Afternoon',
            activity: 'Wine Tasting Tour',
            description: 'Visit traditional wineries and taste Assyrtiko wines',
            duration: '3 hours',
            estimatedCost: '$80'
          },
          {
            time: 'Evening',
            activity: 'Perissa Beach Dinner',
            description: 'Seaside dining on black sand beach',
            duration: '2 hours',
            estimatedCost: '$70'
          }
        ],
        estimatedCost: '$160',
        tips: 'Santorini wines are unique - don\'t miss Santo Wines winery with sunset views.'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Interlaken',
        activities: [
          {
            time: 'Morning',
            activity: 'Zurich to Interlaken',
            description: 'Scenic train ride through Swiss countryside',
            duration: '2.5 hours',
            estimatedCost: '$60'
          },
          {
            time: 'Afternoon',
            activity: 'Höheweg Promenade',
            description: 'Stroll through the main street with mountain views',
            duration: '2 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Swiss Fondue Dinner',
            description: 'Traditional cheese fondue experience',
            duration: '2 hours',
            estimatedCost: '$50'
          }
        ],
        estimatedCost: '$110',
        tips: 'Get Swiss Travel Pass for unlimited train travel. Best value for multiple journeys.'
      },
      {
        day: 2,
        title: 'Jungfraujoch - Top of Europe',
        activities: [
          {
            time: 'Morning',
            activity: 'Train to Jungfraujoch',
            description: 'Journey to the highest railway station in Europe at 3,454m',
            duration: '2 hours',
            estimatedCost: '$120'
          },
          {
            time: 'Afternoon',
            activity: 'Ice Palace & Sphinx Observatory',
            description: 'Explore ice sculptures and enjoy 360° mountain views',
            duration: '3 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Return to Interlaken',
            description: 'Scenic train ride back',
            duration: '2 hours',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$120',
        tips: 'Book early trains to avoid crowds. Bring sunglasses and warm clothes - it\'s cold!'
      },
      {
        day: 3,
        title: 'Zermatt & Matterhorn',
        activities: [
          {
            time: 'Morning',
            activity: 'Train to Zermatt',
            description: 'Travel to the car-free alpine village',
            duration: '2.5 hours',
            estimatedCost: '$70'
          },
          {
            time: 'Afternoon',
            activity: 'Gornergrat Railway',
            description: 'Ride to 3,089m for spectacular Matterhorn views',
            duration: '3 hours',
            estimatedCost: '$90'
          },
          {
            time: 'Evening',
            activity: 'Zermatt Village',
            description: 'Explore charming streets and Swiss restaurants',
            duration: '2 hours',
            estimatedCost: '$60'
          }
        ],
        estimatedCost: '$220',
        tips: 'Zermatt is car-free - electric taxis only. Best Matterhorn views in morning light.'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Modern Dubai',
        activities: [
          {
            time: 'Morning',
            activity: 'Burj Khalifa',
            description: 'Visit observation deck on 124th & 125th floors',
            duration: '2 hours',
            estimatedCost: '$50'
          },
          {
            time: 'Afternoon',
            activity: 'Dubai Mall & Aquarium',
            description: 'Shop and visit the massive aquarium',
            duration: '3 hours',
            estimatedCost: '$40'
          },
          {
            time: 'Evening',
            activity: 'Dubai Fountain Show',
            description: 'Watch choreographed fountain performance',
            duration: '1 hour',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$90',
        tips: 'Book Burj Khalifa tickets online in advance. Visit at sunset for day-to-night views.'
      },
      {
        day: 2,
        title: 'Desert Safari Adventure',
        activities: [
          {
            time: 'Morning',
            activity: 'Beach Relaxation',
            description: 'Enjoy JBR Beach and The Walk',
            duration: '3 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Afternoon',
            activity: 'Desert Safari',
            description: 'Dune bashing, camel ride, and sandboarding',
            duration: '5 hours',
            estimatedCost: '$80'
          },
          {
            time: 'Evening',
            activity: 'BBQ Dinner & Entertainment',
            description: 'Traditional Arabic dinner with belly dancing',
            duration: '2 hours',
            estimatedCost: '$0'
          }
        ],
        estimatedCost: '$80',
        tips: 'Desert safari includes pickup/drop-off. Bring sunscreen and camera!'
      },
      {
        day: 3,
        title: 'Traditional & Cultural Dubai',
        activities: [
          {
            time: 'Morning',
            activity: 'Gold & Spice Souks',
            description: 'Explore traditional markets in Deira',
            duration: '2 hours',
            estimatedCost: '$20'
          },
          {
            time: 'Afternoon',
            activity: 'Dubai Museum & Al Fahidi',
            description: 'Learn history at Dubai\'s oldest building',
            duration: '2 hours',
            estimatedCost: '$5'
          },
          {
            time: 'Evening',
            activity: 'Abra Ride & Creek Dinner',
            description: 'Traditional boat ride and waterfront dining',
            duration: '2 hours',
            estimatedCost: '$40'
          }
        ],
        estimatedCost: '$65',
        tips: 'Bargain at souks - start at 50% of asking price. Abra rides cost only $0.50!'
      }
    ]
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
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Blue Lagoon',
        activities: [
          {
            time: 'Morning',
            activity: 'Airport Pickup & Car Rental',
            description: 'Collect rental car at Keflavik Airport',
            duration: '1 hour',
            estimatedCost: '$80'
          },
          {
            time: 'Afternoon',
            activity: 'Blue Lagoon',
            description: 'Relax in the famous geothermal spa',
            duration: '3 hours',
            estimatedCost: '$70'
          },
          {
            time: 'Evening',
            activity: 'Drive to Reykjavik',
            description: 'Check into hotel and explore downtown',
            duration: '2 hours',
            estimatedCost: '$50'
          }
        ],
        estimatedCost: '$200',
        tips: 'Book Blue Lagoon in advance - it sells out! Stop at bonus supermarket for road trip snacks.'
      },
      {
        day: 2,
        title: 'Golden Circle Tour',
        activities: [
          {
            time: 'Morning',
            activity: 'Þingvellir National Park',
            description: 'Walk between tectonic plates at UNESCO site',
            duration: '2 hours',
            estimatedCost: '$5'
          },
          {
            time: 'Afternoon',
            activity: 'Geysir & Gullfoss Waterfall',
            description: 'Watch Strokkur erupt and see the golden falls',
            duration: '3 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Secret Lagoon',
            description: 'Natural hot spring in countryside',
            duration: '2 hours',
            estimatedCost: '$35'
          }
        ],
        estimatedCost: '$40',
        tips: 'Pack lunch - food is expensive. Dress in layers for changing weather.'
      },
      {
        day: 3,
        title: 'South Coast Adventure',
        activities: [
          {
            time: 'Morning',
            activity: 'Seljalandsfoss Waterfall',
            description: 'Walk behind the stunning waterfall',
            duration: '1 hour',
            estimatedCost: '$0'
          },
          {
            time: 'Afternoon',
            activity: 'Reynisfjara Black Sand Beach',
            description: 'Explore dramatic volcanic beach and basalt columns',
            duration: '2 hours',
            estimatedCost: '$0'
          },
          {
            time: 'Evening',
            activity: 'Vik Village',
            description: 'Stay in charming coastal village',
            duration: '2 hours',
            estimatedCost: '$120'
          }
        ],
        estimatedCost: '$120',
        tips: 'Stay far from ocean at Reynisfjara - sneaker waves are dangerous!'
      }
    ]
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
