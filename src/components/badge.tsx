export default function Badge({ texto, variante }) {
  if (!texto) return null;

  return (
    <span className={`badge badge--${variante}`}>
      {texto}
    </span>
  );
}