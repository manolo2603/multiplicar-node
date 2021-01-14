const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',

    }
}

const argv = require('yargs').command('listar', 'imprime en consola la tabla', opt)
    .command('crear', 'Genera un archio con la tabla', opt).help().argv;

module.exports = {
    argv
}