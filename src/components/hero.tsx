function Hero() {
  const availableHomes = 1200; 

  return (
    <section className="hero">
      <h2>Encuentra tu vivienda pública</h2>
      <p>
        Este portal muestra las viviendas disponibles en las convocatorias de
        vivienda pública de Galicia.
      </p>
      <p>
        Viviendas disponibles: <strong>{availableHomes}</strong>
      </p>
    </section>
  );
}

export default Hero;
