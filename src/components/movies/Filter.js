import React from "react";
import Sort from "./filter/Sort";
import Category from "./filter/Category";

const Filter = () => {
  return (
    <div className="flex flex-col gap-10">
      <Sort />
      <Category />
    </div>
  );
};

export default Filter;
