export class DBManager {
  constructor(DBName, collections) {
    this.dbSource = window.indexedDB;
    this.cnx = indexedDB.open(DBName, 1);
    this.db = "initial value";
    this.setup(collections);
  }

  setup(collections) {
    this.cnx.onsuccess = (e) => {
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
