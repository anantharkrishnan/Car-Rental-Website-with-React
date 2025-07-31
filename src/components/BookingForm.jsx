import React, { useState } from 'react';

function BookingForm({ car, onClose, onConfirm }) {
  const [name, setName] = useState('');
  const [days, setDays] = useState(1);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !days || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const booking = {
      car,
      name,
      days: parseInt(days),
      date,
    };

    onConfirm(booking);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
      <h3 className="text-xl font-semibold mb-4">Book {car.name}</h3>

      <label className="block mb-2">
        Your Name:
        <input
          type="text"
          className="w-full border p-2 mt-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="block mb-2">
        Days to Rent:
        <input
          type="number"
          min="1"
          className="w-full border p-2 mt-1"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </label>

      <label className="block mb-4">
        Start Date:
        <input
          type="date"
          className="w-full border p-2 mt-1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}

export default BookingForm;







