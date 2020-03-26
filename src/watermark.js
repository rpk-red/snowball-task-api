const Jimp = require('jimp');

const path = require('path');

const constants = require('../routes/util/constants');
const util = require('../routes/util/util');

const { PATH_IMAGE_WATERMARK } = constants;

const appendLogo = (source, logo) => {
  const filename = util.getFileNameFromPath(source);
  return Jimp.read(source)
    // combine logo into image
    .then((tpl) => (
      Jimp.read(logo).then((logoTpl) => {
        logoTpl.opacity(0.3);
        return tpl.composite(logoTpl, 10, 10, [Jimp.BLEND_DESTINATION_OVER, 0.3, 0.3]);
      })
    ))

    // export image
    .then((tpl) => {
      const root = process.cwd();
      const markedImagePath = path.join(root, `${PATH_IMAGE_WATERMARK}/${filename}`);
      return (tpl.quality(100).write(markedImagePath));
    })
    .then(() => filename)
    // catch errors
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
};

module.exports = appendLogo;
