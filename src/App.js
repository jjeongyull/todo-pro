import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => { // 토큰을 통해 유저정보를 가져온다
    try{
      const storedToken = sessionStorage.getItem('token');
      if (storedToken) {
        const reponse = await api.get('/user/me');
        setUser(reponse.data.user)
      }
    }catch(e){
      setUser(null);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path="/" 
      element={
        <PrivateRoute user={user}>
          <TodoPage />
        </PrivateRoute>
      } />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage setUser={setUser} user={user}/>} />
    </Routes>
  );
}

export default App;
