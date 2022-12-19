import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Support from "./components/support";
import Slider from "./components/Slider";
// import AllInOne from "./components/all_inOne";
// import Pricing from "./components/pricing";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      {/* <AllInOne />
      <Pricing /> */}
      <Slider />
      <Footer />
    </>
  );
}

export default App;
