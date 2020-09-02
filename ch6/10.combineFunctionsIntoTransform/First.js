// 측정값(reading)
reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// 클라이언트1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
	return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/////////////////////////////////////////////////////////////////////////////

// 1. 객체를 그대로 복사해 반환하는 변환 함수를 만든다.

function enrichReading(original) {
	const result = _.cloneDeep(original);	// lodash 라이브러리를 사용해야 한다.
	return result;
}

// 2. 변경하려는 계산 로직 중 하나를 고른다.
// 계산 로직에 측정값을 전달하기 전에 부가 정보를 덧붙이도록 수정
// 클라이언트3
const rawReading = acquireReading();	// 미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// calculateBaseCharge()를 부가 정보를 덧붙이는 코드 근처로 옮긴다(8.1장 함수 옮기기)
function enrichReading(original) {
	const result = _.cloneDeep(original);
	result.baseCharge = calculateBaseCharge(result);	// 미가공 측정값에 기본 소비량을 부가 정보로 덧붙임
	return result;
};

// 함수 대신 필드를 사용하도록 수정
// 클라이언트3
const rawReading = acquireReading();	// 미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

/////////////////////////////////////////////////////////////////////////////

// 3. 클라이언트1도 이 필드를 사용하도록 수정
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

/////////////////////////////////////////////////////////////////////////////

// 4
// 클라이언트2
// 변환함수(enrichReading)를 끼워넣는다.
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 기본요금을 계산하는 부분을 앞에서 만든 부분으로 끼워 넣는다.
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 위의 코드가 문제가 없다면 변수를 인라인한수
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

// 위의 코드가 문제가 없다면 계산 코드를 변환 함수로 옮긴다.
function enrichReading(original) {
	const result = _.cloneDeep(original);
	result.baseCharge = calculateBaseCharge(result);
	result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));;
	return result;
};

// 새로 만든 필드를 사용하도록 원본 코드를 수정한다.
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;
