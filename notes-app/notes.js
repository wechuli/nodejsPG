const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  readNote(title) {
    //Load existing notes
    const notes = loadNotes();

    //check if note exists first
    const existingNotes = notes.find(note => {
      return note.title === title;
    });
    if (!existingNotes) {
      console.log(chalk.red(`No note with the title ${title} found`));
      return;
    }
    console.log(chalk.yellow(`${title}: `));
    console.log(chalk.green(existingNotes.body));
  },
  addNote(title, body) {
    //Load existing notes
    const notes = loadNotes();

    // debugger;

    //check if note exists first
    const existingNotes = notes.find(note => {
      return note.title === title;
    });
    if (existingNotes) {
      console.log(chalk.red("Not Already exists, please type a new title"));
      return;
    }
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green("New note added successfully"));
  },
  removeNote(title) {
    //load existing notes
    let notes = loadNotes();

    //check if note exists first
    const existingNotes = notes.find(note => {
      return note.title === title;
    });
    if (!existingNotes) {
      console.log(chalk.red("No note found! extiting..."));
      return;
    }

    //remove the notes using filter
    notes = notes.filter(note => {
      return note.title !== title;
    });

    saveNotes(notes);
    console.log(chalk.green("Note succesffuly removed"));
  },
  listNotes() {
    console.log(chalk.green("Your notes: "));
    const allNotes = loadNotes();
    allNotes.forEach(note => {
      console.log(note.title);
    });
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./data/notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./data/notes.json", dataJsON);
};
