var fs = require('fs');
const Web3 = require('../ethereum/createWeb3');
const web3 = Web3.getWeb3Instance();

const MobileManufacturerFactory = require('./build/MobileManufacturerFactory.json');

module.exports = {
    
    
    getInstance : function(){
        address = fs.readFileSync(process.cwd() +'/ethereum/contractAddress.txt','utf8')
        return new web3.eth.Contract(JSON.parse(MobileManufacturerFactory.interface), address);
    }
};
