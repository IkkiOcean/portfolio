import { Briefcase, Trophy, GitPullRequest } from "lucide-react"
import type { Experience } from "@/lib/types"

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "3",
      title: "Software Development Engineer",
      organization: "E-Bindle Services PVT LTD",
      link: "https://www.e-bindle.com",
      description:
        "I lead a software development team while actively contributing as an SDE. I handle end-to-end development, including backend, frontend, database management, and cloud deployments. My work ensures reliable delivery, scalable architecture, and seamless client experiences.",
      period: "Jun 2025 – Present",
    },
    {
      id: "1",
      title: "Top Contributor (#3 out of 40k)",
      organization: "GirlScript Summer of Code (GSSOC)",
      link: "https://gssoc.girlscript.tech",
      description:
        "Achieved top 3 ranking among 40,000+ contributors in one of India's largest open-source programs. Contributed to multiple projects with significant impact.",
      period: "October 2024",
    },
    {
      id: "2",
      title: "Freelance AI/ML Developer",
      organization: "Independent",
      description:
        "Developed custom RAG applications and client-focused AI tools. Specialized in natural language processing and intelligent automation solutions.",
      period: "2023 – 2024",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className="ml-20 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        {index === 1 ? <Trophy className="w-5 h-5 mr-2" /> : <Briefcase className="w-5 h-5 mr-2" />}
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline hover:text-purple-600 dark:hover:text-purple-400"
                          >
                            {exp.organization}
                          </a>
                        ) : (
                          <span className="font-medium">{exp.organization}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">#3</div>
            <div className="text-gray-600 dark:text-gray-400">GSSOC Ranking</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
            <GitPullRequest className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">Contributions</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
            <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Of Programming</div>
          </div>
        </div>
      </div>
    </section>
  )
}