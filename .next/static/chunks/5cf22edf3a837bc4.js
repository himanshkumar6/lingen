(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89129,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return T},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return p},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return h},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return S}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,o=!1;return(...r)=>(o||(o=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>s.test(e);function l(){let{protocol:e,hostname:t,port:o}=window.location;return`${e}//${t}${o?":"+o:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let o=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(o&&h(o))return r;if(!r)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let p="u">typeof performance,g=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class T extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function S(e){return JSON.stringify({message:e.message,stack:e.stack})}},20955,(e,t,o)=>{var r={229:function(e){var t,o,r,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}var u=[],l=!1,c=-1;function d(){l&&r&&(l=!1,r.length?u=r.concat(u):c=-1,u.length&&h())}function h(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];u.push(new f(e,t)),1!==u.length||l||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}},i=!0;try{r[e](o,o.exports,a),i=!1}finally{i&&delete n[e]}return o.exports}a.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=a(229)},50461,(e,t,o)=>{"use strict";var r,n;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(n=e.g.process)?void 0:n.env)?e.g.process:e.r(20955)},8481,(e,t,o)=>{"use strict";var r=Symbol.for("react.transitional.element");function n(e,t,o){var n=null;if(void 0!==o&&(n=""+o),void 0!==t.key&&(n=""+t.key),"key"in t)for(var a in o={},t)"key"!==a&&(o[a]=t[a]);else o=t;return{$$typeof:r,type:e,key:n,ref:void 0!==(t=o.ref)?t:null,props:o}}o.Fragment=Symbol.for("react.fragment"),o.jsx=n,o.jsxs=n},91398,(e,t,o)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,o)=>{"use strict";var r=e.i(50461),n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),g=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function T(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||y}function w(){}function S(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||y}T.prototype.isReactComponent={},T.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},T.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=T.prototype;var k=S.prototype=new w;k.constructor=S,b(k,T.prototype),k.isPureReactComponent=!0;var C=Array.isArray;function E(){}var I={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function O(e,t,o){var r=o.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function Y(e,t){var o,r;return"object"==typeof e&&null!==e&&null!=e.key?(o=""+e.key,r={"=":"=0",":":"=2"},"$"+o.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function P(e,t,o){if(null==e)return e;var r=[],i=0;return!function e(t,o,r,i,s){var u,l,c,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var h=!1;if(null===t)h=!0;else switch(d){case"bigint":case"string":case"number":h=!0;break;case"object":switch(t.$$typeof){case n:case a:h=!0;break;case m:return e((h=t._init)(t._payload),o,r,i,s)}}if(h)return s=s(t),h=""===i?"."+Y(t,0):i,C(s)?(r="",null!=h&&(r=h.replace(x,"$&/")+"/"),e(s,o,r,"",function(e){return e})):null!=s&&(A(s)&&(u=s,l=r+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+h,s=O(u.type,l,u.props)),o.push(s)),1;h=0;var f=""===i?".":i+":";if(C(t))for(var p=0;p<t.length;p++)d=f+Y(i=t[p],p),h+=e(i,o,r,d,s);else if("function"==typeof(p=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=g&&c[g]||c["@@iterator"])?c:null))for(t=p.call(t),p=0;!(i=t.next()).done;)d=f+Y(i=i.value,p++),h+=e(i,o,r,d,s);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(E,E):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),o,r,i,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.")}return h}(e,r,"","",function(e){return t.call(o,e,i++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};o.Activity=p,o.Children={map:P,forEach:function(e,t,o){P(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=T,o.Fragment=i,o.Profiler=u,o.PureComponent=S,o.StrictMode=s,o.Suspense=h,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,o.__COMPILER_RUNTIME={__proto__:null,c:function(e){return I.H.useMemoCache(e)}},o.cache=function(e){return function(){return e.apply(null,arguments)}},o.cacheSignal=function(){return null},o.cloneElement=function(e,t,o){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=b({},e.props),n=e.key;if(null!=t)for(a in void 0!==t.key&&(n=""+t.key),t)_.call(t,a)&&"key"!==a&&"__self"!==a&&"__source"!==a&&("ref"!==a||void 0!==t.ref)&&(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=o;else if(1<a){for(var i=Array(a),s=0;s<a;s++)i[s]=arguments[s+2];r.children=i}return O(e.type,n,r)},o.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},o.createElement=function(e,t,o){var r,n={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=o;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];n.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return O(e,a,n)},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:d,render:e}},o.isValidElement=A,o.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:R}},o.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},o.startTransition=function(e){var t=I.T,o={};I.T=o;try{var r=e(),n=I.S;null!==n&&n(o,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(E,j)}catch(e){j(e)}finally{null!==t&&null!==o.types&&(t.types=o.types),I.T=t}},o.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},o.use=function(e){return I.H.use(e)},o.useActionState=function(e,t,o){return I.H.useActionState(e,t,o)},o.useCallback=function(e,t){return I.H.useCallback(e,t)},o.useContext=function(e){return I.H.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e,t){return I.H.useDeferredValue(e,t)},o.useEffect=function(e,t){return I.H.useEffect(e,t)},o.useEffectEvent=function(e){return I.H.useEffectEvent(e)},o.useId=function(){return I.H.useId()},o.useImperativeHandle=function(e,t,o){return I.H.useImperativeHandle(e,t,o)},o.useInsertionEffect=function(e,t){return I.H.useInsertionEffect(e,t)},o.useLayoutEffect=function(e,t){return I.H.useLayoutEffect(e,t)},o.useMemo=function(e,t){return I.H.useMemo(e,t)},o.useOptimistic=function(e,t){return I.H.useOptimistic(e,t)},o.useReducer=function(e,t,o){return I.H.useReducer(e,t,o)},o.useRef=function(e){return I.H.useRef(e)},o.useState=function(e){return I.H.useState(e)},o.useSyncExternalStore=function(e,t,o){return I.H.useSyncExternalStore(e,t,o)},o.useTransition=function(){return I.H.useTransition()},o.version="19.2.4"},91788,(e,t,o)=>{"use strict";t.exports=e.r(61556)},41705,(e,t,o)=>{"use strict";o._=function(e){return e&&e.__esModule?e:{default:e}}},52456,(e,t,o)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(r=function(e){return e?o:t})(e)}o._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=r(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}return n.default=e,o&&o.set(e,n),n}},77915,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={DEFAULT_SEGMENT_KEY:function(){return d},NOT_FOUND_SEGMENT_KEY:function(){return h},PAGE_SEGMENT_KEY:function(){return c},addSearchParamsIfPageSegment:function(){return u},computeSelectedLayoutSegment:function(){return l},getSegmentValue:function(){return a},getSelectedLayoutSegmentPath:function(){return function e(t,o,r=!0,n=[]){let i;if(r)i=t[1][o];else{let e=t[1];i=e.children??Object.values(e)[0]}if(!i)return n;let s=a(i[0]);return!s||s.startsWith(c)?n:(n.push(s),e(i,o,!1,n))}},isGroupSegment:function(){return i},isParallelRouteSegment:function(){return s}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});function a(e){return Array.isArray(e)?e[1]:e}function i(e){return"("===e[0]&&e.endsWith(")")}function s(e){return e.startsWith("@")&&"@children"!==e}function u(e,t){if(e.includes(c)){let e=JSON.stringify(t);return"{}"!==e?c+"?"+e:c}return e}function l(e,t){if(!e||0===e.length)return null;let o="children"===t?e[0]:e[e.length-1];return o===d?null:o}let c="__PAGE__",d="__DEFAULT__",h="/_not-found"},7117,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"InvariantError",{enumerable:!0,get:function(){return r}});class r extends Error{constructor(e,t){super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`,t),this.name="InvariantError"}}},13584,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1085,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={AppRouterContext:function(){return i},GlobalLayoutRouterContext:function(){return u},LayoutRouterContext:function(){return s},MissingSlotContext:function(){return c},TemplateContext:function(){return l}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});let a=e.r(41705)._(e.r(91788)),i=a.default.createContext(null),s=a.default.createContext(null),u=a.default.createContext(null),l=a.default.createContext(null),c=a.default.createContext(new Set)},31430,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return n}});class r extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class n extends URLSearchParams{append(){throw new r}delete(){throw new r}set(){throw new r}sort(){throw new r}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},70008,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={NavigationPromisesContext:function(){return c},PathParamsContext:function(){return l},PathnameContext:function(){return u},ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},SearchParamsContext:function(){return s},createDevToolsInstrumentedPromise:function(){return d}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});let a=e.r(91788),i=e.r(31430),s=(0,a.createContext)(null),u=(0,a.createContext)(null),l=(0,a.createContext)(null),c=(0,a.createContext)(null);function d(e,t){let o=Promise.resolve(t);return o.status="fulfilled",o.value=t,o.displayName=`${e} (SSR)`,o}},14760,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return s}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});let a="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=a}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===a}},91622,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={HTTPAccessErrorStatus:function(){return a},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return s},getAccessFallbackErrorTypeByStatus:function(){return c},getAccessFallbackHTTPStatus:function(){return l},isHTTPAccessFallbackError:function(){return u}};for(var n in r)Object.defineProperty(o,n,{enumerable:!0,get:r[n]});let a={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},i=new Set(Object.values(a)),s="NEXT_HTTP_ERROR_FALLBACK";function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,o]=e.digest.split(";");return t===s&&i.has(Number(o))}function l(e){return Number(e.digest.split(";")[1])}function c(e){switch(e){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},40184,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"RedirectStatusCode",{enumerable:!0,get:function(){return n}});var r,n=((r={})[r.SeeOther=303]="SeeOther",r[r.TemporaryRedirect=307]="TemporaryRedirect",r[r.PermanentRedirect=308]="PermanentRedirect",r);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},1939,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r,n={REDIRECT_ERROR_CODE:function(){return s},RedirectType:function(){return u},isRedirectError:function(){return l}};for(var a in n)Object.defineProperty(o,a,{enumerable:!0,get:n[a]});let i=e.r(40184),s="NEXT_REDIRECT";var u=((r={}).push="push",r.replace="replace",r);function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[o,r]=t,n=t.slice(2,-2).join(";"),a=Number(t.at(-2));return o===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(a)&&a in i.RedirectStatusCode}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},68934,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isNextRouterError",{enumerable:!0,get:function(){return a}});let r=e.r(91622),n=e.r(1939);function a(e){return(0,n.isRedirectError)(e)||(0,r.isHTTPAccessFallbackError)(e)}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),t.exports=o.default)},43217,e=>{"use strict";let t=[{title:"How to Write a Bio for Instagram (Complete Guide for USA Creators)",slug:"how-to-write-a-bio-for-instagram",excerpt:"Learn how to write a professional, catchy and SEO-optimized Instagram bio that attracts followers in the United States.",coverImage:"/blog/instagram-bio.png",category:"Instagram Growth",publishDate:"15 Feb 2026",readingTime:"8 min read",content:`
# How to Write a Bio for Instagram (Complete Guide for 2026)

Let’s be honest.

Most Instagram bios are either boring, confusing, or trying way too hard.

And in 2026, that’s a problem.

Your Instagram bio isn’t just a short description anymore. It’s your positioning statement. It’s your credibility snapshot. It’s your conversion hook. And if you’re trying to grow an audience in the United States, your bio needs to communicate value instantly.

Because here’s the reality:

You have about 3–5 seconds before someone decides whether to follow you or leave.

This guide will show you exactly how to write an Instagram bio that attracts followers, builds authority, and converts profile visits into action.

No fluff. No fake guru tricks. Just what actually works.

---

## Why Your Instagram Bio Matters More Than Ever in 2026

Instagram has evolved.

It’s no longer just a photo-sharing platform. It’s a search engine.

People now search things like:

- fitness coach NYC  
- real estate agent Texas  
- crypto educator USA  
- content creator tips  

Instagram’s algorithm reads your bio to understand who you are and who to show your profile to.

That means your bio directly impacts:

- Profile discoverability  
- Search visibility  
- Brand clarity  
- Conversion rate  

If your bio is unclear, generic, or missing keywords — you’re leaving growth on the table.

---

## Step 1: Clearly Define Who You Are

The biggest mistake creators make?

They try to be everything.

Your bio should answer one simple question:

Who are you and what do you help people with?

Weak examples:

“Entrepreneur | Dream big | Hustle”  
“Living my best life”

These don’t say anything specific.

Stronger versions:

“Helping U.S. creators grow on YouTube using data-backed SEO.”  
“NYC-based fitness coach for busy professionals.”

Specificity builds trust. Vague kills growth.

---

## Step 2: Lead With Value, Not Vibes

Creativity is fine. But clarity comes first.

Instead of:

“Digital nomad”

Try:

“Helping remote professionals build online income streams.”

Instead of:

“Marketing enthusiast.”

Try:

“Teaching small U.S. businesses how to scale with paid ads.”

Your bio should communicate transformation.

Ask yourself:

What result do people get from following me?

That’s what makes someone hit “Follow.”

---

## Step 3: Use Keywords (Instagram SEO Is Real)

Instagram now indexes bios.

If you're targeting a U.S. audience, include niche-specific or location-based keywords naturally.

Examples:

- Los Angeles Realtor  
- Texas personal trainer  
- Chicago wedding photographer  
- U.S. content marketing consultant  

Do not keyword stuff.

Just make sure your niche is clear.

Also — your Name field is searchable.

Instead of:

“Jake”

Use:

“Jake | YouTube SEO Coach”

That small tweak improves discoverability.

---

## Step 4: Structure Your Bio for Readability

Good bios are easy to scan.

Avoid writing one long paragraph.

Here’s a clean example structure:

Helping creators grow on YouTube  
SEO • Thumbnails • Strategy  
Trusted by 10k+ students  
Free growth checklist below

It:

- States identity  
- Shows expertise  
- Builds credibility  
- Includes a call-to-action  

Readable equals professional.

---

## Step 5: Add Social Proof (Without Sounding Fake)

People trust proof.

If you have real metrics, include them.

Examples:

- Worked with 50+ U.S. brands  
- Helping 12k+ creators grow  
- Featured in Forbes  
- 200+ client transformations  

Even small numbers matter if they’re real.

Authenticity always wins in the U.S. market.

---

## Step 6: Always Include a Clear Call-to-Action

Never leave your bio open-ended.

Tell people what to do next.

Examples:

- Download the free guide below  
- Book a strategy call  
- Join my newsletter  
- Start your transformation  

Your bio is part of your conversion funnel.

No CTA means missed opportunity.

---

## Step 7: Make Sure Your Bio Matches Your Content

Your bio sets expectations.

If your bio says “Instagram growth expert”  
But your content is random memes…

You lose credibility.

Alignment builds authority.

Before finalizing your bio, ask:

Does this accurately reflect what I post?

---

## High-Converting Instagram Bio Templates (USA Market)

### For Content Creators

Helping creators grow on YouTube  
SEO • Thumbnails • Retention  
10k+ students worldwide  
Free checklist below

---

### For Fitness Coaches

Online fitness coach (USA)  
Helping busy professionals lose weight  
Custom programs & accountability  
Start today below

---

### For Small Business Owners

Digital marketing strategist  
Helping U.S. startups scale profitably  
Ads • Funnels • Automation  
Book a consult below

---

## Common Instagram Bio Mistakes to Avoid

Avoid these:

- Overusing emojis  
- Being too vague  
- Writing in all caps  
- No spacing  
- No call-to-action  
- Trying to sound overly motivational  

Clarity always beats cleverness.

---

## Should You Update Your Bio Regularly?

Yes — strategically.

Update your bio when:

- You launch something new  
- You shift your niche  
- You reach a milestone  
- You test a new positioning angle  

Small changes can significantly impact conversion rate.

---

## How to Test If Your Bio Is Working

Check your profile visits vs follows.

If 100 people visit your profile and only 5 follow…

Your bio may be unclear.

A strong bio improves:

- Follow conversion rate  
- Link clicks  
- Message inquiries  

You can experiment with:

- Different value statements  
- Different CTAs  
- Different keyword placements  

Optimization is ongoing.

---

## Final Thoughts

Your Instagram bio isn’t decoration.

It’s positioning.

It’s clarity.

It’s your digital handshake.

If you want to grow in the United States market in 2026, your bio needs:

- Clear identity  
- Strong value statement  
- Relevant keywords  
- Social proof  
- A simple CTA  

And most importantly — authenticity.

Because at the end of the day, people follow clarity. Not confusion.

---

## Frequently Asked Questions

### How long should an Instagram bio be?

Instagram allows 150 characters in the bio section. Use them strategically and focus on clarity over creativity.

---

### Do emojis help in Instagram bios?

Yes, when used sparingly. Emojis can improve readability and draw attention to key points. Avoid overusing them in professional niches.

---

### Should I include hashtags in my Instagram bio?

Hashtags in bios don’t significantly improve discoverability. It’s better to include searchable keywords naturally.

---

### Does Instagram SEO actually work?

Yes. Instagram indexes keywords in bios and names. Clear niche keywords improve profile visibility in search.
`},{title:"How to Change YouTube Shorts Thumbnail (Step-by-Step Guide)",slug:"how-to-change-youtube-shorts-thumbnail",excerpt:"A complete guide for creators in the USA on how to update and optimize YouTube Shorts thumbnails.",coverImage:"/blog/shorts-thumbnail.png",category:"YouTube Growth",publishDate:"15 Feb 2026",readingTime:"6 min read",content:`# How to Change YouTube Shorts Thumbnail (Step-by-Step Guide for 2026)

If you’ve ever uploaded a YouTube Short and thought, “Wait… why does that frame look so bad?” — you’re not alone.

Unlike regular YouTube videos, Shorts don’t exactly make thumbnail control obvious. In fact, most creators in the U.S. don’t even realize you *can* influence the thumbnail — at least partially.

The truth? YouTube Shorts thumbnails work differently than traditional video thumbnails. And if you’re trying to grow your channel in 2026, understanding this difference matters.

In this guide, I’ll walk you through:

• Whether you can actually change a Shorts thumbnail  
• What works (and what doesn’t)  
• The mobile vs desktop difference  
• Smart workarounds creators are using  
• Best practices for maximizing Shorts clicks  

Let’s break it down.

---

## Can You Change a YouTube Shorts Thumbnail?

Short answer: **Yes — but only in specific situations.**

As of 2026:

• You cannot upload a custom thumbnail for Shorts from desktop.  
• You can select a frame during upload — but only using the mobile app.  
• On desktop, Shorts usually auto-generate thumbnails.  

That’s why many creators feel stuck.

But don’t worry — there are smart ways around it.

---

## Step-by-Step: How to Change a YouTube Shorts Thumbnail (Mobile Method)

If you want control, you need to use the YouTube mobile app.

Here’s how:

### Step 1: Open the YouTube App

Make sure you’re using the latest version of the YouTube app on iPhone or Android.

Outdated versions may not show the thumbnail selector.

---

### Step 2: Upload Your Short

Tap the "+" icon  
Select your Short video  
Add title and description  

Before you hit publish — look carefully.

You should see a small pencil icon on the thumbnail preview.

Tap it.

---

### Step 3: Select a Frame

You’ll see a slider that lets you scrub through your Short.

Pick the exact frame you want as your thumbnail.

Important tip:

Choose a frame with:
• Clear subject
• Bright lighting
• No motion blur
• Face visible (if possible)

Then tap “Done” and publish.

That’s it.

---

## Why YouTube Shorts Thumbnails Work Differently

Here’s something most creators don’t realize:

Shorts primarily get traffic from the Shorts feed — not search.

In the Shorts feed:
• Viewers scroll vertically  
• Thumbnails are less important  
• First 1–2 seconds matter more than thumbnail  

However…

On your channel page, homepage suggestions, and search results — thumbnails absolutely matter.

So while Shorts are “feed-first,” thumbnail optimization still impacts:

• Channel branding  
• Profile visits  
• Suggested traffic  
• Desktop browsing  

---

## What If You Already Published the Short?

Here’s the frustrating part:

As of now, you cannot change a Shorts thumbnail after publishing.

There is no edit-thumbnail button.

Your only options are:

• Delete and re-upload  
• Convert to a regular video  
• Live with it  

That’s why choosing the right frame before publishing is critical.

---

## Pro Workaround: The “Intentional First Frame” Strategy

Smart creators don’t rely on the slider.

They design their Short like this:

Frame 1 (0.5–1 second):
• Big bold text  
• Clear hook  
• High contrast  
• Clean background  

Then they start the content.

Why?

Because YouTube often pulls early frames for previews.

So if your first second looks strong, your thumbnail looks strong.

---

## Can You Add a Custom Thumbnail Like Regular Videos?

No.

YouTube currently does not allow custom thumbnail uploads for Shorts like it does for long-form videos.

Even if you upload from desktop, it won’t give you the custom thumbnail option.

However…

If your Short is over 60 seconds and not recognized as a Short (vertical but longer), it may behave like a regular video.

That’s advanced strategy though — and not recommended just for thumbnail control.

---

## Best Thumbnail Practices for Shorts (2026 USA Creator Strategy)

Even though options are limited, here’s how to maximize impact:

### 1. High Contrast Faces

Faces increase click-through rate dramatically.

Especially in U.S. markets.

Strong emotion wins.

---

### 2. Large Text On Screen

Add bold readable text in first frame.

Avoid tiny captions.

Think:

"STOP Doing This"
"Nobody Talks About This"
"3 Mistakes Killing Your Channel"

---

### 3. Bright Colors

Shorts compete with high-energy content.

Muted thumbnails disappear.

Use:
• Yellow  
• Red  
• White  
• Neon accents  

---

### 4. Avoid Motion Blur

Fast transitions ruin thumbnails.

Make your first second stable.

---

### 5. Check Desktop Preview

After publishing:

Go to:
YouTube → Your Channel → Videos tab

See how it looks in grid view.

If it looks weak, consider re-uploading.

---

## Does Thumbnail Affect Shorts Views?

Yes — but indirectly.

In the Shorts feed:
Hook matters more than thumbnail.

Outside the Shorts feed:
Thumbnail matters.

If someone visits your profile and sees boring thumbnails, they won’t click.

In competitive niches (finance, fitness, tech, gaming), visual polish builds trust.

---

## Common Mistakes Creators Make

• Ignoring first frame design  
• Relying on random frame  
• Uploading from desktop and expecting control  
• Using dark low-light footage  
• Forgetting that profile grid matters  

---

## Advanced Tip: Thumbnail Consistency for Branding

Even if you can’t upload custom thumbnails, you can:

• Use consistent color scheme  
• Same background style  
• Similar framing  
• Repeated text layout  

When viewers visit your channel, it feels cohesive.

And cohesion builds trust.

---

## Frequently Asked Questions

### Can I change a Shorts thumbnail after posting?

No. You must delete and re-upload to change it.

---

### Why don’t I see the thumbnail editor?

Make sure you’re uploading from the mobile app and not desktop.

---

### Do Shorts thumbnails affect SEO?

Indirectly. Shorts rely more on watch time and retention, but thumbnails affect clicks from search and channel pages.

---

### Can I upload a custom image as Shorts thumbnail?

No. Only frame selection is allowed.

---

## Final Thoughts

YouTube Shorts aren’t just about going viral.

They’re about building a recognizable brand.

And even though thumbnail control is limited, smart creators adapt.

Design your first second intentionally.  
Use bold visuals.  
Check your grid layout.  
Stay consistent.

Because in 2026, attention is currency — and visuals still win.

If you want your Shorts to look professional, start with the first frame.

That’s your real thumbnail.

And now you know how to control it.
`},{title:"What Is a Thumbnail? Beginner Guide for YouTube Creators",slug:"what-is-a-thumbnail",excerpt:"Understand what thumbnails are, why they matter, and how creators in the US use them to increase CTR.",coverImage:"/blog/thumbnail-guide.png",category:"YouTube SEO",publishDate:"15 Feb 2026",readingTime:"7 min read",content:`# What Is a Thumbnail? Beginner Guide for YouTube Creators (2026 Edition)

If you’re just starting on YouTube, you’ve probably heard this advice:

“Your thumbnail matters more than your video.”

That sounds dramatic — but it’s not wrong.

A thumbnail is the small preview image people see before clicking on your video. And in 2026, it’s one of the most important factors in whether someone watches your content or scrolls past it.

For beginner creators in the United States, understanding thumbnails isn’t optional anymore. It’s essential.

In this guide, you’ll learn:

• What a thumbnail actually is  
• Why thumbnails are critical for YouTube growth  
• How thumbnails impact click-through rate (CTR)  
• What makes a good thumbnail  
• Beginner mistakes to avoid  
• Real examples and practical advice  

Let’s break it down.

---

## What Is a Thumbnail?

A thumbnail is the preview image that represents your video on YouTube.

It appears:

• On the YouTube homepage  
• In search results  
• In suggested videos  
• On your channel page  
• Inside playlists  

Think of it like a movie poster.

Before someone watches your content, they see the thumbnail.

And they decide — in less than one second — whether it’s worth clicking.

---

## Why Thumbnails Matter More Than Ever in 2026

YouTube is more competitive than ever.

Millions of videos are uploaded every day.

Your thumbnail is what separates:

• 200 views  
• From 20,000 views  

Even if your content is amazing, a weak thumbnail can kill performance.

Here’s why:

### 1. Click-Through Rate (CTR)

YouTube measures how many people click your video after seeing it.

If 100 people see your video and 10 click, that’s a 10% CTR.

Higher CTR = More impressions  
More impressions = More growth  

Your thumbnail directly affects CTR.

---

### 2. First Impression Psychology

Humans process visuals 60,000 times faster than text.

Before someone reads your title, they see your thumbnail.

If it looks:

• Confusing  
• Low quality  
• Dark  
• Boring  

They scroll.

---

### 3. Branding & Trust

Professional thumbnails build trust.

In the U.S. market especially, viewers associate visual quality with credibility.

Clean design = Authority  
Messy design = Amateur  

---

## What Makes a Good YouTube Thumbnail?

Now let’s talk about what actually works.

Beginner creators often overcomplicate this.

Here’s what matters:

---

### 1. High Contrast

Bright subject. Dark background. Clear separation.

Your thumbnail should pop even on a small phone screen.

Low contrast thumbnails disappear.

---

### 2. Large, Bold Text

If you use text:

• Keep it 3–5 words max  
• Use large, readable font  
• Make sure it’s readable on mobile  

Bad example:
“How I Grew My Channel Using Multiple SEO Optimization Strategies”

Good example:
“STOP Doing This”
“$0 to $10K”
“Big Mistake”

---

### 3. Faces Perform Better

Videos with expressive faces tend to get higher CTR.

Emotion works.

Surprise.
Shock.
Curiosity.
Confidence.

Especially in American audiences, facial emotion drives clicks.

---

### 4. Simple Composition

Don’t overcrowd.

Common beginner mistake:
Too much text.
Too many arrows.
Too many emojis.

Clean beats clutter.

---

## Thumbnail Size & Technical Specs

If you're creating a custom thumbnail, here are the official guidelines:

• Resolution: 1280 x 720  
• Aspect Ratio: 16:9  
• File Size: Under 2MB  
• Format: JPG or PNG  

Always design in high resolution.

Blurry thumbnails hurt performance.

---

## Thumbnail vs Title: Which Is More Important?

They work together.

Think of it like this:

Thumbnail = Hook  
Title = Context  

Thumbnail makes someone stop.  
Title convinces them to click.

If both are strong, your CTR increases.

If one is weak, performance drops.

---

## Beginner Thumbnail Mistakes to Avoid

Let’s save you from common errors.

### 1. Using Random Auto-Generated Thumbnails

Never rely on YouTube’s automatic frame selection.

It usually picks awkward frames.

Always upload a custom thumbnail for long-form videos.

---

### 2. Making Text Too Small

If someone can’t read it in 1 second, it’s too small.

Check your thumbnail at 25% size before uploading.

---

### 3. Copying Big Creators Exactly

Inspiration is good.

Copying is bad.

Your niche, personality, and audience matter.

Adapt ideas — don’t duplicate.

---

### 4. Ignoring Mobile View

Over 70% of YouTube traffic comes from mobile devices.

Design for small screens.

Test it on your phone before publishing.

---

## Do Thumbnails Affect YouTube SEO?

Indirectly — yes.

YouTube’s algorithm cares about:

• Click-through rate  
• Watch time  
• Audience retention  

A strong thumbnail improves CTR.

Higher CTR increases distribution.

Better distribution improves ranking.

So while thumbnails aren’t “SEO keywords,” they affect SEO performance.

---

## What About YouTube Shorts Thumbnails?

Shorts work differently.

You cannot upload custom thumbnails for Shorts.

You can only select a frame from the video (using mobile app).

However:

The first second of your Short acts like a thumbnail in many placements.

So design your first frame intentionally.

---

## Real Example: Thumbnail Upgrade Impact

Many beginner creators report this pattern:

Video gets:
1,000 impressions
3% CTR
30 views

They redesign thumbnail.

Video gets:
1,000 impressions
8% CTR
80 views

Same video.
Different thumbnail.

That’s the power.

---

## How to Design Thumbnails as a Beginner

You don’t need Photoshop.

Tools beginners in the U.S. commonly use:

• Canva  
• Photoshop  
• Figma  
• CapCut  
• Adobe Express  

Start simple.

Focus on:
• Clear subject
• Clean text
• High contrast
• One message

---

## Should You A/B Test Thumbnails?

Yes — if you’re serious about growth.

Some advanced creators:

• Change thumbnails after 48 hours  
• Compare CTR  
• Test different expressions  
• Test different text styles  

Small improvements compound over time.

---

## Frequently Asked Questions

### What is a thumbnail in simple words?

A thumbnail is the preview image people see before clicking your video.

---

### Does thumbnail really matter?

Yes. It directly impacts click-through rate and overall growth.

---

### Can I change my thumbnail after posting?

Yes — for regular YouTube videos.

No — for Shorts (unless you re-upload).

---

### What is a good CTR for YouTube?

In the U.S. market:
6%–10% is solid.
Above 10% is strong.

---

## Final Thoughts

Your thumbnail is not decoration.

It’s strategy.

In 2026, attention spans are shorter, competition is higher, and visuals matter more than ever.

If you’re serious about growing on YouTube:

Invest time in your thumbnails.

Study what works.
Test different styles.
Stay consistent.

Because before someone hears your voice…

They see your thumbnail.

And that moment determines everything.
`},{title:"What Are Tags? Meaning, Types & SEO Importance",slug:"what-are-tags",excerpt:"Learn what tags are, how they work, and why they matter for SEO and YouTube growth in the US market.",coverImage:"/blog/tags-guide.png",category:"SEO Basics",publishDate:"15 Feb 2026",readingTime:"9 min read",content:`
# What Are Tags? Meaning, Types & SEO Importance (Complete 2026 Guide)

If you've ever uploaded a YouTube video, published a blog post, or posted on social media, you've probably seen a box labeled “Tags.”  

And maybe you wondered — do these actually matter anymore?

In 2026, tags aren't magic. But they’re not useless either. When used correctly, tags help platforms understand your content faster — especially if you're a growing creator targeting the United States market.

Let’s break this down clearly.

---

## What Are Tags? (Simple Definition)

Tags are keywords or short phrases that describe what your content is about.

Think of them as labels.

When you add tags to a YouTube video, blog post, or product page, you're giving platforms extra context about your topic.

For example, if you upload a video about starting a fitness channel, your tags might look like:

- fitness YouTube tips  
- start a fitness channel  
- workout content ideas  
- YouTube for beginners  
- fitness creator USA  

Tags help platforms understand:

- What your content covers  
- Who it’s relevant for  
- What other content it’s related to  

They support clarity.

And clarity improves discoverability.

---

## Why Tags Exist

Search engines and content platforms need structure.

When someone searches “best home workout routine,” YouTube or Google doesn’t just read your title. It analyzes:

- Title  
- Description  
- Captions  
- Engagement  
- Watch time  
- Metadata (including tags)

Tags act as supporting metadata signals.

They are not the primary ranking factor — but they reinforce context.

Especially helpful when:

- Your channel is new  
- Your topic has uncommon words  
- There are spelling variations  
- You're targeting a niche audience  

---

## Types of Tags

Not all tags are the same. Let’s break them down.

### 1. Primary Tags

These match your main keyword.

Example:
- what are tags  
- SEO tags meaning  
- tags in YouTube  

This should reflect the main search intent.

---

### 2. Long-Tail Tags

More specific keyword phrases.

Instead of:
- SEO  

Use:
- SEO tags for YouTube videos  
- how tags help ranking in USA  
- beginner SEO tips 2026  

Long-tail tags bring targeted traffic.

---

### 3. Branded Tags

These include your brand name.

Example:
- LinkGen SEO  
- LinkGen YouTube tools  

This builds topical association over time.

---

### 4. Niche-Specific Tags

Clarify your audience.

Instead of:
- marketing  

Use:
- digital marketing USA  
- small business marketing America  
- creator economy tips  

Specific beats generic every time.

---

## Do Tags Still Help SEO in 2026?

Yes — but strategically.

Tags won’t automatically rank your content.

But they do:

- Improve categorization  
- Help related content suggestions  
- Support search clarity  
- Assist with spelling variations  
- Strengthen topical alignment  

On YouTube, tags matter most when:

- Your title contains unique phrases  
- You're targeting niche terminology  
- Your channel is new  

For blogs, tags improve:

- Site structure  
- Internal linking  
- Topic grouping  

Google prioritizes:

- Content quality  
- Search intent  
- User engagement  
- Page experience  

Tags support the system. They don't replace it.

---

## How Tags Work on Different Platforms

### YouTube

Tags are hidden but exist in metadata.  
They help YouTube understand context and related content.

However, title, thumbnail, and watch time are stronger signals.

---

### Blogs (WordPress or CMS)

Tags help organize articles into categories.

For example:
- YouTube SEO  
- Instagram Growth  
- Creator Monetization  
- Social Media Tips  

This strengthens site structure and topical authority.

---

### Instagram & TikTok (Hashtags)

On social platforms, tags appear as hashtags.

These influence discoverability but don’t replace content quality.

Example:
- #YouTubeTips  
- #CreatorLife  
- #USACreator  

---

## Common Tag Mistakes

Avoid these:

### 1. Keyword Stuffing
Adding too many random tags weakens clarity.

### 2. Irrelevant Trending Tags
Don't use unrelated trending keywords.

### 3. Overly Broad Tags
Avoid generic words like:
- money  
- success  
- marketing  

Be specific.

### 4. Blindly Copying Competitors
Study them — but adapt intelligently.

---

## Smart Tag Strategy for US Creators

If you're targeting American audiences:

1. Use 1 main primary keyword  
2. Add 3–5 long-tail variations  
3. Include 1 niche clarifier (USA, American market, small business, etc.)  
4. Add 1–2 branded tags  
5. Keep everything relevant  

You don’t need 30 tags.

You need 10–15 focused ones.

---

## How Many Tags Should You Use?

For YouTube:
8–15 strong tags.

For blogs:
5–10 structured tags.

Quality always beats quantity.

---

## Final Thoughts

Tags are not dead.

They’re misunderstood.

In 2026, smart creators use tags as part of a broader SEO strategy — not as a shortcut.

If your content is strong, your title is clear, and engagement is solid, tags will reinforce your visibility.

Think of tags as signal boosters — not signal creators.

And in the competitive US market, clarity wins.

---

## Frequently Asked Questions

### Are tags still important for YouTube?
Yes. They help clarify context, especially for new channels.

### Do blog tags improve Google ranking?
Indirectly. They improve structure and topical authority.

### Should I copy competitor tags?
Study them. Adapt them. Don’t blindly copy.

### How many tags are too many?
If they become irrelevant or repetitive, you’ve added too many.
`}];e.s(["blogPosts",0,t])},48761,e=>{e.v(t=>Promise.all(["static/chunks/f3744286d9a614ea.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/3dcc93bb4829c1ba.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);