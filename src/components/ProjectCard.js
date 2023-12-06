import { AiFillGithub, AiFillYoutube, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
const ProjectCard = ({ name, githubUrl, image, youtube, deployed, youtubeUrl, projectUrl }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="project-card"
    >
      <Image src={image} alt={`${name} Image`} className="project-image" width={300} height={300} />
      <h3 className="project-title">{name}</h3>
      <div className="project-links">
        <a href={githubUrl} target="_blank" className="github-link icon" rel="noreferrer">
          <AiFillGithub />
        </a>
        {youtube && (
          <a href={youtubeUrl} target="_blank" className="youtube-link icon" rel="noreferrer">
            <AiFillYoutube />
          </a>
        )}
        {deployed && (
          <a href={projectUrl} target="_blank" className="deployed-link icon" rel="noreferrer">
            <AiFillEye />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
