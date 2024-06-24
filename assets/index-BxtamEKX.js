function C1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P1={exports:{}},Cd={},R1={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),Kk=Symbol.for("react.portal"),Gk=Symbol.for("react.fragment"),Qk=Symbol.for("react.strict_mode"),Yk=Symbol.for("react.profiler"),Xk=Symbol.for("react.provider"),Jk=Symbol.for("react.context"),Zk=Symbol.for("react.forward_ref"),eA=Symbol.for("react.suspense"),tA=Symbol.for("react.memo"),nA=Symbol.for("react.lazy"),ny=Symbol.iterator;function rA(t){return t===null||typeof t!="object"?null:(t=ny&&t[ny]||t["@@iterator"],typeof t=="function"?t:null)}var b1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x1=Object.assign,N1={};function Ho(t,e,n){this.props=t,this.context=e,this.refs=N1,this.updater=n||b1}Ho.prototype.isReactComponent={};Ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O1(){}O1.prototype=Ho.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=N1,this.updater=n||b1}var mm=pm.prototype=new O1;mm.constructor=pm;x1(mm,Ho.prototype);mm.isPureReactComponent=!0;var ry=Array.isArray,D1=Object.prototype.hasOwnProperty,gm={current:null},L1={key:!0,ref:!0,__self:!0,__source:!0};function M1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D1.call(e,r)&&!L1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:gm.current}}function iA(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function sA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iy=/\/+/g;function xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sA(""+t.key):e.toString(36)}function ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case Kk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xh(o,0):r,ry(i)?(n="",t!=null&&(n=t.replace(iy,"$&/")+"/"),ac(i,e,n,"",function(c){return c})):i!=null&&(vm(i)&&(i=iA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ry(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+xh(s,a);o+=ac(s,e,n,u,i)}else if(u=rA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+xh(s,a++),o+=ac(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ku(t,e,n){if(t==null)return t;var r=[],i=0;return ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},lc={transition:null},aA={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:lc,ReactCurrentOwner:gm};function V1(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:ku,forEach:function(t,e,n){ku(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ku(t,function(){e++}),e},toArray:function(t){return ku(t,function(e){return e})||[]},only:function(t){if(!vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=Ho;ye.Fragment=Gk;ye.Profiler=Yk;ye.PureComponent=pm;ye.StrictMode=Qk;ye.Suspense=eA;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aA;ye.act=V1;ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=x1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)D1.call(e,u)&&!L1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t){return t={$$typeof:Jk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xk,_context:t},t.Consumer=t};ye.createElement=M1;ye.createFactory=function(t){var e=M1.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:Zk,render:t}};ye.isValidElement=vm;ye.lazy=function(t){return{$$typeof:nA,_payload:{_status:-1,_result:t},_init:oA}};ye.memo=function(t,e){return{$$typeof:tA,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=lc.transition;lc.transition={};try{t()}finally{lc.transition=e}};ye.unstable_act=V1;ye.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ye.useContext=function(t){return Jt.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ye.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ye.useId=function(){return Jt.current.useId()};ye.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};ye.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ye.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};ye.useRef=function(t){return Jt.current.useRef(t)};ye.useState=function(t){return Jt.current.useState(t)};ye.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};ye.useTransition=function(){return Jt.current.useTransition()};ye.version="18.3.1";R1.exports=ye;var U=R1.exports;const Ce=fm(U),lA=C1({__proto__:null,default:Ce},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uA=U,cA=Symbol.for("react.element"),dA=Symbol.for("react.fragment"),hA=Object.prototype.hasOwnProperty,fA=uA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pA={key:!0,ref:!0,__self:!0,__source:!0};function U1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hA.call(e,r)&&!pA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cA,type:t,key:s,ref:o,props:i,_owner:fA.current}}Cd.Fragment=dA;Cd.jsx=U1;Cd.jsxs=U1;P1.exports=Cd;var v=P1.exports,Pf={},j1={exports:{}},yn={},F1={exports:{}},B1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,ee){var ne=B.length;B.push(ee);e:for(;0<ne;){var me=ne-1>>>1,se=B[me];if(0<i(se,ee))B[me]=ee,B[ne]=se,ne=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ee=B[0],ne=B.pop();if(ne!==ee){B[0]=ne;e:for(var me=0,se=B.length,pe=se>>>1;me<pe;){var be=2*(me+1)-1,Pe=B[be],Me=be+1,Ye=B[Me];if(0>i(Pe,ne))Me<se&&0>i(Ye,Pe)?(B[me]=Ye,B[Me]=ne,me=Me):(B[me]=Pe,B[be]=ne,me=be);else if(Me<se&&0>i(Ye,ne))B[me]=Ye,B[Me]=ne,me=Me;else break e}}return ee}function i(B,ee){var ne=B.sortIndex-ee.sortIndex;return ne!==0?ne:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,E=!1,k=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=B)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function x(B){if(C=!1,I(B),!k)if(n(u)!==null)k=!0,qt(V);else{var ee=n(c);ee!==null&&We(x,ee.startTime-B)}}function V(B,ee){k=!1,C&&(C=!1,S(y),y=-1),E=!0;var ne=m;try{for(I(ee),f=n(u);f!==null&&(!(f.expirationTime>ee)||B&&!R());){var me=f.callback;if(typeof me=="function"){f.callback=null,m=f.priorityLevel;var se=me(f.expirationTime<=ee);ee=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(u)&&r(u),I(ee)}else r(u);f=n(u)}if(f!==null)var pe=!0;else{var be=n(c);be!==null&&We(x,be.startTime-ee),pe=!1}return pe}finally{f=null,m=ne,E=!1}}var F=!1,g=null,y=-1,T=5,A=-1;function R(){return!(t.unstable_now()-A<T)}function N(){if(g!==null){var B=t.unstable_now();A=B;var ee=!0;try{ee=g(!0,B)}finally{ee?P():(F=!1,g=null)}}else F=!1}var P;if(typeof _=="function")P=function(){_(N)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,He=_e.port2;_e.port1.onmessage=N,P=function(){He.postMessage(null)}}else P=function(){b(N,0)};function qt(B){g=B,F||(F=!0,P())}function We(B,ee){y=b(function(){B(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,qt(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ne=m;m=ee;try{return B()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=m;m=B;try{return ee()}finally{m=ne}},t.unstable_scheduleCallback=function(B,ee,ne){var me=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ne+se,B={id:d++,callback:ee,priorityLevel:B,startTime:ne,expirationTime:se,sortIndex:-1},ne>me?(B.sortIndex=ne,e(c,B),n(u)===null&&B===n(c)&&(C?(S(y),y=-1):C=!0,We(x,ne-me))):(B.sortIndex=se,e(u,B),k||E||(k=!0,qt(V))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var ee=m;return function(){var ne=m;m=ee;try{return B.apply(this,arguments)}finally{m=ne}}}})(B1);F1.exports=B1;var mA=F1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=U,vn=mA;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z1=new Set,nl={};function Ps(t,e){Po(t,e),Po(t+"Capture",e)}function Po(t,e){for(nl[t]=e,t=0;t<e.length;t++)z1.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=Object.prototype.hasOwnProperty,vA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sy={},oy={};function yA(t){return Rf.call(oy,t)?!0:Rf.call(sy,t)?!1:vA.test(t)?oy[t]=!0:(sy[t]=!0,!1)}function _A(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wA(t,e,n,r){if(e===null||typeof e>"u"||_A(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function _m(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ym,_m);Ot[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ym,_m);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ym,_m);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wm(t,e,n,r){var i=Ot.hasOwnProperty(e)?Ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wA(e,n,i,r)&&(n=null),r||i===null?yA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Au=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),H1=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),W1=Symbol.for("react.offscreen"),ay=Symbol.iterator;function pa(t){return t===null||typeof t!="object"?null:(t=ay&&t[ay]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Object.assign,Nh;function Ca(t){if(Nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nh=e&&e[1]||""}return`
`+Nh+t}var Oh=!1;function Dh(t,e){if(!t||Oh)return"";Oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function EA(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=Dh(t.type,!1),t;case 11:return t=Dh(t.type.render,!1),t;case 1:return t=Dh(t.type,!0),t;default:return""}}function Of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zs:return"Portal";case bf:return"Profiler";case Em:return"StrictMode";case xf:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H1:return(t.displayName||"Context")+".Consumer";case $1:return(t._context.displayName||"Context")+".Provider";case Tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Im:return e=t.displayName||null,e!==null?e:Of(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Of(t(e))}catch{}}return null}function TA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Of(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IA(t){var e=q1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=IA(t))}function K1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=q1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ly(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G1(t,e){e=e.checked,e!=null&&wm(t,"checked",e,!1)}function Lf(t,e){G1(t,e);var n=Ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function vo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Pa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function Q1(t,e){var n=Ci(e.value),r=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pu,X1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pu=Pu||document.createElement("div"),Pu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SA=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){SA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function J1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function Z1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=J1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kA=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(kA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function Sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,yo=null,_o=null;function hy(t){if(t=jl(t)){if(typeof zf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Nd(e),zf(t.stateNode,t.type,e))}}function ew(t){yo?_o?_o.push(t):_o=[t]:yo=t}function tw(){if(yo){var t=yo,e=_o;if(_o=yo=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function nw(t,e){return t(e)}function rw(){}var Lh=!1;function iw(t,e,n){if(Lh)return t(e,n);Lh=!0;try{return nw(t,e,n)}finally{Lh=!1,(yo!==null||_o!==null)&&(rw(),tw())}}function il(t,e){var n=t.stateNode;if(n===null)return null;var r=Nd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var $f=!1;if(Rr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){$f=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{$f=!1}function AA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ua=!1,xc=null,Nc=!1,Hf=null,CA={onError:function(t){Ua=!0,xc=t}};function PA(t,e,n,r,i,s,o,a,u){Ua=!1,xc=null,AA.apply(CA,arguments)}function RA(t,e,n,r,i,s,o,a,u){if(PA.apply(this,arguments),Ua){if(Ua){var c=xc;Ua=!1,xc=null}else throw Error(H(198));Nc||(Nc=!0,Hf=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fy(t){if(Rs(t)!==t)throw Error(H(188))}function bA(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fy(i),t;if(s===r)return fy(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function ow(t){return t=bA(t),t!==null?aw(t):null}function aw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=aw(t);if(e!==null)return e;t=t.sibling}return null}var lw=vn.unstable_scheduleCallback,py=vn.unstable_cancelCallback,xA=vn.unstable_shouldYield,NA=vn.unstable_requestPaint,lt=vn.unstable_now,OA=vn.unstable_getCurrentPriorityLevel,km=vn.unstable_ImmediatePriority,uw=vn.unstable_UserBlockingPriority,Oc=vn.unstable_NormalPriority,DA=vn.unstable_LowPriority,cw=vn.unstable_IdlePriority,Pd=null,tr=null;function LA(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Pd,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:UA,MA=Math.log,VA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(MA(t)/VA|0)|0}var Ru=64,bu=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ra(a):(s&=o,s!==0&&(r=Ra(s)))}else o=n&~i,o!==0?r=Ra(o):s!==0&&(r=Ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function jA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=jA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dw(){var t=Ru;return Ru<<=1,!(Ru&4194240)&&(Ru=64),t}function Mh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function BA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Re=0;function hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fw,Cm,pw,mw,gw,qf=!1,xu=[],pi=null,mi=null,gi=null,sl=new Map,ol=new Map,ri=[],zA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function my(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(e.pointerId)}}function ga(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jl(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $A(t,e,n,r,i){switch(e){case"focusin":return pi=ga(pi,t,e,n,r,i),!0;case"dragenter":return mi=ga(mi,t,e,n,r,i),!0;case"mouseover":return gi=ga(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return sl.set(s,ga(sl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ol.set(s,ga(ol.get(s)||null,t,e,n,r,i)),!0}return!1}function vw(t){var e=es(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=sw(n),e!==null){t.blockedOn=e,gw(t.priority,function(){pw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bf=r,n.target.dispatchEvent(r),Bf=null}else return e=jl(n),e!==null&&Cm(e),t.blockedOn=n,!1;e.shift()}return!0}function gy(t,e,n){uc(t)&&n.delete(e)}function HA(){qf=!1,pi!==null&&uc(pi)&&(pi=null),mi!==null&&uc(mi)&&(mi=null),gi!==null&&uc(gi)&&(gi=null),sl.forEach(gy),ol.forEach(gy)}function va(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,HA)))}function al(t){function e(i){return va(i,t)}if(0<xu.length){va(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&va(pi,t),mi!==null&&va(mi,t),gi!==null&&va(gi,t),sl.forEach(e),ol.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)vw(n),n.blockedOn===null&&ri.shift()}var wo=jr.ReactCurrentBatchConfig,Lc=!0;function WA(t,e,n,r){var i=Re,s=wo.transition;wo.transition=null;try{Re=1,Pm(t,e,n,r)}finally{Re=i,wo.transition=s}}function qA(t,e,n,r){var i=Re,s=wo.transition;wo.transition=null;try{Re=4,Pm(t,e,n,r)}finally{Re=i,wo.transition=s}}function Pm(t,e,n,r){if(Lc){var i=Kf(t,e,n,r);if(i===null)qh(t,e,r,Mc,n),my(t,r);else if($A(i,t,e,n,r))r.stopPropagation();else if(my(t,r),e&4&&-1<zA.indexOf(t)){for(;i!==null;){var s=jl(i);if(s!==null&&fw(s),s=Kf(t,e,n,r),s===null&&qh(t,e,r,Mc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qh(t,e,r,null,n)}}var Mc=null;function Kf(t,e,n,r){if(Mc=null,t=Sm(r),t=es(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mc=t,null}function yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OA()){case km:return 1;case uw:return 4;case Oc:case DA:return 16;case cw:return 536870912;default:return 16}default:return 16}}var ci=null,Rm=null,cc=null;function _w(){if(cc)return cc;var t,e=Rm,n=e.length,r,i="value"in ci?ci.value:ci.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cc=i.slice(t,1<r?1-r:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function vy(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:vy,this.isPropagationStopped=vy,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bm=_n(Wo),Ul=tt({},Wo,{view:0,detail:0}),KA=_n(Ul),Vh,Uh,ya,Rd=tt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(Vh=t.screenX-ya.screenX,Uh=t.screenY-ya.screenY):Uh=Vh=0,ya=t),Vh)},movementY:function(t){return"movementY"in t?t.movementY:Uh}}),yy=_n(Rd),GA=tt({},Rd,{dataTransfer:0}),QA=_n(GA),YA=tt({},Ul,{relatedTarget:0}),jh=_n(YA),XA=tt({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),JA=_n(XA),ZA=tt({},Wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eC=_n(ZA),tC=tt({},Wo,{data:0}),_y=_n(tC),nC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iC[t])?!!e[t]:!1}function xm(){return sC}var oC=tt({},Ul,{key:function(t){if(t.key){var e=nC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xm,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aC=_n(oC),lC=tt({},Rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wy=_n(lC),uC=tt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xm}),cC=_n(uC),dC=tt({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hC=_n(dC),fC=tt({},Rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pC=_n(fC),mC=[9,13,27,32],Nm=Rr&&"CompositionEvent"in window,ja=null;Rr&&"documentMode"in document&&(ja=document.documentMode);var gC=Rr&&"TextEvent"in window&&!ja,ww=Rr&&(!Nm||ja&&8<ja&&11>=ja),Ey=" ",Ty=!1;function Ew(t,e){switch(t){case"keyup":return mC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function vC(t,e){switch(t){case"compositionend":return Tw(e);case"keypress":return e.which!==32?null:(Ty=!0,Ey);case"textInput":return t=e.data,t===Ey&&Ty?null:t;default:return null}}function yC(t,e){if(to)return t==="compositionend"||!Nm&&Ew(t,e)?(t=_w(),cc=Rm=ci=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ww&&e.locale!=="ko"?null:e.data;default:return null}}var _C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_C[t.type]:e==="textarea"}function Iw(t,e,n,r){ew(r),e=Vc(e,"onChange"),0<e.length&&(n=new bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fa=null,ll=null;function wC(t){Dw(t,0)}function bd(t){var e=io(t);if(K1(e))return t}function EC(t,e){if(t==="change")return e}var Sw=!1;if(Rr){var Fh;if(Rr){var Bh="oninput"in document;if(!Bh){var Sy=document.createElement("div");Sy.setAttribute("oninput","return;"),Bh=typeof Sy.oninput=="function"}Fh=Bh}else Fh=!1;Sw=Fh&&(!document.documentMode||9<document.documentMode)}function ky(){Fa&&(Fa.detachEvent("onpropertychange",kw),ll=Fa=null)}function kw(t){if(t.propertyName==="value"&&bd(ll)){var e=[];Iw(e,ll,t,Sm(t)),iw(wC,e)}}function TC(t,e,n){t==="focusin"?(ky(),Fa=e,ll=n,Fa.attachEvent("onpropertychange",kw)):t==="focusout"&&ky()}function IC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bd(ll)}function SC(t,e){if(t==="click")return bd(e)}function kC(t,e){if(t==="input"||t==="change")return bd(e)}function AC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:AC;function ul(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rf.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function Ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cy(t,e){var n=Ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ay(n)}}function Aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cw(){for(var t=window,e=bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bc(t.document)}return e}function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CC(t){var e=Cw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Aw(n.ownerDocument.documentElement,n)){if(r!==null&&Om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cy(n,s);var o=Cy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PC=Rr&&"documentMode"in document&&11>=document.documentMode,no=null,Gf=null,Ba=null,Qf=!1;function Py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||no==null||no!==bc(r)||(r=no,"selectionStart"in r&&Om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&ul(Ba,r)||(Ba=r,r=Vc(Gf,"onSelect"),0<r.length&&(e=new bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=no)))}function Ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:Ou("Animation","AnimationEnd"),animationiteration:Ou("Animation","AnimationIteration"),animationstart:Ou("Animation","AnimationStart"),transitionend:Ou("Transition","TransitionEnd")},zh={},Pw={};Rr&&(Pw=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function xd(t){if(zh[t])return zh[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pw)return zh[t]=e[n];return t}var Rw=xd("animationend"),bw=xd("animationiteration"),xw=xd("animationstart"),Nw=xd("transitionend"),Ow=new Map,Ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){Ow.set(t,e),Ps(e,[t])}for(var $h=0;$h<Ry.length;$h++){var Hh=Ry[$h],RC=Hh.toLowerCase(),bC=Hh[0].toUpperCase()+Hh.slice(1);Vi(RC,"on"+bC)}Vi(Rw,"onAnimationEnd");Vi(bw,"onAnimationIteration");Vi(xw,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(Nw,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function by(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RA(r,e,void 0,t),t.currentTarget=null}function Dw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;by(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;by(i,a,c),s=u}}}if(Nc)throw t=Hf,Nc=!1,Hf=null,t}function je(t,e){var n=e[ep];n===void 0&&(n=e[ep]=new Set);var r=t+"__bubble";n.has(r)||(Lw(e,t,2,!1),n.add(r))}function Wh(t,e,n){var r=0;e&&(r|=4),Lw(n,t,r,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function cl(t){if(!t[Du]){t[Du]=!0,z1.forEach(function(n){n!=="selectionchange"&&(xC.has(n)||Wh(n,!1,t),Wh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,Wh("selectionchange",!1,e))}}function Lw(t,e,n,r){switch(yw(e)){case 1:var i=WA;break;case 4:i=qA;break;default:i=Pm}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}iw(function(){var c=s,d=Sm(n),f=[];e:{var m=Ow.get(t);if(m!==void 0){var E=bm,k=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":E=aC;break;case"focusin":k="focus",E=jh;break;case"focusout":k="blur",E=jh;break;case"beforeblur":case"afterblur":E=jh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=QA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=cC;break;case Rw:case bw:case xw:E=JA;break;case Nw:E=hC;break;case"scroll":E=KA;break;case"wheel":E=pC;break;case"copy":case"cut":case"paste":E=eC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=wy}var C=(e&4)!==0,b=!C&&t==="scroll",S=C?m!==null?m+"Capture":null:m;C=[];for(var _=c,I;_!==null;){I=_;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,S!==null&&(x=il(_,S),x!=null&&C.push(dl(_,x,I)))),b)break;_=_.return}0<C.length&&(m=new E(m,k,null,n,d),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Bf&&(k=n.relatedTarget||n.fromElement)&&(es(k)||k[br]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=c,k=k?es(k):null,k!==null&&(b=Rs(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=c),E!==k)){if(C=yy,x="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=wy,x="onPointerLeave",S="onPointerEnter",_="pointer"),b=E==null?m:io(E),I=k==null?m:io(k),m=new C(x,_+"leave",E,n,d),m.target=b,m.relatedTarget=I,x=null,es(d)===c&&(C=new C(S,_+"enter",k,n,d),C.target=I,C.relatedTarget=b,x=C),b=x,E&&k)t:{for(C=E,S=k,_=0,I=C;I;I=qs(I))_++;for(I=0,x=S;x;x=qs(x))I++;for(;0<_-I;)C=qs(C),_--;for(;0<I-_;)S=qs(S),I--;for(;_--;){if(C===S||S!==null&&C===S.alternate)break t;C=qs(C),S=qs(S)}C=null}else C=null;E!==null&&xy(f,m,E,C,!1),k!==null&&b!==null&&xy(f,b,k,C,!0)}}e:{if(m=c?io(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var V=EC;else if(Iy(m))if(Sw)V=kC;else{V=IC;var F=TC}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=SC);if(V&&(V=V(t,c))){Iw(f,V,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Mf(m,"number",m.value)}switch(F=c?io(c):window,t){case"focusin":(Iy(F)||F.contentEditable==="true")&&(no=F,Gf=c,Ba=null);break;case"focusout":Ba=Gf=no=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,Py(f,n,d);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":Py(f,n,d)}var g;if(Nm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else to?Ew(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ww&&n.locale!=="ko"&&(to||y!=="onCompositionStart"?y==="onCompositionEnd"&&to&&(g=_w()):(ci=d,Rm="value"in ci?ci.value:ci.textContent,to=!0)),F=Vc(c,y),0<F.length&&(y=new _y(y,t,null,n,d),f.push({event:y,listeners:F}),g?y.data=g:(g=Tw(n),g!==null&&(y.data=g)))),(g=gC?vC(t,n):yC(t,n))&&(c=Vc(c,"onBeforeInput"),0<c.length&&(d=new _y("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}Dw(f,e)})}function dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=il(t,n),s!=null&&r.unshift(dl(t,s,i)),s=il(t,e),s!=null&&r.push(dl(t,s,i))),t=t.return}return r}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=il(n,s),u!=null&&o.unshift(dl(n,u,a))):i||(u=il(n,s),u!=null&&o.push(dl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NC=/\r\n?/g,OC=/\u0000|\uFFFD/g;function Ny(t){return(typeof t=="string"?t:""+t).replace(NC,`
`).replace(OC,"")}function Lu(t,e,n){if(e=Ny(e),Ny(t)!==e&&n)throw Error(H(425))}function Uc(){}var Yf=null,Xf=null;function Jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zf=typeof setTimeout=="function"?setTimeout:void 0,DC=typeof clearTimeout=="function"?clearTimeout:void 0,Oy=typeof Promise=="function"?Promise:void 0,LC=typeof queueMicrotask=="function"?queueMicrotask:typeof Oy<"u"?function(t){return Oy.resolve(null).then(t).catch(MC)}:Zf;function MC(t){setTimeout(function(){throw t})}function Kh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);al(e)}function vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Xn="__reactFiber$"+qo,hl="__reactProps$"+qo,br="__reactContainer$"+qo,ep="__reactEvents$"+qo,VC="__reactListeners$"+qo,UC="__reactHandles$"+qo;function es(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dy(t);t!==null;){if(n=t[Xn])return n;t=Dy(t)}return e}t=n,n=t.parentNode}return null}function jl(t){return t=t[Xn]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Nd(t){return t[hl]||null}var tp=[],so=-1;function Ui(t){return{current:t}}function Be(t){0>so||(t.current=tp[so],tp[so]=null,so--)}function De(t,e){so++,tp[so]=t.current,t.current=e}var Pi={},Ht=Ui(Pi),sn=Ui(!1),fs=Pi;function Ro(t,e){var n=t.type.contextTypes;if(!n)return Pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function jc(){Be(sn),Be(Ht)}function Ly(t,e,n){if(Ht.current!==Pi)throw Error(H(168));De(Ht,e),De(sn,n)}function Mw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,TA(t)||"Unknown",i));return tt({},n,r)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,fs=Ht.current,De(Ht,t),De(sn,sn.current),!0}function My(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Mw(t,e,fs),r.__reactInternalMemoizedMergedChildContext=t,Be(sn),Be(Ht),De(Ht,t)):Be(sn),De(sn,n)}var wr=null,Od=!1,Gh=!1;function Vw(t){wr===null?wr=[t]:wr.push(t)}function jC(t){Od=!0,Vw(t)}function ji(){if(!Gh&&wr!==null){Gh=!0;var t=0,e=Re;try{var n=wr;for(Re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Od=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),lw(km,ji),i}finally{Re=e,Gh=!1}}return null}var oo=[],ao=0,Bc=null,zc=0,In=[],Sn=0,ps=null,Er=1,Tr="";function Xi(t,e){oo[ao++]=zc,oo[ao++]=Bc,Bc=t,zc=e}function Uw(t,e,n){In[Sn++]=Er,In[Sn++]=Tr,In[Sn++]=ps,ps=t;var r=Er;t=Tr;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Bn(e)+i|n<<i|r,Tr=s+t}else Er=1<<s|n<<i|r,Tr=t}function Dm(t){t.return!==null&&(Xi(t,1),Uw(t,1,0))}function Lm(t){for(;t===Bc;)Bc=oo[--ao],oo[ao]=null,zc=oo[--ao],oo[ao]=null;for(;t===ps;)ps=In[--Sn],In[Sn]=null,Tr=In[--Sn],In[Sn]=null,Er=In[--Sn],In[Sn]=null}var gn=null,hn=null,Ge=!1,jn=null;function jw(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,hn=vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ps!==null?{id:Er,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,hn=null,!0):!1;default:return!1}}function np(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rp(t){if(Ge){var e=hn;if(e){var n=e;if(!Vy(t,e)){if(np(t))throw Error(H(418));e=vi(n.nextSibling);var r=gn;e&&Vy(t,e)?jw(r,n):(t.flags=t.flags&-4097|2,Ge=!1,gn=t)}}else{if(np(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ge=!1,gn=t}}}function Uy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Mu(t){if(t!==gn)return!1;if(!Ge)return Uy(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jf(t.type,t.memoizedProps)),e&&(e=hn)){if(np(t))throw Fw(),Error(H(418));for(;e;)jw(t,e),e=vi(e.nextSibling)}if(Uy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=gn?vi(t.stateNode.nextSibling):null;return!0}function Fw(){for(var t=hn;t;)t=vi(t.nextSibling)}function bo(){hn=gn=null,Ge=!1}function Mm(t){jn===null?jn=[t]:jn.push(t)}var FC=jr.ReactCurrentBatchConfig;function _a(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Vu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jy(t){var e=t._init;return e(t._payload)}function Bw(t){function e(S,_){if(t){var I=S.deletions;I===null?(S.deletions=[_],S.flags|=16):I.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=Ei(S,_),S.index=0,S.sibling=null,S}function s(S,_,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<_?(S.flags|=2,_):I):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,_,I,x){return _===null||_.tag!==6?(_=tf(I,S.mode,x),_.return=S,_):(_=i(_,I),_.return=S,_)}function u(S,_,I,x){var V=I.type;return V===eo?d(S,_,I.props.children,x,I.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ti&&jy(V)===_.type)?(x=i(_,I.props),x.ref=_a(S,_,I),x.return=S,x):(x=yc(I.type,I.key,I.props,null,S.mode,x),x.ref=_a(S,_,I),x.return=S,x)}function c(S,_,I,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=nf(I,S.mode,x),_.return=S,_):(_=i(_,I.children||[]),_.return=S,_)}function d(S,_,I,x,V){return _===null||_.tag!==7?(_=us(I,S.mode,x,V),_.return=S,_):(_=i(_,I),_.return=S,_)}function f(S,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=tf(""+_,S.mode,I),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Au:return I=yc(_.type,_.key,_.props,null,S.mode,I),I.ref=_a(S,null,_),I.return=S,I;case Zs:return _=nf(_,S.mode,I),_.return=S,_;case ti:var x=_._init;return f(S,x(_._payload),I)}if(Pa(_)||pa(_))return _=us(_,S.mode,I,null),_.return=S,_;Vu(S,_)}return null}function m(S,_,I,x){var V=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(S,_,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Au:return I.key===V?u(S,_,I,x):null;case Zs:return I.key===V?c(S,_,I,x):null;case ti:return V=I._init,m(S,_,V(I._payload),x)}if(Pa(I)||pa(I))return V!==null?null:d(S,_,I,x,null);Vu(S,I)}return null}function E(S,_,I,x,V){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(I)||null,a(_,S,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Au:return S=S.get(x.key===null?I:x.key)||null,u(_,S,x,V);case Zs:return S=S.get(x.key===null?I:x.key)||null,c(_,S,x,V);case ti:var F=x._init;return E(S,_,I,F(x._payload),V)}if(Pa(x)||pa(x))return S=S.get(I)||null,d(_,S,x,V,null);Vu(_,x)}return null}function k(S,_,I,x){for(var V=null,F=null,g=_,y=_=0,T=null;g!==null&&y<I.length;y++){g.index>y?(T=g,g=null):T=g.sibling;var A=m(S,g,I[y],x);if(A===null){g===null&&(g=T);break}t&&g&&A.alternate===null&&e(S,g),_=s(A,_,y),F===null?V=A:F.sibling=A,F=A,g=T}if(y===I.length)return n(S,g),Ge&&Xi(S,y),V;if(g===null){for(;y<I.length;y++)g=f(S,I[y],x),g!==null&&(_=s(g,_,y),F===null?V=g:F.sibling=g,F=g);return Ge&&Xi(S,y),V}for(g=r(S,g);y<I.length;y++)T=E(g,S,y,I[y],x),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),_=s(T,_,y),F===null?V=T:F.sibling=T,F=T);return t&&g.forEach(function(R){return e(S,R)}),Ge&&Xi(S,y),V}function C(S,_,I,x){var V=pa(I);if(typeof V!="function")throw Error(H(150));if(I=V.call(I),I==null)throw Error(H(151));for(var F=V=null,g=_,y=_=0,T=null,A=I.next();g!==null&&!A.done;y++,A=I.next()){g.index>y?(T=g,g=null):T=g.sibling;var R=m(S,g,A.value,x);if(R===null){g===null&&(g=T);break}t&&g&&R.alternate===null&&e(S,g),_=s(R,_,y),F===null?V=R:F.sibling=R,F=R,g=T}if(A.done)return n(S,g),Ge&&Xi(S,y),V;if(g===null){for(;!A.done;y++,A=I.next())A=f(S,A.value,x),A!==null&&(_=s(A,_,y),F===null?V=A:F.sibling=A,F=A);return Ge&&Xi(S,y),V}for(g=r(S,g);!A.done;y++,A=I.next())A=E(g,S,y,A.value,x),A!==null&&(t&&A.alternate!==null&&g.delete(A.key===null?y:A.key),_=s(A,_,y),F===null?V=A:F.sibling=A,F=A);return t&&g.forEach(function(N){return e(S,N)}),Ge&&Xi(S,y),V}function b(S,_,I,x){if(typeof I=="object"&&I!==null&&I.type===eo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Au:e:{for(var V=I.key,F=_;F!==null;){if(F.key===V){if(V=I.type,V===eo){if(F.tag===7){n(S,F.sibling),_=i(F,I.props.children),_.return=S,S=_;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ti&&jy(V)===F.type){n(S,F.sibling),_=i(F,I.props),_.ref=_a(S,F,I),_.return=S,S=_;break e}n(S,F);break}else e(S,F);F=F.sibling}I.type===eo?(_=us(I.props.children,S.mode,x,I.key),_.return=S,S=_):(x=yc(I.type,I.key,I.props,null,S.mode,x),x.ref=_a(S,_,I),x.return=S,S=x)}return o(S);case Zs:e:{for(F=I.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(S,_.sibling),_=i(_,I.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=nf(I,S.mode,x),_.return=S,S=_}return o(S);case ti:return F=I._init,b(S,_,F(I._payload),x)}if(Pa(I))return k(S,_,I,x);if(pa(I))return C(S,_,I,x);Vu(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,I),_.return=S,S=_):(n(S,_),_=tf(I,S.mode,x),_.return=S,S=_),o(S)):n(S,_)}return b}var xo=Bw(!0),zw=Bw(!1),$c=Ui(null),Hc=null,lo=null,Vm=null;function Um(){Vm=lo=Hc=null}function jm(t){var e=$c.current;Be($c),t._currentValue=e}function ip(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){Hc=t,Vm=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Vm!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(Hc===null)throw Error(H(308));lo=t,Hc.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var ts=null;function Fm(t){ts===null?ts=[t]:ts.push(t)}function $w(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fm(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,Fm(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wc(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,E=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=t,C=a;switch(m=e,E=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){f=k.call(E,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(E,f,m):k,m==null)break e;f=tt({},f,m);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gs|=o,t.lanes=o,t.memoizedState=f}}function By(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Fl={},nr=Ui(Fl),fl=Ui(Fl),pl=Ui(Fl);function ns(t){if(t===Fl)throw Error(H(174));return t}function zm(t,e){switch(De(pl,e),De(fl,t),De(nr,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uf(e,t)}Be(nr),De(nr,e)}function No(){Be(nr),Be(fl),Be(pl)}function Ww(t){ns(pl.current);var e=ns(nr.current),n=Uf(e,t.type);e!==n&&(De(fl,t),De(nr,n))}function $m(t){fl.current===t&&(Be(nr),Be(fl))}var Ze=Ui(0);function qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qh=[];function Hm(){for(var t=0;t<Qh.length;t++)Qh[t]._workInProgressVersionPrimary=null;Qh.length=0}var fc=jr.ReactCurrentDispatcher,Yh=jr.ReactCurrentBatchConfig,ms=0,et=null,gt=null,Tt=null,Kc=!1,za=!1,ml=0,BC=0;function Vt(){throw Error(H(321))}function Wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function qm(t,e,n,r,i,s){if(ms=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?WC:qC,t=n(r,i),za){s=0;do{if(za=!1,ml=0,25<=s)throw Error(H(301));s+=1,Tt=gt=null,e.updateQueue=null,fc.current=KC,t=n(r,i)}while(za)}if(fc.current=Gc,e=gt!==null&&gt.next!==null,ms=0,Tt=gt=et=null,Kc=!1,e)throw Error(H(300));return t}function Km(){var t=ml!==0;return ml=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Rn(){if(gt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Tt===null?et.memoizedState:Tt.next;if(e!==null)Tt=e,gt=t;else{if(t===null)throw Error(H(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?et.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function gl(t,e){return typeof e=="function"?e(t):e}function Xh(t){var e=Rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ms&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,et.lanes|=d,gs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Hn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,et.lanes|=s,gs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jh(t){var e=Rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qw(){}function Kw(t,e){var n=et,r=Rn(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,Gm(Yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,vl(9,Qw.bind(null,n,r,i,e),void 0,null),It===null)throw Error(H(349));ms&30||Gw(n,e,i)}return i}function Gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qw(t,e,n,r){e.value=n,e.getSnapshot=r,Xw(e)&&Jw(t)}function Yw(t,e,n){return n(function(){Xw(e)&&Jw(t)})}function Xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Jw(t){var e=xr(t,1);e!==null&&zn(e,t,1,-1)}function zy(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:t},e.queue=t,t=t.dispatch=HC.bind(null,et,t),[e.memoizedState,t]}function vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zw(){return Rn().memoizedState}function pc(t,e,n,r){var i=Qn();et.flags|=t,i.memoizedState=vl(1|e,n,void 0,r===void 0?null:r)}function Dd(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&Wm(r,o.deps)){i.memoizedState=vl(e,n,s,r);return}}et.flags|=t,i.memoizedState=vl(1|e,n,s,r)}function $y(t,e){return pc(8390656,8,t,e)}function Gm(t,e){return Dd(2048,8,t,e)}function eE(t,e){return Dd(4,2,t,e)}function tE(t,e){return Dd(4,4,t,e)}function nE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rE(t,e,n){return n=n!=null?n.concat([t]):null,Dd(4,4,nE.bind(null,e,t),n)}function Qm(){}function iE(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sE(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oE(t,e,n){return ms&21?(Hn(n,e)||(n=dw(),et.lanes|=n,gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function zC(t,e){var n=Re;Re=n!==0&&4>n?n:4,t(!0);var r=Yh.transition;Yh.transition={};try{t(!1),e()}finally{Re=n,Yh.transition=r}}function aE(){return Rn().memoizedState}function $C(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lE(t))uE(e,n);else if(n=$w(t,e,n,r),n!==null){var i=Xt();zn(n,t,r,i),cE(n,e,r)}}function HC(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lE(t))uE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var u=e.interleaved;u===null?(i.next=i,Fm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=$w(t,e,i,r),n!==null&&(i=Xt(),zn(n,t,r,i),cE(n,e,r))}}function lE(t){var e=t.alternate;return t===et||e!==null&&e===et}function uE(t,e){za=Kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var Gc={readContext:Pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},WC={readContext:Pn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:$y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pc(4194308,4,nE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return pc(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$C.bind(null,et,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:zy,useDebugValue:Qm,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=zy(!1),e=t[0];return t=zC.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=et,i=Qn();if(Ge){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),It===null)throw Error(H(349));ms&30||Gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$y(Yw.bind(null,r,s,t),[t]),r.flags|=2048,vl(9,Qw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=It.identifierPrefix;if(Ge){var n=Tr,r=Er;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ml++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qC={readContext:Pn,useCallback:iE,useContext:Pn,useEffect:Gm,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:Xh,useRef:Zw,useState:function(){return Xh(gl)},useDebugValue:Qm,useDeferredValue:function(t){var e=Rn();return oE(e,gt.memoizedState,t)},useTransition:function(){var t=Xh(gl)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:aE,unstable_isNewReconciler:!1},KC={readContext:Pn,useCallback:iE,useContext:Pn,useEffect:Gm,useImperativeHandle:rE,useInsertionEffect:eE,useLayoutEffect:tE,useMemo:sE,useReducer:Jh,useRef:Zw,useState:function(){return Jh(gl)},useDebugValue:Qm,useDeferredValue:function(t){var e=Rn();return gt===null?e.memoizedState=t:oE(e,gt.memoizedState,t)},useTransition:function(){var t=Jh(gl)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:aE,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ld={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=wi(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(zn(e,t,i,r),hc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=wi(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(zn(e,t,i,r),hc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=wi(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(zn(e,t,r,n),hc(e,t,r))}};function Hy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ul(n,r)||!ul(i,s):!0}function dE(t,e,n){var r=!1,i=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=on(e)?fs:Ht.current,r=e.contextTypes,s=(r=r!=null)?Ro(t,i):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ld,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ld.enqueueReplaceState(e,e.state,null)}function op(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=on(e)?fs:Ht.current,i.context=Ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ld.enqueueReplaceState(i,i.state,null),Wc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",r=e;do n+=EA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GC=typeof WeakMap=="function"?WeakMap:Map;function hE(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yc||(Yc=!0,vp=r),ap(t,e)},n}function fE(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ap(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lP.bind(null,t,e,n),e.then(t,t))}function Ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var QC=jr.ReactCurrentOwner,rn=!1;function Qt(t,e,n,r){e.child=t===null?zw(e,null,n,r):xo(e,t.child,n,r)}function Qy(t,e,n,r,i){n=n.render;var s=e.ref;return Eo(e,i),r=qm(t,e,n,r,s,i),n=Km(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(Ge&&n&&Dm(e),e.flags|=1,Qt(t,e,r,i),e.child)}function Yy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pE(t,e,s,r,i)):(t=yc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(o,r)&&t.ref===e.ref)return Nr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function pE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ul(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Nr(t,e,i)}return lp(t,e,n,r,i)}function mE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(co,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(co,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(co,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(co,dn),dn|=r;return Qt(t,e,i,n),e.child}function gE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lp(t,e,n,r,i){var s=on(n)?fs:Ht.current;return s=Ro(e,s),Eo(e,i),n=qm(t,e,n,r,s,i),r=Km(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(Ge&&r&&Dm(e),e.flags|=1,Qt(t,e,n,i),e.child)}function Xy(t,e,n,r,i){if(on(n)){var s=!0;Fc(e)}else s=!1;if(Eo(e,i),e.stateNode===null)mc(t,e),dE(e,n,r),op(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=on(n)?fs:Ht.current,c=Ro(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Wy(e,o,r,c),ni=!1;var m=e.memoizedState;o.state=m,Wc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||sn.current||ni?(typeof d=="function"&&(sp(e,n,d,r),u=e.memoizedState),(a=ni||Hy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?fs:Ht.current,u=Ro(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Wy(e,o,r,u),ni=!1,m=e.memoizedState,o.state=m,Wc(e,r,o,i);var k=e.memoizedState;a!==f||m!==k||sn.current||ni?(typeof E=="function"&&(sp(e,n,E,r),k=e.memoizedState),(c=ni||Hy(e,n,c,r,m,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return up(t,e,n,r,s,i)}function up(t,e,n,r,i,s){gE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&My(e,n,!1),Nr(t,e,s);r=e.stateNode,QC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=r.state,i&&My(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?Ly(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ly(t,e.context,!1),zm(t,e.containerInfo)}function Jy(t,e,n,r,i){return bo(),Mm(i),e.flags|=256,Qt(t,e,n,r),e.child}var cp={dehydrated:null,treeContext:null,retryLane:0};function dp(t){return{baseLanes:t,cachePool:null,transitions:null}}function yE(t,e,n){var r=e.pendingProps,i=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(Ze,i&1),t===null)return rp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ud(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dp(n),e.memoizedState=cp,t):Ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ei(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cp,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ym(t,e){return e=Ud({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uu(t,e,n,r){return r!==null&&Mm(r),xo(e,t.child,null,n),t=Ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zh(Error(H(422))),Uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ud({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=dp(o),e.memoizedState=cp,s);if(!(e.mode&1))return Uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Zh(s,r,void 0),Uu(t,e,o,r)}if(a=(o&t.childLanes)!==0,rn||a){if(r=It,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xr(t,i),zn(r,t,i,-1))}return ng(),r=Zh(Error(H(421))),Uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=vi(i.nextSibling),gn=e,Ge=!0,jn=null,t!==null&&(In[Sn++]=Er,In[Sn++]=Tr,In[Sn++]=ps,Er=t.id,Tr=t.overflow,ps=e),e=Ym(e,r.children),e.flags|=4096,e)}function Zy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ip(t.return,e,n)}function ef(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _E(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qt(t,e,r.children,n),r=Ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zy(t,n,e);else if(t.tag===19)Zy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(Ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ef(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ef(e,!0,n,null,s);break;case"together":ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XC(t,e,n){switch(e.tag){case 3:vE(e),bo();break;case 5:Ww(e);break;case 1:on(e.type)&&Fc(e);break;case 4:zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De($c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?yE(t,e,n):(De(Ze,Ze.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);De(Ze,Ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _E(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Ze,Ze.current),r)break;return null;case 22:case 23:return e.lanes=0,mE(t,e,n)}return Nr(t,e,n)}var wE,hp,EE,TE;wE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};EE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ns(nr.current);var s=null;switch(n){case"input":i=Df(t,i),r=Df(t,r),s=[];break;case"select":i=tt({},i,{value:void 0}),r=tt({},r,{value:void 0}),s=[];break;case"textarea":i=Vf(t,i),r=Vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uc)}jf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&je("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};TE=function(t,e,n,r){n!==r&&(e.flags|=4)};function wa(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JC(t,e,n){var r=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return on(e.type)&&jc(),Ut(e),null;case 3:return r=e.stateNode,No(),Be(sn),Be(Ht),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(wp(jn),jn=null))),hp(t,e),Ut(e),null;case 5:$m(e);var i=ns(pl.current);if(n=e.type,t!==null&&e.stateNode!=null)EE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Ut(e),null}if(t=ns(nr.current),Mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xn]=e,r[hl]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)je(ba[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":ly(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":cy(r,s),je("invalid",r)}jf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Lu(r.textContent,a,t),i=["children",""+a]):nl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":Cu(r),uy(r,s,!0);break;case"textarea":Cu(r),dy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xn]=e,t[hl]=r,wE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ff(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)je(ba[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":ly(t,r),i=Df(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=tt({},r,{value:void 0}),je("invalid",t);break;case"textarea":cy(t,r),i=Vf(t,r),je("invalid",t);break;default:i=r}jf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Z1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&X1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&rl(t,u):typeof u=="number"&&rl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&je("scroll",t):u!=null&&wm(t,s,u,o))}switch(n){case"input":Cu(t),uy(t,r,!1);break;case"textarea":Cu(t),dy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vo(t,!!r.multiple,s,!1):r.defaultValue!=null&&vo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)TE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=ns(pl.current),ns(nr.current),Mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xn]=e,(s=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=e,e.stateNode=r}return Ut(e),null;case 13:if(Be(Ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&hn!==null&&e.mode&1&&!(e.flags&128))Fw(),bo(),e.flags|=98560,s=!1;else if(s=Mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Xn]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else jn!==null&&(wp(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?yt===0&&(yt=3):ng())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return No(),hp(t,e),t===null&&cl(e.stateNode.containerInfo),Ut(e),null;case 10:return jm(e.type._context),Ut(e),null;case 17:return on(e.type)&&jc(),Ut(e),null;case 19:if(Be(Ze),s=e.memoizedState,s===null)return Ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wa(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qc(t),o!==null){for(e.flags|=128,wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>Do&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=qc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Ut(e),null}else 2*lt()-s.renderingStartTime>Do&&n!==1073741824&&(e.flags|=128,r=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=Ze.current,De(Ze,r?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function ZC(t,e){switch(Lm(e),e.tag){case 1:return on(e.type)&&jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),Be(sn),Be(Ht),Hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $m(e),null;case 13:if(Be(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ze),null;case 4:return No(),null;case 10:return jm(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var ju=!1,zt=!1,eP=typeof WeakSet=="function"?WeakSet:Set,Y=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function fp(t,e,n){try{n()}catch(r){st(t,e,r)}}var e_=!1;function tP(t,e){if(Yf=Lc,t=Cw(),Om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:t,selectionRange:n},Lc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,b=k.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?C:Mn(e.type,C),b);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){st(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return k=e_,e_=!1,k}function $a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fp(e,n,s)}i=i.next}while(i!==r)}}function Md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function IE(t){var e=t.alternate;e!==null&&(t.alternate=null,IE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[hl],delete e[ep],delete e[VC],delete e[UC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SE(t){return t.tag===5||t.tag===3||t.tag===4}function t_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uc));else if(r!==4&&(t=t.child,t!==null))for(mp(t,e,n),t=t.sibling;t!==null;)mp(t,e,n),t=t.sibling}function gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gp(t,e,n),t=t.sibling;t!==null;)gp(t,e,n),t=t.sibling}var Pt=null,Vn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)kE(t,e,n),n=n.sibling}function kE(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Pd,n)}catch{}switch(n.tag){case 5:zt||uo(n,e);case 6:var r=Pt,i=Vn;Pt=null,Xr(t,e,n),Pt=r,Vn=i,Pt!==null&&(Vn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Vn?(t=Pt,n=n.stateNode,t.nodeType===8?Kh(t.parentNode,n):t.nodeType===1&&Kh(t,n),al(t)):Kh(Pt,n.stateNode));break;case 4:r=Pt,i=Vn,Pt=n.stateNode.containerInfo,Vn=!0,Xr(t,e,n),Pt=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fp(n,e,o),i=i.next}while(i!==r)}Xr(t,e,n);break;case 1:if(!zt&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){st(n,e,a)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Xr(t,e,n),zt=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function n_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eP),e.forEach(function(r){var i=cP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Vn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Pt===null)throw Error(H(160));kE(s,o,i),Pt=null,Vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){st(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)AE(e,t),e=e.sibling}function AE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Gn(t),r&4){try{$a(3,t,t.return),Md(3,t)}catch(C){st(t,t.return,C)}try{$a(5,t,t.return)}catch(C){st(t,t.return,C)}}break;case 1:Ln(e,t),Gn(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(Ln(e,t),Gn(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{rl(i,"")}catch(C){st(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&G1(i,s),Ff(a,o);var c=Ff(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Z1(i,f):d==="dangerouslySetInnerHTML"?X1(i,f):d==="children"?rl(i,f):wm(i,d,f,c)}switch(a){case"input":Lf(i,s);break;case"textarea":Q1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?vo(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?vo(i,!!s.multiple,s.defaultValue,!0):vo(i,!!s.multiple,s.multiple?[]:"",!1))}i[hl]=s}catch(C){st(t,t.return,C)}}break;case 6:if(Ln(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){st(t,t.return,C)}}break;case 3:if(Ln(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{al(e.containerInfo)}catch(C){st(t,t.return,C)}break;case 4:Ln(e,t),Gn(t);break;case 13:Ln(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=lt())),r&4&&n_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,Ln(e,t),zt=c):Ln(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(m=Y,E=m.child,m.tag){case 0:case 11:case 14:case 15:$a(4,m,m.return);break;case 1:uo(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(C){st(r,n,C)}}break;case 5:uo(m,m.return);break;case 22:if(m.memoizedState!==null){i_(f);continue}}E!==null?(E.return=m,Y=E):i_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=J1("display",o))}catch(C){st(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){st(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Gn(t),r&4&&n_(t);break;case 21:break;default:Ln(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SE(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rl(i,""),r.flags&=-33);var s=t_(t);gp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t_(t);mp(t,a,o);break;default:throw Error(H(161))}}catch(u){st(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nP(t,e,n){Y=t,CE(t)}function CE(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ju;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||zt;a=ju;var c=zt;if(ju=o,(zt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?s_(i):u!==null?(u.return=o,Y=u):s_(i);for(;s!==null;)Y=s,CE(s),s=s.sibling;Y=i,ju=a,zt=c}r_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):r_(t)}}function r_(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&By(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}By(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&al(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}zt||e.flags&512&&pp(e)}catch(m){st(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function i_(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function s_(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Md(4,e)}catch(u){st(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){st(e,i,u)}}var s=e.return;try{pp(e)}catch(u){st(e,s,u)}break;case 5:var o=e.return;try{pp(e)}catch(u){st(e,o,u)}}}catch(u){st(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var rP=Math.ceil,Qc=jr.ReactCurrentDispatcher,Xm=jr.ReactCurrentOwner,Cn=jr.ReactCurrentBatchConfig,Se=0,It=null,ft=null,xt=0,dn=0,co=Ui(0),yt=0,yl=null,gs=0,Vd=0,Jm=0,Ha=null,tn=null,Zm=0,Do=1/0,_r=null,Yc=!1,vp=null,_i=null,Fu=!1,di=null,Xc=0,Wa=0,yp=null,gc=-1,vc=0;function Xt(){return Se&6?lt():gc!==-1?gc:gc=lt()}function wi(t){return t.mode&1?Se&2&&xt!==0?xt&-xt:FC.transition!==null?(vc===0&&(vc=dw()),vc):(t=Re,t!==0||(t=window.event,t=t===void 0?16:yw(t.type)),t):1}function zn(t,e,n,r){if(50<Wa)throw Wa=0,yp=null,Error(H(185));Vl(t,n,r),(!(Se&2)||t!==It)&&(t===It&&(!(Se&2)&&(Vd|=n),yt===4&&ii(t,xt)),an(t,r),n===1&&Se===0&&!(e.mode&1)&&(Do=lt()+500,Od&&ji()))}function an(t,e){var n=t.callbackNode;FA(t,e);var r=Dc(t,t===It?xt:0);if(r===0)n!==null&&py(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&py(n),e===1)t.tag===0?jC(o_.bind(null,t)):Vw(o_.bind(null,t)),LC(function(){!(Se&6)&&ji()}),n=null;else{switch(hw(r)){case 1:n=km;break;case 4:n=uw;break;case 16:n=Oc;break;case 536870912:n=cw;break;default:n=Oc}n=LE(n,PE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PE(t,e){if(gc=-1,vc=0,Se&6)throw Error(H(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var r=Dc(t,t===It?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jc(t,r);else{e=r;var i=Se;Se|=2;var s=bE();(It!==t||xt!==e)&&(_r=null,Do=lt()+500,ls(t,e));do try{oP();break}catch(a){RE(t,a)}while(!0);Um(),Qc.current=s,Se=i,ft!==null?e=0:(It=null,xt=0,e=yt)}if(e!==0){if(e===2&&(i=Wf(t),i!==0&&(r=i,e=_p(t,i))),e===1)throw n=yl,ls(t,0),ii(t,r),an(t,lt()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!iP(i)&&(e=Jc(t,r),e===2&&(s=Wf(t),s!==0&&(r=s,e=_p(t,s))),e===1))throw n=yl,ls(t,0),ii(t,r),an(t,lt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ji(t,tn,_r);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=Zm+500-lt(),10<e)){if(Dc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zf(Ji.bind(null,t,tn,_r),e);break}Ji(t,tn,_r);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rP(r/1960))-r,10<r){t.timeoutHandle=Zf(Ji.bind(null,t,tn,_r),r);break}Ji(t,tn,_r);break;case 5:Ji(t,tn,_r);break;default:throw Error(H(329))}}}return an(t,lt()),t.callbackNode===n?PE.bind(null,t):null}function _p(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Jc(t,e),t!==2&&(e=tn,tn=n,e!==null&&wp(e)),t}function wp(t){tn===null?tn=t:tn.push.apply(tn,t)}function iP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~Jm,e&=~Vd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function o_(t){if(Se&6)throw Error(H(327));To();var e=Dc(t,0);if(!(e&1))return an(t,lt()),null;var n=Jc(t,e);if(t.tag!==0&&n===2){var r=Wf(t);r!==0&&(e=r,n=_p(t,r))}if(n===1)throw n=yl,ls(t,0),ii(t,e),an(t,lt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,tn,_r),an(t,lt()),null}function eg(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(Do=lt()+500,Od&&ji())}}function vs(t){di!==null&&di.tag===0&&!(Se&6)&&To();var e=Se;Se|=1;var n=Cn.transition,r=Re;try{if(Cn.transition=null,Re=1,t)return t()}finally{Re=r,Cn.transition=n,Se=e,!(Se&6)&&ji()}}function tg(){dn=co.current,Be(co)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DC(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jc();break;case 3:No(),Be(sn),Be(Ht),Hm();break;case 5:$m(r);break;case 4:No();break;case 13:Be(Ze);break;case 19:Be(Ze);break;case 10:jm(r.type._context);break;case 22:case 23:tg()}n=n.return}if(It=t,ft=t=Ei(t.current,null),xt=dn=e,yt=0,yl=null,Jm=Vd=gs=0,tn=Ha=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ts=null}return t}function RE(t,e){do{var n=ft;try{if(Um(),fc.current=Gc,Kc){for(var r=et.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kc=!1}if(ms=0,Tt=gt=et=null,za=!1,ml=0,Xm.current=null,n===null||n.return===null){yt=1,yl=e,ft=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=xt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Ky(o);if(E!==null){E.flags&=-257,Gy(E,o,a,s,e),E.mode&1&&qy(s,c,e),e=E,u=c;var k=e.updateQueue;if(k===null){var C=new Set;C.add(u),e.updateQueue=C}else k.add(u);break e}else{if(!(e&1)){qy(s,c,e),ng();break e}u=Error(H(426))}}else if(Ge&&a.mode&1){var b=Ky(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Gy(b,o,a,s,e),Mm(Oo(u,a));break e}}s=u=Oo(u,a),yt!==4&&(yt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=hE(s,u,e);Fy(s,S);break e;case 1:a=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(_i===null||!_i.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=fE(s,a,e);Fy(s,x);break e}}s=s.return}while(s!==null)}NE(n)}catch(V){e=V,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function bE(){var t=Qc.current;return Qc.current=Gc,t===null?Gc:t}function ng(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||!(gs&268435455)&&!(Vd&268435455)||ii(It,xt)}function Jc(t,e){var n=Se;Se|=2;var r=bE();(It!==t||xt!==e)&&(_r=null,ls(t,e));do try{sP();break}catch(i){RE(t,i)}while(!0);if(Um(),Se=n,Qc.current=r,ft!==null)throw Error(H(261));return It=null,xt=0,yt}function sP(){for(;ft!==null;)xE(ft)}function oP(){for(;ft!==null&&!xA();)xE(ft)}function xE(t){var e=DE(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?NE(t):ft=e,Xm.current=null}function NE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZC(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ft=null;return}}else if(n=JC(n,e,dn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);yt===0&&(yt=5)}function Ji(t,e,n){var r=Re,i=Cn.transition;try{Cn.transition=null,Re=1,aP(t,e,n,r)}finally{Cn.transition=i,Re=r}return null}function aP(t,e,n,r){do To();while(di!==null);if(Se&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BA(t,s),t===It&&(ft=It=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fu||(Fu=!0,LE(Oc,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Re;Re=1;var a=Se;Se|=4,Xm.current=null,tP(t,n),AE(n,t),CC(Xf),Lc=!!Yf,Xf=Yf=null,t.current=n,nP(n),NA(),Se=a,Re=o,Cn.transition=s}else t.current=n;if(Fu&&(Fu=!1,di=t,Xc=i),s=t.pendingLanes,s===0&&(_i=null),LA(n.stateNode),an(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yc)throw Yc=!1,t=vp,vp=null,t;return Xc&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===yp?Wa++:(Wa=0,yp=t):Wa=0,ji(),null}function To(){if(di!==null){var t=hw(Xc),e=Cn.transition,n=Re;try{if(Cn.transition=null,Re=16>t?16:t,di===null)var r=!1;else{if(t=di,di=null,Xc=0,Se&6)throw Error(H(331));var i=Se;for(Se|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:$a(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var m=d.sibling,E=d.return;if(IE(d),d===c){Y=null;break}if(m!==null){m.return=E,Y=m;break}Y=E}}}var k=s.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var b=C.sibling;C.sibling=null,C=b}while(C!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Y=S;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Y=I;else e:for(o=_;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Md(9,a)}}catch(V){st(a,a.return,V)}if(a===o){Y=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Y=x;break e}Y=a.return}}if(Se=i,ji(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Pd,t)}catch{}r=!0}return r}finally{Re=n,Cn.transition=e}}return!1}function a_(t,e,n){e=Oo(n,e),e=hE(t,e,1),t=yi(t,e,1),e=Xt(),t!==null&&(Vl(t,1,e),an(t,e))}function st(t,e,n){if(t.tag===3)a_(t,t,n);else for(;e!==null;){if(e.tag===3){a_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=Oo(n,t),t=fE(e,t,1),e=yi(e,t,1),t=Xt(),e!==null&&(Vl(e,1,t),an(e,t));break}}e=e.return}}function lP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(xt&n)===n&&(yt===4||yt===3&&(xt&130023424)===xt&&500>lt()-Zm?ls(t,0):Jm|=n),an(t,e)}function OE(t,e){e===0&&(t.mode&1?(e=bu,bu<<=1,!(bu&130023424)&&(bu=4194304)):e=1);var n=Xt();t=xr(t,e),t!==null&&(Vl(t,e,n),an(t,n))}function uP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),OE(t,n)}function cP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),OE(t,n)}var DE;DE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,XC(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Ge&&e.flags&1048576&&Uw(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mc(t,e),t=e.pendingProps;var i=Ro(e,Ht.current);Eo(e,n),i=qm(null,e,r,t,i,n);var s=Km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,Fc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(e),i.updater=Ld,e.stateNode=i,i._reactInternals=e,op(e,r,t,n),e=up(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&Dm(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hP(r),t=Mn(r,t),i){case 0:e=lp(null,e,r,t,n);break e;case 1:e=Xy(null,e,r,t,n);break e;case 11:e=Qy(null,e,r,t,n);break e;case 14:e=Yy(null,e,r,Mn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),lp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Xy(t,e,r,i,n);case 3:e:{if(vE(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hw(t,e),Wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oo(Error(H(423)),e),e=Jy(t,e,r,n,i);break e}else if(r!==i){i=Oo(Error(H(424)),e),e=Jy(t,e,r,n,i);break e}else for(hn=vi(e.stateNode.containerInfo.firstChild),gn=e,Ge=!0,jn=null,n=zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=Nr(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return Ww(e),t===null&&rp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jf(r,i)?o=null:s!==null&&Jf(r,s)&&(e.flags|=32),gE(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&rp(e),null;case 13:return yE(t,e,n);case 4:return zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xo(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Qy(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De($c,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!sn.current){e=Nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ar(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ip(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ip(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=Pn(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),Yy(t,e,r,i,n);case 15:return pE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),mc(t,e),e.tag=1,on(r)?(t=!0,Fc(e)):t=!1,Eo(e,n),dE(e,r,i),op(e,r,i,n),up(null,e,r,!0,t,n);case 19:return _E(t,e,n);case 22:return mE(t,e,n)}throw Error(H(156,e.tag))};function LE(t,e){return lw(t,e)}function dP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,r){return new dP(t,e,n,r)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hP(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tm)return 11;if(t===Im)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return us(n.children,i,s,e);case Em:o=8,i|=8;break;case bf:return t=An(12,n,e,i|2),t.elementType=bf,t.lanes=s,t;case xf:return t=An(13,n,e,i),t.elementType=xf,t.lanes=s,t;case Nf:return t=An(19,n,e,i),t.elementType=Nf,t.lanes=s,t;case W1:return Ud(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $1:o=10;break e;case H1:o=9;break e;case Tm:o=11;break e;case Im:o=14;break e;case ti:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=An(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=An(7,t,r,e),t.lanes=n,t}function Ud(t,e,n,r){return t=An(22,t,r,e),t.elementType=W1,t.lanes=n,t.stateNode={isHidden:!1},t}function tf(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function nf(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mh(0),this.expirationTimes=Mh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,i,s,o,a,u){return t=new fP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(s),t}function pP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ME(t){if(!t)return Pi;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(on(n))return Mw(t,n,e)}return e}function VE(t,e,n,r,i,s,o,a,u){return t=ig(n,r,!0,t,i,s,o,a,u),t.context=ME(null),n=t.current,r=Xt(),i=wi(n),s=Ar(r,i),s.callback=e??null,yi(n,s,i),t.current.lanes=i,Vl(t,i,r),an(t,r),t}function jd(t,e,n,r){var i=e.current,s=Xt(),o=wi(i);return n=ME(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,o),t!==null&&(zn(t,i,o,s),hc(t,i,o)),o}function Zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sg(t,e){l_(t,e),(t=t.alternate)&&l_(t,e)}function mP(){return null}var UE=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}Fd.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));jd(t,e,null,null)};Fd.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vs(function(){jd(null,t,null,null)}),e[br]=null}};function Fd(t){this._internalRoot=t}Fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=mw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&vw(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u_(){}function gP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Zc(o);s.call(c)}}var o=VE(e,r,t,0,null,!1,!1,"",u_);return t._reactRootContainer=o,t[br]=o.current,cl(t.nodeType===8?t.parentNode:t),vs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zc(u);a.call(c)}}var u=ig(t,0,!1,null,null,!1,!1,"",u_);return t._reactRootContainer=u,t[br]=u.current,cl(t.nodeType===8?t.parentNode:t),vs(function(){jd(e,u,n,r)}),u}function zd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Zc(o);a.call(u)}}jd(e,o,t,i)}else o=gP(n,e,t,i,r);return Zc(o)}fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(Am(e,n|1),an(e,lt()),!(Se&6)&&(Do=lt()+500,ji()))}break;case 13:vs(function(){var r=xr(t,1);if(r!==null){var i=Xt();zn(r,t,1,i)}}),sg(t,1)}};Cm=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Xt();zn(e,t,134217728,n)}sg(t,134217728)}};pw=function(t){if(t.tag===13){var e=wi(t),n=xr(t,e);if(n!==null){var r=Xt();zn(n,t,e,r)}sg(t,e)}};mw=function(){return Re};gw=function(t,e){var n=Re;try{return Re=t,e()}finally{Re=n}};zf=function(t,e,n){switch(e){case"input":if(Lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nd(r);if(!i)throw Error(H(90));K1(r),Lf(r,i)}}}break;case"textarea":Q1(t,n);break;case"select":e=n.value,e!=null&&vo(t,!!n.multiple,e,!1)}};nw=eg;rw=vs;var vP={usingClientEntryPoint:!1,Events:[jl,io,Nd,ew,tw,eg]},Ea={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yP={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ow(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||mP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Pd=Bu.inject(yP),tr=Bu}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error(H(200));return pP(t,e,null,n)};yn.createRoot=function(t,e){if(!ag(t))throw Error(H(299));var n=!1,r="",i=UE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,i),t[br]=e.current,cl(t.nodeType===8?t.parentNode:t),new og(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=ow(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return vs(t)};yn.hydrate=function(t,e,n){if(!Bd(e))throw Error(H(200));return zd(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!ag(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[br]=e.current,cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fd(e)};yn.render=function(t,e,n){if(!Bd(e))throw Error(H(200));return zd(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Bd(t))throw Error(H(40));return t._reactRootContainer?(vs(function(){zd(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};yn.unstable_batchedUpdates=eg;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return zd(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function jE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jE)}catch(t){console.error(t)}}jE(),j1.exports=yn;var lg=j1.exports;const _P=fm(lg),wP=C1({__proto__:null,default:_P},[lg]);var c_=lg;Pf.createRoot=c_.createRoot,Pf.hydrateRoot=c_.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Je(){return Je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Je.apply(this,arguments)}var dt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dt||(dt={}));const d_="popstate";function EP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return _l("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bl(i)}return IP(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TP(){return Math.random().toString(36).substr(2,8)}function h_(t,e){return{usr:t.state,key:t.key,idx:e}}function _l(t,e,n,r){return n===void 0&&(n=null),Je({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fi(e):e,{state:n,key:e&&e.key||r||TP()})}function Bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Je({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=dt.Pop;let b=d(),S=b==null?null:b-c;c=b,u&&u({action:a,location:C.location,delta:S})}function m(b,S){a=dt.Push;let _=_l(C.location,b,S);c=d()+1;let I=h_(_,c),x=C.createHref(_);try{o.pushState(I,"",x)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(x)}s&&u&&u({action:a,location:C.location,delta:1})}function E(b,S){a=dt.Replace;let _=_l(C.location,b,S);c=d();let I=h_(_,c),x=C.createHref(_);o.replaceState(I,"",x),s&&u&&u({action:a,location:C.location,delta:0})}function k(b){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:Bl(b);return _=_.replace(/ $/,"%20"),we(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let C={get action(){return a},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(d_,f),u=b,()=>{i.removeEventListener(d_,f),u=null}},createHref(b){return e(i,b)},createURL:k,encodeLocation(b){let S=k(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(b){return o.go(b)}};return C}var Ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ke||(Ke={}));const SP=new Set(["lazy","caseSensitive","path","id","index","children"]);function kP(t){return t.index===!0}function Ep(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(we(i.index!==!0||!i.children,"Cannot specify children on an index route"),we(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),kP(i)){let u=Je({},i,e(i),{id:a});return r[a]=u,u}else{let u=Je({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=Ep(i.children,e,o,r)),u}})}function ho(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Fi(e):e,i=zl(r.pathname||"/",n);if(i==null)return null;let s=FE(t);CP(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=jP(i);o=MP(s[a],u)}return o}function AP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function FE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(we(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ti([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:DP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of BE(s.path))i(s,o,u)}),e}function BE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function CP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PP=/^:[\w-]+$/,RP=3,bP=2,xP=1,NP=10,OP=-2,f_=t=>t==="*";function DP(t,e){let n=t.split("/"),r=n.length;return n.some(f_)&&(r+=OP),e&&(r+=bP),n.filter(i=>!f_(i)).reduce((i,s)=>i+(PP.test(s)?RP:s===""?xP:NP),r)}function LP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=VP({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:Ti([i,d.pathname]),pathnameBase:zP(Ti([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Ti([i,d.pathnameBase]))}return s}function VP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=UP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const k=a[f];return E&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function UP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Lo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function FP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fi(t):t;return{pathname:n?n.startsWith("/")?n:BP(n,e):e,search:$P(r),hash:HP(i)}}function BP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $E(t,e){let n=zE(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function HE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fi(t):(i=Je({},t),we(!i.pathname||!i.pathname.includes("?"),rf("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),rf("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=FP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ti=t=>t.join("/").replace(/\/\/+/g,"/"),zP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$P=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class ug{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function cg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const WE=["post","put","patch","delete"],WP=new Set(WE),qP=["get",...WE],KP=new Set(qP),GP=new Set([301,302,303,307,308]),QP=new Set([307,308]),sf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},YP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ta={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),qE="remix-router-transitions";function JP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;we(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let O=t.detectErrorBoundary;i=L=>({hasErrorBoundary:O(L)})}else i=XP;let s={},o=Ep(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||nR,d=Je({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,m=new Set,E=null,k=null,C=null,b=t.hydrationData!=null,S=ho(o,t.history.location,u),_=null;if(S==null){let O=Tn(404,{pathname:t.history.location.pathname}),{matches:L,route:j}=I_(o);S=L,_={[j.id]:O}}let I,x=S.some(O=>O.route.lazy),V=S.some(O=>O.route.loader);if(x)I=!1;else if(!V)I=!0;else if(d.v7_partialHydration){let O=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,j=W=>W.route.loader?typeof W.route.loader=="function"&&W.route.loader.hydrate===!0?!1:O&&O[W.route.id]!==void 0||L&&L[W.route.id]!==void 0:!0;if(L){let W=S.findIndex(G=>L[G.route.id]!==void 0);I=S.slice(0,W+1).every(j)}else I=S.every(j)}else I=t.hydrationData!=null;let F,g={historyAction:t.history.action,location:t.history.location,matches:S,initialized:I,navigation:sf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},y=dt.Pop,T=!1,A,R=!1,N=new Map,P=null,_e=!1,He=!1,qt=[],We=[],B=new Map,ee=0,ne=-1,me=new Map,se=new Set,pe=new Map,be=new Map,Pe=new Set,Me=new Map,Ye=new Map,Hi=!1;function wh(){if(f=t.history.listen(O=>{let{action:L,location:j,delta:W}=O;if(Hi){Hi=!1;return}Lo(Ye.size===0||W!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Fs({currentLocation:g.location,nextLocation:j,historyAction:L});if(G&&W!=null){Hi=!0,t.history.go(W*-1),js(G,{state:"blocked",location:j,proceed(){js(G,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),t.history.go(W)},reset(){let Z=new Map(g.blockers);Z.set(G,Ta),St({blockers:Z})}});return}return qn(L,j)}),n){pR(e,N);let O=()=>mR(e,N);e.addEventListener("pagehide",O),P=()=>e.removeEventListener("pagehide",O)}return g.initialized||qn(dt.Pop,g.location,{initialHydration:!0}),F}function Ds(){f&&f(),P&&P(),m.clear(),A&&A.abort(),g.fetchers.forEach((O,L)=>Ki(L)),g.blockers.forEach((O,L)=>fu(L))}function Ls(O){return m.add(O),()=>m.delete(O)}function St(O,L){L===void 0&&(L={}),g=Je({},g,O);let j=[],W=[];d.v7_fetcherPersist&&g.fetchers.forEach((G,Z)=>{G.state==="idle"&&(Pe.has(Z)?W.push(Z):j.push(Z))}),[...m].forEach(G=>G(g,{deletedFetchers:W,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),d.v7_fetcherPersist&&(j.forEach(G=>g.fetchers.delete(G)),W.forEach(G=>Ki(G)))}function dr(O,L,j){var W,G;let{flushSync:Z}=j===void 0?{}:j,te=g.actionData!=null&&g.navigation.formMethod!=null&&Un(g.navigation.formMethod)&&g.navigation.state==="loading"&&((W=O.state)==null?void 0:W._isRedirect)!==!0,K;L.actionData?Object.keys(L.actionData).length>0?K=L.actionData:K=null:te?K=g.actionData:K=null;let le=L.loaderData?E_(g.loaderData,L.loaderData,L.matches||[],L.errors):g.loaderData,ce=g.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((oe,Oe)=>ce.set(Oe,Ta)));let mt=T===!0||g.navigation.formMethod!=null&&Un(g.navigation.formMethod)&&((G=O.state)==null?void 0:G._isRedirect)!==!0;a&&(o=a,a=void 0),_e||y===dt.Pop||(y===dt.Push?t.history.push(O,O.state):y===dt.Replace&&t.history.replace(O,O.state));let qe;if(y===dt.Pop){let oe=N.get(g.location.pathname);oe&&oe.has(O.pathname)?qe={currentLocation:g.location,nextLocation:O}:N.has(O.pathname)&&(qe={currentLocation:O,nextLocation:g.location})}else if(R){let oe=N.get(g.location.pathname);oe?oe.add(O.pathname):(oe=new Set([O.pathname]),N.set(g.location.pathname,oe)),qe={currentLocation:g.location,nextLocation:O}}St(Je({},L,{actionData:K,loaderData:le,historyAction:y,location:O,initialized:!0,navigation:sf,revalidation:"idle",restoreScrollPosition:zs(O,L.matches||g.matches),preventScrollReset:mt,blockers:ce}),{viewTransitionOpts:qe,flushSync:Z===!0}),y=dt.Pop,T=!1,R=!1,_e=!1,He=!1,qt=[],We=[]}async function Ms(O,L){if(typeof O=="number"){t.history.go(O);return}let j=Tp(g.location,g.matches,u,d.v7_prependBasename,O,d.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:W,submission:G,error:Z}=p_(d.v7_normalizeFormMethod,!1,j,L),te=g.location,K=_l(g.location,W,L&&L.state);K=Je({},K,t.history.encodeLocation(K));let le=L&&L.replace!=null?L.replace:void 0,ce=dt.Push;le===!0?ce=dt.Replace:le===!1||G!=null&&Un(G.formMethod)&&G.formAction===g.location.pathname+g.location.search&&(ce=dt.Replace);let mt=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,qe=(L&&L.unstable_flushSync)===!0,oe=Fs({currentLocation:te,nextLocation:K,historyAction:ce});if(oe){js(oe,{state:"blocked",location:K,proceed(){js(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),Ms(O,L)},reset(){let Oe=new Map(g.blockers);Oe.set(oe,Ta),St({blockers:Oe})}});return}return await qn(ce,K,{submission:G,pendingError:Z,preventScrollReset:mt,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:qe})}function ea(){if(Us(),St({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){qn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}qn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function qn(O,L,j){A&&A.abort(),A=null,y=O,_e=(j&&j.startUninterruptedRevalidation)===!0,sa(g.location,g.matches),T=(j&&j.preventScrollReset)===!0,R=(j&&j.enableViewTransition)===!0;let W=a||o,G=j&&j.overrideNavigation,Z=ho(W,L,u),te=(j&&j.flushSync)===!0;if(!Z){let oe=Tn(404,{pathname:L.pathname}),{matches:Oe,route:Xe}=I_(W);Bs(),dr(L,{matches:Oe,loaderData:{},errors:{[Xe.id]:oe}},{flushSync:te});return}if(g.initialized&&!He&&lR(g.location,L)&&!(j&&j.submission&&Un(j.submission.formMethod))){dr(L,{matches:Z},{flushSync:te});return}A=new AbortController;let K=Ks(t.history,L,A.signal,j&&j.submission),le;if(j&&j.pendingError)le=[qa(Z).route.id,{type:Ke.error,error:j.pendingError}];else if(j&&j.submission&&Un(j.submission.formMethod)){let oe=await Eh(K,L,j.submission,Z,{replace:j.replace,flushSync:te});if(oe.shortCircuited)return;le=oe.pendingActionResult,G=of(L,j.submission),te=!1,K=Ks(t.history,K.url,K.signal)}let{shortCircuited:ce,loaderData:mt,errors:qe}=await Th(K,L,Z,G,j&&j.submission,j&&j.fetcherSubmission,j&&j.replace,j&&j.initialHydration===!0,te,le);ce||(A=null,dr(L,Je({matches:Z},T_(le),{loaderData:mt,errors:qe})))}async function Eh(O,L,j,W,G){G===void 0&&(G={}),Us();let Z=hR(L,j);St({navigation:Z},{flushSync:G.flushSync===!0});let te,K=Sp(W,L);if(!K.route.action&&!K.route.lazy)te={type:Ke.error,error:Tn(405,{method:O.method,pathname:L.pathname,routeId:K.route.id})};else if(te=(await hr("action",O,[K],W))[0],O.signal.aborted)return{shortCircuited:!0};if(is(te)){let le;return G&&G.replace!=null?le=G.replace:le=y_(te.response.headers.get("Location"),new URL(O.url),u)===g.location.pathname+g.location.search,await Wi(O,te,{submission:j,replace:le}),{shortCircuited:!0}}if(rs(te))throw Tn(400,{type:"defer-action"});if(kn(te)){let le=qa(W,K.route.id);return(G&&G.replace)!==!0&&(y=dt.Push),{pendingActionResult:[le.route.id,te]}}return{pendingActionResult:[K.route.id,te]}}async function Th(O,L,j,W,G,Z,te,K,le,ce){let mt=W||of(L,G),qe=G||Z||A_(mt),oe=a||o,[Oe,Xe]=m_(t.history,g,j,qe,L,d.v7_partialHydration&&K===!0,d.unstable_skipActionErrorRevalidation,He,qt,We,Pe,pe,se,oe,u,ce);if(Bs(ge=>!(j&&j.some(kt=>kt.route.id===ge))||Oe&&Oe.some(kt=>kt.route.id===ge)),ne=++ee,Oe.length===0&&Xe.length===0){let ge=na();return dr(L,Je({matches:j,loaderData:{},errors:ce&&kn(ce[1])?{[ce[0]]:ce[1].error}:null},T_(ce),ge?{fetchers:new Map(g.fetchers)}:{}),{flushSync:le}),{shortCircuited:!0}}if(!_e&&(!d.v7_partialHydration||!K)){Xe.forEach(kt=>{let At=g.fetchers.get(kt.key),ut=Ia(void 0,At?At.data:void 0);g.fetchers.set(kt.key,ut)});let ge;ce&&!kn(ce[1])?ge={[ce[0]]:ce[1].data}:g.actionData&&(Object.keys(g.actionData).length===0?ge=null:ge=g.actionData),St(Je({navigation:mt},ge!==void 0?{actionData:ge}:{},Xe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:le})}Xe.forEach(ge=>{B.has(ge.key)&&Kn(ge.key),ge.controller&&B.set(ge.key,ge.controller)});let Wr=()=>Xe.forEach(ge=>Kn(ge.key));A&&A.signal.addEventListener("abort",Wr);let{loaderResults:En,fetcherResults:On}=await Vs(g.matches,j,Oe,Xe,O);if(O.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Wr),Xe.forEach(ge=>B.delete(ge.key));let Kt=S_([...En,...On]);if(Kt){if(Kt.idx>=Oe.length){let ge=Xe[Kt.idx-Oe.length].key;se.add(ge)}return await Wi(O,Kt.result,{replace:te}),{shortCircuited:!0}}let{loaderData:pr,errors:un}=w_(g,j,Oe,En,ce,Xe,On,Me);Me.forEach((ge,kt)=>{ge.subscribe(At=>{(At||ge.done)&&Me.delete(kt)})}),d.v7_partialHydration&&K&&g.errors&&Object.entries(g.errors).filter(ge=>{let[kt]=ge;return!Oe.some(At=>At.route.id===kt)}).forEach(ge=>{let[kt,At]=ge;un=Object.assign(un||{},{[kt]:At})});let qr=na(),Kr=ra(ne),Gi=qr||Kr||Xe.length>0;return Je({loaderData:pr,errors:un},Gi?{fetchers:new Map(g.fetchers)}:{})}function cu(O,L,j,W){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");B.has(O)&&Kn(O);let G=(W&&W.unstable_flushSync)===!0,Z=a||o,te=Tp(g.location,g.matches,u,d.v7_prependBasename,j,d.v7_relativeSplatPath,L,W==null?void 0:W.relative),K=ho(Z,te,u);if(!K){at(O,L,Tn(404,{pathname:te}),{flushSync:G});return}let{path:le,submission:ce,error:mt}=p_(d.v7_normalizeFormMethod,!0,te,W);if(mt){at(O,L,mt,{flushSync:G});return}let qe=Sp(K,le);if(T=(W&&W.preventScrollReset)===!0,ce&&Un(ce.formMethod)){ta(O,L,le,qe,K,G,ce);return}pe.set(O,{routeId:L,path:le}),du(O,L,le,qe,K,G,ce)}async function ta(O,L,j,W,G,Z,te){if(Us(),pe.delete(O),!W.route.action&&!W.route.lazy){let ut=Tn(405,{method:te.formMethod,pathname:j,routeId:L});at(O,L,ut,{flushSync:Z});return}let K=g.fetchers.get(O);Ve(O,fR(te,K),{flushSync:Z});let le=new AbortController,ce=Ks(t.history,j,le.signal,te);B.set(O,le);let mt=ee,oe=(await hr("action",ce,[W],G))[0];if(ce.signal.aborted){B.get(O)===le&&B.delete(O);return}if(d.v7_fetcherPersist&&Pe.has(O)){if(is(oe)||kn(oe)){Ve(O,ei(void 0));return}}else{if(is(oe))if(B.delete(O),ne>mt){Ve(O,ei(void 0));return}else return se.add(O),Ve(O,Ia(te)),Wi(ce,oe,{fetcherSubmission:te});if(kn(oe)){at(O,L,oe.error);return}}if(rs(oe))throw Tn(400,{type:"defer-action"});let Oe=g.navigation.location||g.location,Xe=Ks(t.history,Oe,le.signal),Wr=a||o,En=g.navigation.state!=="idle"?ho(Wr,g.navigation.location,u):g.matches;we(En,"Didn't find any matches after fetcher action");let On=++ee;me.set(O,On);let Kt=Ia(te,oe.data);g.fetchers.set(O,Kt);let[pr,un]=m_(t.history,g,En,te,Oe,!1,d.unstable_skipActionErrorRevalidation,He,qt,We,Pe,pe,se,Wr,u,[W.route.id,oe]);un.filter(ut=>ut.key!==O).forEach(ut=>{let mr=ut.key,Gr=g.fetchers.get(mr),gr=Ia(void 0,Gr?Gr.data:void 0);g.fetchers.set(mr,gr),B.has(mr)&&Kn(mr),ut.controller&&B.set(mr,ut.controller)}),St({fetchers:new Map(g.fetchers)});let qr=()=>un.forEach(ut=>Kn(ut.key));le.signal.addEventListener("abort",qr);let{loaderResults:Kr,fetcherResults:Gi}=await Vs(g.matches,En,pr,un,Xe);if(le.signal.aborted)return;le.signal.removeEventListener("abort",qr),me.delete(O),B.delete(O),un.forEach(ut=>B.delete(ut.key));let ge=S_([...Kr,...Gi]);if(ge){if(ge.idx>=pr.length){let ut=un[ge.idx-pr.length].key;se.add(ut)}return Wi(Xe,ge.result)}let{loaderData:kt,errors:At}=w_(g,g.matches,pr,Kr,void 0,un,Gi,Me);if(g.fetchers.has(O)){let ut=ei(oe.data);g.fetchers.set(O,ut)}ra(On),g.navigation.state==="loading"&&On>ne?(we(y,"Expected pending action"),A&&A.abort(),dr(g.navigation.location,{matches:En,loaderData:kt,errors:At,fetchers:new Map(g.fetchers)})):(St({errors:At,loaderData:E_(g.loaderData,kt,En,At),fetchers:new Map(g.fetchers)}),He=!1)}async function du(O,L,j,W,G,Z,te){let K=g.fetchers.get(O);Ve(O,Ia(te,K?K.data:void 0),{flushSync:Z});let le=new AbortController,ce=Ks(t.history,j,le.signal);B.set(O,le);let mt=ee,oe=(await hr("loader",ce,[W],G))[0];if(rs(oe)&&(oe=await YE(oe,ce.signal,!0)||oe),B.get(O)===le&&B.delete(O),!ce.signal.aborted){if(Pe.has(O)){Ve(O,ei(void 0));return}if(is(oe))if(ne>mt){Ve(O,ei(void 0));return}else{se.add(O),await Wi(ce,oe);return}if(kn(oe)){at(O,L,oe.error);return}we(!rs(oe),"Unhandled fetcher deferred data"),Ve(O,ei(oe.data))}}async function Wi(O,L,j){let{submission:W,fetcherSubmission:G,replace:Z}=j===void 0?{}:j;L.response.headers.has("X-Remix-Revalidate")&&(He=!0);let te=L.response.headers.get("Location");we(te,"Expected a Location header on the redirect Response"),te=y_(te,new URL(O.url),u);let K=_l(g.location,te,{_isRedirect:!0});if(n){let Oe=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Oe=!0;else if(dg.test(te)){const Xe=t.history.createURL(te);Oe=Xe.origin!==e.location.origin||zl(Xe.pathname,u)==null}if(Oe){Z?e.location.replace(te):e.location.assign(te);return}}A=null;let le=Z===!0?dt.Replace:dt.Push,{formMethod:ce,formAction:mt,formEncType:qe}=g.navigation;!W&&!G&&ce&&mt&&qe&&(W=A_(g.navigation));let oe=W||G;if(QP.has(L.response.status)&&oe&&Un(oe.formMethod))await qn(le,K,{submission:Je({},oe,{formAction:te}),preventScrollReset:T});else{let Oe=of(K,W);await qn(le,K,{overrideNavigation:Oe,fetcherSubmission:G,preventScrollReset:T})}}async function hr(O,L,j,W){try{let G=await rR(c,O,L,j,W,s,i);return await Promise.all(G.map((Z,te)=>{if(uR(Z)){let K=Z.result;return{type:Ke.redirect,response:oR(K,L,j[te].route.id,W,u,d.v7_relativeSplatPath)}}return sR(Z)}))}catch(G){return j.map(()=>({type:Ke.error,error:G}))}}async function Vs(O,L,j,W,G){let[Z,...te]=await Promise.all([j.length?hr("loader",G,j,L):[],...W.map(K=>{if(K.matches&&K.match&&K.controller){let le=Ks(t.history,K.path,K.controller.signal);return hr("loader",le,[K.match],K.matches).then(ce=>ce[0])}else return Promise.resolve({type:Ke.error,error:Tn(404,{pathname:K.path})})})]);return await Promise.all([k_(O,j,Z,Z.map(()=>G.signal),!1,g.loaderData),k_(O,W.map(K=>K.match),te,W.map(K=>K.controller?K.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:te}}function Us(){He=!0,qt.push(...Bs()),pe.forEach((O,L)=>{B.has(L)&&(We.push(L),Kn(L))})}function Ve(O,L,j){j===void 0&&(j={}),g.fetchers.set(O,L),St({fetchers:new Map(g.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function at(O,L,j,W){W===void 0&&(W={});let G=qa(g.matches,L);Ki(O),St({errors:{[G.route.id]:j},fetchers:new Map(g.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function qi(O){return d.v7_fetcherPersist&&(be.set(O,(be.get(O)||0)+1),Pe.has(O)&&Pe.delete(O)),g.fetchers.get(O)||YP}function Ki(O){let L=g.fetchers.get(O);B.has(O)&&!(L&&L.state==="loading"&&me.has(O))&&Kn(O),pe.delete(O),me.delete(O),se.delete(O),Pe.delete(O),g.fetchers.delete(O)}function hu(O){if(d.v7_fetcherPersist){let L=(be.get(O)||0)-1;L<=0?(be.delete(O),Pe.add(O)):be.set(O,L)}else Ki(O);St({fetchers:new Map(g.fetchers)})}function Kn(O){let L=B.get(O);we(L,"Expected fetch controller: "+O),L.abort(),B.delete(O)}function $r(O){for(let L of O){let j=qi(L),W=ei(j.data);g.fetchers.set(L,W)}}function na(){let O=[],L=!1;for(let j of se){let W=g.fetchers.get(j);we(W,"Expected fetcher: "+j),W.state==="loading"&&(se.delete(j),O.push(j),L=!0)}return $r(O),L}function ra(O){let L=[];for(let[j,W]of me)if(W<O){let G=g.fetchers.get(j);we(G,"Expected fetcher: "+j),G.state==="loading"&&(Kn(j),me.delete(j),L.push(j))}return $r(L),L.length>0}function ia(O,L){let j=g.blockers.get(O)||Ta;return Ye.get(O)!==L&&Ye.set(O,L),j}function fu(O){g.blockers.delete(O),Ye.delete(O)}function js(O,L){let j=g.blockers.get(O)||Ta;we(j.state==="unblocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="proceeding"||j.state==="blocked"&&L.state==="unblocked"||j.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+L.state);let W=new Map(g.blockers);W.set(O,L),St({blockers:W})}function Fs(O){let{currentLocation:L,nextLocation:j,historyAction:W}=O;if(Ye.size===0)return;Ye.size>1&&Lo(!1,"A router only supports one blocker at a time");let G=Array.from(Ye.entries()),[Z,te]=G[G.length-1],K=g.blockers.get(Z);if(!(K&&K.state==="proceeding")&&te({currentLocation:L,nextLocation:j,historyAction:W}))return Z}function Bs(O){let L=[];return Me.forEach((j,W)=>{(!O||O(W))&&(j.cancel(),L.push(W),Me.delete(W))}),L}function pu(O,L,j){if(E=O,C=L,k=j||null,!b&&g.navigation===sf){b=!0;let W=zs(g.location,g.matches);W!=null&&St({restoreScrollPosition:W})}return()=>{E=null,C=null,k=null}}function Hr(O,L){return k&&k(O,L.map(W=>AP(W,g.loaderData)))||O.key}function sa(O,L){if(E&&C){let j=Hr(O,L);E[j]=C()}}function zs(O,L){if(E){let j=Hr(O,L),W=E[j];if(typeof W=="number")return W}return null}function fr(O){s={},a=Ep(O,i,void 0,s)}return F={get basename(){return u},get future(){return d},get state(){return g},get routes(){return o},get window(){return e},initialize:wh,subscribe:Ls,enableScrollRestoration:pu,navigate:Ms,fetch:cu,revalidate:ea,createHref:O=>t.history.createHref(O),encodeLocation:O=>t.history.encodeLocation(O),getFetcher:qi,deleteFetcher:hu,dispose:Ds,getBlocker:ia,deleteBlocker:fu,_internalFetchControllers:B,_internalActiveDeferreds:Me,_internalSetRoutes:fr},F}function ZP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Tp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=HE(i||".",$E(u,s),zl(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!hg(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ti([n,d.pathname])),Bl(d)}function p_(t,e,n,r){if(!r||!ZP(r))return{path:n};if(r.formMethod&&!dR(r.formMethod))return{path:n,error:Tn(405,{method:r.formMethod})};let i=()=>({path:n,error:Tn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=GE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Un(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,k)=>{let[C,b]=k;return""+E+C+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Un(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}we(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Ip(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Ip(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=__(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=__(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Un(d.formMethod))return{path:n,submission:d};let f=Fi(n);return e&&f.search&&hg(f.search)&&u.append("index",""),f.search="?"+u,{path:Bl(f),submission:d}}function eR(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function m_(t,e,n,r,i,s,o,a,u,c,d,f,m,E,k,C){let b=C?kn(C[1])?C[1].error:C[1].data:void 0,S=t.createURL(e.location),_=t.createURL(i),I=C&&kn(C[1])?C[0]:void 0,x=I?eR(n,I):n,V=C?C[1].statusCode:void 0,F=o&&V&&V>=400,g=x.filter((T,A)=>{let{route:R}=T;if(R.lazy)return!0;if(R.loader==null)return!1;if(s)return typeof R.loader!="function"||R.loader.hydrate?!0:e.loaderData[R.id]===void 0&&(!e.errors||e.errors[R.id]===void 0);if(tR(e.loaderData,e.matches[A],T)||u.some(_e=>_e===T.route.id))return!0;let N=e.matches[A],P=T;return g_(T,Je({currentUrl:S,currentParams:N.params,nextUrl:_,nextParams:P.params},r,{actionResult:b,unstable_actionStatus:V,defaultShouldRevalidate:F?!1:a||S.pathname+S.search===_.pathname+_.search||S.search!==_.search||KE(N,P)}))}),y=[];return f.forEach((T,A)=>{if(s||!n.some(He=>He.route.id===T.routeId)||d.has(A))return;let R=ho(E,T.path,k);if(!R){y.push({key:A,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(A),P=Sp(R,T.path),_e=!1;m.has(A)?_e=!1:c.includes(A)?_e=!0:N&&N.state!=="idle"&&N.data===void 0?_e=a:_e=g_(P,Je({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:b,unstable_actionStatus:V,defaultShouldRevalidate:F?!1:a})),_e&&y.push({key:A,routeId:T.routeId,path:T.path,matches:R,match:P,controller:new AbortController})}),[g,y]}function tR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function KE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function g_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function v_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];we(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Lo(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!SP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Je({},e(i),{lazy:void 0}))}function nR(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function rR(t,e,n,r,i,s,o,a){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Je({},f,{shouldLoad:m,resolve:k=>(c.add(f.route.id),m?iR(e,n,f,s,o,k,a):Promise.resolve({type:Ke.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>we(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function iR(t,e,n,r,i,s,o){let a,u,c=d=>{let f,m=new Promise((C,b)=>f=b);u=()=>f(),e.signal.addEventListener("abort",u);let E=C=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...C!==void 0?[C]:[]),k;return s?k=s(C=>E(C)):k=(async()=>{try{return{type:"data",result:await E()}}catch(C){return{type:"error",result:C}}})(),Promise.race([k,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(E=>{f=E}),v_(n.route,i,r)]);if(f!==void 0)throw f;a=m}else if(await v_(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Tn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Ke.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Tn(404,{pathname:m})}we(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Ke.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function sR(t){let{result:e,type:n,status:r}=t;if(QE(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:Ke.error,error:a}}return n===Ke.error?{type:Ke.error,error:new ug(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Ke.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Ke.error)return{type:Ke.error,error:e,statusCode:cg(e)?e.status:r};if(cR(e)){var i,s;return{type:Ke.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Ke.data,data:e,statusCode:r}}function oR(t,e,n,r,i,s){let o=t.headers.get("Location");if(we(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!dg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Tp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function y_(t,e,n){if(dg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=zl(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ks(t,e,n,r){let i=t.createURL(GE(e)).toString(),s={signal:n};if(r&&Un(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Ip(r.formData):s.body=r.formData}return new Request(i,s)}function Ip(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function __(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function aR(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&kn(r[1])?r[1].error:void 0;return n.forEach((m,E)=>{let k=e[E].route.id;if(we(!is(m),"Cannot handle redirect results in processLoaderData"),kn(m)){let C=m.error;f!==void 0&&(C=f,f=void 0),a=a||{};{let b=qa(t,k);a[b.route.id]==null&&(a[b.route.id]=C)}o[k]=void 0,c||(c=!0,u=cg(m.error)?m.error.status:500),m.headers&&(d[k]=m.headers)}else rs(m)?(i.set(k,m.deferredData),o[k]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[k]=m.headers)):(o[k]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[k]=m.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function w_(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=aR(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:E}=s[d];we(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let k=o[d];if(!(E&&E.signal.aborted))if(kn(k)){let C=qa(t.matches,m==null?void 0:m.route.id);c&&c[C.route.id]||(c=Je({},c,{[C.route.id]:k.error})),t.fetchers.delete(f)}else if(is(k))we(!1,"Unhandled fetcher revalidation redirect");else if(rs(k))we(!1,"Unhandled fetcher deferred data");else{let C=ei(k.data);t.fetchers.set(f,C)}}return{loaderData:u,errors:c}}function E_(t,e,n,r){let i=Je({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function T_(t){return t?kn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function qa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function I_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Tn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new ug(t||500,o,new Error(a),!0)}function S_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(is(n))return{result:n,idx:e}}}function GE(t){let e=typeof t=="string"?Fi(t):t;return Bl(Je({},e,{hash:""}))}function lR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function uR(t){return QE(t.result)&&GP.has(t.result.status)}function rs(t){return t.type===Ke.deferred}function kn(t){return t.type===Ke.error}function is(t){return(t&&t.type)===Ke.redirect}function cR(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function QE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function dR(t){return KP.has(t.toLowerCase())}function Un(t){return WP.has(t.toLowerCase())}async function k_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!KE(c,u)&&(s&&s[u.route.id])!==void 0;if(rs(a)&&(i||d)){let f=r[o];we(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await YE(a,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function YE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ke.error,error:i}}return{type:Ke.data,data:t.deferredData.data}}}function hg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Sp(t,e){let n=typeof e=="string"?Fi(e).search:e.search;if(t[t.length-1].route.index&&hg(n||""))return t[t.length-1];let r=zE(t);return r[r.length-1]}function A_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function of(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ia(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function fR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ei(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function pR(t,e){try{let n=t.sessionStorage.getItem(qE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function mR(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(qE,JSON.stringify(n))}catch(r){Lo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ed(){return ed=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ed.apply(this,arguments)}const $d=U.createContext(null),XE=U.createContext(null),Hd=U.createContext(null),fg=U.createContext(null),Ko=U.createContext({outlet:null,matches:[],isDataRoute:!1}),JE=U.createContext(null);function Wd(){return U.useContext(fg)!=null}function $l(){return Wd()||we(!1),U.useContext(fg).location}function ZE(t){U.useContext(Hd).static||U.useLayoutEffect(t)}function bn(){let{isDataRoute:t}=U.useContext(Ko);return t?CR():gR()}function gR(){Wd()||we(!1);let t=U.useContext($d),{basename:e,future:n,navigator:r}=U.useContext(Hd),{matches:i}=U.useContext(Ko),{pathname:s}=$l(),o=JSON.stringify($E(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return ZE(()=>{a.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=HE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ti([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function vR(t,e,n,r){Wd()||we(!1);let{navigator:i}=U.useContext(Hd),{matches:s}=U.useContext(Ko),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$l(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let C=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=ho(t,{pathname:m});return TR(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Ti([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Ti([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r)}function yR(){let t=AR(),e=cg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const _R=U.createElement(yR,null);class wR extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Ko.Provider,{value:this.props.routeContext},U.createElement(JE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ER(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext($d);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Ko.Provider,{value:e},r)}function TR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||we(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,k=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||k){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,k=!1,C=null,b=null;n&&(E=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||_R,u&&(c<0&&m===0?(PR("route-fallback"),k=!0,b=null):c===m&&(k=!0,b=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),_=()=>{let I;return E?I=C:k?I=b:f.route.Component?I=U.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,U.createElement(ER,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(wR,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var eT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(eT||{}),td=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(td||{});function IR(t){let e=U.useContext($d);return e||we(!1),e}function SR(t){let e=U.useContext(XE);return e||we(!1),e}function kR(t){let e=U.useContext(Ko);return e||we(!1),e}function tT(t){let e=kR(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function AR(){var t;let e=U.useContext(JE),n=SR(td.UseRouteError),r=tT(td.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function CR(){let{router:t}=IR(eT.UseNavigateStable),e=tT(td.UseNavigateStable),n=U.useRef(!1);return ZE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ed({fromRouteId:e},s)))},[t,e])}const C_={};function PR(t,e,n){C_[t]||(C_[t]=!0)}function RR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dt.Pop,navigator:s,static:o=!1,future:a}=t;Wd()&&we(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:ed({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Fi(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:k="default"}=r,C=U.useMemo(()=>{let b=zl(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:E,key:k},navigationType:i}},[u,d,f,m,E,k,i]);return C==null?null:U.createElement(Hd.Provider,{value:c},U.createElement(fg.Provider,{children:n,value:C}))}new Promise(()=>{});function bR(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nd.apply(this,arguments)}const xR="6";try{window.__reactRouterVersion=xR}catch{}function NR(t,e){return JP({basename:void 0,future:nd({},void 0,{v7_prependBasename:!0}),history:EP({window:void 0}),hydrationData:OR(),routes:t,mapRouteProperties:bR,unstable_dataStrategy:void 0,window:void 0}).initialize()}function OR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=nd({},e,{errors:DR(e.errors)})),e}function DR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new ug(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const LR=U.createContext({isTransitioning:!1}),MR=U.createContext(new Map),VR="startTransition",P_=lA[VR],UR="flushSync",R_=wP[UR];function jR(t){P_?P_(t):t()}function Sa(t){R_?R_(t):t()}let FR=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function BR(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,a]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,E]=U.useState(),[k,C]=U.useState(),b=U.useRef(new Map),{v7_startTransition:S}=r||{},_=U.useCallback(g=>{S?jR(g):g()},[S]),I=U.useCallback((g,y)=>{let{deletedFetchers:T,unstable_flushSync:A,unstable_viewTransitionOpts:R}=y;T.forEach(P=>b.current.delete(P)),g.fetchers.forEach((P,_e)=>{P.data!==void 0&&b.current.set(_e,P.data)});let N=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!R||N){A?Sa(()=>s(g)):_(()=>s(g));return}if(A){Sa(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation})});let P=n.window.document.startViewTransition(()=>{Sa(()=>s(g))});P.finished.finally(()=>{Sa(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})})}),Sa(()=>E(P));return}m?(d&&d.resolve(),m.skipTransition(),C({state:g,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(a(g),c({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[n.window,m,d,b,_]);U.useLayoutEffect(()=>n.subscribe(I),[n,I]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new FR)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let g=o,y=d.promise,T=n.window.document.startViewTransition(async()=>{_(()=>s(g)),await y});T.finished.finally(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})}),E(T)}},[_,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&k&&(a(k.state),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}),C(void 0))},[u.isTransitioning,k]),U.useEffect(()=>{},[]);let x=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,y,T)=>n.navigate(g,{state:y,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(g,y,T)=>n.navigate(g,{replace:!0,state:y,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),V=n.basename||"/",F=U.useMemo(()=>({router:n,navigator:x,static:!1,basename:V}),[n,x,V]);return U.createElement(U.Fragment,null,U.createElement($d.Provider,{value:F},U.createElement(XE.Provider,{value:i},U.createElement(MR.Provider,{value:b.current},U.createElement(LR.Provider,{value:u},U.createElement(RR,{basename:V,location:i.location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?U.createElement(zR,{routes:n.routes,future:n.future,state:i}):e))))),null)}function zR(t){let{routes:e,future:n,state:r}=t;return vR(e,void 0,r,n)}var b_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(b_||(b_={}));var x_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(x_||(x_={}));const $R=()=>{const t=bn(),e=n=>{n.preventDefault(),t("/signup")};return v.jsx("div",{className:"background",children:v.jsx("div",{className:"overlay",children:v.jsxs("div",{className:"content",children:[v.jsx("h1",{children:"EquiBlock Capitals"}),v.jsx("p",{children:"A comprehensive worldwide equity investment management system established upon decentralized ledgers. Our platform operates on a global scale, utilizing decentralized ledger tech to manage reserves of equity investments."}),v.jsx("button",{className:"button",onClick:e,children:"Get Started"})]})})})},N_=()=>v.jsxs("div",{className:"bannerBg",children:[v.jsx("p",{className:"bannerTitle",children:"80% yield per annum for everyone"}),v.jsx("button",{className:"bannerButton",children:"Sign Up"})]}),HR=()=>{const t=bn();return v.jsxs("div",{className:"AboutBg",children:[v.jsx("h1",{className:"titleAbout",children:"About EquityBlock Capitals"}),v.jsx("p",{className:"desc",children:"At EquityBlock Capitals,we revolutionized equity investment management through the power of decentralized ledger technology. Our mission is to provide a secure, transparent, and efficient platform for managing full reserves of equity investments on a global scale. By leveraging cutting-edge blockchain solutions, we ensure unparalleled trust and reliability in our investment processes. At EquityBlock Credit world, we are committed to fostering greater accessibility and inclusivity, empowering investors worldwide to participate confidently in the global market. Join us in shaping the future of equity investment with innovation and integrity."}),v.jsx("button",{className:"AboutButton",onClick:e=>{e.preventDefault(),t("/signup")},children:"Start Today"})]})};function O_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O_(Object(n),!0).forEach(function(r){wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function rd(t){"@babel/helpers - typeof";return rd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rd(t)}function WR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qR(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function KR(t,e,n){return e&&qR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pg(t,e){return QR(t)||XR(t,e)||nT(t,e)||ZR()}function Hl(t){return GR(t)||YR(t)||nT(t)||JR()}function GR(t){if(Array.isArray(t))return kp(t)}function QR(t){if(Array.isArray(t))return t}function YR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function XR(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function nT(t,e){if(t){if(typeof t=="string")return kp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kp(t,e)}}function kp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function JR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D_=function(){},mg={},rT={},iT=null,sT={mark:D_,measure:D_};try{typeof window<"u"&&(mg=window),typeof document<"u"&&(rT=document),typeof MutationObserver<"u"&&(iT=MutationObserver),typeof performance<"u"&&(sT=performance)}catch{}var eb=mg.navigator||{},L_=eb.userAgent,M_=L_===void 0?"":L_,Ri=mg,ze=rT,V_=iT,zu=sT;Ri.document;var Fr=!!ze.documentElement&&!!ze.head&&typeof ze.addEventListener=="function"&&typeof ze.createElement=="function",oT=~M_.indexOf("MSIE")||~M_.indexOf("Trident/"),$u,Hu,Wu,qu,Ku,Or="___FONT_AWESOME___",Ap=16,aT="fa",lT="svg-inline--fa",ys="data-fa-i2svg",Cp="data-fa-pseudo-element",tb="data-fa-pseudo-element-pending",gg="data-prefix",vg="data-icon",U_="fontawesome-i2svg",nb="async",rb=["HTML","HEAD","STYLE","SCRIPT"],uT=function(){try{return!0}catch{return!1}}(),Fe="classic",ot="sharp",yg=[Fe,ot];function Wl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Fe]}})}var wl=Wl(($u={},wt($u,Fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),wt($u,ot,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$u)),El=Wl((Hu={},wt(Hu,Fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),wt(Hu,ot,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Hu)),Tl=Wl((Wu={},wt(Wu,Fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),wt(Wu,ot,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Wu)),ib=Wl((qu={},wt(qu,Fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),wt(qu,ot,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qu)),sb=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,cT="fa-layers-text",ob=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ab=Wl((Ku={},wt(Ku,Fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),wt(Ku,ot,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ku)),dT=[1,2,3,4,5,6,7,8,9,10],lb=dT.concat([11,12,13,14,15,16,17,18,19,20]),ub=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ss={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Il=new Set;Object.keys(El[Fe]).map(Il.add.bind(Il));Object.keys(El[ot]).map(Il.add.bind(Il));var cb=[].concat(yg,Hl(Il),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ss.GROUP,ss.SWAP_OPACITY,ss.PRIMARY,ss.SECONDARY]).concat(dT.map(function(t){return"".concat(t,"x")})).concat(lb.map(function(t){return"w-".concat(t)})),Ka=Ri.FontAwesomeConfig||{};function db(t){var e=ze.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ze&&typeof ze.querySelector=="function"){var fb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fb.forEach(function(t){var e=pg(t,2),n=e[0],r=e[1],i=hb(db(n));i!=null&&(Ka[r]=i)})}var hT={styleDefault:"solid",familyDefault:"classic",cssPrefix:aT,replacementClass:lT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ka.familyPrefix&&(Ka.cssPrefix=Ka.familyPrefix);var Mo=Q(Q({},hT),Ka);Mo.autoReplaceSvg||(Mo.observeMutations=!1);var J={};Object.keys(hT).forEach(function(t){Object.defineProperty(J,t,{enumerable:!0,set:function(n){Mo[t]=n,Ga.forEach(function(r){return r(J)})},get:function(){return Mo[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(e){Mo.cssPrefix=e,Ga.forEach(function(n){return n(J)})},get:function(){return Mo.cssPrefix}});Ri.FontAwesomeConfig=J;var Ga=[];function pb(t){return Ga.push(t),function(){Ga.splice(Ga.indexOf(t),1)}}var Jr=Ap,Jn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mb(t){if(!(!t||!Fr)){var e=ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ze.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ze.head.insertBefore(e,r),t}}var gb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sl(){for(var t=12,e="";t-- >0;)e+=gb[Math.random()*62|0];return e}function Go(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _g(t){return t.classList?Go(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function fT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(fT(t[n]),'" ')},"").trim()}function qd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function wg(t){return t.size!==Jn.size||t.x!==Jn.x||t.y!==Jn.y||t.rotate!==Jn.rotate||t.flipX||t.flipY}function yb(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function _b(t){var e=t.transform,n=t.width,r=n===void 0?Ap:n,i=t.height,s=i===void 0?Ap:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&oT?u+="translate(".concat(e.x/Jr-r/2,"em, ").concat(e.y/Jr-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/Jr,"em), calc(-50% + ").concat(e.y/Jr,"em)) "):u+="translate(".concat(e.x/Jr,"em, ").concat(e.y/Jr,"em) "),u+="scale(".concat(e.size/Jr*(e.flipX?-1:1),", ").concat(e.size/Jr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var wb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pT(){var t=aT,e=lT,n=J.cssPrefix,r=J.replacementClass,i=wb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var j_=!1;function af(){J.autoAddCss&&!j_&&(mb(pT()),j_=!0)}var Eb={mixout:function(){return{dom:{css:pT,insertCss:af}}},hooks:function(){return{beforeDOMElementCreation:function(){af()},beforeI2svg:function(){af()}}}},Dr=Ri||{};Dr[Or]||(Dr[Or]={});Dr[Or].styles||(Dr[Or].styles={});Dr[Or].hooks||(Dr[Or].hooks={});Dr[Or].shims||(Dr[Or].shims=[]);var Fn=Dr[Or],mT=[],Tb=function t(){ze.removeEventListener("DOMContentLoaded",t),id=1,mT.map(function(e){return e()})},id=!1;Fr&&(id=(ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ze.readyState),id||ze.addEventListener("DOMContentLoaded",Tb));function Ib(t){Fr&&(id?setTimeout(t,0):mT.push(t))}function ql(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?fT(t):"<".concat(e," ").concat(vb(r),">").concat(s.map(ql).join(""),"</").concat(e,">")}function F_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function Sb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pp(t){var e=Sb(t);return e.length===1?e[0].toString(16):null}function kb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function B_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=B_(e);typeof Fn.hooks.addPack=="function"&&!i?Fn.hooks.addPack(t,B_(e)):Fn.styles[t]=Q(Q({},Fn.styles[t]||{}),s),t==="fas"&&Rp("fa",e)}var Gu,Qu,Yu,fo=Fn.styles,Ab=Fn.shims,Cb=(Gu={},wt(Gu,Fe,Object.values(Tl[Fe])),wt(Gu,ot,Object.values(Tl[ot])),Gu),Eg=null,gT={},vT={},yT={},_T={},wT={},Pb=(Qu={},wt(Qu,Fe,Object.keys(wl[Fe])),wt(Qu,ot,Object.keys(wl[ot])),Qu);function Rb(t){return~cb.indexOf(t)}function bb(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Rb(i)?i:null}var ET=function(){var e=function(s){return lf(fo,function(o,a,u){return o[u]=lf(a,s,{}),o},{})};gT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),vT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),wT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in fo||J.autoFetchSvg,r=lf(Ab,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});yT=r.names,_T=r.unicodes,Eg=Kd(J.styleDefault,{family:J.familyDefault})};pb(function(t){Eg=Kd(t.styleDefault,{family:J.familyDefault})});ET();function Tg(t,e){return(gT[t]||{})[e]}function xb(t,e){return(vT[t]||{})[e]}function os(t,e){return(wT[t]||{})[e]}function TT(t){return yT[t]||{prefix:null,iconName:null}}function Nb(t){var e=_T[t],n=Tg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bi(){return Eg}var Ig=function(){return{prefix:null,iconName:null,rest:[]}};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Fe:n,i=wl[r][t],s=El[r][t]||El[r][i],o=t in Fn.styles?t:null;return s||o||null}var z_=(Yu={},wt(Yu,Fe,Object.keys(Tl[Fe])),wt(Yu,ot,Object.keys(Tl[ot])),Yu);function Gd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},wt(e,Fe,"".concat(J.cssPrefix,"-").concat(Fe)),wt(e,ot,"".concat(J.cssPrefix,"-").concat(ot)),e),o=null,a=Fe;(t.includes(s[Fe])||t.some(function(c){return z_[Fe].includes(c)}))&&(a=Fe),(t.includes(s[ot])||t.some(function(c){return z_[ot].includes(c)}))&&(a=ot);var u=t.reduce(function(c,d){var f=bb(J.cssPrefix,d);if(fo[d]?(d=Cb[a].includes(d)?ib[a][d]:d,o=d,c.prefix=d):Pb[a].indexOf(d)>-1?(o=d,c.prefix=Kd(d,{family:a})):f?c.iconName=f:d!==J.replacementClass&&d!==s[Fe]&&d!==s[ot]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var m=o==="fa"?TT(c.iconName):{},E=os(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||E||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!fo.far&&fo.fas&&!J.autoFetchSvg&&(c.prefix="fas")}return c},Ig());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===ot&&(fo.fass||J.autoFetchSvg)&&(u.prefix="fass",u.iconName=os(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=bi()||"fas"),u}var Ob=function(){function t(){WR(this,t),this.definitions={}}return KR(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Q(Q({},n.definitions[a]||{}),o[a]),Rp(a,o[a]);var u=Tl[Fe][a];u&&Rp(u,o[a]),ET()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,d=c[2];n[a]||(n[a]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][u]=c}),n}}]),t}(),$_=[],po={},Io={},Db=Object.keys(Io);function Lb(t,e){var n=e.mixoutsTo;return $_=t,po={},Object.keys(Io).forEach(function(r){Db.indexOf(r)===-1&&delete Io[r]}),$_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),rd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){po[o]||(po[o]=[]),po[o].push(s[o])})}r.provides&&r.provides(Io)}),n}function bp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=po[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function _s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=po[t]||[];i.forEach(function(s){s.apply(null,n)})}function Lr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Io[t]?Io[t].apply(null,e):void 0}function xp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||bi();if(e)return e=os(n,e)||e,F_(IT.definitions,n,e)||F_(Fn.styles,n,e)}var IT=new Ob,Mb=function(){J.autoReplaceSvg=!1,J.observeMutations=!1,_s("noAuto")},Vb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fr?(_s("beforeI2svg",e),Lr("pseudoElements2svg",e),Lr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,Ib(function(){jb({autoReplaceSvgRoot:n}),_s("watch",e)})}},Ub={icon:function(e){if(e===null)return null;if(rd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:os(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kd(e[0]);return{prefix:r,iconName:os(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(J.cssPrefix,"-"))>-1||e.match(sb))){var i=Gd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||bi(),iconName:os(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=bi();return{prefix:s,iconName:os(s,e)||e}}}},wn={noAuto:Mb,config:J,dom:Vb,parse:Ub,library:IT,findIconDefinition:xp,toHtml:ql},jb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ze:n;(Object.keys(Fn.styles).length>0||J.autoFetchSvg)&&Fr&&J.autoReplaceSvg&&wn.dom.i2svg({node:r})};function Qd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ql(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Fr){var r=ze.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fb(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(wg(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=qd(Q(Q({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Bb(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},i),{},{id:o}),children:r}]}]}function Sg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,d=t.titleId,f=t.extra,m=t.watchable,E=m===void 0?!1:m,k=r.found?r:n,C=k.width,b=k.height,S=i==="fak",_=[J.replacementClass,s?"".concat(J.cssPrefix,"-").concat(s):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),I={children:[],attributes:Q(Q({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(b)})},x=S&&!~f.classes.indexOf("fa-fw")?{width:"".concat(C/b*16*.0625,"em")}:{};E&&(I.attributes[ys]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||Sl())},children:[u]}),delete I.attributes.title);var V=Q(Q({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:Q(Q({},x),f.styles)}),F=r.found&&n.found?Lr("generateAbstractMask",V)||{children:[],attributes:{}}:Lr("generateAbstractIcon",V)||{children:[],attributes:{}},g=F.children,y=F.attributes;return V.children=g,V.attributes=y,a?Bb(V):Fb(V)}function H_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=Q(Q(Q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[ys]="");var d=Q({},o.styles);wg(i)&&(d.transform=_b({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=qd(d);f.length>0&&(c.style=f);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function zb(t){var e=t.content,n=t.title,r=t.extra,i=Q(Q(Q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=qd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var uf=Fn.styles;function Np(t){var e=t[0],n=t[1],r=t.slice(4),i=pg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(ss.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ss.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ss.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var $b={found:!1,width:512,height:512};function Hb(t,e){!uT&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Op(t,e){var n=e;return e==="fa"&&J.styleDefault!==null&&(e=bi()),new Promise(function(r,i){if(Lr("missingIconAbstract"),n==="fa"){var s=TT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&uf[e]&&uf[e][t]){var o=uf[e][t];return r(Np(o))}Hb(t,e),r(Q(Q({},$b),{},{icon:J.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}}))})}var W_=function(){},Dp=J.measurePerformance&&zu&&zu.mark&&zu.measure?zu:{mark:W_,measure:W_},xa='FA "6.5.2"',Wb=function(e){return Dp.mark("".concat(xa," ").concat(e," begins")),function(){return ST(e)}},ST=function(e){Dp.mark("".concat(xa," ").concat(e," ends")),Dp.measure("".concat(xa," ").concat(e),"".concat(xa," ").concat(e," begins"),"".concat(xa," ").concat(e," ends"))},kg={begin:Wb,end:ST},_c=function(){};function q_(t){var e=t.getAttribute?t.getAttribute(ys):null;return typeof e=="string"}function qb(t){var e=t.getAttribute?t.getAttribute(gg):null,n=t.getAttribute?t.getAttribute(vg):null;return e&&n}function Kb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function Gb(){if(J.autoReplaceSvg===!0)return wc.replace;var t=wc[J.autoReplaceSvg];return t||wc.replace}function Qb(t){return ze.createElementNS("http://www.w3.org/2000/svg",t)}function Yb(t){return ze.createElement(t)}function kT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Qb:Yb:n;if(typeof t=="string")return ze.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(kT(o,{ceFn:r}))}),i}function Xb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(kT(i),n)}),n.getAttribute(ys)===null&&J.keepOriginalSource){var r=ze.createComment(Xb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~_g(n).indexOf(J.replacementClass))return wc.replace(e);var i=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===J.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ql(a)}).join(`
`);n.setAttribute(ys,""),n.innerHTML=o}};function K_(t){t()}function AT(t,e){var n=typeof e=="function"?e:_c;if(t.length===0)n();else{var r=K_;J.mutateApproach===nb&&(r=Ri.requestAnimationFrame||K_),r(function(){var i=Gb(),s=kg.begin("mutate");t.map(i),s(),n()})}}var Ag=!1;function CT(){Ag=!0}function Lp(){Ag=!1}var sd=null;function G_(t){if(V_&&J.observeMutations){var e=t.treeCallback,n=e===void 0?_c:e,r=t.nodeCallback,i=r===void 0?_c:r,s=t.pseudoElementsCallback,o=s===void 0?_c:s,a=t.observeMutationsRoot,u=a===void 0?ze:a;sd=new V_(function(c){if(!Ag){var d=bi();Go(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!q_(f.addedNodes[0])&&(J.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&J.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&q_(f.target)&&~ub.indexOf(f.attributeName))if(f.attributeName==="class"&&qb(f.target)){var m=Gd(_g(f.target)),E=m.prefix,k=m.iconName;f.target.setAttribute(gg,E||d),k&&f.target.setAttribute(vg,k)}else Kb(f.target)&&i(f.target)})}}),Fr&&sd.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jb(){sd&&sd.disconnect()}function Zb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function e2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Gd(_g(t));return i.prefix||(i.prefix=bi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xb(i.prefix,t.innerText)||Tg(i.prefix,Pp(t.innerText))),!i.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function t2(t){var e=Go(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return J.autoA11y&&(n?e["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(r||Sl()):(e["aria-hidden"]="true",e.focusable="false")),e}function n2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=e2(t),r=n.iconName,i=n.prefix,s=n.rest,o=t2(t),a=bp("parseNodeAttributes",{},t),u=e.styleParser?Zb(t):[];return Q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Jn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var r2=Fn.styles;function PT(t){var e=J.autoReplaceSvg==="nest"?Q_(t,{styleParser:!1}):Q_(t);return~e.extra.classes.indexOf(cT)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}var xi=new Set;yg.map(function(t){xi.add("fa-".concat(t))});Object.keys(wl[Fe]).map(xi.add.bind(xi));Object.keys(wl[ot]).map(xi.add.bind(xi));xi=Hl(xi);function Y_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fr)return Promise.resolve();var n=ze.documentElement.classList,r=function(f){return n.add("".concat(U_,"-").concat(f))},i=function(f){return n.remove("".concat(U_,"-").concat(f))},s=J.autoFetchSvg?xi:yg.map(function(d){return"fa-".concat(d)}).concat(Object.keys(r2));s.includes("fa")||s.push("fa");var o=[".".concat(cT,":not([").concat(ys,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(ys,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Go(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=kg.begin("onTree"),c=a.reduce(function(d,f){try{var m=PT(f);m&&d.push(m)}catch(E){uT||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(m){AT(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(function(m){u(),f(m)})})}function i2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PT(t).then(function(n){n&&AT([n],e)})}function s2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:xp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xp(i||{})),t(r,Q(Q({},n),{},{mask:i}))}}var o2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Jn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,d=c===void 0?null:c,f=n.title,m=f===void 0?null:f,E=n.titleId,k=E===void 0?null:E,C=n.classes,b=C===void 0?[]:C,S=n.attributes,_=S===void 0?{}:S,I=n.styles,x=I===void 0?{}:I;if(e){var V=e.prefix,F=e.iconName,g=e.icon;return Qd(Q({type:"icon"},e),function(){return _s("beforeDOMElementCreation",{iconDefinition:e,params:n}),J.autoA11y&&(m?_["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(k||Sl()):(_["aria-hidden"]="true",_.focusable="false")),Sg({icons:{main:Np(g),mask:u?Np(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:F,transform:Q(Q({},Jn),i),symbol:o,title:m,maskId:d,titleId:k,extra:{attributes:_,styles:x,classes:b}})})}},a2={mixout:function(){return{icon:s2(o2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Y_,n.nodeCallback=i2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ze:r,s=n.callback,o=s===void 0?function(){}:s;return Y_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,d=r.mask,f=r.maskId,m=r.extra;return new Promise(function(E,k){Promise.all([Op(i,a),d.iconName?Op(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var b=pg(C,2),S=b[0],_=b[1];E([n,Sg({icons:{main:S,mask:_},prefix:a,iconName:i,transform:u,symbol:c,maskId:f,title:s,titleId:o,extra:m,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=qd(a);u.length>0&&(i.style=u);var c;return wg(o)&&(c=Lr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},l2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Qd({type:"layer"},function(){_s("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers")].concat(Hl(s)).join(" ")},children:o}]})}}}},u2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,d=r.styles,f=d===void 0?{}:d;return Qd({type:"counter",content:n},function(){return _s("beforeDOMElementCreation",{content:n,params:r}),zb({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(J.cssPrefix,"-layers-counter")].concat(Hl(a))}})})}}}},c2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Jn:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,d=r.attributes,f=d===void 0?{}:d,m=r.styles,E=m===void 0?{}:m;return Qd({type:"text",content:n},function(){return _s("beforeDOMElementCreation",{content:n,params:r}),H_({content:n,transform:Q(Q({},Jn),s),title:a,extra:{attributes:f,styles:E,classes:["".concat(J.cssPrefix,"-layers-text")].concat(Hl(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if(oT){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();a=d.width/c,u=d.height/c}return J.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,H_({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},d2=new RegExp('"',"ug"),X_=[1105920,1112319];function h2(t){var e=t.replace(d2,""),n=kb(e,0),r=n>=X_[0]&&n<=X_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pp(i?e[0]:e),isSecondary:r||i}}function J_(t,e){var n="".concat(tb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Go(t.children),o=s.filter(function(g){return g.getAttribute(Cp)===e})[0],a=Ri.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(ob),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var f=a.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?ot:Fe,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?El[m][u[2].toLowerCase()]:ab[m][c],k=h2(f),C=k.value,b=k.isSecondary,S=u[0].startsWith("FontAwesome"),_=Tg(E,C),I=_;if(S){var x=Nb(C);x.iconName&&x.prefix&&(_=x.iconName,E=x.prefix)}if(_&&!b&&(!o||o.getAttribute(gg)!==E||o.getAttribute(vg)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var V=n2(),F=V.extra;F.attributes[Cp]=e,Op(_,E).then(function(g){var y=Sg(Q(Q({},V),{},{icons:{main:g,mask:Ig()},prefix:E,iconName:I,extra:F,watchable:!0})),T=ze.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=y.map(function(A){return ql(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function f2(t){return Promise.all([J_(t,"::before"),J_(t,"::after")])}function p2(t){return t.parentNode!==document.head&&!~rb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Cp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Z_(t){if(Fr)return new Promise(function(e,n){var r=Go(t.querySelectorAll("*")).filter(p2).map(f2),i=kg.begin("searchPseudoElements");CT(),Promise.all(r).then(function(){i(),Lp(),e()}).catch(function(){i(),Lp(),n()})})}var m2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Z_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ze:r;J.searchPseudoElements&&Z_(i)}}},e0=!1,g2={mixout:function(){return{dom:{unwatch:function(){CT(),e0=!0}}}},hooks:function(){return{bootstrap:function(){G_(bp("mutationObserverCallbacks",{}))},noAuto:function(){Jb()},watch:function(n){var r=n.observeMutationsRoot;e0?Lp():G_(bp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},t0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},v2={mixout:function(){return{parse:{transform:function(n){return t0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=t0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(d)},m={transform:"translate(".concat(o/2*-1," -256)")},E={outer:a,inner:f,path:m};return{tag:"g",attributes:Q({},E.outer),children:[{tag:"g",attributes:Q({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Q(Q({},r.icon.attributes),E.path)}]}]}}}},cf={x:0,y:0,width:"100%",height:"100%"};function n0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function y2(t){return t.tag==="g"?t.children:[t]}var _2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Gd(i.split(" ").map(function(o){return o.trim()})):Ig();return s.prefix||(s.prefix=bi()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,d=s.icon,f=o.width,m=o.icon,E=yb({transform:u,containerWidth:f,iconWidth:c}),k={tag:"rect",attributes:Q(Q({},cf),{},{fill:"white"})},C=d.children?{children:d.children.map(n0)}:{},b={tag:"g",attributes:Q({},E.inner),children:[n0(Q({tag:d.tag,attributes:Q(Q({},d.attributes),E.path)},C))]},S={tag:"g",attributes:Q({},E.outer),children:[b]},_="mask-".concat(a||Sl()),I="clip-".concat(a||Sl()),x={tag:"mask",attributes:Q(Q({},cf),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,S]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:y2(m)},x]};return r.push(V,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(_,")")},cf)}),{children:r,attributes:i}}}},w2={provides:function(e){var n=!1;Ri.matchMedia&&(n=Ri.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Q(Q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Q(Q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Q(Q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Q(Q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},E2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},T2=[Eb,a2,l2,u2,c2,m2,g2,v2,_2,w2,E2];Lb(T2,{mixoutsTo:wn});wn.noAuto;wn.config;wn.library;wn.dom;var Mp=wn.parse;wn.findIconDefinition;wn.toHtml;var I2=wn.icon;wn.layer;wn.text;wn.counter;var RT={exports:{}},S2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k2=S2,A2=k2;function bT(){}function xT(){}xT.resetWarningCache=bT;var C2=function(){function t(r,i,s,o,a,u){if(u!==A2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:xT,resetWarningCache:bT};return n.PropTypes=n,n};RT.exports=C2();var P2=RT.exports;const ve=fm(P2);function r0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Yn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?r0(Object(n),!0).forEach(function(r){mo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function od(t){"@babel/helpers - typeof";return od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},od(t)}function mo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b2(t,e){if(t==null)return{};var n=R2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vp(t){return x2(t)||N2(t)||O2(t)||D2()}function x2(t){if(Array.isArray(t))return Up(t)}function N2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function O2(t,e){if(t){if(typeof t=="string")return Up(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Up(t,e)}}function Up(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L2(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,f=t.pulse,m=t.fixedWidth,E=t.inverse,k=t.border,C=t.listItem,b=t.flip,S=t.size,_=t.rotation,I=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":E,"fa-border":k,"fa-li":C,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},mo(e,"fa-".concat(S),typeof S<"u"&&S!==null),mo(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),mo(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),mo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(V){return x[V]?V:null}).filter(function(V){return V})}function M2(t){return t=t-0,t===t}function NT(t){return M2(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var V2=["style"];function U2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function j2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=NT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[U2(i)]=s:e[i]=s,e},{})}function OT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return OT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=j2(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[NT(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=b2(n,V2);return i.attrs.style=Yn(Yn({},i.attrs.style),o),t.apply(void 0,[e.tag,Yn(Yn({},i.attrs),a)].concat(Vp(r)))}var DT=!1;try{DT=!0}catch{}function F2(){if(!DT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function i0(t){if(t&&od(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mp.icon)return Mp.icon(t);if(t===null)return null;if(t&&od(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function df(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mo({},t,e):{}}var s0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ne=Ce.forwardRef(function(t,e){var n=Yn(Yn({},s0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=i0(r),f=df("classes",[].concat(Vp(L2(n)),Vp((o||"").split(" ")))),m=df("transform",typeof n.transform=="string"?Mp.transform(n.transform):n.transform),E=df("mask",i0(i)),k=I2(d,Yn(Yn(Yn(Yn({},f),m),E),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!k)return F2("Could not find icon",d),null;var C=k.abstract,b={ref:e};return Object.keys(n).forEach(function(S){s0.hasOwnProperty(S)||(b[S]=n[S])}),B2(C[0],b)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:ve.bool,border:ve.bool,beatFade:ve.bool,bounce:ve.bool,className:ve.string,fade:ve.bool,flash:ve.bool,mask:ve.oneOfType([ve.object,ve.array,ve.string]),maskId:ve.string,fixedWidth:ve.bool,inverse:ve.bool,flip:ve.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ve.oneOfType([ve.object,ve.array,ve.string]),listItem:ve.bool,pull:ve.oneOf(["right","left"]),pulse:ve.bool,rotation:ve.oneOf([0,90,180,270]),shake:ve.bool,size:ve.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ve.bool,spinPulse:ve.bool,spinReverse:ve.bool,symbol:ve.oneOfType([ve.bool,ve.string]),title:ve.string,titleId:ve.string,transform:ve.oneOfType([ve.string,ve.object]),swapOpacity:ve.bool};var B2=OT.bind(null,Ce.createElement),z2={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},$2={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},H2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},W2={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},q2=W2,K2={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ft=K2,G2={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Q2={prefix:"fas",iconName:"credit-card",icon:[576,512,[128179,62083,"credit-card-alt"],"f09d","M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"]},Y2={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},X2={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},LT=X2;const J2=()=>v.jsxs("div",{className:"contactDiv",children:[v.jsx("h1",{children:"Contact Us"}),v.jsxs("div",{className:"contactBox",children:[v.jsxs("div",{className:"contactItem",children:[v.jsx(Ne,{icon:z2,size:"lg",color:"lightblue"}),v.jsx("p",{className:"textItem",children:"emailaddress@gmail.com"})]}),v.jsxs("div",{className:"contactItem",children:[v.jsx(Ne,{icon:G2,size:"lg",color:"lightblue"}),v.jsx("p",{className:"textItem",children:"+234: 7040600937"})]}),v.jsxs("div",{className:"contactItem",children:[v.jsx(Ne,{icon:$2,size:"lg",color:"lightblue"}),v.jsx("p",{className:"textItem",children:"no.3 ojoma akubo new mill."})]})]})]}),MT=()=>v.jsxs("div",{className:"instructionBg",children:[v.jsx("h1",{className:"instructionTitle",children:"Get Started"}),v.jsx("p",{className:"instructionDesc",children:" in 3 steps"}),v.jsxs("div",{className:"starter",children:[v.jsxs("div",{className:"starter1",children:[v.jsx(Ne,{icon:q2,size:"xl",color:"lightblue"}),v.jsx("h5",{children:"Sign Up"}),v.jsx("p",{children:"Create an Account to get started."})]}),v.jsxs("div",{className:"starter2",children:[v.jsx(Ne,{icon:Q2,size:"xl",color:"lightblue"}),v.jsx("h5",{children:"Buy a Plan"}),v.jsx("p",{children:"choose from our offers of affordable plans and buy"})]}),v.jsxs("div",{className:"starter3",children:[v.jsx(Ne,{icon:LT,size:"xl",color:"lightblue"}),v.jsx("h5",{children:"Start gaining"}),v.jsx("p",{children:"you start gaing credits everyday"})]})]})]}),VT=()=>{const t=bn();return v.jsxs("div",{className:"plansDiv",children:[v.jsxs("div",{className:"plansTitleDiv",children:[v.jsx("h1",{className:"plansTitle",children:"Available plans"}),v.jsx("p",{className:"plansDesc",children:"Choose a plan"})]}),v.jsxs("div",{className:"plans",children:[v.jsxs("div",{className:"plansBox",children:[v.jsx("p",{className:"plansBoxTitle",children:"Standard"}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Users receive daily updates on their earnings "})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" Access to essential tools for managing  investments."})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" + 30% Credit gaining power added"})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Withdraw anytime"})]}),v.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/cryptoselect",{state:{plan:"standard",amount:"9"}})},children:v.jsx("p",{className:"priceText",children:"9$"})})]}),v.jsxs("div",{className:"plansBox",children:[v.jsx("p",{className:"plansBoxTitle",children:"Premium+ plan"}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Users receive daily updates on their earnings "})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" Access to essential tools for managing  investments."})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" + 50% Credit gaining power added"})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Withdraw anytime"})]}),v.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/cryptoselect",{state:{plan:"premium",amount:"16"}})},children:v.jsx("p",{className:"priceText",children:"16$"})})]}),v.jsxs("div",{className:"plansBox",children:[v.jsx("p",{className:"plansBoxTitle",children:"Phantom plan"}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Users receive daily updates on their earnings "})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" Access to essential tools for managing  investments."})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:" + 80% Credit gaining power added"})]}),v.jsxs("div",{className:"plansContent",children:[v.jsx(Ne,{icon:Ft,color:"lightblue"}),v.jsx("p",{className:"plansDesc",children:"Withdraw anytime"})]}),v.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/cryptoselect",{state:{plan:"phantom",amount:"20"}})},children:v.jsx("p",{className:"priceText",children:"20$"})})]})]})]})},Z2="/assets/asset1-M-BJ1NJD.jpg",ex="/assets/asset2-DTOEM2oG.jpg",tx=()=>v.jsxs("div",{className:"talkBoardDiv",children:[v.jsxs("div",{className:"talkBoardSection",children:[v.jsxs("div",{className:"talkBoardItem1",children:[v.jsx("h2",{children:"Our Mission"}),v.jsx("p",{children:"our mission is to bring the cheapest , and most efficient way to earn and invest."})]}),v.jsx("div",{className:"talkBoardItem2",children:v.jsx("img",{src:Z2,className:"talkBoardImage"})})]}),v.jsxs("div",{className:"talkBoardSection",children:[v.jsxs("div",{className:"talkBoardItem1",children:[v.jsx("h2",{children:"Our Vision"}),v.jsx("p",{children:"our vision is to bring the cheapest , and most efficient way to earn and invest."})]}),v.jsx("div",{className:"talkBoardItem2",children:v.jsx("img",{src:ex,className:"talkBoardImage"})})]})]}),nx="/assets/icon-CrDOG5QB.png",xn=()=>v.jsx("div",{className:"divStyle",children:v.jsxs("ul",{className:"listStyle",children:[v.jsx("li",{className:"item",children:v.jsx("img",{src:nx,width:"125px",height:"80px"})}),v.jsx("li",{className:"item menu",children:v.jsx(Ne,{icon:H2,size:"xl",color:"white"})})]})}),Nn=()=>v.jsx("div",{className:"footerBox",children:v.jsxs("div",{className:"footerContent",children:[v.jsx(Ne,{icon:Y2}),v.jsx("p",{className:"footerText",children:"2024 .equiblock capital ltd."})]})}),rx=()=>v.jsxs("div",{className:"home",children:[v.jsx(xn,{}),v.jsx($R,{}),v.jsx(N_,{}),v.jsx(HR,{}),v.jsx(MT,{}),v.jsx(VT,{}),v.jsx(N_,{}),v.jsx(tx,{}),v.jsx(J2,{}),v.jsx(Nn,{})]});var o0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ix=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(UT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ix(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new sx;const m=s<<2|a>>4;if(r.push(m),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const k=c<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ox=function(t){const e=UT(t);return jT.encodeByteArray(e,!0)},ad=function(t){return ox(t).replace(/\./g,"")},FT=function(t){try{return jT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=()=>ax().__FIREBASE_DEFAULTS__,ux=()=>{if(typeof process>"u"||typeof o0>"u")return;const t=o0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&FT(t[1]);return e&&JSON.parse(e)},Yd=()=>{try{return lx()||ux()||cx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BT=t=>{var e,n;return(n=(e=Yd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zT=t=>{const e=BT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$T=()=>{var t;return(t=Yd())===null||t===void 0?void 0:t.config},HT=t=>{var e;return(e=Yd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ad(JSON.stringify(n)),ad(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function fx(){var t;const e=(t=Yd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function px(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gx(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vx(){return!fx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yx(){try{return typeof indexedDB=="object"}catch{return!1}}function _x(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wx,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kl.prototype.create)}}class Kl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ex(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function Ex(t,e){return t.replace(Tx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tx=/\{\$([^}]+)}/g;function Ix(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ld(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(a0(s)&&a0(o)){if(!ld(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function a0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sx(t,e){const n=new kx(t,e);return n.subscribe.bind(n)}class kx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ax(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hf),i.error===void 0&&(i.error=hf),i.complete===void 0&&(i.complete=hf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ax(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}let Ni=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rx(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(t){return t===Zi?void 0:t}function Rx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const xx={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},Nx=Te.INFO,Ox={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Dx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ox[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cg{constructor(e){this.name=e,this._logLevel=Nx,this._logHandler=Dx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Lx=(t,e)=>e.some(n=>t instanceof n);let l0,u0;function Mx(){return l0||(l0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vx(){return u0||(u0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qT=new WeakMap,jp=new WeakMap,KT=new WeakMap,ff=new WeakMap,Pg=new WeakMap;function Ux(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qT.set(n,t)}).catch(()=>{}),Pg.set(e,t),e}function jx(t){if(jp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jp.set(t,e)}let Fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fx(t){Fp=t(Fp)}function Bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return KT.set(r,e.sort?e.sort():[e]),Ii(r)}:Vx().includes(t)?function(...e){return t.apply(pf(this),e),Ii(qT.get(this))}:function(...e){return Ii(t.apply(pf(this),e))}}function zx(t){return typeof t=="function"?Bx(t):(t instanceof IDBTransaction&&jx(t),Lx(t,Mx())?new Proxy(t,Fp):t)}function Ii(t){if(t instanceof IDBRequest)return Ux(t);if(ff.has(t))return ff.get(t);const e=zx(t);return e!==t&&(ff.set(t,e),Pg.set(e,t)),e}const pf=t=>Pg.get(t);function $x(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ii(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ii(o.result),u.oldVersion,u.newVersion,Ii(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hx=["get","getKey","getAll","getAllKeys","count"],Wx=["put","add","delete","clear"],mf=new Map;function c0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Wx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hx.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return mf.set(e,s),s}Fx(t=>({...t,get:(e,n,r)=>c0(e,n)||t.get(e,n,r),has:(e,n)=>!!c0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bp="@firebase/app",d0="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Cg("@firebase/app"),Gx="@firebase/app-compat",Qx="@firebase/analytics-compat",Yx="@firebase/analytics",Xx="@firebase/app-check-compat",Jx="@firebase/app-check",Zx="@firebase/auth",eN="@firebase/auth-compat",tN="@firebase/database",nN="@firebase/database-compat",rN="@firebase/functions",iN="@firebase/functions-compat",sN="@firebase/installations",oN="@firebase/installations-compat",aN="@firebase/messaging",lN="@firebase/messaging-compat",uN="@firebase/performance",cN="@firebase/performance-compat",dN="@firebase/remote-config",hN="@firebase/remote-config-compat",fN="@firebase/storage",pN="@firebase/storage-compat",mN="@firebase/firestore",gN="@firebase/vertexai-preview",vN="@firebase/firestore-compat",yN="firebase",_N="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="[DEFAULT]",wN={[Bp]:"fire-core",[Gx]:"fire-core-compat",[Yx]:"fire-analytics",[Qx]:"fire-analytics-compat",[Jx]:"fire-app-check",[Xx]:"fire-app-check-compat",[Zx]:"fire-auth",[eN]:"fire-auth-compat",[tN]:"fire-rtdb",[nN]:"fire-rtdb-compat",[rN]:"fire-fn",[iN]:"fire-fn-compat",[sN]:"fire-iid",[oN]:"fire-iid-compat",[aN]:"fire-fcm",[lN]:"fire-fcm-compat",[uN]:"fire-perf",[cN]:"fire-perf-compat",[dN]:"fire-rc",[hN]:"fire-rc-compat",[fN]:"fire-gcs",[pN]:"fire-gcs-compat",[mN]:"fire-fst",[vN]:"fire-fst-compat",[gN]:"fire-vertex","fire-js":"fire-js",[yN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map,EN=new Map,$p=new Map;function h0(t,e){try{t.container.addComponent(e)}catch(n){ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if($p.has(e))return ws.debug(`There were multiple attempts to register component ${e}.`),!1;$p.set(e,t);for(const n of ud.values())h0(n,t);for(const n of EN.values())h0(n,t);return!0}function Xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new Kl("app","Firebase",TN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=_N;function GT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Si.create("bad-app-name",{appName:String(i)});if(n||(n=$T()),!n)throw Si.create("no-options");const s=ud.get(i);if(s){if(ld(n,s.options)&&ld(r,s.config))return s;throw Si.create("duplicate-app",{appName:i})}const o=new bx(i);for(const u of $p.values())o.addComponent(u);const a=new IN(n,r,o);return ud.set(i,a),a}function Rg(t=zp){const e=ud.get(t);if(!e&&t===zp&&$T())return GT();if(!e)throw Si.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let i=(r=wN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ws.warn(a.join(" "));return}Es(new Ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="firebase-heartbeat-database",kN=1,kl="firebase-heartbeat-store";let gf=null;function QT(){return gf||(gf=$x(SN,kN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Si.create("idb-open",{originalErrorMessage:t.message})})),gf}async function AN(t){try{const n=(await QT()).transaction(kl),r=await n.objectStore(kl).get(YT(t));return await n.done,r}catch(e){if(e instanceof cr)ws.warn(e.message);else{const n=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ws.warn(n.message)}}}async function f0(t,e){try{const r=(await QT()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,YT(t)),await r.done}catch(n){if(n instanceof cr)ws.warn(n.message);else{const r=Si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ws.warn(r.message)}}}function YT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=1024,PN=30*24*60*60*1e3;class RN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=p0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=PN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=p0(),{heartbeatsToSend:r,unsentEntries:i}=bN(this._heartbeatsCache.heartbeats),s=ad(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function p0(){return new Date().toISOString().substring(0,10)}function bN(t,e=CN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),m0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),m0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yx()?_x().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return f0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function m0(t){return ad(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){Es(new Ni("platform-logger",e=>new qx(e),"PRIVATE")),Es(new Ni("heartbeat",e=>new RN(e),"PRIVATE")),rr(Bp,d0,t),rr(Bp,d0,"esm2017"),rr("fire-js","")}NN("");var ON="firebase",DN="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(ON,DN,"app");function bg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function XT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LN=XT,JT=new Kl("auth","Firebase",XT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Cg("@firebase/auth");function MN(t,...e){cd.logLevel<=Te.WARN&&cd.warn(`Auth (${bs}): ${t}`,...e)}function Ec(t,...e){cd.logLevel<=Te.ERROR&&cd.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,...e){throw xg(t,...e)}function ir(t,...e){return xg(t,...e)}function ZT(t,e,n){const r=Object.assign(Object.assign({},LN()),{[e]:n});return new Kl("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return ZT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JT.create(t,...e)}function ae(t,e,...n){if(!t)throw xg(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ec(e),new Error(e)}function Mr(t,e){t||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VN(){return g0()==="http:"||g0()==="https:"}function g0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VN()||px()||"connection"in navigator)?navigator.onLine:!0}function jN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mr(n>e,"Short delay should be less than long delay!"),this.isMobile=hx()||mx()}get(){return UN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){Mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new Ql(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zr(t,e,n,r,i={}){return tI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),eI.fetch()(nI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function tI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FN),e);try{const i=new $N(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ZT(t,d,c);Wn(t,d)}}catch(i){if(i instanceof cr)throw i;Wn(t,"network-request-failed",{message:String(i)})}}async function Yl(t,e,n,r,i={}){const s=await zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ng(t.config,i):`${t.config.apiScheme}://${i}`}function zN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ir(this.auth,"network-request-failed")),BN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ir(t,e,r);return i.customData._tokenResponse=n,i}function v0(t){return t!==void 0&&t.enterprise!==void 0}class HN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WN(t,e){return zr(t,"GET","/v2/recaptchaConfig",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){return zr(t,"POST","/v1/accounts:delete",e)}async function rI(t,e){return zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KN(t,e=!1){const n=pt(t),r=await n.getIdToken(e),i=Og(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qa(vf(i.auth_time)),issuedAtTime:Qa(vf(i.iat)),expirationTime:Qa(vf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vf(t){return Number(t)*1e3}function Og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=FT(n);return i?JSON.parse(i):(Ec("Failed to decode base64 JWT payload"),null)}catch(i){return Ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function y0(t){const e=Og(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&GN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Al(t,rI(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iI(s.providerUserInfo):[],a=XN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function YN(t){const e=pt(t);await dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iI(t){return t.map(e=>{var{providerId:n}=e,r=bg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){const n=await tI(t,{},async()=>{const r=Gl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZN(t,e){return zr(t,"POST","/v2/accounts:revokeToken",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=y0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new So;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Al(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KN(this,e)}reload(){return YN(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Al(this,qN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:x,isAnonymous:V,providerData:F,stsTokenManager:g}=n;ae(I&&g,e,"internal-error");const y=So.fromJSON(this.name,g);ae(typeof I=="string",e,"internal-error"),Zr(f,e.name),Zr(m,e.name),ae(typeof x=="boolean",e,"internal-error"),ae(typeof V=="boolean",e,"internal-error"),Zr(E,e.name),Zr(k,e.name),Zr(C,e.name),Zr(b,e.name),Zr(S,e.name),Zr(_,e.name);const T=new Sr({uid:I,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:V,photoURL:k,phoneNumber:E,tenantId:C,stsTokenManager:y,createdAt:S,lastLoginAt:_});return F&&Array.isArray(F)&&(T.providerData=F.map(A=>Object.assign({},A))),b&&(T._redirectEventId=b),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new So;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new So;a.updateFromIdToken(r);const u=new Sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new Map;function kr(t){Mr(t instanceof Function,"Expected a class definition");let e=_0.get(t);return e?(Mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sI.type="NONE";const w0=sI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e,n){return`firebase:${t}:${e}:${n}`}class ko{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ko(kr(w0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kr(w0);const o=Tc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Sr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ko(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ko(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cI(e))return"Blackberry";if(dI(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||aI(e))&&!e.includes("edge/"))return"Chrome";if(uI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oI(t=Dt()){return/firefox\//i.test(t)}function Dg(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aI(t=Dt()){return/crios\//i.test(t)}function lI(t=Dt()){return/iemobile/i.test(t)}function uI(t=Dt()){return/android/i.test(t)}function cI(t=Dt()){return/blackberry/i.test(t)}function dI(t=Dt()){return/webos/i.test(t)}function Jd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eO(t=Dt()){var e;return Jd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tO(){return gx()&&document.documentMode===10}function hI(t=Dt()){return Jd(t)||uI(t)||dI(t)||cI(t)||/windows phone/i.test(t)||lI(t)}function nO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e=[]){let n;switch(t){case"Browser":n=E0(Dt());break;case"Worker":n=`${E0(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e={}){return zr(t,"GET","/v2/passwordPolicy",Br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=6;class oO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T0(this),this.idTokenSubscription=new T0(this),this.beforeStateQueue=new rO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rI(this,{idToken:e}),r=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Cr(this));const n=e?pt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iO(this),n=new oO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[kr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bi(t){return pt(t)}class T0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sx(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lO(t){Zd=t}function pI(t){return Zd.loadJS(t)}function uO(){return Zd.recaptchaEnterpriseScript}function cO(){return Zd.gapiScript}function dO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hO="recaptcha-enterprise",fO="NO_RECAPTCHA";class pO{constructor(e){this.type=hO,this.auth=Bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{WN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new HN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;v0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(fO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&v0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=uO();u.length!==0&&(u+=a),pI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function I0(t,e,n,r=!1){const i=new pO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await I0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await I0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t,e){const n=Xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ld(s,e??{}))return i;Wn(i,"already-initialized")}return n.initialize({options:e})}function gO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vO(t,e,n){const r=Bi(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mI(e),{host:o,port:a}=yO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_O()}function mI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yO(t){const e=mI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:S0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:S0(o)}}}function S0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _O(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function wO(t,e){return zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t,e){return Yl(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}async function TO(t,e){return zr(t,"POST","/v1/accounts:sendOobCode",Br(t,e))}async function IO(t,e){return TO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function kO(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,n,"signInWithPassword",EO);case"emailLink":return SO(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,r,"signUpPassword",wO);case"emailLink":return kO(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e){return Yl(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="http://localhost";class Ts extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ao(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ao(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ao(e,n)}buildRequest(){const e={requestUri:AO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PO(t){const e=Na(Oa(t)).link,n=e?Na(Oa(e)).deep_link_id:null,r=Na(Oa(t)).deep_link_id;return(r?Na(Oa(r)).link:null)||r||n||e||t}class Mg{constructor(e){var n,r,i,s,o,a;const u=Na(Oa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=CO((i=u.mode)!==null&&i!==void 0?i:null);ae(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PO(e);try{return new Mg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,n){return Cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mg.parseLink(n);return ae(r,"argument-error"),Cl._fromEmailAndCode(e,r.code,r.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends gI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Xl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Xl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Xl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Xl{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return li.credential(n,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e){return Yl(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=k0(r);return new Is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=k0(r);return new Is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function k0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fd(e,n,r,i)}}function vI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fd._fromErrorAndOperation(t,s,e,r):s})}async function bO(t,e,n=!1){const r=await Al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject(Cr(r));const i="reauthenticate";try{const s=await Al(t,vI(r,i,e,t),n);ae(s.idToken,r,"internal-error");const o=Og(s.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),Is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e,n=!1){if(Zn(t.app))return Promise.reject(Cr(t));const r="signIn",i=await vI(t,r,e),s=await Is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function NO(t,e){return yI(Bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t){const e=Bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OO(t,e,n){const r=Bi(t);await hd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IO)}async function DO(t,e,n){if(Zn(t.app))return Promise.reject(Cr(t));const r=Bi(t),o=await hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RO).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_I(t),u}),a=await Is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LO(t,e,n){return Zn(t.app)?Promise.reject(Cr(t)):NO(pt(t),Qo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_I(t),r})}function MO(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function VO(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function wI(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}const pd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pd,"1"),this.storage.removeItem(pd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){const t=Dt();return Dg(t)||Jd(t)}const jO=1e3,FO=10;class TI extends EI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UO()&&nO(),this.fallbackToPolling=hI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TI.type="LOCAL";const BO=TI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II extends EI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}II.type="SESSION";const SI=II;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await zO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Vg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function HO(t){sr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function WO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KO(){return kI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="firebaseLocalStorageDb",GO=1,md="firebaseLocalStorage",CI="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function th(t,e){return t.transaction([md],e?"readwrite":"readonly").objectStore(md)}function QO(){const t=indexedDB.deleteDatabase(AI);return new Jl(t).toPromise()}function qp(){const t=indexedDB.open(AI,GO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(md,{keyPath:CI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(md)?e(r):(r.close(),await QO(),e(await qp()))})})}async function A0(t,e,n){const r=th(t,!0).put({[CI]:e,value:n});return new Jl(r).toPromise()}async function YO(t,e){const n=th(t,!1).get(e),r=await new Jl(n).toPromise();return r===void 0?null:r.value}function C0(t,e){const n=th(t,!0).delete(e);return new Jl(n).toPromise()}const XO=800,JO=3;class PI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eh._getInstance(KO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WO(),!this.activeServiceWorker)return;this.sender=new $O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qp();return await A0(e,pd,"1"),await C0(e,pd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>A0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>C0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=th(i,!1).getAll();return new Jl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PI.type="LOCAL";const ZO=PI;new Ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t,e){return e?kr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tD(t){return yI(t.auth,new Ug(t),t.bypassAuthState)}function nD(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),xO(n,new Ug(t),t.bypassAuthState)}async function rD(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),bO(n,new Ug(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tD;case"linkViaPopup":case"linkViaRedirect":return rD;case"reauthViaPopup":case"reauthViaRedirect":return nD;default:Wn(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new Ql(2e3,1e4);class go extends RI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iD.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="pendingRedirect",Ic=new Map;class oD extends RI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ic.get(this.auth._key());if(!e){try{const r=await aD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ic.set(this.auth._key(),e)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aD(t,e){const n=cD(e),r=uD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lD(t,e){Ic.set(t._key(),e)}function uD(t){return kr(t._redirectPersistence)}function cD(t){return Tc(sD,t.config.apiKey,t.name)}async function dD(t,e,n=!1){if(Zn(t.app))return Promise.reject(Cr(t));const r=Bi(t),i=eD(r,e),o=await new oD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=10*60*1e3;class fD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hD&&this.cachedEventUids.clear(),this.cachedEventUids.has(P0(e))}saveEventToCache(e){this.cachedEventUids.add(P0(e)),this.lastProcessedEventTime=Date.now()}}function P0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(t,e={}){return zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vD=/^https?/;async function yD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mD(t);for(const n of e)try{if(_D(n))return}catch{}Wn(t,"unauthorized-domain")}function _D(t){const e=Hp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vD.test(n))return!1;if(gD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new Ql(3e4,6e4);function R0(){const t=sr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ED(t){return new Promise((e,n)=>{var r,i,s;function o(){R0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R0(),n(ir(t,"network-request-failed"))},timeout:wD.get()})}if(!((i=(r=sr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sr().gapi)===null||s===void 0)&&s.load)o();else{const a=dO("iframefcb");return sr()[a]=()=>{gapi.load?o():n(ir(t,"network-request-failed"))},pI(`${cO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Sc=null,e})}let Sc=null;function TD(t){return Sc=Sc||ED(t),Sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=new Ql(5e3,15e3),SD="__/auth/iframe",kD="emulator/auth/iframe",AD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PD(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ng(e,kD):`https://${t.config.authDomain}/${SD}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=CD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gl(r).slice(1)}`}async function RD(t){const e=await TD(t),n=sr().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:PD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ir(t,"network-request-failed"),a=sr().setTimeout(()=>{s(o)},ID.get());function u(){sr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xD=500,ND=600,OD="_blank",DD="http://localhost";class b0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LD(t,e,n,r=xD,i=ND){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},bD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Dt().toLowerCase();n&&(a=aI(c)?OD:n),oI(c)&&(e=e||DD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,k])=>`${m}${E}=${k},`,"");if(eO(c)&&a!=="_self")return MD(e||"",a),new b0(null);const f=window.open(e||"",a,d);ae(f,t,"popup-blocked");try{f.focus()}catch{}return new b0(f)}function MD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="__/auth/handler",UD="emulator/auth/handler",jD=encodeURIComponent("fac");async function x0(t,e,n,r,i,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof gI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ix(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Xl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${jD}=${encodeURIComponent(u)}`:"";return`${FD(t)}?${Gl(a).slice(1)}${c}`}function FD({config:t}){return t.emulator?Ng(t,UD):`https://${t.authDomain}/${VD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="webStorageSupport";class BD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SI,this._completeRedirectFn=dD,this._overrideRedirectResult=lD}async _openPopup(e,n,r,i){var s;Mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await x0(e,n,r,Hp(),i);return LD(e,o,Vg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await x0(e,n,r,Hp(),i);return HO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RD(e),r=new fD(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yf,{type:yf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yf];o!==void 0&&n(!!o),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hI()||Dg()||Jd()}}const zD=BD;var N0="@firebase/auth",O0="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WD(t){Es(new Ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fI(t)},c=new aO(r,i,s,u);return gO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Ni("auth-internal",e=>{const n=Bi(e.getProvider("auth").getImmediate());return(r=>new $D(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(N0,O0,HD(t)),rr(N0,O0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=5*60,KD=HT("authIdTokenMaxAge")||qD;let D0=null;const GD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KD)return;const i=n==null?void 0:n.token;D0!==i&&(D0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QD(t=Rg()){const e=Xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mO(t,{popupRedirectResolver:zD,persistence:[ZO,BO,SI]}),r=HT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GD(s.toString());VO(n,o,()=>o(n.currentUser)),MO(n,a=>o(a))}}const i=BT("auth");return i&&vO(n,`http://${i}`),n}function YD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ir("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WD("Browser");var L0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,xI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function T(){}T.prototype=y.prototype,g.D=y.prototype,g.prototype=new T,g.prototype.constructor=g,g.C=function(A,R,N){for(var P=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)P[_e-2]=arguments[_e];return y.prototype[R].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=g.g[0],T=g.g[1],R=g.g[2];var N=g.g[3],P=y+(N^T&(R^N))+A[0]+3614090360&4294967295;y=T+(P<<7&4294967295|P>>>25),P=N+(R^y&(T^R))+A[1]+3905402710&4294967295,N=y+(P<<12&4294967295|P>>>20),P=R+(T^N&(y^T))+A[2]+606105819&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(y^R&(N^y))+A[3]+3250441966&4294967295,T=R+(P<<22&4294967295|P>>>10),P=y+(N^T&(R^N))+A[4]+4118548399&4294967295,y=T+(P<<7&4294967295|P>>>25),P=N+(R^y&(T^R))+A[5]+1200080426&4294967295,N=y+(P<<12&4294967295|P>>>20),P=R+(T^N&(y^T))+A[6]+2821735955&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(y^R&(N^y))+A[7]+4249261313&4294967295,T=R+(P<<22&4294967295|P>>>10),P=y+(N^T&(R^N))+A[8]+1770035416&4294967295,y=T+(P<<7&4294967295|P>>>25),P=N+(R^y&(T^R))+A[9]+2336552879&4294967295,N=y+(P<<12&4294967295|P>>>20),P=R+(T^N&(y^T))+A[10]+4294925233&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(y^R&(N^y))+A[11]+2304563134&4294967295,T=R+(P<<22&4294967295|P>>>10),P=y+(N^T&(R^N))+A[12]+1804603682&4294967295,y=T+(P<<7&4294967295|P>>>25),P=N+(R^y&(T^R))+A[13]+4254626195&4294967295,N=y+(P<<12&4294967295|P>>>20),P=R+(T^N&(y^T))+A[14]+2792965006&4294967295,R=N+(P<<17&4294967295|P>>>15),P=T+(y^R&(N^y))+A[15]+1236535329&4294967295,T=R+(P<<22&4294967295|P>>>10),P=y+(R^N&(T^R))+A[1]+4129170786&4294967295,y=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(y^T))+A[6]+3225465664&4294967295,N=y+(P<<9&4294967295|P>>>23),P=R+(y^T&(N^y))+A[11]+643717713&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^y&(R^N))+A[0]+3921069994&4294967295,T=R+(P<<20&4294967295|P>>>12),P=y+(R^N&(T^R))+A[5]+3593408605&4294967295,y=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(y^T))+A[10]+38016083&4294967295,N=y+(P<<9&4294967295|P>>>23),P=R+(y^T&(N^y))+A[15]+3634488961&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^y&(R^N))+A[4]+3889429448&4294967295,T=R+(P<<20&4294967295|P>>>12),P=y+(R^N&(T^R))+A[9]+568446438&4294967295,y=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(y^T))+A[14]+3275163606&4294967295,N=y+(P<<9&4294967295|P>>>23),P=R+(y^T&(N^y))+A[3]+4107603335&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^y&(R^N))+A[8]+1163531501&4294967295,T=R+(P<<20&4294967295|P>>>12),P=y+(R^N&(T^R))+A[13]+2850285829&4294967295,y=T+(P<<5&4294967295|P>>>27),P=N+(T^R&(y^T))+A[2]+4243563512&4294967295,N=y+(P<<9&4294967295|P>>>23),P=R+(y^T&(N^y))+A[7]+1735328473&4294967295,R=N+(P<<14&4294967295|P>>>18),P=T+(N^y&(R^N))+A[12]+2368359562&4294967295,T=R+(P<<20&4294967295|P>>>12),P=y+(T^R^N)+A[5]+4294588738&4294967295,y=T+(P<<4&4294967295|P>>>28),P=N+(y^T^R)+A[8]+2272392833&4294967295,N=y+(P<<11&4294967295|P>>>21),P=R+(N^y^T)+A[11]+1839030562&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^y)+A[14]+4259657740&4294967295,T=R+(P<<23&4294967295|P>>>9),P=y+(T^R^N)+A[1]+2763975236&4294967295,y=T+(P<<4&4294967295|P>>>28),P=N+(y^T^R)+A[4]+1272893353&4294967295,N=y+(P<<11&4294967295|P>>>21),P=R+(N^y^T)+A[7]+4139469664&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^y)+A[10]+3200236656&4294967295,T=R+(P<<23&4294967295|P>>>9),P=y+(T^R^N)+A[13]+681279174&4294967295,y=T+(P<<4&4294967295|P>>>28),P=N+(y^T^R)+A[0]+3936430074&4294967295,N=y+(P<<11&4294967295|P>>>21),P=R+(N^y^T)+A[3]+3572445317&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^y)+A[6]+76029189&4294967295,T=R+(P<<23&4294967295|P>>>9),P=y+(T^R^N)+A[9]+3654602809&4294967295,y=T+(P<<4&4294967295|P>>>28),P=N+(y^T^R)+A[12]+3873151461&4294967295,N=y+(P<<11&4294967295|P>>>21),P=R+(N^y^T)+A[15]+530742520&4294967295,R=N+(P<<16&4294967295|P>>>16),P=T+(R^N^y)+A[2]+3299628645&4294967295,T=R+(P<<23&4294967295|P>>>9),P=y+(R^(T|~N))+A[0]+4096336452&4294967295,y=T+(P<<6&4294967295|P>>>26),P=N+(T^(y|~R))+A[7]+1126891415&4294967295,N=y+(P<<10&4294967295|P>>>22),P=R+(y^(N|~T))+A[14]+2878612391&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~y))+A[5]+4237533241&4294967295,T=R+(P<<21&4294967295|P>>>11),P=y+(R^(T|~N))+A[12]+1700485571&4294967295,y=T+(P<<6&4294967295|P>>>26),P=N+(T^(y|~R))+A[3]+2399980690&4294967295,N=y+(P<<10&4294967295|P>>>22),P=R+(y^(N|~T))+A[10]+4293915773&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~y))+A[1]+2240044497&4294967295,T=R+(P<<21&4294967295|P>>>11),P=y+(R^(T|~N))+A[8]+1873313359&4294967295,y=T+(P<<6&4294967295|P>>>26),P=N+(T^(y|~R))+A[15]+4264355552&4294967295,N=y+(P<<10&4294967295|P>>>22),P=R+(y^(N|~T))+A[6]+2734768916&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~y))+A[13]+1309151649&4294967295,T=R+(P<<21&4294967295|P>>>11),P=y+(R^(T|~N))+A[4]+4149444226&4294967295,y=T+(P<<6&4294967295|P>>>26),P=N+(T^(y|~R))+A[11]+3174756917&4294967295,N=y+(P<<10&4294967295|P>>>22),P=R+(y^(N|~T))+A[2]+718787259&4294967295,R=N+(P<<15&4294967295|P>>>17),P=T+(N^(R|~y))+A[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(R+(P<<21&4294967295|P>>>11))&4294967295,g.g[2]=g.g[2]+R&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var T=y-this.blockSize,A=this.B,R=this.h,N=0;N<y;){if(R==0)for(;N<=T;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(A[R++]=g.charCodeAt(N++),R==this.blockSize){i(this,A),R=0;break}}else for(;N<y;)if(A[R++]=g[N++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var T=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=T&255,T/=256;for(this.u(g),g=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)g[T++]=this.g[y]>>>A&255;return g};function s(g,y){var T=a;return Object.prototype.hasOwnProperty.call(T,g)?T[g]:T[g]=y(g)}function o(g,y){this.h=y;for(var T=[],A=!0,R=g.length-1;0<=R;R--){var N=g[R]|0;A&&N==y||(T[R]=N,A=!1)}this.g=T}var a={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return b(c(-g));for(var y=[],T=1,A=0;g>=T;A++)y[A]=g/T|0,T*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return b(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),A=f,R=0;R<g.length;R+=8){var N=Math.min(8,g.length-R),P=parseInt(g.substring(R,R+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(P))):(A=A.j(T),A=A.add(c(P)))}return A}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-b(this).m();for(var g=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);g+=(0<=A?A:4294967296+A)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(k(this))return"0";if(C(this))return"-"+b(this).toString(g);for(var y=c(Math.pow(g,6)),T=this,A="";;){var R=x(T,y).g;T=S(T,R.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(g);if(T=R,k(T))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function k(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function C(g){return g.h==-1}t.l=function(g){return g=S(this,g),C(g)?-1:k(g)?0:1};function b(g){for(var y=g.g.length,T=[],A=0;A<y;A++)T[A]=~g.g[A];return new o(T,~g.h).add(m)}t.abs=function(){return C(this)?b(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],A=0,R=0;R<=y;R++){var N=A+(this.i(R)&65535)+(g.i(R)&65535),P=(N>>>16)+(this.i(R)>>>16)+(g.i(R)>>>16);A=P>>>16,N&=65535,P&=65535,T[R]=P<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(b(y))}t.j=function(g){if(k(this)||k(g))return f;if(C(this))return C(g)?b(this).j(b(g)):b(b(this).j(g));if(C(g))return b(this.j(b(g)));if(0>this.l(E)&&0>g.l(E))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<g.g.length;R++){var N=this.i(A)>>>16,P=this.i(A)&65535,_e=g.i(R)>>>16,He=g.i(R)&65535;T[2*A+2*R]+=P*He,_(T,2*A+2*R),T[2*A+2*R+1]+=N*He,_(T,2*A+2*R+1),T[2*A+2*R+1]+=P*_e,_(T,2*A+2*R+1),T[2*A+2*R+2]+=N*_e,_(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function _(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function I(g,y){this.g=g,this.h=y}function x(g,y){if(k(y))throw Error("division by zero");if(k(g))return new I(f,f);if(C(g))return y=x(b(g),y),new I(b(y.g),b(y.h));if(C(y))return y=x(g,b(y)),new I(b(y.g),y.h);if(30<g.g.length){if(C(g)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(g);)T=V(T),A=V(A);var R=F(T,1),N=F(A,1);for(A=F(A,2),T=F(T,2);!k(A);){var P=N.add(A);0>=P.l(g)&&(R=R.add(T),N=P),A=F(A,1),T=F(T,1)}return y=S(g,R.j(y)),new I(R,y)}for(R=f;0<=g.l(y);){for(T=Math.max(1,Math.floor(g.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(T),P=N.j(y);C(P)||0<P.l(g);)T-=A,N=c(T),P=N.j(y);k(N)&&(N=m),R=R.add(N),g=S(g,P)}return new I(R,g)}t.A=function(g){return x(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&g.i(A);return new o(T,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|g.i(A);return new o(T,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^g.i(A);return new o(T,this.h^g.h)};function V(g){for(var y=g.g.length+1,T=[],A=0;A<y;A++)T[A]=g.i(A)<<1|g.i(A-1)>>>31;return new o(T,g.h)}function F(g,y){var T=y>>5;y%=32;for(var A=g.g.length-T,R=[],N=0;N<A;N++)R[N]=0<y?g.i(N+T)>>>y|g.i(N+T+1)<<32-y:g.i(N+T);return new o(R,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,cs=o}).apply(typeof L0<"u"?L0:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NI,OI,Da,DI,kc,Kp,LI,MI,VI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var D=l[w];if(!(D in p))break e;p=p[D]}l=l[l.length-1],w=p[l],h=h(w),h!=w&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,w=!1,D={next:function(){if(!w&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function k(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(w,D,M){for(var q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)q[xe-2]=arguments[xe];return h.prototype[D].apply(w,q)}}function C(l){const h=l.length;if(0<h){const p=Array(h);for(let w=0;w<h;w++)p[w]=l[w];return p}return[]}function b(l,h){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(u(w)){const D=l.length||0,M=w.length||0;l.length=D+M;for(let q=0;q<M;q++)l[D+q]=w[q]}else l.push(w)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(l,h,p){for(const w in l)h.call(p,l[w],w,l)}function g(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(p in w)l[p]=w[p];for(let M=0;M<T.length;M++)p=T[M],Object.prototype.hasOwnProperty.call(w,p)&&(l[p]=w[p])}}function R(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class _e{constructor(){this.h=this.g=null}add(h,p){const w=He.get();w.set(h,p),this.h?this.h.next=w:this.g=w,this.h=w}}var He=new S(()=>new qt,l=>l.reset());class qt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let We,B=!1,ee=new _e,ne=()=>{const l=a.Promise.resolve(void 0);We=()=>{l.then(me)}};var me=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(p){N(p)}var h=He;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Pe(l,h){if(pe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{x(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Me[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pe.aa.h.call(this)}}k(Pe,pe);var Me={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ye="closure_listenable_"+(1e6*Math.random()|0),Hi=0;function wh(l,h,p,w,D){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!w,this.ha=D,this.key=++Hi,this.da=this.fa=!1}function Ds(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ls(l){this.src=l,this.g={},this.h=0}Ls.prototype.add=function(l,h,p,w,D){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var q=dr(l,h,w,D);return-1<q?(h=l[q],p||(h.fa=!1)):(h=new wh(h,this.src,M,!!w,D),h.fa=p,l.push(h)),h};function St(l,h){var p=h.type;if(p in l.g){var w=l.g[p],D=Array.prototype.indexOf.call(w,h,void 0),M;(M=0<=D)&&Array.prototype.splice.call(w,D,1),M&&(Ds(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function dr(l,h,p,w){for(var D=0;D<l.length;++D){var M=l[D];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==w)return D}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),ea={};function qn(l,h,p,w,D){if(Array.isArray(h)){for(var M=0;M<h.length;M++)qn(l,h[M],p,w,D);return null}return p=Us(p),l&&l[Ye]?l.K(h,p,c(w)?!!w.capture:!!w,D):Eh(l,h,p,!1,w,D)}function Eh(l,h,p,w,D,M){if(!h)throw Error("Invalid event type");var q=c(D)?!!D.capture:!!D,xe=hr(l);if(xe||(l[Ms]=xe=new Ls(l)),p=xe.add(h,p,w,q,M),p.proxy)return p;if(w=Th(),p.proxy=w,w.src=l,w.listener=p,l.addEventListener)be||(D=q),D===void 0&&(D=!1),l.addEventListener(h.toString(),w,D);else if(l.attachEvent)l.attachEvent(du(h.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Th(){function l(p){return h.call(l.src,l.listener,p)}const h=Wi;return l}function cu(l,h,p,w,D){if(Array.isArray(h))for(var M=0;M<h.length;M++)cu(l,h[M],p,w,D);else w=c(w)?!!w.capture:!!w,p=Us(p),l&&l[Ye]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=dr(M,p,w,D),-1<p&&(Ds(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=hr(l))&&(h=l.g[h.toString()],l=-1,h&&(l=dr(h,p,w,D)),(p=-1<l?h[l]:null)&&ta(p))}function ta(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ye])St(h.i,l);else{var p=l.type,w=l.proxy;h.removeEventListener?h.removeEventListener(p,w,l.capture):h.detachEvent?h.detachEvent(du(p),w):h.addListener&&h.removeListener&&h.removeListener(w),(p=hr(h))?(St(p,l),p.h==0&&(p.src=null,h[Ms]=null)):Ds(l)}}}function du(l){return l in ea?ea[l]:ea[l]="on"+l}function Wi(l,h){if(l.da)l=!0;else{h=new Pe(h,this);var p=l.listener,w=l.ha||l.src;l.fa&&ta(l),l=p.call(w,h)}return l}function hr(l){return l=l[Ms],l instanceof Ls?l:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(l){return typeof l=="function"?l:(l[Vs]||(l[Vs]=function(h){return l.handleEvent(h)}),l[Vs])}function Ve(){se.call(this),this.i=new Ls(this),this.M=this,this.F=null}k(Ve,se),Ve.prototype[Ye]=!0,Ve.prototype.removeEventListener=function(l,h,p,w){cu(this,l,h,p,w)};function at(l,h){var p,w=l.F;if(w)for(p=[];w;w=w.F)p.push(w);if(l=l.M,w=h.type||h,typeof h=="string")h=new pe(h,l);else if(h instanceof pe)h.target=h.target||l;else{var D=h;h=new pe(w,l),A(h,D)}if(D=!0,p)for(var M=p.length-1;0<=M;M--){var q=h.g=p[M];D=qi(q,w,!0,h)&&D}if(q=h.g=l,D=qi(q,w,!0,h)&&D,D=qi(q,w,!1,h)&&D,p)for(M=0;M<p.length;M++)q=h.g=p[M],D=qi(q,w,!1,h)&&D}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],w=0;w<p.length;w++)Ds(p[w]);delete l.g[h],l.h--}}this.F=null},Ve.prototype.K=function(l,h,p,w){return this.i.add(String(l),h,!1,p,w)},Ve.prototype.L=function(l,h,p,w){return this.i.add(String(l),h,!0,p,w)};function qi(l,h,p,w){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,M=0;M<h.length;++M){var q=h[M];if(q&&!q.da&&q.capture==p){var xe=q.listener,Ct=q.ha||q.src;q.fa&&St(l.i,q),D=xe.call(Ct,w)!==!1&&D}}return D&&!w.defaultPrevented}function Ki(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function hu(l){l.g=Ki(()=>{l.g=null,l.i&&(l.i=!1,hu(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Kn extends se{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(l){se.call(this),this.h=l,this.g={}}k($r,se);var na=[];function ra(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&ta(h)},l),l.g={}}$r.prototype.N=function(){$r.aa.N.call(this),ra(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=a.JSON.stringify,fu=a.JSON.parse,js=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fs(){}Fs.prototype.h=null;function Bs(l){return l.h||(l.h=l.i())}function pu(){}var Hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sa(){pe.call(this,"d")}k(sa,pe);function zs(){pe.call(this,"c")}k(zs,pe);var fr={},O=null;function L(){return O=O||new Ve}fr.La="serverreachability";function j(l){pe.call(this,fr.La,l)}k(j,pe);function W(l){const h=L();at(h,new j(h))}fr.STAT_EVENT="statevent";function G(l,h){pe.call(this,fr.STAT_EVENT,l),this.stat=h}k(G,pe);function Z(l){const h=L();at(h,new G(h,l))}fr.Ma="timingevent";function te(l,h){pe.call(this,fr.Ma,l),this.size=h}k(te,pe);function K(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function le(){this.g=!0}le.prototype.xa=function(){this.g=!1};function ce(l,h,p,w,D,M){l.info(function(){if(l.g)if(M)for(var q="",xe=M.split("&"),Ct=0;Ct<xe.length;Ct++){var ke=xe[Ct].split("=");if(1<ke.length){var Lt=ke[0];ke=ke[1];var Mt=Lt.split("_");q=2<=Mt.length&&Mt[1]=="type"?q+(Lt+"="+ke+"&"):q+(Lt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+h+`
`+p+`
`+q})}function mt(l,h,p,w,D,M,q){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+h+`
`+p+`
`+M+" "+q})}function qe(l,h,p,w){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Oe(l,p)+(w?" "+w:"")})}function oe(l,h){l.info(function(){return"TIMEOUT: "+h})}le.prototype.info=function(){};function Oe(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var w=p[l];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return ia(p)}catch{return h}}var Xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function On(){}k(On,Fs),On.prototype.g=function(){return new XMLHttpRequest},On.prototype.i=function(){return{}},En=new On;function Kt(l,h,p,w){this.j=l,this.i=h,this.l=p,this.R=w||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pr}function pr(){this.i=null,this.g="",this.h=!1}var un={},qr={};function Kr(l,h,p){l.L=1,l.v=vu(vr(h)),l.m=p,l.P=!0,Gi(l,null)}function Gi(l,h){l.F=Date.now(),At(l),l.A=vr(l.v);var p=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Dv(p.i,"t",w),l.C=0,p=l.j.J,l.h=new pr,l.g=Jv(l.j,p?h:null,!l.m),0<l.O&&(l.M=new Kn(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,w=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(na[0]=D.toString()),D=na);for(var M=0;M<D.length;M++){var q=qn(p,D[M],w||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),W(),ce(l.i,l.u,l.A,l.l,l.R,l.m)}Kt.prototype.ca=function(l){l=l.target;const h=this.M;h&&yr(l)==3?h.j():this.Y(l)},Kt.prototype.Y=function(l){try{if(l==this.g)e:{const Mt=yr(this.g);var h=this.g.Ba();const Ws=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Bv(this.g)))){this.J||Mt!=4||h==7||(h==8||0>=Ws?W(3):W(2)),mr(this);var p=this.g.Z();this.X=p;t:if(ge(this)){var w=Bv(this.g);l="";var D=w.length,M=yr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Gr(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(w[h],{stream:!(M&&h==D-1)});w.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,mt(this.i,this.u,this.A,this.l,this.R,Mt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Ct=this.g;if((xe=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(xe)){var ke=xe;break t}}ke=null}if(p=ke)qe(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ih(this,p);else{this.o=!1,this.s=3,Z(12),gr(this),Gr(this);break e}}if(this.P){p=!0;let Dn;for(;!this.J&&this.C<q.length;)if(Dn=kt(this,q),Dn==qr){Mt==4&&(this.s=4,Z(14),p=!1),qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==un){this.s=4,Z(15),qe(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else qe(this.i,this.l,Dn,null),Ih(this,Dn);if(ge(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||q.length!=0||this.h.h||(this.s=1,Z(16),p=!1),this.o=this.o&&p,!p)qe(this.i,this.l,q,"[Invalid Chunked Response]"),gr(this),Gr(this);else if(0<q.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Rh(Lt),Lt.M=!0,Z(11))}}else qe(this.i,this.l,q,null),Ih(this,q);Mt==4&&gr(this),this.o&&!this.J&&(Mt==4?Gv(this.j,this):(this.o=!1,At(this)))}else Wk(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,Z(12)):(this.s=0,Z(13)),gr(this),Gr(this)}}}catch{}finally{}};function ge(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kt(l,h){var p=l.C,w=h.indexOf(`
`,p);return w==-1?qr:(p=Number(h.substring(p,w)),isNaN(p)?un:(w+=1,w+p>h.length?qr:(h=h.slice(w,w+p),l.C=w+p,h)))}Kt.prototype.cancel=function(){this.J=!0,gr(this)};function At(l){l.S=Date.now()+l.I,ut(l,l.I)}function ut(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=K(m(l.ba,l),h)}function mr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Kt.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oe(this.i,this.A),this.L!=2&&(W(),Z(17)),gr(this),this.s=2,Gr(this)):ut(this,this.S-l)};function Gr(l){l.j.G==0||l.J||Gv(l.j,l)}function gr(l){mr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,ra(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Ih(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Sh(p.h,l))){if(!l.K&&Sh(p.h,l)&&p.G==3){try{var w=p.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Tu(p),wu(p);else break e;Ph(p),Z(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=K(m(p.Za,p),6e3));if(1>=kv(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yi(p,11)}else if((l.K||p.g==l)&&Tu(p),!_(h))for(D=p.Da.g.parse(h),h=0;h<D.length;h++){let ke=D[h];if(p.T=ke[0],ke=ke[1],p.G==2)if(ke[0]=="c"){p.K=ke[1],p.ia=ke[2];const Lt=ke[3];Lt!=null&&(p.la=Lt,p.j.info("VER="+p.la));const Mt=ke[4];Mt!=null&&(p.Aa=Mt,p.j.info("SVER="+p.Aa));const Ws=ke[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(w=1.5*Ws,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const Dn=l.g;if(Dn){const Su=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Su){var M=w.h;M.g||Su.indexOf("spdy")==-1&&Su.indexOf("quic")==-1&&Su.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(kh(M,M.h),M.h=null))}if(w.D){const bh=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;bh&&(w.ya=bh,Ue(w.I,w.D,bh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var q=l;if(w.qa=Xv(w,w.J?w.ia:null,w.W),q.K){Av(w.h,q);var xe=q,Ct=w.L;Ct&&(xe.I=Ct),xe.B&&(mr(xe),At(xe)),w.g=q}else qv(w);0<p.i.length&&Eu(p)}else ke[0]!="stop"&&ke[0]!="close"||Yi(p,7);else p.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Yi(p,7):Ch(p):ke[0]!="noop"&&p.l&&p.l.ta(ke),p.v=0)}}W(4)}catch{}}var Rk=class{constructor(l,h){this.g=l,this.map=h}};function Iv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function kv(l){return l.h?1:l.g?l.g.size:0}function Sh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function kh(l,h){l.g?l.g.add(h):l.h=h}function Av(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Iv.prototype.cancel=function(){if(this.i=Cv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return C(l.i)}function bk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,w=0;w<p;w++)h.push(l[w]);return h}h=[],p=0;for(w in l)h[p++]=l[w];return h}function xk(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const w in l)h[p++]=w;return h}}}function Pv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=xk(l),w=bk(l),D=w.length,M=0;M<D;M++)h.call(void 0,w[M],p&&p[M],l)}var Rv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nk(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var w=l[p].indexOf("="),D=null;if(0<=w){var M=l[p].substring(0,w);D=l[p].substring(w+1)}else M=l[p];h(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Qi){this.h=l.h,mu(this,l.j),this.o=l.o,this.g=l.g,gu(this,l.s),this.l=l.l;var h=l.i,p=new la;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),bv(this,p),this.m=l.m}else l&&(h=String(l).match(Rv))?(this.h=!1,mu(this,h[1]||"",!0),this.o=oa(h[2]||""),this.g=oa(h[3]||"",!0),gu(this,h[4]),this.l=oa(h[5]||"",!0),bv(this,h[6]||"",!0),this.m=oa(h[7]||"")):(this.h=!1,this.i=new la(null,this.h))}Qi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(aa(h,xv,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(aa(h,xv,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(aa(p,p.charAt(0)=="/"?Lk:Dk,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",aa(p,Vk)),l.join("")};function vr(l){return new Qi(l)}function mu(l,h,p){l.j=p?oa(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function gu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function bv(l,h,p){h instanceof la?(l.i=h,Uk(l.i,l.h)):(p||(h=aa(h,Mk)),l.i=new la(h,l.h))}function Ue(l,h,p){l.i.set(h,p)}function vu(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function oa(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function aa(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,Ok),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ok(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xv=/[#\/\?@]/g,Dk=/[#\?:]/g,Lk=/[#\?]/g,Mk=/[#\?@]/g,Vk=/#/g;function la(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Qr(l){l.g||(l.g=new Map,l.h=0,l.i&&Nk(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=la.prototype,t.add=function(l,h){Qr(this),this.i=null,l=$s(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Nv(l,h){Qr(l),h=$s(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Ov(l,h){return Qr(l),h=$s(l,h),l.g.has(h)}t.forEach=function(l,h){Qr(this),this.g.forEach(function(p,w){p.forEach(function(D){l.call(h,D,w,this)},this)},this)},t.na=function(){Qr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let w=0;w<h.length;w++){const D=l[w];for(let M=0;M<D.length;M++)p.push(h[w])}return p},t.V=function(l){Qr(this);let h=[];if(typeof l=="string")Ov(this,l)&&(h=h.concat(this.g.get($s(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Qr(this),this.i=null,l=$s(this,l),Ov(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Dv(l,h,p){Nv(l,h),0<p.length&&(l.i=null,l.g.set($s(l,h),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var w=h[p];const M=encodeURIComponent(String(w)),q=this.V(w);for(w=0;w<q.length;w++){var D=M;q[w]!==""&&(D+="="+encodeURIComponent(String(q[w]))),l.push(D)}}return this.i=l.join("&")};function $s(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Uk(l,h){h&&!l.j&&(Qr(l),l.i=null,l.g.forEach(function(p,w){var D=w.toLowerCase();w!=D&&(Nv(this,w),Dv(this,D,p))},l)),l.j=h}function jk(l,h){const p=new le;if(a.Image){const w=new Image;w.onload=E(Yr,p,"TestLoadImage: loaded",!0,h,w),w.onerror=E(Yr,p,"TestLoadImage: error",!1,h,w),w.onabort=E(Yr,p,"TestLoadImage: abort",!1,h,w),w.ontimeout=E(Yr,p,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else h(!1)}function Fk(l,h){const p=new le,w=new AbortController,D=setTimeout(()=>{w.abort(),Yr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:w.signal}).then(M=>{clearTimeout(D),M.ok?Yr(p,"TestPingServer: ok",!0,h):Yr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Yr(p,"TestPingServer: error",!1,h)})}function Yr(l,h,p,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(p)}catch{}}function Bk(){this.g=new js}function zk(l,h,p){const w=p||"";try{Pv(l,function(D,M){let q=D;c(D)&&(q=ia(D)),h.push(w+M+"="+encodeURIComponent(q))})}catch(D){throw h.push(w+"type="+encodeURIComponent("_badmap")),D}}function ua(l){this.l=l.Ub||null,this.j=l.eb||!1}k(ua,Fs),ua.prototype.g=function(){return new yu(this.l,this.j)},ua.prototype.i=function(l){return function(){return l}}({});function yu(l,h){Ve.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(yu,Ve),t=yu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,da(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ca(this):da(this),this.readyState==3&&Lv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ca(this))},t.Qa=function(l){this.g&&(this.response=l,ca(this))},t.ga=function(){this.g&&ca(this)};function ca(l){l.readyState=4,l.l=null,l.j=null,l.v=null,da(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function da(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Mv(l){let h="";return F(l,function(p,w){h+=w,h+=":",h+=p,h+=`\r
`}),h}function Ah(l,h,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=Mv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ue(l,h,p))}function it(l){Ve.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(it,Ve);var $k=/^https?$/i,Hk=["POST","PUT"];t=it.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?Bs(this.o):Bs(En),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){Vv(this,M);return}if(l=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)p.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())p.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Hk,h,void 0))||w||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fv(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Vv(this,M)}};function Vv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Uv(l),_u(l)}function Uv(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),_u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_u(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jv(this):this.bb())},t.bb=function(){jv(this)};function jv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||yr(l)!=4||l.Z()!=2)){if(l.u&&yr(l)==4)Ki(l.Ea,0,l);else if(at(l,"readystatechange"),yr(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var w;if(w=q===0){var D=String(l.D).match(Rv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),w=!$k.test(D?D.toLowerCase():"")}p=w}if(p)at(l,"complete"),at(l,"success");else{l.m=6;try{var M=2<yr(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Uv(l)}}finally{_u(l)}}}}function _u(l,h){if(l.g){Fv(l);const p=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||at(l,"ready");try{p.onreadystatechange=w}catch{}}}function Fv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function yr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<yr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),fu(h)}};function Bv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Wk(l){const h={};l=(l.g&&2<=yr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(_(l[w]))continue;var p=R(l[w]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[D]||[];h[D]=M,M.push(p)}g(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function zv(l){this.Aa=0,this.i=[],this.j=new le,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,l),this.cb=ha("retryDelaySeedMs",1e4,l),this.Wa=ha("forwardChannelMaxRetries",2,l),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Iv(l&&l.concurrentRequestLimit),this.Da=new Bk,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zv.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,w){Z(0),this.W=l,this.H=h||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=Xv(this,null,this.W),Eu(this)};function Ch(l){if($v(l),l.G==3){var h=l.U++,p=vr(l.I);if(Ue(p,"SID",l.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),fa(l,p),h=new Kt(l,l.j,h),h.L=2,h.v=vu(vr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),At(h)}Yv(l)}function wu(l){l.g&&(Rh(l),l.g.cancel(),l.g=null)}function $v(l){wu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Tu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Eu(l){if(!Sv(l.h)&&!l.s){l.s=!0;var h=l.Ga;We||ne(),B||(We(),B=!0),ee.add(h,l),l.B=0}}function qk(l,h){return kv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=K(m(l.Ga,l,h),Qv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Kt(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wv(this,D,h),p=vr(this.I),Ue(p,"RID",l),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),fa(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Mv(M)))+"&"+h:this.m&&Ah(p,this.m,M)),kh(this.h,D),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),D.T=!0,Kr(D,p,null)):Kr(D,p,h),this.G=2}}else this.G==3&&(l?Hv(this,l):this.i.length==0||Sv(this.h)||Hv(this))};function Hv(l,h){var p;h?p=h.l:p=l.U++;const w=vr(l.I);Ue(w,"SID",l.K),Ue(w,"RID",p),Ue(w,"AID",l.T),fa(l,w),l.m&&l.o&&Ah(w,l.m,l.o),p=new Kt(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Wv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),kh(l.h,p),Kr(p,w,h)}function fa(l,h){l.H&&F(l.H,function(p,w){Ue(h,w,p)}),l.l&&Pv({},function(p,w){Ue(h,w,p)})}function Wv(l,h,p){p=Math.min(l.i.length,p);var w=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let M=-1;for(;;){const q=["count="+p];M==-1?0<p?(M=D[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let xe=!0;for(let Ct=0;Ct<p;Ct++){let ke=D[Ct].g;const Lt=D[Ct].map;if(ke-=M,0>ke)M=Math.max(0,D[Ct].g-100),xe=!1;else try{zk(Lt,q,"req"+ke+"_")}catch{w&&w(Lt)}}if(xe){w=q.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,w}function qv(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;We||ne(),B||(We(),B=!0),ee.add(h,l),l.v=0}}function Ph(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=K(m(l.Fa,l),Qv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Kv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=K(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Z(10),wu(this),Kv(this))};function Rh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Kv(l){l.g=new Kt(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=vr(l.qa);Ue(h,"RID","rpc"),Ue(h,"SID",l.K),Ue(h,"AID",l.T),Ue(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(h,"TO",l.ja),Ue(h,"TYPE","xmlhttp"),fa(l,h),l.m&&l.o&&Ah(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=vu(vr(h)),p.m=null,p.P=!0,Gi(p,l)}t.Za=function(){this.C!=null&&(this.C=null,wu(this),Ph(this),Z(19))};function Tu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gv(l,h){var p=null;if(l.g==h){Tu(l),Rh(l),l.g=null;var w=2}else if(Sh(l.h,h))p=h.D,Av(l.h,h),w=1;else return;if(l.G!=0){if(h.o)if(w==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;w=L(),at(w,new te(w,p)),Eu(l)}else qv(l);else if(D=h.s,D==3||D==0&&0<h.X||!(w==1&&qk(l,h)||w==2&&Ph(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),D){case 1:Yi(l,5);break;case 4:Yi(l,10);break;case 3:Yi(l,6);break;default:Yi(l,2)}}}function Qv(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Yi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),w=l.Xa;const D=!w;w=new Qi(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mu(w,"https"),vu(w),D?jk(w.toString(),p):Fk(w.toString(),p)}else Z(2);l.G=0,l.l&&l.l.sa(h),Yv(l),$v(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function Yv(l){if(l.G=0,l.ka=[],l.l){const h=Cv(l.h);(h.length!=0||l.i.length!=0)&&(b(l.ka,h),b(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Xv(l,h,p){var w=p instanceof Qi?vr(p):new Qi(p);if(w.g!="")h&&(w.g=h+"."+w.g),gu(w,w.s);else{var D=a.location;w=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var M=new Qi(null);w&&mu(M,w),h&&(M.g=h),D&&gu(M,D),p&&(M.l=p),w=M}return p=l.D,h=l.ya,p&&h&&Ue(w,p,h),Ue(w,"VER",l.la),fa(l,w),w}function Jv(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new it(new ua({eb:p})):new it(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zv(){}t=Zv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Iu(){}Iu.prototype.g=function(l,h){return new cn(l,h)};function cn(l,h){Ve.call(this),this.g=new zv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Hs(this)}k(cn,Ve),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Ch(this.g)},cn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ia(l),l=p);h.i.push(new Rk(h.Ya++,l)),h.G==3&&Eu(h)},cn.prototype.N=function(){this.g.l=null,delete this.j,Ch(this.g),delete this.g,cn.aa.N.call(this)};function ey(l){sa.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}k(ey,sa);function ty(){zs.call(this),this.status=1}k(ty,zs);function Hs(l){this.g=l}k(Hs,Zv),Hs.prototype.ua=function(){at(this.g,"a")},Hs.prototype.ta=function(l){at(this.g,new ey(l))},Hs.prototype.sa=function(l){at(this.g,new ty)},Hs.prototype.ra=function(){at(this.g,"b")},Iu.prototype.createWebChannel=Iu.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,VI=function(){return new Iu},MI=function(){return L()},LI=fr,Kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,kc=Xe,Wr.COMPLETE="complete",DI=Wr,pu.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Da=pu,OI=ua,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,NI=it}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const M0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Cg("@firebase/firestore");function ka(){return Ss.logLevel}function X(t,...e){if(Ss.logLevel<=Te.DEBUG){const n=e.map(jg);Ss.debug(`Firestore (${Yo}): ${t}`,...n)}}function Vr(t,...e){if(Ss.logLevel<=Te.ERROR){const n=e.map(jg);Ss.error(`Firestore (${Yo}): ${t}`,...n)}}function Vo(t,...e){if(Ss.logLevel<=Te.WARN){const n=e.map(jg);Ss.warn(`Firestore (${Yo}): ${t}`,...n)}}function jg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+t;throw Vr(e),new Error(e)}function Le(t,e){t||de()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class JD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZD{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ki,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ki)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new UI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Bt(e)}}class eL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new nL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new _t(0,0))}static max(){return new he(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Qe extends Pl{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Pl{construct(e,n,r){return new bt(e,n,r)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Qe.fromString(e))}static fromName(e){return new ie(Qe.fromString(e).popFirst(5))}static empty(){return new ie(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Qe(e.slice()))}}function oL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new Oi(i,ie.empty(),e)}function aL(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Oi(he.min(),ie.empty(),-1)}static max(){return new Oi(he.max(),ie.empty(),-1)}}function lL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==uL)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fg.oe=-1;function nh(t){return t==null}function gd(t){return t===0&&1/t==-1/0}function hL(t){return typeof t=="number"&&Number.isInteger(t)&&!gd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||Rt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Rt.RED,this.left=i??Rt.EMPTY,this.right=s??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Nt(bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new BI("Invalid base64 string: "+s):s}}(e);return new Wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const fL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(t){if(Le(!!t),typeof t=="string"){let e=0;const n=fL.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ks(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zg(t){const e=t.mapValue.fields.__previous_value__;return Bg(e)?zg(e):e}function Rl(t){const e=Di(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class bl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bg(t)?4:mL(t)?9007199254740991:10:de()}function lr(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Di(i.timestampValue),a=Di(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ks(i.bytesValue).isEqual(ks(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ht(i.geoPointValue.latitude)===ht(s.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ht(i.integerValue)===ht(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ht(i.doubleValue),a=ht(s.doubleValue);return o===a?gd(o)===gd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Uo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(V0(o)!==V0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!lr(o[u],a[u])))return!1;return!0}(t,e);default:return de()}}function xl(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function jo(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ht(s.integerValue||s.doubleValue),u=ht(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return j0(t.timestampValue,e.timestampValue);case 4:return j0(Rl(t),Rl(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ks(s),u=ks(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ae(a[c],u[c]);if(d!==0)return d}return Ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(ht(s.latitude),ht(o.latitude));return a!==0?a:Ae(ht(s.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=jo(a[c],u[c]);if(d)return d}return Ae(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ec.mapValue&&o===ec.mapValue)return 0;if(s===ec.mapValue)return 1;if(o===ec.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Ae(u[f],d[f]);if(m!==0)return m;const E=jo(a[u[f]],c[d[f]]);if(E!==0)return E}return Ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function j0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Di(t),r=Di(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function Fo(t){return Gp(t)}function Gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ks(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gp(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Qp(t){return!!t&&"integerValue"in t}function $g(t){return!!t&&"arrayValue"in t}function F0(t){return!!t&&"nullValue"in t}function B0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ac(t){return!!t&&"mapValue"in t}function Ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(n)}setAll(e){let n=bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ya(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nn(Ya(this.value))}}function zI(t){const e=[];return xs(t.fields,(n,r)=>{const i=new bt([n]);if(Ac(r)){const s=zI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,he.min(),he.min(),he.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,he.min(),he.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,he.min(),he.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.position=e,this.inclusive=n}}function z0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=jo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n="asc"){this.field=e,this.dir=n}}function gL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{}class vt extends $I{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yL(e,n,r):n==="array-contains"?new EL(e,r):n==="in"?new TL(e,r):n==="not-in"?new IL(e,r):n==="array-contains-any"?new SL(e,r):new vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _L(e,r):new wL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jo(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(jo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends $I{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ur(e,n)}matches(e){return HI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function HI(t){return t.op==="and"}function WI(t){return vL(t)&&HI(t)}function vL(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Yp(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+Fo(t.value);if(WI(t))return t.filters.map(e=>Yp(e)).join(",");{const e=t.filters.map(n=>Yp(n)).join(",");return`${t.op}(${e})`}}function qI(t,e){return t instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.field.isEqual(i.field)&&lr(r.value,i.value)}(t,e):t instanceof ur?function(r,i){return i instanceof ur&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&qI(o,i.filters[a]),!0):!1}(t,e):void de()}function KI(t){return t instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${Fo(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(KI).join(" ,")+"}"}(t):"Filter"}class yL extends vt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class _L extends vt{constructor(e,n){super(e,"in",n),this.keys=GI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wL extends vt{constructor(e,n){super(e,"not-in",n),this.keys=GI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class EL extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $g(n)&&xl(n.arrayValue,this.value)}}class TL extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class IL extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class SL extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$g(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function H0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kL(t,e,n,r,i,s,o)}function Hg(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fo(r)).join(",")),e.ue=n}return e.ue}function Wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$0(t.startAt,e.startAt)&&$0(t.endAt,e.endAt)}function Xp(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AL(t,e,n,r,i,s,o,a){return new rh(t,e,n,r,i,s,o,a)}function qg(t){return new rh(t)}function W0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CL(t){return t.collectionGroup!==null}function Xa(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Nt(bt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yd(s,r))}),n.has(bt.keyField().canonicalString())||e.ce.push(new yd(bt.keyField(),r))}return e.ce}function or(t){const e=fe(t);return e.le||(e.le=PL(e,Xa(t))),e.le}function PL(t,e){if(t.limitType==="F")return H0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yd(i.field,s)});const n=t.endAt?new vd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vd(t.startAt.position,t.startAt.inclusive):null;return H0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jp(t,e,n){return new rh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ih(t,e){return Wg(or(t),or(e))&&t.limitType===e.limitType}function QI(t){return`${Hg(or(t))}|lt:${t.limitType}`}function Qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>KI(i)).join(", ")}]`),nh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fo(i)).join(",")),`Target(${r})`}(or(t))}; limitType=${t.limitType})`}function sh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=z0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Xa(r),i)||r.endAt&&!function(o,a,u){const c=z0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Xa(r),i))}(t,e)}function RL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YI(t){return(e,n)=>{let r=!1;for(const i of Xa(t)){const s=bL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bL(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?jo(u,c):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=new nt(ie.comparator);function Ur(){return xL}const XI=new nt(ie.comparator);function La(...t){let e=XI;for(const n of t)e=e.insert(n.key,n);return e}function JI(t){let e=XI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return Ja()}function ZI(){return Ja()}function Ja(){return new Xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const NL=new nt(ie.comparator),OL=new Nt(ie.comparator);function Ee(...t){let e=OL;for(const n of t)e=e.add(n);return e}const DL=new Nt(Ae);function LL(){return DL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gd(e)?"-0":e}}function tS(t){return{integerValue:""+t}}function ML(t,e){return hL(e)?tS(e):eS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._=void 0}}function VL(t,e,n){return t instanceof _d?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bg(s)&&(s=zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Nl?rS(t,e):t instanceof Ol?iS(t,e):function(i,s){const o=nS(i,s),a=q0(o)+q0(i.Pe);return Qp(o)&&Qp(i.Pe)?tS(a):eS(i.serializer,a)}(t,e)}function UL(t,e,n){return t instanceof Nl?rS(t,e):t instanceof Ol?iS(t,e):n}function nS(t,e){return t instanceof wd?function(r){return Qp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _d extends oh{}class Nl extends oh{constructor(e){super(),this.elements=e}}function rS(t,e){const n=sS(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ol extends oh{constructor(e){super(),this.elements=e}}function iS(t,e){let n=sS(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class wd extends oh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function q0(t){return ht(t.integerValue||t.doubleValue)}function sS(t){return $g(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Nl&&i instanceof Nl||r instanceof Ol&&i instanceof Ol?Uo(r.elements,i.elements,lr):r instanceof wd&&i instanceof wd?lr(r.Pe,i.Pe):r instanceof _d&&i instanceof _d}(t.transform,e.transform)}class FL{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ah{}function oS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lS(t.key,$n.none()):new tu(t.key,t.data,$n.none());{const n=t.data,r=nn.empty();let i=new Nt(bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(t.key,r,new fn(i.toArray()),$n.none())}}function BL(t,e,n){t instanceof tu?function(i,s,o){const a=i.value.clone(),u=G0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(i,s,o){if(!Cc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=G0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof tu?function(s,o,a,u){if(!Cc(s.precondition,o))return a;const c=s.value.clone(),d=Q0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zi?function(s,o,a,u){if(!Cc(s.precondition,o))return a;const c=Q0(s.fieldTransforms,u,o),d=o.data;return d.setAll(aS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Cc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nS(r.transform,i||null);s!=null&&(n===null&&(n=nn.empty()),n.set(r.field,s))}return n||null}function K0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Uo(r,i,(s,o)=>jL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tu extends ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G0(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UL(o,a,n[i]))}return r}function Q0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VL(s,o,e))}return r}class lS extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $L extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=oS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,(n,r)=>K0(n,r))&&Uo(this.baseMutations,e.baseMutations,(n,r)=>K0(n,r))}}class Kg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return NL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ie;function KL(t){switch(t){default:return de();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function uS(t){if(t===void 0)return Vr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ct.OK:return $.OK;case ct.CANCELLED:return $.CANCELLED;case ct.UNKNOWN:return $.UNKNOWN;case ct.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ct.INTERNAL:return $.INTERNAL;case ct.UNAVAILABLE:return $.UNAVAILABLE;case ct.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ct.NOT_FOUND:return $.NOT_FOUND;case ct.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ct.ABORTED:return $.ABORTED;case ct.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ct.DATA_LOSS:return $.DATA_LOSS;default:return de()}}(Ie=ct||(ct={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=new cs([4294967295,4294967295],0);function Y0(t){const e=GL().encode(t),n=new xI;return n.update(e),new Uint8Array(n.digest())}function X0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class Gg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ma(`Invalid padding: ${n}`);if(r<0)throw new Ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(QL)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Y0(e),[r,i]=X0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Y0(e),[r,i]=X0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,nu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lh(he.min(),i,new nt(Ae),Ur(),Ee())}}class nu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new nu(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class cS{constructor(e,n){this.targetId=e,this.me=n}}class dS{constructor(e,n,r=Wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class J0{constructor(){this.fe=0,this.ge=e1(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de()}}),new nu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=e1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class YL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=Z0(),this.Qe=new nt(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Xp(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,$t.newNoDocument(o,he.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ks(r).toUint8Array()}catch(u){if(u instanceof BI)return Vo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Gg(o,i,s)}catch(u){return Vo(u instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Xp(a.target)){const u=new ie(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,$t.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Ee();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new lh(e,n,this.Qe,this.ke,r);return this.ke=Ur(),this.qe=Z0(),this.Qe=new nt(Ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new J0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Nt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new J0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Z0(){return new nt(ie.comparator)}function e1(){return new nt(ie.comparator)}const XL={asc:"ASCENDING",desc:"DESCENDING"},JL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZL={and:"AND",or:"OR"};class e4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(t,e){return t.useProto3Json||nh(e)?e:{value:e}}function Ed(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function t4(t,e){return Ed(t,e.toTimestamp())}function ar(t){return Le(!!t),he.fromTimestamp(function(n){const r=Di(n);return new _t(r.seconds,r.nanos)}(t))}function Qg(t,e){return em(t,e).canonicalString()}function em(t,e){const n=function(i){return new Qe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fS(t){const e=Qe.fromString(t);return Le(yS(e)),e}function tm(t,e){return Qg(t.databaseId,e.path)}function _f(t,e){const n=fS(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(mS(n))}function pS(t,e){return Qg(t.databaseId,e)}function n4(t){const e=fS(t);return e.length===4?Qe.emptyPath():mS(e)}function nm(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mS(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function t1(t,e,n){return{name:tm(t,e),fields:n.value.mapValue.fields}}function r4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Le(d===void 0||typeof d=="string"),Wt.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Wt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?$.UNKNOWN:uS(c.code);return new re(d,c.message||"")}(o);n=new dS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_f(t,r.document.name),s=ar(r.document.updateTime),o=r.document.createTime?ar(r.document.createTime):he.min(),a=new nn({mapValue:{fields:r.document.fields}}),u=$t.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Pc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_f(t,r.document),s=r.readTime?ar(r.readTime):he.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_f(t,r.document),s=r.removedTargetIds||[];n=new Pc([],s,i,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qL(i,s),a=r.targetId;n=new cS(a,o)}}return n}function i4(t,e){let n;if(e instanceof tu)n={update:t1(t,e.key,e.value)};else if(e instanceof lS)n={delete:tm(t,e.key)};else if(e instanceof zi)n={update:t1(t,e.key,e.data),updateMask:f4(e.fieldMask)};else{if(!(e instanceof $L))return de();n={verify:tm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _d)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:t4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function s4(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ar(i.updateTime):ar(s);return o.isEqual(he.min())&&(o=ar(s)),new FL(o,i.transformResults||[])}(n,e))):[]}function o4(t,e){return{documents:[pS(t,e.path)]}}function a4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pS(t,i);const s=function(c){if(c.length!==0)return vS(ur.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ys(m.field),direction:c4(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function l4(t){let e=n4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=gS(f);return m instanceof ur&&WI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(k){return new yd(Xs(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,nh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new vd(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new vd(E,m)}(n.endAt)),AL(e,i,o,s,a,"F",u,c)}function u4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xs(n.unaryFilter.field);return vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xs(n.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return vt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return vt.create(Xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>gS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function c4(t){return XL[t]}function d4(t){return JL[t]}function h4(t){return ZL[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return bt.fromServerFormat(t.fieldPath)}function vS(t){return t instanceof vt?function(n){if(n.op==="=="){if(B0(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(F0(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(B0(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(F0(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:d4(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(i=>vS(i));return r.length===1?r[0]:{compositeFilter:{op:h4(n.op),filters:r}}}(t):de()}function f4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i,s=he.min(),o=he.min(),a=Wt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.ct=e}}function m4(t){const e=l4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this._n=new v4}addToCollectionParentIndex(e,n){return this._n.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Oi.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class v4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Nt(Qe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Nt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Bo(0)}static Ln(){return new Bo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(){this.changes=new Xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,fn.empty(),_t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=as();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=La();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ur();const o=Ja(),a=function(){return Ja()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof zi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Za(d.mutation,c,d.mutation.getFieldMask(),_t.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new _4(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ja();let i=new nt((o,a)=>o-a),s=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||fn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Ee()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=ZI();d.forEach(m=>{if(!s.has(m)){const E=oS(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(as());let a=-1,u=s;return o.next(c=>z.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ee())).next(d=>({batchId:a,changes:JI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=La();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=La();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,u=>{const c=function(f,m){return new rh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,$t.newInvalidDocument(d)))});let a=La();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Za(d.mutation,c,fn.empty(),_t.now()),sh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return z.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ar(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:m4(i.bundledQuery),readTime:ar(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.overlays=new nt(ie.comparator),this.hr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=as(),s=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new nt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=as(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=as(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return z.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WL(n,r));let s=this.hr.get(n);s===void 0&&(s=Ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.Pr=new Nt(Et.Ir),this.Tr=new Nt(Et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new Qe([])),r=new Et(n,e),i=new Et(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new Qe([])),r=new Et(n,e),i=new Et(n,e+1);let s=Ee();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Nt(Et.Ir)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Et(n,0),i=new Et(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(Ae);return n.forEach(i=>{const s=new Et(i,0),o=new Et(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),z.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new Et(new ie(s),0);let a=new Nt(Ae);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),z.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return z.forEach(n.mutations,i=>{const s=new Et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Et(n,0),i=this.wr.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.vr=e,this.docs=function(){return new nt(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ur();const o=n.path,a=new ie(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lL(aL(d),r)<=0||(i.has(d.key)||sh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de()}Fr(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new k4(this)}getSize(e){return z.resolve(this.size)}}class k4 extends y4{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.persistence=e,this.Mr=new Xo(n=>Hg(n),Wg),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yg,this.targetCount=0,this.Lr=Bo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),z.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Bo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.qn(n),z.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,n){this.Br={},this.overlays={},this.kr=new Fg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new A4(this),this.indexManager=new g4,this.remoteDocumentCache=function(i){return new S4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new p4(n),this.$r=new E4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new I4(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new P4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return z.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class P4 extends cL{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.zr=new Yg,this.jr=null}static Hr(e){return new Xg(e)}get Jr(){if(this.jr)return this.jr;throw de()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),z.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Jr,r=>{const i=ie.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return z.or([()=>z.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return vx()?8:dL(Dt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new R4;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ka()<=Te.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),z.resolve()):(ka()<=Te.DEBUG&&X("QueryEngine","Query:",Qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ka()<=Te.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(n))):z.resolve())}ji(e,n){if(W0(n))return z.resolve(null);let r=or(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jp(n,null,"F"),r=or(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ee(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Jp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return W0(n)||i.isEqual(he.min())?z.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?z.resolve(null):(ka()<=Te.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qs(n)),this.es(e,o,n,oL(i,-1)).next(a=>a))})}Zi(e,n){let r=new Nt(YI(e));return n.forEach((i,s)=>{sh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ka()<=Te.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.zi.getDocumentsMatchingQuery(e,n,Oi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new nt(Ae),this.rs=new Xo(s=>Hg(s),Wg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w4(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function N4(t,e,n,r){return new x4(t,e,n,r)}async function _S(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function O4(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let E=z.resolve();return m.forEach(k=>{E=E.next(()=>d.getEntry(u,k)).next(C=>{const b=c.docVersions.get(k);Le(b!==null),C.version.compareTo(b)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wS(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function D4(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(Wt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(C,b,S){return C.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&a.push(n.Qr.updateTargetData(s,E))});let u=Ur(),c=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(L4(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(he.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function L4(t,e,n){let r=Ee(),i=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ur();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function M4(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function V4(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new hi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function rm(t,e,n){const r=fe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!eu(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function n1(t,e,n){const r=fe(t);let i=he.min(),s=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=fe(u),m=f.rs.get(d);return m!==void 0?z.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,or(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Ee())).next(a=>(U4(r,RL(e),a),{documents:a,hs:s})))}function U4(t,e,n){let r=t.ss.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class r1{constructor(){this.activeTargetIds=LL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j4{constructor(){this.no=new r1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new r1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc=null;function wf(){return tc===null?tc=function(){return 268435456+Math.round(2147483648*Math.random())}():tc++,"0x"+tc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class $4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=wf(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Vo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=B4[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=wf();return new Promise((o,a)=>{const u=new NI;u.setWithCredentials(!0),u.listenOnce(DI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case kc.NO_ERROR:const d=u.getResponseJson();X(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case kc.TIMEOUT:X(jt,`RPC '${e}' ${s} timed out`),a(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const f=u.getStatus();if(X(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const k=function(b){const S=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(S)>=0?S:$.UNKNOWN}(E.status);a(new re(k,E.message))}else a(new re($.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new re($.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{X(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(jt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=wf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VI(),a=MI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new OI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(jt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,E=!1;const k=new z4({lo:b=>{E?X(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(X(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),X(jt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),C=(b,S,_)=>{b.listen(S,I=>{try{_(I)}catch(x){setTimeout(()=>{throw x},0)}})};return C(f,Da.EventType.OPEN,()=>{E||(X(jt,`RPC '${e}' stream ${i} transport opened.`),k.mo())}),C(f,Da.EventType.CLOSE,()=>{E||(E=!0,X(jt,`RPC '${e}' stream ${i} transport closed`),k.po())}),C(f,Da.EventType.ERROR,b=>{E||(E=!0,Vo(jt,`RPC '${e}' stream ${i} transport errored:`,b),k.po(new re($.UNAVAILABLE,"The operation could not be completed")))}),C(f,Da.EventType.MESSAGE,b=>{var S;if(!E){const _=b.data[0];Le(!!_);const I=_,x=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(x){X(jt,`RPC '${e}' stream ${i} received error:`,x);const V=x.status;let F=function(T){const A=ct[T];if(A!==void 0)return uS(A)}(V),g=x.message;F===void 0&&(F=$.INTERNAL,g="Unknown error status: "+V+" with message "+x.message),E=!0,k.po(new re(F,g)),f.close()}else X(jt,`RPC '${e}' stream ${i} received:`,_),k.yo(_)}}),C(a,LI.STAT_EVENT,b=>{b.stat===Kp.PROXY?X(jt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Kp.NOPROXY&&X(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Ef(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){return new e4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ES(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Vr(n.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H4 extends TS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=r4(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?ar(o.readTime):he.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=nm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Xp(u)?{documents:o4(s,u)}:{query:a4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hS(s,o.resumeToken);const c=Zp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Ed(s,o.snapshotVersion.toTimestamp());const c=Zp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=u4(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=nm(this.serializer),n.removeTarget=e,this.i_(n)}}class W4 extends TS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=s4(e.writeResults,e.commitTime),r=ar(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=nm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>i4(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,em(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,em(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class K4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Vr(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ns(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.M_.add(4),await ru(c),c.N_.set("Unknown"),c.M_.delete(4),await ch(c)}(this))})}),this.N_=new K4(r,i)}}async function ch(t){if(Ns(t))for(const e of t.x_)await e(!0)}async function ru(t){for(const e of t.x_)await e(!1)}function IS(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),nv(n)?tv(n):Jo(n).Xo()&&ev(n,e))}function Zg(t,e){const n=fe(t),r=Jo(n);n.F_.delete(e),r.Xo()&&SS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ns(n)&&n.N_.set("Unknown"))}function ev(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Jo(t).P_(e)}function SS(t,e){t.L_.xe(e),Jo(t).I_(e)}function tv(t){t.L_=new YL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Jo(t).start(),t.N_.w_()}function nv(t){return Ns(t)&&!Jo(t).Zo()&&t.F_.size>0}function Ns(t){return fe(t).M_.size===0}function kS(t){t.L_=void 0}async function Q4(t){t.N_.set("Online")}async function Y4(t){t.F_.forEach((e,n)=>{ev(t,e)})}async function X4(t,e){kS(t),nv(t)?(t.N_.D_(e),tv(t)):t.N_.set("Unknown")}async function J4(t,e,n){if(t.N_.set("Online"),e instanceof dS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Td(t,r)}else if(e instanceof Pc?t.L_.Ke(e):e instanceof cS?t.L_.He(e):t.L_.We(e),!n.isEqual(he.min()))try{const r=await wS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Wt.EMPTY_BYTE_STRING,d.snapshotVersion)),SS(s,u);const f=new hi(d.target,u,c,d.sequenceNumber);ev(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Td(t,r)}}async function Td(t,e,n){if(!eu(e))throw e;t.M_.add(1),await ru(t),t.N_.set("Offline"),n||(n=()=>wS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ch(t)})}function AS(t,e){return e().catch(n=>Td(t,n,e))}async function dh(t){const e=fe(t),n=Li(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Z4(e);)try{const i=await M4(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,eM(e,i)}catch(i){await Td(e,i)}CS(e)&&PS(e)}function Z4(t){return Ns(t)&&t.v_.length<10}function eM(t,e){t.v_.push(e);const n=Li(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function CS(t){return Ns(t)&&!Li(t).Zo()&&t.v_.length>0}function PS(t){Li(t).start()}async function tM(t){Li(t).V_()}async function nM(t){const e=Li(t);for(const n of t.v_)e.d_(n.mutations)}async function rM(t,e,n){const r=t.v_.shift(),i=Kg.from(r,e,n);await AS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dh(t)}async function iM(t,e){e&&Li(t).E_&&await async function(r,i){if(function(o){return KL(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();Li(r).t_(),await AS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dh(r)}}(t,e),CS(t)&&PS(t)}async function s1(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ns(n);n.M_.add(3),await ru(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ch(n)}async function sM(t,e){const n=fe(t);e?(n.M_.delete(2),await ch(n)):e||(n.M_.add(2),await ru(n),n.N_.set("Unknown"))}function Jo(t){return t.B_||(t.B_=function(n,r,i){const s=fe(n);return s.f_(),new H4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Q4.bind(null,t),To:Y4.bind(null,t),Ao:X4.bind(null,t),h_:J4.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),nv(t)?tv(t):t.N_.set("Unknown")):(await t.B_.stop(),kS(t))})),t.B_}function Li(t){return t.k_||(t.k_=function(n,r,i){const s=fe(n);return s.f_(),new W4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:tM.bind(null,t),Ao:iM.bind(null,t),R_:nM.bind(null,t),A_:rM.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await dh(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new rv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iv(t,e){if(Vr("AsyncQueue",`${e}: ${t}`),eu(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=La(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Co(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.q_=new nt(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):de():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zo(e,n,Co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class aM{constructor(){this.queries=new Xo(e=>QI(e),ih),this.onlineState="Unknown",this.z_=new Set}}async function lM(t,e){const n=fe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new oM,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=iv(o,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&sv(n)}async function uM(t,e){const n=fe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cM(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&sv(n)}function dM(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function sv(t){t.z_.forEach(e=>{e.next()})}var im,a1;(a1=im||(im={})).J_="default",a1.Cache="cache";class hM{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.key=e}}class bS{constructor(e){this.key=e}}class fM{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ee(),this.mutatedKeys=Ee(),this.Ia=YI(e),this.Ta=new Co(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new o1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=sh(this.query,f)?f:null,k=!!m&&this.mutatedKeys.has(m.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?k!==C&&(r.track({type:3,doc:E}),b=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(a=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(E?(o=o.add(E),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(E,k){const C=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return C(E)-C(k)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new zo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new o1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new bS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new RS(r))}),n}pa(e){this.la=e.hs,this.Pa=Ee();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return zo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class pM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mM{constructor(e){this.key=e,this.wa=!1}}class gM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Xo(a=>QI(a),ih),this.Da=new Map,this.Ca=new Set,this.va=new nt(ie.comparator),this.Fa=new Map,this.Ma=new Yg,this.xa={},this.Oa=new Map,this.Na=Bo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vM(t,e,n=!0){const r=MS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await xS(r,e,n,!0),i}async function yM(t,e){const n=MS(t);await xS(n,e,!0,!1)}async function xS(t,e,n,r){const i=await V4(t.localStore,or(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await _M(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IS(t.remoteStore,i),a}async function _M(t,e,n,r,i){t.Ba=(f,m,E)=>async function(C,b,S,_){let I=b.view.da(S);I.Xi&&(I=await n1(C.localStore,b.query,!1).then(({documents:g})=>b.view.da(g,I)));const x=_&&_.targetChanges.get(b.targetId),V=_&&_.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(I,C.isPrimaryClient,x,V);return u1(C,b.targetId,F.fa),F.snapshot}(t,f,m,E);const s=await n1(t.localStore,e,!0),o=new fM(e,s.hs),a=o.da(s.documents),u=nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);u1(t,n,c.fa);const d=new pM(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function wM(t,e,n){const r=fe(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ih(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zg(r.remoteStore,i.targetId),sm(r,i.targetId)}).catch(Zl)):(sm(r,i.targetId),await rm(r.localStore,i.targetId,!0))}async function EM(t,e){const n=fe(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zg(n.remoteStore,r.targetId))}async function TM(t,e,n){const r=RM(t);try{const i=await function(o,a){const u=fe(o),c=_t.now(),d=a.reduce((E,k)=>E.add(k.key),Ee());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=Ur(),C=Ee();return u.os.getEntries(E,d).next(b=>{k=b,k.forEach((S,_)=>{_.isValidDocument()||(C=C.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,k)).next(b=>{f=b;const S=[];for(const _ of a){const I=zL(_,f.get(_.key).overlayedDocument);I!=null&&S.push(new zi(_.key,I,zI(I.value.mapValue),$n.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(b=>{m=b;const S=b.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(E,b.batchId,S)})}).then(()=>({batchId:m.batchId,changes:JI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new nt(Ae)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await iu(r,i.changes),await dh(r.remoteStore)}catch(i){const s=iv(i,"Failed to persist write");n.reject(s)}}async function NS(t,e){const n=fe(t);try{const r=await D4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Le(o.wa):i.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await iu(n,r,e)}catch(r){await Zl(r)}}function l1(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=fe(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&sv(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IM(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new nt(ie.comparator);o=o.insert(s,$t.newNoDocument(s,he.min()));const a=Ee().add(s),u=new lh(he.min(),new Map,new nt(Ae),o,a);await NS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),ov(r)}else await rm(r.localStore,e,!1).then(()=>sm(r,e,n)).catch(Zl)}async function SM(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await O4(n.localStore,e);DS(n,r,null),OS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await iu(n,i)}catch(i){await Zl(i)}}async function kM(t,e,n){const r=fe(t);try{const i=await function(o,a){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Le(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);DS(r,e,n),OS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await iu(r,i)}catch(i){await Zl(i)}}function OS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function DS(t,e,n){const r=fe(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function sm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||LS(t,r)})}function LS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Zg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ov(t))}function u1(t,e,n){for(const r of n)r instanceof RS?(t.Ma.addReference(r.key,e),AM(t,r)):r instanceof bS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||LS(t,r.key)):de()}function AM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ov(t))}function ov(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(Qe.fromString(e)),r=t.Na.next();t.Fa.set(r,new mM(n)),t.va=t.va.insert(n,r),IS(t.remoteStore,new hi(or(qg(n.path)),r,"TargetPurposeLimboResolution",Fg.oe))}}async function iu(t,e,n){const r=fe(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Jg.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=fe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(c,m=>z.forEach(m.qi,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>z.forEach(m.Qi,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!eu(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.ns.get(m),k=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(k);d.ns=d.ns.insert(m,C)}}}(r.localStore,s))}async function CM(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await _S(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new re($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await iu(n,r.us)}}function PM(t,e){const n=fe(t),r=n.Fa.get(e);if(r&&r.wa)return Ee().add(r.key);{let i=Ee();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function MS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=NS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IM.bind(null,e),e.Sa.h_=cM.bind(null,e.eventManager),e.Sa.ka=dM.bind(null,e.eventManager),e}function RM(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class c1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return N4(this.persistence,new b4,e.initialUser,this.serializer)}createPersistence(e){return new C4(Xg.Hr,this.serializer)}createSharedClientState(e){return new j4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CM.bind(null,this.syncEngine),await sM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aM}()}createDatastore(e){const n=uh(e.databaseInfo.databaseId),r=function(s){return new $4(s)}(e.databaseInfo);return function(s,o,a,u){return new q4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new G4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>l1(this.syncEngine,n,0),function(){return i1.D()?new i1:new F4}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new gM(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ru(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=jI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _S(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DM(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>s1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>s1(e.remoteStore,i)),t._onlineComponents=e}function OM(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OM(n))throw n;Vo("Error using user provided cache. Falling back to memory cache: "+n),await Tf(t,new c1)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Tf(t,new c1);return t._offlineComponents}async function VS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await d1(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await d1(t,new bM))),t._onlineComponents}function LM(t){return VS(t).then(e=>e.syncEngine)}async function MM(t){const e=await VS(t),n=e.eventManager;return n.onListen=vM.bind(null,e.syncEngine),n.onUnlisten=wM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EM.bind(null,e.syncEngine),n}function VM(t,e,n={}){const r=new ki;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new xM({next:m=>{o.enqueueAndForget(()=>uM(s,f));const E=m.docs.has(a);!E&&m.fromCache?c.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new hM(qg(a.path),d,{includeMetadataChanges:!0,ra:!0});return lM(s,f)}(await MM(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UM(t,e,n,r){if(e===!0&&r===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f1(t){if(!ie.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p1(t){if(ie.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function av(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=av(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=US((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XD;switch(r.type){case"firstParty":return new tL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=h1.get(n);r&&(X("ComponentProvider","Removing Datastore"),h1.delete(n),r.terminate())}(this),Promise.resolve()}}function jM(t,e,n,r={}){var i;const s=(t=Mi(t,hh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Bt.MOCK_USER;else{a=WT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Bt(c)}t._authCredentials=new JD(new UI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lv(this.firestore,e,this._query)}}class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Ai extends lv{constructor(e,n,r){super(e,n,qg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new ie(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function FS(t,e,...n){if(t=pt(t),jS("collection","path",e),t instanceof hh){const r=Qe.fromString(e,...n);return p1(r),new Ai(t,null,r)}{if(!(t instanceof ln||t instanceof Ai))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return p1(r),new Ai(t.firestore,null,r)}}function su(t,e,...n){if(t=pt(t),arguments.length===1&&(e=jI.newId()),jS("doc","path",e),t instanceof hh){const r=Qe.fromString(e,...n);return f1(r),new ln(t,null,new ie(r))}{if(!(t instanceof ln||t instanceof Ai))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return f1(r),new ln(t.firestore,t instanceof Ai?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ES(this,"async_queue_retry"),this.hu=()=>{const n=Ef();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ef();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ki;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!eu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=rv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&de()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class ou extends hh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new FM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zS(this),this._firestoreClient.terminate()}}function BM(t,e){const n=typeof t=="object"?t:Rg(),r=typeof t=="string"?t:"(default)",i=Xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zT("firestore");s&&jM(i,...s)}return i}function BS(t){return t._firestoreClient||zS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new pL(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,US(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new NM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(Wt.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $o(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=/^__.*__$/;class $M{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new tu(e,this.data,n,this.fieldTransforms)}}class $S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class dv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new dv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Id(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(HS(this.fu)&&zM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class HM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uh(e)}Fu(e,n,r,i=!1){return new dv({fu:e,methodName:n,vu:r,path:bt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hv(t){const e=t._freezeSettings(),n=uh(t._databaseId);return new HM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WS(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);fv("Data must be an object, but it was:",o,r);const a=qS(r,o);let u,c;if(s.merge)u=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=om(e,f,n);if(!o.contains(m))throw new re($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);GS(d,m)||d.push(m)}u=new fn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new $M(new nn(a),u,c)}class ph extends uv{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ph}}function WM(t,e,n,r){const i=t.Fu(1,e,n);fv("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();xs(r,(u,c)=>{const d=pv(e,u,n);c=pt(c);const f=i.Su(d);if(c instanceof ph)s.push(d);else{const m=mh(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new fn(s);return new $S(o,a,i.fieldTransforms)}function qM(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[om(e,r,n)],u=[i];if(s.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(om(e,s[m])),u.push(s[m+1]);const c=[],d=nn.empty();for(let m=a.length-1;m>=0;--m)if(!GS(c,a[m])){const E=a[m];let k=u[m];k=pt(k);const C=o.Su(E);if(k instanceof ph)c.push(E);else{const b=mh(k,C);b!=null&&(c.push(E),d.set(E,b))}}const f=new fn(c);return new $S(d,f,o.fieldTransforms)}function mh(t,e){if(KS(t=pt(t)))return fv("Unsupported field value:",e,t),qS(t,e);if(t instanceof uv)return function(r,i){if(!HS(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=mh(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ML(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_t.fromDate(r);return{timestampValue:Ed(i.serializer,s)}}if(r instanceof _t){const s=new _t(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ed(i.serializer,s)}}if(r instanceof cv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $o)return{bytesValue:hS(i.serializer,r._byteString)};if(r instanceof ln){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${av(r)}`)}(t,e)}function qS(t,e){const n={};return FI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=mh(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function KS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof cv||t instanceof $o||t instanceof ln||t instanceof uv)}function fv(t,e,n){if(!KS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=av(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function om(t,e,n){if((e=pt(e))instanceof fh)return e._internalPath;if(typeof e=="string")return pv(t,e);throw Id("Field path arguments must be of type string or ",t,!1,void 0,n)}const KM=new RegExp("[~\\*/\\[\\]]");function pv(t,e,n){if(e.search(KM)>=0)throw Id(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fh(...e.split("."))._internalPath}catch{throw Id(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Id(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re($.INVALID_ARGUMENT,a+t+u)}function GS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(YS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GM extends QS{data(){return super.data()}}function YS(t,e){return typeof e=="string"?pv(t,e):e instanceof fh?e._internalPath:e._delegate._internalPath}class QM{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cv(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rl(e));default:return null}}convertTimestamp(e){const n=Di(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Qe.fromString(e);Le(yS(r));const i=new bl(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JS extends QS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new XM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(YS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class XM extends JS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){t=Mi(t,ln);const e=Mi(t.firestore,ou);return VM(BS(e),t._key).then(n=>n3(e,t,n))}class JM extends QM{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function ZM(t,e,n){t=Mi(t,ln);const r=Mi(t.firestore,ou),i=XS(t.converter,e);return mv(r,[WS(hv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$n.none())])}function e3(t,e,n,...r){t=Mi(t,ln);const i=Mi(t.firestore,ou),s=hv(i);let o;return o=typeof(e=pt(e))=="string"||e instanceof fh?qM(s,"updateDoc",t._key,e,n,r):WM(s,"updateDoc",t._key,e),mv(i,[o.toMutation(t._key,$n.exists(!0))])}function t3(t,e){const n=Mi(t.firestore,ou),r=su(t),i=XS(t.converter,e);return mv(n,[WS(hv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$n.exists(!1))]).then(()=>r)}function mv(t,e){return function(r,i){const s=new ki;return r.asyncQueue.enqueueAndForget(async()=>TM(await LM(r),i,s)),s.promise}(BS(t),e)}function n3(t,e,n){const r=n.docs.get(e._key),i=new JM(t);return new JS(t,i,e._key,r,new YM(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Yo=i})(bs),Es(new Ni("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ou(new ZD(r.getProvider("auth-internal")),new rL(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rr(M0,"4.6.3",e),rr(M0,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="firebasestorage.googleapis.com",tk="storageBucket",r3=2*60*1e3,i3=10*60*1e3,s3=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends cr{constructor(e,n,r=0){super(If(e),`Firebase Storage: ${n} (${If(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return If(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function If(t){return"storage/"+t}function gv(){const t="An unknown error occurred, please check the error payload for server response.";return new rt($e.UNKNOWN,t)}function o3(t){return new rt($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a3(t){return new rt($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function l3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt($e.UNAUTHENTICATED,t)}function u3(){return new rt($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function c3(t){return new rt($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nk(){return new rt($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rk(){return new rt($e.CANCELED,"User canceled the upload/download.")}function d3(t){return new rt($e.INVALID_URL,"Invalid URL '"+t+"'.")}function h3(t){return new rt($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f3(){return new rt($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tk+"' property when initializing the app?")}function ik(){return new rt($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function p3(){return new rt($e.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function m3(){return new rt($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function g3(t){return new rt($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function am(t){return new rt($e.INVALID_ARGUMENT,t)}function sk(){return new rt($e.APP_DELETED,"The Firebase app was deleted.")}function v3(t){return new rt($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function el(t,e){return new rt($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Aa(t){throw new rt($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw h3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),k={bucket:1,path:3},C=n===ek?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",S=new RegExp(`^https?://${C}/${i}/${b}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:E,indices:k,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<I.length;x++){const V=I[x],F=V.regex.exec(e);if(F){const g=F[V.indices.bucket];let y=F[V.indices.path];y||(y=""),r=new pn(g,y),V.postModify(r);break}}if(r==null)throw d3(e);return r}}class y3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(E,u())},b)}function m(){s&&clearTimeout(s)}function E(b,...S){if(c){m();return}if(b){m(),d.call(null,b,...S);return}if(u()||o){m(),d.call(null,b,...S);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let k=!1;function C(b){k||(k=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function w3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E3(t){return t!==void 0}function T3(t){return typeof t=="function"}function I3(t){return typeof t=="object"&&!Array.isArray(t)}function gh(t){return typeof t=="string"||t instanceof String}function g1(t){return vv()&&t instanceof Blob}function vv(){return typeof Blob<"u"}function v1(t,e,n,r){if(r<e)throw am(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw am(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ok(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ds||(ds={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ds.NO_ERROR,u=s.getStatus();if(!a||ak(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ds.ABORT;r(!1,new nc(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new nc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());E3(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=gv();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?sk():rk();o(u)}else{const u=nk();o(u)}};this.canceled_?n(!1,new nc(!1,null,!0)):this.backoffId_=_3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function A3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function C3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function P3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function R3(t,e,n,r,i,s,o=!0){const a=ok(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return C3(c,e),k3(c,n),A3(c,s),P3(c,r),new S3(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function x3(...t){const e=b3();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vv())return new Blob(t);throw new rt($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N3(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(t){if(typeof atob>"u")throw g3("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sf{constructor(e,n){this.data=e,this.contentType=n||null}}function D3(t,e){switch(t){case er.RAW:return new Sf(lk(e));case er.BASE64:case er.BASE64URL:return new Sf(uk(t,e));case er.DATA_URL:return new Sf(M3(e),V3(e))}throw gv()}function lk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function L3(t){let e;try{e=decodeURIComponent(t)}catch{throw el(er.DATA_URL,"Malformed data URL.")}return lk(e)}function uk(t,e){switch(t){case er.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw el(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=O3(e)}catch(i){throw i.message.includes("polyfill")?i:el(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ck{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw el(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=U3(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function M3(t){const e=new ck(t);return e.base64?uk(er.BASE64,e.rest):L3(e.rest)}function V3(t){return new ck(t).contentType}function U3(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){let r=0,i="";g1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(g1(this.data_)){const r=this.data_,i=N3(r,e,n);return i===null?null:new ui(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ui(r,!0)}}static getBlob(...e){if(vv()){const n=e.map(r=>r instanceof ui?r.data_:r);return new ui(x3.apply(null,n))}else{const n=e.map(o=>gh(o)?D3(er.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ui(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){let e;try{e=JSON.parse(t)}catch{return null}return I3(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function F3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function hk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(t,e){return e}class Gt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||B3}}let rc=null;function z3(t){return!gh(t)||t.length<2?t:hk(t)}function fk(){if(rc)return rc;const t=[];t.push(new Gt("bucket")),t.push(new Gt("generation")),t.push(new Gt("metageneration")),t.push(new Gt("name","fullPath",!0));function e(s,o){return z3(o)}const n=new Gt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Gt("size");return i.xform=r,t.push(i),t.push(new Gt("timeCreated")),t.push(new Gt("updated")),t.push(new Gt("md5Hash",null,!0)),t.push(new Gt("cacheControl",null,!0)),t.push(new Gt("contentDisposition",null,!0)),t.push(new Gt("contentEncoding",null,!0)),t.push(new Gt("contentLanguage",null,!0)),t.push(new Gt("contentType",null,!0)),t.push(new Gt("metadata","customMetadata",!0)),rc=t,rc}function $3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function H3(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return $3(r,t),r}function pk(t,e,n){const r=dk(e);return r===null?null:H3(t,r,n)}function W3(t,e,n,r){const i=dk(e);if(i===null||!gh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=au(m,n,r),k=ok({alt:"media",token:c});return E+k})[0]}function mk(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Zo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if(!t)throw gv()}function yv(t,e){function n(r,i){const s=pk(t,i,e);return Pr(s!==null),s}return n}function q3(t,e){function n(r,i){const s=pk(t,i,e);return Pr(s!==null),W3(s,i,t.host,t._protocol)}return n}function lu(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=u3():i=l3():n.getStatus()===402?i=a3(t.bucket):n.getStatus()===403?i=c3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function gk(t){const e=lu(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=o3(t.path)),s.serverResponse=i.serverResponse,s}return n}function K3(t,e,n){const r=e.fullServerUrl(),i=au(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zo(i,s,yv(t,n),o);return a.errorHandler=gk(e),a}function G3(t,e,n){const r=e.fullServerUrl(),i=au(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zo(i,s,q3(t,n),o);return a.errorHandler=gk(e),a}function Q3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Q3(null,e)),r}function Y3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let x=0;x<2;x++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=vk(e,r,i),d=mk(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=ui.getBlob(f,r,m);if(E===null)throw ik();const k={name:c.fullPath},C=au(s,t.host,t._protocol),b="POST",S=t.maxUploadRetryTime,_=new Zo(C,b,yv(t,n),S);return _.urlParams=k,_.headers=o,_.body=E.uploadData(),_.errorHandler=lu(e),_}class Sd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function _v(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Pr(!1)}return Pr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function X3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=vk(e,r,i),a={name:o.fullPath},u=au(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=mk(o,n),m=t.maxUploadRetryTime;function E(C){_v(C);let b;try{b=C.getResponseHeader("X-Goog-Upload-URL")}catch{Pr(!1)}return Pr(gh(b)),b}const k=new Zo(u,c,E,m);return k.urlParams=a,k.headers=d,k.body=f,k.errorHandler=lu(e),k}function J3(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=_v(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Pr(!1)}f||Pr(!1);const m=Number(f);return Pr(!isNaN(m)),new Sd(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Zo(n,o,s,a);return u.headers=i,u.errorHandler=lu(e),u}const y1=256*1024;function Z3(t,e,n,r,i,s,o,a){const u=new Sd(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw p3();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,m=f+d;let E="";d===0?E="finalize":c===d?E="upload, finalize":E="upload";const k={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},C=r.slice(f,m);if(C===null)throw ik();function b(x,V){const F=_v(x,["active","final"]),g=u.current+d,y=r.size();let T;return F==="final"?T=yv(e,s)(x,V):T=null,new Sd(g,y,F==="final",T)}const S="POST",_=e.maxUploadRetryTime,I=new Zo(n,S,b,_);return I.headers=k,I.body=C.uploadData(),I.progressCallback=a||null,I.errorHandler=lu(t),I}const en={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function kf(t){switch(t){case"running":case"pausing":case"canceling":return en.RUNNING;case"paused":return en.PAUSED;case"success":return en.SUCCESS;case"canceled":return en.CANCELED;case"error":return en.ERROR;default:return en.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r){if(T3(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class tV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nV extends tV{initXhr(){this.xhr_.responseType="text"}}function Js(){return new nV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=fk(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals($e.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(ak(i.status,[]))if(s)i=nk();else{this.sleepTime=Math.max(this.sleepTime*2,s3),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals($e.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=X3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=J3(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Js,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=y1*this._chunkMultiplier,n=new Sd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Z3(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Js,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){y1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=K3(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Y3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=rk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=kf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new eV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(kf(this._state)){case en.SUCCESS:Gs(this._resolve.bind(null,this.snapshot))();break;case en.CANCELED:case en.ERROR:const n=this._reject;Gs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(kf(this._state)){case en.RUNNING:case en.PAUSED:e.next&&Gs(e.next.bind(e,this.snapshot))();break;case en.SUCCESS:e.complete&&Gs(e.complete.bind(e))();break;case en.CANCELED:case en.ERROR:e.error&&Gs(e.error.bind(e,this._error))();break;default:e.error&&Gs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cs(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hk(this._location.path)}get storage(){return this._service}get parent(){const e=j3(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new Cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw v3(e)}}function iV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new rV(t,new ui(e),n)}function sV(t){t._throwIfRoot("getDownloadURL");const e=G3(t.storage,t._location,fk());return t.storage.makeRequestWithTokens(e,Js).then(n=>{if(n===null)throw m3();return n})}function oV(t,e){const n=F3(t._location.path,e),r=new pn(t._location.bucket,n);return new Cs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t){return/^[A-Za-z]+:\/\//.test(t)}function lV(t,e){return new Cs(t,e)}function yk(t,e){if(t instanceof wv){const n=t;if(n._bucket==null)throw f3();const r=new Cs(n,n._bucket);return e!=null?yk(r,e):r}else return e!==void 0?oV(t,e):t}function uV(t,e){if(e&&aV(e)){if(t instanceof wv)return lV(t,e);throw am("To use ref(service, url), the first argument must be a Storage instance.")}else return yk(t,e)}function _1(t,e){const n=e==null?void 0:e[tk];return n==null?null:pn.makeFromBucketSpec(n,t)}function cV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:WT(i,t.app.options.projectId))}class wv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ek,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=r3,this._maxUploadRetryTime=i3,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=_1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=_1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new y3(sk());{const o=R3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w1="@firebase/storage",E1="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="storage";function dV(t,e,n){return t=pt(t),iV(t,e,n)}function hV(t){return t=pt(t),sV(t)}function fV(t,e){return t=pt(t),uV(t,e)}function pV(t=Rg(),e){t=pt(t);const r=Xd(t,_k).getImmediate({identifier:e}),i=zT("storage");return i&&mV(r,...i),r}function mV(t,e,n,r={}){cV(t,e,n,r)}function gV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wv(n,r,i,e,bs)}function vV(){Es(new Ni(_k,gV,"PUBLIC").setMultipleInstances(!0)),rr(w1,E1,""),rr(w1,E1,"esm2017")}vV();const yV={apiKey:"AIzaSyC4aDeU-mpezU7tyo0JTOhrZJTe7Mdx2-0",authDomain:"equiblock-creditworld.firebaseapp.com",projectId:"equiblock-creditworld",storageBucket:"equiblock-creditworld.appspot.com",messagingSenderId:"1097780842975",appId:"1:1097780842975:web:49d5d8a191e7ee2c4a746a",measurementId:"G-MHZPHRRKC7"},Ev=GT(yV),Os=QD(Ev),uu=BM(Ev),_V=pV(Ev);function wk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=wk(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function fi(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=wk(t))&&(r&&(r+=" "),r+=e);return r}const Dl=t=>typeof t=="number"&&!isNaN(t),hs=t=>typeof t=="string",mn=t=>typeof t=="function",Rc=t=>hs(t)||mn(t)?t:null,lm=t=>U.isValidElement(t)||hs(t)||mn(t)||Dl(t);function wV(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function vh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:m,playToast:E}=o;const k=r?`${e}--${u}`:e,C=r?`${n}--${u}`:n,b=U.useRef(0);return U.useLayoutEffect(()=>{const S=f.current,_=k.split(" "),I=x=>{x.target===f.current&&(E(),S.removeEventListener("animationend",I),S.removeEventListener("animationcancel",I),b.current===0&&x.type!=="animationcancel"&&S.classList.remove(..._))};S.classList.add(..._),S.addEventListener("animationend",I),S.addEventListener("animationcancel",I)},[]),U.useEffect(()=>{const S=f.current,_=()=>{S.removeEventListener("animationend",_),i?wV(S,d,s):d()};m||(c?_():(b.current=1,S.className+=` ${C}`,S.addEventListener("animationend",_)))},[m]),Ce.createElement(Ce.Fragment,null,a)}}function T1(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Yt=new Map;let Ll=[];const um=new Set,EV=t=>um.forEach(e=>e(t)),Ek=()=>Yt.size>0;function Tk(t,e){var n;if(e)return!((n=Yt.get(e))==null||!n.isToastActive(t));let r=!1;return Yt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function Ik(t,e){lm(t)&&(Ek()||Ll.push({content:t,options:e}),Yt.forEach(n=>{n.buildToast(t,e)}))}function I1(t,e){Yt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function TV(t){const{subscribe:e,getSnapshot:n,setProps:r}=U.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const u=function(d,f,m){let E=1,k=0,C=[],b=[],S=[],_=f;const I=new Map,x=new Set,V=()=>{S=Array.from(I.values()),x.forEach(y=>y())},F=y=>{b=y==null?[]:b.filter(T=>T!==y),V()},g=y=>{const{toastId:T,onOpen:A,updateId:R,children:N}=y.props,P=R==null;y.staleId&&I.delete(y.staleId),I.set(T,y),b=[...b,y.props.toastId].filter(_e=>_e!==y.staleId),V(),m(T1(y,P?"added":"updated")),P&&mn(A)&&A(U.isValidElement(N)&&N.props)};return{id:d,props:_,observe:y=>(x.add(y),()=>x.delete(y)),toggle:(y,T)=>{I.forEach(A=>{T!=null&&T!==A.props.toastId||mn(A.toggle)&&A.toggle(y)})},removeToast:F,toasts:I,clearQueue:()=>{k-=C.length,C=[]},buildToast:(y,T)=>{if((se=>{let{containerId:pe,toastId:be,updateId:Pe}=se;const Me=pe?pe!==d:d!==1,Ye=I.has(be)&&Pe==null;return Me||Ye})(T))return;const{toastId:A,updateId:R,data:N,staleId:P,delay:_e}=T,He=()=>{F(A)},qt=R==null;qt&&k++;const We={..._,style:_.toastStyle,key:E++,...Object.fromEntries(Object.entries(T).filter(se=>{let[pe,be]=se;return be!=null})),toastId:A,updateId:R,data:N,closeToast:He,isIn:!1,className:Rc(T.className||_.toastClassName),bodyClassName:Rc(T.bodyClassName||_.bodyClassName),progressClassName:Rc(T.progressClassName||_.progressClassName),autoClose:!T.isLoading&&(B=T.autoClose,ee=_.autoClose,B===!1||Dl(B)&&B>0?B:ee),deleteToast(){const se=I.get(A),{onClose:pe,children:be}=se.props;mn(pe)&&pe(U.isValidElement(be)&&be.props),m(T1(se,"removed")),I.delete(A),k--,k<0&&(k=0),C.length>0?g(C.shift()):V()}};var B,ee;We.closeButton=_.closeButton,T.closeButton===!1||lm(T.closeButton)?We.closeButton=T.closeButton:T.closeButton===!0&&(We.closeButton=!lm(_.closeButton)||_.closeButton);let ne=y;U.isValidElement(y)&&!hs(y.type)?ne=U.cloneElement(y,{closeToast:He,toastProps:We,data:N}):mn(y)&&(ne=y({closeToast:He,toastProps:We,data:N}));const me={content:ne,props:We,staleId:P};_.limit&&_.limit>0&&k>_.limit&&qt?C.push(me):Dl(_e)?setTimeout(()=>{g(me)},_e):g(me)},setProps(y){_=y},setToggle:(y,T)=>{I.get(y).toggle=T},isToastActive:y=>b.some(T=>T===y),getSnapshot:()=>_.newestOnTop?S.reverse():S}}(o,s,EV);Yt.set(o,u);const c=u.observe(a);return Ll.forEach(d=>Ik(d.content,d.options)),Ll=[],()=>{c(),Yt.delete(o)}},setProps(a){var u;(u=Yt.get(o))==null||u.setProps(a)},getSnapshot(){var a;return(a=Yt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=U.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:u}=a.props;o.has(u)||o.set(u,[]),o.get(u).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:Tk,count:i==null?void 0:i.length}}function IV(t){const[e,n]=U.useState(!1),[r,i]=U.useState(!1),s=U.useRef(null),o=U.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;var m,E;function k(){n(!0)}function C(){n(!1)}function b(I){const x=s.current;o.canDrag&&x&&(o.didMove=!0,e&&C(),o.delta=t.draggableDirection==="x"?I.clientX-o.start:I.clientY-o.start,o.start!==I.clientX&&(o.canCloseOnClick=!1),x.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,x.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function S(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",S);const I=s.current;if(o.canDrag&&o.didMove&&I){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}(E=Yt.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||E.setToggle(m.id,m.fn),U.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||C(),window.addEventListener("focus",k),window.addEventListener("blur",C),()=>{window.removeEventListener("focus",k),window.removeEventListener("blur",C)}},[t.pauseOnFocusLoss]);const _={onPointerDown:function(I){if(t.draggable===!0||t.draggable===I.pointerType){o.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",S);const x=s.current;o.canCloseOnClick=!0,o.canDrag=!0,x.style.transition="none",t.draggableDirection==="x"?(o.start=I.clientX,o.removalDistance=x.offsetWidth*(t.draggablePercent/100)):(o.start=I.clientY,o.removalDistance=x.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(I){const{top:x,bottom:V,left:F,right:g}=s.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&t.pauseOnHover&&I.clientX>=F&&I.clientX<=g&&I.clientY>=x&&I.clientY<=V?C():k()}};return a&&u&&(_.onMouseEnter=C,t.stacked||(_.onMouseLeave=k)),f&&(_.onClick=I=>{d&&d(I),o.canCloseOnClick&&c()}),{playToast:k,pauseToast:C,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:_}}function SV(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:m}=t;const E=s||u&&c===0,k={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(k.transform=`scaleX(${c})`);const C=fi("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),b=mn(o)?o({rtl:d,type:i,defaultClassName:C}):fi(C,o),S={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}};return Ce.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},Ce.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),Ce.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:b,style:k,...S}))}let kV=1;const Sk=()=>""+kV++;function AV(t){return t&&(hs(t.toastId)||Dl(t.toastId))?t.toastId:Sk()}function tl(t,e){return Ik(t,e),e.toastId}function kd(t,e){return{...e,type:e&&e.type||t,toastId:AV(e)}}function ic(t){return(e,n)=>tl(e,kd(t,n))}function ue(t,e){return tl(t,kd("default",e))}ue.loading=(t,e)=>tl(t,kd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ue.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=hs(i)?ue.loading(i,n):ue.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,m)=>{if(f==null)return void ue.dismiss(r);const E={type:d,...a,...n,data:m},k=hs(f)?{render:f}:f;return r?ue.update(r,{...E,...k}):ue(k.render,{...E,...k}),m},c=mn(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},ue.success=ic("success"),ue.info=ic("info"),ue.error=ic("error"),ue.warning=ic("warning"),ue.warn=ue.warning,ue.dark=(t,e)=>tl(t,kd("default",{theme:"dark",...e})),ue.dismiss=function(t){(function(e){var n;if(Ek()){if(e==null||hs(n=e)||Dl(n))Yt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=Yt.get(e.containerId);r?r.removeToast(e.id):Yt.forEach(i=>{i.removeToast(e.id)})}}else Ll=Ll.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ue.clearWaitingQueue=function(t){t===void 0&&(t={}),Yt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ue.isActive=Tk,ue.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Yt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Sk()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,tl(o,s)}},ue.done=t=>{ue.update(t,{progress:1})},ue.onChange=function(t){return um.add(t),()=>{um.delete(t)}},ue.play=t=>I1(!0,t),ue.pause=t=>I1(!1,t);const CV=typeof window<"u"?U.useLayoutEffect:U.useEffect,sc=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return Ce.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Af={info:function(t){return Ce.createElement(sc,{...t},Ce.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Ce.createElement(sc,{...t},Ce.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Ce.createElement(sc,{...t},Ce.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Ce.createElement(sc,{...t},Ce.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Ce.createElement("div",{className:"Toastify__spinner"})}},PV=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=IV(t),{closeButton:o,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:E,position:k,className:C,style:b,bodyClassName:S,bodyStyle:_,progressClassName:I,progressStyle:x,updateId:V,role:F,progress:g,rtl:y,toastId:T,deleteToast:A,isIn:R,isLoading:N,closeOnClick:P,theme:_e}=t,He=fi("Toastify__toast",`Toastify__toast-theme--${_e}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":y},{"Toastify__toast--close-on-click":P}),qt=mn(C)?C({rtl:y,position:k,type:d,defaultClassName:He}):fi(He,C),We=function(me){let{theme:se,type:pe,isLoading:be,icon:Pe}=me,Me=null;const Ye={theme:se,type:pe};return Pe===!1||(mn(Pe)?Me=Pe({...Ye,isLoading:be}):U.isValidElement(Pe)?Me=U.cloneElement(Pe,Ye):be?Me=Af.spinner():(Hi=>Hi in Af)(pe)&&(Me=Af[pe](Ye))),Me}(t),B=!!g||!u,ee={closeToast:m,type:d,theme:_e};let ne=null;return o===!1||(ne=mn(o)?o(ee):U.isValidElement(o)?U.cloneElement(o,ee):function(me){let{closeToast:se,theme:pe,ariaLabel:be="close"}=me;return Ce.createElement("button",{className:`Toastify__close-button Toastify__close-button--${pe}`,type:"button",onClick:Pe=>{Pe.stopPropagation(),se(Pe)},"aria-label":be},Ce.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ce.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ee)),Ce.createElement(E,{isIn:R,done:A,position:k,preventExitTransition:n,nodeRef:r,playToast:s},Ce.createElement("div",{id:T,onClick:c,"data-in":R,className:qt,...i,style:b,ref:r},Ce.createElement("div",{...R&&{role:F},className:mn(S)?S({type:d}):fi("Toastify__toast-body",S),style:_},We!=null&&Ce.createElement("div",{className:fi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},We),Ce.createElement("div",null,a)),ne,Ce.createElement(SV,{...V&&!B?{key:`pb-${V}`}:{},rtl:y,theme:_e,delay:u,isRunning:e,isIn:R,closeToast:m,hide:f,type:d,style:x,className:I,controlledProgress:B,progress:g||0})))},yh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},RV=vh(yh("bounce",!0));vh(yh("slide",!0));vh(yh("zoom"));vh(yh("flip"));const bV={position:"top-right",transition:RV,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function $i(t){let e={...bV,...t};const n=t.stacked,[r,i]=U.useState(!0),s=U.useRef(null),{getToastToRender:o,isToastActive:a,count:u}=TV(e),{className:c,style:d,rtl:f,containerId:m}=e;function E(C){const b=fi("Toastify__toast-container",`Toastify__toast-container--${C}`,{"Toastify__toast-container--rtl":f});return mn(c)?c({position:C,rtl:f,defaultClassName:b}):fi(b,Rc(c))}function k(){n&&(i(!0),ue.play())}return CV(()=>{if(n){var C;const b=s.current.querySelectorAll('[data-in="true"]'),S=12,_=(C=e.position)==null?void 0:C.includes("top");let I=0,x=0;Array.from(b).reverse().forEach((V,F)=>{const g=V;g.classList.add("Toastify__toast--stacked"),F>0&&(g.dataset.collapsed=`${r}`),g.dataset.pos||(g.dataset.pos=_?"top":"bot");const y=I*(r?.2:1)+(r?0:S*F);g.style.setProperty("--y",`${_?y:-1*y}px`),g.style.setProperty("--g",`${S}`),g.style.setProperty("--s",""+(1-(r?x:0))),I+=g.offsetHeight,x+=.025})}},[r,u,n]),Ce.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),ue.pause())},onMouseLeave:k},o((C,b)=>{const S=b.length?{...d}:{...d,pointerEvents:"none"};return Ce.createElement("div",{className:E(C),style:S,key:`container-${C}`},b.map(_=>{let{content:I,props:x}=_;return Ce.createElement(PV,{...x,stacked:n,collapseAll:k,isIn:a(x.toastId,x.containerId),style:x.style,key:`toast-${x.key}`},I)}))}))}const xV="/assets/sign-4czaFtvg.gif",NV=()=>{const t=bn(),[e,n]=U.useState(),[r,i]=U.useState(),[s,o]=U.useState(),a=async(c,d,f)=>{try{await DO(c,d,f),ue("🦄 Successful login",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/update")}catch{o(`error creating account${s}`),ue(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),ue("🦄 Creating Account",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(Os,e,r)};return v.jsxs("div",{children:[v.jsx(xn,{}),v.jsxs("div",{className:"authBackground",children:[v.jsx("div",{className:"signGif",children:v.jsx("img",{src:xV,width:"130px",height:"130px"})}),v.jsx("h2",{className:"authTitle",children:"Create Accoint"}),v.jsx("p",{className:"authParagraph",children:"welcome ,Sign up to continue"}),v.jsxs("div",{className:"authDetails",children:[v.jsx("input",{className:"authInput",onChange:c=>{n(c.target.value)},placeholder:"email",type:"email",required:!0}),v.jsx("input",{className:"authInput",placeholder:"password",onChange:c=>{i(c.target.value)},type:"password",required:!0}),v.jsx("p",{onClick:()=>{t("/forgot")},className:"authParagraph",children:"forgot password?"}),v.jsx("button",{className:"authButton",onClick:u,children:"Sign Up"}),v.jsx("p",{className:"authParagraph last",onClick:()=>{t("/login")},children:"Already SignedUp?, login"})]})]}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},OV="/assets/log-C5Xo4Pxw.png",DV=()=>{const t=bn(),[e,n]=U.useState(),[r,i]=U.useState(),[s,o]=U.useState(),a=async(c,d,f)=>{try{await LO(c,d,f),ue("🦄 Successful login",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(m){o(`error loggin${m.message}`),ue(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),ue("🦄 Logging in..",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(Os,e,r)};return v.jsxs("div",{children:[v.jsx(xn,{}),v.jsxs("div",{className:"authBackground",children:[v.jsx("div",{className:"signGif",children:v.jsx("img",{src:OV,width:"130px",height:"130px"})}),v.jsx("h2",{className:"authTitle",children:"Sign In"}),v.jsx("p",{className:"authParagraph",children:"welcome back, Login to continue"}),v.jsxs("div",{className:"authDetails",children:[v.jsx("input",{className:"authInput",onChange:c=>{n(c.target.value)},placeholder:"email",type:"email",required:!0}),v.jsx("input",{className:"authInput",placeholder:"password",onChange:c=>{i(c.target.value)},type:"password",required:!0}),v.jsx("p",{className:"authParagraph",onClick:()=>{t("/forgot")},children:"forgot password?"}),v.jsx("button",{className:"authButton",onClick:u,children:"Sign In"}),v.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not SignedUp?, SignUp"})]})]}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},LV="/assets/forgot-aqvkMv1L.gif",MV=()=>{const t=bn(),[e,n]=U.useState(),[r,i]=U.useState(),s=async(a,u)=>{try{await OO(a,u),ue(`🦄 recovery email has been sent to ${u}`,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/login")}catch(c){i(`error sending mail${c.message}`),ue(`🦄 ${r}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},o=async a=>{a.preventDefault(),ue("🦄 sending recovery email.",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await s(Os,e)};return v.jsxs("div",{children:[v.jsx(xn,{}),v.jsxs("div",{className:"authBackground",children:[v.jsx("div",{className:"signGif",children:v.jsx("img",{src:LV,width:"130px",height:"130px"})}),v.jsx("h2",{className:"authTitle",children:"Forgot Password"}),v.jsx("p",{className:"authParagraph",children:"Lets get you back on board"}),v.jsxs("div",{className:"authDetails",children:[v.jsx("input",{className:"authInput",placeholder:"email",onChange:a=>{n(a.target.value)},type:"email",required:!0}),v.jsx("button",{className:"authButton",onClick:o,children:"Recover Password"}),v.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not SignedUp?, SignUp"})]})]}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},VV="/assets/update-B2xoCSrc.gif",UV=()=>{const t=bn(),[e,n]=U.useState(),[r,i]=U.useState(),[s,o]=U.useState(),[a,u]=U.useState(),[c,d]=U.useState(),f=async m=>{console.log("clicked"),m.preventDefault();const E=Os.currentUser;if(E!==null){const k=E.uid;u(k);const C=FS(uu,"Users");try{await ZM(su(C,k),{userName:e,country:r,email:E.email,phone:s,userId:a,creditBalance:0,userSubscriptions:[]}),ue("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(b){d(`error saving details${b.message}`),ue(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}else d("youre not logged in"),ue(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")};return v.jsxs("div",{children:[v.jsx(xn,{}),v.jsxs("div",{className:"authBackground",children:[v.jsx("div",{className:"signGif",children:v.jsx("img",{src:VV,width:"130px",height:"130px"})}),v.jsx("h2",{className:"authTitle",children:"Update Profile"}),v.jsxs("div",{className:"authDetails",children:[v.jsx("input",{className:"authInput",placeholder:"Username",onChange:m=>{n(m.target.value)},type:"name",required:!0}),v.jsx("input",{className:"authInput",placeholder:"Country",onChange:m=>{i(m.target.value)},type:"name",required:!0}),v.jsx("input",{className:"authInput",placeholder:"Phone",onChange:m=>{o(m.target.value)},type:"number",required:!0}),v.jsx("button",{type:"button",className:"authButton",onClick:m=>{f(m)},children:"Save details"})]})]}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},jV="/assets/profile-Bfg41JS9.gif",kk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAALl0lEQVR4nO2baXQT1xXH55ym7Zf2dP/QFDSa0WbNaJdjLV5k4w0MeME2NtjYILDZTNmNV5EUSJwQsHEwhCRsp5DGacwOBtKEJiSQctI2CUvTNjTtCSEUQsNmg03I7XkjychitMxIDhF5v3PuJ0lz37yref93731DEBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAYzNPyCYX4goZi/kRQL0TSJlPm7SqX6IY6bQIZLmdxoB2PASHU+DohAJFJ2FZq8lTVFcPvQ0ohst6scTKwBipKs7qeEYlpxQARCyTTvocl7s32m6ED072+CmxtnQl1eKpxoKIY/Lir0BuQ9HBABkKT+x1KauSOXa+Ha3iZRwejrqoXetU7oaascsC9WTQKVQoOC8tUvlcqf46CEiVSqzkP/5KKsVMGBuNzVAAsKMuA3xemDguG14hT3skWSmgIckDCRSNnVaNKerikW9lTsqIWK9ERYkpsKF1dO4g3IU6WZHnFn2nBABOrH0fZZYQWid38TXNs8m5vw660VvIHwGtYRgQwbxvxUSrFfKRRauL63OWQw3mmbDilGM7w8c0zQQGAdEQlJqvPR01Gc7QgaiJv7m+Fp51iI1xhgd01eWMHw2vhkm3vZotlxYsf5rUFCMa1oslbNCawfJ9fPhmxLAlRnJsG5J8oEBQPZygkDOrLmft/vNx6pjH0fTdZbz9yrHzcPNEP7jHwwMHrYPDVHcCC89sbicd4yyvv3+35jVj/OPDcHRtssMDHVBmeXTxQdDGRXVleASqnF+Ui4+jE++27+0X/QBVvnF4FBrYf1laPgRqv4QGAdEQhJMW2++vHx1vlQnGqHfLsFzjxWGpVA3KsjbLvYJ/qBRypjP+D0o30WbF1QzGnFmvLskLmFKB2pdesIKWU+IL5VOBwPkaR6lIRiioPZMJKZgvRDSrMw0poAyUYTrK8cCV2zxw6Jdc4cAxTtrmtJKHZqqPGRtDrHbDZ/l4h1JFJmzpD1Naiv25j5RKwjpdhub6I3syg7oFUVZEJ+egpMK8gK8p0sSDbHg1ymASnNXCBp9lU+oyj2kwy7Lag/rxWkp3DX5fusuiALUsyPgMJdIUbL22EipnE4HqJotgfdzLnO2oiaTCfapoPDFA/Ts5Khe14+aFXafwRyazGYPjm2dlbk/sxmzt+ZR0sBLaUkxfQwDPM9IlYhyTgrCkaazSp6Ym7sbYQVFTlciWTPnNyBPEIh095CfRN/n6hfrlLqvryxT1wfJVBJJt0c704maTaRiFVImqlDN1FXOVbU5JxcN+tuiaRlcIkkz55wZTjFjr3XpzqnJCPlSzH+Tm2YzW0oKtLs8O8Vg5PP+rw0r5Y0ErEKSTMH0U3sWjFV2L/0gIsrkRjZwCWSVROz7qiU2mf8feoZfUfrr8cL9Be6JIN2ZrGtIyL148xzNQMlkn8FKZEcXVII2jjdP/3dWgymc8c6Zoft7+zmeTAu2QYTHMFLMqiI6dURuVz+fSLWIEmNDQVjhD08/ejvdpdIzBoD9y8NVSK5uroC5DJtn0Si/YmvfsQpdV/27A/dR7l9yAUvzC3knopNztD+kGXEu3VkOM0kEbEGSTH1aPD1YejHx1vmQ5HDBgUCSyR5dssVdH7L61NCa0aXZDpC68e+RrixoRoW56bChwL8NeS7dUQiZZuIWIOkmUOcfjzuDPxUoMJhBCWS1UhHFLoOr08do+9omxtMP1zQ17kAetqniCq37KjJ9egI+yoRi/qB1tzPfl/HOznnXlwEkzOTYawtAU65SkRN0FtuHfnIVz+OB9CPcy8uhKOuCRHVvz59osxTbokxHfHqR7rdxjs5O5vLuJOET03IhGurxU/Q1dZKTkcefjjuZzRt/pEqgH680ljG7dg2RtDUimkdISm2AQ26YXLuoIn5rHMxTB2Vwt3Uuw3FEU9Oj0dH0DkuCcWO8dePC521UDXKwSV1J6Lkr7FghLfb2EzECiTNHEaD3v341EHna9EOallxOneCMBqT09NWCa1lmXfUCl0H0o81c0sG/B1eVgEJOgM0FaRF1d/OuzryByIWQCVqSsb2evXj8o56qC3KgGSDCd6sLYzaxPR47O0lRUhHziboTJ++s64GLnchf5mQZDBxvfNo+/PRkd6Y0BGJjLWjfxCqtr72+BSw6Izc9vJSgJOEkdpVTz6C9OPVFVPAqjMNqT9kmV4dodTJ92+iac1oCcW8RFLsy0FNyp5Eg2Xj9KBWaqE42cZVTPls8ohEmJQW3Koz+X/ra9o4Xb9Srrnj9mcN+D10rVD+0JhC+UMH8zzL1qlQ8yGlmB18NbeIUSp1F+5/g4iNTZMyF6IaDIlER6ELG7RGTqgjsuVTYGfteK5Yl2I090gotoWvZTpcypYoFJrb25srIvbZVJ4DrEoHVZlJQNNs3zCaLeVt1dLsE+k2651I/W1rKIPRdgtYdUb09HJBGSZj5FELCElpnOiiqIMmtKTtfzq9t8M5ONPmqdgihtOa+HRLwu1I/F3oXHLPtjfJYLxKUUwCwYNORKXYvxKwq2kil2Oh3STq26DWAbdNpthpRLTQMvoudNGNdWWiBtrf3Qw3t9SEzLR9oWntkia/PEaIHV5WybvtbchPvUVRmnqChwSBleJBwX9pMVSNdMCI+Hj4k0/O87xzlFdvthHRQq3Sf44uemrTfMED7e1aAj0dU/l3SK2VoFRobvlWbL3Yjaa/7G2ZJthfqG0v6gLq1Lq3CT+CZfqh7NCyyZCg5c953neN92rJeSIaDJezMq9+9B10hT3IG3sa4bHyHK5WJaRi66b4O3Eqbf9/u/jrYIHs9RYnWPXubW+gF3bOt5SBXK656X+khy/TD2Wfv1IHtYUZQXMeVNZHSxiaw1/RagURKejMErrY9HFZglqvWZZHuC2if+s1QKa91tfnMIp9JN0avn7cOtAEDeOzwK43weuLCkLmEUkG01WpVG3x9Rm6UjzYXls+OewcC82Dp9xSFTX92FRfFl7rdXoeGBk9/G76GCGZ9kf++tHsDE8/+nfWwfW1TlhXORIuPlUels/6gnt1BGX6gSrFvva/HXXckoiCf2RheJWAF5w50dMRr36c3jwv6EBPb6iBHGsClKXZg7ZeA+kIqtgSHhKN8X/d92Rw/ejZ2wQXn58lKtNGp1d0at0xofpx5Ekn2DxL4qWV4QUf2QfNUdIRr34YtUaumcQ3yL7uZthQMy6idzbyE90VWwLhcDykUgbXj3fbZ3C7mY6KbFH+/HUEZdKlWYFPqlzb0wjLJ43ihHv/3HzB/qKmI2jvjC4yozCbd6BnN82DwhQ7lKbY4KNl4ps/bWVZXMWWQC98UkxCutVyO1pLYiBLNpiuonNjyKeWMa7zrRT72jut1QMH9FAgxfqbke3JR6RMteiAaBndDnSRzfXlUW29+tsxn3xEJtPUu3j0Q+ySGMga8tP6ZDK2Afn0VooH+ex2wYdt08CiNcC+ucLeYeQz1Bzz9OO3R6wfZ7bczT/+89sFUJqaCLl2C5xeKq71GkxHbCbze/tbqu5OzEEXnG6r4oK/rXp0VPwh2zsH5SP641796D1wVz/6d9VB7zp37hStVyFOukoi0xFUe/HXD9R6Ra3QSFuvfFaQaLkioZgiX/344pVa6H22ivs83B1UuHbhyXJORyQUWzgh25N/HFwKt7bPjaofXx1BDTo0pxQVpxStH+gU+PnOxeAcmcL1Af7cGJ1WKJ+O0DLmRIbVcvtWtwueRRsFtQE+EfGWbbiWYjRfkSvYd9vnlUD/7oaB4A+VRaQjWsawE/14YUn2QOsVFcuGarDH64q4wc4ryf4KbRTGJVrg9KPRWRKD6QjyebxlCvSsmTykvpChA3keHXlRcEAUCu2l+95HoB5Y+1RwQCQUc+QbMHB4EE1CsW8IDggGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDDEA8D/AQgoV53xUO5SAAAAAElFTkSuQmCC",FV="/assets/bunchbag-CNFDR8qV.png",BV="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVR4nGNgGAVQoOyWrKLsGv9W2S3hP00x2I5kFQYUUF/PpOSWcJDmlkOxkmv8UZCdcPuVXBLy6WU5kiPywJarucYoKrnFf6a3A5Rd478quSSoMmgH597QCcr9PxAYZDeDaWLN/4HEDKMOMEUKDt2wApSEItrU8599347/7OvX/GdfsIA0DNKzbwfYDGQzQXbgjAKd4DyaOwBkxzBwwPwF/1mnzPjPNmfuf/aZs/+zTp4OFqPYAbpEpgHW/in/WTr6/7PNmPWfpan7P0t7H1iM4jRgiobl+mdhOADkc+b6TqyYbeoMDAeAzCC7HJDD4gB4CLT3gX0PDoX2fpwhQBMHsIPSwKRp4PgHpQN8aYCgA4wTawpNEqs7sGHxuYuOUJoLQGbgMh9kNwM+wL53ewOlDgCZgdcSch3ANnvOf5aWHjAGsenuANaJ0+Cpn3Xi1IEKgV5oCMylvwPYBzoNsNPVARvXku4AkB6qOWDfjv/su7b+Z1+ymLDFIDUgtTB9VHPAPiJDYgPU5zRxwD4yMGUO2JFLuQN25JLtAIaRAABxUf5viBu2OwAAAABJRU5ErkJggg==",zV="/assets/crypto-BEkzKeZV.gif",Cf=()=>v.jsx("div",{children:v.jsxs("div",{className:"cardDiv planCard",children:[v.jsx("p",{children:"Standard Plan"}),v.jsx("div",{className:"trackerDiv",children:v.jsx("h4",{children:"Plan fee : 6$"})})]})}),$V=()=>{const t=bn(),[e,n]=U.useState({}),r=async i=>{const s=su(uu,"Users",i),o=await ZS(s);o.exists()?(console.log("Document data:",e),n(o.data())):console.log("No such document!")};return U.useEffect(()=>{wI(Os,i=>{if(i){const s=i.uid;r(s)}})},[]),v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsxs("div",{className:"profile",children:[v.jsx("div",{className:"signGif",children:v.jsx("img",{src:zV,width:"130px",height:"130px"})}),v.jsxs("div",{className:"profileTitleDiv",children:[v.jsx("h1",{className:"profileTitle",children:"Account Dashboard"}),v.jsx("p",{className:"profileParagraph",children:"manage your account"})]}),v.jsxs("div",{className:"cardsSection",children:[v.jsx("div",{className:"card",children:v.jsxs("div",{className:"card1",children:[v.jsx("div",{className:"profilePic",children:v.jsx("img",{src:jV,width:"70px",height:"70px"})}),v.jsxs("div",{className:"profileDetails",children:[v.jsx("h4",{className:"userName",children:e!==null&&e.userName}),v.jsx("p",{className:"userEmail",children:e!==null&&e.email}),v.jsx("p",{className:"userCountry",children:e!==null&&e.country}),v.jsx("p",{className:"userTel",children:e!==null&&e.phone})]})]})}),v.jsxs("div",{className:"card card2",children:[v.jsx("p",{children:"Progress tracker"}),v.jsx("div",{children:v.jsxs("div",{className:"trackerDiv",children:[v.jsxs("h5",{children:["Id : ",e!==null&&e.userId]}),v.jsxs("div",{className:"blockDiv",children:[v.jsxs("p",{className:"blockCounter",children:[e!==null&&e.creditBalance,v.jsx("span",{className:"credit",children:"Credits"})]}),v.jsx("img",{src:kk,width:"30px",height:"30px"})]})]})})]}),v.jsx("div",{className:"card card3",onClick:()=>{t("/subs")},children:v.jsxs("div",{className:"card3Content",children:[v.jsx("h3",{className:"card3Text",onClick:()=>{t("/subs")},children:"Buy a Plan"}),v.jsx("img",{src:FV,className:"card3Image",width:"50px",height:"50px"})]})}),v.jsxs("div",{className:"card card4",children:[v.jsx("h2",{children:"Active Plans"}),v.jsxs("div",{children:[v.jsx(Cf,{}),v.jsx(Cf,{}),v.jsx(Cf,{})]}),v.jsxs("div",{className:"buttonDiv",children:[" ",v.jsx("button",{className:"moreButton",onClick:()=>{t("/subs")},children:"Buy More GP"})," "]})]})]}),v.jsx("div",{className:"card card3",onClick:()=>{t("/withdrawals")},children:v.jsxs("div",{className:"card3Content",children:[v.jsx("h3",{className:"card3Text",onClick:()=>{t("/withdrawals")},children:"Make a withdrawal"}),v.jsx("img",{src:BV,className:"card3Image"})]})}),v.jsx("div",{className:"card card3",children:v.jsxs("div",{className:"card3Content",children:[v.jsx("h3",{className:"card3Text",children:"How it works"}),v.jsx(Ne,{src:LT,color:"lightblue"})," "]})})]}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},HV="/assets/ltc-Bq9C0A-s.png",WV="/assets/btc-B9PuLlK6.png",qV="/assets/eth-BELrLrY1.png",KV="/assets/bnb-CPaN-SeE.png",GV="/assets/trxlogo-CWQZtsmF.png",QV="/assets/usdtlogo-DMWlymel.png",YV=()=>{const t=bn(),e=$l();return v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsxs("div",{className:"cryptoDiv",children:[v.jsxs("div",{className:"cryptoTitleDiv",children:[v.jsx("h1",{className:"cryptoTitle",children:"Crypto payments"}),v.jsx("p",{className:"cryptoParagraph",children:"select a payment crypto"})]}),v.jsxs("div",{className:"cryptoTable",children:[v.jsxs("div",{className:"rows",children:[v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"ltc",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:HV})}),v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"btc",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:WV})})]}),v.jsxs("div",{className:"rows",children:[v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"bnb",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:KV})}),v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"eth",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:qV})})]}),v.jsxs("div",{className:"rows",children:[v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"trx",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:GV})}),v.jsx("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"usdt",amount:e.state.amount,plan:e.state.plan}})},children:v.jsx("img",{src:QV})})]})]})]}),v.jsx(Nn,{})]})},XV=()=>v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsx(VT,{}),v.jsx(Nn,{})]});var _h={},JV=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(i){t.addRange(i)}),e&&e.focus()}},ZV=JV,S1={"text/plain":"Text","text/html":"Url",default:"Text"},e6="Copy to clipboard: #{key}, Enter";function t6(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function n6(t,e){var n,r,i,s,o,a,u=!1;e||(e={}),n=e.debug||!1;try{i=ZV(),s=document.createRange(),o=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(d){if(d.stopPropagation(),e.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=S1[e.format]||S1.default;window.clipboardData.setData(f,t)}else d.clipboardData.clearData(),d.clipboardData.setData(e.format,t);e.onCopy&&(d.preventDefault(),e.onCopy(d.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),o.addRange(s);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=t6("message"in e?e.message:e6),window.prompt(r,t)}}finally{o&&(typeof o.removeRange=="function"?o.removeRange(s):o.removeAllRanges()),a&&document.body.removeChild(a),i()}return u}var r6=n6;function cm(t){"@babel/helpers - typeof";return cm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cm(t)}Object.defineProperty(_h,"__esModule",{value:!0});_h.CopyToClipboard=void 0;var oc=Ak(U),i6=Ak(r6),s6=["text","onCopy","options","children"];function Ak(t){return t&&t.__esModule?t:{default:t}}function k1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function A1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k1(Object(n),!0).forEach(function(r){Tv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function o6(t,e){if(t==null)return{};var n=a6(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function a6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function l6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u6(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c6(t,e,n){return e&&u6(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function d6(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&dm(t,e)}function dm(t,e){return dm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},dm(t,e)}function h6(t){var e=p6();return function(){var r=Ad(t),i;if(e){var s=Ad(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return f6(this,i)}}function f6(t,e){if(e&&(cm(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ck(t)}function Ck(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p6(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ad(t){return Ad=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ad(t)}function Tv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Pk=function(t){d6(n,t);var e=h6(n);function n(){var r;l6(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Tv(Ck(r),"onClick",function(a){var u=r.props,c=u.text,d=u.onCopy,f=u.children,m=u.options,E=oc.default.Children.only(f),k=(0,i6.default)(c,m);d&&d(c,k),E&&E.props&&typeof E.props.onClick=="function"&&E.props.onClick(a)}),r}return c6(n,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var s=i.children,o=o6(i,s6),a=oc.default.Children.only(s);return oc.default.cloneElement(a,A1(A1({},o),{},{onClick:this.onClick}))}}]),n}(oc.default.PureComponent);_h.CopyToClipboard=Pk;Tv(Pk,"defaultProps",{onCopy:void 0,options:void 0});var m6=_h,hm=m6.CopyToClipboard;hm.CopyToClipboard=hm;var g6=hm;const v6=()=>{const t=$l(),e=bn(),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,a]=U.useState(""),[u,c]=U.useState(""),d=async()=>{console.log("step2");const m=Os.currentUser;if(console.log("check begins"),m!==null){const E=m.uid;console.log("user not null"),console.log(o),a(E);try{console.log(E),await t3(FS(uu,"Receipts"),{userId:E,amount:t.state.amount,plan:t.state.plan,confirmed:!1,date:new Date,receiptUrl:""}).then(k=>{s(k.id),console.log(k.id),console.log(i),ue("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{e("/proof",{state:{plan:t.state.plan,amount:t.state.amount,docId:k.id,type:t.state.cryptoType}})},3e3)})}catch(k){console.log("error"),console.log(k.message),c(`error saving details${k.message}`),ue(`🦄 ${u}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}else console.log("user null"),c("youre not logged in"),ue(`🦄 ${u}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},f=m=>{m==="btc"?r("bc1qj08z7rpnaq9r77mh0kzyphqa2pg95xcxh3e9sf"):m==="ltc"?r("ltc1qscyyf9uz5awsfa3z3v3gdahsfs9wxas4r5hpxv"):m==="bnb"?r("0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793"):m==="trx"||m==="usdt"?r("TDZSuxiYMnrAeEyXxaJF8r2Ey3zV4XPbzs"):m==="eth"&&r("0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793")};return U.useEffect(()=>{f(t.state.cryptoType)}),v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsx("div",{children:v.jsxs("div",{className:"depositDiv",children:[v.jsx("h1",{className:"depositTitle",children:"Deposits"}),v.jsxs("div",{className:"depositCard",children:[v.jsxs("h3",{className:"planName",children:[t.state.plan," Plan**"]}),v.jsxs("p",{className:"planPrice",children:["$",t.state.amount]})]}),v.jsxs("div",{className:"depositAddressCard",children:[v.jsxs("h3",{className:"depositHead",children:["Make a transfer of $",t.state.amount]}),v.jsx("div",{className:"depositCryptoCard",children:v.jsx("p",{className:"depositHead",children:t.state.cryptoType})}),v.jsxs("div",{className:"depositAddress",children:[v.jsx("p",{className:"planAddress",children:"payment Address:"}),v.jsx("p",{className:"address",children:n})]})]}),v.jsx(g6.CopyToClipboard,{text:n,onCopy:()=>{ue("🦄Address has been copied",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},children:v.jsx("button",{className:"copy",children:"Copy Address"})}),v.jsx("button",{className:"continue",onClick:()=>{ue("🦄Deposit is been confirmed",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),d()},children:"Continue"})]})}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},y6=()=>{const[t,e]=U.useState(""),[n,r]=U.useState(0),[i,s]=U.useState(""),[o,a]=U.useState(""),u=$l(),c=bn(),d=async E=>{console.log(i),console.log(`doc Id is: ${u.state.docId}`);const k=su(uu,"Receipts",u.state.docId);try{await e3(k,{receiptUrl:E}),ue("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c("/profile")}catch(C){a(`error saving details${C.message}`),ue(`🦄 ${o}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},f=E=>{e(E.target.files[0])},m=()=>{t||alert("choose an img to submit");const E=fV(_V,`/receipts/${t.name}`),k=dV(E,t);k.on("state_changed",C=>{const b=Math.round(C.bytesTransferred/C.totalBytes*100);r(b)},C=>{ue(`🦄 error uploading ${C.message}`,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},()=>{ue("🦄 img uploaded",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),hV(k.snapshot.ref).then(C=>{s(C),d(C)})})};return v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsxs("div",{className:"central",children:[v.jsx("h1",{className:"payTitle",children:"Payment Information"}),v.jsx("p",{className:"payPara",children:"Submit payment information/receipts"}),v.jsxs("div",{className:"imgDiv",children:[v.jsx("p",{children:"choose an image"}),v.jsx("input",{type:"file",onChange:f,className:"file",accept:"image/*"}),v.jsxs("p",{children:[n,"%"]})]}),v.jsx("div",{className:"submitDiv",children:v.jsx("button",{className:"submitBtn",onClick:m,children:"Submit info"})})]}),v.jsx(Nn,{}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},_6=()=>{const[t,e]=U.useState({}),n=bn(),r=async s=>{const o=su(uu,"Users",s),a=await ZS(o);a.exists()?e(a.data()):console.log("No such document!")};U.useEffect(()=>{wI(Os,s=>{if(s){const o=s.uid;r(o)}})},[]);const i=async s=>{s.preventDefault(),ue("🦄 payment is being processed",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{n("/profile")},4e3)};return v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsx("div",{children:v.jsxs("div",{className:"depositDiv",children:[v.jsx("h1",{className:"depositTitle",children:"Withdrawals"}),v.jsxs("div",{className:"depositCard",children:[v.jsx("h3",{className:"balanceTitle",children:"**Credit Balance**"}),v.jsxs("div",{className:"balanceBlock",children:[v.jsxs("p",{className:"balanceAmount",children:[t!==null&&t.creditBalance,"Credits"]}),v.jsx("img",{src:kk,width:"30px",height:"30px"})]})]}),v.jsxs("div",{className:"depositAddressCard",children:[v.jsx("div",{className:"depositCryptoCard"}),v.jsx("div",{className:"depositAddress",children:v.jsxs("div",{className:"inputDiv",children:[v.jsx("input",{className:"inputBox",type:"text",placeholder:"enter crypto name"}),v.jsx("input",{className:"inputBox",type:"text",placeholder:"enter crypto address"})]})})]}),v.jsx("button",{className:"continue",onClick:i,children:"Continue"})]})}),v.jsx($i,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),v.jsx(Nn,{})]})},w6=()=>v.jsxs(v.Fragment,{children:[v.jsx(xn,{}),v.jsxs("div",{className:"workDiv",children:[v.jsx("h1",{className:"title",children:"How it works"}),v.jsx(MT,{}),v.jsxs("div",{className:"tutorialDiv",children:[v.jsxs("div",{className:"item",children:[v.jsx(Ne,{icon:Ft,size:"120px"}),v.jsx("p",{className:"itemText",children:"Create an account"})]}),v.jsxs("div",{className:"item",children:[v.jsx(Ne,{icon:Ft,size:"30px"}),v.jsx("p",{className:"itemText",children:"Make a deposit"})]}),v.jsxs("div",{className:"item",children:[v.jsx(Ne,{icon:Ft}),v.jsx("p",{className:"itemText",children:"Choose a sub"})]}),v.jsxs("div",{className:"item",children:[v.jsx(Ne,{icon:Ft}),v.jsx("p",{className:"itemText",children:"Start gaining"})]})]})]}),v.jsx(Nn,{})]}),E6=NR([{path:"/",element:v.jsx(rx,{})},{path:"signup",element:v.jsx(NV,{})},{path:"login",element:v.jsx(DV,{})},{path:"forgot",element:v.jsx(MV,{})},{path:"update",element:v.jsx(UV,{})},{path:"profile",element:v.jsx($V,{})},{path:"subs",element:v.jsx(XV,{})},{path:"cryptoselect",element:v.jsx(YV,{})},{path:"deposit",element:v.jsx(v6,{})},{path:"proof",element:v.jsx(y6,{})},{path:"withdrawals",element:v.jsx(_6,{})},{path:"works",element:v.jsx(w6,{})}]);Pf.createRoot(document.getElementById("root")).render(v.jsx(Ce.StrictMode,{children:v.jsx(BR,{router:E6})}));
