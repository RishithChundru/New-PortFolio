import React, { useEffect } from 'react';
import '../styles/components/Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const educationData = [
    {
            id: 1,
            degree: "Bachelor of Technology in Computer Science",
            institution: "Lovely Professional University",
            location: "Punjab, India",
            duration: "Since 2022",
            description: " CURRENT CGPA: 8.18"
          },
          {
            id: 2,
            degree: "Higher Secondary Education",
            institution: "Sasi Junior College",
            location: "Andhra Pradesh, India",
            duration: "2020 - 2022",
            description: "PERCENTAGE: 95.6"
          },
          {
            id: 3,
            degree: "Matriculation",
            institution: "Roots School of Essential Faculties",
            location: "Andhra Pradesh, India",
            duration: "2019 - 2020",
            description: "PERCENTAGE: 97"
          }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div 
              className="education-item" 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="education-icon">
                <div className="icon-circle">
                  <div className="icon-pulse"></div>
                </div>
              </div>
              <div className="education-content">
                <div className="education-date">{item.duration}</div>
                <h3 className="education-degree">{item.degree}</h3>
                <div className="education-institution">
                  {item.institution} | {item.location}
                </div>
                <p className="education-description">{item.description}</p>
              </div>
              <div className="education-card-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;