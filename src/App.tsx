import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Topproducts from "./components/Topproducts.tsx";
import Firstorder from "./components/Firstorder.tsx";
import ExploreMore from "./components/ExploreMore.tsx";
import AboutBanner from "./components/AboutBanner.tsx";
import Featured from "./components/Featured.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Topproducts />
      <Firstorder />
      <ExploreMore />
      <AboutBanner />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
