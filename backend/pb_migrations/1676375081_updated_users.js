migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("ef4orylb")

  // remove
  collection.schema.removeField("bmqzloiv")

  // remove
  collection.schema.removeField("3kd8onoo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cuy63nib",
    "name": "pathway",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "m0j47xc3550wa1j",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "name",
        "description",
        "image"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "acvswpki",
    "name": "progress",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dbyzu8pawxbsvjw",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "current_course",
        "last_seen",
        "pathway_ID"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rukhp2xc",
    "name": "subscription",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q7ee7hv6juxopzp",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "active",
        "expiriry_Date_",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

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

  // remove
  collection.schema.removeField("cuy63nib")

  // remove
  collection.schema.removeField("acvswpki")

  // remove
  collection.schema.removeField("rukhp2xc")

  return dao.saveCollection(collection)
})
