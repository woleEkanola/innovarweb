migrate((db) => {
  const collection = new Collection({
    "id": "kxki422one6uxkh",
    "created": "2023-02-14 11:26:37.673Z",
    "updated": "2023-02-14 11:26:37.673Z",
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
      },
      {
        "system": false,
        "id": "5adsfh4t",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 20,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "djqdduue",
        "name": "expected_Duration",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 20,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "chgtloe2",
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
        "id": "nbs3kkaa",
        "name": "notes",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "lkyobdwh",
        "name": "priority",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tsveageh",
        "name": "type",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 40,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "92jzirli",
        "name": "links",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "77melszvgr1tzti",
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
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh");

  return dao.deleteCollection(collection);
})
