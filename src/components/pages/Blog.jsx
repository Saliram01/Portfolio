import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSearchBar from "./CardSearchBar";
import CardSelectMenu from "./CardSelectMenu";
import BlogSimmer from "./BlogSimmer";

function Blog() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const [data, setApiData] = useState([]);

  useLayoutEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
      });
  }, []);

  if(data.length === 0 ){
    return(<BlogSimmer/>)
  }

  return (
    <div className="bg-white">
      <div className="w-full ">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-between items-center my-12 px-2">
            <CardSearchBar fun1={setSearch} />
            <CardSelectMenu f2={setSelect} />
          </div>
          <div className=" flex flex-wrap items-center justify-center gap-2">
            {data
              .filter((sel) => {
                return sel.brand.includes(select);
              })
              .filter((item) => {
                return item.model.toLowerCase().includes(search);
              })
              .map((v) => {
                return (
                  <Link to={`/blog/${v.id}`} key={v.id}>
                    <div className="w-64 h-80 p-4 shadow-xl mb-4 bg-white rounded-md cursor-pointer">
                      <div className="h-60">
                        <img className="" src={v.image} alt="" />
                      </div>
                      <div>
                        <p>{v.model}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
