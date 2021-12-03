const db = require("../models/index");

class FuncionariosController {
  static async index(req, res) {
    try {
      const allFuncionarios = await db.Funcionarios.findAll();
      return res.status(200).json(allFuncionarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async show(req, res) {
    const { id } = req.params;
    try {
      const idFuncionarios = await database.Funcionarios.findOne({
        where: { id: Number (id) },
      });
      return res.status(200).json(idFuncionarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async save(req, res) {
    const novosFuncionarios = req.body;
    try {
      const createFuncionarios = await database.Clientes.create(novosFuncionarios);
      return res.status(200).json(createFuncionarios);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      await database.Funcionarios.update(novaInfo, { where: { id: Number (id) } });
      const infoAtt = await database.Funcionarios.findOne({
        where: { id: Number (id) },
      });

      return res.status(200).json(infoAtt);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async remove(req, res) {
    const { id } = req.params;
    try {
      await database.Funcionarios.destroy({
        where: { id: Number (id) },
      });
      return res.status(200).json({ message: `id: ${id} excluído com sucesso!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FuncionariosController;
