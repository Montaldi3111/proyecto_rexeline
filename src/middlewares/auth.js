const db = require('../database/models');

module.exports = (req,res,next) => {
    res.locals.isLogged = false;
    if(req.cookies.email != undefined){
        let userInCookie = req.cookies.email;
        db.User.findOne({where:{email:userInCookie}})
        .then(userFound => {
            if(userFound){
                let userLogged = userFound;
                req.session.user = userLogged
            }
        })
    }

    if(req.session&&req.session.user){
        res.locals.isLogged = true;
        res.locals.user = req.session.user
    }

    next();
}