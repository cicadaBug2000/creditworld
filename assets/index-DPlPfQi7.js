function M1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function km(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j1={exports:{}},Ud={},V1={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=Symbol.for("react.element"),lC=Symbol.for("react.portal"),uC=Symbol.for("react.fragment"),cC=Symbol.for("react.strict_mode"),dC=Symbol.for("react.profiler"),hC=Symbol.for("react.provider"),fC=Symbol.for("react.context"),pC=Symbol.for("react.forward_ref"),mC=Symbol.for("react.suspense"),gC=Symbol.for("react.memo"),vC=Symbol.for("react.lazy"),cy=Symbol.iterator;function yC(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var U1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F1=Object.assign,B1={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=B1,this.updater=n||U1}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z1(){}z1.prototype=Yo.prototype;function Cm(t,e,n){this.props=t,this.context=e,this.refs=B1,this.updater=n||U1}var Rm=Cm.prototype=new z1;Rm.constructor=Cm;F1(Rm,Yo.prototype);Rm.isPureReactComponent=!0;var dy=Array.isArray,$1=Object.prototype.hasOwnProperty,Am={current:null},H1={key:!0,ref:!0,__self:!0,__source:!0};function W1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$1.call(e,r)&&!H1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xl,type:t,key:s,ref:o,props:i,_owner:Am.current}}function _C(t,e){return{$$typeof:Xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xl}function wC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hy=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wC(""+t.key):e.toString(36)}function vc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xl:case lC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,dy(i)?(n="",t!=null&&(n=t.replace(hy,"$&/")+"/"),vc(i,e,n,"",function(c){return c})):i!=null&&(Pm(i)&&(i=_C(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+qh(s,a);o+=vc(s,e,n,u,i)}else if(u=yC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+qh(s,a++),o+=vc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lu(t,e,n){if(t==null)return t;var r=[],i=0;return vc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},yc={transition:null},TC={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:yc,ReactCurrentOwner:Am};function q1(){throw Error("act(...) is not supported in production builds of React.")}Te.Children={map:Lu,forEach:function(t,e,n){Lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lu(t,function(){e++}),e},toArray:function(t){return Lu(t,function(e){return e})||[]},only:function(t){if(!Pm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Te.Component=Yo;Te.Fragment=uC;Te.Profiler=dC;Te.PureComponent=Cm;Te.StrictMode=cC;Te.Suspense=mC;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TC;Te.act=q1;Te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)$1.call(e,u)&&!H1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xl,type:t.type,key:i,ref:s,props:r,_owner:o}};Te.createContext=function(t){return t={$$typeof:fC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hC,_context:t},t.Consumer=t};Te.createElement=W1;Te.createFactory=function(t){var e=W1.bind(null,t);return e.type=t,e};Te.createRef=function(){return{current:null}};Te.forwardRef=function(t){return{$$typeof:pC,render:t}};Te.isValidElement=Pm;Te.lazy=function(t){return{$$typeof:vC,_payload:{_status:-1,_result:t},_init:EC}};Te.memo=function(t,e){return{$$typeof:gC,type:t,compare:e===void 0?null:e}};Te.startTransition=function(t){var e=yc.transition;yc.transition={};try{t()}finally{yc.transition=e}};Te.unstable_act=q1;Te.useCallback=function(t,e){return nn.current.useCallback(t,e)};Te.useContext=function(t){return nn.current.useContext(t)};Te.useDebugValue=function(){};Te.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Te.useEffect=function(t,e){return nn.current.useEffect(t,e)};Te.useId=function(){return nn.current.useId()};Te.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Te.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Te.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Te.useMemo=function(t,e){return nn.current.useMemo(t,e)};Te.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Te.useRef=function(t){return nn.current.useRef(t)};Te.useState=function(t){return nn.current.useState(t)};Te.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Te.useTransition=function(){return nn.current.useTransition()};Te.version="18.3.1";V1.exports=Te;var V=V1.exports;const De=km(V),IC=M1({__proto__:null,default:De},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SC=V,kC=Symbol.for("react.element"),CC=Symbol.for("react.fragment"),RC=Object.prototype.hasOwnProperty,AC=SC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PC={key:!0,ref:!0,__self:!0,__source:!0};function K1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RC.call(e,r)&&!PC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kC,type:t,key:s,ref:o,props:i,_owner:AC.current}}Ud.Fragment=CC;Ud.jsx=K1;Ud.jsxs=K1;j1.exports=Ud;var g=j1.exports,zf={},G1={exports:{}},Rn={},Q1={exports:{}},Y1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ee){var ie=W.length;W.push(ee);e:for(;0<ie;){var me=ie-1>>>1,ce=W[me];if(0<i(ce,ee))W[me]=ee,W[ie]=ce,ie=me;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ee=W[0],ie=W.pop();if(ie!==ee){W[0]=ie;e:for(var me=0,ce=W.length,ve=ce>>>1;me<ve;){var xe=2*(me+1)-1,je=W[xe],ze=xe+1,At=W[ze];if(0>i(je,ie))ze<ce&&0>i(At,je)?(W[me]=At,W[ze]=ie,me=ze):(W[me]=je,W[xe]=ie,me=xe);else if(ze<ce&&0>i(At,ie))W[me]=At,W[ze]=ie,me=ze;else break e}}return ee}function i(W,ee){var ie=W.sortIndex-ee.sortIndex;return ie!==0?ie:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,E=!1,k=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=W)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function D(W){if(C=!1,I(W),!k)if(n(u)!==null)k=!0,Yt(F);else{var ee=n(c);ee!==null&&ge(D,ee.startTime-W)}}function F(W,ee){k=!1,C&&(C=!1,S(v),v=-1),E=!0;var ie=p;try{for(I(ee),f=n(u);f!==null&&(!(f.expirationTime>ee)||W&&!b());){var me=f.callback;if(typeof me=="function"){f.callback=null,p=f.priorityLevel;var ce=me(f.expirationTime<=ee);ee=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(u)&&r(u),I(ee)}else r(u);f=n(u)}if(f!==null)var ve=!0;else{var xe=n(c);xe!==null&&ge(D,xe.startTime-ee),ve=!1}return ve}finally{f=null,p=ie,E=!1}}var x=!1,T=null,v=-1,_=5,R=-1;function b(){return!(t.unstable_now()-R<_)}function O(){if(T!==null){var W=t.unstable_now();R=W;var ee=!0;try{ee=T(!0,W)}finally{ee?A():(x=!1,T=null)}}else x=!1}var A;if(typeof y=="function")A=function(){y(O)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ut=ye.port2;ye.port1.onmessage=O,A=function(){ut.postMessage(null)}}else A=function(){P(O,0)};function Yt(W){T=W,x||(x=!0,A())}function ge(W,ee){v=P(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,Yt(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var ie=p;p=ee;try{return W()}finally{p=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=p;p=W;try{return ee()}finally{p=ie}},t.unstable_scheduleCallback=function(W,ee,ie){var me=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?me+ie:me):ie=me,W){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ie+ce,W={id:d++,callback:ee,priorityLevel:W,startTime:ie,expirationTime:ce,sortIndex:-1},ie>me?(W.sortIndex=ie,e(c,W),n(u)===null&&W===n(c)&&(C?(S(v),v=-1):C=!0,ge(D,ie-me))):(W.sortIndex=ce,e(u,W),k||E||(k=!0,Yt(F))),W},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(W){var ee=p;return function(){var ie=p;p=ee;try{return W.apply(this,arguments)}finally{p=ie}}}})(Y1);Q1.exports=Y1;var bC=Q1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xC=V,Cn=bC;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X1=new Set,gl={};function Vs(t,e){Lo(t,e),Lo(t+"Capture",e)}function Lo(t,e){for(gl[t]=e,t=0;t<e.length;t++)X1.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,NC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fy={},py={};function DC(t){return $f.call(py,t)?!0:$f.call(fy,t)?!1:NC.test(t)?py[t]=!0:(fy[t]=!0,!1)}function OC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LC(t,e,n,r){if(e===null||typeof e>"u"||OC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Mt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Mt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Mt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Mt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Mt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Mt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Mt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Mt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Mt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bm=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bm,xm);Mt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bm,xm);Mt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bm,xm);Mt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Mt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Mt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=Mt.hasOwnProperty(e)?Mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LC(e,n,i,r)&&(n=null),r||i===null?DC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yr=xC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mu=Symbol.for("react.element"),ao=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),ew=Symbol.for("react.offscreen"),my=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,Kh;function Ua(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Qh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function MC(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function Kf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case ao:return"Portal";case Hf:return"Profiler";case Dm:return"StrictMode";case Wf:return"Suspense";case qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z1:return(t.displayName||"Context")+".Consumer";case J1:return(t._context.displayName||"Context")+".Provider";case Om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Kf(t.type)||"Memo";case hi:e=t._payload,t=t._init;try{return Kf(t(e))}catch{}}return null}function jC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kf(e);case 8:return e===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VC(t){var e=tw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ju(t){t._valueTracker||(t._valueTracker=VC(t))}function nw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rw(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function Qf(t,e){rw(t,e);var n=ji(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function So(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Fa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function iw(t,e){var n=ji(e.value),r=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vu,ow=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vu=Vu||document.createElement("div"),Vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UC=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){UC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function aw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function lw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FC=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(FC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var np=null,ko=null,Co=null;function wy(t){if(t=eu(t)){if(typeof np!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Hd(e),np(t.stateNode,t.type,e))}}function uw(t){ko?Co?Co.push(t):Co=[t]:ko=t}function cw(){if(ko){var t=ko,e=Co;if(Co=ko=null,wy(t),e)for(t=0;t<e.length;t++)wy(e[t])}}function dw(t,e){return t(e)}function hw(){}var Yh=!1;function fw(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return dw(t,e,n)}finally{Yh=!1,(ko!==null||Co!==null)&&(hw(),cw())}}function yl(t,e){var n=t.stateNode;if(n===null)return null;var r=Hd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var rp=!1;if(Fr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){rp=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{rp=!1}function BC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ja=!1,$c=null,Hc=!1,ip=null,zC={onError:function(t){Ja=!0,$c=t}};function $C(t,e,n,r,i,s,o,a,u){Ja=!1,$c=null,BC.apply(zC,arguments)}function HC(t,e,n,r,i,s,o,a,u){if($C.apply(this,arguments),Ja){if(Ja){var c=$c;Ja=!1,$c=null}else throw Error(H(198));Hc||(Hc=!0,ip=c)}}function Us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ey(t){if(Us(t)!==t)throw Error(H(188))}function WC(t){var e=t.alternate;if(!e){if(e=Us(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ey(i),t;if(s===r)return Ey(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function mw(t){return t=WC(t),t!==null?gw(t):null}function gw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gw(t);if(e!==null)return e;t=t.sibling}return null}var vw=Cn.unstable_scheduleCallback,Ty=Cn.unstable_cancelCallback,qC=Cn.unstable_shouldYield,KC=Cn.unstable_requestPaint,dt=Cn.unstable_now,GC=Cn.unstable_getCurrentPriorityLevel,jm=Cn.unstable_ImmediatePriority,yw=Cn.unstable_UserBlockingPriority,Wc=Cn.unstable_NormalPriority,QC=Cn.unstable_LowPriority,_w=Cn.unstable_IdlePriority,Fd=null,cr=null;function YC(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Fd,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:ZC,XC=Math.log,JC=Math.LN2;function ZC(t){return t>>>=0,t===0?32:31-(XC(t)/JC|0)|0}var Uu=64,Fu=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ba(a):(s&=o,s!==0&&(r=Ba(s)))}else o=n&~i,o!==0?r=Ba(o):s!==0&&(r=Ba(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kn(e),i=1<<n,r|=t[n],e&=~i;return r}function eR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=eR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ww(){var t=Uu;return Uu<<=1,!(Uu&4194240)&&(Uu=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function nR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Me=0;function Ew(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tw,Um,Iw,Sw,kw,op=!1,Bu=[],ki=null,Ci=null,Ri=null,_l=new Map,wl=new Map,pi=[],rR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iy(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":_l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(e.pointerId)}}function Aa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eu(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iR(t,e,n,r,i){switch(e){case"focusin":return ki=Aa(ki,t,e,n,r,i),!0;case"dragenter":return Ci=Aa(Ci,t,e,n,r,i),!0;case"mouseover":return Ri=Aa(Ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _l.set(s,Aa(_l.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wl.set(s,Aa(wl.get(s)||null,t,e,n,r,i)),!0}return!1}function Cw(t){var e=us(t.target);if(e!==null){var n=Us(e);if(n!==null){if(e=n.tag,e===13){if(e=pw(n),e!==null){t.blockedOn=e,kw(t.priority,function(){Iw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tp=r,n.target.dispatchEvent(r),tp=null}else return e=eu(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Sy(t,e,n){_c(t)&&n.delete(e)}function sR(){op=!1,ki!==null&&_c(ki)&&(ki=null),Ci!==null&&_c(Ci)&&(Ci=null),Ri!==null&&_c(Ri)&&(Ri=null),_l.forEach(Sy),wl.forEach(Sy)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,sR)))}function El(t){function e(i){return Pa(i,t)}if(0<Bu.length){Pa(Bu[0],t);for(var n=1;n<Bu.length;n++){var r=Bu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ki!==null&&Pa(ki,t),Ci!==null&&Pa(Ci,t),Ri!==null&&Pa(Ri,t),_l.forEach(e),wl.forEach(e),n=0;n<pi.length;n++)r=pi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pi.length&&(n=pi[0],n.blockedOn===null);)Cw(n),n.blockedOn===null&&pi.shift()}var Ro=Yr.ReactCurrentBatchConfig,Kc=!0;function oR(t,e,n,r){var i=Me,s=Ro.transition;Ro.transition=null;try{Me=1,Fm(t,e,n,r)}finally{Me=i,Ro.transition=s}}function aR(t,e,n,r){var i=Me,s=Ro.transition;Ro.transition=null;try{Me=4,Fm(t,e,n,r)}finally{Me=i,Ro.transition=s}}function Fm(t,e,n,r){if(Kc){var i=ap(t,e,n,r);if(i===null)lf(t,e,r,Gc,n),Iy(t,r);else if(iR(i,t,e,n,r))r.stopPropagation();else if(Iy(t,r),e&4&&-1<rR.indexOf(t)){for(;i!==null;){var s=eu(i);if(s!==null&&Tw(s),s=ap(t,e,n,r),s===null&&lf(t,e,r,Gc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var Gc=null;function ap(t,e,n,r){if(Gc=null,t=Mm(r),t=us(t),t!==null)if(e=Us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gc=t,null}function Rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GC()){case jm:return 1;case yw:return 4;case Wc:case QC:return 16;case _w:return 536870912;default:return 16}default:return 16}}var Ei=null,Bm=null,wc=null;function Aw(){if(wc)return wc;var t,e=Bm,n=e.length,r,i="value"in Ei?Ei.value:Ei.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wc=i.slice(t,1<r?1-r:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zu(){return!0}function ky(){return!1}function An(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zu:ky,this.isPropagationStopped=ky,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),e}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=An(Xo),Zl=rt({},Xo,{view:0,detail:0}),lR=An(Zl),Jh,Zh,ba,Bd=rt({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(Jh=t.screenX-ba.screenX,Zh=t.screenY-ba.screenY):Zh=Jh=0,ba=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),Cy=An(Bd),uR=rt({},Bd,{dataTransfer:0}),cR=An(uR),dR=rt({},Zl,{relatedTarget:0}),ef=An(dR),hR=rt({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),fR=An(hR),pR=rt({},Xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mR=An(pR),gR=rt({},Xo,{data:0}),Ry=An(gR),vR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_R={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_R[t])?!!e[t]:!1}function $m(){return wR}var ER=rt({},Zl,{key:function(t){if(t.key){var e=vR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TR=An(ER),IR=rt({},Bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=An(IR),SR=rt({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),kR=An(SR),CR=rt({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),RR=An(CR),AR=rt({},Bd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PR=An(AR),bR=[9,13,27,32],Hm=Fr&&"CompositionEvent"in window,Za=null;Fr&&"documentMode"in document&&(Za=document.documentMode);var xR=Fr&&"TextEvent"in window&&!Za,Pw=Fr&&(!Hm||Za&&8<Za&&11>=Za),Py=" ",by=!1;function bw(t,e){switch(t){case"keyup":return bR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function NR(t,e){switch(t){case"compositionend":return xw(e);case"keypress":return e.which!==32?null:(by=!0,Py);case"textInput":return t=e.data,t===Py&&by?null:t;default:return null}}function DR(t,e){if(uo)return t==="compositionend"||!Hm&&bw(t,e)?(t=Aw(),wc=Bm=Ei=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pw&&e.locale!=="ko"?null:e.data;default:return null}}var OR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OR[t.type]:e==="textarea"}function Nw(t,e,n,r){uw(r),e=Qc(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var el=null,Tl=null;function LR(t){$w(t,0)}function zd(t){var e=fo(t);if(nw(e))return t}function MR(t,e){if(t==="change")return e}var Dw=!1;if(Fr){var tf;if(Fr){var nf="oninput"in document;if(!nf){var Ny=document.createElement("div");Ny.setAttribute("oninput","return;"),nf=typeof Ny.oninput=="function"}tf=nf}else tf=!1;Dw=tf&&(!document.documentMode||9<document.documentMode)}function Dy(){el&&(el.detachEvent("onpropertychange",Ow),Tl=el=null)}function Ow(t){if(t.propertyName==="value"&&zd(Tl)){var e=[];Nw(e,Tl,t,Mm(t)),fw(LR,e)}}function jR(t,e,n){t==="focusin"?(Dy(),el=e,Tl=n,el.attachEvent("onpropertychange",Ow)):t==="focusout"&&Dy()}function VR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zd(Tl)}function UR(t,e){if(t==="click")return zd(e)}function FR(t,e){if(t==="input"||t==="change")return zd(e)}function BR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:BR;function Il(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!Yn(t[i],e[i]))return!1}return!0}function Oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ly(t,e){var n=Oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oy(n)}}function Lw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mw(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zR(t){var e=Mw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lw(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ly(n,s);var o=Ly(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $R=Fr&&"documentMode"in document&&11>=document.documentMode,co=null,lp=null,tl=null,up=!1;function My(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||co==null||co!==zc(r)||(r=co,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Il(tl,r)||(tl=r,r=Qc(lp,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=co)))}function $u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},rf={},jw={};Fr&&(jw=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function $d(t){if(rf[t])return rf[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jw)return rf[t]=e[n];return t}var Vw=$d("animationend"),Uw=$d("animationiteration"),Fw=$d("animationstart"),Bw=$d("transitionend"),zw=new Map,jy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){zw.set(t,e),Vs(e,[t])}for(var sf=0;sf<jy.length;sf++){var of=jy[sf],HR=of.toLowerCase(),WR=of[0].toUpperCase()+of.slice(1);qi(HR,"on"+WR)}qi(Vw,"onAnimationEnd");qi(Uw,"onAnimationIteration");qi(Fw,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Bw,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qR=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Vy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HC(r,e,void 0,t),t.currentTarget=null}function $w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Vy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Vy(i,a,c),s=u}}}if(Hc)throw t=ip,Hc=!1,ip=null,t}function We(t,e){var n=e[pp];n===void 0&&(n=e[pp]=new Set);var r=t+"__bubble";n.has(r)||(Hw(e,t,2,!1),n.add(r))}function af(t,e,n){var r=0;e&&(r|=4),Hw(n,t,r,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Sl(t){if(!t[Hu]){t[Hu]=!0,X1.forEach(function(n){n!=="selectionchange"&&(qR.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,af("selectionchange",!1,e))}}function Hw(t,e,n,r){switch(Rw(e)){case 1:var i=oR;break;case 4:i=aR;break;default:i=Fm}n=i.bind(null,e,n,t),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fw(function(){var c=s,d=Mm(n),f=[];e:{var p=zw.get(t);if(p!==void 0){var E=zm,k=t;switch(t){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":E=TR;break;case"focusin":k="focus",E=ef;break;case"focusout":k="blur",E=ef;break;case"beforeblur":case"afterblur":E=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=cR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=kR;break;case Vw:case Uw:case Fw:E=fR;break;case Bw:E=RR;break;case"scroll":E=lR;break;case"wheel":E=PR;break;case"copy":case"cut":case"paste":E=mR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ay}var C=(e&4)!==0,P=!C&&t==="scroll",S=C?p!==null?p+"Capture":null:p;C=[];for(var y=c,I;y!==null;){I=y;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,S!==null&&(D=yl(y,S),D!=null&&C.push(kl(y,D,I)))),P)break;y=y.return}0<C.length&&(p=new E(p,k,null,n,d),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",p&&n!==tp&&(k=n.relatedTarget||n.fromElement)&&(us(k)||k[Br]))break e;if((E||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=c,k=k?us(k):null,k!==null&&(P=Us(k),k!==P||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=c),E!==k)){if(C=Cy,D="onMouseLeave",S="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(C=Ay,D="onPointerLeave",S="onPointerEnter",y="pointer"),P=E==null?p:fo(E),I=k==null?p:fo(k),p=new C(D,y+"leave",E,n,d),p.target=P,p.relatedTarget=I,D=null,us(d)===c&&(C=new C(S,y+"enter",k,n,d),C.target=I,C.relatedTarget=P,D=C),P=D,E&&k)t:{for(C=E,S=k,y=0,I=C;I;I=eo(I))y++;for(I=0,D=S;D;D=eo(D))I++;for(;0<y-I;)C=eo(C),y--;for(;0<I-y;)S=eo(S),I--;for(;y--;){if(C===S||S!==null&&C===S.alternate)break t;C=eo(C),S=eo(S)}C=null}else C=null;E!==null&&Uy(f,p,E,C,!1),k!==null&&P!==null&&Uy(f,P,k,C,!0)}}e:{if(p=c?fo(c):window,E=p.nodeName&&p.nodeName.toLowerCase(),E==="select"||E==="input"&&p.type==="file")var F=MR;else if(xy(p))if(Dw)F=FR;else{F=VR;var x=jR}else(E=p.nodeName)&&E.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=UR);if(F&&(F=F(t,c))){Nw(f,F,n,d);break e}x&&x(t,p,c),t==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&Yf(p,"number",p.value)}switch(x=c?fo(c):window,t){case"focusin":(xy(x)||x.contentEditable==="true")&&(co=x,lp=c,tl=null);break;case"focusout":tl=lp=co=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,My(f,n,d);break;case"selectionchange":if($R)break;case"keydown":case"keyup":My(f,n,d)}var T;if(Hm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else uo?bw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Pw&&n.locale!=="ko"&&(uo||v!=="onCompositionStart"?v==="onCompositionEnd"&&uo&&(T=Aw()):(Ei=d,Bm="value"in Ei?Ei.value:Ei.textContent,uo=!0)),x=Qc(c,v),0<x.length&&(v=new Ry(v,t,null,n,d),f.push({event:v,listeners:x}),T?v.data=T:(T=xw(n),T!==null&&(v.data=T)))),(T=xR?NR(t,n):DR(t,n))&&(c=Qc(c,"onBeforeInput"),0<c.length&&(d=new Ry("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}$w(f,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yl(t,n),s!=null&&r.unshift(kl(t,s,i)),s=yl(t,e),s!=null&&r.push(kl(t,s,i))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=yl(n,s),u!=null&&o.unshift(kl(n,u,a))):i||(u=yl(n,s),u!=null&&o.push(kl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KR=/\r\n?/g,GR=/\u0000|\uFFFD/g;function Fy(t){return(typeof t=="string"?t:""+t).replace(KR,`
`).replace(GR,"")}function Wu(t,e,n){if(e=Fy(e),Fy(t)!==e&&n)throw Error(H(425))}function Yc(){}var cp=null,dp=null;function hp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,QR=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,YR=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(t){return By.resolve(null).then(t).catch(XR)}:fp;function XR(t){setTimeout(function(){throw t})}function uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),El(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);El(e)}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),or="__reactFiber$"+Jo,Cl="__reactProps$"+Jo,Br="__reactContainer$"+Jo,pp="__reactEvents$"+Jo,JR="__reactListeners$"+Jo,ZR="__reactHandles$"+Jo;function us(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Br]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zy(t);t!==null;){if(n=t[or])return n;t=zy(t)}return e}t=n,n=t.parentNode}return null}function eu(t){return t=t[or]||t[Br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Hd(t){return t[Cl]||null}var mp=[],po=-1;function Ki(t){return{current:t}}function Ge(t){0>po||(t.current=mp[po],mp[po]=null,po--)}function Fe(t,e){po++,mp[po]=t.current,t.current=e}var Vi={},Gt=Ki(Vi),hn=Ki(!1),Ts=Vi;function Mo(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function fn(t){return t=t.childContextTypes,t!=null}function Xc(){Ge(hn),Ge(Gt)}function $y(t,e,n){if(Gt.current!==Vi)throw Error(H(168));Fe(Gt,e),Fe(hn,n)}function Ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,jC(t)||"Unknown",i));return rt({},n,r)}function Jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,Ts=Gt.current,Fe(Gt,t),Fe(hn,hn.current),!0}function Hy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Ww(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,Ge(hn),Ge(Gt),Fe(Gt,t)):Ge(hn),Fe(hn,n)}var br=null,Wd=!1,cf=!1;function qw(t){br===null?br=[t]:br.push(t)}function eA(t){Wd=!0,qw(t)}function Gi(){if(!cf&&br!==null){cf=!0;var t=0,e=Me;try{var n=br;for(Me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}br=null,Wd=!1}catch(i){throw br!==null&&(br=br.slice(t+1)),vw(jm,Gi),i}finally{Me=e,cf=!1}}return null}var mo=[],go=0,Zc=null,ed=0,Nn=[],Dn=0,Is=null,xr=1,Nr="";function ss(t,e){mo[go++]=ed,mo[go++]=Zc,Zc=t,ed=e}function Kw(t,e,n){Nn[Dn++]=xr,Nn[Dn++]=Nr,Nn[Dn++]=Is,Is=t;var r=xr;t=Nr;var i=32-Kn(r)-1;r&=~(1<<i),n+=1;var s=32-Kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xr=1<<32-Kn(e)+i|n<<i|r,Nr=s+t}else xr=1<<s|n<<i|r,Nr=t}function qm(t){t.return!==null&&(ss(t,1),Kw(t,1,0))}function Km(t){for(;t===Zc;)Zc=mo[--go],mo[go]=null,ed=mo[--go],mo[go]=null;for(;t===Is;)Is=Nn[--Dn],Nn[Dn]=null,Nr=Nn[--Dn],Nn[Dn]=null,xr=Nn[--Dn],Nn[Dn]=null}var kn=null,En=null,Xe=!1,Wn=null;function Gw(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,En=Ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:xr,overflow:Nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,En=null,!0):!1;default:return!1}}function gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vp(t){if(Xe){var e=En;if(e){var n=e;if(!Wy(t,e)){if(gp(t))throw Error(H(418));e=Ai(n.nextSibling);var r=kn;e&&Wy(t,e)?Gw(r,n):(t.flags=t.flags&-4097|2,Xe=!1,kn=t)}}else{if(gp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Xe=!1,kn=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function qu(t){if(t!==kn)return!1;if(!Xe)return qy(t),Xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hp(t.type,t.memoizedProps)),e&&(e=En)){if(gp(t))throw Qw(),Error(H(418));for(;e;)Gw(t,e),e=Ai(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=Ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=kn?Ai(t.stateNode.nextSibling):null;return!0}function Qw(){for(var t=En;t;)t=Ai(t.nextSibling)}function jo(){En=kn=null,Xe=!1}function Gm(t){Wn===null?Wn=[t]:Wn.push(t)}var tA=Yr.ReactCurrentBatchConfig;function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Ku(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ky(t){var e=t._init;return e(t._payload)}function Yw(t){function e(S,y){if(t){var I=S.deletions;I===null?(S.deletions=[y],S.flags|=16):I.push(y)}}function n(S,y){if(!t)return null;for(;y!==null;)e(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=Ni(S,y),S.index=0,S.sibling=null,S}function s(S,y,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<y?(S.flags|=2,y):I):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,y,I,D){return y===null||y.tag!==6?(y=vf(I,S.mode,D),y.return=S,y):(y=i(y,I),y.return=S,y)}function u(S,y,I,D){var F=I.type;return F===lo?d(S,y,I.props.children,D,I.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hi&&Ky(F)===y.type)?(D=i(y,I.props),D.ref=xa(S,y,I),D.return=S,D):(D=Ac(I.type,I.key,I.props,null,S.mode,D),D.ref=xa(S,y,I),D.return=S,D)}function c(S,y,I,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=yf(I,S.mode,D),y.return=S,y):(y=i(y,I.children||[]),y.return=S,y)}function d(S,y,I,D,F){return y===null||y.tag!==7?(y=ys(I,S.mode,D,F),y.return=S,y):(y=i(y,I),y.return=S,y)}function f(S,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=vf(""+y,S.mode,I),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mu:return I=Ac(y.type,y.key,y.props,null,S.mode,I),I.ref=xa(S,null,y),I.return=S,I;case ao:return y=yf(y,S.mode,I),y.return=S,y;case hi:var D=y._init;return f(S,D(y._payload),I)}if(Fa(y)||Ca(y))return y=ys(y,S.mode,I,null),y.return=S,y;Ku(S,y)}return null}function p(S,y,I,D){var F=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(S,y,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Mu:return I.key===F?u(S,y,I,D):null;case ao:return I.key===F?c(S,y,I,D):null;case hi:return F=I._init,p(S,y,F(I._payload),D)}if(Fa(I)||Ca(I))return F!==null?null:d(S,y,I,D,null);Ku(S,I)}return null}function E(S,y,I,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(I)||null,a(y,S,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Mu:return S=S.get(D.key===null?I:D.key)||null,u(y,S,D,F);case ao:return S=S.get(D.key===null?I:D.key)||null,c(y,S,D,F);case hi:var x=D._init;return E(S,y,I,x(D._payload),F)}if(Fa(D)||Ca(D))return S=S.get(I)||null,d(y,S,D,F,null);Ku(y,D)}return null}function k(S,y,I,D){for(var F=null,x=null,T=y,v=y=0,_=null;T!==null&&v<I.length;v++){T.index>v?(_=T,T=null):_=T.sibling;var R=p(S,T,I[v],D);if(R===null){T===null&&(T=_);break}t&&T&&R.alternate===null&&e(S,T),y=s(R,y,v),x===null?F=R:x.sibling=R,x=R,T=_}if(v===I.length)return n(S,T),Xe&&ss(S,v),F;if(T===null){for(;v<I.length;v++)T=f(S,I[v],D),T!==null&&(y=s(T,y,v),x===null?F=T:x.sibling=T,x=T);return Xe&&ss(S,v),F}for(T=r(S,T);v<I.length;v++)_=E(T,S,v,I[v],D),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?v:_.key),y=s(_,y,v),x===null?F=_:x.sibling=_,x=_);return t&&T.forEach(function(b){return e(S,b)}),Xe&&ss(S,v),F}function C(S,y,I,D){var F=Ca(I);if(typeof F!="function")throw Error(H(150));if(I=F.call(I),I==null)throw Error(H(151));for(var x=F=null,T=y,v=y=0,_=null,R=I.next();T!==null&&!R.done;v++,R=I.next()){T.index>v?(_=T,T=null):_=T.sibling;var b=p(S,T,R.value,D);if(b===null){T===null&&(T=_);break}t&&T&&b.alternate===null&&e(S,T),y=s(b,y,v),x===null?F=b:x.sibling=b,x=b,T=_}if(R.done)return n(S,T),Xe&&ss(S,v),F;if(T===null){for(;!R.done;v++,R=I.next())R=f(S,R.value,D),R!==null&&(y=s(R,y,v),x===null?F=R:x.sibling=R,x=R);return Xe&&ss(S,v),F}for(T=r(S,T);!R.done;v++,R=I.next())R=E(T,S,v,R.value,D),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?v:R.key),y=s(R,y,v),x===null?F=R:x.sibling=R,x=R);return t&&T.forEach(function(O){return e(S,O)}),Xe&&ss(S,v),F}function P(S,y,I,D){if(typeof I=="object"&&I!==null&&I.type===lo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Mu:e:{for(var F=I.key,x=y;x!==null;){if(x.key===F){if(F=I.type,F===lo){if(x.tag===7){n(S,x.sibling),y=i(x,I.props.children),y.return=S,S=y;break e}}else if(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hi&&Ky(F)===x.type){n(S,x.sibling),y=i(x,I.props),y.ref=xa(S,x,I),y.return=S,S=y;break e}n(S,x);break}else e(S,x);x=x.sibling}I.type===lo?(y=ys(I.props.children,S.mode,D,I.key),y.return=S,S=y):(D=Ac(I.type,I.key,I.props,null,S.mode,D),D.ref=xa(S,y,I),D.return=S,S=D)}return o(S);case ao:e:{for(x=I.key;y!==null;){if(y.key===x)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(S,y.sibling),y=i(y,I.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else e(S,y);y=y.sibling}y=yf(I,S.mode,D),y.return=S,S=y}return o(S);case hi:return x=I._init,P(S,y,x(I._payload),D)}if(Fa(I))return k(S,y,I,D);if(Ca(I))return C(S,y,I,D);Ku(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,I),y.return=S,S=y):(n(S,y),y=vf(I,S.mode,D),y.return=S,S=y),o(S)):n(S,y)}return P}var Vo=Yw(!0),Xw=Yw(!1),td=Ki(null),nd=null,vo=null,Qm=null;function Ym(){Qm=vo=nd=null}function Xm(t){var e=td.current;Ge(td),t._currentValue=e}function yp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ao(t,e){nd=t,Qm=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(nd===null)throw Error(H(308));vo=t,nd.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var cs=null;function Jm(t){cs===null?cs=[t]:cs.push(t)}function Jw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,zr(t,r)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fi=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,zr(t,n)}function Tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}function Gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rd(t,e,n,r){var i=t.updateQueue;fi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,E=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=t,C=a;switch(p=e,E=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){f=k.call(E,f,p);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,p=typeof k=="function"?k.call(E,f,p):k,p==null)break e;f=rt({},f,p);break e;case 2:fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else E={eventTime:E,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=f}}function Qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var tu={},dr=Ki(tu),Rl=Ki(tu),Al=Ki(tu);function ds(t){if(t===tu)throw Error(H(174));return t}function eg(t,e){switch(Fe(Al,e),Fe(Rl,t),Fe(dr,tu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}Ge(dr),Fe(dr,e)}function Uo(){Ge(dr),Ge(Rl),Ge(Al)}function eE(t){ds(Al.current);var e=ds(dr.current),n=Jf(e,t.type);e!==n&&(Fe(Rl,t),Fe(dr,n))}function tg(t){Rl.current===t&&(Ge(dr),Ge(Rl))}var tt=Ki(0);function id(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function ng(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var Ic=Yr.ReactCurrentDispatcher,hf=Yr.ReactCurrentBatchConfig,Ss=0,nt=null,wt=null,Ct=null,sd=!1,nl=!1,Pl=0,nA=0;function zt(){throw Error(H(321))}function rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function ig(t,e,n,r,i,s){if(Ss=s,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=t===null||t.memoizedState===null?oA:aA,t=n(r,i),nl){s=0;do{if(nl=!1,Pl=0,25<=s)throw Error(H(301));s+=1,Ct=wt=null,e.updateQueue=null,Ic.current=lA,t=n(r,i)}while(nl)}if(Ic.current=od,e=wt!==null&&wt.next!==null,Ss=0,Ct=wt=nt=null,sd=!1,e)throw Error(H(300));return t}function sg(){var t=Pl!==0;return Pl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?nt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function jn(){if(wt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Ct===null?nt.memoizedState:Ct.next;if(e!==null)Ct=e,wt=t;else{if(t===null)throw Error(H(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?nt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function bl(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=jn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=wt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Ss&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,nt.lanes|=d,ks|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Yn(r,e.memoizedState)||(dn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,nt.lanes|=s,ks|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=jn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tE(){}function nE(t,e){var n=nt,r=jn(),i=e(),s=!Yn(r.memoizedState,i);if(s&&(r.memoizedState=i,dn=!0),r=r.queue,og(sE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,xl(9,iE.bind(null,n,r,i,e),void 0,null),Rt===null)throw Error(H(349));Ss&30||rE(n,e,i)}return i}function rE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iE(t,e,n,r){e.value=n,e.getSnapshot=r,oE(e)&&aE(t)}function sE(t,e,n){return n(function(){oE(e)&&aE(t)})}function oE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function aE(t){var e=zr(t,1);e!==null&&Gn(e,t,1,-1)}function Yy(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:t},e.queue=t,t=t.dispatch=sA.bind(null,nt,t),[e.memoizedState,t]}function xl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lE(){return jn().memoizedState}function Sc(t,e,n,r){var i=ir();nt.flags|=t,i.memoizedState=xl(1|e,n,void 0,r===void 0?null:r)}function qd(t,e,n,r){var i=jn();r=r===void 0?null:r;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,r!==null&&rg(r,o.deps)){i.memoizedState=xl(e,n,s,r);return}}nt.flags|=t,i.memoizedState=xl(1|e,n,s,r)}function Xy(t,e){return Sc(8390656,8,t,e)}function og(t,e){return qd(2048,8,t,e)}function uE(t,e){return qd(4,2,t,e)}function cE(t,e){return qd(4,4,t,e)}function dE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hE(t,e,n){return n=n!=null?n.concat([t]):null,qd(4,4,dE.bind(null,e,t),n)}function ag(){}function fE(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pE(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mE(t,e,n){return Ss&21?(Yn(n,e)||(n=ww(),nt.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function rA(t,e){var n=Me;Me=n!==0&&4>n?n:4,t(!0);var r=hf.transition;hf.transition={};try{t(!1),e()}finally{Me=n,hf.transition=r}}function gE(){return jn().memoizedState}function iA(t,e,n){var r=xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vE(t))yE(e,n);else if(n=Jw(t,e,n,r),n!==null){var i=tn();Gn(n,t,r,i),_E(n,e,r)}}function sA(t,e,n){var r=xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vE(t))yE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Yn(a,o)){var u=e.interleaved;u===null?(i.next=i,Jm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jw(t,e,i,r),n!==null&&(i=tn(),Gn(n,t,r,i),_E(n,e,r))}}function vE(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function yE(t,e){nl=sd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _E(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vm(t,n)}}var od={readContext:Mn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},oA={readContext:Mn,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,dE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ir();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iA.bind(null,nt,t),[r.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:Yy,useDebugValue:ag,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=Yy(!1),e=t[0];return t=rA.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=nt,i=ir();if(Xe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),Rt===null)throw Error(H(349));Ss&30||rE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xy(sE.bind(null,r,s,t),[t]),r.flags|=2048,xl(9,iE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ir(),e=Rt.identifierPrefix;if(Xe){var n=Nr,r=xr;n=(r&~(1<<32-Kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aA={readContext:Mn,useCallback:fE,useContext:Mn,useEffect:og,useImperativeHandle:hE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:ff,useRef:lE,useState:function(){return ff(bl)},useDebugValue:ag,useDeferredValue:function(t){var e=jn();return mE(e,wt.memoizedState,t)},useTransition:function(){var t=ff(bl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1},lA={readContext:Mn,useCallback:fE,useContext:Mn,useEffect:og,useImperativeHandle:hE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:pf,useRef:lE,useState:function(){return pf(bl)},useDebugValue:ag,useDeferredValue:function(t){var e=jn();return wt===null?e.memoizedState=t:mE(e,wt.memoizedState,t)},useTransition:function(){var t=pf(bl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _p(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kd={isMounted:function(t){return(t=t._reactInternals)?Us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tn(),i=xi(t),s=Mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,i),e!==null&&(Gn(e,t,i,r),Tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tn(),i=xi(t),s=Mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,i),e!==null&&(Gn(e,t,i,r),Tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),r=xi(t),i=Mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pi(t,i,r),e!==null&&(Gn(e,t,r,n),Tc(e,t,r))}};function Jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Il(n,r)||!Il(i,s):!0}function wE(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(i=fn(e)?Ts:Gt.current,r=e.contextTypes,s=(r=r!=null)?Mo(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kd.enqueueReplaceState(e,e.state,null)}function wp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mn(s):(s=fn(e)?Ts:Gt.current,i.context=Mo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_p(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kd.enqueueReplaceState(i,i.state,null),rd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fo(t,e){try{var n="",r=e;do n+=MC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uA=typeof WeakMap=="function"?WeakMap:Map;function EE(t,e,n){n=Mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ld||(ld=!0,xp=r),Ep(t,e)},n}function TE(t,e,n){n=Mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IA.bind(null,t,e,n),e.then(t,t))}function t_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mr(-1,1),e.tag=2,Pi(n,e,1))),n.lanes|=1),t)}var cA=Yr.ReactCurrentOwner,dn=!1;function Zt(t,e,n,r){e.child=t===null?Xw(e,null,n,r):Vo(e,t.child,n,r)}function r_(t,e,n,r,i){n=n.render;var s=e.ref;return Ao(e,i),r=ig(t,e,n,r,s,i),n=sg(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Xe&&n&&qm(e),e.flags|=1,Zt(t,e,r,i),e.child)}function i_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,IE(t,e,s,r,i)):(t=Ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(o,r)&&t.ref===e.ref)return $r(t,e,i)}return e.flags|=1,t=Ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function IE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Il(s,r)&&t.ref===e.ref)if(dn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,$r(t,e,i)}return Tp(t,e,n,r,i)}function SE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(_o,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Fe(_o,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Fe(_o,_n),_n|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Fe(_o,_n),_n|=r;return Zt(t,e,i,n),e.child}function kE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tp(t,e,n,r,i){var s=fn(n)?Ts:Gt.current;return s=Mo(e,s),Ao(e,i),n=ig(t,e,n,r,s,i),r=sg(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Xe&&r&&qm(e),e.flags|=1,Zt(t,e,n,i),e.child)}function s_(t,e,n,r,i){if(fn(n)){var s=!0;Jc(e)}else s=!1;if(Ao(e,i),e.stateNode===null)kc(t,e),wE(e,n,r),wp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=fn(n)?Ts:Gt.current,c=Mo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zy(e,o,r,c),fi=!1;var p=e.memoizedState;o.state=p,rd(e,r,o,i),u=e.memoizedState,a!==r||p!==u||hn.current||fi?(typeof d=="function"&&(_p(e,n,d,r),u=e.memoizedState),(a=fi||Jy(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mn(u):(u=fn(n)?Ts:Gt.current,u=Mo(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Zy(e,o,r,u),fi=!1,p=e.memoizedState,o.state=p,rd(e,r,o,i);var k=e.memoizedState;a!==f||p!==k||hn.current||fi?(typeof E=="function"&&(_p(e,n,E,r),k=e.memoizedState),(c=fi||Jy(e,n,c,r,p,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ip(t,e,n,r,s,i)}function Ip(t,e,n,r,i,s){kE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hy(e,n,!1),$r(t,e,s);r=e.stateNode,cA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vo(e,t.child,null,s),e.child=Vo(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=r.state,i&&Hy(e,n,!0),e.child}function CE(t){var e=t.stateNode;e.pendingContext?$y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$y(t,e.context,!1),eg(t,e.containerInfo)}function o_(t,e,n,r,i){return jo(),Gm(i),e.flags|=256,Zt(t,e,n,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function kp(t){return{baseLanes:t,cachePool:null,transitions:null}}function RE(t,e,n){var r=e.pendingProps,i=tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Fe(tt,i&1),t===null)return vp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yd(o,r,0,null),t=ys(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kp(n),e.memoizedState=Sp,t):lg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ni(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ys(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sp,r}return s=t.child,t=s.sibling,r=Ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lg(t,e){return e=Yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gu(t,e,n,r){return r!==null&&Gm(r),Vo(e,t.child,null,n),t=lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mf(Error(H(422))),Gu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yd({mode:"visible",children:r.children},i,0,null),s=ys(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vo(e,t.child,null,o),e.child.memoizedState=kp(o),e.memoizedState=Sp,s);if(!(e.mode&1))return Gu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=mf(s,r,void 0),Gu(t,e,o,r)}if(a=(o&t.childLanes)!==0,dn||a){if(r=Rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zr(t,i),Gn(r,t,i,-1))}return pg(),r=mf(Error(H(421))),Gu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,En=Ai(i.nextSibling),kn=e,Xe=!0,Wn=null,t!==null&&(Nn[Dn++]=xr,Nn[Dn++]=Nr,Nn[Dn++]=Is,xr=t.id,Nr=t.overflow,Is=e),e=lg(e,r.children),e.flags|=4096,e)}function a_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yp(t.return,e,n)}function gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Zt(t,e,r.children,n),r=tt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a_(t,n,e);else if(t.tag===19)a_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Fe(tt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&id(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&id(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hA(t,e,n){switch(e.tag){case 3:CE(e),jo();break;case 5:eE(e);break;case 1:fn(e.type)&&Jc(e);break;case 4:eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Fe(td,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Fe(tt,tt.current&1),e.flags|=128,null):n&e.child.childLanes?RE(t,e,n):(Fe(tt,tt.current&1),t=$r(t,e,n),t!==null?t.sibling:null);Fe(tt,tt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fe(tt,tt.current),r)break;return null;case 22:case 23:return e.lanes=0,SE(t,e,n)}return $r(t,e,n)}var PE,Cp,bE,xE;PE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cp=function(){};bE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ds(dr.current);var s=null;switch(n){case"input":i=Gf(t,i),r=Gf(t,r),s=[];break;case"select":i=rt({},i,{value:void 0}),r=rt({},r,{value:void 0}),s=[];break;case"textarea":i=Xf(t,i),r=Xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yc)}Zf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&We("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Na(t,e){if(!Xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fA(t,e,n){var r=e.pendingProps;switch(Km(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return fn(e.type)&&Xc(),$t(e),null;case 3:return r=e.stateNode,Uo(),Ge(hn),Ge(Gt),ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Op(Wn),Wn=null))),Cp(t,e),$t(e),null;case 5:tg(e);var i=ds(Al.current);if(n=e.type,t!==null&&e.stateNode!=null)bE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return $t(e),null}if(t=ds(dr.current),qu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[or]=e,r[Cl]=s,t=(e.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(i=0;i<za.length;i++)We(za[i],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":gy(r,s),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},We("invalid",r);break;case"textarea":yy(r,s),We("invalid",r)}Zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wu(r.textContent,a,t),i=["children",""+a]):gl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&We("scroll",r)}switch(n){case"input":ju(r),vy(r,s,!0);break;case"textarea":ju(r),_y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[or]=e,t[Cl]=r,PE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ep(n,r),n){case"dialog":We("cancel",t),We("close",t),i=r;break;case"iframe":case"object":case"embed":We("load",t),i=r;break;case"video":case"audio":for(i=0;i<za.length;i++)We(za[i],t);i=r;break;case"source":We("error",t),i=r;break;case"img":case"image":case"link":We("error",t),We("load",t),i=r;break;case"details":We("toggle",t),i=r;break;case"input":gy(t,r),i=Gf(t,r),We("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=rt({},r,{value:void 0}),We("invalid",t);break;case"textarea":yy(t,r),i=Xf(t,r),We("invalid",t);break;default:i=r}Zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?lw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ow(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vl(t,u):typeof u=="number"&&vl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&We("scroll",t):u!=null&&Nm(t,s,u,o))}switch(n){case"input":ju(t),vy(t,r,!1);break;case"textarea":ju(t),_y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ji(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?So(t,!!r.multiple,s,!1):r.defaultValue!=null&&So(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)xE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=ds(Al.current),ds(dr.current),qu(e)){if(r=e.stateNode,n=e.memoizedProps,r[or]=e,(s=r.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:Wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=e,e.stateNode=r}return $t(e),null;case 13:if(Ge(tt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&En!==null&&e.mode&1&&!(e.flags&128))Qw(),jo(),e.flags|=98560,s=!1;else if(s=qu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[or]=e}else jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Wn!==null&&(Op(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||tt.current&1?Tt===0&&(Tt=3):pg())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Uo(),Cp(t,e),t===null&&Sl(e.stateNode.containerInfo),$t(e),null;case 10:return Xm(e.type._context),$t(e),null;case 17:return fn(e.type)&&Xc(),$t(e),null;case 19:if(Ge(tt),s=e.memoizedState,s===null)return $t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Na(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=id(t),o!==null){for(e.flags|=128,Na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Fe(tt,tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&dt()>Bo&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304)}else{if(!r)if(t=id(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xe)return $t(e),null}else 2*dt()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,r=!0,Na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=dt(),e.sibling=null,n=tt.current,Fe(tt,r?n&1|2:n&1),e):($t(e),null);case 22:case 23:return fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function pA(t,e){switch(Km(e),e.tag){case 1:return fn(e.type)&&Xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),Ge(hn),Ge(Gt),ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tg(e),null;case 13:if(Ge(tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ge(tt),null;case 4:return Uo(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var Qu=!1,qt=!1,mA=typeof WeakSet=="function"?WeakSet:Set,Y=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(t,e,r)}else n.current=null}function Rp(t,e,n){try{n()}catch(r){at(t,e,r)}}var l_=!1;function gA(t,e){if(cp=Kc,t=Mw(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)p=f,f=E;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dp={focusedElem:t,selectionRange:n},Kc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,P=k.memoizedState,S=e.stateNode,y=S.getSnapshotBeforeUpdate(e.elementType===e.type?C:zn(e.type,C),P);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(D){at(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return k=l_,l_=!1,k}function rl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rp(e,n,s)}i=i.next}while(i!==r)}}function Gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ap(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function NE(t){var e=t.alternate;e!==null&&(t.alternate=null,NE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[Cl],delete e[pp],delete e[JR],delete e[ZR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DE(t){return t.tag===5||t.tag===3||t.tag===4}function u_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yc));else if(r!==4&&(t=t.child,t!==null))for(Pp(t,e,n),t=t.sibling;t!==null;)Pp(t,e,n),t=t.sibling}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}var xt=null,$n=!1;function li(t,e,n){for(n=n.child;n!==null;)OE(t,e,n),n=n.sibling}function OE(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Fd,n)}catch{}switch(n.tag){case 5:qt||yo(n,e);case 6:var r=xt,i=$n;xt=null,li(t,e,n),xt=r,$n=i,xt!==null&&($n?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&($n?(t=xt,n=n.stateNode,t.nodeType===8?uf(t.parentNode,n):t.nodeType===1&&uf(t,n),El(t)):uf(xt,n.stateNode));break;case 4:r=xt,i=$n,xt=n.stateNode.containerInfo,$n=!0,li(t,e,n),xt=r,$n=i;break;case 0:case 11:case 14:case 15:if(!qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rp(n,e,o),i=i.next}while(i!==r)}li(t,e,n);break;case 1:if(!qt&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){at(n,e,a)}li(t,e,n);break;case 21:li(t,e,n);break;case 22:n.mode&1?(qt=(r=qt)||n.memoizedState!==null,li(t,e,n),qt=r):li(t,e,n);break;default:li(t,e,n)}}function c_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mA),e.forEach(function(r){var i=kA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,$n=!1;break e;case 3:xt=a.stateNode.containerInfo,$n=!0;break e;case 4:xt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(xt===null)throw Error(H(160));OE(s,o,i),xt=null,$n=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){at(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)LE(e,t),e=e.sibling}function LE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),rr(t),r&4){try{rl(3,t,t.return),Gd(3,t)}catch(C){at(t,t.return,C)}try{rl(5,t,t.return)}catch(C){at(t,t.return,C)}}break;case 1:Bn(e,t),rr(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Bn(e,t),rr(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var i=t.stateNode;try{vl(i,"")}catch(C){at(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rw(i,s),ep(a,o);var c=ep(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?lw(i,f):d==="dangerouslySetInnerHTML"?ow(i,f):d==="children"?vl(i,f):Nm(i,d,f,c)}switch(a){case"input":Qf(i,s);break;case"textarea":iw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?So(i,!!s.multiple,E,!1):p!==!!s.multiple&&(s.defaultValue!=null?So(i,!!s.multiple,s.defaultValue,!0):So(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cl]=s}catch(C){at(t,t.return,C)}}break;case 6:if(Bn(e,t),rr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){at(t,t.return,C)}}break;case 3:if(Bn(e,t),rr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{El(e.containerInfo)}catch(C){at(t,t.return,C)}break;case 4:Bn(e,t),rr(t);break;case 13:Bn(e,t),rr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=dt())),r&4&&c_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,Bn(e,t),qt=c):Bn(e,t),rr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,E=p.child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:yo(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(C){at(r,n,C)}}break;case 5:yo(p,p.return);break;case 22:if(p.memoizedState!==null){h_(f);continue}}E!==null?(E.return=p,Y=E):h_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=aw("display",o))}catch(C){at(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){at(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Bn(e,t),rr(t),r&4&&c_(t);break;case 21:break;default:Bn(e,t),rr(t)}}function rr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DE(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vl(i,""),r.flags&=-33);var s=u_(t);bp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=u_(t);Pp(t,a,o);break;default:throw Error(H(161))}}catch(u){at(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vA(t,e,n){Y=t,ME(t)}function ME(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||qt;a=Qu;var c=qt;if(Qu=o,(qt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?f_(i):u!==null?(u.return=o,Y=u):f_(i);for(;s!==null;)Y=s,ME(s),s=s.sibling;Y=i,Qu=a,qt=c}d_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):d_(t)}}function d_(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&El(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}qt||e.flags&512&&Ap(e)}catch(p){at(e,e.return,p)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function h_(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function f_(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gd(4,e)}catch(u){at(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){at(e,i,u)}}var s=e.return;try{Ap(e)}catch(u){at(e,s,u)}break;case 5:var o=e.return;try{Ap(e)}catch(u){at(e,o,u)}}}catch(u){at(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var yA=Math.ceil,ad=Yr.ReactCurrentDispatcher,ug=Yr.ReactCurrentOwner,Ln=Yr.ReactCurrentBatchConfig,Ae=0,Rt=null,mt=null,Ot=0,_n=0,_o=Ki(0),Tt=0,Nl=null,ks=0,Qd=0,cg=0,il=null,un=null,dg=0,Bo=1/0,Pr=null,ld=!1,xp=null,bi=null,Yu=!1,Ti=null,ud=0,sl=0,Np=null,Cc=-1,Rc=0;function tn(){return Ae&6?dt():Cc!==-1?Cc:Cc=dt()}function xi(t){return t.mode&1?Ae&2&&Ot!==0?Ot&-Ot:tA.transition!==null?(Rc===0&&(Rc=ww()),Rc):(t=Me,t!==0||(t=window.event,t=t===void 0?16:Rw(t.type)),t):1}function Gn(t,e,n,r){if(50<sl)throw sl=0,Np=null,Error(H(185));Jl(t,n,r),(!(Ae&2)||t!==Rt)&&(t===Rt&&(!(Ae&2)&&(Qd|=n),Tt===4&&mi(t,Ot)),pn(t,r),n===1&&Ae===0&&!(e.mode&1)&&(Bo=dt()+500,Wd&&Gi()))}function pn(t,e){var n=t.callbackNode;tR(t,e);var r=qc(t,t===Rt?Ot:0);if(r===0)n!==null&&Ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ty(n),e===1)t.tag===0?eA(p_.bind(null,t)):qw(p_.bind(null,t)),YR(function(){!(Ae&6)&&Gi()}),n=null;else{switch(Ew(r)){case 1:n=jm;break;case 4:n=yw;break;case 16:n=Wc;break;case 536870912:n=_w;break;default:n=Wc}n=HE(n,jE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jE(t,e){if(Cc=-1,Rc=0,Ae&6)throw Error(H(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var r=qc(t,t===Rt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cd(t,r);else{e=r;var i=Ae;Ae|=2;var s=UE();(Rt!==t||Ot!==e)&&(Pr=null,Bo=dt()+500,vs(t,e));do try{EA();break}catch(a){VE(t,a)}while(!0);Ym(),ad.current=s,Ae=i,mt!==null?e=0:(Rt=null,Ot=0,e=Tt)}if(e!==0){if(e===2&&(i=sp(t),i!==0&&(r=i,e=Dp(t,i))),e===1)throw n=Nl,vs(t,0),mi(t,r),pn(t,dt()),n;if(e===6)mi(t,r);else{if(i=t.current.alternate,!(r&30)&&!_A(i)&&(e=cd(t,r),e===2&&(s=sp(t),s!==0&&(r=s,e=Dp(t,s))),e===1))throw n=Nl,vs(t,0),mi(t,r),pn(t,dt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:os(t,un,Pr);break;case 3:if(mi(t,r),(r&130023424)===r&&(e=dg+500-dt(),10<e)){if(qc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fp(os.bind(null,t,un,Pr),e);break}os(t,un,Pr);break;case 4:if(mi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yA(r/1960))-r,10<r){t.timeoutHandle=fp(os.bind(null,t,un,Pr),r);break}os(t,un,Pr);break;case 5:os(t,un,Pr);break;default:throw Error(H(329))}}}return pn(t,dt()),t.callbackNode===n?jE.bind(null,t):null}function Dp(t,e){var n=il;return t.current.memoizedState.isDehydrated&&(vs(t,e).flags|=256),t=cd(t,e),t!==2&&(e=un,un=n,e!==null&&Op(e)),t}function Op(t){un===null?un=t:un.push.apply(un,t)}function _A(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mi(t,e){for(e&=~cg,e&=~Qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),r=1<<n;t[n]=-1,e&=~r}}function p_(t){if(Ae&6)throw Error(H(327));Po();var e=qc(t,0);if(!(e&1))return pn(t,dt()),null;var n=cd(t,e);if(t.tag!==0&&n===2){var r=sp(t);r!==0&&(e=r,n=Dp(t,r))}if(n===1)throw n=Nl,vs(t,0),mi(t,e),pn(t,dt()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,un,Pr),pn(t,dt()),null}function hg(t,e){var n=Ae;Ae|=1;try{return t(e)}finally{Ae=n,Ae===0&&(Bo=dt()+500,Wd&&Gi())}}function Cs(t){Ti!==null&&Ti.tag===0&&!(Ae&6)&&Po();var e=Ae;Ae|=1;var n=Ln.transition,r=Me;try{if(Ln.transition=null,Me=1,t)return t()}finally{Me=r,Ln.transition=n,Ae=e,!(Ae&6)&&Gi()}}function fg(){_n=_o.current,Ge(_o)}function vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QR(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Km(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xc();break;case 3:Uo(),Ge(hn),Ge(Gt),ng();break;case 5:tg(r);break;case 4:Uo();break;case 13:Ge(tt);break;case 19:Ge(tt);break;case 10:Xm(r.type._context);break;case 22:case 23:fg()}n=n.return}if(Rt=t,mt=t=Ni(t.current,null),Ot=_n=e,Tt=0,Nl=null,cg=Qd=ks=0,un=il=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cs=null}return t}function VE(t,e){do{var n=mt;try{if(Ym(),Ic.current=od,sd){for(var r=nt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sd=!1}if(Ss=0,Ct=wt=nt=null,nl=!1,Pl=0,ug.current=null,n===null||n.return===null){Tt=1,Nl=e,mt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=t_(o);if(E!==null){E.flags&=-257,n_(E,o,a,s,e),E.mode&1&&e_(s,c,e),e=E,u=c;var k=e.updateQueue;if(k===null){var C=new Set;C.add(u),e.updateQueue=C}else k.add(u);break e}else{if(!(e&1)){e_(s,c,e),pg();break e}u=Error(H(426))}}else if(Xe&&a.mode&1){var P=t_(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),n_(P,o,a,s,e),Gm(Fo(u,a));break e}}s=u=Fo(u,a),Tt!==4&&(Tt=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=EE(s,u,e);Gy(s,S);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(bi===null||!bi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=TE(s,a,e);Gy(s,D);break e}}s=s.return}while(s!==null)}BE(n)}catch(F){e=F,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function UE(){var t=ad.current;return ad.current=od,t===null?od:t}function pg(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Rt===null||!(ks&268435455)&&!(Qd&268435455)||mi(Rt,Ot)}function cd(t,e){var n=Ae;Ae|=2;var r=UE();(Rt!==t||Ot!==e)&&(Pr=null,vs(t,e));do try{wA();break}catch(i){VE(t,i)}while(!0);if(Ym(),Ae=n,ad.current=r,mt!==null)throw Error(H(261));return Rt=null,Ot=0,Tt}function wA(){for(;mt!==null;)FE(mt)}function EA(){for(;mt!==null&&!qC();)FE(mt)}function FE(t){var e=$E(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?BE(t):mt=e,ug.current=null}function BE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pA(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,mt=null;return}}else if(n=fA(n,e,_n),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function os(t,e,n){var r=Me,i=Ln.transition;try{Ln.transition=null,Me=1,TA(t,e,n,r)}finally{Ln.transition=i,Me=r}return null}function TA(t,e,n,r){do Po();while(Ti!==null);if(Ae&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nR(t,s),t===Rt&&(mt=Rt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yu||(Yu=!0,HE(Wc,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=Me;Me=1;var a=Ae;Ae|=4,ug.current=null,gA(t,n),LE(n,t),zR(dp),Kc=!!cp,dp=cp=null,t.current=n,vA(n),KC(),Ae=a,Me=o,Ln.transition=s}else t.current=n;if(Yu&&(Yu=!1,Ti=t,ud=i),s=t.pendingLanes,s===0&&(bi=null),YC(n.stateNode),pn(t,dt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ld)throw ld=!1,t=xp,xp=null,t;return ud&1&&t.tag!==0&&Po(),s=t.pendingLanes,s&1?t===Np?sl++:(sl=0,Np=t):sl=0,Gi(),null}function Po(){if(Ti!==null){var t=Ew(ud),e=Ln.transition,n=Me;try{if(Ln.transition=null,Me=16>t?16:t,Ti===null)var r=!1;else{if(t=Ti,Ti=null,ud=0,Ae&6)throw Error(H(331));var i=Ae;for(Ae|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:rl(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,E=d.return;if(NE(d),d===c){Y=null;break}if(p!==null){p.return=E,Y=p;break}Y=E}}}var k=s.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Y=S;break e}Y=s.return}}var y=t.current;for(Y=y;Y!==null;){o=Y;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Y=I;else e:for(o=y;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gd(9,a)}}catch(F){at(a,a.return,F)}if(a===o){Y=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,Y=D;break e}Y=a.return}}if(Ae=i,Gi(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Fd,t)}catch{}r=!0}return r}finally{Me=n,Ln.transition=e}}return!1}function m_(t,e,n){e=Fo(n,e),e=EE(t,e,1),t=Pi(t,e,1),e=tn(),t!==null&&(Jl(t,1,e),pn(t,e))}function at(t,e,n){if(t.tag===3)m_(t,t,n);else for(;e!==null;){if(e.tag===3){m_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bi===null||!bi.has(r))){t=Fo(n,t),t=TE(e,t,1),e=Pi(e,t,1),t=tn(),e!==null&&(Jl(e,1,t),pn(e,t));break}}e=e.return}}function IA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Ot&n)===n&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>dt()-dg?vs(t,0):cg|=n),pn(t,e)}function zE(t,e){e===0&&(t.mode&1?(e=Fu,Fu<<=1,!(Fu&130023424)&&(Fu=4194304)):e=1);var n=tn();t=zr(t,e),t!==null&&(Jl(t,e,n),pn(t,n))}function SA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zE(t,n)}function kA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),zE(t,n)}var $E;$E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,hA(t,e,n);dn=!!(t.flags&131072)}else dn=!1,Xe&&e.flags&1048576&&Kw(e,ed,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kc(t,e),t=e.pendingProps;var i=Mo(e,Gt.current);Ao(e,n),i=ig(null,e,r,t,i,n);var s=sg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(r)?(s=!0,Jc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(e),i.updater=Kd,e.stateNode=i,i._reactInternals=e,wp(e,r,t,n),e=Ip(null,e,r,!0,s,n)):(e.tag=0,Xe&&s&&qm(e),Zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RA(r),t=zn(r,t),i){case 0:e=Tp(null,e,r,t,n);break e;case 1:e=s_(null,e,r,t,n);break e;case 11:e=r_(null,e,r,t,n);break e;case 14:e=i_(null,e,r,zn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),Tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),s_(t,e,r,i,n);case 3:e:{if(CE(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zw(t,e),rd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fo(Error(H(423)),e),e=o_(t,e,r,n,i);break e}else if(r!==i){i=Fo(Error(H(424)),e),e=o_(t,e,r,n,i);break e}else for(En=Ai(e.stateNode.containerInfo.firstChild),kn=e,Xe=!0,Wn=null,n=Xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jo(),r===i){e=$r(t,e,n);break e}Zt(t,e,r,n)}e=e.child}return e;case 5:return eE(e),t===null&&vp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hp(r,i)?o=null:s!==null&&hp(r,s)&&(e.flags|=32),kE(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&vp(e),null;case 13:return RE(t,e,n);case 4:return eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vo(e,null,r,n):Zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),r_(t,e,r,i,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Fe(td,r._currentValue),r._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===i.children&&!hn.current){e=$r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ao(e,n),i=Mn(i),r=r(i),e.flags|=1,Zt(t,e,r,n),e.child;case 14:return r=e.type,i=zn(r,e.pendingProps),i=zn(r.type,i),i_(t,e,r,i,n);case 15:return IE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),kc(t,e),e.tag=1,fn(r)?(t=!0,Jc(e)):t=!1,Ao(e,n),wE(e,r,i),wp(e,r,i,n),Ip(null,e,r,!0,t,n);case 19:return AE(t,e,n);case 22:return SE(t,e,n)}throw Error(H(156,e.tag))};function HE(t,e){return vw(t,e)}function CA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,r){return new CA(t,e,n,r)}function mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RA(t){if(typeof t=="function")return mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Om)return 11;if(t===Lm)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lo:return ys(n.children,i,s,e);case Dm:o=8,i|=8;break;case Hf:return t=On(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Wf:return t=On(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case qf:return t=On(19,n,e,i),t.elementType=qf,t.lanes=s,t;case ew:return Yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J1:o=10;break e;case Z1:o=9;break e;case Om:o=11;break e;case Lm:o=14;break e;case hi:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=On(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ys(t,e,n,r){return t=On(7,t,r,e),t.lanes=n,t}function Yd(t,e,n,r){return t=On(22,t,r,e),t.elementType=ew,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gg(t,e,n,r,i,s,o,a,u){return t=new AA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function PA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WE(t){if(!t)return Vi;t=t._reactInternals;e:{if(Us(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(fn(n))return Ww(t,n,e)}return e}function qE(t,e,n,r,i,s,o,a,u){return t=gg(n,r,!0,t,i,s,o,a,u),t.context=WE(null),n=t.current,r=tn(),i=xi(n),s=Mr(r,i),s.callback=e??null,Pi(n,s,i),t.current.lanes=i,Jl(t,i,r),pn(t,r),t}function Xd(t,e,n,r){var i=e.current,s=tn(),o=xi(i);return n=WE(n),e.context===null?e.context=n:e.pendingContext=n,e=Mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pi(i,e,o),t!==null&&(Gn(t,i,o,s),Tc(t,i,o)),o}function dd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){g_(t,e),(t=t.alternate)&&g_(t,e)}function bA(){return null}var KE=typeof reportError=="function"?reportError:function(t){console.error(t)};function yg(t){this._internalRoot=t}Jd.prototype.render=yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Xd(t,e,null,null)};Jd.prototype.unmount=yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){Xd(null,t,null,null)}),e[Br]=null}};function Jd(t){this._internalRoot=t}Jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pi.length&&e!==0&&e<pi[n].priority;n++);pi.splice(n,0,t),n===0&&Cw(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function v_(){}function xA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=dd(o);s.call(c)}}var o=qE(e,r,t,0,null,!1,!1,"",v_);return t._reactRootContainer=o,t[Br]=o.current,Sl(t.nodeType===8?t.parentNode:t),Cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=dd(u);a.call(c)}}var u=gg(t,0,!1,null,null,!1,!1,"",v_);return t._reactRootContainer=u,t[Br]=u.current,Sl(t.nodeType===8?t.parentNode:t),Cs(function(){Xd(e,u,n,r)}),u}function eh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=dd(o);a.call(u)}}Xd(e,o,t,i)}else o=xA(n,e,t,i,r);return dd(o)}Tw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(Vm(e,n|1),pn(e,dt()),!(Ae&6)&&(Bo=dt()+500,Gi()))}break;case 13:Cs(function(){var r=zr(t,1);if(r!==null){var i=tn();Gn(r,t,1,i)}}),vg(t,1)}};Um=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=tn();Gn(e,t,134217728,n)}vg(t,134217728)}};Iw=function(t){if(t.tag===13){var e=xi(t),n=zr(t,e);if(n!==null){var r=tn();Gn(n,t,e,r)}vg(t,e)}};Sw=function(){return Me};kw=function(t,e){var n=Me;try{return Me=t,e()}finally{Me=n}};np=function(t,e,n){switch(e){case"input":if(Qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hd(r);if(!i)throw Error(H(90));nw(r),Qf(r,i)}}}break;case"textarea":iw(t,n);break;case"select":e=n.value,e!=null&&So(t,!!n.multiple,e,!1)}};dw=hg;hw=Cs;var NA={usingClientEntryPoint:!1,Events:[eu,fo,Hd,uw,cw,hg]},Da={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DA={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mw(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||bA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Fd=Xu.inject(DA),cr=Xu}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NA;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(H(200));return PA(t,e,null,n)};Rn.createRoot=function(t,e){if(!_g(t))throw Error(H(299));var n=!1,r="",i=KE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gg(t,1,!1,null,null,n,!1,r,i),t[Br]=e.current,Sl(t.nodeType===8?t.parentNode:t),new yg(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=mw(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Cs(t)};Rn.hydrate=function(t,e,n){if(!Zd(e))throw Error(H(200));return eh(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=KE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qE(e,null,t,1,n??null,i,!1,s,o),t[Br]=e.current,Sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jd(e)};Rn.render=function(t,e,n){if(!Zd(e))throw Error(H(200));return eh(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Zd(t))throw Error(H(40));return t._reactRootContainer?(Cs(function(){eh(null,null,t,!1,function(){t._reactRootContainer=null,t[Br]=null})}),!0):!1};Rn.unstable_batchedUpdates=hg;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return eh(t,e,n,!1,r)};Rn.version="18.3.1-next-f1338f8080-20240426";function GE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GE)}catch(t){console.error(t)}}GE(),G1.exports=Rn;var wg=G1.exports;const OA=km(wg),LA=M1({__proto__:null,default:OA},[wg]);var y_=wg;zf.createRoot=y_.createRoot,zf.hydrateRoot=y_.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function et(){return et=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},et.apply(this,arguments)}var ft;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ft||(ft={}));const __="popstate";function MA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Xr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Dl("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:nu(s))}function r(i,s){Rs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return VA(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jA(){return Math.random().toString(36).substr(2,8)}function w_(t,e){return{usr:t.state,key:t.key,idx:e}}function Dl(t,e,n,r){return n===void 0&&(n=null),et({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||jA()})}function nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function VA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ft.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(et({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=ft.Pop;let P=d(),S=P==null?null:P-c;c=P,u&&u({action:a,location:C.location,delta:S})}function p(P,S){a=ft.Push;let y=Dl(C.location,P,S);n&&n(y,P),c=d()+1;let I=w_(y,c),D=C.createHref(y);try{o.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:a,location:C.location,delta:1})}function E(P,S){a=ft.Replace;let y=Dl(C.location,P,S);n&&n(y,P),c=d();let I=w_(y,c),D=C.createHref(y);o.replaceState(I,"",D),s&&u&&u({action:a,location:C.location,delta:0})}function k(P){let S=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:nu(P);return y=y.replace(/ $/,"%20"),Ee(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let C={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(__,f),u=P,()=>{i.removeEventListener(__,f),u=null}},createHref(P){return e(i,P)},createURL:k,encodeLocation(P){let S=k(P);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:E,go(P){return o.go(P)}};return C}var Ue;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ue||(Ue={}));const UA=new Set(["lazy","caseSensitive","path","id","index","children"]);function FA(t){return t.index===!0}function Ol(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),FA(i)){let u=et({},i,e(i),{id:a});return r[a]=u,u}else{let u=et({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=Ol(i.children,e,o,r)),u}})}function ls(t,e,n){return n===void 0&&(n="/"),Pc(t,e,n,!1)}function Pc(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=ru(i.pathname||"/",n);if(s==null)return null;let o=QE(t);zA(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=ZA(s);a=XA(o[u],c,r)}return a}function BA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function QE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Di([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),QE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:QA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of YE(s.path))i(s,o,u)}),e}function YE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=YE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function zA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $A=/^:[\w-]+$/,HA=3,WA=2,qA=1,KA=10,GA=-2,E_=t=>t==="*";function QA(t,e){let n=t.split("/"),r=n.length;return n.some(E_)&&(r+=GA),e&&(r+=WA),n.filter(i=>!E_(i)).reduce((i,s)=>i+($A.test(s)?HA:s===""?qA:KA),r)}function YA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function XA(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=T_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=T_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Di([s,f.pathname]),pathnameBase:nP(Di([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Di([s,f.pathnameBase]))}return o}function T_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=JA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:E}=d;if(p==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const k=a[f];return E&&!k?c[p]=void 0:c[p]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function JA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ru(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function eP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t;return{pathname:n?n.startsWith("/")?n:tP(n,e):e,search:rP(r),hash:iP(i)}}function tP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function JE(t,e){let n=XE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ZE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=et({},t),Ee(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=eP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Di=t=>t.join("/").replace(/\/\/+/g,"/"),nP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Eg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function th(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eT=["post","put","patch","delete"],sP=new Set(eT),oP=["get",...eT],aP=new Set(oP),lP=new Set([301,302,303,307,308]),uP=new Set([307,308]),wf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Oa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),tT="remix-router-transitions";function hP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let N=t.detectErrorBoundary;i=L=>({hasErrorBoundary:N(L)})}else i=dP;let s={},o=Ol(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||vP,d=t.unstable_patchRoutesOnMiss,f=et({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),p=null,E=new Set,k=null,C=null,P=null,S=t.hydrationData!=null,y=ls(o,t.history.location,u),I=null;if(y==null&&!d){let N=Jt(404,{pathname:t.history.location.pathname}),{matches:L,route:j}=N_(o);y=L,I={[j.id]:N}}y&&d&&kr(y,o,t.history.location.pathname).active&&(y=null);let D;if(!y)D=!1,y=[];else if(y.some(N=>N.route.lazy))D=!1;else if(!y.some(N=>N.route.loader))D=!0;else if(f.v7_partialHydration){let N=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,j=B=>B.route.loader?typeof B.route.loader=="function"&&B.route.loader.hydrate===!0?!1:N&&N[B.route.id]!==void 0||L&&L[B.route.id]!==void 0:!0;if(L){let B=y.findIndex(G=>L[G.route.id]!==void 0);D=y.slice(0,B+1).every(j)}else D=y.every(j)}else D=t.hydrationData!=null;let F,x={historyAction:t.history.action,location:t.history.location,matches:y,initialized:D,navigation:wf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||I,fetchers:new Map,blockers:new Map},T=ft.Pop,v=!1,_,R=!1,b=new Map,O=null,A=!1,ye=!1,ut=[],Yt=[],ge=new Map,W=0,ee=-1,ie=new Map,me=new Set,ce=new Map,ve=new Map,xe=new Set,je=new Map,ze=new Map,At=new Map,Ji=!1;function Mh(){if(p=t.history.listen(N=>{let{action:L,location:j,delta:B}=N;if(Ji){Ji=!1;return}Rs(ze.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=pa({currentLocation:x.location,nextLocation:j,historyAction:L});if(G&&B!=null){Ji=!0,t.history.go(B*-1),es(G,{state:"blocked",location:j,proceed(){es(G,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),t.history.go(B)},reset(){let Z=new Map(x.blockers);Z.set(G,Oa),vt({blockers:Z})}});return}return er(L,j)}),n){bP(e,b);let N=()=>xP(e,b);e.addEventListener("pagehide",N),O=()=>e.removeEventListener("pagehide",N)}return x.initialized||er(ft.Pop,x.location,{initialHydration:!0}),F}function $s(){p&&p(),O&&O(),E.clear(),_&&_.abort(),x.fetchers.forEach((N,L)=>qs(L)),x.blockers.forEach((N,L)=>Gs(L))}function Hs(N){return E.add(N),()=>E.delete(N)}function vt(N,L){L===void 0&&(L={}),x=et({},x,N);let j=[],B=[];f.v7_fetcherPersist&&x.fetchers.forEach((G,Z)=>{G.state==="idle"&&(xe.has(Z)?B.push(Z):j.push(Z))}),[...E].forEach(G=>G(x,{deletedFetchers:B,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),f.v7_fetcherPersist&&(j.forEach(G=>x.fetchers.delete(G)),B.forEach(G=>qs(G)))}function Zn(N,L,j){var B,G;let{flushSync:Z}=j===void 0?{}:j,ae=x.actionData!=null&&x.navigation.formMethod!=null&&Hn(x.navigation.formMethod)&&x.navigation.state==="loading"&&((B=N.state)==null?void 0:B._isRedirect)!==!0,q;L.actionData?Object.keys(L.actionData).length>0?q=L.actionData:q=null:ae?q=x.actionData:q=null;let de=L.loaderData?b_(x.loaderData,L.loaderData,L.matches||[],L.errors):x.loaderData,ne=x.blockers;ne.size>0&&(ne=new Map(ne),ne.forEach((ke,Oe)=>ne.set(Oe,Oa)));let te=v===!0||x.navigation.formMethod!=null&&Hn(x.navigation.formMethod)&&((G=N.state)==null?void 0:G._isRedirect)!==!0;a&&(o=a,a=void 0),A||T===ft.Pop||(T===ft.Push?t.history.push(N,N.state):T===ft.Replace&&t.history.replace(N,N.state));let _e;if(T===ft.Pop){let ke=b.get(x.location.pathname);ke&&ke.has(N.pathname)?_e={currentLocation:x.location,nextLocation:N}:b.has(N.pathname)&&(_e={currentLocation:N,nextLocation:x.location})}else if(R){let ke=b.get(x.location.pathname);ke?ke.add(N.pathname):(ke=new Set([N.pathname]),b.set(x.location.pathname,ke)),_e={currentLocation:x.location,nextLocation:N}}vt(et({},L,{actionData:q,loaderData:de,historyAction:T,location:N,initialized:!0,navigation:wf,revalidation:"idle",restoreScrollPosition:ga(N,L.matches||x.matches),preventScrollReset:te,blockers:ne}),{viewTransitionOpts:_e,flushSync:Z===!0}),T=ft.Pop,v=!1,R=!1,A=!1,ye=!1,ut=[],Yt=[]}async function Ws(N,L){if(typeof N=="number"){t.history.go(N);return}let j=Lp(x.location,x.matches,u,f.v7_prependBasename,N,f.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:B,submission:G,error:Z}=I_(f.v7_normalizeFormMethod,!1,j,L),ae=x.location,q=Dl(x.location,B,L&&L.state);q=et({},q,t.history.encodeLocation(q));let de=L&&L.replace!=null?L.replace:void 0,ne=ft.Push;de===!0?ne=ft.Replace:de===!1||G!=null&&Hn(G.formMethod)&&G.formAction===x.location.pathname+x.location.search&&(ne=ft.Replace);let te=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,_e=(L&&L.unstable_flushSync)===!0,ke=pa({currentLocation:ae,nextLocation:q,historyAction:ne});if(ke){es(ke,{state:"blocked",location:q,proceed(){es(ke,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Ws(N,L)},reset(){let Oe=new Map(x.blockers);Oe.set(ke,Oa),vt({blockers:Oe})}});return}return await er(ne,q,{submission:G,pendingError:Z,preventScrollReset:te,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:_e})}function la(){if(_t(),vt({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){er(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}er(T||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function er(N,L,j){_&&_.abort(),_=null,T=N,A=(j&&j.startUninterruptedRevalidation)===!0,Qs(x.location,x.matches),v=(j&&j.preventScrollReset)===!0,R=(j&&j.enableViewTransition)===!0;let B=a||o,G=j&&j.overrideNavigation,Z=ls(B,L,u),ae=(j&&j.flushSync)===!0,q=kr(Z,B,L.pathname);if(q.active&&q.matches&&(Z=q.matches),!Z){let{error:Ce,notFoundMatches:ct,route:Ze}=Ir(L.pathname);Zn(L,{matches:ct,loaderData:{},errors:{[Ze.id]:Ce}},{flushSync:ae});return}if(x.initialized&&!ye&&IP(x.location,L)&&!(j&&j.submission&&Hn(j.submission.formMethod))){Zn(L,{matches:Z},{flushSync:ae});return}_=new AbortController;let de=to(t.history,L,_.signal,j&&j.submission),ne;if(j&&j.pendingError)ne=[ol(Z).route.id,{type:Ue.error,error:j.pendingError}];else if(j&&j.submission&&Hn(j.submission.formMethod)){let Ce=await jh(de,L,j.submission,Z,q.active,{replace:j.replace,flushSync:ae});if(Ce.shortCircuited)return;if(Ce.pendingActionResult){let[ct,Ze]=Ce.pendingActionResult;if(wn(Ze)&&th(Ze.error)&&Ze.error.status===404){_=null,Zn(L,{matches:Ce.matches,loaderData:{},errors:{[ct]:Ze.error}});return}}Z=Ce.matches||Z,ne=Ce.pendingActionResult,G=Ef(L,j.submission),ae=!1,q.active=!1,de=to(t.history,de.url,de.signal)}let{shortCircuited:te,matches:_e,loaderData:ke,errors:Oe}=await Vh(de,L,Z,q.active,G,j&&j.submission,j&&j.fetcherSubmission,j&&j.replace,j&&j.initialHydration===!0,ae,ne);te||(_=null,Zn(L,et({matches:_e||Z},x_(ne),{loaderData:ke,errors:Oe})))}async function jh(N,L,j,B,G,Z){Z===void 0&&(Z={}),_t();let ae=AP(L,j);if(vt({navigation:ae},{flushSync:Z.flushSync===!0}),G){let ne=await ns(B,L.pathname,N.signal);if(ne.type==="aborted")return{shortCircuited:!0};if(ne.type==="error"){let{error:te,notFoundMatches:_e,route:ke}=ri(L.pathname,ne);return{matches:_e,pendingActionResult:[ke.id,{type:Ue.error,error:te}]}}else if(ne.matches)B=ne.matches;else{let{notFoundMatches:te,error:_e,route:ke}=Ir(L.pathname);return{matches:te,pendingActionResult:[ke.id,{type:Ue.error,error:_e}]}}}let q,de=$a(B,L);if(!de.route.action&&!de.route.lazy)q={type:Ue.error,error:Jt(405,{method:N.method,pathname:L.pathname,routeId:de.route.id})};else if(q=(await ni("action",N,[de],B))[0],N.signal.aborted)return{shortCircuited:!0};if(fs(q)){let ne;return Z&&Z.replace!=null?ne=Z.replace:ne=R_(q.response.headers.get("Location"),new URL(N.url),u)===x.location.pathname+x.location.search,await Tr(N,q,{submission:j,replace:ne}),{shortCircuited:!0}}if(hs(q))throw Jt(400,{type:"defer-action"});if(wn(q)){let ne=ol(B,de.route.id);return(Z&&Z.replace)!==!0&&(T=ft.Push),{matches:B,pendingActionResult:[ne.route.id,q]}}return{matches:B,pendingActionResult:[de.route.id,q]}}async function Vh(N,L,j,B,G,Z,ae,q,de,ne,te){let _e=G||Ef(L,Z),ke=Z||ae||L_(_e),Oe=!A&&(!f.v7_partialHydration||!de);if(B){if(Oe){let $e=ua(te);vt(et({navigation:_e},$e!==void 0?{actionData:$e}:{}),{flushSync:ne})}let pe=await ns(j,L.pathname,N.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){let{error:$e,notFoundMatches:Ut,route:Le}=ri(L.pathname,pe);return{matches:Ut,loaderData:{},errors:{[Le.id]:$e}}}else if(pe.matches)j=pe.matches;else{let{error:$e,notFoundMatches:Ut,route:Le}=Ir(L.pathname);return{matches:Ut,loaderData:{},errors:{[Le.id]:$e}}}}let Ce=a||o,[ct,Ze]=S_(t.history,x,j,ke,L,f.v7_partialHydration&&de===!0,f.unstable_skipActionErrorRevalidation,ye,ut,Yt,xe,ce,me,Ce,u,te);if(ts(pe=>!(j&&j.some($e=>$e.route.id===pe))||ct&&ct.some($e=>$e.route.id===pe)),ee=++W,ct.length===0&&Ze.length===0){let pe=Ks();return Zn(L,et({matches:j,loaderData:{},errors:te&&wn(te[1])?{[te[0]]:te[1].error}:null},x_(te),pe?{fetchers:new Map(x.fetchers)}:{}),{flushSync:ne}),{shortCircuited:!0}}if(Oe){let pe={};if(!B){pe.navigation=_e;let $e=ua(te);$e!==void 0&&(pe.actionData=$e)}Ze.length>0&&(pe.fetchers=ca(Ze)),vt(pe,{flushSync:ne})}Ze.forEach(pe=>{ge.has(pe.key)&&Vn(pe.key),pe.controller&&ge.set(pe.key,pe.controller)});let ii=()=>Ze.forEach(pe=>Vn(pe.key));_&&_.signal.addEventListener("abort",ii);let{loaderResults:tr,fetcherResults:Un}=await yt(x.matches,j,ct,Ze,N);if(N.signal.aborted)return{shortCircuited:!0};_&&_.signal.removeEventListener("abort",ii),Ze.forEach(pe=>ge.delete(pe.key));let Cr=D_([...tr,...Un]);if(Cr){if(Cr.idx>=ct.length){let pe=Ze[Cr.idx-ct.length].key;me.add(pe)}return await Tr(N,Cr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:nr,errors:Vt}=P_(x,j,ct,tr,te,Ze,Un,je);je.forEach((pe,$e)=>{pe.subscribe(Ut=>{(Ut||pe.done)&&je.delete($e)})}),f.v7_partialHydration&&de&&x.errors&&Object.entries(x.errors).filter(pe=>{let[$e]=pe;return!ct.some(Ut=>Ut.route.id===$e)}).forEach(pe=>{let[$e,Ut]=pe;Vt=Object.assign(Vt||{},{[$e]:Ut})});let xn=Ks(),si=Tu(ee),Ys=xn||si||Ze.length>0;return et({matches:j,loaderData:nr,errors:Vt},Ys?{fetchers:new Map(x.fetchers)}:{})}function ua(N){if(N&&!wn(N[1]))return{[N[0]]:N[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function ca(N){return N.forEach(L=>{let j=x.fetchers.get(L.key),B=La(void 0,j?j.data:void 0);x.fetchers.set(L.key,B)}),new Map(x.fetchers)}function Eu(N,L,j,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(N)&&Vn(N);let G=(B&&B.unstable_flushSync)===!0,Z=a||o,ae=Lp(x.location,x.matches,u,f.v7_prependBasename,j,f.v7_relativeSplatPath,L,B==null?void 0:B.relative),q=ls(Z,ae,u),de=kr(q,Z,ae);if(de.active&&de.matches&&(q=de.matches),!q){bn(N,L,Jt(404,{pathname:ae}),{flushSync:G});return}let{path:ne,submission:te,error:_e}=I_(f.v7_normalizeFormMethod,!0,ae,B);if(_e){bn(N,L,_e,{flushSync:G});return}let ke=$a(q,ne);if(v=(B&&B.preventScrollReset)===!0,te&&Hn(te.formMethod)){Uh(N,L,ne,ke,q,de.active,G,te);return}ce.set(N,{routeId:L,path:ne}),da(N,L,ne,ke,q,de.active,G,te)}async function Uh(N,L,j,B,G,Z,ae,q){_t(),ce.delete(N);function de(Le){if(!Le.route.action&&!Le.route.lazy){let vn=Jt(405,{method:q.formMethod,pathname:j,routeId:L});return bn(N,L,vn,{flushSync:ae}),!0}return!1}if(!Z&&de(B))return;let ne=x.fetchers.get(N);gn(N,PP(q,ne),{flushSync:ae});let te=new AbortController,_e=to(t.history,j,te.signal,q);if(Z){let Le=await ns(G,j,_e.signal);if(Le.type==="aborted")return;if(Le.type==="error"){let{error:vn}=ri(j,Le);bn(N,L,vn,{flushSync:ae});return}else if(Le.matches){if(G=Le.matches,B=$a(G,j),de(B))return}else{bn(N,L,Jt(404,{pathname:j}),{flushSync:ae});return}}ge.set(N,te);let ke=W,Ce=(await ni("action",_e,[B],G))[0];if(_e.signal.aborted){ge.get(N)===te&&ge.delete(N);return}if(f.v7_fetcherPersist&&xe.has(N)){if(fs(Ce)||wn(Ce)){gn(N,di(void 0));return}}else{if(fs(Ce))if(ge.delete(N),ee>ke){gn(N,di(void 0));return}else return me.add(N),gn(N,La(q)),Tr(_e,Ce,{fetcherSubmission:q});if(wn(Ce)){bn(N,L,Ce.error);return}}if(hs(Ce))throw Jt(400,{type:"defer-action"});let ct=x.navigation.location||x.location,Ze=to(t.history,ct,te.signal),ii=a||o,tr=x.navigation.state!=="idle"?ls(ii,x.navigation.location,u):x.matches;Ee(tr,"Didn't find any matches after fetcher action");let Un=++W;ie.set(N,Un);let Cr=La(q,Ce.data);x.fetchers.set(N,Cr);let[nr,Vt]=S_(t.history,x,tr,q,ct,!1,f.unstable_skipActionErrorRevalidation,ye,ut,Yt,xe,ce,me,ii,u,[B.route.id,Ce]);Vt.filter(Le=>Le.key!==N).forEach(Le=>{let vn=Le.key,va=x.fetchers.get(vn),Su=La(void 0,va?va.data:void 0);x.fetchers.set(vn,Su),ge.has(vn)&&Vn(vn),Le.controller&&ge.set(vn,Le.controller)}),vt({fetchers:new Map(x.fetchers)});let xn=()=>Vt.forEach(Le=>Vn(Le.key));te.signal.addEventListener("abort",xn);let{loaderResults:si,fetcherResults:Ys}=await yt(x.matches,tr,nr,Vt,Ze);if(te.signal.aborted)return;te.signal.removeEventListener("abort",xn),ie.delete(N),ge.delete(N),Vt.forEach(Le=>ge.delete(Le.key));let pe=D_([...si,...Ys]);if(pe){if(pe.idx>=nr.length){let Le=Vt[pe.idx-nr.length].key;me.add(Le)}return Tr(Ze,pe.result)}let{loaderData:$e,errors:Ut}=P_(x,x.matches,nr,si,void 0,Vt,Ys,je);if(x.fetchers.has(N)){let Le=di(Ce.data);x.fetchers.set(N,Le)}Tu(Un),x.navigation.state==="loading"&&Un>ee?(Ee(T,"Expected pending action"),_&&_.abort(),Zn(x.navigation.location,{matches:tr,loaderData:$e,errors:Ut,fetchers:new Map(x.fetchers)})):(vt({errors:Ut,loaderData:b_(x.loaderData,$e,tr,Ut),fetchers:new Map(x.fetchers)}),ye=!1)}async function da(N,L,j,B,G,Z,ae,q){let de=x.fetchers.get(N);gn(N,La(q,de?de.data:void 0),{flushSync:ae});let ne=new AbortController,te=to(t.history,j,ne.signal);if(Z){let Ce=await ns(G,j,te.signal);if(Ce.type==="aborted")return;if(Ce.type==="error"){let{error:ct}=ri(j,Ce);bn(N,L,ct,{flushSync:ae});return}else if(Ce.matches)G=Ce.matches,B=$a(G,j);else{bn(N,L,Jt(404,{pathname:j}),{flushSync:ae});return}}ge.set(N,ne);let _e=W,Oe=(await ni("loader",te,[B],G))[0];if(hs(Oe)&&(Oe=await oT(Oe,te.signal,!0)||Oe),ge.get(N)===ne&&ge.delete(N),!te.signal.aborted){if(xe.has(N)){gn(N,di(void 0));return}if(fs(Oe))if(ee>_e){gn(N,di(void 0));return}else{me.add(N),await Tr(te,Oe);return}if(wn(Oe)){bn(N,L,Oe.error);return}Ee(!hs(Oe),"Unhandled fetcher deferred data"),gn(N,di(Oe.data))}}async function Tr(N,L,j){let{submission:B,fetcherSubmission:G,replace:Z}=j===void 0?{}:j;L.response.headers.has("X-Remix-Revalidate")&&(ye=!0);let ae=L.response.headers.get("Location");Ee(ae,"Expected a Location header on the redirect Response"),ae=R_(ae,new URL(N.url),u);let q=Dl(x.location,ae,{_isRedirect:!0});if(n){let Oe=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Oe=!0;else if(Tg.test(ae)){const Ce=t.history.createURL(ae);Oe=Ce.origin!==e.location.origin||ru(Ce.pathname,u)==null}if(Oe){Z?e.location.replace(ae):e.location.assign(ae);return}}_=null;let de=Z===!0?ft.Replace:ft.Push,{formMethod:ne,formAction:te,formEncType:_e}=x.navigation;!B&&!G&&ne&&te&&_e&&(B=L_(x.navigation));let ke=B||G;if(uP.has(L.response.status)&&ke&&Hn(ke.formMethod))await er(de,q,{submission:et({},ke,{formAction:ae}),preventScrollReset:v});else{let Oe=Ef(q,B);await er(de,q,{overrideNavigation:Oe,fetcherSubmission:G,preventScrollReset:v})}}async function ni(N,L,j,B){try{let G=await yP(c,N,L,j,B,s,i);return await Promise.all(G.map((Z,ae)=>{if(kP(Z)){let q=Z.result;return{type:Ue.redirect,response:EP(q,L,j[ae].route.id,B,u,f.v7_relativeSplatPath)}}return wP(Z)}))}catch(G){return j.map(()=>({type:Ue.error,error:G}))}}async function yt(N,L,j,B,G){let[Z,...ae]=await Promise.all([j.length?ni("loader",G,j,L):[],...B.map(q=>{if(q.matches&&q.match&&q.controller){let de=to(t.history,q.path,q.controller.signal);return ni("loader",de,[q.match],q.matches).then(ne=>ne[0])}else return Promise.resolve({type:Ue.error,error:Jt(404,{pathname:q.path})})})]);return await Promise.all([O_(N,j,Z,Z.map(()=>G.signal),!1,x.loaderData),O_(N,B.map(q=>q.match),ae,B.map(q=>q.controller?q.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ae}}function _t(){ye=!0,ut.push(...ts()),ce.forEach((N,L)=>{ge.has(L)&&(Yt.push(L),Vn(L))})}function gn(N,L,j){j===void 0&&(j={}),x.fetchers.set(N,L),vt({fetchers:new Map(x.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function bn(N,L,j,B){B===void 0&&(B={});let G=ol(x.matches,L);qs(N),vt({errors:{[G.route.id]:j},fetchers:new Map(x.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function ha(N){return f.v7_fetcherPersist&&(ve.set(N,(ve.get(N)||0)+1),xe.has(N)&&xe.delete(N)),x.fetchers.get(N)||cP}function qs(N){let L=x.fetchers.get(N);ge.has(N)&&!(L&&L.state==="loading"&&ie.has(N))&&Vn(N),ce.delete(N),ie.delete(N),me.delete(N),xe.delete(N),x.fetchers.delete(N)}function Zi(N){if(f.v7_fetcherPersist){let L=(ve.get(N)||0)-1;L<=0?(ve.delete(N),xe.add(N)):ve.set(N,L)}else qs(N);vt({fetchers:new Map(x.fetchers)})}function Vn(N){let L=ge.get(N);Ee(L,"Expected fetch controller: "+N),L.abort(),ge.delete(N)}function fa(N){for(let L of N){let j=ha(L),B=di(j.data);x.fetchers.set(L,B)}}function Ks(){let N=[],L=!1;for(let j of me){let B=x.fetchers.get(j);Ee(B,"Expected fetcher: "+j),B.state==="loading"&&(me.delete(j),N.push(j),L=!0)}return fa(N),L}function Tu(N){let L=[];for(let[j,B]of ie)if(B<N){let G=x.fetchers.get(j);Ee(G,"Expected fetcher: "+j),G.state==="loading"&&(Vn(j),ie.delete(j),L.push(j))}return fa(L),L.length>0}function Fh(N,L){let j=x.blockers.get(N)||Oa;return ze.get(N)!==L&&ze.set(N,L),j}function Gs(N){x.blockers.delete(N),ze.delete(N)}function es(N,L){let j=x.blockers.get(N)||Oa;Ee(j.state==="unblocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="blocked"||j.state==="blocked"&&L.state==="proceeding"||j.state==="blocked"&&L.state==="unblocked"||j.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+L.state);let B=new Map(x.blockers);B.set(N,L),vt({blockers:B})}function pa(N){let{currentLocation:L,nextLocation:j,historyAction:B}=N;if(ze.size===0)return;ze.size>1&&Rs(!1,"A router only supports one blocker at a time");let G=Array.from(ze.entries()),[Z,ae]=G[G.length-1],q=x.blockers.get(Z);if(!(q&&q.state==="proceeding")&&ae({currentLocation:L,nextLocation:j,historyAction:B}))return Z}function Ir(N){let L=Jt(404,{pathname:N}),j=a||o,{matches:B,route:G}=N_(j);return ts(),{notFoundMatches:B,route:G,error:L}}function ri(N,L){let j=L.partialMatches,B=j[j.length-1].route,G=Jt(400,{type:"route-discovery",routeId:B.id,pathname:N,message:L.error!=null&&"message"in L.error?L.error:String(L.error)});return{notFoundMatches:j,route:B,error:G}}function ts(N){let L=[];return je.forEach((j,B)=>{(!N||N(B))&&(j.cancel(),L.push(B),je.delete(B))}),L}function Sr(N,L,j){if(k=N,P=L,C=j||null,!S&&x.navigation===wf){S=!0;let B=ga(x.location,x.matches);B!=null&&vt({restoreScrollPosition:B})}return()=>{k=null,P=null,C=null}}function ma(N,L){return C&&C(N,L.map(B=>BA(B,x.loaderData)))||N.key}function Qs(N,L){if(k&&P){let j=ma(N,L);k[j]=P()}}function ga(N,L){if(k){let j=ma(N,L),B=k[j];if(typeof B=="number")return B}return null}function kr(N,L,j){if(d)if(N){let B=N[N.length-1].route;if(B.path&&(B.path==="*"||B.path.endsWith("/*")))return{active:!0,matches:Pc(L,j,u,!0)}}else return{active:!0,matches:Pc(L,j,u,!0)||[]};return{active:!1,matches:null}}async function ns(N,L,j){let B=N,G=B.length>0?B[B.length-1].route:null;for(;;){let Z=a==null,ae=a||o;try{await gP(d,L,B,ae,s,i,At,j)}catch(te){return{type:"error",error:te,partialMatches:B}}finally{Z&&(o=[...o])}if(j.aborted)return{type:"aborted"};let q=ls(ae,L,u),de=!1;if(q){let te=q[q.length-1].route;if(te.index)return{type:"success",matches:q};if(te.path&&te.path.length>0)if(te.path==="*")de=!0;else return{type:"success",matches:q}}let ne=Pc(ae,L,u,!0);if(!ne||B.map(te=>te.route.id).join("-")===ne.map(te=>te.route.id).join("-"))return{type:"success",matches:de?q:null};if(B=ne,G=B[B.length-1].route,G.path==="*")return{type:"success",matches:B}}}function Pt(N){s={},a=Ol(N,i,void 0,s)}function Iu(N,L){let j=a==null;rT(N,L,a||o,s,i),j&&(o=[...o],vt({}))}return F={get basename(){return u},get future(){return f},get state(){return x},get routes(){return o},get window(){return e},initialize:Mh,subscribe:Hs,enableScrollRestoration:Sr,navigate:Ws,fetch:Eu,revalidate:la,createHref:N=>t.history.createHref(N),encodeLocation:N=>t.history.encodeLocation(N),getFetcher:ha,deleteFetcher:Zi,dispose:$s,getBlocker:Fh,deleteBlocker:Gs,patchRoutes:Iu,_internalFetchControllers:ge,_internalActiveDeferreds:je,_internalSetRoutes:Pt},F}function fP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Lp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=ZE(i||".",JE(u,s),ru(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Ig(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Di([n,d.pathname])),nu(d)}function I_(t,e,n,r){if(!r||!fP(r))return{path:n};if(r.formMethod&&!RP(r.formMethod))return{path:n,error:Jt(405,{method:r.formMethod})};let i=()=>({path:n,error:Jt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=iT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Hn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,k)=>{let[C,P]=k;return""+E+C+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Hn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Mp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Mp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=A_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=A_(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Hn(d.formMethod))return{path:n,submission:d};let f=Xr(n);return e&&f.search&&Ig(f.search)&&u.append("index",""),f.search="?"+u,{path:nu(f),submission:d}}function pP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function S_(t,e,n,r,i,s,o,a,u,c,d,f,p,E,k,C){let P=C?wn(C[1])?C[1].error:C[1].data:void 0,S=t.createURL(e.location),y=t.createURL(i),I=C&&wn(C[1])?C[0]:void 0,D=I?pP(n,I):n,F=C?C[1].statusCode:void 0,x=o&&F&&F>=400,T=D.filter((_,R)=>{let{route:b}=_;if(b.lazy)return!0;if(b.loader==null)return!1;if(s)return typeof b.loader!="function"||b.loader.hydrate?!0:e.loaderData[b.id]===void 0&&(!e.errors||e.errors[b.id]===void 0);if(mP(e.loaderData,e.matches[R],_)||u.some(ye=>ye===_.route.id))return!0;let O=e.matches[R],A=_;return k_(_,et({currentUrl:S,currentParams:O.params,nextUrl:y,nextParams:A.params},r,{actionResult:P,unstable_actionStatus:F,defaultShouldRevalidate:x?!1:a||S.pathname+S.search===y.pathname+y.search||S.search!==y.search||nT(O,A)}))}),v=[];return f.forEach((_,R)=>{if(s||!n.some(ut=>ut.route.id===_.routeId)||d.has(R))return;let b=ls(E,_.path,k);if(!b){v.push({key:R,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(R),A=$a(b,_.path),ye=!1;p.has(R)?ye=!1:c.includes(R)?ye=!0:O&&O.state!=="idle"&&O.data===void 0?ye=a:ye=k_(A,et({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:F,defaultShouldRevalidate:x?!1:a})),ye&&v.push({key:R,routeId:_.routeId,path:_.path,matches:b,match:A,controller:new AbortController})}),[T,v]}function mP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function nT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function k_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function gP(t,e,n,r,i,s,o,a){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{a.aborted||rT(d,f,r,i,s)}}),o.set(u,c)),c&&SP(c)&&await c}finally{o.delete(u)}}function rT(t,e,n,r,i){if(t){var s;let o=r[t];Ee(o,"No route found to patch children into: routeId = "+t);let a=Ol(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=Ol(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function C_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Ee(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Rs(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!UA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,et({},e(i),{lazy:void 0}))}function vP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function yP(t,e,n,r,i,s,o,a){let u=r.reduce((f,p)=>f.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let p=u.has(f.route.id);return et({},f,{shouldLoad:p,resolve:k=>(c.add(f.route.id),p?_P(e,n,f,s,o,k,a):Promise.resolve({type:Ue.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>Ee(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,p)=>u.has(i[p].route.id))}async function _P(t,e,n,r,i,s,o){let a,u,c=d=>{let f,p=new Promise((C,P)=>f=P);u=()=>f(),e.signal.addEventListener("abort",u);let E=C=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...C!==void 0?[C]:[]),k;return s?k=s(C=>E(C)):k=(async()=>{try{return{type:"data",result:await E()}}catch(C){return{type:"error",result:C}}})(),Promise.race([k,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[p]=await Promise.all([c(d).catch(E=>{f=E}),C_(n.route,i,r)]);if(f!==void 0)throw f;a=p}else if(await C_(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),p=f.pathname+f.search;throw Jt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Ue.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),p=f.pathname+f.search;throw Jt(404,{pathname:p})}Ee(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Ue.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function wP(t){let{result:e,type:n,status:r}=t;if(sT(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:Ue.error,error:a}}return n===Ue.error?{type:Ue.error,error:new Eg(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Ue.data,data:o,statusCode:e.status,headers:e.headers}}if(n===Ue.error)return{type:Ue.error,error:e,statusCode:th(e)?e.status:r};if(CP(e)){var i,s;return{type:Ue.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Ue.data,data:e,statusCode:r}}function EP(t,e,n,r,i,s){let o=t.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Tg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Lp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function R_(t,e,n){if(Tg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=ru(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function to(t,e,n,r){let i=t.createURL(iT(e)).toString(),s={signal:n};if(r&&Hn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Mp(r.formData):s.body=r.formData}return new Request(i,s)}function Mp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function A_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function TP(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&wn(r[1])?r[1].error:void 0;return n.forEach((p,E)=>{let k=e[E].route.id;if(Ee(!fs(p),"Cannot handle redirect results in processLoaderData"),wn(p)){let C=p.error;f!==void 0&&(C=f,f=void 0),a=a||{};{let P=ol(t,k);a[P.route.id]==null&&(a[P.route.id]=C)}o[k]=void 0,c||(c=!0,u=th(p.error)?p.error.status:500),p.headers&&(d[k]=p.headers)}else hs(p)?(i.set(k,p.deferredData),o[k]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[k]=p.headers)):(o[k]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[k]=p.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function P_(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=TP(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:p,controller:E}=s[d];Ee(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let k=o[d];if(!(E&&E.signal.aborted))if(wn(k)){let C=ol(t.matches,p==null?void 0:p.route.id);c&&c[C.route.id]||(c=et({},c,{[C.route.id]:k.error})),t.fetchers.delete(f)}else if(fs(k))Ee(!1,"Unhandled fetcher revalidation redirect");else if(hs(k))Ee(!1,"Unhandled fetcher deferred data");else{let C=di(k.data);t.fetchers.set(f,C)}}return{loaderData:u,errors:c}}function b_(t,e,n,r){let i=et({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function x_(t){return t?wn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ol(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function N_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Jt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Eg(t||500,a,new Error(u),!0)}function D_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(fs(n))return{result:n,idx:e}}}function iT(t){let e=typeof t=="string"?Xr(t):t;return nu(et({},e,{hash:""}))}function IP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function SP(t){return typeof t=="object"&&t!=null&&"then"in t}function kP(t){return sT(t.result)&&lP.has(t.result.status)}function hs(t){return t.type===Ue.deferred}function wn(t){return t.type===Ue.error}function fs(t){return(t&&t.type)===Ue.redirect}function CP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function sT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function RP(t){return aP.has(t.toLowerCase())}function Hn(t){return sP.has(t.toLowerCase())}async function O_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!nT(c,u)&&(s&&s[u.route.id])!==void 0;if(hs(a)&&(i||d)){let f=r[o];Ee(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await oT(a,f,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function oT(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ue.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ue.error,error:i}}return{type:Ue.data,data:t.deferredData.data}}}function Ig(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function $a(t,e){let n=typeof e=="string"?Xr(e).search:e.search;if(t[t.length-1].route.index&&Ig(n||""))return t[t.length-1];let r=XE(t);return r[r.length-1]}function L_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ef(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function AP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function La(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function PP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function di(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function bP(t,e){try{let n=t.sessionStorage.getItem(tT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function xP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(tT,JSON.stringify(n))}catch(r){Rs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hd.apply(this,arguments)}const nh=V.createContext(null),aT=V.createContext(null),rh=V.createContext(null),Sg=V.createContext(null),Zo=V.createContext({outlet:null,matches:[],isDataRoute:!1}),lT=V.createContext(null);function ih(){return V.useContext(Sg)!=null}function ea(){return ih()||Ee(!1),V.useContext(Sg).location}function uT(t){V.useContext(rh).static||V.useLayoutEffect(t)}function sn(){let{isDataRoute:t}=V.useContext(Zo);return t?$P():NP()}function NP(){ih()||Ee(!1);let t=V.useContext(nh),{basename:e,future:n,navigator:r}=V.useContext(rh),{matches:i}=V.useContext(Zo),{pathname:s}=ea(),o=JSON.stringify(JE(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return uT(()=>{a.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=ZE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Di([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function DP(t,e,n,r){ih()||Ee(!1);let{navigator:i}=V.useContext(rh),{matches:s}=V.useContext(Zo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ea(),d;d=c;let f=d.pathname||"/",p=f;if(u!=="/"){let C=u.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=ls(t,{pathname:p});return VP(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Di([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Di([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r)}function OP(){let t=zP(),e=th(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const LP=V.createElement(OP,null);class MP extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Zo.Provider,{value:this.props.routeContext},V.createElement(lT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jP(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(nh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Zo.Provider,{value:e},r)}function VP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:E}=n,k=f.route.loader&&p[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||k){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let E,k=!1,C=null,P=null;n&&(E=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||LP,u&&(c<0&&p===0?(HP("route-fallback"),k=!0,P=null):c===p&&(k=!0,P=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),y=()=>{let I;return E?I=C:k?I=P:f.route.Component?I=V.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,V.createElement(jP,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?V.createElement(MP,{location:n.location,revalidation:n.revalidation,component:C,error:E,children:y(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):y()},null)}var cT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cT||{}),fd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fd||{});function UP(t){let e=V.useContext(nh);return e||Ee(!1),e}function FP(t){let e=V.useContext(aT);return e||Ee(!1),e}function BP(t){let e=V.useContext(Zo);return e||Ee(!1),e}function dT(t){let e=BP(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function zP(){var t;let e=V.useContext(lT),n=FP(fd.UseRouteError),r=dT(fd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $P(){let{router:t}=UP(cT.UseNavigateStable),e=dT(fd.UseNavigateStable),n=V.useRef(!1);return uT(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,hd({fromRouteId:e},s)))},[t,e])}const M_={};function HP(t,e,n){M_[t]||(M_[t]=!0)}function WP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ft.Pop,navigator:s,static:o=!1,future:a}=t;ih()&&Ee(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:hd({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:d="/",search:f="",hash:p="",state:E=null,key:k="default"}=r,C=V.useMemo(()=>{let P=ru(d,u);return P==null?null:{location:{pathname:P,search:f,hash:p,state:E,key:k},navigationType:i}},[u,d,f,p,E,k,i]);return C==null?null:V.createElement(rh.Provider,{value:c},V.createElement(Sg.Provider,{children:n,value:C}))}new Promise(()=>{});function qP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:V.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:V.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:V.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pd.apply(this,arguments)}const KP="6";try{window.__reactRouterVersion=KP}catch{}function GP(t,e){return hP({basename:void 0,future:pd({},void 0,{v7_prependBasename:!0}),history:MA({window:void 0}),hydrationData:QP(),routes:t,mapRouteProperties:qP,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function QP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=pd({},e,{errors:YP(e.errors)})),e}function YP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Eg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const XP=V.createContext({isTransitioning:!1}),JP=V.createContext(new Map),ZP="startTransition",j_=IC[ZP],eb="flushSync",V_=LA[eb];function tb(t){j_?j_(t):t()}function Ma(t){V_?V_(t):t()}let nb=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function rb(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=V.useState(n.state),[o,a]=V.useState(),[u,c]=V.useState({isTransitioning:!1}),[d,f]=V.useState(),[p,E]=V.useState(),[k,C]=V.useState(),P=V.useRef(new Map),{v7_startTransition:S}=r||{},y=V.useCallback(T=>{S?tb(T):T()},[S]),I=V.useCallback((T,v)=>{let{deletedFetchers:_,unstable_flushSync:R,unstable_viewTransitionOpts:b}=v;_.forEach(A=>P.current.delete(A)),T.fetchers.forEach((A,ye)=>{A.data!==void 0&&P.current.set(ye,A.data)});let O=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!b||O){R?Ma(()=>s(T)):y(()=>s(T));return}if(R){Ma(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation})});let A=n.window.document.startViewTransition(()=>{Ma(()=>s(T))});A.finished.finally(()=>{Ma(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})})}),Ma(()=>E(A));return}p?(d&&d.resolve(),p.skipTransition(),C({state:T,currentLocation:b.currentLocation,nextLocation:b.nextLocation})):(a(T),c({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}))},[n.window,p,d,P,y]);V.useLayoutEffect(()=>n.subscribe(I),[n,I]),V.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new nb)},[u]),V.useEffect(()=>{if(d&&o&&n.window){let T=o,v=d.promise,_=n.window.document.startViewTransition(async()=>{y(()=>s(T)),await v});_.finished.finally(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})}),E(_)}},[y,o,d,n.window]),V.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),V.useEffect(()=>{!u.isTransitioning&&k&&(a(k.state),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}),C(void 0))},[u.isTransitioning,k]),V.useEffect(()=>{},[]);let D=V.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,v,_)=>n.navigate(T,{state:v,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(T,v,_)=>n.navigate(T,{replace:!0,state:v,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),F=n.basename||"/",x=V.useMemo(()=>({router:n,navigator:D,static:!1,basename:F}),[n,D,F]);return V.createElement(V.Fragment,null,V.createElement(nh.Provider,{value:x},V.createElement(aT.Provider,{value:i},V.createElement(JP.Provider,{value:P.current},V.createElement(XP.Provider,{value:u},V.createElement(WP,{basename:F,location:i.location,navigationType:i.historyAction,navigator:D,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?V.createElement(ib,{routes:n.routes,future:n.future,state:i}):e))))),null)}function ib(t){let{routes:e,future:n,state:r}=t;return DP(e,void 0,r,n)}var U_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(U_||(U_={}));var F_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F_||(F_={}));const hT="/assets/logo-CtZiTYfW.png",sb=()=>{const t=sn(),e=n=>{n.preventDefault(),t("/signup")};return g.jsx("div",{className:"background",children:g.jsx("div",{className:"overlay",children:g.jsxs("div",{className:"content",children:[g.jsx("img",{src:hT,width:"250px",height:"115px"}),g.jsx("h1",{className:"heroTitle",children:"Creditworld"}),g.jsx("p",{className:"heroDesc",children:"We specialize in identifying, disputing, repairing and rectifying inaccurate or incomplete information on your credit report. "}),g.jsx("button",{className:"button",onClick:e,children:"Get Started"})]})})})},B_=()=>g.jsxs("div",{className:"bannerBg",children:[g.jsx("p",{className:"bannerTitle",children:"Lets help improve your credit score today."}),g.jsx("button",{className:"bannerButton",children:"Sign up"})]}),ob=()=>{const t=sn();return g.jsxs("div",{className:"AboutBg",children:[g.jsx("h1",{className:"titleAbout",children:"About Creditworld"}),g.jsx("p",{className:"desc",children:"At CreditWorld,we revolutionize credit management, Our mission is to provide a secure, transparent, and efficient platform for managing credit accounts. By leveraging our partnership with renowned stakeholders in the industry, we ensure unparalleled trust and reliability in our credit repair processes."}),g.jsx("button",{className:"AboutButton",onClick:e=>{e.preventDefault(),t("/signup")},children:"Start Today"})]})};function z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z_(Object(n),!0).forEach(function(r){St(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function md(t){"@babel/helpers - typeof";return md=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},md(t)}function ab(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lb(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ub(t,e,n){return e&&lb(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function St(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kg(t,e){return db(t)||fb(t,e)||fT(t,e)||mb()}function iu(t){return cb(t)||hb(t)||fT(t)||pb()}function cb(t){if(Array.isArray(t))return jp(t)}function db(t){if(Array.isArray(t))return t}function hb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function fT(t,e){if(t){if(typeof t=="string")return jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(t,e)}}function jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $_=function(){},Cg={},pT={},mT=null,gT={mark:$_,measure:$_};try{typeof window<"u"&&(Cg=window),typeof document<"u"&&(pT=document),typeof MutationObserver<"u"&&(mT=MutationObserver),typeof performance<"u"&&(gT=performance)}catch{}var gb=Cg.navigator||{},H_=gb.userAgent,W_=H_===void 0?"":H_,Ui=Cg,Qe=pT,q_=mT,Ju=gT;Ui.document;var Jr=!!Qe.documentElement&&!!Qe.head&&typeof Qe.addEventListener=="function"&&typeof Qe.createElement=="function",vT=~W_.indexOf("MSIE")||~W_.indexOf("Trident/"),Zu,ec,tc,nc,rc,Hr="___FONT_AWESOME___",Vp=16,yT="fa",_T="svg-inline--fa",As="data-fa-i2svg",Up="data-fa-pseudo-element",vb="data-fa-pseudo-element-pending",Rg="data-prefix",Ag="data-icon",K_="fontawesome-i2svg",yb="async",_b=["HTML","HEAD","STYLE","SCRIPT"],wT=function(){try{return!0}catch{return!1}}(),Ke="classic",lt="sharp",Pg=[Ke,lt];function su(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ke]}})}var Ll=su((Zu={},St(Zu,Ke,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),St(Zu,lt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Zu)),Ml=su((ec={},St(ec,Ke,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),St(ec,lt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ec)),jl=su((tc={},St(tc,Ke,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),St(tc,lt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),tc)),wb=su((nc={},St(nc,Ke,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),St(nc,lt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),nc)),Eb=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ET="fa-layers-text",Tb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ib=su((rc={},St(rc,Ke,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),St(rc,lt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),rc)),TT=[1,2,3,4,5,6,7,8,9,10],Sb=TT.concat([11,12,13,14,15,16,17,18,19,20]),kb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vl=new Set;Object.keys(Ml[Ke]).map(Vl.add.bind(Vl));Object.keys(Ml[lt]).map(Vl.add.bind(Vl));var Cb=[].concat(Pg,iu(Vl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ps.GROUP,ps.SWAP_OPACITY,ps.PRIMARY,ps.SECONDARY]).concat(TT.map(function(t){return"".concat(t,"x")})).concat(Sb.map(function(t){return"w-".concat(t)})),al=Ui.FontAwesomeConfig||{};function Rb(t){var e=Qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ab(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Qe&&typeof Qe.querySelector=="function"){var Pb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pb.forEach(function(t){var e=kg(t,2),n=e[0],r=e[1],i=Ab(Rb(n));i!=null&&(al[r]=i)})}var IT={styleDefault:"solid",familyDefault:"classic",cssPrefix:yT,replacementClass:_T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};al.familyPrefix&&(al.cssPrefix=al.familyPrefix);var zo=Q(Q({},IT),al);zo.autoReplaceSvg||(zo.observeMutations=!1);var J={};Object.keys(IT).forEach(function(t){Object.defineProperty(J,t,{enumerable:!0,set:function(n){zo[t]=n,ll.forEach(function(r){return r(J)})},get:function(){return zo[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(e){zo.cssPrefix=e,ll.forEach(function(n){return n(J)})},get:function(){return zo.cssPrefix}});Ui.FontAwesomeConfig=J;var ll=[];function bb(t){return ll.push(t),function(){ll.splice(ll.indexOf(t),1)}}var ui=Vp,ar={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xb(t){if(!(!t||!Jr)){var e=Qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Qe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Qe.head.insertBefore(e,r),t}}var Nb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ul(){for(var t=12,e="";t-- >0;)e+=Nb[Math.random()*62|0];return e}function ta(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bg(t){return t.classList?ta(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ST(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Db(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(ST(t[n]),'" ')},"").trim()}function sh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function xg(t){return t.size!==ar.size||t.x!==ar.x||t.y!==ar.y||t.rotate!==ar.rotate||t.flipX||t.flipY}function Ob(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Lb(t){var e=t.transform,n=t.width,r=n===void 0?Vp:n,i=t.height,s=i===void 0?Vp:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&vT?u+="translate(".concat(e.x/ui-r/2,"em, ").concat(e.y/ui-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/ui,"em), calc(-50% + ").concat(e.y/ui,"em)) "):u+="translate(".concat(e.x/ui,"em, ").concat(e.y/ui,"em) "),u+="scale(".concat(e.size/ui*(e.flipX?-1:1),", ").concat(e.size/ui*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var Mb=`:root, :host {
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
}`;function kT(){var t=yT,e=_T,n=J.cssPrefix,r=J.replacementClass,i=Mb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var G_=!1;function Tf(){J.autoAddCss&&!G_&&(xb(kT()),G_=!0)}var jb={mixout:function(){return{dom:{css:kT,insertCss:Tf}}},hooks:function(){return{beforeDOMElementCreation:function(){Tf()},beforeI2svg:function(){Tf()}}}},Wr=Ui||{};Wr[Hr]||(Wr[Hr]={});Wr[Hr].styles||(Wr[Hr].styles={});Wr[Hr].hooks||(Wr[Hr].hooks={});Wr[Hr].shims||(Wr[Hr].shims=[]);var qn=Wr[Hr],CT=[],Vb=function t(){Qe.removeEventListener("DOMContentLoaded",t),gd=1,CT.map(function(e){return e()})},gd=!1;Jr&&(gd=(Qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Qe.readyState),gd||Qe.addEventListener("DOMContentLoaded",Vb));function Ub(t){Jr&&(gd?setTimeout(t,0):CT.push(t))}function ou(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?ST(t):"<".concat(e," ").concat(Db(r),">").concat(s.map(ou).join(""),"</").concat(e,">")}function Q_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var If=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function Fb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fp(t){var e=Fb(t);return e.length===1?e[0].toString(16):null}function Bb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Y_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Y_(e);typeof qn.hooks.addPack=="function"&&!i?qn.hooks.addPack(t,Y_(e)):qn.styles[t]=Q(Q({},qn.styles[t]||{}),s),t==="fas"&&Bp("fa",e)}var ic,sc,oc,wo=qn.styles,zb=qn.shims,$b=(ic={},St(ic,Ke,Object.values(jl[Ke])),St(ic,lt,Object.values(jl[lt])),ic),Ng=null,RT={},AT={},PT={},bT={},xT={},Hb=(sc={},St(sc,Ke,Object.keys(Ll[Ke])),St(sc,lt,Object.keys(Ll[lt])),sc);function Wb(t){return~Cb.indexOf(t)}function qb(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Wb(i)?i:null}var NT=function(){var e=function(s){return If(wo,function(o,a,u){return o[u]=If(a,s,{}),o},{})};RT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),AT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),xT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in wo||J.autoFetchSvg,r=If(zb,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});PT=r.names,bT=r.unicodes,Ng=oh(J.styleDefault,{family:J.familyDefault})};bb(function(t){Ng=oh(t.styleDefault,{family:J.familyDefault})});NT();function Dg(t,e){return(RT[t]||{})[e]}function Kb(t,e){return(AT[t]||{})[e]}function ms(t,e){return(xT[t]||{})[e]}function DT(t){return PT[t]||{prefix:null,iconName:null}}function Gb(t){var e=bT[t],n=Dg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fi(){return Ng}var Og=function(){return{prefix:null,iconName:null,rest:[]}};function oh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ke:n,i=Ll[r][t],s=Ml[r][t]||Ml[r][i],o=t in qn.styles?t:null;return s||o||null}var X_=(oc={},St(oc,Ke,Object.keys(jl[Ke])),St(oc,lt,Object.keys(jl[lt])),oc);function ah(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},St(e,Ke,"".concat(J.cssPrefix,"-").concat(Ke)),St(e,lt,"".concat(J.cssPrefix,"-").concat(lt)),e),o=null,a=Ke;(t.includes(s[Ke])||t.some(function(c){return X_[Ke].includes(c)}))&&(a=Ke),(t.includes(s[lt])||t.some(function(c){return X_[lt].includes(c)}))&&(a=lt);var u=t.reduce(function(c,d){var f=qb(J.cssPrefix,d);if(wo[d]?(d=$b[a].includes(d)?wb[a][d]:d,o=d,c.prefix=d):Hb[a].indexOf(d)>-1?(o=d,c.prefix=oh(d,{family:a})):f?c.iconName=f:d!==J.replacementClass&&d!==s[Ke]&&d!==s[lt]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var p=o==="fa"?DT(c.iconName):{},E=ms(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||E||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!wo.far&&wo.fas&&!J.autoFetchSvg&&(c.prefix="fas")}return c},Og());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===lt&&(wo.fass||J.autoFetchSvg)&&(u.prefix="fass",u.iconName=ms(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Fi()||"fas"),u}var Qb=function(){function t(){ab(this,t),this.definitions={}}return ub(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Q(Q({},n.definitions[a]||{}),o[a]),Bp(a,o[a]);var u=jl[Ke][a];u&&Bp(u,o[a]),NT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,d=c[2];n[a]||(n[a]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][u]=c}),n}}]),t}(),J_=[],Eo={},bo={},Yb=Object.keys(bo);function Xb(t,e){var n=e.mixoutsTo;return J_=t,Eo={},Object.keys(bo).forEach(function(r){Yb.indexOf(r)===-1&&delete bo[r]}),J_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),md(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Eo[o]||(Eo[o]=[]),Eo[o].push(s[o])})}r.provides&&r.provides(bo)}),n}function zp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Eo[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ps(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Eo[t]||[];i.forEach(function(s){s.apply(null,n)})}function qr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return bo[t]?bo[t].apply(null,e):void 0}function $p(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Fi();if(e)return e=ms(n,e)||e,Q_(OT.definitions,n,e)||Q_(qn.styles,n,e)}var OT=new Qb,Jb=function(){J.autoReplaceSvg=!1,J.observeMutations=!1,Ps("noAuto")},Zb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jr?(Ps("beforeI2svg",e),qr("pseudoElements2svg",e),qr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,Ub(function(){tx({autoReplaceSvgRoot:n}),Ps("watch",e)})}},ex={icon:function(e){if(e===null)return null;if(md(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ms(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=oh(e[0]);return{prefix:r,iconName:ms(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(J.cssPrefix,"-"))>-1||e.match(Eb))){var i=ah(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Fi(),iconName:ms(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Fi();return{prefix:s,iconName:ms(s,e)||e}}}},Pn={noAuto:Jb,config:J,dom:Zb,parse:ex,library:OT,findIconDefinition:$p,toHtml:ou},tx=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Qe:n;(Object.keys(qn.styles).length>0||J.autoFetchSvg)&&Jr&&J.autoReplaceSvg&&Pn.dom.i2svg({node:r})};function lh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ou(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Jr){var r=Qe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function nx(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(xg(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=sh(Q(Q({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function rx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},i),{},{id:o}),children:r}]}]}function Lg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,d=t.titleId,f=t.extra,p=t.watchable,E=p===void 0?!1:p,k=r.found?r:n,C=k.width,P=k.height,S=i==="fak",y=[J.replacementClass,s?"".concat(J.cssPrefix,"-").concat(s):""].filter(function(_){return f.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(f.classes).join(" "),I={children:[],attributes:Q(Q({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(P)})},D=S&&!~f.classes.indexOf("fa-fw")?{width:"".concat(C/P*16*.0625,"em")}:{};E&&(I.attributes[As]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||Ul())},children:[u]}),delete I.attributes.title);var F=Q(Q({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:Q(Q({},D),f.styles)}),x=r.found&&n.found?qr("generateAbstractMask",F)||{children:[],attributes:{}}:qr("generateAbstractIcon",F)||{children:[],attributes:{}},T=x.children,v=x.attributes;return F.children=T,F.attributes=v,a?rx(F):nx(F)}function Z_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=Q(Q(Q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[As]="");var d=Q({},o.styles);xg(i)&&(d.transform=Lb({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=sh(d);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function ix(t){var e=t.content,n=t.title,r=t.extra,i=Q(Q(Q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=sh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Sf=qn.styles;function Hp(t){var e=t[0],n=t[1],r=t.slice(4),i=kg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(ps.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ps.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(ps.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var sx={found:!1,width:512,height:512};function ox(t,e){!wT&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wp(t,e){var n=e;return e==="fa"&&J.styleDefault!==null&&(e=Fi()),new Promise(function(r,i){if(qr("missingIconAbstract"),n==="fa"){var s=DT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Sf[e]&&Sf[e][t]){var o=Sf[e][t];return r(Hp(o))}ox(t,e),r(Q(Q({},sx),{},{icon:J.showMissingIcons&&t?qr("missingIconAbstract")||{}:{}}))})}var e0=function(){},qp=J.measurePerformance&&Ju&&Ju.mark&&Ju.measure?Ju:{mark:e0,measure:e0},Ha='FA "6.5.2"',ax=function(e){return qp.mark("".concat(Ha," ").concat(e," begins")),function(){return LT(e)}},LT=function(e){qp.mark("".concat(Ha," ").concat(e," ends")),qp.measure("".concat(Ha," ").concat(e),"".concat(Ha," ").concat(e," begins"),"".concat(Ha," ").concat(e," ends"))},Mg={begin:ax,end:LT},bc=function(){};function t0(t){var e=t.getAttribute?t.getAttribute(As):null;return typeof e=="string"}function lx(t){var e=t.getAttribute?t.getAttribute(Rg):null,n=t.getAttribute?t.getAttribute(Ag):null;return e&&n}function ux(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function cx(){if(J.autoReplaceSvg===!0)return xc.replace;var t=xc[J.autoReplaceSvg];return t||xc.replace}function dx(t){return Qe.createElementNS("http://www.w3.org/2000/svg",t)}function hx(t){return Qe.createElement(t)}function MT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?dx:hx:n;if(typeof t=="string")return Qe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(MT(o,{ceFn:r}))}),i}function fx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(MT(i),n)}),n.getAttribute(As)===null&&J.keepOriginalSource){var r=Qe.createComment(fx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bg(n).indexOf(J.replacementClass))return xc.replace(e);var i=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===J.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ou(a)}).join(`
`);n.setAttribute(As,""),n.innerHTML=o}};function n0(t){t()}function jT(t,e){var n=typeof e=="function"?e:bc;if(t.length===0)n();else{var r=n0;J.mutateApproach===yb&&(r=Ui.requestAnimationFrame||n0),r(function(){var i=cx(),s=Mg.begin("mutate");t.map(i),s(),n()})}}var jg=!1;function VT(){jg=!0}function Kp(){jg=!1}var vd=null;function r0(t){if(q_&&J.observeMutations){var e=t.treeCallback,n=e===void 0?bc:e,r=t.nodeCallback,i=r===void 0?bc:r,s=t.pseudoElementsCallback,o=s===void 0?bc:s,a=t.observeMutationsRoot,u=a===void 0?Qe:a;vd=new q_(function(c){if(!jg){var d=Fi();ta(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!t0(f.addedNodes[0])&&(J.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&J.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&t0(f.target)&&~kb.indexOf(f.attributeName))if(f.attributeName==="class"&&lx(f.target)){var p=ah(bg(f.target)),E=p.prefix,k=p.iconName;f.target.setAttribute(Rg,E||d),k&&f.target.setAttribute(Ag,k)}else ux(f.target)&&i(f.target)})}}),Jr&&vd.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function px(){vd&&vd.disconnect()}function mx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function gx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ah(bg(t));return i.prefix||(i.prefix=Fi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Kb(i.prefix,t.innerText)||Dg(i.prefix,Fp(t.innerText))),!i.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function vx(t){var e=ta(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return J.autoA11y&&(n?e["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(r||Ul()):(e["aria-hidden"]="true",e.focusable="false")),e}function yx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ar,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gx(t),r=n.iconName,i=n.prefix,s=n.rest,o=vx(t),a=zp("parseNodeAttributes",{},t),u=e.styleParser?mx(t):[];return Q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:ar,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var _x=qn.styles;function UT(t){var e=J.autoReplaceSvg==="nest"?i0(t,{styleParser:!1}):i0(t);return~e.extra.classes.indexOf(ET)?qr("generateLayersText",t,e):qr("generateSvgReplacementMutation",t,e)}var Bi=new Set;Pg.map(function(t){Bi.add("fa-".concat(t))});Object.keys(Ll[Ke]).map(Bi.add.bind(Bi));Object.keys(Ll[lt]).map(Bi.add.bind(Bi));Bi=iu(Bi);function s0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jr)return Promise.resolve();var n=Qe.documentElement.classList,r=function(f){return n.add("".concat(K_,"-").concat(f))},i=function(f){return n.remove("".concat(K_,"-").concat(f))},s=J.autoFetchSvg?Bi:Pg.map(function(d){return"fa-".concat(d)}).concat(Object.keys(_x));s.includes("fa")||s.push("fa");var o=[".".concat(ET,":not([").concat(As,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(As,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ta(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Mg.begin("onTree"),c=a.reduce(function(d,f){try{var p=UT(f);p&&d.push(p)}catch(E){wT||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(p){jT(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(function(p){u(),f(p)})})}function wx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;UT(t).then(function(n){n&&jT([n],e)})}function Ex(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:$p(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$p(i||{})),t(r,Q(Q({},n),{},{mask:i}))}}var Tx=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ar:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,d=c===void 0?null:c,f=n.title,p=f===void 0?null:f,E=n.titleId,k=E===void 0?null:E,C=n.classes,P=C===void 0?[]:C,S=n.attributes,y=S===void 0?{}:S,I=n.styles,D=I===void 0?{}:I;if(e){var F=e.prefix,x=e.iconName,T=e.icon;return lh(Q({type:"icon"},e),function(){return Ps("beforeDOMElementCreation",{iconDefinition:e,params:n}),J.autoA11y&&(p?y["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(k||Ul()):(y["aria-hidden"]="true",y.focusable="false")),Lg({icons:{main:Hp(T),mask:u?Hp(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:x,transform:Q(Q({},ar),i),symbol:o,title:p,maskId:d,titleId:k,extra:{attributes:y,styles:D,classes:P}})})}},Ix={mixout:function(){return{icon:Ex(Tx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=s0,n.nodeCallback=wx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Qe:r,s=n.callback,o=s===void 0?function(){}:s;return s0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,d=r.mask,f=r.maskId,p=r.extra;return new Promise(function(E,k){Promise.all([Wp(i,a),d.iconName?Wp(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var P=kg(C,2),S=P[0],y=P[1];E([n,Lg({icons:{main:S,mask:y},prefix:a,iconName:i,transform:u,symbol:c,maskId:f,title:s,titleId:o,extra:p,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=sh(a);u.length>0&&(i.style=u);var c;return xg(o)&&(c=qr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Sx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return lh({type:"layer"},function(){Ps("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers")].concat(iu(s)).join(" ")},children:o}]})}}}},kx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,d=r.styles,f=d===void 0?{}:d;return lh({type:"counter",content:n},function(){return Ps("beforeDOMElementCreation",{content:n,params:r}),ix({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(J.cssPrefix,"-layers-counter")].concat(iu(a))}})})}}}},Cx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ar:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,d=r.attributes,f=d===void 0?{}:d,p=r.styles,E=p===void 0?{}:p;return lh({type:"text",content:n},function(){return Ps("beforeDOMElementCreation",{content:n,params:r}),Z_({content:n,transform:Q(Q({},ar),s),title:a,extra:{attributes:f,styles:E,classes:["".concat(J.cssPrefix,"-layers-text")].concat(iu(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if(vT){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();a=d.width/c,u=d.height/c}return J.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Z_({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},Rx=new RegExp('"',"ug"),o0=[1105920,1112319];function Ax(t){var e=t.replace(Rx,""),n=Bb(e,0),r=n>=o0[0]&&n<=o0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fp(i?e[0]:e),isSecondary:r||i}}function a0(t,e){var n="".concat(vb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ta(t.children),o=s.filter(function(T){return T.getAttribute(Up)===e})[0],a=Ui.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(Tb),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(u[2])?lt:Ke,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Ml[p][u[2].toLowerCase()]:Ib[p][c],k=Ax(f),C=k.value,P=k.isSecondary,S=u[0].startsWith("FontAwesome"),y=Dg(E,C),I=y;if(S){var D=Gb(C);D.iconName&&D.prefix&&(y=D.iconName,E=D.prefix)}if(y&&!P&&(!o||o.getAttribute(Rg)!==E||o.getAttribute(Ag)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var F=yx(),x=F.extra;x.attributes[Up]=e,Wp(y,E).then(function(T){var v=Lg(Q(Q({},F),{},{icons:{main:T,mask:Og()},prefix:E,iconName:I,extra:x,watchable:!0})),_=Qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=v.map(function(R){return ou(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Px(t){return Promise.all([a0(t,"::before"),a0(t,"::after")])}function bx(t){return t.parentNode!==document.head&&!~_b.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Up)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function l0(t){if(Jr)return new Promise(function(e,n){var r=ta(t.querySelectorAll("*")).filter(bx).map(Px),i=Mg.begin("searchPseudoElements");VT(),Promise.all(r).then(function(){i(),Kp(),e()}).catch(function(){i(),Kp(),n()})})}var xx={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=l0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Qe:r;J.searchPseudoElements&&l0(i)}}},u0=!1,Nx={mixout:function(){return{dom:{unwatch:function(){VT(),u0=!0}}}},hooks:function(){return{bootstrap:function(){r0(zp("mutationObserverCallbacks",{}))},noAuto:function(){px()},watch:function(n){var r=n.observeMutationsRoot;u0?Kp():r0(zp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},c0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Dx={mixout:function(){return{parse:{transform:function(n){return c0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=c0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},E={outer:a,inner:f,path:p};return{tag:"g",attributes:Q({},E.outer),children:[{tag:"g",attributes:Q({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Q(Q({},r.icon.attributes),E.path)}]}]}}}},kf={x:0,y:0,width:"100%",height:"100%"};function d0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ox(t){return t.tag==="g"?t.children:[t]}var Lx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ah(i.split(" ").map(function(o){return o.trim()})):Og();return s.prefix||(s.prefix=Fi()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,d=s.icon,f=o.width,p=o.icon,E=Ob({transform:u,containerWidth:f,iconWidth:c}),k={tag:"rect",attributes:Q(Q({},kf),{},{fill:"white"})},C=d.children?{children:d.children.map(d0)}:{},P={tag:"g",attributes:Q({},E.inner),children:[d0(Q({tag:d.tag,attributes:Q(Q({},d.attributes),E.path)},C))]},S={tag:"g",attributes:Q({},E.outer),children:[P]},y="mask-".concat(a||Ul()),I="clip-".concat(a||Ul()),D={tag:"mask",attributes:Q(Q({},kf),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,S]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Ox(p)},D]};return r.push(F,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(y,")")},kf)}),{children:r,attributes:i}}}},Mx={provides:function(e){var n=!1;Ui.matchMedia&&(n=Ui.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Q(Q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Q(Q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Q(Q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Q(Q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Vx=[jb,Ix,Sx,kx,Cx,xx,Nx,Dx,Lx,Mx,jx];Xb(Vx,{mixoutsTo:Pn});Pn.noAuto;Pn.config;Pn.library;Pn.dom;var Gp=Pn.parse;Pn.findIconDefinition;Pn.toHtml;var Ux=Pn.icon;Pn.layer;Pn.text;Pn.counter;var FT={exports:{}},Fx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bx=Fx,zx=Bx;function BT(){}function zT(){}zT.resetWarningCache=BT;var $x=function(){function t(r,i,s,o,a,u){if(u!==zx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zT,resetWarningCache:BT};return n.PropTypes=n,n};FT.exports=$x();var Hx=FT.exports;const we=km(Hx);function h0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function sr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h0(Object(n),!0).forEach(function(r){To(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yd(t){"@babel/helpers - typeof";return yd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yd(t)}function To(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qx(t,e){if(t==null)return{};var n=Wx(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Qp(t){return Kx(t)||Gx(t)||Qx(t)||Yx()}function Kx(t){if(Array.isArray(t))return Yp(t)}function Gx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qx(t,e){if(t){if(typeof t=="string")return Yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yp(t,e)}}function Yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Yx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xx(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,f=t.pulse,p=t.fixedWidth,E=t.inverse,k=t.border,C=t.listItem,P=t.flip,S=t.size,y=t.rotation,I=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":E,"fa-border":k,"fa-li":C,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},To(e,"fa-".concat(S),typeof S<"u"&&S!==null),To(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),To(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),To(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(F){return D[F]?F:null}).filter(function(F){return F})}function Jx(t){return t=t-0,t===t}function $T(t){return Jx(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Zx=["style"];function e2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function t2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=$T(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[e2(i)]=s:e[i]=s,e},{})}function HT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return HT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=t2(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[$T(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=qx(n,Zx);return i.attrs.style=sr(sr({},i.attrs.style),o),t.apply(void 0,[e.tag,sr(sr({},i.attrs),a)].concat(Qp(r)))}var WT=!1;try{WT=!0}catch{}function n2(){if(!WT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f0(t){if(t&&yd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gp.icon)return Gp.icon(t);if(t===null)return null;if(t&&yd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Cf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?To({},t,e):{}}var p0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},be=De.forwardRef(function(t,e){var n=sr(sr({},p0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=f0(r),f=Cf("classes",[].concat(Qp(Xx(n)),Qp((o||"").split(" ")))),p=Cf("transform",typeof n.transform=="string"?Gp.transform(n.transform):n.transform),E=Cf("mask",f0(i)),k=Ux(d,sr(sr(sr(sr({},f),p),E),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!k)return n2("Could not find icon",d),null;var C=k.abstract,P={ref:e};return Object.keys(n).forEach(function(S){p0.hasOwnProperty(S)||(P[S]=n[S])}),r2(C[0],P)});be.displayName="FontAwesomeIcon";be.propTypes={beat:we.bool,border:we.bool,beatFade:we.bool,bounce:we.bool,className:we.string,fade:we.bool,flash:we.bool,mask:we.oneOfType([we.object,we.array,we.string]),maskId:we.string,fixedWidth:we.bool,inverse:we.bool,flip:we.oneOf([!0,!1,"horizontal","vertical","both"]),icon:we.oneOfType([we.object,we.array,we.string]),listItem:we.bool,pull:we.oneOf(["right","left"]),pulse:we.bool,rotation:we.oneOf([0,90,180,270]),shake:we.bool,size:we.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:we.bool,spinPulse:we.bool,spinReverse:we.bool,symbol:we.oneOfType([we.bool,we.string]),title:we.string,titleId:we.string,transform:we.oneOfType([we.string,we.object]),swapOpacity:we.bool};var r2=HT.bind(null,De.createElement),i2={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},s2={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},o2={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},qe=o2,a2={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},l2={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]},u2={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},c2=u2;const d2=()=>g.jsxs("div",{className:"contactDiv",children:[g.jsx("h1",{className:"contactTitle",children:"Contact Us"}),g.jsxs("div",{className:"contactBox",children:[g.jsxs("div",{className:"contactItem",children:[g.jsx(be,{icon:i2,size:"lg",color:"blue"}),g.jsx("p",{className:"textItem",children:"tina@creditworld.online"})]}),g.jsxs("div",{className:"contactItem",children:[g.jsx(be,{icon:a2,size:"lg",color:"blue"}),g.jsx("p",{className:"textItem",children:"+1 -(251)457-8655"})]}),g.jsxs("div",{className:"contactItem",children:[g.jsx(be,{icon:s2,size:"lg",color:"blue"}),g.jsx("p",{className:"textItem",children:"2850 W Main St, Alaska"})]})]})]}),h2="/assets/credit-CqynKYQT.gif",f2="/assets/credit-card-77DgrgvV.gif",p2="/assets/payment-CvNX97jl.gif",qT=()=>g.jsxs("div",{className:"instructionBg",children:[g.jsx("h1",{className:"instructionTitle",children:"Get Started"}),g.jsx("p",{className:"instructionDesc",children:" in 3 steps"}),g.jsxs("div",{className:"starter",children:[g.jsxs("div",{className:"starter1",children:[g.jsx("div",{children:g.jsx("img",{src:h2,width:"75px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Sign Up"}),g.jsx("p",{className:"cardDesc",children:"Create an Account to get started."})]}),g.jsxs("div",{className:"starter2",children:[g.jsx("div",{children:g.jsx("img",{src:f2,width:"75px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Buy a Plan"}),g.jsx("p",{className:"cardDesc",children:"choose from our offers of affordable plans and buy"})]}),g.jsxs("div",{className:"starter3",children:[g.jsx("div",{children:g.jsx("img",{src:p2,width:"78px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Get Results"}),g.jsx("p",{className:"cardDesc",children:"get positive results"})]})]})]}),Vg=()=>{const t=sn();return g.jsxs("div",{className:"plansDiv",children:[g.jsxs("div",{className:"plansTitleDiv",children:[g.jsx("h1",{className:"plansTitle",children:"Available packages"}),g.jsx("p",{className:"plansDesc",children:"Choose a package"})]}),g.jsxs("div",{className:"plans",children:[g.jsxs("div",{className:"plansBox",children:[g.jsx("p",{className:"plansBoxTitle",children:"Bronze Package"}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Full Credit repair process"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Removal of late payment,"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Charge Off, Collections and Inquiries"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Bankruptcy,Child Support, Medical bills, "})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Guaranteed deletion or money back "})]}),g.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"bronze",price:"500"}})},children:g.jsx("p",{className:"priceText",children:"$500"})})]}),g.jsxs("div",{className:"plansBox",children:[g.jsx("p",{className:"plansBoxTitle",children:"Silver Package"}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Full credit repair process"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Removal of late payments, collections, charge off and inquiries"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Credit Boosting Hack"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Monthly success update strategy"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Guaranteed results or money back"})]}),g.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"silver",price:"1000"}})},children:g.jsx("p",{className:"priceText",children:"$1000"})})]}),g.jsxs("div",{className:"plansBox",children:[g.jsx("p",{className:"plansBoxTitle",children:"Gold Package"}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"funding",children:"$50,000 funding hack"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Full credit repair process"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Removal of late payments ,collection ,charge off and inquiries"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Bankruptcy ,child support & medical bills"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Includes: chexsystem removal , guaranteed personal funding up to $50,000, guaranteed auto loan approval"})]}),g.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"gold",price:"1500"}})},children:g.jsx("p",{className:"priceText",children:"$1500"})})]}),g.jsxs("div",{className:"plansBox",children:[g.jsx("p",{className:"plansBoxTitle",children:"Platinum Package"}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"funding",children:"$50,000 funding hack"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Full credit repair process"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Removal of late payments ,collection ,charge off and inquiries"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Bankruptcy ,child support & medical bills"})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(be,{icon:qe,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:" Includes: chexsystem removal , guaranteed personal funding up to $50,000, guaranteed auto loan approval"})]}),g.jsx("div",{className:"plansPrice",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"platinum",price:"2000"}})},children:g.jsx("p",{className:"priceText",children:"$2000"})})]})]})]})},m2="/assets/safe-tru0fKw2.gif",g2=()=>g.jsx("div",{className:"talkBoardDiv",children:g.jsxs("div",{className:"talkBoardSection",children:[g.jsxs("div",{className:"talkBoardItem1",children:[g.jsx("h2",{className:"talkTitle",children:"Try us today"}),g.jsx("p",{className:"talkDesc",children:"Our aim is to empower you with the knowledge needed to make informed financial decisions."})]}),g.jsx("div",{className:"talkBoardItem2",children:g.jsx("img",{src:m2,className:"talkBoardImage"})})]})}),v2="/assets/igLogo-B-vH0eTJ.png",on=()=>g.jsx("div",{className:"footerBox",children:g.jsxs("div",{className:"footerContent",children:[g.jsx(be,{icon:l2,color:"blue"}),g.jsx("p",{className:"footerText",children:"2024 creditworld ltd."}),g.jsx("div",{className:"social",children:g.jsx("a",{href:"",children:g.jsx("img",{src:v2,height:"32px",width:"32px"})})})]})}),Ug=()=>{const t=sn();return g.jsxs("div",{className:"consultMainCard",children:[g.jsx("h2",{className:"consultMainTitle",children:" Available Services"}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Phone Consultation"}),g.jsx("p",{className:"consultTime",children:"7 mins."}),g.jsx("p",{className:"consultPrice",children:"$50"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"consultation",price:"50"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Phone Consultation"}),g.jsx("p",{className:"consultTime",children:"10+ mins."}),g.jsx("p",{className:"consultPrice",children:"$100"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"consultation",price:"100"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Grants Access"}),g.jsx("p",{className:"consultTime",children:"Get access to government grants and citizens funding."}),g.jsx("p",{className:"consultPrice",children:"$1000"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"grant",price:"1000"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Business Funds Access"}),g.jsx("p",{className:"consultTime",children:"Secure access to business fundings."}),g.jsx("p",{className:"consultPrice",children:"$1000"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"business",price:"1000"}})},children:"Select"})]})]})},y2=()=>g.jsxs("div",{className:"home",children:[g.jsx(sb,{}),g.jsx(B_,{}),g.jsx(ob,{}),g.jsx(qT,{}),g.jsx(Vg,{}),g.jsx(B_,{}),g.jsx(Ug,{}),g.jsx(g2,{}),g.jsx(d2,{}),g.jsx(on,{})]}),an=()=>g.jsx("div",{className:"divStyle",children:g.jsx("ul",{className:"listStyle",children:g.jsx("li",{className:"item",children:g.jsx("img",{src:hT,width:"290px",height:"115px"})})})});var m0={};/**
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
 */const KT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},GT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(p=64)),r.push(n[d],n[f],n[p],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new w2;const p=s<<2|a>>4;if(r.push(p),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const k=c<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class w2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E2=function(t){const e=KT(t);return GT.encodeByteArray(e,!0)},_d=function(t){return E2(t).replace(/\./g,"")},QT=function(t){try{return GT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function T2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const I2=()=>T2().__FIREBASE_DEFAULTS__,S2=()=>{if(typeof process>"u"||typeof m0>"u")return;const t=m0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},k2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QT(t[1]);return e&&JSON.parse(e)},uh=()=>{try{return I2()||S2()||k2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YT=t=>{var e,n;return(n=(e=uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=YT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JT=()=>{var t;return(t=uh())===null||t===void 0?void 0:t.config},ZT=t=>{var e;return(e=uh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class C2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_d(JSON.stringify(n)),_d(JSON.stringify(o)),""].join(".")}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function R2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function A2(){var t;const e=(t=uh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function P2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function b2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x2(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N2(){return!A2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D2(){try{return typeof indexedDB=="object"}catch{return!1}}function O2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const L2="FirebaseError";class Er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=L2,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?M2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Er(i,a,r)}}function M2(t,e){return t.replace(j2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const j2=/\{\$([^}]+)}/g;function V2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(g0(s)&&g0(o)){if(!wd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function g0(t){return t!==null&&typeof t=="object"}/**
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
 */function lu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function U2(t,e){const n=new F2(t,e);return n.subscribe.bind(n)}class F2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rf),i.error===void 0&&(i.error=Rf),i.complete===void 0&&(i.complete=Rf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rf(){}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}let zi=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const as="[DEFAULT]";/**
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
 */class z2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new C2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H2(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $2(t){return t===as?void 0:t}function H2(t){return t.instantiationMode==="EAGER"}/**
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
 */class W2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const q2={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},K2=Se.INFO,G2={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Q2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=G2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fg{constructor(e){this.name=e,this._logLevel=K2,this._logHandler=Q2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const Y2=(t,e)=>e.some(n=>t instanceof n);let v0,y0;function X2(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J2(){return y0||(y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tI=new WeakMap,Xp=new WeakMap,nI=new WeakMap,Af=new WeakMap,Bg=new WeakMap;function Z2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tI.set(n,t)}).catch(()=>{}),Bg.set(e,t),e}function eN(t){if(Xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tN(t){Jp=t(Jp)}function nN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return nI.set(r,e.sort?e.sort():[e]),Oi(r)}:J2().includes(t)?function(...e){return t.apply(Pf(this),e),Oi(tI.get(this))}:function(...e){return Oi(t.apply(Pf(this),e))}}function rN(t){return typeof t=="function"?nN(t):(t instanceof IDBTransaction&&eN(t),Y2(t,X2())?new Proxy(t,Jp):t)}function Oi(t){if(t instanceof IDBRequest)return Z2(t);if(Af.has(t))return Af.get(t);const e=rN(t);return e!==t&&(Af.set(t,e),Bg.set(e,t)),e}const Pf=t=>Bg.get(t);function iN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Oi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Oi(o.result),u.oldVersion,u.newVersion,Oi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sN=["get","getKey","getAll","getAllKeys","count"],oN=["put","add","delete","clear"],bf=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return bf.set(e,s),s}tN(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
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
 */class aN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",w0="0.10.6";/**
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
 */const bs=new Fg("@firebase/app"),uN="@firebase/app-compat",cN="@firebase/analytics-compat",dN="@firebase/analytics",hN="@firebase/app-check-compat",fN="@firebase/app-check",pN="@firebase/auth",mN="@firebase/auth-compat",gN="@firebase/database",vN="@firebase/database-compat",yN="@firebase/functions",_N="@firebase/functions-compat",wN="@firebase/installations",EN="@firebase/installations-compat",TN="@firebase/messaging",IN="@firebase/messaging-compat",SN="@firebase/performance",kN="@firebase/performance-compat",CN="@firebase/remote-config",RN="@firebase/remote-config-compat",AN="@firebase/storage",PN="@firebase/storage-compat",bN="@firebase/firestore",xN="@firebase/vertexai-preview",NN="@firebase/firestore-compat",DN="firebase",ON="10.12.3";/**
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
 */const em="[DEFAULT]",LN={[Zp]:"fire-core",[uN]:"fire-core-compat",[dN]:"fire-analytics",[cN]:"fire-analytics-compat",[fN]:"fire-app-check",[hN]:"fire-app-check-compat",[pN]:"fire-auth",[mN]:"fire-auth-compat",[gN]:"fire-rtdb",[vN]:"fire-rtdb-compat",[yN]:"fire-fn",[_N]:"fire-fn-compat",[wN]:"fire-iid",[EN]:"fire-iid-compat",[TN]:"fire-fcm",[IN]:"fire-fcm-compat",[SN]:"fire-perf",[kN]:"fire-perf-compat",[CN]:"fire-rc",[RN]:"fire-rc-compat",[AN]:"fire-gcs",[PN]:"fire-gcs-compat",[bN]:"fire-fst",[NN]:"fire-fst-compat",[xN]:"fire-vertex","fire-js":"fire-js",[DN]:"fire-js-all"};/**
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
 */const Ed=new Map,MN=new Map,tm=new Map;function E0(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(tm.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,t);for(const n of Ed.values())E0(n,t);for(const n of MN.values())E0(n,t);return!0}function ch(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lr(t){return t.settings!==void 0}/**
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
 */const jN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new au("app","Firebase",jN);/**
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
 */class VN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=ON;function rI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:em,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Li.create("bad-app-name",{appName:String(i)});if(n||(n=JT()),!n)throw Li.create("no-options");const s=Ed.get(i);if(s){if(wd(n,s.options)&&wd(r,s.config))return s;throw Li.create("duplicate-app",{appName:i})}const o=new W2(i);for(const u of tm.values())o.addComponent(u);const a=new VN(n,r,o);return Ed.set(i,a),a}function zg(t=em){const e=Ed.get(t);if(!e&&t===em&&JT())return rI();if(!e)throw Li.create("no-app",{appName:t});return e}function hr(t,e,n){var r;let i=(r=LN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}xs(new zi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const UN="firebase-heartbeat-database",FN=1,Fl="firebase-heartbeat-store";let xf=null;function iI(){return xf||(xf=iN(UN,FN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Li.create("idb-open",{originalErrorMessage:t.message})})),xf}async function BN(t){try{const n=(await iI()).transaction(Fl),r=await n.objectStore(Fl).get(sI(t));return await n.done,r}catch(e){if(e instanceof Er)bs.warn(e.message);else{const n=Li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bs.warn(n.message)}}}async function T0(t,e){try{const r=(await iI()).transaction(Fl,"readwrite");await r.objectStore(Fl).put(e,sI(t)),await r.done}catch(n){if(n instanceof Er)bs.warn(n.message);else{const r=Li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bs.warn(r.message)}}}function sI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zN=1024,$N=30*24*60*60*1e3;class HN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=I0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$N}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=I0(),{heartbeatsToSend:r,unsentEntries:i}=WN(this._heartbeatsCache.heartbeats),s=_d(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function I0(){return new Date().toISOString().substring(0,10)}function WN(t,e=zN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D2()?O2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S0(t){return _d(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KN(t){xs(new zi("platform-logger",e=>new aN(e),"PRIVATE")),xs(new zi("heartbeat",e=>new HN(e),"PRIVATE")),hr(Zp,w0,t),hr(Zp,w0,"esm2017"),hr("fire-js","")}KN("");var GN="firebase",QN="10.12.3";/**
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
 */hr(GN,QN,"app");function $g(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YN=oI,aI=new au("auth","Firebase",oI());/**
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
 */const Td=new Fg("@firebase/auth");function XN(t,...e){Td.logLevel<=Se.WARN&&Td.warn(`Auth (${Fs}): ${t}`,...e)}function Nc(t,...e){Td.logLevel<=Se.ERROR&&Td.error(`Auth (${Fs}): ${t}`,...e)}/**
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
 */function Xn(t,...e){throw Hg(t,...e)}function fr(t,...e){return Hg(t,...e)}function lI(t,e,n){const r=Object.assign(Object.assign({},YN()),{[e]:n});return new au("auth","Firebase",r).create(e,{appName:t.name})}function jr(t){return lI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aI.create(t,...e)}function le(t,e,...n){if(!t)throw Hg(e,...n)}function Dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nc(e),new Error(e)}function Kr(t,e){t||Dr(e)}/**
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
 */function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JN(){return k0()==="http:"||k0()==="https:"}function k0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JN()||P2()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kr(n>e,"Short delay should be less than long delay!"),this.isMobile=R2()||b2()}get(){return ZN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wg(t,e){Kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nD=new uu(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,r,i={}){return cI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lu(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),uI.fetch()(dI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function cI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tD),e);try{const i=new iD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ac(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ac(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ac(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lI(t,d,c);Xn(t,d)}}catch(i){if(i instanceof Er)throw i;Xn(t,"network-request-failed",{message:String(i)})}}async function cu(t,e,n,r,i={}){const s=await ei(t,e,n,r,i);return"mfaPendingCredential"in s&&Xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wg(t.config,i):`${t.config.apiScheme}://${i}`}function rD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fr(this.auth,"network-request-failed")),nD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ac(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fr(t,e,r);return i.customData._tokenResponse=n,i}function C0(t){return t!==void 0&&t.enterprise!==void 0}class sD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oD(t,e){return ei(t,"GET","/v2/recaptchaConfig",Zr(t,e))}/**
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
 */async function aD(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function hI(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ul(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lD(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=qg(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ul(Nf(i.auth_time)),issuedAtTime:ul(Nf(i.iat)),expirationTime:ul(Nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nf(t){return Number(t)*1e3}function qg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=QT(n);return i?JSON.parse(i):(Nc("Failed to decode base64 JWT payload"),null)}catch(i){return Nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function R0(t){const e=qg(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Er&&uD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Id(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bl(t,hI(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fI(s.providerUserInfo):[],a=hD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function dD(t){const e=gt(t);await Id(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fI(t){return t.map(e=>{var{providerId:n}=e,r=$g(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fD(t,e){const n=await cI(t,{},async()=>{const r=lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pD(t,e){return ei(t,"POST","/v2/accounts:revokeToken",Zr(t,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=R0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xo;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function ci(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bl(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lD(this,e)}reload(){return dD(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Id(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lr(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await Bl(this,aD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:D,isAnonymous:F,providerData:x,stsTokenManager:T}=n;le(I&&T,e,"internal-error");const v=xo.fromJSON(this.name,T);le(typeof I=="string",e,"internal-error"),ci(f,e.name),ci(p,e.name),le(typeof D=="boolean",e,"internal-error"),le(typeof F=="boolean",e,"internal-error"),ci(E,e.name),ci(k,e.name),ci(C,e.name),ci(P,e.name),ci(S,e.name),ci(y,e.name);const _=new Or({uid:I,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:F,photoURL:k,phoneNumber:E,tenantId:C,stsTokenManager:v,createdAt:S,lastLoginAt:y});return x&&Array.isArray(x)&&(_.providerData=x.map(R=>Object.assign({},R))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new xo;i.updateFromServerResponse(n);const s=new Or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Id(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new xo;a.updateFromIdToken(r);const u=new Or({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const A0=new Map;function Lr(t){Kr(t instanceof Function,"Expected a class definition");let e=A0.get(t);return e?(Kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,A0.set(t,e),e)}/**
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
 */class pI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pI.type="NONE";const P0=pI;/**
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
 */function Dc(t,e,n){return`firebase:${t}:${e}:${n}`}class No{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new No(Lr(P0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Lr(P0);const o=Dc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Or._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new No(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new No(s,e,r))}}/**
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
 */function b0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_I(e))return"Blackberry";if(wI(e))return"Webos";if(Kg(e))return"Safari";if((e.includes("chrome/")||gI(e))&&!e.includes("edge/"))return"Chrome";if(yI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mI(t=jt()){return/firefox\//i.test(t)}function Kg(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gI(t=jt()){return/crios\//i.test(t)}function vI(t=jt()){return/iemobile/i.test(t)}function yI(t=jt()){return/android/i.test(t)}function _I(t=jt()){return/blackberry/i.test(t)}function wI(t=jt()){return/webos/i.test(t)}function dh(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mD(t=jt()){var e;return dh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gD(){return x2()&&document.documentMode===10}function EI(t=jt()){return dh(t)||yI(t)||wI(t)||_I(t)||/windows phone/i.test(t)||vI(t)}function vD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function TI(t,e=[]){let n;switch(t){case"Browser":n=b0(jt());break;case"Worker":n=`${b0(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class yD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _D(t,e={}){return ei(t,"GET","/v2/passwordPolicy",Zr(t,e))}/**
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
 */const wD=6;class ED{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class TD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x0(this),this.idTokenSubscription=new x0(this),this.beforeStateQueue=new yD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hI(this,{idToken:e}),r=await Or._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Id(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lr(this.app))return Promise.reject(jr(this));const n=e?gt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lr(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lr(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _D(this),n=new ED(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new au("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qi(t){return gt(t)}class x0{constructor(e){this.auth=e,this.observer=null,this.addObserver=U2(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ID(t){hh=t}function II(t){return hh.loadJS(t)}function SD(){return hh.recaptchaEnterpriseScript}function kD(){return hh.gapiScript}function CD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RD="recaptcha-enterprise",AD="NO_RECAPTCHA";class PD{constructor(e){this.type=RD,this.auth=Qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;C0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(AD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&C0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=SD();u.length!==0&&(u+=a),II(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function N0(t,e,n,r=!1){const i=new PD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function bD(t,e){const n=ch(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wd(s,e??{}))return i;Xn(i,"already-initialized")}return n.initialize({options:e})}function xD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ND(t,e,n){const r=Qi(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=SI(e),{host:o,port:a}=DD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),OD()}function SI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DD(t){const e=SI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:D0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:D0(o)}}}function D0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,n){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function LD(t,e){return ei(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MD(t,e){return cu(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}async function jD(t,e){return ei(t,"POST","/v1/accounts:sendOobCode",Zr(t,e))}async function VD(t,e){return jD(t,e)}/**
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
 */async function UD(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function FD(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
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
 */class zl extends Gg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,n,"signInWithPassword",MD);case"emailLink":return UD(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,r,"signUpPassword",LD);case"emailLink":return FD(e,{idToken:n,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Do(t,e){return cu(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
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
 */const BD="http://localhost";class Ns extends Gg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$g(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Do(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Do(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Do(e,n)}buildRequest(){const e={requestUri:BD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lu(n)}return e}}/**
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
 */function zD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $D(t){const e=Wa(qa(t)).link,n=e?Wa(qa(e)).deep_link_id:null,r=Wa(qa(t)).deep_link_id;return(r?Wa(qa(r)).link:null)||r||n||e||t}class Qg{constructor(e){var n,r,i,s,o,a;const u=Wa(qa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=zD((i=u.mode)!==null&&i!==void 0?i:null);le(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$D(e);try{return new Qg(n)}catch{return null}}}/**
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
 */class na{constructor(){this.providerId=na.PROVIDER_ID}static credential(e,n){return zl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qg.parseLink(n);return le(r,"argument-error"),zl._fromEmailAndCode(e,r.code,r.tenantId)}}na.PROVIDER_ID="password";na.EMAIL_PASSWORD_SIGN_IN_METHOD="password";na.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class du extends kI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gi extends du{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
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
 */class vi extends du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vi.credential(n,r)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
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
 */class yi extends du{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
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
 */class _i extends du{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _i.credential(n,r)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
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
 */async function HD(t,e){return cu(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
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
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Or._fromIdTokenResponse(e,r,i),o=O0(r);return new Ds({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O0(r);return new Ds({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kd extends Er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kd(e,n,r,i)}}function CI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kd._fromErrorAndOperation(t,s,e,r):s})}async function WD(t,e,n=!1){const r=await Bl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",r)}/**
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
 */async function qD(t,e,n=!1){const{auth:r}=t;if(lr(r.app))return Promise.reject(jr(r));const i="reauthenticate";try{const s=await Bl(t,CI(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=qg(s.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),Ds._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xn(r,"user-mismatch"),s}}/**
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
 */async function RI(t,e,n=!1){if(lr(t.app))return Promise.reject(jr(t));const r="signIn",i=await CI(t,r,e),s=await Ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KD(t,e){return RI(Qi(t),e)}/**
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
 */async function AI(t){const e=Qi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GD(t,e,n){const r=Qi(t);await Sd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VD)}async function QD(t,e,n){if(lr(t.app))return Promise.reject(jr(t));const r=Qi(t),o=await Sd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&AI(t),u}),a=await Ds._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function YD(t,e,n){return lr(t.app)?Promise.reject(jr(t)):KD(gt(t),na.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&AI(t),r})}function XD(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function JD(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function ZD(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}const Cd="__sak";/**
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
 */class PI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cd,"1"),this.storage.removeItem(Cd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function eO(){const t=jt();return Kg(t)||dh(t)}const tO=1e3,nO=10;class bI extends PI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eO()&&vD(),this.fallbackToPolling=EI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bI.type="LOCAL";const rO=bI;/**
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
 */class xI extends PI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xI.type="SESSION";const NI=xI;/**
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
 */function iO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await iO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fh.receivers=[];/**
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
 */function Yg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Yg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pr(){return window}function oO(t){pr().location.href=t}/**
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
 */function DI(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function aO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uO(){return DI()?self:null}/**
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
 */const OI="firebaseLocalStorageDb",cO=1,Rd="firebaseLocalStorage",LI="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ph(t,e){return t.transaction([Rd],e?"readwrite":"readonly").objectStore(Rd)}function dO(){const t=indexedDB.deleteDatabase(OI);return new hu(t).toPromise()}function im(){const t=indexedDB.open(OI,cO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rd,{keyPath:LI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rd)?e(r):(r.close(),await dO(),e(await im()))})})}async function L0(t,e,n){const r=ph(t,!0).put({[LI]:e,value:n});return new hu(r).toPromise()}async function hO(t,e){const n=ph(t,!1).get(e),r=await new hu(n).toPromise();return r===void 0?null:r.value}function M0(t,e){const n=ph(t,!0).delete(e);return new hu(n).toPromise()}const fO=800,pO=3;class MI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fh._getInstance(uO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aO(),!this.activeServiceWorker)return;this.sender=new sO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await L0(e,Cd,"1"),await M0(e,Cd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ph(i,!1).getAll();return new hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MI.type="LOCAL";const mO=MI;new uu(3e4,6e4);/**
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
 */function gO(t,e){return e?Lr(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xg extends Gg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Do(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vO(t){return RI(t.auth,new Xg(t),t.bypassAuthState)}function yO(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),qD(n,new Xg(t),t.bypassAuthState)}async function _O(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),WD(n,new Xg(t),t.bypassAuthState)}/**
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
 */class jI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vO;case"linkViaPopup":case"linkViaRedirect":return _O;case"reauthViaPopup":case"reauthViaRedirect":return yO;default:Xn(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wO=new uu(2e3,1e4);class Io extends jI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wO.get())};e()}}Io.currentPopupAction=null;/**
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
 */const EO="pendingRedirect",Oc=new Map;class TO extends jI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oc.get(this.auth._key());if(!e){try{const r=await IO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oc.set(this.auth._key(),e)}return this.bypassAuthState||Oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IO(t,e){const n=CO(e),r=kO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SO(t,e){Oc.set(t._key(),e)}function kO(t){return Lr(t._redirectPersistence)}function CO(t){return Dc(EO,t.config.apiKey,t.name)}async function RO(t,e,n=!1){if(lr(t.app))return Promise.reject(jr(t));const r=Qi(t),i=gO(r,e),o=await new TO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AO=10*60*1e3;class PO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(j0(e))}saveEventToCache(e){this.cachedEventUids.add(j0(e)),this.lastProcessedEventTime=Date.now()}}function j0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VI(t);default:return!1}}/**
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
 */async function xO(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
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
 */const NO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DO=/^https?/;async function OO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xO(t);for(const n of e)try{if(LO(n))return}catch{}Xn(t,"unauthorized-domain")}function LO(t){const e=nm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DO.test(n))return!1;if(NO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MO=new uu(3e4,6e4);function V0(){const t=pr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jO(t){return new Promise((e,n)=>{var r,i,s;function o(){V0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V0(),n(fr(t,"network-request-failed"))},timeout:MO.get()})}if(!((i=(r=pr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pr().gapi)===null||s===void 0)&&s.load)o();else{const a=CD("iframefcb");return pr()[a]=()=>{gapi.load?o():n(fr(t,"network-request-failed"))},II(`${kD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Lc=null,e})}let Lc=null;function VO(t){return Lc=Lc||jO(t),Lc}/**
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
 */const UO=new uu(5e3,15e3),FO="__/auth/iframe",BO="emulator/auth/iframe",zO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HO(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wg(e,BO):`https://${t.config.authDomain}/${FO}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},i=$O.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lu(r).slice(1)}`}async function WO(t){const e=await VO(t),n=pr().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:HO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fr(t,"network-request-failed"),a=pr().setTimeout(()=>{s(o)},UO.get());function u(){pr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const qO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KO=500,GO=600,QO="_blank",YO="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XO(t,e,n,r=KO,i=GO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},qO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=jt().toLowerCase();n&&(a=gI(c)?QO:n),mI(c)&&(e=e||YO,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[E,k])=>`${p}${E}=${k},`,"");if(mD(c)&&a!=="_self")return JO(e||"",a),new U0(null);const f=window.open(e||"",a,d);le(f,t,"popup-blocked");try{f.focus()}catch{}return new U0(f)}function JO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZO="__/auth/handler",eL="emulator/auth/handler",tL=encodeURIComponent("fac");async function F0(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:i};if(e instanceof kI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof du){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${tL}=${encodeURIComponent(u)}`:"";return`${nL(t)}?${lu(a).slice(1)}${c}`}function nL({config:t}){return t.emulator?Wg(t,eL):`https://${t.authDomain}/${ZO}`}/**
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
 */const Df="webStorageSupport";class rL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NI,this._completeRedirectFn=RO,this._overrideRedirectResult=SO}async _openPopup(e,n,r,i){var s;Kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await F0(e,n,r,nm(),i);return XO(e,o,Yg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await F0(e,n,r,nm(),i);return oO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WO(e),r=new PO(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Df,{type:Df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Df];o!==void 0&&n(!!o),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EI()||Kg()||dh()}}const iL=rL;var B0="@firebase/auth",z0="1.7.5";/**
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
 */class sL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aL(t){xs(new zi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TI(t)},c=new TD(r,i,s,u);return xD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xs(new zi("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new sL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(B0,z0,oL(t)),hr(B0,z0,"esm2017")}/**
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
 */const lL=5*60,uL=ZT("authIdTokenMaxAge")||lL;let $0=null;const cL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uL)return;const i=n==null?void 0:n.token;$0!==i&&($0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dL(t=zg()){const e=ch(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bD(t,{popupRedirectResolver:iL,persistence:[mO,rO,NI]}),r=ZT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cL(s.toString());JD(n,o,()=>o(n.currentUser)),XD(n,a=>o(a))}}const i=YT("auth");return i&&ND(n,`http://${i}`),n}function hL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ID({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aL("Browser");var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,UI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.D=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(R,b,O){for(var A=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)A[ye-2]=arguments[ye];return v.prototype[b].apply(R,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,_){_||(_=0);var R=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)R[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;16>b;++b)R[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],b=T.g[2];var O=T.g[3],A=v+(O^_&(b^O))+R[0]+3614090360&4294967295;v=_+(A<<7&4294967295|A>>>25),A=O+(b^v&(_^b))+R[1]+3905402710&4294967295,O=v+(A<<12&4294967295|A>>>20),A=b+(_^O&(v^_))+R[2]+606105819&4294967295,b=O+(A<<17&4294967295|A>>>15),A=_+(v^b&(O^v))+R[3]+3250441966&4294967295,_=b+(A<<22&4294967295|A>>>10),A=v+(O^_&(b^O))+R[4]+4118548399&4294967295,v=_+(A<<7&4294967295|A>>>25),A=O+(b^v&(_^b))+R[5]+1200080426&4294967295,O=v+(A<<12&4294967295|A>>>20),A=b+(_^O&(v^_))+R[6]+2821735955&4294967295,b=O+(A<<17&4294967295|A>>>15),A=_+(v^b&(O^v))+R[7]+4249261313&4294967295,_=b+(A<<22&4294967295|A>>>10),A=v+(O^_&(b^O))+R[8]+1770035416&4294967295,v=_+(A<<7&4294967295|A>>>25),A=O+(b^v&(_^b))+R[9]+2336552879&4294967295,O=v+(A<<12&4294967295|A>>>20),A=b+(_^O&(v^_))+R[10]+4294925233&4294967295,b=O+(A<<17&4294967295|A>>>15),A=_+(v^b&(O^v))+R[11]+2304563134&4294967295,_=b+(A<<22&4294967295|A>>>10),A=v+(O^_&(b^O))+R[12]+1804603682&4294967295,v=_+(A<<7&4294967295|A>>>25),A=O+(b^v&(_^b))+R[13]+4254626195&4294967295,O=v+(A<<12&4294967295|A>>>20),A=b+(_^O&(v^_))+R[14]+2792965006&4294967295,b=O+(A<<17&4294967295|A>>>15),A=_+(v^b&(O^v))+R[15]+1236535329&4294967295,_=b+(A<<22&4294967295|A>>>10),A=v+(b^O&(_^b))+R[1]+4129170786&4294967295,v=_+(A<<5&4294967295|A>>>27),A=O+(_^b&(v^_))+R[6]+3225465664&4294967295,O=v+(A<<9&4294967295|A>>>23),A=b+(v^_&(O^v))+R[11]+643717713&4294967295,b=O+(A<<14&4294967295|A>>>18),A=_+(O^v&(b^O))+R[0]+3921069994&4294967295,_=b+(A<<20&4294967295|A>>>12),A=v+(b^O&(_^b))+R[5]+3593408605&4294967295,v=_+(A<<5&4294967295|A>>>27),A=O+(_^b&(v^_))+R[10]+38016083&4294967295,O=v+(A<<9&4294967295|A>>>23),A=b+(v^_&(O^v))+R[15]+3634488961&4294967295,b=O+(A<<14&4294967295|A>>>18),A=_+(O^v&(b^O))+R[4]+3889429448&4294967295,_=b+(A<<20&4294967295|A>>>12),A=v+(b^O&(_^b))+R[9]+568446438&4294967295,v=_+(A<<5&4294967295|A>>>27),A=O+(_^b&(v^_))+R[14]+3275163606&4294967295,O=v+(A<<9&4294967295|A>>>23),A=b+(v^_&(O^v))+R[3]+4107603335&4294967295,b=O+(A<<14&4294967295|A>>>18),A=_+(O^v&(b^O))+R[8]+1163531501&4294967295,_=b+(A<<20&4294967295|A>>>12),A=v+(b^O&(_^b))+R[13]+2850285829&4294967295,v=_+(A<<5&4294967295|A>>>27),A=O+(_^b&(v^_))+R[2]+4243563512&4294967295,O=v+(A<<9&4294967295|A>>>23),A=b+(v^_&(O^v))+R[7]+1735328473&4294967295,b=O+(A<<14&4294967295|A>>>18),A=_+(O^v&(b^O))+R[12]+2368359562&4294967295,_=b+(A<<20&4294967295|A>>>12),A=v+(_^b^O)+R[5]+4294588738&4294967295,v=_+(A<<4&4294967295|A>>>28),A=O+(v^_^b)+R[8]+2272392833&4294967295,O=v+(A<<11&4294967295|A>>>21),A=b+(O^v^_)+R[11]+1839030562&4294967295,b=O+(A<<16&4294967295|A>>>16),A=_+(b^O^v)+R[14]+4259657740&4294967295,_=b+(A<<23&4294967295|A>>>9),A=v+(_^b^O)+R[1]+2763975236&4294967295,v=_+(A<<4&4294967295|A>>>28),A=O+(v^_^b)+R[4]+1272893353&4294967295,O=v+(A<<11&4294967295|A>>>21),A=b+(O^v^_)+R[7]+4139469664&4294967295,b=O+(A<<16&4294967295|A>>>16),A=_+(b^O^v)+R[10]+3200236656&4294967295,_=b+(A<<23&4294967295|A>>>9),A=v+(_^b^O)+R[13]+681279174&4294967295,v=_+(A<<4&4294967295|A>>>28),A=O+(v^_^b)+R[0]+3936430074&4294967295,O=v+(A<<11&4294967295|A>>>21),A=b+(O^v^_)+R[3]+3572445317&4294967295,b=O+(A<<16&4294967295|A>>>16),A=_+(b^O^v)+R[6]+76029189&4294967295,_=b+(A<<23&4294967295|A>>>9),A=v+(_^b^O)+R[9]+3654602809&4294967295,v=_+(A<<4&4294967295|A>>>28),A=O+(v^_^b)+R[12]+3873151461&4294967295,O=v+(A<<11&4294967295|A>>>21),A=b+(O^v^_)+R[15]+530742520&4294967295,b=O+(A<<16&4294967295|A>>>16),A=_+(b^O^v)+R[2]+3299628645&4294967295,_=b+(A<<23&4294967295|A>>>9),A=v+(b^(_|~O))+R[0]+4096336452&4294967295,v=_+(A<<6&4294967295|A>>>26),A=O+(_^(v|~b))+R[7]+1126891415&4294967295,O=v+(A<<10&4294967295|A>>>22),A=b+(v^(O|~_))+R[14]+2878612391&4294967295,b=O+(A<<15&4294967295|A>>>17),A=_+(O^(b|~v))+R[5]+4237533241&4294967295,_=b+(A<<21&4294967295|A>>>11),A=v+(b^(_|~O))+R[12]+1700485571&4294967295,v=_+(A<<6&4294967295|A>>>26),A=O+(_^(v|~b))+R[3]+2399980690&4294967295,O=v+(A<<10&4294967295|A>>>22),A=b+(v^(O|~_))+R[10]+4293915773&4294967295,b=O+(A<<15&4294967295|A>>>17),A=_+(O^(b|~v))+R[1]+2240044497&4294967295,_=b+(A<<21&4294967295|A>>>11),A=v+(b^(_|~O))+R[8]+1873313359&4294967295,v=_+(A<<6&4294967295|A>>>26),A=O+(_^(v|~b))+R[15]+4264355552&4294967295,O=v+(A<<10&4294967295|A>>>22),A=b+(v^(O|~_))+R[6]+2734768916&4294967295,b=O+(A<<15&4294967295|A>>>17),A=_+(O^(b|~v))+R[13]+1309151649&4294967295,_=b+(A<<21&4294967295|A>>>11),A=v+(b^(_|~O))+R[4]+4149444226&4294967295,v=_+(A<<6&4294967295|A>>>26),A=O+(_^(v|~b))+R[11]+3174756917&4294967295,O=v+(A<<10&4294967295|A>>>22),A=b+(v^(O|~_))+R[2]+718787259&4294967295,b=O+(A<<15&4294967295|A>>>17),A=_+(O^(b|~v))+R[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(b+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var _=v-this.blockSize,R=this.B,b=this.h,O=0;O<v;){if(b==0)for(;O<=_;)i(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<v;)if(R[b++]=T.charCodeAt(O++),b==this.blockSize){i(this,R),b=0;break}}else for(;O<v;)if(R[b++]=T[O++],b==this.blockSize){i(this,R),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var _=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.u(T),T=Array(16),v=_=0;4>v;++v)for(var R=0;32>R;R+=8)T[_++]=this.g[v]>>>R&255;return T};function s(T,v){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;for(var _=[],R=!0,b=T.length-1;0<=b;b--){var O=T[b]|0;R&&O==v||(_[b]=O,R=!1)}this.g=_}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return P(c(-T));for(var v=[],_=1,R=0;T>=_;R++)v[R]=T/_|0,_*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(v,8)),R=f,b=0;b<T.length;b+=8){var O=Math.min(8,T.length-b),A=parseInt(T.substring(b,b+O),v);8>O?(O=c(Math.pow(v,O)),R=R.j(O).add(c(A))):(R=R.j(_),R=R.add(c(A)))}return R}var f=u(0),p=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var T=0,v=1,_=0;_<this.g.length;_++){var R=this.i(_);T+=(0<=R?R:4294967296+R)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(C(this))return"-"+P(this).toString(T);for(var v=c(Math.pow(T,6)),_=this,R="";;){var b=D(_,v).g;_=S(_,b.j(v));var O=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=b,k(_))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function C(T){return T.h==-1}t.l=function(T){return T=S(this,T),C(T)?-1:k(T)?0:1};function P(T){for(var v=T.g.length,_=[],R=0;R<v;R++)_[R]=~T.g[R];return new o(_,~T.h).add(p)}t.abs=function(){return C(this)?P(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],R=0,b=0;b<=v;b++){var O=R+(this.i(b)&65535)+(T.i(b)&65535),A=(O>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);R=A>>>16,O&=65535,A&=65535,_[b]=A<<16|O}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(T,v){return T.add(P(v))}t.j=function(T){if(k(this)||k(T))return f;if(C(this))return C(T)?P(this).j(P(T)):P(P(this).j(T));if(C(T))return P(this.j(P(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,_=[],R=0;R<2*v;R++)_[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<T.g.length;b++){var O=this.i(R)>>>16,A=this.i(R)&65535,ye=T.i(b)>>>16,ut=T.i(b)&65535;_[2*R+2*b]+=A*ut,y(_,2*R+2*b),_[2*R+2*b+1]+=O*ut,y(_,2*R+2*b+1),_[2*R+2*b+1]+=A*ye,y(_,2*R+2*b+1),_[2*R+2*b+2]+=O*ye,y(_,2*R+2*b+2)}for(R=0;R<v;R++)_[R]=_[2*R+1]<<16|_[2*R];for(R=v;R<2*v;R++)_[R]=0;return new o(_,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function I(T,v){this.g=T,this.h=v}function D(T,v){if(k(v))throw Error("division by zero");if(k(T))return new I(f,f);if(C(T))return v=D(P(T),v),new I(P(v.g),P(v.h));if(C(v))return v=D(T,P(v)),new I(P(v.g),v.h);if(30<T.g.length){if(C(T)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,R=v;0>=R.l(T);)_=F(_),R=F(R);var b=x(_,1),O=x(R,1);for(R=x(R,2),_=x(_,2);!k(R);){var A=O.add(R);0>=A.l(T)&&(b=b.add(_),O=A),R=x(R,1),_=x(_,1)}return v=S(T,b.j(v)),new I(b,v)}for(b=f;0<=T.l(v);){for(_=Math.max(1,Math.floor(T.m()/v.m())),R=Math.ceil(Math.log(_)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=c(_),A=O.j(v);C(A)||0<A.l(T);)_-=R,O=c(_),A=O.j(v);k(O)&&(O=p),b=b.add(O),T=S(T,A)}return new I(b,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],R=0;R<v;R++)_[R]=this.i(R)&T.i(R);return new o(_,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],R=0;R<v;R++)_[R]=this.i(R)|T.i(R);return new o(_,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],R=0;R<v;R++)_[R]=this.i(R)^T.i(R);return new o(_,this.h^T.h)};function F(T){for(var v=T.g.length+1,_=[],R=0;R<v;R++)_[R]=T.i(R)<<1|T.i(R-1)>>>31;return new o(_,T.h)}function x(T,v){var _=v>>5;v%=32;for(var R=T.g.length-_,b=[],O=0;O<R;O++)b[O]=0<v?T.i(O+_)>>>v|T.i(O+_+1)<<32-v:T.i(O+_);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,UI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,_s=o}).apply(typeof H0<"u"?H0:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FI,BI,Ka,zI,Mc,sm,$I,HI,WI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in m))break e;m=m[M]}l=l[l.length-1],w=m[l],h=h(w),h!=w&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,w=!1,M={next:function(){if(!w&&m<l.length){var U=m++;return{value:h(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(h,M)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function E(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function k(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,M,U){for(var K=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)K[Ve-2]=arguments[Ve];return h.prototype[M].apply(w,K)}}function C(l){const h=l.length;if(0<h){const m=Array(h);for(let w=0;w<h;w++)m[w]=l[w];return m}return[]}function P(l,h){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const M=l.length||0,U=w.length||0;l.length=M+U;for(let K=0;K<U;K++)l[M+K]=w[K]}else l.push(w)}}class S{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function x(l,h,m){for(const w in l)h.call(m,l[w],w,l)}function T(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function v(l){const h={};for(const m in l)h[m]=l[m];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)l[m]=w[m];for(let U=0;U<_.length;U++)m=_[U],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function b(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function A(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ye{constructor(){this.h=this.g=null}add(h,m){const w=ut.get();w.set(h,m),this.h?this.h.next=w:this.g=w,this.h=w}}var ut=new S(()=>new Yt,l=>l.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,W=!1,ee=new ye,ie=()=>{const l=a.Promise.resolve(void 0);ge=()=>{l.then(me)}};var me=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){O(m)}var h=ut;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function je(l,h){if(ve.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{D(h.nodeName);var M=!0;break e}catch{}M=!1}M||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ze[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&je.aa.h.call(this)}}k(je,ve);var ze={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Ji=0;function Mh(l,h,m,w,M){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!w,this.ha=M,this.key=++Ji,this.da=this.fa=!1}function $s(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Hs(l){this.src=l,this.g={},this.h=0}Hs.prototype.add=function(l,h,m,w,M){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var K=Zn(l,h,w,M);return-1<K?(h=l[K],m||(h.fa=!1)):(h=new Mh(h,this.src,U,!!w,M),h.fa=m,l.push(h)),h};function vt(l,h){var m=h.type;if(m in l.g){var w=l.g[m],M=Array.prototype.indexOf.call(w,h,void 0),U;(U=0<=M)&&Array.prototype.splice.call(w,M,1),U&&($s(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Zn(l,h,m,w){for(var M=0;M<l.length;++M){var U=l[M];if(!U.da&&U.listener==h&&U.capture==!!m&&U.ha==w)return M}return-1}var Ws="closure_lm_"+(1e6*Math.random()|0),la={};function er(l,h,m,w,M){if(Array.isArray(h)){for(var U=0;U<h.length;U++)er(l,h[U],m,w,M);return null}return m=ni(m),l&&l[At]?l.K(h,m,c(w)?!!w.capture:!!w,M):jh(l,h,m,!1,w,M)}function jh(l,h,m,w,M,U){if(!h)throw Error("Invalid event type");var K=c(M)?!!M.capture:!!M,Ve=da(l);if(Ve||(l[Ws]=Ve=new Hs(l)),m=Ve.add(h,m,w,K,U),m.proxy)return m;if(w=Vh(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)xe||(M=K),M===void 0&&(M=!1),l.addEventListener(h.toString(),w,M);else if(l.attachEvent)l.attachEvent(Eu(h.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Vh(){function l(m){return h.call(l.src,l.listener,m)}const h=Uh;return l}function ua(l,h,m,w,M){if(Array.isArray(h))for(var U=0;U<h.length;U++)ua(l,h[U],m,w,M);else w=c(w)?!!w.capture:!!w,m=ni(m),l&&l[At]?(l=l.i,h=String(h).toString(),h in l.g&&(U=l.g[h],m=Zn(U,m,w,M),-1<m&&($s(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete l.g[h],l.h--)))):l&&(l=da(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Zn(h,m,w,M)),(m=-1<l?h[l]:null)&&ca(m))}function ca(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[At])vt(h.i,l);else{var m=l.type,w=l.proxy;h.removeEventListener?h.removeEventListener(m,w,l.capture):h.detachEvent?h.detachEvent(Eu(m),w):h.addListener&&h.removeListener&&h.removeListener(w),(m=da(h))?(vt(m,l),m.h==0&&(m.src=null,h[Ws]=null)):$s(l)}}}function Eu(l){return l in la?la[l]:la[l]="on"+l}function Uh(l,h){if(l.da)l=!0;else{h=new je(h,this);var m=l.listener,w=l.ha||l.src;l.fa&&ca(l),l=m.call(w,h)}return l}function da(l){return l=l[Ws],l instanceof Hs?l:null}var Tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ni(l){return typeof l=="function"?l:(l[Tr]||(l[Tr]=function(h){return l.handleEvent(h)}),l[Tr])}function yt(){ce.call(this),this.i=new Hs(this),this.M=this,this.F=null}k(yt,ce),yt.prototype[At]=!0,yt.prototype.removeEventListener=function(l,h,m,w){ua(this,l,h,m,w)};function _t(l,h){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=h.type||h,typeof h=="string")h=new ve(h,l);else if(h instanceof ve)h.target=h.target||l;else{var M=h;h=new ve(w,l),R(h,M)}if(M=!0,m)for(var U=m.length-1;0<=U;U--){var K=h.g=m[U];M=gn(K,w,!0,h)&&M}if(K=h.g=l,M=gn(K,w,!0,h)&&M,M=gn(K,w,!1,h)&&M,m)for(U=0;U<m.length;U++)K=h.g=m[U],M=gn(K,w,!1,h)&&M}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],w=0;w<m.length;w++)$s(m[w]);delete l.g[h],l.h--}}this.F=null},yt.prototype.K=function(l,h,m,w){return this.i.add(String(l),h,!1,m,w)},yt.prototype.L=function(l,h,m,w){return this.i.add(String(l),h,!0,m,w)};function gn(l,h,m,w){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var M=!0,U=0;U<h.length;++U){var K=h[U];if(K&&!K.da&&K.capture==m){var Ve=K.listener,bt=K.ha||K.src;K.fa&&vt(l.i,K),M=Ve.call(bt,w)!==!1&&M}}return M&&!w.defaultPrevented}function bn(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function ha(l){l.g=bn(()=>{l.g=null,l.i&&(l.i=!1,ha(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class qs extends ce{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ha(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(l){ce.call(this),this.h=l,this.g={}}k(Zi,ce);var Vn=[];function fa(l){x(l.g,function(h,m){this.g.hasOwnProperty(m)&&ca(h)},l),l.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),fa(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ks=a.JSON.stringify,Tu=a.JSON.parse,Fh=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Gs(){}Gs.prototype.h=null;function es(l){return l.h||(l.h=l.i())}function pa(){}var Ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ri(){ve.call(this,"d")}k(ri,ve);function ts(){ve.call(this,"c")}k(ts,ve);var Sr={},ma=null;function Qs(){return ma=ma||new yt}Sr.La="serverreachability";function ga(l){ve.call(this,Sr.La,l)}k(ga,ve);function kr(l){const h=Qs();_t(h,new ga(h))}Sr.STAT_EVENT="statevent";function ns(l,h){ve.call(this,Sr.STAT_EVENT,l),this.stat=h}k(ns,ve);function Pt(l){const h=Qs();_t(h,new ns(h,l))}Sr.Ma="timingevent";function Iu(l,h){ve.call(this,Sr.Ma,l),this.size=h}k(Iu,ve);function N(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function L(){this.g=!0}L.prototype.xa=function(){this.g=!1};function j(l,h,m,w,M,U){l.info(function(){if(l.g)if(U)for(var K="",Ve=U.split("&"),bt=0;bt<Ve.length;bt++){var Pe=Ve[bt].split("=");if(1<Pe.length){var Ft=Pe[0];Pe=Pe[1];var Bt=Ft.split("_");K=2<=Bt.length&&Bt[1]=="type"?K+(Ft+"="+Pe+"&"):K+(Ft+"=redacted&")}}else K=null;else K=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+h+`
`+m+`
`+K})}function B(l,h,m,w,M,U,K){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+h+`
`+m+`
`+U+" "+K})}function G(l,h,m,w){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+ae(l,m)+(w?" "+w:"")})}function Z(l,h){l.info(function(){return"TIMEOUT: "+h})}L.prototype.info=function(){};function ae(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var K=1;K<M.length;K++)M[K]=""}}}}return Ks(m)}catch{return h}}var q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},de={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ne;function te(){}k(te,Gs),te.prototype.g=function(){return new XMLHttpRequest},te.prototype.i=function(){return{}},ne=new te;function _e(l,h,m,w){this.j=l,this.i=h,this.l=m,this.R=w||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}var Oe={},Ce={};function ct(l,h,m){l.L=1,l.v=Ru(Rr(h)),l.m=m,l.P=!0,Ze(l,null)}function Ze(l,h){l.F=Date.now(),Un(l),l.A=Rr(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),zv(m.i,"t",w),l.C=0,m=l.j.J,l.h=new ke,l.g=oy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new qs(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Vn[0]=M.toString()),M=Vn);for(var U=0;U<M.length;U++){var K=er(m,M[U],w||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),kr(),j(l.i,l.u,l.A,l.l,l.R,l.m)}_e.prototype.ca=function(l){l=l.target;const h=this.M;h&&Ar(l)==3?h.j():this.Y(l)},_e.prototype.Y=function(l){try{if(l==this.g)e:{const Bt=Ar(this.g);var h=this.g.Ba();const Zs=this.g.Z();if(!(3>Bt)&&(Bt!=3||this.g&&(this.h.h||this.g.oa()||Qv(this.g)))){this.J||Bt!=4||h==7||(h==8||0>=Zs?kr(3):kr(2)),nr(this);var m=this.g.Z();this.X=m;t:if(ii(this)){var w=Qv(this.g);l="";var M=w.length,U=Ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),Vt(this);var K="";break t}this.h.i=new a.TextDecoder}for(h=0;h<M;h++)this.h.h=!0,l+=this.h.i.decode(w[h],{stream:!(U&&h==M-1)});w.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=m==200,B(this.i,this.u,this.A,this.l,this.R,Bt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,bt=this.g;if((Ve=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Ve)){var Pe=Ve;break t}}Pe=null}if(m=Pe)G(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,si(this,m);else{this.o=!1,this.s=3,Pt(12),xn(this),Vt(this);break e}}if(this.P){m=!0;let Fn;for(;!this.J&&this.C<K.length;)if(Fn=tr(this,K),Fn==Ce){Bt==4&&(this.s=4,Pt(14),m=!1),G(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==Oe){this.s=4,Pt(15),G(this.i,this.l,K,"[Invalid Chunk]"),m=!1;break}else G(this.i,this.l,Fn,null),si(this,Fn);if(ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Bt!=4||K.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)G(this.i,this.l,K,"[Invalid Chunked Response]"),xn(this),Vt(this);else if(0<K.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Hh(Ft),Ft.M=!0,Pt(11))}}else G(this.i,this.l,K,null),si(this,K);Bt==4&&xn(this),this.o&&!this.J&&(Bt==4?ny(this.j,this):(this.o=!1,Un(this)))}else oC(this.g),m==400&&0<K.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),xn(this),Vt(this)}}}catch{}finally{}};function ii(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tr(l,h){var m=l.C,w=h.indexOf(`
`,m);return w==-1?Ce:(m=Number(h.substring(m,w)),isNaN(m)?Oe:(w+=1,w+m>h.length?Ce:(h=h.slice(w,w+m),l.C=w+m,h)))}_e.prototype.cancel=function(){this.J=!0,xn(this)};function Un(l){l.S=Date.now()+l.I,Cr(l,l.I)}function Cr(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=N(p(l.ba,l),h)}function nr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_e.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Z(this.i,this.A),this.L!=2&&(kr(),Pt(17)),xn(this),this.s=2,Vt(this)):Cr(this,this.S-l)};function Vt(l){l.j.G==0||l.J||ny(l.j,l)}function xn(l){nr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,fa(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function si(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||Le(m.h,l))){if(!l.K&&Le(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Nu(m),bu(m);else break e;$h(m),Pt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=N(p(m.Za,m),6e3));if(1>=Ut(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else is(m,11)}else if((l.K||m.g==l)&&Nu(m),!y(h))for(M=m.Da.g.parse(h),h=0;h<M.length;h++){let Pe=M[h];if(m.T=Pe[0],Pe=Pe[1],m.G==2)if(Pe[0]=="c"){m.K=Pe[1],m.ia=Pe[2];const Ft=Pe[3];Ft!=null&&(m.la=Ft,m.j.info("VER="+m.la));const Bt=Pe[4];Bt!=null&&(m.Aa=Bt,m.j.info("SVER="+m.Aa));const Zs=Pe[5];Zs!=null&&typeof Zs=="number"&&0<Zs&&(w=1.5*Zs,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Fn=l.g;if(Fn){const Ou=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ou){var U=w.h;U.g||Ou.indexOf("spdy")==-1&&Ou.indexOf("quic")==-1&&Ou.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(vn(U,U.h),U.h=null))}if(w.D){const Wh=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(w.ya=Wh,He(w.I,w.D,Wh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var K=l;if(w.qa=sy(w,w.J?w.ia:null,w.W),K.K){va(w.h,K);var Ve=K,bt=w.L;bt&&(Ve.I=bt),Ve.B&&(nr(Ve),Un(Ve)),w.g=K}else ey(w);0<m.i.length&&xu(m)}else Pe[0]!="stop"&&Pe[0]!="close"||is(m,7);else m.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?is(m,7):zh(m):Pe[0]!="noop"&&m.l&&m.l.ta(Pe),m.v=0)}}kr(4)}catch{}}var Ys=class{constructor(l,h){this.g=l,this.map=h}};function pe(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $e(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ut(l){return l.h?1:l.g?l.g.size:0}function Le(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function vn(l,h){l.g?l.g.add(h):l.h=h}function va(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}pe.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Su(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return C(l.i)}function Wk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,w=0;w<m;w++)h.push(l[w]);return h}h=[],m=0;for(w in l)h[m++]=l[w];return h}function qk(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const w in l)h[m++]=w;return h}}}function Mv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=qk(l),w=Wk(l),M=w.length,U=0;U<M;U++)h.call(void 0,w[U],m&&m[U],l)}var jv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kk(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),M=null;if(0<=w){var U=l[m].substring(0,w);M=l[m].substring(w+1)}else U=l[m];h(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function rs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rs){this.h=l.h,ku(this,l.j),this.o=l.o,this.g=l.g,Cu(this,l.s),this.l=l.l;var h=l.i,m=new wa;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Vv(this,m),this.m=l.m}else l&&(h=String(l).match(jv))?(this.h=!1,ku(this,h[1]||"",!0),this.o=ya(h[2]||""),this.g=ya(h[3]||"",!0),Cu(this,h[4]),this.l=ya(h[5]||"",!0),Vv(this,h[6]||"",!0),this.m=ya(h[7]||"")):(this.h=!1,this.i=new wa(null,this.h))}rs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(_a(h,Uv,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(_a(h,Uv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(_a(m,m.charAt(0)=="/"?Yk:Qk,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",_a(m,Jk)),l.join("")};function Rr(l){return new rs(l)}function ku(l,h,m){l.j=m?ya(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Cu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Vv(l,h,m){h instanceof wa?(l.i=h,Zk(l.i,l.h)):(m||(h=_a(h,Xk)),l.i=new wa(h,l.h))}function He(l,h,m){l.i.set(h,m)}function Ru(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ya(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function _a(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,Gk),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Gk(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Uv=/[#\/\?@]/g,Qk=/[#\?:]/g,Yk=/[#\?]/g,Xk=/[#\?@]/g,Jk=/#/g;function wa(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function oi(l){l.g||(l.g=new Map,l.h=0,l.i&&Kk(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=wa.prototype,t.add=function(l,h){oi(this),this.i=null,l=Xs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function Fv(l,h){oi(l),h=Xs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Bv(l,h){return oi(l),h=Xs(l,h),l.g.has(h)}t.forEach=function(l,h){oi(this),this.g.forEach(function(m,w){m.forEach(function(M){l.call(h,M,w,this)},this)},this)},t.na=function(){oi(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let w=0;w<h.length;w++){const M=l[w];for(let U=0;U<M.length;U++)m.push(h[w])}return m},t.V=function(l){oi(this);let h=[];if(typeof l=="string")Bv(this,l)&&(h=h.concat(this.g.get(Xs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return oi(this),this.i=null,l=Xs(this,l),Bv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function zv(l,h,m){Fv(l,h),0<m.length&&(l.i=null,l.g.set(Xs(l,h),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var w=h[m];const U=encodeURIComponent(String(w)),K=this.V(w);for(w=0;w<K.length;w++){var M=U;K[w]!==""&&(M+="="+encodeURIComponent(String(K[w]))),l.push(M)}}return this.i=l.join("&")};function Xs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Zk(l,h){h&&!l.j&&(oi(l),l.i=null,l.g.forEach(function(m,w){var M=w.toLowerCase();w!=M&&(Fv(this,w),zv(this,M,m))},l)),l.j=h}function eC(l,h){const m=new L;if(a.Image){const w=new Image;w.onload=E(ai,m,"TestLoadImage: loaded",!0,h,w),w.onerror=E(ai,m,"TestLoadImage: error",!1,h,w),w.onabort=E(ai,m,"TestLoadImage: abort",!1,h,w),w.ontimeout=E(ai,m,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else h(!1)}function tC(l,h){const m=new L,w=new AbortController,M=setTimeout(()=>{w.abort(),ai(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?ai(m,"TestPingServer: ok",!0,h):ai(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(M),ai(m,"TestPingServer: error",!1,h)})}function ai(l,h,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function nC(){this.g=new Fh}function rC(l,h,m){const w=m||"";try{Mv(l,function(M,U){let K=M;c(M)&&(K=Ks(M)),h.push(w+U+"="+encodeURIComponent(K))})}catch(M){throw h.push(w+"type="+encodeURIComponent("_badmap")),M}}function Ea(l){this.l=l.Ub||null,this.j=l.eb||!1}k(Ea,Gs),Ea.prototype.g=function(){return new Au(this.l,this.j)},Ea.prototype.i=function(l){return function(){return l}}({});function Au(l,h){yt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Au,yt),t=Au.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ia(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$v(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function $v(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ta(this):Ia(this),this.readyState==3&&$v(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ta(this))},t.Qa=function(l){this.g&&(this.response=l,Ta(this))},t.ga=function(){this.g&&Ta(this)};function Ta(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ia(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function Ia(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Au.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hv(l){let h="";return x(l,function(m,w){h+=w,h+=":",h+=m,h+=`\r
`}),h}function Bh(l,h,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Hv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):He(l,h,m))}function ot(l){yt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ot,yt);var iC=/^https?$/i,sC=["POST","PUT"];t=ot.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ne.g(),this.v=this.o?es(this.o):es(ne),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(U){Wv(this,U);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())m.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(sC,h,void 0))||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,K]of m)this.g.setRequestHeader(U,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gv(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Wv(this,U)}};function Wv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,qv(l),Pu(l)}function qv(l){l.A||(l.A=!0,_t(l,"complete"),_t(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,_t(this,"complete"),_t(this,"abort"),Pu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pu(this,!0)),ot.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kv(this):this.bb())},t.bb=function(){Kv(this)};function Kv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Ar(l)!=4||l.Z()!=2)){if(l.u&&Ar(l)==4)bn(l.Ea,0,l);else if(_t(l,"readystatechange"),Ar(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var w;if(w=K===0){var M=String(l.D).match(jv)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!iC.test(M?M.toLowerCase():"")}m=w}if(m)_t(l,"complete"),_t(l,"success");else{l.m=6;try{var U=2<Ar(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",qv(l)}}finally{Pu(l)}}}}function Pu(l,h){if(l.g){Gv(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||_t(l,"ready");try{m.onreadystatechange=w}catch{}}}function Gv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Ar(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Tu(h)}};function Qv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function oC(l){const h={};l=(l.g&&2<=Ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var m=b(l[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=h[M]||[];h[M]=U,U.push(m)}T(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Yv(l){this.Aa=0,this.i=[],this.j=new L,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sa("baseRetryDelayMs",5e3,l),this.cb=Sa("retryDelaySeedMs",1e4,l),this.Wa=Sa("forwardChannelMaxRetries",2,l),this.wa=Sa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new pe(l&&l.concurrentRequestLimit),this.Da=new nC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yv.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,w){Pt(0),this.W=l,this.H=h||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=sy(this,null,this.W),xu(this)};function zh(l){if(Xv(l),l.G==3){var h=l.U++,m=Rr(l.I);if(He(m,"SID",l.K),He(m,"RID",h),He(m,"TYPE","terminate"),ka(l,m),h=new _e(l,l.j,h),h.L=2,h.v=Ru(Rr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Un(h)}iy(l)}function bu(l){l.g&&(Hh(l),l.g.cancel(),l.g=null)}function Xv(l){bu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Nu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function xu(l){if(!$e(l.h)&&!l.s){l.s=!0;var h=l.Ga;ge||ie(),W||(ge(),W=!0),ee.add(h,l),l.B=0}}function aC(l,h){return Ut(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=N(p(l.Ga,l,h),ry(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new _e(this,this.j,l);let U=this.o;if(this.S&&(U?(U=v(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Zv(this,M,h),m=Rr(this.I),He(m,"RID",l),He(m,"CVER",22),this.D&&He(m,"X-HTTP-Session-Id",this.D),ka(this,m),U&&(this.O?h="headers="+encodeURIComponent(String(Hv(U)))+"&"+h:this.m&&Bh(m,this.m,U)),vn(this.h,M),this.Ua&&He(m,"TYPE","init"),this.P?(He(m,"$req",h),He(m,"SID","null"),M.T=!0,ct(M,m,null)):ct(M,m,h),this.G=2}}else this.G==3&&(l?Jv(this,l):this.i.length==0||$e(this.h)||Jv(this))};function Jv(l,h){var m;h?m=h.l:m=l.U++;const w=Rr(l.I);He(w,"SID",l.K),He(w,"RID",m),He(w,"AID",l.T),ka(l,w),l.m&&l.o&&Bh(w,l.m,l.o),m=new _e(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Zv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),vn(l.h,m),ct(m,w,h)}function ka(l,h){l.H&&x(l.H,function(m,w){He(h,w,m)}),l.l&&Mv({},function(m,w){He(h,w,m)})}function Zv(l,h,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var M=l.i;let U=-1;for(;;){const K=["count="+m];U==-1?0<m?(U=M[0].g,K.push("ofs="+U)):U=0:K.push("ofs="+U);let Ve=!0;for(let bt=0;bt<m;bt++){let Pe=M[bt].g;const Ft=M[bt].map;if(Pe-=U,0>Pe)U=Math.max(0,M[bt].g-100),Ve=!1;else try{rC(Ft,K,"req"+Pe+"_")}catch{w&&w(Ft)}}if(Ve){w=K.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,w}function ey(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ge||ie(),W||(ge(),W=!0),ee.add(h,l),l.v=0}}function $h(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=N(p(l.Fa,l),ry(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=N(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),bu(this),ty(this))};function Hh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ty(l){l.g=new _e(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Rr(l.qa);He(h,"RID","rpc"),He(h,"SID",l.K),He(h,"AID",l.T),He(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(h,"TO",l.ja),He(h,"TYPE","xmlhttp"),ka(l,h),l.m&&l.o&&Bh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ru(Rr(h)),m.m=null,m.P=!0,Ze(m,l)}t.Za=function(){this.C!=null&&(this.C=null,bu(this),$h(this),Pt(19))};function Nu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ny(l,h){var m=null;if(l.g==h){Nu(l),Hh(l),l.g=null;var w=2}else if(Le(l.h,h))m=h.D,va(l.h,h),w=1;else return;if(l.G!=0){if(h.o)if(w==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var M=l.B;w=Qs(),_t(w,new Iu(w,m)),xu(l)}else ey(l);else if(M=h.s,M==3||M==0&&0<h.X||!(w==1&&aC(l,h)||w==2&&$h(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),M){case 1:is(l,5);break;case 4:is(l,10);break;case 3:is(l,6);break;default:is(l,2)}}}function ry(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function is(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),w=l.Xa;const M=!w;w=new rs(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ku(w,"https"),Ru(w),M?eC(w.toString(),m):tC(w.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(h),iy(l),Xv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function iy(l){if(l.G=0,l.ka=[],l.l){const h=Su(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function sy(l,h,m){var w=m instanceof rs?Rr(m):new rs(m);if(w.g!="")h&&(w.g=h+"."+w.g),Cu(w,w.s);else{var M=a.location;w=M.protocol,h=h?h+"."+M.hostname:M.hostname,M=+M.port;var U=new rs(null);w&&ku(U,w),h&&(U.g=h),M&&Cu(U,M),m&&(U.l=m),w=U}return m=l.D,h=l.ya,m&&h&&He(w,m,h),He(w,"VER",l.la),ka(l,w),w}function oy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new ot(new Ea({eb:m})):new ot(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ay(){}t=ay.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Du(){}Du.prototype.g=function(l,h){return new yn(l,h)};function yn(l,h){yt.call(this),this.g=new Yv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Js(this)}k(yn,yt),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){zh(this.g)},yn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Ks(l),l=m);h.i.push(new Ys(h.Ya++,l)),h.G==3&&xu(h)},yn.prototype.N=function(){this.g.l=null,delete this.j,zh(this.g),delete this.g,yn.aa.N.call(this)};function ly(l){ri.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}k(ly,ri);function uy(){ts.call(this),this.status=1}k(uy,ts);function Js(l){this.g=l}k(Js,ay),Js.prototype.ua=function(){_t(this.g,"a")},Js.prototype.ta=function(l){_t(this.g,new ly(l))},Js.prototype.sa=function(l){_t(this.g,new uy)},Js.prototype.ra=function(){_t(this.g,"b")},Du.prototype.createWebChannel=Du.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,WI=function(){return new Du},HI=function(){return Qs()},$I=Sr,sm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},q.NO_ERROR=0,q.TIMEOUT=8,q.HTTP_ERROR=6,Mc=q,de.COMPLETE="complete",zI=de,pa.EventType=Ir,Ir.OPEN="a",Ir.CLOSE="b",Ir.ERROR="c",Ir.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Ka=pa,BI=Ea,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,FI=ot}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const W0="@firebase/firestore";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let ra="10.12.3";/**
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
 */const Os=new Fg("@firebase/firestore");function ja(){return Os.logLevel}function X(t,...e){if(Os.logLevel<=Se.DEBUG){const n=e.map(Jg);Os.debug(`Firestore (${ra}): ${t}`,...n)}}function Gr(t,...e){if(Os.logLevel<=Se.ERROR){const n=e.map(Jg);Os.error(`Firestore (${ra}): ${t}`,...n)}}function $o(t,...e){if(Os.logLevel<=Se.WARN){const n=e.map(Jg);Os.warn(`Firestore (${ra}): ${t}`,...n)}}function Jg(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw Gr(e),new Error(e)}function Be(t,e){t||ue()}function fe(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class pL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new qI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Wt(e)}}class gL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _L{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new yL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function wL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class KI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function Ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class It{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new It(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new It(0,0))}static max(){return new he(new It(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $l{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $l.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $l?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Je extends $l{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const EL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends $l{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return EL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Je.fromString(e))}static fromName(e){return new oe(Je.fromString(e).popFirst(5))}static empty(){return new oe(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Je(e.slice()))}}function TL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new It(n+1,0):new It(n,r));return new $i(i,oe.empty(),e)}function IL(t){return new $i(t.readTime,t.key,-1)}class $i{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $i(he.min(),oe.empty(),-1)}static max(){return new $i(he.max(),oe.empty(),-1)}}function SL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const kL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fu(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==kL)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zg.oe=-1;function mh(t){return t==null}function Ad(t){return t===0&&1/t==-1/0}function AL(t){return typeof t=="number"&&Number.isInteger(t)&&!Ad(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function q0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class it{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=i??Nt.EMPTY,this.right=s??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new K0(this.data.getIterator())}getIteratorFrom(e){return new K0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Lt(this.comparator);return n.data=e,n}}class K0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new Lt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class QI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QI("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const PL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hi(t){if(Be(!!t),typeof t=="string"){let e=0;const n=PL.exec(t);if(Be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ls(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */function ev(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tv(t){const e=t.mapValue.fields.__previous_value__;return ev(e)?tv(e):e}function Hl(t){const e=Hi(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class bL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Wl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ev(t)?4:xL(t)?9007199254740991:10:ue()}function vr(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hi(i.timestampValue),a=Hi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ls(i.bytesValue).isEqual(Ls(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return pt(i.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(i.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pt(i.integerValue)===pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=pt(i.doubleValue),a=pt(s.doubleValue);return o===a?Ad(o)===Ad(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(q0(o)!==q0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!vr(o[u],a[u])))return!1;return!0}(t,e);default:return ue()}}function ql(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function Wo(t,e){if(t===e)return 0;const n=Ms(t),r=Ms(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=pt(s.integerValue||s.doubleValue),u=pt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return G0(t.timestampValue,e.timestampValue);case 4:return G0(Hl(t),Hl(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ls(s),u=Ls(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Ne(a[c],u[c]);if(d!==0)return d}return Ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ne(pt(s.latitude),pt(o.latitude));return a!==0?a:Ne(pt(s.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Wo(a[c],u[c]);if(d)return d}return Ne(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cc.mapValue&&o===cc.mapValue)return 0;if(s===cc.mapValue)return 1;if(o===cc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Ne(u[f],d[f]);if(p!==0)return p;const E=Wo(a[u[f]],c[d[f]]);if(E!==0)return E}return Ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function G0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=Hi(t),r=Hi(e),i=Ne(n.seconds,r.seconds);return i!==0?i:Ne(n.nanos,r.nanos)}function qo(t){return om(t)}function om(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=om(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${om(n.fields[o])}`;return i+"}"}(t.mapValue):ue()}function am(t){return!!t&&"integerValue"in t}function nv(t){return!!t&&"arrayValue"in t}function Q0(t){return!!t&&"nullValue"in t}function Y0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jc(t){return!!t&&"mapValue"in t}function cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn(cl(this.value))}}function YI(t){const e=[];return Bs(t.fields,(n,r)=>{const i=new Dt([n]);if(jc(r)){const s=YI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
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
 */class Kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Kt(e,0,he.min(),he.min(),he.min(),cn.empty(),0)}static newFoundDocument(e,n,r,i){return new Kt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Kt(e,2,n,he.min(),he.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,he.min(),he.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pd{constructor(e,n){this.position=e,this.inclusive=n}}function X0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Wo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bd{constructor(e,n="asc"){this.field=e,this.dir=n}}function NL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XI{}class Et extends XI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OL(e,n,r):n==="array-contains"?new jL(e,r):n==="in"?new VL(e,r):n==="not-in"?new UL(e,r):n==="array-contains-any"?new FL(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LL(e,r):new ML(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wo(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(Wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends XI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yr(e,n)}matches(e){return JI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JI(t){return t.op==="and"}function ZI(t){return DL(t)&&JI(t)}function DL(t){for(const e of t.filters)if(e instanceof yr)return!1;return!0}function lm(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+qo(t.value);if(ZI(t))return t.filters.map(e=>lm(e)).join(",");{const e=t.filters.map(n=>lm(n)).join(",");return`${t.op}(${e})`}}function eS(t,e){return t instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.field.isEqual(i.field)&&vr(r.value,i.value)}(t,e):t instanceof yr?function(r,i){return i instanceof yr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eS(o,i.filters[a]),!0):!1}(t,e):void ue()}function tS(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${qo(n.value)}`}(t):t instanceof yr?function(n){return n.op.toString()+" {"+n.getFilters().map(tS).join(" ,")+"}"}(t):"Filter"}class OL extends Et{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class LL extends Et{constructor(e,n){super(e,"in",n),this.keys=nS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ML extends Et{constructor(e,n){super(e,"not-in",n),this.keys=nS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class jL extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nv(n)&&ql(n.arrayValue,this.value)}}class VL extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class UL extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ql(this.value.arrayValue,n)}}class FL extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ql(this.value.arrayValue,r))}}/**
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
 */class BL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Z0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BL(t,e,n,r,i,s,o)}function rv(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qo(r)).join(",")),e.ue=n}return e.ue}function iv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J0(t.startAt,e.startAt)&&J0(t.endAt,e.endAt)}function um(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class gh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zL(t,e,n,r,i,s,o,a){return new gh(t,e,n,r,i,s,o,a)}function sv(t){return new gh(t)}function e1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $L(t){return t.collectionGroup!==null}function dl(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(Dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new bd(s,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new bd(Dt.keyField(),r))}return e.ce}function mr(t){const e=fe(t);return e.le||(e.le=HL(e,dl(t))),e.le}function HL(t,e){if(t.limitType==="F")return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bd(i.field,s)});const n=t.endAt?new Pd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pd(t.startAt.position,t.startAt.inclusive):null;return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cm(t,e,n){return new gh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vh(t,e){return iv(mr(t),mr(e))&&t.limitType===e.limitType}function rS(t){return`${rv(mr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tS(i)).join(", ")}]`),mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qo(i)).join(",")),`Target(${r})`}(mr(t))}; limitType=${t.limitType})`}function yh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of dl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=X0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,dl(r),i)||r.endAt&&!function(o,a,u){const c=X0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,dl(r),i))}(t,e)}function WL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iS(t){return(e,n)=>{let r=!1;for(const i of dl(t)){const s=qL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qL(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Wo(u,c):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GI(this.inner)}size(){return this.innerSize}}/**
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
 */const KL=new it(oe.comparator);function Qr(){return KL}const sS=new it(oe.comparator);function Ga(...t){let e=sS;for(const n of t)e=e.insert(n.key,n);return e}function oS(t){let e=sS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return hl()}function aS(){return hl()}function hl(){return new ia(t=>t.toString(),(t,e)=>t.isEqual(e))}const GL=new it(oe.comparator),QL=new Lt(oe.comparator);function Ie(...t){let e=QL;for(const n of t)e=e.add(n);return e}const YL=new Lt(Ne);function XL(){return YL}/**
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
 */function lS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ad(e)?"-0":e}}function uS(t){return{integerValue:""+t}}function JL(t,e){return AL(e)?uS(e):lS(t,e)}/**
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
 */class _h{constructor(){this._=void 0}}function ZL(t,e,n){return t instanceof xd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ev(s)&&(s=tv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Kl?dS(t,e):t instanceof Gl?hS(t,e):function(i,s){const o=cS(i,s),a=t1(o)+t1(i.Pe);return am(o)&&am(i.Pe)?uS(a):lS(i.serializer,a)}(t,e)}function e4(t,e,n){return t instanceof Kl?dS(t,e):t instanceof Gl?hS(t,e):n}function cS(t,e){return t instanceof Nd?function(r){return am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xd extends _h{}class Kl extends _h{constructor(e){super(),this.elements=e}}function dS(t,e){const n=fS(e);for(const r of t.elements)n.some(i=>vr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends _h{constructor(e){super(),this.elements=e}}function hS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(i=>!vr(i,r));return{arrayValue:{values:n}}}class Nd extends _h{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function t1(t){return pt(t.integerValue||t.doubleValue)}function fS(t){return nv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Kl&&i instanceof Kl||r instanceof Gl&&i instanceof Gl?Ho(r.elements,i.elements,vr):r instanceof Nd&&i instanceof Nd?vr(r.Pe,i.Pe):r instanceof xd&&i instanceof xd}(t.transform,e.transform)}class n4{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wh{}function pS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gS(t.key,Qn.none()):new mu(t.key,t.data,Qn.none());{const n=t.data,r=cn.empty();let i=new Lt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yi(t.key,r,new Tn(i.toArray()),Qn.none())}}function r4(t,e,n){t instanceof mu?function(i,s,o){const a=i.value.clone(),u=r1(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yi?function(i,s,o){if(!Vc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=r1(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fl(t,e,n,r){return t instanceof mu?function(s,o,a,u){if(!Vc(s.precondition,o))return a;const c=s.value.clone(),d=i1(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yi?function(s,o,a,u){if(!Vc(s.precondition,o))return a;const c=i1(s.fieldTransforms,u,o),d=o.data;return d.setAll(mS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function i4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function n1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ho(r,i,(s,o)=>t4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends wh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yi extends wh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r1(t,e,n){const r=new Map;Be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,e4(o,a,n[i]))}return r}function i1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZL(s,o,e))}return r}class gS extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s4 extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class o4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=pS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(n,r)=>n1(n,r))&&Ho(this.baseMutations,e.baseMutations,(n,r)=>n1(n,r))}}class ov{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Be(e.mutations.length===r.length);let i=function(){return GL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ov(e,n,r,i)}}/**
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
 */class a4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ht,Re;function u4(t){switch(t){default:return ue();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function vS(t){if(t===void 0)return Gr("GRPC error has no .code"),z.UNKNOWN;switch(t){case ht.OK:return z.OK;case ht.CANCELLED:return z.CANCELLED;case ht.UNKNOWN:return z.UNKNOWN;case ht.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ht.INTERNAL:return z.INTERNAL;case ht.UNAVAILABLE:return z.UNAVAILABLE;case ht.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ht.NOT_FOUND:return z.NOT_FOUND;case ht.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ht.ABORTED:return z.ABORTED;case ht.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ht.DATA_LOSS:return z.DATA_LOSS;default:return ue()}}(Re=ht||(ht={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function c4(){return new TextEncoder}/**
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
 */const d4=new _s([4294967295,4294967295],0);function s1(t){const e=c4().encode(t),n=new UI;return n.update(e),new Uint8Array(n.digest())}function o1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _s([n,r],0),new _s([i,s],0)]}class av{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qa(`Invalid padding: ${n}`);if(r<0)throw new Qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_s.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_s.fromNumber(r)));return i.compare(d4)===1&&(i=new _s([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=s1(e),[r,i]=o1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new av(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=s1(e),[r,i]=o1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eh(he.min(),i,new it(Ne),Qr(),Ie())}}class gu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gu(r,n,Ie(),Ie(),Ie())}}/**
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
 */class Uc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class yS{constructor(e,n){this.targetId=e,this.me=n}}class _S{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a1{constructor(){this.fe=0,this.ge=u1(),this.pe=Qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new gu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=u1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class h4{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qr(),this.qe=l1(),this.Qe=new it(Ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(um(s))if(r===0){const o=new oe(s.path);this.Ue(n,o,Kt.newNoDocument(o,he.min()))}else Be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ls(r).toUint8Array()}catch(u){if(u instanceof QI)return $o("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new av(o,i,s)}catch(u){return $o(u instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&um(a.target)){const u=new oe(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Kt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Eh(e,n,this.Qe,this.ke,r);return this.ke=Qr(),this.qe=l1(),this.Qe=new it(Ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new a1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Lt(Ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new a1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function l1(){return new it(oe.comparator)}function u1(){return new it(oe.comparator)}const f4={asc:"ASCENDING",desc:"DESCENDING"},p4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m4={and:"AND",or:"OR"};class g4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dm(t,e){return t.useProto3Json||mh(e)?e:{value:e}}function Dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function v4(t,e){return Dd(t,e.toTimestamp())}function gr(t){return Be(!!t),he.fromTimestamp(function(n){const r=Hi(n);return new It(r.seconds,r.nanos)}(t))}function lv(t,e){return hm(t,e).canonicalString()}function hm(t,e){const n=function(i){return new Je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ES(t){const e=Je.fromString(t);return Be(CS(e)),e}function fm(t,e){return lv(t.databaseId,e.path)}function Of(t,e){const n=ES(e);if(n.get(1)!==t.databaseId.projectId)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(IS(n))}function TS(t,e){return lv(t.databaseId,e)}function y4(t){const e=ES(t);return e.length===4?Je.emptyPath():IS(e)}function pm(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IS(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function c1(t,e,n){return{name:fm(t,e),fields:n.value.mapValue.fields}}function _4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Be(d===void 0||typeof d=="string"),Qt.fromBase64String(d||"")):(Be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Qt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?z.UNKNOWN:vS(c.code);return new re(d,c.message||"")}(o);n=new _S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Of(t,r.document.name),s=gr(r.document.updateTime),o=r.document.createTime?gr(r.document.createTime):he.min(),a=new cn({mapValue:{fields:r.document.fields}}),u=Kt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Of(t,r.document),s=r.readTime?gr(r.readTime):he.min(),o=Kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Of(t,r.document),s=r.removedTargetIds||[];n=new Uc([],s,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new l4(i,s),a=r.targetId;n=new yS(a,o)}}return n}function w4(t,e){let n;if(e instanceof mu)n={update:c1(t,e.key,e.value)};else if(e instanceof gS)n={delete:fm(t,e.key)};else if(e instanceof Yi)n={update:c1(t,e.key,e.data),updateMask:P4(e.fieldMask)};else{if(!(e instanceof s4))return ue();n={verify:fm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Kl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:v4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function E4(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gr(i.updateTime):gr(s);return o.isEqual(he.min())&&(o=gr(s)),new n4(o,i.transformResults||[])}(n,e))):[]}function T4(t,e){return{documents:[TS(t,e.path)]}}function I4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TS(t,i);const s=function(c){if(c.length!==0)return kS(yr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:io(p.field),direction:C4(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=dm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function S4(t){let e=y4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=SS(f);return p instanceof yr&&ZI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(k){return new bd(so(k.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,mh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,E=f.values||[];return new Pd(E,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,E=f.values||[];return new Pd(E,p)}(n.endAt)),zL(e,i,o,s,a,"F",u,c)}function k4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=so(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=so(n.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=so(n.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=so(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(so(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yr.create(n.compositeFilter.filters.map(r=>SS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function C4(t){return f4[t]}function R4(t){return p4[t]}function A4(t){return m4[t]}function io(t){return{fieldPath:t.canonicalString()}}function so(t){return Dt.fromServerFormat(t.fieldPath)}function kS(t){return t instanceof Et?function(n){if(n.op==="=="){if(Y0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NAN"}};if(Q0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NAN"}};if(Q0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(n.field),op:R4(n.op),value:n.value}}}(t):t instanceof yr?function(n){const r=n.getFilters().map(i=>kS(i));return r.length===1?r[0]:{compositeFilter:{op:A4(n.op),filters:r}}}(t):ue()}function P4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ii{constructor(e,n,r,i,s=he.min(),o=he.min(),a=Qt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b4{constructor(e){this.ct=e}}function x4(t){const e=S4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cm(e,e.limit,"L"):e}/**
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
 */class N4{constructor(){this._n=new D4}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve($i.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve($i.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class D4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Lt(Je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Lt(Je.comparator)).toArray()}}/**
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
 */class Ko{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ko(0)}static Ln(){return new Ko(-1)}}/**
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
 */class O4{constructor(){this.changes=new ia(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class L4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class M4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fl(r.mutation,i,Tn.empty(),It.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ga();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Qr();const o=hl(),a=function(){return hl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Yi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),fl(d.mutation,c,d.mutation.getFieldMask(),It.now())):o.set(c.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new L4(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hl();let i=new it((o,a)=>o-a),s=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Tn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Ie()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=aS();d.forEach(p=>{if(!s.has(p)){const E=pS(n.get(p),r.get(p));E!==null&&f.set(p,E),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$L(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(gs());let a=-1,u=s;return o.next(c=>$.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ie())).next(d=>({batchId:a,changes:oS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=Ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ga();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,u=>{const c=function(f,p){return new gh(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Kt.newInvalidDocument(d)))});let a=Ga();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&fl(d.mutation,c,Tn.empty(),It.now()),yh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class j4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:x4(i.bundledQuery),readTime:gr(i.readTime)}}(n)),$.resolve()}}/**
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
 */class V4{constructor(){this.overlays=new it(oe.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=gs(),s=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=gs(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=gs(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a4(n,r));let s=this.hr.get(n);s===void 0&&(s=Ie(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class uv{constructor(){this.Pr=new Lt(kt.Ir),this.Tr=new Lt(kt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new kt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new oe(new Je([])),r=new kt(n,e),i=new kt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new Je([])),r=new kt(n,e),i=new kt(n,e+1);let s=Ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new kt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||Ne(e.pr,n.pr)}static Er(e,n){return Ne(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
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
 */class U4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Lt(kt.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new kt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),i=new kt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Lt(Ne);return n.forEach(i=>{const s=new kt(i,0),o=new kt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new kt(new oe(s),0);let a=new Lt(Ne);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Be(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new kt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new kt(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class F4{constructor(e){this.vr=e,this.docs=function(){return new it(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let r=Qr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Kt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qr();const o=n.path,a=new oe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||SL(IL(d),r)<=0||(i.has(d.key)||yh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ue()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B4(this)}getSize(e){return $.resolve(this.size)}}class B4 extends O4{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class z4{constructor(e){this.persistence=e,this.Mr=new ia(n=>rv(n),iv),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new uv,this.targetCount=0,this.Lr=Ko.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ko(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class $4{constructor(e,n){this.Br={},this.overlays={},this.kr=new Zg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new z4(this),this.indexManager=new N4,this.remoteDocumentCache=function(i){return new F4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new b4(n),this.$r=new j4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new V4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new U4(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new H4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class H4 extends CL{constructor(e){super(),this.currentSequenceNumber=e}}class cv{constructor(e){this.persistence=e,this.zr=new uv,this.jr=null}static Hr(e){return new cv(e)}get Jr(){if(this.jr)return this.jr;throw ue()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=oe.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class dv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ie(),i=Ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dv(e,n.fromCache,r,i)}}/**
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
 */class W4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class q4{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return N2()?8:RL(jt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new W4;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ja()<=Se.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(ja()<=Se.DEBUG&&X("QueryEngine","Query:",ro(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ja()<=Se.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mr(n))):$.resolve())}ji(e,n){if(e1(n))return $.resolve(null);let r=mr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cm(n,null,"F"),r=mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ie(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,cm(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return e1(n)||i.isEqual(he.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(ja()<=Se.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ro(n)),this.es(e,o,n,TL(i,-1)).next(a=>a))})}Zi(e,n){let r=new Lt(iS(e));return n.forEach((i,s)=>{yh(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ja()<=Se.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ro(n)),this.zi.getDocumentsMatchingQuery(e,n,$i.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class K4{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new it(Ne),this.rs=new ia(s=>rv(s),iv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M4(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function G4(t,e,n,r){return new K4(t,e,n,r)}async function RS(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Q4(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let E=$.resolve();return p.forEach(k=>{E=E.next(()=>d.getEntry(u,k)).next(C=>{const P=c.docVersions.get(k);Be(P!==null),C.version.compareTo(P)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AS(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Y4(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let E=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(Qt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(C,P,S){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,E,d)&&a.push(n.Qr.updateTargetData(s,E))});let u=Qr(),c=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(X4(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(he.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function X4(t,e,n){let r=Ie(),i=Ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function J4(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Z4(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function mm(t,e,n){const r=fe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pu(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function d1(t,e,n){const r=fe(t);let i=he.min(),s=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=fe(u),p=f.rs.get(d);return p!==void 0?$.resolve(f.ns.get(p)):f.Qr.getTargetData(c,d)}(r,o,mr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Ie())).next(a=>(eM(r,WL(e),a),{documents:a,hs:s})))}function eM(t,e,n){let r=t.ss.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class h1{constructor(){this.activeTargetIds=XL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tM{constructor(){this.no=new h1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new h1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nM{io(e){}shutdown(){}}/**
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
 */class f1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dc=null;function Lf(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
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
 */const rM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ht="WebChannelConnection";class sM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Lf(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw $o("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=rM[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Lf();return new Promise((o,a)=>{const u=new FI;u.setWithCredentials(!0),u.listenOnce(zI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Mc.NO_ERROR:const d=u.getResponseJson();X(Ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Mc.TIMEOUT:X(Ht,`RPC '${e}' ${s} timed out`),a(new re(z.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const f=u.getStatus();if(X(Ht,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const E=p==null?void 0:p.error;if(E&&E.status&&E.message){const k=function(P){const S=P.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(S)>=0?S:z.UNKNOWN}(E.status);a(new re(k,E.message))}else a(new re(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new re(z.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(Ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(Ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Lf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WI(),a=HI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new BI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(Ht,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,E=!1;const k=new iM({lo:P=>{E?X(Ht,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(X(Ht,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),X(Ht,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),C=(P,S,y)=>{P.listen(S,I=>{try{y(I)}catch(D){setTimeout(()=>{throw D},0)}})};return C(f,Ka.EventType.OPEN,()=>{E||(X(Ht,`RPC '${e}' stream ${i} transport opened.`),k.mo())}),C(f,Ka.EventType.CLOSE,()=>{E||(E=!0,X(Ht,`RPC '${e}' stream ${i} transport closed`),k.po())}),C(f,Ka.EventType.ERROR,P=>{E||(E=!0,$o(Ht,`RPC '${e}' stream ${i} transport errored:`,P),k.po(new re(z.UNAVAILABLE,"The operation could not be completed")))}),C(f,Ka.EventType.MESSAGE,P=>{var S;if(!E){const y=P.data[0];Be(!!y);const I=y,D=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(D){X(Ht,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let x=function(_){const R=ht[_];if(R!==void 0)return vS(R)}(F),T=D.message;x===void 0&&(x=z.INTERNAL,T="Unknown error status: "+F+" with message "+D.message),E=!0,k.po(new re(x,T)),f.close()}else X(Ht,`RPC '${e}' stream ${i} received:`,y),k.yo(y)}}),C(a,$I.STAT_EVENT,P=>{P.stat===sm.PROXY?X(Ht,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===sm.NOPROXY&&X(Ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Mf(){return typeof document<"u"?document:null}/**
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
 */function Th(t){return new g4(t,!0)}/**
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
 */class PS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class bS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new PS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Gr(n.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oM extends bS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=_4(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?gr(o.readTime):he.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=pm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=um(u)?{documents:T4(s,u)}:{query:I4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wS(s,o.resumeToken);const c=dm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Dd(s,o.snapshotVersion.toTimestamp());const c=dm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=k4(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=pm(this.serializer),n.removeTarget=e,this.i_(n)}}class aM extends bS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=E4(e.writeResults,e.commitTime),r=gr(e.commitTime);return this.listener.A_(r,n)}return Be(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=pm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>w4(this.serializer,r))};this.i_(n)}}/**
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
 */class lM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,hm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,hm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class uM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Gr(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class cM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{zs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.M_.add(4),await vu(c),c.N_.set("Unknown"),c.M_.delete(4),await Ih(c)}(this))})}),this.N_=new uM(r,i)}}async function Ih(t){if(zs(t))for(const e of t.x_)await e(!0)}async function vu(t){for(const e of t.x_)await e(!1)}function xS(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),mv(n)?pv(n):sa(n).Xo()&&fv(n,e))}function hv(t,e){const n=fe(t),r=sa(n);n.F_.delete(e),r.Xo()&&NS(n,e),n.F_.size===0&&(r.Xo()?r.n_():zs(n)&&n.N_.set("Unknown"))}function fv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}sa(t).P_(e)}function NS(t,e){t.L_.xe(e),sa(t).I_(e)}function pv(t){t.L_=new h4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),sa(t).start(),t.N_.w_()}function mv(t){return zs(t)&&!sa(t).Zo()&&t.F_.size>0}function zs(t){return fe(t).M_.size===0}function DS(t){t.L_=void 0}async function dM(t){t.N_.set("Online")}async function hM(t){t.F_.forEach((e,n)=>{fv(t,e)})}async function fM(t,e){DS(t),mv(t)?(t.N_.D_(e),pv(t)):t.N_.set("Unknown")}async function pM(t,e,n){if(t.N_.set("Online"),e instanceof _S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Od(t,r)}else if(e instanceof Uc?t.L_.Ke(e):e instanceof yS?t.L_.He(e):t.L_.We(e),!n.isEqual(he.min()))try{const r=await AS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Qt.EMPTY_BYTE_STRING,d.snapshotVersion)),NS(s,u);const f=new Ii(d.target,u,c,d.sequenceNumber);fv(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Od(t,r)}}async function Od(t,e,n){if(!pu(e))throw e;t.M_.add(1),await vu(t),t.N_.set("Offline"),n||(n=()=>AS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ih(t)})}function OS(t,e){return e().catch(n=>Od(t,n,e))}async function Sh(t){const e=fe(t),n=Wi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;mM(e);)try{const i=await J4(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,gM(e,i)}catch(i){await Od(e,i)}LS(e)&&MS(e)}function mM(t){return zs(t)&&t.v_.length<10}function gM(t,e){t.v_.push(e);const n=Wi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function LS(t){return zs(t)&&!Wi(t).Zo()&&t.v_.length>0}function MS(t){Wi(t).start()}async function vM(t){Wi(t).V_()}async function yM(t){const e=Wi(t);for(const n of t.v_)e.d_(n.mutations)}async function _M(t,e,n){const r=t.v_.shift(),i=ov.from(r,e,n);await OS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sh(t)}async function wM(t,e){e&&Wi(t).E_&&await async function(r,i){if(function(o){return u4(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();Wi(r).t_(),await OS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sh(r)}}(t,e),LS(t)&&MS(t)}async function p1(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=zs(n);n.M_.add(3),await vu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ih(n)}async function EM(t,e){const n=fe(t);e?(n.M_.delete(2),await Ih(n)):e||(n.M_.add(2),await vu(n),n.N_.set("Unknown"))}function sa(t){return t.B_||(t.B_=function(n,r,i){const s=fe(n);return s.f_(),new oM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:dM.bind(null,t),To:hM.bind(null,t),Ao:fM.bind(null,t),h_:pM.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),mv(t)?pv(t):t.N_.set("Unknown")):(await t.B_.stop(),DS(t))})),t.B_}function Wi(t){return t.k_||(t.k_=function(n,r,i){const s=fe(n);return s.f_(),new aM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:vM.bind(null,t),Ao:wM.bind(null,t),R_:yM.bind(null,t),A_:_M.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Sh(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class gv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vv(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),pu(t))return new re(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Oo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ga(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class m1{constructor(){this.q_=new it(oe.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ue():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,Oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class TM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class IM{constructor(){this.queries=new ia(e=>rS(e),vh),this.onlineState="Unknown",this.z_=new Set}}async function jS(t,e){const n=fe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new TM,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=vv(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&yv(n)}async function VS(t,e){const n=fe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SM(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&yv(n)}function kM(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function yv(t){t.z_.forEach(e=>{e.next()})}var gm,g1;(g1=gm||(gm={})).J_="default",g1.Cache="cache";class US{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==gm.Cache}}/**
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
 */class FS{constructor(e){this.key=e}}class BS{constructor(e){this.key=e}}class CM{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ie(),this.mutatedKeys=Ie(),this.Ia=iS(e),this.Ta=new Oo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new m1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),E=yh(this.query,f)?f:null,k=!!p&&this.mutatedKeys.has(p.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;p&&E?p.data.isEqual(E.data)?k!==C&&(r.track({type:3,doc:E}),P=!0):this.Ra(p,E)||(r.track({type:2,doc:E}),P=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(a=!0)):!p&&E?(r.track({type:0,doc:E}),P=!0):p&&!E&&(r.track({type:1,doc:p}),P=!0,(u||c)&&(a=!0)),P&&(E?(o=o.add(E),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(E,k){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return C(E)-C(k)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Go(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new m1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new BS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new FS(r))}),n}pa(e){this.la=e.hs,this.Pa=Ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Go.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class RM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AM{constructor(e){this.key=e,this.wa=!1}}class PM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ia(a=>rS(a),vh),this.Da=new Map,this.Ca=new Set,this.va=new it(oe.comparator),this.Fa=new Map,this.Ma=new uv,this.xa={},this.Oa=new Map,this.Na=Ko.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function bM(t,e,n=!0){const r=KS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await zS(r,e,n,!0),i}async function xM(t,e){const n=KS(t);await zS(n,e,!0,!1)}async function zS(t,e,n,r){const i=await Z4(t.localStore,mr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await NM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xS(t.remoteStore,i),a}async function NM(t,e,n,r,i){t.Ba=(f,p,E)=>async function(C,P,S,y){let I=P.view.da(S);I.Xi&&(I=await d1(C.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,I)));const D=y&&y.targetChanges.get(P.targetId),F=y&&y.targetMismatches.get(P.targetId)!=null,x=P.view.applyChanges(I,C.isPrimaryClient,D,F);return y1(C,P.targetId,x.fa),x.snapshot}(t,f,p,E);const s=await d1(t.localStore,e,!0),o=new CM(e,s.hs),a=o.da(s.documents),u=gu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);y1(t,n,c.fa);const d=new RM(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function DM(t,e,n){const r=fe(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!vh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hv(r.remoteStore,i.targetId),vm(r,i.targetId)}).catch(fu)):(vm(r,i.targetId),await mm(r.localStore,i.targetId,!0))}async function OM(t,e){const n=fe(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hv(n.remoteStore,r.targetId))}async function LM(t,e,n){const r=zM(t);try{const i=await function(o,a){const u=fe(o),c=It.now(),d=a.reduce((E,k)=>E.add(k.key),Ie());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=Qr(),C=Ie();return u.os.getEntries(E,d).next(P=>{k=P,k.forEach((S,y)=>{y.isValidDocument()||(C=C.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,k)).next(P=>{f=P;const S=[];for(const y of a){const I=i4(y,f.get(y.key).overlayedDocument);I!=null&&S.push(new Yi(y.key,I,YI(I.value.mapValue),Qn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(P=>{p=P;const S=P.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(E,P.batchId,S)})}).then(()=>({batchId:p.batchId,changes:oS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new it(Ne)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await yu(r,i.changes),await Sh(r.remoteStore)}catch(i){const s=vv(i,"Failed to persist write");n.reject(s)}}async function $S(t,e){const n=fe(t);try{const r=await Y4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Be(o.wa):i.removedDocuments.size>0&&(Be(o.wa),o.wa=!1))}),await yu(n,r,e)}catch(r){await fu(r)}}function v1(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=fe(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.U_)p.j_(a)&&(c=!0)}),c&&yv(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MM(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new it(oe.comparator);o=o.insert(s,Kt.newNoDocument(s,he.min()));const a=Ie().add(s),u=new Eh(he.min(),new Map,new it(Ne),o,a);await $S(r,u),r.va=r.va.remove(s),r.Fa.delete(e),_v(r)}else await mm(r.localStore,e,!1).then(()=>vm(r,e,n)).catch(fu)}async function jM(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await Q4(n.localStore,e);WS(n,r,null),HS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yu(n,i)}catch(i){await fu(i)}}async function VM(t,e,n){const r=fe(t);try{const i=await function(o,a){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Be(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);WS(r,e,n),HS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yu(r,i)}catch(i){await fu(i)}}function HS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function WS(t,e,n){const r=fe(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function vm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||qS(t,r)})}function qS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(hv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),_v(t))}function y1(t,e,n){for(const r of n)r instanceof FS?(t.Ma.addReference(r.key,e),UM(t,r)):r instanceof BS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||qS(t,r.key)):ue()}function UM(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),_v(t))}function _v(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new oe(Je.fromString(e)),r=t.Na.next();t.Fa.set(r,new AM(n)),t.va=t.va.insert(n,r),xS(t.remoteStore,new Ii(mr(sv(n.path)),r,"TargetPurposeLimboResolution",Zg.oe))}}async function yu(t,e,n){const r=fe(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=dv.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=fe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(c,p=>$.forEach(p.qi,E=>d.persistence.referenceDelegate.addReference(f,p.targetId,E)).next(()=>$.forEach(p.Qi,E=>d.persistence.referenceDelegate.removeReference(f,p.targetId,E)))))}catch(f){if(!pu(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const E=d.ns.get(p),k=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(k);d.ns=d.ns.insert(p,C)}}}(r.localStore,s))}async function FM(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await RS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new re(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yu(n,r.us)}}function BM(t,e){const n=fe(t),r=n.Fa.get(e);if(r&&r.wa)return Ie().add(r.key);{let i=Ie();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function KS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MM.bind(null,e),e.Sa.h_=SM.bind(null,e.eventManager),e.Sa.ka=kM.bind(null,e.eventManager),e}function zM(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VM.bind(null,e),e}class _1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return G4(this.persistence,new q4,e.initialUser,this.serializer)}createPersistence(e){return new $4(cv.Hr,this.serializer)}createSharedClientState(e){return new tM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $M{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>v1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FM.bind(null,this.syncEngine),await EM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IM}()}createDatastore(e){const n=Th(e.databaseInfo.databaseId),r=function(s){return new sM(s)}(e.databaseInfo);return function(s,o,a,u){return new lM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new cM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>v1(this.syncEngine,n,0),function(){return f1.D()?new f1:new nM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new PM(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await vu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class GS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class HM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=KI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jf(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function w1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qM(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>p1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>p1(e.remoteStore,i)),t._onlineComponents=e}function WM(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function qM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await jf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WM(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await jf(t,new _1)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await jf(t,new _1);return t._offlineComponents}async function QS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await w1(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await w1(t,new $M))),t._onlineComponents}function KM(t){return QS(t).then(e=>e.syncEngine)}async function YS(t){const e=await QS(t),n=e.eventManager;return n.onListen=bM.bind(null,e.syncEngine),n.onUnlisten=DM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OM.bind(null,e.syncEngine),n}function GM(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new GS({next:p=>{o.enqueueAndForget(()=>VS(s,f));const E=p.docs.has(a);!E&&p.fromCache?c.reject(new re(z.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&p.fromCache&&u&&u.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new US(sv(a.path),d,{includeMetadataChanges:!0,ra:!0});return jS(s,f)}(await YS(t),t.asyncQueue,e,n,r)),r.promise}function QM(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new GS({next:p=>{o.enqueueAndForget(()=>VS(s,f)),p.fromCache&&u.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new US(a,d,{includeMetadataChanges:!0,ra:!0});return jS(s,f)}(await YS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function XS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const E1=new Map;/**
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
 */function JS(t,e,n){if(!n)throw new re(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YM(t,e,n,r){if(e===!0&&r===!0)throw new re(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function T1(t){if(!oe.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function I1(t){if(oe.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function _r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wv(t);throw new re(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class S1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fL;switch(r.type){case"firstParty":return new vL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=E1.get(n);r&&(X("ComponentProvider","Removing Datastore"),E1.delete(n),r.terminate())}(this),Promise.resolve()}}function XM(t,e,n,r={}){var i;const s=(t=_r(t,kh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Wt.MOCK_USER;else{a=eI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Wt(c)}t._authCredentials=new pL(new qI(a,u))}}/**
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
 */class Ch{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ch(this.firestore,e,this._query)}}class mn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Mi extends Ch{constructor(e,n,r){super(e,n,sv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new oe(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function Rh(t,e,...n){if(t=gt(t),JS("collection","path",e),t instanceof kh){const r=Je.fromString(e,...n);return I1(r),new Mi(t,null,r)}{if(!(t instanceof mn||t instanceof Mi))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return I1(r),new Mi(t.firestore,null,r)}}function Xi(t,e,...n){if(t=gt(t),arguments.length===1&&(e=KI.newId()),JS("doc","path",e),t instanceof kh){const r=Je.fromString(e,...n);return T1(r),new mn(t,null,new oe(r))}{if(!(t instanceof mn||t instanceof Mi))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return T1(r),new mn(t.firestore,t instanceof Mi?t.converter:null,new oe(r))}}/**
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
 */class JM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new PS(this,"async_queue_retry"),this.hu=()=>{const n=Mf();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Mf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Mf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Vr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!pu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=gv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ue()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class oa extends kh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new JM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZS(this),this._firestoreClient.terminate()}}function ZM(t,e){const n=typeof t=="object"?t:zg(),r=typeof t=="string"?t:"(default)",i=ch(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XT("firestore");s&&XM(i,...s)}return i}function Ev(t){return t._firestoreClient||ZS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new bL(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new HM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(Qt.fromBase64String(e))}catch(n){throw new re(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qo(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ah{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tv{constructor(e){this._methodName=e}}/**
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
 */class Iv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */const ej=/^__.*__$/;class tj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Sv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Sv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ld(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tk(this.fu)&&ej.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class nj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Th(e)}Fu(e,n,r,i=!1){return new Sv({fu:e,methodName:n,vu:r,path:Dt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kv(t){const e=t._freezeSettings(),n=Th(t._databaseId);return new nj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nk(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Cv("Data must be an object, but it was:",o,r);const a=rk(r,o);let u,c;if(s.merge)u=new Tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=ym(e,f,n);if(!o.contains(p))throw new re(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sk(d,p)||d.push(p)}u=new Tn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new tj(new cn(a),u,c)}class Ph extends Tv{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}function rj(t,e,n,r){const i=t.Fu(1,e,n);Cv("Data must be an object, but it was:",i,r);const s=[],o=cn.empty();Bs(r,(u,c)=>{const d=Rv(e,u,n);c=gt(c);const f=i.Su(d);if(c instanceof Ph)s.push(d);else{const p=bh(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new Tn(s);return new ek(o,a,i.fieldTransforms)}function ij(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[ym(e,r,n)],u=[i];if(s.length%2!=0)throw new re(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(ym(e,s[p])),u.push(s[p+1]);const c=[],d=cn.empty();for(let p=a.length-1;p>=0;--p)if(!sk(c,a[p])){const E=a[p];let k=u[p];k=gt(k);const C=o.Su(E);if(k instanceof Ph)c.push(E);else{const P=bh(k,C);P!=null&&(c.push(E),d.set(E,P))}}const f=new Tn(c);return new ek(d,f,o.fieldTransforms)}function bh(t,e){if(ik(t=gt(t)))return Cv("Unsupported field value:",e,t),rk(t,e);if(t instanceof Tv)return function(r,i){if(!tk(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=bh(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=It.fromDate(r);return{timestampValue:Dd(i.serializer,s)}}if(r instanceof It){const s=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dd(i.serializer,s)}}if(r instanceof Iv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qo)return{bytesValue:wS(i.serializer,r._byteString)};if(r instanceof mn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${wv(r)}`)}(t,e)}function rk(t,e){const n={};return GI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bs(t,(r,i)=>{const s=bh(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ik(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof Iv||t instanceof Qo||t instanceof mn||t instanceof Tv)}function Cv(t,e,n){if(!ik(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wv(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function ym(t,e,n){if((e=gt(e))instanceof Ah)return e._internalPath;if(typeof e=="string")return Rv(t,e);throw Ld("Field path arguments must be of type string or ",t,!1,void 0,n)}const sj=new RegExp("[~\\*/\\[\\]]");function Rv(t,e,n){if(e.search(sj)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ah(...e.split("."))._internalPath}catch{throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ld(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(z.INVALID_ARGUMENT,a+t+u)}function sk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ok{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ak("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oj extends ok{data(){return super.data()}}function ak(t,e){return typeof e=="string"?Rv(t,e):e instanceof Ah?e._internalPath:e._delegate._internalPath}/**
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
 */function aj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lj{convertValue(e,n="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Iv(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=Hi(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Be(CS(r));const i=new Wl(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||Gr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uk extends ok{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ak("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fc extends uk{data(e={}){return super.data(e)}}class uj{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fc(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Fc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Fc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:cj(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function xh(t){t=_r(t,mn);const e=_r(t.firestore,oa);return GM(Ev(e),t._key).then(n=>fj(e,t,n))}class ck extends lj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function dj(t){t=_r(t,Ch);const e=_r(t.firestore,oa),n=Ev(e),r=new ck(e);return aj(t._query),QM(n,t._query).then(i=>new uj(e,r,t,i))}function hj(t,e,n){t=_r(t,mn);const r=_r(t.firestore,oa),i=lk(t.converter,e);return Av(r,[nk(kv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function dk(t,e,n,...r){t=_r(t,mn);const i=_r(t.firestore,oa),s=kv(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof Ah?ij(s,"updateDoc",t._key,e,n,r):rj(s,"updateDoc",t._key,e),Av(i,[o.toMutation(t._key,Qn.exists(!0))])}function hk(t,e){const n=_r(t.firestore,oa),r=Xi(t),i=lk(t.converter,e);return Av(n,[nk(kv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qn.exists(!1))]).then(()=>r)}function Av(t,e){return function(r,i){const s=new Vr;return r.asyncQueue.enqueueAndForget(async()=>LM(await KM(r),i,s)),s.promise}(Ev(t),e)}function fj(t,e,n){const r=n.docs.get(e._key),i=new ck(t);return new uk(t,i,e._key,r,new Ya(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ra=i})(Fs),xs(new zi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new oa(new mL(r.getProvider("auth-internal")),new _L(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),hr(W0,"4.6.4",e),hr(W0,"4.6.4","esm2017")})();/**
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
 */const fk="firebasestorage.googleapis.com",pk="storageBucket",pj=2*60*1e3,mj=10*60*1e3,gj=1e3;/**
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
 */class st extends Er{constructor(e,n,r=0){super(Vf(e),`Firebase Storage: ${n} (${Vf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function Vf(t){return"storage/"+t}function Pv(){const t="An unknown error occurred, please check the error payload for server response.";return new st(Ye.UNKNOWN,t)}function vj(t){return new st(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yj(t){return new st(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _j(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(Ye.UNAUTHENTICATED,t)}function wj(){return new st(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ej(t){return new st(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mk(){return new st(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gk(){return new st(Ye.CANCELED,"User canceled the upload/download.")}function Tj(t){return new st(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function Ij(t){return new st(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sj(){return new st(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pk+"' property when initializing the app?")}function vk(){return new st(Ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kj(){return new st(Ye.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Cj(){return new st(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Rj(t){return new st(Ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _m(t){return new st(Ye.INVALID_ARGUMENT,t)}function yk(){return new st(Ye.APP_DELETED,"The Firebase app was deleted.")}function Aj(t){return new st(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pl(t,e){return new st(Ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Va(t){throw new st(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw Ij(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${p}`,"i"),k={bucket:1,path:3},C=n===fk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",S=new RegExp(`^https?://${C}/${i}/${P}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:E,indices:k,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<I.length;D++){const F=I[D],x=F.regex.exec(e);if(x){const T=x[F.indices.bucket];let v=x[F.indices.path];v||(v=""),r=new In(T,v),F.postModify(r);break}}if(r==null)throw Tj(e);return r}}class Pj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(E,u())},P)}function p(){s&&clearTimeout(s)}function E(P,...S){if(c){p();return}if(P){p(),d.call(null,P,...S);return}if(u()||o){p(),d.call(null,P,...S);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let k=!1;function C(P){k||(k=!0,p(),!c&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function xj(t){t(!1)}/**
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
 */function Nj(t){return t!==void 0}function Dj(t){return typeof t=="function"}function Oj(t){return typeof t=="object"&&!Array.isArray(t)}function Nh(t){return typeof t=="string"||t instanceof String}function k1(t){return bv()&&t instanceof Blob}function bv(){return typeof Blob<"u"}function C1(t,e,n,r){if(r<e)throw _m(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _m(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _u(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _k(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ws||(ws={}));/**
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
 */function wk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Lj{constructor(e,n,r,i,s,o,a,u,c,d,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ws.NO_ERROR,u=s.getStatus();if(!a||wk(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ws.ABORT;r(!1,new hc(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new hc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Nj(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Pv();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?yk():gk();o(u)}else{const u=mk();o(u)}};this.canceled_?n(!1,new hc(!1,null,!0)):this.backoffId_=bj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Mj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Vj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Uj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Fj(t,e,n,r,i,s,o=!0){const a=_k(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return Vj(c,e),Mj(c,n),jj(c,s),Uj(c,r),new Lj(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Bj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zj(...t){const e=Bj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(bv())return new Blob(t);throw new st(Ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $j(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Hj(t){if(typeof atob>"u")throw Rj("base-64");return atob(t)}/**
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
 */const ur={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uf{constructor(e,n){this.data=e,this.contentType=n||null}}function Wj(t,e){switch(t){case ur.RAW:return new Uf(Ek(e));case ur.BASE64:case ur.BASE64URL:return new Uf(Tk(t,e));case ur.DATA_URL:return new Uf(Kj(e),Gj(e))}throw Pv()}function Ek(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qj(t){let e;try{e=decodeURIComponent(t)}catch{throw pl(ur.DATA_URL,"Malformed data URL.")}return Ek(e)}function Tk(t,e){switch(t){case ur.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw pl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ur.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw pl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Hj(e)}catch(i){throw i.message.includes("polyfill")?i:pl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Ik{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pl(ur.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Qj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Kj(t){const e=new Ik(t);return e.base64?Tk(ur.BASE64,e.rest):qj(e.rest)}function Gj(t){return new Ik(t).contentType}function Qj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class wi{constructor(e,n){let r=0,i="";k1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(k1(this.data_)){const r=this.data_,i=$j(r,e,n);return i===null?null:new wi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wi(r,!0)}}static getBlob(...e){if(bv()){const n=e.map(r=>r instanceof wi?r.data_:r);return new wi(zj.apply(null,n))}else{const n=e.map(o=>Nh(o)?Wj(ur.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new wi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Sk(t){let e;try{e=JSON.parse(t)}catch{return null}return Oj(e)?e:null}/**
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
 */function Yj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Xj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function kk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Jj(t,e){return e}class Xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Jj}}let fc=null;function Zj(t){return!Nh(t)||t.length<2?t:kk(t)}function Ck(){if(fc)return fc;const t=[];t.push(new Xt("bucket")),t.push(new Xt("generation")),t.push(new Xt("metageneration")),t.push(new Xt("name","fullPath",!0));function e(s,o){return Zj(o)}const n=new Xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Xt("size");return i.xform=r,t.push(i),t.push(new Xt("timeCreated")),t.push(new Xt("updated")),t.push(new Xt("md5Hash",null,!0)),t.push(new Xt("cacheControl",null,!0)),t.push(new Xt("contentDisposition",null,!0)),t.push(new Xt("contentEncoding",null,!0)),t.push(new Xt("contentLanguage",null,!0)),t.push(new Xt("contentType",null,!0)),t.push(new Xt("metadata","customMetadata",!0)),fc=t,fc}function eV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new In(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function tV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return eV(r,t),r}function Rk(t,e,n){const r=Sk(e);return r===null?null:tV(t,r,n)}function nV(t,e,n,r){const i=Sk(e);if(i===null||!Nh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,p="/b/"+o(d)+"/o/"+o(f),E=_u(p,n,r),k=_k({alt:"media",token:c});return E+k})[0]}function Ak(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class aa{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ur(t){if(!t)throw Pv()}function xv(t,e){function n(r,i){const s=Rk(t,i,e);return Ur(s!==null),s}return n}function rV(t,e){function n(r,i){const s=Rk(t,i,e);return Ur(s!==null),nV(s,i,t.host,t._protocol)}return n}function wu(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=wj():i=_j():n.getStatus()===402?i=yj(t.bucket):n.getStatus()===403?i=Ej(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Pk(t){const e=wu(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=vj(t.path)),s.serverResponse=i.serverResponse,s}return n}function iV(t,e,n){const r=e.fullServerUrl(),i=_u(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new aa(i,s,xv(t,n),o);return a.errorHandler=Pk(e),a}function sV(t,e,n){const r=e.fullServerUrl(),i=_u(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new aa(i,s,rV(t,n),o);return a.errorHandler=Pk(e),a}function oV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oV(null,e)),r}function aV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let D=0;D<2;D++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=bk(e,r,i),d=Ak(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",E=wi.getBlob(f,r,p);if(E===null)throw vk();const k={name:c.fullPath},C=_u(s,t.host,t._protocol),P="POST",S=t.maxUploadRetryTime,y=new aa(C,P,xv(t,n),S);return y.urlParams=k,y.headers=o,y.body=E.uploadData(),y.errorHandler=wu(e),y}class Md{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Nv(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ur(!1)}return Ur(!!n&&(e||["active"]).indexOf(n)!==-1),n}function lV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=bk(e,r,i),a={name:o.fullPath},u=_u(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Ak(o,n),p=t.maxUploadRetryTime;function E(C){Nv(C);let P;try{P=C.getResponseHeader("X-Goog-Upload-URL")}catch{Ur(!1)}return Ur(Nh(P)),P}const k=new aa(u,c,E,p);return k.urlParams=a,k.headers=d,k.body=f,k.errorHandler=wu(e),k}function uV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Nv(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ur(!1)}f||Ur(!1);const p=Number(f);return Ur(!isNaN(p)),new Md(p,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,u=new aa(n,o,s,a);return u.headers=i,u.errorHandler=wu(e),u}const R1=256*1024;function cV(t,e,n,r,i,s,o,a){const u=new Md(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw kj();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,p=f+d;let E="";d===0?E="finalize":c===d?E="upload, finalize":E="upload";const k={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},C=r.slice(f,p);if(C===null)throw vk();function P(D,F){const x=Nv(D,["active","final"]),T=u.current+d,v=r.size();let _;return x==="final"?_=xv(e,s)(D,F):_=null,new Md(T,v,x==="final",_)}const S="POST",y=e.maxUploadRetryTime,I=new aa(n,S,P,y);return I.headers=k,I.body=C.uploadData(),I.progressCallback=a||null,I.errorHandler=wu(t),I}const ln={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ff(t){switch(t){case"running":case"pausing":case"canceling":return ln.RUNNING;case"paused":return ln.PAUSED;case"success":return ln.SUCCESS;case"canceled":return ln.CANCELED;case"error":return ln.ERROR;default:return ln.ERROR}}/**
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
 */class dV{constructor(e,n,r){if(Dj(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function no(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class hV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Va("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Va("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Va("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Va("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Va("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fV extends hV{initXhr(){this.xhr_.responseType="text"}}function oo(){return new fV}/**
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
 */class pV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ck(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ye.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(wk(i.status,[]))if(s)i=mk();else{this.sleepTime=Math.max(this.sleepTime*2,gj),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ye.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=lV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=uV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,oo,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=R1*this._chunkMultiplier,n=new Md(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=cV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,oo,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){R1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=iV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=aV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=gk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ff(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new dV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ff(this._state)){case ln.SUCCESS:no(this._resolve.bind(null,this.snapshot))();break;case ln.CANCELED:case ln.ERROR:const n=this._reject;no(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ff(this._state)){case ln.RUNNING:case ln.PAUSED:e.next&&no(e.next.bind(e,this.snapshot))();break;case ln.SUCCESS:e.complete&&no(e.complete.bind(e))();break;case ln.CANCELED:case ln.ERROR:e.error&&no(e.error.bind(e,this._error))();break;default:e.error&&no(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class js{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kk(this._location.path)}get storage(){return this._service}get parent(){const e=Yj(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Aj(e)}}function mV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new pV(t,new wi(e),n)}function gV(t){t._throwIfRoot("getDownloadURL");const e=sV(t.storage,t._location,Ck());return t.storage.makeRequestWithTokens(e,oo).then(n=>{if(n===null)throw Cj();return n})}function vV(t,e){const n=Xj(t._location.path,e),r=new In(t._location.bucket,n);return new js(t.storage,r)}/**
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
 */function yV(t){return/^[A-Za-z]+:\/\//.test(t)}function _V(t,e){return new js(t,e)}function xk(t,e){if(t instanceof Dv){const n=t;if(n._bucket==null)throw Sj();const r=new js(n,n._bucket);return e!=null?xk(r,e):r}else return e!==void 0?vV(t,e):t}function wV(t,e){if(e&&yV(e)){if(t instanceof Dv)return _V(t,e);throw _m("To use ref(service, url), the first argument must be a Storage instance.")}else return xk(t,e)}function A1(t,e){const n=e==null?void 0:e[pk];return n==null?null:In.makeFromBucketSpec(n,t)}function EV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eI(i,t.app.options.projectId))}class Dv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pj,this._maxUploadRetryTime=mj,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=A1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=A1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Pj(yk());{const o=Fj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const P1="@firebase/storage",b1="0.12.6";/**
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
 */const Nk="storage";function TV(t,e,n){return t=gt(t),mV(t,e,n)}function IV(t){return t=gt(t),gV(t)}function SV(t,e){return t=gt(t),wV(t,e)}function kV(t=zg(),e){t=gt(t);const r=ch(t,Nk).getImmediate({identifier:e}),i=XT("storage");return i&&CV(r,...i),r}function CV(t,e,n,r={}){EV(t,e,n,r)}function RV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Dv(n,r,i,e,Fs)}function AV(){xs(new zi(Nk,RV,"PUBLIC").setMultipleInstances(!0)),hr(P1,b1,""),hr(P1,b1,"esm2017")}AV();const PV={apiKey:"AIzaSyCb-sYNPLf2JdEzw30FV3EwzNz8G0V__RM",authDomain:"credit-59447.firebaseapp.com",projectId:"credit-59447",storageBucket:"credit-59447.appspot.com",messagingSenderId:"660498667179",appId:"1:660498667179:web:d16d7e397eff65e7ea89ee",measurementId:"G-2CL5EL1HNR"},Ov=rI(PV),ti=dL(Ov),wr=ZM(Ov),bV=kV(Ov);function Dk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Dk(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Si(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Dk(t))&&(r&&(r+=" "),r+=e);return r}const Ql=t=>typeof t=="number"&&!isNaN(t),Es=t=>typeof t=="string",Sn=t=>typeof t=="function",Bc=t=>Es(t)||Sn(t)?t:null,wm=t=>V.isValidElement(t)||Es(t)||Sn(t)||Ql(t);function xV(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Dh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:p,playToast:E}=o;const k=r?`${e}--${u}`:e,C=r?`${n}--${u}`:n,P=V.useRef(0);return V.useLayoutEffect(()=>{const S=f.current,y=k.split(" "),I=D=>{D.target===f.current&&(E(),S.removeEventListener("animationend",I),S.removeEventListener("animationcancel",I),P.current===0&&D.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",I),S.addEventListener("animationcancel",I)},[]),V.useEffect(()=>{const S=f.current,y=()=>{S.removeEventListener("animationend",y),i?xV(S,d,s):d()};p||(c?y():(P.current=1,S.className+=` ${C}`,S.addEventListener("animationend",y)))},[p]),De.createElement(De.Fragment,null,a)}}function x1(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const en=new Map;let Yl=[];const Em=new Set,NV=t=>Em.forEach(e=>e(t)),Ok=()=>en.size>0;function Lk(t,e){var n;if(e)return!((n=en.get(e))==null||!n.isToastActive(t));let r=!1;return en.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function Mk(t,e){wm(t)&&(Ok()||Yl.push({content:t,options:e}),en.forEach(n=>{n.buildToast(t,e)}))}function N1(t,e){en.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function DV(t){const{subscribe:e,getSnapshot:n,setProps:r}=V.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const u=function(d,f,p){let E=1,k=0,C=[],P=[],S=[],y=f;const I=new Map,D=new Set,F=()=>{S=Array.from(I.values()),D.forEach(v=>v())},x=v=>{P=v==null?[]:P.filter(_=>_!==v),F()},T=v=>{const{toastId:_,onOpen:R,updateId:b,children:O}=v.props,A=b==null;v.staleId&&I.delete(v.staleId),I.set(_,v),P=[...P,v.props.toastId].filter(ye=>ye!==v.staleId),F(),p(x1(v,A?"added":"updated")),A&&Sn(R)&&R(V.isValidElement(O)&&O.props)};return{id:d,props:y,observe:v=>(D.add(v),()=>D.delete(v)),toggle:(v,_)=>{I.forEach(R=>{_!=null&&_!==R.props.toastId||Sn(R.toggle)&&R.toggle(v)})},removeToast:x,toasts:I,clearQueue:()=>{k-=C.length,C=[]},buildToast:(v,_)=>{if((ce=>{let{containerId:ve,toastId:xe,updateId:je}=ce;const ze=ve?ve!==d:d!==1,At=I.has(xe)&&je==null;return ze||At})(_))return;const{toastId:R,updateId:b,data:O,staleId:A,delay:ye}=_,ut=()=>{x(R)},Yt=b==null;Yt&&k++;const ge={...y,style:y.toastStyle,key:E++,...Object.fromEntries(Object.entries(_).filter(ce=>{let[ve,xe]=ce;return xe!=null})),toastId:R,updateId:b,data:O,closeToast:ut,isIn:!1,className:Bc(_.className||y.toastClassName),bodyClassName:Bc(_.bodyClassName||y.bodyClassName),progressClassName:Bc(_.progressClassName||y.progressClassName),autoClose:!_.isLoading&&(W=_.autoClose,ee=y.autoClose,W===!1||Ql(W)&&W>0?W:ee),deleteToast(){const ce=I.get(R),{onClose:ve,children:xe}=ce.props;Sn(ve)&&ve(V.isValidElement(xe)&&xe.props),p(x1(ce,"removed")),I.delete(R),k--,k<0&&(k=0),C.length>0?T(C.shift()):F()}};var W,ee;ge.closeButton=y.closeButton,_.closeButton===!1||wm(_.closeButton)?ge.closeButton=_.closeButton:_.closeButton===!0&&(ge.closeButton=!wm(y.closeButton)||y.closeButton);let ie=v;V.isValidElement(v)&&!Es(v.type)?ie=V.cloneElement(v,{closeToast:ut,toastProps:ge,data:O}):Sn(v)&&(ie=v({closeToast:ut,toastProps:ge,data:O}));const me={content:ie,props:ge,staleId:A};y.limit&&y.limit>0&&k>y.limit&&Yt?C.push(me):Ql(ye)?setTimeout(()=>{T(me)},ye):T(me)},setProps(v){y=v},setToggle:(v,_)=>{I.get(v).toggle=_},isToastActive:v=>P.some(_=>_===v),getSnapshot:()=>y.newestOnTop?S.reverse():S}}(o,s,NV);en.set(o,u);const c=u.observe(a);return Yl.forEach(d=>Mk(d.content,d.options)),Yl=[],()=>{c(),en.delete(o)}},setProps(a){var u;(u=en.get(o))==null||u.setProps(a)},getSnapshot(){var a;return(a=en.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=V.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:u}=a.props;o.has(u)||o.set(u,[]),o.get(u).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:Lk,count:i==null?void 0:i.length}}function OV(t){const[e,n]=V.useState(!1),[r,i]=V.useState(!1),s=V.useRef(null),o=V.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;var p,E;function k(){n(!0)}function C(){n(!1)}function P(I){const D=s.current;o.canDrag&&D&&(o.didMove=!0,e&&C(),o.delta=t.draggableDirection==="x"?I.clientX-o.start:I.clientY-o.start,o.start!==I.clientX&&(o.canCloseOnClick=!1),D.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,D.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function S(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",S);const I=s.current;if(o.canDrag&&o.didMove&&I){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}(E=en.get((p={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||E.setToggle(p.id,p.fn),V.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||C(),window.addEventListener("focus",k),window.addEventListener("blur",C),()=>{window.removeEventListener("focus",k),window.removeEventListener("blur",C)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(I){if(t.draggable===!0||t.draggable===I.pointerType){o.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",S);const D=s.current;o.canCloseOnClick=!0,o.canDrag=!0,D.style.transition="none",t.draggableDirection==="x"?(o.start=I.clientX,o.removalDistance=D.offsetWidth*(t.draggablePercent/100)):(o.start=I.clientY,o.removalDistance=D.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(I){const{top:D,bottom:F,left:x,right:T}=s.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&t.pauseOnHover&&I.clientX>=x&&I.clientX<=T&&I.clientY>=D&&I.clientY<=F?C():k()}};return a&&u&&(y.onMouseEnter=C,t.stacked||(y.onMouseLeave=k)),f&&(y.onClick=I=>{d&&d(I),o.canCloseOnClick&&c()}),{playToast:k,pauseToast:C,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function LV(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:p}=t;const E=s||u&&c===0,k={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(k.transform=`scaleX(${c})`);const C=Si("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),P=Sn(o)?o({rtl:d,type:i,defaultClassName:C}):Si(C,o),S={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}};return De.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},De.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`}),De.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:P,style:k,...S}))}let MV=1;const jk=()=>""+MV++;function jV(t){return t&&(Es(t.toastId)||Ql(t.toastId))?t.toastId:jk()}function ml(t,e){return Mk(t,e),e.toastId}function jd(t,e){return{...e,type:e&&e.type||t,toastId:jV(e)}}function pc(t){return(e,n)=>ml(e,jd(t,n))}function se(t,e){return ml(t,jd("default",e))}se.loading=(t,e)=>ml(t,jd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),se.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Es(i)?se.loading(i,n):se.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,p)=>{if(f==null)return void se.dismiss(r);const E={type:d,...a,...n,data:p},k=Es(f)?{render:f}:f;return r?se.update(r,{...E,...k}):se(k.render,{...E,...k}),p},c=Sn(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},se.success=pc("success"),se.info=pc("info"),se.error=pc("error"),se.warning=pc("warning"),se.warn=se.warning,se.dark=(t,e)=>ml(t,jd("default",{theme:"dark",...e})),se.dismiss=function(t){(function(e){var n;if(Ok()){if(e==null||Es(n=e)||Ql(n))en.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=en.get(e.containerId);r?r.removeToast(e.id):en.forEach(i=>{i.removeToast(e.id)})}}else Yl=Yl.filter(r=>e!=null&&r.options.toastId!==e)})(t)},se.clearWaitingQueue=function(t){t===void 0&&(t={}),en.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},se.isActive=Lk,se.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=en.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:jk()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ml(o,s)}},se.done=t=>{se.update(t,{progress:1})},se.onChange=function(t){return Em.add(t),()=>{Em.delete(t)}},se.play=t=>N1(!0,t),se.pause=t=>N1(!1,t);const VV=typeof window<"u"?V.useLayoutEffect:V.useEffect,mc=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return De.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Bf={info:function(t){return De.createElement(mc,{...t},De.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return De.createElement(mc,{...t},De.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return De.createElement(mc,{...t},De.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return De.createElement(mc,{...t},De.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return De.createElement("div",{className:"Toastify__spinner"})}},UV=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=OV(t),{closeButton:o,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:f,closeToast:p,transition:E,position:k,className:C,style:P,bodyClassName:S,bodyStyle:y,progressClassName:I,progressStyle:D,updateId:F,role:x,progress:T,rtl:v,toastId:_,deleteToast:R,isIn:b,isLoading:O,closeOnClick:A,theme:ye}=t,ut=Si("Toastify__toast",`Toastify__toast-theme--${ye}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":A}),Yt=Sn(C)?C({rtl:v,position:k,type:d,defaultClassName:ut}):Si(ut,C),ge=function(me){let{theme:ce,type:ve,isLoading:xe,icon:je}=me,ze=null;const At={theme:ce,type:ve};return je===!1||(Sn(je)?ze=je({...At,isLoading:xe}):V.isValidElement(je)?ze=V.cloneElement(je,At):xe?ze=Bf.spinner():(Ji=>Ji in Bf)(ve)&&(ze=Bf[ve](At))),ze}(t),W=!!T||!u,ee={closeToast:p,type:d,theme:ye};let ie=null;return o===!1||(ie=Sn(o)?o(ee):V.isValidElement(o)?V.cloneElement(o,ee):function(me){let{closeToast:ce,theme:ve,ariaLabel:xe="close"}=me;return De.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ve}`,type:"button",onClick:je=>{je.stopPropagation(),ce(je)},"aria-label":xe},De.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},De.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ee)),De.createElement(E,{isIn:b,done:R,position:k,preventExitTransition:n,nodeRef:r,playToast:s},De.createElement("div",{id:_,onClick:c,"data-in":b,className:Yt,...i,style:P,ref:r},De.createElement("div",{...b&&{role:x},className:Sn(S)?S({type:d}):Si("Toastify__toast-body",S),style:y},ge!=null&&De.createElement("div",{className:Si("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},ge),De.createElement("div",null,a)),ie,De.createElement(LV,{...F&&!W?{key:`pb-${F}`}:{},rtl:v,theme:ye,delay:u,isRunning:e,isIn:b,closeToast:p,hide:f,type:d,style:D,className:I,controlledProgress:W,progress:T||0})))},Oh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},FV=Dh(Oh("bounce",!0));Dh(Oh("slide",!0));Dh(Oh("zoom"));Dh(Oh("flip"));const BV={position:"top-right",transition:FV,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Jn(t){let e={...BV,...t};const n=t.stacked,[r,i]=V.useState(!0),s=V.useRef(null),{getToastToRender:o,isToastActive:a,count:u}=DV(e),{className:c,style:d,rtl:f,containerId:p}=e;function E(C){const P=Si("Toastify__toast-container",`Toastify__toast-container--${C}`,{"Toastify__toast-container--rtl":f});return Sn(c)?c({position:C,rtl:f,defaultClassName:P}):Si(P,Bc(c))}function k(){n&&(i(!0),se.play())}return VV(()=>{if(n){var C;const P=s.current.querySelectorAll('[data-in="true"]'),S=12,y=(C=e.position)==null?void 0:C.includes("top");let I=0,D=0;Array.from(P).reverse().forEach((F,x)=>{const T=F;T.classList.add("Toastify__toast--stacked"),x>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=y?"top":"bot");const v=I*(r?.2:1)+(r?0:S*x);T.style.setProperty("--y",`${y?v:-1*v}px`),T.style.setProperty("--g",`${S}`),T.style.setProperty("--s",""+(1-(r?D:0))),I+=T.offsetHeight,D+=.025})}},[r,u,n]),De.createElement("div",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),se.pause())},onMouseLeave:k},o((C,P)=>{const S=P.length?{...d}:{...d,pointerEvents:"none"};return De.createElement("div",{className:E(C),style:S,key:`container-${C}`},P.map(y=>{let{content:I,props:D}=y;return De.createElement(UV,{...D,stacked:n,collapseAll:k,isIn:a(D.toastId,D.containerId),style:D.style,key:`toast-${D.key}`},I)}))}))}const zV="/assets/sign-4czaFtvg.gif",$V=()=>{const t=sn(),[e,n]=V.useState(),[r,i]=V.useState(),[s,o]=V.useState(),a=async(c,d,f)=>{try{await QD(c,d,f),se("🦄 Successful login",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/update")}catch{o(`error creating account${s}`),se(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),se("🦄 Creating Account",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(ti,e,r)};return g.jsxs("div",{children:[g.jsx(an,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:zV,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Create Account"}),g.jsx("p",{className:"authParagraph",children:"Welcome sign up to continue"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",onChange:c=>{n(c.target.value)},placeholder:"email",type:"email",required:!0}),g.jsx("input",{className:"authInput",placeholder:"password",onChange:c=>{i(c.target.value)},type:"password",required:!0}),g.jsx("p",{onClick:()=>{t("/forgot")},className:"authParagraph",children:"forgot password?"}),g.jsx("button",{className:"authButton",onClick:u,children:"Sign Up"}),g.jsx("p",{className:"authParagraph last",onClick:()=>{t("/login")},children:"Already signedup? Login"})]})]}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},HV="/assets/log-C5Xo4Pxw.png",WV=()=>{const t=sn(),[e,n]=V.useState(),[r,i]=V.useState(),[s,o]=V.useState(),a=async(c,d,f)=>{try{await YD(c,d,f),se("🦄 Successful login",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(p){o(`error loggin${p.message}`),se(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),se("🦄 Logging in..",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(ti,e,r)};return g.jsxs("div",{children:[g.jsx(an,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:HV,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Sign In"}),g.jsx("p",{className:"authParagraph",children:"Welcome back, Login to continue"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",onChange:c=>{n(c.target.value)},placeholder:"email",type:"email",required:!0}),g.jsx("input",{className:"authInput",placeholder:"password",onChange:c=>{i(c.target.value)},type:"password",required:!0}),g.jsx("p",{className:"authParagraph",onClick:()=>{t("/forgot")},children:"forgot password?"}),g.jsx("button",{className:"authButton",onClick:u,children:"Sign In"}),g.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not signedup? Signup"})]})]}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},qV="/assets/forgot-aqvkMv1L.gif",KV=()=>{const t=sn(),[e,n]=V.useState(),[r,i]=V.useState(),s=async(a,u)=>{try{await GD(a,u),se(`🦄 recovery email has been sent to ${u}`,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/login")}catch(c){i(`error sending mail${c.message}`),se(`🦄 ${r}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},o=async a=>{a.preventDefault(),se("🦄 sending recovery email.",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await s(ti,e)};return g.jsxs("div",{children:[g.jsx(an,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:qV,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Forgot Password"}),g.jsx("p",{className:"authParagraph",children:"Lets get you back on board"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",placeholder:"email",onChange:a=>{n(a.target.value)},type:"email",required:!0}),g.jsx("button",{className:"authButton",onClick:o,children:"Recover Password"}),g.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not signedup?, Signup"})]})]}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},GV="/assets/update-B2xoCSrc.gif",QV=()=>{const t=sn(),[e,n]=V.useState(),[r,i]=V.useState(),[s,o]=V.useState(),[a,u]=V.useState(),[c,d]=V.useState(),f=async p=>{console.log("clicked"),p.preventDefault();const E=ti.currentUser;if(E!==null){const k=E.uid;u(k);const C=Rh(wr,"Users");try{await hj(Xi(C,k),{userName:e,country:r,email:E.email,phone:s,userId:a,creditBalance:0,subbed:!1,userMessages:"Nothing here yet",userSubscriptions:[]}),se("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(P){d(`error saving details${P.message}`),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}else d("youre not logged in"),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")};return g.jsxs("div",{children:[g.jsx(an,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:GV,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Update Info"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",placeholder:"Username",onChange:p=>{n(p.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"Country",onChange:p=>{i(p.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"Phone",onChange:p=>{o(p.target.value)},type:"number",required:!0}),g.jsx("button",{type:"button",className:"authButton",onClick:p=>{f(p)},children:"Save details"})]})]}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},YV="/assets/crypto-BEkzKeZV.gif",XV=()=>{const t=sn(),[e,n]=V.useState(null),r=V.useCallback(async i=>{try{const s=Xi(wr,"Users",i),o=await xh(s);o.exists()?n(o.data()):se.error("User data not found")}catch{se.error("Error fetching user data")}},[]);return V.useEffect(()=>{const i=ti.currentUser;if(i){const s=i.uid;r(s)}},[e]),g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsxs("div",{className:"profile",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:YV,width:"130px",height:"130px",alt:"Sign Gif"})}),g.jsxs("div",{className:"profileTitleDiv",children:[g.jsx("h1",{className:"profileTitle",children:"Account Dashboard"}),g.jsx("p",{className:"profileParagraph",children:"Manage your account"})]}),g.jsxs("div",{className:"cardsSection",children:[g.jsx("div",{className:"card",children:g.jsx("div",{className:"card1",children:g.jsxs("div",{className:"profileDetails",children:[g.jsxs("div",{className:"profileNameDiv",children:[g.jsx("h4",{className:"userName",children:(e==null?void 0:e.userName)||"Loading..."}),g.jsx(be,{icon:qe,color:"white",size:"35px"})]}),g.jsx("p",{className:"userEmail",children:(e==null?void 0:e.email)||"Loading..."}),g.jsx("p",{className:"userCountry",children:(e==null?void 0:e.country)||"Loading..."}),g.jsx("p",{className:"userTel",children:(e==null?void 0:e.phone)||"Loading..."})]})})}),g.jsxs("div",{className:"card card2",onClick:()=>{t("/progress")},children:[g.jsx("p",{className:"balTitle",children:"Repairs"}),g.jsx("div",{className:"trackerDiv",children:g.jsx("div",{className:"blockDiv",children:g.jsx("p",{className:"blockCounter",children:"Track progress"})})})]}),g.jsxs("div",{className:"card card2",onClick:()=>{t("/progress")},children:[g.jsx("p",{className:"balTitle",children:"Fundings"}),g.jsx("div",{className:"trackerDiv",children:g.jsx("div",{className:"blockDiv",children:g.jsx("p",{className:"blockCounter",children:"Track funding"})})})]}),g.jsx(Ug,{}),g.jsx(Vg,{}),g.jsx("div",{className:"card card3",onClick:()=>t("/works"),children:g.jsxs("div",{className:"card3Content",children:[g.jsx("h3",{className:"card3Text",children:"How it works"}),g.jsx(be,{icon:c2,color:"lightblue"})]})})]})]}),g.jsx(Jn,{position:"top-center",autoClose:3e3,hideProgressBar:!1}),g.jsx(on,{})]})},Vk="/assets/btc-B9PuLlK6.png",Uk="/assets/usdtlogo-DMWlymel.png",JV=()=>{const t=sn(),e=ea();return g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsxs("div",{className:"cryptoDiv",children:[g.jsxs("div",{className:"cryptoTitleDiv",children:[g.jsx("h1",{className:"cryptoTitle",children:"Crypto payments"}),g.jsx("p",{className:"cryptoParagraph",children:"select a payment crypto"})]}),g.jsx("div",{className:"cryptoTable",children:g.jsxs("div",{className:"rows",children:[g.jsxs("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"usdt",price:e.state.price,package:e.state.package}})},children:[g.jsx("img",{src:Uk,className:"cryptoLogo"}),g.jsx("p",{children:"Usdt"})]}),g.jsxs("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"btc",price:e.state.price,package:e.state.package}})},children:[g.jsx("img",{src:Vk,className:"cryptoLogo"}),g.jsx("p",{children:"Btc"})]})]})})]}),g.jsx(on,{})]})},ZV=()=>g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsx(Vg,{}),g.jsx(Ug,{}),g.jsx(on,{})]});var Lh={},e3=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(i){t.addRange(i)}),e&&e.focus()}},t3=e3,D1={"text/plain":"Text","text/html":"Url",default:"Text"},n3="Copy to clipboard: #{key}, Enter";function r3(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function i3(t,e){var n,r,i,s,o,a,u=!1;e||(e={}),n=e.debug||!1;try{i=t3(),s=document.createRange(),o=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(d){if(d.stopPropagation(),e.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=D1[e.format]||D1.default;window.clipboardData.setData(f,t)}else d.clipboardData.clearData(),d.clipboardData.setData(e.format,t);e.onCopy&&(d.preventDefault(),e.onCopy(d.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),o.addRange(s);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=r3("message"in e?e.message:n3),window.prompt(r,t)}}finally{o&&(typeof o.removeRange=="function"?o.removeRange(s):o.removeAllRanges()),a&&document.body.removeChild(a),i()}return u}var s3=i3;function Tm(t){"@babel/helpers - typeof";return Tm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tm(t)}Object.defineProperty(Lh,"__esModule",{value:!0});Lh.CopyToClipboard=void 0;var gc=Fk(V),o3=Fk(s3),a3=["text","onCopy","options","children"];function Fk(t){return t&&t.__esModule?t:{default:t}}function O1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O1(Object(n),!0).forEach(function(r){Lv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function l3(t,e){if(t==null)return{};var n=u3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function u3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function c3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d3(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h3(t,e,n){return e&&d3(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function f3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Im(t,e)}function Im(t,e){return Im=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Im(t,e)}function p3(t){var e=g3();return function(){var r=Vd(t),i;if(e){var s=Vd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return m3(this,i)}}function m3(t,e){if(e&&(Tm(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bk(t)}function Bk(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vd(t){return Vd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Vd(t)}function Lv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var zk=function(t){f3(n,t);var e=p3(n);function n(){var r;c3(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Lv(Bk(r),"onClick",function(a){var u=r.props,c=u.text,d=u.onCopy,f=u.children,p=u.options,E=gc.default.Children.only(f),k=(0,o3.default)(c,p);d&&d(c,k),E&&E.props&&typeof E.props.onClick=="function"&&E.props.onClick(a)}),r}return h3(n,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var s=i.children,o=l3(i,a3),a=gc.default.Children.only(s);return gc.default.cloneElement(a,L1(L1({},o),{},{onClick:this.onClick}))}}]),n}(gc.default.PureComponent);Lh.CopyToClipboard=zk;Lv(zk,"defaultProps",{onCopy:void 0,options:void 0});var v3=Lh,Sm=v3.CopyToClipboard;Sm.CopyToClipboard=Sm;var y3=Sm;const _3=()=>{const t=ea(),e=sn(),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,a]=V.useState(""),u=V.useCallback(async()=>{const d=ti.currentUser;if(console.log(o),!d){a("You are not logged in"),se.error("🦄 You are not logged in",{theme:"dark"});return}const f=d.uid;s(f),console.log(i);const p=Date.now();try{const E=await hk(Rh(wr,"Packages"),{userId:f,price:t.state.price,package:t.state.package,approved:!1,date:p,receiptUrl:"",subscriptionId:""});await dk(Xi(wr,"Packages",E.id),{subscriptionId:E.id}),se.success("🦄  Payment is processing",{theme:"light"}),setTimeout(()=>{e("/proof",{state:{plan:t.state.plan,amount:t.state.amount,docId:E.id,type:t.state.cryptoType}})},3e3)}catch(E){a(`Error saving details: ${E.message}`),se.error(`🦄 ${E.message}`,{theme:"dark"})}},[t.state,e]),c=V.useCallback(d=>{r({btc:"3GNtWqSsGe2GUZLCHHx9w3hj2f8hwcbjhA",ltc:"ltc1qscyyf9uz5awsfa3z3v3gdahsfs9wxas4r5hpxv",bnb:"0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793",trx:"TDZSuxiYMnrAeEyXxaJF8r2Ey3zV4XPbzs",usdt:"EQCA1BI4QRZ8qYmskSRDzJmkucGodYRTZCf_b9hckjla6dZl",eth:"0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793"}[d]||"Unknown crypto type")},[]);return V.useEffect(()=>{var d;(d=t.state)!=null&&d.cryptoType&&c(t.state.cryptoType)},[t.state,c]),g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsx("div",{children:g.jsxs("div",{className:"depositDiv",children:[g.jsx("h1",{className:"depositTitle",children:"Deposits"}),g.jsxs("div",{className:"depositCard",children:[g.jsxs("h3",{className:"planName",children:["*",t.state.package," Plan*"]}),g.jsxs("p",{className:"planPrice",children:["$",t.state.price]})]}),g.jsxs("div",{className:"depositAddressCard",children:[g.jsxs("h3",{className:"depositHead",children:["Make a transfer of $",t.state.price]}),g.jsx("div",{className:"depositCryptoCard",children:g.jsx("p",{className:"depositHead",children:t.state.cryptoType})}),g.jsxs("div",{className:"depositAddress",children:[g.jsx("p",{className:"planAddress",children:"Payment Address:"}),g.jsx("p",{className:"address",children:n})]})]}),g.jsx(y3.CopyToClipboard,{text:n,onCopy:()=>se.success("🦄 Address has been copied",{theme:"light"}),children:g.jsx("button",{className:"copy",children:"Copy Address"})}),g.jsx("button",{className:"continue",onClick:()=>{se.info("🦄 Deposit is being confirmed",{theme:"light"}),u()},children:"Continue"})]})}),g.jsx(Jn,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"light"}),g.jsx(on,{})]})},w3=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(0),[i,s]=V.useState(""),[o,a]=V.useState(""),u=ea(),c=sn(),d=async E=>{console.log(i),console.log(`doc Id is: ${u.state.docId}`);const k=Xi(wr,"Packages",u.state.docId);try{await dk(k,{receiptUrl:E}),se("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c("/profile")}catch(C){a(`error saving details${C.message}`),se(`🦄 ${o}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},f=E=>{e(E.target.files[0])},p=()=>{t||alert("choose an image to submit");const E=SV(bV,`/receipts/${t.name}`),k=TV(E,t);k.on("state_changed",C=>{const P=Math.round(C.bytesTransferred/C.totalBytes*100);r(P)},C=>{se(`🦄 error uploading ${C.message}`,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},()=>{se("🦄 receipt uploaded",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),IV(k.snapshot.ref).then(C=>{s(C),d(C)})})};return g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsxs("div",{className:"central",children:[g.jsx("h1",{className:"payTitle",children:"Payment Information"}),g.jsx("p",{className:"payPara",children:"Submit payment information/receipts"}),g.jsxs("div",{className:"imgDiv",children:[g.jsx("p",{className:"payDesc",children:"Choose an image/screenshot"}),g.jsx("input",{type:"file",onChange:f,className:"file",accept:"image/*"}),g.jsxs("p",{className:"percent",children:[n,"%"]})]}),g.jsx("div",{className:"submitDiv",children:g.jsx("button",{className:"submitBtn",onClick:p,children:"Submit receipt"})})]}),g.jsx(on,{}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},E3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAALl0lEQVR4nO2baXQT1xXH55ym7Zf2dP/QFDSa0WbNaJdjLV5k4w0MeME2NtjYILDZTNmNV5EUSJwQsHEwhCRsp5DGacwOBtKEJiSQctI2CUvTNjTtCSEUQsNmg03I7XkjychitMxIDhF5v3PuJ0lz37yref93731DEBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAYzNPyCYX4goZi/kRQL0TSJlPm7SqX6IY6bQIZLmdxoB2PASHU+DohAJFJ2FZq8lTVFcPvQ0ohst6scTKwBipKs7qeEYlpxQARCyTTvocl7s32m6ED072+CmxtnQl1eKpxoKIY/Lir0BuQ9HBABkKT+x1KauSOXa+Ha3iZRwejrqoXetU7oaascsC9WTQKVQoOC8tUvlcqf46CEiVSqzkP/5KKsVMGBuNzVAAsKMuA3xemDguG14hT3skWSmgIckDCRSNnVaNKerikW9lTsqIWK9ERYkpsKF1dO4g3IU6WZHnFn2nBABOrH0fZZYQWid38TXNs8m5vw660VvIHwGtYRgQwbxvxUSrFfKRRauL63OWQw3mmbDilGM7w8c0zQQGAdEQlJqvPR01Gc7QgaiJv7m+Fp51iI1xhgd01eWMHw2vhkm3vZotlxYsf5rUFCMa1oslbNCawfJ9fPhmxLAlRnJsG5J8oEBQPZygkDOrLmft/vNx6pjH0fTdZbz9yrHzcPNEP7jHwwMHrYPDVHcCC89sbicd4yyvv3+35jVj/OPDcHRtssMDHVBmeXTxQdDGRXVleASqnF+Ui4+jE++27+0X/QBVvnF4FBrYf1laPgRqv4QGAdEQhJMW2++vHx1vlQnGqHfLsFzjxWGpVA3KsjbLvYJ/qBRypjP+D0o30WbF1QzGnFmvLskLmFKB2pdesIKWU+IL5VOBwPkaR6lIRiioPZMJKZgvRDSrMw0poAyUYTrK8cCV2zxw6Jdc4cAxTtrmtJKHZqqPGRtDrHbDZ/l4h1JFJmzpD1Naiv25j5RKwjpdhub6I3syg7oFUVZEJ+egpMK8gK8p0sSDbHg1ymASnNXCBp9lU+oyj2kwy7Lag/rxWkp3DX5fusuiALUsyPgMJdIUbL22EipnE4HqJotgfdzLnO2oiaTCfapoPDFA/Ts5Khe14+aFXafwRyazGYPjm2dlbk/sxmzt+ZR0sBLaUkxfQwDPM9IlYhyTgrCkaazSp6Ym7sbYQVFTlciWTPnNyBPEIh095CfRN/n6hfrlLqvryxT1wfJVBJJt0c704maTaRiFVImqlDN1FXOVbU5JxcN+tuiaRlcIkkz55wZTjFjr3XpzqnJCPlSzH+Tm2YzW0oKtLs8O8Vg5PP+rw0r5Y0ErEKSTMH0U3sWjFV2L/0gIsrkRjZwCWSVROz7qiU2mf8feoZfUfrr8cL9Be6JIN2ZrGtIyL148xzNQMlkn8FKZEcXVII2jjdP/3dWgymc8c6Zoft7+zmeTAu2QYTHMFLMqiI6dURuVz+fSLWIEmNDQVjhD08/ejvdpdIzBoD9y8NVSK5uroC5DJtn0Si/YmvfsQpdV/27A/dR7l9yAUvzC3knopNztD+kGXEu3VkOM0kEbEGSTH1aPD1YejHx1vmQ5HDBgUCSyR5dssVdH7L61NCa0aXZDpC68e+RrixoRoW56bChwL8NeS7dUQiZZuIWIOkmUOcfjzuDPxUoMJhBCWS1UhHFLoOr08do+9omxtMP1zQ17kAetqniCq37KjJ9egI+yoRi/qB1tzPfl/HOznnXlwEkzOTYawtAU65SkRN0FtuHfnIVz+OB9CPcy8uhKOuCRHVvz59osxTbokxHfHqR7rdxjs5O5vLuJOET03IhGurxU/Q1dZKTkcefjjuZzRt/pEqgH680ljG7dg2RtDUimkdISm2AQ26YXLuoIn5rHMxTB2Vwt3Uuw3FEU9Oj0dH0DkuCcWO8dePC521UDXKwSV1J6Lkr7FghLfb2EzECiTNHEaD3v341EHna9EOallxOneCMBqT09NWCa1lmXfUCl0H0o81c0sG/B1eVgEJOgM0FaRF1d/OuzryByIWQCVqSsb2evXj8o56qC3KgGSDCd6sLYzaxPR47O0lRUhHziboTJ++s64GLnchf5mQZDBxvfNo+/PRkd6Y0BGJjLWjfxCqtr72+BSw6Izc9vJSgJOEkdpVTz6C9OPVFVPAqjMNqT9kmV4dodTJ92+iac1oCcW8RFLsy0FNyp5Eg2Xj9KBWaqE42cZVTPls8ohEmJQW3Koz+X/ra9o4Xb9Srrnj9mcN+D10rVD+0JhC+UMH8zzL1qlQ8yGlmB18NbeIUSp1F+5/g4iNTZMyF6IaDIlER6ELG7RGTqgjsuVTYGfteK5Yl2I090gotoWvZTpcypYoFJrb25srIvbZVJ4DrEoHVZlJQNNs3zCaLeVt1dLsE+k2651I/W1rKIPRdgtYdUb09HJBGSZj5FELCElpnOiiqIMmtKTtfzq9t8M5ONPmqdgihtOa+HRLwu1I/F3oXHLPtjfJYLxKUUwCwYNORKXYvxKwq2kil2Oh3STq26DWAbdNpthpRLTQMvoudNGNdWWiBtrf3Qw3t9SEzLR9oWntkia/PEaIHV5WybvtbchPvUVRmnqChwSBleJBwX9pMVSNdMCI+Hj4k0/O87xzlFdvthHRQq3Sf44uemrTfMED7e1aAj0dU/l3SK2VoFRobvlWbL3Yjaa/7G2ZJthfqG0v6gLq1Lq3CT+CZfqh7NCyyZCg5c953neN92rJeSIaDJezMq9+9B10hT3IG3sa4bHyHK5WJaRi66b4O3Eqbf9/u/jrYIHs9RYnWPXubW+gF3bOt5SBXK656X+khy/TD2Wfv1IHtYUZQXMeVNZHSxiaw1/RagURKejMErrY9HFZglqvWZZHuC2if+s1QKa91tfnMIp9JN0avn7cOtAEDeOzwK43weuLCkLmEUkG01WpVG3x9Rm6UjzYXls+OewcC82Dp9xSFTX92FRfFl7rdXoeGBk9/G76GCGZ9kf++tHsDE8/+nfWwfW1TlhXORIuPlUels/6gnt1BGX6gSrFvva/HXXckoiCf2RheJWAF5w50dMRr36c3jwv6EBPb6iBHGsClKXZg7ZeA+kIqtgSHhKN8X/d92Rw/ejZ2wQXn58lKtNGp1d0at0xofpx5Ekn2DxL4qWV4QUf2QfNUdIRr34YtUaumcQ3yL7uZthQMy6idzbyE90VWwLhcDykUgbXj3fbZ3C7mY6KbFH+/HUEZdKlWYFPqlzb0wjLJ43ihHv/3HzB/qKmI2jvjC4yozCbd6BnN82DwhQ7lKbY4KNl4ps/bWVZXMWWQC98UkxCutVyO1pLYiBLNpiuonNjyKeWMa7zrRT72jut1QMH9FAgxfqbke3JR6RMteiAaBndDnSRzfXlUW29+tsxn3xEJtPUu3j0Q+ySGMga8tP6ZDK2Afn0VooH+ex2wYdt08CiNcC+ucLeYeQz1Bzz9OO3R6wfZ7bczT/+89sFUJqaCLl2C5xeKq71GkxHbCbze/tbqu5OzEEXnG6r4oK/rXp0VPwh2zsH5SP641796D1wVz/6d9VB7zp37hStVyFOukoi0xFUe/HXD9R6Ra3QSFuvfFaQaLkioZgiX/344pVa6H22ivs83B1UuHbhyXJORyQUWzgh25N/HFwKt7bPjaofXx1BDTo0pxQVpxStH+gU+PnOxeAcmcL1Af7cGJ1WKJ+O0DLmRIbVcvtWtwueRRsFtQE+EfGWbbiWYjRfkSvYd9vnlUD/7oaB4A+VRaQjWsawE/14YUn2QOsVFcuGarDH64q4wc4ryf4KbRTGJVrg9KPRWRKD6QjyebxlCvSsmTykvpChA3keHXlRcEAUCu2l+95HoB5Y+1RwQCQUc+QbMHB4EE1CsW8IDggGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDDEA8D/AQgoV53xUO5SAAAAAElFTkSuQmCC",T3=()=>{const[t,e]=V.useState({}),n=sn(),r=async s=>{const o=Xi(wr,"Users",s),a=await xh(o);a.exists()?e(a.data()):console.log("No such document!")};V.useEffect(()=>{ZD(ti,s=>{if(s){const o=s.uid;r(o)}})},[]);const i=async s=>{s.preventDefault(),se("🦄 payment is being processed",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{n("/profile")},4e3)};return g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsx("div",{children:g.jsxs("div",{className:"depositDiv",children:[g.jsx("h1",{className:"depositTitle",children:"Withdrawals"}),g.jsxs("div",{className:"depositCard",children:[g.jsx("p",{className:"balanceTitle",children:"Credit balance"}),g.jsxs("div",{className:"balanceBlock",children:[g.jsxs("p",{className:"balanceAmount",children:[t!==null&&t.creditBalance,"Credits"]}),g.jsx("img",{src:E3,width:"30px",height:"30px"})]})]}),g.jsxs("div",{className:"depositAddressCard",children:[g.jsx("div",{className:"depositCryptoCard"}),g.jsx("div",{className:"depositAddress",children:g.jsxs("div",{className:"inputDiv",children:[g.jsx("input",{className:"inputBox",type:"text",placeholder:"enter crypto name"}),g.jsx("input",{className:"inputBox",type:"text",placeholder:"enter crypto address"})]})})]}),g.jsx("button",{className:"continue",onClick:i,children:"Continue"})]})}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},I3=()=>g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsxs("div",{className:"workDiv",children:[g.jsx("h1",{className:"title",children:"How it works"}),g.jsx(qT,{}),g.jsxs("div",{className:"tutorialDiv",children:[g.jsxs("div",{className:"item",children:[g.jsx(be,{icon:qe,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Create an account"})]}),g.jsxs("div",{className:"item",children:[g.jsx(be,{icon:qe,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Choose a service"})]}),g.jsxs("div",{className:"item",children:[g.jsx(be,{icon:qe,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Select payment method"})]}),g.jsxs("div",{className:"item",children:[g.jsx(be,{icon:qe,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Track your progress via dashboard"})]})]})]}),g.jsx(on,{})]}),S3=()=>{const[t,e]=V.useState([]),[n,r]=V.useState(0);V.useState(0);const[i,s]=V.useState({}),o=async d=>{const f=Xi(wr,"Users",d),p=await xh(f);p.exists()&&(console.log("Document data:",p.data()),s(p.data()),se.message("User data not found"))},a=async()=>{try{const f=(await dj(Rh(wr,"Packages"))).docs.map(p=>({...p.data(),id:p.id}));e(f)}catch(d){console.error("Error fetching subscriptions: ",d.message)}};V.useEffect(()=>{a()},[]);const u=({img:d,uid:f,date:p,amount:E,lastUpdate:k})=>g.jsxs("div",{className:"reqBox",children:[g.jsx("div",{className:"reqImage",children:g.jsx("img",{src:d,className:"img",alt:"Receipt"})}),g.jsxs("div",{className:"reqInfo",children:[g.jsx("p",{className:"infoId",children:f}),g.jsxs("p",{className:"info",children:["$",E]}),g.jsx("p",{className:"info",children:new Date(p).toLocaleDateString()}),g.jsxs("p",{className:"info",children:["Updated :",new Date(k).toLocaleDateString()]})]}),g.jsx("div",{className:"input",children:g.jsx("input",{className:"input",placeholder:"Amount to add",onChange:C=>{r(C.target.value)},type:"number",required:!0})}),g.jsx("div",{className:"buttonDiv",children:g.jsx("button",{className:"button",onClick:()=>{o(f)},children:"Boost gain"})})]}),c=()=>g.jsx("div",{children:t.map(d=>g.jsx(u,{img:d.receiptUrl,plan:d.plan,date:d.date,amount:d.amount,uid:d.userId},d.id))});return g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsx("div",{className:"central",children:g.jsxs("div",{className:"titleDiv",children:[g.jsx("h3",{className:"main",children:"Admin DashBoard"}),g.jsx("p",{className:"descTitle",children:"User Receipts"}),g.jsx("div",{className:"innerBox",children:g.jsx(c,{})}),g.jsx(Jn,{position:"top-center",autoClose:3e3,hideProgressBar:!1})]})})]})},$k="/assets/masterlogo-CKfSWtT3.png",k3="/assets/americanLogo-CaPYbvx4.jpg",Hk="/assets/visalogo-DjYsDOJr.png",C3=()=>{const t=sn(),e=ea();return g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsxs("div",{className:"cryptoDiv",children:[g.jsxs("div",{className:"cryptoTitleDiv",children:[g.jsx("h1",{className:"cryptoTitle",children:"Payments"}),g.jsx("p",{className:"cryptoParagraph",children:"select how to pay."})]}),g.jsxs("div",{className:"cryptoTable",children:[g.jsxs("div",{className:"payBox",children:[g.jsxs("div",{className:"cardIcons",children:[" ",g.jsx("img",{src:Hk,className:"cardIconItem"}),g.jsx("img",{src:$k,className:"cardIconItem"})]}),g.jsx("button",{className:"selection",onClick:n=>{n.preventDefault(),t("/card",{state:{price:e.state.price,package:e.state.package}})},children:"Pay via card"})]}),g.jsxs("div",{className:"payBox",children:[g.jsxs("div",{className:"cardIcons",children:[" ",g.jsx("img",{src:Vk,className:"cardIconItem"}),g.jsx("img",{src:Uk,className:"cardIconItem"})]}),g.jsx("button",{className:"selection",onClick:n=>{n.preventDefault(),t("/cryptoselect",{state:{price:e.state.price,package:e.state.package}})},children:"Pay via crypto"})]})]})]}),g.jsx(on,{})]})},R3=()=>{const t=sn(),[e,n]=V.useState(""),[r,i]=V.useState(""),[s,o]=V.useState(""),[a,u]=V.useState(),[c,d]=V.useState(),f=async p=>{console.log("clicked"),p.preventDefault();const E=ti.currentUser;if(E!==null){const k=E.uid;u(k);const C=Rh(wr,"Cards");try{await hk(C),se("🦄 Payment processed successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(P){d(`error processing details${P.message}`),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}else d("youre not logged in"),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")};return g.jsxs("div",{children:[g.jsx(an,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif"}),g.jsxs("div",{className:"authDetails",children:[g.jsxs("div",{className:"payment",children:[g.jsx("h2",{className:"authTitle",children:"Pay with card"}),g.jsxs("div",{className:"logos",children:[g.jsx("img",{src:k3,width:"37px",height:"27px"}),g.jsx("img",{src:Hk,width:"37px",height:"27px"}),g.jsx("img",{src:$k,width:"37px",height:"27px"})]})]}),g.jsx("input",{className:"authInput",placeholder:"Credit card no.",onChange:p=>{n(p.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"cvv",onChange:p=>{i(p.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"passcode",onChange:p=>{o(p.target.value)},type:"number",required:!0}),g.jsx("input",{className:"authInput",placeholder:"exp date",onChange:p=>{o(p.target.value)},type:"number",required:!0}),g.jsx("button",{type:"button",className:"authButton",onClick:p=>{f(p)},children:"Pay"})]})]}),g.jsx(Jn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(on,{})]})},A3=()=>{const[t,e]=V.useState("Nothing here yet"),[n,r]=V.useState(null),i=V.useCallback(async s=>{try{const o=Xi(wr,"Users",s),a=await xh(o);a.exists()?r(a.data()):se.error("User data not found")}catch{se.error("Error fetching user data")}},[]);return V.useEffect(()=>{const s=ti.currentUser;if(s){const o=s.uid;i(o),e(n.userMessages)}},[n]),g.jsxs(g.Fragment,{children:[g.jsx(an,{}),g.jsx("div",{className:"messageDiv",children:g.jsxs("div",{className:"messageBox",children:[g.jsx("h2",{className:"progressTitle",children:"Track Progress"}),g.jsx("p",{className:"progressDesc",children:"track your repair/funding process here"}),g.jsx("p",{className:"trackMessage",children:t})]})}),g.jsx(Jn,{position:"top-center",autoClose:3e3,hideProgressBar:!1}),g.jsx(on,{})]})},P3=GP([{path:"/",element:g.jsx(y2,{})},{path:"signup",element:g.jsx($V,{})},{path:"login",element:g.jsx(WV,{})},{path:"forgot",element:g.jsx(KV,{})},{path:"update",element:g.jsx(QV,{})},{path:"profile",element:g.jsx(XV,{})},{path:"subs",element:g.jsx(ZV,{})},{path:"cryptoselect",element:g.jsx(JV,{})},{path:"deposit",element:g.jsx(_3,{})},{path:"proof",element:g.jsx(w3,{})},{path:"withdrawals",element:g.jsx(T3,{})},{path:"works",element:g.jsx(I3,{})},{path:"admin",element:g.jsx(S3,{})},{path:"payment",element:g.jsx(C3,{})},{path:"card",element:g.jsx(R3,{})},{path:"progress",element:g.jsx(A3,{})}]);zf.createRoot(document.getElementById("root")).render(g.jsx(De.StrictMode,{children:g.jsx(rb,{router:P3})}));
