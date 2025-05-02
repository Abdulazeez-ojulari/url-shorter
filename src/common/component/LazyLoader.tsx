import React from "react";
import Logo from "../../../favicon.ico"

const LazyLoader: React.FC = () => {
  return (
    <div className="grid place-content-center h-[100svh]">
      <img src={Logo} alt="" className="w-11 mx-auto loader" />
      <p className="text-center font-medium text-lg mt-3">Loading...</p>
    </div>
  );
};

export default LazyLoader;