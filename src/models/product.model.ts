import BaseModel from "./baseModel.model"
export default class Product extends BaseModel{
    static index = "products"
    
    public id: number;
    public name: string;
    public color: string;
    public size: number;
    public title: string;
    public detail: string;
    public price: number;

    constructor(id: number,name :string, color: string ,size: number, title: string, detail: string, price: number){
        super()
        this.id = id;
        this.name = name;
        this.color = color;
        this.size = size;
        this.title = title;
        this.detail = detail;
        this.price = price
    }

    getInfo() {
        return `Id: ${this.id}, Name: ${this.name}, Color: ${this.color}, Size: ${this.size}, Title: ${this.title}`;
    }
}