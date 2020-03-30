const constants = require('./constants');

const {
  EMPTY_STRING,
  MIME_TYPE_GIF: MIME_GIF,
  MIME_TYPE_JPG: MIME_JPG,
  MIME_TYPE_PNG: MIME_PNG,
  FILE_TYPE_GIF: GIF,
  FILE_TYPE_JPG: JPG,
  FILE_TYPE_PNG: PNG,
} = constants;

const formatFileName = (filetype, size) => `image-${Date.now()}-${size.w}x${size.h}.${filetype}`;

const getFileTypeByMimeType = (mimeType) => {
  let filetype = EMPTY_STRING;

  if (mimeType === MIME_GIF) filetype = GIF;

  if (mimeType === MIME_PNG) filetype = PNG;

  if (mimeType === MIME_JPG) filetype = JPG;

  return filetype;
};

const getLogoOptions = (filenames, screenSize, logoPath) => {
  let options = {};
  switch (true) {
    case screenSize > 200 && screenSize < 640:
      options = { filename: filenames[0], logo: logoPath, size: { w: 389, h: 100 } };
      break;
    case screenSize >= 640 && screenSize < 1024:
      options = { filename: filenames[1], logo: logoPath, size: { w: 389, h: 100 } };
      break;
    case screenSize >= 1024 && screenSize < 1600:
      options = { filename: filenames[2], logo: logoPath, size: { w: 389 * 2, h: 100 * 2 } };
      break;
    case screenSize >= 1600:
      options = { filename: filenames[3], logo: logoPath, size: { w: 389 * 3, h: 100 * 3 } };
      break;
    default:
      break;
  }
  return options;
};

module.exports = {
  getLogoOptions,
  formatFileName,
  getFileTypeByMimeType,
};
