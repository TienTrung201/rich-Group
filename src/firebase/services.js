import { db } from "./config";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

// collection là đối tượng ví dụ như user{} để lưu api
// da ta chính là dối tượng để thêm vào
export const addDocument = async (collectionName, data) => {
  try {
    const timeNews = serverTimestamp();
    await addDoc(collection(db, collectionName), {
      ...data,
      day: timeNews,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  //   // console.log(onSnapshot(doc));
  // });

  const getdata = querySnapshot.docs.map((doc) => {
    // bug không biết gì thay đổi để useEffect
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // console.log(getdata);
  return getdata;
};

export const getdataTest = (collectionName) => {
  const querySnapshot = getDocs(collection(db, collectionName));
  let data = [];
  querySnapshot.then((data) => {
    data.docs.forEach((doc) => {
      console.log(doc.data());
    });
    console.log(data);
  });
  return data;
};
