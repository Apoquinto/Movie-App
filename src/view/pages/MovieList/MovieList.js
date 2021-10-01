export const movieList = `
<style>
table th tr td {
  aling-text: left;
}
header {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: left;
}
header button {
  border: 0;
  padding: 0.5rem;
  border-radius: 0.4rem;
  color: white;
  background-color: #6175de;
}
header button:active {
  background-color: #95aeed;
}
table {
  width: 100%;
}
table {
  text-align: left;
}
.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
}

.show {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 2rem;
  background-color: white;
}

.modal form .field {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.8rem;
}

.modal button {
  width: 100%;
}
</style>

<div class="modal-container" id="modalContainer">
      <div class="modal">
        <h2>Agregar pelicula</h2>
        <form id="newMovie">
          <div class="field">
            <label for="movieId">Id</label>
            <input type="text" id="movieId" />
          </div>
          <div class="field">
            <label for="title">Titulo</label>
            <input type="text" id="title" />
          </div>
          <div class="field">
            <label for="author">Autor</label>
            <input type="text" id="author" />
          </div>
          <div class="field">
            <label for="realeseYear">Año de estreno</label>
            <input type="date" id="realeseYear" />
          </div>
          <button id="closeModalButton">Agregar</button>
        </form>
      </div>
    </div>
<header class = "table-title">
  <h2>Listado</h2>
  <button id = "addFilm">Agregar pelicula</button>
</header>
<table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Autor</th>
      <th>Año de salida</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>The Wind Rises</td>
      <td>Hayao Miyazaki</td>
      <td>2013 </td>
    </tr>
  </tbody>
</table>
</div>
`;
