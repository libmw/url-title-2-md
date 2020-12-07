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
    'https://mp.weixin.qq.com/s/l6Crug0SwmgqT2hWYrSrgg',
    'https://mp.weixin.qq.com/s/3M-5cQ-KaKKctO-OvzfrKw',
    'https://mp.weixin.qq.com/s/UzoMqB3v18V1P6kzXmWFIQ',
    'https://mp.weixin.qq.com/s/B6cot5phZ1CM_pwUkE156A',
    'https://zhuanlan.zhihu.com/p/321311020',
    'https://zhuanlan.zhihu.com/p/274328551',
    'https://zhuanlan.zhihu.com/p/112540818',
    'https://mp.weixin.qq.com/s/QEnwoK_N_0IZ97l7NCjJPQ',
]);