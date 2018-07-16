"# Mobile Manufacturer" 

Steps:

1. install local testrpc and start 
    >npm install -g ethereumjs-testrpc
    >testrpc


2. install node modules
   > npm install

if you are using windows machine and face any issue while installing the node modules then need to install window build tools.

open powershell 

npm install --global --production windows-build-tools


3. install bower components
   > bower install   

4. compile the smart contract code
    > cd ethereum
    > node compile.js

5. start the local testrpc networkg
    > testrpc

6. deploy the smartcontrats to the testrpc network
    go to ethereum folder and do node deploy.js

    > cd etehreum
    > node deploy.js

    After that you will get one contract address take that address and use in mobileManufacturerFactory.js file for testing purpose

    Replace with new address

    getInstance : function(){
        return new web3.eth.Contract(JSON.parse(MobileManufacturerFactory.interface), '0xFb136D19b99a3Cd68184F1421Fa095721AF0D39A');
    }


7. start the node server

    > node server.js

8. open the browser the hit http://localhost:3000  

9. To solve permission denied issue with bower, use these command:
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
sudo chown -R $USER:$GROUP ~/.cache
