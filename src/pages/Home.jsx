import Hero from "../Components/Hero/Hero.jsx";
import Ticker from "../Components/Ticker/Ticker.jsx";
import Stats from "../Components/Stats/Stats.jsx";
import Services from "../Components/Services/Services.jsx";
import CTA from "../Components/CTA/CTA.jsx";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="ticker">
        <Ticker />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <CTA />
      </div>
    </main>
  );
}
