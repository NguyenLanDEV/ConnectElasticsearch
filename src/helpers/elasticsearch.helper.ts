import initElastic from "../dbs/init.elasticsearch"
import  { ElasticsearchError} from '../utils/exception.util'

export default class ElasticsearchHelper {

    static async search(options: object){
        const response = await initElastic.client?.search(options).catch(err => {
            if(err['name'] && err['name'] === "ResponseError"){
                console.log(err['meta']['body'])
                throw new ElasticsearchError(err)
            }
            throw err
        })

        return response
    }

    static async getByID(index: string, id: string){
        const response = await initElastic.client?.get(
            {
                index: index,
                id: id
            }
        ).catch(err => {
            if(err['name'] && err['name'] === "ResponseError"){
                throw new ElasticsearchError("document missing")
            }
            throw err
        })

        return response
    }

    static async update(index: string, id: string, body: object){
        const response =  await initElastic.client?.update({
            index: index,
            id: id,
            doc: body
         }).catch(err => {
            if(err['name'] && err['name'] === "ResponseError"){
                throw new ElasticsearchError("document missing")
            }
            throw err
        })
        
         return await response
    }

    static async create(index: string, body: object){
        const response = await initElastic.client?.index({
            index: index,
            document: body
        }).catch(err => {
            if(err['name'] && err['name'] === "ResponseError"){
                throw new ElasticsearchError("document missing")
            }
            throw err
        })

        return response
    }

    static async delete(index: string, id: string) {
        const response = await initElastic.client?.delete({
            index: index,
            id: id
        }).catch(err => {
            if(err['name'] && err['name'] === "ResponseError"){
                throw new ElasticsearchError("document missing")
            }
            throw err
        })

        return response
    }
}