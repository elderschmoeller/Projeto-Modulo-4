"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Compras", [
      {
        id_cliente: 8,
        nome_cliente: "Murilo Daniel Bernardes",
        id_livro: '36985',
        titulo_livro: 'Diário de uma paixão',
        preco_livro: '34.90',
        id_funcionario: '14785',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      {
        id_cliente: 9,
        nome_cliente: 'Gabrielly Letícia Mendes',
        id_livro: '41235',
        titulo_livro: 'O colecionador de ossos',
        preco_livro: '25.95',
        id_funcionario: '75315',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, 
      {
        id_cliente: 10,
        nome_cliente: 'Osvaldo Vitor da Silva',
        id_livro: '46972',
        titulo_livro: 'Duna',
        preco_livro: '84.90',
        id_funcionario: '83149',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        id_cliente: 11,
        nome_cliente: 'Agatha Isabelle Aparecida Dias',
        id_livro: '36214',
        titulo_livro: 'It-A coisa',
        preco_livro: '48.90',
        id_funcionario: '73915',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Compras", null, {});
  },
};
