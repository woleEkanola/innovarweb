migrate((db) => {
  const collection = new Collection({
    "id": "sw9hfew0ol137n6",
    "created": "2023-02-13 08:22:07.655Z",
    "updated": "2023-02-13 08:22:07.655Z",
    "name": "course",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yrg7wrp1",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "afxh1aee",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dfyrp3wh",
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
        "id": "6dnd8gdj",
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
        "id": "ikgbpj9u",
        "name": "lessons",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "minoidfc",
        "name": "priority",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
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
  const collection = dao.findCollectionByNameOrId("sw9hfew0ol137n6");

  return dao.deleteCollection(collection);
})
