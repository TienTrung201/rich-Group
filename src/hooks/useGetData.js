import { useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore";

export const useGetdata = (collectionName) => {
  const [data, setData] = useState([]);
  const [countReturn, setCountReturn] = useState(true);
  const querySnapshot = getDocs(collection(db, collectionName));
  useEffect(() => {
    if (!countReturn) {
      return;
    }
    querySnapshot.then((data) => {
      const documents = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
        // console.log(doc.data());
      });

      setData(documents);
      setCountReturn(false);
    });
  }, [collectionName, querySnapshot, countReturn]);
  const dataConvert = data.map((data) => {
    // return {
    //   ...data,
    //   day: `${data.day.toDate().getDate()}/${data.day
    //     .toDate()
    //     .getMonth()}/ ${data.day.toDate().getFullYear()}`,
    // };
    return {
      ...data,
      day:
        collectionName !== "shareholders"
          ? `${data.day.toDate().getDate()}/${data.day
              .toDate()
              .getMonth()}/${data.day.toDate().getFullYear()}`
          : `${data.day.toDate().getDate()}/${data.day
              .toDate()
              .getMonth()}/${data.day.toDate().getFullYear()}  ${data.day
              .toDate()
              .getHours()}:${data.day.toDate().getMinutes()}`,
    };
  });
  // console.log(dataConvert);
  return dataConvert;
};
