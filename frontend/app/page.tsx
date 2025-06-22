import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificatesSection from "@/components/certificates-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import TimelineSection from "@/components/timeline-section"
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Vivek Prakash. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
