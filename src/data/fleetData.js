// Fleet Data — Exactly 7 Buses operated by Prabhuling Travel Agency
export const FLEET_BUSES = [
  {
    id: "bus-1",
    busNumber: "KA-01-F-7001",
    name: "Prabhuling Royal Sleeper",
    category: "AC Multi-Axle Luxury Sleeper (2+1)",
    capacity: 30,
    type: "Sleeper AC",
    rating: 4.9,
    reviewsCount: 142,
    startingPrice: 850,
    featured: true,
    primaryRoute: "Bengaluru ↔ Goa (via Hubballi / Dharwad)",
    schedule: "Daily Departure: 8:45 PM | Arrival: 7:30 AM",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Personal Reading Lights", "Charging Ports", "Clean Blankets & Pillows", "GPS Tracking", "Emergency Hammer & Extinguisher", "Water Bottle"],
    seatLayout: {
      type: "2+1 Sleeper",
      totalSeats: 30,
      upperDeck: 15,
      lowerDeck: 15
    },
    description: "Our flagship long-distance AC sleeper coach designed for ultra-smooth overnight interstate travel with premium suspension."
  },
  {
    id: "bus-2",
    busNumber: "KA-01-F-7002",
    name: "Prabhuling Express Seater",
    category: "AC Executive Push-Back Coach (2+2)",
    capacity: 44,
    type: "Seater AC",
    rating: 4.8,
    reviewsCount: 118,
    startingPrice: 450,
    featured: true,
    primaryRoute: "Bengaluru ↔ Mysuru Express Way",
    schedule: "3 Trips Daily: 6:00 AM, 11:30 AM, 5:00 PM",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Reclining Seats", "Mobile Charging", "Music & Entertainment", "Leg Rests", "Luggage Storage"],
    seatLayout: {
      type: "2+2 Executive Seater",
      totalSeats: 44
    },
    description: "High-frequency day service coach connecting Bengaluru & Mysuru with high comfort & punctual schedules."
  },
  {
    id: "bus-3",
    busNumber: "KA-01-F-7003",
    name: "Prabhuling Star Sleeper",
    category: "Non-AC Premium Sleeper (2+1)",
    capacity: 32,
    type: "Sleeper Non-AC",
    rating: 4.7,
    reviewsCount: 96,
    startingPrice: 650,
    primaryRoute: "Bengaluru ↔ Mangaluru (via Hassan / Sakleshpur)",
    schedule: "Daily Departure: 9:30 PM | Arrival: 6:15 AM",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    amenities: ["Spacious Berths", "Charging Ports", "Curtains for Privacy", "Fresh Bedding", "First Aid Kit", "Emergency Exit"],
    seatLayout: {
      type: "2+1 Non-AC Sleeper",
      totalSeats: 32
    },
    description: "Budget-friendly, highly ventilated overnight sleeper servicing coastal routes with experienced western ghat drivers."
  },
  {
    id: "bus-4",
    busNumber: "KA-01-F-7004",
    name: "Prabhuling Volvo Multi-Axle",
    category: "Volvo B11R AC Multi-Axle Semi-Sleeper",
    capacity: 48,
    type: "Seater AC",
    rating: 4.9,
    reviewsCount: 210,
    startingPrice: 950,
    featured: true,
    primaryRoute: "Bengaluru ↔ Hyderabad (via Anantapur / Kurnool)",
    schedule: "Daily Departure: 10:15 PM | Arrival: 7:00 AM",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Ergonomic Calf Rests", "Individual USB Ports", "Speed Governor", "On-board CCTV", "Mineral Water"],
    seatLayout: {
      type: "2+2 Volvo Semi-Sleeper",
      totalSeats: 48
    },
    description: "Super-smooth Volvo multi-axle suspension coach tailored for long highways between major IT hubs."
  },
  {
    id: "bus-5",
    busNumber: "KA-01-F-7005",
    name: "Prabhuling Horizon Hybrid",
    category: "AC Combo Sleeper + Seater (2+1 / 2+2)",
    capacity: 38,
    type: "Combo AC",
    rating: 4.8,
    reviewsCount: 88,
    startingPrice: 700,
    primaryRoute: "Bengaluru ↔ Belagavi (via Tumakuru / Hubballi)",
    schedule: "Daily Departure: 9:00 PM | Arrival: 6:00 AM",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Upper Berths & Lower Seats", "Reading Lights", "Foldable Foot Rests", "GPS Tracking"],
    seatLayout: {
      type: "Combo Sleeper/Seater",
      totalSeats: 38
    },
    description: "Versatile hybrid layout allowing families & business travelers to choose between berth sleeping or pushback seats."
  },
  {
    id: "bus-6",
    busNumber: "KA-01-F-7006",
    name: "Prabhuling Comfort Cruiser",
    category: "Non-AC Deluxe Seater (2+2)",
    capacity: 50,
    type: "Seater Non-AC",
    rating: 4.6,
    reviewsCount: 74,
    startingPrice: 380,
    primaryRoute: "Bengaluru ↔ Shivamogga / Chikkamagaluru",
    schedule: "Daily Departure: 7:30 AM | Arrival: 1:45 PM",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    amenities: ["Wide Windows", "Reclining Seats", "Ample Overhead Storage", "Punctual Driver", "Emergency Kit"],
    seatLayout: {
      type: "2+2 Non-AC Seater",
      totalSeats: 50
    },
    description: "Reliable daytime intercity coach ideal for hill-station routes & affordable family trips."
  },
  {
    id: "bus-7",
    busNumber: "KA-01-F-7007",
    name: "Prabhuling Tourist Special",
    category: "AC Luxury Tour Coach (Group & Private Hire)",
    capacity: 35,
    type: "Tour Special AC",
    rating: 5.0,
    reviewsCount: 65,
    startingPrice: 1200,
    primaryRoute: "Available for Custom Group Charter / Pilgrimage / Corporate",
    schedule: "Custom Schedule on Hire Request",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    amenities: ["AC", "Public Address System", "Mic & Audio Setup", "Extra Luggage Boot", "Curtains", "Custom Stops"],
    seatLayout: {
      type: "2+2 Luxury Charter",
      totalSeats: 35
    },
    description: "Exclusively reserved for tour packages, corporate outings, wedding transport, & pilgrimage group charters."
  }
];

export const FLEET = FLEET_BUSES;

