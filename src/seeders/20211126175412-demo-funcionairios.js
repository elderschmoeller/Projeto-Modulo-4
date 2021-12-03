"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Funcionarios", [
        {
          nome_completo: "Daniel Bernardes Valber" ,
          cargo: "vendedor",
          salario: 50.25,
          turno: "tarde" ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Daniela Francisca Izzone",
          cargo: "gerente",
          salario: 51.25,
          turno: "manha" ,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Bernado Domagala Perez",
          cargo: "atendente",
          salario: 55.25,
          turno: "diurno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Elzida Flores Rocha",
          cargo: "balconista",
          salario: 56.25,
          turno: "integral",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Funcionarios", null, {});
  },
};
