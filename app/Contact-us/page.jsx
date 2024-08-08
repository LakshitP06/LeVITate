"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [error, setError] = useState(""); // Track errors
  const [formErrors, setFormErrors] = useState({}); // Track specific field errors

  const validateForm = (formData) => {
    const errors = {};
    if (formData.get('Name').trim().length < 2) {
      errors.Name = "Name must be at least 2 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.get('Email'))) {
      errors.Email = "Email must be a valid email address.";
    }
    if (formData.get('Message').trim().length < 10) {
      errors.Message = "Message must be at least 10 characters long.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEle = e.target;
    const formData = new FormData(formEle);

    // Validate form data
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwKn6Y1Ns4LJ3MwITyiOd7M9J5hhJY0iJgInvPFI7hQVk8l6c5cA5LQyaSk81bfikjj3A/exec",
        {
          method: "POST",
          mode: 'no-cors',
          body: formData,
        }
      );

      const result = await response.text(); 
      console.log(result);

      setIsSubmitted(true); // Set success state
      setError(""); // Clear any existing errors
      setFormErrors({}); // Clear field errors
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error submitting your form. Please try again."); // Set error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6" style={{ backgroundImage: 'url(/contactbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <motion.div
        className="relative w-full max-w-6xl p-12 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: 'url(/contact_us.jpg)', backgroundPosition: 'center 0px' }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <motion.div
          className="relative z-10 max-w-2xl mx-auto p-12 bg-white bg-opacity-90 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h1>
          {isSubmitted && (
            <div className="mb-6 p-4 bg-blue-100 text-blue-800 border border-blue-300 rounded">
              Your message was successfully sent!
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                id="name"
                name="Name"
                type="text"
                required
                placeholder="Aryan Singh"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              />
              {formErrors.Name && (
                <div className="text-red-600 text-sm mt-1">{formErrors.Name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                id="email"
                name="Email"
                type="email"
                required
                placeholder="aryan@example.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              />
              {formErrors.Email && (
                <div className="text-red-600 text-sm mt-1">{formErrors.Email}</div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="Message"
                required
                placeholder="Type your message here..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                rows="5"
              ></textarea>
              {formErrors.Message && (
                <div className="text-red-600 text-sm mt-1">{formErrors.Message}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
