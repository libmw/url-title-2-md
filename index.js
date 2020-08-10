
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
        return `+ [ ][${title}](${url})`;
    }catch(e){
        return `+ [ ][${url}](${url})`;
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
    'https://mp.weixin.qq.com/s/SxA8E5IG5r9u2LoaNdxArw',
    'https://juejin.im/post/6856375724979257352',
    'https://mp.weixin.qq.com/s/dGO7cvhnr0cWdeu7O2v5Eg',
    'https://mp.weixin.qq.com/s/6gtVR0nVNcZvREjwftZgzA',
    'https://mp.weixin.qq.com/s/jrXsXch-wnlTcS2JEKe32Q',
    'https://musicfe.dev/apng/',
    'https://mp.weixin.qq.com/s/_XUNdR0_TXcv68JKysNnIw/',
    'https://mp.weixin.qq.com/s/VjicTubTr8UU4XMWrC3nyQ',
]);