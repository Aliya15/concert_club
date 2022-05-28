import './App.scss';
import Header from "./components/Header";
import Poster from "./components/Poster";
import ProfilesList from "./components/ProfilesList";
import AboutBlock from "./components/AboutBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <main>
            <Poster />
            <ProfilesList />
            <AboutBlock />
        </main>
        <Footer />
    </div>
  );
}

export default App;
