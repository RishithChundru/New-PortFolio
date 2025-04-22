// import React, { useState, useEffect, useRef } from 'react';
// import '../styles/components/Skills.css';

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [isVisible, setIsVisible] = useState(false);
//   const skillsRef = useRef(null);
  
//   const frontendSkills = [
//     { name: "HTML5", icon: "fab fa-html5", percentage: 95, color: "#e34c26" },
//     { name: "CSS3", icon: "fab fa-css3-alt", percentage: 90, color: "#264de4" },
//     { name: "JavaScript", icon: "fab fa-js", percentage: 70, color: "#f0db4f" },
//     { name: "React.js", icon: "fab fa-react", percentage: 60, color: "#61DBFB" }
//   ];
  
//   const backendSkills = [
//     { name: "Node.js", icon: "fab fa-node-js", percentage: 70, color: "#3c873a" },
//     { name: "Express", icon: "fas fa-server", percentage: 70, color: "#000000" },
//     { name: "PHP", icon: "fab fa-php", percentage: 75, color: "#777BB3" }
//   ];
  
//   const otherSkills = [
//     { name: "Git/GitHub", icon: "fab fa-git-alt", percentage: 85, color: "#F1502F" },
//     { name: "Responsive Design", icon: "fas fa-mobile-alt", percentage: 90, color: "#FF6B6B" },
//     { name: "UI/UX Design", icon: "fas fa-pencil-ruler", percentage: 75, color: "#FF9A8B" }
//   ];

//   const dataScienceSkills = [
//     { name: "Python", icon: "fab fa-python", percentage: 70, color: "#306998" },
//     { name: "R Language", icon: "fab fa-r-project", percentage: 90, color: "#276DC3" },
//     { name: "Machine Learning", icon: "fas fa-brain", percentage: 75, color: "#FF8C00" }
//   ];

//   const appDevelopmentSkills = [
//     { name: "Kotlin", icon: "fas fa-code", percentage: 80, color: "#A97BFF" },
//     { name: "Android Studio", icon: "fas fa-laptop-code", percentage: 75, color: "#3DDC84" },
//     { name: "Firebase", icon: "fas fa-fire", percentage: 85, color: "#FFCA28" }
//   ];

//   const tools = [
//     { name: "VS Code", icon: "fas fa-code", percentage: 90, color: "#007ACC" },
//     { name: "Tableau Desktop", icon: "fas fa-chart-bar", percentage: 80, color: "#E97627" },
//     { name: "R Studio", icon: "fas fa-project-diagram", percentage: 75, color: "#276DC3" },
//     { name: "MS Excel", icon: "fas fa-file-excel", percentage: 80, color: "#217346" },
//     { name: "Power BI", icon: "fas fa-chart-pie", percentage: 70, color: "#F2C811" },
//     { name: "Dashboard Design", icon: "fas fa-tachometer-alt", percentage: 80, color: "#6A1B9A" }
//   ];
  
//   const categories = [
//     { id: 'all', name: 'All Skills', icon: 'fas fa-layer-group' },
//     { id: 'frontend', name: 'Frontend', icon: 'fas fa-code' },
//     { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
//     { id: 'data', name: 'Data Science', icon: 'fas fa-chart-line' },
//     { id: 'app', name: 'App Dev', icon: 'fas fa-mobile-alt' },
//     { id: 'tools', name: 'Tools', icon: 'fas fa-toolbox' },
//     { id: 'other', name: 'Other', icon: 'fas fa-tools' }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }
    
//     return () => {
//       if (skillsRef.current) {
//         observer.unobserve(skillsRef.current);
//       }
//     };
//   }, []);

//   // Function to check if a category should be displayed
//   const shouldDisplayCategory = (categoryId) => {
//     return activeCategory === 'all' || activeCategory === categoryId;
//   };

