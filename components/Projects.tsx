import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { capstonImg } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://home-taste-api.onrender.com/home"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={capstonImg}
                  alt="capstomImg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10 ">
              <h3 className="text-2xl font-bold">HomeTaste RestApi Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                HomeTaste is a platform that brings together busy individuals,
                such as students, with skilled local cooks who offer a diverse
                selection of delicious homemade dishes. Our mission is to create
                a vibrant community where people can connect over a shared love
                for good food and support local culinary talents.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nodejs</li>
                <li>Typescript</li>
                <li>MongoDB</li>
                <li>Swagger</li>
                <li>Passport</li>
                <li>Onrender Deyloyment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/fatimaali200/HomeTaste"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://home-taste-api.onrender.com/home"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/** project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://home-taste-api.onrender.com/home"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={capstonImg}
                  alt="capstomImg"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10 ">
              <h3 className="text-2xl font-bold">HomeTaste RestApi Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                HomeTaste is a platform that brings together busy individuals,
                such as students, with skilled local cooks who offer a diverse
                selection of delicious homemade dishes. Our mission is to create
                a vibrant community where people can connect over a shared love
                for good food and support local culinary talents.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nodejs</li>
                <li>Typescript</li>
                <li>MongoDB</li>
                <li>Swagger</li>
                <li>Passport</li>
                <li>Onrender Deyloyment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/fatimaali200/HomeTaste"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://home-taste-api.onrender.com/home"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
