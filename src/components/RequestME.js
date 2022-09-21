import React, { useState, useRef, useEffect } from "react";
import "../style/RequestME.css";
import useAuth from "../hooks/useAuth";
import swal from "sweetalert";
import request from "../api/request";
const RequestME = () => {
    const [idPatient, setIdPatient] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [symptom, setSymptom] = useState("");
    const [department, setDepartment] = useState("Răng-Hàm-Mặt");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [timeHT, setTimeHT] = useState("");
    const { loading, setLoading } = useAuth();

    useEffect(() => {
        const patient = JSON.parse(localStorage.getItem("user"));
        if (patient) {
            setIdPatient(patient.IDPatient);
            setLoading(false);
        }
    }, [loading]);

    var today = new Date(),
        // time =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            " " +
            today.getDate() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getFullYear();



    const handleSubmitRq = () => {
        // setTimeHT(time)

        if (idPatient == null) {
            // console.log(name, phone, time, symptom, medicalHistory, department);
            request
                .post(`patient/sendRequest`, {
                    name: name,
                    phone: phone,
                    request: request,
                    time: time,
                    symptom: symptom,
                    medicalHistory: medicalHistory,
                    department: department,
                })
                .then((res) => {
                    swal({
                        title: "Gửi thông tin thành công!",
                        icon: "success",
                    });
                })
                .catch((res) => {
                    console.log(res);
                    swal({
                        title: "Gửi thất bại!",
                        icon: "warning",
                    });
                });
        } else {
            request
                .post(`patient/sendRequest`, {
                    idPatient: idPatient,
                    name: name,
                    phone: phone,
                    request: request,
                    time: time,
                    symptom: symptom,
                    medicalHistory: medicalHistory,
                    department: department,
                })
                .then((res) => {
                    swal({
                        title: "Gửi thông tin thành công!",
                        icon: "success",
                    });
                })
                .catch((res) => {
                    console.log(res);
                    swal({
                        title: "Gửi thất bại!",
                        icon: "warning",
                    });
                });
        }
    };

    return (
        <div>
            <div className="yeucaukb container py-2">
                <h2 className="my-4 text-center">Yêu cầu khám bệnh</h2>
                <div className="form_tuvan ">
                    <div className="d-flex container">
                        <p className="heading2 text-danger">
                            Gửi thông tin để được tư vấn
                        </p>
                        <span className="note_tv">
                            (Vui lòng nói gửi các chịu chứng và các tiền sử bệnh
                            án)
                        </span>
                    </div>
                    <form className="needs-validation row ">
                        <div className="col-6">
                            <div className="form-group was-validated mb-4 ">
                                <label className="form-label" htmlFor="name">
                                    Họ tên
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                {/* <div className="invalid-feedback">
            Vui lòng nhập họ tên.
          </div> */}
                            </div>
                            <div className="form-group was-validated">
                                <label className="form-label" htmlFor="sdt">
                                    Số điện thoại
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="sdt"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            {/* <div className="form-group was-validated">
          <label className="form-label" htmlFor="email">Email </label>
          <input className="form-control" type="email" id="email" required />
        </div> */}
                            {/* <div className="form-group was-validated">
          <label className="form-label" htmlFor="age">Tuổi </label>
          <input className="form-control" type="number" id="age" required />
        </div> */}
                            {/* <div className='form_gt
        '>
        <label className="form-label mt-2" htmlFor="email">Giới tính </label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gioitinh" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Nam
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gioitinh" id="flexRadioDefault2" defaultChecked />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Nữ
          </label>
        </div>

        </div> */}

                            {/* <div className="form-group was-validated">
          <label className="form-label" htmlFor="address">Địa chỉ </label>
          <input className="form-control" type="text" id="address" required />
        </div> */}
                        </div>
                        <div className="col-6">
                            <div className="form-group was-validated mb-4">
                                <label className="form-label" htmlFor="address">
                                    Chịu chứng{" "}
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="address"
                                    value={symptom}
                                    onChange={(e) => setSymptom(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group was-validated">
                                <label className="form-label" htmlFor="address">
                                    Khoa{" "}
                                </label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={department}
                                    onChange= {(e) => {setDepartment(e.target.value)}}
                                >
                                    <option value="Răng-Hàm-Mặt">Răng-Hàm-Mặt</option>
                                    <option value="Tim mạch">Tim mạch</option>
                                    <option value="Tai-Mũi-Họng">Tai-Mũi-Họng</option>
                                    <option value="Da liễu">Da liễu</option>
                                    <option value="Xương khớp">Xương khớp</option>
                                </select>
                                {/* <input
                                    className="form-control"
                                    type="text"
                                    id="address"
                                    value={department}
                                    onChange={(e) =>
                                        setDepartment(e.target.value)
                                    }
                                    required
                                /> */}
                            </div>
                            <div className="form-floating mt-4">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    value={medicalHistory}
                                    onChange={(e) =>
                                        setMedicalHistory(e.target.value)
                                    }
                                    style={{ height: 80 }}
                                />
                                <label htmlFor="floatingTextarea2">
                                    {" "}
                                    Các tiền sử bệnh....
                                </label>
                            </div>
                        </div>
                    </form>
                    <div className="text-center">
                        <button
                            className="btn btn-success mt-4 px-5"
                            onClick={handleSubmitRq}
                        >
                            Gửi thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestME;
