import React from "react";
import { useContext } from "react";
import { PatientsContext } from "../provider/PatientsProvider";

function PatientsDetails() {
  const {
    name,
    age,
    file,
    user,
    handleNameChange,
    handleAgeChange,
    handleFile,
    handleSubmit,
  } = useContext(PatientsContext);

  const ages=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,
    34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,
    53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,
    72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,
    92,93,94,95,96,97,98,99,100
  ]

  return (
    <>
      <div>
        <form
          className="p-4 bg-white shadow-xl rounded flex flex-col justify-between m-5 space-y-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-lg">Patient Name</label>
          <input
            type="text"
            className="border rounded px-4 py-1 w-full"
            value={name}
            onChange={(e) => handleNameChange(e)}
            required
          />

          <label>Age</label>
          <select
            className="border rounded px-4 py-1"
            value={age}
            onChange={(e) => handleAgeChange(e)}
            required
          >
            <option value="">Select Age</option>
            {ages.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label>File Upload:</label>
          <input
            type="file"
            className="border rounded px-4 py-1 flex"
            onChange={(e) => handleFile(e)}
          />

          <button
            type="submit"
            className="border rounded px-4 py-1 bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PatientsDetails;
