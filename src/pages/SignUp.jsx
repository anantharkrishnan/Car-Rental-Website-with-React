import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    setError("User with this email already exists");
    return;
  }

 
  const updatedUsers = [...users, formData];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Signup successful!");

  
  setFormData({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  setError("");
};


  return (
    <div className="min-h-screen pt-24 px-4 flex justify-center items-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;

