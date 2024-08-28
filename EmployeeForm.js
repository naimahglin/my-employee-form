import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState(''); // New position state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !position) {
      alert("Please fill out all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const newEmployee = { name, email, phone, position }; // Include position in the new employee object
    addEmployee(newEmployee);
    setName('');
    setEmail('');
    setPhone('');
    setPosition(''); // Reset position field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h1>Add Employee</h1>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label>Position:</label>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)} // Corrected Position Input
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;
