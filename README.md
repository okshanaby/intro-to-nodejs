# Introduction to Node.js — Notes & Projects

My notes and hands-on projects from the [**Introduction to Node.js, v3**](https://frontendmasters.com/courses/node-js-v3/) course by [Scott Moss](https://www.linkedin.com/in/williams-s-m/) (working at **Netflix** at the time of recording) on Frontend Masters.

It covers Node.js from the ground up — from how the runtime works and its non-blocking I/O model, through building a real command-line tool with `process`, modules, and the file system, all the way to testing your code and serving it over HTTP with the built-in `http` module.

- 📚 **Course:** https://frontendmasters.com/courses/node-js-v3/
- 📝 **Official notes:** https://scottmoss.notion.site/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c
- 👤 **My learning profile:** https://frontendmasters.com/u/okshanaby/

---

## What's inside

Each numbered folder is one section of the course. The `.md` files are my written notes; the `note-cli/` folder contains the note-taking CLI app built hands-on across the course.

### Notes

| Section | Topic | Highlights |
| --- | --- | --- |
| **1. Node Basics** | What Node.js is and how it runs | History of Node.js, the runtime, non-blocking I/O |
| **2. Creating a CLI** | Building a command-line tool | `process` & environment variables, custom CLI setup |
| **3. Modules** | Organizing code into modules | Module systems, thinking in modules, using Yargs |
| **4. File IO** | Reading & writing data | Async in Node, the `fs` module, file paths, using a file as a DB, note CRUD |
| **5. Testing** | Verifying your code | Types of tests, unit testing with Jest |
| **6. Servers** | Serving over HTTP | Creating a simple server, a vanilla `http` server |

### Project — `note-cli`

A note-taking command-line app built throughout the course. It stores notes in a local `db.json` file and exposes commands via [Yargs](https://yargs.js.org/):

| Command | What it does |
| --- | --- |
| `note new <note>` | Create a new note (with optional tags) |
| `note all` | List all notes |
| `note find <filter>` | Search notes by content |
| `note remove <id>` | Delete a note by id |
| `note clean` | Remove all notes |
| `note web` | Serve notes as an HTML page via the built-in `http` module |

Run it locally:

```bash
cd note-cli
npm install
node index.js all        # or: npm link, then `note all`
npm test                 # run the Jest test suite
```

---

## Key concepts covered

- **The Node.js runtime** — running JavaScript outside the browser, the event loop, and why Node was created.
- **Non-blocking I/O** — how Node handles I/O asynchronously so a single thread can serve many operations.
- **`process` & environment** — reading CLI arguments, environment variables, and interacting with the process.
- **Modules** — splitting an app into small, single-responsibility pieces and composing them (ES modules / `import`).
- **Yargs** — building an ergonomic CLI with commands, positionals, and options.
- **Async in Node** — callbacks, promises, and `async/await` for I/O-bound work.
- **The `fs` module & file paths** — reading and writing files and resolving paths reliably across platforms.
- **File as a database** — persisting structured data to a JSON file and performing CRUD operations on it.
- **Testing** — the different types of tests and writing unit tests with Jest.
- **HTTP servers** — serving content with Node's built-in `http` module, no framework required.

---

## Acknowledgements

All credit for the course material goes to **Scott Moss** and **Frontend Masters**. This repository is my personal study log while taking the course.
