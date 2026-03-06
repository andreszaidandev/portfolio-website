"use client"

import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials"
import "./projects.css"

const projects: Testimonial[] = [
  {
    name: "Plan of Study Digitalization",
    designation: "MERN + MySQL - Virginia Tech research/project platform",
    quote:
      "A platform that moved the graduate Plan of Study process from paper and email into a centralized web application. Designed to support 1000+ students and 100+ advisors with cleaner workflows, easier updates, and a much better user experience.",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Financial Tracker",
    designation: "Python + Streamlit + MySQL",
    quote:
      "A financial tracking application built for database management coursework, focused on organizing user, account, and transaction data into a practical system. One of the biggest wins was restructuring the codebase into clearer query layers and a more maintainable project layout.",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Hand-Tracking Camera",
    designation: "React + TensorFlow.js + WebGL",
    quote:
      "An interactive camera-based web app that uses hand tracking and pinch gestures for capture interactions. Built with React and TensorFlow.js, with work focused on real-time overlays, gesture detection, and making the experience feel smooth and responsive in the browser.",
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Personal Website",
    designation: "Vite + React + Tailwind",
    quote:
      "A personal portfolio website built to showcase projects, education, and experience in a clean and modern format. The goal was to create something that feels polished, easy to navigate, and flexible enough to grow alongside new work and experiments.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
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
