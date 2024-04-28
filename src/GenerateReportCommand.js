import Command from './Command.js';

export default class GenerateReportCommand extends Command {

  constructor(facade) {
    super();
    this.facade = facade;
  }

  execute() {
    const filename = './data/cidades-2.json';
    return this.facade.report(filename);
  }
}