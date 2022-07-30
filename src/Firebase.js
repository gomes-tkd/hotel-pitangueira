import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, deleteDoc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import styles from "./Components/Quartos/RegisteredRoom.module.css";
import React from "react";

const firebaseConfig = {
    apiKey: "AIzaSyA7eQfB22_nltRb_ffFHLECYAGa-dQZbPE",
    authDomain: "hotelpitangueira-api.firebaseapp.com",
    projectId: "hotelpitangueira-api",
    storageBucket: "hotelpitangueira-api.appspot.com",
    messagingSenderId: "533918746482",
    appId: "1:533918746482:web:42f733bc0322da52f7ffeb",
    measurementId: "G-D18EQBRWH4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const roomCollectionRef = collection(db, "quartos");
export const storage = getStorage(app);

export async function getRooms(setData) {
    const data = await getDocs(roomCollectionRef);
    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
}

export async function removeRoom(id) {
        const roomDoc = doc(db, "quartos", id);
        await deleteDoc(roomDoc);
}

export async function updateRoom(id, title, category, description, price) {
    const roomDoc = doc(db, "quartos", id);
    await setDoc(roomDoc, {
       title,
       category,
       description,
       price
   });
}