require("dotenv").config();
const express = require("express");
const ImageKit = require("imagekit");

const router = express.Router();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Route to get authentication params for upload
router.get("/", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json({
    ...authParams,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  });
});

module.exports = router;