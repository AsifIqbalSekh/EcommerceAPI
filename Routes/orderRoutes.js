const express = require("express");
const {
  getOrders,
  postOrder,
  updateOrder,
  deleteOrder,
  getplacedOrders,
  getEarning,
  getOrderHistory,
} = require("../Controllers/orderController.js");
const {
  userValidateToken,
  adminValidateToken,
} = require("../Middleware/tokenHandeller.js");

router = express.Router();

router
  .route("/")
  .get(adminValidateToken, getOrders)
  .post(userValidateToken, postOrder);
router.put("/placeOrder", userValidateToken, updateOrder);
router.delete("/cancelOrder", userValidateToken, deleteOrder);
router.get("/allPlacedOrder", adminValidateToken, getplacedOrders);
router.get("/get/totalEarning", adminValidateToken, getEarning);
router.get("/get/history", userValidateToken, getOrderHistory);

module.exports = router;
