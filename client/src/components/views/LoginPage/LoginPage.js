import { Axios } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import loginPage from '../../../style/LoginPage.module.css';
function Login() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  let navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate('/');
      } else {
        alert('아이디와 비밀번호를 확인해주세요.');
      }
    });
  };

  return (
    <div className={loginPage.pageContainer}>
      <div className={loginPage.loginFormContainer}>
        <div className={loginPage.loginFormRightSide}>
          <div className={loginPage.topLogoWrap}></div>
          <h1>더 많은 작가들의 작품을 보고싶다면?</h1>
          <p>
            쉽게 회원가입 및 로그인을 진행할 수 있습니다.
            <br /> 회원가입을 하고 모든 기능을 무료로 누려보세요
          </p>
        </div>
        <div className={loginPage.loginFormLeftSide}>
          <div className={loginPage.loginTopWrap}>
            <span>Don't have an account?</span>

            <Link to='/register'>
              <button className={loginPage.createAccountBtn}>Create Profile</button>
            </Link>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className={loginPage.loginInputContainer}>
              <div className={loginPage.loginInputWrap}>
                <i class={loginPage.farFaEnvelope}></i>
                <input
                  type='email'
                  className={loginPage.emailInput}
                  value={Email}
                  onChange={onEmailHandler}
                  placeholder='Email'
                />
              </div>
              <div className={loginPage.loginInputWrap}>
                <i className={loginPage.fasFaKey}></i>
                <input
                  type='password'
                  className={loginPage.passwordInput}
                  value={Password}
                  onChange={onPasswordHandler}
                  placeholder='Password'
                />
              </div>
            </div>

            <div className={loginPage.loginBtnWrap}>
              <button type='submit' className={loginPage.loginBtn}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
