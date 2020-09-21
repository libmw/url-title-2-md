
const { Builder, By, Key, until } = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome')
//chromeDriver地址：http://chromedriver.storage.googleapis.com/index.html 复制到windows/system32
async function getTitleByUrl(url){
    let driver = new Builder()
      .forBrowser('chrome')
      // 设置无界面测试
      .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
      .build()
    let title;
    try{
        await driver.get(url); // 打开商户登录页面
        title = await driver.getTitle();
        if(!title){ //微信没得title得
            console.log('title node is empty')
            title = await driver.findElement(By.css('meta[property="twitter:title"]')).getAttribute('content');
        }
        //console.log(title)
        await driver.close();
        return `- [ ] [${title}](${url})`;
    }catch(e){
        return `- [ ] [${url}](${url})`;
    }
}
    

async function url2md(urls){
    getTitlePromises = urls.map(url => getTitleByUrl(url));
    const titles = await Promise.all(getTitlePromises);
    const todayDate = new Date();
    const title = `## ${todayDate.getFullYear()}.${todayDate.getMonth() + 1}.${todayDate.getDate()}`;
    console.log(title + '\n' + titles.join('\n'));
}

url2md([
    'https://mp.weixin.qq.com/s?__biz=MzI5NjM5NDQxMg==&mid=2247487546&idx=1&sn=21735712a8bc0f7f7100d64ae76d00e7',
    'https://mp.weixin.qq.com/s?__biz=MzI0MzA3MDQ2OA==&mid=2660174111&idx=1&sn=fe4f4329811538f5c1e88f5165cb8ce5',
    'https://mp.weixin.qq.com/s/HweEFh78WXLawyQr_Vsl5g',
    'https://mp.weixin.qq.com/s/RbDGbFaSk5BD0vTDaLiOWQ',
]);