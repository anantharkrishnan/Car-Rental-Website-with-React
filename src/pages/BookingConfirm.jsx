import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingConfirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  
  useEffect(() => {
    const stateBooking = location.state?.booking;
    if (stateBooking && stateBooking.car) {
      setBooking(stateBooking);
      localStorage.setItem("lastConfirmedBooking", JSON.stringify(stateBooking));
    } else {
      const saved = JSON.parse(localStorage.getItem("lastConfirmedBooking"));
      if (saved && saved.car) {
        setBooking(saved);
      }
    }
  }, [location.state]);

  if (!booking || !booking.car) {
    return (
      <div className="pt-24 text-center ">
        <h2 className="text-xl text-red-500">No booking data found.</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    );
  }

  const { car, name, days } = booking;
  const total = car.pricePerDay * days;

  const handleCancelBooking = () => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = stored.filter(
      (b) =>
        !(
          b.name === booking.name &&
          b.car.id === booking.car.id &&
          b.date === booking.date
        )
    );

    localStorage.setItem("bookings", JSON.stringify(updated));
    localStorage.removeItem("lastConfirmedBooking"); 
    navigate("/bookings");
  };

  return (
    <div className="pt-24 max-w-xl mx-auto text-center bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Booking Confirmed 🎉</h2>
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <p className="text-lg">
        Thank you, <strong>{name}</strong>!
      </p>
      <p>
        You booked <strong>{car.name}</strong> for <strong>{days} day(s)</strong>.
      </p>
      <p className="text-xl font-semibold mt-4 text-blue-700">
        Total: ${total}
      </p>

      <button
        onClick={handleCancelBooking}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cancel Booking
      </button>
    </div>
  );
}

export default BookingConfirm;




