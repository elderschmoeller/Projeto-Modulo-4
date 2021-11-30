'use strict';
// const { BOOLEAN } = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
    }
  };
  Clientes.init(
    {
    nome_completo: DataTypes.STRING,
    email: DataTypes.STRING,
    idade: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    genero_preferido: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};