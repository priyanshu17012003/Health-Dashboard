import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();  

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="w-64 bg-green-200 h-[70rem] p-4">
        <h2 className="font-bold text-xl">DashBoard</h2>
        <ul className="mt-4 space-y-2">
          <Link to="/" className={`${isActive("/") ? "bg-green-300" : ""}`}>
            <li className={`p-2 rounded ${isActive("/") ? "bg-green-300" : ""}`}>
              Overview
            </li>
          </Link>
          <Link to="/patients" className={`${isActive("/patients") ? "bg-green-300" : ""}`}>
            <li className={`p-2 rounded ${isActive("/patients") ? "bg-green-300" : ""}`}>
              Patients
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
