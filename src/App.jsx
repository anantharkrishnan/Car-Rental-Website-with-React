import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // <-- Import Footer
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Bookings from "./pages/Bookings";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;













 

