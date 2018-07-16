
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);

const mobileManufacturerFactoryPath = path.resolve(__dirname, 'contracts', 'MobileManufacturerFactory.sol');

const mobileManufacturerSource = fs.readFileSync(mobileManufacturerFactoryPath, 'utf8');

const mobileManufacturerFactoryOutput = solc.compile(mobileManufacturerSource, 1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in mobileManufacturerFactoryOutput) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        mobileManufacturerFactoryOutput[contract]
    );
}