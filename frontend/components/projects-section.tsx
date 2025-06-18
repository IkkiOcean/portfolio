"use client"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
  {
    id: "1",
    title: "Jeevika",
    description: "Smart drug dispenser powered by ML and IoT for automated medication management.",
    technologies: ["Python", "Arduino", "Raspberry Pi", "Flask", "ML"],
    category: ["iot","ai-ml","web"],
    image: "/images/jeevika.jpeg",
  },
  {
    id: "2",
    title: "SQL AI RAG",
    description: "Natural language to SQL query converter using RAG architecture for database interactions.",
    technologies: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
    category: ["ai-ml","web"],
    image: "/images/sql-ai.jpeg",
  },
  {
    id: "3",
    title: "Sahkarya",
    description: "IoT-based citizen grievance platform for efficient public service management.",
    technologies: ["React", "Node.js", "Arduino", "MongoDB", "IoT"],
    category: ["iot","web"],
    image: "/images/sahkarya.jpeg",
  },
  {
    id: "4",
    title: "Fashion Search AI",
    description: "Semantic search engine for fashion e-commerce improving product discovery beyond keywords.",
    technologies: ["Python", "Jupyter", "NLP", "Vector Search"],
    category: ["ai-ml"],
    image: "/images/fashion-search.jpeg",
  },
  {
    id: "5",
    title: "Stella Discord Bot",
    description: "Feature-rich Discord bot for anime, image editing, Reddit, and entertainment features.",
    technologies: ["Python", "Discord.py", "APIs"],
    category: ["web", "game"],
    image: "/images/stella-discord-bot.jpeg",
  },
  {
    id: "6",
    title: "Labyrinth Game",
    description: "Arcade puzzle game using joystick-based ball navigation with C++ implementation.",
    technologies: ["C++", "Game Development", "Arduino"],
    category: ["game","iot"],
    image: "/images/labyrinth-game.jpeg",
  },
  {
    id: "7",
    title: "Blinds Partner",
    description: "Smart assistive device for visually impaired individuals using sonar-equipped glove to detect obstacles and guide navigation.",
    technologies: ["Arduino", "Ultrasonic Sensor", "IoT", "C++"],
    category: ["iot"],
    image: "/images/blinds-partner.jpeg",
  },
  {
    id: "8",
    title: "BirdFeeder",
    description: "Smart bird feeder system using IoT and AI to detect bird species, manage food dispensing, and capture images.",
    technologies: ["Python", "OpenCV", "ESP32", "IoT"],
    category: ["iot"],
    image: "/images/birdfeeder.jpeg",


  },
]

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "ai-ml", label: "AI/ML" },
    { key: "web", label: "Web Dev" },
    { key: "iot", label: "IoT" },
    { key: "game", label: "Games" },
  ]
const filteredProjects =
  filter === "all"
    ? projects
    : projects.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes(filter)
          : project.category === filter
      )

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI/ML, web development, and IoT.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
  <div className="absolute bottom-4 left-4 right-4">
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
  </div>
</div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
