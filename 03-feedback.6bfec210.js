function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var i,o,r,f,u,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),l?g(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=r}function w(){var e=p();if(h(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-a);return s?v(n,r-(e-c)):n}(e))}function T(e){return u=void 0,m&&i?g(e):(i=o=void 0,f)}function O(){var e=p(),n=h(e);if(i=arguments,o=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,t),g(a)}return void 0===u&&(u=setTimeout(w,t)),f}return t=b(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},O.flush=function(){return void 0===u?f:T(p())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form");g.addEventListener("submit",e(t)((function(e){e.preventDefault();let t={email:g.elements.email.value,message:g.elements.message.value};console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t)),g.reset()}),500));
//# sourceMappingURL=03-feedback.6bfec210.js.map
