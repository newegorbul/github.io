!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AOS=e():t.AOS=e()}(this,function(){return s={},i.m=n=[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(){if(0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(g=!0),g)return f=(0,u.default)(f,v),(0,d.default)(f,v.once),f}function o(){f=(0,p.default)(),s()}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r=n((n(i(1)),i(6))),l=n(i(7)),h=n(i(8)),c=n(i(9)),d=n(i(10)),u=n(i(11)),p=n(i(14)),f=[],g=!1,m=document.all&&!window.atob,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1};t.exports={init:function(t){return v=a(v,t),f=(0,p.default)(),function(t){return!0===t||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()}(v.disable)||m?void f.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}):(document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),"DOMContentLoaded"===v.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?s(!0):"load"===v.startEvent?window.addEventListener(v.startEvent,function(){s(!0)}):document.addEventListener(v.startEvent,function(){s(!0)}),window.addEventListener("resize",(0,l.default)(s,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(s,v.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,d.default)(f,v.once)},v.throttleDelay)),v.disableMutationObserver||(0,h.default)("[data-aos]",o),f)},refresh:s,refreshHard:o}},function(t,e){},,,,,function(g,t){(function(t){"use strict";function o(n,i,t){function s(t){var e=l,i=h;return l=h=void 0,f=t,d=n.apply(i,e)}function o(t){var e=t-p;return void 0===p||i<=e||e<0||m&&c<=t-f}function a(){var t=k();return o(t)?e(t):void(u=setTimeout(a,function(t){var e=i-(t-p);return m?w(e,c-(t-f)):e}(t)))}function e(t){return u=void 0,v&&l?s(t):(l=h=void 0,d)}function r(){var t=k(),e=o(t);if(l=arguments,h=this,p=t,e){if(void 0===u)return function(t){return f=t,u=setTimeout(a,i),g?s(t):d}(p);if(m)return u=setTimeout(a,i),s(p)}return void 0===u&&(u=setTimeout(a,i)),d}var l,h,c,d,u,p,f=0,g=!1,m=!1,v=!0;if("function"!=typeof n)throw new TypeError(_);return i=y(i)||0,b(t)&&(g=!!t.leading,c=(m="maxWait"in t)?x(y(t.maxWait)||0,i):c,v="trailing"in t?!!t.trailing:v),r.cancel=function(){void 0!==u&&clearTimeout(u),l=p=h=u=void(f=0)},r.flush=function(){return void 0===u?d:e(k())},r}function b(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function n(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":i(t))}(t)&&f.call(t)==e}function y(t){if("number"==typeof t)return t;if(n(t))return s;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=l.test(t);return i||h.test(t)?c(t.slice(2),i?2:8):r.test(t)?s:+t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_="Expected a function",s=NaN,e="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,h=/^0o[0-7]+$/i,c=parseInt,d="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,u="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),f=Object.prototype.toString,x=Math.max,w=Math.min,k=function(){return p.Date.now()};g.exports=function(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new TypeError(_);return b(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),o(t,e,{leading:n,maxWait:e,trailing:s})}}).call(t,function(){return this}())},function(f,t){(function(t){"use strict";function b(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function n(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":i(t))}(t)&&p.call(t)==e}function y(t){if("number"==typeof t)return t;if(n(t))return s;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=r.test(t);return i||l.test(t)?h(t.slice(2),i?2:8):a.test(t)?s:+t}function _(){return u.Date.now()}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=NaN,e="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,h=parseInt,c="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,d="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,u=c||d||Function("return this")(),p=Object.prototype.toString,x=Math.max,w=Math.min;f.exports=function(n,i,t){function s(t){var e=l,i=h;return l=h=void 0,f=t,d=n.apply(i,e)}function o(t){var e=t-p;return void 0===p||i<=e||e<0||m&&c<=t-f}function a(){var t=_();return o(t)?e(t):void(u=setTimeout(a,function(t){var e=i-(t-p);return m?w(e,c-(t-f)):e}(t)))}function e(t){return u=void 0,v&&l?s(t):(l=h=void 0,d)}function r(){var t=_(),e=o(t);if(l=arguments,h=this,p=t,e){if(void 0===u)return function(t){return f=t,u=setTimeout(a,i),g?s(t):d}(p);if(m)return u=setTimeout(a,i),s(p)}return void 0===u&&(u=setTimeout(a,i)),d}var l,h,c,d,u,p,f=0,g=!1,m=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return i=y(i)||0,b(t)&&(g=!!t.leading,c=(m="maxWait"in t)?x(y(t.maxWait)||0,i):c,v="trailing"in t?!!t.trailing:v),r.cancel=function(){void 0!==u&&clearTimeout(u),l=p=h=u=void(f=0)},r.flush=function(){return void 0===u?d:e(_())},r}}).call(t,function(){return this}())},function(t,e){"use strict";function n(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),i=Array.prototype.slice.call(t.removedNodes);e.concat(i).filter(function(t){return t.hasAttribute&&t.hasAttribute("data-aos")}).length&&a()})}Object.defineProperty(e,"__esModule",{value:!0});var s=window.document,o=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};e.default=function(t,e){var i=new o(n);a=e,i.observe(s.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},function(t,e){"use strict";function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=(function(t,e,i){return e&&h(t.prototype,e),i&&h(t,i),t}(l,[{key:"phone",value:function(){var t=i();return!(!n.test(t)&&!s.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=i();return!(!o.test(t)&&!a.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l);function l(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l)}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.default=new r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,i){var n=window.pageYOffset,s=window.innerHeight;t.forEach(function(t,e){!function(t,e,i){var n=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(i||"true"===n)||t.node.classList.remove("aos-animate")}(t,s+n,i)})}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i(12),o=(n=s)&&n.__esModule?n:{default:n};e.default=function(t,i){return t.forEach(function(t,e){t.node.classList.add("aos-init"),t.position=(0,o.default)(t.node,i.offset)}),t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i(13),a=(n=s)&&n.__esModule?n:{default:n};e.default=function(t,e){var i=0,n=0,s=window.innerHeight,o={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(n=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(t=document.querySelectorAll(o.anchor)[0]),i=(0,a.default)(t).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=t.offsetHeight/2;break;case"bottom-bottom":i+=t.offsetHeight;break;case"top-center":i+=s/2;break;case"bottom-center":i+=s/2+t.offsetHeight;break;case"center-center":i+=s/2+t.offsetHeight/2;break;case"top-top":i+=s;break;case"bottom-top":i+=t.offsetHeight+s;break;case"center-top":i+=t.offsetHeight/2+s}return o.anchorPlacement||o.offset||isNaN(e)||(n=e),i+n}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){for(var e=0,i=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),i+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:i,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(t){return{node:t}})}}],i.c=s,i.p="dist/",i(0);function i(t){if(s[t])return s[t].exports;var e=s[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var n,s}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],function(t){return e(function(){try{return t("moment")}catch(t){}}())}):t.Chart=e(t.moment)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var s={rgb2hsl:o,rgb2hsv:e,rgb2hwb:i,rgb2cmyk:a,rgb2keyword:l,rgb2xyz:h,rgb2lab:c,rgb2lch:function(t){return _(c(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;return 0!==n?[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]:[0,0,0]},hsl2hwb:function(t){return i(d(t))},hsl2cmyk:function(t){return a(d(t))},hsl2keyword:function(t){return l(d(t))},hsv2rgb:u,hsv2hsl:function(t){var e,i,n=t[0],s=t[1]/100,o=t[2]/100;return e=s*o,[n,100*(e=(e/=(i=(2-s)*o)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return i(u(t))},hsv2cmyk:function(t){return a(u(t))},hsv2keyword:function(t){return l(u(t))},hwb2rgb:p,hwb2hsl:function(t){return o(p(t))},hwb2hsv:function(t){return e(p(t))},hwb2cmyk:function(t){return a(p(t))},hwb2keyword:function(t){return l(p(t))},cmyk2rgb:f,cmyk2hsl:function(t){return o(f(t))},cmyk2hsv:function(t){return e(f(t))},cmyk2hwb:function(t){return i(f(t))},cmyk2keyword:function(t){return l(f(t))},keyword2rgb:k,keyword2hsl:function(t){return o(k(t))},keyword2hsv:function(t){return e(k(t))},keyword2hwb:function(t){return i(k(t))},keyword2cmyk:function(t){return a(k(t))},keyword2lab:function(t){return c(k(t))},keyword2xyz:function(t){return h(k(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return _(v(t))},lab2xyz:y,lab2rgb:x,lab2lch:_,lch2lab:w,lch2xyz:function(t){return y(w(t))},lch2rgb:function(t){return x(w(t))}};function o(t){var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,a=Math.min(n,s,o),r=Math.max(n,s,o),l=r-a;return r==a?e=0:n==r?e=(s-o)/l:s==r?e=2+(o-n)/l:o==r&&(e=4+(n-s)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(a+r)/2,[e,100*(r==a?0:i<=.5?l/(r+a):l/(2-r-a)),100*i]}function e(t){var e,i,n=t[0],s=t[1],o=t[2],a=Math.min(n,s,o),r=Math.max(n,s,o),l=r-a;return i=0==r?0:l/r*1e3/10,r==a?e=0:n==r?e=(s-o)/l:s==r?e=2+(o-n)/l:o==r&&(e=4+(n-s)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,r/255*1e3/10]}function i(t){var e=t[0],i=t[1],n=t[2];return[o(t)[0],100*(1/255*Math.min(e,Math.min(i,n))),100*(n=1-1/255*Math.max(e,Math.max(i,n)))]}function a(t){var e,i=t[0]/255,n=t[1]/255,s=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-s)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-s-e)/(1-e)||0),100*e]}function l(t){return S[JSON.stringify(t)]}function h(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=.04045<e?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=.04045<i?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=.04045<n?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function c(t){var e=h(t),i=e[0],n=e[1],s=e[2];return n/=100,s/=108.883,i=.008856<(i/=95.047)?Math.pow(i,1/3):7.787*i+16/116,[116*(n=.008856<n?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(s=.008856<s?Math.pow(s,1/3):7.787*s+16/116))]}function d(t){var e,i,n,s,o,a=t[0]/360,r=t[1]/100,l=t[2]/100;if(0==r)return[o=255*l,o,o];e=2*l-(i=l<.5?l*(1+r):l+r-l*r),s=[0,0,0];for(var h=0;h<3;h++)(n=a+1/3*-(h-1))<0&&n++,1<n&&n--,o=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,s[h]=255*o;return s}function u(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,s=Math.floor(e)%6,o=e-Math.floor(e),a=255*n*(1-i),r=255*n*(1-i*o),l=255*n*(1-i*(1-o));n*=255;switch(s){case 0:return[n,l,a];case 1:return[r,n,a];case 2:return[a,n,l];case 3:return[a,r,n];case 4:return[l,a,n];case 5:return[n,a,r]}}function p(t){var e,i,n,s,o=t[0]/360,a=t[1]/100,l=t[2]/100,h=a+l;switch(1<h&&(a/=h,l/=h),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),s=a+n*((i=1-l)-a),e){default:case 6:case 0:r=i,g=s,b=a;break;case 1:r=s,g=i,b=a;break;case 2:r=a,g=i,b=s;break;case 3:r=a,g=s,b=i;break;case 4:r=s,g=a,b=i;break;case 5:r=i,g=a,b=s}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,s=t[3]/100;return[255*(1-Math.min(1,e*(1-s)+s)),255*(1-Math.min(1,i*(1-s)+s)),255*(1-Math.min(1,n*(1-s)+s))]}function m(t){var e,i,n,s=t[0]/100,o=t[1]/100,a=t[2]/100;return i=-.9689*s+1.8758*o+.0415*a,n=.0557*s+-.204*o+1.057*a,e=.0031308<(e=3.2406*s+-1.5372*o+-.4986*a)?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=.0031308<i?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=.0031308<n?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=.008856<(e/=95.047)?Math.pow(e,1/3):7.787*e+16/116,[116*(i=.008856<i?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=.008856<n?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,s,o=t[0],a=t[1],r=t[2];return s=o<=8?(i=100*o/903.3)/100*7.787+16/116:(i=100*Math.pow((o+16)/116,3),Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(a/500+s-16/116)/7.787:95.047*Math.pow(a/500+s,3),i,n=n/108.883<=.008859?n=108.883*(s-r/200-16/116)/7.787:108.883*Math.pow(s-r/200,3)]}function _(t){var e,i=t[0],n=t[1],s=t[2];return(e=360*Math.atan2(s,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+s*s),e]}function x(t){return m(y(t))}function w(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function k(t){return C[t]}var C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},S={};for(var t in C)S[JSON.stringify(C[t])]=t;function T(){return new A}for(var M in s){T[M+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),s[e](t)}}(M);var P=/(\w+)2(\w+)/.exec(M),D=P[1],I=P[2];(T[D]=T[D]||{})[I]=T[M]=function(n){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var e=s[n](t);if("string"==typeof e||void 0===e)return e;for(var i=0;i<e.length;i++)e[i]=Math.round(e[i]);return e}}(M)}var A=function(){this.convs={}};A.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},A.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},A.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=T[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(e){A.prototype[e]=function(t){return this.routeSpace(e,arguments)}});var O=T,z={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},F={getRgba:L,getHsla:$,getRgb:function(t){var e=L(t);return e&&e.slice(0,3)},getHsl:function(t){var e=$(t);return e&&e.slice(0,3)},getHwb:H,getAlpha:function(t){var e=L(t);{if(e)return e[3];if(e=$(t))return e[3];if(e=H(t))return e[3]}},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+B(t[0])+B(t[1])+B(t[2])+(0<=e&&e<1?B(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return E(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:E,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return W(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),s=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+s+"%)"},percentaString:W,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return N(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:N,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return j[t.slice(0,3)]}};function L(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3,4})$/i),s="";if(n){s=(n=n[1])[3];for(var o=0;o<e.length;o++)e[o]=parseInt(n[o]+n[o],16);s&&(i=Math.round(parseInt(s+s,16)/255*100)/100)}else if(n=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){s=n[2],n=n[1];for(o=0;o<e.length;o++)e[o]=parseInt(n.slice(2*o,2*o+2),16);s&&(i=Math.round(parseInt(s,16)/255*100)/100)}else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(n[o+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(n[o+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=z[n[1]]))return}for(o=0;o<e.length;o++)e[o]=R(e[o],0,255);return i=i||0==i?R(i,0,1):1,e[3]=i,e}}function $(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[R(parseInt(e[1]),0,360),R(parseFloat(e[2]),0,100),R(parseFloat(e[3]),0,100),R(isNaN(i)?1:i,0,1)]}}}function H(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[R(parseInt(e[1]),0,360),R(parseFloat(e[2]),0,100),R(parseFloat(e[3]),0,100),R(isNaN(i)?1:i,0,1)]}}}function E(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function W(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function N(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function R(t,e,i){return Math.min(Math.max(e,t),i)}function B(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var j={};for(var V in z)j[z[V]]=V;var q=function(t){return t instanceof q?t:this instanceof q?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=F.getRgba(t))?this.setValues("rgb",e):(e=F.getHsla(t))?this.setValues("hsl",e):(e=F.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new q(t);var e};q.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t=t&&((t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return F.hexString(this.values.rgb)},rgbString:function(){return F.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return F.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return F.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return F.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return F.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return F.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return F.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((.055+n)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return i<e?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return 7.1<=e?"AAA":4.5<=e?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,n=t,s=void 0===e?.5:e,o=2*s-1,a=i.alpha()-n.alpha(),r=(1+(o*a==-1?o:(o+a)/(1+o*a)))/2,l=1-r;return this.rgb(r*i.red()+l*n.red(),r*i.green()+l*n.green(),r*i.blue()+l*n.blue()).alpha(i.alpha()*s+n.alpha()*(1-s))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new q,n=this.values,s=i.values;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],"[object Array]"===(e={}.toString.call(t))?s[o]=t.slice(0):"[object Number]"===e?s[o]=t:console.error("unexpected color value:",t));return i}},q.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},q.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},q.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},q.prototype.setValues=function(t,e){var i,n,s=this.values,o=this.spaces,a=this.maxes,r=1;if(this.valid=!0,"alpha"===t)r=e;else if(e.length)s[t]=e.slice(0,t.length),r=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)s[t][i]=e[t.charAt(i)];r=e.a}else if(void 0!==e[o[t][0]]){var l=o[t];for(i=0;i<t.length;i++)s[t][i]=e[l[i]];r=e.alpha}if(s.alpha=Math.max(0,Math.min(1,void 0===r?s.alpha:r)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(a[t][i],s[t][i])),s[t][i]=Math.round(n);for(var h in o)h!==t&&(s[h]=O[t][h](s[t]));return!0},q.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},q.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:(i===n[e]||(n[e]=i,this.setValues(t,n)),this)},"undefined"!=typeof window&&(window.Color=q);var Y,U=q,X={noop:function(){},uid:(Y=0,function(){return Y++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return X.valueOrDefault(X.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var s,o,a;if(X.isArray(t))if(o=t.length,n)for(s=o-1;0<=s;s--)e.call(i,t[s],s);else for(s=0;s<o;s++)e.call(i,t[s],s);else if(X.isObject(t))for(o=(a=Object.keys(t)).length,s=0;s<o;s++)e.call(i,t[a[s]],a[s])},arrayEquals:function(t,e){var i,n,s,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(s=t[i],o=e[i],s instanceof Array&&o instanceof Array){if(!X.arrayEquals(s,o))return!1}else if(s!==o)return!1;return!0},clone:function(t){if(X.isArray(t))return t.map(X.clone);if(X.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,s=0;s<n;++s)e[i[s]]=X.clone(t[i[s]]);return e}return t},_merger:function(t,e,i,n){var s=e[t],o=i[t];X.isObject(s)&&X.isObject(o)?X.merge(s,o,n):e[t]=X.clone(o)},_mergerIf:function(t,e,i){var n=e[t],s=i[t];X.isObject(n)&&X.isObject(s)?X.mergeIf(n,s):e.hasOwnProperty(t)||(e[t]=X.clone(s))},merge:function(t,e,i){var n,s,o,a,r,l=X.isArray(e)?e:[e],h=l.length;if(!X.isObject(t))return t;for(n=(i=i||{}).merger||X._merger,s=0;s<h;++s)if(e=l[s],X.isObject(e))for(r=0,a=(o=Object.keys(e)).length;r<a;++r)n(o[r],t,e,i);return t},mergeIf:function(t,e){return X.merge(t,e,{merger:X._mergerIf})},extend:function(i){for(var t=function(t,e){i[e]=t},e=1,n=arguments.length;e<n;++e)X.each(arguments[e],t);return i},inherits:function(t){function e(){this.constructor=n}var i=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)};return e.prototype=i.prototype,n.prototype=new e,n.extend=X.inherits,t&&X.extend(n.prototype,t),n.__super__=i.prototype,n}},K=X;X.callCallback=X.callback,X.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},X.getValueOrDefault=X.valueOrDefault,X.getValueAtIndexOrDefault=X.valueAtIndexOrDefault;var G={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return 1<=t?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i=i||.3,e=n<1?(n=1,i/4):i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i=i||.3,e=n<1?(n=1,i/4):i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i=i||.45,e=n<1?(n=1,i/4):i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){return t*t*(2.70158*t-1.70158)},easeOutBack:function(t){return(t-=1)*t*(2.70158*t+1.70158)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-G.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*G.easeInBounce(2*t):.5*G.easeOutBounce(2*t-1)+.5}},Z={effects:G};K.easingEffects=G;var Q=Math.PI,J=Q/180,tt=2*Q,et=Q/2,it=Q/4,nt=2*Q/3,st={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,s,o){if(o){var a=Math.min(o,s/2,n/2),r=e+a,l=i+a,h=e+n-a,c=i+s-a;t.moveTo(e,l),r<h&&l<c?(t.arc(r,l,a,-Q,-et),t.arc(h,l,a,-et,0),t.arc(h,c,a,0,et),t.arc(r,c,a,et,Q)):r<h?(t.moveTo(r,i),t.arc(h,l,a,-et,et),t.arc(r,l,a,et,Q+et)):l<c?(t.arc(r,l,a,-Q,0),t.arc(r,c,a,0,Q)):t.arc(r,l,a,-Q,Q),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,n,s)},drawPoint:function(t,e,i,n,s,o){var a,r,l,h,c,d=(o||0)*J;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(a=e.toString())&&"[object HTMLCanvasElement]"!==a){if(!(isNaN(i)||i<=0)){switch(t.beginPath(),e){default:t.arc(n,s,i,0,tt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(d)*i,s-Math.cos(d)*i),d+=nt,t.lineTo(n+Math.sin(d)*i,s-Math.cos(d)*i),d+=nt,t.lineTo(n+Math.sin(d)*i,s-Math.cos(d)*i),t.closePath();break;case"rectRounded":h=i-(c=.516*i),r=Math.cos(d+it)*h,l=Math.sin(d+it)*h,t.arc(n-r,s-l,c,d-Q,d-et),t.arc(n+l,s-r,c,d-et,d),t.arc(n+r,s+l,c,d,d+et),t.arc(n-l,s+r,c,d+et,d+Q),t.closePath();break;case"rect":if(!o){h=Math.SQRT1_2*i,t.rect(n-h,s-h,2*h,2*h);break}d+=it;case"rectRot":r=Math.cos(d)*i,l=Math.sin(d)*i,t.moveTo(n-r,s-l),t.lineTo(n+l,s-r),t.lineTo(n+r,s+l),t.lineTo(n-l,s+r),t.closePath();break;case"crossRot":d+=it;case"cross":r=Math.cos(d)*i,l=Math.sin(d)*i,t.moveTo(n-r,s-l),t.lineTo(n+r,s+l),t.moveTo(n+l,s-r),t.lineTo(n-l,s+r);break;case"star":r=Math.cos(d)*i,l=Math.sin(d)*i,t.moveTo(n-r,s-l),t.lineTo(n+r,s+l),t.moveTo(n+l,s-r),t.lineTo(n-l,s+r),d+=it,r=Math.cos(d)*i,l=Math.sin(d)*i,t.moveTo(n-r,s-l),t.lineTo(n+r,s+l),t.moveTo(n+l,s-r),t.lineTo(n-l,s+r);break;case"line":r=Math.cos(d)*i,l=Math.sin(d)*i,t.moveTo(n-r,s-l),t.lineTo(n+r,s+l);break;case"dash":t.moveTo(n,s),t.lineTo(n+Math.cos(d)*i,s+Math.sin(d)*i)}t.fill(),t.stroke()}}else t.drawImage(e,n-e.width/2,s-e.height/2,e.width,e.height)},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){var s=i.steppedLine;if(s){if("middle"===s){var o=(e.x+i.x)/2;t.lineTo(o,n?i.y:e.y),t.lineTo(o,n?e.y:i.y)}else"after"===s&&!n||"after"!==s&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}else i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}},ot=st;K.clear=st.clear,K.drawRoundedRectangle=function(t){t.beginPath(),st.roundedRect.apply(st,arguments)};var at={_set:function(t,e){return K.merge(this[t]||(this[t]={}),e)}};at._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var rt=at,lt=K.valueOrDefault;var ht={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,s;return K.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,s=+t.left||0):e=i=n=s=+t||0,{top:e,right:i,bottom:n,left:s,height:e+n,width:s+i}},_parseFont:function(t){var e=rt.global,i=lt(t.fontSize,e.defaultFontSize),n={family:lt(t.fontFamily,e.defaultFontFamily),lineHeight:K.options.toLineHeight(lt(t.lineHeight,e.defaultLineHeight),i),size:i,style:lt(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return n.string=function(t){return!t||K.isNullOrUndef(t.size)||K.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n},resolve:function(t,e,i){var n,s,o;for(n=0,s=t.length;n<s;++n)if(void 0!==(o=t[n])&&(void 0!==e&&"function"==typeof o&&(o=o(e)),void 0!==i&&K.isArray(o)&&(o=o[i]),void 0!==o))return o}},ct=K,dt=Z,ut=ot,pt=ht;ct.easing=dt,ct.canvas=ut,ct.options=pt;function ft(t){ct.extend(this,t),this.initialize.apply(this,arguments)}ct.extend(ft.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=ct.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,n=e._start,s=e._view;return i&&1!==t?(s=s||(e._view={}),function(t,e,i,n){var s,o,a,r,l,h,c,d,u,p=Object.keys(i);for(s=0,o=p.length;s<o;++s)if(h=i[a=p[s]],e.hasOwnProperty(a)||(e[a]=h),(r=e[a])!==h&&"_"!==a[0]){if(t.hasOwnProperty(a)||(t[a]=r),(c=typeof h)==typeof(l=t[a]))if("string"==c){if((d=U(l)).valid&&(u=U(h)).valid){e[a]=u.mix(d,n).rgbString();continue}}else if(ct.isFinite(l)&&ct.isFinite(h)){e[a]=l+(h-l)*n;continue}e[a]=h}}(n=n||(e._start={}),s,i,t)):(e._view=i,e._start=null),e},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return ct.isNumber(this._model.x)&&ct.isNumber(this._model.y)}}),ft.extend=ct.inherits;var gt=ft,mt=gt.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),vt=mt;Object.defineProperty(mt.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(mt.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),rt._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:ct.noop,onComplete:ct.noop}});var bt={animations:[],request:null,addAnimation:function(t,e,i,n){var s,o,a=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=i,n||(t.animating=!0),s=0,o=a.length;s<o;++s)if(a[s].chart===t)return void(a[s]=e);a.push(e),1===a.length&&this.requestAnimationFrame()},cancelAnimation:function(e){var t=ct.findIndex(this.animations,function(t){return t.chart===e});-1!==t&&(this.animations.splice(t,1),e.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=ct.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){this.advance(),0<this.animations.length&&this.requestAnimationFrame()},advance:function(){for(var t,e,i,n,s=this.animations,o=0;o<s.length;)e=(t=s[o]).chart,i=t.numSteps,n=Math.floor((Date.now()-t.startTime)/t.duration*i)+1,t.currentStep=Math.min(n,i),ct.callback(t.render,[e,t],e),ct.callback(t.onAnimationProgress,[t],e),t.currentStep>=i?(ct.callback(t.onAnimationComplete,[t],e),e.animating=!1,s.splice(o,1)):++o}},yt=ct.options.resolve,_t=["push","pop","shift","splice","unshift"];function xt(e,t){var i=e._chartjs;if(i){var n=i.listeners,s=n.indexOf(t);-1!==s&&n.splice(s,1),0<n.length||(_t.forEach(function(t){delete e[t]}),delete e._chartjs)}}function wt(t,e){this.initialize(t,e)}ct.extend(wt.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this.update(!0)},destroy:function(){this._data&&xt(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],s=i.data;for(t=0,e=n.length;t<e;++t)s[t]=s[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,e=t.getDataset(),i=e.data||(e.data=[]);t._data!==i&&(t._data&&xt(t._data,t),i&&Object.isExtensible(i)&&function(s,t){s._chartjs?s._chartjs.listeners.push(t):(Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),_t.forEach(function(t){var i="onData"+t.charAt(0).toUpperCase()+t.slice(1),n=s[t];Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),t=n.apply(this,e);return ct.each(s._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),t}})}))}(i,t),t._data=i),t.resyncElements()},update:ct.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,s=0;s<n;++s)i[s].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t){ct.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},s=t._model,o=ct.getHoverColor;t.$previousStyle={backgroundColor:s.backgroundColor,borderColor:s.borderColor,borderWidth:s.borderWidth},s.backgroundColor=yt([n.hoverBackgroundColor,e.hoverBackgroundColor,o(s.backgroundColor)],void 0,i),s.borderColor=yt([n.hoverBorderColor,e.hoverBorderColor,o(s.borderColor)],void 0,i),s.borderWidth=yt([n.hoverBorderWidth,e.hoverBorderWidth,s.borderWidth],void 0,i)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):i<n&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),wt.extend=ct.inherits;var kt=wt;rt._set("global",{elements:{arc:{backgroundColor:rt.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var Ct=gt.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=ct.getAngleFromPoint(i,{x:t,y:e}),s=n.angle,o=n.distance,a=i.startAngle,r=i.endAngle;r<a;)r+=2*Math.PI;for(;r<s;)s-=2*Math.PI;for(;s<a;)s+=2*Math.PI;var l=a<=s&&s<=r,h=o>=i.innerRadius&&o<=i.outerRadius;return l&&h}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t,e=this._chart.ctx,i=this._view,n=i.startAngle,s=i.endAngle,o="inner"===i.borderAlign?.33:0;e.save(),e.beginPath(),e.arc(i.x,i.y,Math.max(i.outerRadius-o,0),n,s),e.arc(i.x,i.y,i.innerRadius,s,n,!0),e.closePath(),e.fillStyle=i.backgroundColor,e.fill(),i.borderWidth&&("inner"===i.borderAlign?(e.beginPath(),t=o/i.outerRadius,e.arc(i.x,i.y,i.outerRadius,n-t,s+t),i.innerRadius>o?(t=o/i.innerRadius,e.arc(i.x,i.y,i.innerRadius-o,s+t,n-t,!0)):e.arc(i.x,i.y,o,s+Math.PI/2,n-Math.PI/2),e.closePath(),e.clip(),e.beginPath(),e.arc(i.x,i.y,i.outerRadius,n,s),e.arc(i.x,i.y,i.innerRadius,s,n,!0),e.closePath(),e.lineWidth=2*i.borderWidth,e.lineJoin="round"):(e.lineWidth=i.borderWidth,e.lineJoin="bevel"),e.strokeStyle=i.borderColor,e.stroke()),e.restore()}}),St=ct.valueOrDefault,Tt=rt.global.defaultColor;rt._set("global",{elements:{line:{tension:.4,backgroundColor:Tt,borderWidth:3,borderColor:Tt,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var Mt=gt.extend({draw:function(){var t,e,i,n,s=this._view,o=this._chart.ctx,a=s.spanGaps,r=this._children.slice(),l=rt.global,h=l.elements.line,c=-1;for(this._loop&&r.length&&r.push(r[0]),o.save(),o.lineCap=s.borderCapStyle||h.borderCapStyle,o.setLineDash&&o.setLineDash(s.borderDash||h.borderDash),o.lineDashOffset=St(s.borderDashOffset,h.borderDashOffset),o.lineJoin=s.borderJoinStyle||h.borderJoinStyle,o.lineWidth=St(s.borderWidth,h.borderWidth),o.strokeStyle=s.borderColor||l.defaultColor,o.beginPath(),c=-1,t=0;t<r.length;++t)e=r[t],i=ct.previousItem(r,t),n=e._view,0===t?n.skip||(o.moveTo(n.x,n.y),c=t):(i=-1===c?i:r[c],n.skip||(c!==t-1&&!a||-1===c?o.moveTo(n.x,n.y):ct.canvas.lineTo(o,i._view,e._view),c=t));o.stroke(),o.restore()}}),Pt=ct.valueOrDefault,Dt=rt.global.defaultColor;function It(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}rt._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:Dt,borderColor:Dt,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var At=gt.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:It,inXRange:It,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._chart.ctx,n=e.pointStyle,s=e.rotation,o=e.radius,a=e.x,r=e.y,l=rt.global,h=l.defaultColor;e.skip||void 0!==t&&!ct.canvas._isPointInArea(e,t)||(i.strokeStyle=e.borderColor||h,i.lineWidth=Pt(e.borderWidth,l.elements.point.borderWidth),i.fillStyle=e.backgroundColor||h,ct.canvas.drawPoint(i,n,o,a,r,s))}}),Ot=rt.global.defaultColor;function zt(t){return t&&void 0!==t.width}function Ft(t){var e,i,n,s,o;return s=zt(t)?(o=t.width/2,e=t.x-o,i=t.x+o,n=Math.min(t.y,t.base),Math.max(t.y,t.base)):(o=t.height/2,e=Math.min(t.x,t.base),i=Math.max(t.x,t.base),n=t.y-o,t.y+o),{left:e,top:n,right:i,bottom:s}}function Lt(t,e,i){return t===e?i:t===i?e:t}function $t(t,e,i){var n,s,o,a,r=t.borderWidth,l=function(t){var e=t.borderSkipped,i={};return e&&(t.horizontal?t.base>t.x&&(e=Lt(e,"left","right")):t.base<t.y&&(e=Lt(e,"bottom","top")),i[e]=!0),i}(t);return ct.isObject(r)?(n=+r.top||0,s=+r.right||0,o=+r.bottom||0,a=+r.left||0):n=s=o=a=+r||0,{t:l.top||n<0?0:i<n?i:n,r:l.right||s<0?0:e<s?e:s,b:l.bottom||o<0?0:i<o?i:o,l:l.left||a<0?0:e<a?e:a}}function Ht(t,e,i){var n=null===e,s=null===i,o=!(!t||n&&s)&&Ft(t);return o&&(n||e>=o.left&&e<=o.right)&&(s||i>=o.top&&i<=o.bottom)}rt._set("global",{elements:{rectangle:{backgroundColor:Ot,borderColor:Ot,borderSkipped:"bottom",borderWidth:0}}});var Et=gt.extend({draw:function(){var t=this._chart.ctx,e=this._view,i=function(t){var e=Ft(t),i=e.right-e.left,n=e.bottom-e.top,s=$t(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n},inner:{x:e.left+s.l,y:e.top+s.t,w:i-s.l-s.r,h:n-s.t-s.b}}}(e),n=i.outer,s=i.inner;t.fillStyle=e.backgroundColor,t.fillRect(n.x,n.y,n.w,n.h),n.w===s.w&&n.h===s.h||(t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip(),t.fillStyle=e.borderColor,t.rect(s.x,s.y,s.w,s.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return Ht(this._view,t,e)},inLabelRange:function(t,e){var i=this._view;return zt(i)?Ht(i,t,null):Ht(i,null,e)},inXRange:function(t){return Ht(this._view,t,null)},inYRange:function(t){return Ht(this._view,null,t)},getCenterPoint:function(){var t,e,i=this._view;return e=zt(i)?(t=i.x,(i.y+i.base)/2):(t=(i.x+i.base)/2,i.y),{x:t,y:e}},getArea:function(){var t=this._view;return zt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),Wt={},Nt=Ct,Rt=Mt,Bt=At,jt=Et;Wt.Arc=Nt,Wt.Line=Rt,Wt.Point=Bt,Wt.Rectangle=jt;var Vt=ct.options.resolve;rt._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}});var qt=kt.extend({dataElementType:Wt.Rectangle,initialize:function(){var t;kt.prototype.initialize.apply(this,arguments),(t=this.getMeta()).stack=this.getDataset().stack,t.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,s=n.getMeta(),o=n.getDataset(),a=n._resolveElementOptions(t,e);t._xScale=n.getScaleForId(s.xAxisID),t._yScale=n.getScaleForId(s.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderSkipped:a.borderSkipped,borderWidth:a.borderWidth,datasetLabel:o.label,label:n.chart.data.labels[e]},n._updateElementGeometry(t,e,i),t.pivot()},_updateElementGeometry:function(t,e,i){var n=this,s=t._model,o=n._getValueScale(),a=o.getBasePixel(),r=o.isHorizontal(),l=n._ruler||n.getRuler(),h=n.calculateBarValuePixels(n.index,e),c=n.calculateBarIndexPixels(n.index,e,l);s.horizontal=r,s.base=i?a:h.base,s.x=r?i?a:h.head:c.center,s.y=r?c.center:i?a:h.head,s.height=r?c.size:void 0,s.width=r?void 0:c.size},_getStacks:function(t){var e,i,n=this.chart,s=this._getIndexScale().options.stacked,o=void 0===t?n.data.datasets.length:t+1,a=[];for(e=0;e<o;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===s||!0===s&&-1===a.indexOf(i.stack)||void 0===s&&(void 0===i.stack||-1===a.indexOf(i.stack)))&&a.push(i.stack);return a},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this._getIndexScale(),n=this.getStackCount(),s=this.index,o=i.isHorizontal(),a=o?i.left:i.top,r=a+(o?i.width:i.height),l=[];for(t=0,e=this.getMeta().data.length;t<e;++t)l.push(i.getPixelForValue(null,t,s));return{min:ct.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,s,o,a=t.isHorizontal()?t.width:t.height,r=t.getTicks();for(s=1,o=e.length;s<o;++s)a=Math.min(a,Math.abs(e[s]-e[s-1]));for(s=0,o=r.length;s<o;++s)n=t.getPixelForTick(s),a=0<s?Math.min(a,n-i):a,i=n;return a}(i,l):-1,pixels:l,start:a,end:r,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,s,o,a,r,l=this.chart,h=this.getMeta(),c=this._getValueScale(),d=c.isHorizontal(),u=l.data.datasets,p=+c.getRightValue(u[t].data[e]),f=c.options.minBarLength,g=c.options.stacked,m=h.stack,v=0;if(g||void 0===g&&void 0!==m)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===m&&n.controller._getValueScaleId()===c.id&&l.isDatasetVisible(i)&&(s=+c.getRightValue(u[i].data[e]),(p<0&&s<0||0<=p&&0<s)&&(v+=s));return o=c.getPixelForValue(v),r=(a=c.getPixelForValue(v+p))-o,void 0!==f&&Math.abs(r)<f&&(r=f,a=0<=p&&!d||p<0&&d?o-f:o+f),{size:r,base:o,head:a,center:a+r/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale.options,s="flex"===n.barThickness?function(t,e,i){var n,s=e.pixels,o=s[t],a=0<t?s[t-1]:null,r=t<s.length-1?s[t+1]:null,l=i.categoryPercentage;return null===a&&(a=o-(null===r?e.end-e.start:r-o)),null===r&&(r=o+o-a),n=o-(o-Math.min(a,r))/2*l,{chunk:Math.abs(r-a)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):function(t,e,i){var n,s,o=i.barThickness,a=e.stackCount,r=e.pixels[t];return s=ct.isNullOrUndef(o)?(n=e.min*i.categoryPercentage,i.barPercentage):(n=o*a,1),{chunk:n/a,ratio:s,start:r-n/2}}(e,i,n),o=this.getStackIndex(t,this.getMeta().stack),a=s.start+s.chunk*o+s.chunk/2,r=Math.min(ct.valueOrDefault(n.maxBarThickness,1/0),s.chunk*s.ratio);return{base:a-r/2,head:a+r/2,center:a,size:r}},draw:function(){var t=this.chart,e=this._getValueScale(),i=this.getMeta().data,n=this.getDataset(),s=i.length,o=0;for(ct.canvas.clipArea(t.ctx,t.chartArea);o<s;++o)isNaN(e.getRightValue(n.data[o]))||i[o].draw();ct.canvas.unclipArea(t.ctx)},_resolveElementOptions:function(t,e){var i,n,s,o=this.chart,a=o.data.datasets[this.index],r=t.custom||{},l=o.options.elements.rectangle,h={},c={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},d=["backgroundColor","borderColor","borderSkipped","borderWidth"];for(i=0,n=d.length;i<n;++i)h[s=d[i]]=Vt([r[s],a[s],l[s]],c,e);return h}}),Yt=ct.valueOrDefault,Ut=ct.options.resolve;rt._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}});var Xt=kt.extend({dataElementType:Wt.Point,update:function(i){var n=this,t=n.getMeta().data;ct.each(t,function(t,e){n.updateElement(t,e,i)})},updateElement:function(t,e,i){var n=this,s=n.getMeta(),o=t.custom||{},a=n.getScaleForId(s.xAxisID),r=n.getScaleForId(s.yAxisID),l=n._resolveElementOptions(t,e),h=n.getDataset().data[e],c=n.index,d=i?a.getPixelForDecimal(.5):a.getPixelForValue("object"==typeof h?h:NaN,e,c),u=i?r.getBasePixel():r.getPixelForValue(h,e,c);t._xScale=a,t._yScale=r,t._options=l,t._datasetIndex=c,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:i?0:l.radius,skip:o.skip||isNaN(d)||isNaN(u),x:d,y:u},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Yt(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Yt(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Yt(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveElementOptions:function(t,e){var i,n,s,o=this.chart,a=o.data.datasets[this.index],r=t.custom||{},l=o.options.elements.point,h=a.data[e],c={},d={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},u=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(i=0,n=u.length;i<n;++i)c[s=u[i]]=Ut([r[s],a[s],l[s]],d,e);return c.radius=Ut([r.radius,h?h.r:void 0,a.radius,l.radius],d,e),c}}),Kt=ct.options.resolve,Gt=ct.valueOrDefault;rt._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,s=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),s[o]&&e.push(s[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(r){var l=r.data;return l.labels.length&&l.datasets.length?l.labels.map(function(t,e){var i=r.getDatasetMeta(0),n=l.datasets[0],s=i.data[e],o=s&&s.custom||{},a=r.options.elements.arc;return{text:t,fillStyle:Kt([o.backgroundColor,n.backgroundColor,a.backgroundColor],void 0,e),strokeStyle:Kt([o.borderColor,n.borderColor,a.borderColor],void 0,e),lineWidth:Kt([o.borderWidth,n.borderWidth,a.borderWidth],void 0,e),hidden:isNaN(n.data[e])||i.data[e].hidden,index:e}}):[]}},onClick:function(t,e){var i,n,s,o=e.index,a=this.chart;for(i=0,n=(a.data.datasets||[]).length;i<n;++i)(s=a.getDatasetMeta(i)).data[o]&&(s.data[o].hidden=!s.data[o].hidden);a.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return ct.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}});var Zt=kt.extend({dataElementType:Wt.Arc,linkScales:ct.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e,i,n=this,s=n.chart,o=s.chartArea,a=s.options,r=o.right-o.left,l=o.bottom-o.top,h=Math.min(r,l),c={x:0,y:0},d=n.getMeta(),u=d.data,p=a.cutoutPercentage,f=a.circumference,g=n._getRingWeight(n.index);if(f<2*Math.PI){var m=a.rotation%(2*Math.PI),v=(m+=2*Math.PI*(m>=Math.PI?-1:m<-Math.PI?1:0))+f,b=Math.cos(m),y=Math.sin(m),_=Math.cos(v),x=Math.sin(v),w=m<=0&&0<=v||m<=2*Math.PI&&2*Math.PI<=v,k=m<=.5*Math.PI&&.5*Math.PI<=v||m<=2.5*Math.PI&&2.5*Math.PI<=v,C=m<=-Math.PI&&-Math.PI<=v||m<=Math.PI&&Math.PI<=v,S=m<=.5*-Math.PI&&.5*-Math.PI<=v||m<=1.5*Math.PI&&1.5*Math.PI<=v,T=p/100,M=C?-1:Math.min(b*(b<0?1:T),_*(_<0?1:T)),P=S?-1:Math.min(y*(y<0?1:T),x*(x<0?1:T)),D=w?1:Math.max(b*(0<b?1:T),_*(0<_?1:T)),I=k?1:Math.max(y*(0<y?1:T),x*(0<x?1:T)),A=.5*(D-M),O=.5*(I-P);h=Math.min(r/A,l/O),c={x:-.5*(D+M),y:-.5*(I+P)}}for(e=0,i=u.length;e<i;++e)u[e]._options=n._resolveElementOptions(u[e],e);for(s.borderWidth=n.getMaxBorderWidth(),s.outerRadius=Math.max((h-s.borderWidth)/2,0),s.innerRadius=Math.max(p?s.outerRadius/100*p:0,0),s.radiusLength=(s.outerRadius-s.innerRadius)/(n._getVisibleDatasetWeightTotal()||1),s.offsetX=c.x*s.outerRadius,s.offsetY=c.y*s.outerRadius,d.total=n.calculateTotal(),n.outerRadius=s.outerRadius-s.radiusLength*n._getRingWeightOffset(n.index),n.innerRadius=Math.max(n.outerRadius-s.radiusLength*g,0),e=0,i=u.length;e<i;++e)n.updateElement(u[e],e,t)},updateElement:function(t,e,i){var n=this,s=n.chart,o=s.chartArea,a=s.options,r=a.animation,l=(o.left+o.right)/2,h=(o.top+o.bottom)/2,c=a.rotation,d=a.rotation,u=n.getDataset(),p=i&&r.animateRotate?0:t.hidden?0:n.calculateCircumference(u.data[e])*(a.circumference/(2*Math.PI)),f=i&&r.animateScale?0:n.innerRadius,g=i&&r.animateScale?0:n.outerRadius,m=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+s.offsetX,y:h+s.offsetY,startAngle:c,endAngle:d,circumference:p,outerRadius:g,innerRadius:f,label:ct.valueAtIndexOrDefault(u.label,e,s.data.labels[e])}});var v=t._model;i&&r.animateRotate||(v.startAngle=0===e?a.rotation:n.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var i,n=this.getDataset(),t=this.getMeta(),s=0;return ct.each(t.data,function(t,e){i=n.data[e],isNaN(i)||t.hidden||(s+=Math.abs(i))}),s},calculateCircumference:function(t){var e=this.getMeta().total;return 0<e&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,i,n,s,o,a,r,l,h=0,c=this.chart;if(!t)for(e=0,i=c.data.datasets.length;e<i;++e)if(c.isDatasetVisible(e)){t=(n=c.getDatasetMeta(e)).data,e!==this.index&&(o=n.controller);break}if(!t)return 0;for(e=0,i=t.length;e<i;++e)s=t[e],"inner"!==(a=o?o._resolveElementOptions(s,e):s._options).borderAlign&&(h=(h=h<(r=a.borderWidth)?r:h)<(l=a.hoverBorderWidth)?l:h);return h},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Gt(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Gt(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Gt(i.hoverBorderWidth,i.borderWidth)},_resolveElementOptions:function(t,e){var i,n,s,o=this.chart,a=this.getDataset(),r=t.custom||{},l=o.options.elements.arc,h={},c={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},d=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"];for(i=0,n=d.length;i<n;++i)h[s=d[i]]=Kt([r[s],a[s],l[s]],c,e);return h},_getRingWeightOffset:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e},_getRingWeight:function(t){return Math.max(Gt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});rt._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}});var Qt=qt.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Jt=ct.valueOrDefault,te=ct.options.resolve,ee=ct.canvas._isPointInArea;function ie(t,e){return Jt(t.showLine,e.showLines)}rt._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var ne=kt.extend({datasetElementType:Wt.Line,dataElementType:Wt.Point,update:function(t){var e,i,n=this,s=n.getMeta(),o=s.dataset,a=s.data||[],r=n.getScaleForId(s.yAxisID),l=n.getDataset(),h=ie(l,n.chart.options);for(h&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),o._scale=r,o._datasetIndex=n.index,o._children=a,o._model=n._resolveLineOptions(o),o.pivot()),e=0,i=a.length;e<i;++e)n.updateElement(a[e],e,t);for(h&&0!==o._model.tension&&n.updateBezierControlPoints(),e=0,i=a.length;e<i;++e)a[e].pivot()},updateElement:function(t,e,i){var n,s,o=this,a=o.getMeta(),r=t.custom||{},l=o.getDataset(),h=o.index,c=l.data[e],d=o.getScaleForId(a.yAxisID),u=o.getScaleForId(a.xAxisID),p=a.dataset._model,f=o._resolvePointOptions(t,e);n=u.getPixelForValue("object"==typeof c?c:NaN,e,h),s=i?d.getBasePixel():o.calculatePointY(c,e,h),t._xScale=u,t._yScale=d,t._options=f,t._datasetIndex=h,t._index=e,t._model={x:n,y:s,skip:r.skip||isNaN(n)||isNaN(s),radius:f.radius,pointStyle:f.pointStyle,rotation:f.rotation,backgroundColor:f.backgroundColor,borderColor:f.borderColor,borderWidth:f.borderWidth,tension:Jt(r.tension,p?p.tension:0),steppedLine:!!p&&p.steppedLine,hitRadius:f.hitRadius}},_resolvePointOptions:function(t,e){var i,n,s,o=this.chart,a=o.data.datasets[this.index],r=t.custom||{},l=o.options.elements.point,h={},c={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},d={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},u=Object.keys(d);for(i=0,n=u.length;i<n;++i)h[s=u[i]]=te([r[s],a[d[s]],a[s],l[s]],c,e);return h},_resolveLineOptions:function(t){var e,i,n,s=this.chart,o=s.data.datasets[this.index],a=t.custom||{},r=s.options,l=r.elements.line,h={},c=["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill","cubicInterpolationMode"];for(e=0,i=c.length;e<i;++e)h[n=c[e]]=te([a[n],o[n],l[n]]);return h.spanGaps=Jt(o.spanGaps,r.spanGaps),h.tension=Jt(o.lineTension,l.tension),h.steppedLine=te([a.steppedLine,o.steppedLine,l.stepped]),h},calculatePointY:function(t,e,i){var n,s,o,a=this.chart,r=this.getMeta(),l=this.getScaleForId(r.yAxisID),h=0,c=0;if(l.options.stacked){for(n=0;n<i;n++)if(s=a.data.datasets[n],"line"===(o=a.getDatasetMeta(n)).type&&o.yAxisID===l.id&&a.isDatasetVisible(n)){var d=Number(l.getRightValue(s.data[e]));d<0?c+=d||0:h+=d||0}var u=Number(l.getRightValue(t));return u<0?l.getPixelForValue(c+u):l.getPixelForValue(h+u)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,s=this.chart,o=this.getMeta(),a=o.dataset._model,r=s.chartArea,l=o.data||[];function h(t,e,i){return Math.max(Math.min(t,i),e)}if(a.spanGaps&&(l=l.filter(function(t){return!t._model.skip})),"monotone"===a.cubicInterpolationMode)ct.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)i=l[t]._model,n=ct.splineCurve(ct.previousItem(l,t)._model,i,ct.nextItem(l,t)._model,a.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(s.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)i=l[t]._model,ee(i,r)&&(0<t&&ee(l[t-1]._model,r)&&(i.controlPointPreviousX=h(i.controlPointPreviousX,r.left,r.right),i.controlPointPreviousY=h(i.controlPointPreviousY,r.top,r.bottom)),t<l.length-1&&ee(l[t+1]._model,r)&&(i.controlPointNextX=h(i.controlPointNextX,r.left,r.right),i.controlPointNextY=h(i.controlPointNextY,r.top,r.bottom)))},draw:function(){var t,e=this.chart,i=this.getMeta(),n=i.data||[],s=e.chartArea,o=n.length,a=0;for(ie(this.getDataset(),e.options)&&(t=(i.dataset._model.borderWidth||0)/2,ct.canvas.clipArea(e.ctx,{left:s.left,right:s.right,top:s.top-t,bottom:s.bottom+t}),i.dataset.draw(),ct.canvas.unclipArea(e.ctx));a<o;++a)n[a].draw(s)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Jt(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=Jt(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=Jt(i.hoverBorderWidth,i.borderWidth),e.radius=Jt(i.hoverRadius,i.radius)}}),se=ct.options.resolve;rt._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,s=i.labels;if(n.length)for(var o=0;o<n[0].data.length;++o)e.push('<li><span style="background-color:'+n[0].backgroundColor[o]+'"></span>'),s[o]&&e.push(s[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(a){var r=a.data;return r.labels.length&&r.datasets.length?r.labels.map(function(t,e){var i=a.getDatasetMeta(0),n=r.datasets[0],s=i.data[e].custom||{},o=a.options.elements.arc;return{text:t,fillStyle:se([s.backgroundColor,n.backgroundColor,o.backgroundColor],void 0,e),strokeStyle:se([s.borderColor,n.borderColor,o.borderColor],void 0,e),lineWidth:se([s.borderWidth,n.borderWidth,o.borderWidth],void 0,e),hidden:isNaN(n.data[e])||i.data[e].hidden,index:e}}):[]}},onClick:function(t,e){var i,n,s,o=e.index,a=this.chart;for(i=0,n=(a.data.datasets||[]).length;i<n;++i)(s=a.getDatasetMeta(i)).data[o].hidden=!s.data[o].hidden;a.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var oe=kt.extend({dataElementType:Wt.Arc,linkScales:ct.noop,update:function(t){var e,i,n,s=this,o=s.getDataset(),a=s.getMeta(),r=s.chart.options.startAngle||0,l=s._starts=[],h=s._angles=[],c=a.data;for(s._updateRadius(),a.count=s.countVisibleElements(),e=0,i=o.data.length;e<i;e++)l[e]=r,n=s._computeAngle(e),r+=h[e]=n;for(e=0,i=c.length;e<i;++e)c[e]._options=s._resolveElementOptions(c[e],e),s.updateElement(c[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,s=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max(s/2,0),e.innerRadius=Math.max(n.cutoutPercentage?e.outerRadius/100*n.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var n=this,s=n.chart,o=n.getDataset(),a=s.options,r=a.animation,l=s.scale,h=s.data.labels,c=l.xCenter,d=l.yCenter,u=a.startAngle,p=t.hidden?0:l.getDistanceFromCenterForValue(o.data[e]),f=n._starts[e],g=f+(t.hidden?0:n._angles[e]),m=r.animateScale?0:l.getDistanceFromCenterForValue(o.data[e]),v=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:c,y:d,innerRadius:0,outerRadius:i?m:p,startAngle:i&&r.animateRotate?u:f,endAngle:i&&r.animateRotate?u:g,label:ct.valueAtIndexOrDefault(h,e,h[e])}}),t.pivot()},countVisibleElements:function(){var i=this.getDataset(),t=this.getMeta(),n=0;return ct.each(t.data,function(t,e){isNaN(i.data[e])||t.hidden||n++}),n},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor,s=ct.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=s(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=s(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=s(i.hoverBorderWidth,i.borderWidth)},_resolveElementOptions:function(t,e){var i,n,s,o=this.chart,a=this.getDataset(),r=t.custom||{},l=o.options.elements.arc,h={},c={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},d=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"];for(i=0,n=d.length;i<n;++i)h[s=d[i]]=se([r[s],a[s],l[s]],c,e);return h},_computeAngle:function(t){var e=this,i=this.getMeta().count,n=e.getDataset(),s=e.getMeta();if(isNaN(n.data[t])||s.data[t].hidden)return 0;var o={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return se([e.chart.options.elements.arc.angle,2*Math.PI/i],o,t)}});rt._set("pie",ct.clone(rt.doughnut)),rt._set("pie",{cutoutPercentage:0});var ae=Zt,re=ct.valueOrDefault,le=ct.options.resolve;rt._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}});var he=kt.extend({datasetElementType:Wt.Line,dataElementType:Wt.Point,linkScales:ct.noop,update:function(t){var e,i,n=this,s=n.getMeta(),o=s.dataset,a=s.data||[],r=n.chart.scale,l=n.getDataset();for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),o._scale=r,o._datasetIndex=n.index,o._children=a,o._loop=!0,o._model=n._resolveLineOptions(o),o.pivot(),e=0,i=a.length;e<i;++e)n.updateElement(a[e],e,t);for(n.updateBezierControlPoints(),e=0,i=a.length;e<i;++e)a[e].pivot()},updateElement:function(t,e,i){var n=this,s=t.custom||{},o=n.getDataset(),a=n.chart.scale,r=a.getPointPositionForValue(e,o.data[e]),l=n._resolvePointOptions(t,e),h=n.getMeta().dataset._model,c=i?a.xCenter:r.x,d=i?a.yCenter:r.y;t._scale=a,t._options=l,t._datasetIndex=n.index,t._index=e,t._model={x:c,y:d,skip:s.skip||isNaN(c)||isNaN(d),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:re(s.tension,h?h.tension:0),hitRadius:l.hitRadius}},_resolvePointOptions:function(t,e){var i,n,s,o=this.chart,a=o.data.datasets[this.index],r=t.custom||{},l=o.options.elements.point,h={},c={chart:o,dataIndex:e,dataset:a,datasetIndex:this.index},d={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},u=Object.keys(d);for(i=0,n=u.length;i<n;++i)h[s=u[i]]=le([r[s],a[d[s]],a[s],l[s]],c,e);return h},_resolveLineOptions:function(t){var e,i,n,s=this.chart,o=s.data.datasets[this.index],a=t.custom||{},r=s.options.elements.line,l={},h=["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"];for(e=0,i=h.length;e<i;++e)l[n=h[e]]=le([a[n],o[n],r[n]]);return l.tension=re(o.lineTension,r.tension),l},updateBezierControlPoints:function(){var t,e,i,n,s=this.getMeta(),o=this.chart.chartArea,a=s.data||[];function r(t,e,i){return Math.max(Math.min(t,i),e)}for(t=0,e=a.length;t<e;++t)i=a[t]._model,n=ct.splineCurve(ct.previousItem(a,t,!0)._model,i,ct.nextItem(a,t,!0)._model,i.tension),i.controlPointPreviousX=r(n.previous.x,o.left,o.right),i.controlPointPreviousY=r(n.previous.y,o.top,o.bottom),i.controlPointNextX=r(n.next.x,o.left,o.right),i.controlPointNextY=r(n.next.y,o.top,o.bottom)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=re(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=re(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=re(i.hoverBorderWidth,i.borderWidth),e.radius=re(i.hoverRadius,i.radius)}});rt._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}});var ce={bar:qt,bubble:Xt,doughnut:Zt,horizontalBar:Qt,line:ne,polarArea:oe,pie:ae,radar:he,scatter:ne};function de(t,e){return t.native?{x:t.x,y:t.y}:ct.getRelativePosition(t,e)}function ue(t,e){var i,n,s,o,a;for(n=0,o=t.data.datasets.length;n<o;++n)if(t.isDatasetVisible(n))for(s=0,a=(i=t.getDatasetMeta(n)).data.length;s<a;++s){var r=i.data[s];r._view.skip||e(r)}}function pe(t,e){var i=[];return ue(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function fe(t,n,s,o){var a=Number.POSITIVE_INFINITY,r=[];return ue(t,function(t){if(!s||t.inRange(n.x,n.y)){var e=t.getCenterPoint(),i=o(n,e);i<a?(r=[t],a=i):i===a&&r.push(t)}}),r}function ge(t){var s=-1!==t.indexOf("x"),o=-1!==t.indexOf("y");return function(t,e){var i=s?Math.abs(t.x-e.x):0,n=o?Math.abs(t.y-e.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(n,2))}}function me(n,t,e){var i=de(t,n);e.axis=e.axis||"x";var s=ge(e.axis),o=e.intersect?pe(n,i):fe(n,i,!1,s),a=[];return o.length?(n.data.datasets.forEach(function(t,e){if(n.isDatasetVisible(e)){var i=n.getDatasetMeta(e).data[o[0]._index];i&&!i._view.skip&&a.push(i)}}),a):[]}var ve={modes:{single:function(t,e){var i=de(e,t),n=[];return ue(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:me,index:me,dataset:function(t,e,i){var n=de(e,t);i.axis=i.axis||"xy";var s=ge(i.axis),o=i.intersect?pe(t,n):fe(t,n,!1,s);return 0<o.length&&(o=t.getDatasetMeta(o[0]._datasetIndex).data),o},"x-axis":function(t,e){return me(t,e,{intersect:!1})},point:function(t,e){return pe(t,de(e,t))},nearest:function(t,e,i){var n=de(e,t);i.axis=i.axis||"xy";var s=ge(i.axis);return fe(t,n,i.intersect,s)},x:function(t,e,i){var n=de(e,t),s=[],o=!1;return ue(t,function(t){t.inXRange(n.x)&&s.push(t),t.inRange(n.x,n.y)&&(o=!0)}),i.intersect&&!o&&(s=[]),s},y:function(t,e,i){var n=de(e,t),s=[],o=!1;return ue(t,function(t){t.inYRange(n.y)&&s.push(t),t.inRange(n.x,n.y)&&(o=!0)}),i.intersect&&!o&&(s=[]),s}}};function be(t,e){return ct.where(t,function(t){return t.position===e})}function ye(t,s){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,e){var i=s?e:t,n=s?t:e;return i.weight===n.weight?i._tmpIndex_-n._tmpIndex_:i.weight-n.weight}),t.forEach(function(t){delete t._tmpIndex_})}function _e(t,e){ct.each(t,function(t){e[t.position]+=t.isHorizontal()?t.height:t.width})}rt._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var xe={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,s=["fullWidth","position","weight"],o=s.length,a=0;a<o;++a)n=s[a],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(e,i,t){if(e){var n=e.options.layout||{},s=ct.options.toPadding(n.padding),o=s.left,a=s.right,r=s.top,l=s.bottom,h=be(e.boxes,"left"),c=be(e.boxes,"right"),d=be(e.boxes,"top"),u=be(e.boxes,"bottom"),p=be(e.boxes,"chartArea");ye(h,!0),ye(c,!1),ye(d,!0),ye(u,!1);var f,g=h.concat(c),m=d.concat(u),v=g.concat(m),b=i-o-a,y=t-r-l,_=(i-b/2)/g.length,x=b,w=y,k={top:r,left:o,bottom:l,right:a},C=[];ct.each(v,function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?b:x,y/2),w-=e.height):(e=t.update(_,w),x-=e.width),C.push({horizontal:i,width:e.width,box:t})}),f=function(t){var i=0,n=0,s=0,o=0;return ct.each(t,function(t){if(t.getPadding){var e=t.getPadding();i=Math.max(i,e.top),n=Math.max(n,e.left),s=Math.max(s,e.bottom),o=Math.max(o,e.right)}}),{top:i,left:n,bottom:s,right:o}}(v),ct.each(g,A),_e(g,k),ct.each(m,A),_e(m,k),ct.each(g,function(e){var t=ct.findNextWhere(C,function(t){return t.box===e}),i={left:0,right:0,top:k.top,bottom:k.bottom};t&&e.update(t.width,w,i)}),_e(v,k={top:r,left:o,bottom:l,right:a});var S=Math.max(f.left-k.left,0);k.left+=S,k.right+=Math.max(f.right-k.right,0);var T=Math.max(f.top-k.top,0);k.top+=T,k.bottom+=Math.max(f.bottom-k.bottom,0);var M=t-k.top-k.bottom,P=i-k.left-k.right;P===x&&M===w||(ct.each(g,function(t){t.height=M}),ct.each(m,function(t){t.fullWidth||(t.width=P)}),w=M,x=P);var D=o+S,I=r+T;ct.each(h.concat(d),O),D+=x,I+=w,ct.each(c,O),ct.each(u,O),e.chartArea={left:k.left,top:k.top,right:k.left+x,bottom:k.top+w},ct.each(p,function(t){t.left=e.chartArea.left,t.top=e.chartArea.top,t.right=e.chartArea.right,t.bottom=e.chartArea.bottom,t.update(x,w)})}function A(e){var t=ct.findNextWhere(C,function(t){return t.box===e});if(t)if(t.horizontal){var i={left:Math.max(k.left,f.left),right:Math.max(k.right,f.right),top:0,bottom:0};e.update(e.fullWidth?b:x,y/2,i)}else e.update(t.width,w)}function O(t){t.isHorizontal()?(t.left=t.fullWidth?o:k.left,t.right=t.fullWidth?i-a:k.left+x,t.top=I,t.bottom=I+t.height,I=t.bottom):(t.left=D,t.right=D+t.width,t.top=k.top,t.bottom=k.top+w,D=t.right)}}};var we,ke=(we=Object.freeze({default:"/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"}))&&we.default||we,Ce="$chartjs",Se="chartjs-",Te=Se+"size-monitor",Me=Se+"render-monitor",Pe=Se+"render-animation",De=["animationstart","webkitAnimationStart"],Ie={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function Ae(t,e){var i=ct.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var Oe=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function ze(t,e,i){t.addEventListener(e,i,Oe)}function Fe(t,e,i){t.removeEventListener(e,i,Oe)}function Le(t,e,i,n,s){return{type:t,chart:e,native:s||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function $e(t){var e=document.createElement("div");return e.className=t||"",e}function He(i,n,s){var o=i[Ce]||(i[Ce]={}),e=o.resizer=function(t){var e=$e(Te),i=$e(Te+"-expand"),n=$e(Te+"-shrink");function s(){e._reset(),t()}return i.appendChild($e()),n.appendChild($e()),e.appendChild(i),e.appendChild(n),e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,n.scrollLeft=1e6,n.scrollTop=1e6},ze(i,"scroll",s.bind(i,"expand")),ze(n,"scroll",s.bind(n,"shrink")),e}(function(t,e){var i=!1,n=[];return function(){n=Array.prototype.slice.call(arguments),e=e||this,i||(i=!0,ct.requestAnimFrame.call(window,function(){i=!1,t.apply(e,n)}))}}(function(){if(o.resizer){var t=s.options.maintainAspectRatio&&i.parentNode,e=t?t.clientWidth:0;n(Le("resize",s)),t&&t.clientWidth<e&&s.canvas&&n(Le("resize",s))}}));!function(e,i){var t=e[Ce]||(e[Ce]={}),n=t.renderProxy=function(t){t.animationName===Pe&&i()};ct.each(De,function(t){ze(e,t,n)}),t.reflow=!!e.offsetParent,e.classList.add(Me)}(i,function(){if(o.resizer){var t=i.parentNode;t&&t!==e.parentNode&&t.insertBefore(e,t.firstChild),e._reset()}})}function Ee(t){var e=t[Ce]||{},i=e.resizer;delete e.resizer,function(e){var t=e[Ce]||{},i=t.renderProxy;i&&(ct.each(De,function(t){Fe(e,t,i)}),delete t.renderProxy),e.classList.remove(Me)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}var We={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(){this._loaded||(this._loaded=!0,this.disableCSSInjection||function(t,e){var i=t._style||document.createElement("style");t._style||(e="/* Chart.js */\n"+e,(t._style=i).setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))}(this,ke))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return this._ensureLoaded(),i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),s=t.getAttribute("width");if(t[Ce]={initial:{height:n,width:s,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===s||""===s){var o=Ae(t,"width");void 0!==o&&(t.width=o)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var a=Ae(t,"height");void 0!==o&&(t.height=a)}}(t,e),i):null},releaseContext:function(t){var i=t.canvas;if(i[Ce]){var n=i[Ce].initial;["height","width"].forEach(function(t){var e=n[t];ct.isNullOrUndef(e)?i.removeAttribute(t):i.setAttribute(t,e)}),ct.each(n.style||{},function(t,e){i.style[e]=t}),i.width=i.width,delete i[Ce]}},addEventListener:function(e,t,i){var n=e.canvas;if("resize"!==t){var s=i[Ce]||(i[Ce]={});ze(n,t,(s.proxies||(s.proxies={}))[e.id+"_"+t]=function(t){i(function(t,e){var i=Ie[t.type]||t.type,n=ct.getRelativePosition(t,e);return Le(i,e,n.x,n.y,t)}(t,e))})}else He(n,i,e)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var s=((i[Ce]||{}).proxies||{})[t.id+"_"+e];s&&Fe(n,e,s)}else Ee(n)}};ct.addEvent=ze,ct.removeEvent=Fe;var Ne=We._enabled?We:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Re=ct.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Ne);rt._set("global",{plugins:{}});var Be={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var i=this._plugins;[].concat(t).forEach(function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,s,o,a,r,l=this.descriptors(t),h=l.length;for(n=0;n<h;++n)if("function"==typeof(r=(o=(s=l[n]).plugin)[e])&&((a=[t].concat(i||[])).push(s.options),!1===r.apply(o,a)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],s=[],i=t&&t.config||{},o=i.options&&i.options.plugins||{};return this._plugins.concat(i.plugins||[]).forEach(function(t){if(-1===n.indexOf(t)){var e=t.id,i=o[e];!1!==i&&(!0===i&&(i=ct.clone(rt.global.plugins[e])),n.push(t),s.push({plugin:t,options:i||{}}))}}),e.descriptors=s,e.id=this._cacheId,s},_invalidate:function(t){delete t.$plugins}},je={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=ct.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?ct.merge({},[rt.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=ct.extend(this.defaults[t],e))},addScalesToLayout:function(e){ct.each(e.scales,function(t){t.fullWidth=t.options.fullWidth,t.position=t.options.position,t.weight=t.options.weight,xe.addBox(e,t)})}},Ve=ct.valueOrDefault;rt._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:ct.noop,title:function(t,e){var i="",n=e.labels,s=n?n.length:0;if(0<t.length){var o=t[0];o.label?i=o.label:o.xLabel?i=o.xLabel:0<s&&o.index<s&&(i=n[o.index])}return i},afterTitle:ct.noop,beforeBody:ct.noop,beforeLabel:ct.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),ct.isNullOrUndef(t.value)?i+=t.yLabel:i+=t.value,i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:ct.noop,afterBody:ct.noop,beforeFooter:ct.noop,footer:ct.noop,afterFooter:ct.noop}}});var qe={average:function(t){if(!t.length)return!1;var e,i,n=0,s=0,o=0;for(e=0,i=t.length;e<i;++e){var a=t[e];if(a&&a.hasValue()){var r=a.tooltipPosition();n+=r.x,s+=r.y,++o}}return{x:n/o,y:s/o}},nearest:function(t,e){var i,n,s,o=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i];if(l&&l.hasValue()){var h=l.getCenterPoint(),c=ct.distanceBetweenPoints(e,h);c<r&&(r=c,s=l)}}if(s){var d=s.tooltipPosition();o=d.x,a=d.y}return{x:o,y:a}}};function Ye(t,e){return e&&(ct.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ue(t){return("string"==typeof t||t instanceof String)&&-1<t.indexOf("\n")?t.split("\n"):t}function Xe(t){var e=rt.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:Ve(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:Ve(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:Ve(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:Ve(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:Ve(t.titleFontStyle,e.defaultFontStyle),titleFontSize:Ve(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:Ve(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:Ve(t.footerFontStyle,e.defaultFontStyle),footerFontSize:Ve(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function Ke(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function Ge(t){return Ye([],Ue(t))}var Ze=gt.extend({initialize:function(){this._model=Xe(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),n=t.afterTitle.apply(this,arguments),s=[];return s=Ye(s=Ye(s=Ye(s,Ue(e)),Ue(i)),Ue(n))},getBeforeBody:function(){return Ge(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,i){var n=this,s=n._options.callbacks,o=[];return ct.each(t,function(t){var e={before:[],lines:[],after:[]};Ye(e.before,Ue(s.beforeLabel.call(n,t,i))),Ye(e.lines,s.label.call(n,t,i)),Ye(e.after,Ue(s.afterLabel.call(n,t,i))),o.push(e)}),o},getAfterBody:function(){return Ge(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),n=t.afterFooter.apply(this,arguments),s=[];return s=Ye(s=Ye(s=Ye(s,Ue(e)),Ue(i)),Ue(n))},update:function(t){var e,i,n,s,o,a,r,l,h,c,d=this,u=d._options,p=d._model,f=d._model=Xe(u),g=d._active,m=d._data,v={xAlign:p.xAlign,yAlign:p.yAlign},b={x:p.x,y:p.y},y={width:p.width,height:p.height},_={x:p.caretX,y:p.caretY};if(g.length){f.opacity=1;var x=[],w=[];_=qe[u.position].call(d,g,d._eventPosition);var k=[];for(e=0,i=g.length;e<i;++e)k.push((n=g[e],c=h=l=o=s=void 0,s=n._xScale,o=n._yScale||n._scale,a=n._index,r=n._datasetIndex,l=n._chart.getDatasetMeta(r).controller,h=l._getIndexScale(),c=l._getValueScale(),{xLabel:s?s.getLabelForIndex(a,r):"",yLabel:o?o.getLabelForIndex(a,r):"",label:h?""+h.getLabelForIndex(a,r):"",value:c?""+c.getLabelForIndex(a,r):"",index:a,datasetIndex:r,x:n._model.x,y:n._model.y}));u.filter&&(k=k.filter(function(t){return u.filter(t,m)})),u.itemSort&&(k=k.sort(function(t,e){return u.itemSort(t,e,m)})),ct.each(k,function(t){x.push(u.callbacks.labelColor.call(d,t,d._chart)),w.push(u.callbacks.labelTextColor.call(d,t,d._chart))}),f.title=d.getTitle(k,m),f.beforeBody=d.getBeforeBody(k,m),f.body=d.getBody(k,m),f.afterBody=d.getAfterBody(k,m),f.footer=d.getFooter(k,m),f.x=_.x,f.y=_.y,f.caretPadding=u.caretPadding,f.labelColors=x,f.labelTextColors=w,f.dataPoints=k,b=function(t,e,i,n){var s=t.x,o=t.y,a=t.caretSize,r=t.caretPadding,l=t.cornerRadius,h=i.xAlign,c=i.yAlign,d=a+r,u=l+r;return"right"===h?s-=e.width:"center"===h&&((s-=e.width/2)+e.width>n.width&&(s=n.width-e.width),s<0&&(s=0)),"top"===c?o+=d:o-="bottom"===c?e.height+d:e.height/2,"center"===c?"left"===h?s+=d:"right"===h&&(s-=d):"left"===h?s-=u:"right"===h&&(s+=u),{x:s,y:o}}(f,y=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,s=0,o=e.body,a=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);a+=e.beforeBody.length+e.afterBody.length;var r=e.title.length,l=e.footer.length,h=e.titleFontSize,c=e.bodyFontSize,d=e.footerFontSize;function u(t){s=Math.max(s,i.measureText(t).width+p)}n+=r*h,n+=r?(r-1)*e.titleSpacing:0,n+=r?e.titleMarginBottom:0,n+=a*c,n+=a?(a-1)*e.bodySpacing:0,n+=l?e.footerMarginTop:0,n+=l*d,n+=l?(l-1)*e.footerSpacing:0;var p=0;return i.font=ct.fontString(h,e._titleFontStyle,e._titleFontFamily),ct.each(e.title,u),i.font=ct.fontString(c,e._bodyFontStyle,e._bodyFontFamily),ct.each(e.beforeBody.concat(e.afterBody),u),p=e.displayColors?c+2:0,ct.each(o,function(t){ct.each(t.before,u),ct.each(t.lines,u),ct.each(t.after,u)}),p=0,i.font=ct.fontString(d,e._footerFontStyle,e._footerFontFamily),ct.each(e.footer,u),{width:s+=2*e.xPadding,height:n}}(this,f),v=function(t,e){var i,n,s,o,a,r=t._model,l=t._chart,h=t._chart.chartArea,c="center",d="center";r.y<e.height?d="top":r.y>l.height-e.height&&(d="bottom");var u=(h.left+h.right)/2,p=(h.top+h.bottom)/2;n="center"===d?(i=function(t){return t<=u},function(t){return u<t}):(i=function(t){return t<=e.width/2},function(t){return t>=l.width-e.width/2}),s=function(t){return t+e.width+r.caretSize+r.caretPadding>l.width},o=function(t){return t-e.width-r.caretSize-r.caretPadding<0},a=function(t){return t<=p?"top":"bottom"},i(r.x)?(c="left",s(r.x)&&(c="center",d=a(r.y))):n(r.x)&&(c="right",o(r.x)&&(c="center",d=a(r.y)));var f=t._options;return{xAlign:f.xAlign?f.xAlign:c,yAlign:f.yAlign?f.yAlign:d}}(this,y),d._chart)}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=b.x,f.y=b.y,f.width=y.width,f.height=y.height,f.caretX=_.x,f.caretY=_.y,d._model=f,t&&u.custom&&u.custom.call(d,f),d},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,s=this.getCaretPosition(t,e,n);i.lineTo(s.x1,s.y1),i.lineTo(s.x2,s.y2),i.lineTo(s.x3,s.y3)},getCaretPosition:function(t,e,i){var n,s,o,a,r,l,h=i.caretSize,c=i.cornerRadius,d=i.xAlign,u=i.yAlign,p=t.x,f=t.y,g=e.width,m=e.height;if("center"===u)r=f+m/2,l="left"===d?(s=(n=p)-h,o=n,a=r+h,r-h):(s=(n=p+g)+h,o=n,a=r-h,r+h);else if(o=(n="left"===d?(s=p+c+h)-h:"right"===d?(s=p+g-c-h)-h:(s=i.caretX)-h,s+h),"top"===u)r=(a=f)-h,l=a;else{r=(a=f+m)+h,l=a;var v=o;o=n,n=v}return{x1:n,x2:s,x3:o,y1:a,y2:r,y3:l}},drawTitle:function(t,e,i){var n=e.title;if(n.length){t.x=Ke(e,e._titleAlign),i.textAlign=e._titleAlign,i.textBaseline="top";var s,o,a=e.titleFontSize,r=e.titleSpacing;for(i.fillStyle=e.titleFontColor,i.font=ct.fontString(a,e._titleFontStyle,e._titleFontFamily),s=0,o=n.length;s<o;++s)i.fillText(n[s],t.x,t.y),t.y+=a+r,s+1===n.length&&(t.y+=e.titleMarginBottom-r)}},drawBody:function(i,n,s){var o,a=n.bodyFontSize,e=n.bodySpacing,t=n._bodyAlign,r=n.body,l=n.displayColors,h=n.labelColors,c=0,d=l?Ke(n,"left"):0;s.textAlign=t,s.textBaseline="top",s.font=ct.fontString(a,n._bodyFontStyle,n._bodyFontFamily),i.x=Ke(n,t);function u(t){s.fillText(t,i.x+c,i.y),i.y+=a+e}s.fillStyle=n.bodyFontColor,ct.each(n.beforeBody,u),c=l&&"right"!==t?"center"===t?a/2+1:a+2:0,ct.each(r,function(t,e){o=n.labelTextColors[e],s.fillStyle=o,ct.each(t.before,u),ct.each(t.lines,function(t){l&&(s.fillStyle=n.legendColorBackground,s.fillRect(d,i.y,a,a),s.lineWidth=1,s.strokeStyle=h[e].borderColor,s.strokeRect(d,i.y,a,a),s.fillStyle=h[e].backgroundColor,s.fillRect(d+1,i.y+1,a-2,a-2),s.fillStyle=o),u(t)}),ct.each(t.after,u)}),c=0,ct.each(n.afterBody,u),i.y-=e},drawFooter:function(e,i,n){var t=i.footer;t.length&&(e.x=Ke(i,i._footerAlign),e.y+=i.footerMarginTop,n.textAlign=i._footerAlign,n.textBaseline="top",n.fillStyle=i.footerFontColor,n.font=ct.fontString(i.footerFontSize,i._footerFontStyle,i._footerFontFamily),ct.each(t,function(t){n.fillText(t,e.x,e.y),e.y+=i.footerFontSize+i.footerSpacing}))},drawBackground:function(t,e,i,n){i.fillStyle=e.backgroundColor,i.strokeStyle=e.borderColor,i.lineWidth=e.borderWidth;var s=e.xAlign,o=e.yAlign,a=t.x,r=t.y,l=n.width,h=n.height,c=e.cornerRadius;i.beginPath(),i.moveTo(a+c,r),"top"===o&&this.drawCaret(t,n),i.lineTo(a+l-c,r),i.quadraticCurveTo(a+l,r,a+l,r+c),"center"===o&&"right"===s&&this.drawCaret(t,n),i.lineTo(a+l,r+h-c),i.quadraticCurveTo(a+l,r+h,a+l-c,r+h),"bottom"===o&&this.drawCaret(t,n),i.lineTo(a+c,r+h),i.quadraticCurveTo(a,r+h,a,r+h-c),"center"===o&&"left"===s&&this.drawCaret(t,n),i.lineTo(a,r+c),i.quadraticCurveTo(a,r,a+c,r),i.closePath(),i.fill(),0<e.borderWidth&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},s=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(t.save(),t.globalAlpha=s,this.drawBackground(n,e,t,i),n.y+=e.yPadding,this.drawTitle(n,e,t),this.drawBody(n,e,t),this.drawFooter(n,e,t),t.restore())}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!ct.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),Qe=qe,Je=Ze;Je.positioners=Qe;var ti=ct.valueOrDefault;function ei(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var s,o,a,r=i[t].length;for(e[t]||(e[t]=[]),s=0;s<r;++s)a=i[t][s],o=ti(a.type,"xAxes"===t?"category":"linear"),s>=e[t].length&&e[t].push({}),!e[t][s].type||a.type&&a.type!==e[t][s].type?ct.merge(e[t][s],[je.getScaleDefaults(o),a]):ct.merge(e[t][s],a)}else ct._merger(t,e,i,n)}})}function ii(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){var s=e[t]||{},o=i[t];"scales"===t?e[t]=ei(s,o):"scale"===t?e[t]=ct.merge(s,[je.getScaleDefaults(o.type),o]):ct._merger(t,e,i,n)}})}function ni(t){return"top"===t||"bottom"===t}rt._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});function si(t,e){return this.construct(t,e),this}ct.extend(si.prototype,{construct:function(t,e){var i=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=ii(rt.global,rt[t.type],t.options||{}),t}(e);var n=Re.acquireContext(t,e),s=n&&n.canvas,o=s&&s.height,a=s&&s.width;i.id=ct.uid(),i.ctx=n,i.canvas=s,i.config=e,i.width=a,i.height=o,i.aspectRatio=o?a/o:null,i.options=e.options,i._bufferedRender=!1,(i.chart=i).controller=i,si.instances[i.id]=i,Object.defineProperty(i,"data",{get:function(){return i.config.data},set:function(t){i.config.data=t}}),n&&s?(i.initialize(),i.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Be.notify(t,"beforeInit"),ct.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),Be.notify(t,"afterInit"),t},clear:function(){return ct.canvas.clear(this),this},stop:function(){return bt.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,s=i.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(ct.getMaximumWidth(n))),a=Math.max(0,Math.floor(s?o/s:ct.getMaximumHeight(n)));if((e.width!==o||e.height!==a)&&(n.width=e.width=o,n.height=e.height=a,n.style.width=o+"px",n.style.height=a+"px",ct.retinaScale(e,i.devicePixelRatio),!t)){var r={width:o,height:a};Be.notify(e,"resize",[r]),i.onResize&&i.onResize(e,r),e.stop(),e.update({duration:i.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;ct.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),ct.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var a=this,t=a.options,r=a.scales||{},e=[],l=Object.keys(r).reduce(function(t,e){return t[e]=!1,t},{});t.scales&&(e=e.concat((t.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(t.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),t.scale&&e.push({options:t.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),ct.each(e,function(t){var e=t.options,i=e.id,n=ti(e.type,t.dtype);ni(e.position)!==ni(t.dposition)&&(e.position=t.dposition),l[i]=!0;var s=null;if(i in r&&r[i].type===n)(s=r[i]).options=e,s.ctx=a.ctx,s.chart=a;else{var o=je.getScaleConstructor(n);if(!o)return;s=new o({id:i,type:n,options:e,ctx:a.ctx,chart:a}),r[s.id]=s}s.mergeTicksOptions(),t.isDefault&&(a.scale=s)}),ct.each(l,function(t,e){t||delete r[e]}),a.scales=r,je.addScalesToLayout(this)},buildOrUpdateControllers:function(){var o=this,a=[];return ct.each(o.data.datasets,function(t,e){var i=o.getDatasetMeta(e),n=t.type||o.config.type;if(i.type&&i.type!==n&&(o.destroyDatasetMeta(e),i=o.getDatasetMeta(e)),i.type=n,i.controller)i.controller.updateIndex(e),i.controller.linkScales();else{var s=ce[i.type];if(void 0===s)throw new Error('"'+i.type+'" is not a chart type.');i.controller=new s(o,e),a.push(i.controller)}},o),a},resetElements:function(){var i=this;ct.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.reset()},i)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var i=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),function(e){var t=e.options;ct.each(e.scales,function(t){xe.removeBox(e,t)}),t=ii(rt.global,rt[e.config.type],t),e.options=e.config.options=t,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=t.tooltips,e.tooltip.initialize()}(i),Be._invalidate(i),!1!==Be.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var e=i.buildOrUpdateControllers();ct.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()},i),i.updateLayout(),i.options.animation&&i.options.animation.duration&&ct.each(e,function(t){t.reset()}),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Be.notify(i,"afterUpdate"),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){!1!==Be.notify(this,"beforeLayout")&&(xe.update(this,this.width,this.height),Be.notify(this,"afterScaleUpdate"),Be.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==Be.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Be.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==Be.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),Be.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=e.options.animation,n=ti(t.duration,i&&i.duration),s=t.lazy;if(!1!==Be.notify(e,"beforeRender")){var o=function(t){Be.notify(e,"afterRender"),ct.callback(i&&i.onComplete,[t],e)};if(i&&n){var a=new vt({numSteps:n/16.66,easing:t.easing||i.easing,render:function(t,e){var i=ct.easing.effects[e.easing],n=e.currentStep,s=n/e.numSteps;t.draw(i(s),s,n)},onAnimationProgress:i.onProgress,onAnimationComplete:o});bt.addAnimation(e,a,n,s)}else e.draw(),o(new vt({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),ct.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==Be.notify(e,"beforeDraw",[t])&&(ct.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.drawDatasets(t),e._drawTooltip(t),Be.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==Be.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;0<=i;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);Be.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==Be.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),Be.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==Be.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),Be.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return ve.modes.single(this,t)},getElementsAtEvent:function(t){return ve.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return ve.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=ve.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return ve.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i=i||(e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null})},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var t,e,i=this,n=i.canvas;for(i.stop(),t=0,e=i.data.datasets.length;t<e;++t)i.destroyDatasetMeta(t);n&&(i.unbindEvents(),ct.canvas.clear(i),Re.releaseContext(i.ctx),i.canvas=null,i.ctx=null),Be.notify(i,"destroy"),delete si.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Je({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var e=this,i=e._listeners={},n=function(){e.eventHandler.apply(e,arguments)};ct.each(e.options.events,function(t){Re.addEventListener(e,t,n),i[t]=n}),e.options.responsive&&(n=function(){e.resize()},Re.addEventListener(e,"resize",n),i.resize=n)},unbindEvents:function(){var i=this,t=i._listeners;t&&(delete i._listeners,ct.each(t,function(t,e){Re.removeEventListener(i,e,t)}))},updateHoverStyle:function(t,e,i){var n,s,o,a=i?"setHoverStyle":"removeHoverStyle";for(s=0,o=t.length;s<o;++s)(n=t[s])&&this.getDatasetMeta(n._datasetIndex).controller[a](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==Be.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),Be.notify(e,"afterEvent",[t]);var s=e._bufferedRequest;return s?e.render(s):n&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},s=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,s.mode,s),ct.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,s.mode,!1),i.active.length&&s.mode&&i.updateHoverStyle(i.active,s.mode,!0),e=!ct.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),si.instances={};var oi=si;(si.Controller=si).types={},ct.configMerge=ii,ct.scaleMerge=ei;function ai(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function ri(t){this.options=t||{}}ct.extend(ri.prototype,{formats:ai,parse:ai,format:ai,add:ai,diff:ai,startOf:ai,endOf:ai,_create:function(t){return t}}),ri.override=function(t){ct.extend(ri.prototype,t)};var li={_date:ri},hi={formatters:{values:function(t){return ct.isArray(t)?t:""+t},linear:function(t,e,i){var n=3<i.length?i[2]-i[1]:i[1]-i[0];1<Math.abs(n)&&t!==Math.floor(t)&&(n=t-Math.floor(t));var s=ct.log10(Math.abs(n)),o="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var a=ct.log10(Math.abs(t));o=t.toExponential(Math.floor(a)-Math.floor(s))}else{var r=-1*Math.floor(s);r=Math.max(Math.min(r,20),0),o=t.toFixed(r)}else o="0";return o},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(ct.log10(t)));return 0===t?"0":1==n||2==n||5==n||0===e||e===i.length-1?t.toExponential():""}}},ci=ct.valueOrDefault,di=ct.valueAtIndexOrDefault;function ui(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function pi(t,e,i){return ct.isArray(e)?ct.longestText(t,i,e):t.measureText(e).width}rt._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:hi.formatters.values,minor:{},major:{}}});var fi=gt.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){ct.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,s,o,a,r,l,h=this;for(h.beforeUpdate(),h.maxWidth=t,h.maxHeight=e,h.margins=ct.extend({left:0,right:0,top:0,bottom:0},i),h._maxLabelLines=0,h.longestLabelWidth=0,h.longestTextCache=h.longestTextCache||{},h.beforeSetDimensions(),h.setDimensions(),h.afterSetDimensions(),h.beforeDataLimits(),h.determineDataLimits(),h.afterDataLimits(),h.beforeBuildTicks(),r=h.buildTicks()||[],r=h.afterBuildTicks(r)||r,h.beforeTickToLabelConversion(),o=h.convertTicksToLabels(r)||h.ticks,h.afterTickToLabelConversion(),n=0,s=(h.ticks=o).length;n<s;++n)a=o[n],(l=r[n])?l.label=a:r.push(l={label:a,major:!1});return h._ticks=r,h.beforeCalculateTickRotation(),h.calculateTickRotation(),h.afterCalculateTickRotation(),h.beforeFit(),h.fit(),h.afterFit(),h.afterUpdate(),h.minSize},afterUpdate:function(){ct.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){ct.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){ct.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){ct.callback(this.options.beforeDataLimits,[this])},determineDataLimits:ct.noop,afterDataLimits:function(){ct.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){ct.callback(this.options.beforeBuildTicks,[this])},buildTicks:ct.noop,afterBuildTicks:function(t){var e=this;return ct.isArray(t)&&t.length?ct.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=ct.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){ct.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){ct.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){ct.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,n=ui(t._ticks),s=ct.options._parseFont(i);e.font=s.string;var o=i.minRotation||0;if(n.length&&t.options.display&&t.isHorizontal())for(var a,r=ct.longestText(e,s.string,n,t.longestTextCache),l=r,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;h<l&&o<i.maxRotation;){var c=ct.toRadians(o);if(a=Math.cos(c),Math.sin(c)*r>t.maxHeight){o--;break}o++,l=a*r}t.labelRotation=o},afterCalculateTickRotation:function(){ct.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){ct.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=ui(t._ticks),n=t.options,s=n.ticks,o=n.scaleLabel,a=n.gridLines,r=t._isVisible(),l=n.position,h=t.isHorizontal(),c=ct.options._parseFont,d=c(s),u=n.gridLines.tickMarkLength;if(e.width=h?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:r&&a.drawTicks?u:0,e.height=h?r&&a.drawTicks?u:0:t.maxHeight,o.display&&r){var p=c(o),f=ct.options.toPadding(o.padding),g=p.lineHeight+f.height;h?e.height+=g:e.width+=g}if(s.display&&r){var m=ct.longestText(t.ctx,d.string,i,t.longestTextCache),v=ct.numberOfLabelLines(i),b=.5*d.size,y=t.options.ticks.padding;if(t._maxLabelLines=v,t.longestLabelWidth=m,h){var _=ct.toRadians(t.labelRotation),x=Math.cos(_),w=Math.sin(_)*m+d.lineHeight*v+b;e.height=Math.min(t.maxHeight,e.height+w+y),t.ctx.font=d.string;var k,C,S=pi(t.ctx,i[0],d.string),T=pi(t.ctx,i[i.length-1],d.string),M=t.getPixelForTick(0)-t.left,P=t.right-t.getPixelForTick(i.length-1);C=0!==t.labelRotation?(k="bottom"===l?x*S:x*b,"bottom"===l?x*b:x*T):(k=S/2,T/2),t.paddingLeft=Math.max(k-M,0)+3,t.paddingRight=Math.max(C-P,0)+3}else s.mirror?m=0:m+=y+b,e.width=Math.min(t.maxWidth,e.width+m),t.paddingTop=d.size/2,t.paddingBottom=d.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){ct.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(ct.isNullOrUndef(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:ct.noop,getPixelForValue:ct.noop,getValueForPixel:ct.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),s=n*t+e.paddingLeft;i&&(s+=n/2);var o=e.left+s;return o+=e.isFullWidth()?e.margins.left:0}var a=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(a/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,n=e.left+i;return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:0<t&&0<e?t:0},_autoSkip:function(t){var e,i,n=this,s=n.isHorizontal(),o=n.options.ticks.minor,a=t.length,r=!1,l=o.maxTicksLimit,h=n._tickSize()*(a-1),c=s?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.PaddingBottom),d=[];for(c<h&&(r=1+Math.floor(h/c)),l<a&&(r=Math.max(r,1+Math.floor(a/l))),e=0;e<a;e++)i=t[e],1<r&&0<e%r&&delete i.label,d.push(i);return d},_tickSize:function(){var t=this,e=t.isHorizontal(),i=t.options.ticks.minor,n=ct.toRadians(t.labelRotation),s=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),a=i.autoSkipPadding||0,r=t.longestLabelWidth+a||0,l=ct.options._parseFont(i),h=t._maxLabelLines*l.lineHeight+a||0;return e?r*o<h*s?r/s:h/o:h*o<r*s?h/s:r/o},_isVisible:function(){var t,e,i,n=this.chart,s=this.options.display;if("auto"!==s)return!!s;for(t=0,e=n.data.datasets.length;t<e;++t)if(n.isDatasetVisible(t)&&((i=n.getDatasetMeta(t)).xAxisID===this.id||i.yAxisID===this.id))return!0;return!1},draw:function(k){var C=this,S=C.options;if(C._isVisible()){var t,T,M,P=C.chart,a=C.ctx,e=rt.global.defaultFontColor,r=S.ticks.minor,i=S.ticks.major||r,D=S.gridLines,n=S.scaleLabel,I=S.position,A=0!==C.labelRotation,O=r.mirror,z=C.isHorizontal(),s=ct.options._parseFont,o=r.display&&r.autoSkip?C._autoSkip(C.getTicks()):C.getTicks(),l=ci(r.fontColor,e),h=s(r),F=h.lineHeight,c=ci(i.fontColor,e),d=s(i),L=r.padding,$=r.labelOffset,H=D.drawTicks?D.tickMarkLength:0,u=ci(n.fontColor,e),p=s(n),f=ct.options.toPadding(n.padding),E=ct.toRadians(C.labelRotation),W=[],N=D.drawBorder?di(D.lineWidth,0,0):0,R=ct._alignPixel;M="top"===I?(t=R(P,C.bottom,N),T=C.bottom-H,t-N/2):"bottom"===I?(t=R(P,C.top,N),T=t+N/2,C.top+H):"left"===I?(t=R(P,C.right,N),T=C.right-H,t-N/2):(t=R(P,C.left,N),T=t+N/2,C.left+H);if(ct.each(o,function(t,e){if(!ct.isNullOrUndef(t.label)){var i,n,s,o,a,r,l,h,c,d,u,p,f,g,m,v,b=t.label;o=e===C.zeroLineIndex&&S.offset===D.offsetGridLines?(i=D.zeroLineWidth,n=D.zeroLineColor,s=D.zeroLineBorderDash||[],D.zeroLineBorderDashOffset||0):(i=di(D.lineWidth,e),n=di(D.color,e),s=D.borderDash||[],D.borderDashOffset||0);var y=ct.isArray(b)?b.length:1,_=function(t,e,i){var n=t.getPixelForTick(e);return i&&(1===t.getTicks().length?n-=t.isHorizontal()?Math.max(n-t.left,t.right-n):Math.max(n-t.top,t.bottom-n):n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}(C,e,D.offsetGridLines);if(z){var x=H+L;_<C.left-1e-7&&(n="rgba(0,0,0,0)"),a=l=c=u=R(P,_,i),r=T,h=M,f=C.getPixelForTick(e)+$,g="top"===I?(d=R(P,k.top,N)+N/2,p=k.bottom,m=((A?1:.5)-y)*F,v=A?"left":"center",C.bottom-x):(d=k.top,p=R(P,k.bottom,N)-N/2,m=(A?0:.5)*F,v=A?"right":"center",C.top+x)}else{var w=(O?0:H)+L;_<C.top-1e-7&&(n="rgba(0,0,0,0)"),a=T,l=M,r=h=d=p=R(P,_,i),g=C.getPixelForTick(e)+$,m=(1-y)*F/2,f="left"===I?(c=R(P,k.left,N)+N/2,u=k.right,v=O?"left":"right",C.right-w):(c=k.left,u=R(P,k.right,N)-N/2,v=O?"right":"left",C.left+w)}W.push({tx1:a,ty1:r,tx2:l,ty2:h,x1:c,y1:d,x2:u,y2:p,labelX:f,labelY:g,glWidth:i,glColor:n,glBorderDash:s,glBorderDashOffset:o,rotation:-1*E,label:b,major:t.major,textOffset:m,textAlign:v})}}),ct.each(W,function(t){var e=t.glWidth,i=t.glColor;if(D.display&&e&&i&&(a.save(),a.lineWidth=e,a.strokeStyle=i,a.setLineDash&&(a.setLineDash(t.glBorderDash),a.lineDashOffset=t.glBorderDashOffset),a.beginPath(),D.drawTicks&&(a.moveTo(t.tx1,t.ty1),a.lineTo(t.tx2,t.ty2)),D.drawOnChartArea&&(a.moveTo(t.x1,t.y1),a.lineTo(t.x2,t.y2)),a.stroke(),a.restore()),r.display){a.save(),a.translate(t.labelX,t.labelY),a.rotate(t.rotation),a.font=t.major?d.string:h.string,a.fillStyle=t.major?c:l,a.textBaseline="middle",a.textAlign=t.textAlign;var n=t.label,s=t.textOffset;if(ct.isArray(n))for(var o=0;o<n.length;++o)a.fillText(""+n[o],0,s),s+=F;else a.fillText(n,0,s);a.restore()}}),n.display){var g,m,v=0,b=p.lineHeight/2;if(z)g=C.left+(C.right-C.left)/2,m="bottom"===I?C.bottom-b-f.bottom:C.top+b+f.top;else{var y="left"===I;g=y?C.left+b+f.top:C.right-b-f.top,m=C.top+(C.bottom-C.top)/2,v=y?-.5*Math.PI:.5*Math.PI}a.save(),a.translate(g,m),a.rotate(v),a.textAlign="center",a.textBaseline="middle",a.fillStyle=u,a.font=p.string,a.fillText(n.labelString,0,0),a.restore()}if(N){var _,x,w,B,j=N,V=di(D.lineWidth,o.length-1,0);z?(_=R(P,C.left,j)-j/2,x=R(P,C.right,V)+V/2,w=B=t):(w=R(P,C.top,j)-j/2,B=R(P,C.bottom,V)+V/2,_=x=t),a.lineWidth=N,a.strokeStyle=di(D.color,0),a.beginPath(),a.moveTo(_,w),a.lineTo(x,B),a.stroke()}}}}),gi=fi.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,n=i.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===i.id?i.getRightValue(n.data.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,n=this,s=n.options.offset,o=Math.max(n.maxIndex+1-n.minIndex-(s?0:1),1);if(null!=t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var a=n.getLabels().indexOf(t);e=-1!==a?a:e}if(n.isHorizontal()){var r=n.width/o,l=r*(e-n.minIndex);return s&&(l+=r/2),n.left+l}var h=n.height/o,c=h*(e-n.minIndex);return s&&(c+=h/2),n.top+c},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,n=Math.max(e._ticks.length-(i?0:1),1),s=e.isHorizontal(),o=(s?e.width:e.height)/n;return t-=s?e.left:e.top,i&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}}),mi={position:"bottom"};gi._defaults=mi;var vi=ct.noop,bi=ct.isNullOrUndef;var yi=fi.extend({getRightValue:function(t){return"string"==typeof t?+t:fi.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=ct.sign(t.min),n=ct.sign(t.max);i<0&&n<0?t.max=0:0<i&&0<n&&(t.min=0)}var s=void 0!==e.min||void 0!==e.suggestedMin,o=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),s!=o&&t.min>=t.max&&(s?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,i=e.stepSize,n=e.maxTicksLimit;return i?t=Math.ceil(this.max/i)-Math.floor(this.min/i)+1:(t=this._computeTickLimit(),n=n||11),n&&(t=Math.min(n,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:vi,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:ct.valueOrDefault(e.fixedStepSize,e.stepSize)},s=t.ticks=function(t,e){var i,n,s,o,a=[],r=t.stepSize,l=r||1,h=t.maxTicks-1,c=t.min,d=t.max,u=t.precision,p=e.min,f=e.max,g=ct.niceNum((f-p)/h/l)*l;if(g<1e-14&&bi(c)&&bi(d))return[p,f];h<(o=Math.ceil(f/g)-Math.floor(p/g))&&(g=ct.niceNum(o*g/h/l)*l),r||bi(u)?i=Math.pow(10,ct._decimalPlaces(g)):(i=Math.pow(10,u),g=Math.ceil(g*i)/i),n=Math.floor(p/g)*g,s=Math.ceil(f/g)*g,r&&(!bi(c)&&ct.almostWhole(c/g,g/1e3)&&(n=c),!bi(d)&&ct.almostWhole(d/g,g/1e3)&&(s=d)),o=(s-n)/g,o=ct.almostEquals(o,Math.round(o),g/1e3)?Math.round(o):Math.ceil(o),n=Math.round(n*i)/i,s=Math.round(s*i)/i,a.push(bi(c)?n:c);for(var m=1;m<o;++m)a.push(Math.round((n+m*g)*i)/i);return a.push(bi(d)?s:d),a}(n,t);t.handleDirectionalChanges(),t.max=ct.max(s),t.min=ct.min(s),e.reverse?(s.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),fi.prototype.convertTicksToLabels.call(t)}}),_i={position:"left",ticks:{callback:hi.formatters.linear}},xi=yi.extend({determineDataLimits:function(){var a=this,r=a.options,l=a.chart,t=l.data.datasets,e=a.isHorizontal();function h(t){return e?t.xAxisID===a.id:t.yAxisID===a.id}a.min=null,a.max=null;var n=r.stacked;if(void 0===n&&ct.each(t,function(t,e){if(!n){var i=l.getDatasetMeta(e);l.isDatasetVisible(e)&&h(i)&&void 0!==i.stack&&(n=!0)}}),r.stacked||n){var c={};ct.each(t,function(t,e){var n=l.getDatasetMeta(e),i=[n.type,void 0===r.stacked&&void 0===n.stack?e:"",n.stack].join(".");void 0===c[i]&&(c[i]={positiveValues:[],negativeValues:[]});var s=c[i].positiveValues,o=c[i].negativeValues;l.isDatasetVisible(e)&&h(n)&&ct.each(t.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||n.data[e].hidden||(s[e]=s[e]||0,o[e]=o[e]||0,r.relativePoints?s[e]=100:i<0?o[e]+=i:s[e]+=i)})}),ct.each(c,function(t){var e=t.positiveValues.concat(t.negativeValues),i=ct.min(e),n=ct.max(e);a.min=null===a.min?i:Math.min(a.min,i),a.max=null===a.max?n:Math.max(a.max,n)})}else ct.each(t,function(t,e){var n=l.getDatasetMeta(e);l.isDatasetVisible(e)&&h(n)&&ct.each(t.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||n.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i))})});a.min=isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=isFinite(a.max)&&!isNaN(a.max)?a.max:1,this.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=ct.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,n=+e.getRightValue(t),s=e.end-i;return e.isHorizontal()?e.left+e.width/s*(n-i):e.bottom-e.height/s*(n-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),n=i?e.width:e.height,s=(i?t-e.left:e.bottom-t)/n;return e.start+(e.end-e.start)*s},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}}),wi=_i;xi._defaults=wi;var ki=ct.valueOrDefault;var Ci={position:"left",ticks:{callback:hi.formatters.logarithmic}};function Si(t,e){return ct.isFinite(t)&&0<=t?t:e}var Ti=fi.extend({determineDataLimits:function(){var a=this,i=a.options,r=a.chart,t=r.data.datasets,e=a.isHorizontal();function l(t){return e?t.xAxisID===a.id:t.yAxisID===a.id}a.min=null,a.max=null,a.minNotZero=null;var n=i.stacked;if(void 0===n&&ct.each(t,function(t,e){if(!n){var i=r.getDatasetMeta(e);r.isDatasetVisible(e)&&l(i)&&void 0!==i.stack&&(n=!0)}}),i.stacked||n){var h={};ct.each(t,function(t,e){var s=r.getDatasetMeta(e),o=[s.type,void 0===i.stacked&&void 0===s.stack?e:"",s.stack].join(".");r.isDatasetVisible(e)&&l(s)&&(void 0===h[o]&&(h[o]=[]),ct.each(t.data,function(t,e){var i=h[o],n=+a.getRightValue(t);isNaN(n)||s.data[e].hidden||n<0||(i[e]=i[e]||0,i[e]+=n)}))}),ct.each(h,function(t){if(0<t.length){var e=ct.min(t),i=ct.max(t);a.min=null===a.min?e:Math.min(a.min,e),a.max=null===a.max?i:Math.max(a.max,i)}})}else ct.each(t,function(t,e){var n=r.getDatasetMeta(e);r.isDatasetVisible(e)&&l(n)&&ct.each(t.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||n.data[e].hidden||i<0||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i),0!=i&&(null===a.minNotZero||i<a.minNotZero)&&(a.minNotZero=i))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=Si(e.min,t.min),t.max=Si(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(ct.log10(t.min))-1),t.max=Math.pow(10,Math.floor(ct.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(ct.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(ct.log10(t.min))+1):10),null===t.minNotZero&&(0<t.min?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(ct.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:Si(e.min),max:Si(e.max)},s=t.ticks=function(t,e){var i,n,s=[],o=ki(t.min,Math.pow(10,Math.floor(ct.log10(e.min)))),a=Math.floor(ct.log10(e.max)),r=Math.ceil(e.max/Math.pow(10,a));0===o?(i=Math.floor(ct.log10(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),s.push(o),o=n*Math.pow(10,i)):(i=Math.floor(ct.log10(o)),n=Math.floor(o/Math.pow(10,i)));for(var l=i<0?Math.pow(10,Math.abs(i)):1;s.push(o),10===++n&&(n=1,l=0<=++i?1:l),o=Math.round(n*Math.pow(10,i)*l)/l,i<a||i===a&&n<r;);var h=ki(t.max,o);return s.push(h),s}(n,t);t.max=ct.max(s),t.min=ct.min(s),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&s.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),fi.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(ct.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(t){var e,i,n,s,o,a=this,r=a.options.ticks,l=r.reverse,h=ct.log10,c=a._getFirstTickValue(a.minNotZero),d=0;return t=+a.getRightValue(t),o=l?(n=a.end,s=a.start,-1):(n=a.start,s=a.end,1),i=a.isHorizontal()?(e=a.width,l?a.right:a.left):(e=a.height,o*=-1,l?a.top:a.bottom),t!==n&&(0===n&&(e-=d=ki(r.fontSize,rt.global.defaultFontSize),n=c),0!==t&&(d+=e/(h(s)-h(n))*(h(t)-h(n))),i+=o*d),i},getValueForPixel:function(t){var e,i,n,s,o=this,a=o.options.ticks,r=a.reverse,l=ct.log10,h=o._getFirstTickValue(o.minNotZero);if(n=r?(i=o.end,o.start):(i=o.start,o.end),(s=o.isHorizontal()?(e=o.width,r?o.right-t:t-o.left):(e=o.height,r?t-o.top:o.bottom-t))!==i){if(0===i){var c=ki(a.fontSize,rt.global.defaultFontSize);s-=c,e-=c,i=h}s*=l(n)-l(i),s/=e,s=Math.pow(10,l(i)+s)}return s}}),Mi=Ci;Ti._defaults=Mi;var Pi=ct.valueOrDefault,Di=ct.valueAtIndexOrDefault,Ii=ct.options.resolve,Ai={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:hi.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Oi(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function zi(t){var e=t.ticks;return e.display&&t.display?Pi(e.fontSize,rt.global.defaultFontSize)+2*e.backdropPaddingY:0}function Fi(t,e,i,n,s){return t===n||t===s?{start:e-i/2,end:e+i/2}:t<n||s<t?{start:e-i,end:e}:{start:e,end:e+i}}function Li(t,e,i,n){var s,o,a=i.y+n/2;if(ct.isArray(e))for(s=0,o=e.length;s<o;++s)t.fillText(e[s],i.x,a),a+=n;else t.fillText(e,i.x,a)}function $i(t){return ct.isNumber(t)?t:0}var Hi=yi.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=zi(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var s=this,i=s.chart,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;ct.each(i.data.datasets,function(t,e){if(i.isDatasetVisible(e)){var n=i.getDatasetMeta(e);ct.each(t.data,function(t,e){var i=+s.getRightValue(t);isNaN(i)||n.data[e].hidden||(o=Math.min(i,o),a=Math.max(i,a))})}}),s.min=o===Number.POSITIVE_INFINITY?0:o,s.max=a===Number.NEGATIVE_INFINITY?0:a,s.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/zi(this.options))},convertTicksToLabels:function(){var t=this;yi.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map(t.options.pointLabels.callback,t)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,i,n,s=ct.options._parseFont(t.options.pointLabels),o={l:0,r:t.width,t:0,b:t.height-t.paddingTop},a={};t.ctx.font=s.string,t._pointLabelSizes=[];var r,l,h,c=Oi(t);for(e=0;e<c;e++){n=t.getPointPosition(e,t.drawingArea+5),r=t.ctx,l=s.lineHeight,h=t.pointLabels[e]||"",i=ct.isArray(h)?{w:ct.longestText(r,r.font,h),h:h.length*l}:{w:r.measureText(h).width,h:l},t._pointLabelSizes[e]=i;var d=t.getIndexAngle(e),u=ct.toDegrees(d)%360,p=Fi(u,n.x,i.w,0,180),f=Fi(u,n.y,i.h,90,270);p.start<o.l&&(o.l=p.start,a.l=d),p.end>o.r&&(o.r=p.end,a.r=d),f.start<o.t&&(o.t=f.start,a.t=d),f.end>o.b&&(o.b=f.end,a.b=d)}t.setReductions(t.drawingArea,o,a)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,i){var n=this,s=e.l/Math.sin(i.l),o=Math.max(e.r-n.width,0)/Math.sin(i.r),a=-e.t/Math.cos(i.t),r=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);s=$i(s),o=$i(o),a=$i(a),r=$i(r),n.drawingArea=Math.min(Math.floor(t-(s+o)/2),Math.floor(t-(a+r)/2)),n.setCenterPoint(s,o,a,r)},setCenterPoint:function(t,e,i,n){var s=this,o=s.width-e-s.drawingArea,a=t+s.drawingArea,r=i+s.drawingArea,l=s.height-s.paddingTop-n-s.drawingArea;s.xCenter=Math.floor((a+o)/2+s.left),s.yCenter=Math.floor((r+l)/2+s.top+s.paddingTop)},getIndexAngle:function(t){return t*(2*Math.PI/Oi(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:0<t&&0<e?t:0)},draw:function(){var o=this,t=o.options,a=t.gridLines,r=t.ticks;if(t.display){var l=o.ctx,h=this.getIndexAngle(0),c=ct.options._parseFont(r);(t.angleLines.display||t.pointLabels.display)&&function(t){var e=t.ctx,i=t.options,n=i.angleLines,s=i.gridLines,o=i.pointLabels,a=Pi(n.lineWidth,s.lineWidth),r=Pi(n.color,s.color),l=zi(i);e.save(),e.lineWidth=a,e.strokeStyle=r,e.setLineDash&&(e.setLineDash(Ii([n.borderDash,s.borderDash,[]])),e.lineDashOffset=Ii([n.borderDashOffset,s.borderDashOffset,0]));var h,c,d,u,p=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),f=ct.options._parseFont(o);e.font=f.string,e.textBaseline="middle";for(var g=Oi(t)-1;0<=g;g--){if(n.display&&a&&r){var m=t.getPointPosition(g,p);e.beginPath(),e.moveTo(t.xCenter,t.yCenter),e.lineTo(m.x,m.y),e.stroke()}if(o.display){var v=0===g?l/2:0,b=t.getPointPosition(g,p+v+5),y=Di(o.fontColor,g,rt.global.defaultFontColor);e.fillStyle=y;var _=t.getIndexAngle(g),x=ct.toDegrees(_);e.textAlign=0===(u=x)||180===u?"center":u<180?"left":"right",h=x,c=t._pointLabelSizes[g],d=b,90===h||270===h?d.y-=c.h/2:(270<h||h<90)&&(d.y-=c.h),Li(e,t.pointLabels[g]||"",b,f.lineHeight)}}e.restore()}(o),ct.each(o.ticks,function(t,e){if(0<e||r.reverse){var i=o.getDistanceFromCenterForValue(o.ticksAsNumbers[e]);if(a.display&&0!==e&&function(t,e,i,n){var s,o=t.ctx,a=e.circular,r=Oi(t),l=Di(e.color,n-1),h=Di(e.lineWidth,n-1);if((a||r)&&l&&h){if(o.save(),o.strokeStyle=l,o.lineWidth=h,o.setLineDash&&(o.setLineDash(e.borderDash||[]),o.lineDashOffset=e.borderDashOffset||0),o.beginPath(),a)o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI);else{s=t.getPointPosition(0,i),o.moveTo(s.x,s.y);for(var c=1;c<r;c++)s=t.getPointPosition(c,i),o.lineTo(s.x,s.y)}o.closePath(),o.stroke(),o.restore()}}(o,a,i,e),r.display){var n=Pi(r.fontColor,rt.global.defaultFontColor);if(l.font=c.string,l.save(),l.translate(o.xCenter,o.yCenter),l.rotate(h),r.showLabelBackdrop){var s=l.measureText(t).width;l.fillStyle=r.backdropColor,l.fillRect(-s/2-r.backdropPaddingX,-i-c.size/2-r.backdropPaddingY,s+2*r.backdropPaddingX,c.size+2*r.backdropPaddingY)}l.textAlign="center",l.textBaseline="middle",l.fillStyle=n,l.fillText(t,0,-i),l.restore()}}})}}}),Ei=Ai;Hi._defaults=Ei;var Wi=ct.valueOrDefault,Ni=Number.MIN_SAFE_INTEGER||-9007199254740991,Ri=Number.MAX_SAFE_INTEGER||9007199254740991,Bi={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},ji=Object.keys(Bi);function Vi(t,e){return t-e}function qi(t){var e,i,n,s={},o=[];for(e=0,i=t.length;e<i;++e)s[n=t[e]]||(s[n]=!0,o.push(n));return o}function Yi(t,e,i,n){var s=function(t,e,i){for(var n,s,o,a=0,r=t.length-1;0<=a&&a<=r;){if(s=t[(n=a+r>>1)-1]||null,o=t[n],!s)return{lo:null,hi:o};if(o[e]<i)a=1+n;else{if(!(s[e]>i))return{lo:s,hi:o};r=n-1}}return{lo:o,hi:null}}(t,e,i),o=s.lo?s.hi?s.lo:t[t.length-2]:t[0],a=s.lo?s.hi?s.hi:t[t.length-1]:t[1],r=a[e]-o[e],l=r?(i-o[e])/r:0,h=(a[n]-o[n])*l;return o[n]+h}function Ui(t,e){var i=t._adapter,n=t.options.time,s=n.parser,o=s||n.format,a=e;return"function"==typeof s&&(a=s(a)),ct.isFinite(a)||(a="string"==typeof o?i.parse(a,o):i.parse(a)),null!==a?+a:(s||"function"!=typeof o||(a=o(e),ct.isFinite(a)||(a=i.parse(a))),a)}function Xi(t,e){if(ct.isNullOrUndef(e))return null;var i=t.options.time,n=Ui(t,t.getRightValue(e));return null===n||i.round&&(n=+t._adapter.startOf(n,i.round)),n}function Ki(t){for(var e=ji.indexOf(t)+1,i=ji.length;e<i;++e)if(Bi[ji[e]].common)return ji[e]}function Gi(t,e,i,n){var s,o=t._adapter,a=t.options,r=a.time,l=r.unit||function(t,e,i,n){var s,o,a,r=ji.length;for(s=ji.indexOf(t);s<r-1;++s)if(a=(o=Bi[ji[s]]).steps?o.steps[o.steps.length-1]:Ri,o.common&&Math.ceil((i-e)/(a*o.size))<=n)return ji[s];return ji[r-1]}(r.minUnit,e,i,n),h=Ki(l),c=Wi(r.stepSize,r.unitStepSize),d="week"===l&&r.isoWeekday,u=a.ticks.major.enabled,p=Bi[l],f=e,g=i,m=[];for(c=c||function(t,e,i,n){var s,o,a,r=e-t,l=Bi[i],h=l.size,c=l.steps;if(!c)return Math.ceil(r/(n*h));for(s=0,o=c.length;s<o&&(a=c[s],!(Math.ceil(r/(h*a))<=n));++s);return a}(e,i,l,n),d&&(f=+o.startOf(f,"isoWeek",d),g=+o.startOf(g,"isoWeek",d)),f=+o.startOf(f,d?"day":l),(g=+o.startOf(g,d?"day":l))<i&&(g=+o.add(g,1,l)),s=f,u&&h&&!d&&!r.round&&(s=+o.startOf(s,h),s=+o.add(s,~~((f-s)/(p.size*c))*c,l));s<g;s=+o.add(s,c,l))m.push(+s);return m.push(+s),m}var Zi=fi.extend({initialize:function(){this.mergeTicksOptions(),fi.prototype.initialize.call(this)},update:function(){var t=this.options,e=t.time||(t.time={}),i=this._adapter=new li._date(t.adapters.date);return e.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),ct.mergeIf(e.displayFormats,i.formats()),fi.prototype.update.apply(this,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),fi.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,s,o,a=this,r=a.chart,l=a._adapter,h=a.options.time,c=h.unit||"day",d=Ri,u=Ni,p=[],f=[],g=[],m=r.data.labels||[];for(t=0,i=m.length;t<i;++t)g.push(Xi(a,m[t]));for(t=0,i=(r.data.datasets||[]).length;t<i;++t)if(r.isDatasetVisible(t))if(s=r.data.datasets[t].data,ct.isObject(s[0]))for(f[t]=[],e=0,n=s.length;e<n;++e)o=Xi(a,s[e]),p.push(o),f[t][e]=o;else{for(e=0,n=g.length;e<n;++e)p.push(g[e]);f[t]=g.slice(0)}else f[t]=[];g.length&&(g=qi(g).sort(Vi),d=Math.min(d,g[0]),u=Math.max(u,g[g.length-1])),p.length&&(p=qi(p).sort(Vi),d=Math.min(d,p[0]),u=Math.max(u,p[p.length-1])),d=Xi(a,h.min)||d,u=Xi(a,h.max)||u,d=d===Ri?+l.startOf(Date.now(),c):d,u=u===Ni?+l.endOf(Date.now(),c)+1:u,a.min=Math.min(d,u),a.max=Math.max(d+1,u),a._horizontal=a.isHorizontal(),a._table=[],a._timestamps={data:p,datasets:f,labels:g}},buildTicks:function(){var t,e,i,n=this,s=n.min,o=n.max,a=n.options,r=a.time,l=[],h=[];switch(a.ticks.source){case"data":l=n._timestamps.data;break;case"labels":l=n._timestamps.labels;break;case"auto":default:l=Gi(n,s,o,n.getLabelCapacity(s))}for("ticks"===a.bounds&&l.length&&(s=l[0],o=l[l.length-1]),s=Xi(n,r.min)||s,o=Xi(n,r.max)||o,t=0,e=l.length;t<e;++t)s<=(i=l[t])&&i<=o&&h.push(i);return n.min=s,n.max=o,n._unit=r.unit||function(t,e,i,n,s){var o,a;for(o=ji.length-1;o>=ji.indexOf(i);o--)if(a=ji[o],Bi[a].common&&t._adapter.diff(s,n,a)>=e.length)return a;return ji[i?ji.indexOf(i):0]}(n,h,r.minUnit,n.min,n.max),n._majorUnit=Ki(n._unit),n._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var s,o,a,r,l,h=[],c=[e];for(s=0,o=t.length;s<o;++s)e<(r=t[s])&&r<i&&c.push(r);for(c.push(i),s=0,o=c.length;s<o;++s)l=c[s+1],a=c[s-1],r=c[s],void 0!==a&&void 0!==l&&Math.round((l+a)/2)===r||h.push({time:r,pos:s/(o-1)});return h}(n._timestamps.data,s,o,a.distribution),n._offsets=function(t,e,i,n,s){var o,a,r=0,l=0;return s.offset&&e.length&&(s.time.min||(o=Yi(t,"time",e[0],"pos"),r=1===e.length?1-o:(Yi(t,"time",e[1],"pos")-o)/2),s.time.max||(a=Yi(t,"time",e[e.length-1],"pos"),l=1===e.length?a:(a-Yi(t,"time",e[e.length-2],"pos"))/2)),{start:r,end:l}}(n._table,h,0,0,a),a.ticks.reverse&&h.reverse(),function(t,e,i){var n,s,o,a,r=[];for(n=0,s=e.length;n<s;++n)o=e[n],a=!!i&&o===+t._adapter.startOf(o,i),r.push({value:o,major:a});return r}(n,h,n._majorUnit)},getLabelForIndex:function(t,e){var i=this,n=i._adapter,s=i.chart.data,o=i.options.time,a=s.labels&&t<s.labels.length?s.labels[t]:"",r=s.datasets[e].data[t];return ct.isObject(r)&&(a=i.getRightValue(r)),o.tooltipFormat?n.format(Ui(i,a),o.tooltipFormat):"string"==typeof a?a:n.format(Ui(i,a),o.displayFormats.datetime)},tickFormatFunction:function(t,e,i,n){var s=this._adapter,o=this.options,a=o.time.displayFormats,r=a[this._unit],l=this._majorUnit,h=a[l],c=+s.startOf(t,l),d=o.ticks.major,u=d.enabled&&l&&h&&t===c,p=s.format(t,n||(u?h:r)),f=u?d:o.ticks.minor,g=Wi(f.callback,f.userCallback);return g?g(p,e,i):p},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(t[e].value,e,t));return n},getPixelForOffset:function(t){var e=this,i=e.options.ticks.reverse,n=e._horizontal?e.width:e.height,s=e._horizontal?i?e.right:e.left:i?e.bottom:e.top,o=Yi(e._table,"time",t,"pos"),a=n*(e._offsets.start+o)/(e._offsets.start+1+e._offsets.end);return i?s-a:s+a},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=Xi(this,t)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return 0<=t&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,s=(i?(t-n)/i:0)*(e._offsets.start+1+e._offsets.start)-e._offsets.end,o=Yi(e._table,"pos",s,"time");return e._adapter._create(o)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=ct.toRadians(e.maxRotation),s=Math.cos(n),o=Math.sin(n);return i*s+Wi(e.fontSize,rt.global.defaultFontSize)*o},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,n=e.tickFormatFunction(t,0,[],i),s=e.getLabelWidth(n),o=e.isHorizontal()?e.width:e.height,a=Math.floor(o/s);return 0<a?a:1}}),Qi={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};Zi._defaults=Qi;var Ji={category:gi,linear:xi,logarithmic:Ti,radialLinear:Hi,time:Zi},tn={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};li._date.override("function"==typeof n?{_id:"moment",formats:function(){return tn},parse:function(t,e){return"string"==typeof t&&"string"==typeof e?t=n(t,e):t instanceof n||(t=n(t)),t.isValid()?t.valueOf():null},format:function(t,e){return n(t).format(e)},add:function(t,e,i){return n(t).add(e,i).valueOf()},diff:function(t,e,i){return n.duration(n(t).diff(n(e))).as(i)},startOf:function(t,e,i){return t=n(t),"isoWeek"===e?t.isoWeekday(i).valueOf():t.startOf(e).valueOf()},endOf:function(t,e){return n(t).endOf(e).valueOf()},_create:function(t){return n(t)}}:{}),rt._set("global",{plugins:{filler:{propagate:!0}}});var en={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),s=n&&i.isDatasetVisible(e)&&n.dataset._children||[],o=s.length||0;return o?function(t,e){return e<o&&s[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function nn(t,e,i){var n,s=t._model||{},o=s.fill;if(void 0===o&&(o=!!s.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(n=parseFloat(o,10),isFinite(n)&&Math.floor(n)===n)return"-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||i<=n)&&n;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function sn(t){var e,i=t.el._model||{},n=t.el._scale||{},s=t.fill,o=null;if(isFinite(s))return null;if("start"===s?o=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===s?o=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?o=i.scaleZero:n.getBasePosition?o=n.getBasePosition():n.getBasePixel&&(o=n.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if(ct.isFinite(o))return{x:(e=n.isHorizontal())?o:null,y:e?null:o}}return null}function on(t,e,i){var n,s=t[e].fill,o=[e];if(!i)return s;for(;!1!==s&&-1===o.indexOf(s);){if(!isFinite(s))return s;if(!(n=t[s]))return!1;if(n.visible)return s;o.push(s),s=n.fill}return!1}function an(t){return t&&!t.skip}function rn(t,e,i,n,s){var o;if(n&&s){for(t.moveTo(e[0].x,e[0].y),o=1;o<n;++o)ct.canvas.lineTo(t,e[o-1],e[o]);for(t.lineTo(i[s-1].x,i[s-1].y),o=s-1;0<o;--o)ct.canvas.lineTo(t,i[o],i[o-1],!0)}}var ln={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,s,o,a,r,l,h=(t.data.datasets||[]).length,c=e.propagate,d=[];for(n=0;n<h;++n)o=null,(s=(i=t.getDatasetMeta(n)).dataset)&&s._model&&s instanceof Wt.Line&&(o={visible:t.isDatasetVisible(n),fill:nn(s,n,h),chart:t,el:s}),i.$filler=o,d.push(o);for(n=0;n<h;++n)(o=d[n])&&(o.fill=on(d,n,c),o.boundary=sn(o),o.mapper=(l=void 0,r=(a=o).fill,!(l="dataset")===r?null:(isFinite(r)||(l="boundary"),en[l](a))))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var n=t.ctx,s=i.el,o=s._view,a=s._children||[],r=i.mapper,l=o.backgroundColor||rt.global.defaultColor;r&&l&&a.length&&(ct.canvas.clipArea(n,t.chartArea),function(t,e,i,n,s,o){var a,r,l,h,c,d,u,p=e.length,f=n.spanGaps,g=[],m=[],v=0,b=0;for(t.beginPath(),a=0,r=p+!!o;a<r;++a)c=i(h=e[l=a%p]._view,l,n),d=an(h),u=an(c),d&&u?(v=g.push(h),b=m.push(c)):v&&b&&(f?(d&&g.push(h),u&&m.push(c)):(rn(t,g,m,v,b),v=b=0,g=[],m=[]));rn(t,g,m,v,b),t.closePath(),t.fillStyle=s,t.fill()}(n,a,r,o,l,s._loop),ct.canvas.unclipArea(n))}}},hn=ct.noop,cn=ct.valueOrDefault;function dn(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}rt._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,s=n.getDatasetMeta(i);s.hidden=null===s.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(i){var t=i.data;return ct.isArray(t.datasets)?t.datasets.map(function(t,e){return{text:t.label,fillStyle:ct.isArray(t.backgroundColor)?t.backgroundColor[0]:t.backgroundColor,hidden:!i.isDatasetVisible(e),lineCap:t.borderCapStyle,lineDash:t.borderDash,lineDashOffset:t.borderDashOffset,lineJoin:t.borderJoinStyle,lineWidth:t.borderWidth,strokeStyle:t.borderColor,pointStyle:t.pointStyle,datasetIndex:e}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var un=gt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:hn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:hn,beforeSetDimensions:hn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:hn,beforeBuildLabels:hn,buildLabels:function(){var e=this,i=e.options.labels||{},t=ct.callback(i.generateLabels,[e.chart],e)||[];i.filter&&(t=t.filter(function(t){return i.filter(t,e.chart.data)})),e.options.reverse&&t.reverse(),e.legendItems=t},afterBuildLabels:hn,beforeFit:hn,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,s=t.ctx,o=ct.options._parseFont(n),a=o.size,r=t.legendHitBoxes=[],l=t.minSize,h=t.isHorizontal();if(h?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i)if(s.font=o.string,h){var c=t.lineWidths=[0],d=0;s.textAlign="left",s.textBaseline="top",ct.each(t.legendItems,function(t,e){var i=dn(n,a)+a/2+s.measureText(t.text).width;(0===e||c[c.length-1]+i+n.padding>l.width)&&(d+=a+n.padding,c[c.length-(0<e?0:1)]=n.padding),r[e]={left:0,top:0,width:i,height:a},c[c.length-1]+=i+n.padding}),l.height+=d}else{var u=n.padding,p=t.columnWidths=[],f=n.padding,g=0,m=0,v=a+u;ct.each(t.legendItems,function(t,e){var i=dn(n,a)+a/2+s.measureText(t.text).width;0<e&&m+v>l.height-u&&(f+=g+n.padding,p.push(g),m=g=0),g=Math.max(g,i),m+=v,r[e]={left:0,top:0,width:i,height:a}}),f+=g,p.push(g),l.width+=f}t.width=l.width,t.height=l.height},afterFit:hn,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var a=this,r=a.options,l=r.labels,t=rt.global,h=t.defaultColor,c=t.elements.line,d=a.width,u=a.lineWidths;if(r.display){var p,f=a.ctx,e=cn(l.fontColor,t.defaultFontColor),i=ct.options._parseFont(l),g=i.size;f.textAlign="left",f.textBaseline="middle",f.lineWidth=.5,f.strokeStyle=e,f.fillStyle=e,f.font=i.string;var m=dn(l,g),v=a.legendHitBoxes,b=a.isHorizontal();p=b?{x:a.left+(d-u[0])/2+l.padding,y:a.top+l.padding,line:0}:{x:a.left+l.padding,y:a.top+l.padding,line:0};var y=g+l.padding;ct.each(a.legendItems,function(t,e){var i=f.measureText(t.text).width,n=m+g/2+i,s=p.x,o=p.y;b?0<e&&s+n+l.padding>a.left+a.minSize.width&&(o=p.y+=y,p.line++,s=p.x=a.left+(d-u[p.line])/2+l.padding):0<e&&o+y>a.top+a.minSize.height&&(s=p.x=s+a.columnWidths[p.line]+l.padding,o=p.y=a.top+l.padding,p.line++),function(t,e,i){if(!(isNaN(m)||m<=0)){f.save();var n=cn(i.lineWidth,c.borderWidth);if(f.fillStyle=cn(i.fillStyle,h),f.lineCap=cn(i.lineCap,c.borderCapStyle),f.lineDashOffset=cn(i.lineDashOffset,c.borderDashOffset),f.lineJoin=cn(i.lineJoin,c.borderJoinStyle),f.lineWidth=n,f.strokeStyle=cn(i.strokeStyle,h),f.setLineDash&&f.setLineDash(cn(i.lineDash,c.borderDash)),r.labels&&r.labels.usePointStyle){var s=m*Math.SQRT2/2,o=t+m/2,a=e+g/2;ct.canvas.drawPoint(f,i.pointStyle,s,o,a)}else 0!==n&&f.strokeRect(t,e,m,g),f.fillRect(t,e,m,g);f.restore()}}(s,o,t),function(t,e,i,n){var s=g/2,o=m+s+t,a=e+s;f.fillText(i.text,o,a),i.hidden&&(f.beginPath(),f.lineWidth=2,f.moveTo(o,a),f.lineTo(o+n,a),f.stroke())}(v[e].left=s,v[e].top=o,t,i),b?p.x+=n+l.padding:p.y+=y})}},_getLegendItemAt:function(t,e){var i,n,s;if(t>=this.left&&t<=this.right&&e>=this.top&&e<=this.bottom)for(s=this.legendHitBoxes,i=0;i<s.length;++i)if(t>=(n=s[i]).left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height)return this.legendItems[i];return null},handleEvent:function(t){var e,i=this.options,n="mouseup"===t.type?"click":t.type;if("mousemove"===n){if(!i.onHover&&!i.onLeave)return}else{if("click"!==n)return;if(!i.onClick)return}e=this._getLegendItemAt(t.x,t.y),"click"===n?e&&i.onClick&&i.onClick.call(this,t.native,e):(i.onLeave&&e!==this._hoveredItem&&(this._hoveredItem&&i.onLeave.call(this,t.native,this._hoveredItem),this._hoveredItem=e),i.onHover&&e&&i.onHover.call(this,t.native,e))}});function pn(t,e){var i=new un({ctx:t.ctx,options:e,chart:t});xe.configure(t,i,e),xe.addBox(t,i),t.legend=i}var fn={id:"legend",_element:un,beforeInit:function(t){var e=t.options.legend;e&&pn(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(ct.mergeIf(e,rt.global.legend),i?(xe.configure(t,i,e),i.options=e):pn(t,e)):i&&(xe.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}},gn=ct.noop;rt._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var mn=gt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:gn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:gn,beforeSetDimensions:gn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:gn,beforeBuildLabels:gn,buildLabels:gn,afterBuildLabels:gn,beforeFit:gn,fit:function(){var t=this.options,e=t.display,i=this.minSize,n=ct.isArray(t.text)?t.text.length:1,s=ct.options._parseFont(t),o=e?n*s.lineHeight+2*t.padding:0;this.isHorizontal()?(i.width=this.maxWidth,i.height=o):(i.width=o,i.height=this.maxHeight),this.width=i.width,this.height=i.height},afterFit:gn,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this.ctx,e=this.options;if(e.display){var i,n,s,o=ct.options._parseFont(e),a=o.lineHeight,r=a/2+e.padding,l=0,h=this.top,c=this.left,d=this.bottom,u=this.right;t.fillStyle=ct.valueOrDefault(e.fontColor,rt.global.defaultFontColor),t.font=o.string,this.isHorizontal()?(n=c+(u-c)/2,s=h+r,i=u-c):(n="left"===e.position?c+r:u-r,s=h+(d-h)/2,i=d-h,l=Math.PI*("left"===e.position?-.5:.5)),t.save(),t.translate(n,s),t.rotate(l),t.textAlign="center",t.textBaseline="middle";var p=e.text;if(ct.isArray(p))for(var f=0,g=0;g<p.length;++g)t.fillText(p[g],0,f,i),f+=a;else t.fillText(p,0,0,i);t.restore()}}});function vn(t,e){var i=new mn({ctx:t.ctx,options:e,chart:t});xe.configure(t,i,e),xe.addBox(t,i),t.titleBlock=i}var bn={},yn=ln,_n=fn,xn={id:"title",_element:mn,beforeInit:function(t){var e=t.options.title;e&&vn(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(ct.mergeIf(e,rt.global.title),i?(xe.configure(t,i,e),i.options=e):vn(t,e)):i&&(xe.removeBox(t,i),delete t.titleBlock)}};function wn(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function kn(t){return null!=t&&"none"!==t}function Cn(t,e,i){var n=document.defaultView,s=ct._getParentNode(t),o=n.getComputedStyle(t)[e],a=n.getComputedStyle(s)[e],r=kn(o),l=kn(a),h=Number.POSITIVE_INFINITY;return r||l?Math.min(r?wn(o,t,i):h,l?wn(a,s,i):h):"none"}for(var Sn in bn.filler=yn,bn.legend=_n,bn.title=xn,(oi.helpers=ct).where=function(t,e){if(ct.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return ct.each(t,function(t){e(t)&&i.push(t)}),i},ct.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,s=t.length;n<s;++n)if(e.call(i,t[n],n,t))return n;return-1},ct.findNextWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var s=t[n];if(e(s))return s}},ct.findPreviousWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;0<=n;n--){var s=t[n];if(e(s))return s}},ct.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},ct.almostEquals=function(t,e,i){return Math.abs(t-e)<i},ct.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&t<i+e},ct.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},ct.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},ct.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0==(t=+t)||isNaN(t)?t:0<t?1:-1},ct.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},ct.toRadians=function(t){return t*(Math.PI/180)},ct.toDegrees=function(t){return t*(180/Math.PI)},ct._decimalPlaces=function(t){if(ct.isFinite(t)){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}},ct.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,s=Math.sqrt(i*i+n*n),o=Math.atan2(n,i);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:s}},ct.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},ct.aliasPixel=function(t){return t%2==0?0:.5},ct._alignPixel=function(t,e,i){var n=t.currentDevicePixelRatio,s=i/2;return Math.round((e-s)*n)/n+s},ct.splineCurve=function(t,e,i,n){var s=t.skip?e:t,o=e,a=i.skip?e:i,r=Math.sqrt(Math.pow(o.x-s.x,2)+Math.pow(o.y-s.y,2)),l=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),h=r/(r+l),c=l/(r+l),d=n*(h=isNaN(h)?0:h),u=n*(c=isNaN(c)?0:c);return{previous:{x:o.x-d*(a.x-s.x),y:o.y-d*(a.y-s.y)},next:{x:o.x+u*(a.x-s.x),y:o.y+u*(a.y-s.y)}}},ct.EPSILON=Number.EPSILON||1e-14,ct.splineCurveMonotone=function(t){var e,i,n,s,o,a,r,l,h,c=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),d=c.length;for(e=0;e<d;++e)if(!(n=c[e]).model.skip){if(i=0<e?c[e-1]:null,(s=e<d-1?c[e+1]:null)&&!s.model.skip){var u=s.model.x-n.model.x;n.deltaK=0!=u?(s.model.y-n.model.y)/u:0}!i||i.model.skip?n.mK=n.deltaK:!s||s.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<d-1;++e)n=c[e],s=c[e+1],n.model.skip||s.model.skip||(ct.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=s.mK=0:(o=n.mK/n.deltaK,a=s.mK/n.deltaK,(l=Math.pow(o,2)+Math.pow(a,2))<=9||(r=3/Math.sqrt(l),n.mK=o*r*n.deltaK,s.mK=a*r*n.deltaK)));for(e=0;e<d;++e)(n=c[e]).model.skip||(i=0<e?c[e-1]:null,s=e<d-1?c[e+1]:null,i&&!i.model.skip&&(h=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-h,n.model.controlPointPreviousY=n.model.y-h*n.mK),s&&!s.model.skip&&(h=(s.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+h,n.model.controlPointNextY=n.model.y+h*n.mK))},ct.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},ct.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},ct.niceNum=function(t,e){var i=Math.floor(ct.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},ct.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},ct.getRelativePosition=function(t,e){var i,n,s=t.originalEvent||t,o=t.target||t.srcElement,a=o.getBoundingClientRect(),r=s.touches;n=r&&0<r.length?(i=r[0].clientX,r[0].clientY):(i=s.clientX,s.clientY);var l=parseFloat(ct.getStyle(o,"padding-left")),h=parseFloat(ct.getStyle(o,"padding-top")),c=parseFloat(ct.getStyle(o,"padding-right")),d=parseFloat(ct.getStyle(o,"padding-bottom")),u=a.right-a.left-l-c,p=a.bottom-a.top-h-d;return{x:i=Math.round((i-a.left-l)/u*o.width/e.currentDevicePixelRatio),y:n=Math.round((n-a.top-h)/p*o.height/e.currentDevicePixelRatio)}},ct.getConstraintWidth=function(t){return Cn(t,"max-width","clientWidth")},ct.getConstraintHeight=function(t){return Cn(t,"max-height","clientHeight")},ct._calculatePadding=function(t,e,i){return-1<(e=ct.getStyle(t,e)).indexOf("%")?i*parseInt(e,10)/100:parseInt(e,10)},ct._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},ct.getMaximumWidth=function(t){var e=ct._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,n=i-ct._calculatePadding(e,"padding-left",i)-ct._calculatePadding(e,"padding-right",i),s=ct.getConstraintWidth(t);return isNaN(s)?n:Math.min(n,s)},ct.getMaximumHeight=function(t){var e=ct._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,n=i-ct._calculatePadding(e,"padding-top",i)-ct._calculatePadding(e,"padding-bottom",i),s=ct.getConstraintHeight(t);return isNaN(s)?n:Math.min(n,s)},ct.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},ct.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var n=t.canvas,s=t.height,o=t.width;n.height=s*i,n.width=o*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=s+"px",n.style.width=o+"px")}},ct.fontString=function(t,e,i){return e+" "+t+"px "+i},ct.longestText=function(e,t,i,n){var s=(n=n||{}).data=n.data||{},o=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(s=n.data={},o=n.garbageCollect=[],n.font=t),e.font=t;var a=0;ct.each(i,function(t){null!=t&&!0!==ct.isArray(t)?a=ct.measureText(e,s,o,a,t):ct.isArray(t)&&ct.each(t,function(t){null==t||ct.isArray(t)||(a=ct.measureText(e,s,o,a,t))})});var r=o.length/2;if(r>i.length){for(var l=0;l<r;l++)delete s[o[l]];o.splice(0,r)}return a},ct.measureText=function(t,e,i,n,s){var o=e[s];return o||(o=e[s]=t.measureText(s).width,i.push(s)),n<o&&(n=o),n},ct.numberOfLabelLines=function(t){var e=1;return ct.each(t,function(t){ct.isArray(t)&&t.length>e&&(e=t.length)}),e},ct.color=U?function(t){return t instanceof CanvasGradient&&(t=rt.global.defaultColor),U(t)}:function(t){return console.error("Color.js not found!"),t},ct.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:ct.color(t).saturate(.5).darken(.1).rgbString()},oi._adapters=li,oi.Animation=vt,oi.animationService=bt,oi.controllers=ce,oi.DatasetController=kt,oi.defaults=rt,oi.Element=gt,oi.elements=Wt,oi.Interaction=ve,oi.layouts=xe,oi.platform=Re,oi.plugins=Be,oi.Scale=fi,oi.scaleService=je,oi.Ticks=hi,oi.Tooltip=Je,oi.helpers.each(Ji,function(t,e){oi.scaleService.registerScaleType(e,t,t._defaults)}),bn)bn.hasOwnProperty(Sn)&&oi.plugins.register(bn[Sn]);oi.platform.initialize();var Tn=oi;return"undefined"!=typeof window&&(window.Chart=oi),(oi.Chart=oi).Legend=bn.legend._element,oi.Title=bn.title._element,oi.pluginService=oi.plugins,oi.PluginBase=oi.Element.extend({}),oi.canvasHelpers=oi.helpers.canvas,oi.layoutService=oi.layouts,oi.LinearScaleBase=yi,oi.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],function(i){oi[i]=function(t,e){return new oi(t,oi.helpers.merge(e||{},{type:i.charAt(0).toLowerCase()+i.slice(1)}))}}),Tn}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(k){function t(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=i(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function i(t){var e="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.on("mouseout",e,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",e,o)}function o(){k.datepicker._isDisabledDatepicker(it.inline?it.dpDiv.parent()[0]:it.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))}function d(t,e){for(var i in k.extend(t,e),e)null==e[i]&&(t[i]=e[i]);return t}function e(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}k.ui=k.ui||{},k.ui.version="1.12.1";var n,s,w,C,a,r,l,h,c,S,u,p=0,f=Array.prototype.slice;function T(t,e,i){return[parseFloat(t[0])*(c.test(t[0])?e/100:1),parseFloat(t[1])*(c.test(t[1])?i/100:1)]}function M(t,e){return parseInt(k.css(t,e),10)||0}k.cleanData=(u=k.cleanData,function(t){var e,i,n;for(n=0;null!=(i=t[n]);n++)try{(e=k._data(i,"events"))&&e.remove&&k(i).triggerHandler("remove")}catch(t){}u(t)}),k.widget=function(t,i,e){var n,s,o,a={},r=t.split(".")[0],l=r+"-"+(t=t.split(".")[1]);return e||(e=i,i=k.Widget),k.isArray(e)&&(e=k.extend.apply(null,[{}].concat(e))),k.expr[":"][l.toLowerCase()]=function(t){return!!k.data(t,l)},k[r]=k[r]||{},n=k[r][t],s=k[r][t]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new s(t,e)},k.extend(s,n,{version:e.version,_proto:k.extend({},e),_childConstructors:[]}),(o=new i).options=k.widget.extend({},o.options),k.each(e,function(e,n){return k.isFunction(n)?void(a[e]=function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=o,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}):void(a[e]=n);function s(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}}),s.prototype=k.widget.extend(o,{widgetEventPrefix:n&&o.widgetEventPrefix||t},a,{constructor:s,namespace:r,widgetName:t,widgetFullName:l}),n?(k.each(n._childConstructors,function(t,e){var i=e.prototype;k.widget(i.namespace+"."+i.widgetName,s,e._proto)}),delete n._childConstructors):i._childConstructors.push(s),k.widget.bridge(t,s),s},k.widget.extend=function(t){for(var e,i,n=f.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&void 0!==i&&(t[e]=k.isPlainObject(i)?k.isPlainObject(t[e])?k.widget.extend({},t[e],i):k.widget.extend({},i):i);return t},k.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;k.fn[o]=function(i){var t="string"==typeof i,n=f.call(arguments,1),s=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=k.data(this,a);return"instance"===i?(s=e,!1):e?k.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&void 0!==t?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:k.error("no such method '"+i+"' for "+o+" widget instance"):k.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):s=void 0:(n.length&&(i=k.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=k.data(this,a);t?(t.option(i||{}),t._init&&t._init()):k.data(this,a,new e(i,this))})),s}},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=k(e||this.defaultElement||this)[0],this.element=k(e),this.uuid=p++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=k(),this.hoverable=k(),this.focusable=k(),this.classesElementLookup={},e!==this&&(k.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=k(e.style?e.ownerDocument:e.document||e),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this.options=k.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){var i=this;this._destroy(),k.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:k.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return k.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=k.widget.extend({},this.options[t]),s=0;i.length-1>s;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=k(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(s){function t(t,e){var i,n;for(n=0;t.length>n;n++)i=a.classesElementLookup[t[n]]||k(),i=s.add?k(k.unique(i.get().concat(s.element.get()))):k(i.not(s.element).get()),a.classesElementLookup[t[n]]=i,o.push(t[n]),e&&s.classes[t[n]]&&o.push(s.classes[t[n]])}var o=[],a=this;return s=k.extend({element:this.element,classes:this.options.classes||{}},s),this._on(s.element,{remove:"_untrackClassesElement"}),s.keys&&t(s.keys.match(/\S+/g)||[],!0),s.extra&&t(s.extra.match(/\S+/g)||[]),o.join(" ")},_untrackClassesElement:function(i){var n=this;k.each(n.classesElementLookup,function(t,e){-1!==k.inArray(i.target,e)&&(n.classesElementLookup[t]=k(e.not(i.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,o={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return o.element.toggleClass(this._classes(o),n),this},_on:function(a,r,t){var l,h=this;"boolean"!=typeof a&&(t=r,r=a,a=!1),t?(r=l=k(r),this.bindings=this.bindings.add(r)):(t=r,r=this.element,l=this.widget()),k.each(t,function(t,e){function i(){return a||!0!==h.options.disabled&&!k(this).hasClass("ui-state-disabled")?("string"==typeof e?h[e]:e).apply(h,arguments):void 0}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||k.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),s=n[1]+h.eventNamespace,o=n[2];o?l.on(s,o,i):r.on(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e).off(e),this.bindings=k(this.bindings.not(t).get()),this.focusable=k(this.focusable.not(t).get()),this.hoverable=k(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(k(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(k(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(k(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(k(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=k.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(k.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},k.each({show:"fadeIn",hide:"fadeOut"},function(o,a){k.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var n,s=t?!0===t||"number"==typeof t?a:t.effect||a:o;"number"==typeof(t=t||{})&&(t={duration:t}),n=!k.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&k.effects&&k.effects.effect[s]?e[o](t):s!==o&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){k(this)[o](),i&&i.call(e[0]),t()})}}),k.widget,w=Math.max,C=Math.abs,a=/left|center|right/,r=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,c=/%$/,S=k.fn.position,k.position={scrollbarWidth:function(){if(void 0!==s)return s;var t,e,i=k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=i.children()[0];return k("body").append(i),t=n.offsetWidth,i.css("overflow","scroll"),t===(e=n.offsetWidth)&&(e=i[0].clientWidth),i.remove(),s=t-e},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?k.position.scrollbarWidth():0,height:n?k.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=k(t||window),i=k.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:i||n?{left:0,top:0}:k(t).offset(),scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},k.fn.position=function(d){if(!d||!d.of)return S.apply(this,arguments);d=k.extend({},d);var u,p,f,g,m,t,v=k(d.of),b=k.position.getWithinInfo(d.within),y=k.position.getScrollInfo(b),_=(d.collision||"flip").split(" "),x={};return t=function(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:k.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}(v),v[0].preventDefault&&(d.at="left top"),p=t.width,f=t.height,g=t.offset,m=k.extend({},g),k.each(["my","at"],function(){var t,e,i=(d[this]||"").split(" ");1===i.length&&(i=a.test(i[0])?i.concat(["center"]):r.test(i[0])?["center"].concat(i):["center","center"]),i[0]=a.test(i[0])?i[0]:"center",i[1]=r.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],d[this]=[h.exec(i[0])[0],h.exec(i[1])[0]]}),1===_.length&&(_[1]=_[0]),"right"===d.at[0]?m.left+=p:"center"===d.at[0]&&(m.left+=p/2),"bottom"===d.at[1]?m.top+=f:"center"===d.at[1]&&(m.top+=f/2),u=T(x.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var i,t,a=k(this),r=a.outerWidth(),l=a.outerHeight(),e=M(this,"marginLeft"),n=M(this,"marginTop"),s=r+e+M(this,"marginRight")+y.width,o=l+n+M(this,"marginBottom")+y.height,h=k.extend({},m),c=T(x.my,a.outerWidth(),a.outerHeight());"right"===d.my[0]?h.left-=r:"center"===d.my[0]&&(h.left-=r/2),"bottom"===d.my[1]?h.top-=l:"center"===d.my[1]&&(h.top-=l/2),h.left+=c[0],h.top+=c[1],i={marginLeft:e,marginTop:n},k.each(["left","top"],function(t,e){k.ui.position[_[t]]&&k.ui.position[_[t]][e](h,{targetWidth:p,targetHeight:f,elemWidth:r,elemHeight:l,collisionPosition:i,collisionWidth:s,collisionHeight:o,offset:[u[0]+c[0],u[1]+c[1]],my:d.my,at:d.at,within:b,elem:a})}),d.using&&(t=function(t){var e=g.left-h.left,i=e+p-r,n=g.top-h.top,s=n+f-l,o={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:a,left:h.left,top:h.top,width:r,height:l},horizontal:i<0?"left":0<e?"right":"center",vertical:s<0?"top":0<n?"bottom":"middle"};p<r&&p>C(e+i)&&(o.horizontal="center"),f<l&&f>C(n+s)&&(o.vertical="middle"),o.important=w(C(e),C(i))>w(C(n),C(s))?"horizontal":"vertical",d.using.call(this,t,o)}),a.offset(k.extend(h,{using:t}))})},k.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,r=s-a,l=a+e.collisionWidth-o-s;e.collisionWidth>o?0<r&&l<=0?(i=t.left+r+e.collisionWidth-o-s,t.left+=r-i):t.left=0<l&&r<=0?s:l<r?s+o-e.collisionWidth:s:0<r?t.left+=r:0<l?t.left-=l:t.left=w(t.left-a,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,r=s-a,l=a+e.collisionHeight-o-s;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-s,t.top+=r-i):t.top=0<l&&r<=0?s:l<r?s+o-e.collisionHeight:s:0<r?t.top+=r:0<l?t.top-=l:t.top=w(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,a=s.width,r=s.isWindow?s.scrollLeft:s.offset.left,l=t.left-e.collisionPosition.marginLeft,h=l-r,c=l+e.collisionWidth-a-r,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,u="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];h<0?((i=t.left+d+u+p+e.collisionWidth-a-o)<0||C(h)>i)&&(t.left+=d+u+p):0<c&&(0<(n=t.left-e.collisionPosition.marginLeft+d+u+p-r)||c>C(n))&&(t.left+=d+u+p)},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,a=s.height,r=s.isWindow?s.scrollTop:s.offset.top,l=t.top-e.collisionPosition.marginTop,h=l-r,c=l+e.collisionHeight-a-r,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,u="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,p=-2*e.offset[1];h<0?((n=t.top+d+u+p+e.collisionHeight-a-o)<0||C(h)>n)&&(t.top+=d+u+p):0<c&&(0<(i=t.top-e.collisionPosition.marginTop+d+u+p-r)||c>C(i))&&(t.top+=d+u+p)}},flipfit:{left:function(){k.ui.position.flip.left.apply(this,arguments),k.ui.position.fit.left.apply(this,arguments)},top:function(){k.ui.position.flip.top.apply(this,arguments),k.ui.position.fit.top.apply(this,arguments)}}},k.ui.position,k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(e){return function(t){return!!k.data(t,e)}}):function(t,e,i){return!!k.data(t,i[3])}}),k.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}});var g,m,v,b,y,_,x,P,D,I,A,O,z,F,L,$,H,E,W,N,R,B="ui-effects-",j="ui-effects-style",V="ui-effects-animated",q=k;function Y(t,e,i,n){return k.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),k.isFunction(e)&&(n=e,i=null,e={}),"number"!=typeof e&&!k.fx.speeds[e]||(n=i,i=e,e={}),k.isFunction(i)&&(n=i,i=null),e&&k.extend(t,e),i=i||e.duration,t.duration=k.fx.off?0:"number"==typeof i?i:i in k.fx.speeds?k.fx.speeds[i]:k.fx.speeds._default,t.complete=n||e.complete,t}function U(t){return!(t&&"number"!=typeof t&&!k.fx.speeds[t])||("string"==typeof t&&!k.effects.effect[t]||(!!k.isFunction(t)||"object"==typeof t&&!t.effect))}function X(t,e){var i=e.outerWidth(),n=e.outerHeight(),s=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}function K(t){var e,i,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(n&&n.length&&n[0]&&n[n[0]])for(i=n.length;i--;)"string"==typeof n[e=n[i]]&&(s[k.camelCase(e)]=n[e]);else for(e in n)"string"==typeof n[e]&&(s[e]=n[e]);return s}function G(t,e,i){var n=E[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:t<0?0:t>n.max?n.max:t)}function Z(a){var r=$(),l=r._rgba=[];return a=a.toLowerCase(),R(L,function(t,e){var i,n=e.re.exec(a),s=n&&e.parse(n),o=e.space||"rgba";return s?(i=r[o](s),r[H[o].cache]=i[H[o].cache],l=r._rgba=i._rgba,!1):O}),l.length?("0,0,0,0"===l.join()&&A.extend(l,z.transparent),r):z[a]}function Q(t,e,i){return 6*(i=(i+1)%1)<1?t+6*(e-t)*i:2*i<1?e:3*i<2?t+6*(e-t)*(2/3-i):t}k.effects={effect:{}},F=/^([\-+])=\s*(\d+\.?\d*)/,L=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],$=(A=q).Color=function(t,e,i,n){return new A.Color.fn.parse(t,e,i,n)},H={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},E={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},W=$.support={},N=A("<p>")[0],R=A.each,N.style.cssText="background-color:rgba(1,1,1,.5)",W.rgba=-1<N.style.backgroundColor.indexOf("rgba"),R(H,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),$.fn=A.extend($.prototype,{parse:function(s,t,e,i){if(s===O)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=A(s).css(t),t=O);var o=this,n=A.type(s),a=this._rgba=[];return t!==O&&(s=[s,t,e,i],n="array"),"string"===n?this.parse(Z(s)||z._default):"array"===n?(R(H.rgba.props,function(t,e){a[e.idx]=G(s[e.idx],e)}),this):"object"===n?(R(H,s instanceof $?function(t,e){s[e.cache]&&(o[e.cache]=s[e.cache].slice())}:function(t,i){var n=i.cache;R(i.props,function(t,e){if(!o[n]&&i.to){if("alpha"===t||null==s[t])return;o[n]=i.to(o._rgba)}o[n][e.idx]=G(s[t],e,!0)}),o[n]&&A.inArray(null,o[n].slice(0,3))<0&&(o[n][3]=1,i.from&&(o._rgba=i.from(o[n])))}),this):O},is:function(t){var s=$(t),o=!0,a=this;return R(H,function(t,e){var i,n=s[e.cache];return n&&(i=a[e.cache]||e.to&&e.to(a._rgba)||[],R(e.props,function(t,e){return null!=n[e.idx]?o=n[e.idx]===i[e.idx]:O})),o}),o},_space:function(){var i=[],n=this;return R(H,function(t,e){n[e.cache]&&i.push(t)}),i.pop()},transition:function(t,a){var r=$(t),e=r._space(),i=H[e],n=0===this.alpha()?$("transparent"):this,l=n[i.cache]||i.to(n._rgba),h=l.slice();return r=r[i.cache],R(i.props,function(t,e){var i=e.idx,n=l[i],s=r[i],o=E[e.type]||{};null!==s&&(null===n?h[i]=s:(o.mod&&(s-n>o.mod/2?n+=o.mod:n-s>o.mod/2&&(n-=o.mod)),h[i]=G((s-n)*a+n,e)))}),this[e](h)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),i=e.pop(),n=$(t)._rgba;return $(A.map(e,function(t,e){return(1-i)*n[e]+i*t}))},toRgbaString:function(){var t="rgba(",e=A.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=A.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),i=e.pop();return t&&e.push(~~(255*i)),"#"+A.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),$.fn.parse.prototype=$.fn,H.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(n,s,o),l=Math.min(n,s,o),h=r-l,c=r+l,d=.5*c;return e=l===r?0:n===r?60*(s-o)/h+360:s===r?60*(o-n)/h+120:60*(n-s)/h+240,i=0==h?0:d<=.5?h/c:h/(2-c),[Math.round(e)%360,i,d,null==a?1:a]},H.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],s=t[3],o=n<=.5?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*Q(a,o,e+1/3)),Math.round(255*Q(a,o,e)),Math.round(255*Q(a,o,e-1/3)),s]},R(H,function(l,t){var i=t.props,a=t.cache,r=t.to,h=t.from;$.fn[l]=function(t){if(r&&!this[a]&&(this[a]=r(this._rgba)),t===O)return this[a].slice();var e,n=A.type(t),s="array"===n||"object"===n?t:arguments,o=this[a].slice();return R(i,function(t,e){var i=s["object"===n?t:e.idx];null==i&&(i=o[e.idx]),o[e.idx]=G(i,e)}),h?((e=$(h(o)))[a]=o,e):$(o)},R(i,function(a,r){$.fn[a]||($.fn[a]=function(t){var e,i=A.type(t),n="alpha"===a?this._hsla?"hsla":"rgba":l,s=this[n](),o=s[r.idx];return"undefined"===i?o:("function"===i&&(t=t.call(this,o),i=A.type(t)),null==t&&r.empty?this:("string"===i&&(e=F.exec(t))&&(t=o+parseFloat(e[2])*("+"===e[1]?1:-1)),s[r.idx]=t,this[n](s)))})})}),$.hook=function(t){var e=t.split(" ");R(e,function(t,o){A.cssHooks[o]={set:function(t,e){var i,n,s="";if("transparent"!==e&&("string"!==A.type(e)||(i=Z(e)))){if(e=$(i||e),!W.rgba&&1!==e._rgba[3]){for(n="backgroundColor"===o?t.parentNode:t;(""===s||"transparent"===s)&&n&&n.style;)try{s=A.css(n,"backgroundColor"),n=n.parentNode}catch(t){}e=e.blend(s&&"transparent"!==s?s:"_default")}e=e.toRgbaString()}try{t.style[o]=e}catch(t){}}},A.fx.step[o]=function(t){t.colorInit||(t.start=$(t.elem,o),t.end=$(t.end),t.colorInit=!0),A.cssHooks[o].set(t.elem,t.start.transition(t.end,t.pos))}})},$.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),A.cssHooks.borderColor={expand:function(i){var n={};return R(["Top","Right","Bottom","Left"],function(t,e){n["border"+e+"Color"]=i}),n}},z=A.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},D=["add","remove","toggle"],I={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){k.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(q.style(t.elem,e,t.end),t.setAttr=!0)}}),k.fn.addBack||(k.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),k.effects.animateClass=function(s,t,e,i){var o=k.speed(t,e,i);return this.queue(function(){var t,i=k(this),e=i.attr("class")||"",n=o.children?i.find("*").addBack():i;n=n.map(function(){return{el:k(this),start:K(this)}}),(t=function(){k.each(D,function(t,e){s[e]&&i[e+"Class"](s[e])})})(),n=n.map(function(){return this.end=K(this.el[0]),this.diff=function(t,e){var i,n,s={};for(i in e)n=e[i],t[i]!==n&&(I[i]||!k.fx.step[i]&&isNaN(parseFloat(n))||(s[i]=n));return s}(this.start,this.end),this}),i.attr("class",e),n=n.map(function(){var t=this,e=k.Deferred(),i=k.extend({},o,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,i),e.promise()}),k.when.apply(k,n.get()).done(function(){t(),k.each(arguments,function(){var e=this.el;k.each(this.diff,function(t){e.css(t,"")})}),o.complete.call(i[0])})})},k.fn.extend({addClass:(P=k.fn.addClass,function(t,e,i,n){return e?k.effects.animateClass.call(this,{add:t},e,i,n):P.apply(this,arguments)}),removeClass:(x=k.fn.removeClass,function(t,e,i,n){return 1<arguments.length?k.effects.animateClass.call(this,{remove:t},e,i,n):x.apply(this,arguments)}),toggleClass:(_=k.fn.toggleClass,function(t,e,i,n,s){return"boolean"==typeof e||void 0===e?i?k.effects.animateClass.call(this,e?{add:t}:{remove:t},i,n,s):_.apply(this,arguments):k.effects.animateClass.call(this,{toggle:t},e,i,n)}),switchClass:function(t,e,i,n,s){return k.effects.animateClass.call(this,{add:e,remove:t},i,n,s)}}),k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=(y=k.expr.filters.animated,function(t){return!!k(t).data(V)||y(t)})),!1!==k.uiBackCompat&&k.extend(k.effects,{save:function(t,e){for(var i=0,n=e.length;i<n;i++)null!==e[i]&&t.data(B+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,s=e.length;n<s;n++)null!==e[n]&&(i=t.data(B+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper"))return i.parent();var n={width:i.outerWidth(!0),height:i.outerHeight(!0),float:i.css("float")},t=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:i.width(),height:i.height()},s=document.activeElement;try{s.id}catch(t){s=document.body}return i.wrap(t),i[0]!==s&&!k.contains(i[0],s)||k(s).trigger("focus"),t=i.parent(),"static"===i.css("position")?(t.css({position:"relative"}),i.css({position:"relative"})):(k.extend(n,{position:i.css("position"),zIndex:i.css("z-index")}),k.each(["top","left","bottom","right"],function(t,e){n[e]=i.css(e),isNaN(parseInt(n[e],10))&&(n[e]="auto")}),i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(e),t.css(n).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!k.contains(t[0],e)||k(e).trigger("focus")),t}}),k.extend(k.effects,{version:"1.12.1",define:function(t,e,i){return i||(i=e,e="effect"),k.effects.effect[t]=i,k.effects.effect[t].mode=e,i},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,s="vertical"!==i?(e||100)/100:1;return{height:t.height()*s,width:t.width()*n,outerHeight:t.outerHeight()*s,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();1<e&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(j,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(j)||"",t.removeData(j)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),n=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=k("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(B+"placeholder",e)),t.css({position:i,left:n.left,top:n.top}),e},removePlaceholder:function(t){var e=B+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){k.effects.restoreStyle(t),k.effects.removePlaceholder(t)},setTransition:function(n,t,s,o){return o=o||{},k.each(t,function(t,e){var i=n.cssUnit(e);0<i[0]&&(o[e]=i[0]*s+i[1])}),o}}),k.fn.extend({effect:function(){function t(t){function e(){k.isFunction(r)&&r.call(i[0]),k.isFunction(t)&&t()}var i=k(this);n.mode=h.shift(),!1===k.uiBackCompat||o?"none"===n.mode?(i[l](),e()):s.call(i[0],n,function(){i.removeData(V),k.effects.cleanUp(i),"hide"===n.mode&&i.hide(),e()}):(i.is(":hidden")?"hide"===l:"show"===l)?(i[l](),e()):s.call(i[0],n,e)}function e(t){var e=k(this),i=k.effects.mode(e,l)||o;e.data(V,!0),h.push(i),o&&("show"===i||i===o&&"hide"===i)&&e.show(),o&&"none"===i||k.effects.saveStyle(e),k.isFunction(t)&&t()}var n=Y.apply(this,arguments),s=k.effects.effect[n.effect],o=s.mode,i=n.queue,a=i||"fx",r=n.complete,l=n.mode,h=[];return k.fx.off||!s?l?this[l](n.duration,r):this.each(function(){r&&r.call(this)}):!1===i?this.each(e).each(t):this.queue(a,e).queue(a,t)},show:(b=k.fn.show,function(t){if(U(t))return b.apply(this,arguments);var e=Y.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(v=k.fn.hide,function(t){if(U(t))return v.apply(this,arguments);var e=Y.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(m=k.fn.toggle,function(t){if(U(t)||"boolean"==typeof t)return m.apply(this,arguments);var e=Y.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var i=this.css(t),n=[];return k.each(["em","px","%","pt"],function(t,e){0<i.indexOf(e)&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):X(this.css("clip"),this)},transfer:function(t,e){var i=k(this),n=k(t.to),s="fixed"===n.css("position"),o=k("body"),a=s?o.scrollTop():0,r=s?o.scrollLeft():0,l=n.offset(),h={top:l.top-a,left:l.left-r,height:n.innerHeight(),width:n.innerWidth()},c=i.offset(),d=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({top:c.top-a,left:c.left-r,height:i.innerHeight(),width:i.innerWidth(),position:s?"fixed":"absolute"}).animate(h,t.duration,t.easing,function(){d.remove(),k.isFunction(e)&&e()})}}),k.fx.step.clip=function(t){t.clipInit||(t.start=k(t.elem).cssClip(),"string"==typeof t.end&&(t.end=X(t.end,t.elem)),t.clipInit=!0),k(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},g={},k.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){g[t]=function(t){return Math.pow(t,e+2)}}),k.extend(g,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),k.each(g,function(t,e){k.easing["easeIn"+t]=e,k.easing["easeOut"+t]=function(t){return 1-e(1-t)},k.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});var J,tt;k.effects;k.effects.define("blind","hide",function(t,e){var i={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=k(this),s=t.direction||"up",o=n.cssClip(),a={clip:k.extend({},o)},r=k.effects.createPlaceholder(n);a.clip[i[s][0]]=a.clip[i[s][1]],"show"===t.mode&&(n.cssClip(a.clip),r&&r.css(k.effects.clipToBox(a)),a.clip=o),r&&r.animate(k.effects.clipToBox(a),t.duration,t.easing),n.animate(a,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("bounce",function(t,e){var i,n,s,o=k(this),a=t.mode,r="hide"===a,l="show"===a,h=t.direction||"up",c=t.distance,d=t.times||5,u=2*d+(l||r?1:0),p=t.duration/u,f=t.easing,g="up"===h||"down"===h?"top":"left",m="up"===h||"left"===h,v=0,b=o.queue().length;for(k.effects.createPlaceholder(o),s=o.css(g),c=c||o["top"==g?"outerHeight":"outerWidth"]()/3,l&&((n={opacity:1})[g]=s,o.css("opacity",0).css(g,m?2*-c:2*c).animate(n,p,f)),r&&(c/=Math.pow(2,d-1)),(n={})[g]=s;v<d;v++)(i={})[g]=(m?"-=":"+=")+c,o.animate(i,p,f).animate(n,p,f),c=r?2*c:c/2;r&&((i={opacity:0})[g]=(m?"-=":"+=")+c,o.animate(i,p,f)),o.queue(e),k.effects.unshift(o,b,1+u)}),k.effects.define("clip","hide",function(t,e){var i,n={},s=k(this),o=t.direction||"vertical",a="both"===o,r=a||"horizontal"===o,l=a||"vertical"===o;i=s.cssClip(),n.clip={top:l?(i.bottom-i.top)/2:i.top,right:r?(i.right-i.left)/2:i.right,bottom:l?(i.bottom-i.top)/2:i.bottom,left:r?(i.right-i.left)/2:i.left},k.effects.createPlaceholder(s),"show"===t.mode&&(s.cssClip(n.clip),n.clip=i),s.animate(n,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("drop","hide",function(t,e){var i,n=k(this),s="show"===t.mode,o=t.direction||"left",a="up"===o||"down"===o?"top":"left",r="up"===o||"left"===o?"-=":"+=",l="+="==r?"-=":"+=",h={opacity:0};k.effects.createPlaceholder(n),i=t.distance||n["top"==a?"outerHeight":"outerWidth"](!0)/2,h[a]=r+i,s&&(n.css(h),h[a]=l+i,h.opacity=1),n.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("explode","hide",function(t,e){function i(){m.push(this),m.length===h*c&&(d.css({visibility:"visible"}),k(m).remove(),e())}var n,s,o,a,r,l,h=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=h,d=k(this),u="show"===t.mode,p=d.show().css("visibility","hidden").offset(),f=Math.ceil(d.outerWidth()/c),g=Math.ceil(d.outerHeight()/h),m=[];for(n=0;n<h;n++)for(a=p.top+n*g,l=n-(h-1)/2,s=0;s<c;s++)o=p.left+s*f,r=s-(c-1)/2,d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*f,top:-n*g}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:g,left:o+(u?r*f:0),top:a+(u?l*g:0),opacity:u?0:1}).animate({left:o+(u?0:r*f),top:a+(u?0:l*g),opacity:u?1:0},t.duration||500,t.easing,i)}),k.effects.define("fade","toggle",function(t,e){var i="show"===t.mode;k(this).css("opacity",i?0:1).animate({opacity:i?1:0},{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("fold","hide",function(e,t){var i=k(this),n=e.mode,s="show"===n,o="hide"===n,a=e.size||15,r=/([0-9]+)%/.exec(a),l=!!e.horizFirst?["right","bottom"]:["bottom","right"],h=e.duration/2,c=k.effects.createPlaceholder(i),d=i.cssClip(),u={clip:k.extend({},d)},p={clip:k.extend({},d)},f=[d[l[0]],d[l[1]]],g=i.queue().length;r&&(a=parseInt(r[1],10)/100*f[o?0:1]),u.clip[l[0]]=a,p.clip[l[0]]=a,p.clip[l[1]]=0,s&&(i.cssClip(p.clip),c&&c.css(k.effects.clipToBox(p)),p.clip=d),i.queue(function(t){c&&c.animate(k.effects.clipToBox(u),h,e.easing).animate(k.effects.clipToBox(p),h,e.easing),t()}).animate(u,h,e.easing).animate(p,h,e.easing).queue(t),k.effects.unshift(i,g,4)}),k.effects.define("highlight","show",function(t,e){var i=k(this),n={backgroundColor:i.css("backgroundColor")};"hide"===t.mode&&(n.opacity=0),k.effects.saveStyle(i),i.css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(n,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),k.effects.define("size",function(s,e){var t,o,i,n=k(this),a=["fontSize"],r=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=s.mode,c="effect"!==h,d=s.scale||"both",u=s.origin||["middle","center"],p=n.css("position"),f=n.position(),g=k.effects.scaledDimensions(n),m=s.from||g,v=s.to||k.effects.scaledDimensions(n,0);k.effects.createPlaceholder(n),"show"===h&&(i=m,m=v,v=i),o={from:{y:m.height/g.height,x:m.width/g.width},to:{y:v.height/g.height,x:v.width/g.width}},"box"!==d&&"both"!==d||(o.from.y!==o.to.y&&(m=k.effects.setTransition(n,r,o.from.y,m),v=k.effects.setTransition(n,r,o.to.y,v)),o.from.x!==o.to.x&&(m=k.effects.setTransition(n,l,o.from.x,m),v=k.effects.setTransition(n,l,o.to.x,v))),"content"!==d&&"both"!==d||o.from.y===o.to.y||(m=k.effects.setTransition(n,a,o.from.y,m),v=k.effects.setTransition(n,a,o.to.y,v)),u&&(t=k.effects.getBaseline(u,g),m.top=(g.outerHeight-m.outerHeight)*t.y+f.top,m.left=(g.outerWidth-m.outerWidth)*t.x+f.left,v.top=(g.outerHeight-v.outerHeight)*t.y+f.top,v.left=(g.outerWidth-v.outerWidth)*t.x+f.left),n.css(m),"content"!==d&&"both"!==d||(r=r.concat(["marginTop","marginBottom"]).concat(a),l=l.concat(["marginLeft","marginRight"]),n.find("*[width]").each(function(){var t=k(this),e=k.effects.scaledDimensions(t),i={height:e.height*o.from.y,width:e.width*o.from.x,outerHeight:e.outerHeight*o.from.y,outerWidth:e.outerWidth*o.from.x},n={height:e.height*o.to.y,width:e.width*o.to.x,outerHeight:e.height*o.to.y,outerWidth:e.width*o.to.x};o.from.y!==o.to.y&&(i=k.effects.setTransition(t,r,o.from.y,i),n=k.effects.setTransition(t,r,o.to.y,n)),o.from.x!==o.to.x&&(i=k.effects.setTransition(t,l,o.from.x,i),n=k.effects.setTransition(t,l,o.to.x,n)),c&&k.effects.saveStyle(t),t.css(i),t.animate(n,s.duration,s.easing,function(){c&&k.effects.restoreStyle(t)})})),n.animate(v,{queue:!1,duration:s.duration,easing:s.easing,complete:function(){var t=n.offset();0===v.opacity&&n.css("opacity",m.opacity),c||(n.css("position","static"===p?"relative":p).offset(t),k.effects.saveStyle(n)),e()}})}),k.effects.define("scale",function(t,e){var i=k(this),n=t.mode,s=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"effect"!==n?0:100),o=k.extend(!0,{from:k.effects.scaledDimensions(i),to:k.effects.scaledDimensions(i,s,t.direction||"both"),origin:t.origin||["middle","center"]},t);t.fade&&(o.from.opacity=1,o.to.opacity=0),k.effects.effect.size.call(this,o,e)}),k.effects.define("puff","hide",function(t,e){var i=k.extend(!0,{},t,{fade:!0,percent:parseInt(t.percent,10)||150});k.effects.effect.scale.call(this,i,e)}),k.effects.define("pulsate","show",function(t,e){var i=k(this),n=t.mode,s="show"===n,o=s||"hide"===n,a=2*(t.times||5)+(o?1:0),r=t.duration/a,l=0,h=1,c=i.queue().length;for(!s&&i.is(":visible")||(i.css("opacity",0).show(),l=1);h<a;h++)i.animate({opacity:l},r,t.easing),l=1-l;i.animate({opacity:l},r,t.easing),i.queue(e),k.effects.unshift(i,c,1+a)}),k.effects.define("shake",function(t,e){var i=1,n=k(this),s=t.direction||"left",o=t.distance||20,a=t.times||3,r=2*a+1,l=Math.round(t.duration/r),h="up"===s||"down"===s?"top":"left",c="up"===s||"left"===s,d={},u={},p={},f=n.queue().length;for(k.effects.createPlaceholder(n),d[h]=(c?"-=":"+=")+o,u[h]=(c?"+=":"-=")+2*o,p[h]=(c?"-=":"+=")+2*o,n.animate(d,l,t.easing);i<a;i++)n.animate(u,l,t.easing).animate(p,l,t.easing);n.animate(u,l,t.easing).animate(d,l/2,t.easing).queue(e),k.effects.unshift(n,f,1+r)}),k.effects.define("slide","show",function(t,e){var i,n,s=k(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=t.mode,r=t.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r,c=t.distance||s["top"==l?"outerHeight":"outerWidth"](!0),d={};k.effects.createPlaceholder(s),i=s.cssClip(),n=s.position()[l],d[l]=(h?-1:1)*c+n,d.clip=s.cssClip(),d.clip[o[r][1]]=d.clip[o[r][0]],"show"===a&&(s.cssClip(d.clip),s.css(l,d[l]),d.clip=i,d[l]=n),s.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),!1!==k.uiBackCompat&&k.effects.define("transfer",function(t,e){k(this).transfer(t,e)}),k.ui.focusable=function(t,e){var i,n,s,o,a,r=t.nodeName.toLowerCase();return"area"===r?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(0<(s=k("img[usemap='#"+n+"']")).length&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(r)?(o=!t.disabled)&&((a=k(t).closest("fieldset")[0])&&(o=!a.disabled)):o="a"===r&&t.href||e,o&&k(t).is(":visible")&&function(t){for(var e=t.css("visibility");"inherit"===e;)e=(t=t.parent()).css("visibility");return"hidden"!==e}(k(t)))},k.extend(k.expr[":"],{focusable:function(t){return k.ui.focusable(t,null!=k.attr(t,"tabindex"))}}),k.ui.focusable,k.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):k(this[0].form)},k.ui.formResetMixin={_formResetHandler:function(){var e=k(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");k.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(k.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===k.fn.jquery.substring(0,3)&&(k.each(["Width","Height"],function(t,i){function n(t,e,i,n){return k.each(s,function(){e-=parseFloat(k.css(t,"padding"+this))||0,i&&(e-=parseFloat(k.css(t,"border"+this+"Width"))||0),n&&(e-=parseFloat(k.css(t,"margin"+this))||0)}),e}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};k.fn["inner"+i]=function(t){return void 0===t?a["inner"+i].call(this):this.each(function(){k(this).css(o,n(this,t)+"px")})},k.fn["outer"+i]=function(t,e){return"number"!=typeof t?a["outer"+i].call(this,t):this.each(function(){k(this).css(o,n(this,t,!0,e)+"px")})}}),k.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.ui.escapeSelector=(tt=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(tt,"\\$1")}),k.fn.labels=function(){var t,e,i,n,s;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(s=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),e="label[for='"+k.ui.escapeSelector(i)+"']",n=n.add(s.find(e).addBack(e))),this.pushStack(n))},k.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=k(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&s.length?s:k(this[0].ownerDocument||document)},k.extend(k.expr[":"],{tabbable:function(t){var e=k.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&k.ui.focusable(t,i)}}),k.fn.extend({uniqueId:(J=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++J)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&k(this).removeAttr("id")})}}),k.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=k(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),t.collapsible||!1!==t.active&&null!=t.active||(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():k()}},_createIcons:function(){var t,e,i=this.options.icons;i&&(t=k("<span>"),this._addClass(t,"ui-accordion-header-icon","ui-icon "+i.header),t.prependTo(this.headers),e=this.active.children(".ui-accordion-header-icon"),this._removeClass(e,i.header)._addClass(e,null,i.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),void("icons"===t&&(this._destroyIcons(),e&&this._createIcons())))},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var e=k.ui.keyCode,i=this.headers.length,n=this.headers.index(t.target),s=!1;switch(t.keyCode){case e.RIGHT:case e.DOWN:s=this.headers[(n+1)%i];break;case e.LEFT:case e.UP:s=this.headers[(n-1+i)%i];break;case e.SPACE:case e.ENTER:this._eventHandler(t);break;case e.HOME:s=this.headers[0];break;case e.END:s=this.headers[i-1]}s&&(k(t.target).attr("tabIndex",-1),k(s).attr("tabIndex",0),k(s).trigger("focus"),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===k.ui.keyCode.UP&&t.ctrlKey&&k(t.currentTarget).prev().trigger("focus")},refresh:function(){var t=this.options;this._processPanels(),!1===t.active&&!0===t.collapsible||!this.headers.length?(t.active=!1,this.active=k()):!1===t.active?this._activate(0):this.active.length&&!k.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=k()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var i,t=this.options,e=t.heightStyle,n=this.element.parent();this.active=this._findActive(t.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var t=k(this),e=t.uniqueId().attr("id"),i=t.next(),n=i.uniqueId().attr("id");t.attr("aria-controls",n),i.attr("aria-labelledby",e)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(t.event),"fill"===e?(i=n.height(),this.element.siblings(":visible").each(function(){var t=k(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=k(this).outerHeight(!0)}),this.headers.next().each(function(){k(this).height(Math.max(0,i-k(this).innerHeight()+k(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.headers.next().each(function(){var t=k(this).is(":visible");t||k(this).show(),i=Math.max(i,k(this).css("height","").height()),t||k(this).hide()}).height(i))},_activate:function(t){var e=this._findActive(t)[0];e!==this.active[0]&&(e=e||this.active[0],this._eventHandler({target:e,currentTarget:e,preventDefault:k.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):k()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&k.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var e,i,n=this.options,s=this.active,o=k(t.currentTarget),a=o[0]===s[0],r=a&&n.collapsible,l=r?k():o.next(),h=s.next(),c={oldHeader:s,oldPanel:h,newHeader:r?k():o,newPanel:l};t.preventDefault(),a&&!n.collapsible||!1===this._trigger("beforeActivate",t,c)||(n.active=!r&&this.headers.index(o),this.active=a?k():o,this._toggle(c),this._removeClass(s,"ui-accordion-header-active","ui-state-active"),n.icons&&(e=s.children(".ui-accordion-header-icon"),this._removeClass(e,null,n.icons.activeHeader)._addClass(e,null,n.icons.header)),a||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.header)._addClass(i,null,n.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(t){var e=t.newPanel,i=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=e,this.prevHide=i,this.options.animate?this._animate(e,i,t):(i.hide(),e.show(),this._toggleComplete(t)),i.attr({"aria-hidden":"true"}),i.prev().attr({"aria-selected":"false","aria-expanded":"false"}),e.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):e.length&&this.headers.filter(function(){return 0===parseInt(k(this).attr("tabIndex"),10)}).attr("tabIndex",-1),e.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,i,e){function n(){r._toggleComplete(e)}var s,o,a,r=this,l=0,h=t.css("box-sizing"),c=t.length&&(!i.length||t.index()<i.index()),d=this.options.animate||{},u=c&&d.down||d;return"number"==typeof u&&(a=u),"string"==typeof u&&(o=u),o=o||u.easing||d.easing,a=a||u.duration||d.duration,i.length?t.length?(s=t.show().outerHeight(),i.animate(this.hideProps,{duration:a,easing:o,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:a,easing:o,complete:n,step:function(t,e){e.now=Math.round(t),"height"!==e.prop?"content-box"===h&&(l+=e.now):"content"!==r.options.heightStyle&&(e.now=Math.round(s-i.outerHeight()-l),l=0)}})):i.animate(this.hideProps,a,o,n):t.animate(this.showProps,a,o,n)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),k.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return(i=i||e.body).nodeName||(i=e.body),i},k.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(t){var e=k(t.target),i=k(k.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var e=k(t.target).closest(".ui-menu-item"),i=k(t.currentTarget);e[0]===i[0]&&(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,i))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(t){this._delay(function(){k.contains(this.element[0],k.ui.safeActiveElement(this.document[0]))||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each(function(){var t=k(this);t.data("ui-menu-submenu-caret")&&t.remove()})},_keydown:function(t){var e,i,n,s,o=!0;switch(t.keyCode){case k.ui.keyCode.PAGE_UP:this.previousPage(t);break;case k.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case k.ui.keyCode.HOME:this._move("first","first",t);break;case k.ui.keyCode.END:this._move("last","last",t);break;case k.ui.keyCode.UP:this.previous(t);break;case k.ui.keyCode.DOWN:this.next(t);break;case k.ui.keyCode.LEFT:this.collapse(t);break;case k.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case k.ui.keyCode.ENTER:case k.ui.keyCode.SPACE:this._activate(t);break;case k.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,i=this.previousFilter||"",s=!1,n=96<=t.keyCode&&t.keyCode<=105?""+(t.keyCode-96):String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===i?s=!0:n=i+n,e=this._filterMenuItems(n),(e=s&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(n=String.fromCharCode(t.keyCode),e=this._filterMenuItems(n)),e.length?(this.focus(t,e),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var t,e,i,n,s=this,o=this.options.icons.submenu,a=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),e=a.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=k(this),e=t.prev(),i=k("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+o),e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),this._addClass(e,"ui-menu","ui-widget ui-widget-content ui-front"),(t=a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=k(this);s._isDivider(t)&&s._addClass(t,"ui-menu-divider","ui-widget-content")}),n=(i=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(i,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!k.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,n,s,o,a;this._hasScroll()&&(e=parseFloat(k.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(k.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-e-i,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=t.outerHeight(),n<0?this.activeMenu.scrollTop(s+n):o<n+a&&this.activeMenu.scrollTop(s+n-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=k.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:k(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this._removeClass(t.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=t},this.delay)},_close:function(t){(t=t||(this.active?this.active.parent():this.element)).find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!k(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(t){var e,i,n;return this.active?void(this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return(e=k(this)).offset().top-i-n<0}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(t)},previousPage:function(t){var e,i,n;return this.active?void(this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=k(this)).offset().top-i+n}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items).first()))):void this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||k(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)},_filterMenuItems:function(t){var e=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=RegExp("^"+e,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))})}}),k.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var i,n,s,t=this.element[0].nodeName.toLowerCase(),e="textarea"===t,o="input"===t;this.isMultiLine=e||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[e||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(t){if(this.element.prop("readOnly"))n=s=i=!0;else{n=s=i=!1;var e=k.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:i=!0,this._move("previousPage",t);break;case e.PAGE_DOWN:i=!0,this._move("nextPage",t);break;case e.UP:i=!0,this._keyEvent("previous",t);break;case e.DOWN:i=!0,this._keyEvent("next",t);break;case e.ENTER:this.menu.active&&(i=!0,t.preventDefault(),this.menu.select(t));break;case e.TAB:this.menu.active&&this.menu.select(t);break;case e.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(t),t.preventDefault());break;default:n=!0,this._searchTimeout(t)}}},keypress:function(t){if(i)return i=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||t.preventDefault());if(!n){var e=k.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:this._move("previousPage",t);break;case e.PAGE_DOWN:this._move("nextPage",t);break;case e.UP:this._keyEvent("previous",t);break;case e.DOWN:this._keyEvent("next",t)}}},input:function(t){return s?(s=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=k("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==k.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(t,e){var i,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){k(t.target).trigger(t.originalEvent)})):(n=e.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),void((i=e.item.attr("aria-label")||n.value)&&k.trim(i).length&&(this.liveRegion.children().hide(),k("<div>").text(i).appendTo(this.liveRegion))))},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==k.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=k("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var e=this.menu.element[0];return t.target===this.element[0]||t.target===e||k.contains(e,t.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var t=this.options.appendTo;return(t=t&&(t.jquery||t.nodeType?k(t):this.document.find(t).eq(0)))&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_initSource:function(){var i,n,s=this;k.isArray(this.options.source)?(i=this.options.source,this.source=function(t,e){e(k.ui.autocomplete.filter(i,t.term))}):"string"==typeof this.options.source?(n=this.options.source,this.source=function(t,e){s.xhr&&s.xhr.abort(),s.xhr=k.ajax({url:n,data:t,dataType:"json",success:function(t){e(t)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(n){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),e=this.menu.element.is(":visible"),i=n.altKey||n.ctrlKey||n.metaKey||n.shiftKey;t&&(!t||e||i)||(this.selectedItem=null,this.search(null,n))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return k.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t=t&&this._normalize(t),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:k.map(t,function(t){return"string"==typeof t?{label:t,value:t}:k.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var e=this.menu.element.empty();this._renderMenu(e,t),this.isNewMenu=!0,this.menu.refresh(),e.show(),this._resizeMenu(),e.position(k.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,t){var n=this;k.each(t,function(t,e){n._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(t,e){return k("<li>").append(k("<div>").text(e.label)).appendTo(t)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),k.extend(k.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,e){var i=RegExp(k.ui.autocomplete.escapeRegex(e),"i");return k.grep(t,function(t){return i.test(t.label||t.value||t)})}}),k.widget("ui.autocomplete",k.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(1<t?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),k("<div>").text(e).appendTo(this.liveRegion))}}),k.ui.autocomplete;var et,it,nt=/ui-corner-([a-z]){2,6}/g;k.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var a=this,r=[];k.each(this.options.items,function(s,t){var e,o={};return t?"controlgroupLabel"===s?((e=a.element.find(t)).each(function(){var t=k(this);t.children(".ui-controlgroup-label-contents").length||t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),a._addClass(e,null,"ui-widget ui-widget-content ui-state-default"),void(r=r.concat(e.get()))):void(k.fn[s]&&(o=a["_"+s+"Options"]?a["_"+s+"Options"]("middle"):{classes:{}},a.element.find(t).each(function(){var t=k(this),e=t[s]("instance"),i=k.widget.extend({},o);if("button"!==s||!t.parent(".ui-spinner").length){(e=e||t[s]()[s]("instance"))&&(i.classes=a._resolveClassesValues(i.classes,e)),t[s](i);var n=t[s]("widget");k.data(n[0],"ui-controlgroup-data",e||t[s]("instance")),r.push(n[0])}}))):void 0}),this.childWidgets=k(k.unique(r)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var t=k(this).data("ui-controlgroup-data");t&&t[e]&&t[e]()})},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var s={};return k.each(i,function(t){var e=n.options.classes[t]||"";e=k.trim(e.replace(nt,"")),s[t]=(e+" "+i[t]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var s,o=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),s=this.childWidgets,this.options.onlyVisible&&(s=s.filter(":visible")),s.length&&(k.each(["first","last"],function(t,e){var i=s[e]().data("ui-controlgroup-data");if(i&&o["_"+i.widgetName+"Options"]){var n=o["_"+i.widgetName+"Options"](1===s.length?"only":e);n.classes=o._resolveClassesValues(n.classes,i),i.element[i.widgetName](n)}else o._updateCornerClass(s[e](),e)}),this._callChildMethod("refresh"))}}),k.widget("ui.checkboxradio",[k.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var t,e,i=this,n=this._super()||{};return this._readType(),e=this.element.labels(),this.label=k(e[e.length-1]),this.label.length||k.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){i.originalLabel+=3===this.nodeType?k(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),null!=(t=this.element[0].disabled)&&(n.disabled=t),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var t=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===t&&/radio|checkbox/.test(this.type)||k.error("Can't create checkboxradio on element.nodeName="+t+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var t=this.element[0].name,e="input[name='"+k.ui.escapeSelector(t)+"']";return t?(this.form.length?k(this.form[0].elements).filter(e):k(e).filter(function(){return 0===k(this).form().length})).not(this.element):k([])},_toggleClasses:function(){var t=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",t)._toggleClass(this.icon,null,"ui-icon-blank",!t),"radio"===this.type&&this._getRadioGroup().each(function(){var t=k(this).checkboxradio("instance");t&&t._removeClass(t.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()):void 0},_updateIcon:function(t){var e="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=k("<span>"),this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(e+=t?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,t?"ui-icon-blank":"ui-icon-check")):e+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",e),t||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),k.ui.checkboxradio,k.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(t){t.keyCode===k.ui.keyCode.SPACE&&(t.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(t,e){var i="iconPosition"!==t,n=i?this.options.iconPosition:e,s="top"===n||"bottom"===n;this.icon?i&&this._removeClass(this.icon,null,this.options.icon):(this.icon=k("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),i&&this._addClass(this.icon,null,e),this._attachIcon(n),s?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),(this.element[0].disabled=e)&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==k.uiBackCompat&&(k.widget("ui.button",k.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),k.fn.button=(et=k.fn.button,function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?et.apply(this,arguments):(k.ui.checkboxradio||k.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}),k.fn.buttonset=function(){return k.ui.controlgroup||k.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),k.ui.button,k.extend(k.ui,{datepicker:{version:"1.12.1"}}),k.extend(t.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return d(this._defaults,t||{}),this},_attachDatepicker:function(t,e){var i,n,s;n="div"===(i=t.nodeName.toLowerCase())||"span"===i,t.id||(this.uuid+=1,t.id="dp"+this.uuid),(s=this._newInst(k(t),n)).settings=k.extend({},e||{}),"input"===i?this._connectDatepicker(t,s):n&&this._inlineDatepicker(t,s)},_newInst:function(t,e){return{id:t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:e,dpDiv:e?i(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,e){var i=k(t);e.append=k([]),e.trigger=k([]),i.hasClass(this.markerClassName)||(this._attachments(i,e),i.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(e),k.data(t,"datepicker",e),e.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,e){var i,n,s,o=this._get(e,"appendText"),a=this._get(e,"isRTL");e.append&&e.append.remove(),o&&(e.append=k("<span class='"+this._appendClass+"'>"+o+"</span>"),t[a?"before":"after"](e.append)),t.off("focus",this._showDatepicker),e.trigger&&e.trigger.remove(),"focus"!==(i=this._get(e,"showOn"))&&"both"!==i||t.on("focus",this._showDatepicker),"button"!==i&&"both"!==i||(n=this._get(e,"buttonText"),s=this._get(e,"buttonImage"),e.trigger=k(this._get(e,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:s,alt:n,title:n}):k("<button type='button'></button>").addClass(this._triggerClass).html(s?k("<img/>").attr({src:s,alt:n,title:n}):n)),t[a?"before":"after"](e.trigger),e.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===t[0]?k.datepicker._hideDatepicker():(k.datepicker._datepickerShowing&&k.datepicker._lastInput!==t[0]&&k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(t[0])),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(s=n=i=0;t.length>s;s++)t[s].length>i&&(i=t[s].length,n=s);return n},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(t,e){var i=k(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(e.dpDiv),k.data(t,"datepicker",e),this._setDate(e,this._getDefaultDate(e),!0),this._updateDatepicker(e),this._updateAlternate(e),e.settings.disabled&&this._disableDatepicker(t),e.dpDiv.css("display","block"))},_dialogDatepicker:function(t,e,i,n,s){var o,a,r,l,h,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),(c=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},k.data(this._dialogInput[0],"datepicker",c)),d(c.settings,n||{}),e=e&&e.constructor===Date?this._formatDate(c,e):e,this._dialogInput.val(e),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,this._pos||(a=document.documentElement.clientWidth,r=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[a/2-100+l,r/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var e,i=k(t),n=k.data(t,"datepicker");i.hasClass(this.markerClassName)&&(e=t.nodeName.toLowerCase(),k.removeData(t,"datepicker"),"input"===e?(n.append.remove(),n.trigger.remove(),i.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==e&&"span"!==e||i.removeClass(this.markerClassName).empty(),it===n&&(it=null))},_enableDatepicker:function(e){var t,i,n=k(e),s=k.data(e,"datepicker");n.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==t&&"span"!==t||((i=n.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var t,i,n=k(e),s=k.data(e,"datepicker");n.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==t&&"span"!==t||((i=n.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(t){try{return k.data(t,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,e,i){var n,s,o,a,r=this._getInst(t);return 2===arguments.length&&"string"==typeof e?"defaults"===e?k.extend({},k.datepicker._defaults):r?"all"===e?k.extend({},r.settings):this._get(r,e):null:(n=e||{},"string"==typeof e&&((n={})[e]=i),void(r&&(this._curInst===r&&this._hideDatepicker(),s=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(r,"min"),a=this._getMinMaxDate(r,"max"),d(r.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(r.settings.minDate=this._formatDate(r,o)),null!==a&&void 0!==n.dateFormat&&void 0===n.maxDate&&(r.settings.maxDate=this._formatDate(r,a)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(k(t),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(t){var e,i,n,s=k.datepicker._getInst(t.target),o=!0,a=s.dpDiv.is(".ui-datepicker-rtl");if(s._keyEvent=!0,k.datepicker._datepickerShowing)switch(t.keyCode){case 9:k.datepicker._hideDatepicker(),o=!1;break;case 13:return(n=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",s.dpDiv))[0]&&k.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,n[0]),(e=k.datepicker._get(s,"onSelect"))?(i=k.datepicker._formatDate(s),e.apply(s.input?s.input[0]:null,[i,s])):k.datepicker._hideDatepicker(),!1;case 27:k.datepicker._hideDatepicker();break;case 33:k.datepicker._adjustDate(t.target,t.ctrlKey?-k.datepicker._get(s,"stepBigMonths"):-k.datepicker._get(s,"stepMonths"),"M");break;case 34:k.datepicker._adjustDate(t.target,t.ctrlKey?+k.datepicker._get(s,"stepBigMonths"):+k.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&k.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&k.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,a?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&k.datepicker._adjustDate(t.target,t.ctrlKey?-k.datepicker._get(s,"stepBigMonths"):-k.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,a?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&k.datepicker._adjustDate(t.target,t.ctrlKey?+k.datepicker._get(s,"stepBigMonths"):+k.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&k.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?k.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var e,i,n=k.datepicker._getInst(t.target);return k.datepicker._get(n,"constrainInput")?(e=k.datepicker._possibleChars(k.datepicker._get(n,"dateFormat")),i=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||i<" "||!e||-1<e.indexOf(i)):void 0},_doKeyUp:function(t){var e=k.datepicker._getInst(t.target);if(e.input.val()!==e.lastVal)try{k.datepicker.parseDate(k.datepicker._get(e,"dateFormat"),e.input?e.input.val():null,k.datepicker._getFormatConfig(e))&&(k.datepicker._setDateFromField(e),k.datepicker._updateAlternate(e),k.datepicker._updateDatepicker(e))}catch(t){}return!0},_showDatepicker:function(t){var e,i,n,s,o,a,r;"input"!==(t=t.target||t).nodeName.toLowerCase()&&(t=k("input",t.parentNode)[0]),k.datepicker._isDisabledDatepicker(t)||k.datepicker._lastInput===t||(e=k.datepicker._getInst(t),k.datepicker._curInst&&k.datepicker._curInst!==e&&(k.datepicker._curInst.dpDiv.stop(!0,!0),e&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),!1!==(n=(i=k.datepicker._get(e,"beforeShow"))?i.apply(t,[t,e]):{})&&(d(e.settings,n),e.lastVal=null,k.datepicker._lastInput=t,k.datepicker._setDateFromField(e),k.datepicker._inDialog&&(t.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(t),k.datepicker._pos[1]+=t.offsetHeight),s=!1,k(t).parents().each(function(){return!(s|="fixed"===k(this).css("position"))}),o={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,e.dpDiv.empty(),e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(e),o=k.datepicker._checkOffset(e,o,s),e.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":s?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),e.inline||(a=k.datepicker._get(e,"showAnim"),r=k.datepicker._get(e,"duration"),e.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(k(t))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[a]?e.dpDiv.show(a,k.datepicker._get(e,"showOptions"),r):e.dpDiv[a||"show"](a?r:null),k.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),k.datepicker._curInst=e)))},_updateDatepicker:function(t){this.maxRows=4,(it=t).dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var e,i=this._getNumberOfMonths(t),n=i[1],s=t.dpDiv.find("."+this._dayOverClass+" a");0<s.length&&o.apply(s.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<n&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",17*n+"em"),t.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(t)&&t.input.trigger("focus"),t.yearshtml&&(e=t.yearshtml,setTimeout(function(){e===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),e=t.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(t,e,i){var n=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,a=t.input?t.input.outerHeight():0,r=document.documentElement.clientWidth+(i?0:k(document).scrollLeft()),l=document.documentElement.clientHeight+(i?0:k(document).scrollTop());return e.left-=this._get(t,"isRTL")?n-o:0,e.left-=i&&e.left===t.input.offset().left?k(document).scrollLeft():0,e.top-=i&&e.top===t.input.offset().top+a?k(document).scrollTop():0,e.left-=Math.min(e.left,e.left+n>r&&n<r?Math.abs(e.left+n-r):0),e.top-=Math.min(e.top,e.top+s>l&&s<l?Math.abs(s+a):0),e},_findPos:function(t){for(var e,i=this._getInst(t),n=this._get(i,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||k.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return[(e=k(t).offset()).left,e.top]},_hideDatepicker:function(t){var e,i,n,s,o=this._curInst;!o||t&&o!==k.data(t,"datepicker")||this._datepickerShowing&&(e=this._get(o,"showAnim"),i=this._get(o,"duration"),n=function(){k.datepicker._tidyDialog(o)},k.effects&&(k.effects.effect[e]||k.effects[e])?o.dpDiv.hide(e,k.datepicker._get(o,"showOptions"),i,n):o.dpDiv["slideDown"===e?"slideUp":"fadeIn"===e?"fadeOut":"hide"](e?i:null,n),e||n(),this._datepickerShowing=!1,(s=this._get(o,"onClose"))&&s.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(k.datepicker._curInst){var e=k(t.target),i=k.datepicker._getInst(e[0]);(e[0].id===k.datepicker._mainDivId||0!==e.parents("#"+k.datepicker._mainDivId).length||e.hasClass(k.datepicker.markerClassName)||e.closest("."+k.datepicker._triggerClass).length||!k.datepicker._datepickerShowing||k.datepicker._inDialog&&k.blockUI)&&(!e.hasClass(k.datepicker.markerClassName)||k.datepicker._curInst===i)||k.datepicker._hideDatepicker()}},_adjustDate:function(t,e,i){var n=k(t),s=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(s,e+("M"===i?this._get(s,"showCurrentAtPos"):0),i),this._updateDatepicker(s))},_gotoToday:function(t){var e,i=k(t),n=this._getInst(i[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(e=new Date,n.selectedDay=e.getDate(),n.drawMonth=n.selectedMonth=e.getMonth(),n.drawYear=n.selectedYear=e.getFullYear()),this._notifyChange(n),this._adjustDate(i)},_selectMonthYear:function(t,e,i){var n=k(t),s=this._getInst(n[0]);s["selected"+("M"===i?"Month":"Year")]=s["draw"+("M"===i?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(n)},_selectDay:function(t,e,i,n){var s,o=k(t);k(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||((s=this._getInst(o[0])).selectedDay=s.currentDay=k("a",n).html(),s.selectedMonth=s.currentMonth=e,s.selectedYear=s.currentYear=i,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},_clearDate:function(t){var e=k(t);this._selectDate(e,"")},_selectDate:function(t,e){var i,n=k(t),s=this._getInst(n[0]);e=null!=e?e:this._formatDate(s),s.input&&s.input.val(e),this._updateAlternate(s),(i=this._get(s,"onSelect"))?i.apply(s.input?s.input[0]:null,[e,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(t){var e,i,n,s=this._get(t,"altField");s&&(e=this._get(t,"altFormat")||this._get(t,"dateFormat"),i=this._getDate(t),n=this.formatDate(e,i,this._getFormatConfig(t)),k(s).val(n))},noWeekends:function(t){var e=t.getDay();return[0<e&&e<6,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,o,t){if(null==i||null==o)throw"Invalid arguments";if(""===(o="object"==typeof o?""+o:o+""))return null;function a(t){var e=i.length>r+1&&i.charAt(r+1)===t;return e&&r++,e}function e(t){var e=a(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{"+("y"===t?i:1)+","+i+"}"),s=o.substring(d).match(n);if(!s)throw"Missing number at position "+d;return d+=s[0].length,parseInt(s[0],10)}function n(t,e,i){var n=-1,s=k.map(a(t)?i:e,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(k.each(s,function(t,e){var i=e[1];return o.substr(d,i.length).toLowerCase()===i.toLowerCase()?(n=e[0],d+=i.length,!1):void 0}),-1!==n)return n+1;throw"Unknown name at position "+d}function s(){if(o.charAt(d)!==i.charAt(r))throw"Unexpected literal at position "+d;d++}var r,l,h,c,d=0,u=(t?t.shortYearCutoff:null)||this._defaults.shortYearCutoff,p="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),f=(t?t.dayNamesShort:null)||this._defaults.dayNamesShort,g=(t?t.dayNames:null)||this._defaults.dayNames,m=(t?t.monthNamesShort:null)||this._defaults.monthNamesShort,v=(t?t.monthNames:null)||this._defaults.monthNames,b=-1,y=-1,_=-1,x=-1,w=!1;for(r=0;i.length>r;r++)if(w)"'"!==i.charAt(r)||a("'")?s():w=!1;else switch(i.charAt(r)){case"d":_=e("d");break;case"D":n("D",f,g);break;case"o":x=e("o");break;case"m":y=e("m");break;case"M":y=n("M",m,v);break;case"y":b=e("y");break;case"@":b=(c=new Date(e("@"))).getFullYear(),y=c.getMonth()+1,_=c.getDate();break;case"!":b=(c=new Date((e("!")-this._ticksTo1970)/1e4)).getFullYear(),y=c.getMonth()+1,_=c.getDate();break;case"'":a("'")?s():w=!0;break;default:s()}if(o.length>d&&(h=o.substr(d),!/^\s+/.test(h)))throw"Extra/unparsed characters found in date: "+h;if(-1===b?b=(new Date).getFullYear():b<100&&(b+=(new Date).getFullYear()-(new Date).getFullYear()%100+(b<=p?0:-100)),-1<x)for(y=1,_=x;!(_<=(l=this._getDaysInMonth(b,y-1)));)y++,_-=l;if((c=this._daylightSavingAdjust(new Date(b,y-1,_))).getFullYear()!==b||c.getMonth()+1!==y||c.getDate()!==_)throw"Invalid date";return c},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864e9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(i,t,e){if(!t)return"";function s(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e}function n(t,e,i){var n=""+e;if(s(t))for(;i>n.length;)n="0"+n;return n}function o(t,e,i,n){return s(t)?n[e]:i[e]}var a,r=(e?e.dayNamesShort:null)||this._defaults.dayNamesShort,l=(e?e.dayNames:null)||this._defaults.dayNames,h=(e?e.monthNamesShort:null)||this._defaults.monthNamesShort,c=(e?e.monthNames:null)||this._defaults.monthNames,d="",u=!1;if(t)for(a=0;i.length>a;a++)if(u)"'"!==i.charAt(a)||s("'")?d+=i.charAt(a):u=!1;else switch(i.charAt(a)){case"d":d+=n("d",t.getDate(),2);break;case"D":d+=o("D",t.getDay(),r,l);break;case"o":d+=n("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=n("m",t.getMonth()+1,2);break;case"M":d+=o("M",t.getMonth(),h,c);break;case"y":d+=s("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":s("'")?d+="'":u=!0;break;default:d+=i.charAt(a)}return d},_possibleChars:function(i){function t(t){var e=i.length>n+1&&i.charAt(n+1)===t;return e&&n++,e}var n,e="",s=!1;for(n=0;i.length>n;n++)if(s)"'"!==i.charAt(n)||t("'")?e+=i.charAt(n):s=!1;else switch(i.charAt(n)){case"d":case"m":case"y":case"@":e+="0123456789";break;case"D":case"M":return null;case"'":t("'")?e+="'":s=!0;break;default:e+=i.charAt(n)}return e},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),o=s,a=this._getFormatConfig(t);try{o=this.parseDate(i,n,a)||s}catch(t){n=e?"":n}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=n?o.getDate():0,t.currentMonth=n?o.getMonth():0,t.currentYear=n?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(r,t,e){var i,n,s=null==t||""===t?e:"string"==typeof t?function(t){try{return k.datepicker.parseDate(k.datepicker._get(r,"dateFormat"),t,k.datepicker._getFormatConfig(r))}catch(t){}for(var e=(t.toLowerCase().match(/^c/)?k.datepicker._getDate(r):null)||new Date,i=e.getFullYear(),n=e.getMonth(),s=e.getDate(),o=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=o.exec(t);a;){switch(a[2]||"d"){case"d":case"D":s+=parseInt(a[1],10);break;case"w":case"W":s+=7*parseInt(a[1],10);break;case"m":case"M":n+=parseInt(a[1],10),s=Math.min(s,k.datepicker._getDaysInMonth(i,n));break;case"y":case"Y":i+=parseInt(a[1],10),s=Math.min(s,k.datepicker._getDaysInMonth(i,n))}a=o.exec(t)}return new Date(i,n,s)}(t):"number"==typeof t?isNaN(t)?e:(i=t,(n=new Date).setDate(n.getDate()+i),n):new Date(t.getTime());return(s=s&&"Invalid Date"==""+s?e:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(12<t.getHours()?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),s===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(t){var e=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){k.datepicker._adjustDate(i,-e,"M")},next:function(){k.datepicker._adjustDate(i,+e,"M")},hide:function(){k.datepicker._hideDatepicker()},today:function(){k.datepicker._gotoToday(i)},selectDay:function(){return k.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return k.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return k.datepicker._selectMonthYear(i,this,"Y"),!1}};k(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,n,s,o,a,r,l,h,c,d,u,p,f,g,m,v,b,y,_,x,w,k,C,S,T,M,P,D,I,A,O,z,F,L,$,H,E,W,N=new Date,R=this._daylightSavingAdjust(new Date(N.getFullYear(),N.getMonth(),N.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),q=this._get(t,"navigationAsDateFormat"),Y=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),K=1!==Y[0]||1!==Y[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),J=t.drawMonth-U,tt=t.drawYear;if(J<0&&(J+=12,tt--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-Y[0]*Y[1]+1,Q.getDate())),e=Z&&e<Z?Z:e;this._daylightSavingAdjust(new Date(tt,J,1))>e;)--J<0&&(J=11,tt--);for(t.drawMonth=J,t.drawYear=tt,i=this._get(t,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,J-X,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,J)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=q?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,J+X,1)),this._getFormatConfig(t)):s,o=this._canAdjustMonth(t,1,tt,J)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+s+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+s+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:R,a=q?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,d=this._get(t,"showWeek"),u=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),b=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),_="",w=0;Y[0]>w;w++){for(k="",this.maxRows=4,C=0;Y[1]>C;C++){if(S=this._daylightSavingAdjust(new Date(tt,J,t.selectedDay)),T=" ui-corner-all",M="",K){if(M+="<div class='ui-datepicker-group",1<Y[1])switch(C){case 0:M+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");break;case Y[1]-1:M+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:M+=" ui-datepicker-group-middle",T=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===w?B?o:n:"")+(/all|right/.test(T)&&0===w?B?n:o:"")+this._generateMonthYearHeader(t,J,tt,Z,Q,0<w||0<C,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",P=d?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",x=0;x<7;x++)P+="<th scope='col'"+(5<=(x+c+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+u[D=(x+c)%7]+"'>"+p[D]+"</span></th>";for(M+=P+"</tr></thead><tbody>",I=this._getDaysInMonth(tt,J),tt===t.selectedYear&&J===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),A=(this._getFirstDayOfMonth(tt,J)-c+7)%7,O=Math.ceil((A+I)/7),z=K&&this.maxRows>O?this.maxRows:O,this.maxRows=z,F=this._daylightSavingAdjust(new Date(tt,J,1-A)),L=0;L<z;L++){for(M+="<tr>",$=d?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(F)+"</td>":"",x=0;x<7;x++)H=m?m.apply(t.input?t.input[0]:null,[F]):[!0,""],W=(E=F.getMonth()!==J)&&!b||!H[0]||Z&&F<Z||Q&&Q<F,$+="<td class='"+(5<=(x+c+6)%7?" ui-datepicker-week-end":"")+(E?" ui-datepicker-other-month":"")+(F.getTime()===S.getTime()&&J===t.selectedMonth&&t._keyEvent||y.getTime()===F.getTime()&&y.getTime()===S.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(E&&!v?"":" "+H[1]+(F.getTime()===G.getTime()?" "+this._currentClass:"")+(F.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(E&&!v||!H[2]?"":" title='"+H[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(E&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===R.getTime()?" ui-state-highlight":"")+(F.getTime()===G.getTime()?" ui-state-active":"")+(E?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);M+=$+"</tr>"}11<++J&&(J=0,tt++),k+=M+="</tbody></table>"+(K?"</div>"+(0<Y[0]&&C===Y[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}_+=k}return _+=h,t._keyEvent=!1,_},_generateMonthYearHeader:function(t,e,i,n,s,o,a,r){var l,h,c,d,u,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),b=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",_="";if(o||!m)_+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=n&&n.getFullYear()===i,h=s&&s.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!l||c>=n.getMonth())&&(!h||s.getMonth()>=c)&&(_+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");_+="</select>"}if(b||(y+=_+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(t,"yearRange").split(":"),u=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?u+parseInt(t,10):parseInt(t,10);return isNaN(e)?u:e})(d[0]),g=Math.max(f,p(d[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=g;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),b&&(y+=(!o&&m&&v?"":"&#xa0;")+_),y+"</div>"},_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&e<i?i:e;return n&&n<s?n:s},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,n+(e<0?e:s[0]*s[1]),1));return e<0&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=n),i[1].match(/[+\-].*/)&&(r+=n)),(!s||e.getTime()>=s.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),k.fn.datepicker=function(t){if(!this.length)return this;k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);var e=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+t+"Datepicker"].apply(k.datepicker,[this[0]].concat(e)):this.each(function(){"string"==typeof t?k.datepicker["_"+t+"Datepicker"].apply(k.datepicker,[this].concat(e)):k.datepicker._attachDatepicker(this,t)}):k.datepicker["_"+t+"Datepicker"].apply(k.datepicker,[this[0]].concat(e))},k.datepicker=new t,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker,k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var st=!1;k(document).on("mouseup",function(){st=!1}),k.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(t){return!0===k.data(t.target,e.widgetName+".preventClickEvent")?(k.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!st){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,n=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&k(t.target).closest(this.options.cancel).length;return i&&!n&&this._mouseCapture(t)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?t.preventDefault():(!0===k.data(t.target,this.widgetName+".preventClickEvent")&&k.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),st=!0)),!0}},_mouseMove:function(t){if(this._mouseMoved){if(k.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&k.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,st=!1,t.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),k.ui.plugin={add:function(t,e,i){var n,s=k.ui[t].prototype;for(n in i)s.plugins[n]=s.plugins[n]||[],s.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;o.length>s;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}},k.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&k(t).trigger("blur")},k.widget("ui.draggable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<k(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(this._blurActiveElement(t),this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),!0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=k(this);return k("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=k.ui.safeActiveElement(this.document[0]);k(t.target).closest(e).length||k.ui.safeBlur(e)},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),k.ui.ddmanager&&(k.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===k(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),k.ui.ddmanager&&!e.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),k.ui.ddmanager&&k.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){var i=this._uiHash();if(!1===this._trigger("drag",t,i))return this._mouseUp(new k.Event("mouseup",t)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",k.ui.ddmanager&&k.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return k.ui.ddmanager&&!this.options.dropBehaviour&&(i=k.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||k.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?k(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),k.ui.ddmanager&&k.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.trigger("focus"),k.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new k.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!k(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(t){var e=this.options,i=k.isFunction(e.helper),n=i?k(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),k.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,n=this.options,s=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?void(this.containment=[k(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,k(window).scrollLeft()+k(window).width()-this.helperProportions.width-this.margins.left,k(window).scrollTop()+(k(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===n.containment?void(this.containment=[0,0,k(s).width()-this.helperProportions.width-this.margins.left,(k(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):n.containment.constructor===Array?void(this.containment=n.containment):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),void((i=(e=k(n.containment))[0])&&(t=/(scroll|auto)/.test(e.css("overflow")),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e))):void(this.containment=null)},_convertPositionTo:function(t,e){e=e||this.position;var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(i=this.relativeContainer?(n=this.relativeContainer.offset(),[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(s=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-a.grid[1]:s+a.grid[1]:s,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,i){return i=i||this._uiHash(),k.ui.plugin.call(this,t,[e,i,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),k.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),k.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,i){var n=k.extend({},t,{item:i.element});i.sortables=[],k(i.options.connectToSortable).each(function(){var t=k(this).sortable("instance");t&&!t.options.disabled&&(i.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,n))})},stop:function(e,t,i){var n=k.extend({},t,{item:i.element});i.cancelHelperRemoval=!1,k.each(i.sortables,function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(i,n,s){k.each(s.sortables,function(){var t=!1,e=this;e.positionAbs=s.positionAbs,e.helperProportions=s.helperProportions,e.offset.click=s.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,k.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&k.contains(e.element[0],this.element[0])&&(t=!1),t})),t?(e.isOver||(e.isOver=1,s._parent=n.helper.parent(),e.currentItem=n.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return n.helper[0]},i.target=e.currentItem[0],e._mouseCapture(i,!0),e._mouseStart(i,!0,!0),e.offset.click.top=s.offset.click.top,e.offset.click.left=s.offset.click.left,e.offset.parent.left-=s.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=s.offset.parent.top-e.offset.parent.top,s._trigger("toSortable",i),s.dropped=e.element,k.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,e.fromOutside=s),e.currentItem&&(e._mouseDrag(i),n.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",i,e._uiHash(e)),e._mouseStop(i,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),n.helper.appendTo(s._parent),s._refreshOffsets(i),n.position=s._generatePosition(i,!0),s._trigger("fromSortable",i),s.dropped=!1,k.each(s.sortables,function(){this.refreshPositions()}))})}}),k.ui.plugin.add("draggable","cursor",{start:function(t,e,i){var n=k("body"),s=i.options;n.css("cursor")&&(s._cursor=n.css("cursor")),n.css("cursor",s.cursor)},stop:function(t,e,i){var n=i.options;n._cursor&&k("body").css("cursor",n._cursor)}}),k.ui.plugin.add("draggable","opacity",{start:function(t,e,i){var n=k(e.helper),s=i.options;n.css("opacity")&&(s._opacity=n.css("opacity")),n.css("opacity",s.opacity)},stop:function(t,e,i){var n=i.options;n._opacity&&k(e.helper).css("opacity",n._opacity)}}),k.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,e,i){var n=i.options,s=!1,o=i.scrollParentNotHidden[0],a=i.document[0];o!==a&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(i.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=s=o.scrollTop+n.scrollSpeed:t.pageY-i.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(i.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+n.scrollSpeed:t.pageX-i.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-k(a).scrollTop()<n.scrollSensitivity?s=k(a).scrollTop(k(a).scrollTop()-n.scrollSpeed):k(window).height()-(t.pageY-k(a).scrollTop())<n.scrollSensitivity&&(s=k(a).scrollTop(k(a).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-k(a).scrollLeft()<n.scrollSensitivity?s=k(a).scrollLeft(k(a).scrollLeft()-n.scrollSpeed):k(window).width()-(t.pageX-k(a).scrollLeft())<n.scrollSensitivity&&(s=k(a).scrollLeft(k(a).scrollLeft()+n.scrollSpeed)))),!1!==s&&k.ui.ddmanager&&!n.dropBehaviour&&k.ui.ddmanager.prepareOffsets(i,t)}}),k.ui.plugin.add("draggable","snap",{start:function(t,e,i){var n=i.options;i.snapElements=[],k(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=k(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,i){var n,s,o,a,r,l,h,c,d,u,p=i.options,f=p.snapTolerance,g=e.offset.left,m=g+i.helperProportions.width,v=e.offset.top,b=v+i.helperProportions.height;for(d=i.snapElements.length-1;0<=d;d--)l=(r=i.snapElements[d].left-i.margins.left)+i.snapElements[d].width,c=(h=i.snapElements[d].top-i.margins.top)+i.snapElements[d].height,m<r-f||l+f<g||b<h-f||c+f<v||!k.contains(i.snapElements[d].item.ownerDocument,i.snapElements[d].item)?(i.snapElements[d].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,k.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=!1):("inner"!==p.snapMode&&(n=f>=Math.abs(h-b),s=f>=Math.abs(c-v),o=f>=Math.abs(r-m),a=f>=Math.abs(l-g),n&&(e.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top),s&&(e.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r-i.helperProportions.width}).left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l}).left)),u=n||s||o||a,"outer"!==p.snapMode&&(n=f>=Math.abs(h-v),s=f>=Math.abs(c-b),o=f>=Math.abs(r-g),a=f>=Math.abs(l-m),n&&(e.position.top=i._convertPositionTo("relative",{top:h,left:0}).top),s&&(e.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r}).left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left)),!i.snapElements[d].snapping&&(n||s||o||a||u)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,k.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=n||s||o||a||u)}}),k.ui.plugin.add("draggable","stack",{start:function(t,e,i){var n,s=i.options,o=k.makeArray(k(s.stack)).sort(function(t,e){return(parseInt(k(t).css("zIndex"),10)||0)-(parseInt(k(e).css("zIndex"),10)||0)});o.length&&(n=parseInt(k(o[0]).css("zIndex"),10)||0,k(o).each(function(t){k(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),k.ui.plugin.add("draggable","zIndex",{start:function(t,e,i){var n=k(e.helper),s=i.options;n.css("zIndex")&&(s._zIndex=n.css("zIndex")),n.css("zIndex",s.zIndex)},stop:function(t,e,i){var n=i.options;n._zIndex&&k(e.helper).css("zIndex",n._zIndex)}}),k.ui.draggable,k.widget("ui.resizable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(t,e){if("hidden"===k(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",n=!1;return 0<t[i]||(t[i]=1,n=0<t[i],t[i]=0,n)},_create:function(){var t,e=this.options,i=this;this._addClass("ui-resizable"),k.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,t={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(t),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(t),this._proportionallyResize()),this._setupHandles(),e.autoHide&&k(this.element).on("mouseenter",function(){e.disabled||(i._removeClass("ui-resizable-autohide"),i._handles.show())}).on("mouseleave",function(){e.disabled||i.resizing||(i._addClass("ui-resizable-autohide"),i._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();function t(t){k(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()}var e;return this.elementIsWrapper&&(t(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var t,e,i,n,s,o=this.options,a=this;if(this.handles=o.handles||(k(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=k(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),i=this.handles.split(","),this.handles={},e=0;i.length>e;e++)n="ui-resizable-"+(t=k.trim(i[e])),s=k("<div>"),this._addClass(s,"ui-resizable-handle "+n),s.css({zIndex:o.zIndex}),this.handles[t]=".ui-resizable-"+t,this.element.append(s);this._renderAxis=function(t){var e,i,n,s;for(e in t=t||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=k(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(i=k(this.handles[e],this.element),s=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth(),n=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(n,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=s&&s[1]?s[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(t){var e,i,n=!1;for(e in this.handles)(i=k(this.handles[e])[0])!==t.target&&!k.contains(i,t.target)||(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var e,i,n,s=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),s.containment&&(e+=k(s.containment).scrollLeft()||0,i+=k(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:i},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=k(".ui-resizable-"+this.axis).css("cursor"),k("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e,i,n=this.originalMousePosition,s=this.axis,o=t.pageX-n.left||0,a=t.pageY-n.top||0,r=this._change[s];return this._updatePrevProperties(),r&&(e=r.apply(this,[t,o,a]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(e=this._updateRatio(e,t)),e=this._respectSize(e,t),this._updateCache(e),this._propagate("resize",t),i=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),k.isEmptyObject(i)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var e,i,n,s,o,a,r,l=this.options,h=this;return this._helper&&(n=(i=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:h.sizeDiff.height,s=i?0:h.sizeDiff.width,o={width:h.helper.width()-s,height:h.helper.height()-n},a=parseFloat(h.element.css("left"))+(h.position.left-h.originalPosition.left)||null,r=parseFloat(h.element.css("top"))+(h.position.top-h.originalPosition.top)||null,l.animate||this.element.css(k.extend(o,{top:r,left:a})),h.helper.height(h.size.height),h.helper.width(h.size.width),this._helper&&!l.animate&&this._proportionallyResize()),k("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>s&&(o.maxHeight=s)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),n&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),s&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(s[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||k("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize;return{top:this.originalPosition.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return k.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return k.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return k.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return k.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){k.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),k.ui.plugin.add("resizable","animate",{stop:function(e){var i=k(this).resizable("instance"),t=i.options,n=i._proportionallyResizeElements,s=n.length&&/textarea/i.test(n[0].nodeName),o=s&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,a=s?0:i.sizeDiff.width,r={width:i.size.width-a,height:i.size.height-o},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,h=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(k.extend(r,h&&l?{top:h,left:l}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&k(n[0]).css({width:t.width,height:t.height}),i._updateCache(t),i._propagate("resize",e)}})}}),k.ui.plugin.add("resizable","containment",{start:function(){var i,n,t,e,s,o,a,r=k(this).resizable("instance"),l=r.options,h=r.element,c=l.containment,d=c instanceof k?c.get(0):/parent/.test(c)?h.parent().get(0):c;d&&(r.containerElement=k(d),/document/.test(c)||c===document?(r.containerOffset={left:0,top:0},r.containerPosition={left:0,top:0},r.parentData={element:k(document),left:0,top:0,width:k(document).width(),height:k(document).height()||document.body.parentNode.scrollHeight}):(i=k(d),n=[],k(["Top","Right","Left","Bottom"]).each(function(t,e){n[t]=r._num(i.css("padding"+e))}),r.containerOffset=i.offset(),r.containerPosition=i.position(),r.containerSize={height:i.innerHeight()-n[3],width:i.innerWidth()-n[1]},t=r.containerOffset,e=r.containerSize.height,s=r.containerSize.width,o=r._hasScroll(d,"left")?d.scrollWidth:s,a=r._hasScroll(d)?d.scrollHeight:e,r.parentData={element:d,left:t.left,top:t.top,width:o,height:a}))},resize:function(t){var e,i,n,s,o=k(this).resizable("instance"),a=o.options,r=o.containerOffset,l=o.position,h=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement,u=!0;d[0]!==document&&/static/.test(d.css("position"))&&(c=r),l.left<(o._helper?r.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-r.left:o.position.left-c.left),h&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?r.left:0),l.top<(o._helper?r.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-r.top:o.position.top),h&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?r.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),n&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-r.left)),i=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-r.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,h&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),i+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-i,h&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=k(this).resizable("instance"),e=t.options,i=t.containerOffset,n=t.containerPosition,s=t.containerElement,o=k(t.helper),a=o.offset(),r=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(s.css("position"))&&k(this).css({left:a.left-n.left-i.left,width:r,height:l}),t._helper&&!e.animate&&/static/.test(s.css("position"))&&k(this).css({left:a.left-n.left-i.left,width:r,height:l})}}),k.ui.plugin.add("resizable","alsoResize",{start:function(){var t=k(this).resizable("instance").options;k(t.alsoResize).each(function(){var t=k(this);t.data("ui-resizable-alsoresize",{width:parseFloat(t.width()),height:parseFloat(t.height()),left:parseFloat(t.css("left")),top:parseFloat(t.css("top"))})})},resize:function(t,i){var e=k(this).resizable("instance"),n=e.options,s=e.originalSize,o=e.originalPosition,a={height:e.size.height-s.height||0,width:e.size.width-s.width||0,top:e.position.top-o.top||0,left:e.position.left-o.left||0};k(n.alsoResize).each(function(){var t=k(this),n=k(this).data("ui-resizable-alsoresize"),s={},e=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];k.each(e,function(t,e){var i=(n[e]||0)+(a[e]||0);i&&0<=i&&(s[e]=i||null)}),t.css(s)})},stop:function(){k(this).removeData("ui-resizable-alsoresize")}}),k.ui.plugin.add("resizable","ghost",{start:function(){var t=k(this).resizable("instance"),e=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),t._addClass(t.ghost,"ui-resizable-ghost"),!1!==k.uiBackCompat&&"string"==typeof t.options.ghost&&t.ghost.addClass(this.options.ghost),t.ghost.appendTo(t.helper)},resize:function(){var t=k(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=k(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),k.ui.plugin.add("resizable","grid",{resize:function(){var t,e=k(this).resizable("instance"),i=e.options,n=e.size,s=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,l=r[0]||1,h=r[1]||1,c=Math.round((n.width-s.width)/l)*l,d=Math.round((n.height-s.height)/h)*h,u=s.width+c,p=s.height+d,f=i.maxWidth&&u>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>u,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(u+=l),v&&(p+=h),f&&(u-=l),g&&(p-=h),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=p,e.position.top=o.top-d):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=p,e.position.left=o.left-c):((p-h<=0||u-l<=0)&&(t=e._getPaddingPlusBorderDimensions(this)),0<p-h?(e.size.height=p,e.position.top=o.top-d):(p=h-t.height,e.size.height=p,e.position.top=o.top+s.height-p),0<u-l?(e.size.width=u,e.position.left=o.left-c):(u=l-t.width,e.size.width=u,e.position.left=o.left+s.width-u))}}),k.ui.resizable,k.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=k(this).css(t).offset().top;e<0&&k(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&k.fn.draggable&&this._makeDraggable(),this.options.resizable&&k.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?k(t):this.document.find(t||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:k.noop,enable:k.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",t)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+k(this).css("z-index")}).get(),s=Math.max.apply(null,n);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),i=!0),i&&!e&&this._trigger("focus",t),i},open:function(){var t=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=k(k.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;(t=t||this.element.find("[autofocus]")).length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(t){function e(){var t=k.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||k.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=k("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===k.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===k.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),i=e.filter(":first"),n=e.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==i[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.trigger("focus")}),t.preventDefault()):(this._delay(function(){i.trigger("focus")}),t.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=k("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){k(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=k("<button type='button'></button>").button({label:k("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),t=k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=k("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=k("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var s=this,t=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),k.isEmptyObject(t)||k.isArray(t)&&!t.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(k.each(t,function(t,e){var i,n;e=k.isFunction(e)?{click:e,text:t}:e,e=k.extend({type:"button"},e),i=e.click,n={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,k("<button></button>",e).button(n).appendTo(s.uiButtonSet).on("click",function(){i.apply(s.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function s(t){return{position:t.position,offset:t.offset}}var o=this,a=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(t,e){o._addClass(k(this),"ui-dialog-dragging"),o._blockFrames(),o._trigger("dragStart",t,s(e))},drag:function(t,e){o._trigger("drag",t,s(e))},stop:function(t,e){var i=e.offset.left-o.document.scrollLeft(),n=e.offset.top-o.document.scrollTop();a.position={my:"left top",at:"left"+(0<=i?"+":"")+i+" top"+(0<=n?"+":"")+n,of:o.window},o._removeClass(k(this),"ui-dialog-dragging"),o._unblockFrames(),o._trigger("dragStop",t,s(e))}})},_makeResizable:function(){function o(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var a=this,r=this.options,t=r.resizable,e=this.uiDialog.css("position"),i="string"==typeof t?t:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:r.maxWidth,maxHeight:r.maxHeight,minWidth:r.minWidth,minHeight:this._minHeight(),handles:i,start:function(t,e){a._addClass(k(this),"ui-dialog-resizing"),a._blockFrames(),a._trigger("resizeStart",t,o(e))},resize:function(t,e){a._trigger("resize",t,o(e))},stop:function(t,e){var i=a.uiDialog.offset(),n=i.left-a.document.scrollLeft(),s=i.top-a.document.scrollTop();r.height=a.uiDialog.height(),r.width=a.uiDialog.width(),r.position={my:"left top",at:"left"+(0<=n?"+":"")+n+" top"+(0<=s?"+":"")+s,of:a.window},a._removeClass(k(this),"ui-dialog-resizing"),a._unblockFrames(),a._trigger("resizeStop",t,o(e))}}).css("position",e)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=k(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=k.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(t){var i=this,n=!1,s={};k.each(t,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var i,n,s=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:k("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((i=s.is(":data(ui-draggable)"))&&!e&&s.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((n=s.is(":data(ui-resizable)"))&&!e&&s.resizable("destroy"),n&&"string"==typeof e&&s.resizable("option","handles",e),n||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=k(this);return k("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!k(t.target).closest(".ui-dialog").length||!!k(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=k("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==k.uiBackCompat&&k.widget("ui.dialog",k.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),k.ui.dialog,k.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept=k.isFunction(i)?i:function(t){return t.is(i)},this.proportions=function(){return arguments.length?void(t=arguments[0]):t||(t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight})},this._addToManager(e.scope),e.addClasses&&this._addClass("ui-droppable")},_addToManager:function(t){k.ui.ddmanager.droppables[t]=k.ui.ddmanager.droppables[t]||[],k.ui.ddmanager.droppables[t].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var t=k.ui.ddmanager.droppables[this.options.scope];this._splice(t)},_setOption:function(t,e){if("accept"===t)this.accept=k.isFunction(e)?e:function(t){return t.is(e)};else if("scope"===t){var i=k.ui.ddmanager.droppables[this.options.scope];this._splice(i),this._addToManager(e)}this._super(t,e)},_activate:function(t){var e=k.ui.ddmanager.current;this._addActiveClass(),e&&this._trigger("activate",t,this.ui(e))},_deactivate:function(t){var e=k.ui.ddmanager.current;this._removeActiveClass(),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=k.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._addHoverClass(),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=k.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._removeHoverClass(),this._trigger("out",t,this.ui(e)))},_drop:function(e,t){var i=t||k.ui.ddmanager.current,n=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=k(this).droppable("instance");return t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&at(i,k.extend(t,{offset:t.element.offset()}),t.options.tolerance,e)?!(n=!0):void 0}),!n&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(i)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var ot,at=k.ui.intersect=function(t,e,i,n){if(!e.offset)return!1;var s=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,a=s+t.helperProportions.width,r=o+t.helperProportions.height,l=e.offset.left,h=e.offset.top,c=l+e.proportions().width,d=h+e.proportions().height;switch(i){case"fit":return l<=s&&a<=c&&h<=o&&r<=d;case"intersect":return s+t.helperProportions.width/2>l&&c>a-t.helperProportions.width/2&&o+t.helperProportions.height/2>h&&d>r-t.helperProportions.height/2;case"pointer":return rt(n.pageY,h,e.proportions().height)&&rt(n.pageX,l,e.proportions().width);case"touch":return(h<=o&&o<=d||h<=r&&r<=d||o<h&&d<r)&&(l<=s&&s<=c||l<=a&&a<=c||s<l&&c<a);default:return!1}};function rt(t,e,i){return e<=t&&t<e+i}!(k.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,e){var i,n,s=k.ui.ddmanager.droppables[t.options.scope]||[],o=e?e.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;s.length>i;i++)if(!(s[i].options.disabled||t&&!s[i].accept.call(s[i].element[0],t.currentItem||t.element))){for(n=0;a.length>n;n++)if(a[n]===s[i].element[0]){s[i].proportions().height=0;continue t}s[i].visible="none"!==s[i].element.css("display"),s[i].visible&&("mousedown"===o&&s[i]._activate.call(s[i],e),s[i].offset=s[i].element.offset(),s[i].proportions({width:s[i].element[0].offsetWidth,height:s[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return k.each((k.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&at(t,this,this.options.tolerance,e)&&(i=this._drop.call(this,e)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e)))}),i},dragStart:function(t,e){t.element.parentsUntil("body").on("scroll.droppable",function(){t.options.refreshPositions||k.ui.ddmanager.prepareOffsets(t,e)})},drag:function(o,a){o.options.refreshPositions&&k.ui.ddmanager.prepareOffsets(o,a),k.each(k.ui.ddmanager.droppables[o.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var t,e,i,n=at(o,this,this.options.tolerance,a),s=!n&&this.isover?"isout":n&&!this.isover?"isover":null;s&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return k(this).droppable("instance").options.scope===e})).length&&((t=k(i[0]).droppable("instance")).greedyChild="isover"===s)),t&&"isover"===s&&(t.isover=!1,t.isout=!0,t._out.call(t,a)),this[s]=!0,this["isout"===s?"isover":"isout"]=!1,this["isover"===s?"_over":"_out"].call(this,a),t&&"isout"===s&&(t.isout=!1,t.isover=!0,t._over.call(t,a)))}})},dragStop:function(t,e){t.element.parentsUntil("body").off("scroll.droppable"),t.options.refreshPositions||k.ui.ddmanager.prepareOffsets(t,e)}})!==k.uiBackCompat&&k.widget("ui.droppable",k.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),k.ui.droppable,k.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=k("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,e=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).width(e.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,t===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=k("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),k.widget("ui.selectable",k.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var n=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){n.elementPos=k(n.element[0]).offset(),n.selectees=k(n.options.filter,n.element[0]),n._addClass(n.selectees,"ui-selectee"),n.selectees.each(function(){var t=k(this),e=t.offset(),i={left:e.left-n.elementPos.left,top:e.top-n.elementPos.top};k.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=k("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(i){var n=this,t=this.options;this.opos=[i.pageX,i.pageY],this.elementPos=k(this.element[0]).offset(),this.options.disabled||(this.selectees=k(t.filter,this.element[0]),this._trigger("start",i),k(t.appendTo).append(this.helper),this.helper.css({left:i.pageX,top:i.pageY,width:0,height:0}),t.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var t=k.data(this,"selectable-item");t.startselected=!0,i.metaKey||i.ctrlKey||(n._removeClass(t.$element,"ui-selected"),t.selected=!1,n._addClass(t.$element,"ui-unselecting"),t.unselecting=!0,n._trigger("unselecting",i,{unselecting:t.element}))}),k(i.target).parents().addBack().each(function(){var t,e=k.data(this,"selectable-item");return e?(t=!i.metaKey&&!i.ctrlKey||!e.$element.hasClass("ui-selected"),n._removeClass(e.$element,t?"ui-unselecting":"ui-selected")._addClass(e.$element,t?"ui-selecting":"ui-unselecting"),e.unselecting=!t,e.selecting=t,(e.selected=t)?n._trigger("selecting",i,{selecting:e.element}):n._trigger("unselecting",i,{unselecting:e.element}),!1):void 0}))},_mouseDrag:function(n){if(this.dragged=!0,!this.options.disabled){var t,s=this,o=this.options,a=this.opos[0],r=this.opos[1],l=n.pageX,h=n.pageY;return l<a&&(t=l,l=a,a=t),h<r&&(t=h,h=r,r=t),this.helper.css({left:a,top:r,width:l-a,height:h-r}),this.selectees.each(function(){var t=k.data(this,"selectable-item"),e=!1,i={};t&&t.element!==s.element[0]&&(i.left=t.left+s.elementPos.left,i.right=t.right+s.elementPos.left,i.top=t.top+s.elementPos.top,i.bottom=t.bottom+s.elementPos.top,"touch"===o.tolerance?e=!(i.left>l||a>i.right||i.top>h||r>i.bottom):"fit"===o.tolerance&&(e=i.left>a&&l>i.right&&i.top>r&&h>i.bottom),e?(t.selected&&(s._removeClass(t.$element,"ui-selected"),t.selected=!1),t.unselecting&&(s._removeClass(t.$element,"ui-unselecting"),t.unselecting=!1),t.selecting||(s._addClass(t.$element,"ui-selecting"),t.selecting=!0,s._trigger("selecting",n,{selecting:t.element}))):(t.selecting&&((n.metaKey||n.ctrlKey)&&t.startselected?(s._removeClass(t.$element,"ui-selecting"),t.selecting=!1,s._addClass(t.$element,"ui-selected"),t.selected=!0):(s._removeClass(t.$element,"ui-selecting"),t.selecting=!1,t.startselected&&(s._addClass(t.$element,"ui-unselecting"),t.unselecting=!0),s._trigger("unselecting",n,{unselecting:t.element}))),t.selected&&(n.metaKey||n.ctrlKey||t.startselected||(s._removeClass(t.$element,"ui-selected"),t.selected=!1,s._addClass(t.$element,"ui-unselecting"),t.unselecting=!0,s._trigger("unselecting",n,{unselecting:t.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,k(".ui-unselecting",this.element[0]).each(function(){var t=k.data(this,"selectable-item");i._removeClass(t.$element,"ui-unselecting"),t.unselecting=!1,t.startselected=!1,i._trigger("unselected",e,{unselected:t.element})}),k(".ui-selecting",this.element[0]).each(function(){var t=k.data(this,"selectable-item");i._removeClass(t.$element,"ui-selecting")._addClass(t.$element,"ui-selected"),t.selecting=!1,t.selected=!0,t.startselected=!0,i._trigger("selected",e,{selected:t.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),k.widget("ui.selectmenu",[k.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=k()},_drawButton:function(){var t,e=this,i=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=k("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),t=k("<span>").appendTo(this.button),this._addClass(t,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(i).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e._rendered||e._refreshMenu()})},_drawMenu:function(){var n=this;this.menu=k("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=k("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,e){t.preventDefault(),n._setSelection(),n._select(e.item.data("ui-selectmenu-item"),t)},focus:function(t,e){var i=e.item.data("ui-selectmenu-item");null!=n.focusIndex&&i.index!==n.focusIndex&&(n._trigger("focus",t,{item:i}),n.isOpen||n._select(i,t)),n.focusIndex=i.index,n.button.attr("aria-activedescendant",n.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(k.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(t){var e=k("<span>");return this._setText(e,t.label),this._addClass(e,"ui-selectmenu-text"),e},_renderMenu:function(n,t){var s=this,o="";k.each(t,function(t,e){var i;e.optgroup!==o&&(i=k("<li>",{text:e.optgroup}),s._addClass(i,"ui-selectmenu-optgroup","ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),i.appendTo(n),o=e.optgroup),s._renderItemData(n,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(t,e){var i=k("<li>"),n=k("<div>",{title:e.element.attr("title")});return e.disabled&&this._addClass(i,null,"ui-state-disabled"),this._setText(n,e.label),i.append(n).appendTo(t)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(k(t.target).closest(".ui-selectmenu-menu, #"+k.ui.escapeSelector(this.ids.button)).length||this.close(t))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(t){var e=!0;switch(t.keyCode){case k.ui.keyCode.TAB:case k.ui.keyCode.ESCAPE:this.close(t),e=!1;break;case k.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case k.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case k.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case k.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case k.ui.keyCode.LEFT:this._move("prev",t);break;case k.ui.keyCode.RIGHT:this._move("next",t);break;case k.ui.keyCode.HOME:case k.ui.keyCode.PAGE_UP:this._move("first",t);break;case k.ui.keyCode.END:case k.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),e=!1}e&&t.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var t=this.options.appendTo;return(t=t&&(t.jquery||t.nodeType?k(t):this.document.find(t).eq(0)))&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return!1===t?void this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(t){var i=this,n=[];t.each(function(t,e){n.push(i._parseOption(k(e),t))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),k.widget("ui.slider",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e,i=this.options,n=this.element.find(".ui-slider-handle"),s=[];for(e=i.values&&i.values.length||1,n.length>e&&(n.slice(e).remove(),n=n.slice(0,e)),t=n.length;t<e;t++)s.push("<span tabindex='0'></span>");this.handles=n.add(k(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(t){k(this).data("ui-slider-handle-index",t).attr("tabIndex",0)})},_createRange:function(){var t=this.options;t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:k.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=k("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==t.range&&"max"!==t.range||this._addClass(this.range,"ui-slider-range-"+t.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(t){var e,i,n,s,o,a,r,l=this,h=this.options;return!h.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(i-l.values(t));(e<n||n===e&&(t===l._lastChangedValue||l.values(t)===h.min))&&(n=e,s=k(this),o=t)}),!1!==this._start(t,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(s,null,"ui-state-active"),s.trigger("focus"),a=s.offset(),r=!k(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=r?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s;return 1<(i=("horizontal"===this.orientation?(e=this.elementSize.width,t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)))/e)&&(i=1),i<0&&(i=0),"vertical"===this.orientation&&(i=1-i),n=this._valueMax()-this._valueMin(),s=this._valueMin()+i*n,this._trimAlignValue(s)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s=this.value(),o=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),s=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),o[e]=i),i===s||!1!==this._trigger("slide",t,this._uiHash(e,i,o))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,e){var i,n,s;if(1<arguments.length)return this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!k.isArray(t))return this._hasMultipleValues()?this._values(t):this.value();for(i=this.options.values,n=t,s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(n[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,e){var i,n=0;switch("range"===t&&!0===this.options.range&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),k.isArray(this.options.values)&&(n=this.options.values.length),this._super(t,e),t){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(e),this.handles.css("horizontal"===e?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=n-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=0<this.options.step?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=0<i?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;(t=Math.round((t-e)/i)*i+e)>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,t,n,s,o=this.options.range,a=this.options,r=this,l=!this._animateOff&&a.animate,h={};this._hasMultipleValues()?this.handles.each(function(t){i=(r.values(t)-r._valueMin())/(r._valueMax()-r._valueMin())*100,h["horizontal"===r.orientation?"left":"bottom"]=i+"%",k(this).stop(1,1)[l?"animate":"css"](h,a.animate),!0===r.options.range&&("horizontal"===r.orientation?(0===t&&r.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===t&&r.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(t=this.value(),n=this._valueMin(),s=this._valueMax(),i=s!==n?(t-n)/(s-n)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](h,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(t){var e,i,n,s=k(t.target).data("ui-slider-handle-index");switch(t.keyCode){case k.ui.keyCode.HOME:case k.ui.keyCode.END:case k.ui.keyCode.PAGE_UP:case k.ui.keyCode.PAGE_DOWN:case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(k(t.target),null,"ui-state-active"),!1===this._start(t,s)))return}switch(n=this.options.step,e=i=this._hasMultipleValues()?this.values(s):this.value(),t.keyCode){case k.ui.keyCode.HOME:i=this._valueMin();break;case k.ui.keyCode.END:i=this._valueMax();break;case k.ui.keyCode.PAGE_UP:i=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);break;case k.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);break;case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:if(e===this._valueMax())return;i=this._trimAlignValue(e+n);break;case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(e===this._valueMin())return;i=this._trimAlignValue(e-n)}this._slide(t,s,i)},keyup:function(t){var e=k(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),this._removeClass(k(t.target),null,"ui-state-active"))}}}),k.widget("ui.sortable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return e<=t&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var t=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),k.each(this.items,function(){t._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;0<=t;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,e){var i=null,n=!1,s=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(t),k(t.target).parents().each(function(){return k.data(this,s.widgetName+"-item")===s?(i=k(this),!1):void 0}),k.data(t.target,s.widgetName+"-item")===s&&(i=k(t.target)),!!i&&(!(this.options.handle&&!e&&(k(this.options.handle,i).find("*").addBack().each(function(){this===t.target&&(n=!0)}),!n))&&(this.currentItem=i,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(t,e,i){var n,s,o=this.options;if((this.currentContainer=this).refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},k.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(s=this.document.find("body"),this.storedCursor=s.css("cursor"),s.css("cursor",o.cursor),this.storedStylesheet=k("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(s)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(n=this.containers.length-1;0<=n;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return k.ui.ddmanager&&(k.ui.ddmanager.current=this),k.ui.ddmanager&&!o.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,i,n,s,o=this.options,a=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?a=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(a=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?a=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(a=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),!1!==a&&k.ui.ddmanager&&!o.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e=this.items.length-1;0<=e;e--)if(n=(i=this.items[e]).item[0],(s=this._intersectsWithPointer(i))&&i.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===s?"next":"prev"]()[0]!==n&&!k.contains(this.placeholder[0],n)&&("semi-dynamic"!==this.options.type||!k.contains(this.element[0],n))){if(this.direction=1===s?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break;this._rearrange(t,i),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),k.ui.ddmanager&&k.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,e){if(t){if(k.ui.ddmanager&&!this.options.dropBehaviour&&k.ui.ddmanager.drop(this,t),this.options.revert){var i=this,n=this.placeholder.offset(),s=this.options.axis,o={};s&&"x"!==s||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),s&&"y"!==s||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,k(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else this._clear(t,e);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new k.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var t=this.containers.length-1;0<=t;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),k.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?k(this.domPosition.prev).after(this.currentItem):k(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[];return e=e||{},k(t).each(function(){var t=(k(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);t&&i.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toArray:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},e.each(function(){i.push(k(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,d="x"===this.options.axis||r<n+h&&n+h<l,u="y"===this.options.axis||o<e+c&&e+c<a,p=d&&u;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&n+this.helperProportions.height/2>r&&l>s-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);return!!(n&&s)&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!=t&&(0<t?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!=t&&(0<t?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(t){function e(){a.push(this)}var i,n,s,o,a=[],r=[],l=this._connectWith();if(l&&t)for(i=l.length-1;0<=i;i--)for(n=(s=k(l[i],this.document[0])).length-1;0<=n;n--)(o=k.data(s[n],this.widgetFullName))&&o!==this&&!o.options.disabled&&r.push([k.isFunction(o.options.items)?o.options.items.call(o.element):k(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(r.push([k.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):k(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;0<=i;i--)r[i][0].each(e);return k(a)},_removeCurrentsFromItems:function(){var i=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=k.grep(this.items,function(t){for(var e=0;i.length>e;e++)if(i[e]===t.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var e,i,n,s,o,a,r,l,h=this.items,c=[[k.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):k(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(e=d.length-1;0<=e;e--)for(i=(n=k(d[e],this.document[0])).length-1;0<=i;i--)(s=k.data(n[i],this.widgetFullName))&&s!==this&&!s.options.disabled&&(c.push([k.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):k(s.options.items,s.element),s]),this.containers.push(s));for(e=c.length-1;0<=e;e--)for(o=c[e][1],i=0,l=(a=c[e][0]).length;i<l;i++)(r=k(a[i])).data(this.widgetName+"-item",o),h.push({item:r,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){var e,i,n,s;for(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),e=this.items.length-1;0<=e;e--)(i=this.items[e]).instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?k(this.options.toleranceElement,i.item):i.item,t||(i.width=n.outerWidth(),i.height=n.outerHeight()),s=n.offset(),i.left=s.left,i.top=s.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;0<=e;e--)s=this.containers[e].element.offset(),this.containers[e].containerCache.left=s.left,this.containers[e].containerCache.top=s.top,this.containers[e].containerCache.width=this.containers[e].element.outerWidth(),this.containers[e].containerCache.height=this.containers[e].element.outerHeight();return this},_createPlaceholder:function(i){var n,s=(i=i||this).options;s.placeholder&&s.placeholder.constructor!==String||(n=s.placeholder,s.placeholder={element:function(){var t=i.currentItem[0].nodeName.toLowerCase(),e=k("<"+t+">",i.document[0]);return i._addClass(e,"ui-sortable-placeholder",n||i.currentItem[0].className)._removeClass(e,"ui-sortable-helper"),"tbody"===t?i._createTrPlaceholder(i.currentItem.find("tr").eq(0),k("<tr>",i.document[0]).appendTo(e)):"tr"===t?i._createTrPlaceholder(i.currentItem,e):"img"===t&&e.attr("src",i.currentItem.attr("src")),n||e.css("visibility","hidden"),e},update:function(t,e){n&&!s.forcePlaceholderSize||(e.height()||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10)))}}),i.placeholder=k(s.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),s.placeholder.update(i,i.placeholder)},_createTrPlaceholder:function(t,e){var i=this;t.children().each(function(){k("<td>&#160;</td>",i.document[0]).attr("colspan",k(this).attr("colspan")||1).appendTo(e)})},_contactContainers:function(t){var e,i,n,s,o,a,r,l,h,c,d=null,u=null;for(e=this.containers.length-1;0<=e;e--)if(!k.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(d&&k.contains(this.containers[e].element[0],d.element[0]))continue;d=this.containers[e],u=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",t,this._uiHash(this)),this.containers[e].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[u].containerCache.over||(this.containers[u]._trigger("over",t,this._uiHash(this)),this.containers[u].containerCache.over=1);else{for(n=1e4,s=null,o=(h=d.floating||this._isFloating(this.currentItem))?"left":"top",a=h?"width":"height",c=h?"pageX":"pageY",i=this.items.length-1;0<=i;i--)k.contains(this.containers[u].element[0],this.items[i].item[0])&&this.items[i].item[0]!==this.currentItem[0]&&(r=this.items[i].item.offset()[o],l=!1,t[c]-r>this.items[i][a]/2&&(l=!0),n>Math.abs(t[c]-r)&&(n=Math.abs(t[c]-r),s=this.items[i],this.direction=l?"up":"down"));if(!s&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[u])return void(this.currentContainer.containerCache.over||(this.containers[u]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1));s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[u].element,!0),this._trigger("change",t,this._uiHash()),this.containers[u]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[u],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[u]._trigger("over",t,this._uiHash(this)),this.containers[u].containerCache.over=1}},_createHelper:function(t){var e=this.options,i=k.isFunction(e.helper)?k(e.helper.apply(this.element[0],[t,this.currentItem])):"clone"===e.helper?this.currentItem.clone():this.currentItem;return i.parents("body").length||k("parent"!==e.appendTo?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),i[0].style.width&&!e.forceHelperSize||i.width(this.currentItem.width()),i[0].style.height&&!e.forceHelperSize||i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),k.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&k.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),"document"!==n.containment&&"window"!==n.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=k(n.containment)[0],e=k(n.containment).offset(),i="hidden"!==k(t).css("overflow"),this.containment=[e.left+(parseInt(k(t).css("borderLeftWidth"),10)||0)+(parseInt(k(t).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(k(t).css("borderTopWidth"),10)||0)+(parseInt(k(t).css("paddingTop"),10)||0)-this.margins.top,e.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(k(t).css("borderLeftWidth"),10)||0)-(parseInt(k(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(k(t).css("borderTopWidth"),10)||0)-(parseInt(k(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,e){e=e||this.position;var i="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(n[0].tagName);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():s?0:n.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():s?0:n.scrollLeft())*i}},_generatePosition:function(t){var e,i,n=this.options,s=t.pageX,o=t.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(a[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(e=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?e-this.offset.click.top>=this.containment[1]&&e-this.offset.click.top<=this.containment[3]?e:e-this.offset.click.top>=this.containment[1]?e-n.grid[1]:e+n.grid[1]:e,i=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0],s=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-n.grid[0]:i+n.grid[0]:i)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():r?0:a.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():r?0:a.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&this.refreshPositions(!n)})},_clear:function(t,e){function i(e,i,n){return function(t){n._trigger(e,t,i._uiHash(i))}}this.reverting=!1;var n,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)"auto"!==this._storedCSS[n]&&"static"!==this._storedCSS[n]||(this._storedCSS[n]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;0<=n;n--)e||s.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;s.length>n;n++)s[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===k.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(t){var e=t||this;return{helper:e.helper,placeholder:e.placeholder||k([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:t?t.element:null}}}),k.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var n=this._super(),s=this.element;return k.each(["min","max","step"],function(t,e){var i=s.attr(e);null!=i&&i.length&&(n[e]=i)}),n},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((0<e?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(t){function e(){this.element[0]===k.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=i,this._delay(function(){this.previous=i}))}var i;i=this.element[0]===k.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),t.preventDefault(),e.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,e.call(this)}),!1!==this._start(t)&&this._repeat(null,k(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return k(t.currentTarget).hasClass("ui-state-active")?!1!==this._start(t)&&void this._repeat(null,k(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&0<this.uiSpinner.height()&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(t){var e=this.options,i=k.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,e.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-e.page,t),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(t){var e=this.options.incremental;return e?k.isFunction(e)?e(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return i=t-(e=null!==n.min?n.min:0),t=e+(i=Math.round(i/n.step)*n.step),t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&n.min>t?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,s;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i))):("max"!==t&&"min"!==t&&"step"!==t||"string"!=typeof e||(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),s=this.buttons.last().find(".ui-icon"),this._removeClass(s,null,this.options.icons.down),this._addClass(s,null,e.down)),void this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:e(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""===t||null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void e(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),!1!==k.uiBackCompat&&k.widget("ui.spinner",k.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),k.ui.spinner,k.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(ot=/#.*$/,function(t){var e,i;e=t.href.replace(ot,""),i=location.href.replace(ot,"");try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return 1<t.hash.length&&e===i}),_create:function(){var e=this,t=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,t.collapsible),this._processTabs(),t.active=this._initialActive(),k.isArray(t.disabled)&&(t.disabled=k.unique(t.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=!1!==this.options.active&&this.anchors.length?this._findActive(t.active):k(),this._refresh(),this.active.length&&this.load(t.active)},_initialActive:function(){var i=this.options.active,t=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(t,e){return k(e).attr("aria-controls")===n?(i=t,!1):void 0}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==i&&-1!==i||(i=!!this.tabs.length&&0)),!1!==i&&(-1===(i=this.tabs.index(this.tabs.eq(i)))&&(i=!t&&0)),!t&&!1===i&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):k()}},_tabKeydown:function(t){var e=k(k.ui.safeActiveElement(this.document[0])).closest("li"),i=this.tabs.index(e),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:i++;break;case k.ui.keyCode.UP:case k.ui.keyCode.LEFT:n=!1,i--;break;case k.ui.keyCode.END:i=this.anchors.length-1;break;case k.ui.keyCode.HOME:i=0;break;case k.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i);case k.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i!==this.options.active&&i);default:return}t.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,n),t.ctrlKey||t.metaKey||(e.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===k.ui.keyCode.UP&&(t.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(t){return t.altKey&&t.keyCode===k.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===k.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,e){for(var i=this.tabs.length-1;-1!==k.inArray((i<t&&(t=0),t<0&&(t=i),t),this.options.disabled);)t=e?t+1:t-1;return t},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?void this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])");t.disabled=k.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)}),this._processTabs(),!1!==t.active&&this.anchors.length?this.active.length&&!k.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=k()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=k()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var l=this,t=this.tabs,e=this.anchors,i=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(t){k(this).is(".ui-state-disabled")&&t.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){k(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return k("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=k(),this.anchors.each(function(t,e){var i,n,s,o=k(e).uniqueId().attr("id"),a=k(e).closest("li"),r=a.attr("aria-controls");l._isLocal(e)?(s=(i=e.hash).substring(1),n=l.element.find(l._sanitizeSelector(i))):(i="#"+(s=a.attr("aria-controls")||k({}).uniqueId()[0].id),(n=l.element.find(i)).length||(n=l._createPanel(s)).insertAfter(l.panels[t-1]||l.tablist),n.attr("aria-live","polite")),n.length&&(l.panels=l.panels.add(n)),r&&a.data("ui-tabs-aria-controls",r),a.attr({"aria-controls":s,"aria-labelledby":o}),n.attr("aria-labelledby",o)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),t&&(this._off(t.not(this.tabs)),this._off(e.not(this.anchors)),this._off(i.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(t){return k("<div>").attr("id",t).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(t){var e,i,n;for(k.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1),n=0;i=this.tabs[n];n++)e=k(i),!0===t||-1!==k.inArray(n,t)?(e.attr("aria-disabled","true"),this._addClass(e,null,"ui-state-disabled")):(e.removeAttr("aria-disabled"),this._removeClass(e,null,"ui-state-disabled"));this.options.disabled=t,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===t)},_setupEvents:function(t){var i={};t&&k.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,e=this.element.parent();"fill"===t?(i=e.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=k(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=k(this).outerHeight(!0)}),this.panels.each(function(){k(this).height(Math.max(0,i-k(this).innerHeight()+k(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,k(this).height("").height())}).height(i))},_eventHandler:function(t){var e=this.options,i=this.active,n=k(t.currentTarget).closest("li"),s=n[0]===i[0],o=s&&e.collapsible,a=o?k():this._getPanelForTab(n),r=i.length?this._getPanelForTab(i):k(),l={oldTab:i,oldPanel:r,newTab:o?k():n,newPanel:a};t.preventDefault(),n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||s&&!e.collapsible||!1===this._trigger("beforeActivate",t,l)||(e.active=!o&&this.tabs.index(n),this.active=s?k():n,this.xhr&&this.xhr.abort(),r.length||a.length||k.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(n),t),this._toggle(t,l))},_toggle:function(t,e){function i(){s.running=!1,s._trigger("activate",t,e)}function n(){s._addClass(e.newTab.closest("li"),"ui-tabs-active","ui-state-active"),o.length&&s.options.show?s._show(o,s.options.show,i):(o.show(),i())}var s=this,o=e.newPanel,a=e.oldPanel;this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,function(){s._removeClass(e.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(e.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a.hide(),n()),a.attr("aria-hidden","true"),e.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&a.length?e.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===k(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),e.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var e,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),e=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:e,currentTarget:e,preventDefault:k.noop}))},_findActive:function(t){return!1===t?k():this.tabs.eq(t)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+k.ui.escapeSelector(t)+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){k.data(this,"ui-tabs-destroy")?k(this).remove():k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var t=k(this),e=t.data("ui-tabs-aria-controls");e?t.attr("aria-controls",e).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var t=this.options.disabled;!1!==t&&(t=void 0!==i&&(i=this._getIndex(i),k.isArray(t)?k.map(t,function(t){return t!==i?t:null}):k.map(this.tabs,function(t,e){return e!==i?e:null})),this._setOptionDisabled(t))},disable:function(t){var e=this.options.disabled;if(!0!==e){if(void 0===t)e=!0;else{if(t=this._getIndex(t),-1!==k.inArray(t,e))return;e=k.isArray(e)?k.merge([t],e).sort():[t]}this._setOptionDisabled(e)}},load:function(t,n){t=this._getIndex(t);function s(t,e){"abort"===e&&o.panels.stop(!1,!0),o._removeClass(i,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===o.xhr&&delete o.xhr}var o=this,i=this.tabs.eq(t),e=i.find(".ui-tabs-anchor"),a=this._getPanelForTab(i),r={tab:i,panel:a};this._isLocal(e[0])||(this.xhr=k.ajax(this._ajaxSettings(e,n,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(i,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,i){setTimeout(function(){a.html(t),o._trigger("load",n,r),s(i,e)},1)}).fail(function(t,e){setTimeout(function(){s(t,e)},1)})))},_ajaxSettings:function(t,i,n){var s=this;return{url:t.attr("href").replace(/#.*$/,""),beforeSend:function(t,e){return s._trigger("beforeLoad",i,k.extend({jqXHR:t,ajaxSettings:e},n))}}},_getPanelForTab:function(t){var e=k(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+e))}}),!1!==k.uiBackCompat&&k.widget("ui.tabs",k.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),k.ui.tabs,k.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var t=k(this).attr("title")||"";return k("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(t,e){var i=(t.attr("aria-describedby")||"").split(/\s+/);i.push(e),t.data("ui-tooltip-id",e).attr("aria-describedby",k.trim(i.join(" ")))},_removeDescribedBy:function(t){var e=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),n=k.inArray(e,i);-1!==n&&i.splice(n,1),t.removeData("ui-tooltip-id"),(i=k.trim(i.join(" ")))?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=k("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=k([])},_setOption:function(t,e){var i=this;this._super(t,e),"content"===t&&k.each(this.tooltips,function(t,e){i._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var n=this;k.each(this.tooltips,function(t,e){var i=k.Event("blur");i.target=i.currentTarget=e.element[0],n.close(i,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var t=k(this);return t.is("[title]")?t.data("ui-tooltip-title",t.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var t=k(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))}),this.disabledTitles=k([])},open:function(t){var i=this,e=k(t?t.target:this.element).closest(this.options.items);e.length&&!e.data("ui-tooltip-id")&&(e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&e.parents().each(function(){var t,e=k(this);e.data("ui-tooltip-open")&&((t=k.Event("blur")).target=t.currentTarget=this,i.close(t,!0)),e.attr("title")&&(e.uniqueId(),i.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))}),this._registerCloseHandlers(t,e),this._updateContent(e,t))},_updateContent:function(e,i){var t,n=this.options.content,s=this,o=i?i.type:null;return"string"==typeof n||n.nodeType||n.jquery?this._open(i,e,n):void((t=n.call(e[0],function(t){s._delay(function(){e.data("ui-tooltip-open")&&(i&&(i.type=o),this._open(i,e,t))})}))&&this._open(i,e,t))},_open:function(t,e,i){function n(t){l.of=t,o.is(":hidden")||o.position(l)}var s,o,a,r,l=k.extend({},this.options.position);if(i){if(s=this._find(e))return void s.tooltip.find(".ui-tooltip-content").html(i);e.is("[title]")&&(t&&"mouseover"===t.type?e.attr("title",""):e.removeAttr("title")),s=this._tooltip(e),o=s.tooltip,this._addDescribedBy(e,o.attr("id")),o.find(".ui-tooltip-content").html(i),this.liveRegion.children().hide(),(r=k("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),r.removeAttr("id").find("[id]").removeAttr("id"),r.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(k.extend({of:e},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(a))},k.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var e={keyup:function(t){if(t.keyCode===k.ui.keyCode.ESCAPE){var e=k.Event(t);e.currentTarget=i[0],this.close(e,!0)}}};i[0]!==this.element[0]&&(e.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(e.mouseleave="close"),t&&"focusin"!==t.type||(e.focusout="close"),this._on(!0,i,e)},close:function(t){var e,i=this,n=k(t?t.currentTarget:this.element),s=this._find(n);return s?(e=s.tooltip,void(s.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),s.hiding=!0,e.stop(!0),this._hide(e,this.options.hide,function(){i._removeTooltip(k(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&k.each(this.parents,function(t,e){k(e.element).attr("title",e.title),delete i.parents[t]}),s.closing=!0,this._trigger("close",t,{tooltip:e}),s.hiding||(s.closing=!1)))):void n.removeData("ui-tooltip-open")},_tooltip:function(t){var e=k("<div>").attr("role","tooltip"),i=k("<div>").appendTo(e),n=e.uniqueId().attr("id");return this._addClass(i,"ui-tooltip-content"),this._addClass(e,"ui-tooltip","ui-widget ui-widget-content"),e.appendTo(this._appendTo(t)),this.tooltips[n]={element:t,tooltip:e}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var s=this;k.each(this.tooltips,function(t,e){var i=k.Event("blur"),n=e.element;i.target=i.currentTarget=n[0],s.close(i,!0),k("#"+t).remove(),n.data("ui-tooltip-title")&&(n.attr("title")||n.attr("title",n.data("ui-tooltip-title")),n.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==k.uiBackCompat&&k.widget("ui.tooltip",k.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),k.ui.tooltip}),function(l,h,g){"use strict";function i(t,e){var i,n,s,o=[],a=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=d(t.data.options,e)),i=e.$target||g(t.currentTarget).trigger("blur"),(s=g.fancybox.getInstance())&&s.$trigger&&s.$trigger.is(i)||(o=e.selector?g(e.selector):(n=i.attr("data-fancybox")||"")?(o=t.data?t.data.items:[]).length?o.filter('[data-fancybox="'+n+'"]'):g('[data-fancybox="'+n+'"]'):[i],(a=g(o).index(i))<0&&(a=0),(s=g.fancybox.open(o,e,a)).$trigger=i))}if(l.console=l.console||{info:function(t){}},g){if(g.fn.fancybox)return console.info("fancyBox already initialized");var t={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:g.noop,beforeLoad:g.noop,afterLoad:g.noop,beforeShow:g.noop,afterShow:g.noop,beforeClose:g.noop,afterClose:g.noop,onActivate:g.noop,onDeactivate:g.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=g(l),o=g(h),a=0,u=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||l.oRequestAnimationFrame||function(t){return l.setTimeout(t,1e3/60)},e=l.cancelAnimationFrame||l.webkitCancelAnimationFrame||l.mozCancelAnimationFrame||l.oCancelAnimationFrame||function(t){l.clearTimeout(t)},c=function(){var t,e=h.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},d=function(t,e){var i=g.extend(!0,{},t,e);return g.each(e,function(t,e){g.isArray(e)&&(i[t]=e)}),i},n=function(t,e,i){var n=this;n.opts=d({index:i},g.fancybox.defaults),g.isPlainObject(e)&&(n.opts=d(n.opts,e)),g.fancybox.isMobile&&(n.opts=d(n.opts,n.opts.mobile)),n.id=n.opts.id||++a,n.currIndex=parseInt(n.opts.index,10)||0,n.prevIndex=null,n.prevPos=null,n.currPos=0,n.firstRun=!0,n.group=[],n.slides={},n.addContent(t),n.group.length&&n.init()};g.extend(n.prototype,{init:function(){var e,i,n=this,s=n.group[n.currIndex].opts;s.closeExisting&&g.fancybox.close(!0),g("body").addClass("fancybox-active"),!g.fancybox.getInstance()&&!1!==s.hideScrollbar&&!g.fancybox.isMobile&&h.body.scrollHeight>l.innerHeight&&(g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(l.innerWidth-h.documentElement.clientWidth)+"px;}</style>"),g("body").addClass("compensate-for-scrollbar")),i="",g.each(s.buttons,function(t,e){i+=s.btnTpl[e]||""}),e=g(n.translate(n,s.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",s.btnTpl.arrowLeft+s.btnTpl.arrowRight))).attr("id","fancybox-container-"+n.id).addClass(s.baseClass).data("FancyBox",n).appendTo(s.parentEl),n.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){n.$refs[t]=e.find(".fancybox-"+t)}),n.trigger("onInit"),n.activate(),n.jumpTo(n.currIndex)},translate:function(t,e){var i=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===i[e]?t:i[e]})},addContent:function(t){var e,h=this,i=g.makeArray(t);g.each(i,function(t,e){var i,n,s,o,a,r={},l={};g.isPlainObject(e)?l=(r=e).opts||e:"object"===g.type(e)&&g(e).length?(l=(i=g(e)).data()||{},(l=g.extend(!0,{},l,l.options)).$orig=i,r.src=h.opts.src||l.src||i.attr("href"),r.type||r.src||(r.type="inline",r.src=e)):r={type:"html",src:e+""},r.opts=g.extend(!0,{},h.opts,l),g.isArray(l.buttons)&&(r.opts.buttons=l.buttons),g.fancybox.isMobile&&r.opts.mobile&&(r.opts=d(r.opts,r.opts.mobile)),n=r.type||r.opts.type,o=r.src||"",!n&&o&&((s=o.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(n="video",r.opts.video.format||(r.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?n="image":o.match(/\.(pdf)((\?|#).*)?$/i)?(n="iframe",r=g.extend(!0,r,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===o.charAt(0)&&(n="inline")),n?r.type=n:h.trigger("objectNeedsType",r),r.contentType||(r.contentType=-1<g.inArray(r.type,["html","inline","ajax"])?"html":r.type),r.index=h.group.length,"auto"==r.opts.smallBtn&&(r.opts.smallBtn=-1<g.inArray(r.type,["html","inline","ajax"])),"auto"===r.opts.toolbar&&(r.opts.toolbar=!r.opts.smallBtn),r.$thumb=r.opts.$thumb||null,r.opts.$trigger&&r.index===h.opts.index&&(r.$thumb=r.opts.$trigger.find("img:first"),r.$thumb.length&&(r.opts.$orig=r.opts.$trigger)),r.$thumb&&r.$thumb.length||!r.opts.$orig||(r.$thumb=r.opts.$orig.find("img:first")),r.$thumb&&!r.$thumb.length&&(r.$thumb=null),r.thumb=r.opts.thumb||(r.$thumb?r.$thumb[0].src:null),"function"===g.type(r.opts.caption)&&(r.opts.caption=r.opts.caption.apply(e,[h,r])),"function"===g.type(h.opts.caption)&&(r.opts.caption=h.opts.caption.apply(e,[h,r])),r.opts.caption instanceof g||(r.opts.caption=void 0===r.opts.caption?"":r.opts.caption+""),"ajax"!==r.type||1<(a=o.split(/\s+/,2)).length&&(r.src=a.shift(),r.opts.filter=a.shift()),r.opts.modal&&(r.opts=g.extend(!0,r.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),h.group.push(r)}),Object.keys(h.slides).length&&(h.updateControls(),(e=h.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var n=this;n.removeEvents(),n.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),n.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),n.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),n.next()}).on("click.fb","[data-fancybox-zoom]",function(t){n[n.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(n.requestId&&e(n.requestId),n.requestId=u(function(){n.update(t)})):(n.current&&"iframe"===n.current.type&&n.$refs.stage.hide(),setTimeout(function(){n.$refs.stage.show(),n.update(t)},g.fancybox.isMobile?600:250))}),o.on("keydown.fb",function(t){var e=(g.fancybox?g.fancybox.getInstance():null).current,i=t.keyCode||t.which;if(9!=i)return!e.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||g(t.target).is("input,textarea,video,audio,select")?void 0:8===i||27===i?(t.preventDefault(),void n.close(t)):37===i||38===i?(t.preventDefault(),void n.previous()):39===i||40===i?(t.preventDefault(),void n.next()):void n.trigger("afterKeydown",t,i);e.opts.trapFocus&&n.focus(t)}),n.group[n.currIndex].opts.idleTime&&(n.idleSecondsCounter=0,o.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){n.idleSecondsCounter=0,n.isIdle&&n.showControls(),n.isIdle=!1}),n.idleInterval=l.setInterval(function(){++n.idleSecondsCounter>=n.group[n.currIndex].opts.idleTime&&!n.isDragging&&(n.isIdle=!0,n.idleSecondsCounter=0,n.hideControls())},1e3))},removeEvents:function(){s.off("orientationchange.fb resize.fb"),o.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),this.idleInterval&&(l.clearInterval(this.idleInterval),this.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,n){var e,i,s,o,a,r,l,h,c,d=this,u=d.group.length;if(!(d.isDragging||d.isClosing||d.isAnimating&&d.firstRun)){if(t=parseInt(t,10),!(s=d.current?d.current.opts.loop:d.opts.loop)&&(t<0||u<=t))return!1;if(e=d.firstRun=!Object.keys(d.slides).length,a=d.current,d.prevIndex=d.currIndex,d.prevPos=d.currPos,o=d.createSlide(t),1<u&&((s||o.index<u-1)&&d.createSlide(t+1),(s||0<o.index)&&d.createSlide(t-1)),d.current=o,d.currIndex=o.index,d.currPos=o.pos,d.trigger("beforeShow",e),d.updateControls(),o.forcedDuration=void 0,g.isNumeric(n)?o.forcedDuration=n:n=o.opts[e?"animationDuration":"transitionDuration"],n=parseInt(n,10),i=d.isMoved(o),o.$slide.addClass("fancybox-slide--current"),e)return o.opts.animationEffect&&n&&d.$refs.container.css("transition-duration",n+"ms"),d.$refs.container.addClass("fancybox-is-open").trigger("focus"),d.loadSlide(o),void d.preload("image");r=g.fancybox.getTranslate(a.$slide),l=g.fancybox.getTranslate(d.$refs.stage),g.each(d.slides,function(t,e){g.fancybox.stop(e.$slide,!0)}),a.pos!==o.pos&&(a.isComplete=!1),a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(c=r.left-(a.pos*r.width+a.pos*a.opts.gutter),g.each(d.slides,function(t,e){e.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=e.pos*r.width+e.pos*e.opts.gutter;g.fancybox.setTranslate(e.$slide,{top:0,left:i-l.left+c}),e.pos!==o.pos&&e.$slide.addClass("fancybox-slide--"+(e.pos>o.pos?"next":"previous")),p(e.$slide),g.fancybox.animate(e.$slide,{top:0,left:(e.pos-o.pos)*r.width+(e.pos-o.pos)*e.opts.gutter},n,function(){e.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),e.pos===d.currPos&&d.complete()})})):n&&o.opts.transitionEffect&&(h="fancybox-animated fancybox-fx-"+o.opts.transitionEffect,a.$slide.addClass("fancybox-slide--"+(a.pos>o.pos?"next":"previous")),g.fancybox.animate(a.$slide,h,n,function(){a.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),o.isLoaded?d.revealContent(o):d.loadSlide(o),d.preload("image")}},createSlide:function(t){var e,i,n=this;return i=(i=t%n.group.length)<0?n.group.length+i:i,!n.slides[t]&&n.group[i]&&(e=g('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage),n.slides[t]=g.extend(!0,{},n.group[i],{pos:t,$slide:e,isLoaded:!1}),n.updateSlide(n.slides[t])),n.slides[t]},scaleToActual:function(t,e,i){var n,s,o,a,r,l=this,h=l.current,c=h.$content,d=g.fancybox.getTranslate(h.$slide).width,u=g.fancybox.getTranslate(h.$slide).height,p=h.width,f=h.height;l.isAnimating||l.isMoved()||!c||"image"!=h.type||!h.isLoaded||h.hasError||(l.isAnimating=!0,g.fancybox.stop(c),t=void 0===t?.5*d:t,e=void 0===e?.5*u:e,(n=g.fancybox.getTranslate(c)).top-=g.fancybox.getTranslate(h.$slide).top,n.left-=g.fancybox.getTranslate(h.$slide).left,a=p/n.width,r=f/n.height,s=.5*d-.5*p,o=.5*u-.5*f,d<p&&(0<(s=n.left*a-(t*a-t))&&(s=0),s<d-p&&(s=d-p)),u<f&&(0<(o=n.top*r-(e*r-e))&&(o=0),o<u-f&&(o=u-f)),l.updateCursor(p,f),g.fancybox.animate(c,{top:o,left:s,scaleX:a,scaleY:r},i||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,i=this,n=i.current,s=n.$content;i.isAnimating||i.isMoved()||!s||"image"!=n.type||!n.isLoaded||n.hasError||(i.isAnimating=!0,g.fancybox.stop(s),e=i.getFitPos(n),i.updateCursor(e.width,e.height),g.fancybox.animate(s,{top:e.top,left:e.left,scaleX:e.width/s.width(),scaleY:e.height/s.height()},t||366,function(){i.isAnimating=!1}))},getFitPos:function(t){var e,i,n,s,o=t.$content,a=t.$slide,r=t.width||t.opts.width,l=t.height||t.opts.height,h={};return!!(t.isLoaded&&o&&o.length)&&(e=g.fancybox.getTranslate(this.$refs.stage).width,i=g.fancybox.getTranslate(this.$refs.stage).height,e-=parseFloat(a.css("paddingLeft"))+parseFloat(a.css("paddingRight"))+parseFloat(o.css("marginLeft"))+parseFloat(o.css("marginRight")),i-=parseFloat(a.css("paddingTop"))+parseFloat(a.css("paddingBottom"))+parseFloat(o.css("marginTop"))+parseFloat(o.css("marginBottom")),r&&l||(r=e,l=i),e-.5<(r*=n=Math.min(1,e/r,i/l))&&(r=e),i-.5<(l*=n)&&(l=i),"image"===t.type?(h.top=Math.floor(.5*(i-l))+parseFloat(a.css("paddingTop")),h.left=Math.floor(.5*(e-r))+parseFloat(a.css("paddingLeft"))):"video"===t.contentType&&(r/(s=t.opts.width&&t.opts.height?r/l:t.opts.ratio||16/9)<l?l=r/s:l*s<r&&(r=l*s)),h.width=r,h.height=l,h)},update:function(i){var n=this;g.each(n.slides,function(t,e){n.updateSlide(e,i)})},updateSlide:function(t,e){var i=this,n=t&&t.$content,s=t.width||t.opts.width,o=t.height||t.opts.height,a=t.$slide;i.adjustCaption(t),n&&(s||o||"video"===t.contentType)&&!t.hasError&&(g.fancybox.stop(n),g.fancybox.setTranslate(n,i.getFitPos(t)),t.pos===i.currPos&&(i.isAnimating=!1,i.updateCursor())),i.adjustLayout(t),a.length&&(a.trigger("refresh"),t.pos===i.currPos&&i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",a.get(0).scrollHeight>a.get(0).clientHeight)),i.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,i=e.current,n=i.$slide;!e.isClosing&&i&&(n.siblings().css({transform:"",opacity:""}),n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),g.fancybox.animate(n,{top:0,left:0,opacity:1},void 0===t?0:t,function(){n.css({transform:"",opacity:""}),i.isComplete||e.complete()},!1))},isMoved:function(t){var e,i,n=t||this.current;return!!n&&(i=g.fancybox.getTranslate(this.$refs.stage),e=g.fancybox.getTranslate(n.$slide),!n.$slide.hasClass("fancybox-animated")&&(.5<Math.abs(e.top-i.top)||.5<Math.abs(e.left-i.left)))},updateCursor:function(t,e){var i,n,s=this.current,o=this.$refs.container;s&&!this.isClosing&&this.Guestures&&(o.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),n=!!(i=this.canPan(t,e))||this.isZoomable(),o.toggleClass("fancybox-is-zoomable",n),g("[data-fancybox-zoom]").prop("disabled",!n),i?o.addClass("fancybox-can-pan"):n&&("zoom"===s.opts.clickContent||g.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?o.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||1<this.group.length)&&"video"!==s.contentType&&o.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this.current;if(e&&!this.isClosing&&"image"===e.type&&!e.hasError){if(!e.isLoaded)return!0;if((t=this.getFitPos(e))&&(e.width>t.width||e.height>t.height))return!0}return!1},isScaledDown:function(t,e){var i=!1,n=this.current,s=n.$content;return void 0!==t&&void 0!==e?i=t<n.width&&e<n.height:s&&(i=(i=g.fancybox.getTranslate(s)).width<n.width&&i.height<n.height),i},canPan:function(t,e){var i=this.current,n=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=this.getFitPos(i),void 0!==t&&void 0!==e?n={width:t,height:e}:i.isComplete&&(n=g.fancybox.getTranslate(i.$content)),n&&s&&(s=1.5<Math.abs(n.width-s.width)||1.5<Math.abs(n.height-s.height))),s},loadSlide:function(i){var t,e,n,s=this;if(!i.isLoading&&!i.isLoaded){if(!(i.isLoading=!0)===s.trigger("beforeLoad",i))return i.isLoading=!1;switch(t=i.type,(e=i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass),t){case"image":s.setImage(i);break;case"iframe":s.setIframe(i);break;case"html":s.setContent(i,i.src||i.content);break;case"video":s.setContent(i,i.opts.video.tpl.replace(/\{\{src\}\}/gi,i.src).replace("{{format}}",i.opts.videoFormat||i.opts.video.format||"").replace("{{poster}}",i.thumb||""));break;case"inline":g(i.src).length?s.setContent(i,g(i.src)):s.setError(i);break;case"ajax":s.showLoading(i),n=g.ajax(g.extend({},i.opts.ajax.settings,{url:i.src,success:function(t,e){"success"===e&&s.setContent(i,t)},error:function(t,e){t&&"abort"!==e&&s.setError(i)}})),e.one("onReset",function(){n.abort()});break;default:s.setError(i)}return!0}},setImage:function(e){var t,i=this;setTimeout(function(){var t=e.$image;i.isClosing||!e.isLoading||t&&t.length&&t[0].complete||e.hasError||i.showLoading(e)},50),i.checkSrcset(e),e.$content=g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&e.thumb&&(e.width=e.opts.width,e.height=e.opts.height,(t=h.createElement("img")).onerror=function(){g(this).remove(),e.$ghost=null},t.onload=function(){i.afterLoad(e)},e.$ghost=g(t).addClass("fancybox-image").appendTo(e.$content).attr("src",e.thumb)),i.setBigImage(e)},checkSrcset:function(t){var e,i,n,s,o=t.opts.srcset||t.opts.image.srcset;if(o){n=l.devicePixelRatio||1,s=l.innerWidth*n,(i=o.split(",").map(function(t){var n={};return t.trim().split(/\s+/).forEach(function(t,e){var i=parseInt(t.substring(0,t.length-1),10);if(0===e)return n.url=t;i&&(n.value=i,n.postfix=t[t.length-1])}),n})).sort(function(t,e){return t.value-e.value});for(var a=0;a<i.length;a++){var r=i[a];if("w"===r.postfix&&r.value>=s||"x"===r.postfix&&r.value>=n){e=r;break}}!e&&i.length&&(e=i[i.length-1]),e&&(t.src=e.url,t.width&&t.height&&"w"==e.postfix&&(t.height=t.width/t.height*e.value,t.width=e.value),t.opts.srcset=o)}},setBigImage:function(e){var i=this,t=h.createElement("img"),n=g(t);e.$image=n.one("error",function(){i.setError(e)}).one("load",function(){var t;e.$ghost||(i.resolveImageSlideSize(e,this.naturalWidth,this.naturalHeight),i.afterLoad(e)),i.isClosing||(e.opts.srcset&&((t=e.opts.sizes)&&"auto"!==t||(t=(1<e.width/e.height&&1<s.width()/s.height()?"100":Math.round(e.width/e.height*100))+"vw"),n.attr("sizes",t).attr("srcset",e.opts.srcset)),e.$ghost&&setTimeout(function(){e.$ghost&&!i.isClosing&&e.$ghost.hide()},Math.min(300,Math.max(1e3,e.height/1600))),i.hideLoading(e))}).addClass("fancybox-image").attr("src",e.src).appendTo(e.$content),(t.complete||"complete"==t.readyState)&&n.naturalWidth&&n.naturalHeight?n.trigger("load"):t.error&&n.trigger("error")},resolveImageSlideSize:function(t,e,i){var n=parseInt(t.opts.width,10),s=parseInt(t.opts.height,10);t.width=e,t.height=i,0<n&&(t.width=n,t.height=Math.floor(n*i/e)),0<s&&(t.width=Math.floor(s*e/i),t.height=s)},setIframe:function(s){var o,e=this,a=s.opts.iframe,r=s.$slide;s.$content=g('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(r),r.addClass("fancybox-slide--"+s.contentType),s.$iframe=o=g(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(s.$content),a.preload?(e.showLoading(s),o.on("load.fb error.fb",function(t){this.isReady=1,s.$slide.trigger("refresh"),e.afterLoad(s)}),r.on("refresh.fb",function(){var t,e=s.$content,i=a.css.width,n=a.css.height;if(1===o[0].isReady){try{t=o.contents().find("body")}catch(t){}t&&t.length&&t.children().length&&(r.css("overflow","visible"),e.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===i&&(i=Math.ceil(Math.max(t[0].clientWidth,t.outerWidth(!0)))),e.css("width",i||"").css("max-width",""),void 0===n&&(n=Math.ceil(Math.max(t[0].clientHeight,t.outerHeight(!0)))),e.css("height",n||""),r.css("overflow","auto")),e.removeClass("fancybox-is-hidden")}})):e.afterLoad(s),o.attr("src",s.src),r.one("onReset",function(){try{g(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}g(this).off("refresh.fb").empty(),s.isLoaded=!1,s.isRevealed=!1})},setContent:function(t,e){this.isClosing||(this.hideLoading(t),t.$content&&g.fancybox.stop(t.$content),t.$slide.empty(),function(t){return t&&t.hasOwnProperty&&t instanceof g}(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=g("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===g.type(e)&&(e=g("<div>").append(g.trim(e)).contents()),t.opts.filter&&(e=g("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){g(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(g(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),g(e).appendTo(t.$slide),g(e).is("video,audio")&&(g(e).addClass("fancybox-video"),g(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||g(e).attr("width"),t.opts.height=t.opts.height||g(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=g(this.translate(this,this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){this.isClosing||(t.isLoading=!1,t.isLoaded=!0,this.trigger("afterLoad",t),this.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=g(this.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),this.adjustCaption(t),this.adjustLayout(t),t.pos===this.currPos&&this.updateCursor(),this.revealContent(t))},adjustCaption:function(t){var e,i=t||this.current,n=i.opts.caption,s=i.opts.preventCaptionOverlap,o=this.$refs.caption,a=!1;o.toggleClass("fancybox-caption--separate",s),s&&n&&n.length&&(i.pos!==this.currPos?((e=o.clone().appendTo(o.parent())).children().eq(0).empty().html(n),a=e.outerHeight(!0),e.empty().remove()):this.$caption&&(a=this.$caption.outerHeight(!0)),i.$slide.css("padding-bottom",a||""))},adjustLayout:function(t){var e,i,n,s,o=t||this.current;o.isLoaded&&!0!==o.opts.disableLayoutFix&&(o.$content.css("margin-bottom",""),o.$content.outerHeight()>o.$slide.height()+.5&&(n=o.$slide[0].style["padding-bottom"],s=o.$slide.css("padding-bottom"),0<parseFloat(s)&&(e=o.$slide[0].scrollHeight,o.$slide.css("padding-bottom",0),Math.abs(e-o.$slide[0].scrollHeight)<1&&(i=s),o.$slide.css("padding-bottom",n))),o.$content.css("margin-bottom",i))},revealContent:function(t){var e,i,n,s,o=this,a=t.$slide,r=!1,l=!1,h=o.isMoved(t),c=t.isRevealed;return t.isRevealed=!0,e=t.opts[o.firstRun?"animationEffect":"transitionEffect"],n=t.opts[o.firstRun?"animationDuration":"transitionDuration"],n=parseInt(void 0===t.forcedDuration?n:t.forcedDuration,10),!h&&t.pos===o.currPos&&n||(e=!1),"zoom"===e&&(t.pos===o.currPos&&n&&"image"===t.type&&!t.hasError&&(l=o.getThumbPos(t))?r=o.getFitPos(t):e="fade"),"zoom"===e?(o.isAnimating=!0,r.scaleX=r.width/l.width,r.scaleY=r.height/l.height,"auto"==(s=t.opts.zoomOpacity)&&(s=.1<Math.abs(t.width/t.height-l.width/l.height)),s&&(l.opacity=.1,r.opacity=1),g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void g.fancybox.animate(t.$content,r,n,function(){o.isAnimating=!1,o.complete()})):(o.updateSlide(t),e?(g.fancybox.stop(a),i="fancybox-slide--"+(t.pos>=o.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,a.addClass(i).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(a),"image"!==t.type&&t.$content.hide().show(0),void g.fancybox.animate(a,"fancybox-slide--current",n,function(){a.removeClass(i).css({transform:"",opacity:""}),t.pos===o.currPos&&o.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),c||!h||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===o.currPos&&o.complete())))},getThumbPos:function(t){var e,i,n,s,o,a=!1,r=t.$thumb;return!(!r||!function(t){var e,i;return!(!t||t.ownerDocument!==h)&&(g(".fancybox-container").css("pointer-events","none"),e={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=h.elementFromPoint(e.x,e.y)===t,g(".fancybox-container").css("pointer-events",""),i)}(r[0]))&&(e=g.fancybox.getTranslate(r),i=parseFloat(r.css("border-top-width")||0),n=parseFloat(r.css("border-right-width")||0),s=parseFloat(r.css("border-bottom-width")||0),o=parseFloat(r.css("border-left-width")||0),a={top:e.top+i,left:e.left+o,width:e.width-n-o,height:e.height-i-s,scaleX:1,scaleY:1},0<e.width&&0<e.height&&a)},complete:function(){var t,i=this,e=i.current,n={};!i.isMoved()&&e.isLoaded&&(e.isComplete||(e.isComplete=!0,e.$slide.siblings().trigger("onReset"),i.preload("inline"),p(e.$slide),e.$slide.addClass("fancybox-slide--complete"),g.each(i.slides,function(t,e){e.pos>=i.currPos-1&&e.pos<=i.currPos+1?n[e.pos]=e:e&&(g.fancybox.stop(e.$slide),e.$slide.off().remove())}),i.slides=n),i.isAnimating=!1,i.updateCursor(),i.trigger("afterShow"),e.opts.video.autoStart&&e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),i.next()}),e.opts.autoFocus&&"html"===e.contentType&&((t=e.$content.find("input[autofocus]:enabled:visible:first")).length?t.trigger("focus"):i.focus(null,!0)),e.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,i;this.group.length<2||(i=this.slides[this.currPos+1],(e=this.slides[this.currPos-1])&&e.type===t&&this.loadSlide(e),i&&i.type===t&&this.loadSlide(i))},focus:function(t,e){var i,n,s=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");this.isClosing||((i=(i=!t&&this.current&&this.current.isComplete?this.current.$slide.find("*:visible"+(e?":not(.fancybox-close-small)":"")):this.$refs.container.find("*:visible")).filter(s).filter(function(){return"hidden"!==g(this).css("visibility")&&!g(this).hasClass("disabled")})).length?(n=i.index(h.activeElement),t&&t.shiftKey?(n<0||0==n)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(n<0||n==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):this.$refs.container.trigger("focus"))},activate:function(){var e=this;g(".fancybox-container").each(function(){var t=g(this).data("FancyBox");t&&t.id!==e.id&&!t.isClosing&&(t.trigger("onDeactivate"),t.removeEvents(),t.isVisible=!1)}),e.isVisible=!0,(e.current||e.isIdle)&&(e.update(),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(t,e){function i(){c.cleanUp(t)}var n,s,o,a,r,l,h,c=this,d=c.current;return!c.isClosing&&(!(c.isClosing=!0)===c.trigger("beforeClose",t)?(c.isClosing=!1,u(function(){c.update()}),!1):(c.removeEvents(),o=d.$content,n=d.opts.animationEffect,s=g.isNumeric(e)?e:n?d.opts.animationDuration:0,d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?g.fancybox.stop(d.$slide):n=!1,d.$slide.siblings().trigger("onReset").remove(),s&&c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",s+"ms"),c.hideLoading(d),c.hideControls(!0),c.updateCursor(),"zoom"!==n||o&&s&&"image"===d.type&&!c.isMoved()&&!d.hasError&&(h=c.getThumbPos(d))||(n="fade"),"zoom"===n?(g.fancybox.stop(o),l={top:(a=g.fancybox.getTranslate(o)).top,left:a.left,scaleX:a.width/h.width,scaleY:a.height/h.height,width:h.width,height:h.height},"auto"==(r=d.opts.zoomOpacity)&&(r=.1<Math.abs(d.width/d.height-h.width/h.height)),r&&(h.opacity=0),g.fancybox.setTranslate(o,l),p(o),g.fancybox.animate(o,h,s,i)):n&&s?g.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+n,s,i):!0===t?setTimeout(i,s):i(),!0))},cleanUp:function(t){var e,i,n,s=this.current.opts.$orig;this.current.$slide.trigger("onReset"),this.$refs.container.empty().remove(),this.trigger("afterClose",t),this.current.opts.backFocus&&(s&&s.length&&s.is(":visible")||(s=this.$trigger),s&&s.length&&(i=l.scrollX,n=l.scrollY,s.trigger("focus"),g("html, body").scrollTop(n).scrollLeft(i))),this.current=null,(e=g.fancybox.getInstance())?e.activate():(g("body").removeClass("fancybox-active compensate-for-scrollbar"),g("#fancybox-style-noscroll").remove())},trigger:function(t,e){var i,n=Array.prototype.slice.call(arguments,1),s=e&&e.opts?e:this.current;if(s?n.unshift(s):s=this,n.unshift(this),g.isFunction(s.opts[t])&&(i=s.opts[t].apply(s,n)),!1===i)return i;"afterClose"!==t&&this.$refs?this.$refs.container.trigger(t+".fb",n):o.trigger(t+".fb",n)},updateControls:function(){var t=this,e=t.current,i=e.index,n=t.$refs.container,s=t.$refs.caption,o=e.opts.caption;e.$slide.trigger("refresh"),o&&o.length?(t.$caption=s).children().eq(0).html(o):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),n.find("[data-fancybox-count]").html(t.group.length),n.find("[data-fancybox-index]").html(i+1),n.find("[data-fancybox-prev]").prop("disabled",!e.opts.loop&&i<=0),n.find("[data-fancybox-next]").prop("disabled",!e.opts.loop&&i>=t.group.length-1),"image"===e.type?n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",e.opts.image.src||e.src).show():e.opts.toolbar&&n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),g(h.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=["infobar","toolbar","nav"];!t&&this.current.opts.preventCaptionOverlap||e.push("caption"),this.$refs.container.removeClass(e.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this.current?this.current.opts:this.opts,e=this.$refs.container;this.hasHiddenControls=!1,this.idleSecondsCounter=0,e.toggleClass("fancybox-show-toolbar",!(!t.toolbar||!t.buttons)).toggleClass("fancybox-show-infobar",!!(t.infobar&&1<this.group.length)).toggleClass("fancybox-show-caption",!!this.$caption).toggleClass("fancybox-show-nav",!!(t.arrows&&1<this.group.length)).toggleClass("fancybox-is-modal",!!t.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),g.fancybox={version:"3.5.7",defaults:t,getInstance:function(t){var e=g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return e instanceof n&&("string"===g.type(t)?e[t].apply(e,i):"function"===g.type(t)&&t.apply(e,i),e)},open:function(t,e,i){return new n(t,e,i)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),o.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(f=h.createElement("div"),l.getComputedStyle&&l.getComputedStyle(f)&&l.getComputedStyle(f).getPropertyValue("transform")&&!(h.documentMode&&h.documentMode<11)),getTranslate:function(t){var e;return!(!t||!t.length)&&{top:(e=t[0].getBoundingClientRect()).top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))}},setTranslate:function(t,e){var i="",n={};if(t&&e)return void 0===e.left&&void 0===e.top||(i=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",i=this.use3d?"translate3d("+i+", 0px)":"translate("+i+")"),void 0!==e.scaleX&&void 0!==e.scaleY?i+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(i+=" scaleX("+e.scaleX+")"),i.length&&(n.transform=i),void 0!==e.opacity&&(n.opacity=e.opacity),void 0!==e.width&&(n.width=e.width),void 0!==e.height&&(n.height=e.height),t.css(n)},animate:function(e,i,n,s,o){var a,r=this;g.isFunction(n)&&(s=n,n=null),r.stop(e),a=r.getTranslate(e),e.on(c,function(t){t&&t.originalEvent&&(!e.is(t.originalEvent.target)||"z-index"==t.originalEvent.propertyName)||(r.stop(e),g.isNumeric(n)&&e.css("transition-duration",""),g.isPlainObject(i)?void 0!==i.scaleX&&void 0!==i.scaleY&&r.setTranslate(e,{top:i.top,left:i.left,width:a.width*i.scaleX,height:a.height*i.scaleY,scaleX:1,scaleY:1}):!0!==o&&e.removeClass(i),g.isFunction(s)&&s(t))}),g.isNumeric(n)&&e.css("transition-duration",n+"ms"),g.isPlainObject(i)?(void 0!==i.scaleX&&void 0!==i.scaleY&&(delete i.width,delete i.height,e.parent().hasClass("fancybox-slide--image")&&e.parent().addClass("fancybox-is-scaling")),g.fancybox.setTranslate(e,i)):e.addClass(i),e.data("timer",setTimeout(function(){e.trigger(c)},n+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(c),t.off(c).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},g.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?g("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},o.on("click.fb-start","[data-fancybox]",i),o.on("click.fb-start","[data-fancybox-trigger]",function(t){g('[data-fancybox="'+g(this).attr("data-fancybox-trigger")+'"]').eq(g(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:g(this)})}),r=null,o.on("mousedown mouseup focus blur",".fancybox-button",function(t){switch(t.type){case"mousedown":r=g(this);break;case"mouseup":r=null;break;case"focusin":g(".fancybox-button").removeClass("fancybox-focus"),g(this).is(r)||g(this).is("[disabled]")||g(this).addClass("fancybox-focus");break;case"focusout":g(".fancybox-button").removeClass("fancybox-focus")}})}var r,f}(window,document,jQuery),function(p){"use strict";function f(i,t,e){if(i)return e=e||"","object"===p.type(e)&&(e=p.param(e,!0)),p.each(t,function(t,e){i=i.replace("$"+t,e||"")}),e.length&&(i+=(0<i.indexOf("?")?"&":"?")+e),i}var n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&0<t[12].indexOf("layer=c")?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};p(document).on("objectNeedsType.fb",function(t,e,s){var i,o,a,r,l,h,c,d=s.src||"",u=!1;i=p.extend(!0,{},n,s.opts.media),p.each(i,function(t,e){if(a=d.match(e.matcher)){if(u=e.type,c=t,h={},e.paramPlace&&a[e.paramPlace]){"?"==(l=a[e.paramPlace])[0]&&(l=l.substring(1)),l=l.split("&");for(var i=0;i<l.length;++i){var n=l[i].split("=",2);2==n.length&&(h[n[0]]=decodeURIComponent(n[1].replace(/\+/g," ")))}}return r=p.extend(!0,{},e.params,s.opts[t],h),d="function"===p.type(e.url)?e.url.call(this,a,r,s):f(e.url,a,r),o="function"===p.type(e.thumb)?e.thumb.call(this,a,r,s):f(e.thumb,a),"youtube"===t?d=d.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,i,n){return"&start="+((i?60*parseInt(i,10):0)+parseInt(n,10))}):"vimeo"===t&&(d=d.replace("&%23","#")),!1}}),u?(s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=o),"iframe"===u&&(s.opts=p.extend(!0,s.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),p.extend(s,{type:u,src:d,origSrc:s.src,contentSource:c,contentType:"image"===u?"image":"gmap_place"==c||"gmap_search"==c?"map":"video"})):d&&(s.type=s.opts.defaultType)});var s={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,i=this;this[t].loaded?setTimeout(function(){i.done(t)}):this[t].loading||(this[t].loading=!0,(e=document.createElement("script")).type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){i[t].loaded=!0,i.done(t)}:e.onload=function(){i[t].loaded=!0,i.done(t)},document.body.appendChild(e))},done:function(t){var e,i;"youtube"===t&&delete window.onYouTubeIframeAPIReady,(e=p.fancybox.getInstance())&&(i=e.current.$content.find("iframe"),"youtube"===t&&void 0!==YT&&YT?new YT.Player(i.attr("id"),{events:{onStateChange:function(t){0==t.data&&e.next()}}}):"vimeo"===t&&void 0!==Vimeo&&Vimeo&&new Vimeo.Player(i).on("ended",function(){e.next()}))}};p(document).on({"afterShow.fb":function(t,e,i){1<e.group.length&&("youtube"===i.contentSource||"vimeo"===i.contentSource)&&s.load(i.contentSource)}})}(jQuery),function(g,l,m){"use strict";function c(t){var e=[];for(var i in t=(t=t.originalEvent||t||g.e).touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t])t[i].pageX?e.push({x:t[i].pageX,y:t[i].pageY}):t[i].clientX&&e.push({x:t[i].clientX,y:t[i].clientY});return e}function v(t,e,i){return e&&t?"x"===i?t.x-e.x:"y"===i?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0}function h(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||m.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,i=t[0].attributes,n=i.length;e<n;e++)if("data-fancybox-"===i[e].nodeName.substr(0,14))return!0;return!1}function d(t){for(var e=!1;(i=t.get(0),void 0,n=g.getComputedStyle(i)["overflow-y"],s=g.getComputedStyle(i)["overflow-x"],o=("scroll"===n||"auto"===n)&&i.scrollHeight>i.clientHeight,a=("scroll"===s||"auto"===s)&&i.scrollWidth>i.clientWidth,!(e=o||a))&&((t=t.parent()).length&&!t.hasClass("fancybox-stage")&&!t.is("body")););var i,n,s,o,a;return e}function i(t){this.instance=t,this.$bg=t.$refs.bg,this.$stage=t.$refs.stage,this.$container=t.$refs.container,this.destroy(),this.$container.on("touchstart.fb.touch mousedown.fb.touch",m.proxy(this,"ontouchstart"))}var b=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||function(t){return g.setTimeout(t,1e3/60)},y=g.cancelAnimationFrame||g.webkitCancelAnimationFrame||g.mozCancelAnimationFrame||g.oCancelAnimationFrame||function(t){g.clearTimeout(t)};i.prototype.destroy=function(){this.$container.off(".fb.touch"),m(l).off(".fb.touch"),this.requestId&&(y(this.requestId),this.requestId=null),this.tapped&&(clearTimeout(this.tapped),this.tapped=null)},i.prototype.ontouchstart=function(t){var e=this,i=m(t.target),n=e.instance,s=n.current,o=s.$slide,a=s.$content,r="touchstart"==t.type;if(r&&e.$container.off("mousedown.fb.touch"),(!t.originalEvent||2!=t.originalEvent.button)&&o.length&&i.length&&!h(i)&&!h(i.parent())&&(i.is("img")||!(t.originalEvent.clientX>i[0].clientWidth+i.offset().left))){if(!s||n.isAnimating||s.$slide.hasClass("fancybox-animated"))return t.stopPropagation(),void t.preventDefault();e.realPoints=e.startPoints=c(t),e.startPoints.length&&(s.touch&&t.stopPropagation(),e.startEvent=t,e.canTap=!0,e.$target=i,e.$content=a,e.opts=s.opts.touch,e.isPanning=!1,e.isSwiping=!1,e.isZooming=!1,e.isScrolling=!1,e.canPan=n.canPan(),e.startTime=(new Date).getTime(),e.distanceX=e.distanceY=e.distance=0,e.canvasWidth=Math.round(o[0].clientWidth),e.canvasHeight=Math.round(o[0].clientHeight),e.contentLastPos=null,e.contentStartPos=m.fancybox.getTranslate(e.$content)||{top:0,left:0},e.sliderStartPos=m.fancybox.getTranslate(o),e.stagePos=m.fancybox.getTranslate(n.$refs.stage),e.sliderStartPos.top-=e.stagePos.top,e.sliderStartPos.left-=e.stagePos.left,e.contentStartPos.top-=e.stagePos.top,e.contentStartPos.left-=e.stagePos.left,m(l).off(".fb.touch").on(r?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",m.proxy(e,"ontouchend")).on(r?"touchmove.fb.touch":"mousemove.fb.touch",m.proxy(e,"ontouchmove")),m.fancybox.isMobile&&l.addEventListener("scroll",e.onscroll,!0),((e.opts||e.canPan)&&(i.is(e.$stage)||e.$stage.find(i).length)||(i.is(".fancybox-image")&&t.preventDefault(),m.fancybox.isMobile&&i.parents(".fancybox-caption").length))&&(e.isScrollable=d(i)||d(i.parent()),m.fancybox.isMobile&&e.isScrollable||t.preventDefault(),1!==e.startPoints.length&&!s.hasError||(e.canPan?(m.fancybox.stop(e.$content),e.isPanning=!0):e.isSwiping=!0,e.$container.addClass("fancybox-is-grabbing")),2===e.startPoints.length&&"image"===s.type&&(s.isLoaded||s.$ghost)&&(e.canTap=!1,e.isSwiping=!1,e.isPanning=!1,e.isZooming=!0,m.fancybox.stop(e.$content),e.centerPointStartX=.5*(e.startPoints[0].x+e.startPoints[1].x)-m(g).scrollLeft(),e.centerPointStartY=.5*(e.startPoints[0].y+e.startPoints[1].y)-m(g).scrollTop(),e.percentageOfImageAtPinchPointX=(e.centerPointStartX-e.contentStartPos.left)/e.contentStartPos.width,e.percentageOfImageAtPinchPointY=(e.centerPointStartY-e.contentStartPos.top)/e.contentStartPos.height,e.startDistanceBetweenFingers=v(e.startPoints[0],e.startPoints[1]))))}},i.prototype.onscroll=function(t){this.isScrolling=!0,l.removeEventListener("scroll",this.onscroll,!0)},i.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=c(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=v(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=v(e.newPoints[0],e.startPoints[0],"y"),e.distance=v(e.newPoints[0],e.startPoints[0]),0<e.distance&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},i.prototype.onSwipe=function(t){var e,s=this,o=s.instance,i=s.isSwiping,n=s.sliderStartPos.left||0;if(!0!==i)"x"==i&&(0<s.distanceX&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?n+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?n-=Math.pow(-s.distanceX,.8):n+=s.distanceX),s.sliderLastPos={top:"x"==i?0:s.sliderStartPos.top+s.distanceY,left:n},s.requestId&&(y(s.requestId),s.requestId=null),s.requestId=b(function(){s.sliderLastPos&&(m.each(s.instance.slides,function(t,e){var i=e.pos-s.instance.currPos;m.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+i*s.canvasWidth+i*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(10<Math.abs(s.distance)){if(s.canTap=!1,o.group.length<2&&s.opts.vertical?s.isSwiping="y":o.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&800<m(g).width()?s.isSwiping="x":(e=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=45<e&&e<135?"y":"x"),"y"===s.isSwiping&&m.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);o.isDragging=s.isSwiping,s.startPoints=s.newPoints,m.each(o.slides,function(t,e){var i,n;m.fancybox.stop(e.$slide),i=m.fancybox.getTranslate(e.$slide),n=m.fancybox.getTranslate(o.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===o.current.pos&&(s.sliderStartPos.top=i.top-n.top,s.sliderStartPos.left=i.left-n.left),m.fancybox.setTranslate(e.$slide,{top:i.top-n.top,left:i.left-n.left})}),o.SlideShow&&o.SlideShow.isActive&&o.SlideShow.stop()}},i.prototype.onPan=function(){var t=this;v(t.newPoints[0],t.realPoints[0])<(m.fancybox.isMobile?10:5)?t.startPoints=t.newPoints:(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&y(t.requestId),t.requestId=b(function(){m.fancybox.setTranslate(t.$content,t.contentLastPos)}))},i.prototype.limitMovement=function(){var t,e,i,n,s,o,a=this.canvasWidth,r=this.canvasHeight,l=this.distanceX,h=this.distanceY,c=this.contentStartPos,d=c.left,u=c.top,p=c.width,f=c.height;return s=a<p?d+l:d,o=u+h,t=Math.max(0,.5*a-.5*p),e=Math.max(0,.5*r-.5*f),i=Math.min(a-p,.5*a-.5*p),n=Math.min(r-f,.5*r-.5*f),0<l&&t<s&&(s=t-1+Math.pow(-t+d+l,.8)||0),l<0&&s<i&&(s=i+1-Math.pow(i-d-l,.8)||0),0<h&&e<o&&(o=e-1+Math.pow(-e+u+h,.8)||0),h<0&&o<n&&(o=n+1-Math.pow(n-u-h,.8)||0),{top:o,left:s}},i.prototype.limitPosition=function(t,e,i,n){var s=this.canvasWidth,o=this.canvasHeight;return t=s<i?(t=0<t?0:t)<s-i?s-i:t:Math.max(0,s/2-i/2),{top:e=o<n?(e=0<e?0:e)<o-n?o-n:e:Math.max(0,o/2-n/2),left:t}},i.prototype.onZoom=function(){var t=this,e=t.contentStartPos,i=e.width,n=e.height,s=e.left,o=e.top,a=v(t.newPoints[0],t.newPoints[1])/t.startDistanceBetweenFingers,r=Math.floor(i*a),l=Math.floor(n*a),h=(i-r)*t.percentageOfImageAtPinchPointX,c=(n-l)*t.percentageOfImageAtPinchPointY,d=(t.newPoints[0].x+t.newPoints[1].x)/2-m(g).scrollLeft(),u=(t.newPoints[0].y+t.newPoints[1].y)/2-m(g).scrollTop(),p=d-t.centerPointStartX,f={top:o+(c+(u-t.centerPointStartY)),left:s+(h+p),scaleX:a,scaleY:a};t.canTap=!1,t.newWidth=r,t.newHeight=l,t.contentLastPos=f,t.requestId&&y(t.requestId),t.requestId=b(function(){m.fancybox.setTranslate(t.$content,t.contentLastPos)})},i.prototype.ontouchend=function(t){var e=this,i=e.isSwiping,n=e.isPanning,s=e.isZooming,o=e.isScrolling;if(e.endPoints=c(t),e.dMs=Math.max((new Date).getTime()-e.startTime,1),e.$container.removeClass("fancybox-is-grabbing"),m(l).off(".fb.touch"),l.removeEventListener("scroll",e.onscroll,!0),e.requestId&&(y(e.requestId),e.requestId=null),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.isScrolling=!1,e.instance.isDragging=!1,e.canTap)return e.onTap(t);e.speed=100,e.velocityX=e.distanceX/e.dMs*.5,e.velocityY=e.distanceY/e.dMs*.5,n?e.endPanning():s?e.endZooming():e.endSwiping(i,o)},i.prototype.endSwiping=function(t,e){var i=this,n=!1,s=i.instance.group.length,o=Math.abs(i.distanceX),a="x"==t&&1<s&&(130<i.dMs&&10<o||50<o);i.sliderLastPos=null,"y"==t&&!e&&50<Math.abs(i.distanceY)?(m.fancybox.animate(i.instance.current.$slide,{top:i.sliderStartPos.top+i.distanceY+150*i.velocityY,opacity:0},200),n=i.instance.close(!0,250)):a&&0<i.distanceX?n=i.instance.previous(300):a&&i.distanceX<0&&(n=i.instance.next(300)),!1!==n||"x"!=t&&"y"!=t||i.instance.centerSlide(200),i.$container.removeClass("fancybox-is-sliding")},i.prototype.endPanning=function(){var t,e,i,n=this;n.contentLastPos&&(e=!1===n.opts.momentum||350<n.dMs?(t=n.contentLastPos.left,n.contentLastPos.top):(t=n.contentLastPos.left+500*n.velocityX,n.contentLastPos.top+500*n.velocityY),(i=n.limitPosition(t,e,n.contentStartPos.width,n.contentStartPos.height)).width=n.contentStartPos.width,i.height=n.contentStartPos.height,m.fancybox.animate(n.$content,i,366))},i.prototype.endZooming=function(){var t,e,i,n,s=this,o=s.instance.current,a=s.newWidth,r=s.newHeight;s.contentLastPos&&(t=s.contentLastPos.left,n={top:e=s.contentLastPos.top,left:t,width:a,height:r,scaleX:1,scaleY:1},m.fancybox.setTranslate(s.$content,n),a<s.canvasWidth&&r<s.canvasHeight?s.instance.scaleToFit(150):a>o.width||r>o.height?s.instance.scaleToActual(s.centerPointStartX,s.centerPointStartY,150):(i=s.limitPosition(t,e,a,r),m.fancybox.animate(s.$content,i,150)))},i.prototype.onTap=function(i){function t(t){var e=a.opts[t];if(m.isFunction(e)&&(e=e.apply(o,[a,i])),e)switch(e){case"close":o.close(n.startEvent);break;case"toggleControls":o.toggleControls();break;case"next":o.next();break;case"nextOrClose":1<o.group.length?o.next():o.close(n.startEvent);break;case"zoom":"image"==a.type&&(a.isLoaded||a.$ghost)&&(o.canPan()?o.scaleToFit():o.isScaledDown()?o.scaleToActual(l,h):o.group.length<2&&o.close(n.startEvent))}}var e,n=this,s=m(i.target),o=n.instance,a=o.current,r=i&&c(i)||n.startPoints,l=r[0]?r[0].x-m(g).scrollLeft()-n.stagePos.left:0,h=r[0]?r[0].y-m(g).scrollTop()-n.stagePos.top:0;if((!i.originalEvent||2!=i.originalEvent.button)&&(s.is("img")||!(l>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(s.is(".fancybox-slide"))e="Slide";else{if(!o.current.$content||!o.current.$content.find(s).addBack().filter(s).length)return;e="Content"}if(n.tapped){if(clearTimeout(n.tapped),n.tapped=null,50<Math.abs(l-n.tapX)||50<Math.abs(h-n.tapY))return this;t("dblclick"+e)}else n.tapX=l,n.tapY=h,a.opts["dblclick"+e]&&a.opts["dblclick"+e]!==a.opts["click"+e]?n.tapped=setTimeout(function(){n.tapped=null,o.isAnimating||t("click"+e)},500):t("click"+e);return this}},m(l).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new i(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(a,r){"use strict";r.extend(!0,r.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});function i(t){this.instance=t,this.init()}r.extend(i.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,e=t.instance,i=e.group[e.currIndex].opts.slideShow;t.$button=e.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),e.group.length<2||!i?t.$button.hide():i.progress&&(t.$progress=r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))},set:function(t){var e=this.instance,i=e.current;i&&(!0===t||i.opts.loop||e.currIndex<e.group.length-1)?this.isActive&&"video"!==i.contentType&&(this.$progress&&r.fancybox.animate(this.$progress.show(),{scaleX:1},i.opts.slideShow.speed),this.timer=setTimeout(function(){e.current.opts.loop||e.current.index!=e.group.length-1?e.next():e.jumpTo(0)},i.opts.slideShow.speed)):(this.stop(),e.idleSecondsCounter=0,e.showControls())},clear:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&this.$progress.removeAttr("style").hide()},start:function(){var t=this.instance.current;t&&(this.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),this.isActive=!0,t.isComplete&&this.set(!0),this.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this.instance.current;this.clear(),this.$button.attr("title",(t.opts.i18n[t.opts.lang]||t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),this.isActive=!1,this.instance.trigger("onSlideShowChange",!1),this.$progress&&this.$progress.removeAttr("style").hide()},toggle:function(){this.isActive?this.stop():this.start()}}),r(a).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new i(e))},"beforeShow.fb":function(t,e,i,n){var s=e&&e.SlideShow;n?s&&i.opts.slideShow.autoStart&&s.start():s&&s.isActive&&s.clear()},"afterShow.fb":function(t,e,i){var n=e&&e.SlideShow;n&&n.isActive&&n.set()},"afterKeydown.fb":function(t,e,i,n,s){var o=e&&e.SlideShow;!o||!i.opts.slideShow||80!==s&&32!==s||r(a.activeElement).is("button,a,input")||(n.preventDefault(),o.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var i=e&&e.SlideShow;i&&i.stop()}}),r(a).on("visibilitychange",function(){var t=r.fancybox.getInstance(),e=t&&t.SlideShow;e&&e.isActive&&(a.hidden?e.clear():e.set())})}(document,jQuery),function(o,i){"use strict";var n=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e={},i=0;i<t.length;i++){var n=t[i];if(n&&n[1]in o){for(var s=0;s<n.length;s++)e[t[0][s]]=n[s];return e}}return!1}();if(n){var s={request:function(t){(t=t||o.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)},exit:function(){o[n.exitFullscreen]()},toggle:function(t){t=t||o.documentElement,this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(o[n.fullscreenElement])},enabled:function(){return Boolean(o[n.fullscreenEnabled])}};i.extend(!0,i.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),i(o).on(n.fullscreenchange,function(){var t=s.isFullscreen(),e=i.fancybox.getInstance();e&&(e.current&&"image"===e.current.type&&e.isAnimating&&(e.isAnimating=!1,e.update(!0,!0,0),e.isComplete||e.complete()),e.trigger("onFullscreenChange",t),e.$refs.container.toggleClass("fancybox-is-fullscreen",t),e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}i(o).on({"onInit.fb":function(t,e){n?e&&e.group[e.currIndex].opts.fullScreen?(e.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),s.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&s.request(),e.FullScreen=s):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide():e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,i,n,s){e&&e.FullScreen&&70===s&&(n.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&s.exit()}})}(document,jQuery),function(t,o){"use strict";var a="fancybox-thumbs";o.fancybox.defaults=o.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},o.fancybox.defaults);function n(t){this.init(t)}o.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,i=t.group,n=0;e.instance=t,e.opts=i[t.currIndex].opts.thumbs,(t.Thumbs=e).$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var s=0,o=i.length;s<o&&(i[s].thumb&&n++,!(1<n));s++);1<n&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var i,t=this,e=t.instance,n=t.opts.parentEl,s=[];t.$grid||(t.$grid=o('<div class="'+a+" "+a+"-"+t.opts.axis+'"></div>').appendTo(e.$refs.container.find(n).addBack().filter(n)),t.$grid.on("click","a",function(){e.jumpTo(o(this).attr("data-index"))})),t.$list||(t.$list=o('<div class="'+a+'__list">').appendTo(t.$grid)),o.each(e.group,function(t,e){(i=e.thumb)||"image"!==e.type||(i=e.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+t+'"'+(i&&i.length?' style="background-image:url('+i+')"':'class="fancybox-thumbs-missing"')+"></a>")}),t.$list[0].innerHTML=s.join(""),"x"===t.opts.axis&&t.$list.width(parseInt(t.$grid.css("padding-right"),10)+e.group.length*t.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,i,n=this.$list,s=this.$grid;this.instance.current&&(i=(e=n.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active")).position(),"y"===this.opts.axis&&(i.top<0||i.top>n.height()-e.outerHeight())?n.stop().animate({scrollTop:n.scrollTop()+i.top},t):"x"===this.opts.axis&&(i.left<s.scrollLeft()||i.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&n.parent().stop().animate({scrollLeft:i.left},t))},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus(0)):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),o(t).on({"onInit.fb":function(t,e){var i;!e||e.Thumbs||(i=new n(e)).isActive&&!0===i.opts.autoStart&&i.show()},"beforeShow.fb":function(t,e,i,n){var s=e&&e.Thumbs;s&&s.isVisible&&s.focus(n?0:250)},"afterKeydown.fb":function(t,e,i,n,s){var o=e&&e.Thumbs;o&&o.isActive&&71===s&&(n.preventDefault(),o.toggle())},"beforeClose.fb":function(t,e){var i=e&&e.Thumbs;i&&i.isVisible&&!1!==i.opts.hideOnClose&&i.$grid.hide()}})}(document,jQuery),function(t,s){"use strict";s.extend(!0,s.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),s(t).on("click","[data-fancybox-share]",function(){var t,e,i=s.fancybox.getInstance(),n=i.current||null;n&&("function"===s.type(n.opts.share.url)&&(t=n.opts.share.url.apply(n,[i,n])),e=n.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===n.type?encodeURIComponent(n.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),s.fancybox.open({src:i.translate(i,e),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(o,a,s){"use strict";function r(){var t=o.location.hash.substr(1),e=t.split("-"),i=1<e.length&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||1;return{hash:t,index:i<1?1:i,gallery:e.join("-")}}function e(t){""!==t.gallery&&s("[data-fancybox='"+s.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function l(t){var e,i;return!!t&&(""!==(i=(e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&i)}s.escapeSelector||(s.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),s(function(){!1!==s.fancybox.defaults.hash&&(s(a).on({"onInit.fb":function(t,e){var i,n;!1!==e.group[e.currIndex].opts.hash&&(i=r(),(n=l(e))&&i.gallery&&n==i.gallery&&(e.currIndex=i.index-1))},"beforeShow.fb":function(t,e,i,n){var s;i&&!1!==i.opts.hash&&(s=l(e))&&(e.currentHash=s+(1<e.group.length?"-"+(i.index+1):""),o.location.hash!=="#"+e.currentHash&&(n&&!e.origHash&&(e.origHash=o.location.hash),e.hashTimer&&clearTimeout(e.hashTimer),e.hashTimer=setTimeout(function(){"replaceState"in o.history?(o.history[n?"pushState":"replaceState"]({},a.title,o.location.pathname+o.location.search+"#"+e.currentHash),n&&(e.hasCreatedHistory=!0)):o.location.hash=e.currentHash,e.hashTimer=null},300)))},"beforeClose.fb":function(t,e,i){i&&!1!==i.opts.hash&&(clearTimeout(e.hashTimer),e.currentHash&&e.hasCreatedHistory?o.history.back():e.currentHash&&("replaceState"in o.history?o.history.replaceState({},a.title,o.location.pathname+o.location.search+(e.origHash||"")):o.location.hash=e.origHash),e.currentHash=null)}}),s(o).on("hashchange.fb",function(){var t=r(),n=null;s.each(s(".fancybox-container").get().reverse(),function(t,e){var i=s(e).data("FancyBox");if(i&&i.currentHash)return n=i,!1}),n?n.currentHash===t.gallery+"-"+t.index||1===t.index&&n.currentHash==t.gallery||(n.currentHash=null,n.close()):""!==t.gallery&&e(t)}),setTimeout(function(){s.fancybox.getInstance()||e(r())},50))})}(window,document,jQuery),function(t,e){"use strict";var s=(new Date).getTime();e(t).on({"onInit.fb":function(t,n,e){n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var e=n.current,i=(new Date).getTime();n.group.length<2||!1===e.opts.wheel||"auto"===e.opts.wheel&&"image"!==e.type||(t.preventDefault(),t.stopPropagation(),e.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-s<250||(s=i,n[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(h){"use strict";var s,o=window.Slick||{};(s=0,o=function(t,e){var i,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:h(t),appendDots:h(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,e){return h('<button type="button" />').text(e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},h.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=h(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,i=h(t).data("slick")||{},n.options=h.extend({},n.defaults,e,i),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=h.proxy(n.autoPlay,n),n.autoPlayClear=h.proxy(n.autoPlayClear,n),n.autoPlayIterator=h.proxy(n.autoPlayIterator,n),n.changeSlide=h.proxy(n.changeSlide,n),n.clickHandler=h.proxy(n.clickHandler,n),n.selectHandler=h.proxy(n.selectHandler,n),n.setPosition=h.proxy(n.setPosition,n),n.swipeHandler=h.proxy(n.swipeHandler,n),n.dragHandler=h.proxy(n.dragHandler,n),n.keyHandler=h.proxy(n.keyHandler,n),n.instanceUid=s++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},o.prototype.addSlide=o.prototype.slickAdd=function(t,e,i){var n=this;if("boolean"==typeof e)i=e,e=null;else if(e<0||e>=n.slideCount)return!1;n.unload(),"number"==typeof e?0===e&&0===n.$slides.length?h(t).appendTo(n.$slideTrack):i?h(t).insertBefore(n.$slides.eq(e)):h(t).insertAfter(n.$slides.eq(e)):!0===i?h(t).prependTo(n.$slideTrack):h(t).appendTo(n.$slideTrack),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slides.each(function(t,e){h(e).attr("data-slick-index",t)}),n.$slidesCache=n.$slides,n.reinit()},o.prototype.animateHeight=function(){if(1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical){var t=this.$slides.eq(this.currentSlide).outerHeight(!0);this.$list.animate({height:t},this.options.speed)}},o.prototype.animateSlide=function(t,e){var i={},n=this;n.animateHeight(),!0===n.options.rtl&&!1===n.options.vertical&&(t=-t),!1===n.transformsEnabled?!1===n.options.vertical?n.$slideTrack.animate({left:t},n.options.speed,n.options.easing,e):n.$slideTrack.animate({top:t},n.options.speed,n.options.easing,e):!1===n.cssTransitions?(!0===n.options.rtl&&(n.currentLeft=-n.currentLeft),h({animStart:n.currentLeft}).animate({animStart:t},{duration:n.options.speed,easing:n.options.easing,step:function(t){t=Math.ceil(t),!1===n.options.vertical?i[n.animType]="translate("+t+"px, 0px)":i[n.animType]="translate(0px,"+t+"px)",n.$slideTrack.css(i)},complete:function(){e&&e.call()}})):(n.applyTransition(),t=Math.ceil(t),!1===n.options.vertical?i[n.animType]="translate3d("+t+"px, 0px, 0px)":i[n.animType]="translate3d(0px,"+t+"px, 0px)",n.$slideTrack.css(i),e&&setTimeout(function(){n.disableTransition(),e.call()},n.options.speed))},o.prototype.getNavTarget=function(){var t=this.options.asNavFor;return t&&null!==t&&(t=h(t).not(this.$slider)),t},o.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=h(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},o.prototype.applyTransition=function(t){var e=this,i={};!1===e.options.fade?i[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:i[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(i):e.$slides.eq(t).css(i)},o.prototype.autoPlay=function(){this.autoPlayClear(),this.slideCount>this.options.slidesToShow&&(this.autoPlayTimer=setInterval(this.autoPlayIterator,this.options.autoplaySpeed))},o.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},o.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},o.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=h(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=h(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},o.prototype.buildDots=function(){var t,e;if(!0===this.options.dots){for(this.$slider.addClass("slick-dotted"),e=h("<ul />").addClass(this.options.dotsClass),t=0;t<=this.getDotCount();t+=1)e.append(h("<li />").append(this.options.customPaging.call(this,this,t)));this.$dots=e.appendTo(this.options.appendDots),this.$dots.find("li").first().addClass("slick-active")}},o.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(t,e){h(e).attr("data-slick-index",t).data("originalStyling",h(e).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?h('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),h("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},o.prototype.buildRows=function(){var t,e,i,n,s,o,a,r=this;if(n=document.createDocumentFragment(),o=r.$slider.children(),1<r.options.rows){for(a=r.options.slidesPerRow*r.options.rows,s=Math.ceil(o.length/a),t=0;t<s;t++){var l=document.createElement("div");for(e=0;e<r.options.rows;e++){var h=document.createElement("div");for(i=0;i<r.options.slidesPerRow;i++){var c=t*a+(e*r.options.slidesPerRow+i);o.get(c)&&h.appendChild(o.get(c))}l.appendChild(h)}n.appendChild(l)}r.$slider.empty().append(n),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},o.prototype.checkResponsive=function(t,e){var i,n,s,o=this,a=!1,r=o.$slider.width(),l=window.innerWidth||h(window).width();if("window"===o.respondTo?s=l:"slider"===o.respondTo?s=r:"min"===o.respondTo&&(s=Math.min(l,r)),o.options.responsive&&o.options.responsive.length&&null!==o.options.responsive){for(i in n=null,o.breakpoints)o.breakpoints.hasOwnProperty(i)&&(!1===o.originalSettings.mobileFirst?s<o.breakpoints[i]&&(n=o.breakpoints[i]):s>o.breakpoints[i]&&(n=o.breakpoints[i]));null!==n?null!==o.activeBreakpoint?n===o.activeBreakpoint&&!e||(o.activeBreakpoint=n,"unslick"===o.breakpointSettings[n]?o.unslick(n):(o.options=h.extend({},o.originalSettings,o.breakpointSettings[n]),!0===t&&(o.currentSlide=o.options.initialSlide),o.refresh(t)),a=n):(o.activeBreakpoint=n,"unslick"===o.breakpointSettings[n]?o.unslick(n):(o.options=h.extend({},o.originalSettings,o.breakpointSettings[n]),!0===t&&(o.currentSlide=o.options.initialSlide),o.refresh(t)),a=n):null!==o.activeBreakpoint&&(o.activeBreakpoint=null,o.options=o.originalSettings,!0===t&&(o.currentSlide=o.options.initialSlide),o.refresh(t),a=n),t||!1===a||o.$slider.trigger("breakpoint",[o,a])}},o.prototype.changeSlide=function(t,e){var i,n,s=this,o=h(t.currentTarget);switch(o.is("a")&&t.preventDefault(),o.is("li")||(o=o.closest("li")),i=s.slideCount%s.options.slidesToScroll!=0?0:(s.slideCount-s.currentSlide)%s.options.slidesToScroll,t.data.message){case"previous":n=0==i?s.options.slidesToScroll:s.options.slidesToShow-i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide-n,!1,e);break;case"next":n=0==i?s.options.slidesToScroll:i,s.slideCount>s.options.slidesToShow&&s.slideHandler(s.currentSlide+n,!1,e);break;case"index":var a=0===t.data.index?0:t.data.index||o.index()*s.options.slidesToScroll;s.slideHandler(s.checkNavigable(a),!1,e),o.children().trigger("focus");break;default:return}},o.prototype.checkNavigable=function(t){var e,i;if(i=0,t>(e=this.getNavigableIndexes())[e.length-1])t=e[e.length-1];else for(var n in e){if(t<e[n]){t=i;break}i=e[n]}return t},o.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(h("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",h.proxy(t.interrupt,t,!0)).off("mouseleave.slick",h.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),h(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&h(t.$slideTrack).children().off("click.slick",t.selectHandler),h(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),h(window).off("resize.slick.slick-"+t.instanceUid,t.resize),h("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),h(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},o.prototype.cleanUpSlideEvents=function(){this.$list.off("mouseenter.slick",h.proxy(this.interrupt,this,!0)),this.$list.off("mouseleave.slick",h.proxy(this.interrupt,this,!1))},o.prototype.cleanUpRows=function(){var t;1<this.options.rows&&((t=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(t))},o.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},o.prototype.destroy=function(t){var e=this;e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),h(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){h(this).attr("style",h(this).data("originalStyling"))}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,t||e.$slider.trigger("destroy",[e])},o.prototype.disableTransition=function(t){var e={};e[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(e):this.$slides.eq(t).css(e)},o.prototype.fadeSlide=function(t,e){var i=this;!1===i.cssTransitions?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},o.prototype.fadeSlideOut=function(t){!1===this.cssTransitions?this.$slides.eq(t).animate({opacity:0,zIndex:this.options.zIndex-2},this.options.speed,this.options.easing):(this.applyTransition(t),this.$slides.eq(t).css({opacity:0,zIndex:this.options.zIndex-2}))},o.prototype.filterSlides=o.prototype.slickFilter=function(t){null!==t&&(this.$slidesCache=this.$slides,this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.filter(t).appendTo(this.$slideTrack),this.reinit())},o.prototype.focusHandler=function(){var i=this;i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var e=h(this);setTimeout(function(){i.options.pauseOnFocus&&(i.focussed=e.is(":focus"),i.autoPlay())},0)})},o.prototype.getCurrent=o.prototype.slickCurrentSlide=function(){return this.currentSlide},o.prototype.getDotCount=function(){var t=this,e=0,i=0,n=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++n;else for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)n=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++n,e=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else n=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return n-1},o.prototype.getLeft=function(t){var e,i,n,s,o=this,a=0;return o.slideOffset=0,i=o.$slides.first().outerHeight(!0),!0===o.options.infinite?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,s=-1,!0===o.options.vertical&&!0===o.options.centerMode&&(2===o.options.slidesToShow?s=-1.5:1===o.options.slidesToShow&&(s=-2)),a=i*o.options.slidesToShow*s),o.slideCount%o.options.slidesToScroll!=0&&t+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(a=t>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(t-o.slideCount))*o.slideWidth*-1,(o.options.slidesToShow-(t-o.slideCount))*i*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,o.slideCount%o.options.slidesToScroll*i*-1))):t+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(t+o.options.slidesToShow-o.slideCount)*o.slideWidth,a=(t+o.options.slidesToShow-o.slideCount)*i),o.slideCount<=o.options.slidesToShow&&(a=o.slideOffset=0),!0===o.options.centerMode&&o.slideCount<=o.options.slidesToShow?o.slideOffset=o.slideWidth*Math.floor(o.options.slidesToShow)/2-o.slideWidth*o.slideCount/2:!0===o.options.centerMode&&!0===o.options.infinite?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:!0===o.options.centerMode&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),e=!1===o.options.vertical?t*o.slideWidth*-1+o.slideOffset:t*i*-1+a,!0===o.options.variableWidth&&(n=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(t):o.$slideTrack.children(".slick-slide").eq(t+o.options.slidesToShow),e=!0===o.options.rtl?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===o.options.centerMode&&(n=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(t):o.$slideTrack.children(".slick-slide").eq(t+o.options.slidesToShow+1),e=!0===o.options.rtl?n[0]?-1*(o.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,e+=(o.$list.width()-n.outerWidth())/2)),e},o.prototype.getOption=o.prototype.slickGetOption=function(t){return this.options[t]},o.prototype.getNavigableIndexes=function(){var t,e=this,i=0,n=0,s=[];for(t=!1===e.options.infinite?e.slideCount:(i=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,2*e.slideCount);i<t;)s.push(i),i=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},o.prototype.getSlick=function(){return this},o.prototype.getSlideCount=function(){var i,n,s=this;return n=!0===s.options.centerMode?s.slideWidth*Math.floor(s.options.slidesToShow/2):0,!0===s.options.swipeToSlide?(s.$slideTrack.find(".slick-slide").each(function(t,e){if(e.offsetLeft-n+h(e).outerWidth()/2>-1*s.swipeLeft)return i=e,!1}),Math.abs(h(i).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},o.prototype.goTo=o.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},o.prototype.init=function(t){var e=this;h(e.$slider).hasClass("slick-initialized")||(h(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),t&&e.$slider.trigger("init",[e]),!0===e.options.accessibility&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())},o.prototype.initADA=function(){var i=this,n=Math.ceil(i.slideCount/i.options.slidesToShow),s=i.getNavigableIndexes().filter(function(t){return 0<=t&&t<i.slideCount});i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==i.$dots&&(i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t){var e=s.indexOf(t);h(this).attr({role:"tabpanel",id:"slick-slide"+i.instanceUid+t,tabindex:-1}),-1!==e&&h(this).attr({"aria-describedby":"slick-slide-control"+i.instanceUid+e})}),i.$dots.attr("role","tablist").find("li").each(function(t){var e=s[t];h(this).attr({role:"presentation"}),h(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+i.instanceUid+t,"aria-controls":"slick-slide"+i.instanceUid+e,"aria-label":t+1+" of "+n,"aria-selected":null,tabindex:"-1"})}).eq(i.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var t=i.currentSlide,e=t+i.options.slidesToShow;t<e;t++)i.$slides.eq(t).attr("tabindex",0);i.activateADA()},o.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},o.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&(h("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&h("li",t.$dots).on("mouseenter.slick",h.proxy(t.interrupt,t,!0)).on("mouseleave.slick",h.proxy(t.interrupt,t,!1))},o.prototype.initSlideEvents=function(){this.options.pauseOnHover&&(this.$list.on("mouseenter.slick",h.proxy(this.interrupt,this,!0)),this.$list.on("mouseleave.slick",h.proxy(this.interrupt,this,!1)))},o.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),h(document).on(t.visibilityChange,h.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&h(t.$slideTrack).children().on("click.slick",t.selectHandler),h(window).on("orientationchange.slick.slick-"+t.instanceUid,h.proxy(t.orientationChange,t)),h(window).on("resize.slick.slick-"+t.instanceUid,h.proxy(t.resize,t)),h("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),h(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),h(t.setPosition)},o.prototype.initUI=function(){!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow.show(),this.$nextArrow.show()),!0===this.options.dots&&this.slideCount>this.options.slidesToShow&&this.$dots.show()},o.prototype.keyHandler=function(t){t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===this.options.accessibility?this.changeSlide({data:{message:!0===this.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===this.options.accessibility&&this.changeSlide({data:{message:!0===this.options.rtl?"previous":"next"}}))},o.prototype.lazyLoad=function(){function t(t){h("img[data-lazy]",t).each(function(){var t=h(this),e=h(this).attr("data-lazy"),i=h(this).attr("data-srcset"),n=h(this).attr("data-sizes")||o.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,function(){i&&(t.attr("srcset",i),n&&t.attr("sizes",n)),t.attr("src",e).animate({opacity:1},200,function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),o.$slider.trigger("lazyLoaded",[o,t,e])})},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,t,e])},s.src=e})}var e,i,n,o=this;if(!0===o.options.centerMode?n=!0===o.options.infinite?(i=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(i=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),o.options.slidesToShow/2+1+2+o.currentSlide):(i=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide,n=Math.ceil(i+o.options.slidesToShow),!0===o.options.fade&&(0<i&&i--,n<=o.slideCount&&n++)),e=o.$slider.find(".slick-slide").slice(i,n),"anticipated"===o.options.lazyLoad)for(var s=i-1,a=n,r=o.$slider.find(".slick-slide"),l=0;l<o.options.slidesToScroll;l++)s<0&&(s=o.slideCount-1),e=(e=e.add(r.eq(s))).add(r.eq(a)),s--,a++;t(e),o.slideCount<=o.options.slidesToShow?t(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?t(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&t(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},o.prototype.loadSlider=function(){this.setPosition(),this.$slideTrack.css({opacity:1}),this.$slider.removeClass("slick-loading"),this.initUI(),"progressive"===this.options.lazyLoad&&this.progressiveLazyLoad()},o.prototype.next=o.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},o.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},o.prototype.pause=o.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},o.prototype.play=o.prototype.slickPlay=function(){this.autoPlay(),this.options.autoplay=!0,this.paused=!1,this.focussed=!1,this.interrupted=!1},o.prototype.postSlide=function(t){var e=this;e.unslicked||(e.$slider.trigger("afterChange",[e,t]),e.animating=!1,e.slideCount>e.options.slidesToShow&&e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),!0===e.options.accessibility&&(e.initADA(),e.options.focusOnChange&&h(e.$slides.get(e.currentSlide)).attr("tabindex",0).focus()))},o.prototype.prev=o.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},o.prototype.preventDefault=function(t){t.preventDefault()},o.prototype.progressiveLazyLoad=function(t){t=t||1;var e,i,n,s,o,a=this,r=h("img[data-lazy]",a.$slider);r.length?(e=r.first(),i=e.attr("data-lazy"),n=e.attr("data-srcset"),s=e.attr("data-sizes")||a.$slider.attr("data-sizes"),(o=document.createElement("img")).onload=function(){n&&(e.attr("srcset",n),s&&e.attr("sizes",s)),e.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,e,i]),a.progressiveLazyLoad()},o.onerror=function(){t<3?setTimeout(function(){a.progressiveLazyLoad(t+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,e,i]),a.progressiveLazyLoad())},o.src=i):a.$slider.trigger("allImagesLoaded",[a])},o.prototype.refresh=function(t){var e,i,n=this;i=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>i&&(n.currentSlide=i),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),e=n.currentSlide,n.destroy(!0),h.extend(n,n.initials,{currentSlide:e}),n.init(),t||n.changeSlide({data:{message:"index",index:e}},!1)},o.prototype.registerBreakpoints=function(){var t,e,i,n=this,s=n.options.responsive||null;if("array"===h.type(s)&&s.length){for(t in n.respondTo=n.options.respondTo||"window",s)if(i=n.breakpoints.length-1,s.hasOwnProperty(t)){for(e=s[t].breakpoint;0<=i;)n.breakpoints[i]&&n.breakpoints[i]===e&&n.breakpoints.splice(i,1),i--;n.breakpoints.push(e),n.breakpointSettings[e]=s[t].settings}n.breakpoints.sort(function(t,e){return n.options.mobileFirst?t-e:e-t})}},o.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&h(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},o.prototype.resize=function(){var t=this;h(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=h(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},o.prototype.removeSlide=o.prototype.slickRemove=function(t,e,i){var n=this;if(t="boolean"==typeof t?!0===(e=t)?0:n.slideCount-1:!0===e?--t:t,n.slideCount<1||t<0||t>n.slideCount-1)return!1;n.unload(),!0===i?n.$slideTrack.children().remove():n.$slideTrack.children(this.options.slide).eq(t).remove(),n.$slides=n.$slideTrack.children(this.options.slide),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.append(n.$slides),n.$slidesCache=n.$slides,n.reinit()},o.prototype.setCSS=function(t){var e,i,n=this,s={};!0===n.options.rtl&&(t=-t),e="left"==n.positionProp?Math.ceil(t)+"px":"0px",i="top"==n.positionProp?Math.ceil(t)+"px":"0px",s[n.positionProp]=t,!1===n.transformsEnabled||(!(s={})===n.cssTransitions?s[n.animType]="translate("+e+", "+i+")":s[n.animType]="translate3d("+e+", "+i+", 0px)"),n.$slideTrack.css(s)},o.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},o.prototype.setFade=function(){var i,n=this;n.$slides.each(function(t,e){i=n.slideWidth*t*-1,!0===n.options.rtl?h(e).css({position:"relative",right:i,top:0,zIndex:n.options.zIndex-2,opacity:0}):h(e).css({position:"relative",left:i,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},o.prototype.setHeight=function(){if(1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical){var t=this.$slides.eq(this.currentSlide).outerHeight(!0);this.$list.css("height",t)}},o.prototype.setOption=o.prototype.slickSetOption=function(){var t,e,i,n,s,o=this,a=!1;if("object"===h.type(arguments[0])?(i=arguments[0],a=arguments[1],s="multiple"):"string"===h.type(arguments[0])&&(n=arguments[1],a=arguments[2],"responsive"===(i=arguments[0])&&"array"===h.type(arguments[1])?s="responsive":void 0!==arguments[1]&&(s="single")),"single"===s)o.options[i]=n;else if("multiple"===s)h.each(i,function(t,e){o.options[t]=e});else if("responsive"===s)for(e in n)if("array"!==h.type(o.options.responsive))o.options.responsive=[n[e]];else{for(t=o.options.responsive.length-1;0<=t;)o.options.responsive[t].breakpoint===n[e].breakpoint&&o.options.responsive.splice(t,1),t--;o.options.responsive.push(n[e])}a&&(o.unload(),o.reinit())},o.prototype.setPosition=function(){this.setDimensions(),this.setHeight(),!1===this.options.fade?this.setCSS(this.getLeft(this.currentSlide)):this.setFade(),this.$slider.trigger("setPosition",[this])},o.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},o.prototype.setSlideClasses=function(t){var e,i,n,s,o=this;if(i=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(t).addClass("slick-current"),!0===o.options.centerMode){var a=o.options.slidesToShow%2==0?1:0;e=Math.floor(o.options.slidesToShow/2),!0===o.options.infinite&&(e<=t&&t<=o.slideCount-1-e?o.$slides.slice(t-e+a,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(n=o.options.slidesToShow+t,i.slice(n-e+1+a,n+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-o.options.slidesToShow).addClass("slick-center"):t===o.slideCount-1&&i.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(t).addClass("slick-center")}else 0<=t&&t<=o.slideCount-o.options.slidesToShow?o.$slides.slice(t,t+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=o.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(s=o.slideCount%o.options.slidesToShow,n=!0===o.options.infinite?o.options.slidesToShow+t:t,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-t<o.options.slidesToShow?i.slice(n-(o.options.slidesToShow-s),n+s).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==o.options.lazyLoad&&"anticipated"!==o.options.lazyLoad||o.lazyLoad()},o.prototype.setupInfinite=function(){var t,e,i,n=this;if(!0===n.options.fade&&(n.options.centerMode=!1),!0===n.options.infinite&&!1===n.options.fade&&(e=null,n.slideCount>n.options.slidesToShow)){for(i=!0===n.options.centerMode?n.options.slidesToShow+1:n.options.slidesToShow,t=n.slideCount;t>n.slideCount-i;t-=1)e=t-1,h(n.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(t=0;t<i+n.slideCount;t+=1)e=t,h(n.$slides[e]).clone(!0).attr("id","").attr("data-slick-index",e+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){h(this).attr("id","")})}},o.prototype.interrupt=function(t){t||this.autoPlay(),this.interrupted=t},o.prototype.selectHandler=function(t){var e=h(t.target).is(".slick-slide")?h(t.target):h(t.target).parents(".slick-slide"),i=parseInt(e.attr("data-slick-index"));i=i||0,this.slideCount<=this.options.slidesToShow?this.slideHandler(i,!1,!0):this.slideHandler(i)},o.prototype.slideHandler=function(t,e,i){var n,s,o,a,r,l=null,h=this;if(e=e||!1,!(!0===h.animating&&!0===h.options.waitForAnimate||!0===h.options.fade&&h.currentSlide===t))if(!1===e&&h.asNavFor(t),n=t,l=h.getLeft(n),a=h.getLeft(h.currentSlide),h.currentLeft=null===h.swipeLeft?a:h.swipeLeft,!1===h.options.infinite&&!1===h.options.centerMode&&(t<0||t>h.getDotCount()*h.options.slidesToScroll))!1===h.options.fade&&(n=h.currentSlide,!0!==i?h.animateSlide(a,function(){h.postSlide(n)}):h.postSlide(n));else if(!1===h.options.infinite&&!0===h.options.centerMode&&(t<0||t>h.slideCount-h.options.slidesToScroll))!1===h.options.fade&&(n=h.currentSlide,!0!==i?h.animateSlide(a,function(){h.postSlide(n)}):h.postSlide(n));else{if(h.options.autoplay&&clearInterval(h.autoPlayTimer),s=n<0?h.slideCount%h.options.slidesToScroll!=0?h.slideCount-h.slideCount%h.options.slidesToScroll:h.slideCount+n:n>=h.slideCount?h.slideCount%h.options.slidesToScroll!=0?0:n-h.slideCount:n,h.animating=!0,h.$slider.trigger("beforeChange",[h,h.currentSlide,s]),o=h.currentSlide,h.currentSlide=s,h.setSlideClasses(h.currentSlide),h.options.asNavFor&&(r=(r=h.getNavTarget()).slick("getSlick")).slideCount<=r.options.slidesToShow&&r.setSlideClasses(h.currentSlide),h.updateDots(),h.updateArrows(),!0===h.options.fade)return!0!==i?(h.fadeSlideOut(o),h.fadeSlide(s,function(){h.postSlide(s)})):h.postSlide(s),void h.animateHeight();!0!==i?h.animateSlide(l,function(){h.postSlide(s)}):h.postSlide(s)}},o.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},o.prototype.swipeDirection=function(){var t,e,i,n;return t=this.touchObject.startX-this.touchObject.curX,e=this.touchObject.startY-this.touchObject.curY,i=Math.atan2(e,t),(n=Math.round(180*i/Math.PI))<0&&(n=360-Math.abs(n)),n<=45&&0<=n?!1===this.options.rtl?"left":"right":n<=360&&315<=n?!1===this.options.rtl?"left":"right":135<=n&&n<=225?!1===this.options.rtl?"right":"left":!0===this.options.verticalSwiping?35<=n&&n<=135?"down":"up":"vertical"},o.prototype.swipeEnd=function(t){var e,i,n=this;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1;if(n.interrupted=!1,n.shouldClick=!(10<n.touchObject.swipeLength),void 0===n.touchObject.curX)return!1;if(!0===n.touchObject.edgeHit&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(i=n.swipeDirection()){case"left":case"down":e=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":e=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1}"vertical"!=i&&(n.slideHandler(e),n.touchObject={},n.$slider.trigger("swipe",[n,i]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},o.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},o.prototype.swipeMove=function(t){var e,i,n,s,o,a,r=this;return o=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!r.dragging||r.scrolling||o&&1!==o.length)&&(e=r.getLeft(r.currentSlide),r.touchObject.curX=void 0!==o?o[0].pageX:t.clientX,r.touchObject.curY=void 0!==o?o[0].pageY:t.clientY,r.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(r.touchObject.curX-r.touchObject.startX,2))),a=Math.round(Math.sqrt(Math.pow(r.touchObject.curY-r.touchObject.startY,2))),!r.options.verticalSwiping&&!r.swiping&&4<a?!(r.scrolling=!0):(!0===r.options.verticalSwiping&&(r.touchObject.swipeLength=a),i=r.swipeDirection(),void 0!==t.originalEvent&&4<r.touchObject.swipeLength&&(r.swiping=!0,t.preventDefault()),s=(!1===r.options.rtl?1:-1)*(r.touchObject.curX>r.touchObject.startX?1:-1),!0===r.options.verticalSwiping&&(s=r.touchObject.curY>r.touchObject.startY?1:-1),n=r.touchObject.swipeLength,(r.touchObject.edgeHit=!1)===r.options.infinite&&(0===r.currentSlide&&"right"===i||r.currentSlide>=r.getDotCount()&&"left"===i)&&(n=r.touchObject.swipeLength*r.options.edgeFriction,r.touchObject.edgeHit=!0),!1===r.options.vertical?r.swipeLeft=e+n*s:r.swipeLeft=e+n*(r.$list.height()/r.listWidth)*s,!0===r.options.verticalSwiping&&(r.swipeLeft=e+n*s),!0!==r.options.fade&&!1!==r.options.touchMove&&(!0===r.animating?(r.swipeLeft=null,!1):void r.setCSS(r.swipeLeft))))},o.prototype.swipeStart=function(t){var e,i=this;if(i.interrupted=!0,1!==i.touchObject.fingerCount||i.slideCount<=i.options.slidesToShow)return!(i.touchObject={});void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),i.touchObject.startX=i.touchObject.curX=void 0!==e?e.pageX:t.clientX,i.touchObject.startY=i.touchObject.curY=void 0!==e?e.pageY:t.clientY,i.dragging=!0},o.prototype.unfilterSlides=o.prototype.slickUnfilter=function(){null!==this.$slidesCache&&(this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.appendTo(this.$slideTrack),this.reinit())},o.prototype.unload=function(){var t=this;h(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},o.prototype.unslick=function(t){this.$slider.trigger("unslick",[this,t]),this.destroy()},o.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode?(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},o.prototype.updateDots=function(){null!==this.$dots&&(this.$dots.find("li").removeClass("slick-active").end(),this.$dots.find("li").eq(Math.floor(this.currentSlide/this.options.slidesToScroll)).addClass("slick-active"))},o.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},h.fn.slick=function(){var t,e,i=arguments[0],n=Array.prototype.slice.call(arguments,1),s=this.length;for(t=0;t<s;t++)if("object"==typeof i||void 0===i?this[t].slick=new o(this[t],i):e=this[t].slick[i].apply(this[t].slick,n),void 0!==e)return e;return this}});
"use strict";

(function () {

  var analogArray = [
    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский-приморский  район, Мебельная-мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Счастье»',
    metro: 'Беговая, 21 мин. пешком',
    street: 'Приморский район, Мебельная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Купечесский двор»',
    metro: 'Пионерская, 5 мин. пешком',
    street: 'Приморский район, Пионерская улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «Разруха»',
    metro: 'Звездная, 40 мин. пешком',
    street: 'фрунзенсский район, Колокольная улица, 19к2',
    url: 'img/analog_1.jpg'
    },

    {
    name: 'ЖК «оооооооооооооооочень длинное название »',
    metro: 'Бухарестские ворота, 30 мин. пешком',
    street: 'Приморский Приморский  район, Мебельная Приморский улица, 19к2',
    url: 'img/analog_1.jpg'
    }
  ]

  var fragment = document.createDocumentFragment(); // fragment
  var template = document.querySelector('#analog-template'); // template
  var analogBox = document.querySelector('#analogList'); // box
  //var analogModal = document.querySelector('#analogModal') // analog Modal

  var analogItems = 2;

  var fillAnalogNode = function (element, analogData) {
    element.querySelector('.analog__item-image').setAttribute('src', analogData.url);
    element.querySelector('.analog__item-title').textContent = analogData.name;
    element.querySelector('.analog__item-metro').textContent = analogData.metro;
    element.querySelector('.analog__item-street').textContent = analogData.street;
  };

  var createAnalogNode = function () {

    for(var i = 0; i < analogItems; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var analogData = analogArray[i]; // current analog

      fillAnalogNode(currentItem, analogData); // run fill func

      fragment.appendChild(currentItem);
    };
      analogBox.appendChild(fragment);
  };

  createAnalogNode();

})();

'use string';

(function() {
  var bankList = [
    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Сбербанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'Райффайзен',
      img: 'img/sberbank.png',
      deposit: '5',
      rate: '14.00',
      timeFrom: '1',
      timeTo: '50'
    },

    {
      name: 'ВТБ',
      img: 'img/sberbank.png',
      deposit: '19',
      rate: '9.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'УРАЛсиб',
      img: 'img/sberbank.png',
      deposit: '85',
      rate: '4.00',
      timeFrom: '1',
      timeTo: '40'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    },

    {
      name: 'ГазпромБанк',
      img: 'img/sberbank.png',
      deposit: '15',
      rate: '10.00',
      timeFrom: '1',
      timeTo: '15'
    }
  ];

  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#bank'); //template
  var bankNode = document.querySelector('.credit__list'); // node


  var fillBankList = function (element, bankData) {
    element.querySelector('.bank__logo').setAttribute('src', bankData.img);
    element.querySelector('.bank__title').textContent = bankData.name;
    element.querySelector('.deposit').textContent = bankData.deposit;
    element.querySelector('.rate').textContent = bankData.rate;
    element.querySelector('.timeFrom').textContent = bankData.timeFrom;
    element.querySelector('.timeTo').textContent = bankData.timeTo;
  };

  var createBankCard= function () {

    for(var i = 0; i < bankList.length; i++) {
      var currentItem = template.content.cloneNode(true); // clone template
      var bankData = bankList[i]; // current item

      fillBankList(currentItem, bankData); // run fill func

      fragment.appendChild(currentItem);
    };
      bankNode.appendChild(fragment);
  };


  createBankCard();

  var visibleItems = 4;
  var bankItem = document.querySelectorAll('.credit__list-item');
  var showMoreBtn = document.querySelector('.credit__listBtn');

  var showCard = function () {
    if (bankList.length > visibleItems) {
      for(var i = visibleItems; i < bankList.length; i++){
        // console.log('ok')
        bankItem[i].classList.add('visually-hidden');
      }
    } else {
      showMoreBtn.classList.add('visually-hidden');
    }
  };

  var showMoreCard = function () {
    for (var i = 0; i < visibleItems; i++) {
      if(bankItem[i].classList.contains('visually-hidden')) {
        bankItem[i].classList.remove('visually-hidden');
      }
    }
  }

  showMoreBtn.addEventListener('click', function() {
    // console.log('btn')
    if ((bankList.length - visibleItems) > 4) {
      visibleItems += 4;
      // console.log(visibleItems);
      showMoreCard();
    } else {
      visibleItems = bankList.length;
      showMoreCard();
      showMoreBtn.classList.add('visually-hidden');
    }
  });

  showCard();

}());

function toNumber(x) { //Делает пробелы, между числами
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
};
(function () {
  $(document).ready(function () {

    let arrImg = ['img/analog_1.jpg', 'img/img-video-2.jpg'] //массив фоток для одной квартиры (в данном случае этот массив пойдет всем квартирам)
    let flats = []; //Список квартир 
    flats[0] = {
      'id': 0, 'square': 18, 'floor': 3, 'totalFloor': 3, 'type': 'Без отделки', 'cost': '2400000', 'room': 1, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[1] = {'id':1,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[2] = {'id':2,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[3] = {'id':3,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[4] = {'id':4,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[5] = {'id':5,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[6] = {'id':6,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[7] = {'id':7,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[8] = {'id':8,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[9] = {'id':9,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[10] = {'id':10,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[11] = {'id':11,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[12] = {'id':12,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[13] = {'id':13,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[14] = {'id':14,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[15] = {'id':15,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[16] = {'id':16,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[17] = {'id':17,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[18] = {'id':18,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[19] = {'id':19,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[20] = {'id':20,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[21] = {'id':21,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[22] = {'id':22,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[23] = {'id':23,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[24] = {'id':24,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[25] = {'id':25,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[26] = {'id':26,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[27] = {'id':27,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[28] = {'id':28,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[29] = {'id':29,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[30] = {'id':30,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[31] = {'id':31,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[32] = {'id':32,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 2, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[33] = {'id':33,'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 2, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[34] = {'id':34,'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[35] = {'id':35,'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000', 'room': 3, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[36] = {'id':36,'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000', 'room': 4, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[37] = {'id':37,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[38] = {'id':38,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[39] = {'id':39,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 4, 'imgPlan': 'img/layout.png', 'images': arrImg,
    };
    flats[40] = {'id':40,'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[41] = {'id':41,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[42] = {'id':42,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[43] = {'id':43,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[44] = {'id':44,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[45] = {'id':45,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[46] = {'id':46,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[47] = {'id':47,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[48] = {'id':48,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[49] = {'id':49,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[50] = {'id':50,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[51] = {'id':51,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[52] = {'id':52,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[53] = {'id':53,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[54] = {'id':54,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[55] = {'id':55,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[56] = {'id':56,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[57] = {'id':57,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[58] = {'id':58,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[59] = {'id':59,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[60] = {'id':60,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[61] = {'id':61,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[62] = {'id':62,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };
    flats[63] = {'id':63,'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000', 'room': 1, 'imgPlan': 'img/analog_1.jpg', 'images': arrImg,
    };


    let countRoomOne = getCountFlatsByRoom(flats, 1);
    let countRoomTwo = getCountFlatsByRoom(flats, 2);
    let countRoomThree = getCountFlatsByRoom(flats, 3);
    let countRoomStudio = getCountFlatsByRoom(flats, 4);
    $('.flats__modalBtn[data-flats="1"]').find('.flat-count').text(countRoomOne);
    $('.flats__modalBtn[data-flats="2"]').find('.flat-count').text(countRoomTwo);
    $('.flats__modalBtn[data-flats="3"]').find('.flat-count').text(countRoomThree);
    $('.flats__modalBtn[data-flats="4"]').find('.flat-count').text(countRoomStudio);

    let currentPage = 1;
    let entryOnPage = 10;
    totalPage = Math.ceil(flats.length / entryOnPage);

    let $tableList = $('#catalog-list-table');
    let countRoomFlats, arrayFlats;
    $('.flats__modalBtn').on('click', function (e) {
      e.preventDefault();
      
      currentPage = 1;
      countRoomFlats = $(this).attr('data-flats');
      let $modalWindow = $('.catalog__modal');
      let currentRoomFlats = $modalWindow.attr('data-flats'); //Текущий контент модального окна
      clearListTable();
      if (!$modalWindow.has('modal--closed')) { //Если окно открыто
        $modalWindow.addClass('modal--closed');
      }
      if (countRoomFlats == currentRoomFlats) { //если текущий контент мод. окна соответсвует тому контенту, который появляется при нажатии на текущюю кнопку
        $modalWindow.addClass('modal--closed');
        $modalWindow.attr('data-flats', '0');
        clearListTable();
        return;
      }


      if (countRoomFlats == '1') { //если 1-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '1');
      } else if (countRoomFlats == '2') { //если 2-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '2');
      } else if (countRoomFlats == '3') { //если 3-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '3');
      } else if (countRoomFlats == '4') { //если 4-к квартиры
        $modalWindow.removeClass('modal--closed');
        $modalWindow.attr('data-flats', '4');
      }
      arrayFlats = getFlatsByRoom(flats, parseInt(countRoomFlats));
      flatsOut(arrayFlats, countRoomFlats, true);
      $('catalog__modal').scrollTop(0);

    });





    function flatsOut(flats, countRoom, pagination) { //Выводит квартиры в модальное окно. Создает одну таблицу
      catalogSliderDestroy(); //Отключить слайдеры
      totalPage = Math.ceil(flats.length / entryOnPage);

      if (countRoom == '4') {
        $('.catalog-title-box').html('<span class="name-flats">Студии</span><span class="count-flats">' + flats.length + ' квартир</span>');
      } else {
        $('.catalog-title-box').html('<span class="name-flats">' + countRoom + '-к квартиры</span><span class="count-flats">' + flats.length + ' квартир</span>');
      }

      let str = '<table class="catalog-table "><thead><th class="icon-flats"></th><th class="square">Площадь, м2</th><th class="floor">Этаж</th><th class="type">Тип отделки</th><th class="cost">Стоимость кв, руб</th><th class="plan">Планировка</th></thead><tbody><tr class="tr-empty"><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td rowspan="0" class="catalog-img-flat"><span class="wrap-heart"><svg class="heart" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg><svg  class="heart-fill hidden" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></span><img src="' + flats[0].imgPlan + '" alt=""><button type="button" class="btnToBook pink__btn" data-id="' + flats[0].id + '">Забронировать</button></td></tr>';
      let j = 0, idActiveItem, imgPathActiveItem;
      for (let i = (currentPage - 1) * entryOnPage; i < flats.length && i < currentPage * entryOnPage; i++) {
        j++;
        if (j == 1) {
          str += '<tr class="tr-catalog-item tr-catalog-item--active" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
          idActiveItem = flats[i].id;
          imgPathActiveItem = flats[i].imgPlan;
        } else {
          str += '<tr class="tr-catalog-item" data-id="' + flats[i].id + '" data-img-plan="' + flats[i].imgPlan + '">';
        }
        str += '<td class="icon-flats"><img src="img/icon-flats.png" alt=""></td>';
        str += '<td><div>' + flats[i].square + ' м2</div></td>';
        str += '<td><div>' + flats[i].floor + '</div></td>';
        str += '<td><div>' + flats[i].type + '</div></td>';
        str += '<td><div>' + toNumber(flats[i].cost) + '</div></td>';
        str += '</tr>';
        str += '<div class="catalog-item"><div class="catalog-item__num">' + countRoom + '-к квартира № 115</div><div class="catalog__slide-wrap"><div class="catalog__slider">';
        
        for (let j = 0; j < flats[i].images.length; j++) {
          const img = flats[i].images[j];
          str += '<div class="catalog__slider-item"><img src="'+img+'" alt="image"></div>';
        }
        '</div></div><div class="catalog-item__cost">' + toNumber(flats[i].cost) + '</div><div class="catalog-item__inner-flats"><div class="left-block"><span class="catalog-item__square">' + flats[i].square + ' м2</span><span class="catalog-item__floor">' + flats[i].floor + '/' + flats[i].totalFloor + ' этаж</span></div><span class="more">Подробнее</span></div><button type="button" class="catalog-item__btn pink__btn">Записаться на просмотр</button></div>';
      }
      str += '</tbody></table>';
      $tableList.append(str);
      
      updateImage(imgPathActiveItem, idActiveItem);
      if (totalPage > 1) {

      }
      catalogSliderInit(); //Включить слайдеры
      
      if (pagination) {
        
        updatePagination(totalPage); //Обновляем пагинацию
      }
     
      initObr(); //Обновляем обработчики
    }

    function initObr() {
      $('.tr-catalog-item').off('click');
      $('.tr-catalog-item').on('click', function () {
        $(this).addClass('tr-catalog-item--active').siblings('.tr-catalog-item').removeClass('tr-catalog-item--active');
        let img = $(this).attr('data-img-plan'); //берем картинку планировки 
        let id = $(this).attr('data-id'); //берем id
        updateImage(img, id); //Обновляем картинку планировки
      });
      $('.catalog-pagination__item').off('click');
      $('.catalog-pagination__item').on('click', function () {
        $(this).addClass('catalog-pagination__item--active').siblings().removeClass('catalog-pagination__item--active');
        currentPage = parseInt($(this).text());
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });
      $('catalog__modal').scrollTop(0);

      $('.btn-show-more').off('click');
      $('.btn-show-more').on('click', function () {
        $(this).addClass('hidden');
        $('.catalog-pagination__list').removeClass('hidden');
        currentPage = 2;
        clearListTable();
        flatsOut(arrayFlats, countRoomFlats);
      });

      $('.btnToBook').off('click');
      $('.btnToBook').on('click', function () {
        let id = $(this).attr('data-id');
        $('.modal-to-book').addClass('modal-to-book--active');
        let str = '';
        if (flats[id].room == 1) {
          str = 'Забронировать 1-комнатную квартиру';
        }
        if (flats[id].room == 2) {
          str = 'Забронировать 2-комнатную квартиру';
        }
        if (flats[id].room == 3) {
          str = 'Забронировать 3-комнатную квартиру';
        }
        if (flats[id].room == 4) {
          str = 'Забронировать студию';
        }
        $('.btn-submit-to-book').attr('data-id', id);
        $('.modal-to-book .modal__title').text(str)
        
      });
      $('.wrap-heart').off('click');
      $('.wrap-heart').on('click', function () {
        $(this).children('.heart-fill').toggleClass('hidden');
        
      });


    }

    function updatePagination(total) {
      let $parent = $('.catalog-pagination__list');
      $parent.html('');
      
        
      let str = '';
      for (let i = 0; i < total; i++) {
        if (i == currentPage) {
          str += '<div class="catalog-pagination__item catalog-pagination__item--active">' + (i + 1) + '</div>';
        } else {
          str += '<div class="catalog-pagination__item">' + (i + 1) + '</div>';
        }
        }
        
      if (totalPage > 1 && currentPage == 1) {
        $('.btn-show-more').removeClass('hidden');
        $parent.addClass('hidden');
      } else {
        $parent.removeClass('hidden');
        $('.btn-show-more').addClass('hidden');
      }
      if (total == 1) {
        $parent.addClass('hidden');
      }
      $parent.append(str);

    }

    function catalogSliderInit() {
      $('.catalog__slider').slick({
        arrows: false,
        // arrows: true,
        // prevArrow: '<button id="prev" type="button" class="catalog__slider-prevBtn"></button>',
        // nextArrow: '<button id="next" type="button" class="catalog__slider-nextBtn"></button>',
        slidesToShow: 1,
        // mobileFirst: true,
      });
      $('.catalog__slider-item img').off('click');
      $('.catalog__slider-item img').on('click', function () {
        $(this).closest('.catalog__slider').slick('slickNext');
      });
      
    }

    function catalogSliderDestroy() {
      if ($('.catalog__slider').length) {
        $('.catalog__slider').slick('unslick');
      }
     
    }

    function getCountFlatsByRoom(arrObj, num) { //Считает кол-во квартир определенного типа (1ком., 2ком., студия и т.д.)
      let sum = 0;
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          sum++;
        }
      }
      return sum;
    }

    function getFlatsByRoom(arrObj, num) { //Возвращает квартиры определенного типа
      let tempArray = [];
      for (let i = 0; i < arrObj.length; i++) {
        const room = arrObj[i].room;
        if (room == num) {
          tempArray.push(arrObj[i]);
        }
      }
      return tempArray;
    }

    function clearListTable() { //Очищает список таблиц
      catalogSliderDestroy();
      $tableList.empty();
    };

    function updateImage(pathImg, id) {
      $('.catalog-img-flat img').attr('src', pathImg);
      $('.btnToBook').attr('data-id', id);
    }
    $('.modal-to-book__form-input.phone').off();
    $('.modal-to-book__form-input.phone').on('keypress', function (e) {
      validate(e);//функция из sctipt.js
    });

    $('body').on('click', function (e) { //Закрытие модального окна по клику на фон
      if ($('.catalog__modal').has(e.target).length === 0 && $('.flats__link').has(e.target).length === 0 && !$(e.target).closest('.catalog__modal').length && !$(e.target).closest('.modal-to-book').length) { //Если не содержит этот target
        if (!$('.catalog__modal').hasClass('modal--closed') && !$(e.target).hasClass('flats__link')) {
          $('.catalog__modal').addClass('modal--closed');
          $('.catalog__modal').attr('data-flats', '0');
          clearListTable();
        }
      }
      // if (!$(e.target).closest('.catalog__modal')&& !$(e.target).hasClass('.flats__link')) {
      //   $('.catalog__modal').addClass('modal--closed');
      //     $('.catalog__modal').attr('data-flats', '0');
      //     clearListTable();
      // }
    });
  });
})();
;(function () {
  $(document).ready(function () {


    let arrDoc = [];
    arrDoc[0] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[1] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[2] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[3] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[4] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[5] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };
    arrDoc[6] = { 'name': 'Договор ДДУ', 'weight': '125 кб', 'document': 'files/lab_2.21 (2).pdf' };

    let countDocVisible = 3 //Количество видимых документов
    let DocLeft = arrDoc.length; //Сколько осталось скрытых объектов
    if (DocLeft < 0) {
      DocLeft = 0;
    }
    $('.documents__list').html('');
    loadDocuments(arrDoc);
   
    function loadDocuments(arrDoc) {
      if ($(".fancybox").length) {
        $(document).unbind('click.fb-start');
      }
      let j = 0; //Счетчик объектов, выводимых на страницу
      let strHTML = '';
      for (let i = 0; i < DocLeft && j < countDocVisible && DocLeft!=0; i++) {
        j++;
        strHTML += '<li class="documents__item fancybox" data-fancybox-type="iframe" href="' + arrDoc[i].document + '"><p class="documents__item-name">' + arrDoc[i].name + '</p><span class="documents__item-size">' + arrDoc[i].weight + '</span></li>';
        
      }
     
      DocLeft -= j; //Определяем сколько еще осталось объектов для вывода
  
      if (DocLeft < 0) {
        DocLeft = 0;
      }
      if (DocLeft <= 0 || j == 0) {
        $('.documents__show-btn').addClass('documents__show-btn--hidden');
      } else {
        $('.documents__show-btn').text('Показать еще ' + DocLeft + ' ' + num2str(DocLeft, ['документ', 'документа', 'документов']));
      }
      $('.documents__list').append(strHTML);

      $(".fancybox").fancybox({
      });
    }

    $('.documents__show-btn').click(function () {
      loadDocuments(arrDoc);
    });
  });

  

  function num2str(n, text_forms) { //Склонение слов в зависимости от числа
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
})();
;
(function () {
  $(document).ready(function () {
    //Модальное окно modal-image
    $('.modal-image__item').on('click', modalPhoto);

    // $('.modal-image__close').on('click', function () {
    //   $('.modal-image').removeClass('modal-image--active');
    // });

    

    //--------------------------expectation---------------------------
    let arrayPhotos = []; //Массив фотографий

    arrayPhotos[0] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[1] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[2] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[3] = { corpus: 2, date: '28.05.2019', photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};

    let $parent = $('.expectation__photo-box');
    
    updateData(arrayPhotos, $parent);
    $('.expectation__image').off('click');
    $('.expectation__image').on('click', function () {
      let begin = $(this).attr('data-index');
      updateGalery(arrayPhotos, $('.galery__slider'), begin);
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });
    function updateData(listObjects, parent, begin) {
      let strHTML = '';
      if ($(parent).hasClass('galery__slider')) {
        $('.galery__slider').html('');
        for (let i = 0; i < listObjects.length; i++) {
          strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
        }
        $('.galery__slider').html(strHTML);

      } else {
        $('.expectation__photo-box').html('');
        for (let i = 0; i < listObjects.length ; i++) {
          strHTML += '<div class="expectation__item modal-image__item"><picture><source type="image/webp" srcset="img/devSlider-img1.webp"><img src="' + listObjects[i].photo + '" class="expectation__image" data-big-src="' + listObjects[i].photoLarge + '" data-index="' + i + ' alt="image" width="320" height="220"></picture><div class="expectation__description-box"><span class="expectation__photo-text">Корпус ' + listObjects[i].corpus + '</span><span class="expectation__photo-text expectation__photo-text--date">' + listObjects[i].date + '</span></div></div>';
        }

        $(parent).append(strHTML);
      }

      if ($(parent).hasClass('galery__slider')) {
        let $slider = $('.galery__slider');
        initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
        // setTimeout(initSlidersModalPhoto, 10, $slider);
      }
    };
    if ($(window).width() < 1360) {
      $('.expectation .expectation__image').off('click');
    } else {
      $('.expectation__image').off('click');
      $('.expectation__image').on('click', modalPhoto);
    }
    
    $(window).on('resize', function () {
      if ($(window).width() < 1360) {
        $('.expectation .expectation__image').off('click');
        $('.expectation .expectation__image').removeClass('modal-image__item');
      } else {
        if (!$('.expectation__image').hasClass('modal-image__item')) {
          $('.expectation__image').addClass('modal-image__item');
          $('.expectation__image').off('click');
          $('.expectation__image').on('click', modalPhoto);
        }
      }
    });

    
    function modalPhoto() {
      let begin = $(this).attr('data-index');
      updateData(arrayPhotos, $('.galery__slider'), begin);
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    }
    
    $('.expectation__show-btn').on('click', function () {
      updateData(arrayPhotos, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });

  });

})();
// 'use strict';


    ;
(function () {
  $(document).ready(function () {
    let arrFeedbacks = []; //Массив отзывов
    let countVisible = 3;
    let lengthChars = 180;//Максимальная длина символов сообщения, которая будет видна
    let nameComplex = 'ЖК "Новое Мурино"';
    arrFeedbacks[0] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacks[1] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[2] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[3] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[4] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[5] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[6] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[7] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacks[8] = {avatar: 'img/avatar.svg',name: 'Самойлова Виктория5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacks[9] = { avatar: 'img/avatar.svg', name: 'Самойлова Виктория5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    let arrFeedbacksDeveloper = []; //Массив отзывво
    // feedback__toogle-link feedback__toogle-link--developer
    arrFeedbacksDeveloper[0] = {avatar: 'img/avatar.svg',name: 'Застройщик',feedback: 'хороший комплекс', date: 'Вчера в 12:34'}
    arrFeedbacksDeveloper[1] = {avatar: 'img/avatar.svg',name: 'Застройщик1',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[2] = {avatar: 'img/avatar.svg',name: 'Застройщик2',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[3] = {avatar: 'img/avatar.svg',name: 'Застройщик3',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[4] = {avatar: 'img/avatar.svg',name: 'Застройщик4',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[5] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[6] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[7] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'хороший комплекс', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[8] = {avatar: 'img/avatar.svg',name: 'Застройщик5',feedback: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui perferendis, quibusdam accusantium dolorum in quis quaerat nam dolores excepturi illo delectus ipsam hic aperiam, eligendi sunt! Recusandae, explicabo? Aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta quia doloribus delectus praesentium. Delectus, repellat maxime architecto, aut quaerat ipsa quisquam illum possimus, iusto ducimus numquam adipisci quod. Tempore, voluptatibus magni. Quos quae, maxime ipsum facilis excepturi dicta necessitatibus corrupti a architecto possimus deleniti esse tempora reprehenderit ea nulla rerum qui obcaecati rem soluta? Nostrum ullam voluptate rerum voluptas?', date: '27.10.2019 в 18:00'}
    arrFeedbacksDeveloper[9] = { avatar: 'img/avatar.svg', name: 'Застройщик5', feedback: 'хороший комплекс', date: '27.10.2019 в 18:00' }

    $('.feedback__title').text("Отзывы о " + nameComplex);
    updateFeedback(arrFeedbacks);

    function updateFeedback(listObjects) {
      $('.feedback__inner').html('');
      let strHTML = '';
      let j = 0;
      for (let i = 0; i < listObjects.length && i < countVisible; i++) {
        j++;
        strHTML += '<div class="feedback__box"><div class="feedback__avatar-box"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__avatar" width="16" height="20"></div><div class="feedback-content"><div class="feedback__author-container"><b class="feedback__author">' + listObjects[i].name + '</b><small class="feedback__time">' + listObjects[i].date + '</small></div>';
        let classBtnUnfurl = 'hidden';
        
        if (listObjects[i].feedback.length > lengthChars) {
          classBtnUnfurl = '';
        }
        strHTML +='<p class="feedback__text">' + truncate(listObjects[i].feedback) + '</p><p class=" feedback__text--full hidden">' + listObjects[i].feedback + '</p><div class="feedback__buttons"><button type="button" class="feedback__answer-btn">Ответить</button><button type="button" class="feedback__btn feedback__btn--unfurl '+classBtnUnfurl+'"><span class="text">Читать весь отзыв</span><img src="img/arrow__down-input-grey.svg" alt="image"></button><div class="feedback__answer-box hidden"><div class="feedback__answer"><div class="feedback__author-avatarBox"><img src="'+listObjects[i].avatar+'" alt="аватарка" class="feedback__author-avatar" width="16" height="20"></div><div class="feedback__answer-wrapper"><div class="desc-wrap"><p class="feedback__answer-description">ответ на отзыв @<span class="feedback__answer-author">' + listObjects[i].name + '</span></p><div class="btn-collapse"><img src="img/arrow-down.png" alt="image"></div></div><textarea class="feedback__answer-textarea" type="textarea" rows="8" cols="45" placeholder="Текст сообщения..." required></textarea><div class="feedback__answer-checkbox"><label >Согласен с правилами публикации на сайте <input  name="cb" type="checkbox" required><span class="check"></span></label></div><input class="feedback__answer-sellBtn pink__btn" type="submit" value="Отправить комментарий"></div></div></div></div></div></div>';
      }
      if (j == 0) {
        // $('.feedback__show-btn').addClass('hidden');
      }
      $('.feedback__inner').append(strHTML);

      $('.feedback__show-btn').off('click');
      $('.feedback__show-btn').on('click', function () {
        
        if ($(this).hasClass('feedback__show-btn--active')) {
          $(this).children('.text').text('Показать все отзывы');
          $(this).removeClass('feedback__show-btn--active');
          countVisible = 3;
          $('.feedback__wrap-inner').scrollTop(0);
          $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');
          
        } else {
          $(this).children('.text').text('Скрыть отзывы');
          $(this).addClass('feedback__show-btn--active');
          countVisible = listObjects.length;
          $('.feedback__wrap-inner').addClass('feedback__wrap-inner--active');
        }
        
        updateFeedback(listObjects);
        // $(this).addClass('hidden');
      });
      $('.feedback__answer-btn').off('click');
      $('.feedback__answer-btn').on('click', function () {
        if (!$(this).siblings('.feedback__answer-box').hasClass('hidden')) {
          $(this).siblings('.feedback__answer-box').addClass('hidden');
        } else {
          $(this).siblings('.feedback__answer-box').removeClass('hidden');
        }
        $(this).closest('.feedback__box').siblings('.feedback__box').find('.feedback__answer-box').addClass('hidden');
        // $(this).closest('.feedback__box').find('.feedback__answer-box').toggleClass('hidden');
        
        // console.log(parseInt($(this).position().top) + '- ' + parseInt($(this).parent().position().top) + '=' + parseInt($(this).position().top) - parseInt($(this).parent().position().top));
        let x1 = parseInt($(this).position().top);
        let x2 = parseInt($('.feedback__inner').position().top);
        // let x3 = parseInt($('.feedback__wrap-inner').position().top);
        let currentPosition = x1 - x2;
        // console.log('x1 ' + x1);
        // console.log('x2 ' + x2);
        // console.log('x3 ' + x3);
        
        
        
        if ($(window).width() > 768) {
          currentPosition = x1 - x2 -100;
          $('.feedback__wrap-inner').scrollTop(currentPosition);
        } 

      });
      $('.desc-wrap .btn-collapse').off('click');
      $('.desc-wrap .btn-collapse').on('click', function () {
        $(this).closest('.feedback__box').find('.feedback__answer-box').addClass('hidden');
      });
      $('.feedback__btn--unfurl').off('click');
      $('.feedback__btn--unfurl').on('click', function () {
        // $(this).addClass('hidden');
        if ($(this).children('.text').text() == 'Скрыть отзыв') {
          $(this).children('.text').text('Читать весь отзыв');
          $(this).removeClass('feedback__btn-active');
          $($parent).find('.feedback__text--full').addClass('hidden');
          $($parent).find('.feedback__text').removeClass('hidden');
        } else {
          $(this).children('.text').text('Скрыть отзыв');
          $(this).addClass('feedback__btn-active');
          $parent = $(this).closest('.feedback-content');
          $($parent).find('.feedback__text--full').removeClass('hidden');
          $($parent).find('.feedback__text').addClass('hidden');
        }
        
        

      });

   
    }
    function truncate(input) {
      if (input.length > 5)
         return input.substring(0,lengthChars) + '...';
      else
         return input;
    };
    $('.feedback__toogle-link').on('click', function () {
      $(this).addClass('feedback__toogle-link--active').siblings().removeClass('feedback__toogle-link--active');
      countVisible = 3;
      $('.feedback__show-btn').children('.text').text('Показать все отзывы');
      $('.feedback__show-btn').removeClass('feedback__show-btn--active');
      
      $('.feedback__wrap-inner').scrollTop(0);
      $('.feedback__wrap-inner').removeClass('feedback__wrap-inner--active');
      
      if ($(this).hasClass('feedback__toogle-link--estate')) { 
        updateFeedback(arrFeedbacks);
      } else if ($(this).hasClass('feedback__toogle-link--developer')) {
        
        updateFeedback(arrFeedbacksDeveloper);
      }
      
    });
    $('.feedback__add-btn').on('click', function () {
      $('.modal-feedback').addClass('modal-feedback--active');
      
    });
    $('.modal-feedback .modal__close-btn').on('click', function () {
      $('.modal-feedback').removeClass('modal-feedback--active');
      
    });
  });
})();






/*(function() {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;
    var commentsCount = 3;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < commentsCount; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    // сворачивание комментариев

    var showFullComment = function () {

      $('.feedback__box').each(function() {
        var size = 250,
        feedbackContent = $(this).find('.feedback__text'),
        feedbackText = feedbackContent.html(),
        feedbackTextLength = feedbackText.length;

        if (feedbackText.length > size) {
          feedbackContent.html(feedbackText.slice(0, size) + '...');


          $(this).find('.feedback__btn--unfurl').removeClass('hidden');

          $(this).find('.feedback__btn').on('click', function () {
            if($(this).hasClass('feedback__btn--unfurl')) {
              feedbackContent.html(feedbackText.slice(0, feedbackTextLength));

              $(this).removeClass('feedback__btn--unfurl');
              $(this).addClass('feedback__btn--furl');
              $(this).text('свернуть');
            } else {
              feedbackContent.html(feedbackText.slice(0, size));
              $(this).removeClass('feedback__btn--furl');
              $(this).addClass('feedback__btn--unfurl');
              $(this).text('читать весь отзыв');
            }
          })
        }
      });
      addAnswer();
    }

    // выбор списка комментариев

    var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
    var activeLink = document.querySelector('.feedback__toogle-link--active');

    for (var i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        activeLink.classList.remove('feedback__toogle-link--active');
        this.classList.add('feedback__toogle-link--active');
        activeLink = this;


        if (activeLink.classList.contains('feedback__toogle-link--estate')) {
          deleteComments();  // удаляю все отзывы
          currentCommentsArray = estateFeedbacks; // меняю массив с отзывами
          createComment(); // запускаю ф-ю с показом отзывов
          showFullComment();
        } else {
          deleteComments();
          currentCommentsArray = developerFeedbacks;
          createComment();
          showFullComment();
        }
      });
    }

    var deleteComments = function () { // ф-я удаления нод
     var currentComments = document.querySelectorAll('.feedback__box');
     for (var i = 0; i < currentComments.length; i++) {
          commentBox.removeChild(currentComments[i]);
        }
      };

    // показ всех комментариев

    $('.feedback__show-btn').on('click', function () {
      $(this).hide();
      $('.feedback__modalBtn').removeClass('hidden');
      $('.feedback').addClass('feedback--modal');
      $('feedback__modal').addClass('feedback--modal-wrapper');
      $('.feedback__title').hide();
      commentsCount = currentCommentsArray.length;
      createComment();
      showFullComment();
    });

    $('.feedback__modalBtn').on('click', function () {
      $(this).addClass('hidden');
      $('.feedback__show-btn').show();
      $('.feedback').removeClass('feedback--modal');
      $('.feedback__modal').removeClass('feedback--modal-wrapper');
      $('.feedback__title').show();
      commentsCount = 3;
      deleteComments();
      createComment();
      showFullComment();
    });

    // ответ на отзыв

    var addAnswer = function () {
      $('.feedback__answer-btn').on('click', function () {
        $(this).parent().children('.feedback__answer-box').toggleClass('hidden');
      })
    };

    var addComment = function () {
      $('.feedback__add-btn').on('click', function () {
        $('.feedback__modal').removeClass('modal--closed');
        $('.feedback__modal-closeBtn').on('click',function () {
          $('.feedback__modal').addClass('modal--closed');
        });
      });
    };

    addComment();
    createComment();
    showFullComment();
}());*/

/*(function () {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < currentCommentsArray.length; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    createComment();

}());*/


/*(function() {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;
    //var commentsCount = 3;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < currentCommentsArray.length; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    // сворачивание комментариев

    var showFullComment = function () {

      $('.feedback__box').each(function() {
        var size = 250,
        feedbackContent = $(this).find('.feedback__text'),
        feedbackText = feedbackContent.html(),
        feedbackTextLength = feedbackText.length;
        if (feedbackText.length > size) {
          feedbackContent.html(feedbackText.slice(0, size) + '...');


          $(this).find('.feedback__btn--unfurl').removeClass('hidden');

          $(this).find('.feedback__btn').on('click', function () {
            if($(this).hasClass('feedback__btn--unfurl')) {
              feedbackContent.html(feedbackText.slice(0, feedbackTextLength));

              $(this).removeClass('feedback__btn--unfurl');
              $(this).addClass('feedback__btn--furl');
              $(this).text('свернуть');
            } else {
              feedbackContent.html(feedbackText.slice(0, size));
              $(this).removeClass('feedback__btn--furl');
              $(this).addClass('feedback__btn--unfurl');
              $(this).text('читать весь отзыв');
            }
          })
        }
      });
      addAnswer();
    }

    // выбор списка комментариев

    var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
    var activeLink = document.querySelector('.feedback__toogle-link--active');

    for (var i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        activeLink.classList.remove('feedback__toogle-link--active');
        this.classList.add('feedback__toogle-link--active');
        activeLink = this;


        if (activeLink.classList.contains('feedback__toogle-link--estate')) {
          deleteComments();  // удаляю все отзывы
          currentCommentsArray = estateFeedbacks; // меняю массив с отзывами
          createComment(); // запускаю ф-ю с показом отзывов
          showFullComment();
        } else {
          deleteComments();
          currentCommentsArray = developerFeedbacks;
          createComment();
          showFullComment();
        }
      });
    }

    var deleteComments = function () { // ф-я удаления нод
     var currentComments = document.querySelectorAll('.feedback__box');
     for (var i = 0; i < currentComments.length; i++) {
          commentBox.removeChild(currentComments[i]);
        }
      };

    // показ всех комментариев

    $('.feedback__show-btn').on('click', function () {
      $(this).hide();
      $('.feedback__modalBtn').removeClass('hidden');
      $('.feedback').addClass('feedback--modal');
      $('feedback__modal').addClass('feedback--modal-wrapper');
      $('.feedback__title').hide();
      //commentsCount = currentCommentsArray.length;
      //createComment();
      showFullComment();
    });

    $('.feedback__modalBtn').on('click', function () {
      $(this).addClass('hidden');
      $('.feedback__show-btn').show();
      $('.feedback').removeClass('feedback--modal');
      $('.feedback__modal').removeClass('feedback--modal-wrapper');
      $('.feedback__title').show();
      //commentsCount = 3;
      //deleteComments();
      //createComment();
      hideComments();
      showFullComment();
    });

    // ответ на отзыв

    var addAnswer = function () {
      $('.feedback__answer-btn').on('click', function () {
        $(this).parent().children('.feedback__answer-box').toggleClass('hidden');
      })
    };

    var addComment = function () {
      $('.feedback__add-btn').on('click', function () {
        $('.feedback__modal').removeClass('modal--closed');
        $('.feedback__modal-closeBtn').on('click',function () {
          $('.feedback__modal').addClass('modal--closed');
        });
      });
    };



    addComment();
    createComment();
    showFullComment();

    console.log(currentCommentsArray.length);

    var comment = document.querySelectorAll('.feedback__box');
    var visibleComments = 3;

    var hideComments = function () {
      for (var i = visibleComments; i < currentCommentsArray.length; i++) {
        comment[i].classList.add('hidden');
      }
    };

    var showComments = function () {

    }

    hideComments();
    showComments();
}());*/

// (function() {

//   var estateFeedbacks = [ // temp array
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'инфраструктура никакая'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'нет парковочных мест'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'на троечку'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'Все круто, буду тут жить'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'на троечку'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'инфраструктура никакая'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'нет парковочных мест'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'Все круто, буду тут жить'
//     }
//  ];

//   var developerFeedbacks = [ // temp array
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'хороший застройщик'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'качественно и быстро'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Самойлова Виктория',
//       feedback: 'хороший комплекс'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Петрова Ирина',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Просто кто-то',
//       feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Юрий Михайлович',
//       feedback: 'хороший застройщик'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Семин Игорь',
//       feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
//     },
//     {
//       avatar: 'img/feedback__avatar.png',
//       name: 'Егорова Евгения',
//       feedback: 'качественно и быстро'
//     }
//   ];

//   var fillCommentsNode = function (element, commentData) {
//     element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
//     element.querySelector('.feedback__author').textContent = commentData.name;
//     element.querySelector('.feedback__text').textContent = commentData.feedback;
//   };

//     var currentCommentsArray = estateFeedbacks;

//     var fragment = document.createDocumentFragment(); // fragment
//     var template = document.querySelector('#feedback-template'); // template
//     var commentBox = document.querySelector('.feedback__inner'); // comment box

//     var createComment = function () {

//       for(var i = 0; i < currentCommentsArray.length; i++) {
//         var currentComment = template.content.cloneNode(true); // clone template
//         var commentData = currentCommentsArray[i]; // current comments

//         fillCommentsNode(currentComment, commentData); // run fill func

//         fragment.appendChild(currentComment);
//       };
//         commentBox.appendChild(fragment);
//     };

//     createComment();
//   }());

$('body').on('click', function (e) {

  // if (!$(e.target).parents('.galery__item-img').length && !$(e.target).hasClass('progress__btn') && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')) {
  if (!$(e.target).parents('.galery__item-img').length && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')&&!$(e.target).closest('.expectation__photo-box').length) {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
    galeryDestroy();
  }
});

function galeryDestroy() {
  if ($('.galery__slider').hasClass('slick-initialized')) {
    setTimeout(unslick, 250);

    function unslick() {
      $('.galery__slider').slick('unslick');
    }
  }
}

function initSlidersModalPhoto(slider, begin) {
  // $(slider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { //Счетчик на слайдах
  //   $status = $(slick.$slider[0]).siblings('.catalog-complex__slider-counter');
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $status.text(i + ' / ' + slick.slideCount);
  // });
  if (slider.hasClass('slick-initialized')) {
    $(slider).slick('unslick');
  }
  if (begin == undefined) {
    begin = 0;
  }

  $(slider).slick({
    arrows: false,
    initialSlide: parseInt(begin)
  });
  $('.galery__item-img img').off('click');
  $('.galery__item-img img').on('click', function () {
    $(slider).slick('slickNext');
  });

  $('.galery__item-img .close').off('click');
  $('.galery__item-img .close').on('click', function () {
    galeryDestroy();
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });
}
// $(document).ready(function (currentData) {

// var chartData = [];
// chartData[0] = [63, 83, 36, 90, 43, 125, 67]; //студии
// chartData[1] = [80, 111, 44, 90, 45, 125, 110]; // 1к
// chartData[2] = [45, 58, 87, 23, 95, 41, 54]; // 2к
// chartData[3] = [80, 88, 75, 148, 95, 125, 46]; // 3к
// chartData[4] = [6, 32, 5, 90, 95, 125, 110]; // 4к
// chartData[5] = [11, 83, 75, 90, 95, 125, 30]; //5+к

// var currentData = [80, 111, 44, 90, 45, 125, 110];

// var btn = document.querySelectorAll('.chart__btn');

// for(var i = 0; i < btn.length; i++){
//   $(btn[i]).attr('data-item', i);
// }

// $(btn).on('click', function () {
//   var number = $(this).attr('data-item');
//   currentData = chartData[number];

//   $('.chart__btn--active').removeClass('chart__btn--active');
//   $(this).addClass('chart__btn--active');

//   fillChart(currentData);
// });


// var fillChart = function (currentData) {

//   var ctx = document.getElementById('myChart').getContext('2d');
//   var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19',
//     'май’19'
//   ]; //  массив для изменяемыхданных

//   // console.log(currentData);

//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//       labels: dataLabels,
//       datasets: [{
//         label: '',
//         backgroundColor: 'rgba(233,70,70, 0.1)',
//         borderColor: 'rgb(233,70,70)',
//         borderWidth: 1,
//         pointHoverBackgroundColor: 'rgb(233,70,70)',
//         spanGaps: true,
//         data: currentData
//       }]
//     },

//     // Configuration options go here
//     options: {
//       legend: {
//         display: false
//       },
//       tooltips: {
//         backgroundColor: '#7be37b',
//         bodyFontSize: 16,
//         bodyFontColor: '#fefcfc',
//       },
//       scales: {
//         xAxes: [{
//           gridLines: {
//             display: false
//           }
//         }],
//         yAxes: [{
//           scaleLabel: {
//             display: true
//           },
//           ticks: {
//             min: 0,
//             max: 150,
//             stepSize: 25
//           }
//         }]
//       }
//     }
//   });
// }

// fillChart(currentData);
// });


;
(function () {
  $(document).ready(function () {
    let chartData = [];
    chartData['studio'] = [63, 83, 36, 90, 43, 125, 67]; //студии
    chartData['1'] = [80, 111, 44, 90, 45, 125, 110]; // 1к
    chartData['2'] = [45, 58, 87, 23, 95, 41, 54]; // 2к
    chartData['3'] = [80, 88, 75, 148, 95, 125, 46]; // 3к
    chartData['4'] = [6, 32, 5, 90, 95, 125, 110]; // 4к
    chartData['5'] = [11, 83, 75, 90, 95, 125, 30]; //5+к

    var ctx = document.getElementById('myChart').getContext('2d');
    var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19', 'май’19'];
    var data = [];
    for (let i = 0; i < chartData['2'].length; i++) {
      const element = chartData['2'][i];
      data.push(element);
    }

    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: '',
          backgroundColor: 'rgba(233,70,70, 0.1)',
          borderColor: 'rgb(233,70,70)',
          borderWidth: 2,
          pointHoverBackgroundColor: 'rgb(233,70,70)',
          pointBackgroundColor: '#fff',
          spanGaps: true,
          data: data,
          pointRadius: 7,
          pointHoverRadius: 7,
          pointHitRadius: 7,
          
        }]
      },

      options: {
        bezierCurve : false,
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        tooltips: {
          // backgroundColor: '#7be37b',
          // bodyFontSize: 16,
          // bodyFontColor: '#fefcfc',
          // yAlign: 'bottom',
          // xPadding: 12,
          // // yPadding: 10,
          // intersect: false,
          // mode: 'point',
          // displayColors: false,
          // callbacks: {
          //   label: function(tooltipItem) {
          //       return Number(tooltipItem.yLabel);
          //   },
          //   title: function (tooltipItem) {
          //     return false;
          //   }
          // },
          enabled: false,
          custom: function (tooltipModel) {
            var tooltipEl = document.getElementById('chartjs-tooltip');
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<div class="body"><span class="text"></span><span class="figure"></span></div>';
              document.body.appendChild(tooltipEl);
            }

            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {

              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            if (tooltipModel.body) {
              $(tooltipEl).children().children('.text').text(tooltipModel.body[0].lines[0]);
            }

            var position = this._chart.canvas.getBoundingClientRect();

            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';

            tooltipEl.style.fontFamily = 'Open Sans';

            tooltipEl.style.fontWeight = '700';
            tooltipEl.style.color = '#fff';
            tooltipEl.style.display = 'flex';
            tooltipEl.style.justifyContent = 'center';

            tooltipEl.style.borderRadius = '4px';
            tooltipEl.style.textAlign = 'center';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = '#7be37b';
            tooltipEl.style.zIndex = '100';

            if ($(window).width() <= 768) {
              tooltipEl.style.height = '22px';
              tooltipEl.style.width = '36px';
              tooltipEl.style.fontSize = 11 + 'px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 18 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 40 + 'px';
            } else {
              tooltipEl.style.fontSize = 16 + 'px';
              tooltipEl.style.height = '35px';
              tooltipEl.style.width = '56px';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 28 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 60 + 'px';
            }

            tooltipEl.classList.add('tooltipChart');
          }
        },
        scales: {
          // xAxes: [{
          //   gridLines: {
          //     display: false,
          //   },
          //   ticks: {
          //     fontFamily: "'Open Sans', sans-serif",
          //     fontSize: 14,
          //     fontColor: "#545454",
          //     color: 'blue'
          //   }
          // }],
          // yAxes: [{
          //   color: '#8d7c7c',
          //   gridLines: {
          //     display: true,
          //     color: "#efdfdf",
          //     lineWidth: 1,
          //     drawTicks: true,
          //     tickMarkLength: 2,
          //     drawTicks: true,
          //   },
          //   scaleLabel: {
          //         display: true,
          //       },
          //   ticks: {
          //     fontFamily: "'Open Sans', sans-serif",
          //     fontSize: 14,
          //     min: 0,
          //     max: 150,
          //     stepSize: 25,
          //   }
          // }]
          xAxes: [{
            
            gridLines: {
              display: true,
						  zeroLineWidth: 1,
              zeroLineColor: "trasparent",
              drawOnChartArea: false,
              lineWidth: 0
            },
            ticks: {
              fontSize: 14,
            }
          }],
          yAxes: [{
            color: '#8d7c7c',
            gridLines: {
              // // drawOnChartArea: false,
              // drawTicks: true,
              lineWidth: 2,
              zeroLineWidth: 1,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              padding: 15,
              min: 0,
              max: 150,
              stepSize: 25,
              fontSize: 14
            }
          }]
        }
      }
    });
    let desctopOptions = [];
    desctopOptions['borderWidth'] = 2;
    desctopOptions['pointRadius'] = 7;
    desctopOptions['pointHoverRadius'] = 7;
    desctopOptions['pointHitRadius'] = 7;
    desctopOptions['fontSizeAxes'] = 14;
    desctopOptions['paddingTicks'] = 15;
    desctopOptions['gridLinesLineWidthYAxes'] = 2;
    let options = [];
    options['borderWidth'] = 1;
    options['pointRadius'] = 3;
    options['pointHoverRadius'] = 4;
    options['pointHitRadius'] = 3;
    options['fontSizeAxes'] = 10;
    options['paddingTicks'] = 10;
    options['gridLinesLineWidthYAxes'] = 1;
    if ($(window).width() <= 768) {
      updateSize(chart, options);
    }
    $(window).on('resize', function () {
      if ($(window).width() <= 768) {
        updateSize(chart, options);
      } else {
        updateSize(chart, desctopOptions);

      }
    });


    $('.chart__btn').on('click', function () {
      $('.chart__btn--active').removeClass('chart__btn--active');
      $(this).addClass('chart__btn--active');
      let flat = $(this).attr('data-item');
      let Newdata = chartData[flat];
      updateData(chart, Newdata);
    });

    function updateSize(chart, options) {
      console.log(chart.options.scales.yAxes[0].gridLines);

      chart.data.datasets[0].borderWidth = options['borderWidth'];
      chart.data.datasets[0].pointRadius = options['pointRadius'];
      chart.data.datasets[0].pointHoverRadius = options['pointHoverRadius'];
      chart.data.datasets[0].pointHitRadius = options['pointHitRadius'];
      chart.options.scales.xAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.xAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.major.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.minor.fontSize = options['fontSizeAxes'];
      chart.options.scales.yAxes[0].ticks.padding = options['paddingTicks'];
      chart.options.scales.yAxes[0].gridLines.lineWidth = options['gridLinesLineWidthYAxes'];
      chart.update();
    }

    function updateData(chart, Newdata) {
      let length = chart.data.datasets[0].data.length;
      for (let i = 0; i < length; i++) {
        chart.data.datasets[0].data.pop();
      }
      for (let i = 0; i < Newdata.length; i++) {
        chart.data.datasets[0].data.push(Newdata[i]);
      }
      chart.update();
    }
    Chart.pluginService.register({
      afterDraw: function (chart, easing) {
        if (chart.config.options && chart.config.options.scales) {
          if (chart.config.options.scales.xAxes)
            chart.config.options.scales.xAxes.forEach(function (xAxisConfig) {
              if (!xAxisConfig.color)
                return;
  
              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var xAxis = chart.scales[xAxisConfig.id];
  
              // just draw the scale again with different colors
              var color = xAxisConfig.gridLines.color;
              xAxisConfig.gridLines.color = xAxisConfig.color;
              xAxis.draw(chartArea);
              xAxisConfig.gridLines.color = color;
            });
  
          if (chart.config.options.scales.yAxes)
            chart.config.options.scales.yAxes.forEach(function (yAxisConfig) {
              if (!yAxisConfig.color)
                return;
  
              var ctx = chart.chart.ctx;
              var chartArea = chart.chartArea;
              var yAxis = chart.scales[yAxisConfig.id];
  
              // here, since we also have the grid lines, set a clip area for the left of the y axis
              ctx.save();
              ctx.rect(0, 0, chartArea.left + yAxisConfig.gridLines.lineWidth - 1, chartArea.bottom + yAxisConfig.gridLines.lineWidth - 1);
              ctx.clip();
                
              var color = yAxisConfig.gridLines.color;
              yAxisConfig.gridLines.color = yAxisConfig.color;
              yAxis.draw(chartArea);
              yAxisConfig.gridLines.color = color;
  
              ctx.restore();
            });
  
          // we need to draw the tooltip so that it comes over the (redrawn) elements
          chart.tooltip.transition(easing).draw();
        }
      }
    });
  });
})();
;
(function () {
  $(document).ready(function () {
    let arrayPhotos = []; //Массив фотографий
    let countVisible = 4;

    arrayPhotos[0] = { year: 2020, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[1] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[2] = { year: 2021, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[3] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[4] = { year: 2019, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[5] = { year: 2020, month: 'june', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[6] = { year: 2021, month: 'february', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[7] = { year: 2019, month: 'may', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[8] = { year: 2020, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[9] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[10] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[11] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[12] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[13] = { year: 2021, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[14] = { year: 2020, month: 'october', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[15] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[16] = { year: 2019, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[17] = { year: 2021, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[18] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[19] = { year: 2021, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[20] = { year: 2021, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[21] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[22] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[23] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[24] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[25] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[26] = { year: 2019, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[27] = { year: 2021, month: 'august', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[28] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[29] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[30] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg', photoLarge: 'img/analog_1.jpg'};

    let filter = { //Фильтр фотографий
      year: '',
      month: ''
    };

    $year = $('.progress__form-select--year').val();
    $month = $('.progress__form-select--month').val();
    filter.year = $year;
    filter.month = $month;
    let filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список

    let $parent = $('.progress__gallery-list');
    updateGalery(filterList, $parent);


    $('.progress__form-select--year, .progress__form-select--month').on('change', function () {
      $year = $('.progress__form-select--year').val();
      $month = $('.progress__form-select--month').val();

      filter.year = $year;
      filter.month = $month;
      filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список
      updateGalery(filterList, $parent);
    });

    function updateGalery(listObjects, parent, begin) {
      $('.progress__btn.show__btn').removeClass('hidden');
      $('.progress__wrapper .nothing').addClass('hidden');
      let strHTML = '';
      if ($(parent).hasClass('galery__slider')) {
        $('.galery__slider').html('');
        for (let i = 0; i < listObjects.length; i++) {
          strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
        }
        $('.galery__slider').html(strHTML);

      } else {
        $('.progress__gallery-list').html('');
        let j = 0;
        for (let i = 0; i < listObjects.length && i < countVisible; i++) {
          j++;
          strHTML += '<li class="progress__gallery-item modal-image__item"><picture><source type="image/webp" srcset=""><img class="progress__image" src="' + listObjects[i].photo + '" data-big-src="' + listObjects[i].photoLarge + '" data-index="'+i+'"alt="фото ЖК" width="310" height="180"></picture></li>';
        }
        if (j == 0) {
          $('.progress__btn.show__btn').addClass('hidden');
          $('.progress__wrapper .nothing').removeClass('hidden');
        }
        $(parent).append(strHTML);
      }
      
      $('.progress__image').off('click');
      $('.progress__image').on('click', clickImg);
      if ($(parent).hasClass('galery__slider')) {
        let $slider = $('.galery__slider');
        initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
        // setTimeout(initSlidersModalPhoto, 10, $slider);
      }
     
      function clickImg() {
        let begin = $(this).attr('data-index');
        updateGalery(filterList, $('.galery__slider'), begin);
        $('.modal-photo-galery').addClass('modal-photo-galery--active');
      }
      // $('.modal-image__item').on('click', function () {
      //   // let src = $(this).find('img').attr('src');
      //   // let srcBig = $(this).find('img').attr('data-big-src');
      //   // $('.modal-image').addClass('modal-image--active');
      //   // if (srcBig != '') {
      //   //   $('.modal-image img').attr('src', srcBig);
      //   // } else {
      //   //   $('.modal-image img').attr('src', src);
      //   // }
      //   updateGalery(filterList, $('.galery__slider'));
      //   $('.modal-photo-galery').addClass('modal-photo-galery--active');
      // });

    }

    

    function getFilterList(arrayPhotos, filter) { //Получить отфильтрованный список
      let tempList = [];
      for (let i = 0; i < arrayPhotos.length; i++) {
        if (arrayPhotos[i].year == filter.year && arrayPhotos[i].month.toLowerCase() == filter.month.toLowerCase()) {
          tempList.push(arrayPhotos[i]);
        }
      }
      return tempList;
    }

    $('.progress__btn').click(function () {
      updateGalery(filterList, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });
    
   
    
  });
})();







// 'use strict';

// (function (){

// var progressGalleryArray = [];

// progressGalleryArray[0] = [
//   { year: 2019,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[1] = [
//   { year: 2019,
//     month: 'february',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[2] = [
//   { year: 2019,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'march',
//     photo: 'img/img'
//   },

//   { year: 2019,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'march',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[3] = [
//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[4] = [
//   { year: 2019,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   }
// ];

// progressGalleryArray[5] = [
//   { year: 2019,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'june',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   }

// ];

// progressGalleryArray[6] = [
//   { year: 2019,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[7] = [
//   { year: 2019,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[8] = [
//   { year: 2019,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[9] = [
//   { year: 2019,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[10] = [
//   { year: 2019,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[11] = [
//   { year: 2019,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2019,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2019,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[12] = [
//   { year: 2020,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[13] = [
//   { year: 2020,
//     month: 'february',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[14] = [
//   { year: 2020,
//     month: 'march',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'march',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[15] = [
//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[16] = [
//   { year: 2020,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   }
// ];

// progressGalleryArray[17] = [
//   { year: 2020,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'june',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   }

// ];

// progressGalleryArray[18] = [
//   { year: 2020,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[19] = [
//   { year: 2020,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'august',
//     photo: '/analog_1.jpg'
//   }
// ];

// progressGalleryArray[20] = [
//   { year: 2020,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[21] = [
//   { year: 2020,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[22] = [
//   { year: 2020,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[23] = [
//   { year: 2020,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2020,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2020,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[24] = [
//   { year: 2021,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'january',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[25] = [
//   { year: 2021,
//     month: 'february',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'february',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[26] = [
//   { year: 2021,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'march',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'march',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'march',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[27] = [
//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'aprel',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[28] = [
//   { year: 2021,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'may',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'may',
//     photo: 'img/progress_foto.png'
//   }
// ];

// progressGalleryArray[29] = [
//   { year: 2021,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'june',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'june',
//     photo: 'img/progress_foto.png'
//   }

// ];

// progressGalleryArray[30] = [
//   { year: 2021,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'jule',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'jule',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[31] = [
//   { year: 2021,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'august',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'august',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: august,
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: august,
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[32] = [
//   { year: 2021,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'september',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'september',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[33] = [
//   { year: 2021,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'october',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'october',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[34] = [
//   { year: 2021,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'november',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'november',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// progressGalleryArray[35] = [
//   { year: 2021,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   },

//   { year: 2021,
//     month: 'december',
//     photo: 'img/progress_foto.png'
//   },

//   { year: 2021,
//     month: 'december',
//     photo: 'img/analog_1.jpg'
//   }
// ];

// var photosToShow = [];

// var year = $('.progress__form-select--year option:selected');
// var month = $('.progress__form-select--month option:selected');

// $('.progress__form-select--year').change(function() {
//   year = $('.progress__form-select--year option:selected');
//   clearPhotosToShow();
//   setPhoto();
//   createProgressGalleryNode();
//   console.log(year)
// });

// $('.progress__form-select--month').change(function() {
//   month = $('.progress__form-select--month option:selected');
//   clearPhotosToShow();
//   setPhoto();
//   createProgressGalleryNode();
//   console.log(month)
// });

// var setPhoto = function () {
//   for (var i = 0; i < progressGalleryArray.length; i++) {
//     for(var j = 0; j < progressGalleryArray[i].length; j++) {
//       console.log(i,j);

//       if(progressGalleryArray[i][j].year == year.val() && progressGalleryArray[i][j].month == month.val()) {
//         photosToShow.push(progressGalleryArray[i][j]);
//         console.log('ok')
//       } else {
//           console.log(false);
//       }
//     }
//   }
//   console.log(photosToShow);
// };

// var clearPhotosToShow = function () {
//   photosToShow = [];
//   console.log(photosToShow);
// }

// // template

// var fragment = document.createDocumentFragment(); // fragment
// var template = document.querySelector('#progress-gallery'); // template
// var progressGalleryBox = document.querySelector('#progressGalleryList'); // box
// // var progressGalleryModal = document.querySelector('#progressGalleryModal') // analog Modal

// var photosCount = 4;

// var fillProgressGallery = function (element, photoData) {
//   element.querySelector('.progress__image').setAttribute('src', photoData.photo);
// };

// var createProgressGalleryNode = function () {

//   $('#progressGalleryList').empty();

//   for(var i = 0; i < photosCount; i++) {
//     var currentPhoto = template.content.cloneNode(true); // clone template
//     var photoData = photosToShow[i]; // current analog

//     fillProgressGallery(currentPhoto, photoData); // run fill func

//     fragment.appendChild(currentPhoto);
//   };
//     progressGalleryBox.appendChild(fragment);
// };

//   setPhoto();

//   createProgressGalleryNode();

// }());
;
(function () {
  $(document).ready(function () {

    $parent = $('.rating__list');
    $ratingAverage = $('.rating__average-value');

    rating = {
      'kids': 6.7,
      'infrastructure': 6.7,
      'district': 6.3,
      'safety': 5,
      'transport': 4.6,
      'house': 3.2,
    };
    // price1.replace(".", ",")
    updateRating(rating);

    function updateRating(rating) {

      let strHTML = '<li class="rating__list-item" data-aos="zoom-in"><div class="rating__list-figure rating__list-figure--kids"><svg width="46" height="33"><use xlink:href="#icon-balancer"></use></svg><span class="rating__value rating__value--kids">' + String(rating['kids']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-pink"></div></div>Для детей</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="200"><div class="rating__list-figure rating__list-figure--infrastructure"><svg width="40" height="40"><use xlink:href="#icon-infrastructure"></use></svg><span class="rating__value rating__value--infrastructure">' + String(rating['infrastructure']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-orange" data-aos-delay="200"></div></div>Инфраструктура</li>';
      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="300"><div class="rating__list-figure rating__list-figure--district"><svg width="41" height="41"><use xlink:href="#icon-compass"></use></svg><span class="rating__value rating__value--district">' + String(rating['district']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-lightblue" data-aos-delay="300"></div></div>Район</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="400"><div class="rating__list-figure rating__list-figure--safety"><svg width="28" height="37"><use xlink:href="#icon-lock"></use></svg><span class="rating__value rating__value--safety">' + String(rating['safety']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-green" data-aos-delay="400"></div></div>Безопасность</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="500"><div class="rating__list-figure rating__list-figure--transport"><svg width="44" height="29"><use xlink:href="#icon-bus"></use></svg><span class="rating__value rating__value--transport">' + String(rating['transport']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-blue" data-aos-delay="500"></div></div>Транспорт</li>';

      strHTML += '<li class="rating__list-item" data-aos="zoom-in" data-aos-delay="600"><div class="rating__list-figure rating__list-figure--house"><svg width="39" height="39"><use xlink:href="#icon-hotel"></use></svg><span class="rating__value rating__value--house">' + String(rating['house']).replace(".", ",") + '</span><div class="rating__list-border" data-aos="border-violet" data-aos-delay="600"></div></div>Квартира/дом</li>';

      $parent.html(strHTML);
      $ratingAverage.text(((rating['kids'] + rating['infrastructure'] + rating['district'] + rating['safety'] + rating['transport'] + rating['house'])/6).toFixed(1).replace(".", ","));
    }


  });
})();


function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
//--------------------------AOS--------------------------
$(document).ready(function () {
  AOS.init({
    once: true,
    duration: 700,
    offset: 60
  });

  setTimeout(function () {
    AOS.refresh();
  }, 200);


  $(window).on('resize', function () {
    AOS.refresh();
  });
});

//--------------------------AOS--------------------------

$('.main-nav__list').removeClass('main-nav--nojs');

$('.main-nav__list').addClass('hidden');

$('.excursion__modal').on('click', function (e) { //Закрытие модального окна по клику на фон
  if ($(this).has(e.target).length === 0 && !$(e.target).hasClass('expectation__btn') && !$(e.target).hasClass('ui-icon-circle-triangle-e') && !$(e.target).hasClass('ui-icon-circle-triangle-w') && !$(e.target).hasClass('ui-corner-all')) { //Если не содержит этот target (модальное окно)
    if (!$(this).hasClass('modal--closed')) { //Если открыто окно
      $(this).addClass('modal--closed');
    }
  }
});

$('.mortgage__modal').click(function (e) {
  if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
    if (!$(this).hasClass('modal--closed')) { //Если открыто окно
      $(this).addClass('modal--closed');
    }
  }
});

$('#consultationBtn').on('click', function () {
  $('.consultation__modal').removeClass('modal--closed');
});

$('.consultation .modal__closeBtn').on('click', function() {
  $('.consultation__modal').addClass('modal--closed');
});


$('.main-nav__toggle').on('click', function() {
  $('.main-nav__list').toggle('hidden');
});

(function () {
  var tableBtn = document.querySelectorAll('.description__table');

  for (var i = 0; i < tableBtn.length; i++) {

    tableBtn[i].classList.remove('table--nojs');
    tableBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      this.classList.toggle('active');
    })
  }
})();

// скролл по якорю

$(document).ready(function () {
  $(".scrollLink").on("click", "a", function (evt) {
    evt.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2000);
  });
});

// slick.init

$(document).ready(function () {

  $('.estate__slider-box').slick({
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="estate__slider-prevBtn"></button>',
    nextArrow: '<button id="next" type="button" class="estate__slider-nextBtn"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  $('.estate__slider-item').on('click', function () {
    $('.estate__slider-box').slick('slickNext');
  });
});


(function () {



  var WIDTH = 1360;
$(document).ready(function () {
  if ($(window).width() >= 1360) {
  } else {
    sliderOptions();
  }
});
  var sliderOptions = function () {
    if ($('.expectation__photo-box').hasClass('slick-initialized')) {
      $('.expectation__photo-box').slick('unslick');
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    }
    $('.expectation__photo-box').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      arrows: false,
      mobileFirst: true,
      // speed: 500,
      // fade: true,
      responsive: [{
        breakpoint: 1360,
        settings: 'unslick'
      }]
    });
    if ($(window).width() >= 1360) {
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    } else {
      $('.expectation__photo-box.slick-slider').on('click', nextSlide);
    }
    $(window).on('resize', function () {
      if ($(window).width() >= 1360) {
        $('.expectation__photo-box.slick-slider').off('click', nextSlide);
      } else {
        $('.expectation__photo-box.slick-slider').on('click', nextSlide);
      }
    });

    function nextSlide() {
      $(this).slick('slickNext');
    }
  }

  var flag = false;

  var galleryType = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > WIDTH) {
      flag = true;
      window.addEventListener('resize', sliderInit);
    } else {
      sliderOptions();
      window.addEventListener('resize', sliderDestroy);
    }
  }

  var sliderInit = function () {
    var initWidth = window.innerWidth;
    if (initWidth < WIDTH) {
      if (flag) {
        sliderOptions();
        flag = false;
        window.addEventListener('resize', sliderDestroy);
      }
    }
  }

  var sliderDestroy = function () {
    destroyWidth = window.innerWidth;
    if (destroyWidth > WIDTH) {
      if (!flag) {
        galleryType();
      }
    }
  }

  galleryType();
}());


(function () {
  var deadlineList = document.querySelector('.flats__deadline-list');
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  title.addEventListener('click', showDeadlineList);
}());

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var listPlayers = [];
var readyPlayer = 0;
// --------------------------------ПАРАМЕТРЫ Для изменения--------------------------------

let countPlayers = 4; //Количество видеороликов
let videosId = ['OXuIqaeg0SI', 'G8lVXBN8ZFk', 'G8lVXBN8ZFk',
  '7qBfdcI-d1Q'
]; // Список с ID видеозаписей. Каждый элемент списка (ID) будет присваиваться по порядку видеороликам. Если Количество ID меньше, чем кол-во видеороликов, то цикл ID-шников пойдет заново.
let vars = { //Настройки yooutube плэера (https://developers.google.com/youtube/player_parameters?hl=ru)
  'autoplay': 0,
  'controls': 0,
  'showinfo': 0,
  'rel': 0,
  'iv_load_policy': 3,
  'disablekb': 1,
  'fs': 0,
}
//-----------------------------------------------------------------------
function onYouTubeIframeAPIReady() {
  //Здесь создаем список плееров
  let j = 0;
  for (let i = 0; i < countPlayers; i++) {
    if ((j > i) || (j >= videosId.length - 1)) {
      j = 0;
    }

    let player = new YT.Player('player' + i, {
      playerVars: vars,
      videoId: videosId[j],
      events: {
        'onReady': onPlayerReady
      }
    });
    listPlayers[i] = player;
    j++;
  }
}

function onPlayerReady(event) {
  readyPlayer += 1;
}

$(document).ready(function () {

  //------------------------------------

  $('.blog__show-btn').click(function () {//Читать полностью
    $('.blog__wrapper').find('.hidden').removeClass('hidden');
    $(this).addClass('hidden');
  });
  //-----------------калькулятор модальное окно--------------------
  let valueMortgageWork = 2;
  let valueMortgageIncome = 50000;
  let valueMortgagePayment = 500000;
  let $mortgageCapital = $('#mortgage-capital');
  let $mortgageWork = $('#mortgage-work');
  let $mortgageIncome = $('#mortgage-income');
  let $mortgagePayment = $('#mortgage-payment');
  let $result = $('.mortgage__expectancy-value-wrap');
  checkExpectancy();
  $('#mortgage__income-range').on('input', function () {
    valueMortgageIncome = parseInt($(this).val());
    let str;
    if (valueMortgageIncome >= 100000) {
      str = 'больше ' + 100000;
    } else {
      str = valueMortgageIncome;
    }
    $mortgageIncome.val(str);
    checkExpectancy();
  });
  $('#mortgage__work-range').on('input', function () {
    valueMortgageWork = parseInt($(this).val());
    let str;
    let $year = $('.mortgage-work__year');
    if (valueMortgageWork >= 15) {
      str = 'больше 15';
    } else {
      str = valueMortgageWork;
    }
    $mortgageWork.val(str);
    if (valueMortgageWork == 1) {
      $year.text('год')
    } else if (valueMortgageWork >= 2 & valueMortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    checkExpectancy();
  });
  //Открытие закрытие модальных окон
  $('body').on('click', function (e) {
    if(!$(e.target).hasClass('light__btn')){
    if (!$('.modal').hasClass('modal--closed')) {
      if (!$(e.target).closest('.modal__wrapper').length) {
        $('.modal').addClass('modal--closed');
      }
    }
    
    if (!$(e.target).closest('.consultation__wrapper').length) {
      $('.consultation__modal').addClass('modal--closed');
      }
    if (!$(e.target).closest('.modal-feedback__wrapper').length) {
      $('.modal-feedback').removeClass('modal-feedback--active');
      }
    }
    if (!$(e.target).closest('.modal-to-book__wrapper').length && !$(e.target).hasClass('btnToBook')) {
      $('.modal-to-book').removeClass('modal-to-book--active');
    }  
    
  });
  $('#btnOpenMortgage').on('click', function () {
    $('.mortgage.mortgage__modal').removeClass('modal--closed');
  });

  $('.mortgage .modal__close-btn').on('click', function () {
    $('.mortgage.mortgage__modal').addClass('modal--closed ');
  });

  $('.modal-to-book__wrapper .modal__close-btn').on('click', function () {
    $('.modal-to-book').removeClass('modal-to-book--active');
  });


  $('.modal-photo-galery .modal__close-btn').on('click', function () {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });

  $('#btnOpenExcursionModal').on('click', function () {
    $('.excursion.excursion__modal').removeClass('modal--closed ');
  });
  $('.excursion .modal-close-btn').on('click', function () {
    $('.excursion.excursion__modal').addClass('modal--closed');
  });
  $('.modal__header-btn-close').on('click', function () {
    $(this).closest('.modal').addClass('modal--closed');

  });



  $($mortgagePayment).on('input', function () {
    valueMortgagePayment = $(this).val();
    checkExpectancy();
  });
  $($mortgageIncome).on('input', function () {
    valuemortgageIncome = $(this).val();
    $mortgageIncome.val(valuemortgageIncome);
    checkExpectancy();
  });
  $($mortgageWork).on('input', function () {
    let $year = $('.mortgage-work__year');
    let $mortgageWork__value = $('.mortgageWork__value');
    valuemortgageWork = $(this).val();
    if (valuemortgageWork == 1) {
      $year.text('год')
    } else if (valuemortgageWork >= 2 & valuemortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    $mortgageWork__value.text(valuemortgageWork)
    if (valuemortgageWork >= 15)
      $mortgageWork__value.text('более ' + valuemortgageWork + " ");
  });
  $($mortgageCapital).on('change', function () {

    valuemortgageIncome = $(this).val();
    if (this.checked) {} else {}
    checkExpectancy();
  });

  function checkExpectancy() {
    valueMortgageWork = parseInt(valueMortgageWork);
    valueMortgageIncome = parseInt(valueMortgageIncome);
    valueMortgagePayment = parseInt(valueMortgagePayment);
    let result = 65;
    if (valueMortgageWork > 5) {
      result++;
    }
    if (valueMortgageWork > 10) {
      result++;
    }
    if (valueMortgageWork == 15) {
      result++;
    }
    result += valueMortgagePayment * 0.00001;
    result += (valueMortgageIncome - 35000) / 2950;
    result = Math.round(result);
    if (result > 93) {
      result = 93;
    }
    $result.text(result);
  }
  //-----------------калькулятор модальное окно--------------------
  //-----калькулятор
  var contributionVal = 0,
    rateVal = 0,
    timeVal = 0;
  $("#contribution, #rate, #time").keypress(function (event) {
    event = event || window.event;

    if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
      return false;
  });
  $("#contribution").on('input', function () {
    contributionVal = $(this).val();
    updateResultCalc();
  });
  $("#rate").on('input', function () {
    rateVal = $(this).val();
    updateResultCalc();
  });
  $("#time").on('input', function () {
    timeVal = $(this).val();
    updateResultCalc();
  });

  function toNumber(x) { //Делает пробелы, между числами
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(",");
  }

  function updateResultCalc() {
    contributionVal = parseInt(contributionVal);
    rateVal = parseInt(rateVal);
    timeVal = parseInt(timeVal);
    if (contributionVal != 0 && rateVal != 0 && timeVal != 0 && contributionVal != '' && rateVal != '' && timeVal != '' && contributionVal >= 10000) {
      let result = ((contributionVal * rateVal / 100) / 12) * timeVal;
      result = +result.toFixed(2);
      result = toNumber(result);
      if (result != NaN && result != undefined && result != 'NaN') {

        $('.calculator__result').text(result + ' руб.');
      } else {
        $('.calculator__result').text(0 + ' руб.');
      }

    }


  }
  //-----калькулятор

  //-----Videoslider
  let videoSlideClientX;
  $('.video-slider').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    // variableWidth: true,
    // infinite: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false
        }
      }
    ]
  });

  function videoPlay(autoplay, idSlide) {
    if (autoplay == true) {
      let $slide = $('.video-slider').find('.video-slider__item[data-slick-index="' + idSlide + '"]');
      let $btnImg = $slide.find('.btn-play img');

      let $img = $slide.find('.content.slide__img');
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      $video.addClass('slide__video-active');
      $img.addClass('slide__img-none');
      listPlayers[+idSlide].playVideo();
      $(this).removeClass('btn-pause--none');
      return;
    }
    $(this).removeClass('btn-pause--none');
    if ($(this).hasClass('btn-play')) {
      let $btnImg = $(this).children('img');
      let $img = $(this).parent();
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      if ($btnImg.attr('src') == 'img/btn-play.svg') {
        if (readyPlayer == listPlayers.length || readyPlayer >= (1 + idVideo)) {
          $video.addClass('slide__video-active');
          $img.addClass('slide__img-none');
          listPlayers[+idVideo].playVideo();
          $(this).removeClass('btn-pause--none');
        } else {
          var idTimeout = setInterval(function () {
            if (readyPlayer >= (1 + parseInt(idVideo))) {
              $video.addClass('slide__video-active');
              $img.addClass('slide__img-none');
              listPlayers[+idVideo].playVideo();
              clearInterval(idTimeout);
              $btnImg.attr('src', 'img/btn-pause.svg');
              $($btnImg).addClass('pause');
            }
          }, 1500);
          $(this).removeClass('btn-pause--none');
        }
      } else {
        listPlayers[+idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }
    } else {

      let $video = $(this).siblings('.wrapper-player').children('.slide__video');
      let $imgVideo = $video.parent().siblings('.slide__img');
      let idVideo = $video.attr('id').replace('player', '');
      let $btnImg = $imgVideo.children('.btn-play').children('img');
      listPlayers[+idVideo].pauseVideo();
      $(this).addClass('btn-pause--none');


      $video.removeClass('slide__video-active');
      $imgVideo.removeClass('slide__img-none');
      $btnImg.attr('src', 'img/btn-play.svg');
      $btnImg.removeClass('pause');

    }
  }
  $(document).on('click', '.btn-play, .btn-pause', videoPlay);

  $('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $prevSlide = $('.video-slider').find('.video-slider__item[data-slick-index="' + currentSlide + '"]');
      let $video = $($prevSlide).children('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      $video.removeClass('slide__video-active');
      let $imgVideo = $video.parent().siblings('.slide__img');

      $imgVideo.removeClass('slide__img-none');
      let $btnImg = $imgVideo.children('.btn-play').children('img');

      if (readyPlayer == listPlayers.length || readyPlayer >= (1 + parseInt(idVideo))) {
        listPlayers[idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }

    }
  });

  $('.video-slider__item').on('mouseup', function (e) {
    if (e.clientX == videoSlideClientX) { //Произошел именно клик
      let curSlideIndex = $('.video-slider').slick('slickCurrentSlide');
      let nextSlideIndex = $(this).attr('data-slick-index');
      if (nextSlideIndex > curSlideIndex) {
        $('.video-slider').slick('slickNext');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      } else if (nextSlideIndex < curSlideIndex) {
        $('.video-slider').slick('slickPrev');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      }

    }

  });
  $('.video-slider__item').on('mousedown', function (e) {
    videoSlideClientX = e.clientX;
  });
  //Календарь datapicker]
  $('#hasDatepicker').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    onSelect: function (dateText, inst) {
      let day = $(this).datepicker('getDate').getDate();
      let month = $(this).datepicker('getDate').getMonth();
      $('.date-info .date').text(day + '.' + month);
    }
  });
  //Select time excursion
  $('.excursion__select-time').on('input', function () {
    $('.date-info .time').text($(this).val() + ':00');
  });
});

;(function() {
  var descriptionTopY = $('#description').offset().top;

  $(window).bind('scroll', function () {
    if ($(this).scrollTop() >= descriptionTopY) {
      $(this).unbind('scroll');
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.996421, 30.214709],
            zoom: 14
          }, {
            searchControlProvider: 'yandex#search'
          }),
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map_pin.png',
            iconImageSize: [79, 87],
            iconImageOffset: [-40, -87]
          })
        myMap.geoObjects
          .add(myPlacemark)
        myMap.behaviors
          .disable(['scrollZoom', 'rightMouseButtonMagnifier'])
          .enable('ruler');
      });
      
    }
  });
}) ();


