import DwellingList from './components/DwellingList';
import viviendasData from './data/viviendas12'; 

export default function App() {
  return (
    <main className="main-content">
      <h1>Listado de Viviendas de Peitos</h1>
      <DwellingList viviendas={viviendasData} />
    </main>
  );
}