const { Client } = require("@elastic/elasticsearch");

const client = new Client({
    node: "http://localhost:9200"
})
client.indices.delete({
    index: 'products',
}).then(res => {
    client.indices.create({
        index: 'products',
        body: {
            'settings': {
                'analysis':
                {
                    "analyzer": {
                        "index_analyzer": {
                            "tokenizer": "standard",
                            "filter": [
                                "lowercase",
                            ]
                        },
                        "search_analyzer": {
                            "tokenizer": "standard",
                            "filter": [
                                "lowercase",
                                "synonym_filter"
                            ]
                        }
                    },
                    "filter": {
                        "synonym_filter": {
                            "type": "synonym_graph",
                            "synonyms_path": "synonyms.txt",
                            "updateable": true
                        }
                    }
                }
            },
            'mappings':
            {
                'properties': {
                    'name': {
                        'type': 'text',
                        "analyzer": "index_analyzer",
                        "search_analyzer": "search_analyzer"
                    },
                    "color": {
                        'type': 'text'
                    },
                    "size": {
                        'type': 'long'
                    },
                    "title": {
                        'type': 'text'
                    },
                    "detail": {
                        'type': 'text'
                    },
                    "price": {
                        'type': "integer"
                    }
                }
            }
    
        }
    }, (err, resp) => {
        if (err) console.log(err.message);
        else console.log(resp);
    });
})

