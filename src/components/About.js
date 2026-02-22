// import React from 'react';
// import '../styles/components/About.css';

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <h2 className="section-title">About Me</h2>
//         <div className="about-content">
//           <div className="about-text">
//             <p>
//               Hello! I'm Rishith Sai Chowdary Chundru a passionate Software Developer and I am currently pursuing my Bachelor of Technology in Bachelor of Technology in Computer Science Engineering and I am in my third year of study. With a strong foundation in core subjects and hands-on experience in technical projects, I am focused on building practical skills that align with industry trends. My academic journey has been driven by curiosity, problem-solving, and a desire to contribute meaningfully to technological advancements.
//             </p>
//             <p>
//               Throughout my time in college, I have actively developed a so many projects that have expanded my technical knowledge and improved my teamwork and communication abilities. I have gained proficiency in Data Science, Full stack, Android App Development fields, and worked with tools and platforms relevant to my domain. These experiences have prepared me for real-world challenges and taught me how to work effectively in both independent and collaborative environments.
//             </p>
//             <p>
//               As I move forward, I am to get a Good Internship in a reputable tech company and engage in  industry-level projects that will further enhance my skills and sharpen my expertise. I am also passionate about continuous learning and staying updated with emerging technologies, and I look forward to opportunities that allow me to grow both technically and personally.
//             </p>
//             <div className="about-details">
//               <div className="detail">
//                 <span className="label">Name:</span>
//                 <span className="value">Chundru Rishith Sai Chowdary</span>
//               </div>
//               <div className="detail">
//                 <span className="label">Email:</span>
//                 <span className="value">rishithrishith1@gmail.com</span>
//               </div>
//               <div className="detail">
//                 <span className="label">Location:</span>
//                 <span className="value">Andhra Pradesh, India</span>
//               </div>
//               <div className="detail">
//                 <span className="label">Availability:</span>
//                 <span className="value">Student</span>
//               </div>
//             </div>
//             <a href="#contact" className="btn">Get In Touch</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect } from 'react';
import '../styles/components/About.css';

const About = () => {
  // Initialize 3D shapes when component mounts
  useEffect(() => {
    // Create floating 3D shapes
    const createShapes = () => {
      const shapesContainer = document.querySelector('.shapes-container');
      if (!shapesContainer) return;
      
      // Clear existing shapes
      shapesContainer.innerHTML = '';
      
      // Shape types
      const shapeTypes = ['cube', 'pyramid', 'sphere', 'cylinder', 'donut'];
      
      // Create shapes
      for (let i = 0; i < 12; i++) {
        const shape = document.createElement('div');
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `shape ${shapeType}`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 40 + 20;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Random opacity
        shape.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Random animation duration and delay
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 5;
        shape.style.animationDuration = `${duration}s`;
        shape.style.animationDelay = `${delay}s`;
        
        // Add to container
        shapesContainer.appendChild(shape);
      }
    };
    
    createShapes();
    
    // Recreate shapes on window resize
    window.addEventListener('resize', createShapes);
    return () => window.removeEventListener('resize', createShapes);
  }, []);

  return (
    <section id="about" className="about">
      <div className="shapes-container"></div>
      <div className="glass-panel"></div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src="/assets/images/profile.jpg" alt="Rishith Sai Chowdary" />
              <div className="frame-decoration top-left"></div>
              <div className="frame-decoration top-right"></div>
              <div className="frame-decoration bottom-left"></div>
              <div className="frame-decoration bottom-right"></div>
            </div>
            
            {/* <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Android</span>
              <span className="skill-tag">Data Science</span>
            </div> */}
          </div>
          
          <div className="about-text">
            <p>
              I am Rishith Sai Chowdary Chundru, a fourth-year B.Tech student in Computer Science Engineering with a strong foundation in software development. My academic and project experience spans Data Science, Full Stack Development, and Android App Development, equipping me with practical skills aligned with current industry demands. Currently, I am working as Software Engineering Intern at MckinleyRice, where I am gaining valuable experience in real-world projects and further honing my technical abilities. I am passionate about continuous learning and eager to contribute to innovative projects that drive technological advancements.
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
                <span className="value">Intern</span>
              </div>
            </div>
            
            <a href="#contact" className="btn pulse-btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
