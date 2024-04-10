import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [sePassword, setSePassword] = useState('');
  const [err, setErr] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(password != sePassword){
        throw new Error('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
      }
      const response = await api.post('/user',{name, email, password});
      if(response.status == 200){
        navigate('/login');
      }

    }catch(error){
      setErr(error.message);
    }

  }

  return (
    <div className="display-center">
      {err && <div className="red-err">{err}</div>}
      <Form className="login-box" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(event) => setName(event.target.value)} type="string" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(event) => setemail(event.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event) => setpassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>re-enter the password</Form.Label>
          <Form.Control onChange={(event) => setSePassword(event.target.value)} type="password" placeholder="re-enter the password" />
        </Form.Group>

        <Button className="button-primary" type="submit">
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;