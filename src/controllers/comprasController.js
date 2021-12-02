const db = require("../models/index");

class CompraController {
  static async index(req, res) {
    try {
      const allCompras = await db.Compras.findAll();
      return res.status(200).json(allCompras);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async show(req, res) {
    const { id } = req.params;
    try {
      const idCompras = await db.Compras.findOne({
        where: { id: Number (id) },
      });
      return res.status(200).json(idCompras);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async save(req, res) {
    const novasCompras = req.body;
    try {
      const createCompra = await db.Compras.create(novasCompras);
      return res.status(200).json(createCompra);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      await db.Compras.update(novaInfo, { where: { id: Number (id) } });
      const infoAtualizada = await db.Compras.findOne({
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
      await db.Compras.destroy({
        where: { id: Number (id) },
      });
      return res.status(200).json({ message: `id: ${id} foi excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = CompraController;
