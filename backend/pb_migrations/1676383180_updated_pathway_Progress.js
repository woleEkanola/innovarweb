migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vdml5kgp",
    "name": "date_started",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
