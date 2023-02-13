migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // add
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

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chgtloe2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbs3kkaa",
    "name": "notes",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkyobdwh",
    "name": "priority",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 50,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsveageh",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 40,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxki422one6uxkh")

  // remove
  collection.schema.removeField("5adsfh4t")

  // remove
  collection.schema.removeField("djqdduue")

  // remove
  collection.schema.removeField("chgtloe2")

  // remove
  collection.schema.removeField("mnyk4wiy")

  // remove
  collection.schema.removeField("nbs3kkaa")

  // remove
  collection.schema.removeField("lkyobdwh")

  // remove
  collection.schema.removeField("tsveageh")

  return dao.saveCollection(collection)
})
