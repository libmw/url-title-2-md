/*
 * @Description:
 * @Author: limengjun
 * @Date: 2021-06-01 16:25:05
 * @LastEditors: limengjun
 * @LastEditTime: 2022-05-05 10:38:13
 */
const { webkit } = require("playwright");
const { download } = require("./downLoadImage");
const { resolve } = require("path");

const resolvePath = (path) => {
  const appPath = process.cwd();
  return resolve(appPath, path);
};
fs = require("fs");

const htmlPre = `{% extends "../../base/news.html" %}
{% block header_ext %}
  <link href="../news.less" rel="stylesheet"/>
  <script src="../news.js"></script>
{% endblock %}
{% block title %}`;
const htmlMiddle = `
{% endblock %}
{%block content%}
  <div class="news-banner"></div>
  <div class="news-body">
    <div id="img-content" class="rich_media_wrp">`;
const htmlAfter = `</div>
    </div>
  {%endblock content%}
  {% block script_ext %}{% endblock %}`;
const chenHuiImgTokens = [
  "LzGlTybhQoeibuI8VTIkzSTdaAaIt0nCg",
  "1AFCkFIEzNoRBQS6AcyRRfdibUGTeKA",
];
//chromeDriver地址：http://chromedriver.storage.googleapis.com/index.html 复制到windows/system32
async function getTitleByUrl(url) {
  let title, content, coverImg, createTime, abstract;
  try {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    title = await page.title();
    createTime = await page.locator("#publish_time").innerHTML();
    abstract = await page.locator("#js_content").textContent();
    console.log("abstract: ", abstract);
    if (!title) {
      //微信没得title得
      console.log("title node is empty");
      title = await page
        .locator('meta[property="twitter:title"]')
        .getAttribute("content");
    }
    console.log("title: ", title);
    const articleId = title
      .split("")
      .slice(0, 8)
      .map((s) => s.charCodeAt(0).toString(16).toUpperCase())
      .join("");
    console.log("articleId: ", articleId);

    await fs.mkdirSync(resolvePath("./article/" + articleId + "/images/"), {
      recursive: true,
    });

    /* await driver
      .findElement(
        By.css(
          'img[src="https://mmbiz.qpic.cn/mmbiz_jpg/KCa1w2qrXTibjb5eOGOf10vvlysricWk68a5I96RPEgPfdaBwTekb54C7b1AFCkFIEzNoRBQS6AcyRRfdibUGTeKA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1"]'
        )
      )?.parentElement.remove(); */

    content = await page.locator("#img-content").innerHTML();

    chenHuiImgTokens.forEach((token) => {
      content = content.replace(new RegExp(`<img [^>]+${token}[^>]+>`), "");
    });

    const imgList = page.locator("#img-content img.rich_pages");
    const imgCount = await imgList.count();
    console.log("imgCount: ", imgCount);
    console.log("imgList: ", imgList);
    console.log("开始下载图片");
    const imgDownloadQueue = [];
    for (let i = 0; i < imgCount; i++) {
      const img = await imgList.nth(i);
      const dataSrc = await img.getAttribute("data-src");
      console.log(
        "dataSrc++++++++++: ",
        i,
        i,
        i,
        dataSrc,
        chenHuiImgTokens.filter((token) => dataSrc.indexOf(token) > -1).length
      );

      if (
        !dataSrc ||
        dataSrc.indexOf("data:image") > -1 ||
        chenHuiImgTokens.filter((token) => dataSrc.indexOf(token) > -1).length >
          0
      ) {
        console.log("============dataSrc不用下载+++++++++++++++", i);
        const imgSrc = await img.getAttribute("src");
        if (imgSrc) {
          content = content.replace(imgSrc, "");
        }
        continue;
      }
      console.log("dataSrc======>: ", dataSrc);
      const fileSaveNameReg = dataSrc.match(/mmbiz_(jpg|png)\/(\w+)/);

      const fileSaveName =
        fileSaveNameReg[2].slice(10) + "." + fileSaveNameReg[1];
      console.log("fileSaveName: ", fileSaveName);
      if (!coverImg) {
        coverImg = fileSaveName;
      }
      const imgSrc = await img.getAttribute("src");
      console.log("imgSrc: ", imgSrc);
      content = content.replace(
        imgSrc.replace(/&/g, "&amp;"),
        "./images/" + fileSaveName
      );
      //await img.setAttribute("src", "./images/" + fileSaveName);
      imgDownloadQueue.push(
        download(dataSrc, "./article/" + articleId + "/images/" + fileSaveName)
      );
    }

    await Promise.all(imgDownloadQueue);
    console.log("图片下载完成");

    content = content.replace(
      /<img [^>]+v3IzdXbc7ELxoaWq1WLhOmf8z6WOFtWPelKayOLjLzGlTybhQoeibuI8VTIkzSTdaAaIt0nCg[^>]+>/,
      ""
    );

    var fd = fs.openSync("./article/" + articleId + "/index.njk", "w+");
    var buffer = Buffer.from(
      htmlPre + title + htmlMiddle + content + htmlAfter
    );
    fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data

    await browser.close();
    return {
      title,
      articleId,
      coverImg,
      createTime,
      abstract: abstract.slice(0, 50).replace(/\n|\s/g, ""),
    };
  } catch (e) {
    console.log("e===============================: ", e);
    return null;
  }
}

async function url2md(urls, index, articleArr) {
  if (index === urls.length) {
    return articleArr;
  }
  const url = urls[index];
  const article = await getTitleByUrl(url);
  articleArr[index] = article;
  return await url2md(urls, index + 1, articleArr);

  /* const urlQueue = await urls.reduce(async (pre, url) => {
    const article = await getTitleByUrl(url);

    if (pre === undefined) {
      //firstTime
      return [article];
    }
    return (await pre).concat(article);
  }, undefined);
  console.log("urls: ", urlQueue); */
  /* spiderQueue = urls.map((url) => getTitleByUrl(url));
  const articles = await Promise.all(spiderQueue); */
  //console.log("articles: ", articles);
  /* var fd = fs.openSync("./articles.js", "w+");
  var buffer = Buffer.from(JSON.stringify(urlQueue));
  fs.writeSync(fd, buffer, 0, buffer.length, 0); //write new data */

  return;
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

async function main() {
  var urlStr = fs.readFileSync("./urls.md", { encoding: "utf8" }); //read existing contents into data
  const urlArr = urlStr.split("\n").filter((u) => {
    return u.replace(/\s/g, "").length > 0;
  });
  const urlSet = new Set(urlArr);
  const articles = await url2md([...urlSet], 0, []);
  console.log("articles: ", articles);
  var fd = fs.openSync("./articles.js", "w+");
  var buffer = Buffer.from(JSON.stringify(articles));
  fs.writeSync(fd, buffer, 0, buffer.length, 0);
}

main();

/* 
url2md([
  "https://mp.weixin.qq.com/s/wr3pCA0FnRtHuIyyDkSloA",
  "https://mp.weixin.qq.com/s/w1Wp8Bv-8Oi4mH5A9sErUQ",
  "https://mp.weixin.qq.com/s/3WQROC1-qHBO84w1HbqbVw",
  "https://mp.weixin.qq.com/s/HaSEC9GXD9MjzyEofeQEzw",
  "https://mp.weixin.qq.com/s/LSIi2P6FKnJ0GTodaTUGKw",
]); */
