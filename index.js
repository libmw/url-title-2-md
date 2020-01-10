
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
            console.log('title node is empty')
            title = await driver.findElement(By.css('meta[property="twitter:title"]')).getAttribute('content');
        }
        //console.log(title)
        await driver.close();
        return `+ [ ][${title}](${url})`;
    }catch(e){
        console.log('eeee',e);
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
    'https://2019.stateofcss.com/',
    'https://venturebeat.com/2019/03/04/w3c-approves-webauthn-as-the-web-standard-for-password-free-logins/',
    'https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/',
    'https://blog.logrocket.com/whats-new-in-preact-x/',
    'https://blog.logrocket.com/what-is-deno/',
    'https://www.simplethread.com/understanding-js-decorators/',
    'https://netflix.github.io/pollyjs/',
    'https://github.com/Raathigesh/majestic/',
    'https://mp.weixin.qq.com/s/5HRWuLQ0u3huaqe-Luif8Q',
    'https://mp.weixin.qq.com/s/i0x9r-17hW_7KAaZdXbK-g',
    'https://mp.weixin.qq.com/s/t3Z8X8xttFyClIdybRkzeQ',
    'https://mp.weixin.qq.com/s/KZbXCI1u-O-hu1-gTa-ReQ',
]);