export default class Facade {
  
  constructor (format, formaterFactory, fileReader, jsonParser) {
    
    this.formaterStrategies = {
      'txt': formaterFactory.createFormater('txt'),
      'html1': formaterFactory.createFormater('html1'),
      'html2': formaterFactory.createFormater('html2'),
    };
    this.formaterStrategy = this.formaterStrategies[format];
    this.fileReader = fileReader;
    this.jsonParser = jsonParser;
  }

  report (filename) {
    const cities_json = this.fileReader.read(filename);
    const cities = this.jsonParser.parse(cities_json);
    return this.formaterStrategy.output(cities);
  }
}
