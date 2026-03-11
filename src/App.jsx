import "./styles/global.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Stats from "./Components/Stats/Stats.jsx";
import Ticker from "./Components/Ticker/Ticker.jsx";
import Services from "./Components/Services/Services.jsx";
import CTA from "./Components/CTA/CTA.jsx";
import Footer from "./Components/Footer/Footer.jsx";

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
