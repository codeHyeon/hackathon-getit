const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const User = require('./user');
const Post = require('./post');
const Location = require('./location');
const Photo = require('./photo');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Location = Location;
db.Photo = Photo;
// db.Sequelize = Sequelize;

// db.Post = require('./post')(sequelize, Sequelize);
// db.Photo = require('./photo')(sequelize, Sequelize);
// db.User = require('./user')(sequelize, Sequelize);
// db.Location = require('./location')(sequelize, Sequelize);

User.init(sequelize); 
Post.init(sequelize);
Location.init(sequelize);
Photo.init(sequelize);

User.associate(db);
Post.associate(db);
Location.associate(db);
Photo.associate(db);

module.exports = db;
