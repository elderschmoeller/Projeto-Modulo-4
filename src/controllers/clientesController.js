const db = require("../models/index");

class ClientesController {
  static async index(req, res) {
    try {
      const allClients = await db.Clientes.findAll();
      return res.status(200).json(allClients);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async show(req, res) {
    const { id } = req.params;
    try {
      const idClientes = await database.Clientes.findOne({
        where: { id: Number (id) },
      });
      return res.status(200).json(idEntradas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async save(req, res) {
    const novosClientes = req.body;
    try {
      const createClientes = await database.Clientes.create(novosClientes);
      return res.status(200).json(createClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      await database.Entradas.update(novaInfo, { where: { id: Number (id) } });
      const infoAtualizada = await database.Entradas.findOne({
        where: { id: Number (id) },
      });

      return res.status(200).json(infoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async remove(req, res) {
    const { id } = req.params;
    try {
      await database.Clientes.destroy({
        where: { id: Number (id) },
      });
      return res.status(200).json({ message: `id: ${id} foi excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClientesController;
