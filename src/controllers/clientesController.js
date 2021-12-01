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
      const idClientes = await db.Clientes.findOne({
        where: { id: Number (id) },
      });
      return res.status(200).json(idClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async save(req, res) {
    const novosClientes = req.body;
    try {
      const createClientes = await db.Clientes.create(novosClientes);
      return res.status(200).json(createClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      console.log(id)
      const a = await db.Clientes.update({nome_completo:req.body.nome_completo}, { where: { id: Number (id) } });
      const infoAtt = await db.Clientes.findOne({
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
      await db.Clientes.destroy({
        where: { id: Number (id) },
      });
      return res.status(200).json({ message: `id: ${id} excluído com sucesso!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClientesController;
