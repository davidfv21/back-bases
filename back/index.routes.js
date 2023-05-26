import { Router } from "express";
import { db } from "../db.js";

const router = Router();

router.post('/sesion', async(req, res)=>{
    const reqUserName = req.body.name,
        reqUserPass = req.body.pass;
    let logged = false; 
    //const usuarios = await db.query(`SELECT * FROM users WHERE username='${reqUserName}' AND pass='${reqUserPass}'`);
    const usuarios = await db.query(`SELECT * FROM users'`);

    console.log(usuarios.length);
    if (usuarios.length > 0) {
        logged = true;
    }
    console.log("hola",req.body.name);
    res.send(logged);
})


export default router;