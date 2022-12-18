import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Support from "./components/support";
import AllInOne from "./components/all_inOne";
import Pricing from "./components/pricing";
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
      <Footer />
    </>
  );
}

export default App;
