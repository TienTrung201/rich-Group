import { createSlice } from "@reduxjs/toolkit";

import Education from "../../../../assets/images/headerFooter/education.png";
import cart from "../../../../assets/images/headerFooter/cart.png";
import building from "../../../../assets/images/headerFooter/building.png";
import hand from "../../../../assets/images/headerFooter/hand.png";
import loader from "../../../../assets/images/headerFooter/loader.png";

export const headerSlice = createSlice({
  name: "headerSlice",
  initialState: {
    banner: [
      {
        src: Education,
        name: "Giáo dục đào tạo",
      },
      {
        src: cart,
        name: "Thương mại",
      },
      {
        src: building,
        name: "Bât động sản",
      },
      {
        src: hand,
        name: "Công nghệ",
      },
      {
        src: loader,
        name: "truyền thông",
      },
    ],
  },
});
export default headerSlice;
