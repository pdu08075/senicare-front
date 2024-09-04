import React, { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/view/Auth';
import { Route, Routes } from 'react-router';

function index() {

  useEffect(() => {
    // TODO: /auth로 경로 이동
  }, []);   // 배열 생략 가능

  return (
    <></>
  )
}

export default function Senicare() {
  return (
    <Routes>
      <Route index element={<> </>} />    {/* index가 기본 경로 (ex: http://localhost:3000) */}
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}
