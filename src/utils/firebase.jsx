// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, getDoc, doc, query, where, updateDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLJPUn1lle1tRXtpgqVZbRFqfxf1Pz-c",
  authDomain: "ecommerce-react-7447c.firebaseapp.com",
  projectId: "ecommerce-react-7447c",
  storageBucket: "ecommerce-react-7447c.appspot.com",
  messagingSenderId: "272745883878",
  appId: "1:272745883878:web:c399ec4170f566f39af327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export const getItems = async () => {
  const productsCollectionRef = collection(database, "productos")

  const snapshot = await getDocs(productsCollectionRef)
  return snapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })
}

export const getSingleItem = async (id) => {
  const productsCollectionRef = collection(database, "productos")

  const productRef = doc(productsCollectionRef, id)
  const snapshot = await getDoc(productRef)
  return { ...snapshot.data(), id: snapshot.id }
}

export const getItemsByCategory = async (category) => {
  const productsCollectionRef = collection(database, "productos")
  const q = query(productsCollectionRef, where("category", "==", category))
  const querySnapshot = await getDocs(q)

  return querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } })
}

export const updateItemStock = async (prod) => {
  const queryDocUpdate = doc(database, "productos", prod.id)

  updateDoc(queryDocUpdate, { stock: prod.stock - prod.quantity })
    .catch(err => console.error(err))
}