import express,{Request, Response, NextFunction} from "express"
import ProductService from "../services/product.service"

 class ProductController{

    index(req: Request,res :Response, next: NextFunction){
        return res.json({
            message: "succeess"
        })
    }


    store(req: Request, res: Response, next: NextFunction){
        let payload = req.body
        let result =  ProductService.create(payload)
        return res.json({
            data: result,
            status: 200
        })
        // ProductService.create(payload)
    }

    delete(req: Request, res: Response, next: NextFunction) {

    }
}

export = new ProductController()