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

  const onNumberHandler = (e) => {
    setNumber(e.currentTarget.value);
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

    let body = {
      email: Email,
      name: Name,
      number: Number,
      password: Password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate('/login');
      } else {
        alert('Failed to sign up');
      }
    });
  };

  return (
    <div className={loginPage.pageContainer}>
      <div className={loginPage.loginFormContainer}>
        <div className={loginPage.registerFormRightSide}>
          <div className={loginPage.topLogoWrap}></div>
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
                  type='text'
                  className={loginPage.phoneNumberInput}
                  value={Number}
                  onChange={onNumberHandler}
                  placeholder="Phone Number ( without ' - ' )"
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
              <button type='submit' className={loginPage.loginBtn}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className={styles.registerPage}>
    //   <form onSubmit={onSubmitHandler} className={styles.registerForm}>
    //     <label>Email</label>
    //     <input type='email' value={Email} onChange={onEmailHandler} />

    //     <label>Name</label>
    //     <input type='text' value={Name} onChange={onNameHandler} />

    //     <label>Password</label>
    //     <input type='password' value={Password} onChange={onPasswordHandler} />

    //     <label>Confirm Password</label>
    //     <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>
    //     <br />
    //     <button type='submit'>회원가입</button>
    //   </form>
    // </div>
  );
}

export default RegisterPage;
