import React, { useState, useEffect } from 'react';
import '../styles/components/Hero.css';
import { Code, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  // Array of job titles to cycle through
  const jobTitles = [
    "Software Developer",
    "Full Stack Web Developer",
    "Android App Developer",
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

  // Initialize particle effect
  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random size (small)
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section className="hero">
      <div className="particles-container"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="fade-in">
            Hi, I'm <span className="highlight">Chundru Rishith Sai Chowdary</span>
          </h1>
          <h2 className="fade-in">
            I am <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </h2>
          
          <div className="coding-platforms fade-in">
            <a 
              href="https://leetcode.com/u/RishithChundru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-link"
            >
              <div className="platform-icon leetcode">
                <Code size={20} />
              </div>
              <span>LeetCode</span>
            </a>
            
            <a 
              href="https://www.geeksforgeeks.org/user/rishithre437/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-link"
            >
              <div className="platform-icon geeksforgeeks">
                <BookOpen size={20} />
              </div>
              <span>GeeksForGeeks</span>
            </a>
            
            <a 
              href="https://www.naukri.com/code360/profile/8a53db60-d7ca-4785-ac31-c1d3b6c5b29d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-link"
            >
              <div className="platform-icon codingninjas">
                <Award size={20} />
              </div>
              <span>Coding Ninjas</span>
            </a>
          </div>
          
          <div className="hero-buttons fade-in">
            <a
              href="https://drive.google.com/file/d/1FRVyonTosZVKw9n11PAM05VWRhzPxALl/view?usp=drive_link"
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