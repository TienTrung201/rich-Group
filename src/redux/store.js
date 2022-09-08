import { newsSlice } from "@/pages/Chitiettintuc/ChiTietTinTucSlice";
import { QuanHeCoDongSlice } from "@/pages/Quanhecodong/QuanHeCoDongSlice";
import TuyenDungSlice from "@/pages/Tuyendung/TuyenDungSlice";
import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "../components/Layout/components/Header/headerSlice";
// ý tưởng cho chi tiết tin tức:
//làm như header nhưng chỉ cần truyền API vào children k cần truyền components
const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    Recruitment: TuyenDungSlice.reducer,
    news: newsSlice.reducer,
    shareholders: QuanHeCoDongSlice.reducer,
  },
});

export default store;
