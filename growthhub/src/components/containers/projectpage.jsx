import React from 'react'

export const ProjectsPage = () =>{
    return(
        <>
        {/*yellow part container */}
  <div className="bg-yellow h-[1200px] pl-[260px] pr-64">
    {/*project/image part  */}
    <div className="  pt-20">
      <p className="pb-4 text-[20px] font-normal">
        Check out a few of our PROJECTS
      </p>
      <img src="./Images/bbmw app.jpg" className=" h-[380px]" />
    </div>
    <div className="flex font-normal text-xl pt-4 ">
      <div>
        <p>Book by MagicWand</p>
      </div>
      <div className=" pl-36 pr-6 text-red">
        <p>Custom Software Solution</p>
      </div>
      <div className="pl-11 text-red border-red border-l-2">
        <p> UI/UX</p>
      </div>
    </div>
    {/*deploy/card part */}
    <h1 className="pt-[130px] pb-5 font-medium text-[27px]">
      {" "}
      Scenarios we can deploy our expertise:
    </h1>
    <div className="flex gap-8 ">
      <div className="bg-[#f2e6bc] ">
        <img src="./Images/download.jpg" className="p-2 w-[300px]" />
        <div className="pl-5">
          <p className="text-xl p-2 font-medium">Messaging System</p>
          <p className=" w-[260px] text-[12px] text-justify tracking-[1.0px]  leading-5 pl-2 pr-2 pt-1 font-medium">
            We are designers, developers, writers, thinkers and problem solvers.
            Small enough to be simple and fast, but big enough to diliver youe
            scopeat.....
          </p>
          <button className="pr-2 pl-2 text-[14px] font-bold pt-2 pb-4">
            {" "}
            Read More...
          </button>
        </div>
      </div>
      <div className="bg-[#f2e6bc] ">
        <img src="./Images/download.jpg" className="p-2 w-[300px]" />
        <div className="pl-5">
          <p className="text-xl p-2 font-medium">Task Automation</p>
          <p className=" w-[260px] text-[12px] text-justify tracking-[1.0px]  leading-5 pl-2 pr-2 pt-1 font-medium">
            We are designers, developers, writers, thinkers and problem solvers.
            Small enough to be simple and fast, but big enough to diliver youe
            scopeat.....
          </p>
          <button className="pr-2 pl-2 text-[14px] font-bold pt-2 pb-4">
            {" "}
            Read More...
          </button>
        </div>
      </div>
      <div className="bg-[#f2e6bc] ">
        <img src="./Images//download.jpg " className="p-2 w-[300px]" />
        <div className="pl-5">
          <p className="text-xl p-2 font-medium">Business Emails</p>
          <p className=" w-[260px] text-[12px] text-justify tracking-[1.0px]  leading-5 pl-2 pr-2 pt-1 font-medium">
            We are designers, developers, writers, thinkers and problem solvers.
            Small enough to be simple and fast, but big enough to diliver youe
            scopeat.....
          </p>
          <button className="pr-2 pl-2 text-[14px] font-bold pt-2 pb-4">
            {" "}
            Read More...
          </button>
        </div>
      </div>
    </div>
  </div></>
    );
}