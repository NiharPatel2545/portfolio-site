import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    job: "Front-End Developer",
    date: "2021 – Present",
    responsibilities: [
      "Began building with HTML, CSS, and visual tools like Scratch and MIT App Inventor.",
      "Constructed early UIs and explored user interaction design.",
      "Refined UI polish and layout strategy for reviewer-grade clarity.",
    ],
  },
  {
    job: "Solo Web Developer",
    date: "2023 – Present",
    responsibilities: [
      "Learned JavaScript and React through documentation, crash courses, and deep debugging.",
      "Built and deployed multiple front-end and full-stack projects with complex state management.",
      "Documented learning through iterative builds and personalized codebases.",
    ],
  },
  {
    job: "Full-Stack Engineer in Training",
    date: "2024 – Present",
    responsibilities: [
      "Mastered Node.js, Express, MongoDB, deployment protocols, and error handling.",
      "Earned certifications in JS, React, MongoDB as external validation for existing mastery.",
      "Preparing reviewer-ready projects and personal branding for college + industry access.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {
       experiences.map((experience, index) => (
   <React.Fragment key={index}>
     <SingleExperience experience={experience} />
     {index < 2 ? (
       <motion.div
         variants={fadeIn("right", 0)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
       >
         <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
       </motion.div>
     ) : (
       ""
    )}
  </React.Fragment>
    ))
      }
    </div>
  );
};

export default AllExperiences;
