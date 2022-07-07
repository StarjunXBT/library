function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;

  this.info = function () {
    const a = `${this.title} by ${this.author}, ${this.pages} pages`;
    if (readed == "no") return a + ", not read yet";
    return a + "readed";
  };
}

// const test = new Book("test", "Starjun", 50, "no");
// console.log(test);
// console.log(test.info());
