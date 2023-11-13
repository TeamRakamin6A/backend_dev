const { Category } = require("../models");
const { Op } = require("sequelize");

const addCategory = async (req, res, next) => {
  try {
    const { title } = req.body;

    await Category.create({ title });

    res
      .status(200)
      .json({ status: true, message: "Category Created Successfully" });
  } catch (error) {
    console.log(error.name);
    next(error);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const nameFilter = req.query.q || "";

    const offset = (page - 1) * limit;

    const { count, rows } = await Category.findAndCountAll({
      where: {
        title: {
          [Op.iLike]: `%${nameFilter}%`,
        },
      },
      offset,
      limit,
    });

    const totalPages = Math.ceil(count / limit);

    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;

    const paginationInfo = {
      totalItems: count,
      totalPages,
      currentPage: page,
      nextPage,
      prevPage,
      data: rows,
    };

    return res.status(200).json(paginationInfo);
  } catch (err) {
    next(err);
  }
};

const getCategorybyId = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      throw { name: "ErrorNotFound" };
    }
    return res.status(200).json({ data: category });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { title } = req.body;
    const { id } = req.params;

    const category = await Category.findOne({
      where: {
        id,
      },
    });

    if (!category) {
      throw { name: "ErrorNotFound" };
    };

    await category.update({title})

    res.status(200).json({
      message: "Category Updated Successfully",
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const {id} = req.params
    const findCategory = await Category.findByPk(id);
    if (!findCategory) {
      throw { name: "ErrorNotFound" };
    }
    await findCategory.destroy();
    return res.status(200).json({ message: "Delete Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCategory,
  getCategorybyId,
  getAllCategory,
  updateCategory,
  deleteCategory,
};