import classNames from "classnames/bind";
import styles from "@/pages/Lienhe/Lienhe.module.scss";
import FormMessage from "./FormMessage";
import { Listnewspapers } from "@/redux/selector";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function LienHe() {
  return (
    <article className={cx("Continer")}>
      <section className={cx("continerMap", "grid", "wide")}>
        <h2 className={cx("titleContiner")}>
          <img
            src="./assets/img/lienhe/map.png"
            alt=""
            className={cx("titleImg")}
          />
          Bản đồ
        </h2>
      </section>
      <section className={cx("ContinerBanner")}></section>
      <section className={cx("ContinerImfomation", "grid", "wide")}>
        <article className={cx("infomationLeft PC-3")}>
          <div className={cx("leftContent")}>
            <h2 className={cx("titleContiner")}>
              <img
                src={require("../../assets/images/lienhe/sideMap.png")}
                alt=""
                className={cx("titleImg")}
              />
              Địa chỉ
            </h2>
            <p className={cx("leftContentTitle")}>
              Tòa nhà Vapa, số 48, ngõ 3 Tôn thất Thuyết Dịch Vọng Hậu, Cầu
              Giấy, Hà Nội
            </p>
            <div className={cx("leftContentContact")}>
              <p className={cx("phoneAndEmail")}>
                <img
                  src={require("../../assets/images/lienhe/phone.png")}
                  alt=""
                  className={cx("ContactPhone")}
                />
                033 623 7176
              </p>
              <p className={cx("phoneAndEmail")}>
                <img
                  src={require("../../assets/images/lienhe/@.png")}
                  alt=""
                  className={cx("ContactPhone")}
                />
                tientrung14122012@gmail.com
              </p>
            </div>
          </div>
          <div className={cx("leftContent")}>
            <h2 className={cx("titleContiner")}>
              <img
                src={require("../../assets/images/lienhe/giolamviec.png")}
                alt=""
                className={cx("titleImg")}
              />
              Giờ làm việc
            </h2>
            <div className={cx("timeWork")}>
              <div className={cx("daysTimeWork")}>
                <p className={cx("timeWorkContent")}>
                  <img
                    src={require("../../assets/images/lienhe/lichMIni.png")}
                    alt=""
                    className={cx("calendar")}
                  />
                  Thứ hai - Thứ sáu
                </p>
                <p className={cx("timeWorkContent")}>
                  <img
                    src={require("../../assets/images/lienhe/lichMIni.png")}
                    alt=""
                    className={cx("calendar")}
                  />
                  Thứ bảy
                </p>
              </div>
              <div className={cx("daysTimeWork")}>
                <p className={cx("timeWorkContent")}>
                  <img
                    src={require("../../assets/images/lienhe/clock.png")}
                    alt=""
                    className={cx("calendar")}
                  />
                  8:00am - 5:00pm
                </p>
                <p className={cx("timeWorkContent")}>
                  <img
                    src={require("../../assets/images/lienhe/clock.png")}
                    alt=""
                    className={cx("calendar")}
                  />
                  8:00am - 3:00pm
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={cx("infomationRight", "PC-8")}>
          <h3 className={cx("sendRichTitle")}>Gửi lười nhắn tới rich group</h3>
          <p className={cx("sendRichContent")}>
            Các thông tin cá nhân của bạn sẽ không bị công khai. hãy điền đầy đủ
            các ô có dấu *
          </p>
          {/* Form */}
          <FormMessage />
        </article>
      </section>
    </article>
  );
}

export default LienHe;
