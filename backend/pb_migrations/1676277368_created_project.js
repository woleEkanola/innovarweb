migrate((db) => {
  const collection = new Collection({
    "id": "sgg2quvo0dqsyfx",
    "created": "2023-02-13 08:36:08.105Z",
    "updated": "2023-02-13 08:36:08.105Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "szj24jmx",
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
  const collection = dao.findCollectionByNameOrId("sgg2quvo0dqsyfx");

  return dao.deleteCollection(collection);
})
