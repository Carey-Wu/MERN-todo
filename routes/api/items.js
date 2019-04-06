const router = require("express").Router();

const itemsController = require("../../controller/itemsController");

//Match with "/api/items"

router.route("/")
    .get(itemsController.findAll)
    .post(itemsController.create)

router.route("/:id")
    .get(itemsController.findById)
    .put(itemsController.update)
    .delete(itemsController.remove)

module.exports = router;