export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  type:
    | "education"
    | "achievement"
    | "project"
    | "certification"
    | "experience";
  icon: string;
  color: string;
  details?: string[];
  link?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "Feb 2019",
    title: "CBSE National Science Exhibition",
    subtitle: "Project: Blinds Partner",
    type: "achievement",
    icon: "🔬",
    color: "from-purple-500 to-indigo-500",
    details: [
      "Won Regional Level (DELHI)",
      "Assistive tech for blind",
      "Iot-based detection",
    ],
  },
  {
    id: "2",
    date: "2020–2021",
    title: "Stella: Discord Bot Development",
    subtitle: "Built using Python and discord.py",
    type: "project",
    icon: "🚀",
    color: "from-gray-500 to-zinc-500",
    details: [
      "Multi-feature automation",
      "Dynamic command system",
      "Improved server experience",
    ],
  },
  {
    id: "3",
    date: "2022",
    title: "B.Tech Computer Science",
    subtitle: "IIMT College of Engineering, AKTU",
    type: "education",
    icon: "🎓",
    color: "from-blue-500 to-cyan-500",
    details: [
      "CSE with AI specialization",
      "8.46 GPA maintained",
      "Focus on AI/ML and Software Development",
    ],
  },
  {
    id: "4",
    date: "Dec 2022",
    title: "Labyrinth Arcade Game",
    subtitle: "Showcased in Tech Exhibition",
    type: "project",
    icon: "🚀",
    color: "from-emerald-500 to-green-500",
    details: [
      "Maze-based arcade game",
      "Built from scratch",
      "Played by exhibition visitors",
      "Ticket-based interaction",
    ],
  },
  {
    id: "5",
    date: "Jan 2023",
    title: "TechHacks 3.0 Finalist",
    subtitle: "Chitkara University, Chandigarh",
    type: "achievement",
    icon: "🏆",
    color: "from-orange-500 to-red-500",
    details: [
      "All-India hackathon",
      "Reached grand finale",
      "Project: Dr. Tech Kit",
      "IoT + Embedded C",
    ],
  },
  {
    id: "6",
    date: "June 2023",
    title: "Smart Bird Feeder",
    subtitle: "Personal Hardware Project",
    type: "project",
    icon: "🚀",
    color: "from-teal-500 to-green-500",
    details: [
      "Sensor-controlled feeder",
      "Eco-friendly build",
      "Low-power automation",
      "Bird interaction tracked",
    ],
  },
  {
    id: "7",
    date: "Nov 2024",
    title: "Google Cloud Certified",
    subtitle: "Professional & Generative AI",
    type: "certification",
    icon: "",
    color: "from-indigo-500 to-purple-500",
    details: [
      "Generative AI Fundamentals",
      "Cloud Architecture",
      "AI/ML on Cloud",
    ],
  },
  {
    id: "8",
    date: "Nov–Dec 2023",
    title: "Intrusion Detection System",
    subtitle: "Research Collaboration",
    type: "project",
    icon: "🚀",
    color: "from-gray-600 to-slate-600",
    details: [
      "GAN for anomaly detection",
      "ARM-based implementation",
      "Built with professor's support",
    ],
  },
  {
    id: "9",
    date: "May 2024",
    title: "Sahkarya Platform",
    subtitle: "Top 10 in ITS Hackathon",
    type: "project",
    icon: "🚀",
    color: "from-sky-500 to-blue-600",
    details: [
      "IoT-based issue reporting",
      "Live maps & admin panel",
      "Concern tracking",
    ],
  },
  {
    id: "10",
    date: "Apr–Jul 2024",
    title: "Jeevika Drug Dispenser",
    subtitle: "Smart IoT Health System",
    type: "project",
    icon: "🚀",
    color: "from-fuchsia-500 to-rose-500",
    details: [
      "Smart drug dispenser with ML",
      "IoT + ML based solution",
      "Arduino & Raspberry Pi integration",
    ],
  },
  {
    id: "11",
    date: "Aug–Sep 2024",
    title: "AI/ML Applications",
    subtitle: "SQL AI & Fashion Search",
    type: "project",
    icon: "🚀",
    color: "from-pink-500 to-rose-500",
    details: [
      "SQL via natural language",
      "Semantic vector search",
      "RAG Development",
    ],
  },
  {
    id: "12",
    date: "Sep–Nov 2024",
    title: "Stanford ML Certifications",
    subtitle: "Stanford Online - 3 Months Specialization",
    type: "certification",
    icon: "📜",
    color: "from-purple-500 to-indigo-500",
    details: [
      "Supervised + Unsupervised",
      "Recommenders Systems",
      "Reinforcement Learning",
    ],
  },
  {
    id: "13",
    date: "Oct–Nov 2024",
    title: "GSSOC Top Contributor",
    subtitle: "GirlScript Summer of Code",
    type: "achievement",
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
    details: [
      "Ranked 3rd out of 40,000+",
      "200+ PRs merged",
      "7895 points earned",
      "38-day streak maintained",
    ],
  },
  {
    id: "14",
    date: "June 2025 – Present",
    title: "Software Development Engineer",
    subtitle: "Ebindle Pvt. Ltd. – MakeOver",
    type: "experience",
    icon: "💼",
    color: "from-indigo-600 to-blue-600",
    details: [
      "System & cloud design",
      "Full-stack product dev",
      "CI/CD deployments",
    ],
  },
];
