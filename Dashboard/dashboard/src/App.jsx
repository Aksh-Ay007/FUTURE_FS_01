import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ForgotPasword from './pages/ForgotPasword';
import ResetPassword from './pages/ResetPassword';
import ManageSkills from './pages/ManageSkills';
import ManageTimeLine from './pages/ManageTimeLine';
import ManageProjects from './pages/ManageProjects';
import ViewProjects from './pages/ViewProjects';
import UpdateProject from './pages/UpdateProject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password/forgot" element={<ForgotPasword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/manage/skills" element={<ManageSkills />} />
          <Route path="/manage/timeline" element={<ManageTimeLine />} />
          <Route path="/manage/projects" element={<ManageProjects />} />
          <Route path="/view/project/:id" element={<ViewProjects />} />
          <Route path="/update/project/:id" element={<UpdateProject />} />
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </Provider>
  );
}

export default App;