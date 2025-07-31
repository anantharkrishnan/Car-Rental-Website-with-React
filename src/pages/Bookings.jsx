import React, { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const handleCancel = (indexToRemove) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    const bookingToCancel = bookings[indexToRemove];
    const updatedBookings = bookings.filter((_, index) => index !== indexToRemove);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

   
    const bookedCarIds = JSON.parse(localStorage.getItem("bookedCars")) || [];
    const updatedBookedCarIds = bookedCarIds.filter(id => id !== bookingToCancel.car.id);
    localStorage.setItem("bookedCars", JSON.stringify(updatedBookedCarIds));
  };

  if (bookings.length === 0) {
    return (
      <div className="pt-28 text-center text-gray-600 bg-gray-800">
        <p className="text-lg mt-4">You haven't made any bookings yet.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">My Bookings</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {bookings.map((booking, index) => {
          const total = booking.totalCost || booking.days * booking.car.pricePerDay;
          return (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
              <img
                src={booking.car.image}
                alt={booking.car.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{booking.car.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Booked by: <strong>{booking.name}</strong></p>
                  <p className="text-sm text-gray-600">Days: <strong>{booking.days}</strong></p>
                  <p className="text-blue-600 font-semibold mt-1">Total: ${total}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Booked on {new Date(booking.date).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleCancel(index)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;




