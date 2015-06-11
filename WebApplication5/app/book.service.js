function Book($resource) {
    return $resource('api/books/:Id', { Id: "@Id" }, { update: { method: 'PUT' } });
}

angular
    .module("app")
    .factory("Book", Book)