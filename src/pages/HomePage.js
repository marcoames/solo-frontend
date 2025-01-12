// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './views/HomePage.css'; // Import the specific styles for HomePage

function HomePage() {
  return (
    <div className="HomePage">
      <header className="App-header">
        <h1>SOLO</h1>
        <p>Your home away from home</p>
        <div className="App-buttons">
          <button onClick={() => alert('Explore Rooms clicked!')}>
            Explore Rooms
          </button>
          <button onClick={() => alert('Make a Reservation clicked!')}>
            Make a Reservation
          </button>
          <button onClick={() => alert('About Us clicked!')}>
            About Us
          </button>
        </div>
      </header>

      <main className="App-main">
        {/* Developer Buttons for Navigation */}
        <div className="App-dev-buttons">
          <Link to="/create-user">
            <button>Create User</button>
          </Link>
          <Link to="/create-cabin">
            <button>Create Cabin</button>
          </Link>
          <Link to="/create-reservation">
            <button>Create Reservation</button>
          </Link>
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2025 SOLO, All rights reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
