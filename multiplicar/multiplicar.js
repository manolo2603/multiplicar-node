const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


let listaTabla = (base, limite = 10) => {
    console.log('================='.green);
    console.log(`========Tabla de ${base}=========`.red);
    console.log('================='.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    };
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`no es un numero= ${base}`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            //console.log('EL archivo a sido creado');
        });
    })
}
module.exports = {
    crearArchivo,
    listaTabla
}