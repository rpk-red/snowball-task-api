const multer = require('multer');

// const util = require('./util/util');
// const constants = require('./util/constants');

// const { PATH_IMAGE_STORAGE } = constants;
// const { getFileTypeByMimeType, formatFileName } = util;

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, PATH_IMAGE_STORAGE);
//   },
//   filename: (req, file, cb) => {
//     const { mimetype } = file || {};

//     const filetype = getFileTypeByMimeType(mimetype);

//     cb(null, formatFileName(filetype));
//   },
// });

// const upload = multer({ storage });

module.exports = upload;
