import type { Project } from "@/lib/types";
const projects: Project[] = [
    {
      id: "1",
      title: "Jeevika",
      description:
        "Smart drug dispenser powered by ML and IoT for automated medication management.",
      technologies: [
        "Python",
        "Arduino",
        "Raspberry Pi",
        "Machine Learning",
        "Flask",
        "ReactJs",
      ],
      category: ["iot", "ai-ml", "web"],
      image: Array.from(
        { length: 1 },
        (_, i) => `images/jeevika/${i + 1}.jpeg`
      ),
      github: "https://github.com/ikkiocean/jeevika",
      demo: "https://jeevika-demo.com",
      details: {
        features: [
          "🤖 AI-Powered Pill Recognition",
          "⏰ Smart Scheduling & Reminders",
          "📱 Mobile App Integration",
          "🔔 Real-time Health Monitoring",
          "👨‍⚕️ Doctor Dashboard & Analytics",
        ],
        techHighlights: [
          "Computer Vision for pill identification",
          "IoT sensors for precise dispensing",
          "Machine Learning for usage patterns",
          "Real-time data synchronization",
        ],
        useCases: [
          "Elderly Care Facilities",
          "Home Healthcare",
          "Chronic Disease Management",
          "Post-Surgery Recovery",
        ],
      },
    },
    {
  id: "2",
  title: "SQL AI RAG",
  description:
    "An AI-powered application that converts natural language into SQL queries using Retrieval-Augmented Generation for seamless database access.",
  technologies: [
    "Python",
    "Flask",
    "React.js",
    "LangChain",
    "Gemini Pro",
    "SQLite",
    "Vector Embeddings"
  ],
  category: ["ai-ml", "web"],
  image: Array.from(
    { length: 2 },
    (_, i) => `images/sql-ai-rag/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/SQL-AI",
  demo: "https://sql-ai-demo.com",
  video: "images/sql-ai-rag/video.mp4",
  details: {
    features: [
      "🗣️ Natural Language to SQL Conversion",
      "🔌 Seamless Database Connection via Credentials",
      "⚡ Real-time Query Generation",
      "📊 Natural Language Result",
      "🧠 Smart Schema Interpretation with Vector Embeddings",
    ],
    techHighlights: [
      "Retrieval-Augmented Generation (RAG) for query context retention",
      "LangChain for chaining prompts and database queries",
      "Gemini Pro LLM for natural language understanding",
      "SQLite integration with option for other SQL databases",
    ],
    useCases: [
      "Business Analysts without SQL expertise",
      "Educational Tools for SQL learning",
      "Internal BI Tools for Enterprises",
      "Rapid Prototyping for Data Dashboards",
    ],
  },
},
    {
      id: "3",
      title: "Sahkarya",
      description:
        "IoT-based citizen grievance platform for efficient public service management.",
      technologies: ["React", "Node.js", "Arduino", "MongoDB", "IoT"],
      category: ["iot", "web"],
      image: Array.from(
        { length: 5 },
        (_, i) => `images/sahkarya/${i + 1}.jpeg`
      ),
      github: "https://github.com/sahkarya/sahkarya",
      demo: "https://sahkarya-demo.com",
      details: {
        features: [
          "📱 Smart Complaint Portal",
          "🌐 IoT-Enabled Detection Systems",
          "🗺️ Live Mapping & Tracking",
          "📊 Insightful Admin Dashboard",
          "⚡ Lightning-fast Response Coordination",
        ],
        iot: [
          "🔥 Fire Alarm with GPS Location",
          "🗑️ Smart Dustbin Full Alert",
          "💧 Water Pipeline Leakage Detection",
        ],
        useCases: [
          "Smart Cities Initiative",
          "Municipal Corporations",
          "University Campuses",
          "Rural Village Management",
          "Disaster Management Systems",
        ],
      },
    },
    {
  id: "4",
  title: "Fashion Search AI",
  description:
    "A deep learning-powered semantic search engine for fashion e-commerce, enabling intelligent product discovery using natural language and images.",
  technologies: [
    "Python",
    "Flask",
    "React.js",
    "BERT",
    "Vector Embeddings",
    "Jupyter",
  ],
  category: ["ai-ml", "web"],
  image: Array.from(
    { length: 1 },
    (_, i) => `images/fashion-search-ai/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/Fashion_Search",
  demo: "https://fashion-search-demo.com",
  video: "images/fashion-search-ai/video.mp4",
  details: {
    features: [
      "🔍 Semantic Search with Text Queries",
      "🧠 Transformer-based Text Understanding (BERT)",
      "🎯 Context-Aware Style-Based Recommendations",
      "📦 Metadata-Aware Categorization & Filtering",
    ],
    techHighlights: [
      "BERT encoder architecture",
      "Flask backend with RESTful APIs",
      "React.js frontend for dynamic search experience",
      "Scalable embedding-based vector search"
    ],
    useCases: [
      "Fashion E-Commerce Platforms",
      "AI Personal Stylist Applications",
      "Visual Search in Online Retail",
      "Inventory Categorization & Smart Filters"
    ]
  }
},
    {
  id: "5",
  title: "Stella Discord Bot",
  description:
    "A powerful multi-purpose Discord bot packed with anime search, image editing, entertainment, moderation, Reddit, and utility features.",
  technologies: [
    "Python",
    "Discord.py",
    "Pillow",
    "AsyncIO",
  ],
  category: ["web","game"],
  image: Array.from(
    { length: 6 },
    (_, i) => `images/stella-discord-bot/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/stella_discord_bot",
  demo: "https://stella-discord-demo.com",
  details: {
    features: [
      "🎌 MyAnimeList Integration (Anime, Manga, Characters, Profiles)",
      "🎥 IMDb-Powered Movie & TV Show Search",
      "🕒 Anime Release Reminders & Personal Watchlist",
      "🎨 Image Manipulation with Filters & Overlays (Pillow)",
      "📱 Reddit & YouTube API Integration (Posts, Profiles, Videos)",
      "🛠️ Moderation Tools (Kick, Ban, Mute, Warn, Purge)",
      "💬 Role-Play Emotes & Interaction Commands",
      "🗳️ Poll Creation, Server Info, and Utility Commands",
      "🎮 Fun Activities (Chase Game, Roast Generator)",
    ],
    techHighlights: [
      "Asynchronous architecture with `async`/`await` for real-time responsiveness",
      "Modular command structure for scalability and maintainability",
      "Robust multi-API integration for external content retrieval",
      "Advanced image processing using Pillow",
      "Embed-rich UI for a seamless Discord experience",
    ],
    useCases: [
      "Anime & Entertainment-Focused Discord Communities",
      "Moderated Role-Play & Social Servers",
      "Content Creators & Streamer Fanbases",
      "Gaming Guilds & Online Study Groups",
    ]
  }
},
   {
  id: "6",
  title: "Labyrinth Game",
  description:
    "An Arduino-powered arcade puzzle game where players navigate a ball through a physical maze using joystick controls and real-time physics simulation.",
  technologies: [
    "C++",
    "Arduino",
    "Servo Motors",
    "IR Sensors",
    "LCD Display"
  ],
  category: ["game", "iot"],
  image: Array.from(
    { length: 1 },
    (_, i) => `images/labyrinth-game/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/labyrinth_game",
  demo: "https://labyrinth-game-demo.com",
  video: "images/labyrinth-game/video.mp4",
  details: {
    features: [
      "🕹️ Dual Axis Joystick-Controlled Maze Platform",
      "🧠 Real-Time Physics & Collision Detection",
      "⏱️ High Score & Timer Tracking via LCD",
      "🧩 Dynamic Puzzle Path with Progressive Difficulty",
      "🔧 Hardware-Controlled Tilting Platform (MG995 Servo)"
    ],
    iot: [
      "🧠 Arduino UNO as central microcontroller",
      "⚙️ MG995 Servo motors for axis tilt control",
      "📡 IR sensor for ball detection at goal zone",
      "🎮 Dual analog joysticks for precise input control",
      "📺 LCD module for score and timer display",
      "🏗️ Custom-built maze platform with embedded electronics"
    ],
    useCases: [
      "STEM & Robotics Educational Demonstrations",
      "Interactive Arcade Gaming Installations",
      "Retro-Mechanical Gaming Enthusiasts",
      "College-Level Embedded Systems Projects"
    ]
  }
},
    {
  id: "7",
  title: "Blinds Partner",
  description:
    "A smart assistive device designed to empower visually impaired individuals with real-time obstacle detection, haptic feedback, and multi-sensor safety using SONAR-equipped glove and IoT technologies.",
  technologies: [
    "Arduino",
    "C++",
    "Ultrasonic Sensor",
    "IR Sensor",
    "LDR Sensor",
    "Flame Sensor",
    "IoT"
  ],
  category: ["iot", "assistive-tech", "embedded"],
  image: Array.from(
    { length: 6 },
    (_, i) => `images/blinds_partner/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/blinds-partner",
  demo: "https://blinds-partner-demo.com",
  details: {
    features: [
      "📡 SONAR-Based 360° Obstacle Detection (Glove + Stick)",
      "🔊 Haptic Vibration Feedback for Obstacle Proximity",
      "🧭 Stick Locator System via IR + Buzzer",
      "🌘 Auto LED Activation in Low-Light via LDR",
      "💧 Water Detection & Motor Alert System",
      "🔥 Flame Hazard Detection for Fire Safety",
      "🔋 Power Bank-Based Portable Energy Supply"
    ],
    iot: [
      "🔌 Arduino UNO as the microcontroller brain",
      "📡 Ultrasonic SONAR sensors for obstacle detection",
      "📍 IR sensor + buzzer for misplaced stick tracking",
      "🌘 LDR sensors to auto-activate LEDs in darkness",
      "💧 Water detection using electrodes + vibration motor alert",
      "🔥 Flame sensor to detect fire hazards",
      "🔋 Power banks for portable and long-lasting energy supply",
      "🧤 Glove integration for natural and hands-free feedback"
    ],
    useCases: [
      "Assistive Navigation for the Visually Impaired",
      "Mobility Enhancement in Urban and Rural Areas",
      "Use in Rehabilitation and Therapy Centers",
      "Safety Monitoring in Emergency-Prone Environments"
    ]
  }
},
   {
  id: "8",
  title: "BirdFeeder",
  description:
    "Smart bird feeder system using IoT and AI to detect bird species, manage automated food dispensing, and capture wildlife imagery.",
  technologies: ["Python", "OpenCV", "ESP32", "IoT"],
  category: ["iot"],
  image: Array.from(
    { length: 1 },
    (_, i) => `images/birdfeeder/${i + 1}.jpeg`
  ),
  github: "https://github.com/ikkiocean/birdfeeder",
  demo: "https://birdfeeder-demo.com",
  details: {
    features: [
      "📸 Automatic Wildlife Photography",
      "📱 Mobile App Integration"
    ],
    iot: [
      "🎯 Bird detection using computer vision (OpenCV)",
      "🌡️ Environmental sensing with IoT sensors",
      "🔋 Solar-powered system for off-grid operation",
      "🍽️ Servo motor-controlled food dispenser",
      "📶 ESP32 for Wi-Fi connectivity and real-time updates",
      "📷 Camera module for capturing bird images",
      "📲 Integration with mobile interface for control & monitoring"
    ],
    useCases: [
      "Wildlife Research Projects",
      "Backyard Bird Watching",
      "Educational Nature Programs",
      "Conservation Data Collection"
    ]
  }
}
    ];
  
  export default projects;