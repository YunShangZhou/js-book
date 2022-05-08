(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{629:function(t,s,a){"use strict";a.r(s);var r=a(17),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#组件库目录结构"}},[t._v("组件库目录结构")])]),a("li",[a("a",{attrs:{href:"#目录结构"}},[t._v("目录结构:")])]),a("li",[a("a",{attrs:{href:"#要做的事情"}},[t._v("要做的事情")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"组件库目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库目录结构"}},[t._v("#")]),t._v(" 组件库目录结构")]),t._v(" "),a("ol",[a("li",[t._v("代码结构：使用ESLint插件")]),t._v(" "),a("li",[t._v("样式解决方案:\n"),a("ol",[a("li",[a("p",[t._v("Inline CSS:一般需要通过一些数据做控制判断，才在行内写css")])]),t._v(" "),a("li",[a("p",[t._v("CSS in JS: 根据个人喜好来定,例如")])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid palevioletred;\n    border-radius: 3px;\n    \n    background: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'palevioletred'")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(";\n    color: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'palevioletred'")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button primary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Gtihub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("外部引入css:一般在同目录下创建"),a("code",[t._v("_style.css")]),t._v(",引入对应的组件。")])]),t._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("src/styles")]),t._v("目录下\n"),a("ol",[a("li",[t._v("_variables.scss (各种变量以及可配置设置)(色彩 字体 字号儿)")]),t._v(" "),a("li",[t._v("_mixins.scss(全局 mixins)(box-shadow transform都变得及简单)")]),t._v(" "),a("li",[t._v("_functions.scss(例如定义字体大小)")]),t._v(" "),a("li",[t._v("components/Button/style.scss(组件单独的样式)")])])])]),t._v(" "),a("h2",{attrs:{id:"要做的事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要做的事情"}},[t._v("#")]),t._v(" 要做的事情")]),t._v(" "),a("ol",[a("li",[t._v("组件需求分析和编码")]),t._v(" "),a("li",[t._v("组件测试用例分析和编码")]),t._v(" "),a("li",[t._v("代码打包输出和发布")]),t._v(" "),a("li",[t._v("CI/CD,文档生成 等等")])])])}),[],!1,null,null,null);s.default=n.exports}}]);