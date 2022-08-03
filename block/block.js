const sha256 = require('crypto-js/sha256');

class Block{
    constructor(data){
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }

    generateHash(){
        let self = this;
        
        return new Promise((resolve, reject) => {
            self.hash = sha256(JSON.stringify(self));

            if(self.hash){
                resolve(self)
            }
            else{
                reject(Error("Erro ao gerar o hash."))
            }
        })
    }
}

module.exports.Block = Block;