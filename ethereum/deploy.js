var fs = require('fs');
const Web3 = require('../ethereum/createWeb3');
const web3 = Web3.getWeb3Instance();

const mobileManufacturerFactory = require('../ethereum/build/MobileManufacturerFactory.json')

const deployContracts = async () => {
    const accounts = await web3.eth.getAccounts();

     const mobileManufacturerResult = await new web3.eth.Contract(JSON.parse(mobileManufacturerFactory.interface))
     .deploy({data : mobileManufacturerFactory.bytecode})
     .send({gas : '3000000', from : accounts[0]});
    
    fs.writeFile("contractAdd.txt", mobileManufacturerResult.options.address, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("contract address was saved!");
    });
     console.log("mobile manufacturer contract deployed to ", mobileManufacturerResult.options.address);

}

deployContracts()
