import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'

import { passportCall } from "../middlewares/passportCall.js";

const sessionsRouter = Router();

sessionsRouter.post('/register', passportCall('register'), async (req, res) => {
    res.send({ status: "success", message: "Registered" })
})

sessionsRouter.get('/registerFail', (req, res) => {
    res.send("error");
})

sessionsRouter.post('/login', passportCall('login'), async (req, res) => {
    console.log(req.user + ' es el req.user');

    const sessionUser = { 
        name: `${req.user.firstName} ${req.user.lastName}`,
        email: req.user.email,
        role: req.user.role,
        id: req.user._id,
        cart: req.user.cart,
    }

    const token = jwt.sign(sessionUser, 'secret', {expiresIn:60*60});
    res.cookie('token', token).send({ status: "succes", message: "logged in" });
});

sessionsRouter.get('/failureLogin', (req, res) => {
    res.send("error");
});

sessionsRouter.get('/logout', async (req, res) => {
    res.clearCookie('token');
    res.send('logout succes!')
});

export default sessionsRouter;