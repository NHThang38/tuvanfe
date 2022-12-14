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
                <h2 className="">Gi???i thi???u</h2>
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
                            B???NH VI???N QU??N Y 175 B???nh vi???n Qu??n Y 175 tr???c thu???c
                            B??? Qu???c ph??ng Vi???t Nam l?? b???nh vi???n tuy???n cu???i c???a
                            qu??n ?????i ??? khu v???c ph??a nam, c?? nhi???m v??? kh??m ch???a
                            b???nh cho c??n b??? c???p cao trong qu??n ?????i, c??n b??? c???p
                            cao ?????ng - Nh?? n?????c, v?? c??c ?????i t?????ng kh??c. L??m tr??n
                            nhi???m v??? c???a b??? qu???c ph??ng v?? nh??n d??n Vi???t Nam giao
                            ph??, B???nh vi???n Qu??n y 175 kh??ng ch??? l?? ????n v??? y t???
                            chuy??n s??u gi??? g??n s???c kho??? cho c??c chi???n s?? b???o v???
                            bi???n ?????o T??? Qu???c m?? c??n l?? b???nh vi???n ??a khoa h??ng
                            ?????u d??nh cho nh??n d??n Mi???n Nam Vi???t Nam.
                        </p>
                    </div>
                </div>
            </section>
            {/* card list */}
            <div className=" container card_listBS my-5">
                <h2>B??c s?? n???i b???t</h2>
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
                                    B??c s?? ????? Th??? C??c
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
                                    B??c s?? Nguy???n B?? M??? Nhi
                                </h5>
                                <p className="card-text">
                                    B??c s?? Nguy???n B?? M??? Nhi - nguy??n Ph?? Gi??m
                                    ?????c ph??? tr??ch chuy??n m??n B???nh vi???n Ph??? s???n
                                    T??? D??, Gi??m ?????c chuy??n m??n Trung t??m S???n Ph???
                                    khoa - B???nh vi???n ??a khoa T??m Anh TP.H??? Ch??
                                    Minh l?? m???t trong nh???ng chuy??n gia h??ng ?????u
                                    trong l??nh v???c S???n ph??? khoa v???i...
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
                                    B??c s?? Nguy???n B?? M??? Nhi
                                </h5>
                                <p className="card-text">
                                    B??c s?? Nguy???n B?? M??? Nhi - nguy??n Ph?? Gi??m
                                    ?????c ph??? tr??ch chuy??n m??n B???nh vi???n Ph??? s???n
                                    T??? D??, Gi??m ?????c chuy??n m??n Trung t??m S???n Ph???
                                    khoa - B???nh vi???n ??a khoa T??m Anh TP.H??? Ch??
                                    Minh l?? m???t trong nh???ng chuy??n gia h??ng ?????u
                                    trong l??nh v???c S???n ph??? khoa v???i...
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
