const fs = require('fs');
const path = require('path');

const leerArchivo = (nameFile) =>{
    const filePath = path.join(__dirname, "../data", nameFile + ".json");
    let products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return products
}

const escribirArchivo = (newArray, nameFile)=>{
    const pathFile = path.join(__dirname, "../data", nameFile + ".json");
    let dataJson = JSON.stringify(newArray);
    fs.writeFileSync(pathFile, dataJson, 'utf-8')
}

module.exports = { leerArchivo, escribirArchivo };
