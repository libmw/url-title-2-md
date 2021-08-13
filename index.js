/*
 * @Description: 
 * @Author: limengjun
 * @Date: 2021-06-01 16:25:05
 * @LastEditors: limengjun
 * @LastEditTime: 2021-08-13 09:57:42
 */
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
    'https://mp.weixin.qq.com/s/YOM4tGvxKYS5m6UWldALgQ',
    'https://mp.weixin.qq.com/s/ZO20g0pE0szszgCJL8-6-g',
    'https://mp.weixin.qq.com/s/dwIBylOyGA4_iZEDtgwnIg',
    'https://mp.weixin.qq.com/s/9whB2Mtw6J56O7v4Lj4Khw',
    'https://mp.weixin.qq.com/s/_uDPLjMpeVrG5nztI2cBnw',
]);