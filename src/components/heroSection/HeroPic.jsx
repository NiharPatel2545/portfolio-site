import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      
      <div className="absolute w-[390px] h-[350px] z-0 hex-mask overflow-hidden bg-gradient-to-br from-cyan blur-sm via-violet-500 to-orange  -translate-x-10" />

      <img
        src="/images/me.png"
        alt="Nihar Patel"
        className="hex-mask w-[400px] h-[370px] object-cover z-10 -translate-y-2  -translate-x-10"
      />
      

      <div className="absolute flex justify-center items-center -z-10 animate-pulse">
    <PiHexagonThin className="md:h-[90%] sm:h-[110%] min-h-[580px] w-auto text-cyan blur-md custom-spin" />  </div>
    </motion.div>
  );
};

export default HeroPic;