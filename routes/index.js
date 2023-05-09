import express from "express";

const router = express.Router();

// req --> lo que enviamos, res --> lo que express responde 
router.get('/', (req, res)=>{ 
    res.render('inicio');
});

router.get('/nosotros', (req, res)=>{ 
    const viaje = "Viaje a Roma";
    res.render('nosotros',{
        viaje
    });
});

export default router;