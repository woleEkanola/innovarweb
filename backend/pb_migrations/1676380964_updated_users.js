migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tolstydk",
    "name": "phone",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
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

  return dao.saveCollection(collection)
})
