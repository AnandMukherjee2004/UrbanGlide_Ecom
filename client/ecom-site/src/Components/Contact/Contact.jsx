import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact w-full flex justify-center gap-28 items-center text-white h-14 bg-blue-500">
      <div className="left-con">
        <h3 className=" uppercase text-sm font-semibold">
          Be in touch with us
        </h3>
      </div>
      <div
        className="center-con flex gap-2
      "
      >
        <input
          type="text"
          className="border border-white rounded-lg text-black px-3"
        />
        <button className="border border-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600  transition-all ease-in duration-100 font-semibold uppercase bg-gray-700 text-xs">
          Join Us
        </button>
      </div>
      <div className="right-con flex gap-3">
        <FacebookIcon className=" h-10 hover:cursor-pointer" />
        <InstagramIcon className=" h-10 hover:cursor-pointer" />
        <GoogleIcon className=" h-10 hover:cursor-pointer" />
        <PinterestIcon className=" h-10 hover:cursor-pointer" />
        <LinkedInIcon className=" h-10 hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default Contact;
