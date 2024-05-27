import React from 'react';
import {Navigate} from "react-router-dom";

const PrivateRoute = ({user, children}) => {
  return (
    user ? children : <Navigate to='/login'/>
  )
}

// user값이 있으면 todo페이지로 없다면 로그인페이지로
// react에서 children은 예약어가 있음 -> 컴포넌트 안에 새끼 컴포넌트를 children이라는 prop으로 사용 할 수 있다

export default PrivateRoute