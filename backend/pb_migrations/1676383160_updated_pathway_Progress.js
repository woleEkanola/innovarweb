migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // remove
  collection.schema.removeField("og1kwogm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vrc2ggrk",
    "name": "last_seen",
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

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("vrc2ggrk")

  return dao.saveCollection(collection)
})
