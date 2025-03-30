import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <h2>Hello, I'm KulaPragalyaa</h2>
        <p>Web Developer & Designer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a dedicated web developer with a strong passion for crafting intuitive, responsive, and user-centric websites.
          With expertise in front-end development, I specialize in creating seamless user experiences using modern technologies such as HTML, CSS, JavaScript, and React.
          My goal is to build clean, efficient, and scalable web applications that meet both user needs and business objectives, while continuously staying up-to-date with industry trends to ensure the highest quality of work.
        </p>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <h3>HTML</h3>
            <div className="skill-level">Advanced</div>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <div className="skill-level">Intermediate</div>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <div className="skill-level">Advanced</div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <div className="skill-level">Intermediate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Portfolio Website</h3>
          <p>A responsive portfolio website built with HTML, CSS, and JavaScript.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2: Parallax website</h3>
          <p>A simple Parallax website using with HTML, CSS, and JavaScript.</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form id="contact-form">
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="scroll-to-top" title="Go to top" onClick={scrollToTop}>↑</button>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
