import React, { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/view/Auth';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { useCookies } from 'react-cookie';

// component: root path 컴포넌트 //
function Index() {

  // state: 쿠키 상태 //
  const [cookies] = useCookies();

  // function: 네비게이터 함수//
  const navigator = useNavigate();

  //effect: 마운트 시 경로 이동 effect //
  useEffect(() => {
    if (cookies.accessToken) navigator('/cs');   // 값이 존재한다면 로그인 상태, 아니라면 비로그인 상태
    else navigator('/auth');
  }, []);   // 배열 생략 가능

  // render: root path 컴포넌트 렌더링 //

  return (
    <></>
  );
}

// component: Senicare 컴포넌트 //
export default function Senicare() {
  
    // render: root path 컴포넌트 렌더링 //
  return (
    <Routes>
      <Route index element={<Index />} />    {/* index가 기본 경로 (ex: http://localhost:3000) */}
      <Route path='/auth' element={<Auth />} />
      <Route path='/cs' element={<MainLayout />}>
        <Route index element={<>고객 리스트 보기</>} />
        <Route path='write' element={<>고객 등록</>} />
        <Route path=':customNumber' element={<>고객 정보 보기</>} />
        <Route path=':customNumber/update' element={<>고객 정보 수정</>} />
      </Route>
      <Route path='/mm' element={<MainLayout />}>
        <Route index element={<></>} />
      </Route>
      <Route path='/hr' element={<MainLayout />}>
        <Route index element={<></>} />
        <Route path=':userId' element={<></>} />
        <Route path=':userId/update' element={<></>} />      
      </Route>
      <Route path='*' element={<Index />} />    {/* 위의 경로들 외 모든 존재하지 않는 경로 입력 시 auth(기본 경로)로 이동 */}
    </Routes>
  );
}
