class Person {
	constructor(name) {
		this._name = name;
		this._courses = [];
	}
	get name() { return this._name; }
	get courses() { return this._courses; }
	set courses(aList) { this._courses = alist; }
}

class Course {
	constructor(name, isAdvanced) {
		this._name = name;
		this._isAdvanced = isAdvanced;
	}
	get name() { return this._name; }
	get isAdvanced() { return this._isAdvanced; }
}

numAdvancedCourses = aPerson.courses
						.filter(c => isAdvanced)
						.length;

// 위의 코드는 세터를 이용해 수업 컬렉션을 통째로 설정한 클라이언트는 누구나 이 컬렉션을 마음대로 수정할 수 있다.
const basicCourseNames = readBasicCourseNames(filename);
aPerson courses = basicCourseNames.map(name => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
	aPerson.courses.push(new Course(name, false));
}

// 위의 형태로 목록을 갱신하면 Person 클래스가 컬렉션을 제어할 수 없어서 캡슐화가 깨진다.
// 필드를 참조하는 과정만 캡슐화가 되고, 필드에 담긴 내용은 캡슐화가 되지 않았기 때문이다. 