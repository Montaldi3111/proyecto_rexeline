module.exports = (Sequelize,dataTypes) => {
    const alias = 'Table';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER        
        },
        name: {
            isNull: false,
            type: dataTypes.STRING
        }
    }
    const config = {
        timestamps: false,
        tablename: 'tables'
    }

    const Table = Sequelize.define(alias,cols,config)
    Table.associate = (models) => {
        Table.hasMany/(models.Reservation, {
            as: 'tables',
            foreignKey: 'table_id'
        })
    }
    return Table;
}