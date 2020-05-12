const yargs = require('yargs');
const chalk = require('chalk');
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
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
    console.log(argv);
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  handler: function () {
    console.log('removing a new note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list your notes',
  handler: () => {
    console.log('listing out all notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log('Reading a  note');

  }
});



//console.log(yargs.argv);
yargs.parse();
