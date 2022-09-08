import styles from "@/pages/Tuyendung/Tuyendung.module.scss";
import { useSelector } from "react-redux/es/exports";
import classNames from "classnames/bind";
import { Listnewspapers } from "@/redux/selector";
import { Link } from "react-router-dom";
import { useRef } from "react";

const cx = classNames.bind(styles);

function TinNoiBat() {
  const continer = useRef();
  const listnews = useSelector(Listnewspapers);
  return (
    <section ref={continer} className={cx("conTinerNews", "PC-3")}>
      <h3 className={cx("newsTitle")}>Các tin tức nổi bật</h3>
      <div className={cx("newsContiner")}>
        {listnews.map((news, index) => {
          if (news.hotNew) {
            return (
              <div key={index} className={cx("newsBox")}>
                <Link
                  onClick={() => {
                    if (window.innerWidth > 1239) {
                      window.scrollTo(0, 577);
                    } else if (
                      window.innerWidth > 1224 &&
                      window.innerWidth < 1239
                    ) {
                      window.scrollTo(0, 295);
                    } else {
                      window.scrollTo(0, 225);
                    }
                  }}
                  to={`/Chitiettintuc/${news.path}`}
                  className={cx("newsImg")}
                >
                  <img
                    src={require(`../../../assets/images/chiTietTinTuc/${news.src}`)}
                    alt=""
                    className={cx("news--Img")}
                  />
                  <div className={cx("newsContent")}>
                    <h5 className={cx("imgTitle")}>{news.title}</h5>
                    <p className={cx("imgContentTitle")}>{news.type}</p>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default TinNoiBat;
