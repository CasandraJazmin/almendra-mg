import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.API_KEY, // "AIzaSyA6OTqwsi4njaw6-Ox8C3PaW1zfu5co1p0",
  authDomain: "almendramcg-da45f.firebaseapp.com",
  projectId: "almendramcg-da45f",
  storageBucket: "almendramcg-da45f.appspot.com",
  messagingSenderId: "26172417430",
  appId: "1:26172417430:web:d43ebf9cf48a67d83fe9b7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const cargarBDD = async () => {
  const promise = await fetch("./json/productos.json");
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      marca: prod.marca,
      modelo: prod.modelo,
      idCategory: prod.idCategory,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img,
    });
  });
};
export const getProducto = async (id) => {
  const prod = await getDoc(doc(db, "productos", id));
  const item = { ...prod.data(), id: prod.id };
  return item;
};
export const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};
export const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: objProducto.nombre,
    marca: objProducto.marca,
    modelo: objProducto.modelo,
    idCategory: objProducto.idCategory,
    stock: objProducto.stock,
    precio: objProducto.precio,
    img: objProducto.img,
  });

  return estado;
};

export const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info);
  return estado;
};

export const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, "productos", id));
  return estado;
};

//CREATE AND READ ORDENES DE COMPRA

export const createOrdenCompra = async (ordenCompraParams) => {
  console.log(ordenCompraParams);
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), ordenCompraParams);

  return ordenCompra;
};

export const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(db, "ordenCompra", id));
  const ordenCompra = { ...item.data(), id: item.id };
  return ordenCompra;
};
