import "../style/RequestAndChat.css";
import React, { useState, useRef, useEffect } from "react";
import swal from "sweetalert";
import request from "../api/request";
import avatar from "../assets/img/avatar.png";
import useAuth from "../hooks/useAuth";
import axios from "axios";
export const RequestAndChat = () => {
    const [listRq, setListRq] = useState([]);
    const [idDoctor, setIdDoctor] = useState("");
    const [department, setDepartment] = useState("");
    const { loading, setLoading } = useAuth();
    useEffect(() => {
        const doctor = JSON.parse(localStorage.getItem("user"));
        if (doctor) {
            setIdDoctor(doctor.IDDoctor);
            setDepartment(doctor.Department);
            setLoading(false);
            request.get(`doctor/getRequest?idDoc=`+doctor.IDDoctor )
   
            .then((res) => {
                console.log(res.data)
                setListRq(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [loading]);


    
    
    // useEffect(() => {
    //     request.get(`doctor/getRequest?idDoc=`+idDoctor )
    //     // http://localhost:5000/doctor/getRequest?idDoc=1
    //     .then((res) => {
    //         console.log(res.data)
    //         // setListRq(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }, []);



    // useEffect(() => {
    //     request
    //         .get(`https://reqres.in/api/users?page=1`)
    //         .then((res) => {
    //             // console.log(res.data.data);
    //             setListRq(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
// console.log(listRq);
    return (
        <div className="wrapper_request_and_chat">
            <h2 className="text-center my-2 mb-4">Yêu cầu và tin nhắn</h2>
            <div
                className="wrap_rq_a_chat container  "
            >
                <div className="row">
                    <div
                        className="col-md-4 left_rq_a_chat"
                        
                    >
                        {/* Name web */}
                        <div className="title_ye_tn">
                            <p
                                className="pt-3 title_ycs"
                          
                            >
                                Những yêu cầu khám bệnh
                            </p >
                            <p className="title_department" style={{
                                    color: "rgb(20, 16, 16)",
                                    marginLeft: 32,
                                    fontSize: 16,
                                    fontWeight: 500,
                                }}>Khoa: {department}</p>
                        </div>
                        <div className="content_center">
                            {/*search  */}
                            <div className="search ms-3">
                                <div
                                    className="input-group input-group-sm"
                                    style={{ width: "82%", margin: "13px 0" }}
                                >
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="inputGroup-sizing-sm"
                                        >
                                            <i
                                                style={{ fontSize: 20 }}
                                                className="fa fa-search"
                                            />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </div>
                            </div>
                            <div className="friend_messages">
                                <ul
                                    className="ul_friend_messages"
                                    style={{ padding: 0 }}
                                >
                                  {listRq.map((request, index) =>(
                                                      <li className="li_friend_messages " key={index}>
                                                      <a className="link_friend_messages  friend_messages  d-flex ">
                                                          <img
                                                              className="img_friend_messages"
                                                              src={avatar}
                                                          />
                                                          <div className="content_friend_messages">
                                                              <p
                                                                  className="name_friend_messages"
                                                                  style={{
                                                                      margin: 0,
                                                                      fontSize: 18,
                                                                  }}
                                                              >
                                                                 Tên bệnh nhân: {request.NamePatient}
                                                              </p>
                                                              <p>Thời gian: {request.Time}</p>
                                                          
                                                              <p>Chịu chứng: {request.Symptom}</p>
                                                              <span>Tiền sử bệnh: {request.MedicalHistory.slice(0,50)}</span>
                                                            <div>
                                                            {/* <span style={{backgroundColor:"red", width:"30px", height:"30px", borderRadius:"50%"}}>
                                                                <i class="fa fa-check" style={{fontSize:"20px", color:"green"}}></i>
                                                            </span> */}
                                                            </div>
                                                              {/* <i
                                                                  className="fa fa-circle online"
                                                                  style={{
                                                                      color: "#86c541",
                                                                      fontSize: 10,
                                                                  }}
                                                              /> */}
                                                              {/* <span>Online</span> */}
                                                          </div>
                                                      </a>
                                                  </li>
                                  ))}
                  
   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-8 content_chat"
                        style={{
                            border: "1px solid rgb(72, 141, 168)",
                            padding: "0 !important",
                            margin: "0 !important",
                            background: "rgba(220, 239, 245, 0.712)",
                        }}
                    >
                        <div
                            className="content_chat_top d-flex justify-content-between align-items-center  py-3"
                            style={{
                                background: "rgba(220, 239, 245, 0.712)",
                                borderBottom: "4px solid rgb(224, 234, 235)",
                            }}
                        >
                            <div className="info_fr">
                                <a className=" d-flex ">
                                    <img
                                        className="img_friend_content_chat"
                                        src={avatar}
                                        width="60px"
                                        height="60px"
                                        style={{
                                            borderRadius: "50%",
                                            margin: "0 13px",
                                        }}
                                    />
                                    <div
                                        className="content_friend_messages"
                                        style={{ marginTop: 14 }}
                                    >
                                        <p
                                            className="name_friend_messages"
                                            style={{
                                                margin: 0,
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: "rgb(29, 46, 88)",
                                            }}
                                        >
                                            Huy Nguyen
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="icons_content_chat_top"
                                style={{ marginLeft: 400 }}
                            >
                                <i
                                    className="fa fa-users icons_chat_top"
                                    style={{
                                        fontSize: 25,
                                        color: "rgba(15, 15, 15, 0.795)",
                                        marginRight: 10,
                                    }}
                                />
                                <i
                                    className="fa fa-cog icons_chat_top"
                                    style={{
                                        fontSize: 25,
                                        color: "rgba(15, 15, 15, 0.795 )",
                                        marginRight: 10,
                                    }}
                                />
                                <i
                                    className="fa fa-bars"
                                    style={{
                                        fontSize: 25,
                                        color: "rgba(15, 15, 15, 0.795 )",
                                        marginRight: 10,
                                    }}
                                />
                            </div>
                            <br />
                        </div>
                        {/*Khung chat  */}
                        <div className="content_chat_center_yc">
                            <div className="received_chats ">
                                <div className="received_chats_img">
                                    <img src={avatar} />
                                </div>
                                <div className="received_msg">
                                    <div className="received_msg_inbox">
                                        {/* chat */}
                                        <p>
                                            Hello !! Tôi tên là John Cena, tôi
                                            đến từ USA
                                        </p>
                                        {/* time */}
                                        <span className="time">
                                            11:02, Thứ 6 ngày 20
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="outgoing_chats">
                                <div className="outgoing_chat_msg">
                                    {/* chat */}
                                    <p>Hello !! Rất vui được gặp bạn</p>
                                    {/* time */}
                                    <span className="time">
                                        12:02, Thứ 6 ngày 20
                                    </span>
                                </div>
                                <div className="outgoing_chats">
                                    <img
                                        className="outgoing_chats_img"
                                        src={avatar}
                                    />
                                </div>
                            </div>
                            <div className="received_chats ">
                                <div className="received_chats_img">
                                <img src={avatar} />
                                </div>
                                <div className="received_msg">
                                    <div className="received_msg_inbox">
                                        {/* chat */}
                                        <p>
                                            Hello !! Tôi tên là John Cena, tôi
                                            đến từ USA
                                        </p>
                                        {/* time */}
                                        <span className="time">
                                            11:02, Thứ 6 ngày 20
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="outgoing_chats">
                                <div className="outgoing_chat_msg">
                                    {/* chat */}
                                    <p>Hello !! Rất vui được gặp bạn</p>
                                    {/* time */}
                                    <span className="time">
                                        12:02, Thứ 6 ngày 20
                                    </span>
                                </div>
                                <div className="outgoing_chats">
                                    <img
                                        className="outgoing_chats_img"
                                        src={avatar}
                                    />
                                </div>
                            </div>
                            <div className="received_chats ">
                                <div className="received_chats_img">
                                    <img src={avatar} />
                                </div>
                                <div className="received_msg">
                                    <div className="received_msg_inbox">
                                        {/* chat */}
                                        <p>
                                            Hello !! Tôi tên là John Cena, tôi
                                            đến từ USA
                                        </p>
                                        {/* time */}
                                        <span className="time">
                                            11:02, Thứ 6 ngày 20
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="outgoing_chats">
                                <div className="outgoing_chat_msg">
                                    {/* chat */}
                                    <p>Hello !! Rất vui được gặp bạn</p>
                                    {/* time */}
                                    <span className="time">
                                        12:02, Thứ 6 ngày 20
                                    </span>
                                </div>
                                <div className="outgoing_chats">
                                    <img
                                        className="outgoing_chats_img"
                                     src={avatar}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content_chat_bottom">
                            <div
                                className="content_chat_bottom_icon"
                                style={{
                                    width: "100%",
                                    height: 50,
                                    backgroundColor:
                                        "rgba(217, 231, 240, 0.623)",
                                    paddingTop: 10,
                                }}
                            >
                                <a
                                    type="file"
                                    style={{
                                        width: "100%",
                                        backgroundColor: "thistle",
                                        border: "1px solid rgb(151, 98, 98)",
                                        padding: 5,
                                        marginLeft: 10,
                                    }}
                                >
                                    <i
                                        className="fa fa-image"
                                        style={{
                                            fontSize: 25,
                                            color: "rgba(15, 15, 15, 0.795)",
                                        }}
                                    />
                                </a>
                                <a
                                    style={{
                                        width: "100%",
                                        backgroundColor: "thistle",
                                        border: "1px solid rgb(151, 98, 98)",
                                        padding: 5,
                                        marginLeft: 10,
                                    }}
                                >
                                    <i
                                        className="fa fa-paperclip"
                                        style={{
                                            fontSize: 25,
                                            color: "rgba(15, 15, 15, 0.795)",
                                        }}
                                    />
                                </a>
                            </div>
                            <div className="input-group input-group my-1 ">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                                <div className="input-group-prepend">
                                    <button
                                        className="btn btn-success"
                                        id="inputGroup-sizing-default"
                                    >
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
