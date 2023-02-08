
module.exports = (Sequelize, DataTypes) => {
    const alias = 'Reservation';
    const cols = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dni: {
            type: DataTypes.INTEGER,
            isNull: false,
        },
        time: {
            type: DataTypes.INTEGER,
            isNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            isNull: false
        },
        table_id: {
            type: DataTypes.INTEGER,
            isNull: false
        }
    }

    const config = {
        timestamps: false,
        tablename: 'reservations'
    }
    const Reservation = Sequelize.define(alias,cols,config);
    Reservation.associate = (models) => {
        Reservation.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        Reservation.belongsTo(models.Table,{
            as: 'table',
            foreignKey: 'table_id'
        })
    }

    return Reservation
}