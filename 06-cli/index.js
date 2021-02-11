const commander = require('commander');
const Heroi = require('./heroi');
const Database = require('./database');

(async () => {

  commander
    .version('v1')
    .option('-n, --nome [value]', 'adicionar nome')
    .option('-p, --poder [value]', 'adicionar poder')

    .option('-c, --cadastrar', 'cadastrar Heroi')
    .option('-r, --listar [value]', 'listar herois pelo id')
    .option('-u, --atualizar [value]', 'atualizar heroi pelo id')
    .option('-d, --remover [value]', 'remover heroi pelo id')
    .parse(process.argv);

  const heroi = new Heroi(commander);
  try {

    if (commander.opts().cadastrar) {
      await Database.cadastrar(heroi);
      console.log('item cadastrado com sucesso!');
      return;
    }

    if (commander.opts().listar) {
      const id = commander.listar;
      const result = await Database.listar(id);
      console.log(result);
      return;
    }

    if (commander.opts().atualizar) {
      const id = commander.atualizar;
      console.log('id', id);
      await Database.atualizar(id, heroi);
      console.log('item atualizado com sucesso!');
      return;
    }

    if (commander.opts().remover) {
      const id = commander.remover;
      await Database.remover(id);
      console.log('item removido com sucesso!');
      return;
    }
  } catch (error) {
    console.error('DEU RUIM', error);
    return;
  }
})();