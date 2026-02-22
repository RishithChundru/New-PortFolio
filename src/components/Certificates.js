import React, { useState, useEffect, useRef ,useCallback, useMemo } from 'react';
import '../styles/components/Certificates.css';

const Certificates = () => {
  const [activePage, setActivePage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const autoSlideTimerRef = useRef(null);
  const carouselRef = useRef(null);

  // Certificate data
  const certificates = useMemo(() => [
    {
      id: 1,
      title: "Mastering Data Structures Using C and C++",
      issuer: "Udemy",
      date: "November 2023",
      image: "assets/images/dsa.jpg",
      fallbackImage: "assets/images/certificate-placeholder.jpg",
      link: "https://drive.google.com/file/d/1Vp1VG1yOsrnMx0PzhUEnS7amzXm0tuPP/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      issuer: "IAMNEO",
      date: "December 2023",
      image: "assets/images/CppNeoColab.png",
      fallbackImage: "assets/images/certificate-placeholder.png",
      link: "https://drive.google.com/file/d/1VsyVy--RyHYK3t3wCQ1RMpvf7hsy7xiJ/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      issuer: "IAMNEO",
      date: "December 2023",
      image: "assets/images/DsaNeoColab.png",
      fallbackImage: "assets/images/certificate-placeholder.png",
      link: "https://drive.google.com/file/d/1pHRn9QwVa8b77NNodoYIGdRF4y47mehu/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "November 2024",
      image: "assets/images/NPTEL.png",
      fallbackImage: "assets/images/certificate-placeholder.png",
      link: "https://drive.google.com/file/d/1pAF9HzMAhhgBtZ9O1M5xFFxxh3p-evqN/view?usp=drive_link"
    },
    {
      id: 5,
      title: "HackerRank Problem Solving",
      issuer: "HackerRank",
      date: "December 2024",
      image: "assets/images/hackerrank.png",
      fallbackImage: "assets/images/certificate-placeholder.png",
      link: "https://drive.google.com/file/d/1vVyebyxPj8KBrTlfrzK5B7iiWk4eLqpW/view?usp=drive_link"
    },
    {
      id: 6,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "March 2025",
      image: "assets/images/Deloitte.png",
      fallbackImage: "assets/images/certificate-placeholder.png",
      link: "https://drive.google.com/file/d/1WYqGU0KIp5QIxeIWEONbF1UEfyAI2oGN/view?usp=drive_link"
    }
  ],[]);

  // Calculate total pages based on certificates count and visible cards
  const totalPages = Math.ceil(certificates.length /visibleCards);

  // Update visible cards based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track loading state of images
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = certificates.map(cert => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = cert.image;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true); // Continue even if there's an error
      }
    };
    
    loadImages();
  }, [certificates]);

  // Auto-slide functionality
  const startAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    
    autoSlideTimerRef.current = setInterval(() => {
      setActivePage((prevPage) => 
        prevPage === totalPages - 1 ? 0 : prevPage + 1
      );
    }, 5000);
  }, [totalPages]);
  
  // Auto-slide functionality
  useEffect(() => {
    if (imagesLoaded) {
      startAutoSlide();
    }
    
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [imagesLoaded, startAutoSlide]);
  
  // Reset timer when user manually changes slide
  useEffect(() => {
    if (imagesLoaded) {
      startAutoSlide();
    }
  }, [activePage, imagesLoaded, startAutoSlide]);
  
  const handleMouseEnter = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    if (imagesLoaded) {
      startAutoSlide();
    }
  };

  const nextPage = () => {
    setActivePage((prevPage) => 
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    setActivePage((prevPage) => 
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const goToPage = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const handleImageError = (e, fallbackSrc) => {
    e.target.onerror = null;
    if (fallbackSrc) {
      e.target.src = fallbackSrc;
    } else {
      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30,40 L70,40 L70,60 L30,60 Z' stroke='%23cccccc' fill='none'/%3E%3Ctext x='50' y='50' font-family='sans-serif' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%23999999'%3ENo Image%3C/text%3E%3C/svg%3E";
    }
  };

  // Get certificates for current page
  const getCurrentPageCertificates = () => {
    const startIndex = activePage * visibleCards;
    const endIndex = Math.min(startIndex + visibleCards, certificates.length);
    return certificates.slice(startIndex, endIndex);
  };

  if (!imagesLoaded) {
    return (
      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="section-title">My Certificates</h2>
          <div className="certificates-subtitle">
            <p>Professional certifications and achievements</p>
          </div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading certificates...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        
        
        <div 
          className="certificates-carousel"
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-arrow prev" onClick={prevPage} aria-label="Previous page">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="certificates-grid">
            {getCurrentPageCertificates().map((cert, index) => (
              <div 
                key={`${cert.id}-${index}`}
                className="certificate-card"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="certificate-card-inner">
                  <div className="certificate-image">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      onError={(e) => handleImageError(e, cert.fallbackImage)}
                    />
                    <div className="certificate-overlay">
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                  <div className="certificate-info">
                    <h3>{cert.title}</h3>
                    <div className="certificate-meta">
                      <span className="certificate-issuer">
                        <i className="fas fa-award"></i> {cert.issuer}
                      </span>
                      <span className="certificate-date">
                        <i className="fas fa-calendar-alt"></i> {cert.date}
                      </span>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="certificate-btn"
                    >
                      View Certificate <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow next" onClick={nextPage} aria-label="Next page">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {[0, 1].map((pageIndex) => (
            <button 
              key={pageIndex} 
              className={`indicator ${pageIndex === activePage ? 'active' : ''}`}
              onClick={() => goToPage(pageIndex)}
              aria-label={`Go to page ${pageIndex + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;