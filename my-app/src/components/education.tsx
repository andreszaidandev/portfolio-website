import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Code2, GraduationCap, Medal, School } from "lucide-react"
import "./education.css"

interface TimelineEntry {
  title: string
  content: ReactNode
}

function Timeline({ data }: { data: TimelineEntry[] }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (!contentRef.current) return
      setHeight(contentRef.current.getBoundingClientRect().height)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => {
      window.removeEventListener("resize", updateHeight)
    }
  }, [data.length])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section className="education-timeline" ref={containerRef}>

      <div ref={contentRef} className="education-timeline-content">
        {data.map((item) => (
          <div key={item.title} className="timeline-item">
            <div className="timeline-item-label-wrap">
              <div className="timeline-item-dot-wrap">
                <div className="timeline-item-dot" />
              </div>
              <h3 className="timeline-item-year-desktop">{item.title}</h3>
            </div>

            <div className="timeline-item-body">
              <h3 className="timeline-item-year-mobile">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        <div style={{ height: `${height}px` }} className="timeline-line-track">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-line-progress"
          />
        </div>
      </div>
    </section>
  )
}

interface EducationCardProps {
  icon: ReactNode
  eyebrow: string
  title: string
  subtitle?: string
  meta?: string
  bullets: string[]
}

function EducationCard({ icon, eyebrow, title, subtitle, meta, bullets }: EducationCardProps) {
  return (
    <article className="education-card">
      <div className="education-card-header">
        <div className="education-card-icon">{icon}</div>
        <div>
          <p className="education-card-eyebrow">{eyebrow}</p>
          <h4 className="education-card-title">{title}</h4>
        </div>
      </div>

      {subtitle ? <p className="education-card-subtitle">{subtitle}</p> : null}
      {meta ? <p className="education-card-meta">{meta}</p> : null}

      <div className="education-card-bullets">
        {bullets.map((bullet) => (
          <div key={bullet} className="education-card-bullet">
            {bullet}
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Education() {
  const data: TimelineEntry[] = [
    {
      title: "2023-2025",
      content: (
        <EducationCard
          icon={<GraduationCap />}
          eyebrow="Bachelors Degree"
          title="Virginia Tech"
          subtitle="B.S. in Computer Science"
          meta="Minor in Mathematics - Graduated Magna Cum Laude - 3.67 GPA - Dean's List - December 2025"
          bullets={[
            "Built a strong foundation in software engineering, algorithms, databases, and systems.",
            "Worked on academic and team-based projects focused on real-world impact.",
            "Combined technical depth with mathematical problem solving through a Math minor.",
          ]}
        />
      ),
    },
    {
      title: "Highlights",
      content: (
        <div className="education-stack">
          <EducationCard
            icon={<Medal />}
            eyebrow="Recognition"
            title="Academic Achievement"
            subtitle="Magna Cum Laude"
            bullets={[
              "Graduated Magna Cum Laude while taking on challenging computer science and mathematics coursework.",
              "Consistently maintained strong academic performance throughout college.",
            ]}
          />
          <EducationCard
            icon={<Medal />}
            eyebrow="Recognition"
            title="VTURCS 2025"
            subtitle="2nd Place People’s Choice · 3rd Place Overall"
            bullets={[
              "Recognized with multiple awards for our capstone project at VTURCS 2025.",
              "Created a Plan of Study platform for the Virginia Tech Computer Science graduate department.",
            ]}
          />
        <EducationCard
          icon={<Code2 />}
          eyebrow="Focus Areas"
          title="Relevant Coursework"
          subtitle="Software Engineering, Databases, Algorithms, AI"
          bullets={[
            "Built a strong foundation across both core computer science theory and full-stack development.",
            "Courseworkincluded data structures and algorithms, database management, computer systems, web development, and a software engineering capstone.",
          ]}
        />
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div className="education-stack">
          <EducationCard
            icon={<School />}
            eyebrow="Associates Degree"
            title="Broward College"
            subtitle="Associate Degree"
            meta="4.0 GPA"
            bullets={[
              "Built the academic foundation that prepared me for my studies at Virginia Tech.",
              "Graduated with a perfect 4.0 GPA while getting ready for more rigorous coursework in computer science and mathematics.",
            ]}
          />
        </div>
      ),
    },
  ]

  return (
    <section className="education-page" id="education">
      <div className="education-page-header">
        <h1 className="education-page-title">Education</h1>
      </div>
      <Timeline data={data} />
    </section>
  )
}
