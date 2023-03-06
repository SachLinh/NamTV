import React from "react";

import './footer.scss'

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-start items-center">
      <div className="footer_name-company">Công ty TNHH Thương Mại Dịch Vụ VeXeRe</div>
      <div>
        Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình,
        Thành Phố Hồ Chí Minh, Việt Nam
      </div>
      <div>
        Địa chỉ: Lầu 8 Tòa nhà CirCO, 222 Điện Biên Phủ, Quận 3, TP. Hồ Chí
        Minh, Việt Nam
      </div>
      <div>
        chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu
        ngày 27/6/2018
      </div>
      <div>Bản quyền © 2020 thuộc về VeXeRe.Com</div>
    </div>
  );
}
