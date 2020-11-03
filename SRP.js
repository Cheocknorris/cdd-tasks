// Apply Single responsibility principle to the following classes. 

// class Book {
//     getTitle() {
//         return "an awesome book";
//     }
//     getAuthor() {
//         return "awesome author";
//     }
//     turnPage() {
//         console.log('turning page')
//     }
//     getCurrentPage() {
//         return "current page content";
//     }
//     printCurrentPage() {
//         console.log("current page content");
//     }
//     save() {
//         console.log("saving book progress");
//     }
// } 

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
   
    getTitle() {
        return this.title;
    }
    
    getAuthor() {
        return this.author;
    }

    getPage(page) {
        if (!page) throw new Error('Error');
        
        return page;
    }
}

class BookReader {
    printPage(book, currentPage) {
        console.log(book.getPage(currentPage));
    } 

    turnPage(book, currentPage) {
        console.log(book.getPage(currentPage + 1));
    }

    save() {
        console.log(`you are currently in page ${currentPage} of ${book}`);
    }
}

// class Person {
//     constructor(name, surname, email) {
//         this.name = name;
//         this.surname = surname;
//         if (this.validateEmail(email)) {
//             this.email = email;
//         } else {
//             throw new Error("Invalid email!");
//         }
//     }
//     validateEmail(email) {
//       // validate Email here
//         return true;
//     }
//     greet() {
//         console.log("Hi! My name is " + this.name);
//     }
// }
 
class EmailValidator {
    validateEmail(email) {
        // validate Email here
        return true;
    }
}

const emailValidator = new EmailValidator;

class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        if (emailValidator.validateEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }

    greet() {
        console.log("Hi! My name is " + this.name);
    }
}

