(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{453:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex的使用"}},[t._v("#")]),t._v(" Vuex的使用")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装命令"}},[t._v("安装命令")])]),a("li",[a("a",{attrs:{href:"#方法及作用"}},[t._v("方法及作用")])]),a("li",[a("a",{attrs:{href:"#集合引入vuex"}},[t._v("集合引入Vuex")])]),a("li",[a("a",{attrs:{href:"#创建目录"}},[t._v("创建目录")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"安装命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[t._v("#")]),t._v(" 安装命令")]),t._v(" "),a("p",[t._v("npm安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuex --save\n")])])]),a("h2",{attrs:{id:"方法及作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法及作用"}},[t._v("#")]),t._v(" 方法及作用")]),t._v(" "),a("ol",[a("li",[t._v("state:用于存储值得地方")]),t._v(" "),a("li",[t._v("getters:用于返回经过特定计算的值")]),t._v(" "),a("li",[t._v("mutation:编写一个函数，去改变存储值")]),t._v(" "),a("li",[t._v("action:支持异步函数，用于提交mutaion中的方法"),a("code",[t._v('this.$store.commit("mutationApi",payload)')]),t._v(",在实例中"),a("code",[t._v("this.$store.dispatch(actionApi,payload)")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"集合引入vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合引入vuex"}},[t._v("#")]),t._v(" 集合引入Vuex")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("mapState")]),t._v(":为了防止一个个引入 "),a("strong",[t._v("state")]),t._v(" 中的存储值，vuex提供了这个方法。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"friends"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可为它们取别名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...mapState({")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     myLikes:"likes",')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     myFriends:"friends",')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     theUserInfo:"userInfo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }),")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 取state中类型为Object里的属性\n   * 第一个参数为 模块名\n   * 第二个参数为 内部属性\n   * */")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ...mapState("vehicle", {')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   orderId: ({ orderId }) => orderId,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   control: ({ control }) => control,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   car: ({ car }) => car,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   vehicleType: ({ vehicleType }) => vehicleType")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// })")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("mapGetter")]),t._v(": 可以引入多个返回 "),a("strong",[t._v("经过特定计算的属性")]),t._v(" 。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapGetters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'realName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myMoney'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",[a("li",[a("strong",[t._v("mapMutation")]),t._v(": 引入多个 "),a("strong",[t._v("改变state存储值的方法")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapMutation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'realName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myMoney'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从模块中获取")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ...mapMutations("vehicle", ["setVehicleType", "setCarInfo"]),')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("mapAction")]),t._v(": 引入多个 "),a("strong",[t._v("可以异步操作mutation的方法")])])]),t._v(" "),a("p",[t._v("action部分:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD_AGE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHANGE_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD_FRIEND")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET_USER_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET_TOKEN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./mutation_type.js"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个异步获取用户信息的action")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//context可以理解为它是整个Store的对象.类似于this.$store，里面包含了state，getter，mutations，actions")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/接口url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       \n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个时候就用到了 mutation_type.js")]),t._v("\n       context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET_USER_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("userInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个异步获取用户token的action")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/接口url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("vue页面:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("computed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getUserInfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getToken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"创建目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[t._v("#")]),t._v(" 创建目录")]),t._v(" "),a("p",[t._v("在 src目录下，创建store,以及store里的index.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/* src/stre/index.js */\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);