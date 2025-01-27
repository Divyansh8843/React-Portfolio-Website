import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
function Portfolio() {
const [projects, setProjects] = useState([]);
const [filteredProjects, setFilteredProjects] = useState([]);

const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []); 

const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Web Development", "AI/ML", "Software Development"].map(
          (category) => (
            <li key={category} className="filter-item">
              <button
                data-filter-btn
                className={category === selectedCategory ? "active" : ""}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

{/* Project list */}
<section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active"
              data-filter-item
              data-category={project.category}
            >
<a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box" >
                   <RemoveRedEyeIcon/>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Portfolio;
