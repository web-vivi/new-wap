# 通过学习用vue制作的一个会员权限的项目

> 主要是实现会员是否有权限观看视频，同时可以通过点击购买VIP获取选权限来观看视频

## 介绍

1.用户可以通过系统给的账户密码进行登录，也可以通过新注册账号来进行登录；<br/>
2.用户再未关闭当前页面时如未登录则直接跳转登录页，如登录过则直接跳指定页或者首页，主要用的是sessionStorage；<br/>
3.用户观看权限，可以通过购买来获取VIP等级来观看；<br/>
4.首页列表自定义了一个card组件；<br/>
5.页面主要是用的vuex来处理各个页面之间权限的共享；