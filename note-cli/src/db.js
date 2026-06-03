import fs from 'node:fs/promises'

const DB_PATH = new URL("../db.json", import.meta.url).pathname

// GET DB:
// - Reads the db.json file
// - Converts it from text → JavaScript object
// - Returns the database object

export const getDB = async ()=> {
    const dbjson = await fs.readFile(DB_PATH, 'utf-8')
    const dbObject = JSON.parse(dbjson)
    return dbObject
}

// SAVE DB:
// - Takes a JavaScript object (`db`)
// - Converts it into JSON string
// - Writes it back to `db.json`

export const saveDB = async (newDBObject) => {
    const dbjson = JSON.stringify(newDBObject, null, 2)
    await fs.writeFile(DB_PATH, dbjson)
    return newDBObject
}

// INSERT DATA:
// 1. Loads the database (`getDB`)
// 2. Adds new note into `notes` array
// 3. Saves updated database (`saveDB`)
// 4. Returns the new note

export const insertToDB = async (data)=> {
    const dbObject = await getDB()
    dbObject.notes.push(data)
    await saveDB(dbObject)
    return data
}