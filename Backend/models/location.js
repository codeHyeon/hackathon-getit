const Sequelize = require('sequelize');

module.exports = class Location extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            locationId: {       // location 번호
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            place: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false, // field 이름을 camelCase로 유지
            modelName: 'Location',  
            tableName: 'locations',
            paranoid: false, // deletedAt? 자동 생성, 레코드 실제로 삭제 대신 필드에 삭제된 시간이 기록
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Location.belongsTo(db.User);   
        db.Location.hasMany(db.Photo);
        db.Location.hasMany(db.Post);
    }
}
