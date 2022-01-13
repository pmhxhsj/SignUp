import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import styles from '../../../style/Style.module.css';
import loginPage from '../../../style/LoginPage.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  let navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('패스워드가 일치하지 않습니다.');
    }

    if (Password.length < 8 || ConfirmPassword.length < 8) {
      return alert('패스워드는 최소 8자리 이상이어야합니다.');
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('이메일이 존재합니다.');
      }
    });
  };

  return (
    <div className={loginPage.pageContainer}>
      <div className={loginPage.loginFormContainer}>
        <div className={loginPage.registerFormRightSide}>
          <div className={loginPage.topLogoWrap}></div>
          <h1>
            <strong>Thank you for signing up as a member.</strong> <br />
          </h1>
          <p>
            <strong>-to a great artist-</strong>
          </p>
        </div>
        <div className={loginPage.loginFormLeftSide}>
          <div className={loginPage.loginTopWrap}></div>
          <form onSubmit={onSubmitHandler}>
            <div className={loginPage.registerInputContainer}>
              <div className={loginPage.loginInputWrap}>
                <input
                  type='text'
                  className={loginPage.nameInput}
                  value={Name}
                  onChange={onNameHandler}
                  placeholder='Your Name'
                />
              </div>
              <div className={loginPage.loginInputWrap}>
                <input
                  type='email'
                  className={loginPage.emailInput}
                  value={Email}
                  onChange={onEmailHandler}
                  placeholder='Email'
                />
              </div>
              <div className={loginPage.loginInputWrap}>
                <input
                  type='password'
                  className={loginPage.passwordInput}
                  value={Password}
                  onChange={onPasswordHandler}
                  placeholder='Password'
                />
              </div>
              <div className={loginPage.loginInputWrap}>
                <input
                  type='password'
                  className={loginPage.passwordInput}
                  value={ConfirmPassword}
                  onChange={onConfirmPasswordHandler}
                  placeholder='Confirm Password'
                />
              </div>
            </div>

            <div className={loginPage.loginBtnWrap}>
              <button type='submit' className={loginPage.registerBtn}>
                Sign Up
              </button>
              <Link to='/login'>
                <button type='submit' className={loginPage.registerBtn}>
                  Login Page
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
