import fs from 'node:fs';

export default class FileReader {

  read(filename) {
    return fs.readFileSync(filename);
  }
}