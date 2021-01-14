const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');

const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar.js');

//let base = 100;
///console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.limite);
//console.log(argv);
//let parametro = argv[2];

//let base = parametro.split('=')[1];
//console.log(base);
//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listaTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.green(archivo))).catch(e => console.log(e));
        break;
        defaul: 'comando no reconocido'


}