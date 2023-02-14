migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wu542mtcehy9byc")

  // remove
  collection.schema.removeField("ay1pibln")

  // remove
  collection.schema.removeField("skn1zguy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ic6e3qbj",
    "name": "current_lesson",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kxki422one6uxkh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igsgtkoe",
    "name": "last_seen",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khdavypx",
    "name": "lesson_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kxki422one6uxkh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "description",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wu542mtcehy9byc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ay1pibln",
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
    "id": "skn1zguy",
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
  collection.schema.removeField("ic6e3qbj")

  // remove
  collection.schema.removeField("igsgtkoe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khdavypx",
    "name": "lesson_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kxki422one6uxkh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
