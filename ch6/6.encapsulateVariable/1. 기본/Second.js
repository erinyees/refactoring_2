let defaultOwner = { firstName : "마틴", lastName : "파울러" };

spaceship.owner = defaultOwner;

defaultOwner = { firstName: "레베카", lastName : "파슨스" };

// 기본적인 캡슐화 : 데이터를 읽고 쓰는 함수 정의
function getDefaultOwner() { return defaultOwner; }
function setDefaultOwner(arg) { defaultOwner = arg; }
