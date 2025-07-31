const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/src/notes.js",
    handler: addNoteHandler,
  },
];

module.exports = routes;
