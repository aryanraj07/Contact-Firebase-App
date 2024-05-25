import React from "react";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="my-4 h-[60px] bg-white rounded-lg ">
      <div className="flex items-center justify-center gap-2 text-xl font-medium">
        <img src="./logos_firebase.svg" alt="firebase logo" />
        <h1>Firebase Contact App</h1>
      </div>
    </div>
  );
};

export default Navbar;
