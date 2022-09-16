import { useSelector } from "react-redux/es/exports";
import { Listnewspapers } from "@/redux/selector";
import classNames from "classnames/bind";
import styles from "@/pages/Tintuc/Tintuc.module.scss";
import { Link } from "react-router-dom"; //npm i react-router-dom

/// render true thì k chạy path
const cx = classNames.bind(styles);
function TinTuc() {
  const listNews = useSelector(Listnewspapers);
  const tinTapDoanContent = listNews.filter((news) => {
    return news.type === "Tin tập đoàn";
  });
  const tinBaotri = listNews.filter((news) => {
    return news.type === "Tin tạp chí";
  });
  const tinTapChi = listNews.find((news) => {
    return news.type === "Tin tạp chí";
  });
  const tinCoDong = listNews.find((news) => {
    return news.type === "Tin cổ đông";
  });
  const tinTapDoan = listNews.find((news) => {
    return news.type === "Tin tập đoàn";
  });
  let mount = false;
  if (
    tinTapDoanContent.length > 0 &&
    tinBaotri.length > 0 &&
    tinTapChi !== undefined &&
    tinCoDong !== undefined &&
    tinTapDoan !== undefined
  ) {
    mount = true;
  } else {
    mount = false;
    // setMount(false);
  }

  return (
    <>
      {mount === false ? (
        <></>
      ) : (
        <article className={cx("continerMain")}>
          <section className={cx("newsContiner", "grid", "wide")}>
            <article className={cx("newsSpecial")}>
              <h2 className={cx("continer__mainContent--title")}>
                Tin tức nổi bật
              </h2>
              <div className={cx("news__Box", "row")}>
                <Link
                  to={`/Chitiettintuc/${tinTapDoan.path}`}
                  className={cx("newsContent", "PC-6", "T-4")}
                >
                  <img
                    alt=""
                    src={require(`../../assets/images/chiTietTinTuc/${tinTapDoan.src}`)}
                  />
                  <div className={cx("")}>
                    <h3 className={cx("newsContent__title")}>Tin tập đoàn</h3>
                    <p className={cx("newsContentTitle__text")}>
                      {tinTapDoan.title}
                    </p>
                    <p className={cx("newContentTitle__text2")}>
                      {tinTapDoan.content.split("/")[0]}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/Chitiettintuc/${tinTapChi.path}`}
                  className={cx("newsContent", "PC-3", "T-4")}
                >
                  <img
                    alt=""
                    src={require(`../../assets/images/chiTietTinTuc/${tinTapChi.src}`)}
                  />
                  <div>
                    <h3 className={cx("newsContent__title")}>Tin báo chí</h3>
                    <p className={cx("newsContentTitle__text")}>
                      {tinTapChi.title}
                    </p>
                    <p className={cx("newContentTitle__text2")}>
                      {tinTapChi.content.split("/")[0]}
                    </p>
                  </div>
                </Link>
                <Link
                  to={`/Chitiettintuc/${tinCoDong.path}`}
                  className={cx("newsContent", "PC-3", "T-4")}
                >
                  <img
                    alt=""
                    src={require(`../../assets/images/chiTietTinTuc/${tinCoDong.src}`)}
                  />
                  <div>
                    <h3 className={cx("newsContent__title")}>Tin Cổ đông</h3>
                    <p className={cx("newsContentTitle__text")}>
                      {tinCoDong.title}
                    </p>
                    <p className={cx("newContentTitle__text2")}>
                      {tinCoDong.content.split("/")[0]}
                    </p>
                  </div>
                </Link>
              </div>
            </article>
            <article className={cx("newsGroup")}>
              <h2 className={cx("continer__mainContent--title")}>
                Tin tức Tập đoàn
              </h2>
              <div className={cx("newsGroupContiner__Box", "row")}>
                <div className={cx("newsGroup__box2", "PC-7", "T-12")}>
                  <div className={cx("newsGroup__contetn--1")}>
                    <img
                      src={require(`../../assets/images/chiTietTinTuc/${tinTapDoanContent[0].src}`)}
                      alt=""
                      className={cx("newsGroup--img")}
                    />
                    <div className={cx("newsGroup__continer")}>
                      <div className={cx("newGroup__Continer__Content")}>
                        <h3 className={cx("newsGroup__continer--title")}>
                          {tinTapDoanContent[0].title}
                        </h3>
                        <div className={cx("newsGroup__continer__time")}>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/lichNImi.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[0].day}
                          </p>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/comment.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[0].comment} {" Comment"}
                          </p>
                        </div>
                        <p className={cx("newsGroup__continer--text")}>
                          {tinTapDoanContent[0].content.split("/")[0]}
                        </p>
                      </div>
                      <div className={cx("newGroupContent__More")}>
                        <Link
                          to={`/Chitiettintuc/${tinTapDoanContent[0].path}`}
                          className={cx("newGroupContent__More--link")}
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={cx("newsGroup__contetn--1")}>
                    <img
                      src={require(`../../assets/images/chiTietTinTuc/${tinTapDoanContent[1].src}`)}
                      alt=""
                      className={cx("newsGroup--img")}
                    />
                    <div className={cx("newsGroup__continer")}>
                      <div className={cx("newGroup__Continer__Content")}>
                        <h3 className={cx("newsGroup__continer--title")}>
                          {tinTapDoanContent[1].title}
                        </h3>
                        <div className={cx("newsGroup__continer__time")}>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/lichNImi.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[1].day}
                          </p>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/comment.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[1].comment} {" Comment"}
                          </p>
                        </div>
                        <p className={cx("newsGroup__continer--text")}>
                          {tinTapDoanContent[1].content.split("/")[0]}
                        </p>
                      </div>
                      <div className={cx("newGroupContent__More")}>
                        <Link
                          to={`/Chitiettintuc/${tinTapDoanContent[1].path}`}
                          className={cx("newGroupContent__More--link")}
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("newsGroup__box1", "PC-5", "T-12")}>
                  <div className={cx("newsGroup__contetn--2")}>
                    <img
                      src={require(`../../assets/images/chiTietTinTuc/${tinTapDoanContent[2].src}`)}
                      alt=""
                      className={cx("newsGroup--img")}
                    />
                    <div className={cx("newsGroup__continer")}>
                      <div className={cx("newGroup__Continer__Content")}>
                        <h3 className={cx("newsGroup__continer--title")}>
                          {tinTapDoanContent[2].title}
                        </h3>
                        <div className={cx("newsGroup__continer__time")}>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/lichNImi.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[2].day}
                          </p>
                          <p className={cx("timeCommentContent")}>
                            <img
                              src={require("../../assets/images/tintuc/comment.png")}
                              alt=""
                              className={cx("calendar")}
                            />
                            {tinTapDoanContent[2].comment}
                            {" Comment"}
                          </p>
                        </div>
                        <p className={cx("newsGroup__continer--text")}>
                          {tinTapDoanContent[2].content.split("/")[0]}
                        </p>
                      </div>
                      <div className={cx("newGroupContent__More", "margin30")}>
                        <Link
                          to={`/Chitiettintuc/${tinTapDoanContent[2].path}`}
                          className={cx("newGroupContent__More--link")}
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className={cx("newspapers")}>
              <h2 className={cx("continer__mainContent--title")}>
                Tin tức Báo chí
              </h2>
              <div className={cx("newEvent__contentItem", "row")}>
                {tinBaotri.map((news, i) => {
                  if (i < 3) {
                    return (
                      <div key={i} className={cx("contentItem__box")}>
                        <img
                          src={require(`../../assets/images/chiTietTinTuc/${news.src}`)}
                          alt=""
                          className={cx("newEvent--img")}
                        />
                        <div className={cx("boxContent_news")}>
                          <h3 className={cx("newsEvent--title")}>
                            {news.title}
                          </h3>
                          <p className={cx("newEvent--titleContent")}>
                            {news.content.split("/")[0]}
                          </p>
                          <div className={cx("newEventTime")}>
                            <p className={cx("timeDay")}> {news.day}</p>
                            <Link to={`/Chitiettintuc/${news.path}`}>
                              <p className={cx("timeMore")}>Xem chi tiết</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return false;
                })}
              </div>
            </article>
          </section>
        </article>
      )}
    </>
  );
}

export default TinTuc;
