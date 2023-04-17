import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div className=" flex justify-between items-center bg-black  h-26 top-0 sticky z-0 p-5 w-[100%] max-w-screen-2xl">
    <img
      src="./images/logo/innovar.png"
      alt="logo"
      className="w-[90px] ml-20 min "
    />
    <div className=" flex mr-[110px]">
      <ul className="flex mr-28 text-[14px] ">
        <li className="p-3  text-yellow hover:text-white ">
          <a href=""> TechLeague </a>
        </li>
        <li className="p-3 text-purple hover:text-white">
          <a href=""> TechFestival </a>
        </li>
        <li className="p-3 text-green hover:text-white">
          <a href=""> GrowthHub </a>
        </li>
      </ul>
      <div>
        <p className=" text-white">
          {" "}
          <span className="font-medium relative bottom-3"> Menu </span>{" "}
          <i className="bx bx-menu text-4xl text-white cursor-pointer" />
        </p>
      </div>
    </div>
  </div>
  {/*innovar container*/}
  <div className=" bg-black h-[100%] pl-64 pt-56 ">
    <p className="text-white text-6xl">we are </p>
    <h1 className="text-white text-8xl font-medium leading-none">INNOVAR</h1>
    <p className="text-white text-2xl leading-tight">
      <span className="text-yellow">
        We implement technology products that fit into your <br />
        business process seamlessly.
      </span>{" "}
      We can build custom made
      <br />
      tools as well as deploy off-th shelf products.
    </p>
    <p> operation issues.</p>
  </div>
  <div className="bg-black h-40" />
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
  </div>
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
  {/*footer container */}
  <div className=" bg-black h-[40vh] flex justify-between items-center pl-4 pr-11 pt-4 ">
    <div className="w-[200px] ">
      <img src="./Images/logo/innovar white text.png" />
      <div className="text-[40px] pt-5 pl-3">
        <a
          href="https://twitter.com/login?lang=en"
          target="_blank"
          className="text-olive "
        >
          <i className="bx bxl-twitter" />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          className="text-olive pl-4"
        >
          <i className="bx bxl-instagram" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="text-olive pl-4"
        >
          <i className="bx bxl-facebook-square" />
        </a>
      </div>
    </div>
    <div className=" text-white font-medium pl-[125px] text-[38px]">
      <p className="pl-5 leading-[20px] ">
        Let's <span className="text-gray">Do</span>{" "}
        <span className="text-yellow">some</span>{" "}
      </p>
      <p className="text-yellow ">
        MAGIC <span className="text-red">Together</span>
      </p>
    </div>
    <form className=" ">
      <label htmlFor="name">Name*</label>{" "}
      <i className="fa-regular fa-paper-plane text-olive text-2xl pr-5 " />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Drop us a message "
        className="w-[480px] h-[55px] pl-6 text-[17px] font-normal text-gray font-medium 
          cursor-[pointer] outline-sky-500  outline-[1px] "
      />
      <p className="text-white pt-4 pl-[50px] text-[22px] font-medium li">
        {" "}
        <i className="bx bxs-file-export text-white text-olive text-3xl pr-[15px] " />{" "}
        Download the Innovar Brand Brochure
      </p>
    </form>
  </div>
  <div className="grid grid-cols-3 w-[100%] h-6">
    <div className="bg-red" />
    <div className="bg-yellow" />
    <div className="bg-olive" />
  </div>
    
    </>
  )
}
