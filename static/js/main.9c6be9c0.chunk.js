(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),o=c(6),r=c(8),d=c(7),i=c(1),l=c.n(i),u=(c(13),c(14),c(3)),j=c.n(u),b=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.hiddenGoods=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.hiddenGoods("")}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:h.map((function(c){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("tr",{"data-cy":"Good",className:j()({"has-background-success-light":t===c}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":t===c?"RemoveButton":"AddButton",type:"button",className:j()("button",{"is-info":t===c}),onClick:function(){return e.hiddenGoods(t===c?"":c)},children:t===c?"-":"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})})}))})})]})}}]),c}(l.a.Component);s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9c6be9c0.chunk.js.map