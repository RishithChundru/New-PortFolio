// import React from 'react';
// import '../styles/components/Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1 className="fade-in">
//             Hi, I'm <span className="highlight">Chundru Rishith Sai Chowdary</span>
//           </h1>
//           <h2 className="fade-in">Software Developer, Data Analyst & Android App Developer</h2>
          
//           <div className="hero-buttons fade-in">
//             <a
//               href="https://drive.google.com/file/d/1_zB50Q-RtFDgVBeXfpZwpms4ttTTauWU/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn"
//             >
//               Check Resume
//             </a>
//             <a href="#contact" className="btn btn-outline">Contact Me</a>
//           </div>
//         </div>
//         <div className="hero-image fade-in">
//           <div className="image-container">
//             <img src="/assets/images/profile.jpg" alt="Your Name" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  // Array of job titles to cycle through
  const jobTitles = [
    "Software Developer",
    "Data Analyst",
    "Android App Developer",
    "Full Stack Web Developer"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    // Speed settings
    const typingSpeed = 150; // Time between typing each character
    const deletingSpeed = 100; // Time between deleting each character
    const pauseBeforeDeleting = 1500; // Pause time before start deleting
    const pauseBeforeTyping = 500; // Pause time before start typing
    
    let timer;
    
    if (!isDeleting && displayText === jobTitles[currentIndex]) {
      // Finished typing the current word, pause before deletion
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDeleting);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      // Pause before typing the next word
      timer = setTimeout(() => {}, pauseBeforeTyping);
    } else {
      // Calculate the speed based on whether we're typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      
      timer = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1);
          } else {
            return jobTitles[currentIndex].substring(0, prev.length + 1);
          }
        });
      }, speed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, jobTitles]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="fade-in">
            Hi, I'm <span className="highlight">Chundru Rishith Sai Chowdary</span>
          </h1>
          <h2 className="fade-in">
            I am <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </h2>
          
          <div className="hero-buttons fade-in">
            <a
              href="https://drive.google.com/file/d/1_zB50Q-RtFDgVBeXfpZwpms4ttTTauWU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Check Resume
            </a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="image-container">
            <img src="/assets/images/profile.jpg" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
