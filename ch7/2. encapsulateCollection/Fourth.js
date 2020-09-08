// 클라이언트가 수업을 하나씩 추가하고 제거하는 메서드 추가
class Person {
	constructor(name) {
		this._name = name;
		this._courses = [];
	}
	get name() { return this._name; }
	get courses() { return this._courses; }
	set courses(aList) { this._courses = alist; }
	
	addCourse(aCourse) {
		this._courses.push(aCourse);
	}
	
	removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
		const index = this._courses.indexOf(aCourse);
		if (index === -1) fnIfAbsent();
		else this._courses.splice(index, 1);
	}
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

/*
const basicCourseNames = readBasicCourseNames(filename);
aPerson courses = basicCourseNames.map(name => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
	aPerson.courses.push(new Course(name, false));
}
*/ 