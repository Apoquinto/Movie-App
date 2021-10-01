export class DBManager {
  constructor(DBName, collections) {
    this.dbSource = window.indexedDB;
    this.cnx = indexedDB.open(DBName, 1);
    this.cnx.onsuccess = () => {
      this.db = this.cnx.result;
      console.log("Base de datos inicializada ", this.db);
    };

    this.cnx.onupgradeneeded = (e) => {
      this.db = e.target.result;
      console.log("Base de datos creada ", this.db);
      for (let collection of collections) {
        this.db.createObjectStore(collection, {
          keyPath: collection,
        });
      }
    };

    this.cnx.onerror = (error) => {
      console.log(`Error al iniciar base de datos: ${error}`);
    };
  }
}
