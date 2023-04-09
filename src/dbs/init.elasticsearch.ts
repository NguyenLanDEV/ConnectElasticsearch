import { Client } from '@elastic/elasticsearch'

class Database {
    static instance: Database
    public client?: Client

    constructor(){
        this.connect()
    }

    connect(){
        this.client = new Client({
            node: 'http://localhost:9200',
        })

        setInterval( function() {
            Database.getInstance().client?.ping()
            .catch(err => console.log(err))
        }, 5000)

    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }
}

export = Database.getInstance()

