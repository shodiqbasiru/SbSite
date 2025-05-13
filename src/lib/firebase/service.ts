import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

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
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const fireDoc = doc(collection(db, collectionString));
  return await setDoc(fireDoc, data);
}

export async function updateData(
  collectionString: string,
  id: string,
  data: any, // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  const fireDoc = doc(db, collectionString, id);
  return await updateDoc(fireDoc, data);
}

export async function deleteData(collectionString: string, id: string) {
  const fireDoc = doc(db, collectionString, id);
  return await deleteDoc(fireDoc);
}

// export async function saveInitialUser(data: {
//   username: string | undefined;
//   password: string | Buffer | undefined;
// }) {
//   const q = query(
//     collection(db, "users"),
//     where("username", "==", data.username),
//   );

//   const snapshot = await getDocs(q);
//   const user = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   if (user.length > 0) {
//     return { status: false, message: "email already exists" };
//   } else {
//     data.username = process.env.NEXT_PUBLIC_USER_ADMIN;
//     data.password = process.env.NEXT_PUBLIC_PASS_ADMIN;
//     if (data.password) {
//       data.password = await bcrypt.hash(data.password, 10);
//       try {
//         await addDoc(collection(db, "users"), data)
//         return { status: true, message: "user created" };
//       } catch (e) {
//         return { status: false, message: "failed to created user" };
//       }
//     } else {
//       throw new Error("Password is undefined");
//     }
//   }
// }

export async function login(data: { username: string }) {
  const q = query(
    collection(db, "users"),
    where("username", "==", data.username),
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return user ? user[0] : null;
}
