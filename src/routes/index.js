import Home from "@/pages/Home";
import GioiThieu from "@/pages/Gioithieu";
import DuanDauTu from "@/pages/Duandautu";
import TinTuc from "@/pages/Tintuc";
import TuyenDung from "@/pages/Tuyendung";
import LienHe from "@/pages/Lienhe";
import QuanHeCoDong from "@/pages/Quanhecodong";
import Chitiettintuc from "@/pages/Chitiettintuc";
// Public routes
const publicRoutes = [
  { path: "/", component: Home, layout: "home" },
  { path: "/GioiThieu", component: GioiThieu, namePage: "Giới Thiệu" },
  { path: "/DuanDauTu", component: DuanDauTu, namePage: "Dự án đầu tư" },
  { path: "/TinTuc", component: TinTuc, namePage: "tin tức" },
  { path: "/TuyenDung", component: TuyenDung, namePage: "tuyển dụng" },
  { path: "/LienHe", component: LienHe, namePage: "liên hệ" },
  {
    path: "/QuanHeCoDong",
    component: QuanHeCoDong,
    namePage: "quan hệ cổ đông",
  },
  {
    path: "/Chitiettintuc",
    component: Chitiettintuc,
    namePage: "Chi tiết tin tức",
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
