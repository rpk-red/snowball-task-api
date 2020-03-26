const sharp = require('sharp');
const path = require('path');
const util = require('../routes/util/util');


class Scale {
  constructor(folder) {
    this.folder = folder;
  }

  async save(file, scales) {
    const { buffer, mimetype } = file;
    let fname;
    let fpath;
    const retValues = [];

    scales.forEach(async (size) => {
      fname = Scale.filename(mimetype, size);
      fpath = this.filepath(fname);
      retValues.push(fpath);

      await sharp(buffer)
        .resize(null, size, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFile(fpath);
    });
    return retValues;
  }

  static filename(mimeType, size) {
    const fileType = util.getFileTypeByMimeType(mimeType);
    return util.formatFileName(fileType, size);
  }

  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}

module.exports = Scale;
