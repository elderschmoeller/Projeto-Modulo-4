"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Clientes", [
        {
          nome_completo: "Murilo Daniel Bernardes",
          email: "murilodanielbernardes_@cabletech.com.br",
          idade: 26,
          cpf: '89209285',
          endereco: "Rua Heinz Pahl",
          telefone: 217929,
          genero_preferido: 'Autoajuda',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Gabrielly Letícia Mendes",
          email: "gabriellyleticiamendes@gerdau.com.br",
          idade: 31,
          cpf: '81690310',
          endereco: "Avenida Pedro Ludovico Teixeira, s/n",
          telefone: 366497,
          genero_preferido: 'Ciências',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Osvaldo Vitor da Silva",
          email: "osvaldovitordasilva@aliancacadeiras.com.br",
          idade: 42,
          cpf: '69914474',
          endereco: "Avenida Rui Baraúna",
          telefone: 337656,
          genero_preferido: 'Direito',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Agatha Isabelle Aparecida Diass",
          email: "agathaisabelleaparecidadias@panevale.com.br",
          idade: 19,
          cpf: '27534970',
          endereco: "Rua Castro Alves",
          telefone: 553014,
          genero_preferido: 'História',
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
