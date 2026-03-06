"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import "./animated-testimonials.css"

export type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
  href?: string
  github?: string
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
  className?: string
}) => {
  const [active, setActive] = useState(0)
  const [autoplayResetKey, setAutoplayResetKey] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
    if (autoplay) {
      setAutoplayResetKey((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    if (autoplay) {
      setAutoplayResetKey((prev) => prev + 1)
    }
  }

  const isActive = (index: number) => index === active

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length, autoplayResetKey])

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  if (!testimonials.length) return null

  return (
    <div
      className={cn(
        "animated-testimonials",
        className
      )}
    >
      <div className="animated-testimonials-layout">
        <div className="animated-testimonials-media-wrap">
          <div className="animated-testimonials-media-stage">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="animated-testimonials-media-card"
                  style={{
                    pointerEvents: isActive(index) ? "auto" : "none",
                  }}
                >
                  {testimonial.href ? (
                    <a
                      href={testimonial.href}
                      target="_blank"
                      rel="noreferrer"
                      className="animated-testimonials-media-link"
                      aria-label={`Open ${testimonial.name} website`}
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        draggable={false}
                        className="animated-testimonials-media-image"
                      />
                    </a>
                  ) : (
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="animated-testimonials-media-image"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="animated-testimonials-copy">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <p className="animated-testimonials-eyebrow">
              Featured Work
            </p>

            <h3 className="animated-testimonials-title">
              {testimonials[active].name}
            </h3>

            <p className="animated-testimonials-designation">
              {testimonials[active].designation}
            </p>

            <motion.p className="animated-testimonials-quote">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="animated-testimonials-word"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="animated-testimonials-controls">
            <button
              onClick={handlePrev}
              className="animated-testimonials-control-btn animated-testimonials-control-btn-prev"
              aria-label="Previous project"
            >
              <IconArrowLeft className="animated-testimonials-control-icon" />
            </button>

            <button
              onClick={handleNext}
              className="animated-testimonials-control-btn animated-testimonials-control-btn-next"
              aria-label="Next project"
            >
              <IconArrowRight className="animated-testimonials-control-icon" />
            </button>
            <div className="animated-testimonials-links">
              {testimonials[active].github ? (
                <a
                  href={testimonials[active].github}
                  target="_blank"
                  rel="noreferrer"
                  className="animated-testimonials-link"
                >
                  View Github
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
