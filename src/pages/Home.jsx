import React, { useState, useEffect } from 'react';
import cars from '../data/cars';
import CarList from '../components/CarList';
import Filter from '../components/Filter';
import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/images/car-bg.jpeg";

function Home({ searchTerm }) {
  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    tier: 'All',
    maxPrice: 12000,
  });

  const [selectedCar, setSelectedCar] = useState(null);
  const [availableCars, setAvailableCars] = useState([]);
  const [bookedCarIds, setBookedCarIds] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingTrigger, setBookingTrigger] = useState(false);
  const navigate = useNavigate();

  const loadAvailableCars = () => {
    const booked = JSON.parse(localStorage.getItem('bookedCars')) || [];
    setBookedCarIds(booked);

    const filteredCars = cars.filter((car) => {
      const matchesCategory = filters.category === 'All' || car.category === filters.category;
      const matchesBrand = filters.brand === 'All' || car.brand === filters.brand;
      const matchesTier = filters.tier === 'All' || car.tier === filters.tier;
      const matchesPrice = car.pricePerDay <= filters.maxPrice;

      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesBrand && matchesTier && matchesPrice && matchesSearch;
    });

    setAvailableCars(filteredCars);
  };

  useEffect(() => {
    loadAvailableCars();
  }, [filters, bookingTrigger, searchTerm]);

  const handleBookClick = (car) => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
      alert("You must be logged in/signed up to book a car.");
      navigate("/login");
      return;
    }
    setSelectedCar(car);
  };

  const handleConfirmBooking = (booking) => {
    const prevBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...prevBookings, booking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    const bookedIds = JSON.parse(localStorage.getItem('bookedCars')) || [];
    if (!bookedIds.includes(booking.car.id)) {
      bookedIds.push(booking.car.id);
      localStorage.setItem('bookedCars', JSON.stringify(bookedIds));
    }

    setSelectedCar(null);
    setShowConfirmation(true);
    setBookingTrigger(prev => !prev);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-24 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-3xl font-bold text-gray-400 text-center mb-6">
        Available Cars for Rent
      </h2>

      
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <Filter filters={filters} setFilters={setFilters} />
      </div>

      
      {availableCars.length > 0 ? (
        <div className="space-y-6">
          <CarList
            cars={availableCars}
            onBookClick={handleBookClick}
            bookedCarIds={bookedCarIds}
          />
        </div>
      ) : (
        <div className="text-center text-white mt-12">
          <p className="text-xl">🚗 No cars match your filters or are currently booked.</p>
          <p className="text-sm mt-2">Try adjusting your filters or check back later.</p>
        </div>
      )}

      
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
            <BookingForm
              car={selectedCar}
              onClose={() => setSelectedCar(null)}
              onConfirm={handleConfirmBooking}
            />
          </div>
        </div>
      )}

     
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 text-center w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">✅ Booking Completed!</h3>
            <p className="mb-4">Your booking has been successfully completed.</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              onClick={() => navigate('/bookings')}
            >
              Go to My Bookings
            </button>
            <button
              className="mt-2 text-gray-500 underline"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;




















