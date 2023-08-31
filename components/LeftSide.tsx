import {TbBrandGithub} from "react-icons/tb"
import {SlSocialLinkedin} from "react-icons/sl"
import { FiMail } from "react-icons/fi";


const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
            <a href="https://github.com/fatimaali200" target="_blank">
                <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandGithub/></span>
            </a>
            <a href="https://www.linkedin.com/in/fatima-ali-558b061b1/" target="_blank">
                <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><SlSocialLinkedin/></span>
            </a>
            <a href="mailto:ffatima.ali200@gmail.com">
                <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><FiMail/></span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark">

        </div>
    </div>
  )
}

export default LeftSide