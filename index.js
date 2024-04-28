import readline from 'node:readline';
import GenerateReportCommand from './src/GenerateReportCommand.js';
import Facade from './src/Facade.js';
import FormaterFactory from './src/FormaterFactory.js';
import FileReader from './src/FileReader.js';
import JsonParser from './src/JsonParser.js';

let formaterFactory = new FormaterFactory();
let fileReader = new FileReader();
let jsonParser = new JsonParser();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exibirMenu() {
  console.log('\n\n=========== Menu ===========');
  console.log('1. Relatório em Texto');
  console.log('2. Relatório em HTML - Tipo 1');
  console.log('3. Relatório em HTML - Tipo 2');
  console.log('4. Sair');
  console.log('============================');
  process.stdout.write('Digite sua opção: ');
}

exibirMenu();
rl.on('line', (input) => {
  let facade, command;
  switch(input.trim()) {
    case '1':
      facade = new Facade('txt', formaterFactory, fileReader, jsonParser);
      command = new GenerateReportCommand(facade);
      break;
    case '2':
      facade = new Facade('html1', formaterFactory, fileReader, jsonParser);
      command = new GenerateReportCommand(facade);
      break;
    case '3':
      facade = new Facade('html2', formaterFactory, fileReader, jsonParser);
      command = new GenerateReportCommand(facade);
      break;
    case '4':
      rl.close();
      return;
    default:
      console.log('\nOpção inválida. Por favor, escolha uma opção do menu.');
      exibirMenu();
      return;
  }
  const output = command.execute();
  console.log(output);
  exibirMenu();
});