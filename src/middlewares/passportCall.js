import passport from "passport";
export const passportCall = (strategy) =>{
    return async(req,res,next)=>{
        passport.authenticate(strategy,function(error,user,info){
            //info del done
            if(error) return next(error);
            if(!user){return res.status(401).send({status:"error", error:info.message})}
            req.user = user;
            next();
        })(req,res,next);
    }
}