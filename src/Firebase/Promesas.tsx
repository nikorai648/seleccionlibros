import { ILibro } from "@/Interfaces/ILibro";
import { addDoc, collection, doc, getDocs, setDoc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from "./Firebase";

// Registrar un libro
export const registrarLibro = async(libro: ILibro) => {
    const docRef = await addDoc(collection(db, "libro"), libro);
}

// Obtener todos los libros
export const obtenerLibros = async () => {
    const querySnapshot = await getDocs(collection(db, "libro"));
    let libros: ILibro[] = [];

    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        // Crear un objeto ILibro a partir de los datos del documento
        let libro: ILibro = {
            id: doc.id, // El id está disponible directamente como doc.id
            nombre: doc.data()['nombre'],
            autor: doc.data()['autor'],
            editorial: doc.data()['editorial'],
            anio: doc.data()['año'], // Asegúrate de que el campo coincida con el nombre exacto en Firestore
            valoracion: doc.data()['valoracion'],
            pais: doc.data()['pais'],
            sexo: doc.data()['sexomasculino'],
            genero: doc.data()['genero']
        };

        libros.push(libro);
    });

    return libros;
}

// Actualizar un libro existente
export const actualizarLibro = async (id: string, libro: Partial<ILibro>) => {
    try {
        const libroRef = doc(db, "libro", id);
        await updateDoc(libroRef, libro);
        console.log("Libro actualizado:", id);
    } catch (error) {
        console.error("Error actualizando libro:", error);
    }
}

// Eliminar un libro
export const eliminarLibro = async (id: string) => {
    try {
        const libroRef = doc(db, "libro", id);
        await deleteDoc(libroRef);
        console.log("Libro eliminado:", id);
    } catch (error) {
        console.error("Error eliminando libro:", error);
    }
}
