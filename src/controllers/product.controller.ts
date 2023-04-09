import express,{Request, Response, Express, NextFunction} from "express"
import ProductService from "../services/product.service"

 class ProductController{

    index(req: Request,res :Response, next: NextFunction){
        req.body
        return res.json({
            message: "succeess"
        })
    }


    store(req: Request, res: Response, next: NextFunction){
        
        // ProductService.create(payload)
    }

    delete(req: Request, res: Response, next: NextFunction) {

    }
}

export = new ProductController()