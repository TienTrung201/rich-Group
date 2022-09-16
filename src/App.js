// import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { shareholders } from "@/pages/Quanhecodong/QuanHeCoDongSlice";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm i react-router-dom
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "@/components/Layout";
import newsSlice from "./pages/Chitiettintuc/ChiTietTinTucSlice"; // newspapers, // newspapers, // newspapers, // newspapers,
import Chitiettintuc from "./pages/Chitiettintuc";
import "./pages/Quanhecodong/QuanHeCoDongSlice";
// import { addDocument } from "./firebase/services";
import { useEffect, useMemo, useState } from "react";
import { useGetdata } from "./hooks/useGetData";
import QuanHeCoDongSlice from "./pages/Quanhecodong/QuanHeCoDongSlice"; // shareholders, // shareholders, // shareholders, // shareholders, // shareholders,
// import { shareholders } from "./pages/Quanhecodong/QuanHeCoDongSlice";
// import { Listnewspapers } from "./redux/selector";
// import { addDocument } from "./firebase/services";
// import { shareholders } from "./pages/Quanhecodong/QuanHeCoDongSlice";
const sortTime = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      let timeNews1;
      let timeNews2;
      if (Number(data[i].day.split("/").reverse().join("")) < 1000000000) {
        timeNews1 = Number(data[i].day.split("/").reverse().join(""));
        timeNews2 = Number(data[j].day.split("/").reverse().join(""));
      } else {
        timeNews1 = Number(
          data[i].day
            .split(" ")[0]
            .split("/")
            .reverse()
            .join("")
            .concat("", data[i].day.split(" ")[2].split(":").join(""))
        );
        timeNews2 = Number(
          data[j].day
            .split(" ")[0]
            .split("/")
            .reverse()
            .join("")
            .concat("", data[j].day.split(" ")[2].split(":").join(""))
        );
      }

      if (timeNews1 < timeNews2) {
        let convert = data[i];
        data[i] = data[j];
        data[j] = convert;
      }
    }
  }
};
function App() {
  // const listNews = useSelector(Listnewspapers);
  const Dispatch = useDispatch();
  // let getDatas;
  useEffect(() => {
    // newspapers.forEach((news) => {
    //   addDocument("news", news);
    // });
    // shareholders.forEach((shareholder) => {
    //   addDocument("shareholders", shareholder);
    // });
    //   // console.log(newsSlice.getInitialState());
  }, []);
  const [callNumber, setCallNumber] = useState(0);
  const dataNews = useGetdata("news");
  sortTime(dataNews);
  const datashareholders = useGetdata("shareholders");
  sortTime(datashareholders);

  useEffect(() => {
    ///sắp xếp tin tức theo thời gian mới nhất

    dataNews.forEach((data) => {
      if (callNumber === 1) {
        return;
      }
      Dispatch(newsSlice.actions.getDataNews(data));
      // Dispatch(QuanHeCoDongSlice.actions.getDatashareholders(data));
      setCallNumber(1);
    });
    datashareholders.forEach((data) => {
      if (callNumber === 1) {
        return;
      }
      Dispatch(QuanHeCoDongSlice.actions.getDatashareholders(data));
      setCallNumber(1);
    });
  }, [dataNews, Dispatch, callNumber, datashareholders]);

  const newsPath = useMemo(() => {
    const news = dataNews.map((data) => {
      return data;
    });
    return news;
  }, [dataNews]);
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
          {newsPath.map((news, index) => {
            let Layout = DefaultLayout;
            return (
              <Route
                key={index}
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
