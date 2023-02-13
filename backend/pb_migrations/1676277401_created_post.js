migrate((db) => {
  const collection = new Collection({
    "id": "pudliackyedbfzl",
    "created": "2023-02-13 08:36:41.613Z",
    "updated": "2023-02-13 08:36:41.613Z",
    "name": "post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1opocwre",
        "name": "content",
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
  const collection = dao.findCollectionByNameOrId("pudliackyedbfzl");

  return dao.deleteCollection(collection);
})
