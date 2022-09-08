import classNames from "classnames/bind";
import styles from "@/pages/Duandautu/Duandautu.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function DuanDauTu() {
  return (
    <article className={cx("Continer")}>
      <section className={cx("Continer__Introduce", "grid", "wide")}>
        <p className={cx("Continer__Introduce--text")}>
          Được coi là một Công ty công nghệ hàng đầu Việt Nam, các sản phẩm của
          tập đoàn RICHGROUP có độ phủ sóng mạnh trên hầu hết các lĩnh vực về
          công nghệ và internet như: thương mại điện tử, quảng cáo trực truyến,
          multimedia, giáo dục… Trên 70% lượng người dùng Internet tại Việt Nam
          sử dụng sản phẩm của RICH GROUP mỗi ngày đã khẳng định sự phong phú và
          đa dạng về sản phẩm và lĩnh vực mà không phải công ty công nghệ nào
          cũng đạt được.
        </p>
      </section>
      <section className={cx("continerMain", "grid", "wide")}>
        <article className={cx("continer__mainContent")}>
          <h1 className={cx("continer__mainContent--title")}>
            Hệ thống giáo dục quốc tế richedu
          </h1>
          <div className={cx("continer__box", "row")}>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/eduJapan.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Tổ chức giáo dục nhật bản
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/eduAstray.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Tổ chức giáo dục Châu Úc
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/eduKorea.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Tổ chức giáo dục Hàn Quốc
              </p>
            </div>
          </div>
        </article>
        <article className={cx("continer__mainContent")}>
          <h1 className={cx("continer__mainContent--title")}>
            Hệ thống phát triển công nghệ và truyền thông
          </h1>
          <div className={cx("continer__box", "row")}>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/richSoft.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Trung tâm Phát triển Công nghệ cao Rich Soft
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/richNews.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Cổng thông tin Điện tử tổng hợp RichNews
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/futureCollege.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Hệ thống Giáo dục Quốc tế Future College
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/womenViennam.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Sự kiện Nữ hoàng trang sức Việt Nam 2017
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/schoolOnline.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Cổng thông tin Chọn trường Online
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/eduKorea.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Tổ chức giáo dục Hàn Quốc
              </p>
            </div>
          </div>
        </article>
        <article className={cx("continer__mainContent")}>
          <h1 className={cx("continer__mainContent--title")}>
            Các hệ thống khác
          </h1>
          <div className={cx("continer__box", "row")}>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/sanGiaoDich.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Sàn giao dịch Thương mại điện tử Luôn Rẻ
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/richLand.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Sàn giao dịch Bất động sản Rich land
              </p>
            </div>
            <div
              className={cx("continer__box--content", "PC-4", "T-6", "M-12")}
            >
              <div className={cx("BoxImg__continer")}>
                <img
                  src={require("../../assets/images/duandautu/vJBike.png")}
                  alt=""
                  className={cx("continer__box--img")}
                />
                <div className={cx("BoxOverlay__img")}>
                  <Link to="#" className={cx("learnMore__Infomation")}>
                    Xem trang
                  </Link>
                </div>
              </div>
              <p className={cx("continer__box--text")}>
                Trung tâm Phân phối Xe đạp điện VJbike
              </p>
            </div>
          </div>
        </article>
      </section>
    </article>
  );
}

export default DuanDauTu;
