import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "E-Commerce Website",
    year: "July 2025",
    align: "right",
    image: "../../public/images/store-screenshot.png",
    link: "https://mern-ecommerce-8nvr.onrender.com/",
  },
  {
    name: "Blog Network Website",
    year: "Jan 2024",
    align: "left",
    image: "../../public/images/readme-ss-blog.png",
    link: "https://fusiontechblog.netlify.app/",
  },
  {
    name: "Netflix Clone",
    year: "June 2025",
    align: "right",
    image: "../../public/images/screenshot-for-readme.png",
    link: "https://netflix-clone-project-np.vercel.app/",
  },
  {
    name: "Twitter Clone",
    year: "July 2025",
    align: "left",
    image: "../../public/images/readme-screenshot.png",
    link: "https://twitter-clone-gdgh.onrender.com/",
  },
  {
    name: "Basic MERN App",
    year: "May 2025",
    align: "right",
    image: "../../public/images/readme-screenshot-mern.png",
    link: "https://basic-mern-app-zbf2.onrender.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
            key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
