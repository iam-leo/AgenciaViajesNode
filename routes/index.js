import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales } from "../controllers/paginasController.js";

const router = express.Router();

// req --> lo que enviamos, res --> lo que express responde 
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales);

export default router;