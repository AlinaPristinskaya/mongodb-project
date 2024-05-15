
import React, { useEffect, useState } from "react";
import api from "../api";

//the component CarList displays all cars in the database
//The button Edit passes the props to one cars to update it
//The button Delete deletes the car by id

const CarList = ({ setCarToEdit, refresh }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [refresh]);

  const fetchCars = async () => {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Failed to fetch cars", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await api.delete(`/cars/${id}`);
      refresh(); // update list after deleting
    } catch (error) {
      console.error("Failed to delete car", error);
    }
  };

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.make} {car.model} {car.color}- {car.owner}
            <button onClick={() => setCarToEdit(car)}>Edit</button>
            <button onClick={() => deleteCar(car._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
