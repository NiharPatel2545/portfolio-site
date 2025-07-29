import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Nihar, a tech-driven student with a passion for building and understanding how systems really work. My coding journey began in May 2021 with Scratch — what started out as dragging blocks turned into writing full-blown applications from the ground up. Over time, I’ve taught myself web development and backend logic, exploring languages like JavaScript, Python, and Java, and working hands-on with tools like React, Node.js, Express, and MongoDB.<br></br><br></br>
        I've completed several personal projects that helped me learn how to design user interfaces, troubleshoot errors, and deploy live apps with clean functionality. From small features to full-stack apps, I’ve focused on building things that feel polished and reflect real-world scenarios.<br></br><br></br>
        I enjoy the process of solving hard problems, digging into the logic behind each decision, and building things that are both intuitive and resilient. Right now, I’m working on refining my tech portfolio and preparing for college — hoping to turn my curiosity into long-term impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
