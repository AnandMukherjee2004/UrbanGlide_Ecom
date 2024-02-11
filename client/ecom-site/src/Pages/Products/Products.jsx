import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Products() {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(0);
  const [sortOrd, setSortOrd] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`
  );
  const handleOnChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCats);

  return (
    <div className=" flex mt-12">
      <div className="left ml-20 w-64 flex flex-col gap-6">
        <div className="product-cat">
          <h1 className="text-xl font-semibold mb-4">Product Categories</h1>

          {data?.map((item) => (
            <div className="input-item" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleOnChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filter">
          <h1 className="text-xl font-semibold mb-4">Filter by Price</h1>
          <span>0</span>
          <input
            type="range"
            step={500}
            min={0}
            max={10000}
            onChange={(e) => setMaxPrice(e.target.value)}
            name=""
            id="price"
          />
          <span>{maxPrice}</span>
        </div>
        <div className="sort">
          <h1 className="text-xl font-semibold mb-4">Sort by</h1>
          <div className="input-item">
            <input
              type="radio"
              name="sort"
              value="asc"
              id="asc"
              onChange={(e) => setSortOrd("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              name="sort"
              value="desc"
              id="desc"
              onChange={(e) => setSortOrd("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>

      <div className="right w-[65vw] mx-20">
        <img
          src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" h-[40vh] w-screen object-cover"
        />
        <div className="mt-5">
          <List
            maxPrice={maxPrice}
            catId={catId}
            sortOrd={sortOrd}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
