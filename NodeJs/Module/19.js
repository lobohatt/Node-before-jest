const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
  return 'Your notes...';
}

const addNote = function (title, body) {

  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });


  if (duplicateNotes.length === 0) {
    notes.push({
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

const removeNote = function (title) {

  //console.log(title);
  const notes = loadNotes();
  const notesTokeep = notes.filter(function (note) {

    return note.title !== title;

  });


  if (notes.length > notesTokeep.length) {
    console.log(chalk.green.inverse('Note Removed!'));
    saveNotes(notesTokeep);

  }
  else {
    console.log(chalk.red.inverse('No Note Found'));
  }

}

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notess.json', dataJson);
}

const loadNotes = function () {

  try {
    const bufferData = fs.readFileSync('notess.json');
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
  removeNote: removeNote
}

