import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import imgcarosel1 from "../assets/img/bacsituvan.png";
import imgcarosel2 from "../assets/img/bacsituvan2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/Home.css";
const Home = () => {
    const [users, setUser] = useState([]);

    //  useEffect( async ()  =>  {
    //    await axios.get('https://reqres.in/api/users?page=1')
    //     .then(res => {
    //         console.log('check res:', res);
    //     })

    //  }
    // )
    // const getUser = async () => {
    // let res = await  axios.get('https://reqres.in/api/users?page=1');
    // console.log(res);
    // }

    // const handleTest = () => {
    //     axios
    //         .post(`https://reqres.in/api/users`, 
    //             {
    //                 "name": "morpheus",
    //                 "job": "leader"
    //             }
    //         )

    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };
    // }, []);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="wrapper_home">
           
            <div
                className="carousel"
                style={{
                    width: "100%",
                    height: "400px",
                    margin: "0px",
                    padding: "0px",
                }}
            >
                <Slider {...settings}>
                    <div className="img-customie">
                        <img
                            src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                            style={{ width: "100%", height: "400px" }}
                        />
                    </div>
                    <div className="img-customie">
                        <img
                            src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                            style={{ width: "100%", height: "400px" }}
                        />
                    </div>
                    <div className="img-customie">
                        <img
                            src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                            style={{ width: "100%", height: "400px" }}
                        />
                    </div>
                </Slider>
            </div>
            {/* intro */}
            <section className="pt-5  container">
                <h2 className="">Giới thiệu</h2>
                <div className=" d-flex">
                    <div style={{ width: "50%" }}>
                        <img
                            src="https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/illlustration.png"
                            alt=""
                            style={{ width: "100%", height: "280px" }}
                        />
                    </div>

                    <div style={{ width: "50%" }}>
                        <p className="lead text">
                            BỆNH VIỆN QUÂN Y 175 Bệnh viện Quân Y 175 trực thuộc
                            Bộ Quốc phòng Việt Nam là bệnh viện tuyến cuối của
                            quân đội ở khu vực phía nam, có nhiệm vụ khám chữa
                            bệnh cho cán bộ cấp cao trong quân đội, cán bộ cấp
                            cao Đảng - Nhà nước, và các đối tượng khác. Làm tròn
                            nhiệm vụ của bộ quốc phòng và nhân dân Việt Nam giao
                            phó, Bệnh viện Quân y 175 không chỉ là đơn vị y tế
                            chuyên sâu giữ gìn sức khoẻ cho các chiến sĩ bảo vệ
                            biển đảo Tổ Quốc mà còn là bệnh viện đa khoa hàng
                            đầu dành cho nhân dân Miền Nam Việt Nam.
                        </p>
                    </div>
                </div>
            </section>
            {/* card list */}
            <div className=" container card_listBS my-5">
                <h2>Bác sĩ nổi bật</h2>
                <div
                    className="row row-cols-1 row-cols-md-3 g-4 "
                    style={{ margin: 0 }}
                >
                    <div className="col">
                        <div className="card h-100">
                            <img
                                src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-400x400.jpg"
                                width="300px"
                                height="300px"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Bác sĩ Đỗ Thị Cúc
                                </h5>
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img
                                src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-400x400.jpg"
                                width="300px"
                                height="300px"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Bác sĩ Nguyễn Bá Mỹ Nhi
                                </h5>
                                <p className="card-text">
                                    Bác sĩ Nguyễn Bá Mỹ Nhi - nguyên Phó Giám
                                    đốc phụ trách chuyên môn Bệnh viện Phụ sản
                                    Từ Dũ, Giám đốc chuyên môn Trung tâm Sản Phụ
                                    khoa - Bệnh viện Đa khoa Tâm Anh TP.Hồ Chí
                                    Minh là một trong những chuyên gia hàng đầu
                                    trong lĩnh vực Sản phụ khoa với...
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img
                                src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-400x400.jpg"
                                width="300px"
                                height="300px"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Bác sĩ Nguyễn Bá Mỹ Nhi
                                </h5>
                                <p className="card-text">
                                    Bác sĩ Nguyễn Bá Mỹ Nhi - nguyên Phó Giám
                                    đốc phụ trách chuyên môn Bệnh viện Phụ sản
                                    Từ Dũ, Giám đốc chuyên môn Trung tâm Sản Phụ
                                    khoa - Bệnh viện Đa khoa Tâm Anh TP.Hồ Chí
                                    Minh là một trong những chuyên gia hàng đầu
                                    trong lĩnh vực Sản phụ khoa với...
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
