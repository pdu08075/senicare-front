import dayjs from "dayjs";

// function: YYMMDD 형태의 생년월일로 만 나이 구하기 함수 // 
export const calculateAge = (birthString: string) => {
    const yearString = birthString.substring(0, 2);
    const monthString = birthString.substring(2,4);
    const dayString = birthString.substring(4,6);

    const birth = dayjs(`19${yearString}-${monthString}-${dayString}`);
    const today = dayjs();

    let age = today.year() - birth.year();
    if(today.isBefore(birth.add(age, 'year'))) age--;                // 만약 오늘이 생일 이전이라 만 나이를 한 살 더 먹지 않았을 연산

    return age;
};