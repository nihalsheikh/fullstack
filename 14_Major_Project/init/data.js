// 7. Initialize Database
// 7.1 create an 'init' folder in project dir
// 7.2 create a file named data.js, here we will store our data for initialization purpose

const sampleListings = [
	{
		title: "Cozy Beachfront Villa",
		description:
			"Wake up to stunning ocean views in this beautifully appointed beachfront villa. Features include a private deck, fully equipped kitchen, and direct beach access. Perfect for couples or small families looking for a peaceful retreat.",
		image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
		price: 250,
		location: "123 Ocean Drive, Malibu, CA 90265",
		country: "United States",
	},
	{
		title: "Historic Brownstone Apartment",
		description:
			"Experience the charm of old New York in this renovated brownstone apartment. High ceilings, original hardwood floors, and modern amenities blend seamlessly with historic character. Located in trendy Brooklyn neighborhood.",
		image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
		price: 180,
		location: "456 Park Slope Ave, Brooklyn, NY 11215",
		country: "United States",
	},
	{
		title: "Mountain Cabin Retreat",
		description:
			"Escape to this rustic log cabin nestled in the Rocky Mountains. Features a stone fireplace, hot tub on the deck, and hiking trails right outside your door. Perfect for nature lovers and outdoor enthusiasts.",
		image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
		price: 195,
		location: "789 Alpine Trail, Aspen, CO 81611",
		country: "United States",
	},
	{
		title: "Modern Downtown Loft",
		description:
			"Sleek and stylish loft in the heart of downtown Seattle. Floor-to-ceiling windows, exposed brick walls, and high-end appliances. Walking distance to Pike Place Market and waterfront attractions.",
		image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
		price: 220,
		location: "101 Pine Street, Seattle, WA 98101",
		country: "United States",
	},
	{
		title: "Charming Countryside Cottage",
		description:
			"Step into a fairytale at this thatched-roof cottage in the English countryside. Beautiful garden, cozy interiors with period furniture, and peaceful rural setting. Ideal for a romantic getaway.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 165,
		location: "25 Meadow Lane, Cotswolds, GL54 1HN",
		country: "United Kingdom",
	},
	{
		title: "Luxury Penthouse Suite",
		description:
			"Experience ultimate luxury in this penthouse suite with panoramic city views. Private rooftop terrace, marble bathrooms, and premium furnishings throughout. Located in prestigious Mayfair district.",
		image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
		price: 450,
		location: "88 Berkeley Square, London, W1J 8QE",
		country: "United Kingdom",
	},
	{
		title: "Canal-side Houseboat",
		description:
			"Unique floating accommodation on Amsterdam's famous canals. Beautifully restored vintage houseboat with modern amenities. Wake up to gentle water sounds and historic canal views.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 135,
		location: "Prinsengracht 123, Amsterdam, 1016 GV",
		country: "Netherlands",
	},
	{
		title: "Alpine Chalet with Mountain Views",
		description:
			"Traditional Swiss chalet with breathtaking Alpine views. Features include a wood-burning stove, balcony with mountain panoramas, and easy access to skiing and hiking trails.",
		image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
		price: 280,
		location: "Dorfstrasse 45, Zermatt, 3920",
		country: "Switzerland",
	},
	{
		title: "Tropical Beach Bungalow",
		description:
			"Paradise found in this overwater bungalow with direct lagoon access. Crystal clear waters, coral reef snorkeling, and stunning sunsets. Ultimate tropical escape for couples.",
		image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
		price: 380,
		location: "Bora Bora Lagoon, French Polynesia, 98730",
		country: "French Polynesia",
	},
	{
		title: "Tuscan Vineyard Villa",
		description:
			"Authentic Tuscan experience in this restored farmhouse surrounded by vineyards. Private pool, olive grove, and wine tasting opportunities. Perfect for groups and wine enthusiasts.",
		image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
		price: 320,
		location: "Via dei Vigneti 12, Montalcino, 53024",
		country: "Italy",
	},
	{
		title: "Art Deco Miami Apartment",
		description:
			"Stylish Art Deco apartment in South Beach with ocean views. Newly renovated with period details preserved. Steps away from famous beaches and vibrant nightlife.",
		image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
		price: 275,
		location: "1001 Ocean Drive, Miami Beach, FL 33139",
		country: "United States",
	},
	{
		title: "Japanese Zen Garden House",
		description:
			"Traditional Japanese house with authentic tatami rooms and zen garden. Experience Japanese culture with tea ceremony space, futon bedding, and meditation areas.",
		image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
		price: 200,
		location: "2-3-15 Gion, Kyoto, 605-0074",
		country: "Japan",
	},
	{
		title: "Santorini Cave House",
		description:
			"Iconic whitewashed cave house carved into volcanic cliff with stunning Aegean Sea views. Traditional Cycladic architecture with modern comforts and infinity pool.",
		image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
		price: 295,
		location: "Oia Village, Santorini, 84702",
		country: "Greece",
	},
	{
		title: "Desert Glamping Tent",
		description:
			"Luxury glamping experience in the Sahara Desert. Climate-controlled tent with en-suite bathroom, gourmet meals, and guided camel treks under starlit skies.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 340,
		location: "Erg Chebbi Dunes, Merzouga, 52202",
		country: "Morocco",
	},
	{
		title: "Scandinavian Log Cabin",
		description:
			"Cozy log cabin in Finnish Lapland with Northern Lights viewing potential. Sauna, fireplace, and winter activities like dog sledding and reindeer tours available.",
		image: "https://images.unsplash.com/photo-1551524164-6cf96ac17fb4?w=800&q=80",
		price: 225,
		location: "Kittilä, Lapland, 99100",
		country: "Finland",
	},
	{
		title: "Australian Outback Homestead",
		description:
			"Authentic outback experience on working cattle station. Horseback riding, campfire meals, and stargazing in one of the world's darkest sky regions.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 185,
		location: "Red Centre, Alice Springs, NT 0870",
		country: "Australia",
	},
	{
		title: "Brazilian Beach House",
		description:
			"Colorful beach house steps from Copacabana Beach. Traditional Brazilian architecture with modern amenities, rooftop terrace, and easy access to Rio's attractions.",
		image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80",
		price: 160,
		location: "Avenida Atlântica 789, Rio de Janeiro, 22070-011",
		country: "Brazil",
	},
	{
		title: "Scottish Highland Castle",
		description:
			"Live like royalty in this restored 16th-century castle. Grand hall, tower rooms, and extensive grounds. Perfect for special occasions and group gatherings.",
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
		price: 600,
		location: "Glen Coe, Scottish Highlands, PH49 4HX",
		country: "United Kingdom",
	},
	{
		title: "Thai Floating Villa",
		description:
			"Unique floating villa on pristine Thai lake surrounded by limestone karsts. Private boat access, outdoor shower, and authentic Thai architectural details.",
		image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
		price: 210,
		location: "Cheow Lan Lake, Khao Sok, Surat Thani, 84250",
		country: "Thailand",
	},
	{
		title: "Icelandic Northern Lights Lodge",
		description:
			"Glass-roofed lodge designed for Northern Lights viewing. Heated floors, luxury amenities, and guided tours to geysers and waterfalls. Perfect for winter romance.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 390,
		location: "Thingvellir National Park, 801",
		country: "Iceland",
	},
	{
		title: "New York Brooklyn Loft",
		description:
			"Industrial chic loft in trendy DUMBO neighborhood with Manhattan skyline views. Exposed brick, high ceilings, and walking distance to Brooklyn Bridge.",
		image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
		price: 195,
		location: "55 Washington Street, Brooklyn, NY 11201",
		country: "United States",
	},
	{
		title: "Parisian Artist Studio",
		description:
			"Charming artist studio in Montmartre with skylight and original details. Perfect Parisian ambiance with nearby cafes, galleries, and Sacré-Cœur views.",
		image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80",
		price: 145,
		location: "18 Rue des Martyrs, Paris, 75018",
		country: "France",
	},
	{
		title: "California Wine Country Cottage",
		description:
			"Romantic cottage nestled among Napa Valley vineyards. Private hot tub, fireplace, and complimentary wine tastings at nearby wineries.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 285,
		location: "1234 Silverado Trail, Napa, CA 94558",
		country: "United States",
	},
	{
		title: "Spanish Coastal Villa",
		description:
			"Stunning Mediterranean villa with sea views and private beach access. Infinity pool, outdoor kitchen, and traditional Spanish architecture with modern luxury.",
		image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
		price: 350,
		location: "Cala Comte, Ibiza, 07829",
		country: "Spain",
	},
	{
		title: "German Black Forest Cabin",
		description:
			"Traditional wooden cabin in the heart of the Black Forest. Hiking trails, traditional German breakfast, and proximity to cuckoo clock workshops.",
		image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
		price: 125,
		location: "Schwarzwaldweg 42, Titisee-Neustadt, 79822",
		country: "Germany",
	},
	{
		title: "Indian Heritage Haveli",
		description:
			"Restored 18th-century haveli with intricate architecture and royal heritage. Courtyards, hand-painted walls, and authentic Rajasthani cultural experiences.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 110,
		location: "Old City, Udaipur, Rajasthan, 313001",
		country: "India",
	},
	{
		title: "Norwegian Fjord Cabin",
		description:
			"Remote cabin overlooking dramatic Norwegian fjords. Midnight sun in summer, Northern Lights in winter, and year-round spectacular natural beauty.",
		image: "https://images.unsplash.com/photo-1551524164-6cf96ac17fb4?w=800&q=80",
		price: 200,
		location: "Geirangerfjord, 6216",
		country: "Norway",
	},
	{
		title: "Costa Rican Treehouse",
		description:
			"Eco-friendly treehouse in cloud forest canopy. Wildlife viewing, zip-line tours, and sustainable living experience with solar power and rainwater collection.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 175,
		location: "Monteverde Cloud Forest, Puntarenas, 60109",
		country: "Costa Rica",
	},
	{
		title: "Turkish Cave Hotel",
		description:
			"Unique cave dwelling carved into fairy chimney rock formation. Traditional stone architecture with modern amenities and hot air balloon views.",
		image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
		price: 155,
		location: "Göreme, Cappadocia, 50180",
		country: "Turkey",
	},
	{
		title: "Canadian Lakeside Lodge",
		description:
			"Rustic lodge on pristine mountain lake with fishing, canoeing, and wildlife watching. Cozy interiors with stone fireplace and panoramic lake views.",
		image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
		price: 190,
		location: "Algonquin Provincial Park, ON K0J 2S0",
		country: "Canada",
	},
	{
		title: "Mexican Hacienda",
		description:
			"Historic hacienda with colonial architecture and traditional Mexican decor. Courtyard with fountain, tequila tasting, and authentic Mexican cooking classes.",
		image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
		price: 140,
		location: "San Miguel de Allende, Guanajuato, 37700",
		country: "Mexico",
	},
	{
		title: "Kenyan Safari Tent",
		description:
			"Luxury safari tent with game drive access and wildlife viewing. All-inclusive experience with professional guides and authentic African bush camping.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 420,
		location: "Maasai Mara National Reserve, 20500",
		country: "Kenya",
	},
	{
		title: "Portuguese Coastal Cottage",
		description:
			"Whitewashed cottage on dramatic Atlantic coastline. Fresh seafood, surfing opportunities, and traditional Portuguese fishing village charm.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 130,
		location: "Nazaré, Leiria, 2450-065",
		country: "Portugal",
	},
	{
		title: "Austrian Alpine Lodge",
		description:
			"Traditional alpine lodge with mountain hiking access and winter skiing. Authentic Austrian cuisine, spa services, and breathtaking mountain panoramas.",
		image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
		price: 240,
		location: "Hallstatt, Oberösterreich, 4830",
		country: "Austria",
	},
	{
		title: "Bali Rice Field Villa",
		description:
			"Luxury villa overlooking emerald rice terraces with infinity pool and spa services. Traditional Balinese architecture with modern amenities and yoga pavilion.",
		image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
		price: 165,
		location: "Jatiluwih, Tabanan, Bali, 82152",
		country: "Indonesia",
	},
	{
		title: "Chilean Wine Valley Estate",
		description:
			"Exclusive estate in Colchagua Valley wine region. Private vineyard tours, wine tastings, and gourmet dining with Andes mountain backdrop.",
		image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
		price: 270,
		location: "Santa Cruz, Colchagua Valley, 3130000",
		country: "Chile",
	},
	{
		title: "Egyptian Nile Cruise Suite",
		description:
			"Luxury floating hotel suite with Nile River views. Ancient temple visits, professional Egyptology guides, and traditional felucca sailing experiences.",
		image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
		price: 310,
		location: "Luxor, Qena Governorate, 85951",
		country: "Egypt",
	},
	{
		title: "Maldivian Water Villa",
		description:
			"Overwater villa with glass floor panels for marine life viewing. Private deck with direct ocean access, world-class snorkeling, and sunset dining.",
		image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
		price: 650,
		location: "Malé Atoll, 20026",
		country: "Maldives",
	},
	{
		title: "Irish Castle Tower",
		description:
			"Medieval castle tower with authentic stone walls and modern creature comforts. Explore Irish countryside, visit local pubs, and experience Celtic culture.",
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
		price: 280,
		location: "Ring of Kerry, County Kerry, V93 KX42",
		country: "Ireland",
	},
	{
		title: "Peruvian Mountain Lodge",
		description:
			"High-altitude lodge with Machu Picchu access and Andean culture immersion. Llama trekking, traditional weaving workshops, and coca tea ceremonies.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 185,
		location: "Sacred Valley, Cusco, 08660",
		country: "Peru",
	},
	{
		title: "Vietnamese Floating House",
		description:
			"Traditional stilt house on Mekong Delta with authentic Vietnamese river life experience. Floating markets, local fishing, and home-cooked Vietnamese cuisine.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 95,
		location: "Can Tho, Mekong Delta, 94000",
		country: "Vietnam",
	},
	{
		title: "South African Safari Lodge",
		description:
			"Luxury safari lodge with Big Five game viewing and conservation education. Professional rangers, bush walks, and traditional boma dining experiences.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 480,
		location: "Kruger National Park, Mpumalanga, 1350",
		country: "South Africa",
	},
	{
		title: "Bolivian Salt Flat Hotel",
		description:
			"Unique hotel made entirely of salt blocks on Salar de Uyuni. Surreal landscapes, flamingo watching, and stargazing in one of the world's clearest skies.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 220,
		location: "Salar de Uyuni, Potosí Department",
		country: "Bolivia",
	},
	{
		title: "Jordanian Desert Camp",
		description:
			"Luxury Bedouin camp in Wadi Rum desert with traditional goat hair tents. Camel rides, rock climbing, and authentic Jordanian hospitality under starlit skies.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 190,
		location: "Wadi Rum Protected Area, 77110",
		country: "Jordan",
	},
	{
		title: "Croatian Island Villa",
		description:
			"Secluded villa on Adriatic island with private beach and yacht charter options. Crystal-clear waters, medieval towns, and Mediterranean cuisine.",
		image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
		price: 320,
		location: "Hvar Island, Split-Dalmatia County, 21450",
		country: "Croatia",
	},
	{
		title: "Mongolian Ger Camp",
		description:
			"Traditional nomadic ger (yurt) experience on vast grasslands. Horse riding, eagle hunting demonstrations, and authentic Mongolian pastoral lifestyle.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 150,
		location: "Terelj National Park, Ulaanbaatar, 15140",
		country: "Mongolia",
	},
	{
		title: "Russian Trans-Siberian Cabin",
		description:
			"Historic cabin along the Trans-Siberian Railway route. Experience Russian wilderness, traditional banya (sauna), and authentic Siberian hospitality.",
		image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
		price: 120,
		location: "Lake Baikal, Irkutsk Oblast, 664520",
		country: "Russia",
	},
	{
		title: "Lithuanian Forest Cabin",
		description:
			"Peaceful cabin in pristine Baltic forest with mushroom foraging, berry picking, and traditional Lithuanian wood crafts. Perfect digital detox retreat.",
		image: "https://images.unsplash.com/photo-1551524164-6cf96ac17fb4?w=800&q=80",
		price: 85,
		location: "Aukštaitija National Park, 30209",
		country: "Lithuania",
	},
	{
		title: "Georgian Wine Cellar House",
		description:
			"Traditional Georgian house with ancient wine cellar and qvevri clay pots. Wine tastings, Georgian feast experiences, and Caucasus mountain views.",
		image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
		price: 105,
		location: "Kakheti Wine Region, Telavi, 2200",
		country: "Georgia",
	},
	{
		title: "Faroese Grass Roof House",
		description:
			"Traditional Faroese house with grass roof and panoramic North Atlantic views. Dramatic cliffs, birdwatching, and Nordic minimalist design.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 175,
		location: "Tórshavn, Streymoy, 100",
		country: "Faroe Islands",
	},
	{
		title: "Urban Rooftop Apartment",
		description:
			"Modern apartment with private rooftop terrace in downtown Chicago. City skyline views, contemporary design, and walking distance to Millennium Park.",
		image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
		price: 205,
		location: "300 N LaSalle Street, Chicago, IL 60654",
		country: "United States",
	},
	{
		title: "Lakefront Cabin Minnesota",
		description:
			"Rustic cabin on pristine Minnesota lake with fishing pier and canoe access. Fall colors, loon calls, and traditional Midwest lake cabin experience.",
		image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
		price: 140,
		location: "Boundary Waters, Ely, MN 55731",
		country: "United States",
	},
	{
		title: "Texas Hill Country Ranch",
		description:
			"Working ranch with horseback riding, cattle drives, and authentic cowboy experiences. BBQ cookouts, campfire stories, and wide-open Texas skies.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 160,
		location: "Fredericksburg, TX 78624",
		country: "United States",
	},
	{
		title: "Oregon Coast Lighthouse",
		description:
			"Converted lighthouse keeper's quarters with panoramic Pacific Ocean views. Whale watching, tide pooling, and dramatic Oregon coastline exploration.",
		image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
		price: 230,
		location: "Heceta Head, Florence, OR 97439",
		country: "United States",
	},
	{
		title: "Vermont Covered Bridge Cottage",
		description:
			"Quaint cottage near historic covered bridge with maple syrup farm tours. Fall foliage views, antique shopping, and traditional New England charm.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 155,
		location: "Stowe, VT 05672",
		country: "United States",
	},
	{
		title: "Hawaiian Volcano House",
		description:
			"Unique house with lava rock construction near active volcano. Helicopter tours, lava tube exploration, and traditional Hawaiian cultural experiences.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 295,
		location: "Hawaii Volcanoes National Park, HI 96718",
		country: "United States",
	},
	{
		title: "Alaskan Wilderness Lodge",
		description:
			"Remote lodge accessible only by float plane with grizzly bear viewing and salmon fishing. Northern Lights viewing and authentic Alaskan wilderness experience.",
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
		price: 450,
		location: "Katmai National Park, AK 99613",
		country: "United States",
	},
	{
		title: "Louisiana Bayou House",
		description:
			"Stilted house in Cajun country bayou with airboat tours and alligator watching. Creole cooking classes, jazz music, and authentic Louisiana culture.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 125,
		location: "Atchafalaya Basin, LA 70517",
		country: "United States",
	},
	{
		title: "Utah Desert Dome",
		description:
			"Geodesic dome in red rock desert with stargazing deck and solar power. Rock climbing, slot canyon hiking, and sustainable off-grid living experience.",
		image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
		price: 180,
		location: "Moab, UT 84532",
		country: "United States",
	},
	{
		title: "Maine Lobsterman's Cottage",
		description:
			"Authentic fisherman's cottage with lobster trap demonstrations and fresh seafood daily. Lighthouse tours, coastal hiking, and maritime heritage experiences.",
		image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
		price: 170,
		location: "Bar Harbor, ME 04609",
		country: "United States",
	},
	{
		title: "Arizona Adobe Hacienda",
		description:
			"Southwest-style adobe house with Native American cultural experiences. Desert landscape, cactus gardens, and traditional Southwestern hospitality.",
		image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
		price: 145,
		location: "Sedona, AZ 86336",
		country: "United States",
	},
];

module.exports = { data: sampleListings }; // accessing key 'data'
