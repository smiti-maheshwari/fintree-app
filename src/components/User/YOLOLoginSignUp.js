import React, { Fragment, useRef, useState } from "react";
import "./LoginSignUp.css";
import {Link} from "react-router-dom";

const LoginSignUp = () => {
    // const loginTab = useRef(null);
    // const registerTab = useRef(null);
    // const switcherTabs = useRef(null);

    // const [loginEmail, setLoginEmail] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");

    // const loginSubmit = () => {
    //     console.log("form sumitted");
    // };

    // const switchTabs = (e, tab) => {
    //     if(tab === "login") {
    //         switcherTabs.current.classList.add("shiftToNeutral");
    //         switcherTabs.current.classList.remove("shiftToRight");
    //         registerTab.current.classList.remove("shiftToNeutralForm");
    //         loginTab.current.classList.remove("shiftToLeft");
    //     }
    //     if(tab === "register") {
    //         switcherTabs.current.classList.add("shiftToRight");
    //         switcherTabs.current.classList.remove("shiftToNeutral");
    //         registerTab.current.classList.add("shiftToNeutralForm");
    //         loginTab.current.classList.add("shiftToLeft");
    //     }
    // }

    // return (
    //     <Fragment>
    //         <div className="LoginSignUpContainer">
    //             <div className="LoginSiignUpBox">
    //                 <div className="login_signup_toggle">
    //                     <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
    //                     <p onClick={(e) => switchTabs(e, "REGISTER")}>REGISTER</p>
    //                 </div>
    //                 <button ref={switcherTabs}></button>
    //             </div>
    //             <form className="loginForm" ref={loginTab}>
    //                 <div className="loginEmail">
    //                     <input
    //                         type="email"
    //                         placeholder="Email"
    //                         required
    //                         value={loginEmail}
    //                         onChange={(e) => setLoginEmail(e.target.value)}
    //                     />
    //                 </div>
    //                 <div className="loginPassword">
    //                     <input
    //                         type="password"
    //                         placeholder="Password"
    //                         required
    //                         value={loginPassword}
    //                         onChange={(e) => setLoginPassword(e.target.value)}
    //                     />
    //                 </div>
    //                 <Link to="/password/forget">Forget Password</Link>
    //                 <input type="submit" value="Login" className="loginBtn" />
    //             </form>
    //             <form className="signUpForm"
    //                 ref={registerTab}
    //                 encType="multipart/form-data"
    //                 onSubmit={registerSubmit}
    //             >
    //                 <div className="signUpName">
    //                     <input
    //                         type="text"
    //                         placeholder="Name"
    //                         required
    //                         name="name"
    //                         value={name}
    //                         onChange={registerDataChange}
    //                     >
    //                     </input>
    //                 </div>
    //                 <div className="signUpEmail">
    //                     <input
    //                         type="email"
    //                         placeholder="Email"
    //                         required
    //                         name="email"
    //                         value={email}
    //                         onChange={registerDataChange}
    //                     >
    //                     </input>
    //                 </div>
    //                 <div className="signUpPassword">
    //                     <input
    //                         type="password"
    //                         placeholder="Password"
    //                         required
    //                         name="password"
    //                         value={password}
    //                         onChange={registerDataChange}
    //                     >
    //                     </input>
    //                 </div>
    //                 {/* <div className="registerImage">
    //                     <input
    //                         type="password"
    //                         placeholder="Password"
    //                         required
    //                         name="password"
    //                         value={password}
    //                         onChange={registerDataChange}
    //                     >
    //                     </input>
    //                 </div> */}
    //                 <input
    //                     type="submit"
    //                     value="Register"
    //                     className="signUpBtn"
    //                     disabled={loading ? true : false} 
    //                 >
    //                 </input>
    //             </form>
    //         </div>
    //     </Fragment>
    // )
}

export default LoginSignUp;