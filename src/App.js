// import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { shareholders } from "@/pages/Quanhecodong/QuanHeCoDongSlice";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm i react-router-dom
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "@/components/Layout";
import newsSlice, {
  newspapers,
} from "./pages/Chitiettintuc/ChiTietTinTucSlice";
import Chitiettintuc from "./pages/Chitiettintuc";
import "./pages/Quanhecodong/QuanHeCoDongSlice";
// import { addDocument, getData, getdataTest } from "./firebase/services";
import { useEffect } from "react";
import { useGetdata } from "./hooks/useFirestore";
function App() {
  const Dispatch = useDispatch();
  // let getDatas;
  // useEffect(() => {
  //   newspapers.map((news) => {
  //     console.log(news);
  //     addDocument("news", news);
  //   });
  //   // getData("news")
  //   //   .then((data) => {
  //   //     return data;
  //   //   })
  //   //   .then((data) => {
  //   //     getDatas = data;
  //   //     data.forEach((data) => {});
  //   //     // console.log(getDatas);
  //   //     // dùng redux toolkit như bình thường dispas vào
  //   //   });
  // }, []);
  // getdataTest("news");
  // console.log(getDatas);

  // const data = useGetdata("news");
  // useEffect(() => {
  //   data.forEach((data) => {
  //     Dispatch(newsSlice.actions.getDataNews(data));
  //   });
  // }, [data, Dispatch]);

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
