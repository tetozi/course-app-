
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';


import Header from './conponents/Header/Header';

import Home from './conponents/Home/Home';
import Login from './conponents/Login/Login';
import Register from './conponents/Register/Register';
import Create from './conponents/Create/Create';
import CoursePage from './conponents/CourseList/CourseCard/CoursePage/CoursePage';
import Update from './conponents/Update/Update';
import Logout from './conponents/Logout/Logout';
import ShopingCart from './conponents/Shoping Cart/ShopingCart';
import User from './conponents/User/User';
import PrivateRaoutes from './conponents/PrivateRoutes/PrivateRoutes';




function App() {
  return (
    <>
      <AuthProvider>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRaoutes />}>
            <Route path="/create" element={<Create />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/user" element={<User />} />
            <Route path="/update/:courseId" element={<Update />} />
            <Route path="/cart/:courseId" element={<ShopingCart />} />
          </Route>
        </Routes>

      </AuthProvider>
    </>
  );
}

export default App;
