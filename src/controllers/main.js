const controller = {
    home: (req,res) => {
        res.render('home',{
            title: ['Home'],
            styles: ['home']
        })
    },
    login: (req,res) => {
        res.render('login',{
            title: ['Login'],
            styles: ['/login']
        })
    },
    register: (req,res) => {
        res.render('register',{
            title: ['Registro'],
            styles: ['/register']
        })
    },
    list: (req,res) => {
        res.render('list',{
            title: ['Reservar Mesa'],
            styles: ['list']
        })
    },
    reserve: (req,res) => {
        res.send(req.body)
    }
}

module.exports = controller;