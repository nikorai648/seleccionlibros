import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioLibroFinal from "./FormularioLibroFinal";
import TablaLibros from "./TablasLibros";

export default function Home() {
  return (
    <main>
      <h1>Gestión de Libros</h1>
      <FormularioLibroFinal />
      <TablaLibros />
    </main>
  );
}
