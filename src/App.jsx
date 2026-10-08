import Header from "./components/Header";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="contenedor">
        <Formulario />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
