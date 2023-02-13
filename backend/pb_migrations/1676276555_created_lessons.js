migrate((db) => {
  const collection = new Collection({
    "id": "kxki422one6uxkh",
    "created": "2023-02-13 08:22:35.032Z",
    "updated": "2023-02-13 08:22:35.032Z",
    "name": "lessons",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1xrekymf",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 40,
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
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh");

  return dao.deleteCollection(collection);
})
