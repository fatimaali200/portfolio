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
        Backend Developer | internship
        {/** <span className="text-textGreen tracking-wide">@TESODEV</span> */}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2021 - Aug 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Independently enhanced web development skills through comprehensive
          JavaScript and Node.js training.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked independently while staying in regular touch with the manager.
        </li>
      </ul>
    </motion.div>
  );
};

export default Tesodev;
