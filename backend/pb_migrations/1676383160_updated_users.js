migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
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
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
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
        "last_seen"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
