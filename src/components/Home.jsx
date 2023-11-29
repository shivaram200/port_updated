import { RiArrowRightSFill } from "react-icons/ri"
import { Link } from "react-scroll";
{/* <h1>Hi,I'm Shiva Ramakrishna</h1>
<h3>Frontend and Mobile application Developer</h3>
</div>
<p>Welcome to my portfolio website! Here, you'll find a collection of my work as a front-end developer,
showcasing my passion for creating captivating and user-friendly digital experiences.
Explore my portfolio to witness the fusion of creativity and technical skill, and discover how I can
elevate your digital presence to new heights</p> */}

const Home = () => {
    return (
        <div name="Home" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white sm:bg-gradient-to-br sm:from-black sm:to-gray-800 sm:text-white">
            <div className="max-w-screen-lg flex flex-col h-full mx-auto justify-center items-center px-4 md:flex-row">
                <div className="flex flex-col h-full justify-center">
                    <h1 className="text-4xl sm:text-5xl text-white font-bold py-2">Hi,I'm</h1>
                    <h1 className="text-4xl font-bold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Shiva Ramakrishna</h1>
                    <h3 className="py-2"><b>Frontend</b> and <b>Mobile</b> application Developer</h3>
                    <p className="text-gray-500 py-4 ">
                        Welcome to my portfolio website! Here, you'll find a collection of my work as a front-end developer,
                        showcasing my passion for creating captivating and user-friendly digital experiences.
                        Explore my portfolio to witness the fusion of creativity and technical skill, and discover how I can
                        elevate your digital presence to new heights
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="group flex items-center px-6 py-3 my-2 w-[13%] cursor-pointer rounded-lg bg-gradient-to-r from-sky-400 to-blue-500">
                            Portfolio
                            <span><RiArrowRightSFill size={25} className="group-hover:rotate-90 duration-300" /></span>
                        </Link>
                    </div>
                </div>
                {/* <div>
                    <img src="../assets/pro1" alt="My_profile" />
                </div> */}
            </div>
        </div>
    )
}

export default Home

/* <h1>Hi,I'm Shiva Ramakrishna</h1>

</div>
 */