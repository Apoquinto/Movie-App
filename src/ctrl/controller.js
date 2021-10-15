import { movieList } from "../view/pages/MovieList/MovieList.js";
import { home } from "../view/pages/Home/Home.js";

import { IndexedDBManager } from "../model/DBManager.js";
import { Movie } from "../model/Movie.js";

const wrapper = document.getElementById("wrapper");
wrapper.innerHTML = home;

let collections = [
  {
    name: "Movies",
    config: {
      keyPath: "id",
      autoIncrement: true,
    },
  },
];
let data = new IndexedDBManager("App Movies", 1, collections);
data.init();

console.log(data);

const homeLink = document.getElementById("homeLink");
homeLink.addEventListener(
  "click",
  function (ev) {
    wrapper.innerHTML = home;
  },
  false
);

const movieLink = document.getElementById("movieLink");
movieLink.addEventListener(
  "click",
  function (ev) {
    wrapper.innerHTML = movieList;
    renderMovieCollection();
  },
  false
);

function renderMovieCollection() {
  const modal = document.getElementById("modalContainer");
  const openModal = document.getElementById("addFilm");
  const form = document.getElementById("newMovie");

  openModal.addEventListener(
    "click",
    function (ev) {
      modal.classList.add("show");
    },
    false
  );

  const closeModal = document.getElementById("closeModalButton");
  closeModal.addEventListener(
    "click",
    function (ev) {
      ev.preventDefault();
      // Inserte lo que pasa al darle al botón.
      modal.classList.remove("show");
    },
    false
  );
}
