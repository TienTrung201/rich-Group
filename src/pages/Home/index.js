import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux/es/exports";

import { Listnewspapers } from "@/redux/selector";
import imageIconLeft from "@/assets/images/trangchu/left.png";
import imageIconRight from "@/assets/images/trangchu/Right.png";
import star from "@/assets/images/trangchu/star.png";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const cx = classNames.bind(styles);
function Home() {
  const listnews = useSelector(Listnewspapers);
  const [showNews, setShowNews] = useState("Tin cổ đông");
  const tinTapDoan = useMemo(() => {
    let count = 3;
    const news = listnews.map((news, index) => {
      if (news.type === "Tin tập đoàn" && count > 0) {
        return (
          <div key={index} className={cx("contentItem__box")}>
            <img
              src={require(`../../assets/images/chiTietTinTuc/${news.src}`)}
              alt=""
              className={cx("newEvent--img")}
            />
            <div className={cx("boxContent_news")}>
              <div>
                <h3 className={cx("newsEvent--title")}>{news.title}</h3>
                <p className={cx("newEvent--titleContent")}>
                  {news.content.split("/")[0]}
                </p>
              </div>
              <div className={cx("newEventTime")}>
                <img
                  src="./assets/img/trangchu/clock.png"
                  alt=""
                  className={cx("timeClock")}
                />
                <p className={cx("timeDay")}>{news.day}</p>
                <Link to={`/Chitiettintuc/${news.path}`}>
                  <p className={cx("timeMore")}>Xem chi tiết</p>
                </Link>
              </div>
            </div>
          </div>
        );
      }
      return <></>;
    });
    return news;
  }, [listnews]);
  const tinTapChi = useMemo(() => {
    const news = listnews.map((news, index) => {
      let count = 3;
      if (news.type === "Tin tạp chí" && count > 0) {
        return (
          <div key={index} className={cx("contentItem__box")}>
            <img
              src={require(`../../assets/images/chiTietTinTuc/${news.src}`)}
              alt=""
              className={cx("newEvent--img")}
            />
            <div className={cx("boxContent_news")}>
              <div>
                <h3 className={cx("newsEvent--title")}>{news.title}</h3>
                <p className={cx("newEvent--titleContent")}>
                  {news.content.split("/")[0]}
                </p>
              </div>
              <div className={cx("newEventTime")}>
                <img
                  src="./assets/img/trangchu/clock.png"
                  alt=""
                  className={cx("timeClock")}
                />
                <p className={cx("timeDay")}>{news.day}</p>
                <Link to={`/Chitiettintuc/${news.path}`}>
                  <p className={cx("timeMore")}>Xem chi tiết</p>
                </Link>
              </div>
            </div>
          </div>
        );
      }
      return <></>;
    });
    return news;
  }, [listnews]);
  const tinCoDong = useMemo(() => {
    let count = 3;
    const news = listnews.map((news, index) => {
      if (news.type === "Tin cổ đông" && count > 0) {
        count--;
        return (
          <div key={index} className={cx("contentItem__box")}>
            <img
              src={require(`../../assets/images/chiTietTinTuc/${news.src}`)}
              alt=""
              className={cx("newEvent--img")}
            />
            <div className={cx("boxContent_news")}>
              <div>
                <h3 className={cx("newsEvent--title")}>{news.title}</h3>
                <p className={cx("newEvent--titleContent")}>
                  {news.content.split("/")[0]}
                </p>
              </div>
              <div className={cx("newEventTime")}>
                <img
                  src="./assets/img/trangchu/clock.png"
                  alt=""
                  className={cx("timeClock")}
                />
                <p className={cx("timeDay")}>{news.day}</p>
                <Link to={`/Chitiettintuc/${news.path}`}>
                  <p className={cx("timeMore")}>Xem chi tiết</p>
                </Link>
              </div>
            </div>
          </div>
        );
      }
      return <></>;
    });
    return news;
  }, [listnews]);

  return (
    <section className={cx("homeContainer")}>
      {/* ContainerIntroduce */}
      <article className={cx("ContainerIntroduce")}>
        <div className={cx("introduce--Title", "titleContiner")}>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
          <h2>Giới thiệu</h2>
          <img src={imageIconRight} alt="" className={cx("titleLogo")} />
        </div>
        <div className={cx("introduceBox")}>
          <div className={cx("introduceBackground1")}>
            <div
              className={cx("introduceContent--rightVision", "grid", "wide")}
            >
              <div className={cx("rightVision50Persent")}>
                <h3 className={cx("introduceContent--title")}>Tầm nhìn</h3>
                <div className={cx("visionContent")}>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      <span className={cx("textSpecial")}>RICHGROUP</span> định
                      hướng trở thành
                      <span className={cx("textSpecial-noUppercase")}>
                        tập đoàn đa ngành
                      </span>{" "}
                      uy tín hàng đầu tại Việt nam trong các lĩnh vực: nhân sự,
                      giáo dục , thương mại, bất động sản, công nghệ, truyền
                      thông.
                    </p>
                  </div>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      Nâng tầm ảnh hưởng của sản phẩm, dịch vụ, con người Việt
                      Nam ra toàn thế giới.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("introduceBackground2")}>
            <div
              className={cx("introduceContent--rightMission", "grid", "wide")}
            >
              <div className={cx("rightMission50Persent")}>
                <h3 className={cx("introduceContent--title")}>Sứ mệnh</h3>
                <div className={cx("visionContent")}>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      <span className={cx("textSpecial")}>
                        Đối với thị trường:
                      </span>
                      Cung cấp những sản phẩm &amp; dịch vụ tốt nhất. Thỏa mãn
                      khách hàng khó tính về nội dung và chất lượng sản phẩm đưa
                      ra.
                    </p>
                  </div>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      <span className={cx("textSpecial")}>
                        Đối với cổ đông, đối tác:
                      </span>
                      Mang đến những cơ hội, giải pháp để tiến xa hơn trong mọi
                      lĩnh vực đầu tư của tập đoàn.
                    </p>
                  </div>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      <span className={cx("textSpecial")}>
                        Đối với nhân viên:
                      </span>
                      Tạo cơ hội phát triển công bằng, lành mạnh cho nhân viên
                      thỏa mãn ước mơ và hoài bão của mỗi người. Đào tạo những
                      người đồng hành đi cùng với Rich tác phong chuyên nghiệp,
                      thân thiện, văn minh.
                    </p>
                  </div>
                  <div className={cx("visionContent--text")}>
                    <img
                      src={star}
                      alt=""
                      className={cx("visionContent--star")}
                    />
                    <p className={cx("visoncontentText")}>
                      <span className={cx("textSpecial")}>
                        Đối với thị xã hội:
                      </span>
                      Đóng góp tích cực vào các hoạt động hướng về cộng đồng,
                      cam kết nâng cao chất lượng cuộc sống của đất nước thông
                      qua các hoạt động hợp tác hướng tới con người.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* End ContainerIntroduce
      activeMap */}
      <article className={cx("activeMap")}>
        <div className={cx("active--Title", "titleContiner")}>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
          <h2>Lĩnh vực hoạt động</h2>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
        </div>
        <div className={cx("activeMap__content", "row-gutter", "grid", "wide")}>
          <div className={cx("activeContent", "col-gutter")}>
            <div className={cx("activeBoxImg")}>
              <p />
              <p />
              <p />
              <img
                src={require("../../assets/images/trangchu/cart.png")}
                alt=""
                className={cx("activeMapImg")}
              />
            </div>
            <h4 className={cx("active--text")}>Thương mại</h4>
          </div>
          <div className={cx("activeContent", "col-gutter")}>
            <div className={cx("activeBoxImg")}>
              <p />
              <p />
              <p />
              <img
                src={require("../../assets/images/trangchu/HomeCoin.png")}
                alt=""
                className={cx("activeMapImg")}
              />
            </div>
            <h4 className={cx("active--text")}>Bất động sản</h4>
          </div>
          <div className={cx("activeContent", "col-gutter")}>
            <div className={cx("activeBoxImg")}>
              <p />
              <p />
              <p />
              <img
                src={require("../../assets/images/trangchu/giaoduc.png")}
                alt=""
                className={cx("activeMapImg")}
              />
            </div>
            <h4 className={cx("active--text")}>Giáo dục</h4>
          </div>
          <div className={cx("activeContent", "col-gutter")}>
            <div className={cx("activeBoxImg")}>
              <p />
              <p />
              <p />
              <img
                src={require("../../assets/images/trangchu/handTechnology.png")}
                alt=""
                className={cx("activeMapImg")}
              />
            </div>
            <h4 className={cx("active--text")}>Công nghệ</h4>
          </div>
          <div className={cx("activeContent", "col-gutter")}>
            <div className={cx("activeBoxImg")}>
              <p />
              <p />
              <p />
              <img
                src={require("../../assets/images/trangchu/truyenthong.png")}
                alt=""
                className={cx("activeMapImg")}
              />
            </div>
            <h4 className={cx("active--text")}>Truyền thông</h4>
          </div>
        </div>
      </article>
      {/* End activeMap
      richGroupIntroduce */}
      <article className={cx("richGroupIntroduce")}>
        <div className={cx("richGroupIntroduce__Box", "wide", "grid", "row")}>
          <div className={cx("richGroupIntroduce__Content")}>
            <div className={cx("richGroupIntroduceIMG")}>
              <img
                src={require("../../assets/images/trangchu/building.png")}
                alt=""
                className={cx("richGroupIntroduce--img")}
              />
            </div>
            <h4 className={cx("richGroupIntroduce-Title")}>10 năm</h4>
            <p className={cx("richGroupIntroduce_imgContet")}>Kinh nghiệm</p>
          </div>
          <div className={cx("richGroupIntroduce__Content")}>
            <div className={cx("richGroupIntroduceIMG")}>
              <img
                src={require("../../assets/images/trangchu/team.png")}
                alt=""
                className={cx("richGroupIntroduce--img")}
              />
            </div>
            <h4 className={cx("richGroupIntroduce-Title")}>350</h4>
            <p className={cx("richGroupIntroduce_imgContet")}>Nhân viên</p>
          </div>
          <div className={cx("richGroupIntroduce__Content")}>
            <div className={cx("richGroupIntroduceIMG")}>
              <img
                src={require("../../assets/images/trangchu/network.png")}
                alt=""
                className={cx("richGroupIntroduce--img")}
              />
            </div>
            <h4 className={cx("richGroupIntroduce-Title")}>07</h4>
            <p className={cx("richGroupIntroduce_imgContet")}>Thành viên</p>
          </div>
          <div className={cx("richGroupIntroduce__Content")}>
            <div className={cx("richGroupIntroduceIMG")}>
              <img
                src={require("../../assets/images/trangchu/partner.png")}
                alt=""
                className={cx("richGroupIntroduce--img")}
              />
            </div>
            <h4 className={cx("richGroupIntroduce-Title")}>108</h4>
            <p className={cx("richGroupIntroduce_imgContet")}>Đối tác</p>
          </div>
        </div>
      </article>
      {/* End richGroupIntroduce */}
      <article className={cx("newsEvent", "wide", "grid")}>
        <div className={cx("newsEvent--Title", "titleContiner")}>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
          <h2>Tin tức và sự kiện</h2>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
        </div>
        <div className={cx("newsEvent_content")}>
          <div className={cx("newsEvent__nav")}>
            <ul className={cx("newsEvent__list", "row")}>
              <li
                onClick={() => {
                  setShowNews("Tin cổ đông");
                }}
                className={
                  showNews === "Tin cổ đông"
                    ? cx("newsEvent__item", "background__Checked")
                    : cx("newsEvent__item")
                }
              >
                Tin cổ đông
              </li>
              <li
                onClick={() => {
                  setShowNews("Tin tạp chí");
                }}
                className={
                  showNews === "Tin tạp chí"
                    ? cx("newsEvent__item", "background__Checked")
                    : cx("newsEvent__item")
                }
              >
                Tin tạp chí
              </li>

              <li
                onClick={() => {
                  setShowNews("Tin tập đoàn");
                }}
                className={
                  showNews === "Tin tập đoàn"
                    ? cx("newsEvent__item", "background__Checked")
                    : cx("newsEvent__item")
                }
              >
                Tin tập đoàn
              </li>
            </ul>
          </div>
          <div className={cx("newEvent__contentItem", "row")}>
            {showNews === "Tin tập đoàn"
              ? tinTapDoan
              : showNews === "Tin tạp chí"
              ? tinTapChi
              : tinCoDong}
          </div>
        </div>
      </article>

      {/* to be continued*/}
      {/* start Partner */}
      <article className={cx("continerPartner", "grid", "wide")}>
        <div className={cx("continerPartner--Title", "titleContiner")}>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
          <h2>Đối tác của chúng tôi</h2>
          <img src={imageIconLeft} alt="" className={cx("titleLogo")} />
        </div>
        <div className={cx("partnerList", "row")}>
          <div className={cx("partnerRich")}>
            <Link to="#" className={cx("partnerRich--link")}>
              <img
                src={require("../../assets/images/trangchu/kcg.png")}
                alt=""
                className={cx("parnerRich--img")}
              />
            </Link>
          </div>
          <div className={cx("partnerRich")}>
            <Link to="#" className={cx("partnerRich--link")}>
              <img
                src={require("../../assets/images/trangchu/taylor.png")}
                alt=""
                className={cx("parnerRich--img")}
              />
            </Link>
          </div>
          <div className={cx("partnerRich")}>
            <Link to="#" className={cx("partnerRich--link")}>
              <img
                src={require("../../assets/images/trangchu/mufg.png")}
                alt=""
                className={cx("parnerRich--img")}
              />
            </Link>
          </div>
          <div className={cx("partnerRich")}>
            <Link to="#" className={cx("partnerRich--link")}>
              <img
                src={require("../../assets/images/trangchu/aptech.png")}
                alt=""
                className={cx("parnerRich--img")}
              />
            </Link>
          </div>
          <div className={cx("partnerRich")}>
            <Link to="#" className={cx("partnerRich--link")}>
              <img
                src={require("../../assets/images/trangchu/griffith.png")}
                alt=""
                className={cx("parnerRich--img")}
              />
            </Link>
          </div>
        </div>
      </article>
      {/* end Partner */}
    </section>
  );
}

export default Home;
