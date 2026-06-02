import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    (yargs) => {
      return yargs.positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string'
      })

    },
     async (argv) => {
      // logic for creating a note goes here
    }
  )

  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })

  .command(
    'all',
    'get all notes',
    () => {},
    async (argv) => {
      // logic to list all notes
    }
  )

  .command(
    'find <filter>',
    'get matching notes',
    (yargs) => {
      return yargs.positional('filter', {
        describe: 'The search term to filter notes by, will be applied to note.content',
        type: 'string'
      })
    },
    async (argv) => {
      // logic to search notes
    }
  )

  .command(
    'remove <id>',
    'remove a note by id',
    (yargs) => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove'
      })
    },
    async (argv) => {
      // logic to delete a note
    }
  )

  .command(
    'web [port]',
    'launch website to see notes',
    (yargs) => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
    },
    async (argv) => {
      // logic to start web server
    }
  )

  .command(
    'clean',
    'remove all notes',
    () => {},
    async (argv) => {
      // logic to delete all notes
    }
  )

  .demandCommand(1)
  .parse()