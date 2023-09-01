import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li className="border-l-textGreen text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium">
            MODPOS
          </li>
          <li className="border-l-textGreen text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium">
            TESODEV
          </li>
          <li className="border-l-textGreen text-textDark border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium">
            ARTI VE ARTI
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
