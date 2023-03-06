import React from "react";

import SelectAddress from "../../Components/SelectAddress/SelectAddress";
import Breadcums from "../../Components/Breadcumbs/Breadcums";
import CardItemSearch from "../../Components/CardItemSearch/CardItemSearch";
import SidebarFilter from "./SideBarFilter/SidebarFilter";

import "./search.scss";

export default function Search() {
  return (
    <div className="search">
      <div className="search_container">
        <div className="search_breadcumbs mb-4">
          <Breadcums nameSearch="Vé xe đi Nghệ An từ Hà Nội" />
        </div>
        <SelectAddress />
        <div className="search_body">
          <span>VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</span>
          <div className="search_content">
            <SidebarFilter></SidebarFilter>
            <div className="flex flex-col justify-start items-start px-4">
              <span className="search_content_title">
                Đặt mua vé xe đi Nghệ An từ Hà Nội chất lượng cao và giá vé ưu
                đãi nhất: 115 chuyến
              </span>
              <CardItemSearch></CardItemSearch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
