import React from 'react'

function MetricsCard() {

    const data = [
        { title: "Nurses", value: "35"},
        { title: "Patients", value: "2650" },
        { title: "Room Availability", value: "874"},
      ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow rounded flex justify-between items-center"
        >
          <div>
            <h3 className="text-sm font-bold">{item.title}</h3>
            <p className="text-xl text-green-500">{item.value}</p>
            
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default MetricsCard
