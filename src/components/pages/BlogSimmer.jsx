import React from "react";
import CardSearchBar from "./CardSearchBar";
import CardSelectMenu from "./CardSelectMenu";

function BlogSimmer() {
  //  new Array(10).fill(1).map((el) => {}) // creating multiple element
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center my-12 px-2">
          <CardSearchBar />
          <CardSelectMenu />
        </div>
      </div>
      
      <div className="max-w-[1320px] mx-auto flex flex-wrap text-center justify-evenly mt-16">
        {Array.from({ length: 50 }).map((el,i) => {
          return (
            <div key={i} className="w-64 h-80 p-4 shadow-xl mb-4 bg-white rounded-md cursor-pointer">
              <div className="h-60">
                <img className="" alt="" />
              </div>
              <div>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogSimmer;
