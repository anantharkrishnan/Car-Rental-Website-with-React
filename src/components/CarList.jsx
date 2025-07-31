import React from "react";
import CarItem from "./CarItem";

function CarList({ cars, onBookClick, bookedCarIds }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarItem
          key={car.id}
          car={car}
          onBookClick={onBookClick}
          isBooked={bookedCarIds.includes(car.id)}
        />
      ))}
    </div>
  );
}

export default CarList;







