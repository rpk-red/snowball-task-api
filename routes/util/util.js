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

const formatFileName = (filetype, size) => `image-${Date.now()}-${size}.${filetype}`;

const getFileTypeByMimeType = (mimeType) => {
  let filetype = EMPTY_STRING;

  if (mimeType === MIME_GIF) filetype = GIF;

  if (mimeType === MIME_PNG) filetype = PNG;

  if (mimeType === MIME_JPG) filetype = JPG;

  return filetype;
};

const getFileNameFromPath = (path) => {
  const parts = path.split('\\');
  return parts[parts.length - 1];
};

module.exports = {
  getFileNameFromPath,
  formatFileName,
  getFileTypeByMimeType,
};
