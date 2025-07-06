import "./App.css";
import NavBar from "./components/NavComponent/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <section className="flex flex-col items-center justify-evenly w-dvw mb-20">
        <Home />

        <About />

        <Work />
      </section>

      <Footer />
    </>
  );
}

export default App;
