//  Converting to arrow Function

const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./21.js');
yargs.version('15.3.1');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {

    body: {
      describe: ' Note Body',
      demandOption: true,
      type: 'string'
    },

    title: {
      describe: 'Note a title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {

    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder: {
    title: {
      describe: 'Removing Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'list your notes',
  builder: {

    title: {
      describe: 'Listing Note'
    }
  },
  handler: (argv) => {
    notes.listNote(argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Read note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title);

  }
});



//console.log(yargs.argv);
yargs.parse();
