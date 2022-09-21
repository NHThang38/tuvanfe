import { React, useEffect, useState } from "react";

import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import Logo from "../assets/img/logo.jpg";
import useAuth from "../hooks/useAuth";
import avatar from "../assets/img/avatar.png";
import swal from "sweetalert";
const Navbar = () => {
    const [user, setUsers] = useState();
    const { loading, setLoading } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("user"));
        if (users) {
            setUsers(users);
            setLoading(false);
        }
    }, [loading]);
    const handleLogout = () => {
        setUsers();
        localStorage.clear();
        navigate("/")
        swal({
            title: "Đăng xuất thành công!",
            icon: "success",
        });
    };
    return (
        <div className="fixed-top wrapper_navbarr ">
            <div
                className="wrapper_navbar_top  py-2"
                style={{ background: "#3498db", color: "whitesmoke" }}
            >
                <div className="container navbarr_top d-flex justify-content-cennter">
                    <div
                        className=" navbar_top_left  d-flex  align-items-center"
                        style={{ marginRight: "610px" }}
                    >
                        <div className="item_nav_top me-4">
                            <i
                                className="fa fa-map-marked icons_nt"
                                style={{
                                    fontSize: "20px",
                                    marginRight: "10px",
                                }}
                            ></i>
                            <span>
                                27A Hoàng Việt, P.4, Q.Tân Bình, TP. Hồ Chí Minh
                            </span>
                        </div>
                        <div className="item_nav_top">
                            <i
                                className="fa fa-phone-square  icons_nt"
                                style={{
                                    fontSize: "20px",
                                    marginRight: "10px",
                                }}
                            ></i>
                            <span>SDT: 19001131</span>
                        </div>
                    </div>
                    <div className=" navbar_top_right d-flex  align-items-center ">
                        <div className="item_nav_top item_icon">
                            <i
                                className="fa fa-envelope icons_nt"
                                style={{
                                    fontSize: "20px",
                                    color: "whitesmoke",
                                    marginRight: "10px",
                                }}
                            ></i>
                        </div>
                        <div className="item_nav_top item_icon">
                            <i
                                className="fab fa-facebook"
                                style={{
                                    fontSize: "20px",
                                    color: "whitesmoke",
                                    marginRight: "10px",
                                }}
                            ></i>
                        </div>
                        <div className="item_nav_top item_icon">
                            <i
                                className="fab fa-youtube"
                                style={{
                                    fontSize: "20px",
                                    color: "whitesmoke",
                                    marginRight: "10px",
                                }}
                            ></i>
                        </div>
                        <div
                            className="item_nav_top item_icon"
                            style={{
                                fontSize: "20px",
                                color: "whitesmoke",
                                marginRight: "10px",
                            }}
                        >
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                className=" navbar navbar-expand-lg bg-light "
                style={{ border: " 1px solid #4bbcd7" }}
            >
                <div className="container">
                    <div className="d-flex">
                        <img
                            className="logo_nav"
                            src={Logo}
                            width={"50px"}
                            height={"50px"}
                            style={{ borderRadius: "5%" }}
                        />
                        <NavLink
                            to="/"
                            className="navbar-brand text-danger ms-2 heading1 mt-1"
                        >
                            Tư vấn khám bệnh
                        </NavLink>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link "
                                    aria-current="page"
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/intro" className="nav-link">
                                    Giới thiệu{" "}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/speci" className="nav-link">
                                    Chuyên khoa{" "}
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                {user ? (
                                    <>
                                        {user &&
                                            (!user.Role ? (
                                                <span></span>
                                            ) : (
                                                <NavLink
                                                    to="/request"
                                                    className="nav-link "
                                                >
                                                    Yêu cầu khám bệnh
                                                </NavLink>
                                            ))}
                                    </>
                                ) : (
                                    <NavLink
                                        to="/request"
                                        className="nav-link "
                                    >
                                        Yêu cầu khám bệnh
                                    </NavLink>
                                )}
                            </li>
                            <li className="nav-item">
                                
                            {user ? (
                                    <>
                                        {user &&
                                            (!user.Role ? (
                                                <NavLink to="/requestchat" className="nav-link ">
                                               Yêu cầu và tin nhắn
                                            </NavLink>
                                            ) : (
                                                <NavLink to="/chats" className="nav-link ">
                                                Nhắn tin
                                            </NavLink>
                                            ))}
                                    </>
                                ) : (
                                    <NavLink to="/chats" className="nav-link ">
                                    Nhắn tin
                                </NavLink>
                                )}
                                
                       
                            </li>
                        </ul>
                        <form className="d-flex  ">
                            <div className="info ms-4">
                                <a href="#">
                                    <div className="d-flex ">
                                        <div className="name mt-2">
                                            {user &&
                                                (!user.Role ? (
                                                    <span className="me-2">
                                                        {user.DoctorName}
                                                    </span>
                                                ) : (
                                                    <span className="me-2">
                                                        {user.NamePatient}
                                                    </span>
                                                ))}
                                            {/* { user && (
                                            <span className="me-2">{user.DoctorName}</span>
                                            )
                                            } */}
                                        </div>
                                        <img
                                            src={avatar}
                                            width="40px"
                                            height="40px"
                                            style={{ borderRadius: "50%" }}
                                        />
                                    </div>
                                </a>
                            </div>

                            <div className="mt-2 login_link">
                                {user ? (
                                    <a
                                        onClick={handleLogout}
                                        className="logout ps-2"
                                    >
                                        <i className="fa fa-sign-in-alt mx-2 " />
                                        Đăng xuất
                                    </a>
                                ) : (
                                    <NavLink to="/login">
                                        <i className="fa fa-sign-in-alt mx-2" />
                                        Đăng nhập
                                    </NavLink>
                                )}
                                {/* <NavLink to="/login">
                                    <i className="fa fa-sign-in-alt mx-2" />
                                    Đăng nhập
                                </NavLink> */}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
