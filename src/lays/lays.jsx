import Card from "./card";



export default function Lays() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-5 md:px-10 px-4 justify-items-center md:mt-20">
      <p className='bg- text-2xl font font-semibold font-serif md:col-span-3'>Find Best Taste Here</p>
      <p className="text-center text-slate-500 md:col-span-3 md:w-1/2">Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel</p>
      <Card background={"bg-green-50"} union={"./icons/Intersect-0.png"} lays={"./icons/Images.png"} />
      <Card background={"bg-green-50"} union={"./icons/Intersect-1.png"} lays={"./icons/image24.png"} />
      <Card background={"bg-amber-50"} union={"./icons/Intersect-3.png"} lays={"./icons/image25.png"} />
      <Card background={"bg-blue-50"} union={"./icons/Intersect-1.png"} lays={"./icons/image29.png"} />
      <Card background={"bg-yellow-100"} union={"./icons/Intersect-5.png"} lays={"./icons/image27.png"} />
      <Card background={"bg-pink-50"} union={"./icons/Intersect.png"} lays={"./icons/image28.png"} />
      <div className="flex justify-center md:col-span-3 items-center">
            <button className="py-2 px-4 text-slate-100 bg-zinc-900 rounded-lg mt-4">All Crisps</button>
      </div>
    </div>
  )
}
