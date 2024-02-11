import React, { useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product() {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(data);

  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState("img");

  return (
    <>
      <div className="mt-10 mx-20 flex">
        <div className="left justify-evenly  flex gap-5">
          <div className="images flex flex-col gap-2 w-[15%]">
            <img
              className=" w-full cursor-pointer"
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img")}
            />
            <img
              className=" w-full cursor-pointer"
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img2")}
            />
          </div>
          <div className="main-image w-[45vw]">
            <img
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes[selectedImg]?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        </div>

        <div className="right ml-10 mt-5 w-full flex flex-col gap-10">
          <div className="heading">
            <h1 className=" font-semibold text-lg">
              {data?.attributes?.title}
            </h1>
            <h1 className=" font-medium text-slate-400 text-sm mt-2">
              MRP inclusive of all taxes
            </h1>
            <h1 className="text-xl mt-2">&#8377;{data?.attributes?.price}</h1>
          </div>

          <div className="desc">
            <p className=" text-gray-500">
              {data?.attributes?.description}
            </p>
          </div>

          <div className=" h-10 w-24 rounded-lg border flex items-center justify-between">
            <button
              className=" bg-slate-400 h-full w-1/3"
              onClick={(e) =>
                setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
              }
            >
              -
            </button>
            <span className="h-full w-1/3 flex items-center justify-center">
              {quantity}
            </span>
            <button
              className=" bg-slate-400 h-full w-1/3"
              onClick={(e) => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <div className="order flex w-full justify-between">
            <button
              className="py-2 px-14 flex bg-blue-500 text-white items-center justify-center gap-2 w-[48%]"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    desc: data.attributes.description,
                    title: data.attributes.title,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              <span className=" uppercase font-medium">Add TO Cart</span>
            </button>

            <button className="py-2 px-14 flex bg-blue-500 text-white items-center justify-center gap-2 w-[48%]">
              <span className=" uppercase font-medium">Buy Now</span>
            </button>
          </div>

          <div className="flex gap-4">
            <p className="flex text-blue-500 gap-2">
              <FavoriteBorderIcon />
              Add to Wishlist
            </p>
            <p className="flex text-blue-500 gap-2">
              <BalanceIcon />
              Add to Compare
            </p>
          </div>

          <div className="info w-full border-b-2 border-gray-300">
            <p className=" text-gray-400 w-fit pr-10">Category: Jeans</p>
            <p className=" text-gray-400 w-fit pr-10">Vendor: Polo</p>
            <p className=" text-gray-400  pb-10 w-fit pr-10">
              Tag: Jeans, Men, Bottom
            </p>
          </div>

          <div className="more-info">
            <p className=" uppercase text-gray-400 border-b-2 border-gray-300 py-2 w-fit pr-10">
              Materials
            </p>
            <p className=" uppercase text-gray-400 border-b-2 border-gray-300 py-2 w-fit pr-10">
              Additional Information
            </p>
            <p className=" uppercase text-gray-400 py-2 w-fit pr-10">FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
