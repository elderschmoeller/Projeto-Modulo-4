'use strict';
// const { BOOLEAN } = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    static associate(models) {
    }
  };
  Livros.init(
    {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    genero: DataTypes.STRING,
    editora: DataTypes.STRING,
    preco: DataTypes.DECIMAL(5,2),
  }, 
  {
    sequelize,
    modelName: 'Livros',
  });
  return Livros;
};