import fs from 'fs';

class FileController {
  index(req, res) {
    const src = fs.createReadStream('./src/assets/the-trooper.mp3');
    src.pipe(res);
  }
}

export default new FileController();
