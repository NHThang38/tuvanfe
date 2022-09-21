import React, { useState, useRef, useEffect } from "react";
import "../style/Register.css";
import Logo from "../assets/img/logo.jpg";

import axios from "axios";
import swal from 'sweetalert';
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("nam");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const onChangeUserName = (e) => {
        setUsername(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeAge = (e) => {
        setAge(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeSex = (e) => {
        setSex(e.target.value);
    };

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onChangeConfPassword = (e) => {
        setConfPassword(e.target.value);
    };

    const showPassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleRegister = () => {
        console.log(username, name, password, age, email, sex, address, phone);
      
         //(`http://localhost:5000/doctor/getDocters`)
         axios.post(`http://localhost:5000/signup`, { 
            username: username,
            password: name,
            name: password,
            age: age,
            email: age,
            sex: sex,
            address: address,
            phone: phone,
        }).then((res) => {
            console.log(res)
            if(res.data.code == 200) {
                          swal({
                title: "Đăng ký thành công!",
                icon: "success",
              });
            } else if(res.data.code == 202){
                swal({
                    title: "Tài khoản này đã tồn tại!",
                    icon: "warning",
                  });
            }
  
        })
        .catch((res) => {
            console.log(res);
            swal({
                title: "Đăng ký thất bại!",
                icon: "warning",
              });
        })




    };
    return (
        <div className="warp_register mt-5">
            <div className="register mt-4 ">
                <h2 className="text-center text-danger">Đăng ký</h2>
                <img
                    src={Logo}
                    width="80px"
                    height="80px"
                    style={{ marginLeft: 400 }}
                />
                <form className="needs-validation row">
                    <div className="col-6">
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="username">
                                Tài khoản
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                value={username}
                                onChange={onChangeUserName}
                                required
                            />
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="name">
                                Họ tên
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                value={name}
                                onChange={onChangeName}
                                required
                            />
                            {/* <div className="invalid-feedback">
            Vui lòng nhập họ tên.
          </div> */}
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="sdt">
                                Số điện thoại
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="sdt"
                                value={phone}
                                onChange={onChangePhone}
                                required
                            />
                        </div>
                        <div className="wrapper_sex mt-3">
                            <label className="form-label" htmlFor="email">
                                Giới tính{" "}
                            </label>
                            <div className="form-check ">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gioitinh"
                                    id="flexRadioDefault1"
                                    value="nam"
                                    defaultChecked={sex === "nam"}
                                    onChange={onChangeSex}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                >
                                    Nam
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gioitinh"
                                    id="flexRadioDefault2"
                                    value="nữ"
                                    defaultChecked={sex === "nữ"}
                                    onChange={onChangeSex}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="email">
                                Email{" "}
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                value={email}
                                onChange={onChangeEmail}
                                required
                            />
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="age">
                                Tuổi{" "}
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="age"
                                value={age}
                                onChange={onChangeAge}
                                required
                            />
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="address">
                                Địa chỉ{" "}
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="address"
                                value={address}
                                onChange={onChangeAddress}
                                required
                            />
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="password">
                                Mật khẩu
                            </label>
                            <small
                                className="ms-3"
                                style={{ fontSize: "13px" }}
                                onClick={showPassword}
                            >
                                {passwordShown ? (
                                    <i className="fa fa-eye-slash"></i>
                                ) : (
                                    <i className="fa fa-eye"></i>
                                )}
                            </small>
                            <input
                                className="form-control"
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChangePassword}
                                required
                            />
                        </div>
                        <div className="form-group was-validated mt-3">
                            <label className="form-label" htmlFor="repassword">
                                {" "}
                                Nhập lại mật khẩu
                            </label>

                            <input
                                className="form-control"
                                type={passwordShown ? "text" : "password"}
                                id="repassword"
                                value={confPassword}
                                onChange={onChangeConfPassword}
                                required
                            />
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
     
                </div>
                </form>
                <div className="text-center">
                <button
                        className="btn btn-success w-25 "
                        onClick={handleRegister}
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
