function Formulario() {
  return (
   <main>
        <h2>Bienvenido a Peitos</h2>

        <p>
          Encuentra viviendas de alquiler público asequible.
        </p>

        <section>
          <h3>Buscar vivienda</h3>

          <label>
            Provincia:
            <select>
              <option>Todas</option>
              <option>Pontevedra</option>
              <option>A Coruña</option>
              <option>Lugo</option>
              <option>Ourense</option>
            </select>
          </label>

          <button>Buscar</button>
        </section>
      </main>
  )
}

export default Formulario
 