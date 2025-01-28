import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/StoreContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
const Latest_Collection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-2xl md:text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the.
        </p>
      </div>
      {/* --------rending Products ----- */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest_Collection;
