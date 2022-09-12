// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { shareholders } from "@/pages/Quanhecodong/QuanHeCoDongSlice";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm i react-router-dom
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "@/components/Layout";
import { newspapers } from "./pages/Chitiettintuc/ChiTietTinTucSlice";
import Chitiettintuc from "./pages/Chitiettintuc";
import "./pages/Quanhecodong/QuanHeCoDongSlice";
import { addDocument } from "./firebase/services";

function App() {
  addDocument("news", {
    title: "Campuchia nói 9 nước đề nghị phối hợp chống buôn người",
    content:
      "Bộ Ngoại giao Campuchia cho hay nhận được đề nghị từ đại sứ quán 9 nước trong hợp tác chống buôn người và giải cứu công dân trong 6 tháng qua./Ông Chum Sounry cho biết trong nửa đầu năm 2022, chính phủ Campuchia đã nhận được đề nghị từ đại sứ quán 9 nước về hợp tác hỗ trợ giải cứu công dân bị lừa sang quốc gia Đông Nam Á này và đưa vào các cơ sở lao động cưỡng ép. Những nước đề nghị hợp tác chống buôn người với Campuchia trong 6 tháng qua gồm Bangladesh, Ấn Độ, Indonesia, Malaysia, Mông Cổ, Nepal, Pakistan, Philippines và Thái Lan./Bộ trưởng Nội vụ Sar Kheng tuần này nhận định nhiều băng nhóm tội phạm quốc tế đang lợi dụng tình trạng hạn chế về nguồn lực của giới chức sở tại để tổ chức hoạt động lừa đảo. Tuy nhiên, ông khẳng định chính phủ Campuchia sẽ không để yên cho tình trạng này tiếp diễn và đang ra quân truy quét./Người phát ngôn Bộ Ngoại giao Lê Thị Thu Hằng trong cuộc họp báo hôm 25/8 cho biết các cơ quan chức năng đã cứu thoát, đưa về Việt Nam an toàn hơn 500 công dân và hỗ trợ thủ tục cho hàng nghìn người khác tại Campuchia. Trong 6 tháng đầu năm nay, Bộ Công an đã triệt phá nhiều ổ nhóm, bắt giữ nhiều đối tượng đưa người đi lao động trái phép ở Campuchia và phát cảnh báo công dân liên quan đến vấn đề này./Bộ Ngoại giao Việt Nam cũng đã đề nghị Campuchia tăng cường kiểm tra, rà soát các cơ sở lao động, đặc biệt là những cơ sở kinh doanh giải trí để kịp thời phát hiện, ngăn chặn, xử lý những trường sử dụng lao động bất hợp pháp, bảo vệ và giải cứu những trường hợp lao động nước ngoài, trong đó có công dân Việt Nam, bị chủ sở hữu bóc lột.",
    type: "Tin tạp chí",
    src: "camPuchia.jpg",
    hotNew: false,
    path: "hanh-trinh-cui-4-nguoi-o-campuchia",
    comment: 2,
  });
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout namePage={route.namePage} Layout={route.layout}>
                    {<Page />}
                  </Layout>
                }
              />
            );
          })}
          {newspapers.map((news, index) => {
            let Layout = DefaultLayout;
            return (
              <Route
                key={news.id}
                path={`/Chitiettintuc/${news.path}`}
                element={
                  <Layout namePage="Chi tiết tin tức" Layout="">
                    <Chitiettintuc news={news} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
