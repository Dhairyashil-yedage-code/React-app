import React from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate programmatically
import '../styles/ErrorPage.css'; // Import the CSS for styling

function ErrorPage() {
  const navigate = useNavigate();

  // Function to navigate back to the homepage
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="go-home-btn" onClick={goToHome}>Go to Homepage</button>
    </div>
  );
}

export default ErrorPage;

