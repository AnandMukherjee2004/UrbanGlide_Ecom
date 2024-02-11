import React from "react";

function Card({ item }) {
  return (
    <div className="card h-80 w-56">
      <div className="image h-64 relative overflow-hidden ">
        <img
          src={
            import.meta.env.VITE_API_UPLOAD_URL +
            item?.attributes?.img?.data?.attributes?.url
            // item.img
          }
          alt=""
          className="main-image h-full w-full object-cover absolute z-30 hover:opacity-0 transition-all ease-in duration-300"
        />
        <img
          src={import.meta.env.VITE_API_UPLOAD_URL +
            item?.attributes?.img2?.data?.attributes?.url}
          alt=""
          className="second-img h-full w-full object-cover absolute z-20"
        />
      </div>

      <div className="info">
        <p className=" text-slate-500 font-semibold my-2">{item.title}</p>

        <div className="price flex gap-2">
          <span className="old-price text-gray-400 font-light line-through">
            $ {item.oldPrice || item?.attributes.price}
          </span>
          <span className="actual-price font-light">
            $ {item?.attributes?.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
