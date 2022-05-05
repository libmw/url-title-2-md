/*
 * @Description:
 * @Author: limengjun
 * @Date: 2021-10-17 20:31:19
 * @LastEditors: limengjun
 * @LastEditTime: 2021-10-17 21:52:28
 */
var fs = require("fs"),
  request = require("request");

var download = async function (uri, filename) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filename)) {
      console.log(`${filename}已存在，跳过下载`);
      resolve(filename);
      return;
    }
    request.head(uri, function (err, res, body) {
      request(uri)
        .pipe(fs.createWriteStream(filename))
        .on("close", () => {
          console.log(`${filename}下载成功`);
          resolve(filename);
        })
        .on("error", function (err) {
          reject(`${filename}下载失败，url为：${uri}`);
        });
    });
  });
};
/* 
download(
  "https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/5b212b0f2ff301e229ce35b356bb35e8444fabead485063402955ec4b3571ab4bcb13183b4b31751c559df129862e1aa?pictype=scale&from=30013&version=3.3.3.3&uin=503163773&fname=IMG_2455.HEIC&size=750",
  "./photos/IMG_2455.HEIC"
)
  .then((filename) => {
    console.log(filename + "下载成功");
  })
  .catch((err) => {
    console.log(filename + "下载失败", err);
  });
 */
module.exports = { download };
