const Note = require('../models/Note');

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Get single note
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: 'Note not found' });

    return res.json(note);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Create a note
// @route   POST /api/notes
// @access  Public
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Please add title and content' });
    }

    const note = await Note.create({
      title,
      content,
    });

    return res.status(201).json(note);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Public
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: 'Note not found' });

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(updatedNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Public
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: 'Note not found' });

    await note.deleteOne();
    return res.json({ message: 'Note deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };