import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cars from '../data/cars';
import BookingForm from '../components/BookingForm';

function CarDetails() {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id, 10));

  useEffect(() => {
    const bookedCarIds = JSON.parse(localStorage.getItem('bookedCars')) || [];
    setIsBooked(bookedCarIds.includes(car?.id));
  }, [car?.id]);

  if (!car) {
    return (
      <div className="pt-32 text-center text-gray-600">
        <h2 className="text-2xl font-semibold">🚫 Car Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const handleConfirm = (booking) => {
    const prev = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = [...prev, booking];
    localStorage.setItem("bookings", JSON.stringify(updated));

    const bookedCarIds = JSON.parse(localStorage.getItem("bookedCars")) || [];
    if (!bookedCarIds.includes(car.id)) {
      bookedCarIds.push(car.id);
      localStorage.setItem("bookedCars", JSON.stringify(bookedCarIds));
    }

    setIsBooked(true);
    setShowModal(false);
    setShowConfirmation(true);
  };

  const handleBookClick = () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
      alert("You must be logged in/signed up to book a car.");
      navigate("/login");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 underline mb-4"
      >
        ← Back
      </button>

      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="w-full sm:w-1/2">
          <img
            src={car.image || '/placeholder.jpg'}
            alt={car.name}
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{car.name}</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{car.description}</p>

            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Brand: {car.brand}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Category: {car.category}</span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">Tier: {car.tier}</span>
              <span className={`${car.availability ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"} px-3 py-1 rounded-full`}>
                {car.availability ? "Available" : "Not Available"}
              </span>
              {isBooked && (
                <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full font-semibold">
                  Already Booked
                </span>
              )}
            </div>

            <p className="text-xl font-semibold text-blue-700 mb-2">₹{car.pricePerDay} / day</p>
            <p className="text-gray-600 text-sm">Rating: ⭐ {car.rating}</p>
          </div>

          <button
            onClick={handleBookClick}
            disabled={isBooked}
            className={`mt-6 w-full sm:w-auto px-5 py-2 ${
              isBooked ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium rounded transition`}
          >
            {isBooked ? "Car Already Booked" : "Book Now"}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <BookingForm car={car} onClose={() => setShowModal(false)} onConfirm={handleConfirm} />
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">✅ Booking Confirmed!</h3>
            <p className="mb-4">Your booking for <strong>{car.name}</strong> was successful.</p>
            <button
              onClick={() => navigate("/bookings")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Go to My Bookings
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-2 text-gray-600 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarDetails;
 










