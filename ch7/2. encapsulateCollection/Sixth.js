class Person {
	constructor(name) {
		this._name = name;
		this._courses = [];
	}
	get name() { return this._name; }
	get courses() { return this._courses; }
	
	// 개별 원소를 추가하고 제거하는 메서드를 제공하므로 setCourses()를 쓸 필요가 없으므로 세터를 제거한다.
	// set courses(aList) { this._courses = alist; }
	
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
 

/*
const basicCourseNames = readBasicCourseNames(filename);
aPerson courses = basicCourseNames.map(name => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
	aPerson.courses.push(new Course(name, false));
}

numAdvancedCourses = aPerson.courses
						.filter(c => isAdvanced)
						.length;
*/

for (const name of readBasicCourseNames(filename)) {
	aPerson.addCourse(new Course(name, false));
}


