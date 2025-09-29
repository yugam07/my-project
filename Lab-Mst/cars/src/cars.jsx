import React, { useState } from "react";

function App() {
 
  const [cars, setCars] = useState([
    { id: 1, brand: "Toyota", model: "C1", price: 200000 },
    { id: 2, brand: "Honda", model: "A", price: 220000 },
    { id: 3, brand: "Ford", model: "P3", price: 210000 },
  ]);


  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Cars List</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() => deleteCar(car.id)} style={{ color: "white", background: "red", border: "none", borderRadius: 4, padding: "5px 10px", cursor: "pointer" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {cars.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No cars available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;