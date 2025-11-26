import mongoose from "mongoose";

const tiaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, default: "" },
    imagen: { type: String, default: "" },
    descripcion: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Tia", tiaSchema);

