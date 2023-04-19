import Link from 'next/link'
import React from 'react'



export const Header = () => {

    return(
        <div className=" flex justify-between items-center bg-black  h-26 top-0 sticky z-0 p-5 w-[100%] ">
    <img
      src="./images/logo/innovar.png"
      alt="logo"
      className="w-[90px] ml-20 min "
    />
    <div className=" flex mr-[110px]">
      <ul className="flex mr-28 text-[14px] ">
        <Link className="p-3  text-yellow hover:text-white " href="/">TechLeague </Link>
        <Link className="p-3 text-purple hover:text-white" href="">
          TechFestival 
        </Link>
        <Link className="p-3 text-green hover:text-white" href="">
          GrowthHub 
        </Link>
      </ul>
      <div>
        <p className=" text-white">
          
          <span className="font-medium relative bottom-3"> Menu </span>{" "}
          <i className="bx bx-menu text-4xl text-white cursor-pointer" />
        </p>v
      </div>
    </div>
  </div>
    );
}