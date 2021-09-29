import { home } from "../view/pages/Home/Home.js";
import { movieList } from "../view/pages/MovieList/MovieList.js";

const wrapper = document.getElementById("wrapper");
const modal = document.getElementById("modalContainer");

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
  const openModal = document.getElementById("addFilm");
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
      modal.classList.remove("show");
    },
    false
  );
  console.log(modal);
  console.log(openModal);
  console.log(closeModal);
}
