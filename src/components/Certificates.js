// import React, { useState } from 'react';
// import '../styles/components/Certificates.css';

// const Certificates = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const certificates = [
//     {
//       id: 1,
//       title: "Mastering Data Structures Using C and C++",
//       issuer: "Udemy",
//       date: "December 2023",
//       image: "/assets/images/dsa.jpg",
//       link: "https://www.udemy.com/certificate/UC-89f47851-da9f-47ec-aa3f-e46ea95af8b8/"
//     },
//     {
//       id: 2,
//       title: "Data Science and Machine Learning",
//       issuer: "Coursera",
//       date: "March 2023",
//       image: "/assets/images/certificates/data-science.jpg",
//       link: "https://example.com/cert/67890"
//     },
//     {
//       id: 3,
//       title: "Mobile App Development with React Native",
//       issuer: "edX",
//       date: "June 2023",
//       image: "/assets/images/certificates/app-dev.jpg",
//       link: "https://example.com/cert/54321"
//     },
//     {
//       id: 4,
//       title: "UI/UX Design Fundamentals",
//       issuer: "LinkedIn Learning",
//       date: "September 2023",
//       image: "/assets/images/certificates/ui-ux.jpg",
//       link: "https://example.com/cert/09876"
//     },
//     {
//       id: 5,
//       title: "Cloud Computing with AWS",
//       issuer: "Amazon Web Services",
//       date: "December 2023",
//       image: "/assets/images/certificates/aws.jpg",
//       link: "https://example.com/cert/13579"
//     }
//   ];

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <section id="certificates" className="certificates">
//       <div className="container">
//         <h2 className="section-title">My Certificates</h2>
        
//         <div className="certificates-carousel">
//           <button className="carousel-arrow prev" onClick={prevSlide}>
//             <i className="fas fa-chevron-left"></i>
//           </button>
          
//           <div className="certificates-slider">
//             {certificates.map((cert, index) => (
//               <div 
//                 key={cert.id} 
//                 className={`certificate-slide ${index === activeIndex ? 'active' : ''}`}
//                 style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
//               >
//                 <div className="certificate-card">
//                   <div className="certificate-image">
//                     <img src={cert.image} alt={cert.title} />
//                   </div>
//                   <div className="certificate-info">
//                     <h3>{cert.title}</h3>
//                     <p className="certificate-issuer">{cert.issuer}</p>
//                     <p className="certificate-date">{cert.date}</p>
//                     <a 
//                       href={cert.link} 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className="btn certificate-btn"
//                     >
//                       View Certificate
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <button className="carousel-arrow next" onClick={nextSlide}>
//             <i className="fas fa-chevron-right"></i>
//           </button>
//         </div>
        
//         <div className="carousel-indicators">
//           {certificates.map((_, index) => (
//             <button 
//               key={index} 
//               className={`indicator ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;


// import React, { useState, useEffect, useRef } from 'react';
// import '../styles/components/Certificates.css';

// const Certificates = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const autoSlideTimerRef = useRef(null);
  
//   const certificates = [
//     {
//       id: 1,
//       title: "Mastering Data Structures Using C and C++",
//       issuer: "Udemy",
//       date: "December 2023",
//       image: "/assets/images/dsa.jpg",
//       link: "https://www.udemy.com/certificate/UC-89f47851-da9f-47ec-aa3f-e46ea95af8b8/"
//     },
//     {
//       id: 2,
//       title: "Onject Oriented Programming",
//       issuer: "IAMNEO",
//       date: "December 2023",
//       image: "/assets/images/CppNeoColab.jpg",
//       link: "https://drive.google.com/file/d/1VsyVy--RyHYK3t3wCQ1RMpvf7hsy7xiJ/view?usp=drive_link"
//     },
//     {
//       id: 3,
//       title: "Data Structures and Algorithms",
//       issuer: "IAMNEO",
//       date: "December 2023",
//       image: "/assets/images/DsaNeoColab.jpg",
//       link: "https://drive.google.com/file/d/1pHRn9QwVa8b77NNodoYIGdRF4y47mehu/view?usp=drive_link"
//     },
//     {
//       id: 4,
//       title: "Cloud Computing",
//       issuer: "NPTEL",
//       date: "November 2024",
//       image: "/assets/images/NPTEL.jpg",
//       link: "https://drive.google.com/file/d/1pAF9HzMAhhgBtZ9O1M5xFFxxh3p-evqN/view?usp=drive_link"
//     },
//     {
//       id: 5,
//       title: "HackerRank Problem Solving",
//       issuer: "HackerRank",
//       date: "December 2024",
//       image: "/assets/images/hackerrank.jpg",
//       link: "https://drive.google.com/file/d/1vVyebyxPj8KBrTlfrzK5B7iiWk4eLqpW/view?usp=drive_link"
//     },
//     {
//       id: 6,
//       title: "Data Analytics Job Simulation",
//       issuer: "Deloitte",
//       date: "March 2025",
//       image: "/assets/images/Deloitte.jpg",
//       link: "https://drive.google.com/file/d/1WYqGU0KIp5QIxeIWEONbF1UEfyAI2oGN/view?usp=drive_link"
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     startAutoSlide();
    
