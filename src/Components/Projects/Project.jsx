import React from 'react';
import './Project.css';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Project = () => {
  return (
    <div id='projects' className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((project, index) => (
          <div className="mywork-card" key={index}>
            <img src={project.p_img} alt={project.P_Name} />
            <h2 className="project-name">{project.P_Name}</h2>
            <p className="project-desc">{project.p_desc}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Project;