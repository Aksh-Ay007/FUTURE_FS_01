import React, { useState } from 'react';
import './Project.css';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Project = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState({});

  const handleImageClick = (projectIndex, imageIndex) => {
    setSelectedImageIndex({
      ...selectedImageIndex,
      [projectIndex]: imageIndex
    });
  };

  return (
    <div id='projects' className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((project, index) => {
          const hasMultipleImages = project.p_images && project.p_images.length > 1;
          const currentImageIndex = selectedImageIndex[index] || 0;
          const currentImage = hasMultipleImages 
            ? project.p_images[currentImageIndex] 
            : project.p_img;

          return (
          <div className={`mywork-card ${index === 0 ? 'featured' : ''}`} key={index}>
            {/* Main Banner Image */}
            <div className="project-image-container">
              <img 
                src={currentImage} 
                alt={project.P_Name} 
                className="project-main-image"
              />
              {hasMultipleImages && (
                <div className="image-counter">
                  {currentImageIndex + 1} / {project.p_images.length}
                </div>
              )}
            </div>

            {/* Image Gallery Thumbnails */}
            {hasMultipleImages && project.p_images.length > 1 && (
              <div className="project-image-gallery">
                {project.p_images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`gallery-thumbnail ${currentImageIndex === imgIndex ? 'active' : ''}`}
                    onClick={() => handleImageClick(index, imgIndex)}
                  >
                    <img src={img} alt={`${project.P_Name} - View ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            )}

            <h2 className="project-name">{project.P_Name}</h2>
            <p className="project-desc">{project.p_desc}</p>
            {project.techStack && (
              <div className="project-tech-stack">
                <strong>Tech Stack:</strong> {project.techStack}
              </div>
            )}
            {project.features && (
              <div className="project-features">
                <strong>Key Features:</strong>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="project-links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  {project.demo.includes('linkedin.com') ? '📹 Watch Demo' : '🚀 Live Demo'}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  💻 View Code
                </a>
              )}
            </div>
          </div>
        );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Project;