import { useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore";

export const useGetdata = (collectionName) => {
  const [data, setData] = useState([]);
  const querySnapshot = getDocs(collection(db, collectionName));
  useEffect(() => {
    querySnapshot.then((data) => {
      const documents = data.docs.map((doc) => {
        return doc.data();
        // console.log(doc.data());
      });
      setData(documents);
      // console.log(data);
    });
  }, [collectionName, querySnapshot]);

  return data;
};
