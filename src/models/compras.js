'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    static associate(models) {
    }
  };
  Compras.init({
    id_cliente: DataTypes.INTEGER,
    nome_cliente: DataTypes.STRING,
    id_livro: DataTypes.INTEGER,
    titulo_livro: DataTypes.STRING,
    preco_livro: DataTypes.FLOAT,
    id_funcionario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};

