const bcrypt = require('bcrypt');
const db = require('../database/models')
const {Op} = require('sequelize');
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
        db.Table.findAll().then(tables => {
            db.Reservation.findAll().then((reservations) =>{
                res.render('list',{
                    title: ['Reservar Mesa'],
                    styles: ['list'],
                    tables,
                    reservations
                })
            })
        })
    },
    create : (req,res) => {
        db.User.findOne({where: {
            email: req.body.email
        }}).then(user => {
            if(user){
                res.render('register', {
                    title: ['Registro'],
                    styles: ['/register'],
                    error: {
                        msg: 'Ya hay una cuenta con ese email'
                    }
                })
            } else {
                db.User.create({
                    nombre: req.body.name,
                    apellido: req.body.surname,
                    email: String(req.body.email),
                    birth: String(req.body.birthday),
                    password: bcrypt.hashSync(req.body.password,10)
                }).then(() => {
                    res.redirect('/login')
                })
            }
        }).catch(err => res.send(err))
    },
    access: (req,res) => {
        db.User.findOne({where:{email:req.body.email}}).then(user => {
            if(!user){
                res.render('login', {
                    title: ['Login'],
                    styles: ['/login'],
                    error: {
                        msg: 'No existe un usuario con ese mail'
                    }
                })
            } else if(bcrypt.compareSync(req.body.password,user.password)){
                if(req.body.remember){
                    res.cookie('email', req.body.email, {maxAge: 1000 * 60 * 60 * 24})
                }
                req.session.user = user
                res.redirect("/")
            } else {
                res.render('login', {
                    title: ['Ingresar'],
                    styles: ['/login'],
                    error: {
                        msg: 'Contraseña Incorrecta'
                    }
                })
            }
        }).catch(err => res.send(err))
    },
    reserve: (req,res) => {
        db.Reservation.findAll().then(reservations => {
            db.Table.findAll().then(tables => {
                db.Reservation.findOne({where: {user_id: req.session.user.id}})
                .then(reservation => {
                    if(reservation){
                        res.render('list', {
                            title: ['Reservar Mesa'],
                            styles: ['/list'],
                            error: 'Ya tienes una reserva',
                            tables,
                            reservations
                        })
                    } else {
                        //hay que revisar si la mesa esta ocupada
                        db.Reservation.findOne({where: {table_id: req.body.table}}).then(notFree => {
                            if(notFree){
                                res.render('list', {
                                    title: ['Reservar Mesa'],
                                    styles: ['/list'],
                                    error: 'Mesa reservada',
                                    tables,
                                    reservations
                                })
                            } else {
                                db.Reservation.findOne({where: {dni: req.body.dni}}).then(founded => {
                                    if(founded){
                                        res.render('list', {
                                            title:['Reservar Mesa'],
                                            styles: ['/list'],
                                            error: 'Ese DNI ya tiene una reserva',
                                            tables,
                                            reservations
                                        })
                                    } else {
                                        db.Reservation.create({
                                            dni: req.body.dni,
                                            time: req.body.time,
                                            user_id: req.session.user.id,
                                            table_id: req.body.table
                                        }).then(()=> {
                                            res.render('list', {
                                                title: ['Reservar Mesa'],
                                                styles: ['/list'],
                                                error: 'Reserva creada',
                                                tables,
                                                reservations
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            })
        })
    }
}

module.exports = controller;