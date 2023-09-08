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
        Backend Developer | fulltime
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2022 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with a team of two other developers to design, develop,
          and maintain backend solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed new desktop apps, resolved issues, and added features to
          existing projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Showed strong teamwork and communication to achieve project goals on
          time.
        </li>
      </ul>
    </motion.div>
  );
};

export default Modpos;
