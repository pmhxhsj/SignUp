import React from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {
  // null => ALL
  // true => login user O
  // false => login user X

  function AuthenticationCheck() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        //로그인 안했을 때
        if (!response.payload.isAuth) {
          if (option) {
            navigate('/login');
          }
        } else {
          //로그인 했을 때
          if (adminRoute && !response.payload.isAdmin) {
            navigate('/');
          } else {
            if (option === false) {
              navigate('/');
            }
          }
        }
      });

      Axios.get('/api/users/auth');
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
