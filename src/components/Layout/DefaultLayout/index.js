import classNames from "classnames/bind";
//npm i classnames ...........cssBY

import Header from "@/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss";
import Footer from "../components/Footer";
import HeaderClone from "../components/HeaderClone";

const cx = classNames.bind(styles);

function DefaultLayout({ children, Layout, namePage }) {
  // let nameBanner="Trang Chủ"

  return (
    <div className={cx("wrapper")}>
      {Layout === "home" ? <Header /> : <HeaderClone namePage={namePage} />}
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
