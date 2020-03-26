const EMPTY_STRING = '';

const SCALES = [100, 200, 500, 768];

const PATH_IMAGE_STORAGE = '/public/images';
const PATH_LOGO = '/public/images/shared/snowball_logo.png';
const PATH_IMAGE_WATERMARK = '/public/images/watermarked';

const FILE_TYPE_GIF = 'gif';
const FILE_TYPE_PNG = 'png';
const FILE_TYPE_JPG = 'jpg';

const MIME_TYPE_GIF = `image/${FILE_TYPE_GIF}`;
const MIME_TYPE_PNG = `image/${FILE_TYPE_PNG}`;
const MIME_TYPE_JPG = `image/${FILE_TYPE_JPG}`;

const BASE_URL = 'http://localhost:5000';

module.exports = Object.freeze({
  PATH_IMAGE_WATERMARK,
  SCALES,
  PATH_LOGO,
  EMPTY_STRING,
  BASE_URL,
  PATH_IMAGE_STORAGE,
  FILE_TYPE_GIF,
  FILE_TYPE_PNG,
  FILE_TYPE_JPG,
  MIME_TYPE_GIF,
  MIME_TYPE_PNG,
  MIME_TYPE_JPG,
});
