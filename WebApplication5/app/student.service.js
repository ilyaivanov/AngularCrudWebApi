function Student($resource) {
    return $resource('api/students/:Id', { Id: "@Id" },
    { update: { method: 'PUT' } });
}

angular.module("app")
    .factory("Student", Student);