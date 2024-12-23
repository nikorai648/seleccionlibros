import Image from "next/image";
import styles from "./page.module.css";
import FormularioLibro from "./FormularioLibro";
import FormularioLibroFinal from "./FormularioLibroFinal";
import TablaLibros from "./TablasLibros";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <FormularioLibroFinal></FormularioLibroFinal>
    <TablaLibros></TablaLibros>
    </>
  )
  }