//     // Cleanup timer on component unmount
//     return () => {
//       if (autoSlideTimerRef.current) {
//         clearInterval(autoSlideTimerRef.current);
//       }
//     };
//   }, []);
  
//   // Reset timer when user manually changes slide
//   useEffect(() => {
//     startAutoSlide();
//   }, [activeIndex]);
  
//   const startAutoSlide = () => {
//     // Clear any existing timer
//     if (autoSlideTimerRef.current) {
//       clearInterval(autoSlideTimerRef.current);
//     }
    
//     // Set new timer
//     autoSlideTimerRef.current = setInterval(() => {
//       setActiveIndex((prevIndex) => 
//         prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds
//   };
  
//   // Pause auto-slide when user hovers over carousel
//   const handleMouseEnter = () => {
//     if (autoSlideTimerRef.current) {
//       clearInterval(autoSlideTimerRef.current);
//     }
//   };
  
//   // Resume auto-slide when user's mouse leaves carousel
//   const handleMouseLeave = () => {
//     startAutoSlide();
//   };

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => 
//       prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <section id="certificates" className="certificates">
//       <div className="container">
//         <h2 className="section-title">My Certificates</h2>
        
//         <div 
//           className="certificates-carousel"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button className="carousel-arrow prev" onClick={prevSlide}>
//             <i className="fas fa-chevron-left"></i>
//           </button>
          
//           <div className="certificates-slider">
//             {certificates.map((cert, index) => (
//               <div 
//                 key={cert.id} 
//                 className={`certificate-slide ${index === activeIndex ? 'active' : ''}`}
//                 style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
//               >
//                 <div className="certificate-card">
//                   <div className="certificate-image">
//                     <img 
//                       src={cert.image} 
//                       alt={cert.title} 
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/assets/images/certificate-placeholder.jpg";
//                       }}
//                     />
//                   </div>
//                   <div className="certificate-info">
//                     <h3>{cert.title}</h3>
//                     <p className="certificate-issuer">{cert.issuer}</p>
//                     <p className="certificate-date">{cert.date}</p>
//                     <a 
//                       href={cert.link} 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className="btn certificate-btn"
//                     >
//                       View Certificate
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <button className="carousel-arrow next" onClick={nextSlide}>
//             <i className="fas fa-chevron-right"></i>
//           </button>
//         </div>
        
//         <div className="carousel-indicators">
//           {certificates.map((_, index) => (
//             <button 
//               key={index} 
//               className={`indicator ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;




import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/Certificates.css';

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const autoSlideTimerRef = useRef(null);
  
  // Use relative paths from your public folder
  // Or import images directly if using webpack/create-react-app
  const certificates = [
    {
      id: 1,
      title: "Mastering Data Structures Using C and C++",
      issuer: "Udemy",
      date: "November 2023",
      // Consider using imported images or ensure correct path structure
      image: "assets/images/dsa.jpg", // Remove leading slash
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
  ];

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
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (imagesLoaded) {
      startAutoSlide();
    }
    
    // Cleanup timer on component unmount
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [imagesLoaded]);
  
  // Reset timer when user manually changes slide
  useEffect(() => {
    if (imagesLoaded) {
      startAutoSlide();
    }
  }, [activeIndex, imagesLoaded]);
  
  const startAutoSlide = () => {
    // Clear any existing timer
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    
    // Set new timer
    autoSlideTimerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
  };
  
  // Pause auto-slide when user hovers over carousel
  const handleMouseEnter = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
  };
  
  // Resume auto-slide when user's mouse leaves carousel
  const handleMouseLeave = () => {
    if (imagesLoaded) {
      startAutoSlide();
    }
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Handle image error more gracefully
  const handleImageError = (e, fallbackSrc) => {
    e.target.onerror = null; // Prevent infinite loop
    if (fallbackSrc) {
      e.target.src = fallbackSrc;
    } else {
      // If no fallback provided, use a data URI placeholder
      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30,40 L70,40 L70,60 L30,60 Z' stroke='%23cccccc' fill='none'/%3E%3Ctext x='50' y='50' font-family='sans-serif' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%23999999'%3ENo Image%3C/text%3E%3C/svg%3E";
    }
  };

  // Display loading state if images aren't loaded yet
  if (!imagesLoaded) {
    return (
      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="section-title">My Certificates</h2>
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="certificates-slider">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className={`certificate-slide ${index === activeIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <div className="certificate-card">
                  <div className="certificate-image">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      onError={(e) => handleImageError(e, cert.fallbackImage)}
                    />
                  </div>
                  <div className="certificate-info">
                    <h3>{cert.title}</h3>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <p className="certificate-date">{cert.date}</p>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn certificate-btn"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {certificates.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;