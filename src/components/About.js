import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Rishith Sai Chowdary Chundru, a passionate web developer and Computer Science undergrad with a flair for building efficient, responsive, and scalable digital solutions. With hands-on experience in a range of technologies including HTML, CSS, JavaScript, PHP, React, Node.js, and SQL, I specialize in crafting web applications that are both user-friendly and performance-driven.
            </p>
            <p>
              I have a strong foundation in full-stack development and continuously sharpen my skills through problem-solving and practical implementation. I’ve tackled over 250 coding challenges across platforms and achieved a global top 5K rank in a LeetCode weekly contest — showcasing my commitment to technical excellence and continuous learning.
            </p>
            <p>
              Outside of coding, I enjoy exploring new technologies, contributing to open-source communities, and maintaining a healthy work-life balance through outdoor activities.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="label">Name:</span>
                <span className="value">Chundru Rishith Sai Chowdary</span>
              </div>
              <div className="detail">
                <span className="label">Email:</span>
                <span className="value">rishithrishith1@gmail.com</span>
              </div>
              <div className="detail">
                <span className="label">Location:</span>
                <span className="value">Andhra Pradesh, India</span>
              </div>
              <div className="detail">
                <span className="label">Availability:</span>
                <span className="value">Student</span>
              </div>
            </div>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


