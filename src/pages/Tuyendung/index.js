import { useSelector } from "react-redux/es/exports";

import styles from "./Tuyendung.module.scss";
import classNames from "classnames/bind";
import { listRecruitment } from "@/redux/selector";
import TinNoiBat from "../Chitiettintuc/Tinnoibat";

const cx = classNames.bind(styles);

function TuyenDung() {
  const listRecruitments = useSelector(listRecruitment);
  return (
    <article className={cx("mainContiner", "grid", "wide", "row")}>
      <section className={cx("continerTable", "PC-8")}>
        <table className={cx("recruitTable")}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiều đề</th>
              <th>Hạn nộp hồ sơ</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {listRecruitments.map((recruitment, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{recruitment.title}</td>
                  <td>{recruitment.deadline}</td>
                  <td>{recruitment.number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <TinNoiBat />
    </article>
  );
}

export default TuyenDung;
