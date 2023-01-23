import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageError/PageNotFound';
import Header from './pages/AdminPages/Header/Header';
import IndexAdmin from './pages/AdminPages/IndexAdmin';
import UserManager from './pages/AdminPages/User/UserManager.js'
import React from 'react';
import ListBook from './pages/AdminPages/Book/ListBook';
import CreateBook from './pages/AdminPages/Book/CreateBook';
import EmptyBook from './pages/AdminPages/Book/EmptyBook';
import RegisterBook from './pages/AdminPages/Book/RegisterBook';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/register" element={<Register />} />\
        <Route path="/adminPage" element={<Header />}>
          <Route path="indexAdmin" element={<IndexAdmin />} />
          <Route path="userManager" element={<UserManager />} />
          <Route path="bookManager">
             <Route path="listBook" element={<ListBook/>} />
             <Route path="createBook" element={<CreateBook/>} />
             <Route path="registerBook" element={<RegisterBook/>} />
             <Route path="emptyBook" element={<EmptyBook/>} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
