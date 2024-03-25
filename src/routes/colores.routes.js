import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const router = Router()
router.route('/colores').post(crearColor).get(listarColores)
router.route("/colores/:id").delete(borrarColor).put(editarColor).get(obtenerColor)

export default router