migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tolstydk",
    "name": "phone",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": 9,
      "max": 14
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ef4orylb",
    "name": "pathway",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bmqzloiv",
    "name": "progress",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxgcusn3",
    "name": "type",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kd8onoo",
    "name": "subscription",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 20,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8r2tjzw",
    "name": "profile_Image",
    "type": "file",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("tolstydk")

  // remove
  collection.schema.removeField("ef4orylb")

  // remove
  collection.schema.removeField("bmqzloiv")

  // remove
  collection.schema.removeField("nxgcusn3")

  // remove
  collection.schema.removeField("3kd8onoo")

  // remove
  collection.schema.removeField("a8r2tjzw")

  return dao.saveCollection(collection)
})
