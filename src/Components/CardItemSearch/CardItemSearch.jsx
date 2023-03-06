import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import {formatCurrency} from '../../CustomFunc/CustomFunc'

import "./cardItem.scss";

export default function CardItemSearch() {

  const onClickInfoDetail = () => {
    alert('abc')
  }
  const onClickBuyTicket = () => {
    alert('abc')
  }

  return (
    <div className="search_content_list">
      <Card className="card_item" sx={{ minWidth: 729 }} variant="outlined">
        <CardActionArea>
          <CardContent className="card_content">
            <div className="card_content_image">
              <img
                src="https://static.vexere.com/production/images/1673580911840.jpeg?w=250&h=250"
                alt=""
              />
            </div>
            <div className="card_content_info">
              <div className="card_content_info_header">
                <div className="card_content_info_header_name">
                  <Typography className="card_content_info_header_name_title" gutterBottom variant="h5" component="div">
                    Mạnh Quân
                  </Typography>
                  <Typography className="card_content_info_header_name_desc" variant="body2" color="text.secondary">
                    Limousine giường phòng 24 chỗ (VIP)
                  </Typography>
                </div>
                <div className="card_content_info_header_money">
                  <Typography className="card_content_info_header_money_sell" gutterBottom variant="h5" component="div">
                    {formatCurrency(200000)}
                  </Typography>
                  <Typography className="card_content_info_header_money_listed" variant="body2" color="text.secondary">
                  {formatCurrency(150000)}
                  </Typography>
                </div>
              </div>
              <div className="card_content_info_detail">
                <div className="card_content_info_detail_time">
                  <span className="card_content_info_detail_time_start">XP: <span className="date">22:00</span> • <span className="title" title="Văn phòng Mỹ Đình" >Văn phòng Mỹ Đình</span></span>
                  <span className="card_content_info_detail_time_end">ĐĐ: <span className="date">05:00 </span> • <span className="title" title="Bến xe Hà Giang">Bến xe Hà Giang</span></span>
                </div>
                <div className="card_content_info_detail_button">
                  <span className="card_content_info_detail_button_infoDetail" onClick={() => onClickInfoDetail()}>Thông tin chi tiết</span>
                  <Button variant="outlined" color="success" onClick={() => onClickBuyTicket()}>
                    Mua vé xe
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent className="card_text_footer">
            <div>
              <span className="card_text_footer_icon">*</span> 
              Vé chặng thuộc
              chuyến 16:30 22-02-2023 Nam Định - Hà Giang
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
