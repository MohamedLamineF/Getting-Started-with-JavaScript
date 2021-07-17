/* Exercise:
This is an exercise to practice basic programming principles.
1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.
3. Define a `printFavoriteBooks()` function that receives no parameters.
4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.
5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.
	Make sure to then call the `printFavoriteBooks()` function at the end of the program.
*/

// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName){
// i don't like this function , i prefer to use addFavoriteBook(array, bookName)
    if (!(bookName.includes("Great"))){
        favoriteBooks.push(bookName);
    }
};

// TODO: define printFavoriteBooks() function
function printFavoriteBooks(){
    i=1; // just counter to display book number.
    console.log("\nI have",favoriteBooks.length,"Favorite(s) book(s) :");
    for (let book of favoriteBooks){
        console.log(i,"-",book);
        i++;
    }
}

var favoriteBooks = [];
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
