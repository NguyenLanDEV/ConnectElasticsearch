import {Request, Response, NextFunction} from "express"
import ProductService from "../services/product.service"
import { schemaCreateForm, schemaUpdateForm } from "../routers/products/validator"

class ProductController{

    async index(req: Request,res :Response, next: NextFunction){
        let response = await ProductService.index(req)

        return res.json({   
            status: "success",
            from: req.body.from ?? 0,
            size: req.body.size ?? 15,
            data: response?.hits.hits
        })
    }

    async show(req: Request, res: Response, next: NextFunction){
        let id  = req.params.id
        
        let result = await ProductService.findById(id)
        return res.json({
            status: 'success',
            data: result
        })
    }

    async update(req: Request, res: Response, next: NextFunction){
        const payload = req.body
        const id = req.params.id
        const {error} = schemaUpdateForm.validate(payload, {abortEarly: false})

        if(error)
            return res.status(400).json({
                status: 'validator',
                code: 400,
                errors: error.details
            })
        
        let result = await ProductService.update(id, payload)
        return res.status(200).json({
            status: 'success',
            data: result
        })
    }

    async store(req: Request, res: Response, next: NextFunction){
        let payload = req.body
        const {error, warning, value} = schemaCreateForm.validate(payload, {abortEarly: false})
    
        if(error) {
            return res.status(400).json({
                code: 400,
                status: "validator",
                errors: error.details
            })
        }
        let result =  await ProductService.create(payload)

        return res.json({
            data: result,
            status: 'success',
            code: 201
        })
        // ProductService.create(payload)
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        let id = req.params.id
        let response = await ProductService.delete(id)
        return res.status(200).json({
            status: 'success',
            data: response
        })
    }
}

export = new ProductController()