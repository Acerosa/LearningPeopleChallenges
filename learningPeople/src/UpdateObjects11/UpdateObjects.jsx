import React, { useState } from "react";
import "./index.css"

const Car = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Mercedes",
    model: "Aclass"
  });

  const handleYearChange = (event) => {
    setCar(c => ({ ...c, year: event.target.value }));
  };

  const handleMakeChange = (event) => {
    setCar(c => ({ ...c, make: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar(c => ({ ...c, model: event.target.value }));
  };

  return (
    <div className="car-form">
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
      
      <label className="car-form-label">
        Year:
        <input
          type="number"
          value={car.year}
          onChange={handleYearChange}
          className="car-form-input"
        />
      </label>
      <br />

      <label className="car-form-label">
        Make:
        <input
          type="text"
          value={car.make}
          onChange={handleMakeChange}
          className="car-form-input"
        />
      </label>
      <br />

      <label className="car-form-label">
        Model:
        <input
          type="text"
          value={car.model}
          onChange={handleModelChange}
          className="car-form-input"
        />
      </label>
    </div>
  );
};

export default Car;