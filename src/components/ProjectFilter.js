"use client";

import { projectsCard } from "@/components/projectsCard";
import { useEffect } from "react";

const ProjectFilter = ({ setFiltered, activeCategory, setActiveCategory }) => {
    useEffect(() => {
      if (activeCategory === "all") {
        setFiltered(projectsCard);
        return;
      }
  
      const filtered = projectsCard.filter((project) => project.category?.includes(activeCategory));
      setFiltered(filtered);
    }, [activeCategory,setFiltered]);


  return (
    <>
      <div className="category">
        <button
          className={activeCategory == "all" ? `category` : null} 
          onClick={() => setActiveCategory("all")} 
        >
          All
        </button>
        <button
          className={activeCategory == "fs" ? `category` : null}
          onClick={() => setActiveCategory("fs")}
        >
          Full Stack
        </button>
        <button
          className={activeCategory == "react" ? `category` : null}
          onClick={() => setActiveCategory("react")}
        >
          React
        </button>
        <button
          className={activeCategory == "vanilla" ? `category` : null}
          onClick={() => setActiveCategory("vanilla")}
        >
          HTML/CSS/JS
        </button>
        <button
          className={activeCategory == "py" ? `category` : null}
          onClick={() => setActiveCategory("py")}
        >
          Python
        </button>
      </div>
    </>
  );
};

export default ProjectFilter;
