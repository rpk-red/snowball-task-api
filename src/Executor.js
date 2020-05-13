const jimp = require('jimp');

const path = require('path');
const util = require('./util');
const constants = require('./constants');

const { PATH_IMAGE_WATERMARK, ERROR_MESSSAGE_APPEND_LOG, ERROR_MESSAGE_IMAGE_UPLOAD } = constants;


class Executor {
  constructor(folder) {
    this.folder = folder;
  }

  async saveImages(file, scales) {
    const { buffer, mimetype } = file;
    const retVals = [];

    try {
      const image = await jimp.read(buffer);

      const promises = scales.map(((scale) => {
        const fname = Executor.filename(mimetype, scale);
        const fpath = this.filepath(fname);
        retVals.push(fname);
        return image.resize(scale.w, scale.h)
          .writeAsync(fpath, buffer);
      }));

      await Promise.all(promises);
    } catch (err) {
      throw new Error(ERROR_MESSAGE_IMAGE_UPLOAD);
    }

    return retVals;
  }

  async appendLogo({ filename, logo, size }) {
    const source = this.filepath(filename);
    try {
      const [image, watermark] = await Promise.all([
        jimp.read(source),
        jimp.read(logo),
      ]);
      image.composite(watermark.resize(size.w, size.h), 10, 10, {
        mode: jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 0.5,
      });
      const root = process.cwd();
      const markedImagePath = path.join(root, `${PATH_IMAGE_WATERMARK}/${filename}`);
      await image.writeAsync(markedImagePath);
    } catch (err) {
      throw new Error(ERROR_MESSSAGE_APPEND_LOG);
    }
    return filename;
  }

  static filename(mimeType, size) {
    const fileType = util.getFileTypeByMimeType(mimeType);
    return util.formatFileName(fileType, size);
  }

  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}

module.exports = Executor;
