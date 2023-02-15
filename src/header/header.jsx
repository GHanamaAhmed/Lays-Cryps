import { useState } from "react"
import  Menu  from "./menu";

export default function Header() {
    
    return (
        <header className="flex justify-between px-10 py-2 md:py-5 w-full md:justify-around items-center relative">
            <a href="#"><img src="./icons/Logo.png" alt="" /></a>
            <ul className="hidden md:flex gap-x-10">
                <li>Products</li>
                <li>About Us</li>
                <li>Videos</li>
                <li>Recipes</li>
                <li>Where to Buy</li>
            </ul>
            <div className="hidden md:block relative">
                <input className=" border py-2 rounded-md pl-8 pr-14 focus:outline-none" placeholder="Search collection" type="text" />
                <img className="absolute top-1/2 left-2 -translate-y-1/2" src="./icons/Vector.svg" alt="" />
            </div>
            <button className="hidden md:block bg-zinc-900 rounded-full p-3">
                <img src="./icons/Group.svg" alt="" />
            </button>
            <button className="hidden md:block py-2 px-5 bg-zinc-900 rounded-md text-slate-100">Sign up</button>   
            <Menu/>
        </header>
    )
}