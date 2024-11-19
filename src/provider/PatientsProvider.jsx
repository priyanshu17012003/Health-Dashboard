import React from 'react'
import { createContext,useState } from 'react'
import toast from 'react-hot-toast';

export const PatientsContext = createContext();

export const PatientsProvider= ({children})=> {

  

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [file, setFile] = useState(null);
    const [user, setUser] = useState([]);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAgeChange = (e) => {
      setAge(e.target.value);
    };
  
    const handleFile = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser([...user, { name, age, file }]);
      setName("");
      setAge("");
      setFile(null);
      toast.success("Patient Added Successfully");
    };
  
  return (
    <PatientsContext.Provider value={{name,age,file,user,handleNameChange,handleAgeChange,handleFile,handleSubmit}}>
      {children}
    </PatientsContext.Provider>
  )
}



