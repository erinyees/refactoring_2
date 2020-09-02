// 다른 파일에 있는걸 불러오려면 
const { customerData1, customerData2 } = require('../Common');
const { Book } = require('./Fourth');
const chai = require('chai');

var assert = require('assert');
describe('ch6-5', function() {
	let book;
	beforeEach(function() {
		book = new Book(customerData1());
	});
	
	it('어서션 테스트 1 - 매개변수 없는 함수', function() {
		chai.expect(book._reservations).to.eql(["MA", "CT", "ME", "VT", "NH", "RI"]);
	});
	
	it('어서션 테스트 2 - 이상한 매개변수를 넣는 함수', function() {
		book.zz_addReservation(customerData2(), 'a');
		chai.expect(book._reservations).to.eql(["MA", "CT", "ME", "VT", "NH", "RI", "YC"]);
	});
	
	it('어서션 테스트 3 - 매개변수 true', function() {
		book.zz_addReservation(customerData2(), true);
		chai.expect(book._reservations).to.eql(["MA", "CT", "ME", "VT", "NH", "RI", "YC"]);
	});
	
	it('어서션 테스트 4 - 매개변수 false', function() {
		book.zz_addReservation(customerData2(), false);
		chai.expect(book._reservations).to.eql(["MA", "CT", "ME", "VT", "NH", "RI", "YC"]);
	});
});
// https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
