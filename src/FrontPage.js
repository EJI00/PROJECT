import React from 'react';
import './FrontPage.css';

const FrontPage = () => {
  const txtsty={
    fontFamily:'sans-serif'
  }
  return (
    <div className="front-page">
      <div className="hero-section" style={txtsty}>
        <h1>Welcome to ExpenseEase</h1>
        <p>Track your finances effortlessly!</p>
      </div>
    </div>
  );
};

export default FrontPage;