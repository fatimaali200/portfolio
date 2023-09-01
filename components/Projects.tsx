import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { capstonImg } from "@/public/assets";
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div>
          <a href="https://home-taste-api.onrender.com/home" target="_blank">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={capstonImg}
                alt="capstomImg"
              />
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
