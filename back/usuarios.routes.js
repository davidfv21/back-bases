import { Router } from "express";

const router = Router();

router.get('/usuario', (req, res)=>res.send('Obteniendo usuarios'));

router.post('/usuario', (req, res)=>res.send('Creando usuarios'));

router.put('/usuario', (req, res)=>res.send('Actualizando usuarios'));

router.delete('/usuario', (req, res)=>res.send('Eliminando usuarios'));

export default router;