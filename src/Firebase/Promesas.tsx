import { ILibro } from "@/Interfaces/ILibro";
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./Firebase";

// Registrar un libro
export const registrarLibro = async (libro: ILibro): Promise<void> => {
    try {
        const docRef = await addDoc(collection(db, "libro"), libro);
        console.log("Libro registrado con ID:", docRef.id);
    } catch (error) {
        console.error("Error registrando libro:", error);
        throw new Error("No se pudo registrar el libro");
    }
};

// Obtener todos los libros
export const obtenerLibros = async (): Promise<ILibro[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "libro"));
        const libros: ILibro[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            libros.push({
                id: doc.id,
                nombre: data['nombre'],
                autor: data['autor'],
                editorial: data['editorial'],
                anio: data['año'], // Asegúrate de que este campo coincida en Firestore
                valoracion: data['valoracion'],
                pais: data['pais'],
                sexo: data['sexo'], // Cambia esto si usas "sexomasculino" en Firestore
                genero: data['genero'],
            });
        });

        return libros;
    } catch (error) {
        console.error("Error obteniendo libros:", error);
        throw new Error("No se pudo obtener la lista de libros");
    }
};

// Actualizar un libro existente
export const actualizarLibro = async (id: string, libro: Partial<ILibro>): Promise<void> => {
    try {
        const libroRef = doc(db, "libro", id);
        await updateDoc(libroRef, libro);
        console.log("Libro actualizado:", id);
    } catch (error) {
        console.error("Error actualizando libro:", error);
        throw new Error("No se pudo actualizar el libro");
    }
};

// Eliminar un libro
export const eliminarLibro = async (id: string): Promise<void> => {
    try {
        const libroRef = doc(db, "libro", id);
        await deleteDoc(libroRef);
        console.log("Libro eliminado:", id);
    } catch (error) {
        console.error("Error eliminando libro:", error);
        throw new Error("No se pudo eliminar el libro");
    }
};
