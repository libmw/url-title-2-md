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
    'https://mp.weixin.qq.com/s/8JCyRYlTfRg62hqpU5rfLw',
    'https://mp.weixin.qq.com/s/JZqS0SrFOHcg53-0V3D0uA',
    'https://mp.weixin.qq.com/s/4BeyUcbEed9eSsF6L4dktw',
    'https://mp.weixin.qq.com/s/UIz5ITrbyDy8ixrtjAE_Zg',
    'https://juejin.cn/post/6905635070397612039',
    'https://mp.weixin.qq.com/s/l5AwcMKCMz017HpEADvSIQ',
    'https://jelly.jd.com/article/5fbe616a7482df01463e27e3',
    'https://mp.weixin.qq.com/s/2XS-d1PUt8olXvHXZFvSfQ',
    'https://mp.weixin.qq.com/s/HAGkGa4yZaz7RcBbx_LygA',
]);