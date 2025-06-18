"use client"

import { useState } from "react"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("languages")

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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
