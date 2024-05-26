const Sequelize = require('sequelize');

module.exports = class Photo extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            photoId: {       // photo 번호
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
        }, { 
            sequelize,
            timestamps: true,
            underscored: false, // field 이름을 camelCase로 유지
            modelName: 'Photo',  
            tableName: 'photos',
            paranoid: false, // deletedAt? 자동 생성, 레코드 실제로 삭제 대신 필드에 삭제된 시간이 기록
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Photo.belongsTo(db.User);
        db.Photo.belongsTo(db.Location); 
    }
}
