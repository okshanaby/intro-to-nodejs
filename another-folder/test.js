import fs from 'fs'

fs.readFile('../testingFolder/new-demo.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }

  console.log(data)
})

// fs.writeFile('file.txt', 'Hello World', (err) => {
//     if (err) {
//       console.error('Error writing file:', err)
//       return
//     }
  
//     console.log('File written successfully')
//   })

// fs.stat('file.txt', (err, info) => {
//     if (err) {
//       console.error('Error getting file info:', err)
//       return
//     }
  
//     console.log(info)
//   })


// fs.unlink('file.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err)
//     return
//   }

//   console.log('File deleted')
// })