import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import profilePic from "../assets/profile-picture.jpg"
import "./hero.css"

function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-frame">
        <div className="hero-card">
          <div className="hero">
            <img src={profilePic} alt="Profile picture of Andres Zaidan" className="hero-image" />
            <div className="hero-content">
              <p className="hero-greeting">Hi, I&apos;m</p>
              <h1 className="hero-name">Andres Zaidan</h1>
              <h2 className="hero-title">Software Engineer - Full Stack</h2>
              <p className="hero-text">Virginia Tech Computer Science Graduate focused on building impactful Web Applications.</p>
              <div className="hero-socials">
                <a href="https://www.instagram.com/zaidan_andres" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://github.com/andreszaidandev" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/andres-zaidan" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:andreszaidan02@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
