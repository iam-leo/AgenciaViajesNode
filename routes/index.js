import express from "express";

const router = express.Router();

// req --> lo que enviamos, res --> lo que express responde 
router.get('/', (req, res)=>{ 
    res.send('Inicio');
});

router.get('/nosotros', (req, res)=>{ 
    res.render('nosotros');
});

export default router;