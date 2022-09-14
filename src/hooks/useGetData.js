import { useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore";

export const useGetdata = (collectionName) => {
  const [data, setData] = useState([]);
  // const [countReturn, setCountReturn] = useState(true);

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, collectionName));
    // if (!countReturn) {
    //   return;
    // }
    querySnapshot.then((data) => {
      const documents = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
        // console.log(doc.data());
      });

      setData(documents);
      // setCountReturn(false);
    });
  }, [collectionName /*, countReturn*/]);
  const dataConvert = data.map((data) => {
    // return {
    //   ...data,
    //   day: `${data.day.toDate().getDate()}/${data.day
    //     .toDate()
    //     .getMonth()}/ ${data.day.toDate().getFullYear()}`,
    // };
    const getDay =
      data.day.toDate().getDate() < 10
        ? `0${data.day.toDate().getDate()}`
        : data.day.toDate().getDate();
    const getMonth =
      data.day.toDate().getMonth() < 10
        ? `0${data.day.toDate().getMonth()}`
        : data.day.toDate().getDate();
    const getHours =
      data.day.toDate().getHours() < 10
        ? `0${data.day.toDate().getHours()}`
        : data.day.toDate().getHours();
    const getMinutes =
      data.day.toDate().getMinutes() < 10
        ? `0${data.day.toDate().getMinutes()}`
        : data.day.toDate().getMinutes();
    return {
      ...data,
      day:
        collectionName !== "shareholders"
          ? `${getDay}/${getMonth}/${data.day.toDate().getFullYear()}`
          : `${getDay}/${getMonth}/${data.day
              .toDate()
              .getFullYear()}  ${getHours}:${getMinutes}`,
    };
  });
  // console.log(dataConvert);
  return dataConvert;
};
