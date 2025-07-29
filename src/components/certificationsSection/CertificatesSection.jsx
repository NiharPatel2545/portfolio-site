import CertificatesText from "./CertificatesText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";
import CertificatesCard from "./CertificatesCard";

const CertificatesSection = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
      <CertificatesText />
      </motion.div>
      <CertificatesCard />
    </div>
  );
};

export default CertificatesSection;
