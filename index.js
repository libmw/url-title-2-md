/*
 * @Description:
 * @Author: limengjun
 * @Date: 2021-06-01 16:25:05
 * @LastEditors: limengjun
 * @LastEditTime: 2022-05-05 10:40:46
 */
const { Builder, By, Key, until } = require("selenium-webdriver");
fs = require("fs");
const chromeDriver = require("selenium-webdriver/chrome");
//chromeDriver地址：http://chromedriver.storage.googleapis.com/index.html 复制到windows/system32
async function getTitleByUrl(url) {
  let driver = new Builder()
    .forBrowser("chrome")
    // 设置无界面测试
    .setChromeOptions(new chromeDriver.Options().addArguments(["headless"]))
    .build();
  let title;
  try {
    await driver.get(url); // 打开商户登录页面
    title = await driver.getTitle();
    if (!title) {
      //微信没得title得
      console.log("title node is empty");
      title = await driver
        .findElement(By.css('meta[property="twitter:title"]'))
        .getAttribute("content");
    }
    //console.log(title)
    await driver.close();
    return `- [ ] [${title}](${url})`;
  } catch (e) {
    return `- [ ] [${url}](${url})`;
  }
}

async function url2md(urls) {
  console.log('urls: ', urls);
  getTitlePromises = urls.map((url) => getTitleByUrl(url));
  const titles = await Promise.all(getTitlePromises);
  const todayDate = new Date();
  const title = `## ${todayDate.getFullYear()}.${
    todayDate.getMonth() + 1
  }.${todayDate.getDate()}`;
  //console.log(title + "\n" + titles.join("\n"));

  var data = fs.readFileSync("./article.md"); //read existing contents into data
  var fd = fs.openSync("./article.md", "w+");
  var buffer = Buffer.from(title + "\n" + titles.join("\n") + "\n");

  fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data
  fs.writeSync(fd, data, 0, data.length, buffer.length); //append old data
  // or fs.appendFile(fd, data);
  fs.close(fd);
  console.log("\n成功！");
}

var urlStr = fs.readFileSync("./urls.md", { encoding: "utf8" }); //read existing contents into data
url2md(urlStr.split('\n').map(u=>u.replace(/\s/g, '')).filter(u=>{return u.length > 0;}));
/* 
url2md([
  "https://mp.weixin.qq.com/s/wr3pCA0FnRtHuIyyDkSloA",
  "https://mp.weixin.qq.com/s/w1Wp8Bv-8Oi4mH5A9sErUQ",
  "https://mp.weixin.qq.com/s/3WQROC1-qHBO84w1HbqbVw",
  "https://mp.weixin.qq.com/s/HaSEC9GXD9MjzyEofeQEzw",
  "https://mp.weixin.qq.com/s/LSIi2P6FKnJ0GTodaTUGKw",
]); */
