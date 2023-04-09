const client = require("./src/dbs/init.elastic").client
const { Product } = require("./src/models/model")

client.indices.delete({
    index: Product.index,
})

client.indices.create({
    index: Product.index,
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
                    'type': 'keyword'
                },
                "color": {
                    'type': 'keyword'
                },
                "size": {
                    'type': 'long'
                },
                "title": {
                    'type': 'keyword'
                },
                "detail": {
                    'type': 'keyword'
                },
                "price": {
                    'type': "integer"
                }
            }
        }

    }
}, (err, resp) => {
    console.log('wtf');
    if (err) console.log(err.message);
    else console.log(resp);
});