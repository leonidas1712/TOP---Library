// class Book{
//     constructor(title, author, pages, read){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//     }

//     getReadDesc(){
//         return this.read ? "Read." : "Not read yet."
//     }

//     getDescription(){
//         return `${this.title} by ${author}. ${pages} pages. ${this.getReadDesc()}`;
//     }
// }

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getReadDesc = function(){
    return this.read ? "Read." : "Not read yet."
}

Book.prototype.getDescription = function(){
    return `${this.title} by ${this.author}. ${this.pages} pages. ${this.getReadDesc()}`;
}

const books = [
    new Book("Meditations", "Marcus Aurelius", 304, true),
    new Book("The Obstacle Is The Way", "Ryan Holiday", 224, false),
    new Book("Man's Search For Meaning", "Viktor Frankl", 200, false),
    new Book("The Three-Body Problem", "Liu Cixin", 302, true),
    new Book("1984", "George Orwell", 328, true),
    new Book("Animal Farm", "George Orwell", 112, true),
    new Book("A Brief History Of Time", "Stephen Hawking", 256, false)
]

const library = document.getElementById("library");

function bookToCard(book){
    return `<div class = "card">
            <h3>${book.title}</h3>
            <p class = "author">${book.author}</p>
            <p class = "pages">${book.pages} pages</p>
            <p class = "read">${book.getReadDesc()}</p>
        </div>`
}

//  const firstCard = bookToCard(books[0]);

// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;
// library.innerHTML += firstCard;

books.forEach(book => library.innerHTML += bookToCard(book)); 
