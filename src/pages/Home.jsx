import Hero from "../Components/Hero/Hero.jsx";
import Ticker from "../Components/Ticker/Ticker.jsx";
import Stats from "../Components/Stats/Stats.jsx";
import Services from "../Components/Services/Services.jsx";
import CTA from "../Components/CTA/CTA.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <CTA />
    </main>
  );
}
