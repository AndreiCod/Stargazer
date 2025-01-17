const router = require("express").Router();
const controller = require("./controller");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/getprofile", controller.getProfile);
router.post("/getsearchedprofile", controller.getsearchedprofile);
router.post("/editprofile", controller.editprofile);



module.exports = router


