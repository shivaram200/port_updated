import exp from "../assets/exp.jpg"
import quiz from "../assets/quiz.jpg"
import zenko from "../assets/Zenko_logo.png"
import dp from "../assets/dp.jpg"



const Portfolio = () => {

    function handleChange(link) {
        window.open(link)

    }
    const projects = [
        {
            id: 1,
            title: exp,
            link: "https://github.com/shivaram200"
        },
        {
            id: 2,
            title: quiz,
            link: "https://github.com/shivaram200"
        },
        {
            id: 3,
            title: zenko,
            link: "https://github.com/shivaram200"
        }
    ]
    return (
        <div name="portfolio" className="w-full h-screen bg-gradient-to-br from-black to-gray-800 text-white">
            <div className="max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">check out my work</p>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 py-8 px-12 sm:px-0">
                    {projects.map(({ id, title, link }) => <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={title} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex justify-center">
                            <button onClick={() => {
                                handleChange(link);
                            }} className="px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio