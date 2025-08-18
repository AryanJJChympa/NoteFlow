import Note from "../model/notesModel.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); //i have sort to get lates note at the top
        if (!notes) {
            res.status(404).json({
                message: "Note not found!",
            })
            res.json(notes);
        }
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller", error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};

export const getSpecificNotes = async (req, res) => {
    try {
        const specificNote = await Note.findById(req.params.id)
        res.status(200).json(specificNote);
    } catch (error) {
        console.log("Error in getSpecificNotes controller", error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};

export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({
            title,
            content,
        })
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error in createNotes controller", error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};

export const updateNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found",
            })
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log("Error in updateNotes controller", error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};

export const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found",
            })
        }
        res.status(200).json({
            message: "Note deleted successfully",
        });
    } catch (error) {
        console.log("Error in deleteNotes controller", error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};
