migrate((db) => {
  const collection = new Collection({
    "id": "77melszvgr1tzti",
    "created": "2023-02-13 08:28:02.526Z",
    "updated": "2023-02-13 08:28:02.526Z",
    "name": "link",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aaal75de",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5njc6x1w",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 140,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lqik6nhl",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "hgvakdev",
        "name": "priority",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 60,
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
  const collection = dao.findCollectionByNameOrId("77melszvgr1tzti");

  return dao.deleteCollection(collection);
})
