import { movieList } from "../view/pages/MovieList/MovieList.js";
import { home } from "../view/pages/Home/Home.js";

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

  addTableRow(0, "Test", "Tester", 0);

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

function addTableRow(id, title, directedBy, releaseYear) {
  const tableBody = document.getElementById("table-body");
  const rowTemplate = `
  <tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>${directedBy}</td>
    <td>${releaseYear}</td>
  </tr>
  `;
  tableBody.insertRow(-1).innerHTML = rowTemplate;
}
