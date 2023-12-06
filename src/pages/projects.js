import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import BaseLayout from "@/components/BaseLayout";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <BaseLayout>
    <section className="project-content">
      <div className="grid-container">
        <div>
          <p className="section-title">
            Projects
          </p>
        </div>
        <ProjectFilter setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
                youtube={project.youtube}
                deployed={project.deployed}
                youtubeUrl={project.youtubeUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button className="show-more-button" onClick={loadMoreProjects}>
              Show More
            </button>
          </div>
        )}
      </div>
      </section>
      <Footer/>
    </BaseLayout>
  );
};

export default Projects;