import styles from "./Gioithieu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function GioiThieu() {
  return (
    <>
      {/* Tầm nhìn sứ mệnh */}
      <section className={cx("continer__VisionMission")}>
        <div className={cx("visionMision__box", "grid", "wide")}>
          <h1 className={cx("continer__mainContent--title")}>
            Tầm nhìn và sứ mệnh
          </h1>
          <p className={cx("visionMision__content")}>
            RICHGROUP định hướng trở thành tập đoàn đa ngành uy tín hàng đầu tại
            Việt nam trong các lĩnh vực: nhân sự, giáo dục, thương mại, bất động
            sản, công nghệ, truyền thông. Nâng tầm ảnh hưởng của sản phẩm, dịch
            vụ, con người Việt Nam ra toàn thế giới.
          </p>
          <div className={cx("visionMision__List", "row")}>
            <div className={cx("visionMision__Item", "PC-3", "T-6", "M-12")}>
              <div className={cx("visionMision__img")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/cartImg.png")}
                  className={cx("visionMision--img")}
                />
                <h4 className={cx("visionMision--title")}>
                  Đối với thị trường
                </h4>
                <p className={cx("visionMision--ContentTitle")}>
                  Cung cấp những sản phẩm &amp; dịch vụ tốt nhất. Thỏa mãn khách
                  hàng khó tính về nội dung và chất lượng sản phẩm đưa ra.
                </p>
              </div>
            </div>
            <div className={cx("visionMision__Item", "PC-3", "T-6", "M-12")}>
              <div className={cx("visionMision__img")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/patnerImg.png")}
                  className={cx("visionMision--img")}
                />
                <h4 className={cx("visionMision--title")}>
                  Đối với Cổ đông và đối tác
                </h4>
                <p className={cx("visionMision--ContentTitle")}>
                  Mang đến những cơ hội, giải pháp để tiến xa hơn trong mọi lĩnh
                  vực đầu tư của tập đoàn.
                </p>
              </div>
            </div>
            <div className={cx("visionMision__Item", "PC-3", "T-6", "M-12")}>
              <div className={cx("visionMision__img")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/staff.png")}
                  className={cx("visionMision--img")}
                />
                <h4 className={cx("visionMision--title")}>Đối với nhân viên</h4>
                <p className={cx("visionMision--ContentTitle")}>
                  Tạo cơ hội phát triển công bằng, lành mạnh cho nhân viên thỏa
                  mãn ước mơ và hoài bão của mỗi người. Đào tạo những người đồng
                  hành đi cùng với Rich tác phong chuyên nghiệp, thân thiện, văn
                  minh.
                </p>
              </div>
            </div>
            <div className={cx("visionMision__Item", "PC-3", "T-6", "M-12")}>
              <div className={cx("visionMision__img")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/society.png")}
                  className={cx("visionMision--img")}
                />
                <h4 className={cx("visionMision--title")}>Đối với xã hội</h4>
                <p className={cx("visionMision--ContentTitle")}>
                  Đóng góp tích cực vào các hoạt động hướng về cộng đồng, cam
                  kết nâng cao chất lượng cuộc sống của đất nước thông qua các
                  hoạt động hợp tác hướng tới con người. Xây dựng một cộng đồng
                  từ thiện từ Tình Yêu Thương “LOVES” có ý nghĩa và để đóng góp
                  tích cực vào công cuộc phát triển chung của cộng đồng xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end Tầm nhìn sứ mệnh */}
      <section className={cx("continer__coreValues--wrapper")}>
        <div className={cx("continer__coreValues", "grid", "wide")}>
          <h1 className={cx("continer__mainContent--title")}>
            Giá trị cốt lõi
          </h1>
          <article className={cx("coreValues__content", "row")}>
            <img
              alt=""
              className={cx("coreValues__content--Line")}
              src={require("../../assets/images/gioithieu/lineGiatricotloi.png")}
            ></img>
            <div className={cx("coreValues--childrens", "row", "PC-10")}>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>
                  Trách nhiệm
                </h3>
                <p className={cx("coreValues--children-content")}>
                  Nhận thức và giả định trách nhiệm đới với hành động sản phẩm,
                  quyết định và các chính sách. Áp dụng cho cả trách nhiệm cá
                  nhân đối với nhân viên và trách nhiệm đối với toàn danh nghiệp
                  nói chung
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/1.png")}
                ></img>
              </section>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Cân bằng</h3>
                <p className={cx("coreValues--children-content")}>
                  Tạo một lập trường chủ động và duy trì cân bằng giữa công việc
                  và cuộc sống mạnh khỏe cho nhân viên.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/2.png")}
                ></img>
              </section>
            </div>
            <div className={cx("coreValues--childrens", "row", "PC-10")}>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Cam kết</h3>
                <p className={cx("coreValues--children-content")}>
                  Cam kết sản phẩm, dịch vụ tuyệt vời và các sáng kiến ảnh hưởng
                  đến cuộc sống bên trong và bên ngoài doanh nghiệp.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/3.png")}
                ></img>
              </section>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Cộng đồng</h3>
                <p className={cx("coreValues--children-content")}>
                  Đóng góp cho xã hội và thể hiện trách nhiệm xã hội doanh
                  nghiệp.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/4.png")}
                ></img>
              </section>
            </div>
            <div className={cx("coreValues--childrens", "row", "PC-10")}>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Đa dạng</h3>
                <p className={cx("coreValues--children-content")}>
                  Tôn trọng sự đa dạng và cho đi những phần tốt nhất mình có.
                  Thiết lập một chương trình vốn chủ sở hữu của nhân viên.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/5.png")}
                ></img>
              </section>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Trao quyền</h3>
                <p className={cx("coreValues--children-content")}>
                  Khuyến khích nhân viên đưa ra sáng kiến và chọn những sáng
                  kiến tốt nhất. Thông qua một môi trường bao bọc lỗi để trao
                  quyền cho nhân viên để dẫn dắt và ra quyết định.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/6.png")}
                ></img>
              </section>
            </div>
            <div className={cx("coreValues--childrens", "row", "PC-10")}>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Đổi mới</h3>
                <p className={cx("coreValues--children-content")}>
                  Theo đuổi những ý tưởng sáng tạo mới có khả năng thay đổi thế
                  giới
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/7.png")}
                ></img>
              </section>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Thống nhất</h3>
                <p className={cx("coreValues--children-content")}>
                  Hành động với sự trung thực và danh dự mà không ảnh hưởng tới
                  chân lý.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/8.png")}
                ></img>
              </section>
            </div>
            <div className={cx("coreValues--childrens", "row", "PC-10")}>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>Sở hữu</h3>
                <p className={cx("coreValues--children-content")}>
                  Chăm sóc tốt cho đối tác và khách hàng cứ coi như họ đã thuộc
                  về mình.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/9.png")}
                ></img>
              </section>
              <section className={cx("coreValues--children")}>
                <h3 className={cx("coreValues--children-title")}>An toàn</h3>
                <p className={cx("coreValues--children-content")}>
                  Đảm bảo sức khỏe và an toàn của nhân viên và đi xa hơn nữa là
                  những yêu cầu pháp lý để đem lại một môi trường làm việc tốt
                  nhất. Mang đến những sản phẩm an toàn về mọi mặt khi đến với
                  khách hàng và đối tác.
                </p>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/10.png")}
                ></img>
              </section>
            </div>
          </article>
        </div>
      </section>
      {/* end  giá trị cốt lõi */}

      {/* Lĩnh vực hoạt động */}
      <section className={cx("continer__fieldActivity--wrapper")}>
        <article className={cx("continer__fieldActivity", "grid", "wide")}>
          <h1 className={cx("continer__mainContent--title")}>
            Lĩnh vực hoạt động
          </h1>
          <article className={cx("continer__fieldActivity--Content", "row")}>
            <div
              className={cx(
                "fieldActivity--ContentBody",
                "PC-20",
                "T-6",
                "M-12"
              )}
            >
              <img
                alt=""
                src={require("../../assets/images/gioithieu/cartBig.png")}
              ></img>
              <h4 className={cx("fieldActivity--ContentTitle")}>Thương mại</h4>
            </div>
            <div
              className={cx(
                "fieldActivity--ContentBody",
                "PC-20",
                "T-6",
                "M-12"
              )}
            >
              <img
                alt=""
                src={require("../../assets/images/gioithieu/batdongsan.png")}
              ></img>
              <h4 className={cx("fieldActivity--ContentTitle")}>
                Bất động sản
              </h4>
            </div>{" "}
            <div
              className={cx(
                "fieldActivity--ContentBody",
                "PC-20",
                "T-6",
                "M-12"
              )}
            >
              <img
                alt=""
                src={require("../../assets/images/gioithieu/education.png")}
              ></img>
              <h4 className={cx("fieldActivity--ContentTitle")}>Giáo dục</h4>
            </div>{" "}
            <div
              className={cx(
                "fieldActivity--ContentBody",
                "PC-20",
                "T-6",
                "M-12"
              )}
            >
              <img
                alt=""
                src={require("../../assets/images/gioithieu/technology.png")}
              ></img>
              <h4 className={cx("fieldActivity--ContentTitle")}>Công nghệ</h4>
            </div>{" "}
            <div
              className={cx(
                "fieldActivity--ContentBody",
                "PC-20",
                "T-6",
                "M-12"
              )}
            >
              <img
                alt=""
                src={require("../../assets/images/gioithieu/digitial.png")}
              ></img>
              <h4 className={cx("fieldActivity--ContentTitle")}>
                Truyền thông
              </h4>
            </div>
          </article>
        </article>
      </section>

      {/* end lĩnh vực hoạt động */}

      {/* Công ty thành viên */}

      <section className={cx("continer__Company--Wrapper")}>
        <div className={cx("continer__Company", "grid", "wide")}>
          <h1 className={cx("continer__mainContent--title")}>
            Công ty thành viên
          </h1>
          <article className={cx("continer__Company--Content", "row")}>
            <section
              className={cx("continer__Company--children", "row", "PC-6")}
            >
              <div className={cx("continer__CompanyImg--Wrapper", "PC-6")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/imgRich.png")}
                />
              </div>
              <div className={cx("Company--children", "PC-6")}>
                <h4 className={cx("Company--childrenTitle")}>
                  Công ty cổ phần rích group
                </h4>
                <p className={cx("Company--childrenContent")}>
                  Địa chỉ: Tòa nhà Vapa, Số 4B, Ngõ 3 Tôn Thất Thuyết, Dịch Vọng
                  Hậu, Cầu Giấy, Hà Nội HOTLINE: 046.253.7318 Website:
                  www.richgroup.vn
                </p>
              </div>
            </section>
            <section
              className={cx("continer__Company--children", "row", "PC-6")}
            >
              <div className={cx("continer__CompanyImg--Wrapper", "PC-6")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/imgrich2.png")}
                />
              </div>
              <div className={cx("Company--children", "PC-6")}>
                <h4 className={cx("Company--childrenTitle")}>
                  Công ty cổ phần rích group
                </h4>
                <p className={cx("Company--childrenContent")}>
                  Địa chỉ: Tòa nhà Vapa, Số 4B, Ngõ 3 Tôn Thất Thuyết, Dịch Vọng
                  Hậu, Cầu Giấy, Hà Nội HOTLINE: 046.253.7318 Website:
                  www.richgroup.vn
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* end công ty thành viên */}

      {/* ý nghĩa logo */}

      <section className={cx("continer__meanningsLogo-wrapper")}>
        <article className={cx("continer__meanningsLogo")}>
          <h1 className={cx("continer__mainContent--title")}>Ý nghĩa logo</h1>
          <div className={cx("meanningsLogo", "grid", "wide")}>
            <article className={cx("meanningsLogo__childrens", "row")}>
              <section className={cx("meanningsLogo__children", "PC-20")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/richEdu.png")}
                />
                <p className={cx("meanningsLogo__children--content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. laborum.
                </p>
              </section>
              <section className={cx("meanningsLogo__children", "PC-20")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/richMedia.png")}
                />
                <p className={cx("meanningsLogo__children--content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. laborum.
                </p>
              </section>
              <section className={cx("meanningsLogo__children", "PC-20")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/richLand.png")}
                />
                <p className={cx("meanningsLogo__children--content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. laborum.
                </p>
              </section>
              <section className={cx("meanningsLogo__children", "PC-20")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/richMart.png")}
                />
                <p className={cx("meanningsLogo__children--content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. laborum.
                </p>
              </section>
              <section className={cx("meanningsLogo__children", "PC-20")}>
                <img
                  alt=""
                  src={require("../../assets/images/gioithieu/rich.png")}
                />
                <p className={cx("meanningsLogo__children--content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. laborum.
                </p>
              </section>
            </article>
          </div>
        </article>
      </section>

      {/*end ý nghĩa logo */}
    </>
  );
}

export default GioiThieu;
