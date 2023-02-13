migrate((db) => {
  const collection = new Collection({
    "id": "q7ee7hv6juxopzp",
    "created": "2023-02-13 08:35:49.616Z",
    "updated": "2023-02-13 08:35:49.616Z",
    "name": "subscription",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ia8o8g9s",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ds3aw1m0",
        "name": "expiriry_Date_",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q7ee7hv6juxopzp");

  return dao.deleteCollection(collection);
})
