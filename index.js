
const { Builder, By, Key, until } = require('selenium-webdriver')
const chromeDriver = require('selenium-webdriver/chrome')

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
            title = await driver.findElement(By.css('meta[property="twitter:title"]')).getAttribute('content');
        }
        //console.log(title)
        await driver.close();
        return `+ [ ][${title}](${url})`;
    }catch(e){
        console.log('eeee',e);
    }
}
    

async function url2md(urls){
    getTitlePromises = urls.map(url => getTitleByUrl(url));
    const titles = await Promise.all(getTitlePromises);
    console.log(titles.join('\n'));
}
url2md([ 
    'https://mp.weixin.qq.com/s/hxqa1uw61bi5H2j-nwNohg',
    'https://mp.weixin.qq.com/s/azmnUFgrHvuxZVpmqb1swA',
    'https://mp.weixin.qq.com/s/2Fpqlhl2XLuk7dFXCPUD-A',
    'https://mp.weixin.qq.com/s/8cC-xqI749Yz7f8N-242hQ',
    'https://mp.weixin.qq.com/s/yFa2hFkmCQFyGcPiHeC0Tg',
    'https://mp.weixin.qq.com/s/yFa2hFkmCQFyGcPiHeC0Tg',
    'https://mp.weixin.qq.com/s/TdMkG4VjmmgLvZt5ZkqoUw',
    'https://mp.weixin.qq.com/s/UFO9fO24DCrCMipnuX-xEw',
    'https://mp.weixin.qq.com/s/E_GqIhPKlSsH8Ln8vxG6oA',
    'https://mp.weixin.qq.com/s/01-5sc2tDa1fg3f0J5nArA',
    'https://mp.weixin.qq.com/s/3LyM4NV_5pm8r5PNhKma8w',
    'https://mp.weixin.qq.com/s/J0uxaskzyzUF24yVevSROQ',
    'https://mp.weixin.qq.com/s/yQIYBneDoKEnPemr7kcrbA',
    'https://mp.weixin.qq.com/s/yQIYBneDoKEnPemr7kcrbA',
    'https://mp.weixin.qq.com/s/U_HXusg2ccH0WRynxaOSZg',
    'https://mp.weixin.qq.com/s/ZwLzXjUFYBiAfN50_52dqw',
]);