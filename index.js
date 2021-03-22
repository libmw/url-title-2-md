const { Builder, By, Key, until } = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome')
    //chromeDriver地址：http://chromedriver.storage.googleapis.com/index.html 复制到windows/system32
async function getTitleByUrl(url) {
    let driver = new Builder()
        .forBrowser('chrome')
        // 设置无界面测试
        .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
        .build()
    let title;
    try {
        await driver.get(url); // 打开商户登录页面
        title = await driver.getTitle();
        if (!title) { //微信没得title得
            console.log('title node is empty')
            title = await driver.findElement(By.css('meta[property="twitter:title"]')).getAttribute('content');
        }
        //console.log(title)
        await driver.close();
        return `- [ ] [${title}](${url})`;
    } catch (e) {
        return `- [ ] [${url}](${url})`;
    }
}


async function url2md(urls) {
    getTitlePromises = urls.map(url => getTitleByUrl(url));
    const titles = await Promise.all(getTitlePromises);
    const todayDate = new Date();
    const title = `## ${todayDate.getFullYear()}.${todayDate.getMonth() + 1}.${todayDate.getDate()}`;
    console.log(title + '\n' + titles.join('\n'));
}

url2md([
    'https://mp.weixin.qq.com/s/8JRgYY7_Kxwa3HK8jZXEjw',
    'https://mp.weixin.qq.com/s/3OKTdpXV9386Xl83_B2vkg',
    'https://mp.weixin.qq.com/s/G3PPyGYDR22-qsq-h3YbEw',
    'https://ming1016.github.io/2021/02/21/deeply-analyse-quickjs/',
    'https://mp.weixin.qq.com/s/GjFC5_85pIk9EbKPJXZsXg',
    'https://mp.weixin.qq.com/s/MJScjoqGtKh9IuFpfMbbQg',
    'https://mp.weixin.qq.com/s/YpNBI9Lbhv-iQDyu2m2u0w',
]);