import ElasticsearchHelper from "../helpers/elasticsearch.helper";
import ProductModel from "../models/product.model";
import { Request } from "express";
const _ = require('lodash');

export default class ProductService{

  static async index(req: Request){
    const {minPrice, maxPrice, name, from = 0, size = 15} = req.body
    let filterQueries = []
    let matchQueries:any = []

    if(minPrice){
      filterQueries.push({range: {price: {'gte': minPrice}}})
    }

    if(maxPrice) {
      filterQueries.push({range: {price: {'lte':maxPrice }}})
    }

    if(name){
      matchQueries.push(  {match: {name: name } } )
    }
    
    let query =  {
      bool: {
        must: [
          ...matchQueries
        ],
        filter: [
          ...filterQueries
        ]
        
      }
    }

    return await ElasticsearchHelper.search({index: ProductModel.index, query: query, from, size})
  }

  static async create(payload: object){
    const productModel = new ProductModel(payload)
    return await ElasticsearchHelper.create(ProductModel.index, productModel)
  }

  static async update(id: string, payload: object){
    const productModel = new ProductModel(payload)
    return await ElasticsearchHelper.update(ProductModel.index, id, productModel)
  }

  static async  delete(id: string){
      return await ElasticsearchHelper.delete(ProductModel.index, id)
  }

  static async findById(id: string){
    return await ElasticsearchHelper.getByID(ProductModel.index, id)
  }
}
