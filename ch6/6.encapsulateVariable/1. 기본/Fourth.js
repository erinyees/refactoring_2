let defaultOwner = { firstName : "마틴", lastName : "파울러" };

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

// 가시 범위를 제한해서 다른 코드에서 변수 defaultOwner에 직접 접근하지 못하게 막는다
export function getDefaultOwner() { return defaultOwner; }
export function setDefaultOwner(arg) { defaultOwner = arg; }



