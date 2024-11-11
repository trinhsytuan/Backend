const multer = require("multer");

// Thiết lập lưu trữ cho tệp tải lên
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    
    const uniqueSuffix = req?.body?.name + "-" + req?.body?.classStudent + "-" + req?.body?.code + "-" + "KTGK";
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const imageUpload = multer({ storage: storage });
module.exports = {
  imageUpload,
};