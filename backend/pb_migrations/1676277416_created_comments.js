migrate((db) => {
  const collection = new Collection({
    "id": "l7k8l4n4j14zuku",
    "created": "2023-02-13 08:36:56.941Z",
    "updated": "2023-02-13 08:36:56.941Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "phqco6k3",
        "name": "contents",
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
  const collection = dao.findCollectionByNameOrId("l7k8l4n4j14zuku");

  return dao.deleteCollection(collection);
})
