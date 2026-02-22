import React, { useEffect } from 'react';
import '../styles/components/Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const experienceData = [
    {
      id: 1,
      position: "Software Engineering Intern",
      company: "Mckinley Rice",
      duration: "2024 - Present",
      technologies: ["Next.js", "Nest.js", "Zustand", "MongoDB"],
      achievements: [
        "Contributed to a scalable SaaS platform, worked across search, campaign management, premium features, and third-party integrations in close collaboration with product teams.",
        "Architected and delivered advanced search features, implemented premium gatekeeping frameworks, built manual filter modal, integrated Outlook and encryption tools.",
        "Delivered 20+ production-ready enhancements, contributing to 60–70% of feature development across search and campaign modules."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Experience</h2>
        
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div 
              className="experience-item" 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="experience-icon">
                <div className="icon-circle">
                  <div className="icon-pulse"></div>
                </div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{item.position}</h3>
                    <div className="experience-company">{item.company}</div>
                  </div>
                  <div className="experience-duration">{item.duration}</div>
                </div>
                
                <div className="experience-tech">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <ul className="experience-achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-card-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
