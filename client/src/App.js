import "./App.css";
import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarsOld from "./Components/CarsOld";
import Cars from "./Components/Cars";
import React, { useState } from "react";

function App() {
  const [carToEdit, setCarToEdit] = useState(null);
  //Variable for updating the state App
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh); // toggle refresh state
  };
  return (
    <div>
      <CarForm
        carToEdit={carToEdit}
        setCarToEdit={setCarToEdit}
        refresh={triggerRefresh}
      />
      <CarList setCarToEdit={setCarToEdit} refresh={triggerRefresh} />
      <CarsOld refresh={triggerRefresh}></CarsOld>
      <Cars refresh={triggerRefresh}></Cars>
    </div>
  );
}

export default App;
