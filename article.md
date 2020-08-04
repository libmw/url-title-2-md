## 2020.8.4
+ [x][利用 JS 实现多种图片相似度算法](https://mp.weixin.qq.com/s/oOlv9cbIhSwJtb-mGU8gwg)
> 利用一些图片相似度算法通过imageData来计算图片指纹从而得到两张图片相似程度。
+ [x][input/change/composition/keydown事件详解](https://mp.weixin.qq.com/s/tja4JMxiw7ig38Z51tul4w)
> 对于输入各个阶段的监听。
+ [x][2020年，该如何选择小程序框架](https://mp.weixin.qq.com/s/Nz90IX_kH53dgpdZ2zx-RQ)
> 写得好。Taro属于编译型框架，而还有一种运行时框架。他们各有各的好处，把这两个结合起来，才是最好的方案。
+ [x][【源码解析+代码实现】一篇文章搞定 babel-plugin-import 插件](https://mp.weixin.qq.com/s/aBTODfHAG9p_z2A1ikVoug)
> 介绍了这个插件的作用和插件的实现原理。
+ [x][99%的人都不知道内网、外网、宽带、带宽、流量、网速之间的区别与联系](https://mp.weixin.qq.com/s/uK7yRwy_Si5mo5D7qRQ4fA)
> 扫描文章。
+ [x][这些手写代码会了吗？少年](https://mp.weixin.qq.com/s/3a1L4fITSUrYi5hr-h7ECw)
> bind/apply/call/new
## 2020.8.3
+ [x][Vue中使用装饰器，我是认真的](https://mp.weixin.qq.com/s/Rz-Nvg4hAI8x7SOYlaPaBw)
> 装饰器在类属性中使用有高阶函数的感觉，目标属性被装饰后成为了一个高阶函数。
+ [x][VSCode 的这些黑科技 99% 的人都不知道](https://mp.weixin.qq.com/s/IChlh2sRjgF9H6IKH_kvRQ)
> 两个写markdown和drawio的工具
+ [x][前端设计模式之责任链模式](https://mp.weixin.qq.com/s/FGtbjooamtDY_xxGfQFGMQ)
> 一般
+ [x][了不起的 Webpack 构建流程学习指南](https://mp.weixin.qq.com/s/BKAdclv6UBNfJ7IVJ1WL9g)
> 一个极简的webpack实现。
+ [x][如何基于 Electron 开发跨终端的应用](https://mp.weixin.qq.com/s/qucl_k9pFCga1krHlNTSyQ)
> electron入门文章
+ [x][50行实现Node.js多进程分页爬虫](https://mp.weixin.qq.com/s/OwjxD9tuwQizNfzhLy6GHw)
> 多进程的基本用法
+ [x][整理了 25 个前端相关的学习网站和一些靠谱的小工具](https://mp.weixin.qq.com/s/-GJkSfcXJOLkBs6BZzIUww)
> 各种工具和网站。
+ [x][一个有趣的例子带你入门canvas](https://mp.weixin.qq.com/s/phSlWmKtjd49Nw0MzgfS6A)
> 是个广告，还是有点意思。每个图形fillColor，点击的时候取出color再去映射表里找就得到点击的图形了。
+ [x][嘿，不要给 async 函数写那么多 try/catch 了(偏原理)](https://mp.weixin.qq.com/s/jKio8gAS4qB2fFbA1jleVQ)
> `干货`通过自研一个webpack的loader来实现try/catch的自动注入。本文讲解了loader的原理和ast的实战，通过编写loader的过程了解修改ast的过程。
+ [ ][React Hooks 原理与最佳实践](https://mp.weixin.qq.com/s/2-nvV2wIJID8xCWeRW2iNQ)
## 2020.7.30
+ [x][谈Vue组件的is特性](https://mp.weixin.qq.com/s/taFj7N_eTXyh5LPWRBX2Yg)
> 可以在html标签中添加is，这种使用方法以前还没注意。
+ [x][新的跨域策略：使用COOP、COEP为浏览器创建更安全的环境](https://mp.weixin.qq.com/s/8-243xANopfa7-2wnQITcw)
> 比较新的header，看起来可以用来替代部分csp策略。
+ [x][你不知道的 WebSocket](https://mp.weixin.qq.com/s/ptnK2-ihZNH8yZhkkX6sZQ)
> 实现了一个client、server，实现了socket不同类型的解析。还分析了socket协议的数据帧格式。最后介绍了socket和七层网络模型。
+ [x][你不知道的浏览器渲染原理](https://mp.weixin.qq.com/s/EwcDVoypNHE1s5Wh1xyKLQ)
> 比较全面，

## 2020.7.29
+ [x][想成为可视化高手？这篇合集就够了 | Vue](https://mp.weixin.qq.com/s/u5aiqliNjXfBNEigs2tBpg)
> vue-ecahrts的使用文档
+ [x][从敲下一行JS代码到这行代码被执行，中间发生了什么？](https://mp.weixin.qq.com/s/VCy3yT3Ho-QQxNvUp5SwCg)
> 主要介绍V8的执行流程。通过理解执行流程和优化原理，就可以得到在写代码的时候需要注意哪些问题。文章提到了几个工具：
[ast在线编译器](https://astexplorer.net/)
+ [x][Babel是如何读懂JS代码的](https://mp.weixin.qq.com/s/hFI__QcPrYTo3lZX7L82NA)
> `干货`。文章通过一个分词器的demo和一个生成ast函数的demo，展现了分词和生成ast的过程。分词是将整个代码字符串一个字符一个字符的遍历，然后变为一个一维数组，每一项就是一个词语，每一项包含词语的类型和内容，如`{ type: "identifier", value: "alert" }`。而语义就是把一维数组变为AST，这是一个遍历前面那个一维数组的过程，也是有特别多的判断和算法在里面，但实际就是遍历一维数组的过程。这篇文章来源于[百度外卖](https://zhuanlan.zhihu.com/bdwmfe)，里面有很多干货。
+ [x][图解23种设计模式（TypeScript版）——前端必修内功心法](https://mp.weixin.qq.com/s/v8QRqjDrc7m0P3npigG_4Q)
> 确实是图解，里面全是图。
## 2020.7.28
+ [x][让你的 commit 更有价值](https://mp.weixin.qq.com/s/wrEQbvVMJLyhcjTRovM9Gg)
> 通过angular的commit message 规范来写message，然后可以利用工具生成log日志等。还可以通过hooks来实现自动转换命令。git的hooks原理是在.git目录里的hooks目录，这个目录在git的执行流程中会被调用。也可以通过ghooks工具来自动生成hooks命令，然后通过配置来实现hooks调用。
+ [x][JS数组奇巧淫技](https://mp.weixin.qq.com/s/c9jtemK9Do85RG4ub1MORA)
> 把大多数的array function都说了一遍。还讲了各个方法的应用场景。奇淫技巧主要是利用...展开操作和Set类型实现。reduce的例子比较棒。最后作者还感叹了一下生活，聊了下人生。
+ [x][聊聊调试的那些事，超实用！！！](https://mp.weixin.qq.com/s/DXq3vRfQ32Wfbe_Gf1lz7Q)
> 及其基础的chrome developer tools入门文章。
+ [x][使用 Vue 3.0，你可能不再需要Vuex了](https://mp.weixin.qq.com/s/NES_8rV5DM5eqHROxJUmpA)
> vue3的相应系统+provide+readonly实现类似state的功能。
## 2020.7.27
+ [x][封装element-ui表格，我是这样做的](https://mp.weixin.qq.com/s/7NaG8JII6k-YFm_ozyev2g)
> 作者基于element-table搞的一个封装。
+ [x][14个 JavaScript 代码优化技巧](https://mp.weixin.qq.com/s/rLlB9kOB15c-T-e69tnEnw)
+ [x][手把手教你打造属于自己团队的前端小报系统](https://mp.weixin.qq.com/s/YE_XEP38C3DeSEx-hHYQkA)
> 利用chrome插件迅速沉淀，后台自动推送。
+ [x][整理几个超实用的前端提效 shell 命令](https://mp.weixin.qq.com/s/YIpdCXMOwge_0N9prJr5ZA)
> curl等
+ [x][160. 精读《函数缓存》](https://mp.weixin.qq.com/s/bvep2BfQGGaqKkfd5f3LKg)
> 通过高阶函数对函数进行包装，从而实现缓存。
## 2020.7.24
+ [x][《模块化系列》snowpack，提高10倍打包速度。](https://mp.weixin.qq.com/s/xYpA2CKAQXWZbL0PQOdJmQ)
> 完全通过esModule规范来打包，是最接近浏览器标准模块的打包方式。劣势是对模块编译的插件不足，生态还不够强大。
+ [x][React Native 新架构](https://mp.weixin.qq.com/s/c_3ugi8cPxMbi5z-olhdtQ)
+ [x][仿照React源码流程打造90行代码的Hooks](https://mp.weixin.qq.com/s/YLSD4IojDWTPlov_RQtVAA)
> 通过模拟来学源码

## 2020.7.23
+ [x][语雀在线表格自研之路](https://mp.weixin.qq.com/s/SiwlayY5qYrAAQZg7Ovaeg)
> 两点让人印象深刻：1、基于命令的协同，允许一定数量的冲突。2、基于ls的本地存储而放弃indexDb。真正的大产品，一定不会刻意去追求使用某种绚丽的技术，而会选择最适合自己的技术。
+ [x][吊打前端专栏 | 吊打JavaScript之从原型到原型链](https://mp.weixin.qq.com/s/dzam1RaeZtfLxZvVh4PSrw)
> js原型链的基础和应用。
+ [x][让你面试无忧的66条JavaScript面试知识点](https://mp.weixin.qq.com/s/XZ_pgdlYtlPW3hJUg29BJA)
> `干货`真心涵盖了超过50%的常用面试题。也是前端的基础知识集合。
+ [x][十分钟上手ES2020新特性](https://mp.weixin.qq.com/s/PVc9k55uleSGgfRAaTP0uQ)
> 2020新特性不算多，了解下吧。
+ [x][如何将业务代码写得更优雅](https://mp.weixin.qq.com/s/-gVr5RMPfpB9hylZuMQlEQ)
> 蚂蚁金服员工写的文章，对重构的理解较深。
## 2020.7.22
+ [ ][【前端实时音视频系列】WebRTC入门概览](https://mp.weixin.qq.com/s/oRJ-jBXCFofyxLpl8FEQfg)
+ [x][SourceMap知多少：介绍与实践](https://mp.weixin.qq.com/s/j3jVPNgg4WCnI7RBJTxktA)
> 主要介绍SourceMap是什么以及如何在webpack中配置。另外生产环境我们是可以配置生成隐藏的sourceMap，然后传递给sentry调用的。不得不说sourceMap是一个伟大的发明。
## 2020.7.21
+ [x][Chrome 84 正式发布，支持私有方法、用户空闲检测！](https://mp.weixin.qq.com/s/vNTUfKKtxpSIbt1ZULui_g)
> issue集合，动画api、wsam优化、强制samesite
+ [x][在前端如何玩转 Word 文档](https://mp.weixin.qq.com/s/p7TKapQP4cv_IbFWcP_dFw)
> docx是一个zip压缩包，通过解压和文档解析可以转为html和md。通过jszip可以在浏览器上zip
+ [x][我在项目中是这样配置Vue的](https://mp.weixin.qq.com/s/fjXfcCLNpSYt_Rotnjawxg)
> githook、各种检测、各种优化
## 2020.7.20
+ [ ][聊一聊前端性能优化 CRP](https://mp.weixin.qq.com/s/kieXi8TDRg2ngxAxPi8Spg)
## 2020.7.17
+ [x][写给前端的算法进阶指南，我是如何两个月零基础刷200题](https://mp.weixin.qq.com/s/FabzPwAUf8DzHk3iq6989w)
> letcode网站介绍和很多基本的算法介绍。
+ [x][分享一波最新的Vue实战技巧](https://mp.weixin.qq.com/s/IQa8rcncm7nwEUeRjh-XuA)
> `干货`，自定义一个生命周期并定义其mixin策略，provide和inject祖先传值、通过$parent和$children写一个事件分发器，插槽的通俗解释，非常好。
## 2020.7.16
+ [x][玩转前端 Video 播放器](https://mp.weixin.qq.com/s/thnhhbw2ieFywCFSCHXyGQ)
> 视频格式其实一个压缩包的格式，包里面才是真正的视频和音频的压缩算法。视频算法如H264，音频如acc等，，这也是为啥同一个视频格式有那么多编码选项的原因。通过不同算法组合得到不同的视频格式。对视频格式解压比较容易，但是对视频算法进行解码就困难很多
+ [x][【干货】Chrome插件(扩展)开发全攻略](https://mp.weixin.qq.com/s/waUg3hx5HsRkyiitJdHudg)
>`干货`大而全
## 2020.7.15
+ [ ][新技术学习不完全指北：以 Rust 为例](https://mp.weixin.qq.com/s/cO_aC6GmKNA_WS6TUsiHkg)
+ [ ][一个优秀的Vue团队代码规范是什么样子的？](https://mp.weixin.qq.com/s/TRxHwMwAd3lM15zslY6W2Q)
## 2020.7.14
+ [ ][深入源码剖析componentWillXXX为什么UNSAFE](https://mp.weixin.qq.com/s/EyPyX8Noab1q32W_lVrM-g)
+ [x][6 种移动端 1px 问题的解决方案](https://mp.weixin.qq.com/s/Dv3zewnfARnzNSXQKfAYSw)
> 用svg+border的方式最好了
+ [ ][158. 精读《Typescript 4》](https://mp.weixin.qq.com/s/I56QvJSJJsGvPDiuvAHj4g)
## 2020.7.13
+ [ ][官方给出的Vue3性能优化数据，其实很保守？](https://mp.weixin.qq.com/s/dJkjWsFvxbNRe-j_wJElwQ)
+ [ ][关于Vue3.0的新特性，你知道多少？](https://mp.weixin.qq.com/s/yU8ESpc4kCUjGEJuUjTiXw)
+ [ ][自定义 ESLint 规则，让代码持续美丽](https://mp.weixin.qq.com/s/zDTRB9BQFbzj6SeAM7mVcA)
## 2020.7.10
+ [x][为你的前端本地环境配置 HTTPS 吧！](https://mp.weixin.qq.com/s/M4-HFyFUZyMdT6RC3y8UYg)
>通过工具生成本地证书，不错的选择。
+ [ ][「 Map最佳实践」什么时候适合使用 Map 而不是 Object](https://mp.weixin.qq.com/s/zIyuymh5aNLWt68l2c6R3g)
+ [ ][你可能不知道的15个有用的 Github 功能](https://mp.weixin.qq.com/s/RMfPCtyUc5Zq-sHPl8VCnw)
+ [ ][从零手写pm-cli脚手架，统一阿里拍卖源码架构](https://mp.weixin.qq.com/s/JRF4GjYqXw1f6jGqcYofnQ)
## 2020.7.9
+ [ ][现代浏览器内部机制 — 渲染进程的一生](https://mp.weixin.qq.com/s/lfG_YJY9i5eWvzqtkBEYgw)
+ [ ][玩转前端二进制](https://mp.weixin.qq.com/s/s1V_ewBUXoTimNkeP8ciYA)
+ [ ][让网站更快、更可访问与更安全 - 这里有来自谷歌的新建议](https://mp.weixin.qq.com/s/NSgW4uWYwGzgtLssxal5UQ)
## 2020.7.8
+ [ ][10个打开了我新世界大门的 WebAPI](https://mp.weixin.qq.com/s/CMN5Dvo04U2pEuZtmpYHPQ)
+ [ ][Docker + Webhook 从零实现前端自动化部署](https://mp.weixin.qq.com/s/qGS730MzNFzRB3MhHhHtpw)
+ [ ][Vue 骚技巧，策略模式实现动态表单验证](https://mp.weixin.qq.com/s/tS8jYHC1kGzzi-GvtHxEew)
+ [ ][【前端框架】我为什么坚持选择用React？](https://mp.weixin.qq.com/s/ApIk_00AMs65FwOo0i9A3Q)
## 2020.7.6
+ [ ][一个 TCP 连接可以发多少个 HTTP 请求？](https://mp.weixin.qq.com/s/tYLDSUeQqbR6W804FLBCkA)
+ [x][拥抱 Vue 3 系列之 JSX 语法](https://mp.weixin.qq.com/s/QoI9Jdb6phoFsZEjU-P6lw)
> vue3为啥要使用jsx呢。另外ant-vue和vue3合作写了vue的jsx编译器。jsx还是比较值得研究，文中的意思我没看太懂，大概是在某些复杂逻辑上使用jsx会强大太多，毕竟jsx比template要底层一些。文章写了很多编译相关的知识。`干货`
+ [ ][精读《用 React 做按需渲染》](https://mp.weixin.qq.com/s/Rv7SPm8GnVi7sDDfDlRxXQ)
+ [ ][如何设计微前端中的主子路由调度](https://mp.weixin.qq.com/s?__biz=Mzg4MjE5OTI4Mw==&mid=2247484940&idx=1&sn=178bd6502a3fad861fd4541fa33c242d&scene=21#wechat_redirect)
+ [ ][资损防控 — 代码扫描技术揭秘 | 618 淘系前端技术分享](https://mp.weixin.qq.com/s?__biz=MzI5NjM5NDQxMg==&mid=2247485983&idx=1&sn=6d3669a8c013357bd4d180ec87bbd34d&scene=21#wechat_redirect)
+ [ ][基于Node.js的脚手架工具开发](https://mp.weixin.qq.com/s/c0IHS4JdHbOuUCXe-x2nBA)
+ [ ][听说你不知道如何监控 Node 服务的内存？](https://mp.weixin.qq.com/s/WjwfwSr25YlArmoaz7qT0A)
## 2020.7.2
+ [ ][你不知道的 Web Workers （上）](https://mp.weixin.qq.com/s/TySnUI3IJcY43dcnbtsO0w)
+ [ ][React Hooks 原理与最佳实践](https://mp.weixin.qq.com/s/BwQyPryZmPdoBNTwkn21oQ)
+ [ ][揭秘webpack插件工作流程和原理](https://mp.weixin.qq.com/s/svhh8BJdxXGJuCuumJiBgA)
## 2020.7.1
+ [x][携程RN渲染性能优化实践](https://mp.weixin.qq.com/s/6EYcGKztp20KMEUCHiTpnQ)
>感觉写的一般
## 2020.6.30
+ [x][JavaScript 模块化的历史进程](https://mp.weixin.qq.com/s/7zc_N0j2wBOA82SUcN8ZjA)
>这个`干货`。通过讲模块化的历史来说明为什么要模块化和各种模块化的标准。
+ [x][6点建议帮助前端工程师进阶](https://mp.weixin.qq.com/s/i4ysqrUe67c6Ij38_4cjRw)
>写的比较好，可以作为教导型文章
## 2020.6.29
+ [ ][如何优雅的实现一个九宫格抽奖](https://mp.weixin.qq.com/s/bH2lM7qzI-IoTjjQc9zW-Q)
+ [x][一文助你搞懂 AST](https://mp.weixin.qq.com/s/9FLkAmeBH18QjlZPztPc8Q)
> AST就是一个json树。文章解释了如何生成ast以及ast如何生成code，还解释了babel的原理和流程。`干货`
+ [ ][ZooTeam 拍了拍你，来看看如何设计动态化表单](https://mp.weixin.qq.com/s/zvegeJAOUW6tdlLUM_-Xzw)
## 2020.6.28
+ [ ][Electron 9.0.0发布！带来三项重大改进，不再支持Electron 6](https://mp.weixin.qq.com/s/G7Pjh3efTcbYuMnGdx5yGw)
+ [ ][程序员必备网站之一：No Design](https://mp.weixin.qq.com/s/_1pXkxpoBGJPOHq-ZLVSQA)
+ [ ][2020年6月程序员工资统计，又跌了。](https://mp.weixin.qq.com/s/FquaB3P6u5muwkqvIK44-g)
+ [ ][微内核架构在前端的应用](https://mp.weixin.qq.com/s/VJhPe5O9m_o9tqTqaAgZrA)
## 2020.6.24
+ [ ][从 Element UI 源码的构建流程来看前端 UI 库设计](https://mp.weixin.qq.com/s/KEELuZUaBCQRlxSBr7QI0w)
## 2020.6.23
+ [ ][让你纵横 GitHub 的五大神器](https://mp.weixin.qq.com/s/k_pmP5P0Dgmxyq7RhXJMCA)
+ [ ][前端换肤的N种方案，请收下](https://mp.weixin.qq.com/s/WBnWSmuDQpK6HD367YSvEQ)
+ [ ][了不起的 Webpack HMR 学习指南](https://mp.weixin.qq.com/s/d5MjW48-Zg8hO0QygG3z5w)
## 2020.6.22
+ [ ][那些不常见，但却非常实用的css属性(整理不易)](https://mp.weixin.qq.com/s/4lMfkUaDkIvnrTJZDwYhFg)
+ [ ][分分钟教会你搭建企业级的 npm 私有仓库](https://mp.weixin.qq.com/s/Q9JSBXx7eiq3GuAvg1itIw)
+ [ ][Virtual Dom提升页面渲染效率的原理](https://mp.weixin.qq.com/s/Ak-ZSIWR1AfYKHw5sbxgtw)
+ [ ][琐碎的JS性能优化](https://mp.weixin.qq.com/s/qDURK2QD6f2Vn9zU9Jp0Zg)
+ [ ][你想学习前端智能化吗？从 Pipcook 开始吧！](https://mp.weixin.qq.com/s/7_UvN9Uy8IpexDB66xFB_A)
## 2020.6.18
+ [ ][三年 Git 使用心得 & 常见问题整理](https://mp.weixin.qq.com/s/CBCumHhwMxFUD3fJ4VzY_Q)
+ [ ][星巴克的成功，一切与咖啡无关](https://mp.weixin.qq.com/s/pi5jQLI8iXgaJF7xlEhW-w)
+ [ ][说说对 options 请求的理解](https://mp.weixin.qq.com/s/zHxpII3LeePfTl4EOjcgCQ)
## 2020.6.17
+ [ ][分析 React 组件的渲染性能](https://mp.weixin.qq.com/s/tDWBFlZf-rh_IvlSqKTcgg)
## 2020.6.16
+ [ ][一文读懂 TypeScript 泛型及应用](https://mp.weixin.qq.com/s/whjL0P0CqOUdAXyEu6_jWw)
+ [ ][HTTPS 证书被伪造了怎么办？](https://mp.weixin.qq.com/s/snNg_6HZ_zFlajYUwHxqig)
## 2020.6.15
+ [ ][H5 直播的疯狂点赞动画是如何实现的？](https://mp.weixin.qq.com/s/ydeGnsaY2hNDZhmjc6MDZg)
+ [ ][面试官：HTTPS就安全了吗？会被抓包吗？我竟然回答不上来...](https://mp.weixin.qq.com/s/c2vKhW5_uFnyH_sBlRvMcw)
+ [ ][一张图概括淘宝直播背后的前端技术](https://mp.weixin.qq.com/s/2XjTRpuUE6ZppYWZHjg2Hg)
+ [ ][155. 精读《use-what-changed 源码》](https://mp.weixin.qq.com/s/Ceql8C9lP1C_SL1zzuvhHA)
+ [ ][TypeScript 期中考试现在开始](https://mp.weixin.qq.com/s/fWUQcbzryoZuCnF2lVeuzA)
## 2020.6.12
+ [ ][面试官：HTTPS就安全了吗？会被抓包吗？我竟然回答不上来...](https://mp.weixin.qq.com/s/c2vKhW5_uFnyH_sBlRvMcw)
+ [ ][谁说前端不需要懂二进制](https://mp.weixin.qq.com/s/OrygF3DXPKRuZWn31BlMOQ)
+ [ ][一张图概括淘宝直播背后的前端技术](https://mp.weixin.qq.com/s/2XjTRpuUE6ZppYWZHjg2Hg)
+ [ ][精读《用 React 做按需渲染》](https://mp.weixin.qq.com/s/dEIL8aJedVjQl4Z8TsL6uQ)
## 2020.6.11
+ [ ][为什么没有 ECMAScript 4？](https://mp.weixin.qq.com/s/g1f8XCK_CP0yUnVdUfffLw)
## 2020.6.10
+ [ ][《一生的旅程》- 完整披露迪士尼CEO的管理原则](https://mp.weixin.qq.com/s/yKrsywsdTm1vzk4wyM8KLA)
+ [ ][探索 Serverless 中的前端开发模式(多场景)](https://mp.weixin.qq.com/s/7S0FPYcshZQ5qrAoXtnyoA)
## 2020.6.9
+ [ ][Node使用火焰图优化CPU爆涨](https://mp.weixin.qq.com/s/mXYHJ8tKLq_kkqkm26lIFQ)
+ [ ][你不知道的 Blob](https://mp.weixin.qq.com/s/ismyY2EOUMwFqBuen5EUUg)
+ [ ][奇舞周刊第 352 期：支付宝小程序 V8 Worker 技术演进](https://mp.weixin.qq.com/s/-r_xjyNmJFLaRO-4qxMfVg)
+ [ ][改善CSS的10种最佳做法](https://mp.weixin.qq.com/s/6NKTABIeeyGlxFenu5q48w)
+ [ ][一份值得收藏的 Git 异常处理清单](https://mp.weixin.qq.com/s/GKdhcb0ekirjg4jEwERizA)
## 2020.6.4
+ [ ][Chrome DevTools中的这些骚操作，你都知道吗？](https://mp.weixin.qq.com/s/CfzKwfiJ7AVnv6m7CEhAVg)
+ [ ][未来的JavaScript记录与元组](https://mp.weixin.qq.com/s/uR6M2Rx_iMVH5GAbNpsxVA)
+ [ ][CSR、SSR、NSR、ESR傻傻分不清楚，一文帮你理清前端渲染方案！](https://mp.weixin.qq.com/s/1QPc2EZQs3jjPOK7-K6H7Q)
+ [ ][前端技术观察第 18 期](https://mp.weixin.qq.com/s/v1r_VdLIgwqxLXPBE1VvuA)
+ [ ][2020 年度全球开发者调查报告，JS 连续八年登顶](https://mp.weixin.qq.com/s/6g3dAbKgBTWEC3CAAcCb4A)
+ [ ][没想到Vue3.0这么奇妙，感谢尤大](https://mp.weixin.qq.com/s/GnQlwVGkwGwh2AgvBqYH-A)
+ [ ][153.精读《snowpack》](https://mp.weixin.qq.com/s/kcFO5uz-ColTCNNfsWqWaA)
+ [ ][万字长文干货，面试官角度看招聘](https://mp.weixin.qq.com/s/ZAkmcYZQXI924_MbW_2HBg)
## 2020.6.1
+ [x][用TypeScript编写React的最佳实践](https://mp.weixin.qq.com/s/CeFQ23aIiGbXRwY0eBawfg)
>文章使用的cra的方式，讲了一些配置，还说了一个ts社区，可以作为参考。
+ [x][HTTP/3 来了 !](https://mp.weixin.qq.com/s/ePFFG9O_mP_UVll8SYAOnw)
>不是新闻，就是介绍quic文章
+ [ ][在 Nodejs 中 ES Modules 使用入门讲解](https://mp.weixin.qq.com/s/tVBo-ZrPQLR_fJnWNnb2Tg)

+ [x][介绍一个强大的 API Mock 工具 Mirage JS](https://mp.weixin.qq.com/s/Z4Y1yAf-O7Srg7mpA_pdLA)
>`干货`。看起来不错，生产环境才会发请求。
+ [ ][怎样删除项目当中无用的npm包](https://mp.weixin.qq.com/s/vn899GehsXUYYfe4hCIPXw)
+ [ ][TypeScript 是什么【附两题 TS 相关面试题】](https://mp.weixin.qq.com/s/XGKCuEzTV0kqKD_2bhbNyw)
+ [ ][突发事件：consul 等禁止中国使用](https://mp.weixin.qq.com/s/p9D_0rT0onrXZ1L46PMZLw)
+ [ ][各种浏览器引擎傻傻分不清楚？终于有人说明白了！](https://mp.weixin.qq.com/s/w6uIzxuusSlMsB3FgO4dcg)
+ [ ][30种不同的编程语言怎么写“Hello, World”](https://mp.weixin.qq.com/s/t94jThBvkKoXlxGu9zxMVQ)
+ [ ][如何实现高性能的在线 PDF 预览](https://mp.weixin.qq.com/s/Wx_gJLrZftJ_dm2phoUf8g)
+ [ ][解读新一代 Web 性能体验和质量指标](https://mp.weixin.qq.com/s/7Ubwd1TTQ6OojfzaDa2mNw)

## 2020.5.29
+ [ ][前22年的Loser，后4年和自己赛跑的人 | 最惨前端面经](https://mp.weixin.qq.com/s/S7t1oXUF5fPYNlv4x_5HkQ)
+ [ ][JavaScript中的这些骚操作，你都知道吗？](https://mp.weixin.qq.com/s/BHrtf51WhX1-5PnWsKYnrQ)
+ [ ][TS 常见问题、难点整理（60多个）](https://mp.weixin.qq.com/s/kYrVKtgqsaR8vEb_3sL9Ow)
+ [ ][10个Vue开发技巧](https://mp.weixin.qq.com/s/ASu2cH4snJ7IxOyOTQVJBg)
## 2020.5.27
+ [ ][Deno bytes 模块全解析](https://mp.weixin.qq.com/s/W80Io9naBobQTkQzbhQV5g)
+ [ ][网络协议TCP和UDP](https://mp.weixin.qq.com/s/4DBju4YmEVUJRYQ_dc3y-A)
+ [ ][《JavaScript 20 年》中文版之创立标准](https://mp.weixin.qq.com/s/OY2d2A1aKPlY1QgNwjweZw)
+ [ ][Google的性能分析利器-Lighthouse 6.0发布](https://mp.weixin.qq.com/s/UL9oVA8nTzYQqKT38ZANMA)
## 2020.5.26
+ [ ][解读新一代 Web 性能体验和质量指标](https://mp.weixin.qq.com/s/E-0XyclhUQCokqIXtbz41g)
+ [ ][React源码揭秘(三)：Diff算法详解](https://mp.weixin.qq.com/s/e0fDbM5pp9bX1YuYBSXhLA)
+ [ ][152. 精读《recoil》](https://mp.weixin.qq.com/s/a_16UjhUwfpyfnuHf-0pag)
## 2020.5.25
+ [ ][跨平台战役升级：React Native宣布支持MacOS和Windows平台](https://mp.weixin.qq.com/s/y2etrvXEGraSxx33FZzW2w)
+ [ ][Chrome 83 发布，支持直接读写本地文件！新的跨域策略!](https://mp.weixin.qq.com/s/6fDoKE2bayKXvI5re-gfOg)
+ [ ][这就是你日思夜想的 React 原生动态加载](https://mp.weixin.qq.com/s/l_kv6rzUXSF3R9bfIko5BQ)
+ [ ][深入解析 EventLoop 和浏览器渲染、帧动画、空闲回调的关系](https://mp.weixin.qq.com/s/ynLq8MjRLqX6uaYbK17n_Q)
+ [ ][前端状态管理设计——优雅与妥协的艺术 – 腾讯CDC](https://cdc.tencent.com/2020/05/22/frontend-state-management-research/)
+ [ ][玉伯的人生答案：做一个简单自由有爱的技术人 - 蚂蚁技术 - SegmentFault 思否](https://segmentfault.com/a/1190000022676508/)      
+ [ ][151. 精读《@umijs/use-request》源码](https://mp.weixin.qq.com/s/ZbIiwSTurQXw6qu2rJwkJA)
+ [ ][React Hooks 最佳实践 - 掘金](https://juejin.im/post/5ec7372cf265da76de5cd0c9)
## 2020.5.20
+ [ ][10个案例让你彻底理解React hooks的渲染逻辑](https://mp.weixin.qq.com/s/-Ao9DATp2B3Qgefbc1XN0g)
## 2020.5.19
+ [ ][犀牛书作者：最该忘记的JavaScript特性](https://mp.weixin.qq.com/s/guAN1Cz2gYfKdBhmUpLyVA)
+ [ ][前端源码架构在拍卖详情页上的探索](https://mp.weixin.qq.com/s/yNLaCVBhBmKTbB9_2m0pcA)
## 2020.5.18
+ [ ][代码规范最佳实践](https://mp.weixin.qq.com/s/M5wSHqsMuC65cQeweub4Yg)
+ [ ][webpack-dev-middleware 源码解读](https://mp.weixin.qq.com/s/EXH0sNSB4REh9CjWTVQsZA)
+ [ ][iptables系列教程（一）| iptables入门篇](https://mp.weixin.qq.com/s/uZRc7YOgh7SnRdH-2Vvv8A)
+ [ ][iptables系列教程（二）| iptables语法规则](https://mp.weixin.qq.com/s/YljRKG7Pa6Tbefs5aygOqA)
+ [ ][Deno 正式发布，彻底弄明白和 node 的区别](https://mp.weixin.qq.com/s/BHfc9pkkGxmK0g8SN9GQmQ)
+ [ ][Node.js 中的 stream 模块详解](https://mp.weixin.qq.com/s/N6U-Lj7ts2aLiv4KC22DAw)
+ [ ][Vue3 的响应式和以前有什么区别，Proxy 无敌？（源码级详解）](https://mp.weixin.qq.com/s/j_Kbgwh6W3WGN2ERcaqgCA)
+ [ ][为新的Facebook.com重建我们的前端技术栈](https://mp.weixin.qq.com/s/VBH6fmetxbM_DL03m3MoIw)
## 2020.5.15
+ [ ][用 esbuild 让你的构建压缩性能翻倍](https://mp.weixin.qq.com/s/HCoRyk4Re4_G6ygwCmxtVA)
## 2020.5.14
+ [ ][Facebook 前端技术栈重构分享](https://mp.weixin.qq.com/s/91zNpRkgztXFDiWo01UFMA)
+ [ ][花式解说防抖函数debounce的实现](https://mp.weixin.qq.com/s/JqEXJCmp3WNhm6qICpq4Ww)
+ [ ][如何避开Vue性能优化之路的荆棘？](https://mp.weixin.qq.com/s/jDusKZJ59Gd-7aFii4M0rA)
+ [ ][Vuex调用接口的三个阶段](https://mp.weixin.qq.com/s/ABwLmn07rDMcaO9s0WfqLA)
## 2020.5.13
+ [ ][浅析 Node 进程与线程](https://mp.weixin.qq.com/s/P9k8SIIVrw6rV2Bvit_IMQ)
+ [ ][前端必备的 Terminal 终端进阶技巧](https://mp.weixin.qq.com/s/zWCmzIl6IKFKdg4FHYuqIg)
+ [ ][LogDevice：一种用于日志的分布式数据存储系统](https://mp.weixin.qq.com/s/9GCVd8nrpbUWHTapR-qavA)
+ [ ][前端文档站点搭建方案](https://mp.weixin.qq.com/s/youcldtW12xEr3T4OkXnRw)

## 2020.5.12
+ [ ][理解 WebView](https://mp.weixin.qq.com/s/340y-F7E9ARKLULFa8ah_g)
+ [x][Deno 1.0，来了解一下](https://mp.weixin.qq.com/s/1XhH7ycze3zENJJBrH9bmA)
> Deno是nodejs的一个升级，自带了各种标准库和框架，抛弃了npm管理方式，也抛弃了package.json。有自己的很多解决方案。完全采用TS。
## 2020.5.11
+ [x][不可错过的实用前端工具](https://mp.weixin.qq.com/s/u9hXLaP9-PEMa_Q5Tdg4CQ)
>`干货`。css学习、js文章、表情库、沙盒环境。
+ [x][Serverless 掀起新的前端技术变革](https://mp.weixin.qq.com/s/Aygcakz8bIDNhkevpkVv0w)
>`迄今为止本页面介绍serverless最易懂的文章。干货。`
+ [x][如何快速开发一个自己的项目脚手架？](https://mp.weixin.qq.com/s/P4CsZp7wGDgkNBwxTDgE6g)
>使用yeoman来进行cli工具的开发。
+ [x][前端最佳实践之可维护性](https://mp.weixin.qq.com/s/t6HhTu71cYIJLa61SbNkVw)
>松峰写的，还不错。主要是讲逻辑视图解耦，如何避免少出错误。
+ [x][当前端基建任务落到你身上，该如何推动协作？](https://mp.weixin.qq.com/s/Y0S0X_sx_6IlgXQIDd3DkQ)
>devops各种工具
+ [ ][硬核！30 张图解 HTTP 常见的面试题](https://mp.weixin.qq.com/s/PyOpjOqFOhaVf-xGf2tmWg)
## 2020.5.7
+ [x][Vue3 究竟好在哪里？（和 React Hook 的详细对比） - 知乎](https://zhuanlan.zhihu.com/p/133819602)
>`干货`此文主要介绍vue 的hook好在哪里。文章讲了mixin、HOC、react hooks的对比，最后再讲vue如何借鉴react，优势是什么，讲得非常好。
+ [ ][React Hooks 你真的用对了吗？ - 知乎](https://zhuanlan.zhihu.com/p/85969406)
+ [ ][你知道小程序最后上线的代码是什么样子吗？](https://mp.weixin.qq.com/s/-EXouXHh5GIjfMZcTcNrrw)
## 2020.5.6
+ [ ][移动 Web 最佳实践（干货长文，建议收藏）](https://mp.weixin.qq.com/s/rTJLEX_jDN2R2Ag6nWwWpA)
+ [ ][如何进阶成公司 Git 小能手(常见问题总结)](https://mp.weixin.qq.com/s/oF5kLn0H3XvM_URTq44F-w)
+ [x][12个前端必会 H5 问题及解决方法](https://mp.weixin.qq.com/s/9CcNm7CbUp86XM2zi1FxKg)
> 总结得比较好。但是图片太少了，读起来不是太容易懂。文中包含像素问题、滚动问题、点击问题等。
+ [ ][小姐姐用动图展示 10 大 Git 命令](https://mp.weixin.qq.com/s/rIakdSllk5ooeReRuseigg)
+ [ ][JavaScript ES2020必知必会新特性](https://mp.weixin.qq.com/s/NWhGxV5KXw8tz_cjbUW3jQ)
## 2020.4.23
+ [x][前端需要了解的9种设计模式](https://mp.weixin.qq.com/s/VeHQHz-eO_4Mr88uM7K89g)
>设计模式分成了3个大类。结构、创建、行为。感觉比较抽象，设计模式了解主要的几种就好。
+ [x][聊一下 Chrome 新增的可信类型（Trusted types）](https://mp.weixin.qq.com/s/RxnXBNV5AK9TdkdmenYXiw)
>干货。又一个csp的配置项，用来执行防止xss的策略。
+ [ ][《JavaScript 20 年》中文版之语言诞生](https://mp.weixin.qq.com/s/gB1rLGiDqiYjjG-MPh9Tyg)
+ [ ][抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…](https://mp.weixin.qq.com/s/MQues_aqTBeQ_6g8uVT9Tw)
## 2020.4.20
+ [ ][148. 精读《React Error Boundaries》](https://mp.weixin.qq.com/s/UMw9NYsOq4Z1qLZMPycFtw)
+ [ ][当浏览器全面禁用三方 Cookie - 掘金](https://juejin.im/post/5e97124df265da47b27d97ff)
+ [ ][通天塔前端性能优化实践](https://mp.weixin.qq.com/s?__biz=MzUyMDAxMjQ3Ng==&mid=2247492229&idx=1&sn=4398b7b00d090cf27b0ea9a725e4b697)
+ [ ][深入 Nodejs 源码探究 CPU 信息的获取与利用率计算](https://mp.weixin.qq.com/s/kfcwaKRwP3SY2wa3bWA_mw)
+ [ ][好消息，vue 3 进入 beta 阶段！ - 掘金](https://juejin.im/post/5e99681f6fb9a03c69203278)
+ [ ][https://www.infoq.cn/article/RO7CC10Nv96lGdB3K43h](https://www.infoq.cn/article/RO7CC10Nv96lGdB3K43h)
+ [ ][飞猪微前端实践：统一运营工作台的解决方案](https://mp.weixin.qq.com/s/xmcXz5GWSEYFy18APPHwlg)
+ [ ][目标是最完善的微前端解决方案 - qiankun 2.0 - 知乎](https://zhuanlan.zhihu.com/p/131022025)
+ [ ][三大应用场景调研，Webpack 新功能 Module Federation 深入解析](https://mp.weixin.qq.com/s/zhkgudIjeuKWi536U5pJhw)        
+ [ ][了解CSS min()/max()/clamp()数学函数 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/04/css-min-max-clamp/)
+ [ ][Taro Next H5 跨框架组件库实践 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2020/04/13/2020-4-13-taro-components/) 
## 2020.4.16
+ [x][当浏览器全面禁用三方 Cookie](https://mp.weixin.qq.com/s/7aWSZtitdOuMrRaxMZoYVQ)
>`干货`。目前chrome只是要求samesite的默认值不为none。而第三方cookie一样可以通过设置好samesite为none来发送。而将来可能完全禁用三方cookie。当然可以通过一方cookie来解决，文中还详细说了浏览器指纹这个东西。不同的环境和浏览器可以计算出不同的指纹。
+ [ ][WebGL工作流程解读，一个三角形的诞生](https://mp.weixin.qq.com/s/P_l86DcbJElshjYuPNwWgg)
## 2020.4.15
+ [ ][花椒前端基于 Docker 的 SSR 持续开发集成环境实践](https://mp.weixin.qq.com/s/9628_tvhXKkLHYuAQUw1AQ)
+ [ ][前端高级进阶：在生产环境中使你的 npm i 速度提升 50%](https://mp.weixin.qq.com/s/EHtJWlZbYUru3XdnQH8WLA)
+ [ ][深入理解 ESLint](https://mp.weixin.qq.com/s/CKEn-luXhVFp-gQdL_XQyA)
+ [ ][147. 精读《@types react 值得注意的 TS 技巧》](https://mp.weixin.qq.com/s/ziRJ5iiyXzFp9oeEYCE6AQ)
## 2020.4.14
+ [ ][平庸前端码农之蜕变 — AST](https://mp.weixin.qq.com/s/7yuNBcH7pwJq07EquhAVmA)
## 2020.4.10
+ [x][【干货】从零实现 react-redux](https://mp.weixin.qq.com/s/8_Usur3IDUIxTRf0yL53uQ)
> `干货`。对redux的流程原理讲得比较清楚。
## 2020.4.9
+ [x][Chrome 81 正式发布 ！消灭混合内容最后一步~](https://mp.weixin.qq.com/s/jVupOcNOL1m75yttC6xlVg)
>因为疫情影响可能会跳过82版本.81开始https里的资源必须都是https才能加载。
+ [x][说说小程序自动化](https://mp.weixin.qq.com/s/EIUEDWslSOBQBQwRLuOlKg)
>`干货`。通过微信官方sdk实现小程序自动化测试。sdk只提供操作小程序的功能，测试框架可以用Jest。
## 2020.4.8
+ [ ][彻底搞懂移动Web开发中的viewport与跨屏适配](https://mp.weixin.qq.com/s/cUvpvxSDa4vKBs_vQm6V6A)
+ [x][《CSS揭秘》实用技巧总结](https://juejin.im/post/5e0fef935188253a624a6a72)
> `干货`。背景、边框、饼图、动画。
+ [ ][146. 精读《React Hooks 数据流》](https://mp.weixin.qq.com/s/PYoNo0SdzwymJjtLLLGDwQ)
+ [ ][一位阿里P7的面试经验分享](https://mp.weixin.qq.com/s/EzCSQdefb2A4sm1WP5QY7g)
+ [ ][Facebook上获赞千万的漫画：《人生的意义》](https://mp.weixin.qq.com/s/aQ1CUCCd3ZEZumGHzmdPIw)
+ [ ][高效的编码：我的VS Code设置](https://mp.weixin.qq.com/s/MzEm8aurV9T3U21Iebs9sQ)
+ [ ][146. 精读《React Hooks 数据流》](https://mp.weixin.qq.com/s/PYoNo0SdzwymJjtLLLGDwQ)
## 2020.4.3
+ [x][为什么说for...of循环是JS中的宝石？](https://mp.weixin.qq.com/s/hVUHhRpCAjr6Kf6az--3Lg)
>for of是一个迭代器，只要是可以迭代的都可以用它迭代。最主要它还支持for (const [prop, value] of Object.entries(person))这种结构写法，使用起来相当方便。
+ [x][简单几步让你的 JS 写得更漂亮](https://mp.weixin.qq.com/s/CKaSQw0nLCXohrjstFoOBQ)
>`干货`，里面的写法值得参考。如`通过var a = 0`定义变量类型，中途不更改类型；如`函数返回值类型统一`；如`减少作用域查找`；如`避免使用双等号`
+ [x][一文读懂 JS 装饰器，这是一个会打扮的装饰器](https://mp.weixin.qq.com/s/lnFEahdeZv34DS-StABTQQ)
>没看太懂：TODO吧
## 2020.3.31
+ [x][5000字解析：前端五种跨平台技术](https://mp.weixin.qq.com/s/dl_6kCq2H_TNQSHkjUWGQQ)
> 我都知道
## 2020.3.30
+ [x][数据结构基础之掌握5个常见的链表操作](https://mp.weixin.qq.com/s/XpqUo1AZG27B4RRc0PSZuA)
>有点像c里面的链表操作，用js模拟了一遍
+ [x][「云游敦煌」小程序背后的设计故事。 – 腾讯CDC](https://cdc.tencent.com/2020/03/20/design-story-of-dunhuang-trip-2/)       
>这个真的NB了，这才是真正的设计。`干货`
+ [ ][WebAssembly 与 Kubernetes双剑合璧-阿里云开发者社区](https://developer.aliyun.com/article/744310)
+ [x][CSS overflow-wrap新属性值anywhere是干嘛用的？ « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/03/css-overflow-wrap-anywhere/)
> 和word-break:break-word有关联，用在换行的时候的逻辑。
+ [ ][前端页面仔的祖传技术 JS 终于有史书了… - 知乎](https://zhuanlan.zhihu.com/p/113079856)
+ [ ][崇志 - 如何设计大型前端团队基建路线 | 9000 字](https://mp.weixin.qq.com/s/CF-iZ1NCT1AkihCuyffbUA)
## 2020.3.26
+ [x][别乱提交代码了，看下大厂 Git 提交规范是怎么做的！](https://mp.weixin.qq.com/s/IbgsOaJ3xHF-OU1GZYoanw)
> 一个生成commit日志的工具。
+ [ ][组件演进史：从Mixin到HOC，再到Hook](https://mp.weixin.qq.com/s/0p6HhRxrSfEgWrTzZsMncw)
>`干货` 详细列出了三种模式在react中的应用方式。
+ [ ][JavaScript 深入系列之浮点数精度](https://mp.weixin.qq.com/s/YOQ_Vei77O76RQXPpum1Yw)
+ [ ][简单实用的webpack-html-include-loader（附开发详解）](https://mp.weixin.qq.com/s/-16C302cU6bgFuk-Y9U5Tg)
## 2020.3.24
+ [x][Promise/async/Generator实现原理解析](https://mp.weixin.qq.com/s/3xfLpQ2h0v8yt2W7opLwGw)
> 有了promsie，自然就有了后面的东西。自己实现以下可以大大加深对Promise的理解。
+ [x][TypeScript进阶 之 重难点梳理](https://mp.weixin.qq.com/s/_lO3cd0FcF0Dg3TRnHPdwg)
> TS精华总结，介绍了常用的一些东西，不错。
+ [ ][深度解析！Vue3 & React Hooks 新UI组件原理：Modal 弹窗](https://mp.weixin.qq.com/s/cO9jbJ2BT1_k5ojxaUdljA)
+ [ ][简单实用的webpack-html-include-loader（附开发详解）](https://mp.weixin.qq.com/s/-16C302cU6bgFuk-Y9U5Tg)
## 2020.3.23
+ [x][精读《Webpack5 新特性 - 模块联邦》](https://mp.weixin.qq.com/s/b5Gl_1yX1enktU9oulO9zg)
>说得不太明白。这个跟微前端思想很像，保证子项目之间可以共用通用模块，但是文中只说了打包方法，没想通具体的实现逻辑。
## 2020.3.20
+ [ ][React-Router v6 新特性解读及迁移指南](https://mp.weixin.qq.com/s/HQ0dgLIGoq1c4l26MMdALQ)
## 2020.3.19
+ [ ][React-Router v6 新特性解读及迁移指南](https://mp.weixin.qq.com/s/HQ0dgLIGoq1c4l26MMdALQ)
+ [ ][深入理解Javacript从作用域作用域链开始](https://mp.weixin.qq.com/s/vSz5BYf1wd5p-6c9EwboHQ)
+ [ ][使用四十行代码实现一个精简版 koa](https://mp.weixin.qq.com/s/trL-CuvCoKBIerwbU8_BVQ)
## 2020.3.18
+ [ ][从构建进程间缓存设计谈Webpack5 优化和工作原理](https://mp.weixin.qq.com/s/rLwxVGVsEoyTTEFKYQNZbA)
+ [ ][Vuex调用接口的三个阶段](https://mp.weixin.qq.com/s/bZmDHrteUsaHx6EHflz99Q)
+ [ ][手摸手教你写几个实用的AST插件](https://mp.weixin.qq.com/s/HIDT3jyzOmis0jcA90hm8A)
+ [ ][一张页面引起的项目架构思考（rax+Typescript+hooks）](https://mp.weixin.qq.com/s/EuHtI_5NmVZLmQVSg9fi5w)
+ [ ][大幅提升 JavaScript 执行效率，V8 是如何做到的？](https://mp.weixin.qq.com/s/nhEjXtey30MUOb1sVSHoHQ)
+ [ ][Netflix前端应用采用六角体系架构来应对数据源替换](https://mp.weixin.qq.com/s/h_QrlZVVG9z9p3KY_N0tZg)
+ [ ][万字长文带你深度解锁Webpack（进阶篇）](https://mp.weixin.qq.com/s/nxGkVfsRbWaUUWFDsopxAw)
+ [ ][143. 精读《Suspense 改变开发方式》](https://mp.weixin.qq.com/s/st30_b1z-wf7wJhxus2Mxw)
## 2020.3.16
+ [ ][高性能前端架构解决方案](https://mp.weixin.qq.com/s/eITZC-eEBV5c4pnSQ7Z1Fg)
+ [ ][【面试题】 阿里 P6 的面经](https://mp.weixin.qq.com/s/SaxRSgOPCE0DNEpe9ugGQQ)
+ [x][程序员崩溃的 40 个瞬间!!! 太形象了](https://mp.weixin.qq.com/s/o24Bs0Ed6cV27kJIKYIwkA)
>放松心情的gif图，很好很有趣。
+ [x][@Dan Abramov：我的十年回顾](https://mp.weixin.qq.com/s/pSlA8NuD95UrUrT_B7B9Vg)
+ [x][【前端冷知识】动画：你知道的和你不知道的](https://mp.weixin.qq.com/s/yrj7GdD0T-EwCTYqFWyeBw)
## 2020.3.14
+ [ ][前端精神小伙：React Hooks 响应式布局](https://mp.weixin.qq.com/s/wlyJx_9JTnzqzXEj_HtzCA)
+ [ ][美团旅行前端技术体系的思考与实践](https://mp.weixin.qq.com/s/-77c-mT5QPPqcaI90dYyaw)
+ [x][堂主 - 如何推动前端团队的基础设施建设 | 7500 字](https://juejin.im/post/5e644a65518825495d69bca6)
> `干货`政采云算是比较全面的了，竟然自己做了一个客户端来搞定所有的文档。
+ [x][前端早早聊 | 小爝 - 如何推动基础架构项目落地 - 掘金](https://juejin.im/post/5e6447e1f265da575f4e7df1)
> 写得还是比较全面，有很多可以参考的监控组件。`干货`
+ [x][转转商业前端错误监控系统(Sentry)策略升级 - 知乎](https://zhuanlan.zhihu.com/p/112962974)
> 监控系统sentry可以看一下了，基本的监控看起来是可以实现的。
+ [x][揭秘 Chrome 80 开发者工具新特性](https://mp.weixin.qq.com/s/2p7vbMOiSGXCF0yVDTXPWg)
>let可以重复定义了，network可以看到某个请求在timeline中的高亮了。
+ [ ][深入理解position sticky粘性定位的计算规则 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/03/position-sticky-rules/)

## 2020.3.12
+ [x][什么时候使用 useMemo 和 useCallback](https://mp.weixin.qq.com/s/JP7vP9VF8k2IytgqSRFT2w)
> react的use hook，值得参考。
+ [x][webpack 中实现自动识别 CSS Modules](https://mp.weixin.qq.com/s/DqsXf-4iOfI0-pk4twsUIQ)
>介绍了umi是如何自动识别css模块导入还是全局导入的。
## 2020.3.11
+ [x][基于Appium的UI自动化测试](https://mp.weixin.qq.com/s/TZvVMveMY1cCGEvnfPRjeA)
> 对app的测试，宿主是真实手机，通过usb线传输，也可以通过无线传输。
+ [x][前端高级进阶：在生产环境中使你的 npm i 速度提升 50%](https://mp.weixin.qq.com/s/2_0kGRXC2xNcaTf_SC8wSQ)
> `干货`值得参考值得参考。
+ [x][从 JS 引擎到 JS 运行时（上）](https://mp.weixin.qq.com/s/6tc-NE1k82RLRCDWN0SK8Q)
> `干货` quickJS引擎实现一个js执行器的过程。使用C代码调用quickJS可以实现一个原生的自己的js执行器，也能理解浏览器执行js的原理。
+ [x][未来可期的TypeScript](https://mp.weixin.qq.com/s/FwrId8d2kCJKvtGTdM2xHw)
> TS没撒多大的成本好处还多，值得使用。

## 2020.3.10
+ [x][浏览器中实现JavaScript计时器的4种创新方式](https://mp.weixin.qq.com/s/EwiSZ3BYpdW4lhYh3vhnoQ)
>提到使用css动画监听来实现定时器，感觉比较新颖。另外使用worker可以访问微秒级别的定时器，但是worker在页面不聚焦的时候依然会继续执行而且worker的开销是比较大的。
+ [x][面试题：说说事件循环机制(满分答案来了)](https://mp.weixin.qq.com/s/g9af1J6nnOoABB1VWnKOkg)
>浏览器是宏任务=》微任务=》宏任务。而node是阶段=》微任务=》阶段。
+ [x][async原理解析](https://mp.weixin.qq.com/s/gHfRhG1phS5bu4Cbn4gIQQ)
>async是对Generator函数的包装，把星号换成了async把yield换成了await。然后自动实现了执行函数。
+ [x][142. 精读《如何做好 CodeReview》](https://mp.weixin.qq.com/s/0d-poDlwrEX6lZW7aKvQ0w)
>作者主要讲解如何在codereview的时候给开发者建议。
## 2020.3.9
+ [x][代码调试神器：VS Code 开源新工具！](https://mp.weixin.qq.com/s/AJ49ZHC1CVIoVoA094qWjw)
>一个叫做`vscode-debug-visualizer`的神器，可以把一个数组图形化展示出来，用于调试的时候非常直观。
+ [x][从入门到熟悉 HTTPS 的 9 个灵魂之问你能接住几个？](https://mp.weixin.qq.com/s/cc2lkNCg4qiLKHYPdkFC-Q)
>根证书还是很重要的，不能乱安装跟证书。否则https也可以被别人盗取。
## 2020.3.7
+ [x][《精通CSS》第5章 漂亮的盒子](https://mp.weixin.qq.com/s/SgRvjsBG8TDg1rfrgPT97w)
> 通过border-radius还可以设置一个半圆的形状，通过线性渐变应该可以画出网格。
+ [x][从构建进程间缓存设计 谈 Webpack5 优化和工作原理 - 知乎](https://zhuanlan.zhihu.com/p/110995118)
> webpack的缓存的判断需要看文件修改时间，文件hash等信息，缓存的生成策略失效策略都需要很深的考究。这篇文章对webpack缓存实现的原理上分析得比较到位，包括使用了哪些库，缓存过程，webpack编译过程都有提及。
+ [x][爱奇艺云剪辑Web端的技术实现](https://mp.weixin.qq.com/s/nKQG2Sfev58fogfOtqX4Ew)
> `干货`。这个产品目前只提供给爱奇艺内部使用，主要功能是web端的视频剪辑器。主要思想是把视频、图片、文字等素材全部推送给canvas渲染，渲染的时候还可以实现一些特效，达到前端所见即所得的目的。
+ [x][React Hooks的体系设计之四 - 玩坏ref - 知乎](https://zhuanlan.zhihu.com/p/111308773)
>感觉use已经被react玩儿坏了。需要啥功能就use一个。
+ [x][Web 中文字体处理总结 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2020/02/28/webfont-processing/)
>讲了字体文件的组成结构。字体文件是可以压缩的，只把需要的文字的字体打包到字体文件里。
+ [x][CSS Color、Media Queries、Transforms、Conditional Rules](https://mp.weixin.qq.com/s/7IAZywDwE--NCcwXuAViOQ)
> w3c发布的新规则解读。
+ [x][设计体系的响应式设计 | Ant Design 4.0 系列分享 - 知乎](https://zhuanlan.zhihu.com/p/109781992)
> 文中提到了好多个响应式ui设计框架在处理不同尺寸屏幕时候的策略。对于响应式设计的思路引导很有帮助。`干货`
+ [x][“表里不一”的设计资产 | Ant Design 4.0 系列分享 - 知乎](https://zhuanlan.zhihu.com/p/110071209)
>主要讲了表格的设计
+ [x][我在阿里做中后台开发](https://mp.weixin.qq.com/s?__biz=MzU4NzU0MDIzOQ==&mid=2247489003&idx=1&sn=83a506debf5cc1c3a1921b658d7d0a04&chksm=fdeb278bca9cae9d6b8823a88cb3cbeb5c887dc3bd00848fbdb5882d3777bc14345ac8d44aa8&scene=27)
>阿里的webIDE开发方案。
## 2020.3.6
+ [x][从koa/redux看如何设计中间件](https://mp.weixin.qq.com/s/I09rt9VsnQDT_Ub7-CkXzw)
> 中间件的设计是柯里化和闭包思想的完美按理。
+ [x][详解今日头条、抖音的推荐算法原理！](https://mp.weixin.qq.com/s/uFAxtg-c02jSVzYXhMBHzw)
> 看着想睡觉。实在太复杂。
+ [x][ES6原生实战Uploader工具类(从设计到实现)](https://mp.weixin.qq.com/s/cLMgAiDxgCDL-qELjSh3fg)
> `干货` 功能实现得还是较为全面。一个Uploader类实现了各种上传功能。
## 2020.3.4
+ [x][【技术圈】ESLint v7.0.0 将会有哪些新功能？](https://mp.weixin.qq.com/s/YsR9NGIUyBANFUxceJdfqw)
>eslint和jslint有啥关系呢？
## 2020.3.3
+ [x][玩转 webpack，使你的打包速度提升 90%](https://mp.weixin.qq.com/s/mo8V3p-ex3mNdScBqJk5gQ)
>`干货`。值得在使用webpack打包的时候进行优化参考。其实主要是搞清楚打包的每一个流程是怎么运作的，从而去优化这些流程。
+ [x][十个案例学会 React Hooks](https://mp.weixin.qq.com/s/3pW0KxnOV-5HSdZhFNqQQA)
> 首先hooks解决的是函数组件中不能使用类组件一些功能的问题。如类组件可以使用setState方法管理state。hooks是一系列的函数，通过这些函数可以实现类似类组件的功能。useState实现state的功能，不过这个功能看起来好low，还是全量覆盖。react的hooks还是很强大，可以完成class的很多功能。另外评论里有人推荐了一个：<https://github.com/30-seconds/30-seconds-of-react>
+ [x][KAITIAN IDE 是如何构建扩展能力极强的插件体系的？](https://mp.weixin.qq.com/s/lmr5DHnkD4UpYHDLAoJo-A)
> vscode的插件系统值得学习。
## 2020.3.2
+ [x][手把手教你写出令人窒息的烂代码](https://mp.weixin.qq.com/s/Xyt0JQjWNHSz_6kP8PdcCQ)
>提到一个**的操作符，a**b代表a的b次方，类似pow的功能，这个以前竟然没见过。
+ [x][Color Theory - 声享](https://ppt.baomitu.com/d/c887a533#/)
>这个比较高深和底层了，只有ppt可能看不大懂，需要现场听博文讲才行。
+ [x][【第1867期】Node.js CLI 工具最佳实践](https://mp.weixin.qq.com/s/DwDw0vShAqegXCoAVpZPJQ)
> 设计命令行并没有那么简单。`干货`
+ [x][看优酷 Node 重构之路，Serverless SSR 未来可期-阿里云开发者社区](https://developer.aliyun.com/article/746281)
> 优酷竟然已经被阿里收购，员工也属于阿里集团。
+ [x][iOS 键盘难题与可见视口（VisualViewport）API | AlloyTeam](http://www.alloyteam.com/2020/02/14265/)
>手机端的键盘弹起确实有很多细节需要考虑，ios的设计者在8.2版本中自作聪明的加入了一些自动行为实属不应该。
+ [x][Flutter在字节跳动的现状与工程实践](https://mp.weixin.qq.com/s/JGSuJYwwNclvdLOOwW2pwQ)
> 基于flutter做了一个flutterW的基础工具，把整个研发过程通过工具提供的各种功能玩儿起来。并且开发了一个ByteStore来替代redux的store。
+ [x][风物长宜放眼量，人间正道是沧桑 - 一位北美 IT 技术人破局 - cxuan的技术园地 - SegmentFault 思否](https://segmentfault.com/a/1190000021824031)
>`干货`。看了这篇文章，真的可以少很多迷茫。`知行合一`不是那么容易做到，但是坚定信念，坚持付出，通过实践出真知，这个是奋斗的路上的一盏明灯。
+ [x][辩证的眼光搞懂 JWT 这个知识点](https://mp.weixin.qq.com/s/_f5MZa30VhmaqwDs_sx6vA)
>JWT的场景看起来确实是一次验证为主。比如注册的时候邮箱激活之类。JWT就是一个包含了用户信息的字符串，然后通过sha256或者其他算法进行加密传输，服务端解密后就拿到了用户信息，注意这个用户信息就是用户的身份证，类似用户的cookie鉴权信息。它比cookie这种模式好在不需要查库，因为信息就在jwt里。而cookie通常是把token拿来验证后再去数据库查个人信息。就连过期都可以放到jwt里而无需服务器再保存一份过期信息。所以JWT称为无状态的验证方式。
+ [x][Rome：Facebook最新JS工具上手](https://mp.weixin.qq.com/s/CzKO1I_pr6gKjGb2uAOTmA)
>李松峰写的。Rome是facebook写的一个新的对js构建的工具，可以做测试、打包、发布。
+ [x][Web正文字体发展简史](https://mp.weixin.qq.com/s/a7NwAllFszgw5B1WxM2AHw)
> `干货`。我们对一个网页上的实体设置宽度的时候，px并不是一个很好的选择。因为100个px的长度可以是1厘米，可以是2厘米，这依赖于用户的硬件。在手机上100px可能有5cm，而在高分辨率笔记本显示器上可能只有2cm。我们在设置大小的时候应该考虑这个实体最终的物理大小而不是px大小。这也是为什么现在rem越来越流行的原因，我们可以通过js设置root为合适的大小。
+ [x][前端高级进阶：javascript 代码是如何被压缩的](https://mp.weixin.qq.com/s/b0TN0Lf0fDczo40XNtNLiQ)
> webpack压缩js底层是通过uglifyJS来把js转换成AST，再把AST进行压缩，然后转换AST为js代码的。
+ [x][为什么 TCP/IP 协议会拆分数据](https://mp.weixin.qq.com/s/j3L89Mb_j4IRMNAVbhRJbw)
>主要是因为物理设备的限制
+ [x][如何设计一个可扩展的限流算法](https://mp.weixin.qq.com/s/Nq2dr1wDVQlFZPEOYmq11A)
>不是太懂。宣传了一个限流网关Kong。我更想知道如何判断两条请求一定来自同一机器。ip啥都都不靠谱，搜了一下，更靠谱的应该是通过cookie来判断。一个令牌就是一个用户，这样就比较科学。
+ [x][为什么使用 MD5 存储密码非常危险](https://mp.weixin.qq.com/s/4pQf6dGN_dSvQUq6S82thA)
>hash和hash加盐都是有可能被破解的。应该使用bcrypt这种工具来加密，因为bcrypt可以设置破解成本。而使用sha256并不好，因为sha256是公开算法，一旦token泄露也会造成密码被破解。
+ [x][外包程序员 == 二等公民？](https://mp.weixin.qq.com/s/Lj0iGXg1sUCdXL23Ou8afA)
+ [x][Vue.js × 尤雨溪 30分钟纪录片 | 中文字幕](https://mp.weixin.qq.com/s/WU2BZZzdaYINMTHhZ1KxTQ)
>尤雨溪在goole用vue来解决一些视图的问题，慢慢的发布成一个个人框架，然后被php的lavaral框架作者发了twitter开始火起来，走到今天成为了中国人的骄傲，已经是一个英雄人物了。
+ [x][微前端在美团外卖的实践](https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html)
>`干货`。美团通过动态路由加载实现了微前端。大概的思路就是把子工程的入口文件url写到配置文件中，所有的路由都主工程中，主工程通过动态路由的方式去异步加载子工程的入口js，然后子工程把自己的store、view、css注册到主工程里。通过postcss保证模块之间的css不会冲突。上线的时候只需要publish子工程的静态文件，然后更新配置文件即可。这个解决方案简单清晰易懂，且成本非常低，值得参考。
## 2020.2.28
+ [x][Webpack 插件开发如此简单！](https://mp.weixin.qq.com/s/nimOuftziXCWHV61FfjWog)
>webpack有多个hook可以在不同阶段调用插件，然后插件处理文件，学webpack写插件和loader应该是最快的。
+ [x][5个问题教你如何更好解决问题](https://mp.weixin.qq.com/s/PgeW2vEtKJZiDTmZMkQ6pQ)
> 嗯，遇到问题先问一下自己。
## 2020.2.27
+ [x][什么是Deno？跟Node.js有何区别？](https://mp.weixin.qq.com/s/KU4mRmsS2K0cWzwRZ5c3VA)
> Deno是nodejs作者搞的。跟node差别还是很大，没有了npm直接通过url引用es模块。默认在沙箱中运行。默认支持ts。采用rust语言编写。
+ [x][种草 ES2020 新特性，真的学不动了](https://mp.weixin.qq.com/s/uaS_OcYKc9mIDykfhwSBGQ)
> Promise.allSettled解决all函数必须全部resolve才能resolve的问题，在then里提供一个ret参数存储每一个promise的状态。可选链，这个NB了，obj.list=[0,1];obj.list?.length;。空值查询：obj.xSetted??1:0;看这个属性是否设置，设置1否则0。动态import支持动态载入js模块并运行。globalThis提供了一个各个环境都适用的global。bigInt提供了超大的整数。matchAll可以提供global匹配且包含groups信息，而match只返回匹配到的字符串。
## 2020.2.26
+ [x][前端高级进阶：如何更好地优化打包资源](https://mp.weixin.qq.com/s/J9T0lttp2RMd1P6D02ulZw)
> 大多数优化都是常见的。但是具体的代码应该知道下：如动态import(),react.lazy,webpack的optimize里的分包groups参数按照更新频率组合模块为一个包。
+ [x][一文道尽软件架构及前端架构演进](https://mp.weixin.qq.com/s/qOjpR1qrKgBRF90ea5mkyA)
> `干干货`分层架构：从应用到底层，每一层干每一层的事情。微服务架构：每一个服务都是单一完整的分层架构。插架架构：只提供核心功能，通过插架来扩展功能。
对于前后端分离架构来说，第一步是前后端分离，前端直接调用restApi。第二步是前端调用node，node调用api，这样可以在node做ssr或bff等前端才需要的服务，bff是back-end4front-end，通过graphQL可以实现bff但是无法实现ssr，bff可以做的事情包括多个接口数据整合、资源压缩、http配置等等。第三步是通过serverless来部署前端服务，让前端只专注代码不用管服务器。
前后端后面是组件化架构，如antd等提供单一原子组件。
前后端分离后是MVC分层架构和reduc、mobx数据流管理架构。
MVC机构后就是微前端架构了，微前端包括处理各个前端系统之间的隔离和组装以及公共模块加载等问题。
+ [x][阿里前端专家，揭秘职位描述下的潜台词](https://mp.weixin.qq.com/s/Lj1TiyOzJu9-3W4cYX3Shg)
>`干货`。这篇文章是一个比较好的关于前端技术学习方向的总结，总体来说比较准确，值得参考。
## 2020.2.25
+ [x][Preact X 有什么新功能？](https://mp.weixin.qq.com/s/H27LvS8yKtQtO7wfC1Maxw)
> hooks,fragment等
+ [ ][面试官：CSS如何实现固定宽高比？](https://mp.weixin.qq.com/s/OZADYmtbDd-Jf8pp-xxUFg)
+ [ ][干货：快速开发一个Antd级别的组件库](https://mp.weixin.qq.com/s/KnMO5JiLfb465Ca1vf6mYA)

## 2020.2.24
+ [ ][140. 精读《结合 React 使用原生 Drag Drop API》](https://mp.weixin.qq.com/s/4gm_r9SS79rnXTeHGfXgWQ)
+ [ ][小白必看，JSBridge 初探](https://mp.weixin.qq.com/s/mzE2wC0OEPt3_EK1MoEfdg)
+ [ ][前端 DSL 实践指南（上）—— 内部 DSL](https://mp.weixin.qq.com/s/tcCXCh7sldK7vodY77M5gg)
+ [ ][SameSite Cookie 变更：您需要了解的都在这里](https://mp.weixin.qq.com/s/a1wh4teTPIq4AcC6g09mRw)
+ [x][2020 前端开源领域技术展望](https://mp.weixin.qq.com/s/yMg3kpmDaUL-p8iuhbo86Q)
> 文章说了通过esm模块以后js将不需要打包而只需要异步从cdn按需引入，这是很酷的，现在不现实。typescript是趋势。前端智能化是很重要的，突然觉得，炫永远都是前端要考虑的一个问题。前端作为界面工程师不能做一个炫的界面，真的是不行的。`干货`
+ [x][带你重新认识十大设计心理学原则](https://mp.weixin.qq.com/s/iBg59-FycTxkvaxMY6FBYw)
>如何让用户选择你，不抛弃你，心理学很重要。
+ [x][如何构建触摸体验的设计方案](https://mp.weixin.qq.com/s/HXU0tPYyiySMdPjfReR6Wg)
>写得挺好的，虽然我看不懂。
+ [x][给网站添加暗黑模式指南](https://mp.weixin.qq.com/s/qfeCcJuJ7eHw-34yCqaSTg)
> css已经原生支持自定义变量，及定义变量并使用变量，这些变量可以在不同的css中赋值这样切换css文件的时候就切换了主题。另外我们可以通过js进行媒体查询得到当前浏览器对一些css属性的支持情况。另外我们还可以更改url栏的颜色
+ [x][GoLang：你真的了解 HTTPS 吗？](https://mp.weixin.qq.com/s/ibwNtDc2zd2tdhMN7iROJw)
> 此文对https讲得非常透彻了，还讲了开发过程中https的一些经验。把证书知识和https传输过程都讲了，特别是证书：https服务器的公钥不是直接发送给客户端的，因为这样会被中间人篡改。而是把公钥给CA机构，CA机构把公钥放到证书里，再通过CA的私钥加密这个证书的HASH，然后把加密后的HASH和证书内容发给浏览器，浏览器内置了CA的公钥，通过公钥解密CA发过来的HASH，如果与计算出来的证书实际HASH对的上，就说明证书是没有被篡改的，然后提取证书里服务器的公钥。这样这个公钥就很难被篡改了。`干货`
+ [x][Serverless 基本概念入门](https://zhuanlan.zhihu.com/p/108118832)
>serverless不是无服务，也不是无服务器而是不需要关心服务器。服务器由云提供，直接把代码放上去即可，无需去关注并发量等等配置。且用多少给多少钱，非常灵活方便。

## 2020.2.21
+ [x][两个你必须要重视的 Chrome 80 策略更新！！！](https://mp.weixin.qq.com/s/KhBArILm3srsP21bHmJ3mw)
>强制HTTPS和samesite cookie的认证。对蒲公英影响不大。
## 2020.2.20
+ [x][前端面试时你必须掌握的10个能力](https://mp.weixin.qq.com/s/vf02a0V8gdM_zSZPW2wdDQ)
> 广告
+ [x][京东购物小程序购物车性能优化实践](https://mp.weixin.qq.com/s/nQ-V9Iqo9W2jgxvm07jZMw)
> 文中有不少性能优化相关的文章。值得参考。性能优化永远都离不开那几点：大数据分片、利用requestAnimation、减少计算量等。
+ [x][从零开始的 React 再造之旅](https://mp.weixin.qq.com/s/f-M4KMswwnjbzKK1MdK7fg)
> 实现了一个基本的jsx渲染到dom等功能，可以作为加深react印象去写一遍的东西。`干货`
+ [x][一文带你看透 Chrome 浏览器架构](https://mp.weixin.qq.com/s/0ynZo7zHCOfA5gkDLUwuXA)
> 不同的配置可以不同的运行方式。把一些核心功能如网络、js执行作为服务来提供，在低配置上通过整合服务到一个进程中运行，高配置可以每个服务都有自己的进程。
+ [x][前端性能优化之利用 Chrome Dev Tools 性能分析](https://mp.weixin.qq.com/s/pCgqGhuFGhQKsb-hufDa3Q)
> 除了常用的性能面板，Audits面板就是google的Lighthouse，可以给页面进行打分作为参考。
+ [x][Web 视频播放前前后后那些事](https://mp.weixin.qq.com/s/tdF3a-gj4nEJI0mOXkCHOQ)
>使用原生的video标签播放流媒体视频。使用ObjectURL设置video标签的src，通过分片来播放流媒体和直播，通过dash流媒体协议来指定元数据，通过一些组件来简化这个过程。`干货`
## 2020.2.19
+ [x][Vue 3.0将正式发布，它有哪些升级变化?](https://mp.weixin.qq.com/s/k3QphTBoSBqGQV6HzF7AxQ)
> ts proxy 这篇文章其实是广告
+ [x][ES6之Proxy 的巧用](https://mp.weixin.qq.com/s/MfKjL8atgDInN3yTRDGk3Q)
> `干货`讲了较多Proxy的应用场景。Proxy比较好理解，就是一个代理，它配合reflect使用，非常香。但是代理肯定会造成性能丢失。顺便说一句reflect主要是为了解决object老方法实现不合理，所以全部重新搞了个全局变量来挂载object的方法。
+ [x][了解什么是微前端](https://mp.weixin.qq.com/s/t40FZgf5OpMGcU3OzNoCfg)
> 微前端解决的问题是大系统各个模块单独团队开发，如何去融合的问题。
## 2020.2.18
+ [x][实用 WebGL 图像处理入门](https://mp.weixin.qq.com/s/pa9HVr6uh3g5K8Uss0sCjQ)
> `干货` 作者虽然在打广告，然文章确实不错。3维世界其实就是3维坐标的集合+每一个三角形的颜色组成的。坐标就是顶点着色器，三角形颜色就是片元着色器。拿到了这些信息，就能把三维世界渲染出来。当然实际过程肯定不止这么简单。
另外，作者打广告的这个库可以方便的操作webGL，从而低成本实现一些比较绚丽的效果。
+ [x][让你牛B加身的前端必会Linux命令](https://mp.weixin.qq.com/s/80UEbeEfPBV2LMmRqJFT7w)
> 确实比较常用了。ssh、tar之类。
+ [x][嘭，setTimeout炸了](https://mp.weixin.qq.com/s/LXjVzdnZxGQzX3dVWlM79g)
> 确实忽略了第二个参数，第二个参数不能超过2^31 - 1，否则视为0.MDN在setTimeout的页面特别做了说明。
+ [x][玩转 CSS Border-Image](https://mp.weixin.qq.com/s/omw9ZVtLJn1fyz2WAAod5w)
> `干货`border-image真的很实用。文中讲解了详细的用法。
+ [x][阿里面试官：分别说说微信和淘宝扫码登录背后的实现原理](https://mp.weixin.qq.com/s/gA0JQp4j2ym9qOyQkC3qkA)
> 这东西我并不觉得很高深，跟我想的差不多。
+ [ ][精读《手写 JSON Parser》](https://mp.weixin.qq.com/s/VB9iwVDJURBKzO_TdqgJXw)
+ [x][138. 精读《精通 console.log》](https://mp.weixin.qq.com/s/JecYEq9JMy6sCoIXQcwclw)
> time是该用起来，这个早就知道了的上次压测的时候还在用手机的计时器。。

## 2020.2.14
+ [x][CSS 实现“故障”特效](https://mp.weixin.qq.com/s/PmYCTYwMuk0u4UtumBhGow)
> 特效很帅，主要用了各种图层叠加的方法
## 2020.2.13
+ [ ][当 SSR 遇上 Serverless，轻松实现页面瞬开](https://mp.weixin.qq.com/s/z6IycL0yDt419K_EzufokA)
+ [ ][《精通CSS》第4章 网页排版](https://mp.weixin.qq.com/s/yLwUh0xxKuLznrz4lw8U9Q)
## 2020.2.12
+ [x][花椒前端用WebAssembly提升前端应用解压缩性能的尝试](https://mp.weixin.qq.com/s/Nc-dVP3P7gF_aQdqMbZGHA)
>jit优化后的性能有时候能够和wsmb相比，这个是很NB的
+ [x][推荐几个我常用的Chrome插件 —— 让你使用Github效率翻倍](https://mp.weixin.qq.com/s/4ynXPVWlYnTzIpA5_8XZkg)
> crx有专门的下载网站，还可以。
## 2020.2.11
+ [ ][《精通CSS》第3章 可见格式化模型](https://mp.weixin.qq.com/s/i1ylutAfo9NRx46pXI_ggw)
+ [x][一个白学家眼里的 WebAssembly | ewind the doodler](https://ewind.us/2020/wasm-wa2/)
> 比较理智的分析了wasb的优势 并不是在所有情况下都适合提升性能。反而有时候利用GPU对性能的帮助更大。
+ [ ][从 JS 引擎到 JS 运行时（下） | ewind the doodler](https://ewind.us/2020/js-engine-to-js-runtime-2/)
+ [x][Node.js 在 2020 年有什么新东西](https://mp.weixin.qq.com/s/RGTjSaY_knfXMAgecPV5Ag)
> 文中介绍了nodejs发布的时间周期。新功能主要是es6模块、wasm支持。
+ [x][前端微服务在字节跳动的打磨与应用](https://mp.weixin.qq.com/s/iLdAH9p2-S8pFyZrNzYaNg)
> 有点看不懂，涉及到一些容器化的东西，总体还是服务的发现合成
+ [x][HTML全局属性列表大全 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/01/html-global-attributes/)
> `干货` `参考书` 值得收藏。其实全局属性也没几个，需要好好了解。
+ [ ][基于 Airtable 实现小微企业的简单信息化 · 语雀](https://www.yuque.com/xufei-coder/code/ugqg6h)
## 2020.2.7
+ [x][从微前端聊聊架构演进](https://mp.weixin.qq.com/s/jJf--ivyt9AJCavtTxnhCw)
> 微前端，是对于多个团队共同开发一个大型项目做的一种架构。各个团队用自己的技术栈，然后通过微前端来进行融合。
+ [x][面试常考手写代码学习技巧总结](https://mp.weixin.qq.com/s/zEq3TbOVtG9BadUgPm1YnA)
> 常用方法、语句说明大杂烩，值得收藏`干货`
## 2020.2.6
+ [x][前端性能优化之自定义性能指标及上报方法详解](https://mp.weixin.qq.com/s/A-SapbQ8sqjX8fSf8M9t8w)
> 主要讲api
+ [x][《精通CSS》第2章 添加样式](https://mp.weixin.qq.com/s/MqBnixNiDitC4jO0UFDJtQ)
>有一个:target属性，匹配当前锚点元素，还有点意思
+ [x][我写CSS的常用套路(附demo的效果实现与源码）](https://mp.weixin.qq.com/s/oOkZ2qI06MmI2O_f2Ckv_A)
>通过设置不同的延迟时间，达到动画交错播放的效果。这篇文章更多是展示文字、按钮的一些特效，并不算是套路。作者制作动画的思路值得借鉴。
## 2020.2.5
+ [x][复制黏贴上传图片和跨浏览器自动化测试](https://mp.weixin.qq.com/s/gs6moUDzD_R7JVEotll2aQ)
> 复制粘贴的api和e2e各种恶性的模拟。看来大家做e2e模拟都不简单。
## 2020.2.4
+ [x][Web Worker 的内部构造以及 5 种你应当使用它的场景](https://mp.weixin.qq.com/s/3MhSJoATeyHn3d96d3M3Sw)
> webworker传递数据可以单播也可以广播，可以传递副本，也可以传递指针(只支持arraybuffer)
## 2020.2.3
+ [x][《精通CSS》第1章 基础知识](https://mp.weixin.qq.com/s/Cm8USf7XVx8R5XzD3EbU3w)
> 其中提到了`css方法论`。提到了css的一些历史，一些标准。可以作为`TODO：当前各个标准机构的状态`。主要是一些明明规范，值得复习下。
+ [x][CSS实现自适应分隔线的N种方法](https://mp.weixin.qq.com/s/ICkDqd-ltGM67G60WcArow)
> flex clippath 确实很强大`干货`
+ [x][CSS实现一个粒子动效的按钮](https://mp.weixin.qq.com/s/O9Hiy16IBQeDJJTMyMEO-w)
> css3还是很强大的，通过动画和具有多个值扩展的属性创建离子。
+ [x][MegaEase的远程工作文化 | | 酷 壳 - CoolShell](https://coolshell.cn/articles/20765.html)
> 陈酷自己的公司，比较硬核。但是里面说的关于团队的管理和选人对于创业公司来说真的很重要。
+ [x][CSS gradients：你知道的和你不知道的](https://mp.weixin.qq.com/s/Ry0HweQ8ddliWGET1RH5ng)
> 渐变绘制后是一张图片，所以很多跟图片相关的属性都可以用到渐变。渐变可以绘制饼图、动画等效果。
## 2020.1.21
+ [ ][从koa/redux看如何设计中间件](https://mp.weixin.qq.com/s/iFFBjagQX1ujzeeg0D-tDg)
+ [x][互联网人不相信眼泪](https://mp.weixin.qq.com/s/8B5udbrkW_O9z4QFhn3DbQ)
>我从来不相信什么懒洋洋的自由，我向往的自由是通过勤奋和努力实现的更广阔的人生，那样的自由才是珍贵的、有价值的；我相信一万小时定律，我从来不相信天上掉馅饼的灵感和坐等的成就。做一个自由又自律的人，靠势必实现的决心认真地活着
## 2020.1.20
+ [ ][性能强悍的 TS 版 G6 来了](https://mp.weixin.qq.com/s/XVYsu9HuBa6tpfLZmDzkAQ)
+ [ ][从零实现一套属于自己的UI框架-发布到npm](https://mp.weixin.qq.com/s/OfzhdCE1pxyQhk7m_UM7ZQ)
+ [ ][京东购物小程序cookie方案实践（附Demo）](https://mp.weixin.qq.com/s/XowPFSL9nMWZuGLG-CEHLw)
## 2020.1.19
+ [ ][CSS实现一个粒子动效的按钮](https://mp.weixin.qq.com/s/mofMIhEHZRIyXUTtG8W5Gg)
+ [ ][从JavaScript的运行原理谈解析效率优化](https://mp.weixin.qq.com/s/rtQ5gcxKo4GCo0KMBug0fw)
+ [x][高质量前端快照方案](https://mp.weixin.qq.com/s/54pIIPDvszu1EpLc1vvpxA)
> `干货` 我们在使用html2canvas的时候会遇到很多问题，如图片跨域、资源未加载好导致黑块、滚动条导致顶部白屏、截图不清晰、截图效率，非常全面，值得参考。
+ [x][字节面试官：请你实现一个大文件上传和断点续传](https://mp.weixin.qq.com/s/MOkWdKdlayZfrRrN_HkFtg)
> `干货`前端使用blob.slice对文件分片，后端node使用appendFileSync合并分片，然后通过文件名hash来保存分片信息。
## 2020.1.16
+ [ ][一文学会递归解题](https://mp.weixin.qq.com/s/NY2ypWbVSRdrjO322TeeTg)
+ [x][那些年我们“跨”过的“域”（接口篇）](https://mp.weixin.qq.com/s/Qt_oAGKwsP4K7GjiPYfwNQ)
> 跨域总结，比较全面。
+ [x][如何进行 web 性能监控](https://mp.weixin.qq.com/s/84XYEr0-USG5fFm-AFwfFQ)
> 腾讯alloyteam团队作品。说了性能测试工具lighthouse等，前端监控工具frontJs等，然而全tm是收费的。说完以后把整个性能监控的原理讲了一遍。`干货`
+ [ ][FIBJS模块重构—从回调到协程](https://mp.weixin.qq.com/s/AeFCDp_G-mS-5277NKtp1g)
+ [x][万字长文：Docker容器安全性分析](https://mp.weixin.qq.com/s/1qVUlUNR7qVyby_c4vfrFg)
> 就连Docker这种现代化的工具在最初发布的时候都具有中间人篡改漏洞，后来才加上的签名机制。另外，容器之间的网络工具，逃逸漏洞等都是docker安全需要考虑的事情。

## 2020.1.15
+ [x][自动化 Web 性能分析之 Puppeteer 爬虫实践](https://mp.weixin.qq.com/s/S1hFzYDH1CWZqIBWOgSjTA)
>Puppeteer感觉比Selenium好用一些，对浏览器的测试针对性更强一些。
+ [x][自动化 Web 性能优化分析方案](https://juejin.im/post/5d6de51de51d45620771f12c)
> 政采云的web性能优化方案，使用自己的一个监控系统来评分和优化页面，值得学习。
+ [ ][2019 前端技术发展回顾 - 知乎](https://zhuanlan.zhihu.com/p/101517039)
+ [x][Serverless 与前端工程化结合：让项目 5 分钟上线成为可能](https://mp.weixin.qq.com/s/qE99CEqWrtxxISBISAQAKA)
> `干货` 美团高P讲的未来工程化。1、通过IDE来减轻学习流程的成本，直接在IDE上根据指引操作即可。IDE未来应该是cloud化的，目前是通过electronJS来实现的。2、通过搭建自己的serverless平台来减少node服务的部署。serverless和普通node服务比起来，核心就是多了一个监控，通过监控实现按需分配，而实际上一样是运行的nodejs的docker容器。 主要就是通过这两方面，在服务端和开发端共同提升效率。还讲了一些前端如何分工，如何进行组织架构的思考，值得学习。
+ [ ][Easier Node.js streams via async iteration](https://2ality.com/2019/11/nodejs-streams-async-iteration.html)
+ [ ][H5 秒开方案大全](https://mp.weixin.qq.com/s/sbqKuK-hUaFZos_jKoIr4Q)
+ [x][美团开源Logan Web：前端日志在Web端的实现](https://mp.weixin.qq.com/s/j_8_kSQ4BrYR-UzIEIEIbw)
> 是一套用户端日志收集系统，主要收集用户出错时的上下文。里面有indexDB、对称非对称加密等知识，是研究web端日志收集的非常好的参考。
+ [ ][从 V8 源码理解 Javascript 函数是一等公民 - 知乎](https://zhuanlan.zhihu.com/p/101132637)
## 2020.1.13
+ [x][2019年 JavaScript 框架安全性报告](https://mp.weixin.qq.com/s/98S3wXGtblN5HymZX1kx-Q)
>npm的模块方式不能保证所有模块的安全性。react、vue、ag、jq都会引用一些有漏洞的模块，很难避免。
+ [x][Redis 在项目中的常见使用场景总结](https://mp.weixin.qq.com/s/zaC-U3C3WGCxxIucPIG0qg)
> redis的一些应用场景总结
+ [x][jwt 实践应用以及特殊案例思考](https://mp.weixin.qq.com/s/LTh6gRHFvT55pWrgbvjJkQ)
> 只有用法没有原理
+ [x][如何全方位优化你的超大型React应用？](https://mp.weixin.qq.com/s/Z1f_4pBIhONuFFj3TXmu0g)
> 性能优化，对底层的考验非常大。性能优化应该是从底层的知识入手，然后看要解决瓶颈需要用到哪方面的api。
+ [x][2020年，从提升认知开始](https://mp.weixin.qq.com/s/t3Z8X8xttFyClIdybRkzeQ)
> 作者讲了一本叫做《人类简史》的书，讲了拼多多美团字节跳动老板的一些思想。有点事后诸葛亮的感觉，算是一些感悟吧。道理是对的。
## 2020.1.10
+ [ ][The State of CSS 2019](https://2019.stateofcss.com/)
+ [ ][W3C approves WebAuthn as the web standard for password-free logins | VentureBeat](https://venturebeat.com/2019/03/04/w3c-approves-webauthn-as-the-web-standard-for-password-free-logins/)
+ [ ][Front-End Performance Checklist 2020 [PDF, Apple Pages, MS Word] — Smashing Magazine](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/)
+ [ ][What’s new in Preact X? - LogRocket Blog](https://blog.logrocket.com/whats-new-in-preact-x/)
+ [ ][What's Deno, and how is it different from Node.js? - LogRocket Blog](https://blog.logrocket.com/what-is-deno/)
+ [ ][understanding-js-decorators](https://www.simplethread.com/understanding-js-decorators/)
+ [ ][Polly.JS](https://netflix.github.io/pollyjs/)
+ [ ][GitHub - Raathigesh/majestic: ⚡ Zero config GUI for Jest](https://github.com/Raathigesh/majestic/)
+ [ ][在2020年如何学习前端](https://mp.weixin.qq.com/s/5HRWuLQ0u3huaqe-Luif8Q)
+ [ ][面试官：你怎么优雅写 CSS？](https://mp.weixin.qq.com/s/i0x9r-17hW_7KAaZdXbK-g)
+ [ ][2020年，从提升认知开始](https://mp.weixin.qq.com/s/t3Z8X8xttFyClIdybRkzeQ)
+ [ ][2020年，你必须掌握的前端技术栈](https://mp.weixin.qq.com/s/KZbXCI1u-O-hu1-gTa-ReQ)
## 2020.1.9
+ [ ][一文带你看透 Chrome 浏览器架构](https://mp.weixin.qq.com/s/HD6P2ARbOZCQJMzUKKpKHw)
+ [x][谈谈农历](https://mp.weixin.qq.com/s/LlRoE7XRGqW2SlJVidyL8w)
> 农历比想象中复杂得多，需要根据天体运动来确定冬至日然后再进行复杂的推算。
+ [ ][webpack 最佳配置指北](https://mp.weixin.qq.com/s/lHW9VZgBdbvK1bGdzZhpww)
## 2020.1.8
+ [ ][【THE LAST TIME】深入浅出 JavaScript 模块化](https://mp.weixin.qq.com/s/y4A6Wc00fmdWRWmuj0ae5g)
+ [ ][如何答一道惊艳面试官的数组去重问题？](https://mp.weixin.qq.com/s/ipxCQRZ1rj6VJXIP659IBg)
+ [x][图文并茂，为你揭开“单点登录“的神秘面纱](https://mp.weixin.qq.com/s/e5otBRl-jAhbxZRbOGX1SA)
> 作者通过连环画的形式解释了单点登录，很有心，适合拿去教初学者
## 2020.1.7
+ [x][还分不清 Cookie、Session、Token、JWT？](https://mp.weixin.qq.com/s/lIpVS3aWLnrTk0xKN_I0Mg)
> token分为验证token和刷新token。认证token是每次访问api用来识别用户信息的，它自带用户信息不需要server再查库。而refreshtoken是保存在数据库的，当token过期后server告诉client，client把refresh发过来，server查库看refresh是否过期，没过就生成新的token，过了就重新登录。JWT应该算是token的另一种实现，它是用json存储用户信息的。这篇文章把认证方式将得比较全，但是还不是很明白，需要再多做研究。`干货`
+ [ ][Largest Contentful Paint (LCP)](https://mp.weixin.qq.com/s/pFXTBZNAkNcKT09nnRzcyA)
+ [ ][TS 真香系列：你应该知道的核心功能](https://mp.weixin.qq.com/s/79own_SfG556zXkDWX1goA)
+ [ ][寒冬中三年前端社招面试经验](https://mp.weixin.qq.com/s/Iq9OF1jaL9PKb1_nVHX5Nw)
## 2020.1.6
+ [x][如何写好年终总结](https://mp.weixin.qq.com/s/NXBGeTIDLI0_gG1J7Pd_Gw)
> 奶爸码农，用一种很正规的方式来写总结。但是他也说到平时的日总结、周总结、月总结才是最重要的。没有这些基础，年终结很难下手。
+ [x][前端效能提升之 Chrome 插件推荐](https://mp.weixin.qq.com/s/K73IEvDX-iYMjH_N6V37Bw)
> 可以作为参考
+ [x][干货！深度解析瀑布流布局](https://mp.weixin.qq.com/s/-3jZza9UQQs09-gLvkjSbg)
> grid和flex布局，特别是flex，可以作为瀑布流的最佳选择
+ [ ][llhttp是如何使Node.js性能翻倍的？ - 知乎](https://zhuanlan.zhihu.com/p/100660049)
+ [ ][云开发：未来的软件开发方式](https://mp.weixin.qq.com/s?__biz=MjM5Mjg4NDMwMA==&mid=2652977219&idx=1&sn=6dba1b1249894d063476da0702750204)
+ [ ][Bifrost微前端框架及其在美团闪购中的实践 - 美团技术团队](https://tech.meituan.com/2019/12/26/meituan-bifrost.html)
+ [ ][如何进行 web 性能监控？ | AlloyTeam](http://www.alloyteam.com/2020/01/14184/)
+ [ ][CSS inherit是继承，那initial和unset呢？ « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/01/css-initial-unset/)
+ [ ][浅析 Node 进程与线程 - 掘金](https://juejin.im/post/5e0728ce518825122b0f99f2)

## 2020.1.3
+ [x][前端代码是怎样智能生成的-业务模块识别篇](https://mp.weixin.qq.com/s/ev1kCJ1y1nuxwRm4JFEpug)
> imgcook的软文，把psd或者sketch直接转成前端代码
## 2020.1.2
+ [x][万字长文总结前端测试体系建设与最佳实践](https://mp.weixin.qq.com/s?__biz=MzI5MjYyODYyNQ==&mid=2247483987&idx=1&sn=132aea5d5185a1e4fa2fab5037a2fb3e)
> 比较全的介绍了各个测试工具和react测试的最佳实践`干货` `测试`
+ [x][【技术圈】Flutter 1.12、Firefox 71、V8 8.0 一大把新特性来袭](https://mp.weixin.qq.com/s/aOjeT8pRVv9eIdhwnXq1Uw)
> v8 80内存占用节省40%，flutter发布了今年第五个大版本达到1.12，对ios的黑色主题等做了支持，firefox支持画中画
## 2019.12.31
+ [x][StateofJS：2019年JavaScript生态圈报告出炉](https://juejin.im/post/5e071b676fb9a016391d5bb8)
> 这篇文件对前端各种各样的技术都介绍了一遍，可以作为一本字典来查询，其中一些概念自己还没了解过，如测试工具、工程化工具、vue源码分析，需要做TODO`干货` `参考书`
+ [x][Chrome 的小恐龙游戏，被我破解了...](https://mp.weixin.qq.com/s/pmdL1lBwlJGgjkRMwJqskQ)
> 作者真的比较有趣。。通过全局变量找到小恐龙实例的各种方法。
## 2019.12.30
+ [ ][135. 精读《极客公园 IFX - 上》](https://mp.weixin.qq.com/s/_XXPB-ypqXlbgBtA36wDYA)
+ [ ][前端技术观察第12期 - 2020 年 Node.js 将会有哪些新功能](https://mp.weixin.qq.com/s/iw_e0FozlPXj6MW8NBY6xQ)
+ [x][前端废材的自我劝退之路 | 2019 年度总结](https://mp.weixin.qq.com/s/vPoZuobCDXaFCGaVgoD9Pw)
> 专科生到现在这样，值得佩服，努力的人都有收获
+ [ ][ES7、ES8、ES9、ES10新特性大盘点](https://mp.weixin.qq.com/s/ORIrzYhRcRQM2jEp5zl-fQ)
+ [x][基于浏览器的实时构建探索之路](https://mp.weixin.qq.com/s/Gl2Yc34cpdbFIRjL-qYwGg)
> 阿里的gravity，讲得还是有点晦涩，主要是摈弃webpack的模块从而转为浏览器自己加载模块的方式。偏向于es6模块加载方式。
+ [ ][2020工具产品智能化趋势](https://mp.weixin.qq.com/s/1RGyMtEGpJOBJAGqTjGo7Q)
+ [ ][从 Fetch 到 Streams —— 以流的角度处理网络请求 - 云音乐前端专栏 - SegmentFault 思否](https://segmentfault.com/a/1190000021367378)
+ [ ][TS in JS 实践指北](https://mp.weixin.qq.com/s/KalfL93IEf84_gKsGeXqAQ)
+ [ ][TypeScript安利指南 - 掘金](https://juejin.im/post/5d8efeace51d45782b0c1bd6)
+ [ ][2019年度交互总结](https://mp.weixin.qq.com/s/xaLK-ZgKAg0kU_eMdtOxsw)
+ [ ][前端工程化下一站: IDE](https://mp.weixin.qq.com/s/1lMDVnVighatssr3CHoPvQ)
## 2019.12.26
+ [x][巧用 CSS 实现华为酷炫的充电动画](https://mp.weixin.qq.com/s/NGWrTPM1gxUplNTsBXTqxQ)
> 给力给力，这个css真是给力啊，实现了波浪的效果，很帅
+ [x][「圣诞特辑」纯前端实现人脸识别自动佩戴圣诞帽](https://mp.weixin.qq.com/s/2FNYzZMyKc7ryhtgbQzHtw)
>利用tf+已经学习好了的face库，直接返回人脸类型，是一个比较简单的机器学习例子。文中还提到了谷歌机器学习的文档地址，在做ai的时候值得一看。
+ [x][一线大厂新零售线上企业级项目实战](https://mp.weixin.qq.com/s/YNJwNZti-HbMGIGrz8wg1A)
> 广告
+ [x][从 React 历史的长河里聊虚拟DOM及其价值](https://mp.weixin.qq.com/s/ONVuXXiHl8aPG-Gnrq-yhw)
> 这篇文章写得比较中立，虚拟dom并不是为了解决效率问题，因为直接操作dom会更快。反而虚拟dom更多的是为了实现多端同构。
+ [x][解密国内BAT等大厂前端技术体系-完结篇](https://mp.weixin.qq.com/s/2NJbKc4dWyAu_mft-Yzt-Q)
> 对各个公司的技术进行了总结。对整个大前端的发展方向也做了一个总结，算是对当前前端技术的较好的描述。
## 2019.12.25
+ [x][Hybird动态布局，提升3倍开发效率的玩法！](https://mp.weixin.qq.com/s/3yh8KDbxgpJR3rGBgDIz-Q)
> 是的 看不懂。花椒直播是啥？
## 2019.12.24
+ [x][11 Best Rich-Text Editors](https://handsontable.com/blog/articles/2017/8/11-best-rich-text-editors)
> 富文本编辑器收集
+ [x][k8s和docker图解](https://www.cncf.io/the-childrens-illustrated-guide-to-kubernetes/)
> 这个算是比较容易理解的了，说的是给children看的，其实也就是给k8s新手看的，看了以后能对k8s基础架构有一个形象的了解。
+ [ ][Webpack 深入浅出之公司级分享总结](https://mp.weixin.qq.com/s/4ZsrMoXI7VT2nsQPT_jnrA)
+ [ ][高级进阶：深度揭秘 Promise 注册微任务和执行过程](https://mp.weixin.qq.com/s/cN40pHBfttZ3O2oEbVPAcg)
+ [ ][京东微信购物首页性能优化实践](https://mp.weixin.qq.com/s/BkTMFGswywNIQRLREOxxKw)
+ [x][『 Vue小Case 』- 如何动态绑定多个事件（内附源码解析）](https://mp.weixin.qq.com/s/w_IZcBgZ-P_K75O-7FP7qA)
> 把vue的自定义事件和行内事件的源码做了分析，里面有vue源码解读的一些推荐链接。`干货`
## 2019.12.23
+ [x][134. 精读《我在阿里数据中台大前端》](https://mp.weixin.qq.com/s/7rFOLHbhWfE-bHKhIvY0BA)
> 宣传性文章。
+ [ ][VS Code为什么能这么牛？](https://mp.weixin.qq.com/s/4bnxfr61PdHCEII7TPYZcQ)
+ [ ][小程序构建骨架屏的探索](https://mp.weixin.qq.com/s/5jUo2e4mtAghLx7iaM6l8g)
+ [ ][走近 React Hooks](https://mp.weixin.qq.com/s/5W8gI2Kg04rTpn0CeW5u7A)
+ [ ][GitHub 怪奇项目物语](https://mp.weixin.qq.com/s/5z8YAMx6BJk-A43307f7Vw)
+ [ ][浏览器缓存策略与 webpack 持久化缓存](https://mp.weixin.qq.com/s/B9gV3ahTMG4dFhWsEJsDqA)
## 2019.12.19
+ [x][【技术圈】谷歌新提案：可在脱机状态实现内容分发、大四学生开源文言文编程语言，star破5K](https://mp.weixin.qq.com/s/1MsHJOIE54gsmlzVspRd_w)
> 谷歌这个前几天说过了。还说了vscode的新功能，新的diff功能不错，vscode是越来越强大了。
+ [ ][React 中的一个奇怪的 Hook](https://mp.weixin.qq.com/s/8KQ4JWkKrsGZvIgd5sY2YQ)
## 2019.12.18
+ [ ][前端工程化 - 剖析npm的包管理机制（完整版）](https://mp.weixin.qq.com/s/wZUQA5_Jj4spyb87gdhe2g)
+ [x][WebSocket：5分钟从入门到精通](https://mp.weixin.qq.com/s/GXncs9Tn4N7KsXh0RmEoSQ)
> ws入门教程，讲了如何upgrade协议，如何创建一个demo，如何分片，如何预防攻击等基础知识。
+ [ ][Airbnb：大规模代码迁移至Apollo+GraphQL的实践](https://mp.weixin.qq.com/s/v6u2GX31Mudy4YbJ3aUpuw)
+ [ ][读 koa2 源码后的一些思考与实践](https://mp.weixin.qq.com/s/tSMZLEieDVIP_Kqy78AHHw)
## 2019.12.17
+ [x][npm install 原理分析](https://mp.weixin.qq.com/s/izPqa7sn3bJ73iEJkUW64w)
> 主要讲npm的node_modules目录结构是如何生成的。重点是：扁平化模块结构，模块优先放node_modules的根目录，除非有同一个板块的不同版本，则放子目录；通过package.lock来定死node_modules的目录结构并指明模块的下载url等信息，方便安装的时候查找模块，且定死了模块的版本，每次安装的依赖必定一样；还讲了模块的缓存机制和缓存的管理方式。`干货`
+ [ ][手摸手 webpack 大型项目实战](https://mp.weixin.qq.com/s/g3OXTABLFd_u5dYpJE6w-A)
## 2019.12.16
+ [x][不容错过的 Node.js 项目架构](https://mp.weixin.qq.com/s/VtVUlB63SpCbmgJ6U4p_Nw)
> node后端分层管理，每一层干每一层自己的事情，分工明确，方便单元测试，为node项目的架构指出了很好的思路`干货`
+ [ ][Webpack 面试必问之打包原理解析](https://mp.weixin.qq.com/s/U9HZMk0ndeX9Git08pEqdQ)
+ [x][通读 HTML Standard](https://mp.weixin.qq.com/s/eyxI6g6YjXfpDIJE3A5evg)
> 文章讲了w3c和whatwg这两个组织制定的标准，介绍了一个可以找到标准的网站，并且对标准进行了一些解读，对去熟读标准有很大的知道意义。`干货`
+ [x][从 VSCode 看大型 IDE 技术架构](https://zhuanlan.zhihu.com/p/96041706)
> 搞云凤蝶这波人看来是把vscode研究得比较透彻，这篇文章作者在架构上也有很深的思考。vscode是一个集大成的架构思想，文章主要是在讲vs的架构的中庸之道。
## 2019.12.13
+ [ ][解密国内BAT等大厂前端技术体系-美团点评之下篇（长文建议收藏）](https://mp.weixin.qq.com/s/Tdy-SsywdoR6tPhkp8gsjg)
+ [x][如何实现一个高性能可渲染大数据的Tree组件](https://mp.weixin.qq.com/s/i8BtXf20Xff4VO0R81uTbA)
> 通过类似瀑布流的方案来解决渲染巨大数量dom节点的解决办法。
+ [x][花椒web端实时互动流媒体播放器](https://mp.weixin.qq.com/s/Mde-zS0oLVGQfdjEVdaAjA)
> 实现了实时播放和回放两个库的合二为一。文章讲了较多的视频点播和直播相关知识
## 2019.12.12
+ [ ][阅完此文，Vue响应式不再话下](https://mp.weixin.qq.com/s/KjnoThmwghoQHLKT3cADWg)
+ [ ][Web性能领域常见的专业术语](https://mp.weixin.qq.com/s/GIpmZIY6yxGRBpkTDHuJuw)
## 2019.12.11
+ [x][你不知道的 JSON.stringify() 的威力](https://mp.weixin.qq.com/s/Mtssr8eS0hG37YxddYD_fA)
> 不仅仅是把json转为字符串，在面对function、symbol等特殊值的时候stringify怎么处理的？stringify的第二个参数和第三个参数都各有作用，让人眼界大开。
+ [x][2019 年 Chrome 开发者峰会亮点：让所有用户告别加载延迟](https://www.infoq.cn/article/xBGqtxJMvcSlIwByQdp2)
> 里面写了很多关于chrome性能提升的工具、监控系统、新功能。包括读取本地文件的api、包括预渲染页面的api等。
+ [x][2019 TWeb 腾讯前端技术大会精彩回顾 - 掘金](https://juejin.im/post/5dd20202e51d453ff47f9c81)
> web IDL接口定义语言，让以后的webapi更清晰。 strapi的cms越来越出名。
+ [x][ES10 功能完全指南](https://mp.weixin.qq.com/s/l9x0BPU3ylDt4G2VwUwf_A)
> `干货`ES10提供了很多新的特性、新的方法。如globalThis所有平台都有的global，如动态import，matchAll，float等。
+ [ ][HTTP/3: the past, the present, and the future](https://blog.cloudflare.com/http3-the-past-present-and-future/)
+ [ ][An Introduction to the Picture-in-Picture Web API | CSS-Tricks](https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/)
+ [ ][How Do You Remove Unused CSS From a Site? | CSS-Tricks](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)
+ [x][2019年前端大事件回顾：流年笑掷，未来可期](https://mp.weixin.qq.com/s/dy8g3F12XHhRvteuGLiirg)
> 关于今年的总结和明年的展望，对技术栈的执导有一些参考价值
## 2019.12.10
+ [x][132. 精读《正交的 React 组件》](https://mp.weixin.qq.com/s/bLBb7COjk_IsS7CWXxtsEg)
>主要是讲组件如何解耦，和react如何通过hooks来解耦
+ [x][Whistle：前端调试利器](https://mp.weixin.qq.com/s/JCc6Dh4deVL72Xtg88r-IQ)
>一个node实现的类似fiddler的代理工具，通过写配置文件来配置，具有一定参考价值，如可以转变https和http，可以写header
+ [x][纯CSS实现简单骨骼动画](https://mp.weixin.qq.com/s/kFgjQjhbOphNOuJ8vnG1UA)
> 骨骼动画的重点在于联动，联动的元素应该是父子元素的关系，就是月亮围着地球转，地球围着太阳，月亮和地球联动，地球又和太阳联动
+ [x][前端模块化的今生](https://mp.weixin.qq.com/s/AkjrTduPc0Wcm6noD-b1GA)
> 主要讲了es6模块化系统。如今浏览器和node都原生支持es6的模块系统。但是webpack更加优秀的感觉。
## 2019.12.09
+ [x][一款程序员神器，帮你统计每天都做了些什么？](https://mp.weixin.qq.com/s/618R8QH2YWF6CoR-iQgctQ)
> 看起来挺好玩，vscode装起试试
+ [x][动画落地 | 从 AE 制作到落地开发](https://mp.weixin.qq.com/s/Qrwc60w2kH7psuB8qBhMYw)
> 通过AE插件直接导出到web版动画的各种插件
+ [x][利用过渡动效打造沉浸式的体验 —【Web篇】](https://mp.weixin.qq.com/s/bTWajT3UIm_pGSiDPoyK0A)
> 讲了一些动画制作过程中需要考虑的问题，主要是讲vue动画
+ [x][GCanvas渲染引擎的演进-对外](https://mp.weixin.qq.com/s/WJjDmEUm0Y_rYPgKs-Stxw)
> 一款淘宝的图形渲染引擎，2d3d都有，类似spritejs
+ [x][用一道大厂面试题带你搞懂事件循环机制](https://mp.weixin.qq.com/s/cDJoEI_NvBtpio8T70-I1A)
> `干货`我做错了。。这个题目对与promise的理解可以加深很多，还有nextTick、setTimeout、io异步，是时候好好理解下微任务宏任务了。
2020.2.29补充：该篇文章讲得并不好，不是很形象，不建议细品。这篇文章更加简单易懂：https://juejin.im/post/5df071a9518825123e7aef17，更多文章：https://juejin.im/post/5afbc62151882542af04112d
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#setimmediate-vs-settimeout，http://lynnelv.github.io/js-event-loop-browser，https://blog.fundebug.com/2019/01/15/diffrences-of-browser-and-node-in-event-loop/

+ [x][为你重新系统梳理下， Web 性能优化中和图有关的那些事（万字长文）](https://mp.weixin.qq.com/s/1HIrDwrQbXb2h-a5eMr0jg)
>图片格式、合并、http2，讲得比较大而全，适合了解知识，没有指导性
+ [x][2020年将至，大厂面试题都有怎样的变化？](https://mp.weixin.qq.com/s/0Q6ojCKWtvU4YfBYY33v6A)
> 这是广告，忽略
## 2019.12.06
+ [x][颜值即正义！这几个库颠覆你对数据交互的想象](https://mp.weixin.qq.com/s/IMliOBsnlaYgFtbAOs4_Pg)
> AR识别、手绘图表、可视化数据过度3D动画、播放器、卡片验证、字体爆炸，真的很不错！`干货`
+ [x][一个鲜为人知的高性能组件注册及实现组件排序技巧](https://mp.weixin.qq.com/s/nilCa5HW0jbiw5cTTxCN8Q)
> 使用webpack实现组件的异步加载。
## 2019.12.05
+ [x][前端领域的 Docker 与 Kubernetes](https://mp.weixin.qq.com/s/ez6wEohx9xhkgcwya7Lbug)
>`干货` 适合学习`k8s`的时候再翻翻。把docker的实现原理和调度原理都讲了。还讲了docker的4中网络模式，对网络的认知也可以加深。
+ [x][轻松理解webpack热更新原理](https://mp.weixin.qq.com/s/Ml28tYttXQffOQxQ2Xuzcg)
> 讲了webpack热更新机制。跟我自己想的差不多。webpack的组件加载值得研究下。
+ [x][万字长文之 Serverless 实战详细指南](https://mp.weixin.qq.com/s/Ad-lyV85_000infAe_hZ2Q)
> 本文讲了使用腾讯faas部署serverless。感觉主要是部署方式变了，其实开发模式并没有什么变化，serverless用于一些并发差异大的业务场景比较好。
+ [x][不容错过的 Babel7 知识](https://mp.weixin.qq.com/s/oBMXONRssx7HvqZVJFQeaQ)
> `干货` `babel` 讲了各个配置项的具体意义和用法，很不错的教程。
+ [ ][131. 精读《从 0 到 1》](https://mp.weixin.qq.com/s/jgtW-dKNvC4b56aGTXTpwQ)
## 2019.12.02
+ [x][package.json 知多少？](https://mp.weixin.qq.com/s/jMWoXzrw6WDi5VG9Y8Mn0Q)
> 基本把属性都讲了。但是有些属性如peerDependences讲得还是不够清楚，需要再看看文档，本文可以作为一个很好的参考书。
+ [x][一张刮刮卡竟包含这么多前端知识点](https://mp.weixin.qq.com/s/e4pHeCZtDz0BAVdBBqSdmg)
> addEventListener的第三个参数都变了我都不知道！！本文还讲了canvas图片的混合模式。
+ [x][如何学一门新语言，以 Dart 为例](https://mp.weixin.qq.com/s/-JzuszKgPbuP24iT26Oauw)
> 写了语言之间相通的一些东西。里面有一张图非常不错，列出了一门语言所包含的所有概念。里面还讲了dart的很多不错的语法糖和一些并无亮点的设计。
+ [x][vim 高频操作，常用配置与插件简介](https://mp.weixin.qq.com/s/jHcn0-1vH7_kEt6KE-qxXQ)
>很多常用操作，不错
+ [x][ansible 自动化运维指南](https://mp.weixin.qq.com/s/t2fpzPJk3pCK3qBgo_SdyQ)
>一个自动化运维工具，只需要在本机安装则可以在远程批量执行任务，类似jenkins的功能。
+ [x][深入浅出 JavaScript 原型链](https://mp.weixin.qq.com/s/LHskWkAPYnIbRvaXry8bqg)
>从对象开始一直讲到如何创建类。讲了es6的class语法糖，讲了super的作用，super就是为了把父函数this的东西都绑定到子函数this上。`干货`
+ [ ][typescript 高级技巧](https://mp.weixin.qq.com/s/nvYqDhhZzbNuifxck87aNQ)
+ [x][如何将你的 ThinkJS 项目部署到 ZEIT 上](https://mp.weixin.qq.com/s/InaoDci28DMVUeGoX-OpCw)
> 讲述了ZEIT这个免费的云环境和这家公司。这家公司和尤雨溪也有关系，很多前端的大牛在里面，看看知乎可以得到很多关于做技术的体会。这个公司的员工都是远程办公，人员都非常年轻，真的很值得学习。`ZEIT` `免费云环境`

## 2019.11.30
+ [x][美团外卖前端容器化演进实践](https://mp.weixin.qq.com/s/SAuKvlB0Bfj7dRIBzkhO8w)
> 这个容器不是docker容器，而是页面动态化的方案。
+ [x][拥抱云时代的前端开发架构——微前端](https://mp.weixin.qq.com/s/rYNsKPhw2zR84-4K62gliw)
> 克军讲的微前端，微服务，主要是介绍。

## 2019.11.29
+ [x][解密国内BAT等大厂前端技术体系-携程篇（长文建议收藏）](https://mp.weixin.qq.com/s/v_33lycMS64QtMSYw_EQyQ)
>携程很多自动化平台，值得参考
+ [x][小姐姐,我有一份tcp、http面试指南你要吗？](https://mp.weixin.qq.com/s/H7_9fkmgi7nxdhHq6RZ2hw)
>作者用浅显易懂的语言介绍了tcp udp等概念
## 2019.11.28
+ [ ][Build your own React](https://pomb.us/build-your-own-react/)
+ [ ][带你手写微前端框架 - 掘金](https://juejin.im/post/5db4253451882556a035ae5d?utm_source=tuicool&utm_medium=referral)
+ [ ][使用 Hooks 优化 React 组件](https://mp.weixin.qq.com/s/X5QdA4e75CWFBTTQ4A5d3g)
## 2019.11.27
+ [x][前端部署演化史](https://mp.weixin.qq.com/s/lUxL3i8ulD2Mb5igrdFwRg)`干货`
> 简直与现在学的东西太契合了，讲了devops一整套的东西和原因以及使用办法，非常干货
## 2019.11.26
+ [x][让虚拟DOM和DOM-diff不再成为你的绊脚石](https://mp.weixin.qq.com/s/XZMiAy0l8ut8xhmpTz94SQ)
> 用简单的方法实现了这两个算法，不过感觉不是特别幽雅
+ [x][【图文讲解】TCP为啥要3次握手和4次挥手？握两次手不行吗？](https://mp.weixin.qq.com/s/rWkD5ktlJDxcNFJ-5NH1eQ)
> 之所以要三次握手是为了防止server端打开了服务而客户端确断开了连接。挥手多次是因为要在server端消息发送完成后才发送确认关闭信号。总的来说，还是需要再理一理。
## 2019.11.25
+ [x][Design Token 是啥？](https://mp.weixin.qq.com/s/uVPjNKkymJ_bMLAKVEiixQ)
> 文章讲了设计的原子属性，就是各种配色、字体之类，设计师调整后如何快速导出配置文件到各个平台：Design Token 是一些集中存储的 UI 元素信息，比如颜色、字体、间隔、动画等等。他们可以根据需要被转换为不同平台的代码，比如 Android、iOS 或 Web。
+ [x][【干货】蚂蚁前端研发最佳实践](https://mp.weixin.qq.com/s/BlbXnt-TRGxQwklV87IkzA)
> 蚂蚁最终选择了ruby in rails这种基于约定的方案。把所有的配置都集中到框架中，只能按照框架的约定写代码才能运行起来。当然文中还讲了大量的框架选型，值得回过头来学习。`干货`
+ [x][TiDB-Wasm 原理与实现 | Hackathon 优秀项目介绍 | PingCAP](https://pingcap.com/blog-cn/tidb-wasm-introduction/)
> wasm也是一个runtime，也有支持和不支持的东西。不论什么语言，不能使用不支持的东西，否则编译的时候无法运行。
+ [x][2019 TWeb 腾讯前端技术大会精彩回顾](https://mp.weixin.qq.com/s/RKgnFiCdOhtiBbEjawAAAA)
+ [ ][我们一起学习CSS image-set() « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2019/11/css-image-set/)
+ [ ][130. 精读《unstated 与 unstated-next 源码》](https://mp.weixin.qq.com/s/AhRvcjffYXSRQ65vWxkbRw)
+ [ ][Vue CLI 首屏优化技巧](https://mp.weixin.qq.com/s/fFKyZiUuj4tDVTqDFsBUEg)
+ [ ][TypeScript真香系列——接口篇](https://mp.weixin.qq.com/s/KfOAu983zg8d0Uc-jhM84w)
+ [ ][使用 React Hooks 代替 Redux](https://mp.weixin.qq.com/s/o1Ruzn8i_grFFZdTl9Qhzg)
## 2019.11.22
+ [ ][透彻分析：常见的前端架构风格和案例](https://mp.weixin.qq.com/s/x4KcDPrV2aqtjkRdow_JVg)
+ [x][一名【合格】前端工程师的自检清单](https://mp.weixin.qq.com/s/BGOAGSS6spPxpTPIMDvzww)`基础知识`
> 包罗万象，确实很多基础知识自己还没有理清楚甚至完全不知道
+ [ ][我采访了一位 Pornhub 工程师，聊了这些纯纯的话题](https://mp.weixin.qq.com/s/vOtj0edqssWxelXv832J9Q)
## 2019.11.21
+ [x][面试官，不要再问我三次握手和四次挥手](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484463&idx=1&sn=6eb56e9ed555f7677ce630783b1c9244)
> 解答了很多握手挥手的问题，还可以，知识比较齐全
+ [x][前端代码质量-圈复杂度原理和实践](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590648&idx=1&sn=88ffac366473d686d7bf166842bd3fdf)
> 怎么计算圈复杂度和自动检测以及减少复杂度的方法。
## 2019.11.20
+ [x][某大厂面试官：金九银十后，我想给前端同学们的一些建议](https://mp.weixin.qq.com/s?__biz=MzI1NDU3NzM5Mg==&mid=2247484048&idx=1&sn=941c654beda07826b5a9597a44c89ab2&chksm=e9c25d0fdeb5d419aeb934ee16124ce30e596feea7a17a1e992067bf7e622bbf43171e37452f&mpshare=1&scene=1&srcid=&sharer_sharetime=1574213004273&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5429627c0974d8f1154730874891e57f3bc0a253225b13f2a0089cf077d981a04106e57f4333b1332d0efdbb899b345705c293351525461e1e0b1c89986c510284a18d9026a976965d60442b55222c85&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=sdZrICJaMiOmNueybLykogVqEpSzdrW8%2BPEkA9m1iG8B27yqdO7a%2BX2l5IZ8WD67)
> 这是广告，但是说了些术语可以研究下：Micro Frontends、omi、Houdini、CSS Scroll Snap Points、React Suspense、Hooks、quicklink、Workbox、Angular8 Lvy
## 2019.11.19

+ [x][CSS的未来已来](https://mp.weixin.qq.com/s/hxqa1uw61bi5H2j-nwNohg)`干货` `postcss`
> 讲了css的历史，讲了现在各种处理器，还有js制作css的`CSS Houdini`，最后还给了一个作者的脚手架已经github star，可以参考下。
+ [ ][把你的NodeJS程序给没有NodeJS的人运行](https://mp.weixin.qq.com/s/azmnUFgrHvuxZVpmqb1swA)
+ [x][关于代码评审（Code Review）](https://mp.weixin.qq.com/s/2Fpqlhl2XLuk7dFXCPUD-A)`review`
> 讲了谷歌做代码评审的流程和规则，已经github star
+ [ ][你想知道的关于 Refs 的知识都在这了](https://mp.weixin.qq.com/s/8cC-xqI749Yz7f8N-242hQ)
+ [ ][前端代码质量—怎样实现一个支持多语言、高扩展性的 Linter](https://mp.weixin.qq.com/s/yFa2hFkmCQFyGcPiHeC0Tg)
+ [ ][前端代码质量—怎样实现一个支持多语言、高扩展性的 Linter](https://mp.weixin.qq.com/s/yFa2hFkmCQFyGcPiHeC0Tg)
+ [ ][JavaScript 中的位运算和权限设计](https://mp.weixin.qq.com/s/TdMkG4VjmmgLvZt5ZkqoUw)
+ [ ][Promise 必知必会（十道题）](https://mp.weixin.qq.com/s/UFO9fO24DCrCMipnuX-xEw)
+ [ ][JavaScript 复杂判断的更优雅写法](https://mp.weixin.qq.com/s/E_GqIhPKlSsH8Ln8vxG6oA)
+ [ ][原生JS灵魂考核, 你能回答出来几题？](https://mp.weixin.qq.com/s/01-5sc2tDa1fg3f0J5nArA)
+ [ ][Vue + Koa从零打造一个H5页面可视化编辑器——Quark-h5](https://mp.weixin.qq.com/s/3LyM4NV_5pm8r5PNhKma8w)
+ [x][微信之父：张小龙并不孤独](https://mp.weixin.qq.com/s/J0uxaskzyzUF24yVevSROQ)
+ [ ][可能是最全的 “文本溢出截断省略” 方案合集](https://mp.weixin.qq.com/s/yQIYBneDoKEnPemr7kcrbA)
+ [ ][从手机滚动丢帧问题，学习浏览器合成与渲染层优化](https://mp.weixin.qq.com/s/U_HXusg2ccH0WRynxaOSZg)
+ [ ][撸了这么多代码，你真的了解字体吗？](https://mp.weixin.qq.com/s/ZwLzXjUFYBiAfN50_52dqw)
+ [x][解密国内BAT等大厂前端技术体系-腾讯篇（长文建议收藏）](https://mp.weixin.qq.com/s/hisqcnv8g5XMOF6bzFV7pw)
> 腾讯给大家的感觉一直都是产品驱动、闷声发大财的样子，而且从技术方面由于有阿里、百度这类技术沉淀深厚的公司作为对比也没有给人留下深刻的印象。但是，最近几年随着微信平台的崛起，围绕微信平台的开发框架、跨端同构方面获得了比较大突破，同时，也举办例如TWeb conf、腾讯Live开发者大会，在业界的影响力也不断扩大。
+ [x][V8 是怎么跑起来的 —— V8 的 JavaScript 执行管道](https://juejin.im/post/5dc4d823f265da4d4c202d3b)
> 作者打算将一系列V8，这个只是简单介绍了V8的执行过程
+ [x][移动端体验优化经验总结与实践](https://github.com/ProtoTeam/blog/blob/master/201911/1.md)
> 讲了在安卓下性能查看的一些办法和工具，看起来和浏览器有很多类似的地方。作者思考得比较到位，都是在一些关键的点上做优化。
+ [x][我的前端成长之路](https://www.yuque.com/yubo/morning/grow-up-at-alibaba)
> 玉柏的分享，不做评价
+ [ ][编写可维护的现代化前端项目](https://juejin.im/post/5dcce93af265da0bf2111ee8)
+ [ ][CSS值类型文档大全](https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/)
+ [x][CSS backdrop-filter简介与苹果iOS毛玻璃效果](https://www.zhangxinxu.com/wordpress/2019/11/css-backdrop-filter/)
> 张鑫旭写的看着就是舒服
+ [x][云凤蝶可视化搭建的推导与实现](https://zhuanlan.zhihu.com/p/90746742)
> 有点负责，云凤蝶做了很多让人想不到创新，抽象得非常棒。
+ [x][阿里11年，从应届生到双11前端PM](https://mp.weixin.qq.com/s/rKySWnRpoQLSw8VM9895EA)
> 最后的总结还是很不错的。好好做事，把想做的事情做好，有成果说。这是不管在哪里工作，不管干什么事情的根本法则。
+ [x][Lighthouse 测试内幕](https://juejin.im/post/5dca05f45188250c643b7d76)
> lighthouse是chrome底层的性能评分框架，这篇文章讲述了如何通过代码访问chrome并拿到对应的调试信息。
## 2019.11.6
+ [x][如何通过WebRTC开发实时互动AI视频应用](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590592&idx=1&sn=dc8bccb6a7c0a1cd6530feb85b203772&chksm=8891dda4bfe654b29c822be829ac19d2506746d3458e5a658312a9ecbc8e271ed6ad2cf2b6ff&mpshare=1&scene=1&srcid=&sharer_sharetime=1573003888508&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=e6db03dae12febb9327a9fbe5ae8563be94e7b8102649bdd93350526d9bc04d1bd10ea4d5c72b000034be667a9993f2e95c35e57907e2a82031212b75388d17a8b5979652b94a7d3f4703a356832d1e4&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=llJeig5lzS%2B1qCwsb3h%2FTQ5hg2xUNK2%2F%2FKaXRCxwzSrUbpIaqUUV7UAT%2Bw16AZsP)
> 比较干，介绍了通过webrtc获取本地摄像头视频的方法，并介绍了通过jsmpeg编码视频的方法和实时视频直播的方法。
+ [ ][【React】你想知道的关于 Refs 的知识都在这了](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484399&idx=1&sn=e865eb3f967639477a05262d0ddf09af&chksm=9782cd66a0f544700894ede3a1b02882585a738a0b3c31a56a8b297bd4b878d6f57d8c790fea&mpshare=1&scene=1&srcid=&sharer_sharetime=1573003875841&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=edde10a8bf3931378c37818c5c1f84d86cbe2070b7392b3b5d1de9fc4e591be2dcb961c1af5fa094f89c3a6fa438b3f08e8d8093e94e1de3996aeea69d2c585a25107739fc88f81410103f5035fa02f3&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=llJeig5lzS%2B1qCwsb3h%2FTQ5hg2xUNK2%2F%2FKaXRCxwzSrUbpIaqUUV7UAT%2Bw16AZsP)
+ [ ][从Preact中了解React组件和hooks基本原理](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484396&idx=1&sn=5bf74ec6be1cdbdd908bacea6f75562a&chksm=9782cd65a0f544733d61e10e7c82d711c7753329810784a47a40c34fdab54234b1a4c3a3c9f1&mpshare=1&scene=1&srcid=&sharer_sharetime=1573003865967&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=bad1bd95c2b983fbeba4d8b183744bb52d6b0662f26faf333ef60099a5b600ce4d7e97876f9dc3738cf5fa09e10f297077951e1d9777196096a170c0bb1ce5cc0dd4d721fc00e213b7b029e1817661d0&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=llJeig5lzS%2B1qCwsb3h%2FTQ5hg2xUNK2%2F%2FKaXRCxwzSrUbpIaqUUV7UAT%2Bw16AZsP)
## 2019.11.5
+ [x][子元素数量和遍历子元素](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590588&idx=1&sn=f7183b1a9714ec8940eb9e22ba126f5b&chksm=8891dd58bfe6544e94d4871fb500e353e523a32414924d27d347fa43df0a688f95c7136c161f&mpshare=1&scene=1&srcid=&sharer_sharetime=1572917853099&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5792dae60a8bc6de1250f7b15d6f6aceb59138385f019b1a8f724a42b6af1418a98bcbd9c955779bcf3e4aa3757ae6585184a568af83176b10b451dd002b2348ef85fcc416ee6cb442c1d25785a230bb&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=5Mpd1XKnpXqBXqz%2FVEBeM8%2F9VJoobMDQgsfmN1mWa5%2FFADcm%2FRp%2BMlQGCFyNEMte)
> 有些意思。讲了`childElementCount`属性的历史，这其实是一个冗余的属性。
+ [x][前端工程化（一）NPM如何管理依赖包版本？](https://mp.weixin.qq.com/s?__biz=Mzg2NDAzMjE5NQ==&mid=2247484889&idx=1&sn=feacaf4352ae97560ed3afd244618553&chksm=ce6ec175f91948639d0bfc4a0322fb41123d2f56b884453c83f35edad7d9066ca0f080af9f4b&mpshare=1&scene=1&srcid=&sharer_sharetime=1572917839229&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=bad1bd95c2b983fb52f35245e614f60a95f295b9632607971eec6ee5132278c2293a3b7541a49e9138b78c05a7124bfa098f9aab71b6ea5e9a6d55e6ef26b7fd6bfdc2ffdf9758a5c5aac967f22a662b&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=5Mpd1XKnpXqBXqz%2FVEBeM8%2F9VJoobMDQgsfmN1mWa5%2FFADcm%2FRp%2BMlQGCFyNEMte)`npm`
> 讲了NPM版本号意义、版本变更等
## 2019.11.4
+ [x][技术栈：为什么 Node 是前端团队的核心技术栈](https://www.yuque.com/sxc/front/vh1kg5)
> 宋小菜前端基础建设分享，值得观看
+ [x][Chrome 浏览器垃圾回收机制与内存泄漏分析](https://mp.weixin.qq.com/s/m_cwfM0PgivmmCKaK-TviQ)`内存泄露` `chrome`
> 比较干货。讲了如何排查是否内存泄露和防止内存泄露的一些办法
+ [x][腾讯视频Node.js服务是如何支撑国庆阅兵直播高并发的？](https://mp.weixin.qq.com/s/WKhALCAarFNOCQylBUryfQ)`高并发`
> 主要是讲的缓存策略配置和业务监控
+ [x][爱奇艺直播WebAssembly优化之路](https://mp.weixin.qq.com/s/LRGNOuFwHXALs_lhPyN3Zw)`WebAssembly`
> 基本介绍了WebAssembly的使用流程，值得观看
+ [x][Webpack优化——将你的构建效率提速翻倍](https://mp.weixin.qq.com/s?__biz=Mzg2NDAzMjE5NQ==&mid=2247484885&idx=1&sn=830826a2f692206881ec90b390a4bf13&chksm=ce6ec179f919486f0be31cc80d341d55611750b3ddd2c974fd08f7bc381ee0108c83292b6fd2&mpshare=1&scene=1&srcid=&sharer_sharetime=1572847720254&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=ed2336ce379cc05e46354899c99041eb09109ca998b530d19b666ad44e223e212b5f77a05337035203cad1e25af4c86527bc6bf3c31108b87f5f37a696c48faec6b83434494f16e0b55beca320ff879d&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=VqdRgcXbwZYpkQWe739Jy0hgLrL%2Baa2tHTzDeCIlgc2AjgT2n2oIU8c5mqfz2Lgn)`webpack`
> 对webpack的优化介绍了很多方法
+ [x][127. 精读《React Conf 2019 - Day1》](https://mp.weixin.qq.com/s?__biz=MzU2ODg2NTcwMQ==&mid=2247484559&idx=1&sn=35a40089a01d67ebbacf8a84284b5b4a&chksm=fc862245cbf1ab53ea178a2e18124c7dcc13067a1e9738f8d371c5a8ce5efed52f2007fdec50&mpshare=1&scene=1&srcid=&sharer_sharetime=1572847696881&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=f0572ec07140f160448c050512d922a39581fa5d04f36585fd773a89b6a96c9a7c52f790bac2c2f10172fa6b3d61c547afa7ddc6d3220f26307c965532c11ce517e23e55398b2c71e47baad3f5a7faed&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=VqdRgcXbwZYpkQWe739Jy0hgLrL%2Baa2tHTzDeCIlgc2AjgT2n2oIU8c5mqfz2Lgn) `css压缩` `首屏渲染加速`
> react编译样式的新方案，把某一条key:value的样式编译成一个className，后期根据使用只吐出用到的className，这样同一个key:value不会在css里出现两次，达到压缩效果。通过配置使得首屏用于渲染的代码和数据请求优先加载，其余代码和请求延迟加载。达到最快加载速度。`React Reconciler`可以创建自定义的虚拟DOM ，以适应任何平台。
## 2019.10.31
+ [ ][【THE LAST TIME】一文吃透所有JS原型相关知识点](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484388&idx=1&sn=8f71421cfe2490284739ec9a41d3117c&chksm=9782cd6da0f5447b6e7c41fa1264127210064f9b80cc0848bb55af0ce450fb5cf76988ec2081&mpshare=1&scene=1&srcid=&sharer_sharetime=1572484152357&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=62cf43e695d2fde29668c479f9822adcdfe735eec395ea75da4cfa380d7e60e9684b5b6f1e44343d0bd78c60668788c09d3f546fd7c34547ded46472211087acfc50550ef0902b5122bf667e9136fd88&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=Indy8FJ8qdoFV7Ry05Jv2XrObUXmfUoXPlTizfK3d64QDC2bF58mzdNGEaoYWNGb)

## 2019.10.30
+ [x][现代 Web 开发的现状与未来（JSDC 2019 演讲全文）](https://mp.weixin.qq.com/s?__biz=Mzg2NDAzMjE5NQ==&mid=2247484879&idx=1&sn=b519e5a91c87a63d415b58f5be5bf8df&chksm=ce6ec163f9194875ff51effbeb546d1200e067b634033be823c54cc69e531d761f2121879d24&mpshare=1&scene=1&srcid=&sharer_sharetime=1572397648890&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=62cf43e695d2fde285e90c0e3a5dbad9d72a2b99a45ff058b2b78ca35eba50b8ae16c9c5a5e9fea6313b598ec5bd4dae8ad128d4c132e5fff239a91c767ca12d3d521b987d7fb6174477e7c7e5691029&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=b%2FwnTj8Q8Q%2BRCbdc8cLrapjhWRgdzZefMoUXqKuHi0BmoRsz%2FxgcvmZ340EirDJn)`架构` `干货` `AMP`
> 比较干货，偏重架构，内容量太丰富读起来比较累。时候在架构过程中不断的品读。文中提到谷歌的AMP加速移动页面值得研究。还提到了Gatsby、Glitch、Replit、CodeSandbox、等线上开发工具，还有head less这种只提供api的cms系统如Strapi
+ [x][一文搞定前端 Jenkins 自动化部署](https://mp.weixin.qq.com/s?__biz=MzI1NDU3NzM5Mg==&mid=2247483992&idx=1&sn=bc7196cd8cc31809701f601065364b68&chksm=e9c25dc7deb5d4d103821a6447b4d6c68bd194d2dba2783def3b0885a40de833cf3d2422fd44&mpshare=1&scene=1&srcid=&sharer_sharetime=1572397681083&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=e6db03dae12febb96951ccea3b5988f6b10c5648a5762c0ad57d62f0cc4fcfc3c5b74bcdbf9212621183f529dbc2bc5a4ac2eca1064ed75a28f59503322ad0de560934285f182483f595064b9df5e8eb&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=b%2FwnTj8Q8Q%2BRCbdc8cLrapjhWRgdzZefMoUXqKuHi0BmoRsz%2FxgcvmZ340EirDJn)
> 讲了jenkins安装基础

## 2019.10.29

+ [x][CSS Display属性的双值写法](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590555&idx=1&sn=e204b3a8c824c682c0fbe1755f627ed4&chksm=8891dd7fbfe65469be4348be3e19aa7e36c97a1bc848e65f3d92e14a640a3e94b653f822a93f&mpshare=1&scene=1&srcid=&sharer_sharetime=1572312257395&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=f0572ec07140f1608c6b25681b4d6f30d2ce933d599a72a63e9b238291cb4ba35ceb573f6639dbc3febcaa37cd9409f8d76fe27e92fd01f3a4ad379697a5915f453d1fbafda607d1fa8950598475c85a&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=OUxDG6ASuQjHvLiyZMNzC1WFJezyKcvOgTYC5JsbCn1OJHONKuPnBCCOhviggJXQ) 
> display的两个值指定了一个元素对上级元素和对下级元素的影响，是CSS Display Module Level 3的范畴
## 2019.10.28
+ [x][如何写出一个惊艳面试官的深拷贝](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484366&idx=1&sn=e6b01d4eff645518b48ea66716b3ddfe&chksm=9782cd47a0f54451cb95ae5a3c5e9df86298276976845493358114c2e6841cf63e2cbaaab453&mpshare=1&scene=1&srcid=&sharer_sharetime=1572224509572&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=f0572ec07140f160d72bb7fd2341fde33e05e32a172d3e2e2d51d2a0eb04f042f853d2546aa2bf24e052a15678be23c973969f00ecb9a358fff3da56699ab3331c06ecd6058a9a5d95e9274f55846b26&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=HnGyq3O73yfINcHrpPz0xpMl%2B5KhSNB7x9r2KVkRXNNIMkwqsyJ5needyXbbte1t)`干货` `深拷贝`
> 比较干货。主要考虑这些事情：对不同的引用类型如何做拷贝、对循环引用使用weekMap来标记是否已经拷贝过，有则直接复制、使用while循环来优化for in循环的性能因为它的性能比for in和for循环都好、通过正则找出函数参数和函数体并完全拷贝一个function、通过对是否有prototype来看一个function是否是箭头函数。
+ [x][现代浏览器观察者 Observer API 指南](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590550&idx=1&sn=91f15019a55c6136138ce731f92698ae&chksm=8891dd72bfe6546445ce412de48614ee825385c024740852e16249fce0a432e5b28b82506996&mpshare=1&scene=1&srcid=&sharer_sharetime=1572224495946&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5792dae60a8bc6dee57e794954daf08952e31a694bd22327ba0ee879aae90f50495d5084edd7c28dbe50596095f4c021e1c6764f3467b961f416c0606947a9bd2c1910ebad9b39feabdf0b8a687839b9&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=HnGyq3O73yfINcHrpPz0xpMl%2B5KhSNB7x9r2KVkRXNNIMkwqsyJ5needyXbbte1t)
> 比较干货。`IntersectionObserver`观察两个元素的是否相交，也可以判断元素和视窗是否相交(是否出现在视窗中)，用来做lazyload等很有用。`MutationObserver`用于观察dom元素的变化。`ResizeObserver`用来替代window.onresize事件。通过`PerformanceObserver`来实现性能监控。
+ [x][新手学习 react 迷惑的点(完整版)](https://mp.weixin.qq.com/s/GR_J26IkO-o2Ki8DunMJNg)
> 说了很多不错的东西。
+ [ ][精读《Nuxtjs》](https://mp.weixin.qq.com/s/Rx7Rk-HzIPujxDrCb3NwoA)

## 2019.10.25
+ [x][解读HTTP/2与HTTP/3 的新特性（推荐）](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590539&idx=1&sn=0fc37d6eabd63961c91b089258c26c0c&chksm=8891dd6fbfe6547948b63111acfa3ffdfc26fdc552e2b01bfc46f4c2e1eabb5356d3ffc1cdfe&mpshare=1&scene=1&srcid=&sharer_sharetime=1571965663197&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=edde10a8bf3931376d14a4a8254472a8fb999d8125c1c8cddf16ab15f18c386003c63a721ac7538f5d694619e3e85ddbc757796df91ad6f6cff52d68d2879c4bf475866297103a0b68997654ab8648a0&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=zDTg1cxptJdfi3q43b9tdF9tcgYRiph2WJIEenP5rsUoRKKjDZDtplzJijQnUosr)`干货` `http2` `http3`
> 算是讲http2比较清楚的了。http2解决了http1队首阻塞、tcp等待、header无压缩等问题。http3解决了http2丢包全部等待重传、建立https需要多次RTT(round trip time)的问题。
+ [x][125. 精读《深度学习 - 函数式之美》](https://mp.weixin.qq.com/s?__biz=MzU2ODg2NTcwMQ==&mid=2247484548&idx=1&sn=58927319396e638e9fa0aec7cbcd0a3b&chksm=fc86224ecbf1ab5835b2153dc87e5bfefb51fdfd0074175cb7d8f4cde229ef5f1d53ff83557f&mpshare=1&scene=1&srcid=&sharer_sharetime=1571965701414&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5792dae60a8bc6de2efd085cffb99593cc467a5e529ce45b5682a0b18ea5f6e27e6035fefab691f861fbcdb8f1d11eaf124c27212b0cfa9c0a8dd8d416ad2e0f2c256bb179d5d886a053dac93ab995d4&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=zDTg1cxptJdfi3q43b9tdF9tcgYRiph2WJIEenP5rsUoRKKjDZDtplzJijQnUosr)
> 深度学习和函数式编程有很大的关联，深度学习基本都用函数式编程实现。文章比较晦涩。



## 2019.10.12
   + [x] [60 天急速自研-搭建前端埋点监控系统](https://www.yuque.com/sxc/front/yf3d0e ) 
> 讲了很多监控系统的事情，比较强大

## 2019.10.14

   + [x] [Chrome Devtools 高级调试指南（新）](https://mp.weixin.qq.com/s/YZFJtvrZzhroBgQJL6U_Og )
> 讲了很多快捷键 已经记录到fe-basics
## 2019.10.15

+ [x][shadow dom](https://mp.weixin.qq.com/s/R2CxBXuTdC6eJ56xKIaHeA )
> 介绍了WebComponents的一部分：shadow dom。浏览器的video、audio标签都是用shadowdom实现，可以通过调试工具settings里的 show useragent shadow dom查看。shadowdom不会被外部的css和js所影响，作为组件再合适不过。
+ [x][小程序实现](https://zhuanlan.zhihu.com/p/81775922?utm_source=wechat_session&utm_medium=social&utm_oi=26731062755328&from=timeline&s_r=0)
> 小程序实现基本就是做一个webview沙箱？看文章是这么说的。

## 2019.10.16

+ [x][如何一人五天开发完复杂小程序](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590486&idx=1&sn=24a88273e09370c93c1fe16b5d9d66ef&chksm=8891dd32bfe65424052346eadce30af6ea84ce405ae39d2e6e2fc426a70417ba60d796084a25&mpshare=1&scene=1&srcid=&sharer_sharetime=1571188544064&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=bad1bd95c2b983fb4c05c89b1be31eca7d8798c6cabff3ab7b821a598bf0077329bd5dc97a3abe894001555308115e33c368c04e2bdc0b49e9762382d3bfcca7cc540af4edb26a9e78757f5fc1527f30&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=xVJDGoZnPzGH8SWjtrIt9bJS%2FHzFvunhNYyBWxxCwdBj8exolxGMJI568AwsJhwm)
> 主要是讲组件封装

+ [x][119.精读《前端深水区》](https://mp.weixin.qq.com/s?__biz=MzU2ODg2NTcwMQ==&mid=2247484543&idx=1&sn=97f769c15987a0197b924a1ac5c4bcb4&chksm=fc8622b5cbf1aba33db0a7aea55d9965188d3d5de4c2e713975b7377610064e33b32434e53b4&mpshare=1&scene=1&srcid=&sharer_sharetime=1571188570045&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5792dae60a8bc6dea39e5dcfcc221264a0fe0707fb7fe39c739fcb47d36244cd3db4893c1279fc1433a1a14fdf4913c7ad42006ebb92bd108669437a326628cb8c820df493c85dac2ae1702a8b52c6f6&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=xVJDGoZnPzGH8SWjtrIt9bJS%2FHzFvunhNYyBWxxCwdBj8exolxGMJI568AwsJhwm)
> 讲了一些论点
+ [x][Vue3 中的数据侦测](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484318&idx=1&sn=a8d75b38e421f3d585f39556a1b5ef71&chksm=9782cd17a0f5440155e2e36ab094c4c27d3fe141f3e871c96a3b8b591dea5ce57cd2f49625a2&mpshare=1&scene=1&srcid=&sharer_sharetime=1571188603449&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=edde10a8bf39313705df595738e0ba18d0a0a9e46f9561a383153cb808ce7b086ce3455786c8b46a72fa0c1557d81f437d18186933c572e4334b7f82f9d3bec85b06d56bcd56391ae880bbd73dc06694&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=xVJDGoZnPzGH8SWjtrIt9bJS%2FHzFvunhNYyBWxxCwdBj8exolxGMJI568AwsJhwm)`Proxy` `Reflect` `Vue3`
> 干货，讲了vue3如何通过Proxy实现代理并通过weakMap做索引提升性能，既然用了代理就一定要用reflect哦。另外还顺带提到了`monorepo`

## 2019.10.17


+ [x][具有“脚本魔力”的属性们](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590491&idx=1&sn=7fb783340b552fefa848d0bfc49973ae&chksm=8891dd3fbfe654293193d17cf0fe3537e3fafba0197319cf2aefd787edabc9557b2d7059b054&mpshare=1&scene=1&srcid=&sharer_sharetime=1571275812228&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=5792dae60a8bc6de5d67921a8ab325bd98d80cef11e047a3cac9cf1cd42a792b3d645116bee1fda0e5f3513d0f225e06a32d9e10748278586ed75f1285da737142ee25d8128738b10f9c0ebf146d6102&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=1rjiYh4F3c5tmbBbVINVe3HcvjnMF%2FKwxSuWVNe2FvtdMLTIDyE63Z2K4aM2kP%2FT)
> 介绍了一些html的属性，利用这些属性可以实现js的效果。比如dragable/contenteditable，还有css的touch-action等

+ [x][50年前的登月程序和程序员有多硬核](https://coolshell.cn/articles/19612.html  )
> 这是比C语言诞生更早的代码。但是可以看到性质都是一样，都是通过约定语法写代码然后交给机器识别。语言设计本质上是一个约定规范的设计。

+ [x] [重学 TCPIP](https://mp.weixin.qq.com/s/pFlJglicKZVh31EOMe83Hw)`tcp`
> 大概讲了下多层协议，还不够详细和明确

## 2019.10.22
+ [x][解密国内BAT等大厂前端技术体系-阿里篇](https://mp.weixin.qq.com/s/haSCjEOVCZSeaT2q5E2BQw)
> 阿里技术确实是大而全，而且都比较nb。文中介绍得也比较全面，ant系，淘宝系，主要是这两个。其中AntV在数据可视化方面可以研究一下。serverless阿里也是比较领先。

+ [ ] [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa)

## 2019.10.23
+ [x][前端可视化OpenGL / WebGL 入门和实践](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590526&idx=1&sn=7a99ae29f6b7cae568074a9044cc3790&chksm=8891dd1abfe6540cdd3e504ccf87b7a941cb98b4a789b3e104b1020fe6c7486cdf9f6e7c3c8b&mpshare=1&scene=1&srcid=&sharer_sharetime=1571794752085&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=edde10a8bf39313749208a100cd91264aaba75bfa7f8bd779612cb6de196ec91c4245c308e81fdea8bfab5187ce82d8c59bd27dd2adbac81f3611c9cc0162d4784f2c14fbc622050fbd04fb62a0ea3ae&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=zvec1ocS2eVCoeyvaRJG1t9EbuJKLUo6hozDfDJ9wIAOnfrntNjfXIzMiXGLOU00) `可视化`
> 讲了OpenGL以及GLSL语言即GL着色器语言的基础知识，讲解了三维图形的渲染步骤，另外推荐了两个学GL很好的地方[webglfundamentals](https://webglfundamentals.org/webgl/lessons/zh_cn/)以及[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
+ [x][Redis 到底是怎么实现“附近的人”这个功能的呢？](https://juejin.im/post/5da40462f265da5baf410a11) `算法` `位置`
> Redis版本的就是把位置都存在内存里，然后进行增删查改。讲了一下geo的网格存储原理。就是把地球平面划分为网格，等级越高网格数量越多，高一级的网格就是把第一级的1个网格划分为四个网格。然后给网格编号，高一级比第一级多一位。`如低级是1，高级就是10/11/12/13`。这样在查找附近的人的时候，就可以通过前缀匹配迅速的执行查找。嗯 还有其他比较有趣的知识，有些复杂，不深入。

## 2019.10.24
+ [x][当我们在聊Serverless时你应该知道这些](https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484354&idx=1&sn=5765a4cb138dea45afe31ece44b34fbd&chksm=9782cd4ba0f5445dd8092aaaf539a659221f97d50625cd7644b835d274cf703407cc7bd1c9e6&mpshare=1&scene=1&srcid=&sharer_sharetime=1571879209050&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=62cf43e695d2fde209f7ffac697c1f287deea8f2e3b5601cd64c1246809f7174f2e40e21fbf534bd6d3667f5dc65360f4d1b36d5afc25e6cfe83072a9c5b0e58709413349bcc59bc36975cd19ef40a1e&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=%2F%2BZvj2aG%2BjAhu9yD7zxzASEfeFgbgzMv3BKGTIqauxfYT257pT2hxz5Znsb8a27J) `serverless`
> 并没有讲清楚serverless是个啥。


+ [x][TypeScript 的类型检查和类型保护](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590534&idx=1&sn=c61ed5ce91d290014888d8a743543fe0&chksm=8891dd62bfe65474fe410f5206ba0589638f5d1128df459c912914a04491ff691746335d4da5&mpshare=1&scene=1&srcid=&sharer_sharetime=1571879193184&sharer_shareid=884ae1be7480540034d4fbdd3aec6f5c&key=f0572ec07140f160fbf5e28e66429c51496a0a602db609ac60eeaa77aaa7ea1a7fae2cbc38045cfe65b35343234aad877059dd1456bf92c3daf5eb91a95d5a8c5a27f8af7cb2a2610f84aec9ded8c652&ascene=1&uin=MTQ4MDM3MzEyNA%3D%3D&devicetype=Windows+10&version=62060841&lang=zh_CN&pass_ticket=%2F%2BZvj2aG%2BjAhu9yD7zxzASEfeFgbgzMv3BKGTIqauxfYT257pT2hxz5Znsb8a27J)`typescript`
> 主要是说ts的类型推断等，需要有ts基础
