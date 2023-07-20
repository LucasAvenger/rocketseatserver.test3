const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();


const NotesController = new NotesController();

notesRoutes.post("/:user_id", NotesController.create);

module.exports = notesRoutes;