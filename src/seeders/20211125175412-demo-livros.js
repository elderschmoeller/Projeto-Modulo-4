"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Livros", [
        {
          titulo: 'O homem mais rico da Babilônia',
          autor: 'George S. Clason',
          genero: 'Autoajuda',
          editora: 'HarperCollins',
          preco: 12.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'Sapiens (Nova edição): Uma breve história da humanidade',
          autor: 'Yuval Noah Harari, Jorio Dauster, e outros.',
          genero: 'Ciências',
          editora: 'Companhia das Letras',
          preco: 29.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'George Orwell: 1984 + A revolução dos bichos: 2 em 1',
          autor: ' George Orwell',
          genero: 'Direito',
          editora: 'Temporalis',
          preco: 19.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: 'Escravidão - Volume 2: Da corrida do ouro em Minas Gerais até a chegada da corte de dom João ao Brasil',
          autor: 'Laurentino Gomes',
          genero: 'História',
          editora: 'Globo Livros',
          preco: 37.90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Livros", null, {});
  },
};
