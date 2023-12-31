import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
interface ProjectInfo {
  title: string;
  des: string;
  link: string;
  listItem: string[];
  repoLink: string;
}

const ArchiveCard = ({ title, des, listItem, link, repoLink }: ProjectInfo) => {
  return (
    <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
        <a href={repoLink} target="_blank">
          <FaRegFolder className="text-4xl text-textGreen" />
        </a>
        <a href={link} target="_blank">
          <RxOpenInNewWindow className="text-2xl text-textGreen" />
        </a>
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
        <p className="text-sm mt-3">{des} </p>
      </div>
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
        {listItem.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveCard;
