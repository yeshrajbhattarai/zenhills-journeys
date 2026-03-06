import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

export interface PackagePricing {
  budget: string;
  standard: string;
  deluxe?: string;
}

export interface TripPackage {
  id: string;
  label: string;
  duration: string;
  places: string[];
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; detail: string }[];
  pricing: PackagePricing;
}

export interface Trip {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  packages: TripPackage[];
}

const trips: Trip[] = [

  // ═══════════════════════════════════════════
  // SIKKIM EXPLORER — 3 packages
  // ═══════════════════════════════════════════
  {
    slug: "sikkim-explorer",
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim",
    duration: "3 Nights / 4 Days",
    price: "Rs. 9,500",
    rating: 4.9,
    image: gangtok,
    description: "Explore the best of Sikkim — from Gangtok's monasteries and MG Marg to the high-altitude Gurudongmar Lake, Yumthang Valley, and the mystical Silk Route of East Sikkim.",
    packages: [
      {
        id: "sikkim-3n4d",
        label: "3N / 4D – Gangtok & Nathula",
        duration: "3 Nights / 4 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass"],
        overview: "A short and perfect Sikkim getaway covering Gangtok's top sightseeing spots and the iconic Tsomgo Lake with Nathula Pass on the Indo-China border.",
        inclusions: [
          "NJP Pickup & Drop",
          "Private Vehicle (Innova / Ertiga)",
          "3 Nights Hotel Stay",
          "Breakfast & Dinner",
          "All local sightseeing",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP Railway Station / Bagdogra Airport. Drive to Gangtok (approx 4–5 hours). Hotel check-in. Evening visit to MG Marg. Dinner and night stay in Gangtok." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Breakfast & Dinner included. Night stay in Gangtok." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Excursion to Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Dinner and night stay." },
          { day: "Day 4 — Gangtok to NJP Drop", detail: "Breakfast at hotel. Drive back to NJP / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹9,500 – ₹11,250 per person",
          standard: "₹12,000 – ₹13,750 per person",
        },
      },
      {
        id: "sikkim-6n7d",
        label: "6N / 7D – Sikkim Complete",
        duration: "6 Nights / 7 Days",
        places: ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Lachen", "Lachung", "Pelling"],
        overview: "The complete Sikkim circuit — Gangtok, Nathula, North Sikkim (Gurudongmar Lake, Yumthang Valley) and West Sikkim's Pelling with its famous Skywalk and monasteries.",
        inclusions: [
          "NJP Pickup & Drop",
          "Private Vehicle (Innova / Ertiga)",
          "6 Nights Hotel Stay",
          "Breakfast & Dinner",
          "North Sikkim Permits",
          "Sightseeing as per itinerary",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
          "Zero Point charges (if applicable)",
        ],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP / Bagdogra. Drive to Gangtok (4–5 hrs). Hotel check-in. Evening MG Marg. Night stay." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass (Indo-China Border), Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen (6–7 hrs). En-route: Seven Sisters Waterfalls, Chungthang. Dinner and night stay." },
          { day: "Day 5 — Gurudongmar Lake to Lachung", detail: "Early morning Gurudongmar Lake (17,100 ft). Drive to Lachung. Night stay." },
          { day: "Day 6 — Yumthang Valley to Gangtok", detail: "Yumthang Valley (Valley of Flowers). Optional Zero Point. Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok to Pelling to NJP", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery. Drive to NJP. Tour End." },
        ],
        pricing: {
          budget: "₹20,000 – ₹22,500 per person",
          standard: "₹23,750 – ₹27,500 per person",
        },
      },
      {
        id: "sikkim-silkroute-4n5d",
        label: "4N / 5D – Silk Route (Zuluk)",
        duration: "4 Nights / 5 Days",
        places: ["Gangtok", "Zuluk", "Nathang Valley", "Kupup Lake"],
        overview: "The legendary Silk Route of East Sikkim — winding mountain roads, ancient trade routes, high-altitude lakes and the stunning Nathang Valley. A hidden gem for adventure travellers.",
        inclusions: [
          "NJP / Bagdogra Pickup & Drop",
          "Private Vehicle for transfers & sightseeing",
          "Hotel stay in Gangtok",
          "Homestay in Zuluk",
          "Breakfast & Dinner",
          "Driver allowance",
          "Permit assistance",
        ],
        exclusions: [
          "Lunch",
          "Entry tickets",
          "Personal expenses",
          "Nathula permit (if added)",
        ],
        itinerary: [
          { day: "Day 1 — NJP / Bagdogra to Gangtok", detail: "Pickup and scenic drive along Teesta River to Gangtok (4–5 hrs). Check-in. Evening MG Marg walk. Night stay." },
          { day: "Day 2 — Gangtok Local Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery, Flower Exhibition Center, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Gangtok to Zuluk (Silk Route)", detail: "Drive towards Rongli (90 km, 4–5 hrs). Permit formalities at Rongli. En-route: Lingtam Village, Padamchen, Thambi View Point (zig-zag road). Homestay check-in at Zuluk. Sunset view. Night stay." },
          { day: "Day 4 — Zuluk to Nathang Valley and Back", detail: "Sunrise from Thambi View Point. Lungthung View Point, Nathang Valley, Old Baba Mandir, Kupup Lake (Elephant Lake), Yak Golf Course. Return to Zuluk. Night stay." },
          { day: "Day 5 — Zuluk to NJP / Bagdogra", detail: "Breakfast. Drive back via Aritar Lake, Mankhim View Point. Drop at NJP / Bagdogra. Tour End." },
        ],
        pricing: {
          budget: "₹9,500 – ₹11,250 per person",
          standard: "₹12,500 – ₹15,000 per person",
        },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // SIKKIM + DARJEELING — 2 packages
  // ═══════════════════════════════════════════
  {
    slug: "darjeeling-retreat",
    title: "Sikkim & Darjeeling Retreat",
    location: "Gangtok, Lachung & Darjeeling",
    duration: "3 Nights / 4 Days",
    price: "Rs. 7,000",
    rating: 4.8,
    image: darjelling,
    description: "The perfect combo tour — Sikkim's Himalayan landscapes and the colonial charm of Darjeeling. Tea gardens, Tiger Hill sunrises, mountain railways and high-altitude lakes.",
    packages: [
      {
        id: "darjeeling-3n4d",
        label: "3N / 4D – Darjeeling Only",
        duration: "3 Nights / 4 Days",
        places: ["Darjeeling", "Tiger Hill", "Mirik"],
        overview: "A focused Darjeeling getaway — Tiger Hill sunrise, toy train, tea gardens, Himalayan Zoo and a scenic day trip to Mirik lake.",
        inclusions: [
          "NJP Pickup & Drop",
          "Private Vehicle",
          "3 Nights Hotel Stay",
          "Breakfast & Dinner",
          "Darjeeling Sightseeing",
        ],
        exclusions: [
          "Toy Train tickets",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP to Darjeeling", detail: "Pickup from NJP. Drive to Darjeeling (3–4 hrs). Hotel check-in. Evening Mall Road walk. Night stay." },
          { day: "Day 2 — Darjeeling Sightseeing", detail: "Early morning Tiger Hill (Sunrise view of Kanchenjunga). Batasia Loop, Ghoom Monastery. After breakfast: Padmaja Naidu Himalayan Zoological Park, Himalayan Mountaineering Institute, Tenzing Rock, Tea Garden. Night stay." },
          { day: "Day 3 — Mirik Excursion", detail: "Drive to Mirik. Sumendu Lake, orange gardens, local market. Return to Darjeeling. Night stay." },
          { day: "Day 4 — Darjeeling to NJP", detail: "Breakfast. Drive back to NJP. Tour End." },
        ],
        pricing: {
          budget: "₹7,000 – ₹8,750 per person",
          standard: "₹9,500 – ₹11,250 per person",
        },
      },
      {
        id: "sikkim-darjeeling-8n9d",
        label: "8N / 9D – Sikkim & Darjeeling",
        duration: "8 Nights / 9 Days",
        places: ["Gangtok", "Nathula Pass", "Lachen", "Lachung", "Pelling", "Darjeeling"],
        overview: "The ultimate Northeast combo — full Sikkim circuit with North Sikkim, West Sikkim's Pelling and ending with iconic Darjeeling. Perfect for those who want to see it all.",
        inclusions: [
          "NJP Pickup & Drop",
          "Private Vehicle",
          "8 Nights Hotel Stay",
          "Breakfast & Dinner",
          "North Sikkim Permits",
          "All sightseeing as per itinerary",
        ],
        exclusions: [
          "Nathula Pass Permit",
          "Toy Train tickets",
          "Entry tickets",
          "Lunch",
          "Personal expenses",
        ],
        itinerary: [
          { day: "Day 1 — NJP to Gangtok", detail: "Pickup from NJP / Bagdogra. Drive to Gangtok (4–5 hrs). Check-in. MG Marg evening. Night stay." },
          { day: "Day 2 — Gangtok Sightseeing", detail: "Tashi View Point, Ganesh Tok, Hanuman Tok, Rumtek Monastery, Banjhakri Falls. Night stay." },
          { day: "Day 3 — Tsomgo Lake & Nathula Pass", detail: "Tsomgo Lake, Nathula Pass, Baba Harbhajan Singh Mandir. Return to Gangtok. Night stay." },
          { day: "Day 4 — Gangtok to Lachen", detail: "Drive to Lachen (6–7 hrs). En-route Seven Sisters Waterfalls, Chungthang. Night stay." },
          { day: "Day 5 — Gurudongmar Lake to Lachung", detail: "Early morning Gurudongmar Lake. Drive to Lachung. Night stay." },
          { day: "Day 6 — Yumthang Valley to Gangtok", detail: "Yumthang Valley, Zero Point (optional). Return to Gangtok. Night stay." },
          { day: "Day 7 — Gangtok to Pelling", detail: "Drive to Pelling. Pelling Skywalk, Pemayangtse Monastery, Rabdentse Ruins. Night stay." },
          { day: "Day 8 — Pelling to Darjeeling", detail: "Drive to Darjeeling. Check-in. Evening Mall Road. Night stay." },
          { day: "Day 9 — Darjeeling to NJP", detail: "Tiger Hill sunrise, Batasia Loop, Ghoom Monastery. Drop to NJP. Tour End." },
        ],
        pricing: {
          budget: "₹26,250 – ₹28,750 per person",
          standard: "₹31,250 – ₹35,000 per person",
          deluxe: "₹40,000+ per person",
        },
      },
    ],
  },

  // ─── Remaining trips with single dummy packages ───

  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "2 Nights / 3 Days",
    price: "Rs. 3,500",
    rating: 4.6,
    image: digha,
    description: "A relaxing coastal getaway to Digha's golden beaches with fresh seafood and peaceful Bay of Bengal sunsets.",
    packages: [{
      id: "digha-2n3d", label: "2N / 3D – Digha Beach", duration: "2 Nights / 3 Days",
      places: ["Old Digha", "New Digha", "Marine Aquarium"],
      overview: "Relax by the sea, explore the Marine Aquarium and enjoy fresh seafood and golden sunsets on Digha's famous beaches.",
      inclusions: ["Kolkata / Howrah Pickup & Drop", "Private Vehicle", "2 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Lunch", "Entry tickets", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival at Digha", detail: "Pickup from Kolkata / Howrah. Drive to Digha (4–5 hrs). Check-in. Evening beach relaxation." },
        { day: "Day 2 — Digha Sightseeing", detail: "Marine Aquarium, New Digha beach, Chandaneswar Temple. Sunset at Old Digha." },
        { day: "Day 3 — Departure", detail: "Morning beach walk. Seafood market. Drive back." },
      ],
      pricing: { budget: "₹3,500 – ₹4,500 per person", standard: "₹5,000 – ₹6,500 per person" },
    }],
  },

  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara",
    duration: "5 Nights / 6 Days",
    price: "Rs. 12,500",
    rating: 4.9,
    image: nepal,
    description: "Discover Nepal's ancient temples, sacred ghats and stunning Himalayan landscapes across Kathmandu and Pokhara.",
    packages: [{
      id: "nepal-5n6d", label: "5N / 6D – Nepal Heritage", duration: "5 Nights / 6 Days",
      places: ["Kathmandu", "Pokhara", "Phewa Lake"],
      overview: "Spiritual and scenic journey through Nepal's UNESCO heritage sites, sacred temples and the serene lakeside city of Pokhara.",
      inclusions: ["Airport / NJP Pickup & Drop", "Private Vehicle", "5 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Flight / train to Nepal border", "Visa fees", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival in Kathmandu", detail: "Arrival. Transfer to hotel. Evening Thamel walk." },
        { day: "Day 2 — Kathmandu Temples", detail: "Pashupatinath Temple, Swayambhunath, Boudhanath Stupa." },
        { day: "Day 3 — Kathmandu to Pokhara", detail: "Tourist bus to Pokhara. Lakeside evening walk." },
        { day: "Day 4 — Pokhara Sightseeing", detail: "Sunrise from Sarangkot. Phewa Lake boating. World Peace Pagoda." },
        { day: "Day 5 — Local Exploration", detail: "Devi's Fall, Gupteshwor Cave, Old Bazaar." },
        { day: "Day 6 — Departure", detail: "Return to Kathmandu. Shopping. Departure." },
      ],
      pricing: { budget: "₹12,500 – ₹15,000 per person", standard: "₹17,500 – ₹20,000 per person" },
    }],
  },

  {
    slug: "rajgir-spiritual-trip",
    title: "Rajgir Spiritual Trip",
    location: "Rajgir, Bihar",
    duration: "1 Night / 2 Days",
    price: "Rs. 2,500",
    rating: 4.5,
    image: rajgar,
    description: "A short peaceful spiritual retreat to Rajgir's sacred Buddhist and Jain heritage sites in Bihar.",
    packages: [{
      id: "rajgir-1n2d", label: "1N / 2D – Rajgir Spiritual", duration: "1 Night / 2 Days",
      places: ["Rajgir", "Vishwa Shanti Stupa", "Hot Springs"],
      overview: "Experience the spiritual calm of Rajgir — sacred hills that Lord Buddha once walked, the Stupa ropeway and ancient hot springs.",
      inclusions: ["Patna Pickup & Drop", "Private Vehicle", "1 Night Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Ropeway ticket", "Entry tickets", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival & Sightseeing", detail: "Pickup from Patna. Vishwa Shanti Stupa Ropeway, Griddhakuta Hill, Venuvana. Night stay." },
        { day: "Day 2 — Hot Springs & Departure", detail: "Brahmakund Hot Springs, Jarasandha Akhara. Departure to Patna." },
      ],
      pricing: { budget: "₹2,500 – ₹3,500 per person", standard: "₹4,000 – ₹5,000 per person" },
    }],
  },

  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "2 Nights / 3 Days",
    price: "Rs. 3,200",
    rating: 4.6,
    image: jharkhand,
    description: "Sacred Baidyanath Dham pilgrimage — one of the 12 Jyotirlingas — with comfortable stay and guided temple visits.",
    packages: [{
      id: "deoghar-2n3d", label: "2N / 3D – Deoghar Pilgrimage", duration: "2 Nights / 3 Days",
      places: ["Deoghar", "Baidyanath Temple", "Trikut Hills"],
      overview: "Spiritually fulfilling visit to Baidyanath Dham Jyotirlinga with Trikut Hills and Nandan Pahar sightseeing.",
      inclusions: ["Patna / Jasidih Pickup & Drop", "Private Vehicle", "2 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Entry tickets", "Puja expenses", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival & Temple Darshan", detail: "Arrival. Check-in. Evening Baidyanath Temple darshan. Night stay." },
        { day: "Day 2 — Full Day Sightseeing", detail: "Nandan Pahar, Trikut Hills ropeway, Satsang Ashram, Tapovan. Night stay." },
        { day: "Day 3 — Morning Darshan & Departure", detail: "Early temple darshan. Breakfast. Departure." },
      ],
      pricing: { budget: "₹3,200 – ₹4,200 per person", standard: "₹4,800 – ₹6,000 per person" },
    }],
  },

  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie",
    duration: "5 Nights / 6 Days",
    price: "Rs. 8,500",
    rating: 4.8,
    image: nainital,
    description: "Explore serene Himalayan lakes, colonial hill stations and lush green valleys across Nainital and Mussoorie.",
    packages: [{
      id: "uttarakhand-5n6d", label: "5N / 6D – Nainital & Mussoorie", duration: "5 Nights / 6 Days",
      places: ["Nainital", "Mussoorie", "Kempty Falls"],
      overview: "A refreshing escape to Uttarakhand's twin queen hill stations — tranquil Naini Lake and stunning Kempty Falls.",
      inclusions: ["Delhi / Kathgodam Pickup & Drop", "Private Vehicle", "5 Nights Hotel Stay", "Breakfast & Dinner"],
      exclusions: ["Ropeway tickets", "Boating charges", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival in Nainital", detail: "Pickup. Drive to Nainital. Naini Lake boating. Mall Road evening." },
        { day: "Day 2 — Nainital Sightseeing", detail: "Naina Devi Temple, Snow View Point ropeway, Eco Cave Gardens." },
        { day: "Day 3 — Nainital to Mussoorie", detail: "Drive to Mussoorie. Evening Mall Road." },
        { day: "Day 4 — Mussoorie Sightseeing", detail: "Kempty Falls, Gun Hill ropeway, Lal Tibba." },
        { day: "Day 5 — Local Exploration", detail: "Camel's Back Road, Company Garden." },
        { day: "Day 6 — Departure", detail: "Breakfast. Drive back. Tour End." },
      ],
      pricing: { budget: "₹8,500 – ₹10,000 per person", standard: "₹11,500 – ₹13,500 per person" },
    }],
  },

  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "4 Nights / 5 Days",
    price: "Rs. 9,500",
    rating: 4.7,
    image: kaziranga,
    description: "Wildlife safari at Kaziranga National Park and spiritual exploration at Kamakhya Temple in Guwahati.",
    packages: [{
      id: "assam-4n5d", label: "4N / 5D – Kaziranga & Guwahati", duration: "4 Nights / 5 Days",
      places: ["Guwahati", "Kaziranga", "Kamakhya Temple"],
      overview: "Jeep and elephant safaris among one-horned rhinos at Kaziranga, combined with the mystical Kamakhya Temple.",
      inclusions: ["Guwahati Airport Pickup & Drop", "Private Vehicle", "4 Nights Hotel Stay", "Breakfast & Dinner", "Safari arrangements"],
      exclusions: ["Safari entry fees", "Camera fees", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival in Guwahati", detail: "Arrival. Transfer to Kaziranga. Check-in. Night stay." },
        { day: "Day 2 — Kaziranga Jeep Safari", detail: "Early morning Jeep Safari (Central Range). Night stay." },
        { day: "Day 3 — Elephant Safari", detail: "Dawn Elephant Safari. Western Range Jeep Safari. Night stay." },
        { day: "Day 4 — Guwahati & Kamakhya", detail: "Return to Guwahati. Kamakhya Temple, Umananda Island. Night stay." },
        { day: "Day 5 — Departure", detail: "Morning Brahmaputra cruise. Airport drop. Tour End." },
      ],
      pricing: { budget: "₹9,500 – ₹11,500 per person", standard: "₹13,000 – ₹15,500 per person" },
    }],
  },

  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "6 Nights / 7 Days",
    price: "Rs. 14,000",
    rating: 4.9,
    image: arunachal,
    description: "High-altitude monasteries, snow-capped peaks and pristine valleys in the remote frontier of Arunachal Pradesh.",
    packages: [{
      id: "arunachal-6n7d", label: "6N / 7D – Tawang & Dirang", duration: "6 Nights / 7 Days",
      places: ["Dirang", "Sela Pass", "Tawang", "Bumla Pass"],
      overview: "A thrilling expedition to the land of the rising sun — apple orchards of Dirang, the mighty Sela Pass and ancient Tawang Monastery.",
      inclusions: ["Guwahati / Tezpur Pickup & Drop", "Private Vehicle", "6 Nights Hotel Stay", "Breakfast & Dinner", "Permit assistance"],
      exclusions: ["Bumla Pass permit (seasonal)", "Entry tickets", "Lunch", "Personal expenses"],
      itinerary: [
        { day: "Day 1 — Arrival to Dirang", detail: "Arrival at Guwahati / Tezpur. Transfer to Dirang. Check-in." },
        { day: "Day 2 — Dirang Sightseeing", detail: "Dirang Dzong, Hot Springs, Apple Orchards, Sangti Valley." },
        { day: "Day 3 — Dirang to Tawang via Sela Pass", detail: "Sela Pass (13,700 ft), Jaswant Garh War Memorial. Arrive Tawang." },
        { day: "Day 4 — Tawang Sightseeing", detail: "Tawang Monastery (largest in India), War Memorial, Urgelling Monastery." },
        { day: "Day 5 — Bumla Pass & Lakes", detail: "Madhuri Lake, PT Tso Lake, Bumla Pass (if permitted)." },
        { day: "Day 6 — Local Exploration", detail: "Craft Centre, local market. Return drive begins." },
        { day: "Day 7 — Return to Guwahati", detail: "Drive to Guwahati. Departure. Tour End." },
      ],
      pricing: { budget: "₹14,000 – ₹16,500 per person", standard: "₹18,000 – ₹21,000 per person", deluxe: "₹24,000+ per person" },
    }],
  },
];

export default trips;