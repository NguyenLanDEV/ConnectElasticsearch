import express from "express"
import productController from "../../controllers/product.controller"

const router = express.Router()

router.get("/product", productController.index)
router.get('/product/:id', productController.show)
router.post('/product/:id', productController.update)
router.post('/product', productController.store)
router.delete("/product/:id", productController.delete)

module.exports = router