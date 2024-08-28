import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';

export default function Auth() {

    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [telNumber, setTelNumber] = useState<string>('');
    const [authNumber, setAuthNumber] = useState<string>('');

    const [nameMessage, setNameMessage] = useState<string>('');
    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [telNumberMessage, setTelNumberMessage] = useState<string>('');
    const [authNumberMessage, setAuthNumberMessage] = useState<string>('');

    const [nameMessageError, setNameMessageError] = useState<boolean>(false);
    const [idMessageError, setIdMessageError] = useState<boolean>(false);
    const [passwordMessageError, setPasswordMessageError] = useState<boolean>(false);
    const [passwordCheckMessageError, setPasswordCheckMessageError] = useState<boolean>(false);
    const [telNumberMessageError, setTelNumberMessageError] = useState<boolean>(false);
    const [authNumberMessageError, setAuthNumberMessageError] = useState<boolean>(false);

    const [isCheckedId, setCheckedId] = useState<boolean>(false);
    const [isMatchedPassword, setMatchedPassword] = useState<boolean>(false);
    const [isCheckedPassword, setCheckedPassword] = useState<boolean>(false);
    const [isSend, setSend] = useState<boolean>(false);
    const [isCheckedAuthNumber, setCheckedAuthNumber] = useState<boolean>(false);

    const isComplete = name && id && isCheckedId && password && passwordCheck && isCheckedPassword && telNumber && isSend && authNumber && isCheckedAuthNumber;

    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
    };
    
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setCheckedId(false);
        setIdMessage('');       // 중복 확인 완료 후 아이디 수정하면 중복 확인 문구 사라지게 하기
    };
    
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);

        const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
        const isMatched = pattern.test(value);

        const message = (isMatched || !value) ? '' : '영문, 숫자를 혼용하여 8 - 13자 입력해주세요';
        setPasswordMessage(message);
        setPasswordMessageError(!isMatched);
        setMatchedPassword(isMatched);
    };
    
    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
    };
    
    const onTelNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTelNumber(value);
        setSend(false);
        setTelNumberMessage('');
    };
    
    const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAuthNumber(value);
        setCheckedAuthNumber(false);
        setAuthNumberMessage('');
    }
    
    const onIdCheckClickHandler = () => {
        if (!id) return;        // 공백일 때는 alert 안 띄우기

        const isDuplicated = id === 'qwer1234';
        const message = isDuplicated ? '이미 사용 중인 아이디입니다.' : '사용 가능한 아이디입니다.';
        setIdMessage(message);
        setIdMessageError(isDuplicated);
        setCheckedId(!isDuplicated);
    }
    
    const onTelNumberSandClickHandler = () => {
        if (!telNumber) return;        // 공백일 때는 안 띄우기

        const pattern = /^[0-9]{11}$/;
        const isMatched = pattern.test(telNumber);

        if(!isMatched) {
            setTelNumberMessage('숫자 11자 입력해주세요.');
            setTelNumberMessageError(true);
            return;
        }

        setTelNumberMessage('인증번호가 전송되었습니다.');
        setTelNumberMessageError(false);
        setSend(true);
    }
    
    const onAuthNumberCheckClickHandler = () => {
        if (!authNumber) return;        // 공백일 때는 안 띄우기

        const isMatched = authNumber === 'Q1W2';
        const message = isMatched ? '인증번호가 확인되었습니다.' : '인증번호가 일치하지 않습니다.';
        setAuthNumberMessage(message);
        setAuthNumberMessageError(!isMatched);
        setCheckedAuthNumber(isMatched);
    }

    const onSignupButtonHandler = () => {
        if (!isComplete) return;
        
        alert('회원가입!');
    };

    useEffect(() => {
        if (!password || !passwordCheck) return;      // password가 존재하지 않으면 아래 작업을 수행하지 않고 종료

        const isEqual = password === passwordCheck;
        const message = isEqual ? '' : '비밀번호가 일치하지 않습니다.';
        setPasswordCheckMessage(message);
        setPasswordCheckMessageError(isEqual);
        setCheckedPassword(isEqual);
    }, [password, passwordCheck]);

    return (
        <div id="auth-wrapper">
            <div className="auth-image"></div>
            <div className="auth-container">
                <div style={{ gap: '16px' }} className="auth-box">
                    <div className="title-box">
                        <div className="title">시니케어</div>
                        <div className="logo"></div>
                    </div>
                    <div className="sns-container">
                        <div className="title">SNS 회원가입</div>
                        <div className="sns-button-container">
                            <div className="sns-button md kakao"></div>
                            <div className="sns-button md naver"></div>
                        </div>
                    </div>
                    <div style={{ width: '64px' }} className="divider"></div>

                    <div className="input-container">
                        <InputBox messageError={nameMessageError} message={nameMessage} value={name} label='이름' type='text'placeholder='이름을 입력해주세요.' onChange={onNameChangeHandler} />
                        <InputBox messageError={idMessageError} message={idMessage} value={id} label='아이디' type='text'placeholder='아이디를 입력해주세요.' buttonName='중복 확인' onChange={onIdChangeHandler} onButtonClick={onIdCheckClickHandler} />
                        <InputBox messageError={passwordMessageError} message={passwordMessage} value={password} label='비밀번호' type='text'placeholder='비밀번호를 입력해주세요.' onChange={onPasswordChangeHandler} />
                        <InputBox messageError={passwordCheckMessageError} message={passwordCheckMessage} value={passwordCheck} label='비밀번호 확인' type='password'placeholder='비밀번호를 입력해주세요.' onChange={onPasswordCheckChangeHandler} />
                        <InputBox messageError={telNumberMessageError} message={telNumberMessage} value={telNumber} label='전화번호' type='text'placeholder='-빼고 입력해주세요.' buttonName='전화번호 인증' onChange={onTelNumberChangeHandler} onButtonClick={onTelNumberSandClickHandler} />
                        {isSend &&      //isSend가 true이면 중괄호 안 코드 실행
                        <InputBox messageError={authNumberMessageError} message={authNumberMessage} value={authNumber} label='인증번호' type='text'placeholder='인증번호 4자리를 입력해주세요.' buttonName='인증 확인' onChange={onAuthNumberChangeHandler} onButtonClick={onAuthNumberCheckClickHandler} />
                        }
                    </div>

                    <div className="button-container">
                        <div id="sign-up-button" className={`button ${isComplete ? 'primary' : 'disable'} full-width`} onClick={onSignupButtonHandler}>회원가입</div>
                        <div className="link">로그인</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
