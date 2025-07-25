// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // ✅ Import UserProfile

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> {/* ✅ Use it here */}
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;