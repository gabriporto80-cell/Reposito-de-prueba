import DwellingCard from './DwellingCard';

export default function DwellingList({ viviendas = [] }) {
  // Si no hay viviendas o la lista está vacía, muestra un mensaje de aviso
  if (!viviendas || viviendas.length === 0) {
    return (
      <div className="lista-vacia">
        <p>No hay viviendas disponibles para mostrar en este momento.</p>
      </div>
    );
  }

  // Si hay viviendas, recorre la lista y pinta una DwellingCard por cada una
  return (
    <div className="contenedor-viviendas">
      {viviendas.map((vivienda) => (
        <DwellingCard key={vivienda.id} vivienda={vivienda} />
      ))}
    </div>
  );
}