import React, { useState, useEffect } from "react";
import api from "../api";

//component form for updating or adding one machine

const CarForm = ({  carToEdit, setCarToEdit, refresh }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    registration_number: "",
    owner: "",
    color: "",
    address: "",
  });
  useEffect(() => {
    if (carToEdit) {
      setFormData({
        make: carToEdit.make,
        model: carToEdit.model,
        color: carToEdit.color,
        registration_number: carToEdit.registration_number,
        owner: carToEdit.owner,
        address: carToEdit.address,
      });
    }
  }, [carToEdit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (carToEdit) {
        await api.put(`/cars/${carToEdit._id}`, formData);
      } else {
        await api.post("/cars/add", formData);
        
      }

      setFormData({make: "", model: "", color: "", registration_number: "",
        owner: "", owners: [], address: "",
      });
      refresh();
      setCarToEdit(null);
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div>
      <h2>Add a car to the cars collection</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          placeholder="Make"
        />
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Model"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Color"
        />
        <input
          type="text"
          name="registration_number"
          value={formData.registration_number}
          onChange={handleChange}
          placeholder="Registration Number"
        />
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          placeholder="Owner"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <button
          type="submit"
        >
          {carToEdit ? "Update Car" : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default CarForm;
