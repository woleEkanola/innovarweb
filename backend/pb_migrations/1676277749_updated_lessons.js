migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // remove
  collection.schema.removeField("mnyk4wiy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "92jzirli",
    "name": "links",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "77melszvgr1tzti",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnyk4wiy",
    "name": "link",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("92jzirli")

  return dao.saveCollection(collection)
})
