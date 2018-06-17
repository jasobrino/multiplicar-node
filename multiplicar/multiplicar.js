// requireds
const fs = require('fs'); //paquete file system
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('-------------------'.green);
    console.log(`tabla de ${ base }`.green);
    console.log('-------------------'.green);

    for (let n = 1; n <= limite; n++) {
        console.log(`${base} * ${n} = ${base * n}`);
    }
}

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base } No es un número`);
            return;
        }

        let data = '';

        for (let n = 1; n <= limite; n++) {
            data += `${base} * ${n} = ${base * n}\n`;
        }
        let nombreArchivo = `tablas/tabla-${ base }.txt`
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err) reject(err)
            else
                resolve(nombreArchivo);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}