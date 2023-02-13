migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw9hfew0ol137n6")

  // remove
  collection.schema.removeField("ikgbpj9u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6qvhz7f",
    "name": "lessons",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kxki422one6uxkh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "name",
        "description"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw9hfew0ol137n6")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("f6qvhz7f")

  return dao.saveCollection(collection)
})
