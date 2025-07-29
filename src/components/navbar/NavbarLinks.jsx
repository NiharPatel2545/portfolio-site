import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  { link: "Certifications", section: "certifications" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-titanium font-body 
  lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] 
  lg:text-md sm:text-xl sm:bg-stealthBlue/60 backdrop-blur-lg lg:bg-carbon sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-titanium hover:text-plasma transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-ionBlue w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>


          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
