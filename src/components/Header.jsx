import React from "react";

function Header() {
  return (
    <>
      <div className="p-4 bg-green-50 flex justify-between items-center h-20 w-full">
        <h1 className="text-lg font-bold">Good Morning, Reza</h1>
        <input
          type="text"
          placeholder="Search for anything..."
          className="border rounded px-4 py-1 border-green-500"
        />
      </div>
    </>
  );
}

export default Header;
