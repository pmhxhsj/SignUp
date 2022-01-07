import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      <h1>Draw Space</h1>
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default LandingPage;
