const EMPTY_STRING = '';

const SCALES = [
  { w: 640, h: 480 },
  { w: 1024, h: 768 },
  { w: 1600, h: 1200 },
  { w: 2048, h: 1536 },
];

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
const WATERMARK_URL = `${BASE_URL}/images/watermarked`;

const ERROR_MESSSAGE_APPEND_LOG = 'Error: Could not append logo watermark on image';
const ERROR_MESSAGE_IMAGE_NONE_EXISTING = 'Image does not exist, please provide an image';
const ERROR_MESSAGE_IMAGE_UPLOAD = 'Error: Could not store image';
const ERROR_MESSAGE_500 = 'Woops, something is wrong with our service, please contact support at ribic.goran@hotmail.com';

module.exports = Object.freeze({
  PATH_IMAGE_WATERMARK,
  ERROR_MESSSAGE_APPEND_LOG,
  ERROR_MESSAGE_IMAGE_UPLOAD,
  ERROR_MESSAGE_500,
  ERROR_MESSAGE_IMAGE_NONE_EXISTING,
  SCALES,
  PATH_LOGO,
  EMPTY_STRING,
  BASE_URL,
  WATERMARK_URL,
  PATH_IMAGE_STORAGE,
  FILE_TYPE_GIF,
  FILE_TYPE_PNG,
  FILE_TYPE_JPG,
  MIME_TYPE_GIF,
  MIME_TYPE_PNG,
  MIME_TYPE_JPG,
});
