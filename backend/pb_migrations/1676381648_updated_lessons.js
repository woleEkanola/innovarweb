migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5adsfh4t",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djqdduue",
    "name": "expected_Duration",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5adsfh4t",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 20,
      "max": 50,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djqdduue",
    "name": "expected_Duration",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 20,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
