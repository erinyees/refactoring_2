// 온도 측정값 배열
const station = {
	name : "ZB1",
	readings : [
		{ temp : 47, time : "2016-11-10 09:10" },
		{ temp : 53, time : "2016-11-10 09:20" },
		{ temp : 58, time : "2016-11-10 09:30" },
		{ temp : 53, time : "2016-11-10 09:40" },
		{ temp : 51, time : "2016-11-10 09:50" },
	]
};

// 정상 범위를 벗어난 측정값을 찾는 함수
function readingsOutsideRange(station, min, max) {
	return station.readings.filter(r => r.temp < min || r.temp > max);
}

// 호출문
alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

// 범위 개념은 객체 하나로 묶어 표현한다
class NumberRange {
	constructor(min, max) {
		this._data = {min : min, max : max};
	}
	get min() { return this._data.min; }
	get max() { return this._data.max; }
}
