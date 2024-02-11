import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import React from "react";

function FeatureProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts mx-40 my-20">
      <div className="top flex w-full justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-600 ">
          {type} Products
        </h1>
        <p className="w-1/2 text-gray-400 font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur
          cumque, tempore eligendi aut sit in neque reprehenderit dignissimos
          nulla, eum alias. Tempora odio delectus assumenda, perferendis tempore
          cum!
        </p>
      </div>
      <div className="bottom flex gap-12 my-10 w-full justify-center flex-wrap">
        {loading
          ? "Loading"
          : error
          ? "something went Wrong"
          : data?.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <Card item={item} />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default FeatureProducts;
