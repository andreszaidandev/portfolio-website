"use client"

import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials"
import planOfStudyImage from "@/assets/PlanOfStudy.jpg"
import PersonalWebsiteImage from "@/assets/PersonalWebsite.jpeg"
import HandTrackingImage from "@/assets/HandTrackingCamera.jpeg"
import FinacialTrackerImage from "@/assets/FinanceImage.png"
import "./projects.css"

const projects: Testimonial[] = [
  {
    name: "Plan of Study Digitalization",
    designation: "MERN + MySQL - Virginia Tech research/project platform",
    quote:
      "A platform that moved the graduate Plan of Study process from paper and email into a centralized web application. Designed to support 1000+ students and 100+ advisors with cleaner workflows, easier updates, and a much better user experience.",
    src: planOfStudyImage,
    github: "https://github.com/andreszaidandev/Plan-of-Study",
  },
  {
    name: "Financial Tracker",
    designation: "Python + Streamlit + MySQL",
    quote:
      "A financial tracking application built for database management coursework, focused on organizing user, account, and transaction data into a practical system. One of the biggest wins was restructuring the codebase into clearer query layers and a more maintainable project layout.",
    src: FinacialTrackerImage,
  },
  {
    name: "Hand-Tracking Camera",
    designation: "React + TensorFlow.js + WebGL",
    quote:
      "An interactive camera-based web app that uses hand tracking and pinch gestures for capture interactions. Built with React and TensorFlow.js, with work focused on real-time overlays, gesture detection, and making the experience feel smooth and responsive in the browser.",
    src: HandTrackingImage,
    href: "https://handtracking-camera.vercel.app/",
    github: "https://github.com/andreszaidandev/Handtracking-camera",
  },
  {
    name: "Personal Website",
    designation: "Vite + React + Tailwind",
    quote:
      "A personal portfolio website built to showcase projects, education, and experience in a clean and modern format. The goal was to create something that feels polished, easy to navigate, and flexible enough to grow alongside new work and experiments.",
    src: PersonalWebsiteImage,
    href: "https://andreszaidan.com",
    github: "https://github.com/andreszaidandev/portfolio-website",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p className="projects-eyebrow">My Work</p>

        <h2 className="projects-title">Projects</h2>
      </div>

      <AnimatedTestimonials testimonials={projects} autoplay />
    </section>
  )
}
