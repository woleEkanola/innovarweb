migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m0j47xc3550wa1j")

  // remove
  collection.schema.removeField("p93gpjqm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqvg3isr",
    "name": "courses",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzfm3sjm",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m0j47xc3550wa1j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p93gpjqm",
    "name": "link_to_Courses",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 120,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("bqvg3isr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzfm3sjm",
    "name": "image_",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
