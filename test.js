// import fs from "node:fs"

// fs.readFile("./4. File IO/1. Async in node.md", data => console.log(data))

// fs.mkdir("testingFolder", ()=> console.log("folder created"))

// fs.writeFile("./testingFolder/demo.js", 'console.log("hello")', ()=> {
//     console.log("File created")
// })

// fs.readdir(".", (files)=> console.log(files))

// fs.stat("./testingFolder/demo.js", info=> console.log(info))

// fs.rename('./testingFolder/demo.js', './testingFolder/new-demo.js', () => {
//     console.log('File renamed')
//   })

import fs from 'fs/promises'

async function readFile() {
  const data = await fs.readFile('./testingFolder/new-demo.js', "utf-8")
  console.log(data)
}

readFile()