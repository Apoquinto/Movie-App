export class DBManager {
  constructor() {
    this.dbSource = window.indexedDB;
    this.cnx = indexedDB.open("App Movies", 1);
    this.cnx.onsuccess = () => {
      this.db = this.cnx.result;
      console.log("Base de datos inicializada ", this.db);
    };

    this.cnx.onupgradeneeded = (e) => {
      this.db = e.target.result;
      console.log("Base de datos creada ", this.db);
      this.collection = this.db.createObjectStore("Movies", {
        keyPath: "key",
      });
    };

    this.cnx.onerror = (error) => {
      console.log(`Error al iniciar base de datos: ${error}`);
    };
  }
}
