export default function Rent({ renta }) {
  if (renta === null || renta === undefined) return null;

  const rentaFormateada = new Intl.NumberFormat('es-ES').format(renta);

  return (
    <div className="tarjeta__renta">
      <span className="tarjeta__renta-valor">{rentaFormateada} €</span>
      <span className="tarjeta__renta-periodo">/mes</span>
    </div>
  );
}