const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const projectPath = path.resolve(__dirname, 'contracts', 'Project.sol');
const source = fs.readFileSync(projectPath, 'utf-8');

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

con
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    );
}