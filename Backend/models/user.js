const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            provider: { // 로그인 하는 방식 기록
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            },
            snsId: {    // ex) 카카오
                type: Sequelize.STRING(30),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false, // field 이름을 camelCase로 유지
            modelName: 'User',  
            tableName: 'users',
            paranoid: true, // deletedAt? 자동 생성, 레코드 실제로 삭제 대신 필드에 삭제된 시간이 기록
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Photo);
        db.User.hasMany(db.Location);
    }
}