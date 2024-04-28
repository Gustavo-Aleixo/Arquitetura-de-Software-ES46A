import AbstractFormater from './AbstractFormater.js';

export default class FormaterHTML2 extends AbstractFormater {

  output (cities) {
    let html = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <header>
        <h1>Relatório de Nomes de Cidades</h1>
      </header>
      <main>
        <ul>
`;

    for (let i = 0; i < cities.length; i++) {
      html += `          <li><span class="cidade">${cities[i]['Nome']}</span></li>`;
      if (i < cities.length - 1) {
        html += '\n';
      }
    }

    html += `
        </ul>
      </main>
    </body>
  </html>\n`;

    return html;
  }
}
