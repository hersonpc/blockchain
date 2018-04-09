# Blockchain

Blockchain - Teste de conceito


Executando o script principal

```
node src/main.js
```

Exemplo inicial de uma chain:

```json
{
    "chain": [
        {
            "timestamp": 1523290806695,
            "transaction": {
                "block": "genesis"
            },
            "previousHash": "0",
            "hash": "76a2b3b99b0881ccf12ef8f9cdae24a1f7ec792cb73f1b3567a192adb1c4da03"
        },
        {
            "timestamp": 1523290806701,
            "transaction": {
                "valor": 2
            },
            "previousHash": "76a2b3b99b0881ccf12ef8f9cdae24a1f7ec792cb73f1b3567a192adb1c4da03",
            "hash": "c36e3aef65cbad7e4f4c823cb1020be8ae79513b7d7c5c399971858295d05baa"
        },
        {
            "timestamp": 1523290806706,
            "transaction": {
                "valor": 1
            },
            "previousHash": "c36e3aef65cbad7e4f4c823cb1020be8ae79513b7d7c5c399971858295d05baa",
            "hash": "ee882478651bb5020983ef740a8ba7fa4840a24ef172cc090eb604521536e7b1"
        }
    ]
}
``
