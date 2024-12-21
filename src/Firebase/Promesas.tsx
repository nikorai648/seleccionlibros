import { ILibro } from "@/Interfaces/ILibro";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "./Firebase";
export const registrarLibro = async(libro:ILibro)=>{
    const docRef = await addDoc(collection(db, "libro"), libro);
}
export const obtenerLibros = async ()=>{
    const querySnapshot = await getDocs(collection(db,"alumno"),);
    let libros:ILibro[] = []
    querySnapshot.forEach((doc) =>{

    console.log(doc.id, " => ", doc.data());
    let libro:ILibro = {
        nombre:doc.data()['nombre'],
        autor:doc.data()['autor'],
        editorial:doc.data()['editorial'],
        anio:doc.data()['año'],
        valoracion:doc.data()['valoracion'],
        pais:doc.data()['pais'],
        sexomasculino:doc.data()['sexomasculino'],
        sexofemenino:doc.data()['   sexofemenino'],
        genero:doc.data()['genero'],
    }
        libros.push(libro);
    });
    return libros;
    }
