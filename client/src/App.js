import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Board1Page from './components/views/NoticeBoard/Board1';
import Board2Page from './components/views/NoticeBoard/Board2';
import Board3Page from './components/views/NoticeBoard/Board3';

import Auth from './hoc/auth';

function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewBoard1Page = Auth(Board1Page, null);
  const NewBoard2Page = Auth(Board2Page, null);
  const NewBoard3Page = Auth(Board3Page, null);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NewLandingPage />} />
        <Route exact path='/login' element={<NewLoginPage />} />
        <Route exact path='/register' element={<NewRegisterPage />} />
        <Route exact path='/board1' element={<NewBoard1Page />} />
        <Route exact path='/board2' element={<NewBoard2Page />} />
        <Route exact path='/board3' element={<NewBoard3Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
