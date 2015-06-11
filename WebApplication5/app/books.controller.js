
function BooksController($scope, Book, $log) {
    var vm = this;
    vm.books = [];

    Book.query(function (books) {
        $log.log("books");
        $scope.f.booksLoaded = true;
        vm.books = books;
    });

    vm.create = function () {
        var book = new Book();
        book.Name = "my book";
        book.Author = "my author";
        vm.books.push(book);
        book.$save(function (returnedBook) {
            book.Id = returnedBook.Id;
        });
    }

    vm.update = function (book) {
        Book.update({ id: book.Id }, book);
    }
}

angular.module("app")
    .controller("BooksController", BooksController)