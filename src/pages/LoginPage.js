import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";
import { Link, useNavigate, Navigate } from "react-router-dom";


const LoginPage = ({setUser, user}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post('/user/login',{email, password});
      if(response.status === 200){
        setUser(response.data.rUser);
        sessionStorage.setItem("token", response.data.token);
        api.defaults.headers['authorization'] = "Bearer " + response.data.token;
        setErr('');
        navigate('/');
      }else{
        throw new Error(response.message);
      }
    }catch(err){
      setErr(err.message);
    }
  }
  if(user){
    return <Navigate to='/'/>
  }
  
  return (
    <div className="display-center">
      {err && <div className="red-err">{err}</div>}
      <Form className="login-box" onSubmit={handleLogin}>
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(event) => setemail(event.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event) => setpassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <div className="button-box">
          <Button type="submit" className="button-primary">
            Login
          </Button>
          <span>
            계정이 없다면? <Link to="/register">회원가입 하기</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;