"use client";
import Image from "next/image";
import type React from "react";
import { VideoPlayer } from "./video-player";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  VideoIcon,
  Code,
  Zap,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects";
import type { Project } from "@/lib/types";
export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });


  const categories = [
    { key: "all", label: "All Projects" },
    { key: "ai-ml", label: "AI/ML" },
    { key: "web", label: "Web Dev" },
    { key: "iot", label: "IoT/Hardware" },
    { key: "game", label: "Games" },
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(filter)
            : project.category === filter
        );

  const openModal = (
    project: Project,
    imageIndex = 0,
    event: React.MouseEvent
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelectedProject(project);
    setModalImageIdx(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setModalImageIdx(0);
    }, 400);
  };

  const handleModalPrev = () => {
    if (!selectedProject) return;
    const images = Array.isArray(selectedProject.image)
      ? selectedProject.image
      : [selectedProject.image];
    const totalMedia = images.length + (selectedProject.video ? 1 : 0);
    setModalImageIdx((prev) => (prev === 0 ? totalMedia - 1 : prev - 1));
  };

  const handleModalNext = () => {
    if (!selectedProject) return;
    const images = Array.isArray(selectedProject.image)
      ? selectedProject.image
      : [selectedProject.image];
    const totalMedia = images.length + (selectedProject.video ? 1 : 0);
    setModalImageIdx((prev) => (prev === totalMedia - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/25"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            AI/ML, web development, and IoT.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                filter === category.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const images = Array.isArray(project.image)
              ? project.image
              : [project.image];
            const hasMultipleImages = images.length > 1;

            return (
              <div
                key={project.id}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Enhanced Image Section with title overlay */}
                <div
                  className="h-64 relative overflow-hidden cursor-pointer group/image"
                  onClick={(e) => openModal(project, 0, e)}
                >
                  <Image
                    src={images[0] ?? ""}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:brightness-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover/image:opacity-60 transition-opacity duration-300"></div>

                  {/* Project title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Photo count badge */}
                  {hasMultipleImages && (
                    <div className="flex absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg">
                      <Images className="w-4 h-4 mr-1 my-auto text-gray-700 dark:text-gray-300" />
                      <h1>{images.length}</h1>
                    </div>
                  )}

                  {/* Click to view indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-300 bg-black/20">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
                      {!project.video ? (
                        <Images className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      ) : (
                        <VideoIcon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      )}
                    </div>
                  </div>

                  {/* View hint */}
                  {project.video && (
                    <div className="absolute flex  bottom-6 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full opacity-100 ">
                      View Video
                    </div>
                  )}
                </div>

                {/* Compact Content Section */}
                <div className="p-5 pb-20">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Stick action buttons to bottom, outside content */}
                <div className="flex gap-2 absolute left-0 right-0 bottom-0 p-5 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs border-gray-300 dark:border-gray-600"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      <h1 className="font-bold">Code</h1>
                    </a>
                  </Button>
                  <Button
                    onClick={(e) => openModal(project, 0, e)}
                    size="sm"
                    className="flex-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    <h1 className="font-bold">View More</h1>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal with Video Support */}
      {isModalOpen && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-400 ${
            isModalOpen ? "opacity-100 backdrop-blur-md" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",
          }}
          onClick={closeModal}
        >
          <div
            className={`relative rounded-3xl shadow-2xl max-w-7xl max-h-[95vh] w-full mx-4 overflow-hidden transition-all duration-400 ease-out ${
              isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`,
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
              backdropFilter: "blur(20px)",
              animation: isModalOpen
                ? "macOpen 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                : "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-1 right-1 z-20 text-red-100 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400 transition-colors duration-200 p-2 rounded-full bg-red-50 hover:bg-red-100 dark:bg-gray-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content - Split Layout */}
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
              {/* Media Section - Left/Top */}
              <div className="lg:basis-3/5 lg:max-w-2/3 flex-1 relative bg-black/5 dark:bg-black/20 flex items-center justify-center p-6">
                {(() => {
                  const images = Array.isArray(selectedProject.image)
                    ? selectedProject.image
                    : [selectedProject.image];
                  const hasVideo = selectedProject.video;
                  const totalMedia = (hasVideo ? 1 : 0) + images.length;
                  const isVideoActive = modalImageIdx === 0 && hasVideo;

                  return (
                    <>
                      {/* Navigation buttons */}
                      {totalMedia > 1 && (
                        <>
                          <button
                            onClick={handleModalPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-10"
                            aria-label="Previous media"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={handleModalNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-10"
                            aria-label="Next media"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}

                      {/* Media Content */}
                      <div className="relative max-w-full max-h-full flex items-center justify-center">
                        {isVideoActive && hasVideo ? (
                          /* Video Player */
                          <div className="w-full max-w-4xl">
                            <VideoPlayer
                              src={selectedProject.video ?? ""}
                              title={selectedProject.title}
                            />
                          </div>
                        ) : (
                          /* Image Display - Adjusted index for video-first ordering */
                          <Image
                            src={
                              images[
                                hasVideo ? modalImageIdx - 1 : modalImageIdx
                              ] ?? ""
                            }
                            alt={`${selectedProject.title} image ${
                              hasVideo ? modalImageIdx : modalImageIdx + 1
                            }`}
                            width={800}
                            height={600}
                            className="object-contain max-h-[70vh] max-w-full rounded-2xl shadow-2xl"
                            style={{ width: "auto", height: "auto" }}
                            sizes="(max-width: 768px) 90vw, 800px"
                          />
                        )}
                      </div>

                      {/* Media indicators - Video first, then images */}
                      {totalMedia > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                          {/* Video indicator first */}
                          {hasVideo && (
                            <button
                              key="video"
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                isVideoActive
                                  ? "bg-gradient-to-r from-red-600 to-pink-600 shadow-lg scale-125"
                                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                              }`}
                              onClick={() => setModalImageIdx(0)}
                              aria-label="Go to video"
                            />
                          )}
                          {/* Image indicators after video */}
                          {images.map((_, i) => (
                            <button
                              key={`img-${i}`}
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                (hasVideo
                                  ? modalImageIdx - 1
                                  : modalImageIdx) === i && !isVideoActive
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-125"
                                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                              }`}
                              onClick={() =>
                                setModalImageIdx(hasVideo ? i + 1 : i)
                              }
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Media counter - Updated for video-first ordering */}
                      {totalMedia > 1 && (
                        <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {isVideoActive ? (
                            <span className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              Video
                            </span>
                          ) : (
                            `${
                              hasVideo ? modalImageIdx : modalImageIdx + 1
                            } / ${hasVideo ? totalMedia - 1 : totalMedia}`
                          )}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Information Panel - Right/Bottom */}
              <div className="lg:basis-2/5 lg:max-w-1/3 lg:min-w-[350px] bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 lg:overflow-y-auto">
                {/* Project Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="mb-8 overflow-y-auto">
                  {/* Key Features */}
                  {typeof selectedProject.details === "object" &&
                    selectedProject.details?.features && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Key Features
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {selectedProject.details.features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {feature}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* IoT Components (for IoT projects) */}
                  {typeof selectedProject.details === "object" &&
                    selectedProject.details?.iot && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            IoT Components
                          </h3>
                        </div>
                        <div className="grid gap-2">
                          {selectedProject.details.iot.map(
                            (component, index) => (
                              <div
                                key={index}
                                className="p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                              >
                                <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">
                                  {component}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Tech Highlights */}
                  {typeof selectedProject.details == "object" &&
                    selectedProject.details?.techHighlights && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-purple-600" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Tech Highlights
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {typeof selectedProject.details == "object" &&
                            selectedProject.details.techHighlights.map(
                              (highlight, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 p-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {highlight}
                                  </span>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    )}

                  {/* Use Cases */}
                  {typeof selectedProject.details === "object" &&
                    selectedProject.details?.useCases && (
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Use Cases
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedProject.details.useCases.map(
                            (useCase, index) => (
                              <div
                                key={index}
                                className="p-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800"
                              >
                                <span className="text-sm text-indigo-700 dark:text-indigo-300">
                                  {useCase}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes macOpen {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
