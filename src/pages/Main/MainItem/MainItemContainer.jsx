import React from "react";

import MainImage from "./MainImage";
import MainInfo from "./MainInfo";

const MainItem = () => {
  return (
    <div className="row gx-4 gx-lg-5 align-items-center my-5">
      <MainImage />
      <MainInfo />
    </div>
  );
};

export default MainItem;
