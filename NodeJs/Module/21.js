// Converting to arrow Function

const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => 'Your notes...';


const addNote = (title, body) => {

  const notes = loadNotes();
  //const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });
  const duplicateNote = notes.find((note) => { return note.title === title });

  debugger

  //if (duplicateNotes.length === 0) {
  if (!duplicateNote) {        //if no duplicate notes then proceed else not to proceed
    notes.push({               // another method if (duplcateNote === undefined)
      title: title,
      body: body

    });
    saveNotes(notes);
    console.log('new note added');
  }
  else {
    console.log('Note title taken');
  }
  //console.log(notes);

}

const removeNote = (title) => {

  //console.log(title);
  const notes = loadNotes();
  const notesTokeep = notes.filter((note) => note.title !== title

  );


  if (notes.length > notesTokeep.length) {
    console.log(chalk.green.inverse('Note Removed!'));
    saveNotes(notesTokeep);

  }
  else {
    console.log(chalk.red.inverse('No Note Found'));
  }
  s
}

const listNote = () => {
  notes = loadNotes();

  console.log(chalk.blue.inverse('list notes'));

  notes.forEach((note) => {
    console.log(note.title);
  });

}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse.green(note.title));
    console.log(note.body);
  }
  else {
    console.log(chalk.red.inverse('Note not found!'));
  }
}
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('forarrow.json', dataJson);
}

const loadNotes = () => {

  try {
    const bufferData = fs.readFileSync('forarrow.json');
    const dataJSON = bufferData.toString();                    //no json file it throws error
    return JSON.parse(dataJSON);                 //catches by catch(e) thein return empty array
  }
  catch (e) {
    return []; //return empty array
  }


}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
}

