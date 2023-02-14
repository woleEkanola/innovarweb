migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeoo8nr46iw8q11")

  // remove
  collection.schema.removeField("4bp60gmw")

  // remove
  collection.schema.removeField("j3dtxwrw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dd0aqsny",
    "name": "current_lesson",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfkxn3ip",
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
  const collection = dao.findCollectionByNameOrId("yeoo8nr46iw8q11")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("dd0aqsny")

  // remove
  collection.schema.removeField("yfkxn3ip")

  return dao.saveCollection(collection)
})
