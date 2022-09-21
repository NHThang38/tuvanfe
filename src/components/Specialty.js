import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Specialty = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="py-5 container">
            <h2>Chuyên khoa</h2>
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
                    <div className="img-customie me-2">
                      <div className="" style={{margin:"20px"}}>
                      <h3>Xương khớp</h3>
                            <img
                                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                                style={{ width: "100%", height: "300px" }}
                            />
                        </div>    
                  
             
                    </div>
                    <div className="img-customie me-2">
                      <div className="" style={{margin:"20px"}}>
                      <h3>Thần kinh</h3>
                            <img
                                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                                style={{ width: "100%", height: "300px" }}
                            />
                        </div>    
                  
             
                    </div>
                    <div className="img-customie me-2">
                      <div className="" style={{margin:"20px"}}>
                      <h3>Nội khoa</h3>
                            <img
                                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                                style={{ width: "100%", height: "300px" }}
                            />
                        </div>    
                  
             
                    </div>
                    <div className="img-customie me-2">
                      <div className="" style={{margin:"20px"}}>
                      <h3>Ngoại khoa</h3>
                            <img
                                src="https://tamanhhospital.vn/wp-content/uploads/2020/12/banner-chuyen-gia-bac-si-desk.jpg"
                                style={{ width: "100%", height: "300px" }}
                            />
                        </div>    
                  
             
                    </div>
          
                </Slider>
            </div>
        </div>
    );
};

export default Specialty;
