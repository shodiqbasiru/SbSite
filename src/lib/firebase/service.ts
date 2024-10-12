import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import app from "./init";

const db = getFirestore(app);

export async function retrieveData(collectionString: string) {
  const snapshot = await getDocs(collection(db, collectionString));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionString: string, id: string) {
  const fireDoc = doc(db, collectionString, id);
  const snapshot = await getDoc(fireDoc);
  return snapshot.data();
}

export async function addData(collectionString: string, data: any) {
  const fireDoc = doc(collection(db, collectionString));
  return await setDoc(fireDoc, data);
}


export async function updateData(collectionString: string, id: string, data: any) {
  const fireDoc = doc(db, collectionString, id);
  return await updateDoc(fireDoc, data);
}

export async function deleteData(collectionString: string, id: string) {
  const fireDoc = doc(db, collectionString, id);
  return await deleteDoc(fireDoc);
}