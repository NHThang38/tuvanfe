import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/img/logo.jpg";
import "../style/Login.css";
import useAuth from "../hooks/useAuth";
import swal from 'sweetalert';
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import request from "../api/request";
const Login = () => {
    const userRef = useRef();
    const errRef  = useRef();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const {setAuth,setLoading} = useAuth();
    // useEffect(() => {
    //     useRef.current.focus();
    // }, [])

    // const headers = {
    //     'Content-Type':'application/json'
    //   };
    // axios.get(`http://localhost:5000/doctor/getDocters`, {headers})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
    

    const handleLogin = (event) => {
        request.post(`login`,  {id: user, password:password} )
        .then((res) => {
            // console.log(res.data.Doctor);
            if(res.data.code == 100){
                /*document.cookie = res.data.Doctor.IDDoctor;
                // console.log(document.cookie);
                var giatri = document.cookie;
                // console.log(giatri)
                console.log("Thanh Cong")
                return navigate("/");
                */
                setAuth(res.data.Doctor)
               localStorage.setItem('user',JSON.stringify(res.data.Doctor));
               setLoading(true);
               swal({
                title: "Đăng nhập thành công!",
                icon: "success",
              });
               return navigate("/");
            }
            else if(res.data.code == 101){
               /* document.cookie = res.data.Patient.IDPatient;
                var giatri = document.cookie;
                console.log(giatri)
                console.log("Thanh Cong")
                return navigate("/");
                */
            //    console.log(res.data.Patient)
                localStorage.setItem('user',JSON.stringify(res.data.Patient));
                setLoading(true);
                swal({
                    title: "Đăng nhập thành công!",
                    icon: "success",
                  });
                return navigate("/");
            }
            else{
                swal({
                    title: "Đăng nhập thành công!",
                    icon: "success",
                  });
            }
        })
        .catch((err) => {
            console.log(err);
        })

      
    };

    
    const onChangeUser = (e) => {
        const usertem = e.target.value;
        setUser(usertem);
      };
    const onChangePassword = (e) => {
        const passtem = e.target.value;
        setPassword(passtem);
        
      };
    
//    const handleSubmit = () => {
//     // console.log(user, password);
    
//     request.get(`login`, {params: {id:user, password:password}} )
//     .then((res) => {
//         console.log(res.data);
//         if(res.data.code == 100){
//             console.log("Dang Nhap Thanh Cong")
//             document.cookie = res.data.Doctor.IDDoctor;
//             // console.log(document.cookie);
//             var giatri = document.cookie;
//             // console.log(giatri)
       
//         }
//         else if(res.data.code == 101){
//             console.log("Dang Nhap Thanh Cong")
//             document.cookie = res.data.Patient.IDPatient;
//             var giatri = document.cookie;
//             // console.log(giatri)
    
  
//         }
//         else{
//             console.log("Dang nhap that bai")
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     })
    
//    }
    
    
    return (
    //     <section className="pt-5">
    //     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    //     <h1>Sign In</h1>
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="username">Username:</label>
    //         <input
    //             type="text"
    //             id="username"
    //             ref={userRef}
    //             autoComplete="off"
    //             onChange={(e) => setUser(e.target.value)}
    //             value={user}
    //             required
    //         />

    //         <label htmlFor="password">Password:</label>
    //         <input
    //             type="password"
    //             id="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //             value={password}
    //             required
    //         />
    //         <button>Sign In</button>
    //     </form>
    //     <p>
    //         Need an Account?<br />
    //         <span className="line">
    //             {/*put router link here*/}
    //             <a href="#">Sign Up</a>
    //         </span>
    //     </p>
    // </section>
        
        
        
        <div className="warp_login" >
            <div className="login_content">
                <h2 className="text-center text-danger">Đăng nhập</h2>
                <img
                    src={Logo}
                    width="60px"
                    height="60px"
                    style={{ marginLeft: 120 }}
                />
                <form className="needs-validation" >
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="email">
                            Email hoặc số điện thoại
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="email"
                            value={user}
                            onChange={onChangeUser}
                       
                        />
                        <div className="invalid-feedback">
                            Vui lòng nhập email hoặc số điện thoại.
                        </div>
                    </div>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                    
                        />
                        <div className="invalid-feedback">
                            Vui lòng nhập mật khẩu.
                        </div>
                    </div>
                    <div className="register_content">
                        <span>Chưa có tài khoản ? </span>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: "none" }}
                        >
                            Đăng ký ngay
                        </NavLink>
                    </div>
            
                 
                </form>
                <button
                        className="btn btn-success w-100 my-3"
                        onClick={(event) => handleLogin(event)}
                    >Đăng nhập</button>
            </div>

        </div>
    );
};

export default Login;
