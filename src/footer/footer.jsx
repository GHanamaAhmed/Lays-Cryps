
export default function Footer() {
  return (
    <div className='w-fill flex flex-col items-center justify-center md:justify-around bg-amber-100 py-10 md:flex-row-reverse'>
      <div className='flex justify-center items-cente'>
        <div className='flex justify-center items-center relative w-80 h-80  rounded-lg'>
          <img className='customer -translate-y-11 z-10' src="./icons/Group17826.png" alt="" />

        </div>
      </div>
      <div className=" self-start flex flex-col items-start mx-4 md:gap-y-8 gap-y-5">
        <img src="./icons/Logo.png" alt="" />
        <ul className="flex flex-col gap-y-3 md:flex-row md:gap-x-5">
          <li className="text-lg">Products</li>
          <li className="text-lg">About Us</li>
          <li className="text-lg">Videos</li>
          <li className="text-lg">Recipes</li>
          <li className="text-lg">Where to Buy</li>
        </ul>
        <p className="text-xl font-semibold">Follow us</p>
        <ul className="flex gap-x-3"><img src="./icons/Group431.png" alt="" /><img src="./icons/Group432.png" alt="" /><img src="./icons/Group433.png" alt="" /></ul>
        <p>Copyright © 2022 UIHUT all rights reserved.</p>
      </div>
    </div>
  )
}
