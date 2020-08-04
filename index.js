
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
    'https://mp.weixin.qq.com/s/oOlv9cbIhSwJtb-mGU8gwg',
    'https://mp.weixin.qq.com/s/tja4JMxiw7ig38Z51tul4w',
    'https://mp.weixin.qq.com/s/Nz90IX_kH53dgpdZ2zx-RQ',
    'https://mp.weixin.qq.com/s/aBTODfHAG9p_z2A1ikVoug',
    'https://mp.weixin.qq.com/s/uK7yRwy_Si5mo5D7qRQ4fA',
    'https://mp.weixin.qq.com/s/3a1L4fITSUrYi5hr-h7ECw',
]);