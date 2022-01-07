import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NewLandingPage />} />

        <Route exact path='/login' element={<NewLoginPage />} />

        <Route exact path='/register' element={<NewRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
