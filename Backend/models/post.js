const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            postId: {       // post 번호
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {        // post 제목
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            content: {      // 내용
                type: Sequelize.STRING(140),
                allowNull: false,
            },
            img: {          // 사진
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, { 
            sequelize,
            timestamps: true,
            underscored: false, // field 이름을 camelCase로 유지
            modelName: 'Post',  
            tableName: 'posts',
            paranoid: false, // deletedAt? 자동 생성, 레코드 실제로 삭제 대신 필드에 삭제된 시간이 기록
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsTo(db.Location);   
    }
}

