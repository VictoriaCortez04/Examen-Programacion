import Tia from "../models/tia_model.js";

// GET - Obtener todos
export const getAllTias = async (req, res) => {
    try {
        const data = await Tia.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los registros" });
    }
};

// GET - Obtener por ID
export const getTiaById = async (req, res) => {
    try {
        const data = await Tia.findById(req.params.id);
        if (!data) return res.status(404).json({ message: "Registro no encontrado" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el registro" });
    }
};

// POST - Crear nuevo registro
export const postTia = async (req, res) => {
    try {
        const nuevo = new Tia(req.body);
        await nuevo.save();
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el registro" });
    }
};

// PUT - Actualizar registro
export const putTia = async (req, res) => {
    try {
        const data = await Tia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ message: "Registro no encontrado" });

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el registro" });
    }
};

// DELETE - Eliminar registro
export const deleteTia = async (req, res) => {
    try {
        await Tia.findByIdAndDelete(req.params.id);
        res.json({ message: "Registro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el registro" });
    }
};
