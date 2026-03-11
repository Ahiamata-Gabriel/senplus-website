import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Stats from "./components/Stats/Stats.jsx";
import Ticker from "./components/Ticker/Ticker.jsx";
import Services from "./components/Services/Services.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
