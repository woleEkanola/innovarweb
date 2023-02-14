migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // remove
  collection.schema.removeField("bu0a9dyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i1moxjlx",
    "name": "current_course",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "sw9hfew0ol137n6",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("i1moxjlx")

  return dao.saveCollection(collection)
})
