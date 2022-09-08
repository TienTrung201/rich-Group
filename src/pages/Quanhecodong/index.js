import { useSelector } from "react-redux/es/exports";

import styles from "./Quanhecodong.module.scss";
import classNames from "classnames/bind";
import { ListShareholders } from "@/redux/selector";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function QuanHeCoDong() {
  const shareholders = useSelector(ListShareholders);
  const [show, setShow] = useState(false);
  const [showNwes, setShowNews] = useState("Công bố thông tin");
  let index = 0;
  const contentNews = shareholders.map((shareholder, i) => {
    if (shareholder.type === showNwes) {
      index += 1;
      return (
        <tr key={i}>
          <td>{index}</td>
          <td>{shareholder.title}</td>
          <td>{shareholder.day}</td>
          <td>
            <a target="_blank" rel="noreferrer" href={`${shareholder.pdf}`}>
              <img
                src={require(`../../assets/images/quanhecodong/Pdf.png`)}
                alt=""
              />
            </a>
          </td>
        </tr>
      );
    }
    return;
  });
  const listRecruitments = [
    "Công bố thông tin",
    "Bản tin nhà đầu tư",
    "Báo cáo thường niên",
    "Báo cáo tài chính",
    "Báo cáo quản trị",
    "Điều lệ và quy chế",
    "Đại hội cổ đông",
    "Báo cáo đánh giá cổ phiếu",
  ];
  const tagLists = listRecruitments.map((tagList, index) => {
    return (
      <li key={index} className={cx("relationList__Item")}>
        <span
          style={
            showNwes === tagList
              ? { backgroundColor: "#ccc" }
              : { backgroundColor: "#fff" }
          }
          onClick={() => {
            if (window.innerWidth > 1239) {
              window.scrollTo(0, 577);
            } else if (window.innerWidth > 1224 && window.innerWidth < 1239) {
              window.scrollTo(0, 295);
            } else {
              window.scrollTo(0, 225);
            }
            setShowNews(tagList);
          }}
          className={cx("relationList--link")}
        >
          <img
            src={require(`../../assets/images/quanhecodong/star.png`)}
            alt=""
            className={cx("relationList--img")}
          />
          {tagList}
        </span>
      </li>
    );
  });
  return (
    <article className={cx("Continer")}>
      {/* relation Open */}
      <div className={cx("continerRelation__open")}>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={cx("openRelation__icon")}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className={cx("fa-solid", "fa-right-from-bracket", "iconRelation")}
          />
        </div>
        <div
          className={
            show === false
              ? cx("relation__content", "close", "relation__content--fix")
              : cx("relation__content", "relation__content--fix")
          }
        >
          <h2 className={cx("relation__title")}>Quan hệ cổ đông</h2>
          <ul className={cx("relationList")}>{tagLists}</ul>
        </div>
      </div>
      {/*End relation Open */}
      <div className={cx("continer__Box", "wide", "grid", "row")}>
        <section className={cx("continer__Relation", "PC-3")}>
          <div className={cx("relation__content")}>
            <h2 className={cx("relation__title")}>Quan hệ cổ đông</h2>
            <ul className={cx("relationList")}>{tagLists}</ul>
          </div>
        </section>

        <section className={cx("continerTable", "PC-8")}>
          <h2 className={cx("Table__title")}>{showNwes}</h2>
          <table className={cx("recruitTable")}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tiều đề</th>
                <th>Ngày phát hành</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>{contentNews}</tbody>
          </table>
        </section>
      </div>
    </article>
  );
}

export default QuanHeCoDong;
