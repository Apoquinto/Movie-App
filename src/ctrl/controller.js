import { movieList } from "../view/pages/MovieList/MovieList.js";
import { home } from "../view/pages/Home/Home.js";

import { FakeMovieCollectionData } from "../model/FakeData.js";

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

  for (let { id, title, directedBy, releaseDate } of FakeMovieCollectionData) {
    addTableRow(id, title, directedBy, releaseDate);
  }

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
      modal.classList.remove("show");
    },
    false
  );
}

function addTableRow(id, title, directedBy, releaseDate) {
  const tableBody = document.getElementById("table-body");
  const rowTemplate = `
  <tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>${directedBy}</td>
    <td>${releaseDate}</td>
  </tr>
  `;
  tableBody.insertRow(-1).innerHTML = rowTemplate;
}
