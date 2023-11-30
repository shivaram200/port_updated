
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "Experience"
    },
    {
      id: 5,
      link: "contact"
    }

  ]

  return (
    <div className="px-4 text-white sm:fixed h-20 w-full flex items-center justify-between">
      <div><h1 className="text-5xl font-signature ml-2">SRK</h1></div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"><Link to={link} smooth duration={500}>{link}</Link></li>)}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-500 size z-10 pr-4 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>
      {nav && (<ul className="flex flex-col justify-center h-screen w-full items-center absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => <li key={id} className="px-4 py-6 cursor-pointer capitalize font-medium text-3xl text-gray-500 hover:scale-105 duration-200"><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>)}

      </ul>)}

    </div>
  )
}

export default Navbar