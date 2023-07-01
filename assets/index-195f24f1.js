(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah={exports:{}},El={},Ih={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),J0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),ey=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),ry=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),Gf=Symbol.iterator;function ay(e){return e===null||typeof e!="object"?null:(e=Gf&&e[Gf]||e["@@iterator"],typeof e=="function"?e:null)}var Oh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rh=Object.assign,Lh={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Oh}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dh(){}Dh.prototype=Ti.prototype;function uc(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Oh}var cc=uc.prototype=new Dh;cc.constructor=uc;Rh(cc,Ti.prototype);cc.isPureReactComponent=!0;var Xf=Array.isArray,Mh=Object.prototype.hasOwnProperty,dc={current:null},zh={key:!0,ref:!0,__self:!0,__source:!0};function $h(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Mh.call(t,r)&&!zh.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Oo,type:e,key:o,ref:l,props:i,_owner:dc.current}}function uy(e,t){return{$$typeof:Oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oo}function cy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qf=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cy(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Oo:case J0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ba(l,0):r,Xf(i)?(n="",e!=null&&(n=e.replace(qf,"$&/")+"/"),Ns(i,t,n,"",function(f){return f})):i!=null&&(fc(i)&&(i=uy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(qf,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xf(e))for(var u=0;u<e.length;u++){o=e[u];var c=r+ba(o,u);l+=Ns(o,t,n,c,i)}else if(c=ay(e),typeof c=="function")for(e=c.call(e),u=0;!(o=e.next()).done;)o=o.value,c=r+ba(o,u++),l+=Ns(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function us(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},js={transition:null},fy={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:js,ReactCurrentOwner:dc};se.Children={map:us,forEach:function(e,t,n){us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return us(e,function(){t++}),t},toArray:function(e){return us(e,function(t){return t})||[]},only:function(e){if(!fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Ti;se.Fragment=Z0;se.Profiler=ty;se.PureComponent=uc;se.StrictMode=ey;se.Suspense=oy;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rh({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=dc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)Mh.call(t,c)&&!zh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Oo,type:e.type,key:i,ref:o,props:r,_owner:l}};se.createContext=function(e){return e={$$typeof:ry,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ny,_context:e},e.Consumer=e};se.createElement=$h;se.createFactory=function(e){var t=$h.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:iy,render:e}};se.isValidElement=fc;se.lazy=function(e){return{$$typeof:ly,_payload:{_status:-1,_result:e},_init:dy}};se.memo=function(e,t){return{$$typeof:sy,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=js.transition;js.transition={};try{e()}finally{js.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return pt.current.useCallback(e,t)};se.useContext=function(e){return pt.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};se.useEffect=function(e,t){return pt.current.useEffect(e,t)};se.useId=function(){return pt.current.useId()};se.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return pt.current.useMemo(e,t)};se.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};se.useRef=function(e){return pt.current.useRef(e)};se.useState=function(e){return pt.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return pt.current.useTransition()};se.version="18.2.0";Ih.exports=se;var L=Ih.exports;const te=ac(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=L,hy=Symbol.for("react.element"),my=Symbol.for("react.fragment"),gy=Object.prototype.hasOwnProperty,vy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yy={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)gy.call(t,r)&&!yy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hy,type:e,key:o,ref:l,props:i,_owner:vy.current}}El.Fragment=my;El.jsx=Fh;El.jsxs=Fh;Ah.exports=El;var h=Ah.exports,tu={},Hh={exports:{}},At={},Uh={exports:{}},Bh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,K){var C=$.length;$.push(K);e:for(;0<C;){var ne=C-1>>>1,de=$[ne];if(0<i(de,K))$[ne]=K,$[C]=de,C=ne;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],C=$.pop();if(C!==K){$[0]=C;e:for(var ne=0,de=$.length,ze=de>>>1;ne<ze;){var Ae=2*(ne+1)-1,ot=$[Ae],Ee=Ae+1,mt=$[Ee];if(0>i(ot,C))Ee<de&&0>i(mt,ot)?($[ne]=mt,$[Ee]=C,ne=Ee):($[ne]=ot,$[Ae]=C,ne=Ae);else if(Ee<de&&0>i(mt,C))$[ne]=mt,$[Ee]=C,ne=Ee;else break e}}return K}function i($,K){var C=$.sortIndex-K.sortIndex;return C!==0?C:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var c=[],f=[],y=1,v=null,g=3,x=!1,S=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _($){for(var K=n(f);K!==null;){if(K.callback===null)r(f);else if(K.startTime<=$)r(f),K.sortIndex=K.expirationTime,t(c,K);else break;K=n(f)}}function P($){if(k=!1,_($),!S)if(n(c)!==null)S=!0,rt(N);else{var K=n(f);K!==null&&it(P,K.startTime-$)}}function N($,K){S=!1,k&&(k=!1,w(z),z=-1),x=!0;var C=g;try{for(_(K),v=n(c);v!==null&&(!(v.expirationTime>K)||$&&!ue());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,g=v.priorityLevel;var de=ne(v.expirationTime<=K);K=e.unstable_now(),typeof de=="function"?v.callback=de:v===n(c)&&r(c),_(K)}else r(c);v=n(c)}if(v!==null)var ze=!0;else{var Ae=n(f);Ae!==null&&it(P,Ae.startTime-K),ze=!1}return ze}finally{v=null,g=C,x=!1}}var O=!1,j=null,z=-1,q=5,B=-1;function ue(){return!(e.unstable_now()-B<q)}function Ce(){if(j!==null){var $=e.unstable_now();B=$;var K=!0;try{K=j(!0,$)}finally{K?Pe():(O=!1,j=null)}}else O=!1}var Pe;if(typeof m=="function")Pe=function(){m(Ce)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Je=Le.port2;Le.port1.onmessage=Ce,Pe=function(){Je.postMessage(null)}}else Pe=function(){A(Ce,0)};function rt($){j=$,O||(O=!0,Pe())}function it($,K){z=A(function(){$(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,rt(N))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var C=g;g=K;try{return $()}finally{g=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var C=g;g=$;try{return K()}finally{g=C}},e.unstable_scheduleCallback=function($,K,C){var ne=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?ne+C:ne):C=ne,$){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=C+de,$={id:y++,callback:K,priorityLevel:$,startTime:C,expirationTime:de,sortIndex:-1},C>ne?($.sortIndex=C,t(f,$),n(c)===null&&$===n(f)&&(k?(w(z),z=-1):k=!0,it(P,C-ne))):($.sortIndex=de,t(c,$),S||x||(S=!0,rt(N))),$},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function($){var K=g;return function(){var C=g;g=K;try{return $.apply(this,arguments)}finally{g=C}}}})(Bh);Uh.exports=Bh;var wy=Uh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=L,jt=wy;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vh=new Set,fo={};function Ir(e,t){vi(e,t),vi(e+"Capture",t)}function vi(e,t){for(fo[e]=t,e=0;e<t.length;e++)Vh.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},Zf={};function _y(e){return nu.call(Zf,e)?!0:nu.call(Jf,e)?!1:xy.test(e)?Zf[e]=!0:(Jf[e]=!0,!1)}function Sy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function by(e,t,n,r){if(t===null||typeof t>"u"||Sy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,hc);qe[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,hc);qe[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,hc);qe[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function mc(e,t,n,r){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(by(t,n,i,r)&&(n=null),r||i===null?_y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tn=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cs=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Kh=Symbol.for("react.provider"),Qh=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Yh=Symbol.for("react.offscreen"),ep=Symbol.iterator;function Hi(e){return e===null||typeof e!="object"?null:(e=ep&&e[ep]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Ea;function Xi(e){if(Ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ea=t&&t[1]||""}return`
`+Ea+e}var ka=!1;function Ca(e,t){if(!e||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=u);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xi(e):""}function Ey(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case qr:return"Portal";case ru:return"Profiler";case gc:return"StrictMode";case iu:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qh:return(e.displayName||"Context")+".Consumer";case Kh:return(e._context.displayName||"Context")+".Provider";case vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yc:return t=e.displayName||null,t!==null?t:su(e.type)||"Memo";case On:t=e._payload,e=e._init;try{return su(e(t))}catch{}}return null}function ky(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(t);case 8:return t===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cy(e){var t=Gh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=Cy(e))}function Xh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qh(e,t){t=t.checked,t!=null&&mc(e,"checked",t,!1)}function au(e,t){qh(e,t);var n=qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uu(e,t.type,n):t.hasOwnProperty("defaultValue")&&uu(e,t.type,qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function np(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uu(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qi=Array.isArray;function ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(qi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qn(n)}}function Jh(e,t){var n=qn(t.value),r=qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ip(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fs,em=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fs=fs||document.createElement("div"),fs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Py.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function tm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function nm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ty=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(e,t){if(t){if(Ty[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mu=null,di=null,fi=null;function op(e){if(e=Do(e)){if(typeof mu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Nl(t),mu(e.stateNode,e.type,t))}}function rm(e){di?fi?fi.push(e):fi=[e]:di=e}function im(){if(di){var e=di,t=fi;if(fi=di=null,op(e),t)for(e=0;e<t.length;e++)op(t[e])}}function om(e,t){return e(t)}function sm(){}var Pa=!1;function lm(e,t,n){if(Pa)return e(t,n);Pa=!0;try{return om(e,t,n)}finally{Pa=!1,(di!==null||fi!==null)&&(sm(),im())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var gu=!1;if(En)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{gu=!1}function Ny(e,t,n,r,i,o,l,u,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(y){this.onError(y)}}var to=!1,Ks=null,Qs=!1,vu=null,jy={onError:function(e){to=!0,Ks=e}};function Ay(e,t,n,r,i,o,l,u,c){to=!1,Ks=null,Ny.apply(jy,arguments)}function Iy(e,t,n,r,i,o,l,u,c){if(Ay.apply(this,arguments),to){if(to){var f=Ks;to=!1,Ks=null}else throw Error(R(198));Qs||(Qs=!0,vu=f)}}function Or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function am(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sp(e){if(Or(e)!==e)throw Error(R(188))}function Oy(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sp(i),e;if(o===r)return sp(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function um(e){return e=Oy(e),e!==null?cm(e):null}function cm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cm(e);if(t!==null)return t;e=e.sibling}return null}var dm=jt.unstable_scheduleCallback,lp=jt.unstable_cancelCallback,Ry=jt.unstable_shouldYield,Ly=jt.unstable_requestPaint,Me=jt.unstable_now,Dy=jt.unstable_getCurrentPriorityLevel,xc=jt.unstable_ImmediatePriority,fm=jt.unstable_UserBlockingPriority,Ys=jt.unstable_NormalPriority,My=jt.unstable_LowPriority,pm=jt.unstable_IdlePriority,kl=null,hn=null;function zy(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Hy,$y=Math.log,Fy=Math.LN2;function Hy(e){return e>>>=0,e===0?32:31-($y(e)/Fy|0)|0}var ps=64,hs=4194304;function Ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Ji(u):(o&=l,o!==0&&(r=Ji(o)))}else l=n&~i,l!==0?r=Ji(l):o!==0&&(r=Ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Zt(t),i=1<<n,r|=e[n],t&=~i;return r}function Uy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function By(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Zt(o),u=1<<l,c=i[l];c===-1?(!(u&n)||u&r)&&(i[l]=Uy(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hm(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function Ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ro(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function Wy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _c(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function mm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gm,Sc,vm,ym,wm,wu=!1,ms=[],Hn=null,Un=null,Bn=null,mo=new Map,go=new Map,Dn=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(t.pointerId)}}function Bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Do(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ky(e,t,n,r,i){switch(t){case"focusin":return Hn=Bi(Hn,e,t,n,r,i),!0;case"dragenter":return Un=Bi(Un,e,t,n,r,i),!0;case"mouseover":return Bn=Bi(Bn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mo.set(o,Bi(mo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,go.set(o,Bi(go.get(o)||null,e,t,n,r,i)),!0}return!1}function xm(e){var t=gr(e.target);if(t!==null){var n=Or(t);if(n!==null){if(t=n.tag,t===13){if(t=am(n),t!==null){e.blockedOn=t,wm(e.priority,function(){vm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hu=r,n.target.dispatchEvent(r),hu=null}else return t=Do(n),t!==null&&Sc(t),e.blockedOn=n,!1;t.shift()}return!0}function up(e,t,n){As(e)&&n.delete(t)}function Qy(){wu=!1,Hn!==null&&As(Hn)&&(Hn=null),Un!==null&&As(Un)&&(Un=null),Bn!==null&&As(Bn)&&(Bn=null),mo.forEach(up),go.forEach(up)}function Wi(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,Qy)))}function vo(e){function t(i){return Wi(i,e)}if(0<ms.length){Wi(ms[0],e);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hn!==null&&Wi(Hn,e),Un!==null&&Wi(Un,e),Bn!==null&&Wi(Bn,e),mo.forEach(t),go.forEach(t),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&Dn.shift()}var pi=Tn.ReactCurrentBatchConfig,Xs=!0;function Yy(e,t,n,r){var i=me,o=pi.transition;pi.transition=null;try{me=1,bc(e,t,n,r)}finally{me=i,pi.transition=o}}function Gy(e,t,n,r){var i=me,o=pi.transition;pi.transition=null;try{me=4,bc(e,t,n,r)}finally{me=i,pi.transition=o}}function bc(e,t,n,r){if(Xs){var i=xu(e,t,n,r);if(i===null)za(e,t,r,qs,n),ap(e,r);else if(Ky(i,e,t,n,r))r.stopPropagation();else if(ap(e,r),t&4&&-1<Vy.indexOf(e)){for(;i!==null;){var o=Do(i);if(o!==null&&gm(o),o=xu(e,t,n,r),o===null&&za(e,t,r,qs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var qs=null;function xu(e,t,n,r){if(qs=null,e=wc(r),e=gr(e),e!==null)if(t=Or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=am(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function _m(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case xc:return 1;case fm:return 4;case Ys:case My:return 16;case pm:return 536870912;default:return 16}default:return 16}}var zn=null,Ec=null,Is=null;function Sm(){if(Is)return Is;var e,t=Ec,n=t.length,r,i="value"in zn?zn.value:zn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Is=i.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function cp(){return!1}function It(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:cp,this.isPropagationStopped=cp,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=It(Ni),Lo=je({},Ni,{view:0,detail:0}),Xy=It(Lo),Na,ja,Vi,Cl=je({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vi&&(Vi&&e.type==="mousemove"?(Na=e.screenX-Vi.screenX,ja=e.screenY-Vi.screenY):ja=Na=0,Vi=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),dp=It(Cl),qy=je({},Cl,{dataTransfer:0}),Jy=It(qy),Zy=je({},Lo,{relatedTarget:0}),Aa=It(Zy),e1=je({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=It(e1),n1=je({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r1=It(n1),i1=je({},Ni,{data:0}),fp=It(i1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l1[e])?!!t[e]:!1}function Cc(){return a1}var u1=je({},Lo,{key:function(e){if(e.key){var t=o1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c1=It(u1),d1=je({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=It(d1),f1=je({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),p1=It(f1),h1=je({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=It(h1),g1=je({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=It(g1),y1=[9,13,27,32],Pc=En&&"CompositionEvent"in window,no=null;En&&"documentMode"in document&&(no=document.documentMode);var w1=En&&"TextEvent"in window&&!no,bm=En&&(!Pc||no&&8<no&&11>=no),hp=String.fromCharCode(32),mp=!1;function Em(e,t){switch(e){case"keyup":return y1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function x1(e,t){switch(e){case"compositionend":return km(t);case"keypress":return t.which!==32?null:(mp=!0,hp);case"textInput":return e=t.data,e===hp&&mp?null:e;default:return null}}function _1(e,t){if(Zr)return e==="compositionend"||!Pc&&Em(e,t)?(e=Sm(),Is=Ec=zn=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bm&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function Cm(e,t,n,r){rm(r),t=Js(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,yo=null;function b1(e){Mm(e,0)}function Pl(e){var t=ni(e);if(Xh(t))return e}function E1(e,t){if(e==="change")return t}var Pm=!1;if(En){var Ia;if(En){var Oa="oninput"in document;if(!Oa){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Oa=typeof vp.oninput=="function"}Ia=Oa}else Ia=!1;Pm=Ia&&(!document.documentMode||9<document.documentMode)}function yp(){ro&&(ro.detachEvent("onpropertychange",Tm),yo=ro=null)}function Tm(e){if(e.propertyName==="value"&&Pl(yo)){var t=[];Cm(t,yo,e,wc(e)),lm(b1,t)}}function k1(e,t,n){e==="focusin"?(yp(),ro=t,yo=n,ro.attachEvent("onpropertychange",Tm)):e==="focusout"&&yp()}function C1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(yo)}function P1(e,t){if(e==="click")return Pl(t)}function T1(e,t){if(e==="input"||e==="change")return Pl(t)}function N1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:N1;function wo(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(t,i)||!nn(e[i],t[i]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,t){var n=wp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wp(n)}}function Nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jm(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j1(e){var t=jm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xp(n,o);var l=xp(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A1=En&&"documentMode"in document&&11>=document.documentMode,ei=null,_u=null,io=null,Su=!1;function _p(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||ei==null||ei!==Vs(r)||(r=ei,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&wo(io,r)||(io=r,r=Js(_u,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ti={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},Ra={},Am={};En&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Tl(e){if(Ra[e])return Ra[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Am)return Ra[e]=t[n];return e}var Im=Tl("animationend"),Om=Tl("animationiteration"),Rm=Tl("animationstart"),Lm=Tl("transitionend"),Dm=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,t){Dm.set(e,t),Ir(t,[e])}for(var La=0;La<Sp.length;La++){var Da=Sp[La],I1=Da.toLowerCase(),O1=Da[0].toUpperCase()+Da.slice(1);Zn(I1,"on"+O1)}Zn(Im,"onAnimationEnd");Zn(Om,"onAnimationIteration");Zn(Rm,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(Lm,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function bp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iy(r,t,void 0,e),e.currentTarget=null}function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;bp(i,u,f),o=c}else for(l=0;l<r.length;l++){if(u=r[l],c=u.instance,f=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;bp(i,u,f),o=c}}}if(Qs)throw e=vu,Qs=!1,vu=null,e}function _e(e,t){var n=t[Pu];n===void 0&&(n=t[Pu]=new Set);var r=e+"__bubble";n.has(r)||(zm(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),zm(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[ys]){e[ys]=!0,Vh.forEach(function(n){n!=="selectionchange"&&(R1.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,Ma("selectionchange",!1,t))}}function zm(e,t,n,r){switch(_m(t)){case 1:var i=Yy;break;case 4:i=Gy;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function za(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;u!==null;){if(l=gr(u),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}u=u.parentNode}}r=r.return}lm(function(){var f=o,y=wc(n),v=[];e:{var g=Dm.get(e);if(g!==void 0){var x=kc,S=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":x=c1;break;case"focusin":S="focus",x=Aa;break;case"focusout":S="blur",x=Aa;break;case"beforeblur":case"afterblur":x=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=p1;break;case Im:case Om:case Rm:x=t1;break;case Lm:x=m1;break;case"scroll":x=Xy;break;case"wheel":x=v1;break;case"copy":case"cut":case"paste":x=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=pp}var k=(t&4)!==0,A=!k&&e==="scroll",w=k?g!==null?g+"Capture":null:g;k=[];for(var m=f,_;m!==null;){_=m;var P=_.stateNode;if(_.tag===5&&P!==null&&(_=P,w!==null&&(P=ho(m,w),P!=null&&k.push(_o(m,P,_)))),A)break;m=m.return}0<k.length&&(g=new x(g,S,null,n,y),v.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==hu&&(S=n.relatedTarget||n.fromElement)&&(gr(S)||S[kn]))break e;if((x||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=f,S=S?gr(S):null,S!==null&&(A=Or(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=f),x!==S)){if(k=dp,P="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=pp,P="onPointerLeave",w="onPointerEnter",m="pointer"),A=x==null?g:ni(x),_=S==null?g:ni(S),g=new k(P,m+"leave",x,n,y),g.target=A,g.relatedTarget=_,P=null,gr(y)===f&&(k=new k(w,m+"enter",S,n,y),k.target=_,k.relatedTarget=A,P=k),A=P,x&&S)t:{for(k=x,w=S,m=0,_=k;_;_=Gr(_))m++;for(_=0,P=w;P;P=Gr(P))_++;for(;0<m-_;)k=Gr(k),m--;for(;0<_-m;)w=Gr(w),_--;for(;m--;){if(k===w||w!==null&&k===w.alternate)break t;k=Gr(k),w=Gr(w)}k=null}else k=null;x!==null&&Ep(v,g,x,k,!1),S!==null&&A!==null&&Ep(v,A,S,k,!0)}}e:{if(g=f?ni(f):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var N=E1;else if(gp(g))if(Pm)N=T1;else{N=C1;var O=k1}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=P1);if(N&&(N=N(e,f))){Cm(v,N,n,y);break e}O&&O(e,g,f),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&uu(g,"number",g.value)}switch(O=f?ni(f):window,e){case"focusin":(gp(O)||O.contentEditable==="true")&&(ei=O,_u=f,io=null);break;case"focusout":io=_u=ei=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,_p(v,n,y);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":_p(v,n,y)}var j;if(Pc)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Zr?Em(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(bm&&n.locale!=="ko"&&(Zr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Zr&&(j=Sm()):(zn=y,Ec="value"in zn?zn.value:zn.textContent,Zr=!0)),O=Js(f,z),0<O.length&&(z=new fp(z,e,null,n,y),v.push({event:z,listeners:O}),j?z.data=j:(j=km(n),j!==null&&(z.data=j)))),(j=w1?x1(e,n):_1(e,n))&&(f=Js(f,"onBeforeInput"),0<f.length&&(y=new fp("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:f}),y.data=j))}Mm(v,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ho(e,n),o!=null&&r.unshift(_o(e,o,i)),o=ho(e,t),o!=null&&r.push(_o(e,o,i))),e=e.return}return r}function Gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ep(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,i?(c=ho(n,o),c!=null&&l.unshift(_o(n,c,u))):i||(c=ho(n,o),c!=null&&l.push(_o(n,c,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var L1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function kp(e){return(typeof e=="string"?e:""+e).replace(L1,`
`).replace(D1,"")}function ws(e,t,n){if(t=kp(t),kp(e)!==t&&n)throw Error(R(425))}function Zs(){}var bu=null,Eu=null;function ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(e){return Cp.resolve(null).then(e).catch($1)}:Cu;function $1(e){setTimeout(function(){throw e})}function $a(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),pn="__reactFiber$"+ji,So="__reactProps$"+ji,kn="__reactContainer$"+ji,Pu="__reactEvents$"+ji,F1="__reactListeners$"+ji,H1="__reactHandles$"+ji;function gr(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pp(e);e!==null;){if(n=e[pn])return n;e=Pp(e)}return t}e=n,n=e.parentNode}return null}function Do(e){return e=e[pn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Nl(e){return e[So]||null}var Tu=[],ri=-1;function er(e){return{current:e}}function be(e){0>ri||(e.current=Tu[ri],Tu[ri]=null,ri--)}function xe(e,t){ri++,Tu[ri]=e.current,e.current=t}var Jn={},nt=er(Jn),yt=er(!1),Er=Jn;function yi(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return e=e.childContextTypes,e!=null}function el(){be(yt),be(nt)}function Tp(e,t,n){if(nt.current!==Jn)throw Error(R(168));xe(nt,t),xe(yt,n)}function $m(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,ky(e)||"Unknown",i));return je({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Er=nt.current,xe(nt,e),xe(yt,yt.current),!0}function Np(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=$m(e,t,Er),r.__reactInternalMemoizedMergedChildContext=e,be(yt),be(nt),xe(nt,e)):be(yt),xe(yt,n)}var wn=null,jl=!1,Fa=!1;function Fm(e){wn===null?wn=[e]:wn.push(e)}function U1(e){jl=!0,Fm(e)}function tr(){if(!Fa&&wn!==null){Fa=!0;var e=0,t=me;try{var n=wn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wn=null,jl=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),dm(xc,tr),i}finally{me=t,Fa=!1}}return null}var ii=[],oi=0,nl=null,rl=0,zt=[],$t=0,kr=null,_n=1,Sn="";function fr(e,t){ii[oi++]=rl,ii[oi++]=nl,nl=e,rl=t}function Hm(e,t,n){zt[$t++]=_n,zt[$t++]=Sn,zt[$t++]=kr,kr=e;var r=_n;e=Sn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var o=32-Zt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,_n=1<<32-Zt(t)+i|n<<i|r,Sn=o+e}else _n=1<<o|n<<i|r,Sn=e}function Nc(e){e.return!==null&&(fr(e,1),Hm(e,1,0))}function jc(e){for(;e===nl;)nl=ii[--oi],ii[oi]=null,rl=ii[--oi],ii[oi]=null;for(;e===kr;)kr=zt[--$t],zt[$t]=null,Sn=zt[--$t],zt[$t]=null,_n=zt[--$t],zt[$t]=null}var Nt=null,Tt=null,ke=!1,qt=null;function Um(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,Tt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:_n,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,Tt=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ju(e){if(ke){var t=Tt;if(t){var n=t;if(!jp(e,t)){if(Nu(e))throw Error(R(418));t=Wn(n.nextSibling);var r=Nt;t&&jp(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,ke=!1,Nt=e)}}else{if(Nu(e))throw Error(R(418));e.flags=e.flags&-4097|2,ke=!1,Nt=e}}}function Ap(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function xs(e){if(e!==Nt)return!1;if(!ke)return Ap(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ku(e.type,e.memoizedProps)),t&&(t=Tt)){if(Nu(e))throw Bm(),Error(R(418));for(;t;)Um(e,t),t=Wn(t.nextSibling)}if(Ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Nt?Wn(e.stateNode.nextSibling):null;return!0}function Bm(){for(var e=Tt;e;)e=Wn(e.nextSibling)}function wi(){Tt=Nt=null,ke=!1}function Ac(e){qt===null?qt=[e]:qt.push(e)}var B1=Tn.ReactCurrentBatchConfig;function Gt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var il=er(null),ol=null,si=null,Ic=null;function Oc(){Ic=si=ol=null}function Rc(e){var t=il.current;be(il),e._currentValue=t}function Au(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hi(e,t){ol=e,Ic=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Ic!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(ol===null)throw Error(R(308));si=e,ol.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var vr=null;function Lc(e){vr===null?vr=[e]:vr.push(e)}function Wm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Cn(e,n)}return i=r.interleaved,i===null?(t.next=t,Lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Cn(e,n)}function Rs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}function Ip(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,f=c.next;c.next=null,l===null?o=f:l.next=f,l=c;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==l&&(u===null?y.firstBaseUpdate=f:u.next=f,y.lastBaseUpdate=c))}if(o!==null){var v=i.baseState;l=0,y=f=c=null,u=o;do{var g=u.lane,x=u.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,k=u;switch(g=t,x=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){v=S.call(x,v,g);break e}v=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,g=typeof S=="function"?S.call(x,v,g):S,g==null)break e;v=je({},v,g);break e;case 2:Rn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else x={eventTime:x,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(f=y=x,c=v):y=y.next=x,l|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(y===null&&(c=v),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pr|=l,e.lanes=l,e.memoizedState=v}}function Op(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Km=new Wh.Component().refs;function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=Qn(e),o=bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,i),t!==null&&(en(t,e,i,r),Rs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=Qn(e),o=bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vn(e,o,i),t!==null&&(en(t,e,i,r),Rs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=Qn(e),i=bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vn(e,i,r),t!==null&&(en(t,e,r,n),Rs(t,e,r))}};function Rp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!wo(n,r)||!wo(i,o):!0}function Qm(e,t,n){var r=!1,i=Jn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ut(o):(i=wt(t)?Er:nt.current,r=t.contextTypes,o=(r=r!=null)?yi(e,i):Jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Lp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function Ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Km,Dc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ut(o):(o=wt(t)?Er:nt.current,i.context=yi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Iu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Al.enqueueReplaceState(i,i.state,null),sl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;u===Km&&(u=i.refs={}),l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function _s(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dp(e){var t=e._init;return t(e._payload)}function Ym(e){function t(w,m){if(e){var _=w.deletions;_===null?(w.deletions=[m],w.flags|=16):_.push(m)}}function n(w,m){if(!e)return null;for(;m!==null;)t(w,m),m=m.sibling;return null}function r(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function i(w,m){return w=Yn(w,m),w.index=0,w.sibling=null,w}function o(w,m,_){return w.index=_,e?(_=w.alternate,_!==null?(_=_.index,_<m?(w.flags|=2,m):_):(w.flags|=2,m)):(w.flags|=1048576,m)}function l(w){return e&&w.alternate===null&&(w.flags|=2),w}function u(w,m,_,P){return m===null||m.tag!==6?(m=Qa(_,w.mode,P),m.return=w,m):(m=i(m,_),m.return=w,m)}function c(w,m,_,P){var N=_.type;return N===Jr?y(w,m,_.props.children,P,_.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===On&&Dp(N)===m.type)?(P=i(m,_.props),P.ref=Ki(w,m,_),P.return=w,P):(P=Fs(_.type,_.key,_.props,null,w.mode,P),P.ref=Ki(w,m,_),P.return=w,P)}function f(w,m,_,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Ya(_,w.mode,P),m.return=w,m):(m=i(m,_.children||[]),m.return=w,m)}function y(w,m,_,P,N){return m===null||m.tag!==7?(m=Sr(_,w.mode,P,N),m.return=w,m):(m=i(m,_),m.return=w,m)}function v(w,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Qa(""+m,w.mode,_),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cs:return _=Fs(m.type,m.key,m.props,null,w.mode,_),_.ref=Ki(w,null,m),_.return=w,_;case qr:return m=Ya(m,w.mode,_),m.return=w,m;case On:var P=m._init;return v(w,P(m._payload),_)}if(qi(m)||Hi(m))return m=Sr(m,w.mode,_,null),m.return=w,m;_s(w,m)}return null}function g(w,m,_,P){var N=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return N!==null?null:u(w,m,""+_,P);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cs:return _.key===N?c(w,m,_,P):null;case qr:return _.key===N?f(w,m,_,P):null;case On:return N=_._init,g(w,m,N(_._payload),P)}if(qi(_)||Hi(_))return N!==null?null:y(w,m,_,P,null);_s(w,_)}return null}function x(w,m,_,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return w=w.get(_)||null,u(m,w,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case cs:return w=w.get(P.key===null?_:P.key)||null,c(m,w,P,N);case qr:return w=w.get(P.key===null?_:P.key)||null,f(m,w,P,N);case On:var O=P._init;return x(w,m,_,O(P._payload),N)}if(qi(P)||Hi(P))return w=w.get(_)||null,y(m,w,P,N,null);_s(m,P)}return null}function S(w,m,_,P){for(var N=null,O=null,j=m,z=m=0,q=null;j!==null&&z<_.length;z++){j.index>z?(q=j,j=null):q=j.sibling;var B=g(w,j,_[z],P);if(B===null){j===null&&(j=q);break}e&&j&&B.alternate===null&&t(w,j),m=o(B,m,z),O===null?N=B:O.sibling=B,O=B,j=q}if(z===_.length)return n(w,j),ke&&fr(w,z),N;if(j===null){for(;z<_.length;z++)j=v(w,_[z],P),j!==null&&(m=o(j,m,z),O===null?N=j:O.sibling=j,O=j);return ke&&fr(w,z),N}for(j=r(w,j);z<_.length;z++)q=x(j,w,z,_[z],P),q!==null&&(e&&q.alternate!==null&&j.delete(q.key===null?z:q.key),m=o(q,m,z),O===null?N=q:O.sibling=q,O=q);return e&&j.forEach(function(ue){return t(w,ue)}),ke&&fr(w,z),N}function k(w,m,_,P){var N=Hi(_);if(typeof N!="function")throw Error(R(150));if(_=N.call(_),_==null)throw Error(R(151));for(var O=N=null,j=m,z=m=0,q=null,B=_.next();j!==null&&!B.done;z++,B=_.next()){j.index>z?(q=j,j=null):q=j.sibling;var ue=g(w,j,B.value,P);if(ue===null){j===null&&(j=q);break}e&&j&&ue.alternate===null&&t(w,j),m=o(ue,m,z),O===null?N=ue:O.sibling=ue,O=ue,j=q}if(B.done)return n(w,j),ke&&fr(w,z),N;if(j===null){for(;!B.done;z++,B=_.next())B=v(w,B.value,P),B!==null&&(m=o(B,m,z),O===null?N=B:O.sibling=B,O=B);return ke&&fr(w,z),N}for(j=r(w,j);!B.done;z++,B=_.next())B=x(j,w,z,B.value,P),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?z:B.key),m=o(B,m,z),O===null?N=B:O.sibling=B,O=B);return e&&j.forEach(function(Ce){return t(w,Ce)}),ke&&fr(w,z),N}function A(w,m,_,P){if(typeof _=="object"&&_!==null&&_.type===Jr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case cs:e:{for(var N=_.key,O=m;O!==null;){if(O.key===N){if(N=_.type,N===Jr){if(O.tag===7){n(w,O.sibling),m=i(O,_.props.children),m.return=w,w=m;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===On&&Dp(N)===O.type){n(w,O.sibling),m=i(O,_.props),m.ref=Ki(w,O,_),m.return=w,w=m;break e}n(w,O);break}else t(w,O);O=O.sibling}_.type===Jr?(m=Sr(_.props.children,w.mode,P,_.key),m.return=w,w=m):(P=Fs(_.type,_.key,_.props,null,w.mode,P),P.ref=Ki(w,m,_),P.return=w,w=P)}return l(w);case qr:e:{for(O=_.key;m!==null;){if(m.key===O)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(w,m.sibling),m=i(m,_.children||[]),m.return=w,w=m;break e}else{n(w,m);break}else t(w,m);m=m.sibling}m=Ya(_,w.mode,P),m.return=w,w=m}return l(w);case On:return O=_._init,A(w,m,O(_._payload),P)}if(qi(_))return S(w,m,_,P);if(Hi(_))return k(w,m,_,P);_s(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(w,m.sibling),m=i(m,_),m.return=w,w=m):(n(w,m),m=Qa(_,w.mode,P),m.return=w,w=m),l(w)):n(w,m)}return A}var xi=Ym(!0),Gm=Ym(!1),Mo={},mn=er(Mo),bo=er(Mo),Eo=er(Mo);function yr(e){if(e===Mo)throw Error(R(174));return e}function Mc(e,t){switch(xe(Eo,t),xe(bo,e),xe(mn,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:du(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=du(t,e)}be(mn),xe(mn,t)}function _i(){be(mn),be(bo),be(Eo)}function Xm(e){yr(Eo.current);var t=yr(mn.current),n=du(t,e.type);t!==n&&(xe(bo,e),xe(mn,n))}function zc(e){bo.current===e&&(be(mn),be(bo))}var Te=er(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function $c(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var Ls=Tn.ReactCurrentDispatcher,Ua=Tn.ReactCurrentBatchConfig,Cr=0,Ne=null,Ue=null,Ve=null,al=!1,oo=!1,ko=0,W1=0;function Ze(){throw Error(R(321))}function Fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,o){if(Cr=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ls.current=e===null||e.memoizedState===null?Y1:G1,e=n(r,i),oo){o=0;do{if(oo=!1,ko=0,25<=o)throw Error(R(301));o+=1,Ve=Ue=null,t.updateQueue=null,Ls.current=X1,e=n(r,i)}while(oo)}if(Ls.current=ul,t=Ue!==null&&Ue.next!==null,Cr=0,Ve=Ue=Ne=null,al=!1,t)throw Error(R(300));return e}function Uc(){var e=ko!==0;return ko=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ne.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Bt(){if(Ue===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ve===null?Ne.memoizedState:Ve.next;if(t!==null)Ve=t,Ue=e;else{if(e===null)throw Error(R(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?Ne.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Co(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=Bt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,c=null,f=o;do{var y=f.lane;if((Cr&y)===y)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:y,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=v,l=r):c=c.next=v,Ne.lanes|=y,Pr|=y}f=f.next}while(f!==null&&f!==o);c===null?l=r:c.next=u,nn(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,Pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wa(e){var t=Bt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nn(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qm(){}function Jm(e,t){var n=Ne,r=Bt(),i=t(),o=!nn(r.memoizedState,i);if(o&&(r.memoizedState=i,vt=!0),r=r.queue,Bc(tg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Po(9,eg.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(R(349));Cr&30||Zm(n,t,i)}return i}function Zm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eg(e,t,n,r){t.value=n,t.getSnapshot=r,ng(t)&&rg(e)}function tg(e,t,n){return n(function(){ng(t)&&rg(e)})}function ng(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function rg(e){var t=Cn(e,1);t!==null&&en(t,e,1,-1)}function Mp(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=Q1.bind(null,Ne,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ig(){return Bt().memoizedState}function Ds(e,t,n,r){var i=fn();Ne.flags|=e,i.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var i=Bt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var l=Ue.memoizedState;if(o=l.destroy,r!==null&&Fc(r,l.deps)){i.memoizedState=Po(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=Po(1|t,n,o,r)}function zp(e,t){return Ds(8390656,8,e,t)}function Bc(e,t){return Il(2048,8,e,t)}function og(e,t){return Il(4,2,e,t)}function sg(e,t){return Il(4,4,e,t)}function lg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ag(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,lg.bind(null,t,e),n)}function Wc(){}function ug(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cg(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dg(e,t,n){return Cr&21?(nn(n,t)||(n=hm(),Ne.lanes|=n,Pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function V1(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Ua.transition;Ua.transition={};try{e(!1),t()}finally{me=n,Ua.transition=r}}function fg(){return Bt().memoizedState}function K1(e,t,n){var r=Qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pg(e))hg(t,n);else if(n=Wm(e,t,n,r),n!==null){var i=ft();en(n,e,r,i),mg(n,t,r)}}function Q1(e,t,n){var r=Qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pg(e))hg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,nn(u,l)){var c=t.interleaved;c===null?(i.next=i,Lc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Wm(e,t,i,r),n!==null&&(i=ft(),en(n,e,r,i),mg(n,t,r))}}function pg(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function hg(e,t){oo=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_c(e,n)}}var ul={readContext:Ut,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Y1={readContext:Ut,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:zp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4194308,4,lg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=K1.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Mp,useDebugValue:Wc,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Mp(!1),t=e[0];return e=V1.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=fn();if(ke){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ye===null)throw Error(R(349));Cr&30||Zm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,zp(tg.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,eg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=fn(),t=Ye.identifierPrefix;if(ke){var n=Sn,r=_n;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G1={readContext:Ut,useCallback:ug,useContext:Ut,useEffect:Bc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:sg,useMemo:cg,useReducer:Ba,useRef:ig,useState:function(){return Ba(Co)},useDebugValue:Wc,useDeferredValue:function(e){var t=Bt();return dg(t,Ue.memoizedState,e)},useTransition:function(){var e=Ba(Co)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:qm,useSyncExternalStore:Jm,useId:fg,unstable_isNewReconciler:!1},X1={readContext:Ut,useCallback:ug,useContext:Ut,useEffect:Bc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:sg,useMemo:cg,useReducer:Wa,useRef:ig,useState:function(){return Wa(Co)},useDebugValue:Wc,useDeferredValue:function(e){var t=Bt();return Ue===null?t.memoizedState=e:dg(t,Ue.memoizedState,e)},useTransition:function(){var e=Wa(Co)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:qm,useSyncExternalStore:Jm,useId:fg,unstable_isNewReconciler:!1};function Si(e,t){try{var n="",r=t;do n+=Ey(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q1=typeof WeakMap=="function"?WeakMap:Map;function gg(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,Wu=r),Ru(e,t)},n}function vg(e,t,n){n=bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new q1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dw.bind(null,e,t,n),t.then(e,e))}function Fp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,Vn(n,t,1))),n.lanes|=1),e)}var J1=Tn.ReactCurrentOwner,vt=!1;function dt(e,t,n,r){t.child=e===null?Gm(t,null,n,r):xi(t,e.child,n,r)}function Up(e,t,n,r,i){n=n.render;var o=t.ref;return hi(t,i),r=Hc(e,t,n,r,o,i),n=Uc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(ke&&n&&Nc(t),t.flags|=1,dt(e,t,r,i),t.child)}function Bp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Jc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yg(e,t,o,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(l,r)&&e.ref===t.ref)return Pn(e,t,i)}return t.flags|=1,e=Yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function yg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wo(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Pn(e,t,i)}return Lu(e,t,n,r,i)}function wg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(ai,kt),kt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(ai,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(ai,kt),kt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(ai,kt),kt|=r;return dt(e,t,i,n),t.child}function xg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lu(e,t,n,r,i){var o=wt(n)?Er:nt.current;return o=yi(t,o),hi(t,i),n=Hc(e,t,n,r,o,i),r=Uc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(ke&&r&&Nc(t),t.flags|=1,dt(e,t,n,i),t.child)}function Wp(e,t,n,r,i){if(wt(n)){var o=!0;tl(t)}else o=!1;if(hi(t,i),t.stateNode===null)Ms(e,t),Qm(t,n,r),Ou(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var c=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ut(f):(f=wt(n)?Er:nt.current,f=yi(t,f));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||c!==f)&&Lp(t,l,r,f),Rn=!1;var g=t.memoizedState;l.state=g,sl(t,r,l,i),c=t.memoizedState,u!==r||g!==c||yt.current||Rn?(typeof y=="function"&&(Iu(t,n,y,r),c=t.memoizedState),(u=Rn||Rp(t,n,u,r,g,c,f))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vm(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:Gt(t.type,u),l.props=f,v=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=wt(n)?Er:nt.current,c=yi(t,c));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==v||g!==c)&&Lp(t,l,r,c),Rn=!1,g=t.memoizedState,l.state=g,sl(t,r,l,i);var S=t.memoizedState;u!==v||g!==S||yt.current||Rn?(typeof x=="function"&&(Iu(t,n,x,r),S=t.memoizedState),(f=Rn||Rp(t,n,f,r,g,S,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=c,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Du(e,t,n,r,o,i)}function Du(e,t,n,r,i,o){xg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Np(t,n,!1),Pn(e,t,o);r=t.stateNode,J1.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xi(t,e.child,null,o),t.child=xi(t,null,u,o)):dt(e,t,u,o),t.memoizedState=r.state,i&&Np(t,n,!0),t.child}function _g(e){var t=e.stateNode;t.pendingContext?Tp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tp(e,t.context,!1),Mc(e,t.containerInfo)}function Vp(e,t,n,r,i){return wi(),Ac(i),t.flags|=256,dt(e,t,n,r),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function zu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sg(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Te,i&1),e===null)return ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ll(l,r,0,null),e=Sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zu(n),t.memoizedState=Mu,e):Vc(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Z1(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Yn(u,o):(o=Sr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?zu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Mu,r}return o=e.child,e=o.sibling,r=Yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vc(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&Ac(r),xi(t,e.child,null,n),e=Vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Va(Error(R(422))),Ss(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ll({mode:"visible",children:r.children},i,0,null),o=Sr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xi(t,e.child,null,l),t.child.memoizedState=zu(l),t.memoizedState=Mu,o);if(!(t.mode&1))return Ss(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(R(419)),r=Va(o,r,void 0),Ss(e,t,l,r)}if(u=(l&e.childLanes)!==0,vt||u){if(r=Ye,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cn(e,i),en(r,e,i,-1))}return qc(),r=Va(Error(R(421))),Ss(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Tt=Wn(i.nextSibling),Nt=t,ke=!0,qt=null,e!==null&&(zt[$t++]=_n,zt[$t++]=Sn,zt[$t++]=kr,_n=e.id,Sn=e.overflow,kr=t),t=Vc(t,r.children),t.flags|=4096,t)}function Kp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Au(e.return,t,n)}function Ka(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kp(e,n,t);else if(e.tag===19)Kp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ka(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ll(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ka(t,!0,n,null,o);break;case"together":Ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ew(e,t,n){switch(t.tag){case 3:_g(t),wi();break;case 5:Xm(t);break;case 1:wt(t.type)&&tl(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(il,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?Sg(e,t,n):(xe(Te,Te.current&1),e=Pn(e,t,n),e!==null?e.sibling:null);xe(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,wg(e,t,n)}return Pn(e,t,n)}var Eg,$u,kg,Cg;Eg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};kg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yr(mn.current);var o=null;switch(n){case"input":i=lu(e,i),r=lu(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=cu(e,i),r=cu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zs)}fu(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(fo.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var c=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(fo.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&_e("scroll",e),o||u===c||(o=[])):(o=o||[]).push(f,c))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Cg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qi(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tw(e,t,n){var r=t.pendingProps;switch(jc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return wt(t.type)&&el(),et(t),null;case 3:return r=t.stateNode,_i(),be(yt),be(nt),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Qu(qt),qt=null))),$u(e,t),et(t),null;case 5:zc(t);var i=yr(Eo.current);if(n=t.type,e!==null&&t.stateNode!=null)kg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return et(t),null}if(e=yr(mn.current),xs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pn]=t,r[So]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)_e(Zi[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":tp(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":rp(r,o),_e("invalid",r)}fu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,u,e),i=["children",""+u]):fo.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&_e("scroll",r)}switch(n){case"input":ds(r),np(r,o,!0);break;case"textarea":ds(r),ip(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pn]=t,e[So]=r,Eg(e,t,!1,!1),t.stateNode=e;e:{switch(l=pu(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)_e(Zi[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":tp(e,r),i=lu(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),_e("invalid",e);break;case"textarea":rp(e,r),i=cu(e,r),_e("invalid",e);break;default:i=r}fu(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?nm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&em(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&po(e,c):typeof c=="number"&&po(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&_e("scroll",e):c!=null&&mc(e,o,c,l))}switch(n){case"input":ds(e),np(e,r,!1);break;case"textarea":ds(e),ip(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Cg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=yr(Eo.current),yr(mn.current),xs(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(o=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ws(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return et(t),null;case 13:if(be(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Tt!==null&&t.mode&1&&!(t.flags&128))Bm(),wi(),t.flags|=98560,o=!1;else if(o=xs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[pn]=t}else wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else qt!==null&&(Qu(qt),qt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):qc())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return _i(),$u(e,t),e===null&&xo(t.stateNode.containerInfo),et(t),null;case 10:return Rc(t.type._context),et(t),null;case 17:return wt(t.type)&&el(),et(t),null;case 19:if(be(Te),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Qi(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ll(e),l!==null){for(t.flags|=128,Qi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>bi&&(t.flags|=128,r=!0,Qi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ll(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ke)return et(t),null}else 2*Me()-o.renderingStartTime>bi&&n!==1073741824&&(t.flags|=128,r=!0,Qi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Te.current,xe(Te,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function nw(e,t){switch(jc(t),t.tag){case 1:return wt(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),be(yt),be(nt),$c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(be(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Te),null;case 4:return _i(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var bs=!1,tt=!1,rw=typeof WeakSet=="function"?WeakSet:Set,U=null;function li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Fu(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var Qp=!1;function iw(e,t){if(bu=Xs,e=jm(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,c=-1,f=0,y=0,v=e,g=null;t:for(;;){for(var x;v!==n||i!==0&&v.nodeType!==3||(u=l+i),v!==o||r!==0&&v.nodeType!==3||(c=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(x=v.firstChild)!==null;)g=v,v=x;for(;;){if(v===e)break t;if(g===n&&++f===i&&(u=l),g===o&&++y===r&&(c=l),(x=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=x}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},Xs=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,A=S.memoizedState,w=t.stateNode,m=w.getSnapshotBeforeUpdate(t.elementType===t.type?k:Gt(t.type,k),A);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(P){Oe(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return S=Qp,Qp=!1,S}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fu(t,n,o)}i=i.next}while(i!==r)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pg(e){var t=e.alternate;t!==null&&(e.alternate=null,Pg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[So],delete t[Pu],delete t[F1],delete t[H1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tg(e){return e.tag===5||e.tag===3||e.tag===4}function Yp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zs));else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function Bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bu(e,t,n),e=e.sibling;e!==null;)Bu(e,t,n),e=e.sibling}var Ge=null,Xt=!1;function An(e,t,n){for(n=n.child;n!==null;)Ng(e,t,n),n=n.sibling}function Ng(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:tt||li(n,t);case 6:var r=Ge,i=Xt;Ge=null,An(e,t,n),Ge=r,Xt=i,Ge!==null&&(Xt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Xt?(e=Ge,n=n.stateNode,e.nodeType===8?$a(e.parentNode,n):e.nodeType===1&&$a(e,n),vo(e)):$a(Ge,n.stateNode));break;case 4:r=Ge,i=Xt,Ge=n.stateNode.containerInfo,Xt=!0,An(e,t,n),Ge=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fu(n,t,l),i=i.next}while(i!==r)}An(e,t,n);break;case 1:if(!tt&&(li(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Oe(n,t,u)}An(e,t,n);break;case 21:An(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,An(e,t,n),tt=r):An(e,t,n);break;default:An(e,t,n)}}function Gp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rw),t.forEach(function(r){var i=pw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ge=u.stateNode,Xt=!1;break e;case 3:Ge=u.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=u.stateNode.containerInfo,Xt=!0;break e}u=u.return}if(Ge===null)throw Error(R(160));Ng(o,l,i),Ge=null,Xt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){Oe(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jg(t,e),t=t.sibling}function jg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),dn(e),r&4){try{so(3,e,e.return),Ol(3,e)}catch(k){Oe(e,e.return,k)}try{so(5,e,e.return)}catch(k){Oe(e,e.return,k)}}break;case 1:Yt(t,e),dn(e),r&512&&n!==null&&li(n,n.return);break;case 5:if(Yt(t,e),dn(e),r&512&&n!==null&&li(n,n.return),e.flags&32){var i=e.stateNode;try{po(i,"")}catch(k){Oe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&qh(i,o),pu(u,l);var f=pu(u,o);for(l=0;l<c.length;l+=2){var y=c[l],v=c[l+1];y==="style"?nm(i,v):y==="dangerouslySetInnerHTML"?em(i,v):y==="children"?po(i,v):mc(i,y,v,f)}switch(u){case"input":au(i,o);break;case"textarea":Jh(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ci(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?ci(i,!!o.multiple,o.defaultValue,!0):ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[So]=o}catch(k){Oe(e,e.return,k)}}break;case 6:if(Yt(t,e),dn(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Oe(e,e.return,k)}}break;case 3:if(Yt(t,e),dn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(k){Oe(e,e.return,k)}break;case 4:Yt(t,e),dn(e);break;case 13:Yt(t,e),dn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yc=Me())),r&4&&Gp(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(f=tt)||y,Yt(t,e),tt=f):Yt(t,e),dn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!y&&e.mode&1)for(U=e,y=e.child;y!==null;){for(v=U=y;U!==null;){switch(g=U,x=g.child,g.tag){case 0:case 11:case 14:case 15:so(4,g,g.return);break;case 1:li(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:li(g,g.return);break;case 22:if(g.memoizedState!==null){qp(v);continue}}x!==null?(x.return=g,U=x):qp(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=v.stateNode,c=v.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=tm("display",l))}catch(k){Oe(e,e.return,k)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(k){Oe(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Yt(t,e),dn(e),r&4&&Gp(e);break;case 21:break;default:Yt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var o=Yp(e);Bu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Yp(e);Uu(e,u,l);break;default:throw Error(R(161))}}catch(c){Oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ow(e,t,n){U=e,Ag(e)}function Ag(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||bs;if(!l){var u=i.alternate,c=u!==null&&u.memoizedState!==null||tt;u=bs;var f=tt;if(bs=l,(tt=c)&&!f)for(U=i;U!==null;)l=U,c=l.child,l.tag===22&&l.memoizedState!==null?Jp(i):c!==null?(c.return=l,U=c):Jp(i);for(;o!==null;)U=o,Ag(o),o=o.sibling;U=i,bs=u,tt=f}Xp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Xp(e)}}function Xp(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Op(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Op(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var y=f.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&vo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}tt||t.flags&512&&Hu(t)}catch(g){Oe(t,t.return,g)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function qp(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Jp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(c){Oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Oe(t,i,c)}}var o=t.return;try{Hu(t)}catch(c){Oe(t,o,c)}break;case 5:var l=t.return;try{Hu(t)}catch(c){Oe(t,l,c)}}}catch(c){Oe(t,t.return,c)}if(t===e){U=null;break}var u=t.sibling;if(u!==null){u.return=t.return,U=u;break}U=t.return}}var sw=Math.ceil,cl=Tn.ReactCurrentDispatcher,Kc=Tn.ReactCurrentOwner,Ht=Tn.ReactCurrentBatchConfig,ae=0,Ye=null,Fe=null,Xe=0,kt=0,ai=er(0),Be=0,To=null,Pr=0,Rl=0,Qc=0,lo=null,gt=null,Yc=0,bi=1/0,yn=null,dl=!1,Wu=null,Kn=null,Es=!1,$n=null,fl=0,ao=0,Vu=null,zs=-1,$s=0;function ft(){return ae&6?Me():zs!==-1?zs:zs=Me()}function Qn(e){return e.mode&1?ae&2&&Xe!==0?Xe&-Xe:B1.transition!==null?($s===0&&($s=hm()),$s):(e=me,e!==0||(e=window.event,e=e===void 0?16:_m(e.type)),e):1}function en(e,t,n,r){if(50<ao)throw ao=0,Vu=null,Error(R(185));Ro(e,n,r),(!(ae&2)||e!==Ye)&&(e===Ye&&(!(ae&2)&&(Rl|=n),Be===4&&Mn(e,Xe)),xt(e,r),n===1&&ae===0&&!(t.mode&1)&&(bi=Me()+500,jl&&tr()))}function xt(e,t){var n=e.callbackNode;By(e,t);var r=Gs(e,e===Ye?Xe:0);if(r===0)n!==null&&lp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lp(n),t===1)e.tag===0?U1(Zp.bind(null,e)):Fm(Zp.bind(null,e)),z1(function(){!(ae&6)&&tr()}),n=null;else{switch(mm(r)){case 1:n=xc;break;case 4:n=fm;break;case 16:n=Ys;break;case 536870912:n=pm;break;default:n=Ys}n=$g(n,Ig.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ig(e,t){if(zs=-1,$s=0,ae&6)throw Error(R(327));var n=e.callbackNode;if(mi()&&e.callbackNode!==n)return null;var r=Gs(e,e===Ye?Xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var i=ae;ae|=2;var o=Rg();(Ye!==e||Xe!==t)&&(yn=null,bi=Me()+500,_r(e,t));do try{uw();break}catch(u){Og(e,u)}while(1);Oc(),cl.current=o,ae=i,Fe!==null?t=0:(Ye=null,Xe=0,t=Be)}if(t!==0){if(t===2&&(i=yu(e),i!==0&&(r=i,t=Ku(e,i))),t===1)throw n=To,_r(e,0),Mn(e,r),xt(e,Me()),n;if(t===6)Mn(e,r);else{if(i=e.current.alternate,!(r&30)&&!lw(i)&&(t=pl(e,r),t===2&&(o=yu(e),o!==0&&(r=o,t=Ku(e,o))),t===1))throw n=To,_r(e,0),Mn(e,r),xt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:pr(e,gt,yn);break;case 3:if(Mn(e,r),(r&130023424)===r&&(t=Yc+500-Me(),10<t)){if(Gs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cu(pr.bind(null,e,gt,yn),t);break}pr(e,gt,yn);break;case 4:if(Mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Zt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sw(r/1960))-r,10<r){e.timeoutHandle=Cu(pr.bind(null,e,gt,yn),r);break}pr(e,gt,yn);break;case 5:pr(e,gt,yn);break;default:throw Error(R(329))}}}return xt(e,Me()),e.callbackNode===n?Ig.bind(null,e):null}function Ku(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=pl(e,t),e!==2&&(t=gt,gt=n,t!==null&&Qu(t)),e}function Qu(e){gt===null?gt=e:gt.push.apply(gt,e)}function lw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mn(e,t){for(t&=~Qc,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),r=1<<n;e[n]=-1,t&=~r}}function Zp(e){if(ae&6)throw Error(R(327));mi();var t=Gs(e,0);if(!(t&1))return xt(e,Me()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=yu(e);r!==0&&(t=r,n=Ku(e,r))}if(n===1)throw n=To,_r(e,0),Mn(e,t),xt(e,Me()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,gt,yn),xt(e,Me()),null}function Gc(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(bi=Me()+500,jl&&tr())}}function Tr(e){$n!==null&&$n.tag===0&&!(ae&6)&&mi();var t=ae;ae|=1;var n=Ht.transition,r=me;try{if(Ht.transition=null,me=1,e)return e()}finally{me=r,Ht.transition=n,ae=t,!(ae&6)&&tr()}}function Xc(){kt=ai.current,be(ai)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M1(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:_i(),be(yt),be(nt),$c();break;case 5:zc(r);break;case 4:_i();break;case 13:be(Te);break;case 19:be(Te);break;case 10:Rc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(Ye=e,Fe=e=Yn(e.current,null),Xe=kt=t,Be=0,To=null,Qc=Rl=Pr=0,gt=lo=null,vr!==null){for(t=0;t<vr.length;t++)if(n=vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}vr=null}return e}function Og(e,t){do{var n=Fe;try{if(Oc(),Ls.current=ul,al){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(Cr=0,Ve=Ue=Ne=null,oo=!1,ko=0,Kc.current=null,n===null||n.return===null){Be=1,To=t,Fe=null;break}e:{var o=e,l=n.return,u=n,c=t;if(t=Xe,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,y=u,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Fp(l);if(x!==null){x.flags&=-257,Hp(x,l,u,o,t),x.mode&1&&$p(o,f,t),t=x,c=f;var S=t.updateQueue;if(S===null){var k=new Set;k.add(c),t.updateQueue=k}else S.add(c);break e}else{if(!(t&1)){$p(o,f,t),qc();break e}c=Error(R(426))}}else if(ke&&u.mode&1){var A=Fp(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Hp(A,l,u,o,t),Ac(Si(c,u));break e}}o=c=Si(c,u),Be!==4&&(Be=2),lo===null?lo=[o]:lo.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=gg(o,c,t);Ip(o,w);break e;case 1:u=c;var m=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Kn===null||!Kn.has(_)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=vg(o,u,t);Ip(o,P);break e}}o=o.return}while(o!==null)}Dg(n)}catch(N){t=N,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Rg(){var e=cl.current;return cl.current=ul,e===null?ul:e}function qc(){(Be===0||Be===3||Be===2)&&(Be=4),Ye===null||!(Pr&268435455)&&!(Rl&268435455)||Mn(Ye,Xe)}function pl(e,t){var n=ae;ae|=2;var r=Rg();(Ye!==e||Xe!==t)&&(yn=null,_r(e,t));do try{aw();break}catch(i){Og(e,i)}while(1);if(Oc(),ae=n,cl.current=r,Fe!==null)throw Error(R(261));return Ye=null,Xe=0,Be}function aw(){for(;Fe!==null;)Lg(Fe)}function uw(){for(;Fe!==null&&!Ry();)Lg(Fe)}function Lg(e){var t=zg(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Dg(e):Fe=t,Kc.current=null}function Dg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nw(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Fe=null;return}}else if(n=tw(n,t,kt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Be===0&&(Be=5)}function pr(e,t,n){var r=me,i=Ht.transition;try{Ht.transition=null,me=1,cw(e,t,n,r)}finally{Ht.transition=i,me=r}return null}function cw(e,t,n,r){do mi();while($n!==null);if(ae&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wy(e,o),e===Ye&&(Fe=Ye=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Es||(Es=!0,$g(Ys,function(){return mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ht.transition,Ht.transition=null;var l=me;me=1;var u=ae;ae|=4,Kc.current=null,iw(e,n),jg(n,e),j1(Eu),Xs=!!bu,Eu=bu=null,e.current=n,ow(n),Ly(),ae=u,me=l,Ht.transition=o}else e.current=n;if(Es&&(Es=!1,$n=e,fl=i),o=e.pendingLanes,o===0&&(Kn=null),zy(n.stateNode),xt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,e=Wu,Wu=null,e;return fl&1&&e.tag!==0&&mi(),o=e.pendingLanes,o&1?e===Vu?ao++:(ao=0,Vu=e):ao=0,tr(),null}function mi(){if($n!==null){var e=mm(fl),t=Ht.transition,n=me;try{if(Ht.transition=null,me=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,fl=0,ae&6)throw Error(R(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,l=o.child;if(U.flags&16){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(U=f;U!==null;){var y=U;switch(y.tag){case 0:case 11:case 15:so(8,y,o)}var v=y.child;if(v!==null)v.return=y,U=v;else for(;U!==null;){y=U;var g=y.sibling,x=y.return;if(Pg(y),y===f){U=null;break}if(g!==null){g.return=x,U=g;break}U=x}}}var S=o.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}U=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,U=l;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:so(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,U=w;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){l=U;var _=l.child;if(l.subtreeFlags&2064&&_!==null)_.return=l,U=_;else e:for(l=m;U!==null;){if(u=U,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ol(9,u)}}catch(N){Oe(u,u.return,N)}if(u===l){U=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,U=P;break e}U=u.return}}if(ae=i,tr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{me=n,Ht.transition=t}}return!1}function eh(e,t,n){t=Si(n,t),t=gg(e,t,1),e=Vn(e,t,1),t=ft(),e!==null&&(Ro(e,1,t),xt(e,t))}function Oe(e,t,n){if(e.tag===3)eh(e,e,n);else for(;t!==null;){if(t.tag===3){eh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=Si(n,e),e=vg(t,e,1),t=Vn(t,e,1),e=ft(),t!==null&&(Ro(t,1,e),xt(t,e));break}}t=t.return}}function dw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Xe&n)===n&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Me()-Yc?_r(e,0):Qc|=n),xt(e,t)}function Mg(e,t){t===0&&(e.mode&1?(t=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):t=1);var n=ft();e=Cn(e,t),e!==null&&(Ro(e,t,n),xt(e,n))}function fw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mg(e,n)}function pw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Mg(e,n)}var zg;zg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,ew(e,t,n);vt=!!(e.flags&131072)}else vt=!1,ke&&t.flags&1048576&&Hm(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ms(e,t),e=t.pendingProps;var i=yi(t,nt.current);hi(t,n),i=Hc(null,t,r,e,i,n);var o=Uc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(o=!0,tl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dc(t),i.updater=Al,t.stateNode=i,i._reactInternals=t,Ou(t,r,e,n),t=Du(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&Nc(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mw(r),e=Gt(r,e),i){case 0:t=Lu(null,t,r,e,n);break e;case 1:t=Wp(null,t,r,e,n);break e;case 11:t=Up(null,t,r,e,n);break e;case 14:t=Bp(null,t,r,Gt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Lu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Wp(e,t,r,i,n);case 3:e:{if(_g(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vm(e,t),sl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Si(Error(R(423)),t),t=Vp(e,t,r,n,i);break e}else if(r!==i){i=Si(Error(R(424)),t),t=Vp(e,t,r,n,i);break e}else for(Tt=Wn(t.stateNode.containerInfo.firstChild),Nt=t,ke=!0,qt=null,n=Gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){t=Pn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Xm(t),e===null&&ju(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ku(r,i)?l=null:o!==null&&ku(r,o)&&(t.flags|=32),xg(e,t),dt(e,t,l,n),t.child;case 6:return e===null&&ju(t),null;case 13:return Sg(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Up(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,xe(il,r._currentValue),r._currentValue=l,o!==null)if(nn(o.value,l)){if(o.children===i.children&&!yt.current){t=Pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=bn(-1,n&-n),c.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var y=f.pending;y===null?c.next=c:(c.next=y.next,y.next=c),f.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Au(o.return,n,t),u.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(R(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Au(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hi(t,n),i=Ut(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Gt(r,t.pendingProps),i=Gt(r.type,i),Bp(e,t,r,i,n);case 15:return yg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gt(r,i),Ms(e,t),t.tag=1,wt(r)?(e=!0,tl(t)):e=!1,hi(t,n),Qm(t,r,i),Ou(t,r,i,n),Du(null,t,r,!0,e,n);case 19:return bg(e,t,n);case 22:return wg(e,t,n)}throw Error(R(156,t.tag))};function $g(e,t){return dm(e,t)}function hw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new hw(e,t,n,r)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mw(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===yc)return 14}return 2}function Yn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Jc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jr:return Sr(n.children,i,o,t);case gc:l=8,i|=8;break;case ru:return e=Ft(12,n,t,i|2),e.elementType=ru,e.lanes=o,e;case iu:return e=Ft(13,n,t,i),e.elementType=iu,e.lanes=o,e;case ou:return e=Ft(19,n,t,i),e.elementType=ou,e.lanes=o,e;case Yh:return Ll(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kh:l=10;break e;case Qh:l=9;break e;case vc:l=11;break e;case yc:l=14;break e;case On:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ft(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Sr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Yh,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Ya(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(e,t,n,r,i,o,l,u,c){return e=new gw(e,t,n,u,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(o),e}function vw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fg(e){if(!e)return Jn;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(wt(n))return $m(e,n,t)}return t}function Hg(e,t,n,r,i,o,l,u,c){return e=Zc(n,r,!0,e,i,o,l,u,c),e.context=Fg(null),n=e.current,r=ft(),i=Qn(n),o=bn(r,i),o.callback=t??null,Vn(n,o,i),e.current.lanes=i,Ro(e,i,r),xt(e,r),e}function Dl(e,t,n,r){var i=t.current,o=ft(),l=Qn(i);return n=Fg(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vn(i,t,l),e!==null&&(en(e,i,l,o),Rs(e,i,l)),l}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ed(e,t){th(e,t),(e=e.alternate)&&th(e,t)}function yw(){return null}var Ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function td(e){this._internalRoot=e}Ml.prototype.render=td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Dl(e,t,null,null)};Ml.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tr(function(){Dl(null,e,null,null)}),t[kn]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=ym();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&xm(e)}};function nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nh(){}function ww(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=hl(l);o.call(f)}}var l=Hg(t,r,e,0,null,!1,!1,"",nh);return e._reactRootContainer=l,e[kn]=l.current,xo(e.nodeType===8?e.parentNode:e),Tr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=hl(c);u.call(f)}}var c=Zc(e,0,!1,null,null,!1,!1,"",nh);return e._reactRootContainer=c,e[kn]=c.current,xo(e.nodeType===8?e.parentNode:e),Tr(function(){Dl(t,c,n,r)}),c}function $l(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var c=hl(l);u.call(c)}}Dl(t,l,e,i)}else l=ww(n,t,e,i,r);return hl(l)}gm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ji(t.pendingLanes);n!==0&&(_c(t,n|1),xt(t,Me()),!(ae&6)&&(bi=Me()+500,tr()))}break;case 13:Tr(function(){var r=Cn(e,1);if(r!==null){var i=ft();en(r,e,1,i)}}),ed(e,1)}};Sc=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=ft();en(t,e,134217728,n)}ed(e,134217728)}};vm=function(e){if(e.tag===13){var t=Qn(e),n=Cn(e,t);if(n!==null){var r=ft();en(n,e,t,r)}ed(e,t)}};ym=function(){return me};wm=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};mu=function(e,t,n){switch(t){case"input":if(au(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nl(r);if(!i)throw Error(R(90));Xh(r),au(r,i)}}}break;case"textarea":Jh(e,n);break;case"select":t=n.value,t!=null&&ci(e,!!n.multiple,t,!1)}};om=Gc;sm=Tr;var xw={usingClientEntryPoint:!1,Events:[Do,ni,Nl,rm,im,Gc]},Yi={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_w={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=um(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{kl=ks.inject(_w),hn=ks}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(t))throw Error(R(200));return vw(e,t,null,n)};At.createRoot=function(e,t){if(!nd(e))throw Error(R(299));var n=!1,r="",i=Ug;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zc(e,1,!1,null,null,n,!1,r,i),e[kn]=t.current,xo(e.nodeType===8?e.parentNode:e),new td(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=um(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return Tr(e)};At.hydrate=function(e,t,n){if(!zl(t))throw Error(R(200));return $l(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!nd(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Hg(t,null,e,1,n??null,i,!1,o,l),e[kn]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ml(t)};At.render=function(e,t,n){if(!zl(t))throw Error(R(200));return $l(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!zl(e))throw Error(R(40));return e._reactRootContainer?(Tr(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};At.unstable_batchedUpdates=Gc;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return $l(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function Bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg)}catch(e){console.error(e)}}Bg(),Hh.exports=At;var Sw=Hh.exports,rh=Sw;tu.createRoot=rh.createRoot,tu.hydrateRoot=rh.hydrateRoot;var bw={exports:{}};/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,t){(function(n,r){e.exports=r()})(q0,function(){const n=new Map,r={set(d,s,a){n.has(d)||n.set(d,new Map);const p=n.get(d);p.has(s)||p.size===0?p.set(s,a):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`)},get:(d,s)=>n.has(d)&&n.get(d).get(s)||null,remove(d,s){if(!n.has(d))return;const a=n.get(d);a.delete(s),a.size===0&&n.delete(d)}},i="transitionend",o=d=>(d&&window.CSS&&window.CSS.escape&&(d=d.replace(/#([^\s"#']+)/g,(s,a)=>`#${CSS.escape(a)}`)),d),l=d=>{d.dispatchEvent(new Event(i))},u=d=>!(!d||typeof d!="object")&&(d.jquery!==void 0&&(d=d[0]),d.nodeType!==void 0),c=d=>u(d)?d.jquery?d[0]:d:typeof d=="string"&&d.length>0?document.querySelector(o(d)):null,f=d=>{if(!u(d)||d.getClientRects().length===0)return!1;const s=getComputedStyle(d).getPropertyValue("visibility")==="visible",a=d.closest("details:not([open])");if(!a)return s;if(a!==d){const p=d.closest("summary");if(p&&p.parentNode!==a||p===null)return!1}return s},y=d=>!d||d.nodeType!==Node.ELEMENT_NODE||!!d.classList.contains("disabled")||(d.disabled!==void 0?d.disabled:d.hasAttribute("disabled")&&d.getAttribute("disabled")!=="false"),v=d=>{if(!document.documentElement.attachShadow)return null;if(typeof d.getRootNode=="function"){const s=d.getRootNode();return s instanceof ShadowRoot?s:null}return d instanceof ShadowRoot?d:d.parentNode?v(d.parentNode):null},g=()=>{},x=d=>{d.offsetHeight},S=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],A=()=>document.documentElement.dir==="rtl",w=d=>{var s;s=()=>{const a=S();if(a){const p=d.NAME,b=a.fn[p];a.fn[p]=d.jQueryInterface,a.fn[p].Constructor=d,a.fn[p].noConflict=()=>(a.fn[p]=b,d.jQueryInterface)}},document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of k)a()}),k.push(s)):s()},m=(d,s=[],a=d)=>typeof d=="function"?d(...s):a,_=(d,s,a=!0)=>{if(!a)return void m(d);const p=(T=>{if(!T)return 0;let{transitionDuration:I,transitionDelay:M}=window.getComputedStyle(T);const H=Number.parseFloat(I),W=Number.parseFloat(M);return H||W?(I=I.split(",")[0],M=M.split(",")[0],1e3*(Number.parseFloat(I)+Number.parseFloat(M))):0})(s)+5;let b=!1;const E=({target:T})=>{T===s&&(b=!0,s.removeEventListener(i,E),m(d))};s.addEventListener(i,E),setTimeout(()=>{b||l(s)},p)},P=(d,s,a,p)=>{const b=d.length;let E=d.indexOf(s);return E===-1?!a&&p?d[b-1]:d[0]:(E+=a?1:-1,p&&(E=(E+b)%b),d[Math.max(0,Math.min(E,b-1))])},N=/[^.]*(?=\..*)\.|.*/,O=/\..*/,j=/::\d+$/,z={};let q=1;const B={mouseenter:"mouseover",mouseleave:"mouseout"},ue=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ce(d,s){return s&&`${s}::${q++}`||d.uidEvent||q++}function Pe(d){const s=Ce(d);return d.uidEvent=s,z[s]=z[s]||{},z[s]}function Le(d,s,a=null){return Object.values(d).find(p=>p.callable===s&&p.delegationSelector===a)}function Je(d,s,a){const p=typeof s=="string",b=p?a:s||a;let E=K(d);return ue.has(E)||(E=d),[p,b,E]}function rt(d,s,a,p,b){if(typeof s!="string"||!d)return;let[E,T,I]=Je(s,a,p);s in B&&(T=(G=>function(Y){if(!Y.relatedTarget||Y.relatedTarget!==Y.delegateTarget&&!Y.delegateTarget.contains(Y.relatedTarget))return G.call(this,Y)})(T));const M=Pe(d),H=M[I]||(M[I]={}),W=Le(H,T,E?a:null);if(W)return void(W.oneOff=W.oneOff&&b);const F=Ce(T,s.replace(N,"")),J=E?function(Q,G,Y){return function X(ge){const we=Q.querySelectorAll(G);for(let{target:re}=ge;re&&re!==this;re=re.parentNode)for(const ce of we)if(ce===re)return ne(ge,{delegateTarget:re}),X.oneOff&&C.off(Q,ge.type,G,Y),Y.apply(re,[ge])}}(d,a,T):function(Q,G){return function Y(X){return ne(X,{delegateTarget:Q}),Y.oneOff&&C.off(Q,X.type,G),G.apply(Q,[X])}}(d,T);J.delegationSelector=E?a:null,J.callable=T,J.oneOff=b,J.uidEvent=F,H[F]=J,d.addEventListener(I,J,E)}function it(d,s,a,p,b){const E=Le(s[a],p,b);E&&(d.removeEventListener(a,E,!!b),delete s[a][E.uidEvent])}function $(d,s,a,p){const b=s[a]||{};for(const[E,T]of Object.entries(b))E.includes(p)&&it(d,s,a,T.callable,T.delegationSelector)}function K(d){return d=d.replace(O,""),B[d]||d}const C={on(d,s,a,p){rt(d,s,a,p,!1)},one(d,s,a,p){rt(d,s,a,p,!0)},off(d,s,a,p){if(typeof s!="string"||!d)return;const[b,E,T]=Je(s,a,p),I=T!==s,M=Pe(d),H=M[T]||{},W=s.startsWith(".");if(E===void 0){if(W)for(const F of Object.keys(M))$(d,M,F,s.slice(1));for(const[F,J]of Object.entries(H)){const Q=F.replace(j,"");I&&!s.includes(Q)||it(d,M,T,J.callable,J.delegationSelector)}}else{if(!Object.keys(H).length)return;it(d,M,T,E,b?a:null)}},trigger(d,s,a){if(typeof s!="string"||!d)return null;const p=S();let b=null,E=!0,T=!0,I=!1;s!==K(s)&&p&&(b=p.Event(s,a),p(d).trigger(b),E=!b.isPropagationStopped(),T=!b.isImmediatePropagationStopped(),I=b.isDefaultPrevented());const M=ne(new Event(s,{bubbles:E,cancelable:!0}),a);return I&&M.preventDefault(),T&&d.dispatchEvent(M),M.defaultPrevented&&b&&b.preventDefault(),M}};function ne(d,s={}){for(const[a,p]of Object.entries(s))try{d[a]=p}catch{Object.defineProperty(d,a,{configurable:!0,get:()=>p})}return d}function de(d){if(d==="true")return!0;if(d==="false")return!1;if(d===Number(d).toString())return Number(d);if(d===""||d==="null")return null;if(typeof d!="string")return d;try{return JSON.parse(decodeURIComponent(d))}catch{return d}}function ze(d){return d.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}const Ae={setDataAttribute(d,s,a){d.setAttribute(`data-bs-${ze(s)}`,a)},removeDataAttribute(d,s){d.removeAttribute(`data-bs-${ze(s)}`)},getDataAttributes(d){if(!d)return{};const s={},a=Object.keys(d.dataset).filter(p=>p.startsWith("bs")&&!p.startsWith("bsConfig"));for(const p of a){let b=p.replace(/^bs/,"");b=b.charAt(0).toLowerCase()+b.slice(1,b.length),s[b]=de(d.dataset[p])}return s},getDataAttribute:(d,s)=>de(d.getAttribute(`data-bs-${ze(s)}`))};class ot{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,a){const p=u(a)?Ae.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof p=="object"?p:{},...u(a)?Ae.getDataAttributes(a):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,a=this.constructor.DefaultType){for(const[b,E]of Object.entries(a)){const T=s[b],I=u(T)?"element":(p=T)==null?`${p}`:Object.prototype.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(E).test(I))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${I}" but expected type "${E}".`)}var p}}class Ee extends ot{constructor(s,a){super(),(s=c(s))&&(this._element=s,this._config=this._getConfig(a),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),C.off(this._element,this.constructor.EVENT_KEY);for(const s of Object.getOwnPropertyNames(this))this[s]=null}_queueCallback(s,a,p=!0){_(s,a,p)}_getConfig(s){return s=this._mergeConfigObj(s,this._element),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}static getInstance(s){return r.get(c(s),this.DATA_KEY)}static getOrCreateInstance(s,a={}){return this.getInstance(s)||new this(s,typeof a=="object"?a:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(s){return`${s}${this.EVENT_KEY}`}}const mt=d=>{let s=d.getAttribute("data-bs-target");if(!s||s==="#"){let a=d.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),s=a&&a!=="#"?a.trim():null}return o(s)},V={find:(d,s=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(s,d)),findOne:(d,s=document.documentElement)=>Element.prototype.querySelector.call(s,d),children:(d,s)=>[].concat(...d.children).filter(a=>a.matches(s)),parents(d,s){const a=[];let p=d.parentNode.closest(s);for(;p;)a.push(p),p=p.parentNode.closest(s);return a},prev(d,s){let a=d.previousElementSibling;for(;a;){if(a.matches(s))return[a];a=a.previousElementSibling}return[]},next(d,s){let a=d.nextElementSibling;for(;a;){if(a.matches(s))return[a];a=a.nextElementSibling}return[]},focusableChildren(d){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(s,d).filter(a=>!y(a)&&f(a))},getSelectorFromElement(d){const s=mt(d);return s&&V.findOne(s)?s:null},getElementFromSelector(d){const s=mt(d);return s?V.findOne(s):null},getMultipleElementsFromSelector(d){const s=mt(d);return s?V.find(s):[]}},Vt=(d,s="hide")=>{const a=`click.dismiss${d.EVENT_KEY}`,p=d.NAME;C.on(document,a,`[data-bs-dismiss="${p}"]`,function(b){if(["A","AREA"].includes(this.tagName)&&b.preventDefault(),y(this))return;const E=V.getElementFromSelector(this)||this.closest(`.${p}`);d.getOrCreateInstance(E)[s]()})};class st extends Ee{static get NAME(){return"alert"}close(){if(C.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const s=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,s)}_destroyElement(){this._element.remove(),C.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(s){return this.each(function(){const a=st.getOrCreateInstance(this);if(typeof s=="string"){if(a[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);a[s](this)}})}}Vt(st,"close"),w(st);const Dr='[data-bs-toggle="button"]';class on extends Ee{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(s){return this.each(function(){const a=on.getOrCreateInstance(this);s==="toggle"&&a[s]()})}}C.on(document,"click.bs.button.data-api",Dr,d=>{d.preventDefault();const s=d.target.closest(Dr);on.getOrCreateInstance(s).toggle()}),w(on);const sn={endCallback:null,leftCallback:null,rightCallback:null},Vv={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ho extends ot{constructor(s,a){super(),this._element=s,s&&Ho.isSupported()&&(this._config=this._getConfig(a),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return sn}static get DefaultType(){return Vv}static get NAME(){return"swipe"}dispose(){C.off(this._element,".bs.swipe")}_start(s){this._supportPointerEvents?this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX):this._deltaX=s.touches[0].clientX}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=40)return;const a=s/this._deltaX;this._deltaX=0,a&&m(a>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(C.on(this._element,"pointerdown.bs.swipe",s=>this._start(s)),C.on(this._element,"pointerup.bs.swipe",s=>this._end(s)),this._element.classList.add("pointer-event")):(C.on(this._element,"touchstart.bs.swipe",s=>this._start(s)),C.on(this._element,"touchmove.bs.swipe",s=>this._move(s)),C.on(this._element,"touchend.bs.swipe",s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType==="pen"||s.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Oi="next",Mr="prev",zr="left",Uo="right",Xl="slid.bs.carousel",Sd="carousel",Bo="active",Kv={ArrowLeft:Uo,ArrowRight:zr},Qv={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Yv={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class $r extends Ee{constructor(s,a){super(s,a),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=V.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Sd&&this.cycle()}static get Default(){return Qv}static get DefaultType(){return Yv}static get NAME(){return"carousel"}next(){this._slide(Oi)}nextWhenVisible(){!document.hidden&&f(this._element)&&this.next()}prev(){this._slide(Mr)}pause(){this._isSliding&&l(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?C.one(this._element,Xl,()=>this.cycle()):this.cycle())}to(s){const a=this._getItems();if(s>a.length-1||s<0)return;if(this._isSliding)return void C.one(this._element,Xl,()=>this.to(s));const p=this._getItemIndex(this._getActive());if(p===s)return;const b=s>p?Oi:Mr;this._slide(b,a[s])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(s){return s.defaultInterval=s.interval,s}_addEventListeners(){this._config.keyboard&&C.on(this._element,"keydown.bs.carousel",s=>this._keydown(s)),this._config.pause==="hover"&&(C.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),C.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&Ho.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const a of V.find(".carousel-item img",this._element))C.on(a,"dragstart.bs.carousel",p=>p.preventDefault());const s={leftCallback:()=>this._slide(this._directionToOrder(zr)),rightCallback:()=>this._slide(this._directionToOrder(Uo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Ho(this._element,s)}_keydown(s){if(/input|textarea/i.test(s.target.tagName))return;const a=Kv[s.key];a&&(s.preventDefault(),this._slide(this._directionToOrder(a)))}_getItemIndex(s){return this._getItems().indexOf(s)}_setActiveIndicatorElement(s){if(!this._indicatorsElement)return;const a=V.findOne(".active",this._indicatorsElement);a.classList.remove(Bo),a.removeAttribute("aria-current");const p=V.findOne(`[data-bs-slide-to="${s}"]`,this._indicatorsElement);p&&(p.classList.add(Bo),p.setAttribute("aria-current","true"))}_updateInterval(){const s=this._activeElement||this._getActive();if(!s)return;const a=Number.parseInt(s.getAttribute("data-bs-interval"),10);this._config.interval=a||this._config.defaultInterval}_slide(s,a=null){if(this._isSliding)return;const p=this._getActive(),b=s===Oi,E=a||P(this._getItems(),p,b,this._config.wrap);if(E===p)return;const T=this._getItemIndex(E),I=F=>C.trigger(this._element,F,{relatedTarget:E,direction:this._orderToDirection(s),from:this._getItemIndex(p),to:T});if(I("slide.bs.carousel").defaultPrevented||!p||!E)return;const M=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(T),this._activeElement=E;const H=b?"carousel-item-start":"carousel-item-end",W=b?"carousel-item-next":"carousel-item-prev";E.classList.add(W),x(E),p.classList.add(H),E.classList.add(H),this._queueCallback(()=>{E.classList.remove(H,W),E.classList.add(Bo),p.classList.remove(Bo,W,H),this._isSliding=!1,I(Xl)},p,this._isAnimated()),M&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return V.findOne(".active.carousel-item",this._element)}_getItems(){return V.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(s){return A()?s===zr?Mr:Oi:s===zr?Oi:Mr}_orderToDirection(s){return A()?s===Mr?zr:Uo:s===Mr?Uo:zr}static jQueryInterface(s){return this.each(function(){const a=$r.getOrCreateInstance(this,s);if(typeof s!="number"){if(typeof s=="string"){if(a[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);a[s]()}}else a.to(s)})}}C.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(d){const s=V.getElementFromSelector(this);if(!s||!s.classList.contains(Sd))return;d.preventDefault();const a=$r.getOrCreateInstance(s),p=this.getAttribute("data-bs-slide-to");return p?(a.to(p),void a._maybeEnableCycle()):Ae.getDataAttribute(this,"slide")==="next"?(a.next(),void a._maybeEnableCycle()):(a.prev(),void a._maybeEnableCycle())}),C.on(window,"load.bs.carousel.data-api",()=>{const d=V.find('[data-bs-ride="carousel"]');for(const s of d)$r.getOrCreateInstance(s)}),w($r);const ql="show",Wo="collapse",Vo="collapsing",Jl='[data-bs-toggle="collapse"]',Gv={parent:null,toggle:!0},Xv={parent:"(null|element)",toggle:"boolean"};class Fr extends Ee{constructor(s,a){super(s,a),this._isTransitioning=!1,this._triggerArray=[];const p=V.find(Jl);for(const b of p){const E=V.getSelectorFromElement(b),T=V.find(E).filter(I=>I===this._element);E!==null&&T.length&&this._triggerArray.push(b)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Gv}static get DefaultType(){return Xv}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let s=[];if(this._config.parent&&(s=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(b=>b!==this._element).map(b=>Fr.getOrCreateInstance(b,{toggle:!1}))),s.length&&s[0]._isTransitioning||C.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const b of s)b.hide();const a=this._getDimension();this._element.classList.remove(Wo),this._element.classList.add(Vo),this._element.style[a]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const p=`scroll${a[0].toUpperCase()+a.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Vo),this._element.classList.add(Wo,ql),this._element.style[a]="",C.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[a]=`${this._element[p]}px`}hide(){if(this._isTransitioning||!this._isShown()||C.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const s=this._getDimension();this._element.style[s]=`${this._element.getBoundingClientRect()[s]}px`,x(this._element),this._element.classList.add(Vo),this._element.classList.remove(Wo,ql);for(const a of this._triggerArray){const p=V.getElementFromSelector(a);p&&!this._isShown(p)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0,this._element.style[s]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Vo),this._element.classList.add(Wo),C.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(s=this._element){return s.classList.contains(ql)}_configAfterMerge(s){return s.toggle=!!s.toggle,s.parent=c(s.parent),s}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const s=this._getFirstLevelChildren(Jl);for(const a of s){const p=V.getElementFromSelector(a);p&&this._addAriaAndCollapsedClass([a],this._isShown(p))}}_getFirstLevelChildren(s){const a=V.find(":scope .collapse .collapse",this._config.parent);return V.find(s,this._config.parent).filter(p=>!a.includes(p))}_addAriaAndCollapsedClass(s,a){if(s.length)for(const p of s)p.classList.toggle("collapsed",!a),p.setAttribute("aria-expanded",a)}static jQueryInterface(s){const a={};return typeof s=="string"&&/show|hide/.test(s)&&(a.toggle=!1),this.each(function(){const p=Fr.getOrCreateInstance(this,a);if(typeof s=="string"){if(p[s]===void 0)throw new TypeError(`No method named "${s}"`);p[s]()}})}}C.on(document,"click.bs.collapse.data-api",Jl,function(d){(d.target.tagName==="A"||d.delegateTarget&&d.delegateTarget.tagName==="A")&&d.preventDefault();for(const s of V.getMultipleElementsFromSelector(this))Fr.getOrCreateInstance(s,{toggle:!1}).toggle()}),w(Fr);var lt="top",_t="bottom",St="right",at="left",Ko="auto",Hr=[lt,_t,St,at],ir="start",Ur="end",bd="clippingParents",Zl="viewport",Br="popper",Ed="reference",ea=Hr.reduce(function(d,s){return d.concat([s+"-"+ir,s+"-"+Ur])},[]),ta=[].concat(Hr,[Ko]).reduce(function(d,s){return d.concat([s,s+"-"+ir,s+"-"+Ur])},[]),kd="beforeRead",Cd="read",Pd="afterRead",Td="beforeMain",Nd="main",jd="afterMain",Ad="beforeWrite",Id="write",Od="afterWrite",Rd=[kd,Cd,Pd,Td,Nd,jd,Ad,Id,Od];function ln(d){return d?(d.nodeName||"").toLowerCase():null}function bt(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var s=d.ownerDocument;return s&&s.defaultView||window}return d}function or(d){return d instanceof bt(d).Element||d instanceof Element}function Ot(d){return d instanceof bt(d).HTMLElement||d instanceof HTMLElement}function na(d){return typeof ShadowRoot<"u"&&(d instanceof bt(d).ShadowRoot||d instanceof ShadowRoot)}const ra={name:"applyStyles",enabled:!0,phase:"write",fn:function(d){var s=d.state;Object.keys(s.elements).forEach(function(a){var p=s.styles[a]||{},b=s.attributes[a]||{},E=s.elements[a];Ot(E)&&ln(E)&&(Object.assign(E.style,p),Object.keys(b).forEach(function(T){var I=b[T];I===!1?E.removeAttribute(T):E.setAttribute(T,I===!0?"":I)}))})},effect:function(d){var s=d.state,a={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,a.popper),s.styles=a,s.elements.arrow&&Object.assign(s.elements.arrow.style,a.arrow),function(){Object.keys(s.elements).forEach(function(p){var b=s.elements[p],E=s.attributes[p]||{},T=Object.keys(s.styles.hasOwnProperty(p)?s.styles[p]:a[p]).reduce(function(I,M){return I[M]="",I},{});Ot(b)&&ln(b)&&(Object.assign(b.style,T),Object.keys(E).forEach(function(I){b.removeAttribute(I)}))})}},requires:["computeStyles"]};function an(d){return d.split("-")[0]}var sr=Math.max,Qo=Math.min,Wr=Math.round;function ia(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(s){return s.brand+"/"+s.version}).join(" "):navigator.userAgent}function Ld(){return!/^((?!chrome|android).)*safari/i.test(ia())}function Vr(d,s,a){s===void 0&&(s=!1),a===void 0&&(a=!1);var p=d.getBoundingClientRect(),b=1,E=1;s&&Ot(d)&&(b=d.offsetWidth>0&&Wr(p.width)/d.offsetWidth||1,E=d.offsetHeight>0&&Wr(p.height)/d.offsetHeight||1);var T=(or(d)?bt(d):window).visualViewport,I=!Ld()&&a,M=(p.left+(I&&T?T.offsetLeft:0))/b,H=(p.top+(I&&T?T.offsetTop:0))/E,W=p.width/b,F=p.height/E;return{width:W,height:F,top:H,right:M+W,bottom:H+F,left:M,x:M,y:H}}function oa(d){var s=Vr(d),a=d.offsetWidth,p=d.offsetHeight;return Math.abs(s.width-a)<=1&&(a=s.width),Math.abs(s.height-p)<=1&&(p=s.height),{x:d.offsetLeft,y:d.offsetTop,width:a,height:p}}function Dd(d,s){var a=s.getRootNode&&s.getRootNode();if(d.contains(s))return!0;if(a&&na(a)){var p=s;do{if(p&&d.isSameNode(p))return!0;p=p.parentNode||p.host}while(p)}return!1}function gn(d){return bt(d).getComputedStyle(d)}function qv(d){return["table","td","th"].indexOf(ln(d))>=0}function Nn(d){return((or(d)?d.ownerDocument:d.document)||window.document).documentElement}function Yo(d){return ln(d)==="html"?d:d.assignedSlot||d.parentNode||(na(d)?d.host:null)||Nn(d)}function Md(d){return Ot(d)&&gn(d).position!=="fixed"?d.offsetParent:null}function Ri(d){for(var s=bt(d),a=Md(d);a&&qv(a)&&gn(a).position==="static";)a=Md(a);return a&&(ln(a)==="html"||ln(a)==="body"&&gn(a).position==="static")?s:a||function(p){var b=/firefox/i.test(ia());if(/Trident/i.test(ia())&&Ot(p)&&gn(p).position==="fixed")return null;var E=Yo(p);for(na(E)&&(E=E.host);Ot(E)&&["html","body"].indexOf(ln(E))<0;){var T=gn(E);if(T.transform!=="none"||T.perspective!=="none"||T.contain==="paint"||["transform","perspective"].indexOf(T.willChange)!==-1||b&&T.willChange==="filter"||b&&T.filter&&T.filter!=="none")return E;E=E.parentNode}return null}(d)||s}function sa(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function Li(d,s,a){return sr(d,Qo(s,a))}function zd(d){return Object.assign({},{top:0,right:0,bottom:0,left:0},d)}function $d(d,s){return s.reduce(function(a,p){return a[p]=d,a},{})}const Fd={name:"arrow",enabled:!0,phase:"main",fn:function(d){var s,a=d.state,p=d.name,b=d.options,E=a.elements.arrow,T=a.modifiersData.popperOffsets,I=an(a.placement),M=sa(I),H=[at,St].indexOf(I)>=0?"height":"width";if(E&&T){var W=function(ve,he){return zd(typeof(ve=typeof ve=="function"?ve(Object.assign({},he.rects,{placement:he.placement})):ve)!="number"?ve:$d(ve,Hr))}(b.padding,a),F=oa(E),J=M==="y"?lt:at,Q=M==="y"?_t:St,G=a.rects.reference[H]+a.rects.reference[M]-T[M]-a.rects.popper[H],Y=T[M]-a.rects.reference[M],X=Ri(E),ge=X?M==="y"?X.clientHeight||0:X.clientWidth||0:0,we=G/2-Y/2,re=W[J],ce=ge-F[H]-W[Q],Z=ge/2-F[H]/2+we,le=Li(re,Z,ce),pe=M;a.modifiersData[p]=((s={})[pe]=le,s.centerOffset=le-Z,s)}},effect:function(d){var s=d.state,a=d.options.element,p=a===void 0?"[data-popper-arrow]":a;p!=null&&(typeof p!="string"||(p=s.elements.popper.querySelector(p)))&&Dd(s.elements.popper,p)&&(s.elements.arrow=p)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Kr(d){return d.split("-")[1]}var Jv={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Hd(d){var s,a=d.popper,p=d.popperRect,b=d.placement,E=d.variation,T=d.offsets,I=d.position,M=d.gpuAcceleration,H=d.adaptive,W=d.roundOffsets,F=d.isFixed,J=T.x,Q=J===void 0?0:J,G=T.y,Y=G===void 0?0:G,X=typeof W=="function"?W({x:Q,y:Y}):{x:Q,y:Y};Q=X.x,Y=X.y;var ge=T.hasOwnProperty("x"),we=T.hasOwnProperty("y"),re=at,ce=lt,Z=window;if(H){var le=Ri(a),pe="clientHeight",ve="clientWidth";le===bt(a)&&gn(le=Nn(a)).position!=="static"&&I==="absolute"&&(pe="scrollHeight",ve="scrollWidth"),(b===lt||(b===at||b===St)&&E===Ur)&&(ce=_t,Y-=(F&&le===Z&&Z.visualViewport?Z.visualViewport.height:le[pe])-p.height,Y*=M?1:-1),b!==at&&(b!==lt&&b!==_t||E!==Ur)||(re=St,Q-=(F&&le===Z&&Z.visualViewport?Z.visualViewport.width:le[ve])-p.width,Q*=M?1:-1)}var he,De=Object.assign({position:I},H&&Jv),Et=W===!0?function(Qt,ut){var Rt=Qt.x,Lt=Qt.y,Ie=ut.devicePixelRatio||1;return{x:Wr(Rt*Ie)/Ie||0,y:Wr(Lt*Ie)/Ie||0}}({x:Q,y:Y},bt(a)):{x:Q,y:Y};return Q=Et.x,Y=Et.y,M?Object.assign({},De,((he={})[ce]=we?"0":"",he[re]=ge?"0":"",he.transform=(Z.devicePixelRatio||1)<=1?"translate("+Q+"px, "+Y+"px)":"translate3d("+Q+"px, "+Y+"px, 0)",he)):Object.assign({},De,((s={})[ce]=we?Y+"px":"",s[re]=ge?Q+"px":"",s.transform="",s))}const la={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(d){var s=d.state,a=d.options,p=a.gpuAcceleration,b=p===void 0||p,E=a.adaptive,T=E===void 0||E,I=a.roundOffsets,M=I===void 0||I,H={placement:an(s.placement),variation:Kr(s.placement),popper:s.elements.popper,popperRect:s.rects.popper,gpuAcceleration:b,isFixed:s.options.strategy==="fixed"};s.modifiersData.popperOffsets!=null&&(s.styles.popper=Object.assign({},s.styles.popper,Hd(Object.assign({},H,{offsets:s.modifiersData.popperOffsets,position:s.options.strategy,adaptive:T,roundOffsets:M})))),s.modifiersData.arrow!=null&&(s.styles.arrow=Object.assign({},s.styles.arrow,Hd(Object.assign({},H,{offsets:s.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:M})))),s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-placement":s.placement})},data:{}};var Go={passive:!0};const aa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(d){var s=d.state,a=d.instance,p=d.options,b=p.scroll,E=b===void 0||b,T=p.resize,I=T===void 0||T,M=bt(s.elements.popper),H=[].concat(s.scrollParents.reference,s.scrollParents.popper);return E&&H.forEach(function(W){W.addEventListener("scroll",a.update,Go)}),I&&M.addEventListener("resize",a.update,Go),function(){E&&H.forEach(function(W){W.removeEventListener("scroll",a.update,Go)}),I&&M.removeEventListener("resize",a.update,Go)}},data:{}};var Zv={left:"right",right:"left",bottom:"top",top:"bottom"};function Xo(d){return d.replace(/left|right|bottom|top/g,function(s){return Zv[s]})}var e0={start:"end",end:"start"};function Ud(d){return d.replace(/start|end/g,function(s){return e0[s]})}function ua(d){var s=bt(d);return{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function ca(d){return Vr(Nn(d)).left+ua(d).scrollLeft}function da(d){var s=gn(d),a=s.overflow,p=s.overflowX,b=s.overflowY;return/auto|scroll|overlay|hidden/.test(a+b+p)}function Bd(d){return["html","body","#document"].indexOf(ln(d))>=0?d.ownerDocument.body:Ot(d)&&da(d)?d:Bd(Yo(d))}function Di(d,s){var a;s===void 0&&(s=[]);var p=Bd(d),b=p===((a=d.ownerDocument)==null?void 0:a.body),E=bt(p),T=b?[E].concat(E.visualViewport||[],da(p)?p:[]):p,I=s.concat(T);return b?I:I.concat(Di(Yo(T)))}function fa(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function Wd(d,s,a){return s===Zl?fa(function(p,b){var E=bt(p),T=Nn(p),I=E.visualViewport,M=T.clientWidth,H=T.clientHeight,W=0,F=0;if(I){M=I.width,H=I.height;var J=Ld();(J||!J&&b==="fixed")&&(W=I.offsetLeft,F=I.offsetTop)}return{width:M,height:H,x:W+ca(p),y:F}}(d,a)):or(s)?function(p,b){var E=Vr(p,!1,b==="fixed");return E.top=E.top+p.clientTop,E.left=E.left+p.clientLeft,E.bottom=E.top+p.clientHeight,E.right=E.left+p.clientWidth,E.width=p.clientWidth,E.height=p.clientHeight,E.x=E.left,E.y=E.top,E}(s,a):fa(function(p){var b,E=Nn(p),T=ua(p),I=(b=p.ownerDocument)==null?void 0:b.body,M=sr(E.scrollWidth,E.clientWidth,I?I.scrollWidth:0,I?I.clientWidth:0),H=sr(E.scrollHeight,E.clientHeight,I?I.scrollHeight:0,I?I.clientHeight:0),W=-T.scrollLeft+ca(p),F=-T.scrollTop;return gn(I||E).direction==="rtl"&&(W+=sr(E.clientWidth,I?I.clientWidth:0)-M),{width:M,height:H,x:W,y:F}}(Nn(d)))}function Vd(d){var s,a=d.reference,p=d.element,b=d.placement,E=b?an(b):null,T=b?Kr(b):null,I=a.x+a.width/2-p.width/2,M=a.y+a.height/2-p.height/2;switch(E){case lt:s={x:I,y:a.y-p.height};break;case _t:s={x:I,y:a.y+a.height};break;case St:s={x:a.x+a.width,y:M};break;case at:s={x:a.x-p.width,y:M};break;default:s={x:a.x,y:a.y}}var H=E?sa(E):null;if(H!=null){var W=H==="y"?"height":"width";switch(T){case ir:s[H]=s[H]-(a[W]/2-p[W]/2);break;case Ur:s[H]=s[H]+(a[W]/2-p[W]/2)}}return s}function Qr(d,s){s===void 0&&(s={});var a=s,p=a.placement,b=p===void 0?d.placement:p,E=a.strategy,T=E===void 0?d.strategy:E,I=a.boundary,M=I===void 0?bd:I,H=a.rootBoundary,W=H===void 0?Zl:H,F=a.elementContext,J=F===void 0?Br:F,Q=a.altBoundary,G=Q!==void 0&&Q,Y=a.padding,X=Y===void 0?0:Y,ge=zd(typeof X!="number"?X:$d(X,Hr)),we=J===Br?Ed:Br,re=d.rects.popper,ce=d.elements[G?we:J],Z=function(ut,Rt,Lt,Ie){var un=Rt==="clippingParents"?function(ye){var ct=Di(Yo(ye)),Dt=["absolute","fixed"].indexOf(gn(ye).position)>=0&&Ot(ye)?Ri(ye):ye;return or(Dt)?ct.filter(function(jn){return or(jn)&&Dd(jn,Dt)&&ln(jn)!=="body"}):[]}(ut):[].concat(Rt),cn=[].concat(un,[Lt]),Yr=cn[0],We=cn.reduce(function(ye,ct){var Dt=Wd(ut,ct,Ie);return ye.top=sr(Dt.top,ye.top),ye.right=Qo(Dt.right,ye.right),ye.bottom=Qo(Dt.bottom,ye.bottom),ye.left=sr(Dt.left,ye.left),ye},Wd(ut,Yr,Ie));return We.width=We.right-We.left,We.height=We.bottom-We.top,We.x=We.left,We.y=We.top,We}(or(ce)?ce:ce.contextElement||Nn(d.elements.popper),M,W,T),le=Vr(d.elements.reference),pe=Vd({reference:le,element:re,strategy:"absolute",placement:b}),ve=fa(Object.assign({},re,pe)),he=J===Br?ve:le,De={top:Z.top-he.top+ge.top,bottom:he.bottom-Z.bottom+ge.bottom,left:Z.left-he.left+ge.left,right:he.right-Z.right+ge.right},Et=d.modifiersData.offset;if(J===Br&&Et){var Qt=Et[b];Object.keys(De).forEach(function(ut){var Rt=[St,_t].indexOf(ut)>=0?1:-1,Lt=[lt,_t].indexOf(ut)>=0?"y":"x";De[ut]+=Qt[Lt]*Rt})}return De}function t0(d,s){s===void 0&&(s={});var a=s,p=a.placement,b=a.boundary,E=a.rootBoundary,T=a.padding,I=a.flipVariations,M=a.allowedAutoPlacements,H=M===void 0?ta:M,W=Kr(p),F=W?I?ea:ea.filter(function(G){return Kr(G)===W}):Hr,J=F.filter(function(G){return H.indexOf(G)>=0});J.length===0&&(J=F);var Q=J.reduce(function(G,Y){return G[Y]=Qr(d,{placement:Y,boundary:b,rootBoundary:E,padding:T})[an(Y)],G},{});return Object.keys(Q).sort(function(G,Y){return Q[G]-Q[Y]})}const Kd={name:"flip",enabled:!0,phase:"main",fn:function(d){var s=d.state,a=d.options,p=d.name;if(!s.modifiersData[p]._skip){for(var b=a.mainAxis,E=b===void 0||b,T=a.altAxis,I=T===void 0||T,M=a.fallbackPlacements,H=a.padding,W=a.boundary,F=a.rootBoundary,J=a.altBoundary,Q=a.flipVariations,G=Q===void 0||Q,Y=a.allowedAutoPlacements,X=s.options.placement,ge=an(X),we=M||(ge!==X&&G?function(ye){if(an(ye)===Ko)return[];var ct=Xo(ye);return[Ud(ye),ct,Ud(ct)]}(X):[Xo(X)]),re=[X].concat(we).reduce(function(ye,ct){return ye.concat(an(ct)===Ko?t0(s,{placement:ct,boundary:W,rootBoundary:F,padding:H,flipVariations:G,allowedAutoPlacements:Y}):ct)},[]),ce=s.rects.reference,Z=s.rects.popper,le=new Map,pe=!0,ve=re[0],he=0;he<re.length;he++){var De=re[he],Et=an(De),Qt=Kr(De)===ir,ut=[lt,_t].indexOf(Et)>=0,Rt=ut?"width":"height",Lt=Qr(s,{placement:De,boundary:W,rootBoundary:F,altBoundary:J,padding:H}),Ie=ut?Qt?St:at:Qt?_t:lt;ce[Rt]>Z[Rt]&&(Ie=Xo(Ie));var un=Xo(Ie),cn=[];if(E&&cn.push(Lt[Et]<=0),I&&cn.push(Lt[Ie]<=0,Lt[un]<=0),cn.every(function(ye){return ye})){ve=De,pe=!1;break}le.set(De,cn)}if(pe)for(var Yr=function(ye){var ct=re.find(function(Dt){var jn=le.get(Dt);if(jn)return jn.slice(0,ye).every(function(ss){return ss})});if(ct)return ve=ct,"break"},We=G?3:1;We>0&&Yr(We)!=="break";We--);s.placement!==ve&&(s.modifiersData[p]._skip=!0,s.placement=ve,s.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Qd(d,s,a){return a===void 0&&(a={x:0,y:0}),{top:d.top-s.height-a.y,right:d.right-s.width+a.x,bottom:d.bottom-s.height+a.y,left:d.left-s.width-a.x}}function Yd(d){return[lt,St,_t,at].some(function(s){return d[s]>=0})}const Gd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(d){var s=d.state,a=d.name,p=s.rects.reference,b=s.rects.popper,E=s.modifiersData.preventOverflow,T=Qr(s,{elementContext:"reference"}),I=Qr(s,{altBoundary:!0}),M=Qd(T,p),H=Qd(I,b,E),W=Yd(M),F=Yd(H);s.modifiersData[a]={referenceClippingOffsets:M,popperEscapeOffsets:H,isReferenceHidden:W,hasPopperEscaped:F},s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-reference-hidden":W,"data-popper-escaped":F})}},Xd={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(d){var s=d.state,a=d.options,p=d.name,b=a.offset,E=b===void 0?[0,0]:b,T=ta.reduce(function(W,F){return W[F]=function(J,Q,G){var Y=an(J),X=[at,lt].indexOf(Y)>=0?-1:1,ge=typeof G=="function"?G(Object.assign({},Q,{placement:J})):G,we=ge[0],re=ge[1];return we=we||0,re=(re||0)*X,[at,St].indexOf(Y)>=0?{x:re,y:we}:{x:we,y:re}}(F,s.rects,E),W},{}),I=T[s.placement],M=I.x,H=I.y;s.modifiersData.popperOffsets!=null&&(s.modifiersData.popperOffsets.x+=M,s.modifiersData.popperOffsets.y+=H),s.modifiersData[p]=T}},pa={name:"popperOffsets",enabled:!0,phase:"read",fn:function(d){var s=d.state,a=d.name;s.modifiersData[a]=Vd({reference:s.rects.reference,element:s.rects.popper,strategy:"absolute",placement:s.placement})},data:{}},qd={name:"preventOverflow",enabled:!0,phase:"main",fn:function(d){var s=d.state,a=d.options,p=d.name,b=a.mainAxis,E=b===void 0||b,T=a.altAxis,I=T!==void 0&&T,M=a.boundary,H=a.rootBoundary,W=a.altBoundary,F=a.padding,J=a.tether,Q=J===void 0||J,G=a.tetherOffset,Y=G===void 0?0:G,X=Qr(s,{boundary:M,rootBoundary:H,padding:F,altBoundary:W}),ge=an(s.placement),we=Kr(s.placement),re=!we,ce=sa(ge),Z=ce==="x"?"y":"x",le=s.modifiersData.popperOffsets,pe=s.rects.reference,ve=s.rects.popper,he=typeof Y=="function"?Y(Object.assign({},s.rects,{placement:s.placement})):Y,De=typeof he=="number"?{mainAxis:he,altAxis:he}:Object.assign({mainAxis:0,altAxis:0},he),Et=s.modifiersData.offset?s.modifiersData.offset[s.placement]:null,Qt={x:0,y:0};if(le){if(E){var ut,Rt=ce==="y"?lt:at,Lt=ce==="y"?_t:St,Ie=ce==="y"?"height":"width",un=le[ce],cn=un+X[Rt],Yr=un-X[Lt],We=Q?-ve[Ie]/2:0,ye=we===ir?pe[Ie]:ve[Ie],ct=we===ir?-ve[Ie]:-pe[Ie],Dt=s.elements.arrow,jn=Q&&Dt?oa(Dt):{width:0,height:0},ss=s.modifiersData["arrow#persistent"]?s.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Mf=ss[Rt],zf=ss[Lt],ls=Li(0,pe[Ie],jn[Ie]),B0=re?pe[Ie]/2-We-ls-Mf-De.mainAxis:ye-ls-Mf-De.mainAxis,W0=re?-pe[Ie]/2+We+ls+zf+De.mainAxis:ct+ls+zf+De.mainAxis,xa=s.elements.arrow&&Ri(s.elements.arrow),V0=xa?ce==="y"?xa.clientTop||0:xa.clientLeft||0:0,$f=(ut=Et==null?void 0:Et[ce])!=null?ut:0,K0=un+W0-$f,Ff=Li(Q?Qo(cn,un+B0-$f-V0):cn,un,Q?sr(Yr,K0):Yr);le[ce]=Ff,Qt[ce]=Ff-un}if(I){var Hf,Q0=ce==="x"?lt:at,Y0=ce==="x"?_t:St,dr=le[Z],as=Z==="y"?"height":"width",Uf=dr+X[Q0],Bf=dr-X[Y0],_a=[lt,at].indexOf(ge)!==-1,Wf=(Hf=Et==null?void 0:Et[Z])!=null?Hf:0,Vf=_a?Uf:dr-pe[as]-ve[as]-Wf+De.altAxis,Kf=_a?dr+pe[as]+ve[as]-Wf-De.altAxis:Bf,Qf=Q&&_a?function(G0,X0,Sa){var Yf=Li(G0,X0,Sa);return Yf>Sa?Sa:Yf}(Vf,dr,Kf):Li(Q?Vf:Uf,dr,Q?Kf:Bf);le[Z]=Qf,Qt[Z]=Qf-dr}s.modifiersData[p]=Qt}},requiresIfExists:["offset"]};function n0(d,s,a){a===void 0&&(a=!1);var p,b,E=Ot(s),T=Ot(s)&&function(F){var J=F.getBoundingClientRect(),Q=Wr(J.width)/F.offsetWidth||1,G=Wr(J.height)/F.offsetHeight||1;return Q!==1||G!==1}(s),I=Nn(s),M=Vr(d,T,a),H={scrollLeft:0,scrollTop:0},W={x:0,y:0};return(E||!E&&!a)&&((ln(s)!=="body"||da(I))&&(H=(p=s)!==bt(p)&&Ot(p)?{scrollLeft:(b=p).scrollLeft,scrollTop:b.scrollTop}:ua(p)),Ot(s)?((W=Vr(s,!0)).x+=s.clientLeft,W.y+=s.clientTop):I&&(W.x=ca(I))),{x:M.left+H.scrollLeft-W.x,y:M.top+H.scrollTop-W.y,width:M.width,height:M.height}}function r0(d){var s=new Map,a=new Set,p=[];function b(E){a.add(E.name),[].concat(E.requires||[],E.requiresIfExists||[]).forEach(function(T){if(!a.has(T)){var I=s.get(T);I&&b(I)}}),p.push(E)}return d.forEach(function(E){s.set(E.name,E)}),d.forEach(function(E){a.has(E.name)||b(E)}),p}var Jd={placement:"bottom",modifiers:[],strategy:"absolute"};function Zd(){for(var d=arguments.length,s=new Array(d),a=0;a<d;a++)s[a]=arguments[a];return!s.some(function(p){return!(p&&typeof p.getBoundingClientRect=="function")})}function qo(d){d===void 0&&(d={});var s=d,a=s.defaultModifiers,p=a===void 0?[]:a,b=s.defaultOptions,E=b===void 0?Jd:b;return function(T,I,M){M===void 0&&(M=E);var H,W,F={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jd,E),modifiersData:{},elements:{reference:T,popper:I},attributes:{},styles:{}},J=[],Q=!1,G={state:F,setOptions:function(X){var ge=typeof X=="function"?X(F.options):X;Y(),F.options=Object.assign({},E,F.options,ge),F.scrollParents={reference:or(T)?Di(T):T.contextElement?Di(T.contextElement):[],popper:Di(I)};var we,re,ce=function(Z){var le=r0(Z);return Rd.reduce(function(pe,ve){return pe.concat(le.filter(function(he){return he.phase===ve}))},[])}((we=[].concat(p,F.options.modifiers),re=we.reduce(function(Z,le){var pe=Z[le.name];return Z[le.name]=pe?Object.assign({},pe,le,{options:Object.assign({},pe.options,le.options),data:Object.assign({},pe.data,le.data)}):le,Z},{}),Object.keys(re).map(function(Z){return re[Z]})));return F.orderedModifiers=ce.filter(function(Z){return Z.enabled}),F.orderedModifiers.forEach(function(Z){var le=Z.name,pe=Z.options,ve=pe===void 0?{}:pe,he=Z.effect;if(typeof he=="function"){var De=he({state:F,name:le,instance:G,options:ve});J.push(De||function(){})}}),G.update()},forceUpdate:function(){if(!Q){var X=F.elements,ge=X.reference,we=X.popper;if(Zd(ge,we)){F.rects={reference:n0(ge,Ri(we),F.options.strategy==="fixed"),popper:oa(we)},F.reset=!1,F.placement=F.options.placement,F.orderedModifiers.forEach(function(he){return F.modifiersData[he.name]=Object.assign({},he.data)});for(var re=0;re<F.orderedModifiers.length;re++)if(F.reset!==!0){var ce=F.orderedModifiers[re],Z=ce.fn,le=ce.options,pe=le===void 0?{}:le,ve=ce.name;typeof Z=="function"&&(F=Z({state:F,options:pe,name:ve,instance:G})||F)}else F.reset=!1,re=-1}}},update:(H=function(){return new Promise(function(X){G.forceUpdate(),X(F)})},function(){return W||(W=new Promise(function(X){Promise.resolve().then(function(){W=void 0,X(H())})})),W}),destroy:function(){Y(),Q=!0}};if(!Zd(T,I))return G;function Y(){J.forEach(function(X){return X()}),J=[]}return G.setOptions(M).then(function(X){!Q&&M.onFirstUpdate&&M.onFirstUpdate(X)}),G}}var i0=qo(),o0=qo({defaultModifiers:[aa,pa,la,ra]}),ha=qo({defaultModifiers:[aa,pa,la,ra,Xd,Kd,qd,Fd,Gd]});const ef=Object.freeze(Object.defineProperty({__proto__:null,afterMain:jd,afterRead:Pd,afterWrite:Od,applyStyles:ra,arrow:Fd,auto:Ko,basePlacements:Hr,beforeMain:Td,beforeRead:kd,beforeWrite:Ad,bottom:_t,clippingParents:bd,computeStyles:la,createPopper:ha,createPopperBase:i0,createPopperLite:o0,detectOverflow:Qr,end:Ur,eventListeners:aa,flip:Kd,hide:Gd,left:at,main:Nd,modifierPhases:Rd,offset:Xd,placements:ta,popper:Br,popperGenerator:qo,popperOffsets:pa,preventOverflow:qd,read:Cd,reference:Ed,right:St,start:ir,top:lt,variationPlacements:ea,viewport:Zl,write:Id},Symbol.toStringTag,{value:"Module"})),tf="dropdown",s0="ArrowUp",nf="ArrowDown",rf="click.bs.dropdown.data-api",of="keydown.bs.dropdown.data-api",Mi="show",lr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',l0=`${lr}.show`,Jo=".dropdown-menu",a0=A()?"top-end":"top-start",u0=A()?"top-start":"top-end",c0=A()?"bottom-end":"bottom-start",d0=A()?"bottom-start":"bottom-end",f0=A()?"left-start":"right-start",p0=A()?"right-start":"left-start",h0={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},m0={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Kt extends Ee{constructor(s,a){super(s,a),this._popper=null,this._parent=this._element.parentNode,this._menu=V.next(this._element,Jo)[0]||V.prev(this._element,Jo)[0]||V.findOne(Jo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return h0}static get DefaultType(){return m0}static get NAME(){return tf}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const s={relatedTarget:this._element};if(!C.trigger(this._element,"show.bs.dropdown",s).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const a of[].concat(...document.body.children))C.on(a,"mouseover",g);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Mi),this._element.classList.add(Mi),C.trigger(this._element,"shown.bs.dropdown",s)}}hide(){if(y(this._element)||!this._isShown())return;const s={relatedTarget:this._element};this._completeHide(s)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(s){if(!C.trigger(this._element,"hide.bs.dropdown",s).defaultPrevented){if("ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))C.off(a,"mouseover",g);this._popper&&this._popper.destroy(),this._menu.classList.remove(Mi),this._element.classList.remove(Mi),this._element.setAttribute("aria-expanded","false"),Ae.removeDataAttribute(this._menu,"popper"),C.trigger(this._element,"hidden.bs.dropdown",s)}}_getConfig(s){if(typeof(s=super._getConfig(s)).reference=="object"&&!u(s.reference)&&typeof s.reference.getBoundingClientRect!="function")throw new TypeError(`${tf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return s}_createPopper(){if(ef===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let s=this._element;this._config.reference==="parent"?s=this._parent:u(this._config.reference)?s=c(this._config.reference):typeof this._config.reference=="object"&&(s=this._config.reference);const a=this._getPopperConfig();this._popper=ha(s,this._menu,a)}_isShown(){return this._menu.classList.contains(Mi)}_getPlacement(){const s=this._parent;if(s.classList.contains("dropend"))return f0;if(s.classList.contains("dropstart"))return p0;if(s.classList.contains("dropup-center"))return"top";if(s.classList.contains("dropdown-center"))return"bottom";const a=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return s.classList.contains("dropup")?a?u0:a0:a?d0:c0}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(a=>Number.parseInt(a,10)):typeof s=="function"?a=>s(a,this._element):s}_getPopperConfig(){const s={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ae.setDataAttribute(this._menu,"popper","static"),s.modifiers=[{name:"applyStyles",enabled:!1}]),{...s,...m(this._config.popperConfig,[s])}}_selectMenuItem({key:s,target:a}){const p=V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(b=>f(b));p.length&&P(p,a,s===nf,!p.includes(a)).focus()}static jQueryInterface(s){return this.each(function(){const a=Kt.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0)throw new TypeError(`No method named "${s}"`);a[s]()}})}static clearMenus(s){if(s.button===2||s.type==="keyup"&&s.key!=="Tab")return;const a=V.find(l0);for(const p of a){const b=Kt.getInstance(p);if(!b||b._config.autoClose===!1)continue;const E=s.composedPath(),T=E.includes(b._menu);if(E.includes(b._element)||b._config.autoClose==="inside"&&!T||b._config.autoClose==="outside"&&T||b._menu.contains(s.target)&&(s.type==="keyup"&&s.key==="Tab"||/input|select|option|textarea|form/i.test(s.target.tagName)))continue;const I={relatedTarget:b._element};s.type==="click"&&(I.clickEvent=s),b._completeHide(I)}}static dataApiKeydownHandler(s){const a=/input|textarea/i.test(s.target.tagName),p=s.key==="Escape",b=[s0,nf].includes(s.key);if(!b&&!p||a&&!p)return;s.preventDefault();const E=this.matches(lr)?this:V.prev(this,lr)[0]||V.next(this,lr)[0]||V.findOne(lr,s.delegateTarget.parentNode),T=Kt.getOrCreateInstance(E);if(b)return s.stopPropagation(),T.show(),void T._selectMenuItem(s);T._isShown()&&(s.stopPropagation(),T.hide(),E.focus())}}C.on(document,of,lr,Kt.dataApiKeydownHandler),C.on(document,of,Jo,Kt.dataApiKeydownHandler),C.on(document,rf,Kt.clearMenus),C.on(document,"keyup.bs.dropdown.data-api",Kt.clearMenus),C.on(document,rf,lr,function(d){d.preventDefault(),Kt.getOrCreateInstance(this).toggle()}),w(Kt);const sf="show",lf="mousedown.bs.backdrop",g0={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},v0={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class af extends ot{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return g0}static get DefaultType(){return v0}static get NAME(){return"backdrop"}show(s){if(!this._config.isVisible)return void m(s);this._append();const a=this._getElement();this._config.isAnimated&&x(a),a.classList.add(sf),this._emulateAnimation(()=>{m(s)})}hide(s){this._config.isVisible?(this._getElement().classList.remove(sf),this._emulateAnimation(()=>{this.dispose(),m(s)})):m(s)}dispose(){this._isAppended&&(C.off(this._element,lf),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add("fade"),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=c(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),C.on(s,lf,()=>{m(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){_(s,this._getElement(),this._config.isAnimated)}}const uf=".bs.focustrap",cf="backward",y0={autofocus:!0,trapElement:null},w0={autofocus:"boolean",trapElement:"element"};class df extends ot{constructor(s){super(),this._config=this._getConfig(s),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return y0}static get DefaultType(){return w0}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),C.off(document,uf),C.on(document,"focusin.bs.focustrap",s=>this._handleFocusin(s)),C.on(document,"keydown.tab.bs.focustrap",s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,C.off(document,uf))}_handleFocusin(s){const{trapElement:a}=this._config;if(s.target===document||s.target===a||a.contains(s.target))return;const p=V.focusableChildren(a);p.length===0?a.focus():this._lastTabNavDirection===cf?p[p.length-1].focus():p[0].focus()}_handleKeydown(s){s.key==="Tab"&&(this._lastTabNavDirection=s.shiftKey?cf:"forward")}}const ff=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pf=".sticky-top",Zo="padding-right",hf="margin-right";class ma{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zo,a=>a+s),this._setElementAttributes(ff,Zo,a=>a+s),this._setElementAttributes(pf,hf,a=>a-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zo),this._resetElementAttributes(ff,Zo),this._resetElementAttributes(pf,hf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,a,p){const b=this.getWidth();this._applyManipulationCallback(s,E=>{if(E!==this._element&&window.innerWidth>E.clientWidth+b)return;this._saveInitialAttribute(E,a);const T=window.getComputedStyle(E).getPropertyValue(a);E.style.setProperty(a,`${p(Number.parseFloat(T))}px`)})}_saveInitialAttribute(s,a){const p=s.style.getPropertyValue(a);p&&Ae.setDataAttribute(s,a,p)}_resetElementAttributes(s,a){this._applyManipulationCallback(s,p=>{const b=Ae.getDataAttribute(p,a);b!==null?(Ae.removeDataAttribute(p,a),p.style.setProperty(a,b)):p.style.removeProperty(a)})}_applyManipulationCallback(s,a){if(u(s))a(s);else for(const p of V.find(s,this._element))a(p)}}const mf=".bs.modal",gf="hidden.bs.modal",vf="show.bs.modal",yf="modal-open",wf="show",ga="modal-static",x0={backdrop:!0,focus:!0,keyboard:!0},_0={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ar extends Ee{constructor(s,a){super(s,a),this._dialog=V.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ma,this._addEventListeners()}static get Default(){return x0}static get DefaultType(){return _0}static get NAME(){return"modal"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||C.trigger(this._element,vf,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(yf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){this._isShown&&!this._isTransitioning&&(C.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(wf),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){C.off(window,mf),C.off(this._dialog,mf),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new af({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new df({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const a=V.findOne(".modal-body",this._dialog);a&&(a.scrollTop=0),x(this._element),this._element.classList.add(wf),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,C.trigger(this._element,"shown.bs.modal",{relatedTarget:s})},this._dialog,this._isAnimated())}_addEventListeners(){C.on(this._element,"keydown.dismiss.bs.modal",s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),C.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),C.on(this._element,"mousedown.dismiss.bs.modal",s=>{C.one(this._element,"click.dismiss.bs.modal",a=>{this._element===s.target&&this._element===a.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(yf),this._resetAdjustments(),this._scrollBar.reset(),C.trigger(this._element,gf)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(C.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,a=this._element.style.overflowY;a==="hidden"||this._element.classList.contains(ga)||(s||(this._element.style.overflowY="hidden"),this._element.classList.add(ga),this._queueCallback(()=>{this._element.classList.remove(ga),this._queueCallback(()=>{this._element.style.overflowY=a},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,a=this._scrollBar.getWidth(),p=a>0;if(p&&!s){const b=A()?"paddingLeft":"paddingRight";this._element.style[b]=`${a}px`}if(!p&&s){const b=A()?"paddingRight":"paddingLeft";this._element.style[b]=`${a}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,a){return this.each(function(){const p=ar.getOrCreateInstance(this,s);if(typeof s=="string"){if(p[s]===void 0)throw new TypeError(`No method named "${s}"`);p[s](a)}})}}C.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(d){const s=V.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&d.preventDefault(),C.one(s,vf,p=>{p.defaultPrevented||C.one(s,gf,()=>{f(this)&&this.focus()})});const a=V.findOne(".modal.show");a&&ar.getInstance(a).hide(),ar.getOrCreateInstance(s).toggle(this)}),Vt(ar),w(ar);const xf="show",_f="showing",Sf="hiding",bf=".offcanvas.show",Ef="hidePrevented.bs.offcanvas",kf="hidden.bs.offcanvas",S0={backdrop:!0,keyboard:!0,scroll:!1},b0={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class vn extends Ee{constructor(s,a){super(s,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return S0}static get DefaultType(){return b0}static get NAME(){return"offcanvas"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||C.trigger(this._element,"show.bs.offcanvas",{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ma().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(_f),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(xf),this._element.classList.remove(_f),C.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:s})},this._element,!0))}hide(){this._isShown&&(C.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Sf),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(xf,Sf),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ma().reset(),C.trigger(this._element,kf)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=!!this._config.backdrop;return new af({className:"offcanvas-backdrop",isVisible:s,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:s?()=>{this._config.backdrop!=="static"?this.hide():C.trigger(this._element,Ef)}:null})}_initializeFocusTrap(){return new df({trapElement:this._element})}_addEventListeners(){C.on(this._element,"keydown.dismiss.bs.offcanvas",s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():C.trigger(this._element,Ef))})}static jQueryInterface(s){return this.each(function(){const a=vn.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);a[s](this)}})}}C.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(d){const s=V.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),y(this))return;C.one(s,kf,()=>{f(this)&&this.focus()});const a=V.findOne(bf);a&&a!==s&&vn.getInstance(a).hide(),vn.getOrCreateInstance(s).toggle(this)}),C.on(window,"load.bs.offcanvas.data-api",()=>{for(const d of V.find(bf))vn.getOrCreateInstance(d).show()}),C.on(window,"resize.bs.offcanvas",()=>{for(const d of V.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(d).position!=="fixed"&&vn.getOrCreateInstance(d).hide()}),Vt(vn),w(vn);const Cf={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},E0=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),k0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,C0=(d,s)=>{const a=d.nodeName.toLowerCase();return s.includes(a)?!E0.has(a)||!!k0.test(d.nodeValue):s.filter(p=>p instanceof RegExp).some(p=>p.test(a))},P0={allowList:Cf,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},T0={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},N0={entry:"(string|element|function|null)",selector:"(string|element)"};class j0 extends ot{constructor(s){super(),this._config=this._getConfig(s)}static get Default(){return P0}static get DefaultType(){return T0}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(s=>this._resolvePossibleFunction(s)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(s){return this._checkContent(s),this._config.content={...this._config.content,...s},this}toHtml(){const s=document.createElement("div");s.innerHTML=this._maybeSanitize(this._config.template);for(const[b,E]of Object.entries(this._config.content))this._setContent(s,E,b);const a=s.children[0],p=this._resolvePossibleFunction(this._config.extraClass);return p&&a.classList.add(...p.split(" ")),a}_typeCheckConfig(s){super._typeCheckConfig(s),this._checkContent(s.content)}_checkContent(s){for(const[a,p]of Object.entries(s))super._typeCheckConfig({selector:a,entry:p},N0)}_setContent(s,a,p){const b=V.findOne(p,s);b&&((a=this._resolvePossibleFunction(a))?u(a)?this._putElementInTemplate(c(a),b):this._config.html?b.innerHTML=this._maybeSanitize(a):b.textContent=a:b.remove())}_maybeSanitize(s){return this._config.sanitize?function(a,p,b){if(!a.length)return a;if(b&&typeof b=="function")return b(a);const E=new window.DOMParser().parseFromString(a,"text/html"),T=[].concat(...E.body.querySelectorAll("*"));for(const I of T){const M=I.nodeName.toLowerCase();if(!Object.keys(p).includes(M)){I.remove();continue}const H=[].concat(...I.attributes),W=[].concat(p["*"]||[],p[M]||[]);for(const F of H)C0(F,W)||I.removeAttribute(F.nodeName)}return E.body.innerHTML}(s,this._config.allowList,this._config.sanitizeFn):s}_resolvePossibleFunction(s){return m(s,[this])}_putElementInTemplate(s,a){if(this._config.html)return a.innerHTML="",void a.append(s);a.textContent=s.textContent}}const A0=new Set(["sanitize","allowList","sanitizeFn"]),va="fade",es="show",Pf=".modal",Tf="hide.bs.modal",ts="hover",Nf="focus",I0={AUTO:"auto",TOP:"top",RIGHT:A()?"left":"right",BOTTOM:"bottom",LEFT:A()?"right":"left"},O0={allowList:Cf,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},R0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ur extends Ee{constructor(s,a){if(ef===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(s,a),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return O0}static get DefaultType(){return R0}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),C.off(this._element.closest(Pf),Tf,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const s=C.trigger(this._element,this.constructor.eventName("show")),a=(v(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(s.defaultPrevented||!a)return;this._disposePopper();const p=this._getTipElement();this._element.setAttribute("aria-describedby",p.getAttribute("id"));const{container:b}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(b.append(p),C.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(p),p.classList.add(es),"ontouchstart"in document.documentElement)for(const E of[].concat(...document.body.children))C.on(E,"mouseover",g);this._queueCallback(()=>{C.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!C.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))C.off(s,"mouseover",g);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),C.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(s){const a=this._getTemplateFactory(s).toHtml();if(!a)return null;a.classList.remove(va,es),a.classList.add(`bs-${this.constructor.NAME}-auto`);const p=(b=>{do b+=Math.floor(1e6*Math.random());while(document.getElementById(b));return b})(this.constructor.NAME).toString();return a.setAttribute("id",p),this._isAnimated()&&a.classList.add(va),a}setContent(s){this._newContent=s,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(s){return this._templateFactory?this._templateFactory.changeContent(s):this._templateFactory=new j0({...this._config,content:s,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(s){return this.constructor.getOrCreateInstance(s.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(va)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(s){const a=m(this._config.placement,[this,s,this._element]),p=I0[a.toUpperCase()];return ha(this._element,s,this._getPopperConfig(p))}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(a=>Number.parseInt(a,10)):typeof s=="function"?a=>s(a,this._element):s}_resolvePossibleFunction(s){return m(s,[this._element])}_getPopperConfig(s){const a={placement:s,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:p=>{this._getTipElement().setAttribute("data-popper-placement",p.state.placement)}}]};return{...a,...m(this._config.popperConfig,[a])}}_setListeners(){const s=this._config.trigger.split(" ");for(const a of s)if(a==="click")C.on(this._element,this.constructor.eventName("click"),this._config.selector,p=>{this._initializeOnDelegatedTarget(p).toggle()});else if(a!=="manual"){const p=a===ts?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),b=a===ts?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");C.on(this._element,p,this._config.selector,E=>{const T=this._initializeOnDelegatedTarget(E);T._activeTrigger[E.type==="focusin"?Nf:ts]=!0,T._enter()}),C.on(this._element,b,this._config.selector,E=>{const T=this._initializeOnDelegatedTarget(E);T._activeTrigger[E.type==="focusout"?Nf:ts]=T._element.contains(E.relatedTarget),T._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},C.on(this._element.closest(Pf),Tf,this._hideModalHandler)}_fixTitle(){const s=this._element.getAttribute("title");s&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",s),this._element.setAttribute("data-bs-original-title",s),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(s,a){clearTimeout(this._timeout),this._timeout=setTimeout(s,a)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(s){const a=Ae.getDataAttributes(this._element);for(const p of Object.keys(a))A0.has(p)&&delete a[p];return s={...a,...typeof s=="object"&&s?s:{}},s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s.container=s.container===!1?document.body:c(s.container),typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),typeof s.title=="number"&&(s.title=s.title.toString()),typeof s.content=="number"&&(s.content=s.content.toString()),s}_getDelegateConfig(){const s={};for(const[a,p]of Object.entries(this._config))this.constructor.Default[a]!==p&&(s[a]=p);return s.selector=!1,s.trigger="manual",s}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(s){return this.each(function(){const a=ur.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0)throw new TypeError(`No method named "${s}"`);a[s]()}})}}w(ur);const L0={...ur.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},D0={...ur.DefaultType,content:"(null|string|element|function)"};class ns extends ur{static get Default(){return L0}static get DefaultType(){return D0}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(s){return this.each(function(){const a=ns.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0)throw new TypeError(`No method named "${s}"`);a[s]()}})}}w(ns);const jf="click.bs.scrollspy",zi="active",Af="[href]",M0={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},z0={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class $i extends Ee{constructor(s,a){super(s,a),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return M0}static get DefaultType(){return z0}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const s of this._observableSections.values())this._observer.observe(s)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(s){return s.target=c(s.target)||document.body,s.rootMargin=s.offset?`${s.offset}px 0px -30%`:s.rootMargin,typeof s.threshold=="string"&&(s.threshold=s.threshold.split(",").map(a=>Number.parseFloat(a))),s}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(C.off(this._config.target,jf),C.on(this._config.target,jf,Af,s=>{const a=this._observableSections.get(s.target.hash);if(a){s.preventDefault();const p=this._rootElement||window,b=a.offsetTop-this._element.offsetTop;if(p.scrollTo)return void p.scrollTo({top:b,behavior:"smooth"});p.scrollTop=b}}))}_getNewObserver(){const s={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(a=>this._observerCallback(a),s)}_observerCallback(s){const a=T=>this._targetLinks.get(`#${T.target.id}`),p=T=>{this._previousScrollData.visibleEntryTop=T.target.offsetTop,this._process(a(T))},b=(this._rootElement||document.documentElement).scrollTop,E=b>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=b;for(const T of s){if(!T.isIntersecting){this._activeTarget=null,this._clearActiveClass(a(T));continue}const I=T.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(E&&I){if(p(T),!b)return}else E||I||p(T)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const s=V.find(Af,this._config.target);for(const a of s){if(!a.hash||y(a))continue;const p=V.findOne(decodeURI(a.hash),this._element);f(p)&&(this._targetLinks.set(decodeURI(a.hash),a),this._observableSections.set(a.hash,p))}}_process(s){this._activeTarget!==s&&(this._clearActiveClass(this._config.target),this._activeTarget=s,s.classList.add(zi),this._activateParents(s),C.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:s}))}_activateParents(s){if(s.classList.contains("dropdown-item"))V.findOne(".dropdown-toggle",s.closest(".dropdown")).classList.add(zi);else for(const a of V.parents(s,".nav, .list-group"))for(const p of V.prev(a,".nav-link, .nav-item > .nav-link, .list-group-item"))p.classList.add(zi)}_clearActiveClass(s){s.classList.remove(zi);const a=V.find("[href].active",s);for(const p of a)p.classList.remove(zi)}static jQueryInterface(s){return this.each(function(){const a=$i.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);a[s]()}})}}C.on(window,"load.bs.scrollspy.data-api",()=>{for(const d of V.find('[data-bs-spy="scroll"]'))$i.getOrCreateInstance(d)}),w($i);const $0="ArrowLeft",If="ArrowRight",F0="ArrowUp",Of="ArrowDown",rs="active",Rf="fade",ya="show",Lf='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',wa=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Lf}`;class cr extends Ee{constructor(s){super(s),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),C.on(this._element,"keydown.bs.tab",a=>this._keydown(a)))}static get NAME(){return"tab"}show(){const s=this._element;if(this._elemIsActive(s))return;const a=this._getActiveElem(),p=a?C.trigger(a,"hide.bs.tab",{relatedTarget:s}):null;C.trigger(s,"show.bs.tab",{relatedTarget:a}).defaultPrevented||p&&p.defaultPrevented||(this._deactivate(a,s),this._activate(s,a))}_activate(s,a){s&&(s.classList.add(rs),this._activate(V.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0),this._toggleDropDown(s,!0),C.trigger(s,"shown.bs.tab",{relatedTarget:a})):s.classList.add(ya)},s,s.classList.contains(Rf)))}_deactivate(s,a){s&&(s.classList.remove(rs),s.blur(),this._deactivate(V.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.setAttribute("aria-selected",!1),s.setAttribute("tabindex","-1"),this._toggleDropDown(s,!1),C.trigger(s,"hidden.bs.tab",{relatedTarget:a})):s.classList.remove(ya)},s,s.classList.contains(Rf)))}_keydown(s){if(![$0,If,F0,Of].includes(s.key))return;s.stopPropagation(),s.preventDefault();const a=[If,Of].includes(s.key),p=P(this._getChildren().filter(b=>!y(b)),s.target,a,!0);p&&(p.focus({preventScroll:!0}),cr.getOrCreateInstance(p).show())}_getChildren(){return V.find(wa,this._parent)}_getActiveElem(){return this._getChildren().find(s=>this._elemIsActive(s))||null}_setInitialAttributes(s,a){this._setAttributeIfNotExists(s,"role","tablist");for(const p of a)this._setInitialAttributesOnChild(p)}_setInitialAttributesOnChild(s){s=this._getInnerElement(s);const a=this._elemIsActive(s),p=this._getOuterElement(s);s.setAttribute("aria-selected",a),p!==s&&this._setAttributeIfNotExists(p,"role","presentation"),a||s.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(s,"role","tab"),this._setInitialAttributesOnTargetPanel(s)}_setInitialAttributesOnTargetPanel(s){const a=V.getElementFromSelector(s);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),s.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`${s.id}`))}_toggleDropDown(s,a){const p=this._getOuterElement(s);if(!p.classList.contains("dropdown"))return;const b=(E,T)=>{const I=V.findOne(E,p);I&&I.classList.toggle(T,a)};b(".dropdown-toggle",rs),b(".dropdown-menu",ya),p.setAttribute("aria-expanded",a)}_setAttributeIfNotExists(s,a,p){s.hasAttribute(a)||s.setAttribute(a,p)}_elemIsActive(s){return s.classList.contains(rs)}_getInnerElement(s){return s.matches(wa)?s:V.findOne(wa,s)}_getOuterElement(s){return s.closest(".nav-item, .list-group-item")||s}static jQueryInterface(s){return this.each(function(){const a=cr.getOrCreateInstance(this);if(typeof s=="string"){if(a[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);a[s]()}})}}C.on(document,"click.bs.tab",Lf,function(d){["A","AREA"].includes(this.tagName)&&d.preventDefault(),y(this)||cr.getOrCreateInstance(this).show()}),C.on(window,"load.bs.tab",()=>{for(const d of V.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))cr.getOrCreateInstance(d)}),w(cr);const Df="hide",is="show",os="showing",H0={animation:"boolean",autohide:"boolean",delay:"number"},U0={animation:!0,autohide:!0,delay:5e3};class Fi extends Ee{constructor(s,a){super(s,a),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return U0}static get DefaultType(){return H0}static get NAME(){return"toast"}show(){C.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Df),x(this._element),this._element.classList.add(is,os),this._queueCallback(()=>{this._element.classList.remove(os),C.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(C.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(os),this._queueCallback(()=>{this._element.classList.add(Df),this._element.classList.remove(os,is),C.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(is),super.dispose()}isShown(){return this._element.classList.contains(is)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(s,a){switch(s.type){case"mouseover":case"mouseout":this._hasMouseInteraction=a;break;case"focusin":case"focusout":this._hasKeyboardInteraction=a}if(a)return void this._clearTimeout();const p=s.relatedTarget;this._element===p||this._element.contains(p)||this._maybeScheduleHide()}_setListeners(){C.on(this._element,"mouseover.bs.toast",s=>this._onInteraction(s,!0)),C.on(this._element,"mouseout.bs.toast",s=>this._onInteraction(s,!1)),C.on(this._element,"focusin.bs.toast",s=>this._onInteraction(s,!0)),C.on(this._element,"focusout.bs.toast",s=>this._onInteraction(s,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(s){return this.each(function(){const a=Fi.getOrCreateInstance(this,s);if(typeof s=="string"){if(a[s]===void 0)throw new TypeError(`No method named "${s}"`);a[s](this)}})}}return Vt(Fi),w(Fi),{Alert:st,Button:on,Carousel:$r,Collapse:Fr,Dropdown:Kt,Modal:ar,Offcanvas:vn,Popover:ns,ScrollSpy:$i,Tab:cr,Toast:Fi,Tooltip:ur}})})(bw);var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Qe.apply(this,arguments)};function No(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Se="-ms-",uo="-moz-",fe="-webkit-",Wg="comm",Fl="rule",rd="decl",Ew="@import",Vg="@keyframes",kw="@layer",Cw=Math.abs,id=String.fromCharCode,Pw=Object.assign;function Tw(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function Kg(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Hs(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function Ei(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function od(e){return e.length}function Cs(e,t){return t.push(e),e}function Nw(e,t){return e.map(t).join("")}var Hl=1,ki=1,Qg=0,Wt=0,$e=0,Ai="";function Ul(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Hl,column:ki,length:l,return:""}}function Gi(e,t){return Pw(Ul("",null,null,"",null,null,0),e,{length:-e.length},t)}function jw(){return $e}function Aw(){return $e=Wt>0?Ke(Ai,--Wt):0,ki--,$e===10&&(ki=1,Hl--),$e}function tn(){return $e=Wt<Qg?Ke(Ai,Wt++):0,ki++,$e===10&&(ki=1,Hl++),$e}function br(){return Ke(Ai,Wt)}function Us(){return Wt}function Bl(e,t){return Ei(Ai,e,t)}function Yu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Iw(e){return Hl=ki=1,Qg=xn(Ai=e),Wt=0,[]}function Ow(e){return Ai="",e}function Ga(e){return Kg(Bl(Wt-1,Gu(e===91?e+2:e===40?e+1:e)))}function Rw(e){for(;($e=br())&&$e<33;)tn();return Yu(e)>2||Yu($e)>3?"":" "}function Lw(e,t){for(;--t&&tn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Bl(e,Us()+(t<6&&br()==32&&tn()==32))}function Gu(e){for(;tn();)switch($e){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Gu($e);break;case 40:e===41&&Gu(e);break;case 92:tn();break}return Wt}function Dw(e,t){for(;tn()&&e+$e!==47+10;)if(e+$e===42+42&&br()===47)break;return"/*"+Bl(t,Wt-1)+"*"+id(e===47?e:tn())}function Mw(e){for(;!Yu(br());)tn();return Bl(e,Wt)}function zw(e){return Ow(Bs("",null,null,null,[""],e=Iw(e),0,[0],e))}function Bs(e,t,n,r,i,o,l,u,c){for(var f=0,y=0,v=l,g=0,x=0,S=0,k=1,A=1,w=1,m=0,_="",P=i,N=o,O=r,j=_;A;)switch(S=m,m=tn()){case 40:if(S!=108&&Ke(j,v-1)==58){Hs(j+=ee(Ga(m),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:j+=Ga(m);break;case 9:case 10:case 13:case 32:j+=Rw(S);break;case 92:j+=Lw(Us()-1,7);continue;case 47:switch(br()){case 42:case 47:Cs($w(Dw(tn(),Us()),t,n),c);break;default:j+="/"}break;case 123*k:u[f++]=xn(j)*w;case 125*k:case 59:case 0:switch(m){case 0:case 125:A=0;case 59+y:w==-1&&(j=ee(j,/\f/g,"")),x>0&&xn(j)-v&&Cs(x>32?oh(j+";",r,n,v-1):oh(ee(j," ","")+";",r,n,v-2),c);break;case 59:j+=";";default:if(Cs(O=ih(j,t,n,f,y,i,u,_,P=[],N=[],v),o),m===123)if(y===0)Bs(j,t,O,O,P,o,v,u,N);else switch(g===99&&Ke(j,3)===110?100:g){case 100:case 108:case 109:case 115:Bs(e,O,O,r&&Cs(ih(e,O,O,0,0,i,u,_,i,P=[],v),N),i,N,v,u,r?P:N);break;default:Bs(j,O,O,O,[""],N,0,u,N)}}f=y=x=0,k=w=1,_=j="",v=l;break;case 58:v=1+xn(j),x=S;default:if(k<1){if(m==123)--k;else if(m==125&&k++==0&&Aw()==125)continue}switch(j+=id(m),m*k){case 38:w=y>0?1:(j+="\f",-1);break;case 44:u[f++]=(xn(j)-1)*w,w=1;break;case 64:br()===45&&(j+=Ga(tn())),g=br(),y=v=xn(_=j+=Mw(Us())),m++;break;case 45:S===45&&xn(j)==2&&(k=0)}}return o}function ih(e,t,n,r,i,o,l,u,c,f,y){for(var v=i-1,g=i===0?o:[""],x=od(g),S=0,k=0,A=0;S<r;++S)for(var w=0,m=Ei(e,v+1,v=Cw(k=l[S])),_=e;w<x;++w)(_=Kg(k>0?g[w]+" "+m:ee(m,/&\f/g,g[w])))&&(c[A++]=_);return Ul(e,t,n,i===0?Fl:u,c,f,y)}function $w(e,t,n){return Ul(e,t,n,Wg,id(jw()),Ei(e,2,-2),0)}function oh(e,t,n,r){return Ul(e,t,n,rd,Ei(e,0,r),Ei(e,r+1,-1),r)}function Yg(e,t,n){switch(Tw(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+e+e;case 4789:return uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+uo+e+Se+e+e;case 5936:switch(Ke(e,t+11)){case 114:return fe+e+Se+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+Se+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+Se+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+Se+e+e;case 6165:return fe+e+Se+"flex-"+e+e;case 5187:return fe+e+ee(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return fe+e+Se+"flex-item-"+ee(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":Se+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return fe+e+Se+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+Se+ee(e,"shrink","negative")+e;case 5292:return fe+e+Se+ee(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+ee(e,"-grow","")+fe+e+Se+ee(e,"grow","positive")+e;case 4554:return fe+ee(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+e+e;case 4200:if(!In(e,/flex-|baseline/))return Se+"grid-column-align"+Ei(e,t)+e;break;case 2592:case 3360:return Se+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~Hs(e+(n=n[t].value),"span")?e:Se+ee(e,"-start","")+e+Se+"grid-row-span:"+(~Hs(n,"span")?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":Se+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:Se+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+uo+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch")?Yg(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,u,c,f){return Se+i+":"+o+f+(l?Se+i+"-span:"+(u?c:+c-+o)+f:"")+e});case 4949:if(Ke(e,t+6)===121)return ee(e,":",":"+fe)+e;break;case 6444:switch(Ke(e,Ke(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ke(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Se+"$2box$3")+e;case 100:return ee(e,":",":"+Se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function gi(e,t){for(var n="",r=od(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Fw(e,t,n,r){switch(e.type){case kw:if(e.children.length)break;case Ew:case rd:return e.return=e.return||e.value;case Wg:return"";case Vg:return e.return=e.value+"{"+gi(e.children,r)+"}";case Fl:e.value=e.props.join(",")}return xn(n=gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Hw(e){var t=od(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function Uw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rd:e.return=Yg(e.value,e.length,n);return;case Vg:return gi([Gi(e,{value:ee(e.value,"@","@"+fe)})],r);case Fl:if(e.length)return Nw(e.props,function(i){switch(In(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gi([Gi(e,{props:[ee(i,/:(read-\w+)/,":"+uo+"$1")]})],r);case"::placeholder":return gi([Gi(e,{props:[ee(i,/:(plac\w+)/,":"+fe+"input-$1")]}),Gi(e,{props:[ee(i,/:(plac\w+)/,":"+uo+"$1")]}),Gi(e,{props:[ee(i,/:(plac\w+)/,Se+"input-$1")]})],r)}return""})}}var Ww={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ci=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",sd=typeof window<"u"&&"HTMLElement"in window,Vw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Kw={},Gg=Object.freeze([]),Nr=Object.freeze({});function Xg(e,t,n){return n===void 0&&(n=Nr),e.theme!==n.theme&&e.theme||t||n.theme}var qg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yw=/(^-|-$)/g;function sh(e){return e.replace(Qw,"-").replace(Yw,"")}var Gw=/(a)(d)/gi,lh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lh(t%52)+n;return(lh(t%52)+n).replace(Gw,"$1-$2")}var Xa,ui=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jg=function(e){return ui(5381,e)};function Zg(e){return Xu(Jg(e)>>>0)}function Xw(e){return e.displayName||e.name||"Component"}function qa(e){return typeof e=="string"&&!0}var ev=typeof Symbol=="function"&&Symbol.for,tv=ev?Symbol.for("react.memo"):60115,qw=ev?Symbol.for("react.forward_ref"):60112,Jw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ex=((Xa={})[qw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xa[tv]=nv,Xa);function ah(e){return("type"in(t=e)&&t.type.$$typeof)===tv?nv:"$$typeof"in e?ex[e.$$typeof]:Jw;var t}var tx=Object.defineProperty,nx=Object.getOwnPropertyNames,uh=Object.getOwnPropertySymbols,rx=Object.getOwnPropertyDescriptor,ix=Object.getPrototypeOf,ch=Object.prototype;function rv(e,t,n){if(typeof t!="string"){if(ch){var r=ix(t);r&&r!==ch&&rv(e,r,n)}var i=nx(t);uh&&(i=i.concat(uh(t)));for(var o=ah(e),l=ah(t),u=0;u<i.length;++u){var c=i[u];if(!(c in Zw||n&&n[c]||l&&c in l||o&&c in o)){var f=rx(t,c);try{tx(e,c,f)}catch{}}}}return e}function jr(e){return typeof e=="function"}function ld(e){return typeof e=="object"&&"styledComponentId"in e}function wr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ju(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ju(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=Ju(e[r],t[r]);return e}function Ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ox=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ar(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(u,n[l])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ws=new Map,ml=new Map,Ja=1,Ps=function(e){if(Ws.has(e))return Ws.get(e);for(;ml.has(Ja);)Ja++;var t=Ja++;return Ws.set(e,t),ml.set(t,e),t},sx=function(e,t){Ws.set(e,t),ml.set(t,e)},lx="style[".concat(Ci,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),ax=new RegExp("^".concat(Ci,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ux=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},cx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var u=r[o].trim();if(u){var c=u.match(ax);if(c){var f=0|parseInt(c[1],10),y=c[2];f!==0&&(sx(y,f),ux(e,y,c[3]),e.getTag().insertRules(f,i)),i.length=0}else i.push(u)}}};function dx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(u){for(var c=u.childNodes,f=c.length;f>=0;f--){var y=c[f];if(y&&y.nodeType===1&&y.hasAttribute(Ci))return y}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ci,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var l=dx();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},fx=function(){function e(t){this.element=iv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Ar(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),px=function(){function e(t){this.element=iv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),hx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dh=sd,mx={isServer:!sd,useCSSOMInjection:!Vw},gl=function(){function e(t,n,r){t===void 0&&(t=Nr),n===void 0&&(n={}),this.options=Qe(Qe({},mx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&sd&&dh&&(dh=!1,function(i){for(var o=document.querySelectorAll(lx),l=0,u=o.length;l<u;l++){var c=o[l];c&&c.getAttribute(Ci)!=="active"&&(cx(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}return e.registerId=function(t){return Ps(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Qe(Qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hx(i):r?new fx(i):new px(i)}(this.options),new ox(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ps(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ps(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ps(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",o=function(u){var c=function(x){return ml.get(x)}(u);if(c===void 0)return"continue";var f=t.names.get(c),y=n.getGroup(u);if(f===void 0||y.length===0)return"continue";var v="".concat(Ci,".g").concat(u,'[id="').concat(c,'"]'),g="";f!==void 0&&f.forEach(function(x){x.length>0&&(g+="".concat(x,","))}),i+="".concat(y).concat(v,'{content:"').concat(g,'"}').concat(`/*!sc*/
`)},l=0;l<r;l++)o(l);return i}(this)},e}(),gx=/&/g,vx=/^\s*\/\/.*$/gm;function ov(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ov(n.children,t)),n})}function yx(e){var t,n,r,i=e===void 0?Nr:e,o=i.options,l=o===void 0?Nr:o,u=i.plugins,c=u===void 0?Gg:u,f=function(g,x,S){return S===n||S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},y=c.slice();y.push(function(g){g.type===Fl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(gx,n).replace(r,f))}),l.prefix&&y.push(Bw),y.push(Fw);var v=function(g,x,S,k){x===void 0&&(x=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var A=g.replace(vx,""),w=zw(S||x?"".concat(S," ").concat(x," { ").concat(A," }"):A);l.namespace&&(w=ov(w,l.namespace));var m=[];return gi(w,Hw(y.concat(Uw(function(_){return m.push(_)})))),m};return v.hash=c.length?c.reduce(function(g,x){return x.name||Ar(15),ui(g,x.name)},5381).toString():"",v}var wx=new gl,Zu=yx(),sv=te.createContext({shouldForwardProp:void 0,styleSheet:wx,stylis:Zu});sv.Consumer;te.createContext(void 0);function ec(){return L.useContext(sv)}var xx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Zu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){throw Ar(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Zu),this.name+t.hash},e}(),_x=function(e){return e>="A"&&e<="Z"};function fh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_x(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lv=function(e){return e==null||e===!1||e===""},av=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!lv(o)&&(Array.isArray(o)&&o.isCss||jr(o)?r.push("".concat(fh(i),":"),o,";"):jo(o)?r.push.apply(r,No(No(["".concat(i," {")],av(o),!1),["}"],!1)):r.push("".concat(fh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ww||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gn(e,t,n,r){if(lv(e))return[];if(ld(e))return[".".concat(e.styledComponentId)];if(jr(e)){if(!jr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Gn(i,t,n,r)}var o;return e instanceof xx?n?(e.inject(n,r),[e.getName(r)]):[e]:jo(e)?av(e):Array.isArray(e)?e.flatMap(function(l){return Gn(l,t,n,r)}):[e.toString()]}function uv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!ld(n))return!1}return!0}var Sx=Jg("6.0.0-rc.3"),bx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uv(t),this.componentId=n,this.baseHash=ui(Sx,n),this.baseStyle=r,gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=wr(i,this.staticRulesId);else{var o=qu(Gn(this.rules,t,n,r)),l=Xu(ui(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var u=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,u)}i=wr(i,l),this.staticRulesId=l}else{for(var c=ui(this.baseHash,r.hash),f="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")f+=v;else if(v){var g=qu(Gn(v,t,n,r));c=ui(c,g),f+=g}}if(f){var x=Xu(c>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(f,".".concat(x),void 0,this.componentId)),i=wr(i,x)}}return i},e}(),ad=te.createContext(void 0);ad.Consumer;function ud(){return L.useContext(ad)}function Ex(e){var t=ud(),n=L.useMemo(function(){return function(r,i){if(!r)throw Ar(14);if(jr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Ar(8);return i?Qe(Qe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?te.createElement(ad.Provider,{value:n},e.children):null}var Za={};function kx(e,t,n){var r,i=ld(e),o=e,l=!qa(e),u=t.componentId,c=u===void 0?function(N,O){var j=typeof N!="string"?"sc":sh(N);Za[j]=(Za[j]||0)+1;var z="".concat(j,"-").concat(Zg("6.0.0-rc.3"+j+Za[j]));return O?"".concat(O,"-").concat(z):z}(t.displayName,t.parentComponentId):u,f=t.displayName,y=f===void 0?function(N){return qa(N)?"styled.".concat(N):"Styled(".concat(Xw(N),")")}(e):f,v=(r=t.attrs)!==null&&r!==void 0?r:[],g=t.displayName&&t.componentId?"".concat(sh(t.displayName),"-").concat(t.componentId):t.componentId||c,x=i&&o.attrs?o.attrs.concat(v).filter(Boolean):v,S=t.shouldForwardProp;if(i&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;S=function(N,O){return k(N,O)&&A(N,O)}}else S=k}var w=new bx(n,g,i?o.componentStyle:void 0),m=w.isStatic&&v.length===0;function _(N,O){return function(j,z,q,B){var ue=j.attrs,Ce=j.componentStyle,Pe=j.defaultProps,Le=j.foldedComponentIds,Je=j.styledComponentId,rt=j.target,it=ud(),$=ec(),K=j.shouldForwardProp||$.shouldForwardProp,C=function(Ee,mt,V){for(var Vt,st=Qe(Qe({},mt),{className:void 0,theme:V}),Dr=0;Dr<Ee.length;Dr+=1){var on=jr(Vt=Ee[Dr])?Vt(st):Vt;for(var sn in on)st[sn]=sn==="className"?wr(st[sn],on[sn]):sn==="style"?Qe(Qe({},st[sn]),on[sn]):on[sn]}return mt.className&&(st.className=wr(st.className,mt.className)),st}(ue,z,Xg(z,it,Pe)||Nr),ne=C.as||rt,de={};for(var ze in C)C[ze]===void 0||ze[0]==="$"||ze==="as"||ze==="theme"||(ze==="forwardedAs"?de.as=C.forwardedAs:K&&!K(ze,ne)||(de[ze]=C[ze]));var Ae=function(Ee,mt,V){var Vt=ec(),st=Ee.generateAndInjectStyles(mt?Nr:V,Vt.styleSheet,Vt.stylis);return st}(Ce,B,C),ot=wr(Le,Je);return Ae&&(ot+=" "+Ae),C.className&&(ot+=" "+C.className),de[qa(ne)&&!qg.has(ne)?"class":"className"]=ot,de.ref=q,L.createElement(ne,de)}(P,N,O,m)}_.displayName=y;var P=te.forwardRef(_);return P.attrs=x,P.componentStyle=w,P.displayName=y,P.shouldForwardProp=S,P.foldedComponentIds=i?wr(o.foldedComponentIds,o.styledComponentId):"",P.styledComponentId=g,P.target=i?o.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=i?function(O){for(var j=[],z=1;z<arguments.length;z++)j[z-1]=arguments[z];for(var q=0,B=j;q<B.length;q++)Ju(O,B[q],!0);return O}({},o.defaultProps,N):N}}),Object.defineProperty(P,"toString",{value:function(){return".".concat(P.styledComponentId)}}),l&&rv(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function ph(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hh=function(e){return Object.assign(e,{isCss:!0})};function cv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jr(e)||jo(e)){var r=e;return hh(Gn(ph(Gg,No([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Gn(i):hh(Gn(ph(i,t)))}function tc(e,t,n){if(n===void 0&&(n=Nr),!t)throw Ar(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,cv.apply(void 0,No([i],o,!1)))};return r.attrs=function(i){return tc(e,t,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return tc(e,t,Qe(Qe({},n),i))},r}function dv(e){return tc(kx,e)}var Re=dv;qg.forEach(function(e){Re[e]=dv(e)});var Cx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=uv(t),gl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(qu(Gn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&gl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Px(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cv.apply(void 0,No([e],t,!1)),i="sc-global-".concat(Zg(JSON.stringify(r))),o=new Cx(r,i),l=function(c){var f=ec(),y=ud(),v=te.useRef(f.styleSheet.allocateGSInstance(i)).current;return f.styleSheet.server&&u(v,c,f.styleSheet,y,f.stylis),(te.useInsertionEffect||te.useLayoutEffect)(function(){if(!f.styleSheet.server)return u(v,c,f.styleSheet,y,f.stylis),function(){return o.removeStyles(v,f.styleSheet)}},[v,c,f.styleSheet,y,f.stylis]),null};function u(c,f,y,v,g){if(o.isStatic)o.renderStyles(c,Kw,y,g);else{var x=Qe(Qe({},f),{theme:Xg(f,v,l.defaultProps)});o.renderStyles(c,x,y,g)}}return te.memo(l)}const zo=({words:e,interval:t,typingDelay:n,erasingDelay:r})=>{const[i,o]=L.useState(0),[l,u]=L.useState(""),[c,f]=L.useState(!0);return L.useEffect(()=>{let y;if(c){const v=e[i],g=v.length;y=setInterval(()=>{u(x=>x.length===g?(f(!1),x):v.slice(0,x.length+1))},t)}else y=setInterval(()=>{u(v=>v.length===0?(f(!0),o(g=>(g+1)%e.length),""):v.slice(0,v.length-1))},r);return()=>clearInterval(y)},[i,e,t,n,r,c]),h.jsx("span",{children:l})},Tx={elastic:[{id:1,title:"Photoshoots",imageUrl:"./imagescroll/Imagescroll1.png"},{id:2,title:"Adventure",imageUrl:"./imagescroll/Imagescroll1.png"},{id:3,title:"Events",imageUrl:"./imagescroll/Imagescroll1.png"},{id:4,title:"Discovery",imageUrl:"./imagescroll/Imagescroll1.png"},{id:5,title:"Sports",imageUrl:"./imagescroll/Imagescroll1.png"}]};var fv={exports:{}},Nx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jx=Nx,Ax=jx;function pv(){}function hv(){}hv.resetWarningCache=pv;var Ix=function(){function e(r,i,o,l,u,c){if(c!==Ax){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:hv,resetWarningCache:pv};return n.PropTypes=n,n};fv.exports=Ix();var Ox=fv.exports;const D=ac(Ox);function Mt(){return Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mt.apply(this,arguments)}function Rx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Lx={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},nc={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},Dx="Left",Mx="Right",zx="Up",$x="Down",Fx="touchstart",Hx="touchmove",Ux="touchend",mh="mousemove",gh="mouseup";function Bx(e,t,n,r){return e>t?n>0?Dx:Mx:r>0?zx:$x}function vh(e,t){if(t===0)return e;var n=Math.PI/180*t,r=e[0]*Math.cos(n)+e[1]*Math.sin(n),i=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[r,i]}function Wx(e,t){var n=function(v){v.touches&&v.touches.length>1||e(function(g,x){x.trackMouse&&(document.addEventListener(mh,r),document.addEventListener(gh,l));var S=v.touches?v.touches[0]:v,k=S.clientX,A=S.clientY,w=vh([k,A],x.rotationAngle);return Mt({},g,nc,{eventData:{initial:[].concat(w),first:!0},xy:w,start:v.timeStamp||0})})},r=function(v){e(function(g,x){if(!g.xy[0]||!g.xy[1]||v.touches&&v.touches.length>1)return g;var S=v.touches?v.touches[0]:v,k=S.clientX,A=S.clientY,w=vh([k,A],x.rotationAngle),m=w[0],_=w[1],P=g.xy[0]-m,N=g.xy[1]-_,O=Math.abs(P),j=Math.abs(N),z=(v.timeStamp||0)-g.start,q=Math.sqrt(O*O+j*j)/(z||1);if(O<x.delta&&j<x.delta&&!g.swiping)return g;var B=Bx(O,j,P,N),ue=Mt({},g.eventData,{event:v,absX:O,absY:j,deltaX:P,deltaY:N,velocity:q,dir:B});x.onSwiping&&x.onSwiping(ue);var Ce=!1;return(x.onSwiping||x.onSwiped||x["onSwiped"+B])&&(Ce=!0),Ce&&x.preventDefaultTouchmoveEvent&&x.trackTouch&&v.cancelable&&v.preventDefault(),Mt({},g,{eventData:Mt({},ue,{first:!1}),swiping:!0})})},i=function(v){e(function(g,x){var S;return g.swiping&&(S=Mt({},g.eventData,{event:v}),x.onSwiped&&x.onSwiped(S),x["onSwiped"+S.dir]&&x["onSwiped"+S.dir](S)),Mt({},g,nc,{eventData:S})})},o=function(){document.removeEventListener(mh,r),document.removeEventListener(gh,l)},l=function(v){o(),i(v)},u=function(v){if(v&&v.addEventListener){var g=[[Fx,n],[Hx,r],[Ux,i]];return g.forEach(function(x){var S=x[0],k=x[1];return v.addEventListener(S,k)}),function(){return g.forEach(function(x){var S=x[0],k=x[1];return v.removeEventListener(S,k)})}}},c=function(v){v!==null&&e(function(g,x){if(g.el===v)return g;var S={};return g.el&&g.el!==v&&g.cleanUpTouch&&(g.cleanUpTouch(),S.cleanUpTouch=null),x.trackTouch&&v&&(S.cleanUpTouch=u(v)),Mt({},g,{el:v},S)})},f={ref:c};return t.trackMouse&&(f.onMouseDown=n),[f,u]}function Vx(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),Mt({},e,r)}var cd=function(e){Rx(t,e);function t(r){var i;return i=e.call(this,r)||this,i._set=function(o){i.transientState=o(i.transientState,i.props)},i.transientState=Mt({},nc,{type:"class"}),i}var n=t.prototype;return n.render=function(){var i=this.props,o=i.className,l=i.style,u=i.nodeName,c=u===void 0?"div":u,f=i.innerRef,y=i.children,v=i.trackMouse,g=Wx(this._set,{trackMouse:v}),x=g[0],S=g[1];this.transientState=Vx(this.transientState,this.props,S);var k=f?function(A){return f(A),x.ref(A)}:x.ref;return te.createElement(c,Mt({},x,{className:o,style:l,ref:k}),y)},t}(te.PureComponent);cd.propTypes={onSwiped:D.func,onSwiping:D.func,onSwipedUp:D.func,onSwipedRight:D.func,onSwipedDown:D.func,onSwipedLeft:D.func,delta:D.number,preventDefaultTouchmoveEvent:D.bool,nodeName:D.string,trackMouse:D.bool,trackTouch:D.bool,innerRef:D.func,rotationAngle:D.number};cd.defaultProps=Lx;var mv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var u=n.apply(null,o);u&&r.push(u)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(mv);var Kx=mv.exports;const Qx=ac(Kx);var gv=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(r){var i=e(this.__entries__,r),o=this.__entries__[i];return o&&o[1]},t.prototype.set=function(r,i){var o=e(this.__entries__,r);~o?this.__entries__[o][1]=i:this.__entries__.push([r,i])},t.prototype.delete=function(r){var i=this.__entries__,o=e(i,r);~o&&i.splice(o,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,i){var o=this;i===void 0&&(i=null);for(var l=0,u=o.__entries__;l<u.length;l+=1){var c=u[l];r.call(i,c[1],c[0])}},Object.defineProperties(t.prototype,n),t}()}(),dd=typeof window<"u"&&typeof document<"u"&&window.document===document,vl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Yx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(vl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Gx=2,Xx=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&u()}function l(){Yx(o)}function u(){var c=Date.now();if(n){if(c-i<Gx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=c}return u},qx=20,Jx=["top","right","bottom","left","width","height","size","weight"],Zx=typeof MutationObserver<"u",rn=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Xx(this.refresh.bind(this),qx)};rn.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()};rn.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()};rn.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()};rn.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0};rn.prototype.connect_=function(){!dd||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Zx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)};rn.prototype.disconnect_=function(){!dd||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)};rn.prototype.onTransitionEnd_=function(e){var t=e.propertyName;t===void 0&&(t="");var n=Jx.some(function(r){return!!~t.indexOf(r)});n&&this.refresh()};rn.getInstance=function(){return this.instance_||(this.instance_=new rn),this.instance_};rn.instance_=null;var vv=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n+=1){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Pi=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||vl},yv=Wl(0,0,0,0);function yl(e){return parseFloat(e)||0}function yh(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+yl(o)},0)}function e_(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r+=1){var o=i[r],l=e["padding-"+o];n[o]=yl(l)}return n}function t_(e){var t=e.getBBox();return Wl(0,0,t.width,t.height)}function n_(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return yv;var r=Pi(e).getComputedStyle(e),i=e_(r),o=i.left+i.right,l=i.top+i.bottom,u=yl(r.width),c=yl(r.height);if(r.boxSizing==="border-box"&&(Math.round(u+o)!==t&&(u-=yh(r,"left","right")+o),Math.round(c+l)!==n&&(c-=yh(r,"top","bottom")+l)),!i_(e)){var f=Math.round(u+o)-t,y=Math.round(c+l)-n;Math.abs(f)!==1&&(u-=f),Math.abs(y)!==1&&(c-=y)}return Wl(i.left,i.top,u,c)}var r_=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Pi(e).SVGGraphicsElement}:function(e){return e instanceof Pi(e).SVGElement&&typeof e.getBBox=="function"}}();function i_(e){return e===Pi(e).document.documentElement}function o_(e){return dd?r_(e)?t_(e):n_(e):yv}function s_(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return vv(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Wl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var fd=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Wl(0,0,0,0),this.target=e};fd.prototype.isActive=function(){var e=o_(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight};fd.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var l_=function(e,t){var n=s_(t);vv(this,{target:e,contentRect:n})},nr=function(e,t,n){if(this.activeObservations_=[],this.observations_=new gv,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n};nr.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Pi(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new fd(e)),this.controller_.addObserver(this),this.controller_.refresh())}};nr.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Pi(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}};nr.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};nr.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})};nr.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(n){return new l_(n.target,n.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}};nr.prototype.clearActive=function(){this.activeObservations_.splice(0)};nr.prototype.hasActive=function(){return this.activeObservations_.length>0};var wv=typeof WeakMap<"u"?new WeakMap:new gv,pd=function(e){if(!(this instanceof pd))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=rn.getInstance(),n=new nr(e,t,this);wv.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){pd.prototype[e]=function(){return(t=wv.get(this))[e].apply(t,arguments);var t}});var a_=function(){return typeof vl.ResizeObserver<"u"?vl.ResizeObserver:pd}(),u_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c_=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),wh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d_=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},co=function(e){d_(t,e);function t(){return u_(this,t),p_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c_(t,[{key:"render",value:function(){var r=this.props,i=r.children,o=r.when,l=r.hiddenMode,u=r.className,c=te.Children.only(i),f=c.props,y=f.style,v=f_(f,["style"]),g=wh({},v),x=l&&l!=="withNull";x&&(l==="withCss"?g.className=g.className+" "+u:g.style=wh({},y,l==="withDisplay"&&{display:"none"},l==="withVisibility"&&{visibility:"hidden"}));var S=te.cloneElement(c,g),k=x?S:null;return o?c:k}}]),t}(L.Component);co.defaultProps={hiddenMode:"withNull",className:"r-o_hidden"};co.propTypes={children:D.element.isRequired,when:D.bool.isRequired,hiddenMode:D.oneOf(["withNull","withDisplay","withVisibility","withCss"]),className:D.string};function Vl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Kl(e,t,n){return t&&xh(e.prototype,t),n&&xh(e,n),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wl(){return wl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}function _h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_h(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ql(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&rc(e,t)}function xl(e){return xl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xl(e)}function rc(e,t){return rc=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},rc(e,t)}function h_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function m_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xv(e,t){if(e==null)return{};var n=m_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g_(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:oe(e)}function Yl(e){var t=h_();return function(){var r=xl(e),i;if(t){var o=xl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return g_(this,i)}}function rr(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v_(e){return y_(e)||w_(e)||_v(e)||x_()}function y_(e){if(Array.isArray(e))return ic(e)}function w_(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function _v(e,t){if(e){if(typeof e=="string")return ic(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ic(e,t)}}function ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function __(e,t){var n;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=_v(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,l=!1,u;return{s:function(){n=e[Symbol.iterator]()},n:function(){var c=n.next();return o=c.done,c},e:function(c){l=!0,u=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(l)throw u}}}}var Ln=function(){},Sv=function(t){return v_(Array(t).keys())},Jt=function(){for(var t="rec",n=" ",r="".concat(t),i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];var u=o.reduce(function(c,f){return f&&(c+="".concat(n).concat(t,"-").concat(f)),c},"");return r+=u,r},S_=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,l){return l(o)},i)}};function bv(){var e=rr([`
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 1.6em;
  background-color: rgba(103, 58, 183, 0.1);
  color: `,`;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #fff;
    background-color: rgba(103, 58, 183, 1);
    box-shadow: 0 0 2px 0 #333;
  }
  &:disabled {
    cursor: not-allowed;
  }
`]);return bv=function(){return e},e}var b_=Re.button.attrs(function(e){var t=e.type,n=t===void 0?"button":t;return{type:n}})(bv(),function(e){return e.disabled?"#999":"#333"}),Pt={PREV:"PREV",NEXT:"NEXT",START:"flex-start",CENTER:"center",END:"flex-end"};function Ev(){var e=rr([`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  user-select: none;
  justify-content: `,`;
`]);return Ev=function(){return e},e}var hd=Re.div.attrs(function(e){var t=e.style;return{style:t,className:Jt("item-wrapper")}})(Ev(),function(e){var t=e.itemPosition;return t});hd.defaultProps={style:{},itemPosition:Pt.CENTER};hd.propTypes={children:D.element.isRequired,style:D.object,itemPosition:D.oneOf([Pt.START,Pt.CENTER,Pt.END])};function kv(){var e=rr([`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 10px;
`]);return kv=function(){return e},e}var E_=Re.div(kv());function Cv(){var e=rr([`
  position: absolute;
  display: flex;
  flex-direction: `,`;
  `,`;
  `,`;
`]);return Cv=function(){return e},e}var k_=function(t){var n=t.isRTL,r=t.verticalMode,i=t.isSwiping,o=t.swipedSliderPosition,l=t.sliderPosition;return r||n?"auto":"".concat(i?o:l,"px")},C_=function(t){var n=t.isRTL,r=t.verticalMode,i=t.isSwiping,o=t.swipedSliderPosition,l=t.sliderPosition;return!r&&n?"".concat(i?o:l,"px"):"auto"},P_=function(t){var n=t.verticalMode,r=t.isSwiping,i=t.swipedSliderPosition,o=t.sliderPosition;return n?"".concat(r?i:o,"px"):"auto"},T_=function(t){var n=t.isSwiping,r=t.transitionMs,i=t.easing,o=t.tiltEasing,l=n?0:r,u=n?o:i;return"all ".concat(l,"ms ").concat(u)},N_=Re.div.attrs(function(e){return{style:{transition:T_(e),left:k_(e),right:C_(e),top:P_(e)}}})(Cv(),function(e){var t=e.verticalMode;return t?"column":"row"},function(e){var t=e.verticalMode;return t?"min-height: 100%;":""},function(e){var t=e.verticalMode,n=e.outerSpacing;return t?"":"margin: 0 ".concat(n,"px;")});function Pv(){var e=rr([`
  display: flex;
  flex-direction: row;
  width: 100%;
`]);return Pv=function(){return e},e}var j_=Re.div.attrs(function(e){return{style:{height:e.size.height}}})(Pv());function Tv(){var e=rr([`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: `,`;
`]);return Tv=function(){return e},e}var A_=Re.div(Tv(),function(e){var t=e.isRTL;return t?"rtl":"ltr"}),md=function(e){Ql(n,e);var t=Yl(n);function n(){var r;Vl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),ie(oe(r),"onClick",function(){var u=r.props,c=u.onClick,f=u.id;c(f)}),r}return Kl(n,[{key:"render",value:function(){return te.createElement(hd,wl({},this.props,{onClick:this.onClick}))}}]),n}(te.Component);md.defaultProps={onClick:Ln};md.propTypes={id:D.oneOfType([D.string,D.number]),onClick:D.func};var Nv=function(t){var n=t.children,r=t.childWidth,i=t.autoTabIndexVisibleItems,o=t.enableSwipe,l=t.enableMouseSwipe,u=t.preventDefaultTouchmoveEvent,c=t.itemsToShow,f=t.itemsToScroll,y=t.currentItem,v=t.itemPosition,g=t.itemPadding,x=t.onSwiped,S=t.onSwiping,k=t.verticalMode,A=t.onItemClick,w="".concat(r,"px"),m="".concat(g.join("px "),"px"),_=y,P=y+c,N=_-f,O=P+f,j=te.Children.map(n,function(q,B){var ue=B>=_&&B<P,Ce=!ue&&B>=N&&B<y,Pe=!ue&&B<O&&B>y,Le="carousel-item",Je=i?te.cloneElement(q,{tabIndex:ue?0:-1}):q;return te.createElement("div",{className:Jt(Le,"".concat(Le,"-").concat(B),"".concat(Le,"-").concat(ue?"visible":"hidden"),Ce&&"".concat(Le,"-prev"),Pe&&"".concat(Le,"-next"))},te.createElement(md,{id:B,itemPosition:v,style:{width:w,padding:m},key:B,onClick:A},Je))}),z=o?te.createElement(cd,{style:{display:"flex",flexDirection:k?"column":"row"},stopPropagation:!0,preventDefaultTouchmoveEvent:u,trackMouse:l,onSwiped:x,onSwiping:S,className:Jt("swipable")},j):j;return z};Nv.propTypes={children:D.array.isRequired,itemsToShow:D.number.isRequired,noAutoTabbedItems:D.bool,currentItem:D.number.isRequired,itemPosition:D.string,itemPadding:D.array,childWidth:D.number,verticalMode:D.bool,enableSwipe:D.bool,enableMouseSwipe:D.bool,preventDefaultTouchmoveEvent:D.bool,onSwiped:D.func,onSwiping:D.func,onItemClick:D.func};var I_={left:"❮",right:"❯",up:"❮",down:"❯"},Sh=Jt("arrow"),O_=function(t){var n={};return(t===Ct.up||t===Ct.down)&&(n.transform="rotate(90deg)"),n},Ct=function(t){var n=t.direction,r=t.onClick,i=t.icons,o=t.style,l=xv(t,["direction","onClick","icons","style"]),u=xr(xr({},I_),i),c=xr(xr({},O_(n)),o);return te.createElement(b_,wl({tabIndex:0,onClick:r,className:Qx(Sh,"".concat(Sh,"-").concat(n)),style:c},l),u[n])};Ct.left="left";Ct.right="right";Ct.up="up";Ct.down="down";Ct.propTypes={direction:D.oneOf(["left","right","up","down"]).isRequired,icons:D.object,style:D.object,onClick:D.func};var jv="NEXT_ITEM",Av="PREV_ITEM",R_=function(t,n){var r=n.limit,i=n.itemsToScroll,o=n.type;switch(o){case jv:{var l=t+i,u=r>=l?l:r;return u}case Av:{var c=t-i,f=c>=r?c:r;return f}default:return t}},L_=function(t,n){return{type:jv,limit:t,itemsToScroll:n}},D_=function(t,n){return{type:Av,limit:t,itemsToScroll:n}};function Iv(){var e=rr([`
  box-sizing: border-box;
  padding: 0;
  transition: all 250ms ease;
  border: none;
  margin: 5px;
  background-color: `,`;
  font-size: 1.3em;
  content: "";
  height: 10px;
  width: 10px;
  box-shadow: `,`;
  border-radius: 50%;
  outline: none;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: `,`;
  }
`]);return Iv=function(){return e},e}var M_="0 0 1px 2px rgba(0, 0, 0, 0.5)",bh="0 0 1px 3px rgba(103,58,183,1)",z_="0 0 1px 3px rgba(103,58,183,.5)",$_=Re.button.attrs(function(e){var t=e.type,n=t===void 0?"button":t;return{type:n}})(Iv(),function(e){var t=e.active;return t?"rgba(103,58,183,.5)":"transparent"},function(e){var t=e.active;return t?bh:M_},function(e){var t=e.active;return t?bh:z_}),Ov=function(e){Ql(n,e);var t=Yl(n);function n(){var r;Vl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),ie(oe(r),"onClick",function(){var u=r.props,c=u.onClick,f=u.id;c(f)}),r}return Kl(n,[{key:"render",value:function(){var i=this.props.active;return te.createElement($_,{tabIndex:i?-1:0,onClick:this.onClick,active:i,className:"".concat(Jt("dot")," ").concat(i?Jt("dot_active"):"")})}}]),n}(te.Component);Ov.propTypes={id:D.oneOfType([D.string,D.number]),active:D.bool,onClick:D.func};function Rv(){var e=rr([`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`]);return Rv=function(){return e},e}var F_=Re.div(Rv()),gd=function(e){Ql(n,e);var t=Yl(n);function n(){return Vl(this,n),t.apply(this,arguments)}return Kl(n,[{key:"render",value:function(){var i=this.props,o=i.numOfPages,l=i.activePage,u=i.onClick,c=Sv(o);return te.createElement(F_,{className:Jt("pagination")},c.map(function(f,y){return te.createElement(Ov,{key:y,id:y,active:y===l,onClick:u})}))}}]),n}(te.Component);gd.defaultProps={onClick:Ln};gd.propTypes={numOfPages:D.number.isRequired,activePage:D.number.isRequired,onClick:D.func};var vd=function(e){Ql(n,e);var t=Yl(n);function n(){var r;Vl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),ie(oe(r),"isComponentMounted",!1),ie(oe(r),"state",{rootHeight:0,childHeight:0,sliderPosition:0,swipedSliderPosition:0,isSwiping:!1,transitioning:!1,transitionMs:r.props.transitionMs,activeIndex:r.props.initialActiveIndex||r.props.initialFirstItem,pages:[],activePage:0,sliderContainerWidth:0}),ie(oe(r),"setRef",function(u){return function(c){return r[u]=c}}),ie(oe(r),"initResizeObserver",function(){r.ro=new a_(function(u,c){var f=__(u),y;try{var v=function(){var x=y.value;x.target===r.sliderContainer&&window.requestAnimationFrame(function(){r.onContainerResize(x)}),x.target===r.slider&&window.requestAnimationFrame(function(){r.onSliderResize(x)})};for(f.s();!(y=f.n()).done;)v()}catch(g){f.e(g)}finally{f.f()}}),r.ro.observe(r.sliderContainer),r.ro.observe(r.slider)}),ie(oe(r),"unSubscribeObserver",function(){return r.ro.disconnect()}),ie(oe(r),"setAutoPlay",function(){var u=r.getDerivedPropsFromBreakPoint(),c=u.autoPlaySpeed;r.autoPlayIntervalId=setInterval(function(){if(r.isComponentMounted){var f=r.state.transitioning;f||r.slideNext()}},c)}),ie(oe(r),"removeAutoPlay",function(){r.autoPlayIntervalId&&(clearInterval(r.autoPlayIntervalId),r.autoPlayIntervalId=null)}),ie(oe(r),"setPages",function(){var u=r.getNumOfPages(),c=Sv(u);r.setState({pages:c})}),ie(oe(r),"onSliderTransitionEnd",function(u){r.slider.addEventListener("transitionend",u)}),ie(oe(r),"removeSliderTransitionHook",function(u){r.slider.removeEventListener("transitionend",u)}),ie(oe(r),"getDerivedPropsFromBreakPoint",function(){var u=r.props,c=u.breakPoints,f=xv(u,["breakPoints"]),y=r.state.sliderContainerWidth,v;return c&&c.length>0&&(v=c.slice().reverse().find(function(g){return g.width<=y}),v||(v=c[0])),xr(xr({},f),v)}),ie(oe(r),"updateSliderPosition",function(){r.setState(function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.children,y=c.verticalMode,v=c.itemsToShow,g=c.transitionMs,x=u.childHeight,S=u.activeIndex,k=r.calculateChildWidth(),A=L.Children.toArray(f).length,w=A-v,m=S*-1,_=v-(A-S);_>0&&w>0&&(m=_+S*-1);var P=(y?x:k)*m,N=_>0?S-_:S;return window.requestAnimationFrame(function(){r.isComponentMounted&&r.setState({transitionMs:g})}),{sliderPosition:P,activeIndex:N<0?0:N}})}),ie(oe(r),"onSliderResize",function(u){if(r.isComponentMounted){var c=r.getDerivedPropsFromBreakPoint(),f=c.verticalMode,y=c.children,v=c.itemsToShow,g=u.contentRect.height,x={},S=L.Children.toArray(y).length;if(f){var k=g/S;x.rootHeight=k*Math.min(S,v),x.childHeight=k}else x.rootHeight=g;r.setState(x)}}),ie(oe(r),"calculateChildWidth",function(){var u=r.state.sliderContainerWidth,c=r.getDerivedPropsFromBreakPoint(),f=c.verticalMode,y=c.itemsToShow,v=c.showEmptySlots,g=c.children,x=L.Children.toArray(g).length||1,S=0;return f?S=u:S=u/(v?y:Math.min(x,y)),S}),ie(oe(r),"onContainerResize",function(u){var c=u.contentRect.width,f=r.getDerivedPropsFromBreakPoint(),y=f.outerSpacing,v=f.verticalMode,g=c-(v?0:y*2);!r.isComponentMounted||r.state.sliderContainerWidth===c||r.setState({sliderContainerWidth:g,transitionMs:0},function(){var x=r.getDerivedPropsFromBreakPoint(),S=x.onResize,k=x.itemsToShow,A=x.children,w=L.Children.toArray(A).length||1;r.setState(function(m){var _=m.activeIndex,P=Math.min(w,k),N=w-P;return _>N&&(_=N),{activeIndex:_}},function(){r.updateSliderPosition();var m=r.getDerivedPropsFromBreakPoint();S(m)})})}),ie(oe(r),"tiltMovement",function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:150;r.setState(function(y){return{isSwiping:!0,swipedSliderPosition:u-c}}),setTimeout(function(){r.setState({isSwiping:!1,swipedSliderPosition:0})},f)}),ie(oe(r),"convertChildToCbObj",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.children,y=Math.round(u),v=L.Children.toArray(f)[y];return{item:v.props,index:y}}),ie(oe(r),"getNextItemIndex",function(u,c){var f=r.getDerivedPropsFromBreakPoint(),y=f.children,v=f.itemsToShow,g=f.itemsToScroll,x=L.Children.toArray(y).length||1,S=v>x,k=c?0:x-v;S&&(k=0);var A=c?D_(0,g):L_(k,g),w=R_(u,A);return w}),ie(oe(r),"getNextItemObj",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.children,y=r.state.activeIndex,v=r.getNextItemIndex(y,u),g=Math.round(v),x=L.Children.toArray(f)[g],S={item:x.props,index:g};return S}),ie(oe(r),"resetSwipe",function(){r.setState({swipedSliderPosition:0,transitioning:!1,isSwiping:!1})}),ie(oe(r),"onSwiping",function(u){var c=u.deltaX,f=u.absX,y=u.deltaY,v=u.absY,g=u.dir;r.setState(function(x){var S=x.childHeight,k=x.activeIndex,A=x.sliderPosition,w=r.getDerivedPropsFromBreakPoint(),m=w.itemsToShow,_=w.verticalMode,P=w.children,N=w.isRTL,O=r.calculateChildWidth(),j=L.Children.toArray(P).length||1,z=!_&&g==="Left"&&!N||!_&&g==="Right"&&N||_&&g==="Up",q=!_&&g==="Right"&&!N||!_&&g==="Left"&&N||_&&g==="Down",B=g==="Left"||g==="Right",ue=g==="Up"||g==="Down",Ce=!_,Pe=0,Le=O/2,Je=S/2;if(_){if(ue){var rt=j*S;z?Pe=rt-S*k-m*S+Je:q&&(Pe=S*k+Je)}}else if(B){var it=j*O;z?Pe=it-O*k-m*O+Le:q&&(Pe=O*k+Le)}var $=Ce&&ue||Ce&&B&&f>Pe,K=_&&B||_&&ue&&v>Pe;if(!($||K)){var C;return B?N?C=A+c:C=A-c:C=A-y,{swipedSliderPosition:C,isSwiping:!0,transitioning:!0}}})}),ie(oe(r),"onSwiped",function(u){var c=u.absX,f=u.absY,y=u.dir,v=r.state,g=v.childHeight,x=v.activeIndex,S=r.getDerivedPropsFromBreakPoint(),k=S.verticalMode,A=S.isRTL,w=S.itemsToScroll,m=r.calculateChildWidth(),_=r.resetSwipe,P=m/5,N=g/5,O=y==="Left",j=y==="Right",z=y==="Up",q=y==="Down",B=k&&(z||q)&&f>N,ue=!k&&(j||O)&&c>P,Ce=!1;if((B||ue)&&(Ce=!0),Ce)if(k){var Pe=Math.ceil((f-N)/g),Le=Math.max(w,Pe),Je=x-Le,rt=x+Le;q&&(_=function(){return r.goTo(Je)}),z&&(_=function(){return r.goTo(rt)})}else{var it=Math.ceil((c-P)/m),$=Math.max(w,it),K=x-$,C=x+$;A?(O&&(_=function(){return r.goTo(K)}),j&&(_=function(){return r.goTo(C)})):(O&&(_=function(){return r.goTo(C)}),j&&(_=function(){return r.goTo(K)}))}r.setState({isSwiping:!1,transitioning:!1}),_({skipTilt:!0})}),ie(oe(r),"onNextStart",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.onNextStart,y=r.state.activeIndex,v=r.getNextItemObj(),g=r.convertChildToCbObj(y);f(g,v),r.slideNext(u)}),ie(oe(r),"onPrevStart",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.onPrevStart,y=r.state.activeIndex,v=r.getNextItemObj(!0),g=r.convertChildToCbObj(y);f(g,v),r.slidePrev(u)}),ie(oe(r),"slideNext",function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=u.skipTilt,f=r.getDerivedPropsFromBreakPoint(),y=f.enableTilt,v=r.state,g=v.activeIndex,x=v.sliderPosition,S=r.getNextItemIndex(g,!1);g!==S?r.goTo(S):y&&!c&&r.tiltMovement(x,20,150)}),ie(oe(r),"slidePrev",function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=u.skipTilt,f=r.state.activeIndex,y=r.getDerivedPropsFromBreakPoint(),v=y.enableTilt,g=r.getNextItemIndex(f,!0);f!==g?r.goTo(g):v&&!c&&r.tiltMovement(0,-20,150)}),ie(oe(r),"onNextEnd",function(){var u=r.getDerivedPropsFromBreakPoint(),c=u.onNextEnd,f=u.onChange,y=r.state,v=y.activeIndex,g=y.activePage,x=r.convertChildToCbObj(v);r.removeSliderTransitionHook(r.onNextEnd),r.setState({transitioning:!1}),f&&f(x,g),c(x,g)}),ie(oe(r),"onPrevEnd",function(){var u=r.getDerivedPropsFromBreakPoint(),c=u.onPrevEnd,f=u.onChange,y=r.state,v=y.activeIndex,g=y.activePage,x=r.convertChildToCbObj(v);r.removeSliderTransitionHook(r.onPrevEnd),r.setState({transitioning:!1}),f&&f(x,g),c(x,g)}),ie(oe(r),"generatePositionUpdater",function(u,c,f,y){return function(v){var g=v.sliderPosition,x=v.childHeight,S=v.activeIndex,k=r.calculateChildWidth(),A=0,w=f?x:k;return u===Pt.NEXT?A=g-w*(c-S):A=g+w*(S-c),xr({sliderPosition:A,activeIndex:c,swipedSliderPosition:0,isSwiping:!1},y)}}),ie(oe(r),"goTo",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.children,y=c.verticalMode,v=c.itemsToShow,g=r.state.activeIndex,x=L.Children.toArray(f).length,S=Math.max(0,u),k=g>S,A=r.getNextItemIndex(g,k),w=A===g,m=S+v>=x;if(!w){m&&(S=Math.max(0,x-v));var _=Pt.NEXT,P=r.onNextEnd;k&&(_=Pt.PREV,P=r.onPrevEnd);var N=r.generatePositionUpdater(_,S,y,{transitioning:!0});r.setState(N,function(){S_(r.updateActivePage(),r.onSliderTransitionEnd(P))})}}),ie(oe(r),"getNumOfPages",function(){var u=r.getDerivedPropsFromBreakPoint(),c=u.children,f=u.itemsToShow,y=L.Children.toArray(c).length,v=Math.max(f,1),g=Math.ceil(y/v);return g||1}),ie(oe(r),"updateActivePage",function(){r.setState(function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.itemsToShow,y=c.children,v=u.activeIndex,g=u.activePage,x=r.getNumOfPages(),S=L.Children.toArray(y).length,k=Math.min(S,f),A=Math.max(k,1),w=Math.ceil(v/A),m=Math.min(x-1,w);if(g!==m)return{activePage:m}})}),ie(oe(r),"onIndicatorClick",function(u){var c=r.getDerivedPropsFromBreakPoint(),f=c.itemsToShow,y=u*f;r.setState({activePage:u}),r.goTo(y)}),r}return Kl(n,[{key:"componentDidMount",value:function(){this.isComponentMounted=!0,this.initResizeObserver(),this.updateActivePage(),this.setPages()}},{key:"componentDidUpdate",value:function(i,o){var l=this.props,u=l.enableAutoPlay,c=l.children,f=l.itemsToShow,y=l.itemsToScroll,v=l.breakPoints,g=this.state,x=g.activeIndex,S=g.sliderContainerWidth,k=this.getNextItemIndex(x,!1),A=L.Children.toArray(c).length,w=L.Children.toArray(i.children).length;if((w!==A||i.itemsToShow!==f||i.itemsToScroll!==y||i.breakPoints!==v||S!==o.sliderContainerWidth)&&(this.onContainerResize({contentRect:{width:S}}),this.setPages(),this.updateActivePage()),x===k?this.removeAutoPlay():u&&!this.autoPlayIntervalId?this.setAutoPlay():!u&&this.autoPlayIntervalId&&this.removeAutoPlay(),w!==A){var m=this.getDerivedPropsFromBreakPoint(),_=m.itemsToShow,P=A-1,N=x+_>P;N&&this.goTo(Math.max(0,A-_))}}},{key:"componentWillUnmount",value:function(){this.isComponentMounted=!1,this.removeAutoPlay(),this.unSubscribeObserver()}},{key:"render",value:function(){var i=this.state,o=i.activePage,l=i.isSwiping,u=i.sliderPosition,c=i.swipedSliderPosition,f=i.rootHeight,y=i.pages,v=i.activeIndex,g=i.transitionMs,x=this.getDerivedPropsFromBreakPoint(),S=x.className,k=x.style,A=x.itemsToShow,w=x.itemsToScroll,m=x.verticalMode,_=x.isRTL,P=x.easing,N=x.tiltEasing,O=x.children,j=x.focusOnSelect,z=x.autoTabIndexVisibleItems,q=x.itemPosition,B=x.itemPadding,ue=x.outerSpacing,Ce=x.enableSwipe,Pe=x.enableMouseSwipe,Le=x.pagination,Je=x.showArrows,rt=x.disableArrowsOnEnd,it=x.preventDefaultTouchmoveEvent,$=x.renderArrow,K=x.renderPagination,C=this.calculateChildWidth(),ne=this.getNumOfPages(),de=v!==this.getNextItemIndex(v,!0),ze=v!==this.getNextItemIndex(v,!1),Ae=!de&&rt,ot=!ze&&rt;return te.createElement(A_,{isRTL:_,className:"".concat(Jt("carousel-wrapper")," ").concat(S),style:k},te.createElement(j_,{className:Jt("carousel"),size:{height:f}},te.createElement(co,{when:Je},$?$({type:Pt.PREV,onClick:this.onPrevStart,isEdge:!de}):te.createElement(Ct,{onClick:this.onPrevStart,direction:m?Ct.up:Ct.left,disabled:Ae})),te.createElement(E_,{className:Jt("slider-container"),ref:this.setRef("sliderContainer")},te.createElement(N_,{verticalMode:m,isRTL:_,easing:P,sliderPosition:u,swipedSliderPosition:c,isSwiping:l,transitionMs:g,tiltEasing:N,className:Jt("slider"),ref:this.setRef("slider"),outerSpacing:ue},te.createElement(Nv,{verticalMode:m,children:L.Children.toArray(O),childWidth:C,currentItem:v,autoTabIndexVisibleItems:z,itemsToShow:A,itemsToScroll:w,itemPosition:q,itemPadding:B,enableSwipe:Ce,enableMouseSwipe:Pe,preventDefaultTouchmoveEvent:it,onSwiped:this.onSwiped,onSwiping:this.onSwiping,onItemClick:j?this.goTo:void 0}))),te.createElement(co,{when:Je},$?$({type:Pt.NEXT,onClick:this.onNextStart,isEdge:!ze}):te.createElement(Ct,{onClick:this.onNextStart,direction:m?Ct.down:Ct.right,disabled:ot}))),te.createElement(co,{when:Le},K?K({pages:y,activePage:o,onClick:this.onIndicatorClick}):te.createElement(gd,{numOfPages:ne,activePage:o,onClick:this.onIndicatorClick})))}}]),n}(te.Component);vd.defaultProps={className:"",style:{},verticalMode:!1,isRTL:!1,initialFirstItem:0,initialActiveIndex:0,showArrows:!0,showEmptySlots:!1,disableArrowsOnEnd:!0,pagination:!0,easing:"ease",tiltEasing:"ease",transitionMs:500,enableTilt:!0,enableSwipe:!0,enableMouseSwipe:!0,preventDefaultTouchmoveEvent:!1,focusOnSelect:!1,autoTabIndexVisibleItems:!0,itemsToShow:1,itemsToScroll:1,itemPosition:Pt.CENTER,itemPadding:[0,0,0,0],outerSpacing:0,enableAutoPlay:!1,autoPlaySpeed:2e3,onChange:Ln,onNextEnd:Ln,onPrevEnd:Ln,onNextStart:Ln,onPrevStart:Ln,onResize:Ln};vd.propTypes={children:D.node.isRequired,className:D.string,style:D.object,verticalMode:D.bool,isRTL:D.bool,pagination:D.bool,transitionMs:D.number,easing:D.string,tiltEasing:D.string,enableTilt:D.bool,itemsToShow:D.number,itemsToScroll:D.number,breakPoints:D.arrayOf(D.shape({width:D.number.isRequired,itemsToShow:D.number,itemsToScroll:D.number})),initialActiveIndex:D.number,initialFirstItem:D.number,showArrows:D.bool,showEmptySlots:D.bool,disableArrowsOnEnd:D.bool,focusOnSelect:D.bool,autoTabIndexVisibleItems:D.bool,renderArrow:D.func,renderPagination:D.func,itemPosition:D.oneOf([Pt.START,Pt.CENTER,Pt.END]),itemPadding:D.array,outerSpacing:D.number,enableSwipe:D.bool,enableMouseSwipe:D.bool,preventDefaultTouchmoveEvent:D.bool,enableAutoPlay:D.bool,autoPlaySpeed:D.number,onChange:D.func,onNextStart:D.func,onPrevStart:D.func,onNextEnd:D.func,onPrevEnd:D.func,onResize:D.func};const H_="_container_gs58w_3",U_="_carousWrapper_gs58w_43",B_="_card_gs58w_49",W_="_title_gs58w_59",V_="_backgroundImage_gs58w_75",Ts={container:H_,carousWrapper:U_,card:B_,title:W_,backgroundImage:V_},K_=[{width:1,itemsToShow:1},{width:550,itemsToShow:1,itemsToScroll:1},{width:768,itemsToShow:1},{width:1200,itemsToShow:1}];function Q_(){const{elastic:e}=Tx;return h.jsxs("div",{className:Ts.container,children:[h.jsx("div",{children:h.jsx("h1",{children:"Gallery"})}),h.jsx("div",{className:Ts.contWrapper,children:h.jsx(vd,{breakPoints:K_,children:e.map(t=>h.jsx("div",{className:Ts.card,children:h.jsx("img",{src:t.imageUrl,alt:t.title,className:Ts.backgroundImage})},t.id))})})]})}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const Eh="popstate";function Y_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:u}=r.location;return oc("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_l(i)}return X_(t,n,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G_(){return Math.random().toString(36).substr(2,8)}function kh(e,t){return{usr:e.state,key:e.key,idx:t}}function oc(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ii(t):t,{state:n,key:t&&t.key||r||G_()})}function _l(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ii(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,u=Fn.Pop,c=null,f=y();f==null&&(f=0,l.replaceState(Ao({},l.state,{idx:f}),""));function y(){return(l.state||{idx:null}).idx}function v(){u=Fn.Pop;let A=y(),w=A==null?null:A-f;f=A,c&&c({action:u,location:k.location,delta:w})}function g(A,w){u=Fn.Push;let m=oc(k.location,A,w);n&&n(m,A),f=y()+1;let _=kh(m,f),P=k.createHref(m);try{l.pushState(_,"",P)}catch{i.location.assign(P)}o&&c&&c({action:u,location:k.location,delta:1})}function x(A,w){u=Fn.Replace;let m=oc(k.location,A,w);n&&n(m,A),f=y();let _=kh(m,f),P=k.createHref(m);l.replaceState(_,"",P),o&&c&&c({action:u,location:k.location,delta:0})}function S(A){let w=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof A=="string"?A:_l(A);return He(w,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,w)}let k={get action(){return u},get location(){return e(i,l)},listen(A){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Eh,v),c=A,()=>{i.removeEventListener(Eh,v),c=null}},createHref(A){return t(i,A)},createURL:S,encodeLocation(A){let w=S(A);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:x,go(A){return l.go(A)}};return k}var Ch;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ch||(Ch={}));function q_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ii(t):t,i=wd(r.pathname||"/",n);if(i==null)return null;let o=Lv(e);J_(o);let l=null;for(let u=0;l==null&&u<o.length;++u)l=lS(o[u],cS(i));return l}function Lv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,u)=>{let c={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(He(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=Xn([r,c.relativePath]),y=n.concat(c);o.children&&o.children.length>0&&(He(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Lv(o.children,t,y,f)),!(o.path==null&&!o.index)&&t.push({path:f,score:oS(f,o.index),routesMeta:y})};return e.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,l);else for(let c of Dv(o.path))i(o,l,c)}),t}function Dv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Dv(r.join("/")),u=[];return u.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&u.push(...l),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function J_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Z_=/^:\w+$/,eS=3,tS=2,nS=1,rS=10,iS=-2,Ph=e=>e==="*";function oS(e,t){let n=e.split("/"),r=n.length;return n.some(Ph)&&(r+=iS),t&&(r+=tS),n.filter(i=>!Ph(i)).reduce((i,o)=>i+(Z_.test(o)?eS:o===""?nS:rS),r)}function sS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function lS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let u=n[l],c=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",y=aS({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f);if(!y)return null;Object.assign(r,y.params);let v=u.route;o.push({params:r,pathname:Xn([i,y.pathname]),pathnameBase:hS(Xn([i,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(i=Xn([i,y.pathnameBase]))}return o}function aS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,y,v)=>{if(y==="*"){let g=u[v]||"";l=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return f[y]=dS(u[v]||"",y),f},{}),pathname:o,pathnameBase:l,pattern:e}}function uS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cS(e){try{return decodeURI(e)}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dS(e,t){try{return decodeURIComponent(e)}catch(n){return yd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function wd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ii(e):e;return{pathname:n?n.startsWith("/")?n:pS(n,t):t,search:mS(r),hash:gS(i)}}function pS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ii(e):(i=Ao({},e),He(!i.pathname||!i.pathname.includes("?"),eu("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),eu("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),eu("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,u;if(r||l==null)u=n;else{let v=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),v-=1;i.pathname=g.join("/")}u=v>=0?t[v]:"/"}let c=fS(i,u),f=l&&l!=="/"&&l.endsWith("/"),y=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||y)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),hS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $v=["post","put","patch","delete"];new Set($v);const yS=["get",...$v];new Set(yS);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sl.apply(this,arguments)}const xd=L.createContext(null),Fv=L.createContext(null),Rr=L.createContext(null),Gl=L.createContext(null),Lr=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Hv=L.createContext(null);function wS(e,t){let{relative:n}=t===void 0?{}:t;$o()||He(!1);let{basename:r,navigator:i}=L.useContext(Rr),{hash:o,pathname:l,search:u}=_d(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:Xn([r,l])),i.createHref({pathname:c,search:u,hash:o})}function $o(){return L.useContext(Gl)!=null}function Fo(){return $o()||He(!1),L.useContext(Gl).location}function Uv(e){L.useContext(Rr).static||L.useLayoutEffect(e)}function xS(){let{isDataRoute:e}=L.useContext(Lr);return e?OS():_S()}function _S(){$o()||He(!1);let e=L.useContext(xd),{basename:t,navigator:n}=L.useContext(Rr),{matches:r}=L.useContext(Lr),{pathname:i}=Fo(),o=JSON.stringify(Mv(r).map(c=>c.pathnameBase)),l=L.useRef(!1);return Uv(()=>{l.current=!0}),L.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let y=zv(c,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Xn([t,y.pathname])),(f.replace?n.replace:n.push)(y,f.state,f)},[t,n,o,i,e])}function _d(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=L.useContext(Lr),{pathname:i}=Fo(),o=JSON.stringify(Mv(r).map(l=>l.pathnameBase));return L.useMemo(()=>zv(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function SS(e,t){return bS(e,t)}function bS(e,t,n){$o()||He(!1);let{navigator:r}=L.useContext(Rr),{matches:i}=L.useContext(Lr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Fo(),f;if(t){var y;let k=typeof t=="string"?Ii(t):t;u==="/"||(y=k.pathname)!=null&&y.startsWith(u)||He(!1),f=k}else f=c;let v=f.pathname||"/",g=u==="/"?v:v.slice(u.length)||"/",x=q_(e,{pathname:g}),S=TS(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Xn([u,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Xn([u,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n);return t&&S?L.createElement(Gl.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Fn.Pop}},S):S}function ES(){let e=IS(),t=vS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,o)}const kS=L.createElement(ES,null);class CS extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?L.createElement(Lr.Provider,{value:this.props.routeContext},L.createElement(Hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PS(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(xd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Lr.Provider,{value:t},r)}function TS(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let u=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));u>=0||He(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,c,f)=>{let y=c.route.id?l==null?void 0:l[c.route.id]:null,v=null;n&&(v=c.route.errorElement||kS);let g=t.concat(o.slice(0,f+1)),x=()=>{let S;return y?S=v:c.route.Component?S=L.createElement(c.route.Component,null):c.route.element?S=c.route.element:S=u,L.createElement(PS,{match:c,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:S})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?L.createElement(CS,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var sc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(sc||(sc={}));var Io;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Io||(Io={}));function NS(e){let t=L.useContext(xd);return t||He(!1),t}function jS(e){let t=L.useContext(Fv);return t||He(!1),t}function AS(e){let t=L.useContext(Lr);return t||He(!1),t}function Bv(e){let t=AS(),n=t.matches[t.matches.length-1];return n.route.id||He(!1),n.route.id}function IS(){var e;let t=L.useContext(Hv),n=jS(Io.UseRouteError),r=Bv(Io.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function OS(){let{router:e}=NS(sc.UseNavigateStable),t=Bv(Io.UseNavigateStable),n=L.useRef(!1);return Uv(()=>{n.current=!0}),L.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Sl({fromRouteId:t},o)))},[e,t])}function hr(e){He(!1)}function RS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:o,static:l=!1}=e;$o()&&He(!1);let u=t.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:o,static:l}),[u,o,l]);typeof r=="string"&&(r=Ii(r));let{pathname:f="/",search:y="",hash:v="",state:g=null,key:x="default"}=r,S=L.useMemo(()=>{let k=wd(f,u);return k==null?null:{location:{pathname:k,search:y,hash:v,state:g,key:x},navigationType:i}},[u,f,y,v,g,x,i]);return S==null?null:L.createElement(Rr.Provider,{value:c},L.createElement(Gl.Provider,{children:n,value:S}))}function LS(e){let{children:t,location:n}=e;return SS(lc(t),n)}var Th;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Th||(Th={}));new Promise(()=>{});function lc(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let o=[...t,i];if(r.type===L.Fragment){n.push.apply(n,lc(r.props.children,o));return}r.type!==hr&&He(!1),!r.props.index||!r.props.children||He(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=lc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(this,arguments)}function Wv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function DS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function MS(e,t){return e.button===0&&(!t||t==="_self")&&!DS(e)}const zS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$S=["aria-current","caseSensitive","className","end","style","to","children"];function FS(e){let{basename:t,children:n,window:r}=e,i=L.useRef();i.current==null&&(i.current=Y_({window:r,v5Compat:!0}));let o=i.current,[l,u]=L.useState({action:o.action,location:o.location});return L.useLayoutEffect(()=>o.listen(u),[o]),L.createElement(RS,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const HS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",US=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BS=L.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:u,target:c,to:f,preventScrollReset:y}=t,v=Wv(t,zS),{basename:g}=L.useContext(Rr),x,S=!1;if(typeof f=="string"&&US.test(f)&&(x=f,HS))try{let m=new URL(window.location.href),_=f.startsWith("//")?new URL(m.protocol+f):new URL(f),P=wd(_.pathname,g);_.origin===m.origin&&P!=null?f=P+_.search+_.hash:S=!0}catch{}let k=wS(f,{relative:i}),A=WS(f,{replace:l,state:u,target:c,preventScrollReset:y,relative:i});function w(m){r&&r(m),m.defaultPrevented||A(m)}return L.createElement("a",bl({},v,{href:x||k,onClick:S||o?r:w,ref:n,target:c}))}),mr=L.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:u,to:c,children:f}=t,y=Wv(t,$S),v=_d(c,{relative:y.relative}),g=Fo(),x=L.useContext(Fv),{navigator:S}=L.useContext(Rr),k=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,A=g.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(A=A.toLowerCase(),w=w?w.toLowerCase():null,k=k.toLowerCase());let m=A===k||!l&&A.startsWith(k)&&A.charAt(k.length)==="/",_=w!=null&&(w===k||!l&&w.startsWith(k)&&w.charAt(k.length)==="/"),P=m?r:void 0,N;typeof o=="function"?N=o({isActive:m,isPending:_}):N=[o,m?"active":null,_?"pending":null].filter(Boolean).join(" ");let O=typeof u=="function"?u({isActive:m,isPending:_}):u;return L.createElement(BS,bl({},y,{"aria-current":P,className:N,ref:n,style:O,to:c}),typeof f=="function"?f({isActive:m,isPending:_}):f)});var Nh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Nh||(Nh={}));var jh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jh||(jh={}));function WS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,u=xS(),c=Fo(),f=_d(e,{relative:l});return L.useCallback(y=>{if(MS(y,n)){y.preventDefault();let v=r!==void 0?r:_l(c)===_l(f);u(e,{replace:v,state:i,preventScrollReset:o,relative:l})}},[c,u,f,r,i,n,e,o,l])}const VS=["Think","Tinker","Transform"],KS=200,QS=2e3,YS=100,GS=()=>h.jsxs(XS,{children:[h.jsx("div",{className:"ellipse1"}),h.jsx("div",{className:"ellipse2"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-xl",id:"left",children:[h.jsx("div",{className:"hero-heading",children:"Tinkerers’ Laboratory"}),h.jsx("div",{className:"hero-tag",children:"IIT Hyderabad"}),h.jsx("div",{className:"hero-bottom",children:h.jsx(zo,{words:VS,interval:KS,typingDelay:QS,erasingDelay:YS})}),h.jsx("button",{className:"reachus",children:h.jsx(mr,{to:"/contacts",children:"Reach Us"})})]}),h.jsx("div",{className:"col-xl",id:"right",children:h.jsx("div",{className:"section-hero-image",children:h.jsx("picture",{children:h.jsx("img",{className:"pic1",src:"./images/Home.svg",alt:"image"})})})})]}),h.jsx("div",{className:"row",id:"aims",children:h.jsxs("div",{className:"col-lg-12",children:[h.jsx("div",{className:"ouraim",children:"Our Aim"}),h.jsx("div",{className:"seperator"}),h.jsx("div",{className:"desp1",children:"Here, at Tinkerers' Lab, our aim is to provide you a working space with vast ranges of tools in order to bring out the inner tinkerer in you"})]})}),h.jsxs("div",{className:"row",id:"aims2",children:[h.jsx("div",{className:"col-lg-4 col-md-6",children:h.jsxs("div",{className:"cont",children:[h.jsx("div",{className:"box",children:h.jsx("img",{src:"./images/aim1.svg",alt:"Aim1"})}),h.jsxs("div",{className:"content",children:[h.jsx("div",{className:"heading",children:"Availability"}),h.jsx("div",{className:"line"}),h.jsx("div",{className:"desp2",children:"We know that the best ideas don't always come to us during work hours. Tinkerers' Lab is open 24/7, giving you the liberty to build and innovate whenever."})]})]})}),h.jsx("div",{className:"col-lg-4 col-md-6",children:h.jsxs("div",{className:"cont",children:[h.jsx("div",{className:"box",children:h.jsx("img",{src:"./images/aim2.svg",alt:"Aim1"})}),h.jsxs("div",{className:"content",children:[h.jsx("div",{className:"heading",children:"Resources"}),h.jsx("div",{className:"line"}),h.jsx("div",{className:"desp2",children:"We have a wide range of resources ,from the commonplace Raspberry Pis and Arduinos to CNCs and 3D Printers."})]})]})}),h.jsxs("div",{className:"col-lg-4 col-md-6",children:[h.jsxs("div",{className:"cont",children:[h.jsx("div",{className:"box",children:h.jsx("img",{src:"./images/aim3.svg",alt:"Aim1"})}),h.jsxs("div",{className:"content",children:[h.jsx("div",{className:"heading",children:"TL Talks"}),h.jsx("div",{className:"line"}),h.jsx("div",{className:"desp2",children:"TL will host talks and sessions with innovators and entrepreneurs to boost the interest in new fields and push boundaries."})]})]}),h.jsx("div",{className:"hand",children:h.jsx("img",{src:"./images/hand.svg",alt:"hand"})})]})]})]}),h.jsx(Q_,{})]}),XS=Re.section`
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hand {
    position: absolute;
    z-index: 3;
    right: 5vw;
    margin-bottom: 5vw;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 15vw;
    margin-bottom: 15vh;
  }
  #aims2,
  #aims {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    height: 38rem;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  .ouraim {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #000000;
    padding-top: 7vh;
  }
  .reachus {
    width: 220px;
    height: 10vh;
    a {
      color: #fff;
    }

    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .ellipse2 {
    position: absolute;
    width: 33vw;
    height: 35vw;
    left: 0;
    top: -18vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .ellipse1 {
    position: absolute;
    width: 40vw;
    height: 45vw;
    left: -18vw;
    top: -19vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }
  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .col-xl-6 {
    text-align: center;
  }
  .col-xl {
    text-align: center;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .pic1 {
    animation: rotation1 8s infinite linear;
  }

  @keyframes rotation1 {
    0%,
    100% {
      transform: rotate(-15deg);
    }
    10%,
    90% {
      transform: rotate(-10deg);
    }
    40%,
    60% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 624px; */
  }

  picture {
    text-align: center;
  }
  @media (min-width: 768px) {
    .desp2 {
      padding: 0rem 5vw;
    }
  }
  @media (max-width: 1200px) {
    .reachus {
      font-weight: 700;
      font-size: 24px;
      width: 75vw;
    }
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .desp2 {
      padding: 0rem 5vw;
    }
    .container {
      justify-content: center;
      width: 100vw;
    }
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,qS=["Think","Tinker","Transform"],JS=200,ZS=2e3,eb=100,tb=()=>h.jsxs(nb,{children:[h.jsx("div",{className:"circle1"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsx("div",{className:"circle4"}),h.jsx("div",{className:"circle5"}),h.jsxs("div",{className:"container grid grid-two-column",children:[h.jsxs("div",{className:"section-hero-data",children:[h.jsx("h2",{className:"hero-heading",children:"Our Team"}),h.jsx("h3",{className:"hero-tag",children:"Tinkerers' Lab IITH"}),h.jsx("div",{className:"hero-bottom",children:h.jsx(zo,{words:qS,interval:JS,typingDelay:ZS,erasingDelay:eb})})]}),h.jsx("div",{className:"section-hero-image",children:h.jsx("picture",{children:h.jsx("img",{src:"./images/Team.svg",alt:"image",className:"hero-img"})})})]}),h.jsxs("div",{className:"convener",children:[h.jsx("div",{className:"position",children:"Convener"}),h.jsx("picture",{children:h.jsx("img",{src:"./images/samyak.png",alt:"pic"})})]}),h.jsx("div",{className:"circle8"}),h.jsx("div",{className:"circle9"}),h.jsxs("div",{className:"secretaries",children:[h.jsx("div",{className:"position",children:"Secretaries"}),h.jsxs("div",{className:"img-secs",children:[h.jsx("picture",{children:h.jsx("img",{src:"./images/jarpula.png",alt:"pic"})}),h.jsx("picture",{children:h.jsx("img",{src:"./images/abhay.png",alt:"pic"})}),h.jsx("picture",{children:h.jsx("img",{src:"./images/sahoo.png",alt:"pic"})}),h.jsx("picture",{children:h.jsx("img",{src:"./images/suddho.png",alt:"pic"})})]}),h.jsxs("div",{className:"img-secs",children:[h.jsx("picture",{children:h.jsx("img",{src:"./images/arthi.png",alt:"pic"})}),h.jsx("picture",{children:h.jsx("img",{src:"./images/arsh.png",alt:"pic"})}),h.jsx("picture",{children:h.jsx("img",{src:"./images/anand.png",alt:"pic"})})]})]}),h.jsx("div",{className:"circle6"}),h.jsx("div",{className:"circle7"}),h.jsxs("div",{className:"cores",children:[h.jsx("div",{className:"cores-position",children:"Cores"}),h.jsxs("div",{className:"cores-section",children:[h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:"SOFTWARE"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"ARSH SRIVASTAVA"}),h.jsx("li",{children:"MOHAMED KAIF"}),h.jsx("li",{children:"AJAY KRISHNAN K"}),h.jsx("li",{children:"SATPUTE ANIKET TUKARAM"}),h.jsx("li",{children:"DEEPSHIKHA"}),h.jsx("li",{children:"KASI DHANVI"}),h.jsx("li",{children:"HIMANSHU SHEKHAR MAHARAJ"}),h.jsx("li",{children:"ARUGONDA SRIKAR"}),h.jsx("li",{children:"SHASHANK SINGH"}),h.jsx("li",{children:"MEDIKONDA SREEKAR"}),h.jsx("li",{children:"MAHESH"}),h.jsx("li",{children:"SAI TEJA BHUKYA"})]})]}),h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:" MACHINE LEARNING"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"HARSH GOYAL"}),h.jsx("li",{children:"HARSHIT PANT"}),h.jsx("li",{children:"TEJAL KULKARNI"}),h.jsx("li",{children:"RATNA KSNR"}),h.jsx("li",{children:"AAYUSH ADLAKHA"}),h.jsx("li",{children:"DIKSHANT KHANDELWAL"}),h.jsx("li",{children:"VISHAL VIJAY DEVADIGA"}),h.jsx("li",{children:"SWAPNIL BAG"}),h.jsx("li",{children:"SHIRSENDU PAL"}),h.jsx("li",{children:"REDDICHARLA NAGA GIRI VARDHAN"}),h.jsx("li",{children:"ISHAAN JAIN"}),h.jsx("li",{children:"GITANSHU ARORA"})]})]}),h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:" MECHATRONICS"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"KEVIN"}),h.jsx("li",{children:"PRATIK PATIL"}),h.jsx("li",{children:"NANJUDARDHAYA"}),h.jsx("li",{children:"SHRIRAM H"}),h.jsx("li",{children:"NEERAJ BALACHANDERN"}),h.jsx("li",{children:"SAFA FATHIMA RAFEEK"}),h.jsx("li",{children:"GUNETHRA"}),h.jsx("li",{children:"KAIPA VENKATA TUHIL"}),h.jsx("li",{children:"RAGHUVEER"}),h.jsx("li",{children:"MATHEW M PHILIP"}),h.jsx("li",{children:"PRAKHAR"}),h.jsx("li",{children:"ASHISH BHARDWAJ"})]})]})]}),h.jsxs("div",{className:"cores-section",children:[h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:"EVENTS & PRO"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"PRABHAT"}),h.jsx("li",{children:"MEET JAIN"}),h.jsx("li",{children:"PARTH KANSAGRA"}),h.jsx("li",{children:"AHMIK VIRANI"}),h.jsx("li",{children:"SHARVIL PEDAMKAR"}),h.jsx("li",{children:"NISARG ASLE"}),h.jsx("li",{children:"VEDANT SANGHAVI"}),h.jsx("li",{children:"UTTAM PAHARIA"}),h.jsx("li",{children:"SARTHAK SINGHAL"}),h.jsx("li",{children:"PRITESH SINGH"}),h.jsx("li",{children:"DEVANSH AGRAWAL"})]})]}),h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:" OPERATIONS"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"TANISHQ BHATTACHARJEE"}),h.jsx("li",{children:"SAHIL KUSHWAHA"}),h.jsx("li",{children:"OMKAR NILKANTH"}),h.jsx("li",{children:"PRATHAMESH KADAM"}),h.jsx("li",{children:"CHANDRAHAAS"}),h.jsx("li",{children:"ABHAY GOYAL"}),h.jsx("li",{children:"SOHAM JIDDEWAR"}),h.jsx("li",{children:"VARUN SRIVASTAV"})]})]}),h.jsxs("div",{className:"core",children:[h.jsx("div",{className:"position",children:" DESIGN"}),h.jsxs("ul",{className:"name-cores",children:[h.jsx("li",{children:"PRANAY JAIN"}),h.jsx("li",{children:"PADMAPRABHAN A"}),h.jsx("li",{children:"THAVEEM"}),h.jsx("li",{children:"SRIJA MAILERSETTI"})]})]})]})]})]}),nb=Re.section`
  padding: 9rem 0;

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
    margin-top:250px;
    margin-left: 15rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  .convener{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-top:180px;
    .position{
      padding: 2rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    img{
      width: 262.292px;
      height: 280px;
    }
  }

  .secretaries{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    
    .position{
      padding: 7rem 0;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    .img-secs{
      display: flex;
      flex-direction: row;
       margin-bottom:40px;
      
    }
  }

  .cores{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    margin:30px;
    
    .cores-position{
      
      color: #000;
      text-align: center;
      font-size: 48px;
      font-family: Inter;
      font-weight: 700;
    }

    .cores-section{
      width: 100%;
      display: flex;
      justify-content: space-around;


      .core{
        
        width: 323px;
        height: 500px;
        left: 479px;
        top: 2487px;
        margin-bottom:200px;

        .position{
          width:auto;
          margin-left:0px;  
          padding: 2rem 0;
          color: #000;
          text-align: center;
          font-size: 35px;
          font-family: Inter;
          font-weight: 700;  
          margin-top:40px;
        }
  
        .name-cores{
          font-family: Inter;
          font-size:25px;
          color: #6C10C6;
          text-align: center;

        }
      }

      
    
    } 
  }


  .circle6{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 10rem;
    top: 190rem;
  }

  .circle7{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 15rem;
    top: 195rem;
  }

  .circle8{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 200rem;
    top: 90rem;
  }

  .circle9{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 195rem;
    top: 100rem;
  }
  


    @media (min-width:768px){
      
    }

    @media (max-width: 1200px) {
      .circle1 {
        display: none;
      }
  
      .circle2 {
        display: none;
      }
  
      .circle3 {
        display: none;
      }
  
      .circle4 {
        display: none;
      }

      .circle5 {
        display: none;
      }

      .circle6 {
        display: none;
      }
      .circle7 {
        display: none;
      }
      .circle8 {
        display: none;
      }
      .circle9 {
        display: none;
      }

      .hero-img{
        display: none;
      }

      .hero-heading {
        top:180px;
        font-weight: 800;
        font-size: 50px;
        margin-left:-100px;
        text-align: center;
      }

      
      .hero-tag {
        top:240px;
        font-weight: 500;
        font-size: 30px;
        margin-left:-120px;
        width:auto;
        height:auto;
      }

      .hero-bottom {
        font-size:30px;
        margin-top:120px;
        margin-left:30px;
        text-align: center;
        
      }

      .secretaries{
        
        .img-secs{
          display:flex;
          flex-wrap: wrap;
          align-content: center;
          gap: 3rem;
        }
      }

      .cores{
        
        
        .cores-section{
          display:flex;
          flex-wrap: wrap;
          

          .core{
            margin-bottom:0px;
            height:fit-content;
            
            .position{
              text-align: center;
              font-size:30px;
              margin-left:0px;
            }

            .name-cores{
              font-size:20px;
              text-align: center;
              padding-left:0rem;
              
            }
          }

        }
      }
  }

`,rb=()=>h.jsxs(ib,{children:[h.jsx("div",{className:"circle1"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsx("div",{className:"circle4"}),h.jsx("div",{className:"circle5"}),h.jsxs("div",{className:"container grid grid-two-column",children:[h.jsxs("div",{className:"section-hero-data",children:[h.jsx("h2",{className:"hero-heading",children:"Events"}),h.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),h.jsx("h4",{className:"hero-bottom",children:"Think Tinker Transform."})]}),h.jsx("div",{className:"section-hero-image",children:h.jsx("picture",{children:h.jsx("img",{src:"./images/Event.svg",alt:"image",className:"hero-img"})})})]})]}),ib=Re.section`
  padding: 9rem 0;

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom{
    position: absolute;
    width: 1008px;
    height: 525px;
    left: 15rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

`,ob=["Think","Tinker","Transform"],sb=200,lb=2e3,ab=100,ub=()=>h.jsxs(cb,{children:[h.jsx("div",{className:"circle1"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsx("div",{className:"circle4"}),h.jsx("div",{className:"circle5"}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-xl",id:"left",children:[h.jsx("h2",{className:"hero-heading",children:"Inventory"}),h.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),h.jsx("h4",{className:"hero-bottom",children:h.jsx(zo,{words:ob,interval:sb,typingDelay:lb,erasingDelay:ab})})]}),h.jsx("div",{className:"col-xl",id:"right",children:h.jsx("picture",{children:h.jsx("img",{src:"./images/Inventory.svg",alt:"image",className:"hero-img"})})})]}),h.jsxs("div",{className:"wip",children:[h.jsx("h2",{children:"Work in Progress"}),h.jsx("picture",{children:h.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),cb=Re.section`
  padding: 9rem 0;
  .col-xl {
    text-align: center;
  }
  .wip {
    padding-top: 9rem;
  }
  .wip .hero-img {
    width: 10rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 100%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }

    .wip h2{
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,db=["Think","Tinker","Transform"],fb=200,pb=2e3,hb=100,mb=()=>h.jsxs(gb,{children:[h.jsx("div",{className:"circle1"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsx("div",{className:"circle4"}),h.jsx("div",{className:"circle5"}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-xl",id:"left",children:[h.jsx("h2",{className:"hero-heading",children:"Projects"}),h.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),h.jsx("h4",{className:"hero-bottom",children:h.jsx(zo,{words:db,interval:fb,typingDelay:pb,erasingDelay:hb})})]}),h.jsx("div",{className:"col-xl",id:"right",children:h.jsx("picture",{children:h.jsx("img",{src:"./images/Project1.svg",alt:"image",className:"hero-img"})})})]}),h.jsxs("div",{className:"wip",children:[h.jsx("h2",{children:"Work in Progress"}),h.jsx("picture",{children:h.jsx("img",{src:"./images/wip1.png",alt:"image",className:"hero-img"})})]})]})]}),gb=Re.section`
  padding: 9rem 0;
  .col-xl {
    text-align: center;
  }
  .wip {
    padding-top: 9rem;
  }
  .wip .hero-img {
    width: 10rem;
    animation: rotation 10s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 41rem;
    top: 67rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 38rem;
    top: 18rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container {
    justify-content: center;
    text-align: center;
    width: 100vw;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture {
    text-align: end;
  }

  .hero-img {
    width: 70%;
  }
  @media (max-width: 1200px) {
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .container {
      justify-content: center;
      text-align: center;
      width: 100vw;
    }
    .wip h2{
      font-size: 4rem;
      padding-bottom: 5rem;
    }
    .pic1 {
      display: none;
    }
    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`,vb=["Think","Tinker","Transform"],yb=200,wb=2e3,xb=100,_b=()=>{const[e,t]=L.useState({name:"",email:"",message:""}),[n,r]=L.useState({name:!1,email:!1,message:!1,send:!1});function i(u){const{name:c,value:f}=u.target;t(y=>({...y,[c]:f}))}const o=L.useRef(null);function l(u){const c=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;u.preventDefault(),r({name:!e.name,email:!(e.email&&c.test(e.email)),message:!e.message,send:!!(e.name&&e.email&&c.test(e.email)&&e.message)}),n.send&&fetch("https://script.google.com/macros/s/AKfycbyRURVOmeH0Q5CIo7t1aE8aqvGFYDlNL94Xn658URWMfVWcT3_pc-xCSVIMTj_aLDZN/exec",{method:"POST",body:new FormData(o.current)}).then(f=>console.log(f.status)).catch(f=>console.log(f))}return h.jsxs(Sb,{children:[h.jsx("div",{className:"ellipse1"}),h.jsx("div",{className:"ellipse2"}),h.jsx("div",{className:"circle1"}),h.jsx("div",{className:"circle2"}),h.jsx("div",{className:"circle3"}),h.jsx("div",{className:"circle4"}),h.jsx("div",{className:"circle5"}),h.jsxs("div",{className:"container grid grid-two-column",children:[h.jsxs("div",{className:"section-hero-data",children:[h.jsx("h2",{className:"hero-heading",children:"Contact us!"}),h.jsx("h3",{className:"hero-tag",children:"Tinkerers’ Lab IITH"}),h.jsx("div",{className:"hero-bottom",children:h.jsx(zo,{words:vb,interval:yb,typingDelay:wb,erasingDelay:xb})})]}),h.jsx("div",{className:"section-hero-image",children:h.jsx("picture",{children:h.jsx("img",{src:"./images/Contacts.svg",alt:"image",className:"hero-img"})})})]}),h.jsxs("div",{className:"section-map-message",children:[h.jsx("div",{className:"section-map",children:h.jsx("div",{className:"map-iframe",children:h.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.1025061004142!2d78.12566068992736!3d17.597490805694715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf706d15f396d%3A0xd8767eda72322c70!2sTinkerers'%20Laboratory%20IITH!5e0!3m2!1sen!2sin!4v1688018342297!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})}),h.jsxs("div",{className:"section-message",children:[h.jsx("h4",{children:"Message Us"}),h.jsxs("form",{className:"section-message-box",onSubmit:l,noValidate:!0,ref:o,children:[h.jsxs("div",{className:"section-message-box-wraps",children:[h.jsx("label",{htmlFor:"message-name",children:"Name"}),h.jsx("input",{type:"text",placeholder:"Enter here",id:"message-name",name:"name",value:e.name,onChange:i})]}),n.name&&h.jsx("div",{className:"message-warning",children:"Enter your name"}),h.jsxs("div",{className:"section-message-box-wraps",children:[h.jsx("label",{htmlFor:"message-email",children:"Mail ID"}),h.jsx("input",{type:"email",placeholder:"Enter here",id:"message-email",name:"email",value:e.email,onChange:i}),n.email&&h.jsx("div",{className:"message-warning",children:"Enter your email"})]}),h.jsxs("div",{className:"section-message-box-wraps",children:[h.jsx("label",{htmlFor:"message-message",children:"Enter your Message"}),h.jsx("textarea",{placeholder:"Enter here",id:"message-message",name:"message",value:e.message,onChange:i}),n.message&&h.jsx("div",{className:"message-warning",children:"Enter your message"})]}),h.jsx("div",{className:"section-message-submit",children:h.jsx("button",{children:"Submit"})})]})]})]})]})},Sb=Re.section`
  padding: 9rem 0;

  .ellipse2 {
    position: absolute;
    width: auto;
    height: 669px;
    left: 0;
    top: -441px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .ellipse1 {
    position: absolute;
    width: 808px;
    @media (max-width: 1200px) {
      width: 700px;
    }
    height: 794px;
    left: -363px;
    top: -349px;
    z-index: -1;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1{
    position: absolute;
    background-color: #6C10C6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .circle2{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }

  .circle3{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }

  .circle4{
    position: absolute;
    background-color: #6C10C6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5{
    position: absolute;
    background-color: #6C10C6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }

  .hero-heading{
    position: absolute;
    /* width: 431px; */
    /* height: 170px; */
    left: 15rem;
    top: 310px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    /* line-height: 85px; */
  }

  .hero-tag{
    position: absolute;
    width: 1008px;
    height: 580px;
    left: 15rem;
    top: 406px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom{
    position: absolute;
    width: 1008px;
    height: 525px;
    left: 32rem;
    top: 485px;
      
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  }

  .section-hero-image{
    display: flex;
    justify-content: end;
    align-items: center;
  }

  picture{
    text-align: end;
  }

  .hero-img{
    width: 100%;
  }

  .section-map-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    height: 100vh;
  }
  .section-map {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-left: -7vw;
    margin-top: 12vh;
  }

  .section-message {
    height: 80vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-message-box {
    width: 40vw;
    max-width: 49rem;
    height: max-content;
    border-radius: 68px;
    background: #FFF;
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    margin-top: 1.5rem;

  }

  .section-message h4 {
    color: #6C10C6;
    font-size: 4rem;
    font-family: Inter;
  }

  .section-message-box label {
    font-size: 1.65rem;
    font-weight: 700;
    font-family: Inter;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }

  .section-message-box-wraps {
    display: flex;
    flex-direction: column;
  }

  #message-name, #message-email {
    width: 100%;
    height: 4.6rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #CBCBCB;
    font-size: 1.55rem;
    line-height: 5.3125rem;
    padding:  0.65rem 1.5rem;
    border: none;
    outline: none;
    font-family: Inter;
    margin-top: 0.2rem;
  }

  #message-message {
    width: 100%;
    height: 16rem;
    border-radius: 16px;
    background: #F3F3F3;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10) inset;
    color: #CBCBCB;
    font-size: 1.55rem;
    resize: none;
    padding:  0.9rem 1.6rem;
    border: none;
    outline:none;
    font-family: Inter;
    margin-top: 0.1rem;
  }

  .section-message-submit button {
    margin-top: 1.5rem;
    width: 100%;
    height: 5.5rem;
    background: #6C10C6;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 16px;
    line-height: 5.3125rem;
    font-family: Inter;
    border: none;
  } 

  .map-iframe {
    z-index: 999;
    margin-left: 10rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
    width: 35vw;
    height: 69vh;
    min-width: 300px;
    min-height: 410px;
    max-width: 500px;
    max-height: 700px;
  }

  .message-warning {
    color: red;
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: -0.7rem;
    font-size: 1.15rem;
  }
  @media (max-width: 1400px){
    .circle4,.circle5 {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .section-hero-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2vh;
      height: max-content;
      width: 95vw;
      margin-top: -15vh;
    }

    .hero-heading {
      display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;width: auto;
    height: auto;
    font-size: 56px;
    position: unset;
}

    .hero-tag {
    font-family: 'Inter';
    font-style: normal;
    width: auto;
    height: auto;
    position: unset;
    font-size: 33px;

    }

    .hero-bottom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    width: auto;
    height: 20px;
    position: unset;

    } 

    .section-hero-image {
      display: none;
    }
    .section-hero-data {
        height: 80vh;
    }

    .circle1, .circle2, .circle3, .circle4, .circle5 {
      display: none;
    }

    .section-map-message {
      height: 100vh;
    }
    .section-map {
      margin: 23vh 0 0 0;
      
    }

    .section-message {
      margin: 0;
      margin-top: 10vh;
      width: 100%;
    }

    .section-message-box {
      width: 100%;
    }
  }

    @media (max-width:768px){

      .section-map-message {
        display: flex;
        flex-direction: column;
        height: 180vh;
        padding: 0;
      }

      .map-iframe {
        width: 80vw;
        margin-left: -3vw;
      }

      .section-message {
        width: 80vw;
        order:1;
      }
      .section-message-box {
        width: 100%;
      }
      .section-map {
        width: 100%;
        order:2;
      }
    }

    @media (max-height: 600px) {
      .section-map{
        margin-top: 40vh;
      }
    }
`,bb=()=>{const[e,t]=L.useState(!1),n=()=>{t(!e)};return h.jsxs(Eb,{children:[h.jsx(kb,{children:h.jsx("img",{src:"./images/LogoNav.svg",alt:""})}),h.jsxs(Cb,{onClick:n,className:e?"active":"",children:[h.jsx("div",{}),h.jsx("div",{}),h.jsx("div",{})]}),h.jsx(Pb,{showMenu:e,className:e?"active":"",children:h.jsxs(Tb,{children:[h.jsx(Xr,{children:h.jsx(mr,{to:"/",children:"Home"})}),h.jsx(Xr,{children:h.jsx(mr,{to:"/team",children:"Team"})}),h.jsx(Xr,{children:h.jsx(mr,{to:"/events",children:"Events"})}),h.jsx(Xr,{children:h.jsx(mr,{to:"/inventory",children:"Inventory"})}),h.jsx(Xr,{children:h.jsx(mr,{to:"/projects",children:"Projects"})}),h.jsx(Xr,{children:h.jsx(mr,{to:"/contacts",children:"Contacts"})})]})})]})},Eb=Re.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`,kb=Re.div`
  font-weight: bold;
  font-size: 24px;
  padding-left: 5rem;
`,Cb=Re.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1200px) {
    position: fixed;
    top: 4rem;
    right: 2rem;
    display: flex;
    z-index: 15;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin-bottom: 5px;
    transition: transform 0.3s, background-color 0.3s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.active {
    div:first-child {
      transform: translateY(8px) rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`,Pb=Re.div`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 1rem;
    transform: ${({showMenu:e})=>e?"translateY(0%)":"translateY(-100%)"};
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`,Tb=Re.ul`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem;
  }
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,Xr=Re.li`
  a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    display: flex;
    align-items: center;

    transition: color 0.3s;
    padding: 2vw;

    &:hover,
    &:active {
      color: ${({theme:e})=>e.colors.nav_color};
    }
    color: #484848;
  }
`;Re.footer`
  .top {
    border-top: 1px solid #6c10c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subfooter {
    padding-top: 5rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .line {
      width: 3px;
      height: 12rem;
      background: #6c10c6;
    }
    img {
      left: 2rem;
      height: 12rem;
      width: 12rem;
    }

    .names {
      padding: 0 2rem;
      color: #6c10c6;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
    }
  }

  .tagline {
    align-items: center;
    justify-content: center;
    color: #6c10c6;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
  }

  footer {
    padding-top: 5rem;
  }

  .copyright {
    padding-top: 5rem;
    padding-bottom: 2rem;
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;
  }

  .location {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    margin: 0 6rem;
    text-align: center;
  }

  .handels {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    text-align: center;

    .accounts {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
      gap: 2rem;
    }
  }

  .contacts {
    color: #6c10c6;
    font-size: 20px;
    font-family: Inter;
    padding-left: 6.5rem;

    svg {
      font-size: 25px;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1200px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;

      .grid {
      }
    }

    .subfooter {
      img {
        margin-left: 2rem;
        height: 10rem;
        width: 10rem;
      }

      .names {
        font-size: 25px;
      }
    }
    .tagline {
      font-size: 20px;
    }

    .handels {
      .accounts {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        gap: 0.1rem;
      }
    }

    .contacts {
      color: #6c10c6;
      font-size: 15px;
      font-family: Inter;
      padding-left: 2rem;
    }
  }
`;const Nb=Px`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    color:${({theme:e})=>e.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h2{
    color:${({theme:e})=>e.colors.heading};
    font-size: 8rem;
    font-weight: 700;
}
h3{
    color:${({theme:e})=>e.colors.text_heading};
    font-size: 4rem;
    font-weight: 700;
}
h4{
    color:${({theme:e})=>e.colors.heading};
    font-size: 3.2rem;
    font-weight: 700;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.container{
    max-width: 190rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

`,jb=()=>{const e={colors:{heading:"#001824",text_heading:"#6C10C6",nav_color:"#484848",white:"#fff",gradient:"radial-gradient(40.83% 40.83% at 50% 50%, rgba(108, 16, 198, 0.5) 0%, rgba(186, 104, 200, 0) 100%) ",media:{mobile:"768px",tab:"1127px"}}};return h.jsxs(Ex,{theme:e,children:[h.jsx(Nb,{}),h.jsxs(FS,{children:[h.jsx(bb,{}),h.jsxs(LS,{children:[h.jsx(hr,{path:"/",element:h.jsx(GS,{})}),h.jsx(hr,{path:"/team",element:h.jsx(tb,{})}),h.jsx(hr,{path:"/events",element:h.jsx(rb,{})}),h.jsx(hr,{path:"/inventory",element:h.jsx(ub,{})}),h.jsx(hr,{path:"/projects",element:h.jsx(mb,{})}),h.jsx(hr,{path:"/contacts",element:h.jsx(_b,{})})]})]})]})};tu.createRoot(document.getElementById("root")).render(h.jsx(te.StrictMode,{children:h.jsx(jb,{})}));
