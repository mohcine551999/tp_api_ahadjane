'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) { 
      //relation de (1,n) entre comment et article
      Comment.belongsTo(models.Article,{foreignKey: 'articleId'})
    }
  };
  Comment.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};