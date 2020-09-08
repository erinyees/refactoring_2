const organization = new Organization({name: "애크리 구스베리", country: "GB"});
// 임시 함수를 제거한다.
// function getRawDataOfOrganization() { return organization._data; }
function getOrganization() { return organization; }

// _data의 필드들을 객체 안에 바로 펼쳐놓는다.
class Organization {
	constructor(data) {
		this._name = data.name;
		this._country = data.country;
	}
	get name() { return this._name; }
	set name(aString) { this._name = aString; }
	get country() { return this._country; }
	set country(aCountryCode) { this._country = aCountryCode; }
} 