import BaseModel from "./baseModel.model"
const _ = require('lodash');

export default class ProductModel extends BaseModel{
    static index = "products"
    static validKeys = ['id', 'name', 'color', 'size', 'title', 'detail', 'price']

    public id?: number;
    public name?: string;
    public color?: string;
    public size?: number;
    public title?: string;
    public detail?: string;
    public price?: number;

    constructor(data: object){
        super()
        const filteredData = _.pick(data, ProductModel.validKeys)
        _.assign(this, filteredData)
    }

    getInfo() {
        return `Id: ${this.id}, Name: ${this.name}, Color: ${this.color}, Size: ${this.size}, Title: ${this.title}`;
    }
}