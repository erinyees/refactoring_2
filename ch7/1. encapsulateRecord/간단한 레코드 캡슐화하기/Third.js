const organization = new Organization({name: "애크리 구스베리", country: "GB"});
function getRawDataOfOrganization() { return organization._data; }
function getOrganization() { return organization; }

// Organization 클래스
class Organization {
	constructor(data) {
		this._data = data;
	}
	set name(aString) { this._data.name = aString; }
	get name() { return this._data.name; }
}


////////////////////////////////////////////////
// 클라이언트
// 레코드를 갱신하던 부분을 모두 세터를 사용하도록 고친다.
getOrganization().name = newName;

// 레코드를 읽는 부분을 모두 게터를 사용하도록 고친다.
result += '<h1>${getOrganization().name}</h1>'; 