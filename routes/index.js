/* eslint-disable no-console */

const express = require('express');
const path = require('path');

const upload = require('../src/uploadMiddleware');
const Executor = require('../src/Executor');
const constants = require('./util/constants');
const util = require('./util/util');

const {
  PATH_IMAGE_STORAGE,
  PATH_LOGO,
  SCALES,
  ERROR_MESSAGE_500,
  ERROR_MESSAGE_IMAGE_NONE_EXISTING,
  WATERMARK_URL,
} = constants;

const router = express.Router();

router.post('/upload/image', upload.single('image'), async (req, res) => {
  const root = process.cwd();
  const imagePath = path.join(root, PATH_IMAGE_STORAGE);
  const logoPath = path.join(root, PATH_LOGO);
  const fileUpload = new Executor(imagePath);

  const screenSize = req.body.size ? parseInt(req.body.size, 10) : null;

  if (!req.file) {
    res.status(401).json({ error: ERROR_MESSAGE_IMAGE_NONE_EXISTING });
  }
  try {
    const filenames = await fileUpload.saveImages(req.file, SCALES);
    const options = util.getLogoOptions(filenames, screenSize, logoPath);
    const filename = await fileUpload.appendLogo(options);
    res.status(200).json({ fileUrl: `${WATERMARK_URL}/${filename}` });
  } catch (error) {
    res.status(500).send(error.message || ERROR_MESSAGE_500);
  }
});

module.exports = router;
