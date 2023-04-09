import { Client } from "@elastic/elasticsearch"
import initElastic from "../dbs/init.elasticsearch"


export default class ElasticsearchHelper {

    static async search(index: string, query: object){
        const response = await initElastic.client?.search({
           index: index,
           query: query
        })

        return response
    }

    static async update(index: string, id: string, body: object){
        const response =  await initElastic.client?.update({
            index: index,
            id: id,
            doc: body
         })
        
         return response
    }

    static async create(index: string, body: object){
        const response = await initElastic.client?.index({
            index: index,
            document: body
        })

        return response
    }
}