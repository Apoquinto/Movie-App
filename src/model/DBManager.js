export class IndexedDBManager {
  constructor(dbName, dbVersion, collections) {
    this.dbVersion = dbVersion;
    this.dbName = dbName;
    this.db;
    this.collections = collections;
  }

  init() {
    let request = window.indexedDB.open(this.dbName, this.dbVersion);
    request.onsuccess = (event) => {
      this.db = request.result;
    };
    request.onerror = (event) => {
      console.error(`Failed to start database: ${event}`);
    };
    request.onupgradeneeded = (event) => {
      this.db = event.target.result;
      this.db.oncomplete = (eventCreateCollections) => {
        collections.forEach((collection) => {
          this.db.createObjectStore(collection.name, collection.config);
        });
      };
    };
  }
}
