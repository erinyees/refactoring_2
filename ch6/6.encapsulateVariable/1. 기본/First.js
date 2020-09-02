// 상황 : 전역 변수에 중요한 데이터가 있는 경우
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

// 참조하는 코드
spaceship.owner = defaultOwner;

// 갱신하는 코드
defaultOwner = { firstName: "레베카", lastName : "파슨스" };


