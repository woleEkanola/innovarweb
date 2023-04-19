import React from 'react'

export const AboutPage = () =>{
    return(
        <>
        {/*who we are container */}
  <div className="pt-[160px] pl-[190px] text-gray">
    <h1 className="text-[60px] text-olive/60">Who we are...</h1>
    <p className="text-[28px] max-w-[700px]">
      We are designers, developers, writers, thinkers, and problem solvers.
      Small enough to be simple and fast, but big enough to deliver your project
      scope at the pace you need. You can learn more about us, check the latest
      on Instagram and Twitter or apply to join our team.{" "}
    </p>
  </div>
  <div className="w-[70%] m-auto pt-[100px]">
    <img src="./Images/Office Background Logo Mockup (2).jpg" />
  </div>
  <div className="w-[70%] m-auto pt-[80px] pb-[80px]">
    <img src="./Images/img.jpg" />
  </div>
  {/*innovars creed container */}
  <div className="bg-red h-[70vh] flex justify-center items-center pl-[64px] pr-[70px]">
    <div className="w-[49%] pr-16 text-right text-xl text-pink-100/50">
      <p>
        Our goal is to proffer lasting, scalable and affordable tech solutions
        to our clients business problems, at the heart of our operations is
        understanding the clients modus <br />
        operandi and their end game,thereby our solutions will feel natural and
        easy to use for their staffs.
      </p>
    </div>
    <div className="text-7xl pl-16 border-pink-100/50 border-l-4 text-pink-100/50">
      <p>
        innovar's <br /> CREED{" "}
      </p>
    </div>
  </div>
  </>
  
    );
}