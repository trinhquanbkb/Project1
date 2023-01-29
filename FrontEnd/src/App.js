import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageError/PageNotFound';
import IndexAdmin from './pages/AdminPages/Index/IndexAdmin';
import UserManager from './pages/AdminPages/User/UserManager.js'
import React from 'react';
import ListBook from './pages/AdminPages/Book/ListBook';
import CreateBook from './pages/AdminPages/Book/CreateBook';
import RegisterBook from './pages/AdminPages/Book/RegisterBook';
import HeaderAdmin from './pages/AdminPages/Header/HeaderAdmin';
import HeaderUser from './pages/UserPage/Header/HeaderUser';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminPage" element={<HeaderAdmin />}>
          <Route path="indexAdmin" element={<IndexAdmin />} />
          <Route path="userManager" element={<UserManager />} />
          <Route path="bookManager">
             <Route path="listBook" element={<ListBook/>} />
             <Route path="createBook" element={<CreateBook/>} />
             <Route path="registerBook" element={<RegisterBook/>} />
          </Route>
        </Route>
        <Route path="/userPage" element={<HeaderUser />}>

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
