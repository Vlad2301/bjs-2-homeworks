class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }


    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }


    findBookBy(type, value) {
        let index = this.books.findIndex((currentBook) => {
            return currentBook[type] === value;
        });

        return index !== -1 ? this.books[index] : null;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.name === bookName;
        });

        if (index !== -1) {
            let foundBook = this.books[index];
            this.books.splice(index, 1);
            return foundBook;
        } else {
            return null;

        }
    }
}


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (this.marks.hasOwnProperty(subject)) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [];
                this.marks[subject].push(mark);
            }
        } else {
            return;
        }
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject)) {
            return this.marks[subject].reduce((accumulator, currentMark) => {
                return accumulator + currentMark / this.marks[subject].length;
            }, 0);
        } else {
            return 0;
        }
    }

    getAverage() {
        const props = Object.keys(this.marks);
        return props.reduce((accumulator, currentProp) => {
            return accumulator + this.getAverageBySubject(currentProp) / props.length;
        }, 0);
    }
}


const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
