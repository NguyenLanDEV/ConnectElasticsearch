import ElasticsearchHelper from "../helpers/elasticsearch.helper";
import ProductModel from "../models/product.model";
const _ = require('lodash');

export default class ProductService{
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
