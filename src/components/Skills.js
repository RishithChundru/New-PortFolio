import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/Skills.css';
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  
  // Category colors for different skill cards
  const categoryColors = {
    frontend: {
      background: 'linear-gradient(135deg, rgba(97, 219, 251, 0.08), rgba(97, 219, 251, 0.02))',
      border: '#61DBFB'
    },
    backend: {
      background: 'linear-gradient(135deg, rgba(60, 135, 58, 0.08), rgba(60, 135, 58, 0.02))',
      border: '#3c873a'
    },
    dataScience: {
      background: 'linear-gradient(135deg, rgba(48, 105, 152, 0.08), rgba(48, 105, 152, 0.02))',
      border: '#306998'
    },
    appdevelopment: {
      background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 140, 0, 0.02))',
      border: '#FF8C00'
    },
    programming: {
      background: 'linear-gradient(135deg, rgba(73, 101, 163, 0.08), rgba(73, 101, 163, 0.02))',
      border: '#4965A3'
    },
    tools: {
        background: 'linear-gradient(135deg, rgba(0, 122, 204, 0.08), rgba(0, 111, 204, 0.02))',
        border: '#007ACC'
      }
  };
  
  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", percentage: 95, color: "#e34c26" },
    { name: "CSS3", icon: "fab fa-css3-alt", percentage: 95, color: "#264de4" },
    { name: "JavaScript", icon: "fab fa-js", percentage: 70, color: "#f0db4f" },
    { name: "React.js", icon: "fab fa-react", percentage: 70, color: "#61DBFB" },
    { name: "Tailwind CSS", icon: "fab fa-css3", percentage: 85, color: "#38B2AC" }
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: "fab fa-node-js", percentage: 70, color: "#3c873a" },
    { name: "Express", icon: "fas fa-server", percentage: 70, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 75, color: "#3c873a" },
  ];
  
  const dataScienceSkills = [
    { name: "Python", icon: "fab fa-python", percentage: 65, color: "#306998" },
    { name: "R Language", icon: "fab fa-r-project", percentage: 90, color: "#276DC3" },
    { name: "Excel", icon: "fas fa-file-excel", percentage: 95, color: "#217346" },
    { name: "Tableau", icon: "fas fa-chart-bar", percentage: 85, color: "#E97627" },
    { name: "Power BI", icon: "fas fa-chart-pie", percentage: 80, color: "#F2C811" },
    { name: "Hadoop", icon: "fas fa-database", percentage: 75, color: "#FFD119" }
  ];

  const appDevelopmentSkills = [
    { name: "Kotlin", icon: "fas fa-code", percentage: 80, color: "#A97BFF" },
    { name: "Android Studio", icon: "fas fa-laptop-code", percentage: 75, color: "#3DDC84" },
    { name: "Firebase", icon: "fas fa-fire", percentage: 85, color: "#FFCA28" }
  ];
  
  const programmingLanguages = [
    { name: "C++", icon: "fas fa-code", percentage: 85, color: "#004482" },
    { name: "Java", icon: "fab fa-java", percentage: 80, color: "#EA2D2E" },
    { name: "C", icon: "fas fa-code", percentage: 80, color: "#5C6BC0" },
    { name: "Python", icon: "fab fa-python", percentage: 80, color: "#306998" }
  ];

  const tools = [
        { name: "VS Code", icon: "fas fa-code", percentage: 90, color: "#007ACC" },
        { name: "Tableau Desktop", icon: "fas fa-chart-bar", percentage: 80, color: "#E97627" },
        { name: "R Studio", icon: "fas fa-project-diagram", percentage: 75, color: "#276DC3" },
        { name: "IntelliJ IDEA", icon: "fas fa-code", percentage: 80, color: "#000000" },
        { name: "Power BI", icon: "fas fa-chart-pie", percentage: 70, color: "#F2C811" },
        { name: "Git", icon: "fab fa-git-alt", percentage: 80, color: "#6A1B9A" }
      ];

  
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'fas fa-layer-group' },
    { id: 'programming', name: 'Programming', icon: 'fas fa-laptop-code' },
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-code' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'dataScience', name: 'Data Science', icon: 'fas fa-flask' },
    { id: 'appdevelopment', name: 'App Development', icon: 'fas fa-brain' },
    { id: 'tools', name: 'Tools', icon: 'fas fa-toolbox' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Function to check if a category should be displayed
  const shouldDisplayCategory = (categoryId) => {
    return activeCategory === 'all' || activeCategory === categoryId;
  };

  // const renderCircularSkills = (skillSet, delay = 0) => {
  //   return (
  //     <div className="skills-grid">
  //       {skillSet.map((skill, index) => (
  //         <div 
  //           className="skill-circular" 
  //           key={index}
  //           style={{
  //             animationDelay: isVisible ? `${delay + index * 0.1}s` : '0s'
  //           }}
  //         >
  //           <div 
  //             className="skill-circle" 
  //             style={{ 
  //               background: `conic-gradient(${skill.color} ${skill.percentage}%, #f0f0f0 0)` 
  //             }}
  //           >
  //             <div className="skill-inner-circle">
  //               <i className={skill.icon} style={{ color: skill.color }}></i>
  //             </div>
  //           </div>
  //           <div className="skill-circular-info">
  //             <div className="skill-circular-name">{skill.name}</div>
  //             <div className="skill-circular-percentage" style={{ color: skill.color }}>
  //               {skill.percentage}%
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  const renderCircularSkills = (skillSet, delay = 0) => {
  return (
    <div className="skills-grid">
      {skillSet.map((skill, index) => (
        <div 
          className="skill-circular" 
          key={index}
          style={{
            animationDelay: isVisible ? `${delay + index * 0.1}s` : '0s'
          }}
        >
          <div 
            className="skill-circle" 
            style={{ 
              background: `conic-gradient(${skill.color} ${skill.percentage}%, #f0f0f0 0)` 
            }}
          >
            <div className="skill-inner-circle">
              {typeof skill.icon === "string" ? (
                <i className={skill.icon} style={{ color: skill.color }}></i>
              ) : (
                <span style={{ color: skill.color, fontSize: "1.5rem" }}>
                  {skill.icon}
                </span>
              )}
            </div>
          </div>
          <div className="skill-circular-info">
            <div className="skill-circular-name">{skill.name}</div>
            <div className="skill-circular-percentage" style={{ color: skill.color }}>
              {skill.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-filter">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="skills-container">
          {shouldDisplayCategory('programming') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`}
              style={{ 
                background: categoryColors.programming.background,
                animationDelay: '0.05s'
              }}
              data-category="programming"
            >
              <h3 className="category-title">
                <i className="fas fa-laptop-code category-icon"></i>
                Programming Languages
              </h3>
              {renderCircularSkills(programmingLanguages, 0.2)}
            </div>
          )}
          
          {shouldDisplayCategory('frontend') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`}
              style={{ 
                background: categoryColors.frontend.background,
                animationDelay: '0.1s'
              }}
              data-category="frontend"
            >
              <h3 className="category-title">
                <i className="fas fa-code category-icon"></i>
                Frontend Development
              </h3>
              {renderCircularSkills(frontendSkills, 0.3)}
            </div>
          )}
          
          {shouldDisplayCategory('backend') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.backend.background,
                animationDelay: '0.2s'
              }}
              data-category="backend"
            >
              <h3 className="category-title">
                <i className="fas fa-server category-icon"></i>
                Backend Development
              </h3>
              {renderCircularSkills(backendSkills, 0.5)}
            </div>
          )}
          
          {shouldDisplayCategory('dataScience') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.dataScience.background,
                animationDelay: '0.3s'
              }}
              data-category="dataScience"
            >
              <h3 className="category-title">
                <i className="fas fa-flask category-icon"></i>
                Data Science
              </h3>
              {renderCircularSkills(dataScienceSkills, 0.7)}
            </div>
          )}

            
          {shouldDisplayCategory('appdevelopment') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.appdevelopment.background,
                animationDelay: '0.7s'
              }}
              data-category="appdevelopment"
            >
              <h3 className="category-title">
                <i className="fas fa-brain category-icon"></i>
                App Development
              </h3>
              {renderCircularSkills(appDevelopmentSkills, 1.5)}
            </div>
          )}

    {shouldDisplayCategory('tools') && (
      <div 
        className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
        style={{ 
          background: categoryColors.tools.background,
          animationDelay: '1s'
        }}
        data-category="tools"
      >
        <h3 className="category-title">
          <i className="fas fa-toolbox category-icon"></i>
          Tools
        </h3>
        <div className="skills-list">
          {renderCircularSkills(tools, 1.9)}
        </div>
      </div>
    )}
        </div>
      </div>
    </section>
  );
};

export default Skills;