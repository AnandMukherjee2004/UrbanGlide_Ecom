import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="main flex gap-2 justify-center h-[60vh] overflow-hidden">
        <div className="col1 flex flex-col gap-2 h-full">
          <div className="row1 relative flex justify-center items-center">
            <img
              className=" w-80 "
              src="https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />

            <button className="Hover:cursor-pointer absolute h-10 min-w-24 bg-black flex text-white items-center justify-center">
              <Link to="products/4">Shoes</Link>
            </button>
          </div>
          <div className="row1 relative flex justify-center items-center">
            <img
              className="w-80"
              src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button className="Hover:cursor-pointer absolute h-10 min-w-24 bg-black flex text-white items-center justify-center">
              <Link to="products/2">Women</Link>
            </button>
          </div>
        </div>
        <div className="col2 ">
          <div className="row1 relative flex justify-center items-center">
            <img
              className=" w-80 h-[70vh]"
              src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button className="Hover:cursor-pointer absolute h-10 min-w-28 bg-black flex text-white items-center justify-center">
              <Link to="products/3">New Season</Link>
            </button>
          </div>
        </div>
        <div className="col3 flex flex-col gap-2 h-full ">
          <div className="top flex gap-2">
            <div className="row1 relative flex justify-center items-center">
              <img
                className=" w-80"
                src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600 "
                alt=""
              />
              <button className="Hover:cursor-pointer absolute h-10 min-w-28 bg-black flex text-white items-center justify-center opacity-70">
                <Link to="products/1">Men</Link>
              </button>
            </div>
            <div className="row1 relative flex justify-center items-center">
              <img
                className=" w-80"
                src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button className="Hover:cursor-pointer absolute h-10 min-w-28 bg-black flex text-white items-center justify-center opacity-70">
                <Link to="products/5">Accessories</Link>
              </button>
            </div>
          </div>
          <div className="down ">
            <div className="row1 relative flex justify-center items-center">
              <img
                className="w-full h-[40vh]"
                src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button className="Hover:cursor-pointer absolute h-10 min-w-28 bg-black flex text-white items-center justify-center opacity-70">
                <Link to="products/6">Sale</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
