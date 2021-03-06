<<<<<<< HEAD
class Attribute {
    constructor(name, value) {
        this.name = name 
        this.value = value;        
    }
}
Object.assign(Attribute.prototype, {
    BOOK_ID: 'BOOK_ID', 
    NAME: 'BOOK_NAME'
});

console.log(Attribute);
=======
// REVIEW COMMENT
// boot attributes need to be extandable without modifying the book class
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe

class Book {
    constructor(bookId, title, author, status, isEbook) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.status = status;
        this.isEbook = isEbook;

        this.attributes = [];
    }

<<<<<<< HEAD
    addAttribute(attribute) {
        this.attributes.push(attribute);
    }
=======
    // REVIEW COMMENT
    // these both functions can be combined to one function call
    // setStatus(STATUS_AS_ENUM)
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe
    markAsIssued(name) {
        this.status = 'issued to ' + name;
    }

    markAsAvailable() {
        this.status = 'available';
    }
}



class BookShelf {
    constructor(bookShelfId, size) {
        this.bookShelfId = bookShelfId;
        this.size = size;
        this.storage = new Set();
    }

    isEmpty() {
        return this.storage.size === 0;
    }

    isFull() {
        return this.storage.size === this.size;
    }

    addBook(book) {
        if (this.isFull()) return false;
        this.storage.add(book);
        return true;
    }

    searchByTitle(title) {
        if (typeof title !== 'string') throw new Error('Invalid input')
        if (this.isEmpty()) return false;

        const shelfCopy = [...this.storage];

        for (let i = 0; i < shelfCopy.length; i++) {
            if (shelfCopy[i].title === title) return shelfCopy[i];
        }

        return false;
    }

    locateInShelf(title) {
        if (typeof title !== 'string') throw new Error('Invalid input')

        if (this.isEmpty()) return false;

        const shelfCopy = [...this.storage];

        for (let i = 0; i < shelfCopy.length; i++) {
            if (shelfCopy[i].title === title) {
                let result = {
                    book: shelfCopy[i],
                    index: i
                }
                return result;
            }
        }
        return false;
    }
}

class Library {
    constructor() {
        this.shelves = [];
        this.users = new Set();
    }

    addUser(user) {
        this.users.add(user);
        return true;
    }

    isEmpty() {
        return this.shelves.length === 0;
    }
    // REVIEW COMMENT
    // too long function
    addBook(book) {

        // REVIEW COMMENT
        // all three if else conditions can be combined with if else 
        if (this.isEmpty()) {
            this.#createShelfAndAddBook(book);
            return true;
        }

        let currentBookShelf = this.shelves[this.shelves.length - 1];

        if (!this.isEmpty() && !currentBookShelf.isFull()) {
            currentBookShelf.addBook(book);
            return true;
        }

<<<<<<< HEAD
        if (!this.isEmpty()
        && currentBookShelf.isFull()) {
            this.#createShelfAndAddBook(book);
            // let bookShelfId = this.shelves.length + 1;
            // let newBookShelf = new BookShelf(bookShelfId, 5);
            // newBookShelf.addBook(book);
            // this.shelves = [...this.shelves, newBookShelf];
            // return true;
        }
    }

   
=======
        if (!this.isEmpty() && currentBookShelf.isFull()) {
            let bookShelfId = this.shelves.length + 1;
            let newBookShelf = new BookShelf(bookShelfId, 5);
            newBookShelf.addBook(book);
            this.shelves = [...this.shelves, newBookShelf];
            return true;
        }
    }

    // REVIEW COMMENT
    // catching error is good but the function need to throw the error in the catch block
    // so that the caller can be informed about the error. otherwise, in case of book not found
    // the function returns undefined. 
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe
    searchByTitle(title) {
        try {
            for (let i = 0; i < this.shelves.length; i++) {
                if (this.shelves[i].searchByTitle(title)) {
                    return this.shelves[i].searchByTitle(title);
                }
            }
<<<<<<< HEAD
            throw new Error('Book not found: ' + title);
        } catch(e) {
            console.log(e);
            throw e;
=======
            throw new Error('Book not found');
        } catch (e) {
            console.log(e)
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe
        }
    }

    locateInShelf(title) {
        for (let i = 0; i < this.shelves.length; i++) {
            if (this.shelves[i].locateInShelf(title)) {
                let result = {
                    shelf: i + 1,
                    index: this.shelves[i].locateInShelf(title).index,
                    book: this.shelves[i].locateInShelf(title).book,
                }
                return result;
            }
        }

        throw new Error('Book not found');
    }
    #createShelfAndAddBook() {
        let bookShelfId = this.shelves.length + 1;
            let newBookShelf = new BookShelf(bookShelfId, 5);
            newBookShelf.addBook(book);
            this.shelves = [newBookShelf];
    }
}

<<<<<<< HEAD

