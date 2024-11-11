const uploadBai = async (req, res) => {
  const { name, code, classStudent } = req.body;
  if (name && code && classStudent && req?.file?.filename) {
    return res.status(200).json({
      success: true,
      message: "Upload OK",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Missing Info",
    });
  }
};
module.exports = {
    uploadBai
}