class Book {
  constructor(title, author, status = true) {
    this.title = title;
    this.author = author;
    this.status = status;
  }

  borrow() {
    if (this.status) {
      this.status = false;
      return `Buku "${this.title}" berhasil dipinjam.`;
    } else {
      return `Buku "${this.title}" sedang dipinjam.`;
    }
  }

  returnBook() {
    if (!this.status) {
      this.status = true;
      return `Terimakasih telah mengembalikan buku "${this.title}".`;
    } else {
      return `Buku "${this.title}" belum dipinjam, masih ada di perpustakaan.`;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    return `Buku "${title}" berhasil ditambahkan.`;
  }

  viewBooks() {
    return this.books;
  }

  findBook(title) {
    return this.books.find(book => book.title === title);
  }
}

const library = new Library();

const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const author = e.target.author.value;

  library.addBook(title, author);
  updateBookList();
  bookForm.reset();
});

function updateBookList() {
  bookList.innerHTML = '';

  library.viewBooks().forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} oleh ${book.author} (${book.status ? 'Tersedia' : 'Sedang dipinjam'})`;
    
    const borrowButton = document.createElement('button');
    borrowButton.textContent = 'Pinjam';
    borrowButton.addEventListener('click', () => {
      alert(book.borrow());
      updateBookList();
    });

    const returnButton = document.createElement('button');
    returnButton.textContent = 'Kembalikan';
    returnButton.addEventListener('click', () => {
      alert(book.returnBook());
      updateBookList();
    });

    li.appendChild(borrowButton);
    li.appendChild(returnButton);
    bookList.appendChild(li);
  });
}

updateBookList();


// STUDI KASUS MULTI PARADIGMA

// Prosedural

// const books = [];

// function addBook (title, author, status) {
//   const book = {}
//   book.title = title
//   book.author = author
//   book.status = status
//   books.push(book)
//   return
// }

// function viewBooks() {
//   books.forEach((book)=> {
//     console.log(`books title : ${book.title} author ${book.author} dan buku ${book.status ? 'ada' : 'sedang di pinjam'}`);
//   })
// }

// function borrowBook(title) {
//   let bookFound = false
  
//   books.forEach((book) => {
//     if(book.title === title){
//       bookFound = true;
//       if(book.status){
//         book.status = false;
//         console.log(`Buku berhasil di pinjam`);
//       } else {
//         console.log(`Buku sedang di pinjam`);
//       }
//     }
//   });

//   if(!bookFound) {
//     console.log(`Buku tidak ada dalam perpustakaan`);
    
//   }
// }

// addBook('Javascript Basic', 'Rizki', true);
// addBook('Javascript OOP', 'Bayu', true);
// viewBooks()
// borrowBook('Javascript Basic')
// borrowBook('Javascript Basic')
// console.log(books);


// Functional Programming

// let books = [];

// const addBook = (title, author, status) => {
//   const book = { title, author, status };
//   books = [...books, book];
// };


// const viewBooks = () => {
//   books.forEach((book) => {
//     console.log(`Buku ${book.title} ${book.status ? 'Ada di dalam perpustakaan' : 'Sedang di pinjam'}`);
//   });
// };

// const borrowBook = (title) => {
//   const updatedBooks = books.map((book) => {
//     if (book.title === title) {
//       if (book.status) {
//         console.log(`Buku dengan judul ${title} sukses di pinjam`);
//         return { ...book, status: false };
//       } else {
//         console.log(`Buku dengan judul ${title} sedang di pinjam`);
//       }
//     }
//     return book;
//   });
  
//   const bookFound = books.some((book) => book.title === title);
//   if (!bookFound) {
//     console.log(`Buku dengan judul ${title} tidak ada dalam perpustakaan`);
//   }

//   books = updatedBooks;
// };

// const returnBook = (title) => {
//   let bookFound = false;

//   const updatedBooks = books.map((book) => {
//     if (book.title === title) {
//       bookFound = true;
//       if (!book.status) {
//         console.log(`Terimakasih telah mengembalikan buku ${title} lagi`);
//         return { ...book, status: true };
//       } else {
//         console.log(`Buku ini belum dipinjam dan masih ada dalam perpustakaan`);
//       }
//     }
//     return book;
//   });

//   if (!bookFound) {
//     console.log(`Maaf buku dengan judul ${title} tidak ada dalam data perpustakaan kami`);
//   }

//   books = updatedBooks;
// };

// // Contoh Penggunaan
// addBook('Javascript Basic', 'Rizki', true);
// addBook('Javascript OOP', 'Pasena', true);
// addBook('Javascript Prosedural', 'Pasena', true);

// borrowBook('Javascript OOP');
// borrowBook('Typescript OOP');
// returnBook('Typescript OOP');
// viewBooks();

// OOP
// Definisi Kelas Book
// class Book {
//   constructor(title, author, status = true) {
//     this.title = title;
//     this.author = author;
//     this.status = status; // true = available, false = borrowed
//   }

//   borrow() {
//     if (this.status) {
//       this.status = false;
//       console.log(`Buku dengan judul "${this.title}" berhasil dipinjam.`);
//     } else {
//       console.log(`Buku dengan judul "${this.title}" sedang dipinjam.`);
//     }
//   }

//   returnBook() {
//     if (!this.status) {
//       this.status = true;
//       console.log(`Terimakasih telah mengembalikan buku "${this.title}".`);
//     } else {
//       console.log(`Buku "${this.title}" belum dipinjam, masih ada di perpustakaan.`);
//     }
//   }

//   displayInfo() {
//     console.log(`Buku "${this.title}" oleh ${this.author}, ${this.status ? 'Tersedia' : 'Sedang dipinjam'}.`);
//   }
// }

// // Definisi Kelas Library
// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(title, author) {
//     const book = new Book(title, author);
//     this.books.push(book);
//     console.log(`Buku "${title}" berhasil ditambahkan.`);
//   }

//   viewBooks() {
//     console.log("Daftar Buku di Perpustakaan:");
//     this.books.forEach((book) => book.displayInfo());
//   }

//   borrowBook(title) {
//     const book = this.books.find((book) => book.title === title);
//     if (book) {
//       book.borrow();
//     } else {
//       console.log(`Buku dengan judul "${title}" tidak ditemukan di perpustakaan.`);
//     }
//   }

//   returnBook(title) {
//     const book = this.books.find((book) => book.title === title);
//     if (book) {
//       book.returnBook();
//     } else {
//       console.log(`Buku dengan judul "${title}" tidak ditemukan di perpustakaan.`);
//     }
//   }
// }

// const library = new Library();

// library.addBook('Javascript Basic', 'Rizki');
// library.addBook('Javascript OOP', 'Pasena');
// library.addBook('Javascript Prosedural', 'Pasena');

// library.viewBooks();
// library.borrowBook('Javascript OOP');
// library.viewBooks();
// library.returnBook('Javascript OOP');
// library.viewBooks();