issueBook(user, book) {
    user.issueBook(book);
    book.markAsIssued(user.getName());
}
=======
// REVIEW COMMENT
// the information about if a book is issue to a user or not, should be maintained 
// in the book status. 
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe
class User {
    constructor(userId, name) {
        this.userId = userId;
        this.name = name;
        this.booksBorrowed = new Set();
    }
    issueBook(title) {
        try {
            if (library.searchByTitle(title)
                && library.searchByTitle(title).status === 'available') {
                this.booksBorrowed.add(library.searchByTitle(title));
                library.searchByTitle(title).markAsIssued(this.name);
            }
        } catch (e) {
            console.log(e);
        }
    }

    returnBook(title) {
        if (library.searchByTitle(title)) {
            this.booksBorrowed.delete(library.searchByTitle(title));
            library.searchByTitle(title).markAsAvailable();
        }
    }

}

<<<<<<< HEAD


class ClientApp {
    run() {
        
        const library = new Library();
        const bookOne = new Book(1, 'Book One', 'Author One', 'available', true);
        const bookTwo = new Book(2, 'Book Two', 'Author Two', 'available', false);
        const bookThree = new Book(3, 'Book Three', 'Author Three', 'available', true);
        const bookFour = new Book(4, 'Book Four', 'Author Four', 'available', true);
        const bookFive = new Book(5, 'Book Five', 'Author Five', 'reference', true);
        const bookSix = new Book(6, 'Book Six', 'Author Six', 'available', true);
        const bookSeven = new Book(7, 'Book Seven', 'Author Seven', 'reference', true);
        const bookEight = new Book(8, 'Book Eight', 'Author Eight', 'available', true);
        const bookNine = new Book(9, 'Book Nine', 'Author Nine', 'available', true);
        const bookTen = new Book(10, 'Book Ten', 'Author Ten', 'available', true);
        const bookEleven = new Book(11, 'Book Eleven', 'Author Eleven', 'available', true);
        const bookTwelve = new Book(12, 'Book Twelve', 'Author Twelve', 'available', true);
        ui.showDialog('Book not found');
    }
    test() {
        console.log(library.addBook(bookOne), true);
        console.log(library.addBook(bookTwo), true);
        console.log(library.addBook(bookThree), true);
        console.log(library.addBook(bookFour), true);
        console.log(library.addBook(bookFive), true);
        console.log(library.addBook(bookSix), true);
        console.log(library.addBook(bookSeven), true);
        console.log(library.addBook(bookEight), true);
        console.log(library.addBook(bookNine), true);
        console.log(library.addBook(bookTen), true);
        console.log(library.addBook(bookEleven), true);
        console.log(library.addBook(bookTwelve), true);
        console.log(library.locateInShelf('Book One'));
        console.log(library.searchByTitle('Book One'));
    }
}

=======
// REVIEW COMMENT
// wrap this code in a function called test(){} inside a class called Client 
// and run the test function of the client class 
const bookOne = new Book(1, 'Book One', 'Author One', 'available', true);
const bookTwo = new Book(2, 'Book Two', 'Author Two', 'available', false);
const bookThree = new Book(3, 'Book Three', 'Author Three', 'available', true);
const bookFour = new Book(4, 'Book Four', 'Author Four', 'available', true);
const bookFive = new Book(5, 'Book Five', 'Author Five', 'reference', true);
const bookSix = new Book(6, 'Book Six', 'Author Six', 'available', true);
const bookSeven = new Book(7, 'Book Seven', 'Author Seven', 'reference', true);
const bookEight = new Book(8, 'Book Eight', 'Author Eight', 'available', true);
const bookNine = new Book(9, 'Book Nine', 'Author Nine', 'available', true);
const bookTen = new Book(10, 'Book Ten', 'Author Ten', 'available', true);
const bookEleven = new Book(11, 'Book Eleven', 'Author Eleven', 'available', true);
const bookTwelve = new Book(12, 'Book Twelve', 'Author Twelve', 'available', true);


const library = new Library();

console.log(library.addBook(bookOne), true);
console.log(library.addBook(bookTwo), true);
console.log(library.addBook(bookThree), true);
console.log(library.addBook(bookFour), true);
console.log(library.addBook(bookFive), true);
console.log(library.addBook(bookSix), true);
console.log(library.addBook(bookSeven), true);
console.log(library.addBook(bookEight), true);
console.log(library.addBook(bookNine), true);
console.log(library.addBook(bookTen), true);
console.log(library.addBook(bookEleven), true);
console.log(library.addBook(bookTwelve), true);
console.log(library.locateInShelf('Book One'));
console.log(library.searchByTitle('Book One'));
>>>>>>> ff5f9f6559b2806e4d8fa351922d867615d1eebe

const userOne = new User(1, 'User One');
console.log(library.addUser(userOne), true);
userOne.issueBook('Book One');
userOne.issueBook('Book Twelve');
userOne.returnBook('Book One');
console.log(userOne);
console.log(library.searchByTitle('Book One'));
console.log(library);