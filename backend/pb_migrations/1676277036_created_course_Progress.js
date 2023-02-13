migrate((db) => {
  const collection = new Collection({
    "id": "yeoo8nr46iw8q11",
    "created": "2023-02-13 08:30:36.956Z",
    "updated": "2023-02-13 08:30:36.956Z",
    "name": "course_Progress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4hajthvn",
        "name": "course_Id",
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
        "id": "4bp60gmw",
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
        "id": "ghok7fkz",
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
        "id": "j3dtxwrw",
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
  const collection = dao.findCollectionByNameOrId("yeoo8nr46iw8q11");

  return dao.deleteCollection(collection);
})
