
module.exports = (Sequelize, DataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            isNull: false,
            type: DataTypes.STRING
        },
        apellido: {
            isNull: false,
            type: DataTypes.STRING
        },
        email: {
            isNull: false,
            type: DataTypes.STRING
        },
        birth: {
            isNull: false,
            type: DataTypes.STRING
        },
        password: {
            isNull: false,
            type: DataTypes.STRING
        },
    }

    const config = {
        timestamps: false,
        tablename: 'users'
    }
    const User = Sequelize.define(alias,cols,config);
    User.associate = (models) => {
        User.hasMany(models.Reservation, {
            as: 'users',
            foreignKey: 'user_id'
        })
    }
    return User;
}