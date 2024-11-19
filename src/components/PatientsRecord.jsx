import React, { useContext } from 'react';
import { PatientsContext } from '../provider/PatientsProvider';

function PatientsRecord() {
  const { user } = useContext(PatientsContext);

  console.log(user);

  return (
    <>
    <div className='container w-full mt-5 p-4'>
      <h1 className="text-lg font-bold">Patients Record</h1>
      <p>Total Patients: {user.length}</p>
      <div className='flex justify-around'>
        <p>Patients Name</p>
        <p>Patients Age</p>
      </div>
      {user.length === 0 ? (
        <p className='text-center'>No records available</p>
      ) : (
        user.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded grid grid-cols-2"
          >
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-xl">{item.age}</p>
            
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default PatientsRecord;
