import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

import imageLogo from "../../../../assets/images/headerFooter/logo.png";
import CheckFooter from "../../../../assets/images/headerFooter/CheckFooter.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <div className={cx("footer", "grid", "wide", "row")}>
        <div className={cx("footerLogo", "PC-4", "T-6", "M-12")}>
          <div className={cx("logo")}>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/"
              className={cx("logoLink")}
            >
              <img src={imageLogo} alt="" className={cx("footerLogo--img")} />
            </Link>
          </div>
          <div className={cx("logoTitle")}>
            <h2 className={cx("logoTitle--text")}>Tập đoàn rich group</h2>
          </div>
          <div className={cx("logoContent")}>
            <p className={cx("logoContent--text")}>
              Địa chỉ: Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà Nội <br />
              Email: info@richgroup.vn - Điện thoại: 0893839029474
            </p>
          </div>
        </div>
        <div className={cx("footerImfomation", "PC-3", "T-5", "M-12")}>
          <h3 className={cx("imfomationTitle")}>giới thiệu về công ty</h3>
          <ul className={cx("footerList")}>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Giới thiệu chung
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Ban lãnh đạo
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Đơn vị thành viên
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Đối tác của Rich group
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Ý nghĩa logo
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("footerImfomation", "PC-3", "T-6", "M-6")}>
          <h3 className={cx("imfomationTitle")}>Các lĩnh vực</h3>
          <ul className={cx("footerList")}>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Giáo dục
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Bất động sản
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Thương mại
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Công nghệ
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Truyền thông
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("footerImfomation", "PC-2", "T-5", "M-5")}>
          <h3 className={cx("imfomationTitle")}>Tin tức</h3>
          <ul className={cx("footerList")}>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Tin tức tập đoàn
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Tin tức báo chí
              </Link>
            </li>
            <li className={cx("footerItem")}>
              <Link to="/" className={cx("footerItem--link")}>
                Tin tức khác
              </Link>
            </li>
          </ul>
          <div className={cx("footerCheck")}>
            <img src={CheckFooter} alt="" />
          </div>
        </div>
      </div>
      <div className={cx("endFooter")}>
        <h5 className={cx("endFooter--text")}>tientrung14122012@gmail.com</h5>
      </div>
    </footer>
  );
}

export default Footer;
