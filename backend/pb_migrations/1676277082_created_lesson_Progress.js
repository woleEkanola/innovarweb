migrate((db) => {
  const collection = new Collection({
    "id": "wu542mtcehy9byc",
    "created": "2023-02-13 08:31:22.808Z",
    "updated": "2023-02-13 08:31:22.808Z",
    "name": "lesson_Progress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "871qcdhr",
        "name": "lesson_ID",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ay1pibln",
        "name": "current_lesson",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hnek6syn",
        "name": "date_started_",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "skn1zguy",
        "name": "last_seen",
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
  const collection = dao.findCollectionByNameOrId("wu542mtcehy9byc");

  return dao.deleteCollection(collection);
})