//   const renderSkillSet = (skillSet, delay = 0) => {
//     return skillSet.map((skill, index) => (
//       <div 
//         className="skill" 
//         key={index}
//         style={{
//           animationDelay: isVisible ? `${delay + index * 0.1}s` : '0s'
//         }}
//       >
//         <div className="skill-info">
//           <span className="skill-icon-container">
//             <i className={skill.icon} style={{ color: skill.color }}></i>
//             <span className="skill-name">{skill.name}</span>
//           </span>
//           <span className="skill-percentage">{skill.percentage}%</span>
//         </div>
//         <div className="skill-bar">
//           <div 
//             className="skill-progress" 
//             style={{ 
//               width: isVisible ? `${skill.percentage}%` : '0%', 
//               backgroundColor: skill.color,
//               transitionDelay: isVisible ? `${delay + index * 0.2}s` : '0s'
//             }}
//           ></div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <section id="skills" className="skills" ref={skillsRef}>
//       <div className="container">
//         <h2 className="section-title">My Skills</h2>
        
//         <div className="skills-filter">
//           {categories.map((category) => (
//             <button 
//               key={category.id}
//               className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category.id)}
//             >
//               <i className={category.icon}></i>
//               <span>{category.name}</span>
//             </button>
//           ))}
//         </div>
        
//         <div className="skills-container">
//           {shouldDisplayCategory('frontend') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`}>
//               <h3 className="category-title">
//                 <i className="fas fa-code category-icon"></i>
//                 Frontend Development
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(frontendSkills, 0.3)}
//               </div>
//             </div>
//           )}
          
//           {shouldDisplayCategory('backend') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
//               <h3 className="category-title">
//                 <i className="fas fa-server category-icon"></i>
//                 Backend Development
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(backendSkills, 0.5)}
//               </div>
//             </div>
//           )}
          
//           {shouldDisplayCategory('data') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
//               <h3 className="category-title">
//                 <i className="fas fa-chart-line category-icon"></i>
//                 Data Science Skills
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(dataScienceSkills, 0.7)}
//               </div>
//             </div>
//           )}

//           {shouldDisplayCategory('app') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
//               <h3 className="category-title">
//                 <i className="fas fa-mobile-alt category-icon"></i>
//                 App Development
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(appDevelopmentSkills, 0.9)}
//               </div>
//             </div>
//           )}

//           {shouldDisplayCategory('other') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
//               <h3 className="category-title">
//                 <i className="fas fa-tools category-icon"></i>
//                 Other Skills
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(otherSkills, 1.1)}
//               </div>
//             </div>
//           )}

