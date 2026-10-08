const ROTULO_ACCESIBILIDAD = {
  adaptado: 'Adaptado a personas con movilidad reducida',
  'sin adaptar': 'Sin adaptar',
  parcial: 'Partcialmente adaptado',
};
export default function Specs({ vivienda }) {
  if (!vivienda) return null;

  const {
    tipologia,
    superficie,
    planta,
    ascensor,
    accesibilidad,
    dormitorios
  } = vivienda;

  const textoDormitorios = dormitorios ? `${dormitorios} dorm.` : null;

  const textoPlanta = planta !== undefined && planta !== null ? `Planta ${planta}` : null;
  const textoAscensor = ascensor === false ? 'sin ascensor' : null;

  
  const textoAccesibilidad = accesibilidad && ROTULO_ACCESIBILIDAD[accesibilidad] 
    ? ROTULO_ACCESIBILIDAD[accesibilidad] 
    : 'sin datos';

  const lineaSpecs = [tipologia, superficie && `${superficie} m²`, textoDormitorios, textoPlanta, textoAscensor]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="tarjeta__specs">
      <p>{lineaSpecs}</p>
      <p className="tarjeta__accesibilidad">
        <strong>Accesibilidad:</strong> {textoAccesibilidad}
      </p>
    </div>
  );
}