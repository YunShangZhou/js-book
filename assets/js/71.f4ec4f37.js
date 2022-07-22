(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{468:function(v,_,l){"use strict";l.r(_);var i=l(55),s=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"小程序的基本组成结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小程序的基本组成结构"}},[v._v("#")]),v._v(" 小程序的基本组成结构")]),v._v(" "),l("ol",[l("li",[v._v("pages目录：每个页面都有自己的一个catagory，里面存放四个文件 js、json、wxml、wxss，它们对应的作用是:")])]),v._v(" "),l("ul",[l("li",[v._v("js生命周期，逻辑判断")]),v._v(" "),l("li",[v._v("json,当前index.js文件的配置文件，配置页面的外观")]),v._v(" "),l("li",[v._v("wxml,代表页面的模板")]),v._v(" "),l("li",[v._v("wxss，代表页面的样式表")])]),v._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[v._v("utils，存放工具类文件。")]),v._v(" "),l("li",[v._v("app.json公共配置文件：页面路由，窗口表现。")]),v._v(" "),l("li",[v._v("app.wxss:小程序中的公共样式表")]),v._v(" "),l("li",[v._v("project.config.json:项目配置文件,用于记录我们对微信开发工具的个性化配置")]),v._v(" "),l("li",[v._v("配置小程序及其页面是否能被微信索引。")])]),v._v(" "),l("h2",{attrs:{id:"wxml和html"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#wxml和html"}},[v._v("#")]),v._v(" wxml和html")]),v._v(" "),l("h3",{attrs:{id:"问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[v._v("#")]),v._v(" 问题")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("我们是否可以在 "),l("code",[v._v("wxml")]),v._v("中写div?并说明原因。\n答: wxml是框架设计的一套标签语言（组件），用来构建小程序页面的结构，其作用类似于网页开发中的HTML。")])]),v._v(" "),l("li",[l("p",[v._v("它们之间的区别？")]),v._v(" "),l("ol",[l("li",[v._v("标签不同：\n"),l("ul",[l("li",[v._v("HTML的标签为: div，span,img,a")]),v._v(" "),l("li",[v._v("WXML的标签为: view,text,image,navigator")])])]),v._v(" "),l("li",[v._v("属性节点不同\n"),l("ul",[l("li",[l("code",[v._v('<a href="#">超链接</a>')])]),v._v(" "),l("li",[l("code",[v._v('navigator url="/pages/home\'home>跳转到Home</navigator>"')])])])]),v._v(" "),l("li",[v._v("提供了动态渲染数据的模板语法\n"),l("ul",[l("li",[v._v("数据绑定")]),v._v(" "),l("li",[v._v("条件渲染")]),v._v(" "),l("li",[v._v("列表渲染")])])])])]),v._v(" "),l("li",[l("p",[v._v("若在wxml文件中写入html标签，会发生什么?\n答：可以写入div标签，但是"),l("strong",[v._v("不要")]),v._v("使用。非wxml标签会被转换成"),l("strong",[v._v("类view")]),v._v("标签效果。")])]),v._v(" "),l("li",[l("p",[v._v("什么是wxss?\n答：它是框架设计的一套样式语言，用于描述WXML中的组件样式。类似于网页中的 "),l("code",[v._v("css")]),v._v("。"),l("code",[v._v("WXSS")]),v._v(" 具有 "),l("code",[v._v("css")]),v._v("中大部分特性。")])]),v._v(" "),l("li",[l("p",[v._v("wxss新增了什么尺寸单位？\n答：新增了尺寸在单位 -- "),l("code",[v._v("rpx")]),v._v(",一个 "),l("code",[v._v("rpx")]),v._v("为页面宽度的"),l("code",[v._v("1/750")]),v._v("。")])]),v._v(" "),l("li",[l("p",[v._v("wxss中推荐使用什么选择器？")]),v._v(" "),l("ol",[l("li",[l("code",[v._v(".class")]),v._v("和 "),l("code",[v._v("#id")])]),v._v(" "),l("li",[l("code",[v._v("element")])]),v._v(" "),l("li",[v._v("并集选择器和后代选择器")]),v._v(" "),l("li",[l("code",[v._v("::after")]),v._v(" 和 "),l("code",[v._v("::before")]),v._v("等为类选择器")])])]),v._v(" "),l("li",[l("p",[v._v("提供了全局样式和局部样式")]),v._v(" "),l("ol",[l("li",[v._v("全局样式：写入到根目录的wxss中的样式")]),v._v(" "),l("li",[v._v("局部样式：写入到页面的wxss中的样式")])])]),v._v(" "),l("li",[l("p",[v._v("小程序中的json主要分为哪两种\n答：一个是项目根目录下的app.json，主要是配置小程序的跳转路径以及程序页面样式。\n另一个是页面中的index.json，这个相对于app.json，优先级更高一些。当出现相同样式的设置，则页面下的json将会覆盖根目录中app.json的样式设置。")])]),v._v(" "),l("li",[l("p",[v._v("什么是宿主环境？\n答：程序运行所必须的依赖环境。\n小程序的宿主环境： "),l("strong",[v._v("手机微信")])])]),v._v(" "),l("li",[l("p",[v._v("微信小程序项目为什么可以调用 "),l("strong",[v._v("微信支付")]),v._v(" 功能？\n答：因为微信小程序的宿主环境是 手机微信， 二手机微信提供了对应的功能。")])]),v._v(" "),l("li",[l("p",[v._v("小程序的运行环境是如何划分的？\n答：渲染层和逻辑层。")])]),v._v(" "),l("li",[l("p",[v._v("小程序中的成员管理\n通过微信号搜索添加成员，共能添加15个成员。")]),v._v(" "),l("ul",[l("li",[v._v("管理员")]),v._v(" "),l("li",[v._v("项目成员")]),v._v(" "),l("li",[v._v("体验成员")])])]),v._v(" "),l("li",[l("p",[v._v("小程序发布流程")]),v._v(" "),l("ul",[l("li",[v._v("本地 - 开发版本")]),v._v(" "),l("li",[v._v("上传 - 开发版本 / 体验版本")]),v._v(" "),l("li",[v._v("上传 - 审核版本")]),v._v(" "),l("li",[v._v("上传 - 线上版本")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);