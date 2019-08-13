const chalk = require("chalk");
const yargs = require("yargs");
const { readNote, listNotes, addNote, removeNote } = require("./notes");

//console.log(process.argv);

//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Add a body for the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Remove a note by title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeNote(argv.title);
  }
});

//create a list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    listNotes();
  }
});

//create read
yargs.command({
  command: "read",
  describe: "read a single note",
  builder: {
    title: {
      describe: "Return a single note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title);
  }
});

yargs.parse();

//console.log(yargs.argv);
