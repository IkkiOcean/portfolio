"use client"

import { useState, useRef } from "react"
import { ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { timelineEvents, type TimelineEvent } from "@/data/timeline-data"

export default function TimelineSection() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null)
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const timelineRef = useRef<HTMLDivElement>(null)
  let isExpanded = false;
  const getTypeStyles = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "education":
        return {
          bg: "bg-blue-100 dark:bg-blue-900",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800",
          dotColor: "bg-blue-500",
        }
      case "achievement":
        return {
          bg: "bg-yellow-100 dark:bg-yellow-900",
          text: "text-yellow-600 dark:text-yellow-400",
          border: "border-yellow-200 dark:border-yellow-800",
          dotColor: "bg-yellow-500",
        }
      case "project":
        return {
          bg: "bg-green-100 dark:bg-green-900",
          text: "text-green-600 dark:text-green-400",
          border: "border-green-200 dark:border-green-800",
          dotColor: "bg-green-500",
        }
      case "certification":
        return {
          bg: "bg-purple-100 dark:bg-purple-900",
          text: "text-purple-600 dark:text-purple-400",
          border: "border-purple-200 dark:border-purple-800",
          dotColor: "bg-purple-500",
        }
      case "experience":
        return {
          bg: "bg-orange-100 dark:bg-orange-900",
          text: "text-orange-600 dark:text-orange-400",
          border: "border-orange-200 dark:border-orange-800",
          dotColor: "bg-orange-500",
        }
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-900",
          text: "text-gray-600 dark:text-gray-400",
          border: "border-gray-200 dark:border-gray-800",
          dotColor: "bg-gray-500",
        }
    }
  }

  return (
    <section
      className="py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Journey</h2>
          {/* Scroll Indicator */}
<div className="flex justify-center">
  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    <span className="text-sm">Scroll horizontally to explore timeline</span>
    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
  </div>
</div>
          <div className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
         
        </div>

        {/* Horizontal Timeline - Following Reference Structure */}
        <div id="timeline" className="relative pt-44 pb-48 overflow-x-auto scrollbar-hide" ref={timelineRef}>
          <div className="relative min-w-max scrollbar-hide" style={{ width: `${timelineEvents.length * 300 + 200}px` }}>
            {/* Main Timeline Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* Timeline Events Container */}
            <div className="relative h-full">
              <div
                className="flex justify-between items-center h-full px-8"
                style={{ paddingTop: "160px", paddingBottom: "160px" }}
              >
                {timelineEvents.map((event, index) => {
                  const isAbove = index % 2 === 0
                  const styles = getTypeStyles(event.type)
                  const isActive = activeEvent === event.id
                  isExpanded = expandedEvent === event.id

                  return (
                    <div
                      key={event.id}
                      className={`relative flex flex-col items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{
                        transitionDelay: `${index * 200}ms`,
                        minWidth: "320px",
                      }}
                      onMouseEnter={() => setActiveEvent(event.id)}
                      onMouseLeave={() => setActiveEvent(null)}
                    >
                      {/* Event Card - Above Timeline */}
                      {isAbove && (
                        <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2">
                          <div
                            className={`w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isActive ? "ring-2 ring-blue-500 shadow-blue-500/25" : ""} ${styles.border} border-2`}
                          >
                            {/* Event Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-12 h-12 ${styles.bg} rounded-lg flex items-center justify-center text-2xl transform hover:rotate-12 transition-transform duration-300`}
                                >
                                  {event.icon}
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2 mb-1">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span className={`text-sm font-medium ${styles.text}`}>{event.date}</span>
                                  </div>
                                  <span
                                    className={`inline-block px-3 py-1 text-xs font-medium ${styles.bg} ${styles.text} rounded-full`}
                                  >
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Event Content - Compact Version */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                              {event.subtitle}
                            </h4>

                            {/* Hover Details */}
                            {isActive && event.details && (
                              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg animate-fade-in-up">
                                <ul className="space-y-1">
                                  {event.details.map((detail, detailIndex) => (
                                    <li
                                      key={detailIndex}
                                      className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400"
                                    >
                                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Action Button */}
                            {event.link && (
                              <div className="mt-4">
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </div>
                          {/* Connecting Line */}
                          <div className="flex justify-center mt-2">
                            <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                          </div>
                        </div>
                      )}

                      {/* Timeline Dot - Exactly on line */}
                      <div className="relative">
                        <div
                          className={`w-6 h-6 border-4 border-gray-900 ${styles.dotColor} rounded-full shadow-lg transition-all duration-300 ${isActive ? "scale-150 shadow-xl" : "scale-100"} relative z-20`}
                        >
                          <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-white/50 to-transparent"></div>
                        </div>
                      </div>

                      {/* Event Card - Below Timeline */}
                      {!isAbove && (
                        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2">
                          {/* Connecting Line */}
                          <div className="flex justify-center mb-2">
                            <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                          </div>
                          <div
                            className={`w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isActive ? "ring-2 ring-blue-500 shadow-blue-500/25" : ""} ${styles.border} border-2`}
                          >
                            {/* Event Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-12 h-12 ${styles.bg} rounded-lg flex items-center justify-center text-2xl transform hover:rotate-12 transition-transform duration-300`}
                                >
                                  {event.icon}
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2 mb-1">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span className={`text-sm font-medium ${styles.text}`}>{event.date}</span>
                                  </div>
                                  <span
                                    className={`inline-block px-3 py-1 text-xs font-medium ${styles.bg} ${styles.text} rounded-full`}
                                  >
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Event Content - Compact Version */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                              {event.subtitle}
                            </h4>

                            {/* Hover Details */}
                            {isActive && event.details && (
                              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg animate-fade-in-up">
                                <ul className="space-y-1">
                                  {event.details.map((detail, detailIndex) => (
                                    <li
                                      key={detailIndex}
                                      className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400"
                                    >
                                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Action Button */}
                            {event.link && (
                              <div className="mt-4">
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Timeline End Marker */}
                <div className="relative flex flex-col items-center">
                  {/* End marker card above timeline */}
                  <div className="absolute bottom-full mb-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <span className="text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                        Journey Continues...
                      </span>
                    </div>
                    {/* Connecting Line */}
                    <div className="flex justify-center mt-2">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    </div>
                  </div>

                  {/* End marker dot - exactly on timeline */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center z-20">
                      <div className="w-3 h-3 bg-white rounded-full animate-ping bg-gradient-to-r from-white/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        

      </div>
    </section>
  )
}
