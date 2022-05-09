function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function () {
    return title + author + numPages + read;
  };
}

const theHobbit = new Book(
  "The Hobbit ",
  "by JRR Tolkien, ",
  "295 pages, ",
  "not read yet"
);

console.log(theHobbit.info());
