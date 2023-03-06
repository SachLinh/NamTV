/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { hideDialogLogin, changeActionType } from "../../Features/Login";

import { useForm } from "react-hook-form";

import "./login.scss";
import { useEffect } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dataLogin = useSelector((state) => state.Login);
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = (data) => {
    console.log("====================================");
    console.log("error", errors);
    console.log("data", data);
    console.log("====================================");
  };

  const handleClose = () => {
    dispatch(hideDialogLogin());
  };

  const onClickRegister = () => {
    dispatch(changeActionType('REGISTER'))
  }
  const onClickLogin = () => {
    dispatch(changeActionType('LOGIN'))
  }

  useEffect(() => {
    reset({
        data: 'test'
      })
  }, [dataLogin?.dialogLogin])
  

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={dataLogin.dialogLogin}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="text-center text-header-dialog">
          {dataLogin?.actionType === 'LOGIN' ? "Đăng nhập" : 'Đăng ký'}
        </DialogTitle>
        <DialogContent className="dialog-login-content">
          <DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="text-md mb-2 text-title">Số điện thoại</h4>
              <DialogContentText className="flex flex-col items-start">
                <input
                  className="text-field"
                  {...register("PhoneNumber", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value:
                        /((09|03|02|07|08|\+849|\+843|\+847|\+848|\+845)+([0-9]{8})\b)/i,
                      message: "Vui lòng nhập số điện thoại đúng định dạng",
                    },
                  })}
                />
                <span className="my-1">
                  {errors?.PhoneNumber && (
                    <span className="text-red-600 text-xs">
                      {errors?.PhoneNumber?.message}
                    </span>
                  )}
                </span>
              </DialogContentText>
              {errors.PhoneNumber ? (
                <button
                  disabled
                  className="text-center bg-slate-400 text-white font-bold py-2 md:py-4 rounded-md my-4 cursor-pointer w-full"
                >
                  <span>Tiếp tục</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-center bg-sky-400 text-white font-bold py-2 md:py-4 rounded-md my-4 cursor-pointer w-full"
                >
                  <span>Tiếp tục</span>
                </button>
              )}
            </form>
          </DialogContentText>
          <DialogContentText className="text-footer-dialog">
            {
                dataLogin?.actionType === 'LOGIN' ? 
                (<span>Bạn chưa có tài khoản? <span className="register" onClick={() => onClickRegister()}>Đăng ký</span></span> )
                : 
                (<span>Bạn đã có tài khoản? <span className="register" onClick={() => onClickLogin()}>Đăng nhập</span></span>)
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
