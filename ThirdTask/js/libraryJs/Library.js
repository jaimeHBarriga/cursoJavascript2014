/**
 * Created by Jaime on 7/25/2014.
 */

var Librarian = function(name ,lastName) {
    this.workerId = Math.floor(Math.random()*1000);
    this.name = name;
    this.lastName = lastName;
    this.loans = [];

    this.lendingBook = function(readerID ,bookTitle) {
        loans.push(new Loan(readerID,bookTitle));
    }
};

var Reader = function(name, lastName) {
    this.readerId = Math.floor(Math.random()*1000);
    this.name = name;
    this.lastName = lastName;
};

var Book = function(title, editor, genere, content) {
    this.title = title;
    this.editor = editor;
    this.genere = genere;
    this.content = content;
};

var Loan = function(readerId, bookTitle) {
    this.readerId = readerId;
    this.bookTitle = bookTitle;
};