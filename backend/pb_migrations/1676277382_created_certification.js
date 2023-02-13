migrate((db) => {
  const collection = new Collection({
    "id": "wiwx8ldymudveta",
    "created": "2023-02-13 08:36:22.262Z",
    "updated": "2023-02-13 08:36:22.262Z",
    "name": "certification",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k0zuwhtb",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("wiwx8ldymudveta");

  return dao.deleteCollection(collection);
})
