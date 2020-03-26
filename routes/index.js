/* eslint-disable no-console */

const express = require('express');
const path = require('path');


const upload = require('../src/uploadMiddleware');
const Scale = require('../src/Scale');
const appendLogo = require('../src/watermark');
const constants = require('./util/constants');

const {
  PATH_IMAGE_STORAGE,
  BASE_URL, PATH_LOGO,
  SCALES,
} = constants;
const router = express.Router();

router.post('/upload/image', upload.single('image'), async (req, res) => {
  const root = process.cwd();
  const imagePath = path.join(root, PATH_IMAGE_STORAGE);
  const logoPath = path.join(root, PATH_LOGO);
  const fileUpload = new Scale(imagePath);

  const screenSize = req.body.size ? parseInt(req.body.size, 10) : null;

  if (!req.file) {
    res.status(401).json({ error: 'Please provide an image' });
  }

  const imagesPath = await fileUpload.save(req.file, SCALES);
  let filename;

  switch (true) {
    case screenSize < 200:
      filename = await appendLogo(imagesPath[0], logoPath);
      break;
    case screenSize > 200 && screenSize < 500:
      filename = await appendLogo(imagesPath[1], logoPath);
      break;
    case screenSize > 500 && screenSize < 768:
      filename = await appendLogo(imagesPath[2], logoPath);
      break;
    case screenSize > 768:
      filename = await appendLogo(imagesPath[3], logoPath);
      break;
    default:
      break;
  }

  return res.status(200).json({ fileUrl: `${BASE_URL}/images/watermarked/${filename}` });
});

module.exports = router;
