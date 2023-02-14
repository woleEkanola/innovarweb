migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // remove
  collection.schema.removeField("qauzzun2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmtjvvo7",
    "name": "pathway_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "m0j47xc3550wa1j",
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
  const collection = dao.findCollectionByNameOrId("dbyzu8pawxbsvjw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qauzzun2",
    "name": "pathway_ID",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("jmtjvvo7")

  return dao.saveCollection(collection)
})
