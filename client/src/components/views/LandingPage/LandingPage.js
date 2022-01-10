import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../../style/Style.module.css';
import btnStyles from '../../../style/Btn.module.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
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
        <div className={styles.menuBar}>
          <button className={btnStyles.landingPageBtn}>Preview</button>
          <button className={btnStyles.landingPageBtn}>Upload</button>
          <button className={btnStyles.landingPageBtn}>Review</button>
        </div>

        <div className={styles.landingImage}>
          <img className={styles.mainImage} src='img/artist.jpg' alt='artist' />
        </div>
      </header>
      <div className={styles.landingPage}>
        {/* <div className={styles.landingElement}>
          <button onClick={onClickHandler}>Logout</button>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
