const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => '... your notes';

const addNote = (title, body) => {
  const notes = loadNotes();

  const ultimatenote = notes.filter((note) => note.title === title);

  if (ultimatenote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log(chalk.green.inverse('Note added'));
  }
  else {
    console.log(chalk.red.inverse('Note already Taken'));
  }
}

const removeNote = (title) => {

  const notes = loadNotes();

  const notesTokeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesTokeep.length) {
    saveNote(notesTokeep);
    console.log(chalk.yellow.inverse('Note Removed'));
  }
  else {
    console.log(chalk.blue.inverse('Note not found'));
  }

}

const saveNote = (notes) => {

  const buffer = JSON.stringify(notes);
  fs.writeFileSync('practice.json', buffer);

}

loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('practice.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
  }
  catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}