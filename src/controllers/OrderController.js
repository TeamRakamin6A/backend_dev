const createOrder = (req, res, next) => {
  try {
    const {
      invoice,
      total_price,
      warehouse_id,
      customer_id,
      status,
      order_item_ids,
    } = req.body;
  } catch (error) {
    next(error);
  }
};

const getAllOrder = (req, res, next) => {};

const getOrderById = (req, res, next) => {};

const updateOrder = (req, res, next) => {};

const deleteOrder = (req, res, next) => {};

module.exports = {
  createOrder,
  getAllOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};