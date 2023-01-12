import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageError/PageNotFound';
import Header from './pages/AdminPages/Header';
import IndexAdmin from './pages/AdminPages/IndexAdmin';
import UserManager from './pages/AdminPages/User/UserManager.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />\
          <Route path="/adminPage" element={<Header/>}>
            <Route path="indexAdmin" element={<IndexAdmin/>}/>
            <Route path="userManager" element={<UserManager/>}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
