
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

// 마틴 파울러의 방법
// 게터가 데이터의 복제본을 반환하도록 수정
// 단점 : 원본 데이터를 변경하고자 할 때 사용할 수 없음
export function getDefaultOwner() { return Object.assign({}, defaultOwner); }
export function setDefaultOwner(arg) { defaultOwner = arg; }

