migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeoo8nr46iw8q11")

  // remove
  collection.schema.removeField("4hajthvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qivyx9wy",
    "name": "course_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "sw9hfew0ol137n6",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeoo8nr46iw8q11")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("qivyx9wy")

  return dao.saveCollection(collection)
})
