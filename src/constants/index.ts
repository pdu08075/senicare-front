// variable: 상대 경로 상수 //
export const ROOT_PATH = '/';

export const AUTH_PATH = '/auth';
export const CS_PATH = '/cs';
export const CS_WRTIE_PATH = 'write';
export const CS_DETAIL_PATH = (customNumber: string | number) => `${customNumber}`;     // string 또는 number 타입을 받아서 customNumber 반환하도록 함수로 작성
export const CS_UPDATE_PATH = (customNumber: string | number) => `${customNumber}/update`;     // string 또는 number를 받아서 customNumber 반환하도록 함수로 작성

export const MM_PATH = '/mm';

export const HR_PATH = '/hr';
export const HR_DETAIL_PATH = (userId: string) => `${userId}`;   // 무조건 string 타입으로 받기
export const OTHERS_PATH = '*';

// variable: 절대 경로 상수 //export const ROOT_PATH = '/';
export const ROOT_ABSOLUTE_PATH = ROOT_PATH;

export const AUTH_ABSOLUTE_PATH = AUTH_PATH;

export const CS_ABSOLUTE_PATH = CS_PATH;
export const CS_WRTIE_ABSOLUTE_PATH = `${CS_PATH}/${CS_WRTIE_PATH}`;
export const CS_DETAIL_ABSOLUTE_PATH = (customNumber: string | number) => `${CS_PATH}/${CS_DETAIL_PATH(customNumber)}`;
export const CS_UPDATE_ABSOLUTE_PATH = (customNumber: string | number) => `${CS_PATH}/${CS_UPDATE_PATH(customNumber)}`;

export const MM_ABSOLUTE_PATH = MM_PATH;

export const HR_ABSOLUTE_PATH = HR_PATH;
export const HR_DETAIL_ABSOLUTE_PATH = (userId: string) => `${HR_PATH}/${HR_DETAIL_PATH(userId)}`;   // 무조건 string 타입으로 받기
export const OTHERS_ABSOLUTE_PATH = '*';

// variable: HTTP BEARER TOKEN COOKIE NAME //
export const ACCESS_TOKEN = 'accessToken';