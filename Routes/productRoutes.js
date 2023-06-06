const express = require("express");
const {
  getProduct,
  postProduct,
  getselectedProduct,
  deleteProduct,
  updateProduct,
  countProduct,
  featuredProduct,
  selectedCategoryProduct,
  uploadOptions,
  updateProductGallery,
} = require("../Controllers/productController");
const { userValidateToken, adminValidateToken } = require("../Middleware/tokenHandeller");

router = express.Router();

router.route("/")
  .get(getProduct)
  .post( adminValidateToken,uploadOptions.single('image'), postProduct);

router
  .route("/:id")
  .get(getselectedProduct)
  .delete(adminValidateToken, deleteProduct)
  .put(adminValidateToken, updateProduct);

router.get("/get/count",adminValidateToken, countProduct);
router.get("/get/featured",userValidateToken, featuredProduct);//for automatic verification using express-jwt we need to call validateToken function, for manual we 
// just need to pass verification logic implementation
router.get("/get/selected",userValidateToken, selectedCategoryProduct);
router.put('/galleryUpload/:id',adminValidateToken,uploadOptions.array('images',5),updateProductGallery)
module.exports = router;