//           {shouldDisplayCategory('tools') && (
//             <div className={`skills-category ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '1s' }}>
//               <h3 className="category-title">
//                 <i className="fas fa-toolbox category-icon"></i>
//                 Tools
//               </h3>
//               <div className="skills-list">
//                 {renderSkillSet(tools, 1.3)}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="skills-particles">
//         {[...Array(15)].map((_, i) => (
//           <div key={i} className="particle"></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/Skills.css';

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
    data: {
      background: 'linear-gradient(135deg, rgba(48, 105, 152, 0.08), rgba(48, 105, 152, 0.02))',
      border: '#306998'
    },
    app: {
      background: 'linear-gradient(135deg, rgba(169, 123, 255, 0.08), rgba(169, 123, 255, 0.02))',
      border: '#A97BFF'
    },
    other: {
      background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.08), rgba(255, 107, 107, 0.02))',
      border: '#FF6B6B'
    },
    tools: {
      background: 'linear-gradient(135deg, rgba(0, 122, 204, 0.08), rgba(0, 122, 204, 0.02))',
      border: '#007ACC'
    }
  };
  
  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", percentage: 95, color: "#e34c26" },
    { name: "CSS3", icon: "fab fa-css3-alt", percentage: 90, color: "#264de4" },
    { name: "JavaScript", icon: "fab fa-js", percentage: 70, color: "#f0db4f" },
    { name: "React.js", icon: "fab fa-react", percentage: 60, color: "#61DBFB" }
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: "fab fa-node-js", percentage: 70, color: "#3c873a" },
    { name: "Express", icon: "fas fa-server", percentage: 70, color: "#000000" },
    { name: "PHP", icon: "fab fa-php", percentage: 75, color: "#777BB3" }
  ];
  
  const otherSkills = [
    { name: "Git/GitHub", icon: "fab fa-git-alt", percentage: 85, color: "#F1502F" },
    { name: "Responsive Design", icon: "fas fa-mobile-alt", percentage: 90, color: "#FF6B6B" },
    { name: "UI/UX Design", icon: "fas fa-pencil-ruler", percentage: 75, color: "#FF9A8B" }
  ];

  const dataScienceSkills = [
    { name: "Python", icon: "fab fa-python", percentage: 70, color: "#306998" },
    { name: "R Language", icon: "fab fa-r-project", percentage: 90, color: "#276DC3" },
    { name: "Machine Learning", icon: "fas fa-brain", percentage: 75, color: "#FF8C00" }
  ];

  const appDevelopmentSkills = [
    { name: "Kotlin", icon: "fas fa-code", percentage: 80, color: "#A97BFF" },
    { name: "Android Studio", icon: "fas fa-laptop-code", percentage: 75, color: "#3DDC84" },
    { name: "Firebase", icon: "fas fa-fire", percentage: 85, color: "#FFCA28" }
  ];

  const tools = [
    { name: "VS Code", icon: "fas fa-code", percentage: 90, color: "#007ACC" },
    { name: "Tableau Desktop", icon: "fas fa-chart-bar", percentage: 80, color: "#E97627" },
    { name: "R Studio", icon: "fas fa-project-diagram", percentage: 75, color: "#276DC3" },
    { name: "MS Excel", icon: "fas fa-file-excel", percentage: 80, color: "#217346" },
    { name: "Power BI", icon: "fas fa-chart-pie", percentage: 70, color: "#F2C811" },
    { name: "Dashboard Design", icon: "fas fa-tachometer-alt", percentage: 80, color: "#6A1B9A" }
  ];
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'fas fa-layer-group' },
    { id: 'frontend', name: 'Frontend', icon: 'fas fa-code' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'data', name: 'Data Science', icon: 'fas fa-chart-line' },
    { id: 'app', name: 'App Dev', icon: 'fas fa-mobile-alt' },
    { id: 'tools', name: 'Tools', icon: 'fas fa-toolbox' },
    { id: 'other', name: 'Other', icon: 'fas fa-tools' }
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

  const renderSkillSet = (skillSet, delay = 0) => {
    return skillSet.map((skill, index) => (
      <div 
        className="skill" 
        key={index}
        style={{
          animationDelay: isVisible ? `${delay + index * 0.1}s` : '0s'
        }}
      >
        <div className="skill-info">
          <span className="skill-icon-container">
            <i className={skill.icon} style={{ color: skill.color }}></i>
            <span className="skill-name">{skill.name}</span>
          </span>
          <span className="skill-percentage">{skill.percentage}%</span>
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ 
              width: isVisible ? `${skill.percentage}%` : '0%', 
              backgroundColor: skill.color,
              transitionDelay: isVisible ? `${delay + index * 0.2}s` : '0s'
            }}
          ></div>
        </div>
      </div>
    ));
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
              <div className="skills-list">
                {renderSkillSet(frontendSkills, 0.3)}
              </div>
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
              <div className="skills-list">
                {renderSkillSet(backendSkills, 0.5)}
              </div>
            </div>
          )}
          
          {shouldDisplayCategory('data') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.data.background,
                animationDelay: '0.4s'
              }}
              data-category="data"
            >
              <h3 className="category-title">
                <i className="fas fa-chart-line category-icon"></i>
                Data Science Skills
              </h3>
              <div className="skills-list">
                {renderSkillSet(dataScienceSkills, 0.7)}
              </div>
            </div>
          )}

          {shouldDisplayCategory('app') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.app.background,
                animationDelay: '0.6s'
              }}
              data-category="app"
            >
              <h3 className="category-title">
                <i className="fas fa-mobile-alt category-icon"></i>
                App Development
              </h3>
              <div className="skills-list">
                {renderSkillSet(appDevelopmentSkills, 0.9)}
              </div>
            </div>
          )}

          {shouldDisplayCategory('other') && (
            <div 
              className={`skills-category ${isVisible ? 'animate-in' : ''}`} 
              style={{ 
                background: categoryColors.other.background,
                animationDelay: '0.8s'
              }}
              data-category="other"
            >
              <h3 className="category-title">
                <i className="fas fa-tools category-icon"></i>
                Other Skills
              </h3>
              <div className="skills-list">
                {renderSkillSet(otherSkills, 1.1)}
              </div>
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
                {renderSkillSet(tools, 1.3)}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="skills-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  );
};

export default Skills;