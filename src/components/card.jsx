import Card from './ui/Card';
import Badge from './ui/Badge';
import Rent from './ui/Rent';
import Specs from './ui/Specs';

export default function DwellingCard({ vivienda, variante = 'rejilla' }) {
  if (!vivienda) return null;

  const { estado, referencia, municipio, provincia, renta } = vivienda;
  const ubicacion = municipio === provincia || !provincia 
    ? municipio 
    : `${municipio}, ${provincia}`;

  const varianteBadge = estado?.toLowerCase() === 'disponible' ? 'disponible' : 'adjudicada';

  return (
    <Card className={`tarjeta--${variante}`}>
      {/*Etiqueta de estado */}
      {estado && <Badge texto={estado} variante={varianteBadge} />}

      {/*Referencia */}
      {referencia && <h3 className="tarjeta__ref">Ref: {referencia}</h3>}

      {/*Municipio y provincia */}
      {ubicacion && <p className="tarjeta__ubicacion">{ubicacion}</p>}

      {/*Especificaciones técnicas y accesibilidad */}
      <Specs vivienda={vivienda} />

      {/*Renta */}
      <Rent renta={renta} />
    </Card>
  );
}