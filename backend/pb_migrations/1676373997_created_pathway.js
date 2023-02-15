migrate((db) => {
  const collection = new Collection({
    "id": "m0j47xc3550wa1j",
    "created": "2023-02-14 11:26:37.672Z",
    "updated": "2023-02-14 11:26:37.672Z",
    "name": "pathway",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7upknehr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ms9lqar0",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "udvwkqfq",
        "name": "expected_Duration",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xzfm3sjm",
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
        "id": "bqvg3isr",
        "name": "courses",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "sw9hfew0ol137n6",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("m0j47xc3550wa1j");

  return dao.deleteCollection(collection);
})
