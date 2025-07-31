import React from "react";
import { Link } from "react-router-dom";

function CarItem({ car, onBookClick, isBooked }) {
  return (
    <div className="bg-black rounded-xl shadow hover:shadow-lg transition flex flex-col relative">
      <Link to={`/cars/${car.id}`} className="block">
        <img
          src={car.image}
          alt={car.name}
          className="rounded-t-xl h-52 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl text-gray-400 font-semibold">{car.name}</h3>
          <p className="text-gray-400">{car.description}</p>
          <p className="text-sm text-gray-400">Tier: {car.tier}</p>
          <p className="text-lg font-bold text-blue-600">
            ₹{car.pricePerDay}/day
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={() => onBookClick(car)}
          className={`${
            isBooked
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-4 py-2 rounded transition w-full`}
          disabled={isBooked}
        >
          {isBooked ? "Booked" : "Book Now"}
        </button>
      </div>

      {isBooked && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          Booked
        </span>
      )}
    </div>
  );
}

export default CarItem;







