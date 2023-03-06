/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import SelectAddress from '../../../Components/SelectAddress/SelectAddress'

import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <img
        className="banner_image"
        src={require(`../../../Assets/Images/background_body_image.png`)}
        alt="No image"
      />
      <div className="banner_content">
        <span className="banner_content_title">
          VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé
        </span>
        <SelectAddress />
      </div>
    </div>
  );
}
