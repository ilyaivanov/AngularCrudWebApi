function StudentsController($scope, Student, $log) {
	var vm = this;
	vm.students = [];


	Student.query().$promise.then(function (students) {
		$log.log("students");
		$scope.f.studentsLoaded = true;
		vm.students = students;
	});

	vm.create = function () {
		var student = new Student();
		student.Name = "Name";
		student.Age = 66;
		vm.students.push(student);
		student.$save(function (s) {
			student.Id = s.Id;
		});
	}

	vm.update = function (student) {
		Student.update({ id: student.Id }, student);
	}
}

angular.module("app")
    .controller("StudentsController", StudentsController)