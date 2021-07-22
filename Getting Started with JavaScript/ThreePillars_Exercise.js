class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  // TODO: define methods `addFavoriteBook(..)` and `printFavoriteBooks()`

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`We Have ${String(this.favoriteBooks.length)} Favorite Books:`); // i use String just because the exercise ask me, isn't obligatoire here!
    var i = 1;
    for (let bookName of this.favoriteBooks) {
      console.log(i, " - ", bookName);
      i++;
    }
  }
}

function loadBooks(books) {
  // TODO: call fakeAjax( .. );
  fakeAjax(BOOK_API, function gencb(bookNames) {
    //gencb function to generate customers books (cb) , booknames is the list of all books
    for (let bookName of bookNames) {
      books.addFavoriteBook(bookName);
    }
    books.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api"; // a fake link (randomn) to use like a url for fakeAjax function predefined in the exercise.
var myBooks = new Bookshelf();
loadBooks(myBooks);

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
