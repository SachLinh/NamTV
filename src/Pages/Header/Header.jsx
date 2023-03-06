import React from "react";

import {showDialogLogin} from '../../Features/Login'
import { useDispatch } from 'react-redux';

import LogoWeb from "./logoWeb";
import "./Header.scss";

import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();

  const onClickShowDialogLogin = () => {
    dispatch(showDialogLogin())
  }

  return (
    <div className="app-Header">
      <div className="app-Header_child flex flex-row items-center justify-between">
        <div className="app-Header_logo">
          <Link to="">
            <LogoWeb></LogoWeb>
          </Link>
        </div>
        <div className="app-Header_menu flex flex-row items-center justify-end">
          <span className="app-Header_menu_item">Thuê xe</span>
          <span className="app-Header_menu_item">Quản lý đơn hàng</span>
          <span className="app-Header_menu_item">Trở thành đối tác</span>
          <span className="app-Header_menu_item app-Header_menu_hotline">
            <i className="fas fa-phone-alt"></i>
            Hotline
          </span>
          <span className="app-Header_menu_item app-Header_menu_phone" onClick={onClickShowDialogLogin}>
            <i className="far fa-user-circle"></i>
            Đăng nhập
          </span>
        </div>
      </div>
    </div>
  );
}
