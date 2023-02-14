migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m0j47xc3550wa1j")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ms9lqar0",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m0j47xc3550wa1j")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
