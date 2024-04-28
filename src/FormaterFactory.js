import FormaterTXT from './FormaterTXT.js';
import FormaterHTML1 from './FormaterHTML1.js';
import FormaterHTML2 from './FormaterHTML2.js';

export default class FormaterFactory {
  
  createFormater(format) {
    switch (format) {
      case 'txt':
        return new FormaterTXT();
      case 'html1':
        return new FormaterHTML1();
      case 'html2':
        return new FormaterHTML2();
      
      default:
        throw new Error(`Formato inválido: ${format}`);
    }
  }
}