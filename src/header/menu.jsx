import { useState } from "react"
export default function Menu() {
    const hidden = "hidden"
    const [displayMenu, setDisplayMenu] = useState(hidden);
    const handle = () => {
        setDisplayMenu((prevDisplayMenu) => displayMenu == hidden ? "" : hidden)
    }
    return (
        <>
            <img className="md:hidden" onClick={handle} src="./icons/Menu.svg" alt="" />
            <ul className={`${displayMenu} absolute bottom-0 translate-y-full right-1/2 translate-x-1/2 h-screen bg-black bg-opacity-80 w-full gap-y-4 py-4 flex flex-col items-center z-50 gap-x-10`}>
                <li className="text-slate-100">Products</li>
                <li className="text-slate-100">About Us</li>
                <li className="text-slate-100">Videos</li>
                <li className="text-slate-100">Recipes</li>
                <li className="text-slate-100">Where to Buy</li>
            </ul>
        </>
    );
};