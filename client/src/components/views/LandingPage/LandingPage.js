import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../../style/Style.module.css';
import btnStyles from '../../../style/Btn.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res));
  }, []);

  let navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        navigate('/login');
      } else {
        alert('안됨');
      }
    });
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.firstHeader}>
          <Link to='/login'>
            <button className={btnStyles.landingPageBtn}>로그인</button>
          </Link>

          <Link to='/login'>
            <button className={btnStyles.landingPageBtn}>마이페이지</button>
          </Link>
        </div>
        <h1 className={styles.logo}>Draw Space</h1>
      </header>
      <div className={styles.landingPage}>
        <div className={styles.landingElement}>{/* <button onClick={onClickHandler}>Logout</button> */}</div>
      </div>
    </div>
  );
}

export default LandingPage;
