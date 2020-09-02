let defaultOwner = { firstName : "마틴", lastName : "파울러" };

// 참조하는 부분의 코드를 게터, 세터 함수로 치환
// spaceship.owner = defaultOwner;
spaceship.owner = getDefaultOwner();

// defaultOwner = { firstName: "레베카", lastName : "파슨스" };
setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

function getDefaultOwner() { return defaultOwner; }
function setDefaultOwner(arg) { defaultOwner = arg; }


