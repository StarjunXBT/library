const form = document.getElementsByTagName("form")[0];

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.querySelector('[name="title"]').value;
  const author = document.querySelector('[name="author"]').value;
  const pages = document.querySelector('[name="pages"]').value;
  const select = document.getElementsByTagName("select")[0];
  const status = select.options[select.selectedIndex].value;

  const latestBook = new Book(title, author, pages, status);

  myLibrary.push(latestBook);
  clearInput();
  display();
}

function clearInput() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((elem) => (elem.value = ""));
}

function display() {
  document.querySelector(".books").innerHTML = "";
  for (const book of myLibrary) {
    const newBook = document.createElement("div");
    const keys = Object.keys(book);

    let innerHTML = "";
    keys.forEach((key, index) => {
      innerHTML = innerHTML + `<p>${key}: ${book[key]}</p>`;
    });

    console.log(innerHTML);
    newBook.classList.add("book");
    newBook.insertAdjacentHTML("beforeend", innerHTML);
    document
      .querySelector(".books")
      .insertAdjacentElement("beforeend", newBook);
  }
}

form.addEventListener("submit", (e) => addBookToLibrary(e));
