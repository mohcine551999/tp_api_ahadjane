'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    //relation de (n,n) entre tag et article
    static associate(models) {
      Tag.belongsToMany(models.Article, {through: 'ArticleTags'})
    }
  };
  Tag.init({
    name: {
      type:DataTypes.STRING,
      unique:true
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};