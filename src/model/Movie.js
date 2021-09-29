class Movie {
  constructor(id, title, author, releaseYear) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
  }

  get id() {
    return this.id;
  }

  set id(value) {
    this.id = value;
  }

  get title() {
    return this.title;
  }

  set title(value) {
    this.title = value;
  }

  get author() {
    return this.author;
  }

  set author(value) {
    this.author = value;
  }

  get releaseYear() {
    return this.releaseYear;
  }

  set releaseYear(value) {
    this.releaseYear = value;
  }
}
