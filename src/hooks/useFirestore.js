import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";

const readData = (collection, condition) => {
  const [documents, setDocuments] = useState([]);
  React.useEffect(() => {
    //collection là đối tượng ví dụ như rooms{} để lưu api
    let collectionRef = db.collection(collection).orderBy("day"); //(mảng phòng) sắp xếp rooms theo thời gian tạo
    if (condition) {
      //nếu có rooms
      if (!condition.compareValue || !condition.compareValue.length) {
        //neu k co kết thúc
        // reset documents data
        setDocuments([]);
        return;
      }
      // vì where k chấp nhận null nên phải điều kiện
      // collectionRef đang chưa rooms sắp xếp theo thời gian
      // collectionRef = collectionRef.where('fieldName','==','uid')

      collectionRef = collectionRef.where(
        // so sánh các conditon nếu trùng return romms
        condition.fieldName, //Đường dẫn để so sánh
        condition.operator, // kiểu so sánh
        condition.compareValue //Giá trị để so sánh
      ); // trả về phòng chứa các id người dùng đó
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    }); //convert ra mảng để sử dụng
    return unsubscribe; // clear
  }, [collection, condition]);

  return documents; // mảng đối tượng rooms
};
export default readData;
