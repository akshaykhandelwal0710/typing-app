(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5007)}])},5007:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(5893),o=n(7294);var s=function(t){return(0,r.jsxs)("div",{className:"analysisBox",children:[(0,r.jsx)("h2",{children:" Analysis "}),(0,r.jsxs)("p",{children:["Gross Typing Speed = ",Math.trunc(12*t.numChars/t.time)," wpm"]}),(0,r.jsxs)("p",{children:["Net Typing Speed = ",Math.trunc(12*t.correctChars/t.time)," wpm"]}),(0,r.jsxs)("p",{children:["Accuracy = ",Math.round(100*(t.totalCount-t.incorrectCount)/t.totalCount),"%"]})]})};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},p=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,c(e).call(this,t))}var n,o,s;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){return(0,r.jsx)("input",{value:this.props.value,onChange:this.props.onChange,disabled:this.props.disabled,ref:this.props.rf})}}])&&i(n.prototype,o),s&&i(n,s),e}(o.Component);function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},v=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,f(e).call(this,t))}var n,o,s;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(o=[{key:"render",value:function(){var t,e,n=[],o=this.props.firstTime?"randomClass":"greenText";if(this.props.disabled)for(var s=0,i=0;i<this.props.content.length;i++)s<this.props.incorrectWords.length&&this.props.incorrectWords[s]==i?(++s,n.push((0,r.jsxs)("span",{className:"redText",children:[this.props.content[i]," "]}))):n.push((0,r.jsxs)("span",{className:o,children:[this.props.content[i]," "]}));else{var c=(t=this.props.totLen,e=this.props.content[this.props.currentWord].length,t<e?t:e);for(s=0,i=0;i<this.props.currentWord;i++)s<this.props.incorrectWords.length&&this.props.incorrectWords[s]==i?(++s,n.push((0,r.jsxs)("span",{className:"redText",children:[this.props.content[i]," "]}))):n.push((0,r.jsxs)("span",{className:"greenText",children:[this.props.content[i]," "]}));n.push((0,r.jsx)("span",{className:"greenText",children:(0,r.jsx)("u",{children:this.props.content[this.props.currentWord].slice(0,this.props.match)})})),n.push((0,r.jsx)("span",{className:"redBackgroundText",children:(0,r.jsx)("u",{children:this.props.content[this.props.currentWord].slice(this.props.match,c)})})),n.push((0,r.jsx)("span",{children:(0,r.jsx)("u",{children:this.props.content[this.props.currentWord].slice(c,this.props.content[this.props.currentWord].length)})}));var u=c<this.props.totLen;for(u&&n.push((0,r.jsx)("span",{className:"redBackgroundText",children:" "})),i=this.props.currentWord+1;i<this.props.content.length;i++)u?n.push((0,r.jsx)("span",{children:this.props.content[i]})):n.push((0,r.jsxs)("span",{children:[" ",this.props.content[i]]})),u=!1}return(0,r.jsx)("div",{className:"textBox",children:n})}}])&&h(n.prototype,o),s&&h(n,s),e}(o.Component);function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var j="Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.",m=(j=j.split(" ")).length;var x=function(){var t=(0,o.useState)(0),e=t[0],n=t[1],i=(0,o.useState)(!1),c=i[0],u=i[1],a=(0,o.useState)(""),l=a[0],h=a[1],f=(0,o.useRef)(null),d=(0,o.useState)(0),y=d[0],b=d[1],x=(0,o.useState)(0),_=x[0],w=x[1],O=(0,o.useState)(0),S=O[0],C=O[1],T=(0,o.useState)(0),E=T[0],N=T[1],W=(0,o.useState)([]),P=W[0],k=W[1],A=(0,o.useState)(!0),M=A[0],B=A[1],L=(0,o.useState)(null),I=L[0],R=L[1];return(0,o.useEffect)((function(){c?R(setInterval((function(){n((function(t){return t+1}))}),1e3)):null!=I&&(clearInterval(I),R(null))}),[c]),(0,o.useEffect)((function(){var t;null!=f&&(null===(t=f.current)||void 0===t||t.focus())}),[c,l]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"HOME"}),(0,r.jsx)("p",{children:e}),(0,r.jsx)("button",{onClick:function(t){c||(h(""),u(!0),B(!1),b(0),w(0),C(0),k([]),n(0))},children:"Start"}),(0,r.jsx)(v,{content:j,disabled:!c,currentWord:y,match:E,totLen:l.length,incorrectWords:P,firstTime:M}),(0,r.jsx)(p,{rf:f,value:l,onChange:function(t){var e=t.target,n=e.value.length-l.length,r=0;if(!(n>1||n<-1||e.value.length>30)){for(;r<(o=e.value.length,s=j[y].length,o<s?o:s)&&e.value[r]==j[y][r];)r++;var o,s;" "==e.value[e.value.length-1]?(e.value.length-1!=j[y].length||r!=j[y].length?k((function(t){return g(t).concat([y])})):C((function(t){return t+j[y].length})),y==m-1&&u(!1),w((function(t){return t+e.value.length-1})),b((function(t){return t+1})),N(0),h("")):(N(r),h(e.value))}},disabled:!c}),c||M?(0,r.jsx)("div",{}):(0,r.jsx)(s,{numChars:_,time:e,correctChars:S,incorrectCount:P.length,totalCount:m})]})}}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);