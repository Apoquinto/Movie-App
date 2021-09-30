import { Movie } from "../model/Movie.js";
import { home } from "../view/pages/Home/Home.js";
import { movieList } from "../view/pages/MovieList/MovieList.js";

const wrapper = document.getElementById("wrapper");

wrapper.innerHTML = home;

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
      let { movieId, title, author, realeseYear } = form;
      console.log(movieId.value, title.value, author.value, realeseYear.value);
      modal.classList.remove("show");
    },
    false
  );
}
