import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card tittle="React Basics" discription="Learining components" />
      <Card tittle="Props Concept" discription="Passing Data Using Props" />
      <Footer />
    </div>
  );
}

export default App;
