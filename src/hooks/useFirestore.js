// import React, { useEffect, useState } from "react";
// import { db } from "../firebase/config";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// export const useGetdata = async (collectionName) => {
//   const querySnapshot = await getDocs(collection(db, collectionName));
//   let data = [];
//   // querySnapshot.forEach((doc) => {
//   //   console.log(`${doc.id} => ${doc.data()}`);
//   //   // console.log(onSnapshot(doc));
//   // });

//   useEffect(() => {
//     const getdata = querySnapshot.docs.map((doc) => {
//       // bug không biết gì thay đổi để useEffect
//       return {
//         ...doc.data(),
//         id: doc.id,
//       };
//     });
//     data = getdata;
//   }, []);
//   return data;
// };
