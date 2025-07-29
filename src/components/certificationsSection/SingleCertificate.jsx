import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"; // Make sure this exists and exports correctly

const SingleCertificate = ({ name, date, provider, link, image }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0.2)} // direction and delay
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center gap-4 max-w-[350px] mx-auto rounded-xl border border-cyan overflow-hidden hover:border-orange transform hover:scale-[1.03] transition-all duration-500 shadow-md"
    >
      {/* Image block with hover overlay */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img src={image} alt="certificate" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-cyan/5 hover:opacity-0 transition duration-500"></div>
      </div>

      {/* Text content */}
      <div className="px-4 pb-6 flex flex-col items-center text-center">
        <h3 className="text-xl text-orange font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-4">{provider} • {date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:text-orange flex gap-2 items-center text-sm"
        >
          View Certificate <BsFillArrowUpRightCircleFill />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleCertificate;