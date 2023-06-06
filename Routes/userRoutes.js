const express = require("express");
const { postUsers, getUsers, userLogin, updateAdmin, deleteUser, updateUser } = require("../Controllers/userController.js");
const { loginValidator } = require("../Middleware/validatorHandeller.js");
const { userValidateToken, adminValidateToken } = require("../Middleware/tokenHandeller.js");



router = express.Router();

// router.use(validateToken)
router.route("/")
    .post(postUsers)
    .get(adminValidateToken,getUsers)//for manual we just need to pass verification logic implementation
    
    
router.post('/login',[loginValidator],userLogin)//by using arrays we can use more than one middleware

router.put("/promoteToAdmin",adminValidateToken, updateAdmin)

router.route("/:id")
    .put(userValidateToken,updateUser)
    .delete(userValidateToken,deleteUser)//for automatic verification using express-jwt we need to call validateToken function, 
module.exports = router;
