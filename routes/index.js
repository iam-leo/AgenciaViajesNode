import express from "express";

const router = express.Router();

// req --> lo que enviamos, res --> lo que express responde 
router.get('/', (req, res)=>{ 
    res.send('Inicio');
});

router.get('/nosotros', (req, res)=>{ 
    res.send('Nosotros');
});

router.get('/contacto', (req, res)=>{ 
    res.send('Contacto');
});

export default router;