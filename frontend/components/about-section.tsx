import { Code, Brain, Zap } from "lucide-react"

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
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <img src="./profile.jpeg" className="text-6xl rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    
                  </img>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate software developer currently pursuing my B.Tech (2022–2026) from IIMT College of
              Engineering, AKTU. My journey in technology is driven by a deep fascination with artificial intelligence,
              machine learning, and full-stack development.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in the power of technology to solve real-world problems and create meaningful impact. From
              building intelligent agricultural solutions to developing IoT-based citizen platforms, I'm always excited
              to work on projects that make a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Full-Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Web Development</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white">AI/ML</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent Systems</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
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
