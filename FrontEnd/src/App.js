import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageError/PageNotFound';
import Header from './pages/AdminPages/Header';
import IndexAdmin from './pages/AdminPages/IndexAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />\
          <Route path="/adminPage" element={<Header/>} />
          <Route path="/adminPage/indexAdmin" element={<IndexAdmin/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
