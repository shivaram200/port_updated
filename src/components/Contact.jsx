

const Contact = () => {
    return (
        <div name="contact" className="bg-gradient-to-br from-black to-gray-800 w-full h-screen text-white">
            <div className="max-w-screen-lg flex flex-col mx-auto p-4 w-full h-full justify-center">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Contact me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/94bc7bbe-88fb-4a38-84aa-e3c42892ce75" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" placeholder="Enter your name" name="name" className="p-2 bg-transparent rounded-md border-2 focus:outline-none" />
                        <input type="text" placeholder="Enter your email" name="email" className="p-2 mt-4 bg-transparent rounded-md border-2 focus:outline-none" />
                        <button className="text-white bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 my-8 flex items-center justify-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact