import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public/assets";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiGithubBadge,
  DiCode,
} from "react-icons/di";
import {
  SiJest,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSwagger,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium leading-loose flex flex-col gap-4">
          <p>
            I am a Computer Engineering graduate with a fervent passion for
            backend web development. My practical experience includes hands-on
            work with technologies such as Node.js, Express.js, and various
            database systems. Furthermore, I successfully completed a
            specialized Re:Coded backend bootcamp, where I sharpened my skills
            in building resilient and efficient web applications.{" "}
          </p>
          <p>
            My strengths lie in my unwavering attention to detail, a
            collaborative spirit that fuels effective teamwork, and an innate
            ability to tackle complex problems within the backend development
            landscape. I am deeply committed to continuous growth and learning
            in the realm of web development, actively seeking opportunities to
            elevate my expertise and make impactful contributions to project
            success.
          </p>
          <p>
            I have hands-on experience with a variety of technologies,
            including:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-4 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiJavascript1 />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTypescript />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiNodejsSmall />
              </span>
              NodeJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiExpress />
              </span>
              ExpressJs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiCode />
              </span>
              C#
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiCode />
              </span>
              Ado.Net
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiMongodb />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbSql />
              </span>
              MSSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <BsGit />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiSwagger />
              </span>
              Swagger
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiJest />
              </span>
              Jest
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiGithubBadge />
              </span>
              Github
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              {/** <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>*/}
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
