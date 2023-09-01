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
        Backend Developer{" "}
        {/**<span className="text-textGreen tracking-wide">@MODPOS</span> */}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 - February 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My primary responsibility was to develop a C#.NET desktop application
          to track employees and customers, and control the flow of the database
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I designed and developed a user-friendly interface, integrated it with
          the database, and implemented features to manage employee and customer
          data.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My work improved the efficiency and accuracy of data management
          processes within the organization.
        </li>
      </ul>
    </motion.div>
  );
};

export default Modpos;
