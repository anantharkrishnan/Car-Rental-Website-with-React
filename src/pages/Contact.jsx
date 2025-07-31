import React, { useState } from "react";



function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-500 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md grid md:grid-cols-2 gap-10">
        
       
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We’d love to hear from you! Reach out to us using the contact form or visit one of our nearby locations.
          </p>

          <div className="text-gray-800 space-y-4">
            <p><strong>Company:</strong> AK Car Rents</p>
            <p><strong>Email:</strong> contact@akcarrents.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Our Locations:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Thrissur</li>
              <li>Palakkad</li>
              <li>Ernakulam</li>
              <li>Alappuzha</li>
            </ul>
          </div>
        </div>

        
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 required">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 required">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1 required">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


