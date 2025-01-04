import React, { useState } from 'react';
import '../styles/ServicesPage.css';

function ServicesPage() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>We offer various services for your needs.</p>
      <button className="btn" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <h3>Service 1: Web Development</h3>
          <h3>Service 2: Mobile App Development</h3>
          <h3>Service 3: Cloud Solutions</h3>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;

