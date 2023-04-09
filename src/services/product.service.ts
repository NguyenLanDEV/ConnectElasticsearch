import ElasticsearchHelper from "../helpers/elasticsearch.helper";
import ProductModel from "../models/product.model";
import UserModel from "../models/user.model";
const _ = require('lodash');

export default class ProductService{
  static create(payload: object){
    let productModel = new ProductModel(payload)
    productModel.assignTo(payload)
    new UserModel().assignTo(payload)
    return productModel
    // ElasticsearchHelper.create(ProductModel)
  }

  static update(){

  }

  static delete(){

  }

  static findById(){

  }
}
