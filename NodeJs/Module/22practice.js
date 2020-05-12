const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./23practice.js');

yargs.version('15.3.1');

yargs.command({
  command: 'add',
  describe: 'adding Note',
  builder: {

    title: {
      describe: 'Adding Title',
      demandOption: true,
      type: 'string'

    },

    body: {
      describe: 'adding Body',
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
  describe: 'removing Note',
  builder: {

    title: {
      describe: ' Removing title',
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
  describe: 'listing Note',
  builder: {
    title: {
      describe: 'listing Title'
    }

  },
  handler: (argv) => {
    console.log('listing note');
  }
});

yargs.command({
  command: 'read',
  describe: 'reading Note',
  builder: {
    title: {
      describe: 'Reading Title'
    }
  },
  handler: (argv) => {
    console.log('reading note');
  }
});

yargs.parse();