migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wu542mtcehy9byc")

  // remove
  collection.schema.removeField("871qcdhr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khdavypx",
    "name": "lesson_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kxki422one6uxkh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wu542mtcehy9byc")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("khdavypx")

  return dao.saveCollection(collection)
})
