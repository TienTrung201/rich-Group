import { useSelector } from "react-redux/es/exports";

import styles from "./Chitiettintuc.module.scss";
import classNames from "classnames/bind";
import { Listnewspapers } from "@/redux/selector";
import TinNoiBat from "./Tinnoibat";
import FormMessage from "../Lienhe/FormMessage";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(styles);

function Chitiettintuc({ news, title, img, content }) {
  const listNews = useSelector(Listnewspapers);
  // console.log(listNews);
  const [like, setLike] = useState(653);
  const [tweet, setTweet] = useState(19);
  const titleNews = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  title = news.title;
  img = news.src;
  content = news.content.split("/ /");
  const contentTitles = [content[0], content[1]];
  const contentsNews = content.slice(2);
  const relatedNews = listNews.map((relatedNews, index) => {
    if (news.type === relatedNews.type) {
      return (
        <Link
          key={index}
          onClick={() => {
            window.scrollTo(0, titleNews.current.offsetTop - 70);
          }}
          to={`/Chitiettintuc/${relatedNews.path}`}
          className={cx("newsContentCT", "PC-4", "T-4", "M-4")}
        >
          <div>
            <img
              src={require(`../../assets/images/chiTietTinTuc/${relatedNews.src}`)}
              alt=""
              className={cx("newsImgCT")}
            />
            <div className={cx("newsContent-p")}>{relatedNews.title}</div>
          </div>
        </Link>
      );
    }
    return false;
  });
  return (
    <article className={cx("mainContiner", "grid", "wide", "row")}>
      <section className={cx("continerNews", "PC-8")}>
        <section className={cx("continerDocument")}>
          <h2 ref={titleNews} className={cx("TitleContiner")}>
            {title}
          </h2>
          {contentTitles.map((contentTitle, index) => {
            return (
              <p key={index} className={cx("TitleContent")}>
                {contentTitle}
              </p>
            );
          })}

          <div className={cx("banerContiner")}>
            <img
              src={require(`../../assets/images/chiTietTinTuc/${img}`)}
              alt=""
              className={cx("timeCalendar")}
            />
          </div>
          {contentsNews.map((content, index) => {
            return (
              <p key={index} className={cx("TitleContent")}>
                {content}
              </p>
            );
          })}

          <div className={cx("netWorkContiner")}>
            <div className={cx("networkContent")}>
              <button
                onClick={() => {
                  setLike((prevState) => prevState + 1);
                }}
                className={cx("facebookButton")}
              >
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className={cx("icon--like", "fa-solid", "fa-thumbs-up")}
                />
                Like
              </button>
              <button className={cx("facebookButton")}>Share</button>
              <p className={cx("facebookCountLike")}>{like}</p>
              <button
                onClick={() => {
                  setTweet((prevState) => prevState + 1);
                }}
                className={cx("tweetButton")}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={cx("fa-brands", "fa-twitter", "icon--tweet")}
                />
                Tweet
              </button>
              <p className={cx("tweetCountLike")}>{tweet}</p>
            </div>
            <div className={cx("networkTime")}>
              <img
                src={require("../../assets/images/lienhe/lichMIni.png")}
                alt=""
                className={cx("timeCalendar")}
              />
              <p className={cx("timeDays")}>{news.day}</p>
              <p className={cx("timeDays")}>Tag: {news.type}</p>
            </div>
          </div>
        </section>
        <section className={cx("continerContact", "row")}>
          <article className={cx("contacts")}>
            <div className={cx("contactHotline")}>
              <img
                src={require("../../assets/images/chiTietTinTuc/iconHotline.png")}
                alt=""
                className={cx("hotlinePerson")}
              />
              <h3 className={cx("hotlineTitle")}>Tổng đài 1900 9384</h3>
            </div>
            <div className={cx("contactHotline")}>
              <img
                src={require("../../assets/images/chiTietTinTuc/iconPhone.png")}
                alt=""
                className={cx("hotlinePerson")}
              />
              <h3 className={cx("hotlineTitle")}>Cố định: 04.05934.020</h3>
            </div>
            <div className={cx("contactHotline")}>
              <img
                src={require("../../assets/images/chiTietTinTuc/iconphone2.png")}
                alt=""
                className={cx("hotlinePerson")}
              />
              <h3 className={cx("hotlineTitle")}>Di động: 0958.483.332</h3>
            </div>
          </article>
          <article className={cx("contactNews")}>
            <h3 className={cx("newsMore")}>Các tin liên quan</h3>
            <div className={cx("boxNew", "row")}>{relatedNews}</div>
            <div className={cx("newsAll")}>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={cx("newAllText")}
                to="/TinTuc"
              >
                Xem toàn bộ tin
              </Link>
            </div>
          </article>
        </section>
        <section className={cx("sendQuestion")}>
          <h3 className={cx("sendRichTitle")}>Gửi câu hỏi của bạn</h3>
          <p className={cx("sendRichContent")}>
            Các thông tin cá nhân của bạn sẽ không bị công khai. hãy điền đầy đủ
            các ô có dấu *
          </p>
          <FormMessage />
        </section>
      </section>
      <TinNoiBat titleNews={titleNews} />
    </article>
  );
}

export default Chitiettintuc;
