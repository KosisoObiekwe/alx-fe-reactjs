import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // <-- Don't forget this line

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Kosi" age={23} bio="Front-end dev in training 🚀" />
      <MainContent />
      <Counter /> {/* <-- This is where it appears */}
      <Footer />
    </div>
  );
}

export default App;
