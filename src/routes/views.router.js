import { Router } from "express";
import passport from "passport";

const router = Router();

router.get('/',(req,res)=>{
    res.render('Home');
})

router.get('/login',(req,res)=>{
    res.render('Login');
})

router.get('/profile', passport.authenticate('current', {session:false}), (req,res) => {
    console.log(req.user);
    if(!req.user) {
        return res.redirect('/login');
    }
    const user = req.user;
    res.send(user);
});

router.get('/register',(req,res)=>{
    res.render('Register');
})

export default router;