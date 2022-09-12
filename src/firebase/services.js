import { db } from "./config";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// collection là đối tượng ví dụ như user{} để lưu api
// da ta chính là dối tượng để thêm vào
export const addDocument = async (collectionName, data) => {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  let data = [];
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
