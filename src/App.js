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
import { addDocument, getData, useGetData } from "./firebase/services";
import { useEffect, useMemo } from "react";

function App() {
  // useEffect(() => {
  //   newspapers.map((news) => {
  //     addDocument("news", news);
  //   });
  // });
  // readData("news");
  useGetData("news");
  const news = useMemo(() => {}, []);
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
