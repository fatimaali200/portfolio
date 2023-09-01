import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Tesodev = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Developer Internship
        {/** <span className="text-textGreen tracking-wide">@TESODEV</span> */}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2021 - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my internship, I took courses in JavaScript and Node.js to
          improve my web development skills, and then developed a project with
          the guidance of a course trainer.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This internship provided me with a valuable opportunity to enhance my
          skills and knowledge in web development using these technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default Tesodev;
