import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../../style/Style.module.css';
import btnStyles from '../../../style/Btn.module.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import { set } from 'mongoose';
function LandingPage() {
  // useEffect(() => {
  //   axios.get('/api/hello').then((res) => console.log(res));
  // }, []);

  let navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        navigate('/login');
      } else {
        alert('로그인되지 않았습니다.');
      }
    });
  };

  function BoolLogin() {
    const [isLogin, setisLogin] = useState(false);
    const dispatch = useDispatch();

    dispatch(auth()).then((response) => {
      console.log(response);
      if (response.payload.isAuth) {
        console.log('로그인 상태');
        setisLogin(true);
      } else {
        console.log('로그아웃 상태');
        setisLogin(false);
      }
    });

    return isLogin;
  }
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.firstHeader}>
          {BoolLogin() ? (
            <div>
              <button className={btnStyles.landingPageBtn} onClick={onClickHandler}>
                Sign Out
              </button>
              <Link to='/login'>
                <button className={btnStyles.landingPageBtn}>My Page</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to='/login'>
                <button className={btnStyles.logBtn}>Sign in</button>
              </Link>
              <Link to='/register'>
                <button className={btnStyles.logBtn}>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
        <h1 className={styles.logo}>Draw Space</h1>
        <nav className={styles.menuBar}>
          <button className={btnStyles.landingPageBtn}>Preview</button>
          <button className={btnStyles.landingPageBtn}>Photographer</button>
          <button className={btnStyles.landingPageBtn}>Author</button>
          <button className={btnStyles.landingPageBtn}>Poet</button>
          <button className={btnStyles.landingPageBtn}>Artist</button>
        </nav>

        <div className={styles.landingImage}>
          <img className={styles.mainImage} src='img/artist.jpg' alt='artist' />
        </div>
      </header>
      <div className={styles.landingPage}>
        <div className={styles.landingElement}>{/* <button onClick={onClickHandler}>Logout</button> */}</div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default LandingPage;
