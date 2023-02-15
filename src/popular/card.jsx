export default function Card({ background, lays, union, label }) {
    return (
        <div className="flex flex-col items-center mt-14 md:w-8/12">
            <div className={`${background} relative rounded-xl md:w-full`}>
                <div className="relative w-full">
                    <img className="h-full w-full" src={`${union}`} alt="" />
                    <img className='lays2 absolute right-1/2 translate-x-1/2 -top-10 w-5/6' src={`${lays}`} alt="" />
                </div>
            </div>
            <p className="font-bold text-2xl mt-5">{label}</p>
            <div className="flex items-center justify-center py-2 self-start gap-x-2">
                <img src="./icons/Group124.png" alt="" />
                <p className="text-slate-500 font-semibold text-lg">Play Video</p>
            </div>
        </div>
    )
}
