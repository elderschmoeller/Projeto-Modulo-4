'use strict';
// const { BOOLEAN } = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    static associate(models) {
    }
  };
  Funcionarios.init(
    {
    nome_completo: DataTypes.STRING,
    cargo: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    turno: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};