
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

export function getDefaultOwner() { return defaultOwner; }
export function setDefaultOwner(arg) { defaultOwner = arg; }


// 위의 구조로 코드를 캡슐화하면 접근이나 구조 자체를 다시 대입하는 행위는 제어 가능
// 필드 값을 변경하는 일은 제어할 수 없다


