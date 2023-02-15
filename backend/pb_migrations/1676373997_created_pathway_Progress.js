migrate((db) => {
  const collection = new Collection({
    "id": "dbyzu8pawxbsvjw",
    "created": "2023-02-14 11:26:37.674Z",
    "updated": "2023-02-14 11:26:37.674Z",
    "name": "pathway_Progress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qauzzun2",
        "name": "pathway_ID",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bu0a9dyx",
        "name": "current_course",
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
        "id": "vdml5kgp",
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
        "id": "og1kwogm",
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
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw");

  return dao.deleteCollection(collection);
})
