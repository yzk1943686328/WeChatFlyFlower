微信小程序飞花令设计文档
一.背景介绍
QQ是互联网早期年轻用户居多的时候流行的IM软件，那个时候年轻人可以没有手机但是必须有QQ。到后来随着互联网的发展，互联网用户发展吸引了没有PC而有智能手机的用户，而微信就是跟上了智能手机这个新潮流。
微信小程序是微信平台上的开发环境。微信小程序易于开发、功能灵活、方便部署，还绑定了交友、支付等种功能，所以很有学习的必要。

二.设计思路
1.界面设计：

       初始界面
初始界面非常简单，只有一个form表单，表单里有一个input输入框和一个button提交按钮,输入关键字点击查询后进入后台逻辑
2.逻辑设计：

这张图上就是小程序的初始数据，不知道什么原因，当时上课的时候是可以访问老师发的那个诗词的页面的，但现在一直连不上，而我去网上查了查发现现在微信小程序还没有访问文件的功能，没办法只能挑了几首诗直接放在js中，以对象数组的形式出现，下面的四个变量分别是选中诗词的题目，作者关键词之前的部分和关键词之后的部分（这么写是因为要把关键字的颜色变为红色，所以我就把诗句分成了三部分，在关键词的那部分用一个css把关键词变成红色）,finish代表搜索工作是否完成。

当输入关键字点击查询按钮时，进入startsearch()方法，首先将四个结果集清空并将finish设置为false，然后将key设置为用户输入的关键字，然后就开始遍历每首诗词，当该首诗的诗句部分包含key时(用indexOf进行判断),就把这首诗的题目，作者，关键词之前的部分，关键词之后的部分都加入到结果集中，加入的时候，我发现直接用 “数组.splice()”插入元素是不行的，查资料发现微信小程序要想改变数据只能用this.setData方法，但是“数组.splice()”并没有返回值，所以只能借助一个中间变量完成插入新元素，首先声明一个新数组=原来的数组，然后”新数组.splice()”向新数组中插入新元素，然后this.setData令原来的数组=新数组，完成插入操作，完成插入后再将finish设置为true。
 在index.wxml界面,代码如下图所示：

当finish为true的时候执行代码显示结果，显示结果的时候利用wx:for逐首诗显示结果，将key那一部分利用css设置为红色突出显示。
3.运行截图：



三.体会
这是我第一次写微信小程序，由于刚在W3cschool上学了微信小程序的开发，写的时候还算比较熟练，就是在将包含关键字的诗加入到结果集中时花费了比较长的时间，学习微信小程序给我最大的体会就是微信小程序的功能太强大了，有些在其他编程语言中需要花很大的篇幅写的功能，微信小程序已经给你包装好了，一行代码就解决了，这个挺爽的，但是微信小程序在简单易懂上做的不太好，主要还是有一些逻辑和其他编程语言不太一样，所以理解起来有点麻烦。
微信小程序在生活中变得越来越重要的，所以学习微信小程序也变得很有意义，以后还要继续学习微信小程序。