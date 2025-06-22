"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("languages")
  const { ref: sectionRef, isVisible } = useScrollAnimation()

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "Embedded C", level: 70 },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "Flask", level: 90 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 90 },
        
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "AWS", level: 75 },
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Arduino", level: 100 },
        { name: "Raspberry Pi", level: 90 },
      ],
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Problem-solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Decision-making", level: 85 },
        { name: "Team Leadership", level: 85 },
        { name: "Project Management", level: 80 },
      ],
    },
  }

  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:shadow-gray-300/25"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Skill Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{skill.name.charAt(0)}</span>
                    </div>
                    <div>
                      <span className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</span>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Proficiency Level</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Expert</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div
                    className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transition-all duration-2000 ease-out"
                    style={{ left: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
