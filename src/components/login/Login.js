import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import logoPic from "../../assets/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
let fetchUrl = "";

const usernameChecker = ["student", "teacher", "headmaster"];
const Login = (props) => {
  //   const dispatch = useDispatch();
  const isloggedIn = useSelector((state) => state.loginReducer.isLoggedin);
  console.log(isloggedIn);
  const usernameRef = useRef();
  const passwordRef = useRef();
  //   const [errorLogin, setErrorLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  //   console.log(usernameRef.current);

  const LoginHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();
    if (!enteredUsername || !enteredPassword) {
      setErrorMsg("نام کاربری و رمز عبور را وارد کنید");
      //   setErrorLogin(true);
    } else if (enteredPassword != 12345) {
      setErrorMsg("رمز عبور نادرست است");
      //   setErrorLogin(true);
    } else if (!usernameChecker.includes(enteredUsername)) {
      setErrorMsg("نام کاربری نادرست است");
      console.log("username error");
      //   setErrorLogin(true);
    } else {
      console.log(enteredUsername, enteredPassword);
      if (enteredUsername === "headmaster") {
        fetchUrl =
          "/admin_table" +
          `?where={ "position": "${enteredUsername}","password": "${enteredPassword}"}`;
      } else if (enteredUsername === "teacher") {
        fetchUrl =
          "/teacher_table" +
          `?where={ "position": "${enteredUsername}","password": "${enteredPassword}"}`;
      } else if (enteredUsername === "student") {
        fetchUrl =
          "/student_table" +
          `?where={ "position": "${enteredUsername}","password": "${enteredPassword}"}`;
      }

      props.loginHandler(fetchUrl, "GET", enteredUsername);
    }
  };

  const clearHandler = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    setErrorMsg("");
    // setErrorLogin(false);
  };

  return (
    <>
      <div className={classes["body-spec"]}>
        <div className={classes.login}>
          <div className={classes.avatar}>
            <img src={logoPic} alt="logo on Login page" />
          </div>
          <h2>ورود به پنل مدیریت مدرسه</h2>
          <h3>برای تست از اطلاعات زیر استفاده کنید</h3>
          <p className={classes["login-explain"]}>
            برای ورود به عنوان مدیر نام کاربری را headmaster, برای ورود به عنوان
            معلم نام کاربری را teacher و برای ورود به عنوان دانش آموز نام کاربری
            را student انتخاب کنید و رمز عبور هر سه اکانت 12345 می باشد
          </p>

          <form className={classes["login-form"]}>
            <div className={classes.textbox}>
              <input type="text" placeholder="Username" ref={usernameRef} />
              <i className="bx bx-user"></i>
            </div>
            <div className={classes.textbox}>
              <input type="password" placeholder="Password" ref={passwordRef} />
              <i className="bx bx-lock-alt"></i>
            </div>
            <h4 className={classes.errorMsg}>{errorMsg}</h4>
            <div className={classes["form-btn"]}>
              <button type="reset" onClick={clearHandler}>
                پاک کردن
              </button>
              <button type="submit" onClick={LoginHandler}>
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
