import React from "react";
import PatientsDetails from "../components/PatientsDetails";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function PatientsTab() {
  return (
    <>
      <div className="flex flex-row flex-auto">
        <Sidebar />
        <div className="flex flex-col flex-auto">
          <Header />
          <PatientsDetails />
        </div>
      </div>
    </>
  );
}

export default PatientsTab;
