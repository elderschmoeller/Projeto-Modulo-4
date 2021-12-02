const db = require("../models/index");

class LivroController {
  static async index(req, res) {
    try {
      const allLivros = await db.Livros.findAll();
      return res.status(200).json(allLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async show(req, res) {
    const { id } = req.params;
    try {
      const idLivros = await db.Livros.findOne({
        where: { id: Number (id) },
      });
      return res.status(200).json(idLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async save(req, res) {
    const novosLivros = req.body;
    try {
      const createLivro = await db.Livros.create(novosLivros);
      return res.status(200).json(createLivro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;

    try {
      await db.Livros.update(novaInfo, { where: { id: Number (id) } });
      const infoAtualizada = await db.Livros.findOne({
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
      await db.Livros.destroy({
        where: { id: Number (id) },
      });
      return res.status(200).json({ message: `id: ${id} foi excluido` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LivroController;
