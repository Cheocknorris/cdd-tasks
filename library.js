class Book {
    constructor(bookId, title, author, status, availableAsEbook) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.status = status;
        this.availableAsEbook = availableAsEbook;
    }

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
        this.users = [];
    }

    isEmpty() {
        return this.shelves.length === 0;
    }

    addBook(book) {
        if (this.isEmpty()) {
            let bookShelfId = this.shelves.length + 1;
            let newBookShelf = new BookShelf(bookShelfId, 5);
            newBookShelf.addBook(book);
            this.shelves = [newBookShelf];
            return true;
        } 

        let currentBookShelf = this.shelves[this.shelves.length - 1];
        if (!this.isEmpty() 
        && !currentBookShelf.isFull()) {
            currentBookShelf.addBook(book);
            return true;
        }

        if (!this.isEmpty()
        && currentBookShelf.isFull()) {
            let bookShelfId = this.shelves.length + 1;
            let newBookShelf = new BookShelf(bookShelfId, 5);
            newBookShelf.addBook(book);
            this.shelves = [...this.shelves, newBookShelf];
            return true;
        }
    }

    searchByTitle(title) {
        try {
            for (let i = 0; i < this.shelves.length; i++) {
                if (this.shelves[i].searchByTitle(title)) {
                    return this.shelves[i].searchByTitle(title);
                } 
            }
            throw new Error('Book not found');
        } catch(e) {
            console.log(e)
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
}


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
        } catch(e) {
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

const userOne = new User(1, 'User One');
userOne.issueBook('Book One');
userOne.issueBook('Book Twelve');
userOne.returnBook('Book One');
console.log(userOne);
console.log(library.searchByTitle('Book One'));