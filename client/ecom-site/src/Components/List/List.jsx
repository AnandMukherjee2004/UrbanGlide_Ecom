import React from "react";
import Card from "../Card/Card.jsx";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

function List({ subCats, maxPrice, sortOrd, catId }) {
  const id = parseInt(useParams().id);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sortOrd}`
  );

  return (
    <div className="flex w-full justify-between items-center">
      {loading
        ? "loading"
        : data?.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <Card item={item} key={item.id}></Card>
            </Link>
          ))}
    </div>
  );
}

export default List;
