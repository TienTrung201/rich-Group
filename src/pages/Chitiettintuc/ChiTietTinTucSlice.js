import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    status: "idle",
    newspapers: [],
  },
  reducers: {
    getDataNews: (state, action) => {
      state.newspapers.push(action.payload);
    },
  },
});
export default newsSlice;

export const newspapers = [
  {
    id: 1,
    title: "Campuchia nói 9 nước đề nghị phối hợp chống buôn người",
    content:
      "Bộ Ngoại giao Campuchia cho hay nhận được đề nghị từ đại sứ quán 9 nước trong hợp tác chống buôn người và giải cứu công dân trong 6 tháng qua./Ông Chum Sounry cho biết trong nửa đầu năm 2022, chính phủ Campuchia đã nhận được đề nghị từ đại sứ quán 9 nước về hợp tác hỗ trợ giải cứu công dân bị lừa sang quốc gia Đông Nam Á này và đưa vào các cơ sở lao động cưỡng ép. Những nước đề nghị hợp tác chống buôn người với Campuchia trong 6 tháng qua gồm Bangladesh, Ấn Độ, Indonesia, Malaysia, Mông Cổ, Nepal, Pakistan, Philippines và Thái Lan./Bộ trưởng Nội vụ Sar Kheng tuần này nhận định nhiều băng nhóm tội phạm quốc tế đang lợi dụng tình trạng hạn chế về nguồn lực của giới chức sở tại để tổ chức hoạt động lừa đảo. Tuy nhiên, ông khẳng định chính phủ Campuchia sẽ không để yên cho tình trạng này tiếp diễn và đang ra quân truy quét./Người phát ngôn Bộ Ngoại giao Lê Thị Thu Hằng trong cuộc họp báo hôm 25/8 cho biết các cơ quan chức năng đã cứu thoát, đưa về Việt Nam an toàn hơn 500 công dân và hỗ trợ thủ tục cho hàng nghìn người khác tại Campuchia. Trong 6 tháng đầu năm nay, Bộ Công an đã triệt phá nhiều ổ nhóm, bắt giữ nhiều đối tượng đưa người đi lao động trái phép ở Campuchia và phát cảnh báo công dân liên quan đến vấn đề này./Bộ Ngoại giao Việt Nam cũng đã đề nghị Campuchia tăng cường kiểm tra, rà soát các cơ sở lao động, đặc biệt là những cơ sở kinh doanh giải trí để kịp thời phát hiện, ngăn chặn, xử lý những trường sử dụng lao động bất hợp pháp, bảo vệ và giải cứu những trường hợp lao động nước ngoài, trong đó có công dân Việt Nam, bị chủ sở hữu bóc lột.",
    type: "Tin tạp chí",
    src: "camPuchia.jpg",
    hotNew: false,
    path: "hanh-trinh-cui-4-nguoi-o-campuchia",
    comment: 2,
  },
  {
    id: 2,
    title: "Hà Nội phát sinh nhiều điểm ùn tắc mới Hồ Tùng Mậu - Lê Đức Thọ...",
    content:
      "Số điểm ùn tắc từ 67 giảm còn 31 sau 10 năm, nhưng gần đây điểm phát sinh mới có xu hướng cao hơn số được xử lý, theo Sở Giao thông Vận tải TP Hà Nội./Báo cáo tổng kết 10 năm (2012-2022) thực hiện chủ trương tăng cường đảm bảo giao thông và khắc phục ùn tắc, Sở Giao thông Vận tải Hà Nội cho biết năm 2019 thành phố xử lý được 9 điểm ùn tắc nhưng phát sinh 10 điểm; năm 2020 xử lý 8, phát sinh 11; năm 2021 xử lý 10, phát sinh 8. Các điểm này không được nêu cụ thể/Tình trạng ùn tắc trên một số tuyến đường vào nội đô, cửa ngõ ra vào tiềm ẩn diễn biến phức tạp, đặc biệt ở khung giờ cao điểm, các dịp lễ, tết', Sở Giao thông Vận tải đánh giá, đồng thời chỉ ra một số tuyến đường chính, trục đường xuyên tâm hay ùn tắc như: Cầu Giấy - Xuân Thủy - Hồ Tùng Mậu, Trường Chinh - Đại La - Minh Khai, Kim Mã../Ghi nhận thực tế 10 năm qua dù có thêm nhiều cầu vượt, một số tuyến đường được mở rộng, tình trạng giao thông của Hà Nội ngày càng ùn tắc, đặc biệt hỗn loạn khi mưa lớn, xảy ra sự cố. Tốc độ lưu thông trên nhiều tuyến đường hướng vào trung tâm thủ đô, vành đai đều chậm hơn so với trước./Đặc biệt có đến 8 điểm ùn tắc là do công trường thi công. Trong số này, 2 điểm do thi công dự án đường sắt đô thị Nhổn - ga Hà Nội; 3 điểm do thi công đường Vành đai 2; 1 điểm phát sinh do thi công đường Vành đai 3 trên cao và 2 điểm phát sinh do thi công đường đua F1./Để xử lý các điểm ùn tắc, chiều 13 tháng 2, liên ngành GTVT và Công an thành phố Hà Nội đã họp thống nhất sẽ tổ chức khảo sát, lên phương án cho từng điểm. Đồng thời, làm việc với các chủ đầu tư đề nghi đẩy nhanh tiến độ, bố trí lại hàng rào hợp lý; cải tạo hạ tầng, điều chỉnh đèn tín hiệu giao thông; tăng cường, bố trí lực lượng chốt trực, hướng dẫn điều tiết, xử lý vi phạm thường xuyên trong giờ cao điểm.",
    type: "Tin tạp chí",
    hotNew: true,
    src: "haNoi.jpg",
    path: "hanoi-phat-sinh-nhieu-diem-un-tac-moi",
    comment: 4,
  },
  {
    id: 3,
    title: "Mùa đông lạnh giá thử thách quyết tâm của châu Âu với Ukraine",
    content:
      "Mùa đông khắc nghiệt và cuộc chiến kéo dài sẽ là những thách thức lớn đối với cam kết ủng hộ 'không giới hạn' của châu Âu dành cho Ukraine./Gần sáu tháng kể từ khi Nga mở chiến dịch quân sự ở Ukraine, sự ủng hộ của phương Tây dành cho Kiev vẫn mạnh mẽ và khá thống nhất, khiến nhiều người ngạc nhiên. Tuy nhiên, nhiều quan chức châu Âu lo ngại tinh thần đoàn kết đó có nguy cơ sụp đổ khi lục địa bước sang mùa đông, giữa lúc giá lương thực tăng, nguồn khí đốt để sưởi ấm hạn chế và nguy cơ suy thoái kinh tế ngày càng rõ ràng./Thách thức với Ukraine cũng giống như ngày đầu: giữ phương Tây đứng về phía họ khi các quốc gia này đối mặt cái giá đắt vì sự hỗ trợ dành cho Kiev, không chỉ là áp lực về khí đốt từ Nga, mà còn là chi phí khổng lồ hỗ trợ kinh tế, nhân đạo cho Ukraine, theo Keir Giles, thành viên tư vấn cấp cao tại tổ chức Chatham House./Tuy nhiên, thỏa thuận này khó đạt được mục tiêu mong muốn do chỉ dựa trên cơ sở tự nguyện. Các quan chức EU lo ngại rằng nếu bị thúc ép, một số nước thành viên sẽ không tham gia vào nỗ lực chung nhằm tiết kiệm khí đốt./Giới chức châu Âu cũng lo sợ rằng chiến lược trang bị vũ khí cho Ukraine hiện nay đang trở thành giải pháp trước mắt cho một vấn đề dài hạn: đó là cuộc xung đột không có hồi kết.Pháp, Đức và nhiều đồng minh châu Âu đã cung cấp cho Ukraine nhiều loại vũ khí hạng nặng, giúp Kiev chặn đà tiến của lực lượng Nga ở miền đông và mở ra cơ hội phản công tại miền nam. Tuy nhiên, điều đó cũng khiến cục diện chiến trường trở thành một cuộc chiến tiêu hao kéo dài, không bên nào giành được lợi thế rõ rệt./Hai lò phản ứng duy nhất đang được dùng để phát điện trong nhà máy bị mất điện, làm dấy lên lo ngại sự cố hạt nhân. Các tổ máy phát điện chạy bằng diesel và một số biện pháp an toàn được kích hoạt kịp thời, trước khi đường dây cấp điện cho nhà máy được khôi phục./Moskva và Kiev liên tục cáo buộc đối phương đứng sau các đợt pháo kích gần cơ sở hạt nhân lớn nhất châu Âu. Tuần qua, nhà máy bị ngắt kết nối với lưới điện quốc gia Ukraine lần đầu tiên trong bốn thập kỷ hoạt động vì một vụ cháy ở cánh rừng lân cận.",
    type: "Tin tạp chí",
    hotNew: true,
    src: "ukrina.jpg",
    path: "mua-dong-lanh-gia-thu-thach-quyet-tam-cua-chau-au-voi-ukraine",
    comment: 5,
  },
  {
    id: 4,
    title: "Cách đòi quyền lợi hợp lý khi là nhân viên mới",
    content:
      "Bốn chiến lược sau có thể giúp nhân viên mới giảm nỗi lo bị từ chối và nâng xác suất thành công khi đề nghị các quyền lợi cho mình./Đề nghị các quyền lợi khi là nhân viên mới có thể mạo hiểm, vì bạn không có nhiều năm kinh nghiệm, danh tiếng hay mối quan hệ tốt đẹp để làm lợi thế. Nhưng đề nghị những gì bản thân muốn và cần một cách hợp lý cũng là cách thông minh khi bắt đầu một công việc mới.Ngoài ra, nếu không bắt đầu bằng cách sớm đưa ra những đề nghị thẳng thắn, trung thực, bạn có thể gặp khó trong việc đưa ra đề nghị như vậy về sau. Trong bất kỳ trường hợp nào, sau đây là 4 chiến lược có thể tham khảo./Đòi hỏi là điều mà người nghe buộc phải đồng ý, trong khi đề nghị là điều mà họ có thể đồng ý hoặc không, hoặc đưa ra đề nghị ngược lại. Điều này tạo không gian cho sự thảo luận, linh hoạt và thỏa hiệp. Nó cũng thể hiện sự cân nhắc đối với nhu cầu, giá trị và sở thích của người khác./Ví dụ, bạn có thể nói: 'Tôi muốn xin phép nghỉ bốn ngày vào cuối tuần trong tháng tới. Tôi có kỳ nghỉ, nhưng tôi muốn đảm bảo thời gian đó phù hợp với lịch trình những đồng nghiệp còn lại trong đội ngũ. Sếp thấy thế nào?'/Hãy trực tiếp, sẵn sàng nêu đề nghị nhiều hơn một lần và có thể kiên trì nếu nhận được câu trả lời là không./Nếu là nhân viên mới, bạn có thể nhận được những câu trả lời 'không' như thế đối với những đề nghị cá nhân. Bạn có thể tưởng tượng rằng điều đó là do sếp hoặc đồng nghiệp nghĩ bạn không đủ khả năng. Nhưng thay vì tự suy diễn, hãy tìm hiểu rõ câu trả lời vì sao là 'không'. Biết được lý do sẽ giúp bạn đưa ra đề nghị tốt hơn vào lần sau./Thật khó để đưa ra các đề nghị khi mới bắt đầu nhận công việc mới hay trong một mối quan hệ mới. Nhưng bằng cách áp dụng khoa học về điều khiến mối quan hệ trở nên tốt đẹp và kết hợp nó với nghệ thuật kết nối, bạn vẫn có khả năng nhận được những gì mình kỳ vọng.",
    type: "Tin tập đoàn",
    hotNew: false,
    src: "nhanVien.jpg",
    path: "cach-doi-quyen-loi-khi-la-nhan-vien-moi",
    comment: 2,
  },
  {
    id: 5,
    title: "Người trẻ Viettel đóng góp 3.000 sáng kiến, làm lợi 400 tỷ",
    content:
      "HÀ NỘIChủ tịch Tào Đức Thắng cho biết Viettel có 20.000 thanh niên trong tổng số 50.000 nhân viên, đóng góp lớn cho sự phát triển tập đoàn./Trong đó có hơn 1.200 đoàn viên thanh niên được trao quyền lãnh đạo, quản lý các cấp, chiếm 11% cán bộ quản lý tập đoàn. Tuổi trẻ Viettel cũng được đánh giá dẫn đầu trong phong trào tuổi trẻ sáng tạo toàn quân và toàn quốc. Trong 5 năm qua, tuổi trẻ Viettel đã có 3.269 sáng kiến, ý tưởng đem lại giá trị làm lợi hơn 400 tỷ đồng./Viettel đào tạo nhân sự trẻ bằng cách đặt mục tiêu cao, giao việc khó, giải các bài toán của khách hàng, xã hội. Các hoạt động phong trào Đoàn và công tác thanh niên đã bám sát nhiệm vụ nghiên cứu, sản xuất kinh doanh tập đoàn. Từ đây thanh niên phát huy tốt tiềm năng, trở thành lực lượng nòng cốt trong các việc mới, việc khó, góp phần thực hiện mục tiêu, nhiệm vụ./Phát biểu tại Đại hội Đoàn thanh niên, Chủ tịch kiêm Tổng giám đốc Viettel Tào Đức Thắng cho biết con đường đi đến tương lai của Viettel không dành cho những ai nhút nhát, sợ hãi, thích an phận, muốn nhàn rỗi, ưa hưởng thụ, thậm chí là những người trung bình./Đại hội có chủ đề khát vọng, dấn thân, sáng tạo và có trách nhiệm với xã hội. Các đoàn viên – thanh niên tập trung thảo luận nhằm đóng góp thực hiện mục tiêu tiên phong, kiến tạo xã hội số và xây dựng tổ hợp công nghiệp quốc phòng công nghệ cao, hướng tới mục tiêu đưa Viettel trở thành Tập đoàn công nghiệp, công nghệ toàn cầu./Phát biểu tại Đại hội Đoàn thanh niên, Chủ tịch kiêm Tổng giám đốc Viettel Tào Đức Thắng cho biết con đường đi đến tương lai của Viettel không dành cho những ai nhút nhát, sợ hãi, thích an phận, muốn nhàn rỗi, ưa hưởng thụ, thậm chí là những người trung bình./Đại hội có chủ đề khát vọng, dấn thân, sáng tạo và có trách nhiệm với xã hội. Các đoàn viên – thanh niên tập trung thảo luận nhằm đóng góp thực hiện mục tiêu tiên phong, kiến tạo xã hội số và xây dựng tổ hợp công nghiệp quốc phòng công nghệ cao, hướng tới mục tiêu đưa Viettel trở thành Tập đoàn công nghiệp, công nghệ toàn cầu.",
    hotNew: false,
    type: "Tin tập đoàn",
    src: "viettel.jpg",
    path: "nguoi-tre-viettel-dong-gop-3000000-sang-kien-lam-loi400-ty",
    comment: 7,
  },
  {
    id: 6,
    title: "Nhân sự Samsung Engineering tham gia hội đồng quản trị DNP Water",
    content:
      "Đại diện của Samsung Engineering được bầu làm thành viên hội đồng quản trị DNP Water sau khi hoàn thiện các thủ tục đầu tư vào DNPW./Sau khi tăng vốn, DNP Water hiện là công ty có vốn điều lệ hơn 2.542 tỷ đồng và là một trong những doanh nghiệp có vốn điều lệ lớn nhất trong các công ty tư nhân cam kết đầu tư cho ngành nước. Trước đó, Samsung Engineering đầu tư 41 triệu USD (khoảng 960 tỷ đồng) để mua lại toàn bộ khoản vay chuyển đổi của IFC, qua đó sở hữu 24% cổ phần của DNP Water./Sau khi hoàn thành việc đầu tư 24% cổ phần của DNP Water, DNP và Samsung Engineering cũng tổ chức hội thảo khoa học về thoát nước và nước thải tại Việt Nam trong hai ngày 23-23/8. Hội thảo nhằm tìm các giải pháp cụ thể dựa trên đóng góp của các nhà khoa học, cơ quan lý và các doanh nghiệp trong ngành.Sự kiện này thể hiện cam kết của hai bên hướng tới những mục tiêu, đóng góp cụ thể, góp phần giải quyết hiện trạng nước thải tại Việt Nam, khi chỉ dưới 15% nước thải được xử lý và cơ bản chưa đạt chuẩn quốc tế./ DNP Water là công ty con của DNP Holding, hoạt động theo mô hình công ty đầu tư, đầu tư sở hữu và vận hành (trực tiếp hoặc gián tiếp) nhà máy nước tại nhiều địa phương ở Việt Nam./Trong khi đó, Samsung Engineering là một trong những công ty EPC & PM hàng đầu thế giới, phục vụ khách hàng trong nhiều ngành khác nhau như lọc dầu, chế biến khí, hóa dầu, cơ sở hạ tầng, lĩnh vực môi trường và công nghiệp sinh học. Doanh nghiệp này cung cấp các dịch vụ trong toàn bộ chu kỳ dự án, từ nghiên cứu khả thi chuyên nghiệp đến thiết kế, mua sắm, xây dựng, vận hành, bảo trì và vận hành. Samsung Engineering hiện hoàn thành hơn 1.000 dự án trên toàn thế giới./Dựa trên kinh nghiệm về triển khai các dự án nước thải tại Hàn Quốc, cũng như các nước khác mà Samsung Engineering đã triển khai, mối quan hệ hợp tác này được kỳ vọng sẽ góp phần thúc đẩy phát triển nhanh mảng xử lý nước thải của DNP Water, hướng tới giải quyết bài toán về nước thải tại các khu đô thị tại Việt Nam.",
    hotNew: true,
    type: "Tin tập đoàn",
    src: "samsung.jpg",
    path: "nhan-su-samsun-tham-gia-hoi-dong-quan-tri-dnp",
    comment: 33,
  },
  {
    id: 7,
    title: "Tổ hợp tiện ích xanh tại đại đô thị biển Vinhomes",
    content:
      "Vinhomes Ocean Park 2 – The Empire gây chú ý khi sở hữu “hệ sinh thái xanh” đẳng cấp phía Đông Hà Nội./Nhu cầu bất động sản xanh tại các thành phố lớn ở Mỹ, châu Âu và khu vực Châu Á - Thái Bình Dương đang tăng mạnh, theo Báo cáo Impacts của Savills vừa công bố. Xu hướng này ở Việt Nam cũng ngày càng rõ nét, khi các đại đô thị có ưu thế vượt trội về không gian xanh, môi trường sống liên tục lọt top các dự án dẫn đầu được săn tìm./Ở Hà Nội, các dự án của Vinhomes luôn nằm trong top đầu về diện tích cây xanh, mặt nước cùng mật độ xây dựng ở mức thấp nhất thị trường. Đây chính là 'chìa khóa' tạo nên thành công của hàng loạt đại đô thị mang thương hiệu này. Mới đây nhất, Vinhomes Ocean Park 2  The Empire cũng gây chú ý với nhiều tiện ích xanh lớn./Mảnh ghép nổi bật nhất của đại đô thị chính là Tổ hợp công viên Biển tạo sóng nhân tạo Royal Wave Park, quy mô lên tới 18 ha. Nơi đây được Vinhomes ví von như một ốc đảo nhiệt đới bao quanh là biển khơi, trung tâm là ngọn núi Hoàng Gia cao 30m. Quanh khu vực này là hồ nước mặn quy mô hàng đầu châu Á Laguna diện tích 9,3 ha, vừa tạo tầm nhìn  'triệu', vừa đóng vai trò như một chiếc 'máy điều hòa' cung cấp không khí mát lành, tinh khiết mỗi ngày./Royal Wave Park là một trong những hạng mục đầu tiên khai trương ngay từ khi đại đô thị biển ra mắt. Điều này cũng đồng nghĩa ngay khi gia nhập vào cộng đồng cư dân tại đại đô thị, mọi người đều được thừa hưởng ngay đặc quyền sống nghỉ dưỡng giữa resort biển phong cách 5 sao. Cùng với đó, những tiện ích khác cũng đang được đẩy nhanh tiến độ xây dựng như Công viên ven kênh Silk Park dài tới 2,6 km hay Công viên trung tâm Empire Park rộng tới 7,5 ha dự kiến hoàn thành vào tháng 12 năm nay./Vinhomes Ocean Park 2 – The Empire còn có cả hệ thống tiện ích giúp chăm sóc sức khỏe cho cư dân. Khi tích hợp với giai đoạn 1, siêu quần thể đô thị biển sở hữu tới hơn 1.000 tiện ích chung. Trong đó, mạng lưới các sân vận động được xây dựng dày đặc, với đầy đủ các bộ môn thể thao cho tới bể bơi, sân tập gym, yoga, tập thiền; đường chạy bộ... giúp cư dân có cơ hội vận động mọi lúc, mọi nơi. Trẻ em cũng được dành riêng sân chơi được thiết kế theo các chủ đề khác nhau, giúp khai mở trí tò mò, tinh thần khám phá.",
    hotNew: true,
    src: "vimhome.jpg",
    type: "Tin cổ đông",
    path: "to-hop-tien-ich-xanh-taij-do-thi-vimhom",
    comment: 7,
  },
  {
    id: 8,
    title: "Nhiều doanh nghiệp chọn Aqua City để mở rộng hoạt động kinh doanh",
    content:
      "Toạ lạc tại tâm điểm các tuyến giao thông, sở hữu cảnh quan sông nước cùng chuỗi tiện ích khép kín, Aqua City dần trở thành khu đô thị sầm uất bậc nhất khu vực./Trong cuộc tìm kiếm dự án tiềm năng để mở rộng hoạt động kinh doanh của công ty, chị Lê Thị Xuân - CEO Shynh Group quyết định sở hữu một shophouse thuộc khu đô thị sinh thái thông minh Aqua City. Chia sẻ lý do đầu tư, chị Xuân cho biết, các khu đô thị với kết nối giao thông thuận tiện, là nơi tập trung đông đảo cư dân, du khách đến vui chơi giải trí sẽ mang tới những cơ hội kinh doanh rộng mở./CEO 9x nhận định, khu đô thị Aqua City quy mô 1.000 ha sẽ có khoảng 60.000 cư dân, cộng với nguồn khách lớn từ Biên Hòa, TP Thủ Đức, TP HCM, lượng khách quốc tế đến sân bay Long Thành tương lai... Điều này sẽ mang tới tiềm năng tăng trưởng dài hạn cả về giá trị sản phẩm, lẫn cơ hội khai thác kinh doanh./Trong khi đó, ông Harry Morant - CEO của Buy2sell (sở hữu thương hiệu Vang Online - chuyên phân phối vang và đồ uống nhập khẩu) cho biết, Vang Online đã quyết định mở chi nhánh tại Aqua City sau khi cân nhắc lợi thế về vị trí, thuận tiện di chuyển đến các tỉnh thành và hạ tầng sớm đồng bộ./Aqua City do tập đoàn Novaland quy hoạch và phát triển theo mô hình đô thị sinh thái thông minh, hướng tới kiến tạo chuẩn sống mới. Trên quy mô 1.000 ha cùng lợi thế sông nước bao bọc, dự án dành 70% diện tích cho mảng xanh, hạ tầng giao thông và tiện ích nội khu hoàn chỉnh. Nơi đây được kỳ vọng không chỉ là nơi an cư mà còn là điểm đến vui chơi, giải trí hấp dẫn hàng đầu khu vực./Bám sát tốc độ hoàn thiện hạ tầng giao thông, tập đoàn Novaland cùng các thành viên của NovaGroup đẩy mạnh tiến độ của Aqua City để chào đón những cư dân đầu tiên vào cuối năm 2022./Hiện tại, ngoài các công trình nhà ở đang được bàn giao, Aqua City hoàn thành loạt công trình tiện ích đẳng cấp, sẵn sàng phục vụ nhu cầu an cư chất lượng của cư dân. Điểm nhấn có thể kể đến như tổ hợp quảng trường - bến du thuyền Aqua Marina; trung tâm thể thao đa năng trong nhà Aqua Sport Center quy mô 5 tầng với các bộ môn thể thao thời thượng; chuỗi clubhouse đẳng cấp; trung tâm an ninh hiện đại Aqua Security Center ứng dụng công nghệ AI...",
    hotNew: false,
    src: "AquaCity.jpg",
    type: "Tin cổ đông",
    path: "nhieu-doanh-nghiep-chon-aqua-city-de-mo-rong-hoat-dong-kinh-doanh",
    comment: 8,
  },
  {
    id: 9,
    title: "Mỹ chi 1,66 tỷ USD mua 1.800 xe buýt mới nhằm hạn chế khí thải",
    hotNew: true,
    src: "busMy.jpg",
    type: "Tin cổ đông",
    path: "my-chi-166-ti-usd-mua-1800-xe-bus-moi-nham-han-che-khi-thai",
    content:
      "(TN&MT) - Bộ Giao thông Vận tải Mỹ cho biết, Bộ này sẽ cấp 1,66 tỷ USD tài trợ cho các chính quyền thành phố và bang để mua 1.800 xe buýt nhằm chuyển sang phương tiện đi lại sạch hơn, ít phát thải hơn./Ngân sách dành cho 150 đội xe buýt sẽ được lấy từ khoản quỹ 1.000 tỷ USD theo luật về cơ sở hạ tầng năm 2021, giúp các thành phố và bang loại bỏ những chiếc xe buýt cũ gây ô nhiễm./Nhà Trắng cho biết, khoản tiền sẽ được chi để mua 1.100 xe buýt không phát thải khí carbon để bổ sung cho 1.300 xe buýt không phát thải hiện có, cùng với 700 xe buýt khác bao gồm các mẫu xe hybrid (lai điện và xăng), xe chạy bằng khí đốt tự nhiên và dầu diesel. Trao đổi với các phóng viên, ông Mitch Landrieu, điều phối viên cơ sở hạ tầng của Nhà Trắng cho biết: “Những khoản tài trợ này sẽ được sử dụng ở mọi nơi trên nước Mỹ”./Ngân sách dành cho 150 đội xe buýt sẽ được lấy từ khoản quỹ 1.000 tỷ USD theo luật về cơ sở hạ tầng năm 2021, giúp các thành phố và bang loại bỏ những chiếc xe buýt cũ gây ô nhiễm./Theo kế hoạch, trong 5 năm tới, Mỹ sẽ dành 5,5 tỷ USD hỗ trợ dịch vụ xe buýt theo hướng thân thiện với môi trường, tăng gấp 6 lần mức tài trợ trước đó, và 2 tỷ USD để mua và cải tạo xe buýt và xây dựng các cơ sở bảo dưỡng xe buýt./Memphis sẽ nhận được 54 triệu USD để xây dựng một cơ sở vận hành/bảo trì, trong khi New Jersey Transit sẽ nhận được 44,6 triệu USD để cải tạo nhà để xe Union City gần New York và tạo ra một bến xe buýt công cộng.",
    comment: 5,
  },
];
