// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the component-specific styles

// Import Pages
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import CreateHotelPage from './pages/CreateHotelPage';
import CreateReservationPage from './pages/CreateReservationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define Routes for Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/create-hotel" element={<CreateHotelPage />} />
          <Route path="/create-reservation" element={<CreateReservationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
