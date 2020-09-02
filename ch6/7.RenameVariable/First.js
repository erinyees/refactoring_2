// 코드베이스 전체에서 참조할 수 있는 변수
let tpHd = "untitled";

// 값을 읽기만 하는 변수
result += '<h1>${tpHd}</h1>';

// 값을 수정하는 변수
tpHd = obj['articleTitle'];

// 위의 상황과 같을 때는 '변수 캡슐화하기'로 처리한다
result += '<h1>${title()}</h1>';

setTitle(obj['articleTitle']);

// tpHd 변수의 게터
function title() { return tpHd; }

// tpHd 변수의 세터
function setTitle(arg) { tpHd = arg; }
