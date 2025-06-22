'use client'
import { Code, Brain, Zap } from "lucide-react"
import Image from "next/image"
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="mx-auto p-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center w-64 h-64 shadow-lg transition-transform transform hover:scale-105 md:w-80 md:h-80">
                <div className="bg-white dark:bg-gray-900 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm currently pursuing my B.Tech in Computer Science and Engineering (2022–2026) at IIMT College of Engineering, affiliated with AKTU. My academic journey has provided me with a strong foundation in software engineering, algorithms, and emerging technologies.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My passion lies in building impactful solutions at the intersection of artificial intelligence, machine learning, and full-stack web development. I've developed intelligent agricultural systems, IoT-based citizen platforms, and several web applications that address real-world challenges. Through these projects, I've gained hands-on experience in designing scalable architectures, integrating smart technologies, and delivering user-centric products.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-500 animate-fade-in-up group">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3 animate-bounce group-hover:animate-spin-slow" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Full-Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Web Development</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-500 animate-fade-in-up group">
                <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3 animate-bounce group-hover:animate-spin-slow" />
                <h3 className="font-semibold text-gray-900 dark:text-white">AI/ML</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent Systems</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-500 animate-fade-in-up group">
                <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3 animate-bounce group-hover:animate-spin-slow" />
                <h3 className="font-semibold text-gray-900 dark:text-white">IoT</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connected Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
