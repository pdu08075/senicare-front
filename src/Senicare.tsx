import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';

import MainLayout from './layouts/MainLayout';
import Auth from 'src/view/Auth';

import { ACCESS_TOKEN, AUTH_ABSOLUTE_PATH, AUTH_PATH, CS_ABSOLUTE_PATH, CS_DETAIL_PATH, CS_PATH, CS_UPDATE_PATH, CS_WRTIE_PATH, HR_DETAIL_PATH, HR_PATH, MM_PATH, OTHERS_PATH } from './constants';

import './Senicare.css';
import CS from './view/CS';
import CSWrite from './view/CS/Write';
import CSDetail from './view/CS/Detail';
import CSUpdate from './view/CS/Update';
import MM from './view/MM';
import HR from './view/HR';
import HRDetail from './view/HR/Detail';

// component: root path 컴포넌트 //
function Index() {

  // state: 쿠키 상태 //
  const [cookies] = useCookies();

  // function: 네비게이터 함수 //
  const navigator = useNavigate();

  // effect: 마운트 시 경로 이동 effect //
  useEffect(() => {
    if (cookies[ACCESS_TOKEN]) navigator(CS_ABSOLUTE_PATH);   // 값이 존재한다면 로그인 상태, 아니라면 비로그인 상태
    else navigator(AUTH_ABSOLUTE_PATH);
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
    <Routes>    {/* Route에서는 무조건 상대경로, 절대 경로 못넣음 */}
      <Route index element={<Index />} />    {/* index가 기본 경로 (ex: http://localhost:3000) */}
      <Route path={AUTH_PATH} element={<Auth />} />
      <Route path={CS_PATH} element={<MainLayout />}>
        <Route index element={<CS />} />
        <Route path={CS_WRTIE_PATH} element={<CSWrite />} />
        <Route path={CS_DETAIL_PATH(':customNumber')} element={<CSDetail />} />
        <Route path={CS_UPDATE_PATH(':customNumber')} element={<CSUpdate />} />
      </Route>
      <Route path={MM_PATH} element={<MainLayout />}>
        <Route index element={<MM />} />
      </Route>
      <Route path={HR_PATH} element={<MainLayout />}>
        <Route index element={<HR />} />
        <Route path={HR_DETAIL_PATH(':userId')} element={<HRDetail />} />   
      </Route>
      <Route path={OTHERS_PATH} element={<Index />} />    {/* 위의 경로들 외 모든 존재하지 않는 경로 입력 시 auth(기본 경로)로 이동 */}
    </Routes>
  );
}
