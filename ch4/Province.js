// 지역(Province)
class Province {
	constructor(doc) {
		this._name = doc.name;
		this._producers = [];
		this._totalProduction = 0;
		this._demand = doc.demand;	// 수요
		this._price = doc.price;	// 가격
		doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
	}

	addProducer(arg) {
		this._producers.push(arg);
		this._totalProduction += arg.production;
	}
	
	get name() { return this._name; }
	get producers() { return this._producers.slice(); }
	get totalProduction() { return this._totalProduction; }
	set totalProduction(arg) { this._totalProduction = arg; }
	get demand() { return this._demand; }
	set demand(arg) { this._demand = parseInt(arg); } // 숫자로 파싱해서 저장
	get price() { return this._price; }
	set price(arg) { this._price = parseInt(arg); } // 숫자로 파싱해서 저장
	
	// 생산 부족분
	get shortfall() {
		// return this._demand - this.totalProduction * 2;		// 테스트 실패를 만들기 위한 오류 주입
		return this._demand - this.totalProduction;
	}
	
	// 총 수익
	get profit() {
		return this.demandValue - this.demandCost;
	}
	
	// 판매가능한 만큼의 가격
	get demandValue() {
		return this.satisfiedDemand * this.price;
	}
	
	// 판매량 계산 -> 필요량과 총생산량 중 적은 값
	get satisfiedDemand() {
		return Math.min(this._demand, this.totalProduction);
	}
	
	// 
	get demandCost() {
		let remainingDemand = this.demand;
		let result = 0;
		this.producers
			.sort((a,b) => a.cost - b.cost)	// 생산량이 적은것부터 오름차순으로 정렬
			.forEach((p) => {
				const contribution = Math.min(remainingDemand, p.production);
				remainingDemand -= contribution;
				result += contribution * p.cost;
		});
		return result;
	}
}

// 생산자(Producer)
class Producer {
	constructor(aProvince, data) {
		this._province = aProvince;
		this._cost = data.cost;
		this._name = data.name;
		this._production = data.production || 0;
	}
	get name() { return this._name; }
	get cost() { return this._cost; }
	set cost(arg) { this._cost = parseInt(arg); }
	
	get production() { return this._production; }
	set production(amountStr) {
		const amount = parseInt(amountStr);
		const newProduction = Number.isNaN(amount) ? 0 : amount;
		this._province._totalProduction += newProduction - this._production;
		this._production = newProduction;
	}
}

// 샘플 데이터
function sampleProvinceData() {
	return {
		name: "Asia",
		producers: [
			{name: "Byzantium", cost: 10, production: 9},
			{name: "Attalia", cost: 12, production: 10},
			{name: "Sinope", cost: 10, production: 6}
		],
		demand: 30,
		price: 20
	}; 
}

module.exports = { Province, sampleProvinceData };