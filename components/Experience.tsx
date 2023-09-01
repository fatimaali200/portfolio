import SectionTitle from "./SectionTitle";
import Tesodev from "./works/Tesodev";
import Modpos from "./works/modpos";
import React, { useState } from "react";

const Experience = () => {
  const [workModpos, setWorkModpos] = useState(true);
  const [workTesodev, setWorkTesodev] = useState(false);

  const handleModpos = () => {
    setWorkModpos(true);
    setWorkTesodev(false);
  };
  const handleTesodev = () => {
    setWorkModpos(false);
    setWorkTesodev(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleModpos}
            className={`${
              workModpos
                ? "border-1-textGreen text-textGreen"
                : "border-1-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            MODPOS
          </li>
          <li
            onClick={handleTesodev}
            className={`${
              workTesodev
                ? "border-1-textGreen text-textGreen"
                : "border-1-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            TESODEV
          </li>
          {/** <li className="border-l-textGreen text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium">
            ARTI VE ARTI
          </li> */}
        </ul>
        {workModpos && <Modpos />}
        {workTesodev && <Tesodev />}
      </div>
    </section>
  );
};

export default Experience;
