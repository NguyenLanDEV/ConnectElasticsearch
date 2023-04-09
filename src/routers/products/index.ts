import express from "express"
import productController from "../../controllers/product.controller"

const router = express.Router()

router.get("/product", productController.index)

router.post('/product', productController.store)

module.exports = router