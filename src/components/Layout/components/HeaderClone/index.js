import styles from "./HeaderClone.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimney,
  faXmark,
  faBars,
  faDiagramProject,
  faChartColumn,
  faPeopleGroup,
  faNewspaper,
  faUserPlus,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import imageLogo from "../../../../assets/images/headerFooter/logo.png";
import iconSearch from "../../../../assets/images/headerFooter/Search.png";

import { Listnewspapers } from "@/redux/selector";

const cx = classNames.bind(styles);

//ref

//function

function HeaderClone({ namePage }) {
  const [showResult, setShowResults] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const Listnews = useSelector(Listnewspapers);
  const openNav = useRef();
  const iconBar = useRef();
  const iconClose = useRef();
  const back = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  // blur search unblur
  const blurSearch = document.querySelector("body");

  const resultSearchElement = useRef();
  function blurInput() {
    setShowResults(false);
  }
  useEffect(() => {
    blurSearch.addEventListener("click", blurInput);
    resultSearchElement.current.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }, [blurSearch]);
  if (showResult === false) {
    // không gỡ được event
    blurSearch.removeEventListener("click", blurInput);
  }
  // blur search unblur
  //hàm thay đổi input
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  //hàm thay đổi input
  //kết quả ô input
  useEffect(() => {
    setSearchResult(
      Listnews.filter((news) => {
        return removeVietnameseTones(news.title.toLowerCase()).includes(
          removeVietnameseTones(search.toLowerCase())
        );
      })
    );
    if (search === "") {
      setSearchResult([]);
    }
  }, [search, Listnews]);
  //kết quả ô input

  const openNavBar = () => {
    openNav.current.classList.add(cx("nav--child--open"));
  };
  const closeNavBar = () => {
    openNav.current.classList.remove(cx("nav--child--open"));
  };
  return (
    <header className=" ">
      <div className={cx("HeaderBox")}>
        <div className={cx("Header", "row", "grid", "wide")}>
          {/* bug globalStyles ưu tiên nhất */}
          <div className={cx("HeaderLogo")}>
            <Link to="/">
              <img src={imageLogo} alt="" className={cx("logoImg")} />
            </Link>
          </div>
          <div className={cx("headerNameGroup")}>
            <h1 className={cx("headerTitle")}>Tập đoàn Rich group</h1>
            <p className={cx("headerContent")}>
              Tỏa sáng muôn nơi - Vươn tầm thế giới
            </p>
          </div>
          <div className={cx("headerContacts")}>
            <p className={cx("headerContact")}>Call us: 033.623.7176</p>
            <div className={cx("ContactIcon")}>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={cx("icon-Contact", "fa-brands", "fa-instagram")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={cx("icon-Contact", "fa-brands", "fa-facebook-f")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={cx("icon-Contact", "fa-brands", "fa-twitter")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className={cx("icon-Contact", "fa-brands", "fa-whatsapp")}
                />
              </Link>
            </div>
          </div>
          <aside className={cx("navRepon")}>
            <ul className={cx("navList--repon")}>
              {/* <li class="navItem"><a href="" class="navItem--Link"><i class="fa-solid fa-house-chimney"></i></a></li> */}
              <li className={cx("navItem")}>
                <Link to="/GioiThieu" className={cx("navItem--Link")}>
                  Giới thiệu
                </Link>
              </li>
              <li className={cx("navItem")}>
                <Link to="/DuanDauTu" className={cx("navItem--Link")}>
                  Dự án đầu tư
                </Link>
              </li>
              <li className={cx("navItem")}>
                <Link to="/QuanHeCoDong" className={cx("navItem--Link")}>
                  Quan hệ cổ đông
                </Link>
              </li>
              <li className={cx("navItem")}>
                <Link to="/TinTuc" className={cx("navItem--Link")}>
                  Tin tức
                </Link>
              </li>
              <li className={cx("navItem")}>
                <Link to="/TuyenDung" className={cx("navItem--Link")}>
                  Tuyển dụng{" "}
                </Link>
              </li>
              <li className={cx("navItem")}>
                <Link to="/LienHe" className={cx("navItem--Link")}>
                  Liên hệ
                </Link>
              </li>
            </ul>
            <div className={cx("ContactIcon")}>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={cx("icon-Contact", "fa-brands", "fa-instagram")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={cx("icon-Contact", "fa-brands", "fa-facebook-f")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={cx("icon-Contact", "fa-brands", "fa-twitter")}
                />
              </Link>
              <Link className={cx("icon-Contact--link")} to="#">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className={cx("icon-Contact", "fa-brands", "fa-whatsapp")}
                />
              </Link>
            </div>
          </aside>
          <aside
            onClick={() => openNavBar()}
            ref={iconBar}
            className={cx("icon--bar")}
          >
            {/* <i className={cx("fas fa-bars")} /> */}
            <FontAwesomeIcon icon={faBars} className={cx("fas fa-bars")} />
          </aside>
          <aside ref={openNav} className={cx("nav--right")}>
            <div ref={back} className={cx("nav__child")}>
              <div
                onClick={() => {
                  closeNavBar();
                }}
                ref={iconClose}
                className={cx("iconClose")}
              >
                <FontAwesomeIcon icon={faXmark} />

                {/* <i className={cx("fa-solid fa-xmark")} /> */}
              </div>
              <div className={cx("nav__child__img")}>
                <Link to="/" className={cx("header__img--link")}>
                  <img src={imageLogo} alt="" />
                </Link>
              </div>
              <div className={cx("nav__child__header")}>
                <ul className={cx("nav__child__header--list")}>
                  <li>
                    <Link
                      to="/GioiThieu"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faDiagramProject} />
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/DuanDauTu"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faChartColumn} />
                      Dự án đầu tư
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/QuanHeCoDong"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      Quan hệ cổ đông
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TinTuc"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faNewspaper} />
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TuyenDung"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                      Tuyển dụng
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/LienHe"
                      onClick={() => {
                        closeNavBar();
                      }}
                    >
                      <FontAwesomeIcon icon={faAddressCard} />
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* start Nav */}
      <nav>
        <div className={cx("navs", "grid", "wide", "row")}>
          <ul className={cx("navList")}>
            <li className={cx("navItem")}>
              <Link to="/" className={cx("navItem--Link")}>
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  className={cx("fa-solid fa-house-chimney")}
                />
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/GioiThieu" className={cx("navItem--Link")}>
                Giới thiệu
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/DuanDauTu" className={cx("navItem--Link")}>
                Dự án đầu tư
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/QuanHeCoDong" className={cx("navItem--Link")}>
                Quan hệ cổ đông
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/TinTuc" className={cx("navItem--Link")}>
                Tin tức
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/TuyenDung" className={cx("navItem--Link")}>
                Tuyển dụng{" "}
              </Link>
            </li>
            <li className={cx("navItem")}>
              <Link to="/LienHe" className={cx("navItem--Link")}>
                Liên hệ
              </Link>
            </li>
          </ul>
          <div ref={resultSearchElement}>
            <Tippy
              placement="bottom"
              interactive // cho phep hanh dong tren ket qua
              visible={searchResult.length > 0}
              render={(attrs) => (
                <>
                  {showResult === true ? (
                    <div
                      className={cx("searchResult")}
                      tabIndex="-1"
                      {...attrs}
                    >
                      <ul className={cx("ListResults")}>
                        {searchResult.map((result, index) => {
                          if (index < 4) {
                            return (
                              <li key={index} className={cx("Results")}>
                                <Link
                                  onClick={() => {
                                    setSearch("");
                                  }}
                                  to={`/Chitiettintuc/${result.path}`}
                                >
                                  {result.title}
                                </Link>
                              </li>
                            );
                          }
                          if (showMore === true) {
                            return (
                              <li key={index} className={cx("Results")}>
                                <Link
                                  onClick={() => {
                                    setSearch("");
                                  }}
                                  to={`/Chitiettintuc/${result.path}`}
                                >
                                  {result.title}
                                </Link>
                              </li>
                            );
                          }
                          return <div key={index}></div>;
                        })}
                      </ul>
                      <button
                        onClick={() => {
                          setShowMore(!showMore);
                        }}
                        className={cx("Results--More")}
                      >
                        Xem thêm
                        {` (${
                          searchResult.length > 3 && showMore === false
                            ? searchResult.length - 4
                            : 0
                        })`}
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
              // nếu muốn co animation thì thêm thư viện frame-motion
            >
              <div className={cx("navSearch")}>
                <img src={iconSearch} alt="" className={cx("searchIcon")} />
                <input
                  type="text"
                  onChange={(e) => {
                    changeSearch(e);
                  }}
                  onFocus={() => {
                    setShowResults(true);
                  }}
                  // onBlur={() => {
                  //   setShowResults(false);
                  // }}
                  value={search}
                  className={cx("navInput")}
                />
                <p className={cx("navInput--placeHoder")}>Tìm kiếm</p>
              </div>
            </Tippy>
          </div>
        </div>
      </nav>
      {/* End Nav */}
      <div className={cx("headerBanner2")}>
        <h2 className={cx("bannerTitle", "grid", "wide")}>{namePage}</h2>
        <p className={cx("bannerContent", "grid", "wide")}>
          Trang chủ/<span>{namePage}</span>
        </p>
      </div>
    </header>
  );
}

export default HeaderClone;
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  // str = str.replace(
  //   /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
  //   " "
  // );
  return str;
}
