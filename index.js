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
    'https://mp.weixin.qq.com/s/F8xUZZSal07HCc1yH3CDhg',
    'https://mp.weixin.qq.com/s/FTtobh-wGylG1TQAkng8uw',
    'https://mp.weixin.qq.com/s/KzZOAEqVxISjOYf0pSMQmw',
    'https://mp.weixin.qq.com/s/Q1gDOFIVd-EvG_JIdDjUJg',
    'https://mp.weixin.qq.com/s/ndThpVWTjAsqayZy14SFIg',
    'https://mp.weixin.qq.com/s/wAG5N4ncb5nWCRnP10Ayyw',
    'https://mp.weixin.qq.com/s/N0sXkDgl7wFQuOZn6kb7Ug',
    'https://mp.weixin.qq.com/s/vbRkCgncWZswqnrz30LiLQ',
    'https://mp.weixin.qq.com/s/NnZoe5rvIMw6A-WA3BoPEw',
]);