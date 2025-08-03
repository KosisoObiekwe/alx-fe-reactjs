// src/App.jsx
import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Add this line

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <MainContent />
      <Counter /> {/* ✅ Add this line */}
      <Footer />
    </div>
  );
}

export default App;
