var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function w(){var e=m();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return p?d(n,i-(e-c)):n}(e))}function O(e){return f=void 0,b&&r?y(e):(r=o=void 0,a)}function S(){var e=m(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(p)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=g(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},S.flush=function(){return void 0===f?a:O(m())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]');let y={};const h=t((function(e){e.preventDefault();new FormData(b).forEach(((e,t)=>{y[t]=e})),console.log(y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}}),500);!function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{y[e]=t,b.elements[e].value=t})))}(),b.addEventListener("submit",h),b.addEventListener("input",(function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}));
//# sourceMappingURL=03-feedback.c087959b.js.map