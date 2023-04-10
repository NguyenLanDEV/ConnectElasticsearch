import express from "express"
import productController from "../../controllers/product.controller"
import { asyncHandlerHelper } from "../../helpers/asyncHandler.helper"
const router = express.Router()

router.get("/product", asyncHandlerHelper(productController.index))
router.get('/product/:id', asyncHandlerHelper(productController.show))
router.post('/product/:id', asyncHandlerHelper(productController.update))
router.post('/product', asyncHandlerHelper(productController.store))
router.delete("/product/:id", asyncHandlerHelper(productController.delete))

module.exports = router