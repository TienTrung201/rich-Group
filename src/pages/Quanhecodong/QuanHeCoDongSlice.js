import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const QuanHeCoDongSlice = createSlice({
  name: "QuanHeCoDongSlice",
  initialState: {
    status: "idle",
    shareholder: [
      {
        id: 1,
        title: "Bầu Chủ tịch HĐQT Tổng công ty",
        day: "02/11/2022 03:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCRiengBanNien2022(TruocVaSauSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 2,
        title: " Nghị quyết ĐHĐCĐ thường niên năm 2022",
        day: "20/01/2022 23:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_BCTCRiengBanNien2022(DaSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 3,
        title:
          " Thông báo về việc gia hạn thời gian gửi hồ sơ ứng cử, đề cử thành viên HĐQT",
        day: "07/08/2022 15:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_BCTCHopNhatBanNien2022(DaSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 4,
        title:
          " Thông báo thời gian và địa điểm tổ chức Đại hội đồng cổ đông thường niên 2022",
        day: "28/01/2022 03:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCRiengBanNien2022(DaSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 5,
        title:
          " Tài liệu Đại hội đồng cổ đông thường niên năm 2022 của PVTrans",
        day: "10/06/2022 12:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(DaSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 6,
        title: " Công bố Báo cáo tài chính hợp nhất Quý 1 năm 2022",
        day: "08/11/2022 15:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(TruocVaSauSoatXet).pdf",
        type: "Công bố thông tin",
      },
      {
        id: 7,
        title:
          " Tài liệu Đại hội đồng cổ đông thường niên năm 2022 của PVTrans",
        day: "20/06/2022 22:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/GIAI%20TRINH%20BCTC%20HOP%20NHAT%20NAM%202015%20%20%20KIEM%20TOAN.PDF",
        type: "Công bố thông tin",
      },
      {
        id: 8,
        title: "Software Developer (SQL/.Net/JavaScript)",
        day: "12/05/2022 00:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(TruocVaSauSoatXet).pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 9,
        title:
          "Bùng nổ du lịch thúc đẩy phục hồi kinh tế Việt Nam sau đại dịch",
        day: "22/05/2022 11:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Hop%20nhat%20quy%201%20nam%202022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 10,
        title:
          "Tháo gỡ khó khăn, bất cập để ngành Du lịch phục hồi nhanh, bền vững",
        day: "22/15/2022 12:30",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Rieng%20quy%201%20nam2022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 11,
        title:
          "Du lịch” và “hàng không” chiếm vị trí cao nhất về tìm kiếm của người Việt trong quý 2/2022",
        day: "02/05/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Rieng%20quy%201%20nam2022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 12,
        title: "Tín hiệu tích cực của thị trường khách quốc tế đến Việt Nam",
        day: "02/05/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20quy%201%20nam%202022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 13,
        title:
          " Doanh thu dịch vụ du lịch của thành phố Hồ Chí Minh tăng tích cực",
        day: "02/05/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/SACOMBANK_BCTC%20RIENG%20KIEM%20TOAN%20NAM%20%20%202015.PDF",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 14,
        title:
          "Sôi động thị trường du lịch outbound, cơ hội phục hồi cho doanh nghiệp",
        day: "02/05/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20quy%201%20nam%202022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 15,
        title: "Thị trường hàng không nội địa đã hoàn toàn hồi phục",
        day: "02/05/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Hop%20nhat%20quy%201%20nam%202022.pdf",
        type: "Bản tin nhà đầu tư",
      },
      {
        id: 16,
        title: "Tình hình kinh tế vĩ mô năm 2021 vàtriển vọng kinh tế năm 2022",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20hop%20nhat%20quy%202%202022.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 17,
        title: "Thông tin cổ phiếu vàQuan hệ cổ đông",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/GIAI%20TRINH%20BCTC%20RIENG%20NAM%202015%20KIEM%20%20%20TOAN.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 18,
        title: "Urgent - Android Developer (Java/Kotlin)",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20hop%20nhat%20quy%202%202022.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 19,
        title: "Các chỉ tiêu kinh doanh cơ bản giai đoạn 2017 – 2021",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/SACOMBANK_BCTC%20HOP%20NHAT%20KIEM%20TOAN%20%20%20NAM%202015.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 20,
        title: "Danh hiệu, giải thưởng năm 2021",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20quy%202%202022.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 21,
        title: "Tầm nhìn, sứ mệnh và giá trị cốt lõi ",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202015/12052015%20STB%20CBTT%20BCTC%20RIENG%20QUY%20I.2015.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 22,
        title: "Các dấu mốc phát triển",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20rieng%20quy%202%202022.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 23,
        title: "Kết quả hoạt động kinh doanh năm 2021",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/Giai%20trinh%20KQKD%20rieng%20Ban%20nien%202021%20so%20voi%20cung%20ky%20nam%20truoc.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 24,
        title: "Báo cáo của Ban Kiểm soát",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202015/12052015%20STB%20CBTT%20BCTC%20RIENG%20QUY%20I.2015.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 25,
        title: "Hoạt động kiểm toán nội bộ",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/Giai%20trinh%20KQKD%20hop%20nhat%20Ban%20nien%202021%20so%20voi%20cung%20ky%20nam%20truoc.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 26,
        title: "Chiến lược phát triển",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/BCTC%20hop%20nhat%20Ban%20nien%202021%20da%20soat%20xet.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 27,
        title: "Hội đồng Quản trị",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20rieng%20nam%202021%20da%20kiem%20toan.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 28,
        title: "Lĩnh vực kinh doanh",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202015/14.08.2015%20STB%20CBTT%20-%20BCTC%20RIENG%20QUY%20II.2015.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 29,
        title: "Các chỉ tiêu kinh doanh cơ bản giai đoạn 2016 – 2020",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20hop%20nhat%20nam%202021%20da%20kiem%20toan.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 30,
        title: "Tình hình kinh tế vĩ mô năm 2020 và triển vọng kinh tếnăm 2021",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202015/BCTC%20RIENG%20Q3%202015.PDF",
        type: "Báo cáo thường niên",
      },
      {
        id: 31,
        title: "Các sự kiện nổi bật năm 2020",
        day: "02/03/2024 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20BCTC%20Hop%20nhat%20nam%202021%20da%20kiem%20toan.pdf",
        type: "Báo cáo thường niên",
      },
      {
        id: 32,
        title: "Báo Cáo Hợp Nhất Kiểm Toán/Soát Xét",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202015/BCTC%20HOP%20NHAT%20QUY%203%202015.PDF",
        type: "Báo cáo tài chính",
      },
      {
        id: 33,
        title: "Báo Cáo Riêng Kiểm Toán/Soát Xét",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20Hop%20nhat%20nam%202021%20truoc%20va%20sau%20kiem%20toan.pdf",
        type: "Báo cáo tài chính",
      },
      {
        id: 34,
        title: "Tóm Tắt Kết Quả Kinh doanh (Tài Liệu Thuyết Trình)",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202016/BCTC%20RIENG%20Q3.2016.PDF",
        type: "Báo cáo tài chính",
      },
      {
        id: 35,
        title: "Báo Cáo Riêng",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20BCTC%20rieng%20nam%202021%20da%20kiem%20toan.pdf",
        type: "Báo cáo tài chính",
      },
      {
        id: 36,
        title: "Báo cáo tài chính Riêng lẻ soát sét giữa niên độ năm 2022",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202021/Sacombank-BCTC-rieng-quy-1.2021.PDF",
        type: "Báo cáo tài chính",
      },
      {
        id: 37,
        title: "Báo cáo Quản trị Công ty 6 tháng đầu năm 2022",
        day: "05/06/2019 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202021/Sacombank_giai%20trinh%20BCTC%20hop%20nhat%20quy%202.2021.PDF",
        type: "Báo cáo quản trị",
      },
      {
        id: 38,
        title: "Báo cáo Quản trị Công ty năm 2021",
        day: "05/06/2019 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202016/GIAI%20TRINH%20BCTC%20HOP%20NHAT%20Q1.2016.PDF",
        type: "Báo cáo quản trị",
      },
      {
        id: 39,
        title: "áo cáo Quản trị Công ty 6 tháng đầu năm 2019",
        day: "04/04/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202021/Sacombank_giai%20trinh%20BCTC%20rieng%20le%20quy%202.2021.PDF",
        type: "Báo cáo quản trị",
      },
      {
        id: 40,
        title: "Báo cáo quản trị công ty bán niên năm 2018",
        day: "05/06/2019 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202016/270416%20STB%20CBTT%20BCTC%20HOP%20NHAT%20QUY%20I.2016.PDF",
        type: "Báo cáo quản trị",
      },
      {
        id: 41,
        title: "Báo cáo quản trị công ty năm 2017",
        day: "05/06/2019 09:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202021/20211029%20-%20STB%20-%20BCTC%20Rieng%20Quy%203.2021.PDF",
        type: "Báo cáo quản trị",
      },
      {
        id: 42,
        title: "Điều lệ tổ chức và hoạt động (17/04/2022)",
        day: "19/03/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/BCKQKDQI-2009.pdf",
        type: "Điều lệ và quy chế",
      },
      {
        id: 43,
        title: "Quy chế nội bộ về quản trị công ty (17/04/2022)",
        day: "19/03/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202021/20211029%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20Quy%203.2021.PDF",
        type: "Điều lệ và quy chế",
      },
      {
        id: 44,
        title: "Quy chế hoạt động của HĐQT (17/04/2022)",
        day: "19/03/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20nam%202021.pdf",
        type: "Điều lệ và quy chế",
      },
      {
        id: 45,
        title: "Quy chế công bố thông tin (23/11/2021)",
        day: "19/03/2022 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20BCTC%20hop%20nhat%20Quy%204.2021.pdf",
        type: "Điều lệ và quy chế",
      },
      {
        id: 46,
        title: "Rich - TÀI LIỆU ĐẠI HỘI ĐỒNG CỔ ĐÔNG BẤT THƯỜNG NĂM 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202015/150216%20GIAI%20TRINH%20BCTC%20HOP%20NHAT%20Q4.2015.pdf",
        type: "Đại hội cổ đông",
      },
      {
        id: 47,
        title: "Rich - BIÊN BẢN HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20Quy%204.2021.pdf",
        type: "Đại hội cổ đông",
      },
      {
        id: 48,
        title: "Rich - TÀI LIỆU ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202018/SACOMBANK_BCTC%20HOP%20NHAT%20NAM%202018_KIEM%20TOAN.PDF",
        type: "Đại hội cổ đông",
      },
      {
        id: 49,
        title:
          "Rich - NGHỊ QUYẾT HĐQT V/V THÔNG QUA TÀI LIỆU, CHỐT THỜI GIAN CHÍNH THỨC HỌP ĐHĐCĐ BẤT THƯỜNG NĂM 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20hop%20nhat%20nam%202021.pdf",
        type: "Đại hội cổ đông",
      },
      {
        id: 50,
        title: "Rich - NGHỊ QUYẾT ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202018/STB%20CBTT%20BCTC%20RIENG%20BAN%20NIEN%20DA%20SOAT%20XET%202018.PDF",
        type: "Đại hội cổ đông",
      },
      {
        id: 51,
        title:
          "Rich_NQHĐQT_THÔNG QUA TÀI LIỆU, CHỐT THỜI GIAN CHÍNH THỨC HỌP ĐHĐCĐ 2022",
        day: "12/08/2020 07:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20BCTC%20rieng%20le%20Quy%204.2021.pdf",
        type: "Đại hội cổ đông",
      },
      {
        id: 52,
        title: "Technical View: Tuần 29 - 31/08/2022",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202018/SACOMBANK_BCTC%20HOP%20NHAT%20Q1.2018.PDF",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 53,
        title:
          "HDG: Khuyến nghị TRUNG LẬP với giá mục tiêu 58.627 VNĐ/ cổ phiếu.",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/BCDKTQI-2009.pdf",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 54,
        title:
          "PVD: Khuyến nghị KHẢ QUAN với giá mục tiêu 25,300 đồng/cổ phiếu",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/Thuyet%20minh%20BCTC%20%20quy%201-2009%20cua%20Sacombank%20Group.doc",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 55,
        title: "GMD: Khuyến nghị MUA với giá mục tiêu 62.400 đồng/cổ phiếu.",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/bao%20cao%20hop%20nhat%20quy%202-2009.pdf",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 56,
        title:
          "PET: Khuyến nghị OUTPERFORM với giá mục tiêu 47,151 đồng/cổ phiếu.",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/bao%20cao%20hop%20nhat%20quy%202-2009.pdf",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 57,
        title:
          "MBB: Khuyến nghị KHẢ QUAN với giá mục tiêu 34.000 đồng/cổ phiếu.",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/BCKQKDQII_09_TT38.pdf",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 58,
        title:
          "BWE: Khuyến nghị TĂNG TỶ TRỌNG với giá mục tiêu 55,300 đồng/cổ phiếu.",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202009/BCKQKDQIII_09.pdf",
        type: "Báo cáo đánh giá cổ phiếu",
      },
      {
        id: 59,
        title: "PNJ: Khuyến nghị OUTPERFORM với giá mục tiêu 141.000 đồng/CP",
        day: "04/09/2021 08:00",
        pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202009/Thuyet%20minh%20BCTC%20%20quy%203-2009%20cua%20Sacombank%20Group.doc",
        type: "Báo cáo đánh giá cổ phiếu",
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShareholders.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShareholders.fulfilled, (state, action) => {
        state.shareholder = action.payload;
        state.status = "idle";
      })
      .addCase(addNewShareholder.fulfilled, (state, action) => {
        state.shareholder.push(action.payload);
      });
  },
});
export const fetchShareholders = createAsyncThunk(
  "shareholders/ferchShareholders",
  async () => {
    const res = await fetch("/api/ferchShareholders");
    const data = await res.json();
    return data.shareholders;
  }
);

export const addNewShareholder = createAsyncThunk(
  "shareholders/AddNewShareholder",
  async (newShareholder) => {
    const res = await fetch("/api/ferchShareholders", {
      method: "POST",
      body: JSON.stringify(newShareholder),
    });
    const data = await res.json();
    return data.shareholder;
  }
);

export default QuanHeCoDongSlice;

export const shareholders = [
  {
    id: 1,
    title: "Bầu Chủ tịch HĐQT Tổng công ty",
    day: "02/11/2022 03:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCRiengBanNien2022(TruocVaSauSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 2,
    title: " Nghị quyết ĐHĐCĐ thường niên năm 2022",
    day: "20/01/2022 23:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_BCTCRiengBanNien2022(DaSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 3,
    title:
      " Thông báo về việc gia hạn thời gian gửi hồ sơ ứng cử, đề cử thành viên HĐQT",
    day: "07/08/2022 15:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_BCTCHopNhatBanNien2022(DaSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 4,
    title:
      " Thông báo thời gian và địa điểm tổ chức Đại hội đồng cổ đông thường niên 2022",
    day: "28/01/2022 03:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCRiengBanNien2022(DaSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 5,
    title: " Tài liệu Đại hội đồng cổ đông thường niên năm 2022 của PVTrans",
    day: "10/06/2022 12:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(DaSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 6,
    title: " Công bố Báo cáo tài chính hợp nhất Quý 1 năm 2022",
    day: "08/11/2022 15:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(TruocVaSauSoatXet).pdf",
    type: "Công bố thông tin",
  },
  {
    id: 7,
    title: " Tài liệu Đại hội đồng cổ đông thường niên năm 2022 của PVTrans",
    day: "20/06/2022 22:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/GIAI%20TRINH%20BCTC%20HOP%20NHAT%20NAM%202015%20%20%20KIEM%20TOAN.PDF",
    type: "Công bố thông tin",
  },
  {
    id: 8,
    title: "Software Developer (SQL/.Net/JavaScript)",
    day: "12/05/2022 00:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202022/20220819_STB_Sacombank_GiaiTrinhBCTCHopNhatBanNien2022(TruocVaSauSoatXet).pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 9,
    title: "Bùng nổ du lịch thúc đẩy phục hồi kinh tế Việt Nam sau đại dịch",
    day: "22/05/2022 11:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Hop%20nhat%20quy%201%20nam%202022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 10,
    title:
      "Tháo gỡ khó khăn, bất cập để ngành Du lịch phục hồi nhanh, bền vững",
    day: "22/15/2022 12:30",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Rieng%20quy%201%20nam2022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 11,
    title:
      "Du lịch” và “hàng không” chiếm vị trí cao nhất về tìm kiếm của người Việt trong quý 2/2022",
    day: "02/05/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Rieng%20quy%201%20nam2022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 12,
    title: "Tín hiệu tích cực của thị trường khách quốc tế đến Việt Nam",
    day: "02/05/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20quy%201%20nam%202022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 13,
    title: " Doanh thu dịch vụ du lịch của thành phố Hồ Chí Minh tăng tích cực",
    day: "02/05/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/SACOMBANK_BCTC%20RIENG%20KIEM%20TOAN%20NAM%20%20%202015.PDF",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 14,
    title:
      "Sôi động thị trường du lịch outbound, cơ hội phục hồi cho doanh nghiệp",
    day: "02/05/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20quy%201%20nam%202022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 15,
    title: "Thị trường hàng không nội địa đã hoàn toàn hồi phục",
    day: "02/05/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202022/20220429%20-%20STB%20-%20BCTC%20Hop%20nhat%20quy%201%20nam%202022.pdf",
    type: "Bản tin nhà đầu tư",
  },
  {
    id: 16,
    title: "Tình hình kinh tế vĩ mô năm 2021 vàtriển vọng kinh tế năm 2022",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20hop%20nhat%20quy%202%202022.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 17,
    title: "Thông tin cổ phiếu vàQuan hệ cổ đông",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/GIAI%20TRINH%20BCTC%20RIENG%20NAM%202015%20KIEM%20%20%20TOAN.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 18,
    title: "Urgent - Android Developer (Java/Kotlin)",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20hop%20nhat%20quy%202%202022.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 19,
    title: "Các chỉ tiêu kinh doanh cơ bản giai đoạn 2017 – 2021",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202015/SACOMBANK_BCTC%20HOP%20NHAT%20KIEM%20TOAN%20%20%20NAM%202015.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 20,
    title: "Danh hiệu, giải thưởng năm 2021",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20quy%202%202022.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 21,
    title: "Tầm nhìn, sứ mệnh và giá trị cốt lõi ",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202015/12052015%20STB%20CBTT%20BCTC%20RIENG%20QUY%20I.2015.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 22,
    title: "Các dấu mốc phát triển",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202022/20220726%20-%20STB%20-%20BCTC%20rieng%20quy%202%202022.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 23,
    title: "Kết quả hoạt động kinh doanh năm 2021",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/Giai%20trinh%20KQKD%20rieng%20Ban%20nien%202021%20so%20voi%20cung%20ky%20nam%20truoc.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 24,
    title: "Báo cáo của Ban Kiểm soát",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202015/12052015%20STB%20CBTT%20BCTC%20RIENG%20QUY%20I.2015.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 25,
    title: "Hoạt động kiểm toán nội bộ",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/Giai%20trinh%20KQKD%20hop%20nhat%20Ban%20nien%202021%20so%20voi%20cung%20ky%20nam%20truoc.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 26,
    title: "Chiến lược phát triển",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202021/BCTC%20hop%20nhat%20Ban%20nien%202021%20da%20soat%20xet.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 27,
    title: "Hội đồng Quản trị",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20rieng%20nam%202021%20da%20kiem%20toan.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 28,
    title: "Lĩnh vực kinh doanh",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202015/14.08.2015%20STB%20CBTT%20-%20BCTC%20RIENG%20QUY%20II.2015.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 29,
    title: "Các chỉ tiêu kinh doanh cơ bản giai đoạn 2016 – 2020",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20hop%20nhat%20nam%202021%20da%20kiem%20toan.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 30,
    title: "Tình hình kinh tế vĩ mô năm 2020 và triển vọng kinh tếnăm 2021",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202015/BCTC%20RIENG%20Q3%202015.PDF",
    type: "Báo cáo thường niên",
  },
  {
    id: 31,
    title: "Các sự kiện nổi bật năm 2020",
    day: "02/03/2024 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20BCTC%20Hop%20nhat%20nam%202021%20da%20kiem%20toan.pdf",
    type: "Báo cáo thường niên",
  },
  {
    id: 32,
    title: "Báo Cáo Hợp Nhất Kiểm Toán/Soát Xét",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202015/BCTC%20HOP%20NHAT%20QUY%203%202015.PDF",
    type: "Báo cáo tài chính",
  },
  {
    id: 33,
    title: "Báo Cáo Riêng Kiểm Toán/Soát Xét",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20Giai%20trinh%20so%20lieu%20BCTC%20Hop%20nhat%20nam%202021%20truoc%20va%20sau%20kiem%20toan.pdf",
    type: "Báo cáo tài chính",
  },
  {
    id: 34,
    title: "Tóm Tắt Kết Quả Kinh doanh (Tài Liệu Thuyết Trình)",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202016/BCTC%20RIENG%20Q3.2016.PDF",
    type: "Báo cáo tài chính",
  },
  {
    id: 35,
    title: "Báo Cáo Riêng",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202021/20220330%20-%20STB%20-%20BCTC%20rieng%20nam%202021%20da%20kiem%20toan.pdf",
    type: "Báo cáo tài chính",
  },
  {
    id: 36,
    title: "Báo cáo tài chính Riêng lẻ soát sét giữa niên độ năm 2022",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202021/Sacombank-BCTC-rieng-quy-1.2021.PDF",
    type: "Báo cáo tài chính",
  },
  {
    id: 37,
    title: "Báo cáo Quản trị Công ty 6 tháng đầu năm 2022",
    day: "05/06/2019 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202021/Sacombank_giai%20trinh%20BCTC%20hop%20nhat%20quy%202.2021.PDF",
    type: "Báo cáo quản trị",
  },
  {
    id: 38,
    title: "Báo cáo Quản trị Công ty năm 2021",
    day: "05/06/2019 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202016/GIAI%20TRINH%20BCTC%20HOP%20NHAT%20Q1.2016.PDF",
    type: "Báo cáo quản trị",
  },
  {
    id: 39,
    title: "áo cáo Quản trị Công ty 6 tháng đầu năm 2019",
    day: "04/04/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202021/Sacombank_giai%20trinh%20BCTC%20rieng%20le%20quy%202.2021.PDF",
    type: "Báo cáo quản trị",
  },
  {
    id: 40,
    title: "Báo cáo quản trị công ty bán niên năm 2018",
    day: "05/06/2019 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202016/270416%20STB%20CBTT%20BCTC%20HOP%20NHAT%20QUY%20I.2016.PDF",
    type: "Báo cáo quản trị",
  },
  {
    id: 41,
    title: "Báo cáo quản trị công ty năm 2017",
    day: "05/06/2019 09:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202021/20211029%20-%20STB%20-%20BCTC%20Rieng%20Quy%203.2021.PDF",
    type: "Báo cáo quản trị",
  },
  {
    id: 42,
    title: "Điều lệ tổ chức và hoạt động (17/04/2022)",
    day: "19/03/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/BCKQKDQI-2009.pdf",
    type: "Điều lệ và quy chế",
  },
  {
    id: 43,
    title: "Quy chế nội bộ về quản trị công ty (17/04/2022)",
    day: "19/03/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202021/20211029%20-%20STB%20-%20Giai%20trinh%20BCTC%20Rieng%20Quy%203.2021.PDF",
    type: "Điều lệ và quy chế",
  },
  {
    id: 44,
    title: "Quy chế hoạt động của HĐQT (17/04/2022)",
    day: "19/03/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20nam%202021.pdf",
    type: "Điều lệ và quy chế",
  },
  {
    id: 45,
    title: "Quy chế công bố thông tin (23/11/2021)",
    day: "19/03/2022 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20BCTC%20hop%20nhat%20Quy%204.2021.pdf",
    type: "Điều lệ và quy chế",
  },
  {
    id: 46,
    title: "Rich - TÀI LIỆU ĐẠI HỘI ĐỒNG CỔ ĐÔNG BẤT THƯỜNG NĂM 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202015/150216%20GIAI%20TRINH%20BCTC%20HOP%20NHAT%20Q4.2015.pdf",
    type: "Đại hội cổ đông",
  },
  {
    id: 47,
    title: "Rich - BIÊN BẢN HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20rieng%20le%20Quy%204.2021.pdf",
    type: "Đại hội cổ đông",
  },
  {
    id: 48,
    title: "Rich - TÀI LIỆU ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/%C4%90%C3%A3%20ki%E1%BB%83m%20to%C3%A1n%20n%C4%83m%202018/SACOMBANK_BCTC%20HOP%20NHAT%20NAM%202018_KIEM%20TOAN.PDF",
    type: "Đại hội cổ đông",
  },
  {
    id: 49,
    title:
      "Rich - NGHỊ QUYẾT HĐQT V/V THÔNG QUA TÀI LIỆU, CHỐT THỜI GIAN CHÍNH THỨC HỌP ĐHĐCĐ BẤT THƯỜNG NĂM 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20Giai%20trinh%20BCTC%20hop%20nhat%20nam%202021.pdf",
    type: "Đại hội cổ đông",
  },
  {
    id: 50,
    title: "Rich - NGHỊ QUYẾT ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN NĂM 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/B%C3%A1n%20ni%C3%AAn%20n%C4%83m%202018/STB%20CBTT%20BCTC%20RIENG%20BAN%20NIEN%20DA%20SOAT%20XET%202018.PDF",
    type: "Đại hội cổ đông",
  },
  {
    id: 51,
    title:
      "Rich_NQHĐQT_THÔNG QUA TÀI LIỆU, CHỐT THỜI GIAN CHÍNH THỨC HỌP ĐHĐCĐ 2022",
    day: "12/08/2020 07:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%204%20n%C4%83m%202021/20220128%20-%20STB%20-%20BCTC%20rieng%20le%20Quy%204.2021.pdf",
    type: "Đại hội cổ đông",
  },
  {
    id: 52,
    title: "Technical View: Tuần 29 - 31/08/2022",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202018/SACOMBANK_BCTC%20HOP%20NHAT%20Q1.2018.PDF",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 53,
    title: "HDG: Khuyến nghị TRUNG LẬP với giá mục tiêu 58.627 VNĐ/ cổ phiếu.",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/BCDKTQI-2009.pdf",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 54,
    title: "PVD: Khuyến nghị KHẢ QUAN với giá mục tiêu 25,300 đồng/cổ phiếu",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%201%20n%C4%83m%202009/Thuyet%20minh%20BCTC%20%20quy%201-2009%20cua%20Sacombank%20Group.doc",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 55,
    title: "GMD: Khuyến nghị MUA với giá mục tiêu 62.400 đồng/cổ phiếu.",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/bao%20cao%20hop%20nhat%20quy%202-2009.pdf",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 56,
    title: "PET: Khuyến nghị OUTPERFORM với giá mục tiêu 47,151 đồng/cổ phiếu.",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/bao%20cao%20hop%20nhat%20quy%202-2009.pdf",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 57,
    title: "MBB: Khuyến nghị KHẢ QUAN với giá mục tiêu 34.000 đồng/cổ phiếu.",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%202%20n%C4%83m%202009/BCKQKDQII_09_TT38.pdf",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 58,
    title:
      "BWE: Khuyến nghị TĂNG TỶ TRỌNG với giá mục tiêu 55,300 đồng/cổ phiếu.",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202009/BCKQKDQIII_09.pdf",
    type: "Báo cáo đánh giá cổ phiếu",
  },
  {
    id: 59,
    title: "PNJ: Khuyến nghị OUTPERFORM với giá mục tiêu 141.000 đồng/CP",
    day: "04/09/2021 08:00",
    pdf: "https://www.sacombank.com.vn/company/BaoCaoTaiChinh/Qu%C3%BD%203%20n%C4%83m%202009/Thuyet%20minh%20BCTC%20%20quy%203-2009%20cua%20Sacombank%20Group.doc",
    type: "Báo cáo đánh giá cổ phiếu",
  },
];
