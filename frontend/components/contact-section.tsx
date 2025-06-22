"use client"

import { Mail, MapPin, Github, Linkedin, Download, Phone, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()

  const handleEmailClick = () => {
    window.location.href =
      "mailto:vivekprakash.st@gmail.com?subject=Let's Connect&body=Hi Vivek, I would like to discuss..."
  }


  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects, collaborations, and full-time
            opportunities.
          </p>
        </div>

        {/* Main Contact Card */}
        <div
          className={`bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8 lg:mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Available for projects and opportunities. Let's discuss how we can work together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Email</h4>
                    <a
                      href="mailto:vivekprakash.st@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      vivekprakash.st@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">India (Remotely Available)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect on Social</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/IkkiOcean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/itsvivekprakash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
