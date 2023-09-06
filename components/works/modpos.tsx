import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const Modpos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Developer Fulltime
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 - February 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I collaborated with two senior developers on a project for the
          restaurant industry, which included web, desktop, and mobile
          applications. My specialization was in the desktop application, where
          I focused on the license management system.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          In addition to development, I also played a role in teaching clients
          how to use the systems effectively.
        </li>
      </ul>
    </motion.div>
  );
};

export default Modpos;
