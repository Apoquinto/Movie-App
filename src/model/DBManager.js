export class DBManager {
  constructor(DBName, collections) {
    this.dbSource = window.indexedDB;
    this.cnx = indexedDB.open(DBName, 1);
    this.db = this.setup(collections);
  }

  setup(collections) {
    let db = null;

    this.cnx.onsuccess = (e) => {
      db = this.cnx.result;
      console.log("Base de datos inicializada", db);
    };

    this.cnx.onupgradeneeded = (e) => {
      db = e.target.result;
      console.log("Base de datos creada", db);
      for (let collection of collections) {
        this.db.createObjectStore(collection, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    this.cnx.onerror = (error) => {
      console.log(`Error al iniciar base de datos: ${error}`);
    };

    return db;
  }

  insertOne(collectionName, data) {
    console.log(this.db);
    // const collection = this.db
    //   .transaction([collectionName], "readwrite")
    //   .objectStore(collectionName);
    // collection.add(data);
  }

  getAll(collectionName) {
    const collection = this.db
      .transaction([collectionName], "readonly")
      .objectStore(collectionName);
    const cursorConexion = collection.openCursor();

    cursorConexion.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        console.log("Collection");
        console.log(cursor.value);
      } else {
        console.log("Empty collection");
      }
    };
  }
}
