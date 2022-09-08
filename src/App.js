// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { shareholders } from "@/pages/Quanhecodong/QuanHeCoDongSlice";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm i react-router-dom
import { publicRoutes } from "@/routes";
import { DefaultLayout } from "@/components/Layout";
// import { setupServer } from "./fakeApis";
// import {
//   AddNewJob,
//   fetchRecruitmentJob,
//   recruitmentJobs,
// } from "./pages/Tuyendung/TuyenDungSlice";
import {
  // AddNews,
  // fetchNews,
  newspapers,
} from "./pages/Chitiettintuc/ChiTietTinTucSlice";
import Chitiettintuc from "./pages/Chitiettintuc";
import // addNewShareholder,
// fetchShareholders,
"./pages/Quanhecodong/QuanHeCoDongSlice";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqMYNM0p5zQBBUN_uqVKqjXC-zXjN1M78",
  authDomain: "group-app-a4b27.firebaseapp.com",
  projectId: "group-app-a4b27",
  storageBucket: "group-app-a4b27.appspot.com",
  messagingSenderId: "471498411210",
  appId: "1:471498411210:web:c3c31a86b22b4e3d32b833",
  measurementId: "G-0SGFFT9BZ0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
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
