import "./sendmessenge.js";
import classNames from "classnames/bind";
import styles from "@/pages/Lienhe/Lienhe.module.scss";
import sendMessenge from "./sendmessenge.js";

const cx = classNames.bind(styles);
function FormMessage() {
  return (
    <form action="" name="sendMessenge">
      <div className={cx("formName__input")}>
        <p className={cx("inputName", "inputType")}>Họ và tên*</p>
        <p className={cx("inputEmail", "inputType")}>Email*</p>
        <p className={cx("inputMessenge", "inputType")}>Lời nhắn</p>
      </div>
      <div className={cx("formInput")}>
        <input type="text" className={cx("input--name")} name="name" />
        <div className={cx("inputEmailNumber")}>
          <input type="email" className={cx("input--email")} name="email" />
          <p className={cx("inputNumber", "inputType")}>Điện thoại</p>
          <input
            type="text"
            name="phone"
            id=""
            className={cx("input--number")}
          />
        </div>
        {/* <input type="text" class="input--messenge" name="messenge")}> */}
        <textarea
          name="messenge"
          form="usrform"
          className={cx("input--messenge")}
          defaultValue={""}
        />
        <div
          onClick={() => {
            sendMessenge(document.forms.sendMessenge);
          }}
          className={cx("formSubmit")}
        >
          Gửi
        </div>
      </div>
    </form>
  );
}
export default FormMessage;
