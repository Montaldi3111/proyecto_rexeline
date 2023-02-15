const db = require('../../database/models');

module.exports = {
    reservations: (req,res) => {
        db.Reservation.findAll({include:[
            {
                association: 'user'
            },
            {
                association: 'table'
            }
        ]
    }).then(allReservations => {
        let data = {
            count: allReservations.length,
            list: [],
            meta: {
                status: 200,
            }
        }
        allReservations.forEach(reserve => {
            data.list.push({
                id: reserve.id,
                dni: reserve.dni,
                time: reserve.time,
                user_id: reserve.user.nombre,
                table_id: reserve.table.name
            })
        })
        return res.json(data);
    }).catch(err => {
        let data = {
            err,
            meta: {
                status: 404
            }
        }
    })
    },
    tables: (req,res) => {
        db.Table.findAll().then(tables => {
            let data = {
                count: tables.length,
                list: [],
                meta: {
                    status: 200
                }
            }
            tables.forEach(table => {
                data.list.push({
                    id: table.id,
                    name: table.name,
                })
            })
            return res.json(data)
        }).catch(err => {
            let data = {
                err,
                meta: {
                    status: 404
                }
            }
            return res.json(data)
        })
    }
}