const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Category extends Model {}

Category.init(
    {
        id: DataTypes.INTEGER,
        
    }
)