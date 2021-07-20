/*
 * @Description: 
 * @Author: limengjun
 * @Date: 2021-06-01 16:25:05
 * @LastEditors: limengjun
 * @LastEditTime: 2021-07-20 09:38:44
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
    'https://mp.weixin.qq.com/s/DFt129rgcrTJch1RcUqpXg',
    'https://mp.weixin.qq.com/s/52QMKFnESEG5pCsYb44ASw',
    'https://mp.weixin.qq.com/s/cWJNIb-ngyxpTWQAl40DsQ',
    'https://mp.weixin.qq.com/s/QBno6MG1_w9aAAXljQVMyw',
    'https://mp.weixin.qq.com/s/1UmnH7VKlYJ9iTTXlzuAnA',
    'https://mp.weixin.qq.com/s/2WSjbZjzXHI5bb83Ydkh1g',
    'https://mp.weixin.qq.com/s/RxL9plpKipi1lrG5f6EDjg',
]);