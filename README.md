# Senicare

### 개요
코리아IT아카데미부산
[산대특] 빅데이터 활용 클라우드 SaaS 기반 시니어케어 ERP 개발 과정

요양사를 위한 고객, 인사, 물자 관리 ERP 프로젝트

#### package
react-router, react-router-dom, react-cookie, zustand, axios

###### 패키지 설치
```bash
npm install
```

###### 개발모드 실행
```bash
npm run start
```

###### 개발 빌드
```bash
npm run build
```

#### 네비게이션 구조
**/auth**: 로그인 및 회원가입

**/cs**: 고객 관리 (고객 리스트 보기)
**/cs/write**: 고객 등록
**/cs/:customnumber**: 고객 상세 보기

**/mm**: 용품 관리 (용품 리스트 보기)

**/hr**: 인사 관리 (인사 리스트 보기)
**/hr/:userId**: 인사 정보 상세 보기
**/hr/:userId/update**: 인사 정보 수정하기


***

### 폴더 구조

- apis: 외부 api 연결 함수
- assets: 컴포넌트에서 사용될 정적 자원
- components: 공통 컴포넌트
- constants: 공통 상수
- hooks: 공통 훗 함수
- layouts: 공통 레이아웃 컴포넌트
- stores: 글로벌 상태 스토어
- types: 공통 타입
- utils: 공통 함수
- views: 페이지 별 화면 컴포넌트










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
