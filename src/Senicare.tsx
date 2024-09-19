import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { Cookies, useCookies } from 'react-cookie';

import MainLayout from './layouts/MainLayout';
import Auth from 'src/view/Auth';

import { ACCESS_TOKEN, AUTH_ABSOLUTE_PATH, AUTH_PATH, CS_ABSOLUTE_PATH, CS_DETAIL_PATH, CS_PATH, CS_UPDATE_PATH, CS_WRTIE_PATH, HR_DETAIL_PATH, HR_PATH, MM_PATH, OTHERS_PATH, ROOT_PATH, SNS_SUCCESS_PATH } from './constants';

import './Senicare.css';
import CS from './view/CS';
import CSWrite from './view/CS/Write';
import CSDetail from './view/CS/Detail';
import CSUpdate from './view/CS/Update';
import MM from './view/MM';
import HR from './view/HR';
import HRDetail from './view/HR/Detail';
import { useSearchParams } from 'react-router-dom';
import { getSignInRequest } from './apis';
import { GetSignInResponseDto } from './apis/dto/response/nurse';
import { ResponseDto } from './apis/dto/response';
import { useSignInUserStore } from './stores';

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

// component: Sns Success 컴포넌트 //
function SnsSuccess() {

  // state: Query Parameter 상태 //
  const [queryParam] = useSearchParams();
  const accessToken = queryParam.get('accessToken');
  const expiration = queryParam.get('expiration');

  // state: cookie 상태 //
  const [cookies, setCookie] = useCookies();

  // function: 네비게이터 함수 //
  const navigator = useNavigate();

  // effect: Sns Success 컴포넌트 로드 시 accessToken과 expiration을 확인하여 로그인 처리 함수 //
  useEffect(() => {
    if (accessToken && expiration) {
      const expires = new Date(Date.now() + (Number(expiration) * 1000));
      setCookie(ACCESS_TOKEN, accessToken, { path: ROOT_PATH, expires });

      navigator(CS_ABSOLUTE_PATH);

    } else navigator(AUTH_ABSOLUTE_PATH);
  }, []);

  // render: Sns Succcess 컴포넌트 렌더링 //
  return <></>
}

// component: Senicare 컴포넌트 //
export default function Senicare() {

  // state: 로그인 유저 정보 상태 //
  const { signInUser, setSignInUser } = useSignInUserStore();

  // state: cookie 상태 //
  const [cookies, setCookie, removeCookie] = useCookies();    // 잘못된 토큰은 저장해둘 수 없고, 삭제해야 되니 remove도 불러옴

  //function: 네비게이터 함수 //
  const navigator = useNavigate();

  // function: get sign in Response 처리 함수 //
  const getSignInResponse = (responseBody: GetSignInResponseDto | ResponseDto | null) => {

    const message = 
    !responseBody ? '로그인 유저 정보를 불러오는데 문제가 발생했습니다.' :
    responseBody.code === 'NI' ? '로그인 유저 정보가 존재하지 않습니다.' :
    responseBody.code === 'AF' ? '잘못된 접근입니다.' : 
    responseBody.code === 'DBE' ? '로그인 유저 정보를 불러오는데 문제가 발생했습니다.' : '';

    const isSuccessed = responseBody !== null && responseBody.code === 'SU';

    if (!isSuccessed) {
      alert(message);
      removeCookie(ACCESS_TOKEN, {path: ROOT_PATH});
      setSignInUser(null);
      navigator(AUTH_ABSOLUTE_PATH);
      return;
    }

    const {userId, name, telNumber} = responseBody as GetSignInResponseDto;
    setSignInUser({ userId, name, telNumber });

  };

  // effect: cookie의 accessToken이 변경될 떄마다 로그인 유저 정보 요청 함수 //
  useEffect(() => {
    const accessToken = cookies[ACCESS_TOKEN];
    if (accessToken) getSignInRequest(accessToken).then(getSignInResponse);
    else setSignInUser(null);

  }, [cookies[ACCESS_TOKEN]]);
  
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
      <Route path={SNS_SUCCESS_PATH} element={<SnsSuccess />} />
      <Route path={OTHERS_PATH} element={<Index />} />    {/* 위의 경로들 외 모든 존재하지 않는 경로 입력 시 auth(기본 경로)로 이동 */}
    </Routes>
  );
}
