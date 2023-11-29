import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";
const Tech = () => {

    const techs = [
        {
            id: 1,
            tech: <IoLogoHtml5 size={120} />,
            title: "HTML"
        },
        {
            id: 2,
            tech: <IoLogoCss3 size={120} />,
            title: "CSS"
        },
        {
            id: 3,
            tech: <BiLogoJavascript size={120} />,
            title: "JavaScript"
        },
        {
            id: 4,
            tech: <SiTailwindcss size={120} />,
            title: "TailWind"
        },
        {
            id: 5,
            tech: <SiDjango size={120} />,
            title: "DJango"
        },
        {
            id: 6,
            tech: <IoLogoReact size={120} />,
            title: "React"
        }


    ]

    return (
        <div name="Experience" className="bg-gradient-to-bl from-gray-800 to-black w-full h-screen text-white">
            <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4">
                <div className="pt-64 sm:pt-0 pb-4" >
                    <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0">
                    {
                        techs.map(({ id, tech, title }) => (<div key={id} className="flex flex-col items-center">
                            {/* <img src={html} alt="" /> */}
                            {tech}

                            <p className="">{title}</p>
                        </div>))
                    }




                </div>
            </div>
        </div>
    )
}

export default Tech