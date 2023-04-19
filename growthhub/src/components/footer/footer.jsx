import React from 'react'

export  const  Footer = () =>{
  return (
    <>
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
  );
}

