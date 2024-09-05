// variable: 상대 경로 상수 //
export const ROOT_PATH = '/';
export const AUTH_PATH = '/auth';
export const CS_PATH = '/cs';
export const CS_WRTIE_PATH = 'write';
export const CS_DETAIL_PATH = (customNumber: string | number) => customNumber;     // string 또는 number 타입을 받아서 customNumber 반환하도록 함수로 작성
export const CS_UPDATE_PATH = (customNumber: string | number) => `${customNumber}/update`;     // string 또는 number를 받아서 customNumber 반환하도록 함수로 작성

export const MM_PATH = '/mm';
export const HR_PATH = '/hr';
export const HR_DETAIL_PATH = (userId: string) => userId;   // 무조건 string 타입으로 받기
export const HR_UPDATE_PATH = (userId: string) => `${userId}/update`;
export const OTHERS_PATH = '*';

// variable: 절대 경로 상수 //