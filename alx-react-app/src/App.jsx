// src/App.jsx
import React from 'react';
import Header from './components/Header';      // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer';      // Import Footer component
import WelcomeMessage from './components/WelcomeMessage'; // Import the WelcomeMessage component

function App() {
  return (
    <div>
      <Header />         {/* Include Header */}
      <WelcomeMessage /> {/* Include WelcomeMessage */}
      <MainContent />    {/* Include MainContent */}
      <Footer />         {/* Include Footer */}
    </div>
  );
}

export default App;
