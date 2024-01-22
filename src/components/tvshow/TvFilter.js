import React from "react";
import Category from "./filter/Category";
import SortShows from "./filter/SortShows";

const TvFilter = () => {
  return (
    <div className="flex flex-col gap-10">
      <SortShows />
      <Category />
    </div>
  );
};

export default TvFilter;
