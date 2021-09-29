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
  },
  false
);
