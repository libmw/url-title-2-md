/*
 * @Description:
 * @Author: longhang
 * @Date: 2022-01-21 11:42:29
 * @LastEditors: limengjun
 * @LastEditTime: 2022-04-28 17:31:43
 */
/*
 * @Description: 生成随机数
 * @Author: longhang
 * @Date: 2021-08-06 11:32:03
 * @LastEditors: longhang
 * @LastEditTime: 2021-12-23 11:32:46
 */
function randomNumber() {
  return randomCharCode(48, 10);
}
function randomLetter() {
  return randomCharCode(65, 26);
}
function randomCharCode(start, range) {
  return start + Math.floor(Math.random() * range);
}
function generateToken(length = 16) {
  return String.fromCharCode.apply(
    null,
    new Array(length).fill(1).map(() => {
      const typeRandom = Math.random();
      return typeRandom > 0.3 ? randomLetter() : randomNumber();
    })
  );
}

module.exports = { generateToken };
