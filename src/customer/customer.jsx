
export default function Customer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-y-5 m-auto bg-sky-300 pt-32'>
            <div className='flex justify-center items-cente'>
                <div className='flex  justify-center items-center relative bg-yellow-200 w-80 h-80  rounded-lg'>
                    <img className='customer -translate-y-11 z-10' src="./icons/cheerful-young-sports-man-posing-showing-thumbs-up-gesture-transformed1.png" alt="" />
                    <img className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2" src="./icons/Union52.png" alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center md:row-start-1 gap-y-5 md:gap-y-10'>
                <p className='w-5/6 text-2xl font font-semibold font-serif text-center'>Our Popular Crisps</p>
                <p className="w-5/6 font-serif text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="w-5/6 mx-auto h-1 bg-sky-400 rounded-xl"></div>
                <div className="w-5/6 flex gap-y-4 flex-col md:flex-row  md:justify-between">
                    <div className="w-full">
                        <p className='w-5/6 text-2xl font font-semibold font-serif'>Annara Veirmont</p>
                        <p className="w-5/6 font-serif text-justify">23 years of Age</p>
                    </div>
                    <div className="flex gap-x-3">
                        <button><img src="./icons/arrow.png" alt="" /></button>
                        <button><img src="./icons/arrow-1.png" alt="" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
