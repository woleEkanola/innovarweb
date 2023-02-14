migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw9hfew0ol137n6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afxh1aee",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw9hfew0ol137n6")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
