import AbstractFormater from './AbstractFormater.js';

export default class FormaterTXT extends AbstractFormater {

  output (cities) {
    let txt = `\n\nRelatório de Nomes de Cidades\n=============================\n\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `* ${cities[i]['Nome']}\n`;
    }

    return txt;
  }
}
