
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
    'https://mp.weixin.qq.com/s/_oEUGbRLWQfe0R3_1R4uTw',
    'https://github.com/xufei/blog/issues/54',
    'https://mp.weixin.qq.com/s/nc71DG91a9RT3grw8tV_dQ',
    'https://mp.weixin.qq.com/s/CbdlTq1xb2N1WSnmGfmEQQ',
    'https://mp.weixin.qq.com/s/Zp-Fs3jXipOLHe_iSJxvvg',
    'https://mp.weixin.qq.com/s/rSpWorfNTajtqq_pd7H-nw',
    'https://mp.weixin.qq.com/s/wpU2APDdJdjMYkj5Kz2lTw',
    'https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/',
    'https://mp.weixin.qq.com/s/BEDwLJkEEI9bvD-1E5RRjQ',
]);