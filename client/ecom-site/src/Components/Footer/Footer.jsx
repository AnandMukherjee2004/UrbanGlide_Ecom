import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footer px-48 mt-24 pb-5 ">
      <div className="top flex justify-between text-gray-400 mb-10 font-light text-xs gap-12">
        <div className="item ">
          <h1 className="text-lg text-gray-500">Categories</h1>
          <div className="list flex flex-col gap-2">
            <p>Women</p>
            <p>Men</p>
            <p>Shoes</p>
            <p>Accessories</p>
            <p>New Arrivals</p>
          </div>
        </div>
        <div className="item ">
          <h1 className="text-lg text-gray-500">Links</h1>
          <div className="list flex flex-col gap-2">
            <p>FAQ</p>
            <p>Pages</p>
            <p>Stores</p>
            <p>Compare</p>
            <p>Cookies</p>
          </div>
        </div>
        <div className="item w-1/4 ">
          <h1 className="text-lg text-gray-500 mb-2">About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi eum laboriosam natus iusto minima quisquam
            corporis error sint amet!
          </span>
        </div>
        <div className="item w-1/4">
          <h1 className="text-lg text-gray-500 mb-2">Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi eum laboriosam natus iusto minima quisquam
            corporis error sint amet!
          </span>
        </div>
      </div>

      <div className="bottom flex justify-between items-center">
        <div className="left flex justify-between items-center gap-3 text-gray-400">
          <h1 className=" text-blue-500 font-bold text-xl">URBANGLIDE</h1>
          <span className="text-sm">
            <CopyrightIcon />
            Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <div className="item ">
            <img src="images/payment.png" alt="" className=" h-12 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
