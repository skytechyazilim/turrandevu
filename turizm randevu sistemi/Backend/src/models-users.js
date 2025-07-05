const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  role: DataTypes.ENUM('admin', 'sales', 'guide', 'customer'),
  password_hash: DataTypes.STRING,
}, { timestamps: true });

module.exports = User;7