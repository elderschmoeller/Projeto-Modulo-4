"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Clientes", [
        {
          nome: "Murilo Daniel Bernardes",
          email: "murilodanielbernardes_@cabletech.com.br",
          idade: 26,
          cpf: '89209-285',
          endereco: "Rua Heinz Pahl",
          telefone: 47991217929,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Gabrielly Letícia Mendes",
          email: "gabriellyleticiamendes@gerdau.com.br",
          idade: 31,
          cpf: '81690-310',
          endereco: "Avenida Pedro Ludovico Teixeira, s/n",
          telefone: 63984366497,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Osvaldo Vitor da Silva",
          email: "osvaldovitordasilva@aliancacadeiras.com.br",
          idade: 42,
          cpf: '69914-474',
          endereco: "Avenida Rui Baraúna",
          telefone: 95997337656,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Agatha Isabelle Aparecida Diass",
          email: "agathaisabelleaparecidadias@panevale.com.br",
          idade: 19,
          cpf: '27534-970',
          endereco: "Rua Castro Alves",
          telefone: 65993553014,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
