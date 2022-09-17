function Bx(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Vx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Hx(n){var e=n.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var ft={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Ip=Symbol.iterator;function Jx(n){return n===null||typeof n!="object"?null:(n=Ip&&n[Ip]||n["@@iterator"],typeof n=="function"?n:null)}var lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,cv={};function pa(n,e,t){this.props=n,this.context=e,this.refs=cv,this.updater=t||lv}pa.prototype.isReactComponent={};pa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};pa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function fv(){}fv.prototype=pa.prototype;function rh(n,e,t){this.props=n,this.context=e,this.refs=cv,this.updater=t||lv}var sh=rh.prototype=new fv;sh.constructor=rh;uv(sh,pa.prototype);sh.isPureReactComponent=!0;var kp=Array.isArray,dv=Object.prototype.hasOwnProperty,ah={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function pv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)dv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:No,type:n,key:s,ref:a,props:r,_owner:ah.current}}function e1(n,e){return{$$typeof:No,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function oh(n){return typeof n=="object"&&n!==null&&n.$$typeof===No}function t1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Np=/\/+/g;function _c(n,e){return typeof n=="object"&&n!==null&&n.key!=null?t1(""+n.key):e.toString(36)}function Yl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case No:case Gx:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+_c(a,0):i,kp(r)?(t="",n!=null&&(t=n.replace(Np,"$&/")+"/"),Yl(r,e,t,"",function(u){return u})):r!=null&&(oh(r)&&(r=e1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",kp(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+_c(s,o);a+=Yl(s,e,t,l,r)}else if(l=Jx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+_c(s,o++),a+=Yl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(n,e,t){if(n==null)return n;var i=[],r=0;return Yl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function n1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qt={current:null},$l={transition:null},i1={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:$l,ReactCurrentOwner:ah};Ie.Children={map:$o,forEach:function(n,e,t){$o(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return $o(n,function(){e++}),e},toArray:function(n){return $o(n,function(e){return e})||[]},only:function(n){if(!oh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ie.Component=pa;Ie.Fragment=Wx;Ie.Profiler=Xx;Ie.PureComponent=rh;Ie.StrictMode=jx;Ie.Suspense=Kx;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;Ie.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=uv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ah.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)dv.call(e,l)&&!hv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:No,type:n.type,key:r,ref:s,props:i,_owner:a}};Ie.createContext=function(n){return n={$$typeof:$x,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Yx,_context:n},n.Consumer=n};Ie.createElement=pv;Ie.createFactory=function(n){var e=pv.bind(null,n);return e.type=n,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(n){return{$$typeof:qx,render:n}};Ie.isValidElement=oh;Ie.lazy=function(n){return{$$typeof:Qx,_payload:{_status:-1,_result:n},_init:n1}};Ie.memo=function(n,e){return{$$typeof:Zx,type:n,compare:e===void 0?null:e}};Ie.startTransition=function(n){var e=$l.transition;$l.transition={};try{n()}finally{$l.transition=e}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(n,e){return qt.current.useCallback(n,e)};Ie.useContext=function(n){return qt.current.useContext(n)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(n){return qt.current.useDeferredValue(n)};Ie.useEffect=function(n,e){return qt.current.useEffect(n,e)};Ie.useId=function(){return qt.current.useId()};Ie.useImperativeHandle=function(n,e,t){return qt.current.useImperativeHandle(n,e,t)};Ie.useInsertionEffect=function(n,e){return qt.current.useInsertionEffect(n,e)};Ie.useLayoutEffect=function(n,e){return qt.current.useLayoutEffect(n,e)};Ie.useMemo=function(n,e){return qt.current.useMemo(n,e)};Ie.useReducer=function(n,e,t){return qt.current.useReducer(n,e,t)};Ie.useRef=function(n){return qt.current.useRef(n)};Ie.useState=function(n){return qt.current.useState(n)};Ie.useSyncExternalStore=function(n,e,t){return qt.current.useSyncExternalStore(n,e,t)};Ie.useTransition=function(){return qt.current.useTransition()};Ie.version="18.2.0";(function(n){n.exports=Ie})(ft);const Bu=Vx(ft.exports),Df=Bx({__proto__:null,default:Bu},[ft.exports]);var If={},mv={exports:{}},pn={},gv={exports:{}},vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,P){var N=k.length;k.push(P);e:for(;0<N;){var $=N-1>>>1,Y=k[$];if(0<r(Y,P))k[$]=P,k[N]=Y,N=$;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var P=k[0],N=k.pop();if(N!==P){k[0]=N;e:for(var $=0,Y=k.length,Q=Y>>>1;$<Q;){var ue=2*($+1)-1,_e=k[ue],G=ue+1,ke=k[G];if(0>r(_e,N))G<Y&&0>r(ke,_e)?(k[$]=ke,k[G]=N,$=G):(k[$]=_e,k[ue]=N,$=ue);else if(G<Y&&0>r(ke,N))k[$]=ke,k[G]=N,$=G;else break e}}return P}function r(k,P){var N=k.sortIndex-P.sortIndex;return N!==0?N:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var P=t(u);P!==null;){if(P.callback===null)i(u);else if(P.startTime<=k)i(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=t(u)}}function S(k){if(m=!1,y(k),!_)if(t(l)!==null)_=!0,K(x);else{var P=t(u);P!==null&&Z(S,P.startTime-k)}}function x(k,P){_=!1,m&&(m=!1,g(w),w=-1),p=!0;var N=d;try{for(y(P),f=t(l);f!==null&&(!(f.expirationTime>P)||k&&!X());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var Y=$(f.expirationTime<=P);P=n.unstable_now(),typeof Y=="function"?f.callback=Y:f===t(l)&&i(l),y(P)}else i(l);f=t(l)}if(f!==null)var Q=!0;else{var ue=t(u);ue!==null&&Z(S,ue.startTime-P),Q=!1}return Q}finally{f=null,d=N,p=!1}}var T=!1,L=null,w=-1,C=5,D=-1;function X(){return!(n.unstable_now()-D<C)}function te(){if(L!==null){var k=n.unstable_now();D=k;var P=!0;try{P=L(!0,k)}finally{P?U():(T=!1,L=null)}}else T=!1}var U;if(typeof v=="function")U=function(){v(te)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,W=O.port2;O.port1.onmessage=te,U=function(){W.postMessage(null)}}else U=function(){h(te,0)};function K(k){L=k,T||(T=!0,U())}function Z(k,P){w=h(function(){k(n.unstable_now())},P)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,K(x))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(k){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var N=d;d=P;try{return k()}finally{d=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var N=d;d=k;try{return P()}finally{d=N}},n.unstable_scheduleCallback=function(k,P,N){var $=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?$+N:$):N=$,k){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,k={id:c++,callback:P,priorityLevel:k,startTime:N,expirationTime:Y,sortIndex:-1},N>$?(k.sortIndex=N,e(u,k),t(l)===null&&k===t(u)&&(m?(g(w),w=-1):m=!0,Z(S,N-$))):(k.sortIndex=Y,e(l,k),_||p||(_=!0,K(x))),k},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(k){var P=d;return function(){var N=d;d=P;try{return k.apply(this,arguments)}finally{d=N}}}})(vv);(function(n){n.exports=vv})(gv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=ft.exports,hn=gv.exports;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yv=new Set,so={};function is(n,e){Js(n,e),Js(n+"Capture",e)}function Js(n,e){for(so[n]=e,n=0;n<e.length;n++)yv.add(e[n])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Fp={};function s1(n){return kf.call(Fp,n)?!0:kf.call(Op,n)?!1:r1.test(n)?Fp[n]=!0:(Op[n]=!0,!1)}function a1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function o1(n,e,t,i){if(e===null||typeof e>"u"||a1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){It[n]=new Kt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];It[e]=new Kt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){It[n]=new Kt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){It[n]=new Kt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){It[n]=new Kt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){It[n]=new Kt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){It[n]=new Kt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){It[n]=new Kt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){It[n]=new Kt(n,5,!1,n.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function uh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(lh,uh);It[e]=new Kt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(lh,uh);It[e]=new Kt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(lh,uh);It[e]=new Kt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){It[n]=new Kt(n,1,!1,n.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){It[n]=new Kt(n,1,!1,n.toLowerCase(),null,!0,!0)});function ch(n,e,t,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,t,r,i)&&(t=null),i||r===null?s1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Pi=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),zp=Symbol.iterator;function Ea(n){return n===null||typeof n!="object"?null:(n=zp&&n[zp]||n["@@iterator"],typeof n=="function"?n:null)}var at=Object.assign,yc;function Ua(n){if(yc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+n}var xc=!1;function Sc(n,e){if(!n||xc)return"";xc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ua(n):""}function l1(n){switch(n.tag){case 5:return Ua(n.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return n=Sc(n.type,!1),n;case 11:return n=Sc(n.type.render,!1),n;case 1:return n=Sc(n.type,!0),n;default:return""}}function zf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ls:return"Fragment";case Cs:return"Portal";case Nf:return"Profiler";case fh:return"StrictMode";case Of:return"Suspense";case Ff:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Sv:return(n.displayName||"Context")+".Consumer";case xv:return(n._context.displayName||"Context")+".Provider";case dh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case hh:return e=n.displayName||null,e!==null?e:zf(n.type)||"Memo";case Yi:e=n._payload,n=n._init;try{return zf(n(e))}catch{}}return null}function u1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zf(e);case 8:return e===fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Mv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c1(n){var e=Mv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ko(n){n._valueTracker||(n._valueTracker=c1(n))}function bv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Mv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Uf(n,e){var t=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Up(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=cr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(n,e){e=e.checked,e!=null&&ch(n,"checked",e,!1)}function Bf(n,e){Ev(n,e);var t=cr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Vf(n,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Bp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Vf(n,e,t){(e!=="number"||uu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ba=Array.isArray;function Ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+cr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Hf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(Ba(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:cr(t)}}function Tv(n,e){var t=cr(e.value),i=cr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Av(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Av(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Zo,Cv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ao(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(n){f1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Xa[e]=Xa[n]})});function Lv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Xa.hasOwnProperty(n)&&Xa[n]?(""+e).trim():e+"px"}function Pv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Lv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var d1=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(n,e){if(e){if(d1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function jf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function ph(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yf=null,js=null,Xs=null;function Gp(n){if(n=zo(n)){if(typeof Yf!="function")throw Error(J(280));var e=n.stateNode;e&&(e=ju(e),Yf(n.stateNode,n.type,e))}}function Rv(n){js?Xs?Xs.push(n):Xs=[n]:js=n}function Dv(){if(js){var n=js,e=Xs;if(Xs=js=null,Gp(n),e)for(n=0;n<e.length;n++)Gp(e[n])}}function Iv(n,e){return n(e)}function kv(){}var wc=!1;function Nv(n,e,t){if(wc)return n(e,t);wc=!0;try{return Iv(n,e,t)}finally{wc=!1,(js!==null||Xs!==null)&&(kv(),Dv())}}function oo(n,e){var t=n.stateNode;if(t===null)return null;var i=ju(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var $f=!1;if(wi)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){$f=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{$f=!1}function h1(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ya=!1,cu=null,fu=!1,qf=null,p1={onError:function(n){Ya=!0,cu=n}};function m1(n,e,t,i,r,s,a,o,l){Ya=!1,cu=null,h1.apply(p1,arguments)}function g1(n,e,t,i,r,s,a,o,l){if(m1.apply(this,arguments),Ya){if(Ya){var u=cu;Ya=!1,cu=null}else throw Error(J(198));fu||(fu=!0,qf=u)}}function rs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ov(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(n){if(rs(n)!==n)throw Error(J(188))}function v1(n){var e=n.alternate;if(!e){if(e=rs(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Wp(r),n;if(s===i)return Wp(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Fv(n){return n=v1(n),n!==null?zv(n):null}function zv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=zv(n);if(e!==null)return e;n=n.sibling}return null}var Uv=hn.unstable_scheduleCallback,jp=hn.unstable_cancelCallback,_1=hn.unstable_shouldYield,y1=hn.unstable_requestPaint,pt=hn.unstable_now,x1=hn.unstable_getCurrentPriorityLevel,mh=hn.unstable_ImmediatePriority,Bv=hn.unstable_UserBlockingPriority,du=hn.unstable_NormalPriority,S1=hn.unstable_LowPriority,Vv=hn.unstable_IdlePriority,Vu=null,Qn=null;function w1(n){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Vu,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:E1,M1=Math.log,b1=Math.LN2;function E1(n){return n>>>=0,n===0?32:31-(M1(n)/b1|0)|0}var Qo=64,Jo=4194304;function Va(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Va(o):(s&=a,s!==0&&(i=Va(s)))}else a=t&~r,a!==0?i=Va(a):s!==0&&(i=Va(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Bn(e),r=1<<t,i|=n[t],e&=~r;return i}function T1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?((o&t)===0||(o&i)!==0)&&(r[a]=T1(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Kf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hv(){var n=Qo;return Qo<<=1,(Qo&4194240)===0&&(Qo=64),n}function Mc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Oo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=t}function C1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Bn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function gh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Bn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ye=0;function Gv(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wv,vh,jv,Xv,Yv,Zf=!1,el=[],tr=null,nr=null,ir=null,lo=new Map,uo=new Map,qi=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(n,e){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Aa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zo(e),e!==null&&vh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function P1(n,e,t,i,r){switch(e){case"focusin":return tr=Aa(tr,n,e,t,i,r),!0;case"dragenter":return nr=Aa(nr,n,e,t,i,r),!0;case"mouseover":return ir=Aa(ir,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lo.set(s,Aa(lo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,Aa(uo.get(s)||null,n,e,t,i,r)),!0}return!1}function $v(n){var e=Lr(n.target);if(e!==null){var t=rs(e);if(t!==null){if(e=t.tag,e===13){if(e=Ov(t),e!==null){n.blockedOn=e,Yv(n.priority,function(){jv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Qf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Xf=i,t.target.dispatchEvent(i),Xf=null}else return e=zo(t),e!==null&&vh(e),n.blockedOn=t,!1;e.shift()}return!0}function Yp(n,e,t){ql(n)&&t.delete(e)}function R1(){Zf=!1,tr!==null&&ql(tr)&&(tr=null),nr!==null&&ql(nr)&&(nr=null),ir!==null&&ql(ir)&&(ir=null),lo.forEach(Yp),uo.forEach(Yp)}function Ca(n,e){n.blockedOn===e&&(n.blockedOn=null,Zf||(Zf=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,R1)))}function co(n){function e(r){return Ca(r,n)}if(0<el.length){Ca(el[0],n);for(var t=1;t<el.length;t++){var i=el[t];i.blockedOn===n&&(i.blockedOn=null)}}for(tr!==null&&Ca(tr,n),nr!==null&&Ca(nr,n),ir!==null&&Ca(ir,n),lo.forEach(e),uo.forEach(e),t=0;t<qi.length;t++)i=qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<qi.length&&(t=qi[0],t.blockedOn===null);)$v(t),t.blockedOn===null&&qi.shift()}var Ys=Pi.ReactCurrentBatchConfig,pu=!0;function D1(n,e,t,i){var r=Ye,s=Ys.transition;Ys.transition=null;try{Ye=1,_h(n,e,t,i)}finally{Ye=r,Ys.transition=s}}function I1(n,e,t,i){var r=Ye,s=Ys.transition;Ys.transition=null;try{Ye=4,_h(n,e,t,i)}finally{Ye=r,Ys.transition=s}}function _h(n,e,t,i){if(pu){var r=Qf(n,e,t,i);if(r===null)Ic(n,e,i,mu,t),Xp(n,i);else if(P1(r,n,e,t,i))i.stopPropagation();else if(Xp(n,i),e&4&&-1<L1.indexOf(n)){for(;r!==null;){var s=zo(r);if(s!==null&&Wv(s),s=Qf(n,e,t,i),s===null&&Ic(n,e,i,mu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(n,e,i,null,t)}}var mu=null;function Qf(n,e,t,i){if(mu=null,n=ph(i),n=Lr(n),n!==null)if(e=rs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ov(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return mu=n,null}function qv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case mh:return 1;case Bv:return 4;case du:case S1:return 16;case Vv:return 536870912;default:return 16}default:return 16}}var Zi=null,yh=null,Kl=null;function Kv(){if(Kl)return Kl;var n,e=yh,t=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Kl=r.slice(n,1<i?1-i:void 0)}function Zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function tl(){return!0}function $p(){return!1}function mn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:$p,this.isPropagationStopped=$p,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xh=mn(ma),Fo=at({},ma,{view:0,detail:0}),k1=mn(Fo),bc,Ec,La,Hu=at({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==La&&(La&&n.type==="mousemove"?(bc=n.screenX-La.screenX,Ec=n.screenY-La.screenY):Ec=bc=0,La=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),qp=mn(Hu),N1=at({},Hu,{dataTransfer:0}),O1=mn(N1),F1=at({},Fo,{relatedTarget:0}),Tc=mn(F1),z1=at({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=mn(z1),B1=at({},ma,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V1=mn(B1),H1=at({},ma,{data:0}),Kp=mn(H1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=j1[n])?!!e[n]:!1}function Sh(){return X1}var Y1=at({},Fo,{key:function(n){if(n.key){var e=G1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(n){return n.type==="keypress"?Zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$1=mn(Y1),q1=at({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=mn(q1),K1=at({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),Z1=mn(K1),Q1=at({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=mn(Q1),eS=at({},Hu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=mn(eS),nS=[9,13,27,32],wh=wi&&"CompositionEvent"in window,$a=null;wi&&"documentMode"in document&&($a=document.documentMode);var iS=wi&&"TextEvent"in window&&!$a,Zv=wi&&(!wh||$a&&8<$a&&11>=$a),Qp=String.fromCharCode(32),Jp=!1;function Qv(n,e){switch(n){case"keyup":return nS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function rS(n,e){switch(n){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(Jp=!0,Qp);case"textInput":return n=e.data,n===Qp&&Jp?null:n;default:return null}}function sS(n,e){if(Ps)return n==="compositionend"||!wh&&Qv(n,e)?(n=Kv(),Kl=yh=Zi=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zv&&e.locale!=="ko"?null:e.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!aS[n.type]:e==="textarea"}function e_(n,e,t,i){Rv(i),e=gu(e,"onChange"),0<e.length&&(t=new xh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var qa=null,fo=null;function oS(n){f_(n,0)}function Gu(n){var e=Is(n);if(bv(e))return n}function lS(n,e){if(n==="change")return e}var t_=!1;if(wi){var Ac;if(wi){var Cc="oninput"in document;if(!Cc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Cc=typeof tm.oninput=="function"}Ac=Cc}else Ac=!1;t_=Ac&&(!document.documentMode||9<document.documentMode)}function nm(){qa&&(qa.detachEvent("onpropertychange",n_),fo=qa=null)}function n_(n){if(n.propertyName==="value"&&Gu(fo)){var e=[];e_(e,fo,n,ph(n)),Nv(oS,e)}}function uS(n,e,t){n==="focusin"?(nm(),qa=e,fo=t,qa.attachEvent("onpropertychange",n_)):n==="focusout"&&nm()}function cS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gu(fo)}function fS(n,e){if(n==="click")return Gu(e)}function dS(n,e){if(n==="input"||n==="change")return Gu(e)}function hS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Gn=typeof Object.is=="function"?Object.is:hS;function ho(n,e){if(Gn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!kf.call(e,r)||!Gn(n[r],e[r]))return!1}return!0}function im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rm(n,e){var t=im(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=im(t)}}function i_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?i_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function r_(){for(var n=window,e=uu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uu(n.document)}return e}function Mh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function pS(n){var e=r_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&i_(t.ownerDocument.documentElement,t)){if(i!==null&&Mh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=rm(t,s);var a=rm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mS=wi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Jf=null,Ka=null,ed=!1;function sm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ed||Rs==null||Rs!==uu(i)||(i=Rs,"selectionStart"in i&&Mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ka&&ho(Ka,i)||(Ka=i,i=gu(Jf,"onSelect"),0<i.length&&(e=new xh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Rs)))}function nl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ds={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Lc={},s_={};wi&&(s_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Wu(n){if(Lc[n])return Lc[n];if(!Ds[n])return n;var e=Ds[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in s_)return Lc[n]=e[t];return n}var a_=Wu("animationend"),o_=Wu("animationiteration"),l_=Wu("animationstart"),u_=Wu("transitionend"),c_=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,e){c_.set(n,e),is(e,[n])}for(var Pc=0;Pc<am.length;Pc++){var Rc=am[Pc],gS=Rc.toLowerCase(),vS=Rc[0].toUpperCase()+Rc.slice(1);mr(gS,"on"+vS)}mr(a_,"onAnimationEnd");mr(o_,"onAnimationIteration");mr(l_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(u_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function om(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,g1(i,e,void 0,n),n.currentTarget=null}function f_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;om(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;om(r,o,u),s=l}}}if(fu)throw n=qf,fu=!1,qf=null,n}function Ze(n,e){var t=e[sd];t===void 0&&(t=e[sd]=new Set);var i=n+"__bubble";t.has(i)||(d_(e,n,2,!1),t.add(i))}function Dc(n,e,t){var i=0;e&&(i|=4),d_(t,n,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[il]){n[il]=!0,yv.forEach(function(t){t!=="selectionchange"&&(_S.has(t)||Dc(t,!1,n),Dc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[il]||(e[il]=!0,Dc("selectionchange",!1,e))}}function d_(n,e,t,i){switch(qv(e)){case 1:var r=D1;break;case 4:r=I1;break;default:r=_h}t=r.bind(null,e,t,n),r=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ic(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Nv(function(){var u=s,c=ph(t),f=[];e:{var d=c_.get(n);if(d!==void 0){var p=xh,_=n;switch(n){case"keypress":if(Zl(t)===0)break e;case"keydown":case"keyup":p=$1;break;case"focusin":_="focus",p=Tc;break;case"focusout":_="blur",p=Tc;break;case"beforeblur":case"afterblur":p=Tc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Z1;break;case a_:case o_:case l_:p=U1;break;case u_:p=J1;break;case"scroll":p=k1;break;case"wheel":p=tS;break;case"copy":case"cut":case"paste":p=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zp}var m=(e&4)!==0,h=!m&&n==="scroll",g=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=oo(v,g),S!=null&&m.push(mo(v,S,y)))),h)break;v=v.return}0<m.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:m}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Xf&&(_=t.relatedTarget||t.fromElement)&&(Lr(_)||_[Mi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Lr(_):null,_!==null&&(h=rs(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=qp,S="onMouseLeave",g="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=Zp,S="onPointerLeave",g="onPointerEnter",v="pointer"),h=p==null?d:Is(p),y=_==null?d:Is(_),d=new m(S,v+"leave",p,t,c),d.target=h,d.relatedTarget=y,S=null,Lr(c)===u&&(m=new m(g,v+"enter",_,t,c),m.target=y,m.relatedTarget=h,S=m),h=S,p&&_)t:{for(m=p,g=_,v=0,y=m;y;y=cs(y))v++;for(y=0,S=g;S;S=cs(S))y++;for(;0<v-y;)m=cs(m),v--;for(;0<y-v;)g=cs(g),y--;for(;v--;){if(m===g||g!==null&&m===g.alternate)break t;m=cs(m),g=cs(g)}m=null}else m=null;p!==null&&lm(f,d,p,m,!1),_!==null&&h!==null&&lm(f,h,_,m,!0)}}e:{if(d=u?Is(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var x=lS;else if(em(d))if(t_)x=dS;else{x=cS;var T=uS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=fS);if(x&&(x=x(n,u))){e_(f,x,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Vf(d,"number",d.value)}switch(T=u?Is(u):window,n){case"focusin":(em(T)||T.contentEditable==="true")&&(Rs=T,Jf=u,Ka=null);break;case"focusout":Ka=Jf=Rs=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,sm(f,t,c);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":sm(f,t,c)}var L;if(wh)e:{switch(n){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ps?Qv(n,t)&&(w="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(Zv&&t.locale!=="ko"&&(Ps||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ps&&(L=Kv()):(Zi=c,yh="value"in Zi?Zi.value:Zi.textContent,Ps=!0)),T=gu(u,w),0<T.length&&(w=new Kp(w,n,null,t,c),f.push({event:w,listeners:T}),L?w.data=L:(L=Jv(t),L!==null&&(w.data=L)))),(L=iS?rS(n,t):sS(n,t))&&(u=gu(u,"onBeforeInput"),0<u.length&&(c=new Kp("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=L))}f_(f,e)})}function mo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function gu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(n,t),s!=null&&i.unshift(mo(n,s,r)),s=oo(n,e),s!=null&&i.push(mo(n,s,r))),n=n.return}return i}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=oo(t,s),l!=null&&a.unshift(mo(t,l,o))):r||(l=oo(t,s),l!=null&&a.push(mo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var yS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function um(n){return(typeof n=="string"?n:""+n).replace(yS,`
`).replace(xS,"")}function rl(n,e,t){if(e=um(e),um(n)!==e&&t)throw Error(J(425))}function vu(){}var td=null,nd=null;function id(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(n){return cm.resolve(null).then(n).catch(MS)}:rd;function MS(n){setTimeout(function(){throw n})}function kc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),co(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);co(e)}function rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ga=Math.random().toString(36).slice(2),$n="__reactFiber$"+ga,go="__reactProps$"+ga,Mi="__reactContainer$"+ga,sd="__reactEvents$"+ga,bS="__reactListeners$"+ga,ES="__reactHandles$"+ga;function Lr(n){var e=n[$n];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Mi]||t[$n]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fm(n);n!==null;){if(t=n[$n])return t;n=fm(n)}return e}n=t,t=n.parentNode}return null}function zo(n){return n=n[$n]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function ju(n){return n[go]||null}var ad=[],ks=-1;function gr(n){return{current:n}}function Je(n){0>ks||(n.current=ad[ks],ad[ks]=null,ks--)}function Ke(n,e){ks++,ad[ks]=n.current,n.current=e}var fr={},Bt=gr(fr),en=gr(!1),Wr=fr;function ea(n,e){var t=n.type.contextTypes;if(!t)return fr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function tn(n){return n=n.childContextTypes,n!=null}function _u(){Je(en),Je(Bt)}function dm(n,e,t){if(Bt.current!==fr)throw Error(J(168));Ke(Bt,e),Ke(en,t)}function h_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,u1(n)||"Unknown",r));return at({},t,i)}function yu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fr,Wr=Bt.current,Ke(Bt,n),Ke(en,en.current),!0}function hm(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=h_(n,e,Wr),i.__reactInternalMemoizedMergedChildContext=n,Je(en),Je(Bt),Ke(Bt,n)):Je(en),Ke(en,t)}var hi=null,Xu=!1,Nc=!1;function p_(n){hi===null?hi=[n]:hi.push(n)}function TS(n){Xu=!0,p_(n)}function vr(){if(!Nc&&hi!==null){Nc=!0;var n=0,e=Ye;try{var t=hi;for(Ye=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}hi=null,Xu=!1}catch(r){throw hi!==null&&(hi=hi.slice(n+1)),Uv(mh,vr),r}finally{Ye=e,Nc=!1}}return null}var Ns=[],Os=0,xu=null,Su=0,Sn=[],wn=0,jr=null,mi=1,gi="";function Mr(n,e){Ns[Os++]=Su,Ns[Os++]=xu,xu=n,Su=e}function m_(n,e,t){Sn[wn++]=mi,Sn[wn++]=gi,Sn[wn++]=jr,jr=n;var i=mi;n=gi;var r=32-Bn(i)-1;i&=~(1<<r),t+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Bn(e)+r|t<<r|i,gi=s+n}else mi=1<<s|t<<r|i,gi=n}function bh(n){n.return!==null&&(Mr(n,1),m_(n,1,0))}function Eh(n){for(;n===xu;)xu=Ns[--Os],Ns[Os]=null,Su=Ns[--Os],Ns[Os]=null;for(;n===jr;)jr=Sn[--wn],Sn[wn]=null,gi=Sn[--wn],Sn[wn]=null,mi=Sn[--wn],Sn[wn]=null}var fn=null,cn=null,it=!1,Fn=null;function g_(n,e){var t=bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function pm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,fn=n,cn=rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,fn=n,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=jr!==null?{id:mi,overflow:gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,fn=n,cn=null,!0):!1;default:return!1}}function od(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ld(n){if(it){var e=cn;if(e){var t=e;if(!pm(n,e)){if(od(n))throw Error(J(418));e=rr(t.nextSibling);var i=fn;e&&pm(n,e)?g_(i,t):(n.flags=n.flags&-4097|2,it=!1,fn=n)}}else{if(od(n))throw Error(J(418));n.flags=n.flags&-4097|2,it=!1,fn=n}}}function mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fn=n}function sl(n){if(n!==fn)return!1;if(!it)return mm(n),it=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!id(n.type,n.memoizedProps)),e&&(e=cn)){if(od(n))throw v_(),Error(J(418));for(;e;)g_(n,e),e=rr(e.nextSibling)}if(mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){cn=rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}cn=null}}else cn=fn?rr(n.stateNode.nextSibling):null;return!0}function v_(){for(var n=cn;n;)n=rr(n.nextSibling)}function ta(){cn=fn=null,it=!1}function Th(n){Fn===null?Fn=[n]:Fn.push(n)}var AS=Pi.ReactCurrentBatchConfig;function Nn(n,e){if(n&&n.defaultProps){e=at({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var wu=gr(null),Mu=null,Fs=null,Ah=null;function Ch(){Ah=Fs=Mu=null}function Lh(n){var e=wu.current;Je(wu),n._currentValue=e}function ud(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function $s(n,e){Mu=n,Ah=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Jt=!0),n.firstContext=null)}function Cn(n){var e=n._currentValue;if(Ah!==n)if(n={context:n,memoizedValue:e,next:null},Fs===null){if(Mu===null)throw Error(J(308));Fs=n,Mu.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return e}var Pr=null;function Ph(n){Pr===null?Pr=[n]:Pr.push(n)}function __(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ph(e)):(t.next=r.next,r.next=t),e.interleaved=t,bi(n,i)}function bi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var $i=!1;function Rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(n,t)}return r=i.interleaved,r===null?(e.next=e,Ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(n,t)}function Ql(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gh(n,t)}}function gm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bu(n,e,t,i){var r=n.updateQueue;$i=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,c=u=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,m=o;switch(d=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=at({},f,d);break e;case 2:$i=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=a,n.lanes=a,n.memoizedState=f}}function vm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var x_=new _v.Component().refs;function cd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:at({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Yu={isMounted:function(n){return(n=n._reactInternals)?rs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=jt(),r=or(n),s=yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=sr(n,s,r),e!==null&&(Vn(e,n,r,i),Ql(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=jt(),r=or(n),s=yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=sr(n,s,r),e!==null&&(Vn(e,n,r,i),Ql(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=jt(),i=or(n),r=yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=sr(n,r,i),e!==null&&(Vn(e,n,i,t),Ql(e,n,i))}};function _m(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ho(t,i)||!ho(r,s):!0}function S_(n,e,t){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=tn(e)?Wr:Bt.current,i=e.contextTypes,s=(i=i!=null)?ea(n,r):fr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ym(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Yu.enqueueReplaceState(e,e.state,null)}function fd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=x_,Rh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=tn(e)?Wr:Bt.current,r.context=ea(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yu.enqueueReplaceState(r,r.state,null),bu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Pa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===x_&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function al(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xm(n){var e=n._init;return e(n._payload)}function w_(n){function e(g,v){if(n){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function t(g,v){if(!n)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=lr(g,v),g.index=0,g.sibling=null,g}function s(g,v,y){return g.index=y,n?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function a(g){return n&&g.alternate===null&&(g.flags|=2),g}function o(g,v,y,S){return v===null||v.tag!==6?(v=Hc(y,g.mode,S),v.return=g,v):(v=r(v,y),v.return=g,v)}function l(g,v,y,S){var x=y.type;return x===Ls?c(g,v,y.props.children,S,y.key):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Yi&&xm(x)===v.type)?(S=r(v,y.props),S.ref=Pa(g,v,y),S.return=g,S):(S=ru(y.type,y.key,y.props,null,g.mode,S),S.ref=Pa(g,v,y),S.return=g,S)}function u(g,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Gc(y,g.mode,S),v.return=g,v):(v=r(v,y.children||[]),v.return=g,v)}function c(g,v,y,S,x){return v===null||v.tag!==7?(v=Br(y,g.mode,S,x),v.return=g,v):(v=r(v,y),v.return=g,v)}function f(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hc(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return y=ru(v.type,v.key,v.props,null,g.mode,y),y.ref=Pa(g,null,v),y.return=g,y;case Cs:return v=Gc(v,g.mode,y),v.return=g,v;case Yi:var S=v._init;return f(g,S(v._payload),y)}if(Ba(v)||Ea(v))return v=Br(v,g.mode,y,null),v.return=g,v;al(g,v)}return null}function d(g,v,y,S){var x=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:o(g,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:return y.key===x?l(g,v,y,S):null;case Cs:return y.key===x?u(g,v,y,S):null;case Yi:return x=y._init,d(g,v,x(y._payload),S)}if(Ba(y)||Ea(y))return x!==null?null:c(g,v,y,S,null);al(g,y)}return null}function p(g,v,y,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,o(v,g,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qo:return g=g.get(S.key===null?y:S.key)||null,l(v,g,S,x);case Cs:return g=g.get(S.key===null?y:S.key)||null,u(v,g,S,x);case Yi:var T=S._init;return p(g,v,y,T(S._payload),x)}if(Ba(S)||Ea(S))return g=g.get(y)||null,c(v,g,S,x,null);al(v,S)}return null}function _(g,v,y,S){for(var x=null,T=null,L=v,w=v=0,C=null;L!==null&&w<y.length;w++){L.index>w?(C=L,L=null):C=L.sibling;var D=d(g,L,y[w],S);if(D===null){L===null&&(L=C);break}n&&L&&D.alternate===null&&e(g,L),v=s(D,v,w),T===null?x=D:T.sibling=D,T=D,L=C}if(w===y.length)return t(g,L),it&&Mr(g,w),x;if(L===null){for(;w<y.length;w++)L=f(g,y[w],S),L!==null&&(v=s(L,v,w),T===null?x=L:T.sibling=L,T=L);return it&&Mr(g,w),x}for(L=i(g,L);w<y.length;w++)C=p(L,g,w,y[w],S),C!==null&&(n&&C.alternate!==null&&L.delete(C.key===null?w:C.key),v=s(C,v,w),T===null?x=C:T.sibling=C,T=C);return n&&L.forEach(function(X){return e(g,X)}),it&&Mr(g,w),x}function m(g,v,y,S){var x=Ea(y);if(typeof x!="function")throw Error(J(150));if(y=x.call(y),y==null)throw Error(J(151));for(var T=x=null,L=v,w=v=0,C=null,D=y.next();L!==null&&!D.done;w++,D=y.next()){L.index>w?(C=L,L=null):C=L.sibling;var X=d(g,L,D.value,S);if(X===null){L===null&&(L=C);break}n&&L&&X.alternate===null&&e(g,L),v=s(X,v,w),T===null?x=X:T.sibling=X,T=X,L=C}if(D.done)return t(g,L),it&&Mr(g,w),x;if(L===null){for(;!D.done;w++,D=y.next())D=f(g,D.value,S),D!==null&&(v=s(D,v,w),T===null?x=D:T.sibling=D,T=D);return it&&Mr(g,w),x}for(L=i(g,L);!D.done;w++,D=y.next())D=p(L,g,w,D.value,S),D!==null&&(n&&D.alternate!==null&&L.delete(D.key===null?w:D.key),v=s(D,v,w),T===null?x=D:T.sibling=D,T=D);return n&&L.forEach(function(te){return e(g,te)}),it&&Mr(g,w),x}function h(g,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Ls&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:e:{for(var x=y.key,T=v;T!==null;){if(T.key===x){if(x=y.type,x===Ls){if(T.tag===7){t(g,T.sibling),v=r(T,y.props.children),v.return=g,g=v;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Yi&&xm(x)===T.type){t(g,T.sibling),v=r(T,y.props),v.ref=Pa(g,T,y),v.return=g,g=v;break e}t(g,T);break}else e(g,T);T=T.sibling}y.type===Ls?(v=Br(y.props.children,g.mode,S,y.key),v.return=g,g=v):(S=ru(y.type,y.key,y.props,null,g.mode,S),S.ref=Pa(g,v,y),S.return=g,g=S)}return a(g);case Cs:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(g,v.sibling),v=r(v,y.children||[]),v.return=g,g=v;break e}else{t(g,v);break}else e(g,v);v=v.sibling}v=Gc(y,g.mode,S),v.return=g,g=v}return a(g);case Yi:return T=y._init,h(g,v,T(y._payload),S)}if(Ba(y))return _(g,v,y,S);if(Ea(y))return m(g,v,y,S);al(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(g,v.sibling),v=r(v,y),v.return=g,g=v):(t(g,v),v=Hc(y,g.mode,S),v.return=g,g=v),a(g)):t(g,v)}return h}var na=w_(!0),M_=w_(!1),Uo={},Jn=gr(Uo),vo=gr(Uo),_o=gr(Uo);function Rr(n){if(n===Uo)throw Error(J(174));return n}function Dh(n,e){switch(Ke(_o,e),Ke(vo,n),Ke(Jn,Uo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Gf(e,n)}Je(Jn),Ke(Jn,e)}function ia(){Je(Jn),Je(vo),Je(_o)}function b_(n){Rr(_o.current);var e=Rr(Jn.current),t=Gf(e,n.type);e!==t&&(Ke(vo,n),Ke(Jn,t))}function Ih(n){vo.current===n&&(Je(Jn),Je(vo))}var rt=gr(0);function Eu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function kh(){for(var n=0;n<Oc.length;n++)Oc[n]._workInProgressVersionPrimary=null;Oc.length=0}var Jl=Pi.ReactCurrentDispatcher,Fc=Pi.ReactCurrentBatchConfig,Xr=0,st=null,wt=null,At=null,Tu=!1,Za=!1,yo=0,CS=0;function kt(){throw Error(J(321))}function Nh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Gn(n[t],e[t]))return!1;return!0}function Oh(n,e,t,i,r,s){if(Xr=s,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=n===null||n.memoizedState===null?DS:IS,n=t(i,r),Za){s=0;do{if(Za=!1,yo=0,25<=s)throw Error(J(301));s+=1,At=wt=null,e.updateQueue=null,Jl.current=kS,n=t(i,r)}while(Za)}if(Jl.current=Au,e=wt!==null&&wt.next!==null,Xr=0,At=wt=st=null,Tu=!1,e)throw Error(J(300));return n}function Fh(){var n=yo!==0;return yo=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?st.memoizedState=At=n:At=At.next=n,At}function Ln(){if(wt===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var e=At===null?st.memoizedState:At.next;if(e!==null)At=e,wt=n;else{if(n===null)throw Error(J(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},At===null?st.memoizedState=At=n:At=At.next=n}return At}function xo(n,e){return typeof e=="function"?e(n):e}function zc(n){var e=Ln(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,st.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,st.lanes|=s,Yr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Uc(n){var e=Ln(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function E_(){}function T_(n,e){var t=st,i=Ln(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,zh(L_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(t.flags|=2048,So(9,C_.bind(null,t,i,r,e),void 0,null),Ct===null)throw Error(J(349));(Xr&30)!==0||A_(t,e,r)}return r}function A_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function C_(n,e,t,i){e.value=t,e.getSnapshot=i,P_(e)&&R_(n)}function L_(n,e,t){return t(function(){P_(e)&&R_(n)})}function P_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Gn(n,t)}catch{return!0}}function R_(n){var e=bi(n,1);e!==null&&Vn(e,n,1,-1)}function Sm(n){var e=Xn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:n},e.queue=n,n=n.dispatch=RS.bind(null,st,n),[e.memoizedState,n]}function So(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function D_(){return Ln().memoizedState}function eu(n,e,t,i){var r=Xn();st.flags|=n,r.memoizedState=So(1|e,t,void 0,i===void 0?null:i)}function $u(n,e,t,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&Nh(i,a.deps)){r.memoizedState=So(e,t,s,i);return}}st.flags|=n,r.memoizedState=So(1|e,t,s,i)}function wm(n,e){return eu(8390656,8,n,e)}function zh(n,e){return $u(2048,8,n,e)}function I_(n,e){return $u(4,2,n,e)}function k_(n,e){return $u(4,4,n,e)}function N_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function O_(n,e,t){return t=t!=null?t.concat([n]):null,$u(4,4,N_.bind(null,e,n),t)}function Uh(){}function F_(n,e){var t=Ln();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function z_(n,e){var t=Ln();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function U_(n,e,t){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=t):(Gn(t,e)||(t=Hv(),st.lanes|=t,Yr|=t,n.baseState=!0),e)}function LS(n,e){var t=Ye;Ye=t!==0&&4>t?t:4,n(!0);var i=Fc.transition;Fc.transition={};try{n(!1),e()}finally{Ye=t,Fc.transition=i}}function B_(){return Ln().memoizedState}function PS(n,e,t){var i=or(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},V_(n))H_(e,t);else if(t=__(n,e,t,i),t!==null){var r=jt();Vn(t,n,i,r),G_(t,e,i)}}function RS(n,e,t){var i=or(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(V_(n))H_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=__(n,e,r,i),t!==null&&(r=jt(),Vn(t,n,i,r),G_(t,e,i))}}function V_(n){var e=n.alternate;return n===st||e!==null&&e===st}function H_(n,e){Za=Tu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function G_(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gh(n,t)}}var Au={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},DS={readContext:Cn,useCallback:function(n,e){return Xn().memoizedState=[n,e===void 0?null:e],n},useContext:Cn,useEffect:wm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,eu(4194308,4,N_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return eu(4194308,4,n,e)},useInsertionEffect:function(n,e){return eu(4,2,n,e)},useMemo:function(n,e){var t=Xn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Xn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PS.bind(null,st,n),[i.memoizedState,n]},useRef:function(n){var e=Xn();return n={current:n},e.memoizedState=n},useState:Sm,useDebugValue:Uh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Sm(!1),e=n[0];return n=LS.bind(null,n[1]),Xn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=st,r=Xn();if(it){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),Ct===null)throw Error(J(349));(Xr&30)!==0||A_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,wm(L_.bind(null,i,s,n),[n]),i.flags|=2048,So(9,C_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Xn(),e=Ct.identifierPrefix;if(it){var t=gi,i=mi;t=(i&~(1<<32-Bn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=yo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=CS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},IS={readContext:Cn,useCallback:F_,useContext:Cn,useEffect:zh,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:k_,useMemo:z_,useReducer:zc,useRef:D_,useState:function(){return zc(xo)},useDebugValue:Uh,useDeferredValue:function(n){var e=Ln();return U_(e,wt.memoizedState,n)},useTransition:function(){var n=zc(xo)[0],e=Ln().memoizedState;return[n,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:B_,unstable_isNewReconciler:!1},kS={readContext:Cn,useCallback:F_,useContext:Cn,useEffect:zh,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:k_,useMemo:z_,useReducer:Uc,useRef:D_,useState:function(){return Uc(xo)},useDebugValue:Uh,useDeferredValue:function(n){var e=Ln();return wt===null?e.memoizedState=n:U_(e,wt.memoizedState,n)},useTransition:function(){var n=Uc(xo)[0],e=Ln().memoizedState;return[n,e]},useMutableSource:E_,useSyncExternalStore:T_,useId:B_,unstable_isNewReconciler:!1};function ra(n,e){try{var t="",i=e;do t+=l1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bc(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function W_(n,e,t){t=yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Lu||(Lu=!0,wd=i),dd(n,e)},t}function j_(n,e,t){t=yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dd(n,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new NS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qS.bind(null,n,e,t),e.then(n,n))}function bm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Em(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=yi(-1,1),e.tag=2,sr(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var OS=Pi.ReactCurrentOwner,Jt=!1;function Gt(n,e,t,i){e.child=n===null?M_(e,null,t,i):na(e,n.child,t,i)}function Tm(n,e,t,i,r){t=t.render;var s=e.ref;return $s(e,r),i=Oh(n,e,t,i,s,r),t=Fh(),n!==null&&!Jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ei(n,e,r)):(it&&t&&bh(e),e.flags|=1,Gt(n,e,i,r),e.child)}function Am(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,X_(n,e,s,i,r)):(n=ru(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:ho,t(a,i)&&n.ref===e.ref)return Ei(n,e,r)}return e.flags|=1,n=lr(s,i),n.ref=e.ref,n.return=e,e.child=n}function X_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ho(s,i)&&n.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Jt=!0);else return e.lanes=n.lanes,Ei(n,e,r)}return hd(n,e,t,i,r)}function Y_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Us,un),un|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ke(Us,un),un|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ke(Us,un),un|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ke(Us,un),un|=i;return Gt(n,e,r,t),e.child}function $_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hd(n,e,t,i,r){var s=tn(t)?Wr:Bt.current;return s=ea(e,s),$s(e,r),t=Oh(n,e,t,i,s,r),i=Fh(),n!==null&&!Jt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ei(n,e,r)):(it&&i&&bh(e),e.flags|=1,Gt(n,e,t,r),e.child)}function Cm(n,e,t,i,r){if(tn(t)){var s=!0;yu(e)}else s=!1;if($s(e,r),e.stateNode===null)tu(n,e),S_(e,t,i),fd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=tn(t)?Wr:Bt.current,u=ea(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&ym(e,a,i,u),$i=!1;var d=e.memoizedState;a.state=d,bu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||en.current||$i?(typeof c=="function"&&(cd(e,t,c,i),l=e.memoizedState),(o=$i||_m(e,t,o,i,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,y_(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Nn(e.type,o),a.props=u,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=tn(t)?Wr:Bt.current,l=ea(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&ym(e,a,i,l),$i=!1,d=e.memoizedState,a.state=d,bu(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||en.current||$i?(typeof p=="function"&&(cd(e,t,p,i),_=e.memoizedState),(u=$i||_m(e,t,u,i,d,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return pd(n,e,t,i,s,r)}function pd(n,e,t,i,r,s){$_(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hm(e,t,!1),Ei(n,e,s);i=e.stateNode,OS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=na(e,n.child,null,s),e.child=na(e,null,o,s)):Gt(n,e,o,s),e.memoizedState=i.state,r&&hm(e,t,!0),e.child}function q_(n){var e=n.stateNode;e.pendingContext?dm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dm(n,e.context,!1),Dh(n,e.containerInfo)}function Lm(n,e,t,i,r){return ta(),Th(r),e.flags|=256,Gt(n,e,t,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(n){return{baseLanes:n,cachePool:null,transitions:null}}function K_(n,e,t){var i=e.pendingProps,r=rt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ke(rt,r&1),n===null)return ld(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Zu(a,i,0,null),n=Br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=gd(t),e.memoizedState=md,n):Bh(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return FS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return(a&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=lr(o,s):(s=Br(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?gd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=md,i}return s=n.child,n=s.sibling,i=lr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Bh(n,e){return e=Zu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ol(n,e,t,i){return i!==null&&Th(i),na(e,n.child,null,t),n=Bh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Bc(Error(J(422))),ol(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zu({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&na(e,n.child,null,a),e.child.memoizedState=gd(a),e.memoizedState=md,s);if((e.mode&1)===0)return ol(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(J(419)),i=Bc(s,i,void 0),ol(n,e,a,i)}if(o=(a&n.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|a))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(n,r),Vn(i,n,r,-1))}return Xh(),i=Bc(Error(J(421))),ol(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,cn=rr(r.nextSibling),fn=e,it=!0,Fn=null,n!==null&&(Sn[wn++]=mi,Sn[wn++]=gi,Sn[wn++]=jr,mi=n.id,gi=n.overflow,jr=e),e=Bh(e,i.children),e.flags|=4096,e)}function Pm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),ud(n.return,e,t)}function Vc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Z_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(n,e,i.children,t),i=rt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,t,e);else if(n.tag===19)Pm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ke(rt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Eu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Vc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Eu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Vc(e,!0,t,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ei(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Yr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=lr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=lr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function zS(n,e,t){switch(e.tag){case 3:q_(e),ta();break;case 5:b_(e);break;case 1:tn(e.type)&&yu(e);break;case 4:Dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(wu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(rt,rt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?K_(n,e,t):(Ke(rt,rt.current&1),n=Ei(n,e,t),n!==null?n.sibling:null);Ke(rt,rt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Z_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,Y_(n,e,t)}return Ei(n,e,t)}var Q_,vd,J_,ey;Q_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vd=function(){};J_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Rr(Jn.current);var s=null;switch(t){case"input":r=Uf(n,r),i=Uf(n,i),s=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),s=[];break;case"textarea":r=Hf(n,r),i=Hf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=vu)}Wf(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ey=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ra(n,e){if(!it)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Nt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function US(n,e,t){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return tn(e.type)&&_u(),Nt(e),null;case 3:return i=e.stateNode,ia(),Je(en),Je(Bt),kh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(sl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Fn!==null&&(Ed(Fn),Fn=null))),vd(n,e),Nt(e),null;case 5:Ih(e);var r=Rr(_o.current);if(t=e.type,n!==null&&e.stateNode!=null)J_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Nt(e),null}if(n=Rr(Jn.current),sl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[go]=s,n=(e.mode&1)!==0,t){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Ha.length;r++)Ze(Ha[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Up(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":Vp(i,s),Ze("invalid",i)}Wf(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,o,n),r=["children",""+o]):so.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Ze("scroll",i)}switch(t){case"input":Ko(i),Bp(i,s,!0);break;case"textarea":Ko(i),Hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Av(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[$n]=e,n[go]=i,Q_(n,e,!1,!1),e.stateNode=n;e:{switch(a=jf(t,i),t){case"dialog":Ze("cancel",n),Ze("close",n),r=i;break;case"iframe":case"object":case"embed":Ze("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ha.length;r++)Ze(Ha[r],n);r=i;break;case"source":Ze("error",n),r=i;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),r=i;break;case"details":Ze("toggle",n),r=i;break;case"input":Up(n,i),r=Uf(n,i),Ze("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Ze("invalid",n);break;case"textarea":Vp(n,i),r=Hf(n,i),Ze("invalid",n);break;default:r=i}Wf(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Pv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ao(n,l):typeof l=="number"&&ao(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",n):l!=null&&ch(n,s,l,a))}switch(t){case"input":Ko(n),Bp(n,i,!1);break;case"textarea":Ko(n),Hp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+cr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=vu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(n&&e.stateNode!=null)ey(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=Rr(_o.current),Rr(Jn.current),sl(e)){if(i=e.stateNode,t=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==t)&&(n=fn,n!==null))switch(n.tag){case 3:rl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Nt(e),null;case 13:if(Je(rt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(it&&cn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)v_(),ta(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[$n]=e}else ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Fn!==null&&(Ed(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(rt.current&1)!==0?Mt===0&&(Mt=3):Xh())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return ia(),vd(n,e),n===null&&po(e.stateNode.containerInfo),Nt(e),null;case 10:return Lh(e.type._context),Nt(e),null;case 17:return tn(e.type)&&_u(),Nt(e),null;case 19:if(Je(rt),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ra(s,!1);else{if(Mt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(a=Eu(n),a!==null){for(e.flags|=128,Ra(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ke(rt,rt.current&1|2),e.child}n=n.sibling}s.tail!==null&&pt()>sa&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304)}else{if(!i)if(n=Eu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!it)return Nt(e),null}else 2*pt()-s.renderingStartTime>sa&&t!==1073741824&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,t=rt.current,Ke(rt,i?t&1|2:t&1),e):(Nt(e),null);case 22:case 23:return jh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(un&1073741824)!==0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function BS(n,e){switch(Eh(e),e.tag){case 1:return tn(e.type)&&_u(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ia(),Je(en),Je(Bt),kh(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(Je(rt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));ta()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Je(rt),null;case 4:return ia(),null;case 10:return Lh(e.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var ll=!1,zt=!1,VS=typeof WeakSet=="function"?WeakSet:Set,he=null;function zs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ut(n,e,i)}else t.current=null}function _d(n,e,t){try{t()}catch(i){ut(n,e,i)}}var Rm=!1;function HS(n,e){if(td=pu,n=r_(),Mh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(o=a),d===s&&++c===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(nd={focusedElem:n,selectionRange:t},pu=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,h=_.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?m:Nn(e.type,m),h);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){ut(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return _=Rm,Rm=!1,_}function Qa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,t,s)}r=r.next}while(r!==i)}}function qu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function yd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ty(n){var e=n.alternate;e!==null&&(n.alternate=null,ty(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[$n],delete e[go],delete e[sd],delete e[bS],delete e[ES])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ny(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ny(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vu));else if(i!==4&&(n=n.child,n!==null))for(xd(n,e,t),n=n.sibling;n!==null;)xd(n,e,t),n=n.sibling}function Sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Sd(n,e,t),n=n.sibling;n!==null;)Sd(n,e,t),n=n.sibling}var Pt=null,On=!1;function ki(n,e,t){for(t=t.child;t!==null;)iy(n,e,t),t=t.sibling}function iy(n,e,t){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Vu,t)}catch{}switch(t.tag){case 5:zt||zs(t,e);case 6:var i=Pt,r=On;Pt=null,ki(n,e,t),Pt=i,On=r,Pt!==null&&(On?(n=Pt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Pt.removeChild(t.stateNode));break;case 18:Pt!==null&&(On?(n=Pt,t=t.stateNode,n.nodeType===8?kc(n.parentNode,t):n.nodeType===1&&kc(n,t),co(n)):kc(Pt,t.stateNode));break;case 4:i=Pt,r=On,Pt=t.stateNode.containerInfo,On=!0,ki(n,e,t),Pt=i,On=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&_d(t,e,a),r=r.next}while(r!==i)}ki(n,e,t);break;case 1:if(!zt&&(zs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){ut(t,e,o)}ki(n,e,t);break;case 21:ki(n,e,t);break;case 22:t.mode&1?(zt=(i=zt)||t.memoizedState!==null,ki(n,e,t),zt=i):ki(n,e,t);break;default:ki(n,e,t)}}function Im(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new VS),e.forEach(function(i){var r=ZS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Pn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Pt=o.stateNode,On=!1;break e;case 3:Pt=o.stateNode.containerInfo,On=!0;break e;case 4:Pt=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(Pt===null)throw Error(J(160));iy(s,a,r),Pt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ry(e,n),e=e.sibling}function ry(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(e,n),jn(n),i&4){try{Qa(3,n,n.return),qu(3,n)}catch(m){ut(n,n.return,m)}try{Qa(5,n,n.return)}catch(m){ut(n,n.return,m)}}break;case 1:Pn(e,n),jn(n),i&512&&t!==null&&zs(t,t.return);break;case 5:if(Pn(e,n),jn(n),i&512&&t!==null&&zs(t,t.return),n.flags&32){var r=n.stateNode;try{ao(r,"")}catch(m){ut(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ev(r,s),jf(o,a);var u=jf(o,s);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Pv(r,f):c==="dangerouslySetInnerHTML"?Cv(r,f):c==="children"?ao(r,f):ch(r,c,f,u)}switch(o){case"input":Bf(r,s);break;case"textarea":Tv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[go]=s}catch(m){ut(n,n.return,m)}}break;case 6:if(Pn(e,n),jn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){ut(n,n.return,m)}}break;case 3:if(Pn(e,n),jn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(m){ut(n,n.return,m)}break;case 4:Pn(e,n),jn(n);break;case 13:Pn(e,n),jn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gh=pt())),i&4&&Im(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(zt=(u=zt)||c,Pn(e,n),zt=u):Pn(e,n),jn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(he=n,c=n.child;c!==null;){for(f=he=c;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qa(4,d,d.return);break;case 1:zs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){ut(i,t,m)}}break;case 5:zs(d,d.return);break;case 22:if(d.memoizedState!==null){Nm(f);continue}}p!==null?(p.return=d,he=p):Nm(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Lv("display",a))}catch(m){ut(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){ut(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,n),jn(n),i&4&&Im(n);break;case 21:break;default:Pn(e,n),jn(n)}}function jn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ny(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var s=Dm(n);Sd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Dm(n);xd(n,o,a);break;default:throw Error(J(161))}}catch(l){ut(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function GS(n,e,t){he=n,sy(n)}function sy(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ll;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=ll;var u=zt;if(ll=a,(zt=l)&&!u)for(he=r;he!==null;)a=he,l=a.child,a.tag===22&&a.memoizedState!==null?Om(r):l!==null?(l.return=a,he=l):Om(r);for(;s!==null;)he=s,sy(s),s=s.sibling;he=r,ll=o,zt=u}km(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,he=s):km(n)}}function km(n){for(;he!==null;){var e=he;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:zt||qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Nn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}zt||e.flags&512&&yd(e)}catch(d){ut(e,e.return,d)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function Nm(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function Om(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{qu(4,e)}catch(l){ut(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{yd(e)}catch(l){ut(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){ut(e,a,l)}}}catch(l){ut(e,e.return,l)}if(e===n){he=null;break}var o=e.sibling;if(o!==null){o.return=e.return,he=o;break}he=e.return}}var WS=Math.ceil,Cu=Pi.ReactCurrentDispatcher,Vh=Pi.ReactCurrentOwner,Tn=Pi.ReactCurrentBatchConfig,ze=0,Ct=null,_t=null,Dt=0,un=0,Us=gr(0),Mt=0,wo=null,Yr=0,Ku=0,Hh=0,Ja=null,Zt=null,Gh=0,sa=1/0,fi=null,Lu=!1,wd=null,ar=null,ul=!1,Qi=null,Pu=0,eo=0,Md=null,nu=-1,iu=0;function jt(){return(ze&6)!==0?pt():nu!==-1?nu:nu=pt()}function or(n){return(n.mode&1)===0?1:(ze&2)!==0&&Dt!==0?Dt&-Dt:AS.transition!==null?(iu===0&&(iu=Hv()),iu):(n=Ye,n!==0||(n=window.event,n=n===void 0?16:qv(n.type)),n)}function Vn(n,e,t,i){if(50<eo)throw eo=0,Md=null,Error(J(185));Oo(n,t,i),((ze&2)===0||n!==Ct)&&(n===Ct&&((ze&2)===0&&(Ku|=t),Mt===4&&Ki(n,Dt)),nn(n,i),t===1&&ze===0&&(e.mode&1)===0&&(sa=pt()+500,Xu&&vr()))}function nn(n,e){var t=n.callbackNode;A1(n,e);var i=hu(n,n===Ct?Dt:0);if(i===0)t!==null&&jp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jp(t),e===1)n.tag===0?TS(Fm.bind(null,n)):p_(Fm.bind(null,n)),wS(function(){(ze&6)===0&&vr()}),t=null;else{switch(Gv(i)){case 1:t=mh;break;case 4:t=Bv;break;case 16:t=du;break;case 536870912:t=Vv;break;default:t=du}t=hy(t,ay.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ay(n,e){if(nu=-1,iu=0,(ze&6)!==0)throw Error(J(327));var t=n.callbackNode;if(qs()&&n.callbackNode!==t)return null;var i=hu(n,n===Ct?Dt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Ru(n,i);else{e=i;var r=ze;ze|=2;var s=ly();(Ct!==n||Dt!==e)&&(fi=null,sa=pt()+500,Ur(n,e));do try{YS();break}catch(o){oy(n,o)}while(1);Ch(),Cu.current=s,ze=r,_t!==null?e=0:(Ct=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(r=Kf(n),r!==0&&(i=r,e=bd(n,r))),e===1)throw t=wo,Ur(n,0),Ki(n,i),nn(n,pt()),t;if(e===6)Ki(n,i);else{if(r=n.current.alternate,(i&30)===0&&!jS(r)&&(e=Ru(n,i),e===2&&(s=Kf(n),s!==0&&(i=s,e=bd(n,s))),e===1))throw t=wo,Ur(n,0),Ki(n,i),nn(n,pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:br(n,Zt,fi);break;case 3:if(Ki(n,i),(i&130023424)===i&&(e=Gh+500-pt(),10<e)){if(hu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=rd(br.bind(null,n,Zt,fi),e);break}br(n,Zt,fi);break;case 4:if(Ki(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WS(i/1960))-i,10<i){n.timeoutHandle=rd(br.bind(null,n,Zt,fi),i);break}br(n,Zt,fi);break;case 5:br(n,Zt,fi);break;default:throw Error(J(329))}}}return nn(n,pt()),n.callbackNode===t?ay.bind(null,n):null}function bd(n,e){var t=Ja;return n.current.memoizedState.isDehydrated&&(Ur(n,e).flags|=256),n=Ru(n,e),n!==2&&(e=Zt,Zt=t,e!==null&&Ed(e)),n}function Ed(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function jS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(n,e){for(e&=~Hh,e&=~Ku,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Bn(e),i=1<<t;n[t]=-1,e&=~i}}function Fm(n){if((ze&6)!==0)throw Error(J(327));qs();var e=hu(n,0);if((e&1)===0)return nn(n,pt()),null;var t=Ru(n,e);if(n.tag!==0&&t===2){var i=Kf(n);i!==0&&(e=i,t=bd(n,i))}if(t===1)throw t=wo,Ur(n,0),Ki(n,e),nn(n,pt()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,br(n,Zt,fi),nn(n,pt()),null}function Wh(n,e){var t=ze;ze|=1;try{return n(e)}finally{ze=t,ze===0&&(sa=pt()+500,Xu&&vr())}}function $r(n){Qi!==null&&Qi.tag===0&&(ze&6)===0&&qs();var e=ze;ze|=1;var t=Tn.transition,i=Ye;try{if(Tn.transition=null,Ye=1,n)return n()}finally{Ye=i,Tn.transition=t,ze=e,(ze&6)===0&&vr()}}function jh(){un=Us.current,Je(Us)}function Ur(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,SS(t)),_t!==null)for(t=_t.return;t!==null;){var i=t;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_u();break;case 3:ia(),Je(en),Je(Bt),kh();break;case 5:Ih(i);break;case 4:ia();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:Lh(i.type._context);break;case 22:case 23:jh()}t=t.return}if(Ct=n,_t=n=lr(n.current,null),Dt=un=e,Mt=0,wo=null,Hh=Ku=Yr=0,Zt=Ja=null,Pr!==null){for(e=0;e<Pr.length;e++)if(t=Pr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Pr=null}return n}function oy(n,e){do{var t=_t;try{if(Ch(),Jl.current=Au,Tu){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tu=!1}if(Xr=0,At=wt=st=null,Za=!1,yo=0,Vh.current=null,t===null||t.return===null){Mt=1,wo=e,_t=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bm(a);if(p!==null){p.flags&=-257,Em(p,a,o,s,e),p.mode&1&&Mm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if((e&1)===0){Mm(s,u,e),Xh();break e}l=Error(J(426))}}else if(it&&o.mode&1){var h=bm(a);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),Em(h,a,o,s,e),Th(ra(l,o));break e}}s=l=ra(l,o),Mt!==4&&(Mt=2),Ja===null?Ja=[s]:Ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=W_(s,l,e);gm(s,g);break e;case 1:o=l;var v=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ar===null||!ar.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=j_(s,o,e);gm(s,S);break e}}s=s.return}while(s!==null)}cy(t)}catch(x){e=x,_t===t&&t!==null&&(_t=t=t.return);continue}break}while(1)}function ly(){var n=Cu.current;return Cu.current=Au,n===null?Au:n}function Xh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||(Yr&268435455)===0&&(Ku&268435455)===0||Ki(Ct,Dt)}function Ru(n,e){var t=ze;ze|=2;var i=ly();(Ct!==n||Dt!==e)&&(fi=null,Ur(n,e));do try{XS();break}catch(r){oy(n,r)}while(1);if(Ch(),ze=t,Cu.current=i,_t!==null)throw Error(J(261));return Ct=null,Dt=0,Mt}function XS(){for(;_t!==null;)uy(_t)}function YS(){for(;_t!==null&&!_1();)uy(_t)}function uy(n){var e=dy(n.alternate,n,un);n.memoizedProps=n.pendingProps,e===null?cy(n):_t=e,Vh.current=null}function cy(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=US(t,e,un),t!==null){_t=t;return}}else{if(t=BS(t,e),t!==null){t.flags&=32767,_t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mt=6,_t=null;return}}if(e=e.sibling,e!==null){_t=e;return}_t=e=n}while(e!==null);Mt===0&&(Mt=5)}function br(n,e,t){var i=Ye,r=Tn.transition;try{Tn.transition=null,Ye=1,$S(n,e,t,i)}finally{Tn.transition=r,Ye=i}return null}function $S(n,e,t,i){do qs();while(Qi!==null);if((ze&6)!==0)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(C1(n,s),n===Ct&&(_t=Ct=null,Dt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ul||(ul=!0,hy(du,function(){return qs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Tn.transition,Tn.transition=null;var a=Ye;Ye=1;var o=ze;ze|=4,Vh.current=null,HS(n,t),ry(t,n),pS(nd),pu=!!td,nd=td=null,n.current=t,GS(t),y1(),ze=o,Ye=a,Tn.transition=s}else n.current=t;if(ul&&(ul=!1,Qi=n,Pu=r),s=n.pendingLanes,s===0&&(ar=null),w1(t.stateNode),nn(n,pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lu)throw Lu=!1,n=wd,wd=null,n;return(Pu&1)!==0&&n.tag!==0&&qs(),s=n.pendingLanes,(s&1)!==0?n===Md?eo++:(eo=0,Md=n):eo=0,vr(),null}function qs(){if(Qi!==null){var n=Gv(Pu),e=Tn.transition,t=Ye;try{if(Tn.transition=null,Ye=16>n?16:n,Qi===null)var i=!1;else{if(n=Qi,Qi=null,Pu=0,(ze&6)!==0)throw Error(J(331));var r=ze;for(ze|=4,he=n.current;he!==null;){var s=he,a=s.child;if((he.flags&16)!==0){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Qa(8,c,s)}var f=c.child;if(f!==null)f.return=c,he=f;else for(;he!==null;){c=he;var d=c.sibling,p=c.return;if(ty(c),c===u){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var h=m.sibling;m.sibling=null,m=h}while(m!==null)}}he=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,he=g;break e}he=s.return}}var v=n.current;for(he=v;he!==null;){a=he;var y=a.child;if((a.subtreeFlags&2064)!==0&&y!==null)y.return=a,he=y;else e:for(a=v;he!==null;){if(o=he,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:qu(9,o)}}catch(x){ut(o,o.return,x)}if(o===a){he=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,he=S;break e}he=o.return}}if(ze=r,vr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Vu,n)}catch{}i=!0}return i}finally{Ye=t,Tn.transition=e}}return!1}function zm(n,e,t){e=ra(t,e),e=W_(n,e,1),n=sr(n,e,1),e=jt(),n!==null&&(Oo(n,1,e),nn(n,e))}function ut(n,e,t){if(n.tag===3)zm(n,n,t);else for(;e!==null;){if(e.tag===3){zm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){n=ra(t,n),n=j_(e,n,1),e=sr(e,n,1),n=jt(),e!==null&&(Oo(e,1,n),nn(e,n));break}}e=e.return}}function qS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=jt(),n.pingedLanes|=n.suspendedLanes&t,Ct===n&&(Dt&t)===t&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>pt()-Gh?Ur(n,0):Hh|=t),nn(n,e)}function fy(n,e){e===0&&((n.mode&1)===0?e=1:(e=Jo,Jo<<=1,(Jo&130023424)===0&&(Jo=4194304)));var t=jt();n=bi(n,e),n!==null&&(Oo(n,e,t),nn(n,t))}function KS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),fy(n,t)}function ZS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),fy(n,t)}var dy;dy=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Jt=!1,zS(n,e,t);Jt=(n.flags&131072)!==0}else Jt=!1,it&&(e.flags&1048576)!==0&&m_(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tu(n,e),n=e.pendingProps;var r=ea(e,Bt.current);$s(e,t),r=Oh(null,e,i,n,r,t);var s=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,yu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rh(e),r.updater=Yu,e.stateNode=r,r._reactInternals=e,fd(e,i,n,t),e=pd(null,e,i,!0,s,t)):(e.tag=0,it&&s&&bh(e),Gt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(tu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JS(i),n=Nn(i,n),r){case 0:e=hd(null,e,i,n,t);break e;case 1:e=Cm(null,e,i,n,t);break e;case 11:e=Tm(null,e,i,n,t);break e;case 14:e=Am(null,e,i,Nn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Cm(n,e,i,r,t);case 3:e:{if(q_(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y_(n,e),bu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ra(Error(J(423)),e),e=Lm(n,e,i,t,r);break e}else if(i!==r){r=ra(Error(J(424)),e),e=Lm(n,e,i,t,r);break e}else for(cn=rr(e.stateNode.containerInfo.firstChild),fn=e,it=!0,Fn=null,t=M_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ta(),i===r){e=Ei(n,e,t);break e}Gt(n,e,i,t)}e=e.child}return e;case 5:return b_(e),n===null&&ld(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,id(i,r)?a=null:s!==null&&id(i,s)&&(e.flags|=32),$_(n,e),Gt(n,e,a,t),e.child;case 6:return n===null&&ld(e),null;case 13:return K_(n,e,t);case 4:return Dh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=na(e,null,i,t):Gt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Tm(n,e,i,r,t);case 7:return Gt(n,e,e.pendingProps,t),e.child;case 8:return Gt(n,e,e.pendingProps.children,t),e.child;case 12:return Gt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Ke(wu,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!en.current){e=Ei(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ud(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(J(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),ud(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Gt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,t),r=Cn(r),i=i(r),e.flags|=1,Gt(n,e,i,t),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Am(n,e,i,r,t);case 15:return X_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),tu(n,e),e.tag=1,tn(i)?(n=!0,yu(e)):n=!1,$s(e,t),S_(e,i,r),fd(e,i,r,t),pd(null,e,i,!0,n,t);case 19:return Z_(n,e,t);case 22:return Y_(n,e,t)}throw Error(J(156,e.tag))};function hy(n,e){return Uv(n,e)}function QS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(n,e,t,i){return new QS(n,e,t,i)}function Yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JS(n){if(typeof n=="function")return Yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===dh)return 11;if(n===hh)return 14}return 2}function lr(n,e){var t=n.alternate;return t===null?(t=bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ru(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Yh(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ls:return Br(t.children,r,s,e);case fh:a=8,r|=8;break;case Nf:return n=bn(12,t,e,r|2),n.elementType=Nf,n.lanes=s,n;case Of:return n=bn(13,t,e,r),n.elementType=Of,n.lanes=s,n;case Ff:return n=bn(19,t,e,r),n.elementType=Ff,n.lanes=s,n;case wv:return Zu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xv:a=10;break e;case Sv:a=9;break e;case dh:a=11;break e;case hh:a=14;break e;case Yi:a=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=bn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Br(n,e,t,i){return n=bn(7,n,i,e),n.lanes=t,n}function Zu(n,e,t,i){return n=bn(22,n,i,e),n.elementType=wv,n.lanes=t,n.stateNode={isHidden:!1},n}function Hc(n,e,t){return n=bn(6,n,null,e),n.lanes=t,n}function Gc(n,e,t){return e=bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ew(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $h(n,e,t,i,r,s,a,o,l){return n=new ew(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(s),n}function tw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function py(n){if(!n)return fr;n=n._reactInternals;e:{if(rs(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(tn(t))return h_(n,t,e)}return e}function my(n,e,t,i,r,s,a,o,l){return n=$h(t,i,!0,n,r,s,a,o,l),n.context=py(null),t=n.current,i=jt(),r=or(t),s=yi(i,r),s.callback=e!=null?e:null,sr(t,s,r),n.current.lanes=r,Oo(n,r,i),nn(n,i),n}function Qu(n,e,t,i){var r=e.current,s=jt(),a=or(r);return t=py(t),e.context===null?e.context=t:e.pendingContext=t,e=yi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=sr(r,e,a),n!==null&&(Vn(n,r,a,s),Ql(n,r,a)),a}function Du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function qh(n,e){Um(n,e),(n=n.alternate)&&Um(n,e)}function nw(){return null}var gy=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kh(n){this._internalRoot=n}Ju.prototype.render=Kh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));Qu(n,e,null,null)};Ju.prototype.unmount=Kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$r(function(){Qu(null,n,null,null)}),e[Mi]=null}};function Ju(n){this._internalRoot=n}Ju.prototype.unstable_scheduleHydration=function(n){if(n){var e=Xv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<qi.length&&e!==0&&e<qi[t].priority;t++);qi.splice(t,0,n),t===0&&$v(n)}};function Zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function iw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Du(a);s.call(u)}}var a=my(e,i,n,0,null,!1,!1,"",Bm);return n._reactRootContainer=a,n[Mi]=a.current,po(n.nodeType===8?n.parentNode:n),$r(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Du(l);o.call(u)}}var l=$h(n,0,!1,null,null,!1,!1,"",Bm);return n._reactRootContainer=l,n[Mi]=l.current,po(n.nodeType===8?n.parentNode:n),$r(function(){Qu(e,l,t,i)}),l}function tc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Du(a);o.call(l)}}Qu(e,a,n,r)}else a=iw(t,e,n,r,i);return Du(a)}Wv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Va(e.pendingLanes);t!==0&&(gh(e,t|1),nn(e,pt()),(ze&6)===0&&(sa=pt()+500,vr()))}break;case 13:$r(function(){var i=bi(n,1);if(i!==null){var r=jt();Vn(i,n,1,r)}}),qh(n,1)}};vh=function(n){if(n.tag===13){var e=bi(n,134217728);if(e!==null){var t=jt();Vn(e,n,134217728,t)}qh(n,134217728)}};jv=function(n){if(n.tag===13){var e=or(n),t=bi(n,e);if(t!==null){var i=jt();Vn(t,n,e,i)}qh(n,e)}};Xv=function(){return Ye};Yv=function(n,e){var t=Ye;try{return Ye=n,e()}finally{Ye=t}};Yf=function(n,e,t){switch(e){case"input":if(Bf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ju(i);if(!r)throw Error(J(90));bv(i),Bf(i,r)}}}break;case"textarea":Tv(n,t);break;case"select":e=t.value,e!=null&&Ws(n,!!t.multiple,e,!1)}};Iv=Wh;kv=$r;var rw={usingClientEntryPoint:!1,Events:[zo,Is,ju,Rv,Dv,Wh]},Da={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sw={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fv(n),n===null?null:n.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Vu=cl.inject(sw),Qn=cl}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(e))throw Error(J(200));return tw(n,e,null,t)};pn.createRoot=function(n,e){if(!Zh(n))throw Error(J(299));var t=!1,i="",r=gy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$h(n,1,!1,null,null,t,!1,i,r),n[Mi]=e.current,po(n.nodeType===8?n.parentNode:n),new Kh(e)};pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Fv(e),n=n===null?null:n.stateNode,n};pn.flushSync=function(n){return $r(n)};pn.hydrate=function(n,e,t){if(!ec(e))throw Error(J(200));return tc(null,n,e,!0,t)};pn.hydrateRoot=function(n,e,t){if(!Zh(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=gy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=my(e,null,n,1,t!=null?t:null,r,!1,s,a),n[Mi]=e.current,po(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ju(e)};pn.render=function(n,e,t){if(!ec(e))throw Error(J(200));return tc(null,n,e,!1,t)};pn.unmountComponentAtNode=function(n){if(!ec(n))throw Error(J(40));return n._reactRootContainer?($r(function(){tc(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1};pn.unstable_batchedUpdates=Wh;pn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ec(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return tc(n,e,t,!1,i)};pn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=pn})(mv);var Vm=mv.exports;If.createRoot=Vm.createRoot,If.hydrateRoot=Vm.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="144",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aw=0,Hm=1,ow=2,vy=1,lw=2,Ga=3,qr=0,An=1,vi=2,ur=0,Ks=1,Gm=2,Wm=3,jm=4,uw=5,As=100,cw=101,fw=102,Xm=103,Ym=104,dw=200,hw=201,pw=202,mw=203,_y=204,yy=205,gw=206,vw=207,_w=208,yw=209,xw=210,Sw=0,ww=1,Mw=2,Td=3,bw=4,Ew=5,Tw=6,Aw=7,xy=0,Cw=1,Lw=2,xi=0,Pw=1,Rw=2,Dw=3,Iw=4,kw=5,Sy=300,aa=301,oa=302,Ad=303,Cd=304,nc=306,la=1e3,Mn=1001,Iu=1002,Rt=1003,Ld=1004,Pd=1005,Qt=1006,wy=1007,va=1008,Kr=1009,Nw=1010,Ow=1011,My=1012,Fw=1013,Dr=1014,Ji=1015,Mo=1016,zw=1017,Uw=1018,Zs=1020,Bw=1021,Vw=1022,zn=1023,Hw=1024,Gw=1025,Vr=1026,ua=1027,Ww=1028,jw=1029,Xw=1030,Yw=1031,$w=1033,Wc=33776,jc=33777,Xc=33778,Yc=33779,$m=35840,qm=35841,Km=35842,Zm=35843,qw=36196,Qm=37492,Jm=37496,eg=37808,tg=37809,ng=37810,ig=37811,rg=37812,sg=37813,ag=37814,og=37815,lg=37816,ug=37817,cg=37818,fg=37819,dg=37820,hg=37821,pg=36492,bo=2300,ca=2301,$c=2302,mg=2400,gg=2401,vg=2402,Kw=2500,Zw=1,by=2,Zr=3e3,je=3001,Qw=3200,Jw=3201,Jh=0,eM=1,di="srgb",Ir="srgb-linear",qc=7680,tM=519,Rd=35044,_g="300 es",Dd=1035;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yg=1234567;const to=Math.PI/180,Eo=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function ep(n,e){return(n%e+e)%e}function nM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function iM(n,e,t){return n!==e?(t-n)/(e-n):0}function no(n,e,t){return(1-t)*n+t*e}function rM(n,e,t,i){return no(n,e,1-Math.exp(-t*i))}function sM(n,e=1){return e-Math.abs(ep(n,e*2)-e)}function aM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function oM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uM(n,e){return n+Math.random()*(e-n)}function cM(n){return n*(.5-Math.random())}function fM(n){n!==void 0&&(yg=n);let e=yg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dM(n){return n*to}function hM(n){return n*Eo}function Id(n){return(n&n-1)===0&&n!==0}function Ey(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ku(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pM(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mM=Object.freeze({__proto__:null,DEG2RAD:to,RAD2DEG:Eo,generateUUID:Hn,clamp:Ut,euclideanModulo:ep,mapLinear:nM,inverseLerp:iM,lerp:no,damp:rM,pingpong:sM,smoothstep:aM,smootherstep:oM,randInt:lM,randFloat:uM,randFloatSpread:cM,seededRandom:fM,degToRad:dM,radToDeg:hM,isPowerOfTwo:Id,ceilPowerOfTwo:Ey,floorPowerOfTwo:ku,setQuaternionFromProperEuler:pM,normalize:$e,denormalize:_i});class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class En{constructor(){En.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],m=r[0],h=r[3],g=r[6],v=r[1],y=r[4],S=r[7],x=r[2],T=r[5],L=r[8];return s[0]=a*m+o*v+l*x,s[3]=a*h+o*y+l*T,s[6]=a*g+o*S+l*L,s[1]=u*m+c*v+f*x,s[4]=u*h+c*y+f*T,s[7]=u*g+c*S+f*L,s[2]=d*m+p*v+_*x,s[5]=d*h+p*y+_*T,s[8]=d*g+p*S+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,p=u*s-a*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(o*i-r*a)*m,e[3]=d*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*u,r[6]=t*o+i*c,r[1]=-i*s+t*l,r[4]=-i*a+t*u,r[7]=-i*o+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ty(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function su(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Kc={[di]:{[Ir]:Hr},[Ir]:{[di]:su}},Rn={legacyMode:!0,get workingColorSpace(){return Ir},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Kc[e]&&Kc[e][t]!==void 0){const i=Kc[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Dn={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function dl(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ir){return this.r=e,this.g=t,this.b=i,Rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ir){if(e=ep(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return Rn.toWorkingColorSpace(this,r),this}setStyle(e,t=di){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=di){const i=Ay[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=su(e.r),this.g=su(e.g),this.b=su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Rn.fromWorkingColorSpace(dl(this,St),e),Ut(St.r*255,0,255)<<16^Ut(St.g*255,0,255)<<8^Ut(St.b*255,0,255)<<0}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ir){Rn.fromWorkingColorSpace(dl(this,St),t);const i=St.r,r=St.g,s=St.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ir){return Rn.fromWorkingColorSpace(dl(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=di){return Rn.fromWorkingColorSpace(dl(this,St),e),e!==di?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Dn),Dn.h+=e,Dn.s+=t,Dn.l+=i,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(fl);const i=no(Dn.h,fl.h,t),r=no(Dn.s,fl.s,t),s=no(Dn.l,fl.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=Ay;let hs;class Cy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=To("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hr(t[i]/255)*255):t[i]=Hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ly{constructor(e=null){this.isSource=!0,this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qc(r[a].image)):s.push(Qc(r[a]))}else s=Qc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class Xt extends ss{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Mn,r=Mn,s=Qt,a=va,o=zn,l=Kr,u=1,c=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Hn(),this.name="",this.source=new Ly(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new En,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Sy;class qe{constructor(e=0,t=0,i=0,r=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],m=l[2],h=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-m)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+m)<.1&&Math.abs(_+h)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(p+1)/2,x=(g+1)/2,T=(c+d)/4,L=(f+m)/4,w=(_+h)/4;return y>S&&y>x?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=L/i):S>x?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=w/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=L/s,r=w/s),this.set(i,r,s,t),this}let v=Math.sqrt((h-_)*(h-_)+(f-m)*(f-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(f-m)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qr extends ss{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ly(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Py extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vM extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==d||u!==p||c!==_){let h=1-o;const g=l*d+u*p+c*_+f*m,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const x=Math.sqrt(y),T=Math.atan2(x,g*v);h=Math.sin(h*T)/x,o=Math.sin(o*T)/x}const S=o*v;if(l=l*h+d*S,u=u*h+p*S,c=c*h+_*S,f=f*h+m*S,h===1-o){const x=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=x,u*=x,c*=x,f*=x}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-o*p,e[t+2]=u*_+c*p+o*d-l*f,e[t+3]=c*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*r-o*i,c=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=u*l+d*-s+c*-o-f*-a,this.y=c*l+d*-a+f*-s-u*-o,this.z=f*l+d*-o+u*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new R,xg=new Ti;class _a{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)xr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(xr)}else i.boundingBox===null&&i.computeBoundingBox(),ef.copy(i.boundingBox),ef.applyMatrix4(e.matrixWorld),this.union(ef);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),hl.subVectors(this.max,Ia),ps.subVectors(e.a,Ia),ms.subVectors(e.b,Ia),gs.subVectors(e.c,Ia),Ni.subVectors(ms,ps),Oi.subVectors(gs,ms),Sr.subVectors(ps,gs);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-Sr.z,Sr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,Sr.z,0,-Sr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-Sr.y,Sr.x,0];return!tf(t,ps,ms,gs,hl)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,ps,ms,gs,hl))?!1:(pl.crossVectors(Ni,Oi),t=[pl.x,pl.y,pl.z],tf(t,ps,ms,gs,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new R,new R,new R,new R,new R,new R,new R,new R],xr=new R,ef=new _a,ps=new R,ms=new R,gs=new R,Ni=new R,Oi=new R,Sr=new R,Ia=new R,hl=new R,pl=new R,wr=new R;function tf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),u=t.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const _M=new _a,Sg=new R,ml=new R,nf=new R;class ya{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){nf.subVectors(e,this.center);const t=nf.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(nf.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ml.set(0,0,1).multiplyScalar(e.radius):ml.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sg.copy(e.center).add(ml)),this.expandByPoint(Sg.copy(e.center).sub(ml)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new R,rf=new R,gl=new R,Fi=new R,sf=new R,vl=new R,af=new R;class tp{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.direction).multiplyScalar(t).add(this.origin),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rf.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(rf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gl),o=Fi.dot(this.direction),l=-Fi.dot(gl),u=Fi.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const m=1/c;f*=m,d*=m,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(gl).multiplyScalar(d).add(rf),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,r,s){sf.subVectors(t,e),vl.subVectors(i,e),af.crossVectors(sf,vl);let a=this.direction.dot(af),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(vl.crossVectors(Fi,vl));if(l<0)return null;const u=o*this.direction.dot(sf.cross(Fi));if(u<0||l+u>a)return null;const c=-o*Fi.dot(af);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,u,c,f,d,p,_,m,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=p,g[7]=_,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*f,_=o*c,m=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-m*u,t[9]=-o*l,t[2]=m-d*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d+m*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d-m*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=m-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*f,_=o*c,m=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+m,t[1]=l*f,t[5]=m*u+d,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,m=o*u;t[0]=l*c,t[4]=m-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,m=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+m,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,xM)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),zi.crossVectors(i,on),zi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),zi.crossVectors(i,on)),zi.normalize(),_l.crossVectors(on,zi),r[0]=zi.x,r[4]=_l.x,r[8]=on.x,r[1]=zi.y,r[5]=_l.y,r[9]=on.y,r[2]=zi.z,r[6]=_l.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],m=i[6],h=i[10],g=i[14],v=i[3],y=i[7],S=i[11],x=i[15],T=r[0],L=r[4],w=r[8],C=r[12],D=r[1],X=r[5],te=r[9],U=r[13],O=r[2],W=r[6],K=r[10],Z=r[14],k=r[3],P=r[7],N=r[11],$=r[15];return s[0]=a*T+o*D+l*O+u*k,s[4]=a*L+o*X+l*W+u*P,s[8]=a*w+o*te+l*K+u*N,s[12]=a*C+o*U+l*Z+u*$,s[1]=c*T+f*D+d*O+p*k,s[5]=c*L+f*X+d*W+p*P,s[9]=c*w+f*te+d*K+p*N,s[13]=c*C+f*U+d*Z+p*$,s[2]=_*T+m*D+h*O+g*k,s[6]=_*L+m*X+h*W+g*P,s[10]=_*w+m*te+h*K+g*N,s[14]=_*C+m*U+h*Z+g*$,s[3]=v*T+y*D+S*O+x*k,s[7]=v*L+y*X+S*W+x*P,s[11]=v*w+y*te+S*K+x*N,s[15]=v*C+y*U+S*Z+x*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],m=e[7],h=e[11],g=e[15];return _*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*p-i*l*p)+m*(+t*l*p-t*u*d+s*a*d-r*a*p+r*u*c-s*l*c)+h*(+t*u*f-t*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+g*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],m=e[13],h=e[14],g=e[15],v=f*h*u-m*d*u+m*l*p-o*h*p-f*l*g+o*d*g,y=_*d*u-c*h*u-_*l*p+a*h*p+c*l*g-a*d*g,S=c*m*u-_*f*u+_*o*p-a*m*p-c*o*g+a*f*g,x=_*f*l-c*m*l-_*o*d+a*m*d+c*o*h-a*f*h,T=t*v+i*y+r*S+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(m*d*s-f*h*s-m*r*p+i*h*p+f*r*g-i*d*g)*L,e[2]=(o*h*s-m*l*s+m*r*u-i*h*u-o*r*g+i*l*g)*L,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*p-i*l*p)*L,e[4]=y*L,e[5]=(c*h*s-_*d*s+_*r*p-t*h*p-c*r*g+t*d*g)*L,e[6]=(_*l*s-a*h*s-_*r*u+t*h*u+a*r*g-t*l*g)*L,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*p+t*l*p)*L,e[8]=S*L,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*g-t*f*g)*L,e[10]=(a*m*s-_*o*s+_*i*u-t*m*u-a*i*g+t*o*g)*L,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*L,e[12]=x*L,e[13]=(c*m*r-_*f*r+_*i*d-t*m*d-c*i*h+t*f*h)*L,e[14]=(_*o*r-a*m*r-_*i*l+t*m*l+a*i*h-t*o*h)*L,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,p=s*c,_=s*f,m=a*c,h=a*f,g=o*f,v=l*u,y=l*c,S=l*f,x=i.x,T=i.y,L=i.z;return r[0]=(1-(m+g))*x,r[1]=(p+S)*x,r[2]=(_-y)*x,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+g))*T,r[6]=(h+v)*T,r[7]=0,r[8]=(_+y)*L,r[9]=(h-v)*L,r[10]=(1-(d+m))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const a=vs.set(r[4],r[5],r[6]).length(),o=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,c=1/a,f=1/o;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=c,In.elements[5]*=c,In.elements[6]*=c,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),u=1/(i-r),c=1/(a-s),f=(t+e)*l,d=(i+r)*u,p=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new R,In=new Be,yM=new R(0,0,0),xM=new R(1,1,1),zi=new R,_l=new R,on=new R,wg=new Be,Mg=new Ti;class Bo{constructor(e=0,t=0,i=0,r=Bo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bo.DefaultOrder="XYZ";Bo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SM=0;const bg=new R,_s=new Ti,ai=new Be,yl=new R,ka=new R,wM=new R,MM=new Ti,Eg=new R(1,0,0),Tg=new R(0,1,0),Ag=new R(0,0,1),bM={type:"added"},Cg={type:"removed"};class dt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();const e=new R,t=new Bo,i=new Ti,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new En}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DefaultMatrixWorldAutoUpdate,this.layers=new Ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,t){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yl.copy(e):yl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ka,yl,this.up):ai.lookAt(yl,ka,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(ai),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DefaultUp=new R(0,1,0);dt.DefaultMatrixAutoUpdate=!0;dt.DefaultMatrixWorldAutoUpdate=!0;const kn=new R,oi=new R,of=new R,li=new R,ys=new R,xs=new R,Lg=new R,lf=new R,uf=new R,cf=new R;class pi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),oi.subVectors(i,t),of.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(oi),l=kn.dot(of),u=oi.dot(oi),c=oi.dot(of),f=a*u-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,li),l.set(0,0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),oi.subVectors(e,t),kn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return pi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,i),xs.subVectors(s,i),lf.subVectors(e,i);const l=ys.dot(lf),u=xs.dot(lf);if(l<=0&&u<=0)return t.copy(i);uf.subVectors(e,r);const c=ys.dot(uf),f=xs.dot(uf);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ys,a);cf.subVectors(e,s);const p=ys.dot(cf),_=xs.dot(cf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(xs,o);const h=c*_-p*f;if(h<=0&&f-c>=0&&p-_>=0)return Lg.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(Lg,o);const g=1/(h+m+d);return a=m*g,o=d*g,t.copy(i).addScaledVector(ys,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let EM=0;class ei extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Ks,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_y,this.blendDst=yy,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Td,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==qr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new R,xl=new Ee;class dn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Rd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dy extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Iy extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let TM=0;const xn=new Be,ff=new dt,Ss=new R,ln=new _a,Na=new _a,Tt=new R;class ti extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ty(e)?Iy:Dy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new En().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(ln.min,Na.min),ln.expandByPoint(Tt),Tt.addVectors(ln.max,Na.max),ln.expandByPoint(Tt)):(ln.expandByPoint(Na.min),ln.expandByPoint(Na.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Tt.fromBufferAttribute(o,u),l&&(Ss.fromBufferAttribute(e,u),Tt.add(Ss)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<o;D++)u[D]=new R,c[D]=new R;const f=new R,d=new R,p=new R,_=new Ee,m=new Ee,h=new Ee,g=new R,v=new R;function y(D,X,te){f.fromArray(r,D*3),d.fromArray(r,X*3),p.fromArray(r,te*3),_.fromArray(a,D*2),m.fromArray(a,X*2),h.fromArray(a,te*2),d.sub(f),p.sub(f),m.sub(_),h.sub(_);const U=1/(m.x*h.y-h.x*m.y);!isFinite(U)||(g.copy(d).multiplyScalar(h.y).addScaledVector(p,-m.y).multiplyScalar(U),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(U),u[D].add(g),u[X].add(g),u[te].add(g),c[D].add(v),c[X].add(v),c[te].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,X=S.length;D<X;++D){const te=S[D],U=te.start,O=te.count;for(let W=U,K=U+O;W<K;W+=3)y(i[W+0],i[W+1],i[W+2])}const x=new R,T=new R,L=new R,w=new R;function C(D){L.fromArray(s,D*3),w.copy(L);const X=u[D];x.copy(X),x.sub(L.multiplyScalar(L.dot(X))).normalize(),T.crossVectors(w,X);const U=T.dot(c[D])<0?-1:1;l[D*4]=x.x,l[D*4+1]=x.y,l[D*4+2]=x.z,l[D*4+3]=U}for(let D=0,X=S.length;D<X;++D){const te=S[D],U=te.start,O=te.count;for(let W=U,K=U+O;W<K;W+=3)C(i[W+0]),C(i[W+1]),C(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,u=new R,c=new R,f=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),m=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,h),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,h),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,h=l.length;m<h;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*c;for(let g=0;g<c;g++)d[_++]=u[p++]}return new dn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new Be,ws=new tp,df=new ya,Ui=new R,Bi=new R,Vi=new R,hf=new R,pf=new R,mf=new R,Sl=new R,wl=new R,Ml=new R,bl=new Ee,El=new Ee,Tl=new Ee,gf=new R,Al=new R;class qn extends dt{constructor(e=new ti,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),df.copy(i.boundingSphere),df.applyMatrix4(s),e.ray.intersectsSphere(df)===!1)||(Pg.copy(s).invert(),ws.copy(e.ray).applyMatrix4(Pg),i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,p=i.groups,_=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const g=p[m],v=r[g.materialIndex],y=Math.max(g.start,_.start),S=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let x=y,T=S;x<T;x+=3){const L=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);a=Cl(this,v,e,ws,l,u,c,f,d,L,w,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const m=Math.max(0,_.start),h=Math.min(o.count,_.start+_.count);for(let g=m,v=h;g<v;g+=3){const y=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);a=Cl(this,r,e,ws,l,u,c,f,d,y,S,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,h=p.length;m<h;m++){const g=p[m],v=r[g.materialIndex],y=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let x=y,T=S;x<T;x+=3){const L=x,w=x+1,C=x+2;a=Cl(this,v,e,ws,l,u,c,f,d,L,w,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const m=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let g=m,v=h;g<v;g+=3){const y=g,S=g+1,x=g+2;a=Cl(this,r,e,ws,l,u,c,f,d,y,S,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function AM(n,e,t,i,r,s,a,o){let l;if(e.side===An?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==vi,o),l===null)return null;Al.copy(o),Al.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Al);return u<t.near||u>t.far?null:{distance:u,point:Al.clone(),object:n}}function Cl(n,e,t,i,r,s,a,o,l,u,c,f){Ui.fromBufferAttribute(r,u),Bi.fromBufferAttribute(r,c),Vi.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){Sl.set(0,0,0),wl.set(0,0,0),Ml.set(0,0,0);for(let _=0,m=s.length;_<m;_++){const h=d[_],g=s[_];h!==0&&(hf.fromBufferAttribute(g,u),pf.fromBufferAttribute(g,c),mf.fromBufferAttribute(g,f),a?(Sl.addScaledVector(hf,h),wl.addScaledVector(pf,h),Ml.addScaledVector(mf,h)):(Sl.addScaledVector(hf.sub(Ui),h),wl.addScaledVector(pf.sub(Bi),h),Ml.addScaledVector(mf.sub(Vi),h)))}Ui.add(Sl),Bi.add(wl),Vi.add(Ml)}n.isSkinnedMesh&&(n.boneTransform(u,Ui),n.boneTransform(c,Bi),n.boneTransform(f,Vi));const p=AM(n,e,t,i,Ui,Bi,Vi,gf);if(p){o&&(bl.fromBufferAttribute(o,u),El.fromBufferAttribute(o,c),Tl.fromBufferAttribute(o,f),p.uv=pi.getUV(gf,Ui,Bi,Vi,bl,El,Tl,new Ee)),l&&(bl.fromBufferAttribute(l,u),El.fromBufferAttribute(l,c),Tl.fromBufferAttribute(l,f),p.uv2=pi.getUV(gf,Ui,Bi,Vi,bl,El,Tl,new Ee));const _={a:u,b:c,c:f,normal:new R,materialIndex:0};pi.getNormal(Ui,Bi,Vi,_.normal),p.face=_}return p}class Vo extends ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(u,3)),this.setAttribute("normal",new Si(c,3)),this.setAttribute("uv",new Si(f,2));function _(m,h,g,v,y,S,x,T,L,w,C){const D=S/L,X=x/w,te=S/2,U=x/2,O=T/2,W=L+1,K=w+1;let Z=0,k=0;const P=new R;for(let N=0;N<K;N++){const $=N*X-U;for(let Y=0;Y<W;Y++){const Q=Y*D-te;P[m]=Q*v,P[h]=$*y,P[g]=O,u.push(P.x,P.y,P.z),P[m]=0,P[h]=0,P[g]=T>0?1:-1,c.push(P.x,P.y,P.z),f.push(Y/L),f.push(1-N/w),Z+=1}}for(let N=0;N<w;N++)for(let $=0;$<L;$++){const Y=d+$+W*N,Q=d+$+W*(N+1),ue=d+($+1)+W*(N+1),_e=d+($+1)+W*N;l.push(Y,Q,_e),l.push(Q,ue,_e),k+=6}o.addGroup(p,k,C),p+=k,d+=Z}}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=fa(n[t]);for(const r in i)e[r]=i[r]}return e}function CM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const LM={clone:fa,merge:Ft};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ky extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends ky{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=90,bs=1;class DM extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Wt(Ms,bs,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Wt(Ms,bs,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new Wt(Ms,bs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new Wt(Ms,bs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Wt(Ms,bs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const u=new Wt(Ms,bs,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ny extends Xt{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:aa,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IM extends Qr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ny(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vo(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:ur});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===va&&(t.minFilter=Qt),new DM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const vf=new R,kM=new R,NM=new En;class Er{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vf.subVectors(i,t).cross(kM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NM.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new ya,Ll=new R;class np{constructor(e=new Er,t=new Er,i=new Er,r=new Er,s=new Er,a=new Er){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],h=i[12],g=i[13],v=i[14],y=i[15];return t[0].setComponents(o-r,f-l,m-d,y-h).normalize(),t[1].setComponents(o+r,f+l,m+d,y+h).normalize(),t[2].setComponents(o+s,f+u,m+p,y+g).normalize(),t[3].setComponents(o-s,f-u,m-p,y-g).normalize(),t[4].setComponents(o-a,f-c,m-_,y-v).normalize(),t[5].setComponents(o+a,f+c,m+_,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oy(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function OM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;n.bindBuffer(f,u),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:a,remove:o,update:l}}class ip extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,p=[],_=[],m=[],h=[];for(let g=0;g<c;g++){const v=g*d-a;for(let y=0;y<u;y++){const S=y*f-s;_.push(S,-v,0),m.push(0,0,1),h.push(y/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const y=v+u*g,S=v+u*(g+1),x=v+1+u*(g+1),T=v+1+u*g;p.push(y,S,T),p.push(S,x,T)}this.setIndex(p),this.setAttribute("position",new Si(_,3)),this.setAttribute("normal",new Si(m,3)),this.setAttribute("uv",new Si(h,2))}static fromJSON(e){return new ip(e.width,e.height,e.widthSegments,e.heightSegments)}}var FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM="vec3 transformed = vec3( position );",WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Db=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ib=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ob=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$b=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Zb=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,CE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,LE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,PE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,RE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,DE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,IE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:FM,alphamap_pars_fragment:zM,alphatest_fragment:UM,alphatest_pars_fragment:BM,aomap_fragment:VM,aomap_pars_fragment:HM,begin_vertex:GM,beginnormal_vertex:WM,bsdfs:jM,iridescence_fragment:XM,bumpmap_pars_fragment:YM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:ZM,color_fragment:QM,color_pars_fragment:JM,color_pars_vertex:eb,color_vertex:tb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ab,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,encodings_fragment:ub,encodings_pars_fragment:cb,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:hb,envmap_pars_vertex:pb,envmap_physical_pars_fragment:Tb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:vb,fog_fragment:_b,fog_pars_fragment:yb,gradientmap_pars_fragment:xb,lightmap_fragment:Sb,lightmap_pars_fragment:wb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:bb,lights_pars_begin:Eb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Cb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Rb,lights_physical_pars_fragment:Db,lights_fragment_begin:Ib,lights_fragment_maps:kb,lights_fragment_end:Nb,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:zb,logdepthbuf_vertex:Ub,map_fragment:Bb,map_pars_fragment:Vb,map_particle_fragment:Hb,map_particle_pars_fragment:Gb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:jb,morphcolor_vertex:Xb,morphnormal_vertex:Yb,morphtarget_pars_vertex:$b,morphtarget_vertex:qb,normal_fragment_begin:Kb,normal_fragment_maps:Zb,normal_pars_fragment:Qb,normal_pars_vertex:Jb,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,output_fragment:aE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:uE,dithering_fragment:cE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:vE,skinbase_vertex:_E,skinning_pars_vertex:yE,skinning_vertex:xE,skinnormal_vertex:SE,specularmap_fragment:wE,specularmap_pars_fragment:ME,tonemapping_fragment:bE,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:CE,uv_pars_vertex:LE,uv_vertex:PE,uv2_pars_fragment:RE,uv2_pars_vertex:DE,uv2_vertex:IE,worldpos_vertex:kE,background_vert:NE,background_frag:OE,cube_vert:FE,cube_frag:zE,depth_vert:UE,depth_frag:BE,distanceRGBA_vert:VE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:jE,linedashed_frag:XE,meshbasic_vert:YE,meshbasic_frag:$E,meshlambert_vert:qE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:eT,meshphong_vert:tT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:rT,meshtoon_vert:sT,meshtoon_frag:aT,points_vert:oT,points_frag:lT,shadow_vert:uT,shadow_frag:cT,sprite_vert:fT,sprite_frag:dT},re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new En},uv2Transform:{value:new En},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new En}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new En}}},Yn={basic:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ft([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ft([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ft([re.points,re.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ft([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ft([re.common,re.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ft([re.sprite,re.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new En},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:Ft([re.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ft([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ft([re.lights,re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Yn.physical={uniforms:Ft([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function hT(n,e,t,i,r,s){const a=new Ae(0);let o=r===!0?0:1,l,u,c=null,f=0,d=null;function p(m,h){let g=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const y=n.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(a,o):v&&v.isColor&&(_(v,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===nc)?(u===void 0&&(u=new qn(new Vo(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:fa(Yn.cube.uniforms),vertexShader:Yn.cube.vertexShader,fragmentShader:Yn.cube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qn(new ip(2,2),new Jr({name:"BackgroundMaterial",uniforms:fa(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,h){t.buffers.color.setClear(m.r,m.g,m.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),o=h,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:p}}function pT(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=h(null);let u=l,c=!1;function f(O,W,K,Z,k){let P=!1;if(a){const N=m(Z,K,W);u!==N&&(u=N,p(u.object)),P=g(O,Z,K,k),P&&v(O,Z,K,k)}else{const N=W.wireframe===!0;(u.geometry!==Z.id||u.program!==K.id||u.wireframe!==N)&&(u.geometry=Z.id,u.program=K.id,u.wireframe=N,P=!0)}k!==null&&t.update(k,34963),(P||c)&&(c=!1,w(O,W,K,Z),k!==null&&n.bindBuffer(34963,t.get(k).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,W,K){const Z=K.wireframe===!0;let k=o[O.id];k===void 0&&(k={},o[O.id]=k);let P=k[W.id];P===void 0&&(P={},k[W.id]=P);let N=P[Z];return N===void 0&&(N=h(d()),P[Z]=N),N}function h(O){const W=[],K=[],Z=[];for(let k=0;k<r;k++)W[k]=0,K[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:Z,object:O,attributes:{},index:null}}function g(O,W,K,Z){const k=u.attributes,P=W.attributes;let N=0;const $=K.getAttributes();for(const Y in $)if($[Y].location>=0){const ue=k[Y];let _e=P[Y];if(_e===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;N++}return u.attributesNum!==N||u.index!==Z}function v(O,W,K,Z){const k={},P=W.attributes;let N=0;const $=K.getAttributes();for(const Y in $)if($[Y].location>=0){let ue=P[Y];ue===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),k[Y]=_e,N++}u.attributes=k,u.attributesNum=N,u.index=Z}function y(){const O=u.newAttributes;for(let W=0,K=O.length;W<K;W++)O[W]=0}function S(O){x(O,0)}function x(O,W){const K=u.newAttributes,Z=u.enabledAttributes,k=u.attributeDivisors;K[O]=1,Z[O]===0&&(n.enableVertexAttribArray(O),Z[O]=1),k[O]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,W),k[O]=W)}function T(){const O=u.newAttributes,W=u.enabledAttributes;for(let K=0,Z=W.length;K<Z;K++)W[K]!==O[K]&&(n.disableVertexAttribArray(K),W[K]=0)}function L(O,W,K,Z,k,P){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(O,W,K,k,P):n.vertexAttribPointer(O,W,K,Z,k,P)}function w(O,W,K,Z){if(i.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const k=Z.attributes,P=K.getAttributes(),N=W.defaultAttributeValues;for(const $ in P){const Y=P[$];if(Y.location>=0){let Q=k[$];if(Q===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){const ue=Q.normalized,_e=Q.itemSize,G=t.get(Q);if(G===void 0)continue;const ke=G.buffer,ye=G.type,we=G.bytesPerElement;if(Q.isInterleavedBufferAttribute){const pe=Q.data,He=pe.stride,Le=Q.offset;if(pe.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)x(Y.location+ve,pe.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<Y.locationSize;ve++)S(Y.location+ve);n.bindBuffer(34962,ke);for(let ve=0;ve<Y.locationSize;ve++)L(Y.location+ve,_e/Y.locationSize,ye,ue,He*we,(Le+_e/Y.locationSize*ve)*we)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)x(Y.location+pe,Q.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<Y.locationSize;pe++)S(Y.location+pe);n.bindBuffer(34962,ke);for(let pe=0;pe<Y.locationSize;pe++)L(Y.location+pe,_e/Y.locationSize,ye,ue,_e*we,_e/Y.locationSize*pe*we)}}else if(N!==void 0){const ue=N[$];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Y.location,ue);break;case 3:n.vertexAttrib3fv(Y.location,ue);break;case 4:n.vertexAttrib4fv(Y.location,ue);break;default:n.vertexAttrib1fv(Y.location,ue)}}}}T()}function C(){te();for(const O in o){const W=o[O];for(const K in W){const Z=W[K];for(const k in Z)_(Z[k].object),delete Z[k];delete W[K]}delete o[O]}}function D(O){if(o[O.id]===void 0)return;const W=o[O.id];for(const K in W){const Z=W[K];for(const k in Z)_(Z[k].object),delete Z[k];delete W[K]}delete o[O.id]}function X(O){for(const W in o){const K=o[W];if(K[O.id]===void 0)continue;const Z=K[O.id];for(const k in Z)_(Z[k].object),delete Z[k];delete K[O.id]}}function te(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function mT(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),t.update(c,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function gT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),_=n.getParameter(34076),m=n.getParameter(34921),h=n.getParameter(36347),g=n.getParameter(36348),v=n.getParameter(36349),y=d>0,S=a||e.has("OES_texture_float"),x=y&&S,T=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:T}}function vT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Er,o=new En,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,p){const _=f.length!==0||d||i!==0||r;return r=d,t=c(f,p,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,p){const _=f.clippingPlanes,m=f.clipIntersection,h=f.clipShadows,g=n.get(f);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,y=v*4;let S=g.clippingState||null;l.value=S,S=c(_,d,y,p);for(let x=0;x!==y;++x)S[x]=t[x];g.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const m=f!==null?f.length:0;let h=null;if(m!==0){if(h=l.value,_!==!0||h===null){const g=p+m*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(h===null||h.length<g)&&(h=new Float32Array(g));for(let y=0,S=p;y!==m;++y,S+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(h,S),h[S+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function _T(n){let e=new WeakMap;function t(a,o){return o===Ad?a.mapping=aa:o===Cd&&(a.mapping=oa),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ad||o===Cd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new IM(l.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rp extends ky{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Rg=[.125,.215,.35,.446,.526,.582],Cr=20,_f=new rp,Dg=new Ae;let yf=null;const Tr=(1+Math.sqrt(5))/2,Ts=1/Tr,Ig=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Tr,Ts),new R(0,Tr,-Ts),new R(Ts,0,Tr),new R(-Ts,0,Tr),new R(Tr,Ts,0),new R(-Tr,Ts,0)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yf),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===aa||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Mo,format:zn,encoding:Zr,depthBuffer:!1},r=Ng(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yT(s)),this._blurMaterial=xT(s,e,t)}return r}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,_f)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Dg),c.toneMapping=xi,c.autoClear=!1;const p=new kr({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),_=new qn(new Vo,p);let m=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Dg),m=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(o.up.set(0,l[g],0),o.lookAt(u[g],0,0)):v===1?(o.up.set(0,0,l[g]),o.lookAt(0,u[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,u[g]));const y=this._cubeSize;Pl(r,v*y,g>2?y:0,y,y),c.setRenderTarget(r),m&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===aa||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Pl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_f)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ig[(r-1)%Ig.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new qn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),m=s/_,h=isFinite(s)?1+Math.floor(c*m):Cr;h>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Cr}`);const g=[];let v=0;for(let L=0;L<Cr;++L){const w=L/m,C=Math.exp(-w*w/2);g.push(C),L===0?v+=C:L<h&&(v+=2*C)}for(let L=0;L<g.length;L++)g[L]=g[L]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],x=3*S*(r>y-Bs?r-y+Bs:0),T=4*(this._cubeSize-S);Pl(t,x,T,3*S,2*S),l.setRenderTarget(t),l.render(f,_f)}}function yT(n){const e=[],t=[],i=[];let r=n;const s=n-Bs+1+Rg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Bs?l=Rg[a-n+Bs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,h=2,g=1,v=new Float32Array(m*_*p),y=new Float32Array(h*_*p),S=new Float32Array(g*_*p);for(let T=0;T<p;T++){const L=T%3*2/3-1,w=T>2?0:-1,C=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];v.set(C,m*_*T),y.set(d,h*_*T);const D=[T,T,T,T,T,T];S.set(D,g*_*T)}const x=new ti;x.setAttribute("position",new dn(v,m)),x.setAttribute("uv",new dn(y,h)),x.setAttribute("faceIndex",new dn(S,g)),e.push(x),r>Bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ng(n,e,t){const i=new Qr(n,e,t);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xT(n,e,t){const i=new Float32Array(Cr),r=new R(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Og(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Fg(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ST(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ad||l===Cd,c=l===aa||l===oa;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new kg(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new kg(n));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function wT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MT(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let h=0,g=m.length;h<g;h++)e.update(m[h],34962)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let y=0,S=v.length;y<S;y+=3){const x=v[y+0],T=v[y+1],L=v[y+2];d.push(x,T,T,L,L,x)}}else{const v=_.array;m=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const x=y+0,T=y+1,L=y+2;d.push(x,T,T,L,L,x)}}const h=new(Ty(d)?Iy:Dy)(d,1);h.version=m;const g=s.get(f);g&&e.remove(g),s.set(f,h)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function bT(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function c(d,p){n.drawElements(s,p,o,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,p,o,d*l,_),t.update(p,s,_)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f}function ET(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TT(n,e){return n[0]-e[0]}function AT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function CT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new qe,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f,d){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=m!==void 0?m.length:0;let g=s.get(c);if(g===void 0||g.count!==h){let K=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var _=K;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let D=0;S===!0&&(D=1),x===!0&&(D=2),T===!0&&(D=3);let X=c.attributes.position.count*D,te=1;X>e.maxTextureSize&&(te=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const U=new Float32Array(X*te*4*h),O=new Py(U,X,te,h);O.type=Ji,O.needsUpdate=!0;const W=D*4;for(let Z=0;Z<h;Z++){const k=L[Z],P=w[Z],N=C[Z],$=X*te*4*Z;for(let Y=0;Y<k.count;Y++){const Q=Y*W;S===!0&&(a.fromBufferAttribute(k,Y),U[$+Q+0]=a.x,U[$+Q+1]=a.y,U[$+Q+2]=a.z,U[$+Q+3]=0),x===!0&&(a.fromBufferAttribute(P,Y),U[$+Q+4]=a.x,U[$+Q+5]=a.y,U[$+Q+6]=a.z,U[$+Q+7]=0),T===!0&&(a.fromBufferAttribute(N,Y),U[$+Q+8]=a.x,U[$+Q+9]=a.y,U[$+Q+10]=a.z,U[$+Q+11]=N.itemSize===4?a.w:1)}}g={count:h,texture:O,size:new Ee(X,te)},s.set(c,g),c.addEventListener("dispose",K)}let v=0;for(let S=0;S<p.length;S++)v+=p[S];const y=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const m=p===void 0?0:p.length;let h=i[c.id];if(h===void 0||h.length!==m){h=[];for(let x=0;x<m;x++)h[x]=[x,0];i[c.id]=h}for(let x=0;x<m;x++){const T=h[x];T[0]=x,T[1]=p[x]}h.sort(AT);for(let x=0;x<8;x++)x<m&&h[x][1]?(o[x][0]=h[x][0],o[x][1]=h[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(TT);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const T=o[x],L=T[0],w=T[1];L!==Number.MAX_SAFE_INTEGER&&w?(g&&c.getAttribute("morphTarget"+x)!==g[L]&&c.setAttribute("morphTarget"+x,g[L]),v&&c.getAttribute("morphNormal"+x)!==v[L]&&c.setAttribute("morphNormal"+x,v[L]),r[x]=w,y+=w):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),v&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const S=c.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function LT(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const Fy=new Xt,zy=new Py,Uy=new vM,By=new Ny,zg=[],Ug=[],Bg=new Float32Array(16),Vg=new Float32Array(9),Hg=new Float32Array(4);function xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zg[r];if(s===void 0&&(s=new Float32Array(r),zg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ic(n,e){let t=Ug[e];t===void 0&&(t=new Int32Array(e),Ug[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function kT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Hg.set(i),n.uniformMatrix2fv(this.addr,!1,Hg),$t(t,i)}}function NT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Vg.set(i),n.uniformMatrix3fv(this.addr,!1,Vg),$t(t,i)}}function OT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;Bg.set(i),n.uniformMatrix4fv(this.addr,!1,Bg),$t(t,i)}}function FT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zT(n,e){const t=this.cache;Yt(t,e)||(n.uniform2iv(this.addr,e),$t(t,e))}function UT(n,e){const t=this.cache;Yt(t,e)||(n.uniform3iv(this.addr,e),$t(t,e))}function BT(n,e){const t=this.cache;Yt(t,e)||(n.uniform4iv(this.addr,e),$t(t,e))}function VT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HT(n,e){const t=this.cache;Yt(t,e)||(n.uniform2uiv(this.addr,e),$t(t,e))}function GT(n,e){const t=this.cache;Yt(t,e)||(n.uniform3uiv(this.addr,e),$t(t,e))}function WT(n,e){const t=this.cache;Yt(t,e)||(n.uniform4uiv(this.addr,e),$t(t,e))}function jT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Fy,r)}function XT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uy,r)}function YT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||By,r)}function $T(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zy,r)}function qT(n){switch(n){case 5126:return PT;case 35664:return RT;case 35665:return DT;case 35666:return IT;case 35674:return kT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return FT;case 35667:case 35671:return zT;case 35668:case 35672:return UT;case 35669:case 35673:return BT;case 5125:return VT;case 36294:return HT;case 36295:return GT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return $T}}function KT(n,e){n.uniform1fv(this.addr,e)}function ZT(n,e){const t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function QT(n,e){const t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function JT(n,e){const t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function e2(n,e){const t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t2(n,e){const t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n2(n,e){const t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i2(n,e){n.uniform1iv(this.addr,e)}function r2(n,e){n.uniform2iv(this.addr,e)}function s2(n,e){n.uniform3iv(this.addr,e)}function a2(n,e){n.uniform4iv(this.addr,e)}function o2(n,e){n.uniform1uiv(this.addr,e)}function l2(n,e){n.uniform2uiv(this.addr,e)}function u2(n,e){n.uniform3uiv(this.addr,e)}function c2(n,e){n.uniform4uiv(this.addr,e)}function f2(n,e,t){const i=e.length,r=ic(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Fy,r[s])}function d2(n,e,t){const i=e.length,r=ic(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Uy,r[s])}function h2(n,e,t){const i=e.length,r=ic(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||By,r[s])}function p2(n,e,t){const i=e.length,r=ic(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||zy,r[s])}function m2(n){switch(n){case 5126:return KT;case 35664:return ZT;case 35665:return QT;case 35666:return JT;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return r2;case 35668:case 35672:return s2;case 35669:case 35673:return a2;case 5125:return o2;case 36294:return l2;case 36295:return u2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return p2}}class g2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qT(t.type)}}class v2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=m2(t.type)}}class _2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function Gg(n,e){n.seq.push(e),n.map[e.id]=e}function y2(n,e,t){const i=n.name,r=i.length;for(xf.lastIndex=0;;){const s=xf.exec(i),a=xf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Gg(t,u===void 0?new g2(o,n,e):new v2(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new _2(o),Gg(t,f)),t=f}}}class au{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);y2(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Wg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let x2=0;function S2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function w2(n){switch(n){case Zr:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function jg(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S2(n.getShaderSource(e),a)}else return r}function M2(n,e){const t=w2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b2(n,e){let t;switch(e){case Pw:t="Linear";break;case Rw:t="Reinhard";break;case Dw:t="OptimizedCineon";break;case Iw:t="ACESFilmic";break;case kw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E2(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)}function T2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A2(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wa(n){return n!==""}function Xg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(n){return n.replace(C2,L2)}function L2(n,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kd(t)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(n){return n.replace(P2,R2)}function R2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ga&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case aa:case oa:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oa:e="ENVMAP_MODE_REFRACTION";break}return e}function N2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xy:e="ENVMAP_BLENDING_MULTIPLY";break;case Cw:e="ENVMAP_BLENDING_MIX";break;case Lw:e="ENVMAP_BLENDING_ADD";break}return e}function O2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=D2(t),u=I2(t),c=k2(t),f=N2(t),d=O2(t),p=t.isWebGL2?"":E2(t),_=T2(s),m=r.createProgram();let h,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(Wa).join(`
`),h.length>0&&(h+=`
`),g=[p,_].filter(Wa).join(`
`),g.length>0&&(g+=`
`)):(h=[qg(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),g=[p,qg(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Re.tonemapping_pars_fragment:"",t.toneMapping!==xi?b2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,M2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=kd(a),a=Xg(a,t),a=Yg(a,t),o=kd(o),o=Xg(o,t),o=Yg(o,t),a=$g(a),o=$g(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+h+a,S=v+g+o,x=Wg(r,35633,y),T=Wg(r,35632,S);if(r.attachShader(m,x),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(x).trim(),X=r.getShaderInfoLog(T).trim();let te=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){te=!1;const O=jg(r,x,"vertex"),W=jg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+W)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||X==="")&&(U=!1);U&&(this.diagnostics={runnable:te,programLog:C,vertexShader:{log:D,prefix:h},fragmentShader:{log:X,prefix:g}})}r.deleteShader(x),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new au(r,m)),L};let w;return this.getAttributes=function(){return w===void 0&&(w=A2(r,m)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=T,this}let z2=0;class U2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new B2(e),t.set(e,i)),i}}class B2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function V2(n,e,t,i,r,s,a){const o=new Ry,l=new U2,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(w,C,D,X,te){const U=X.fog,O=te.geometry,W=w.isMeshStandardMaterial?X.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),Z=!!K&&K.mapping===nc?K.image.height:null,k=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const P=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=P!==void 0?P.length:0;let $=0;O.morphAttributes.position!==void 0&&($=1),O.morphAttributes.normal!==void 0&&($=2),O.morphAttributes.color!==void 0&&($=3);let Y,Q,ue,_e;if(k){const He=Yn[k];Y=He.vertexShader,Q=He.fragmentShader}else Y=w.vertexShader,Q=w.fragmentShader,l.update(w),ue=l.getVertexShaderID(w),_e=l.getFragmentShaderID(w);const G=n.getRenderTarget(),ke=w.alphaTest>0,ye=w.clearcoat>0,we=w.iridescence>0;return{isWebGL2:c,shaderID:k,shaderName:w.type,vertexShader:Y,fragmentShader:Q,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Zr,map:!!w.map,matcap:!!w.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Z,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===eM,tangentSpaceNormalMap:w.normalMapType===Jh,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===je,clearcoat:ye,clearcoatMap:ye&&!!w.clearcoatMap,clearcoatRoughnessMap:ye&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!w.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!w.iridescenceMap,iridescenceThicknessMap:we&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Ks,alphaMap:!!w.alphaMap,alphaTest:ke,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!O.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:xi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vi,flipSided:w.side===An,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)C.push(D),C.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(g(C,w),v(C,w),C.push(n.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function g(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function v(w,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),w.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),w.push(o.mask)}function y(w){const C=_[w.type];let D;if(C){const X=Yn[C];D=LM.clone(X.uniforms)}else D=w.uniforms;return D}function S(w,C){let D;for(let X=0,te=u.length;X<te;X++){const U=u[X];if(U.cacheKey===C){D=U,++D.usedTimes;break}}return D===void 0&&(D=new F2(n,C,w,s),u.push(D)),D}function x(w){if(--w.usedTimes===0){const C=u.indexOf(w);u[C]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:x,releaseShaderCache:T,programs:u,dispose:L}}function H2(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function G2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,_,m,h){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:h},n[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=p,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function o(f,d,p,_,m,h){const g=a(f,d,p,_,m,h);p.transmission>0?i.push(g):p.transparent===!0?r.push(g):t.push(g)}function l(f,d,p,_,m,h){const g=a(f,d,p,_,m,h);p.transmission>0?i.unshift(g):p.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,d){t.length>1&&t.sort(f||G2),i.length>1&&i.sort(d||Kg),r.length>1&&r.sort(d||Kg)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function W2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zg,n.set(i,[a])):r>=s.length?(a=new Zg,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function j2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ae};break;case"SpotLight":t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function X2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y2=0;function $2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q2(n,e){const t=new j2,i=X2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,a=new Be,o=new Be;function l(c,f){let d=0,p=0,_=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let m=0,h=0,g=0,v=0,y=0,S=0,x=0,T=0,L=0,w=0;c.sort($2);const C=f!==!0?Math.PI:1;for(let X=0,te=c.length;X<te;X++){const U=c[X],O=U.color,W=U.intensity,K=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=O.r*W*C,p+=O.g*W*C,_+=O.b*W*C;else if(U.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(U.sh.coefficients[k],W);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const P=U.shadow,N=i.get(U);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,r.directionalShadow[m]=N,r.directionalShadowMap[m]=Z,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=k,m++}else if(U.isSpotLight){const k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(O).multiplyScalar(W*C),k.distance=K,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,r.spot[g]=k;const P=U.shadow;if(U.map&&(r.spotLightMap[L]=U.map,L++,P.updateMatrices(U),U.castShadow&&w++),r.spotLightMatrix[g]=P.matrix,U.castShadow){const N=i.get(U);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,r.spotShadow[g]=N,r.spotShadowMap[g]=Z,T++}g++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(O).multiplyScalar(W),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=k,v++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*C),k.distance=U.distance,k.decay=U.decay,U.castShadow){const P=U.shadow,N=i.get(U);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,N.shadowCameraNear=P.camera.near,N.shadowCameraFar=P.camera.far,r.pointShadow[h]=N,r.pointShadowMap[h]=Z,r.pointShadowMatrix[h]=U.shadow.matrix,x++}r.point[h]=k,h++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(W*C),k.groundColor.copy(U.groundColor).multiplyScalar(W*C),r.hemi[y]=k,y++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==m||D.pointLength!==h||D.spotLength!==g||D.rectAreaLength!==v||D.hemiLength!==y||D.numDirectionalShadows!==S||D.numPointShadows!==x||D.numSpotShadows!==T||D.numSpotMaps!==L)&&(r.directional.length=m,r.spot.length=g,r.rectArea.length=v,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=T+L-w,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=w,D.directionalLength=m,D.pointLength=h,D.spotLength=g,D.rectAreaLength=v,D.hemiLength=y,D.numDirectionalShadows=S,D.numPointShadows=x,D.numSpotShadows=T,D.numSpotMaps=L,r.version=Y2++)}function u(c,f){let d=0,p=0,_=0,m=0,h=0;const g=f.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(S.isSpotLight){const x=r.spot[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const x=r.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(S.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=r.point[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){const x=r.hemi[h];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:r}}function Qg(n,e){const t=new q2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function K2(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Qg(n,e),t.set(s,[l])):a>=o.length?(l=new Qg(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Z2 extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q2 extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t3(n,e,t){let i=new np;const r=new Ee,s=new Ee,a=new qe,o=new Z2({depthPacking:Jw}),l=new Q2,u={},c=t.maxTextureSize,f={0:An,1:qr,2:vi},d=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:J2,fragmentShader:e3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new qn(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vy,this.render=function(S,x,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ur),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let X=0,te=S.length;X<te;X++){const U=S[X],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const W=O.getFrameExtents();if(r.multiply(W),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,O.mapSize.y=s.y)),O.map===null){const Z=this.type!==Ga?{minFilter:Rt,magFilter:Rt}:{};O.map=new Qr(r.x,r.y,Z),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const K=O.getViewportCount();for(let Z=0;Z<K;Z++){const k=O.getViewport(Z);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(a),O.updateMatrices(U,Z),i=O.getFrustum(),y(x,T,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Ga&&g(O,T),O.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,w,C)};function g(S,x){const T=e.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,T,d,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,T,p,m,null)}function v(S,x,T,L,w,C){let D=null;const X=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(X!==void 0?D=X:D=T.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const te=D.uuid,U=x.uuid;let O=u[te];O===void 0&&(O={},u[te]=O);let W=O[U];W===void 0&&(W=D.clone(),O[U]=W),D=W}return D.visible=x.visible,D.wireframe=x.wireframe,C===Ga?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:f[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=L,D.farDistance=w),D}function y(S,x,T,L,w){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Ga)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const X=e.update(S),te=S.material;if(Array.isArray(te)){const U=X.groups;for(let O=0,W=U.length;O<W;O++){const K=U[O],Z=te[K.materialIndex];if(Z&&Z.visible){const k=v(S,Z,L,T.near,T.far,w);n.renderBufferDirect(T,null,X,k,S,K)}}}else if(te.visible){const U=v(S,te,L,T.near,T.far,w);n.renderBufferDirect(T,null,X,U,S,null)}}const D=S.children;for(let X=0,te=D.length;X<te;X++)y(D[X],x,T,L,w)}}function n3(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const se=new qe;let B=null;const fe=new qe(0,0,0,0);return{setMask:function(ce){B!==ce&&!I&&(n.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){I=ce},setClear:function(ce,Ue,Et,ht,Di){Di===!0&&(ce*=ht,Ue*=ht,Et*=ht),se.set(ce,Ue,Et,ht),fe.equals(se)===!1&&(n.clearColor(ce,Ue,Et,ht),fe.copy(se))},reset:function(){I=!1,B=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,se=null,B=null,fe=null;return{setTest:function(ce){ce?ke(2929):ye(2929)},setMask:function(ce){se!==ce&&!I&&(n.depthMask(ce),se=ce)},setFunc:function(ce){if(B!==ce){if(ce)switch(ce){case Sw:n.depthFunc(512);break;case ww:n.depthFunc(519);break;case Mw:n.depthFunc(513);break;case Td:n.depthFunc(515);break;case bw:n.depthFunc(514);break;case Ew:n.depthFunc(518);break;case Tw:n.depthFunc(516);break;case Aw:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);B=ce}},setLocked:function(ce){I=ce},setClear:function(ce){fe!==ce&&(n.clearDepth(ce),fe=ce)},reset:function(){I=!1,se=null,B=null,fe=null}}}function a(){let I=!1,se=null,B=null,fe=null,ce=null,Ue=null,Et=null,ht=null,Di=null;return{setTest:function(ot){I||(ot?ke(2960):ye(2960))},setMask:function(ot){se!==ot&&!I&&(n.stencilMask(ot),se=ot)},setFunc:function(ot,ii,_n){(B!==ot||fe!==ii||ce!==_n)&&(n.stencilFunc(ot,ii,_n),B=ot,fe=ii,ce=_n)},setOp:function(ot,ii,_n){(Ue!==ot||Et!==ii||ht!==_n)&&(n.stencilOp(ot,ii,_n),Ue=ot,Et=ii,ht=_n)},setLocked:function(ot){I=ot},setClear:function(ot){Di!==ot&&(n.clearStencil(ot),Di=ot)},reset:function(){I=!1,se=null,B=null,fe=null,ce=null,Ue=null,Et=null,ht=null,Di=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,m=[],h=null,g=!1,v=null,y=null,S=null,x=null,T=null,L=null,w=null,C=!1,D=null,X=null,te=null,U=null,O=null;const W=n.getParameter(35661);let K=!1,Z=0;const k=n.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),K=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),K=Z>=2);let P=null,N={};const $=n.getParameter(3088),Y=n.getParameter(2978),Q=new qe().fromArray($),ue=new qe().fromArray(Y);function _e(I,se,B){const fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let Ue=0;Ue<B;Ue++)n.texImage2D(se+Ue,0,6408,1,1,0,6408,5121,fe);return ce}const G={};G[3553]=_e(3553,3553,1),G[34067]=_e(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ke(2929),l.setFunc(Td),yt(!1),rn(Hm),ke(2884),mt(ur);function ke(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function ye(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function we(I,se){return p[I]!==se?(n.bindFramebuffer(I,se),p[I]=se,i&&(I===36009&&(p[36160]=se),I===36160&&(p[36009]=se)),!0):!1}function pe(I,se){let B=m,fe=!1;if(I)if(B=_.get(se),B===void 0&&(B=[],_.set(se,B)),I.isWebGLMultipleRenderTargets){const ce=I.texture;if(B.length!==ce.length||B[0]!==36064){for(let Ue=0,Et=ce.length;Ue<Et;Ue++)B[Ue]=36064+Ue;B.length=ce.length,fe=!0}}else B[0]!==36064&&(B[0]=36064,fe=!0);else B[0]!==1029&&(B[0]=1029,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function He(I){return h!==I?(n.useProgram(I),h=I,!0):!1}const Le={[As]:32774,[cw]:32778,[fw]:32779};if(i)Le[Xm]=32775,Le[Ym]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Le[Xm]=I.MIN_EXT,Le[Ym]=I.MAX_EXT)}const ve={[dw]:0,[hw]:1,[pw]:768,[_y]:770,[xw]:776,[_w]:774,[gw]:772,[mw]:769,[yy]:771,[yw]:775,[vw]:773};function mt(I,se,B,fe,ce,Ue,Et,ht){if(I===ur){g===!0&&(ye(3042),g=!1);return}if(g===!1&&(ke(3042),g=!0),I!==uw){if(I!==v||ht!==C){if((y!==As||T!==As)&&(n.blendEquation(32774),y=As,T=As),ht)switch(I){case Ks:n.blendFuncSeparate(1,771,1,771);break;case Gm:n.blendFunc(1,1);break;case Wm:n.blendFuncSeparate(0,769,0,1);break;case jm:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ks:n.blendFuncSeparate(770,771,1,771);break;case Gm:n.blendFunc(770,1);break;case Wm:n.blendFuncSeparate(0,769,0,1);break;case jm:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,L=null,w=null,v=I,C=ht}return}ce=ce||se,Ue=Ue||B,Et=Et||fe,(se!==y||ce!==T)&&(n.blendEquationSeparate(Le[se],Le[ce]),y=se,T=ce),(B!==S||fe!==x||Ue!==L||Et!==w)&&(n.blendFuncSeparate(ve[B],ve[fe],ve[Ue],ve[Et]),S=B,x=fe,L=Ue,w=Et),v=I,C=null}function Lt(I,se){I.side===vi?ye(2884):ke(2884);let B=I.side===An;se&&(B=!B),yt(B),I.blending===Ks&&I.transparent===!1?mt(ur):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;u.setTest(fe),fe&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ke(32926):ye(32926)}function yt(I){D!==I&&(I?n.frontFace(2304):n.frontFace(2305),D=I)}function rn(I){I!==aw?(ke(2884),I!==X&&(I===Hm?n.cullFace(1029):I===ow?n.cullFace(1028):n.cullFace(1032))):ye(2884),X=I}function xt(I){I!==te&&(K&&n.lineWidth(I),te=I)}function Ge(I,se,B){I?(ke(32823),(U!==se||O!==B)&&(n.polygonOffset(se,B),U=se,O=B)):ye(32823)}function vn(I){I?ke(3089):ye(3089)}function sn(I){I===void 0&&(I=33984+W-1),P!==I&&(n.activeTexture(I),P=I)}function A(I,se){P===null&&sn();let B=N[P];B===void 0&&(B={type:void 0,texture:void 0},N[P]=B),(B.type!==I||B.texture!==se)&&(n.bindTexture(I,se||G[I]),B.type=I,B.texture=se)}function M(){const I=N[P];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function b(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(I){Q.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function ae(I){ue.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ue.copy(I))}function Se(I,se){let B=f.get(se);B===void 0&&(B=new WeakMap,f.set(se,B));let fe=B.get(I);fe===void 0&&(fe=n.getUniformBlockIndex(se,I.name),B.set(I,fe))}function Ne(I,se){const fe=f.get(se).get(I);c.get(I)!==fe&&(n.uniformBlockBinding(se,fe,I.__bindingPointIndex),c.set(I,fe))}function tt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},P=null,N={},p={},_=new WeakMap,m=[],h=null,g=!1,v=null,y=null,S=null,x=null,T=null,L=null,w=null,C=!1,D=null,X=null,te=null,U=null,O=null,Q.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ke,disable:ye,bindFramebuffer:we,drawBuffers:pe,useProgram:He,setBlending:mt,setMaterial:Lt,setFlipSided:yt,setCullFace:rn,setLineWidth:xt,setPolygonOffset:Ge,setScissorTest:vn,activeTexture:sn,bindTexture:A,unbindTexture:M,compressedTexImage2D:V,texImage2D:q,texImage3D:ie,updateUBOMapping:Se,uniformBlockBinding:Ne,texStorage2D:xe,texStorage3D:b,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:oe,scissor:le,viewport:ae,reset:tt}}function i3(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return g?new OffscreenCanvas(A,M):To("canvas")}function y(A,M,V,ee){let ne=1;if((A.width>ee||A.height>ee)&&(ne=ee/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=M?ku:Math.floor,xe=oe(ne*A.width),b=oe(ne*A.height);m===void 0&&(m=v(xe,b));const q=V?v(xe,b):m;return q.width=xe,q.height=b,q.getContext("2d").drawImage(A,0,0,xe,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+b+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Id(A.width)&&Id(A.height)}function x(A){return o?!1:A.wrapS!==Mn||A.wrapT!==Mn||A.minFilter!==Rt&&A.minFilter!==Qt}function T(A,M){return A.generateMipmaps&&M&&A.minFilter!==Rt&&A.minFilter!==Qt}function L(A){n.generateMipmap(A)}function w(A,M,V,ee,ne=!1){if(o===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=M;return M===6403&&(V===5126&&(oe=33326),V===5131&&(oe=33325),V===5121&&(oe=33321)),M===33319&&(V===5126&&(oe=33328),V===5131&&(oe=33327),V===5121&&(oe=33323)),M===6408&&(V===5126&&(oe=34836),V===5131&&(oe=34842),V===5121&&(oe=ee===je&&ne===!1?35907:32856),V===32819&&(oe=32854),V===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function C(A,M,V){return T(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){return A===Rt||A===Ld||A===Pd?9728:9729}function X(A){const M=A.target;M.removeEventListener("dispose",X),U(M),M.isVideoTexture&&_.delete(M)}function te(A){const M=A.target;M.removeEventListener("dispose",te),W(M)}function U(A){const M=i.get(A);if(M.__webglInit===void 0)return;const V=A.source,ee=h.get(V);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(A),Object.keys(ee).length===0&&h.delete(V)}i.remove(A)}function O(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const V=A.source,ee=h.get(V);delete ee[M.__cacheKey],a.memory.textures--}function W(A){const M=A.texture,V=i.get(A),ee=i.get(M);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(V.__webglFramebuffer[ne]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const xe=i.get(M[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(A)}let K=0;function Z(){K=0}function k(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function P(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function N(A,M){const V=i.get(A);if(A.isVideoTexture&&vn(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,A,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,V.__webglTexture)}function $(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){ye(V,A,M);return}t.activeTexture(33984+M),t.bindTexture(35866,V.__webglTexture)}function Y(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){ye(V,A,M);return}t.activeTexture(33984+M),t.bindTexture(32879,V.__webglTexture)}function Q(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){we(V,A,M);return}t.activeTexture(33984+M),t.bindTexture(34067,V.__webglTexture)}const ue={[la]:10497,[Mn]:33071,[Iu]:33648},_e={[Rt]:9728,[Ld]:9984,[Pd]:9986,[Qt]:9729,[wy]:9985,[va]:9987};function G(A,M,V){if(V?(n.texParameteri(A,10242,ue[M.wrapS]),n.texParameteri(A,10243,ue[M.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,ue[M.wrapR]),n.texParameteri(A,10240,_e[M.magFilter]),n.texParameteri(A,10241,_e[M.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(M.wrapS!==Mn||M.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,D(M.magFilter)),n.texParameteri(A,10241,D(M.minFilter)),M.minFilter!==Rt&&M.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Mo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ke(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",X));const ee=M.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const oe=P(M);if(oe!==A.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[oe].usedTimes++;const xe=ne[A.__cacheKey];xe!==void 0&&(ne[A.__cacheKey].usedTimes--,xe.usedTimes===0&&O(M)),A.__cacheKey=oe,A.__webglTexture=ne[oe].texture}return V}function ye(A,M,V){let ee=3553;M.isDataArrayTexture&&(ee=35866),M.isData3DTexture&&(ee=32879);const ne=ke(A,M),oe=M.source;if(t.activeTexture(33984+V),t.bindTexture(ee,A.__webglTexture),oe.version!==oe.__currentVersion||ne===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const xe=x(M)&&S(M.image)===!1;let b=y(M.image,xe,!1,c);b=sn(M,b);const q=S(b)||o,ie=s.convert(M.format,M.encoding);let le=s.convert(M.type),ae=w(M.internalFormat,ie,le,M.encoding,M.isVideoTexture);G(ee,M,q);let Se;const Ne=M.mipmaps,tt=o&&M.isVideoTexture!==!0,I=oe.__currentVersion===void 0||ne===!0,se=C(M,b,q);if(M.isDepthTexture)ae=6402,o?M.type===Ji?ae=36012:M.type===Dr?ae=33190:M.type===Zs?ae=35056:ae=33189:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Vr&&ae===6402&&M.type!==My&&M.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Dr,le=s.convert(M.type)),M.format===ua&&ae===6402&&(ae=34041,M.type!==Zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zs,le=s.convert(M.type))),I&&(tt?t.texStorage2D(3553,1,ae,b.width,b.height):t.texImage2D(3553,0,ae,b.width,b.height,0,ie,le,null));else if(M.isDataTexture)if(Ne.length>0&&q){tt&&I&&t.texStorage2D(3553,se,ae,Ne[0].width,Ne[0].height);for(let B=0,fe=Ne.length;B<fe;B++)Se=Ne[B],tt?t.texSubImage2D(3553,B,0,0,Se.width,Se.height,ie,le,Se.data):t.texImage2D(3553,B,ae,Se.width,Se.height,0,ie,le,Se.data);M.generateMipmaps=!1}else tt?(I&&t.texStorage2D(3553,se,ae,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,ie,le,b.data)):t.texImage2D(3553,0,ae,b.width,b.height,0,ie,le,b.data);else if(M.isCompressedTexture){tt&&I&&t.texStorage2D(3553,se,ae,Ne[0].width,Ne[0].height);for(let B=0,fe=Ne.length;B<fe;B++)Se=Ne[B],M.format!==zn?ie!==null?tt?t.compressedTexSubImage2D(3553,B,0,0,Se.width,Se.height,ie,Se.data):t.compressedTexImage2D(3553,B,ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,B,0,0,Se.width,Se.height,ie,le,Se.data):t.texImage2D(3553,B,ae,Se.width,Se.height,0,ie,le,Se.data)}else if(M.isDataArrayTexture)tt?(I&&t.texStorage3D(35866,se,ae,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,ie,le,b.data)):t.texImage3D(35866,0,ae,b.width,b.height,b.depth,0,ie,le,b.data);else if(M.isData3DTexture)tt?(I&&t.texStorage3D(32879,se,ae,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,ie,le,b.data)):t.texImage3D(32879,0,ae,b.width,b.height,b.depth,0,ie,le,b.data);else if(M.isFramebufferTexture){if(I)if(tt)t.texStorage2D(3553,se,ae,b.width,b.height);else{let B=b.width,fe=b.height;for(let ce=0;ce<se;ce++)t.texImage2D(3553,ce,ae,B,fe,0,ie,le,null),B>>=1,fe>>=1}}else if(Ne.length>0&&q){tt&&I&&t.texStorage2D(3553,se,ae,Ne[0].width,Ne[0].height);for(let B=0,fe=Ne.length;B<fe;B++)Se=Ne[B],tt?t.texSubImage2D(3553,B,0,0,ie,le,Se):t.texImage2D(3553,B,ae,ie,le,Se);M.generateMipmaps=!1}else tt?(I&&t.texStorage2D(3553,se,ae,b.width,b.height),t.texSubImage2D(3553,0,0,0,ie,le,b)):t.texImage2D(3553,0,ae,ie,le,b);T(M,q)&&L(ee),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function we(A,M,V){if(M.image.length!==6)return;const ee=ke(A,M),ne=M.source;if(t.activeTexture(33984+V),t.bindTexture(34067,A.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,b=[];for(let B=0;B<6;B++)!oe&&!xe?b[B]=y(M.image[B],!1,!0,u):b[B]=xe?M.image[B].image:M.image[B],b[B]=sn(M,b[B]);const q=b[0],ie=S(q)||o,le=s.convert(M.format,M.encoding),ae=s.convert(M.type),Se=w(M.internalFormat,le,ae,M.encoding),Ne=o&&M.isVideoTexture!==!0,tt=ne.__currentVersion===void 0||ee===!0;let I=C(M,q,ie);G(34067,M,ie);let se;if(oe){Ne&&tt&&t.texStorage2D(34067,I,Se,q.width,q.height);for(let B=0;B<6;B++){se=b[B].mipmaps;for(let fe=0;fe<se.length;fe++){const ce=se[fe];M.format!==zn?le!==null?Ne?t.compressedTexSubImage2D(34069+B,fe,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+B,fe,Se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+B,fe,0,0,ce.width,ce.height,le,ae,ce.data):t.texImage2D(34069+B,fe,Se,ce.width,ce.height,0,le,ae,ce.data)}}}else{se=M.mipmaps,Ne&&tt&&(se.length>0&&I++,t.texStorage2D(34067,I,Se,b[0].width,b[0].height));for(let B=0;B<6;B++)if(xe){Ne?t.texSubImage2D(34069+B,0,0,0,b[B].width,b[B].height,le,ae,b[B].data):t.texImage2D(34069+B,0,Se,b[B].width,b[B].height,0,le,ae,b[B].data);for(let fe=0;fe<se.length;fe++){const Ue=se[fe].image[B].image;Ne?t.texSubImage2D(34069+B,fe+1,0,0,Ue.width,Ue.height,le,ae,Ue.data):t.texImage2D(34069+B,fe+1,Se,Ue.width,Ue.height,0,le,ae,Ue.data)}}else{Ne?t.texSubImage2D(34069+B,0,0,0,le,ae,b[B]):t.texImage2D(34069+B,0,Se,le,ae,b[B]);for(let fe=0;fe<se.length;fe++){const ce=se[fe];Ne?t.texSubImage2D(34069+B,fe+1,0,0,le,ae,ce.image[B]):t.texImage2D(34069+B,fe+1,Se,le,ae,ce.image[B])}}}T(M,ie)&&L(34067),ne.__currentVersion=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,V,ee,ne){const oe=s.convert(V.format,V.encoding),xe=s.convert(V.type),b=w(V.internalFormat,oe,xe,V.encoding);i.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,b,M.width,M.height,M.depth,0,oe,xe,null):t.texImage2D(ne,0,b,M.width,M.height,0,oe,xe,null)),t.bindFramebuffer(36160,A),Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,ee,ne,i.get(V).__webglTexture,0,xt(M)):n.framebufferTexture2D(36160,ee,ne,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(A,M,V){if(n.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(V||Ge(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ji?ee=36012:ne.type===Dr&&(ee=33190));const oe=xt(M);Ge(M)?d.renderbufferStorageMultisampleEXT(36161,oe,ee,M.width,M.height):n.renderbufferStorageMultisample(36161,oe,ee,M.width,M.height)}else n.renderbufferStorage(36161,ee,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const ee=xt(M);V&&Ge(M)===!1?n.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],xe=s.convert(oe.format,oe.encoding),b=s.convert(oe.type),q=w(oe.internalFormat,xe,b,oe.encoding),ie=xt(M);V&&Ge(M)===!1?n.renderbufferStorageMultisample(36161,ie,q,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,ie,q,M.width,M.height):n.renderbufferStorage(36161,q,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Le(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ne=xt(M);if(M.depthTexture.format===Vr)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===ua)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ve(A){const M=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=n.createRenderbuffer(),He(M.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),He(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function mt(A,M,V){const ee=i.get(A);M!==void 0&&pe(ee.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&ve(A)}function Lt(A){const M=A.texture,V=i.get(A),ee=i.get(M);A.addEventListener("dispose",te),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,xe=S(A)||o;if(ne){V.__webglFramebuffer=[];for(let b=0;b<6;b++)V.__webglFramebuffer[b]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const b=A.texture;for(let q=0,ie=b.length;q<ie;q++){const le=i.get(b[q]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ge(A)===!1){const b=oe?M:[M];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let q=0;q<b.length;q++){const ie=b[q];V.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[q]);const le=s.convert(ie.format,ie.encoding),ae=s.convert(ie.type),Se=w(ie.internalFormat,le,ae,ie.encoding),Ne=xt(A);n.renderbufferStorageMultisample(36161,Ne,Se,A.width,A.height),n.framebufferRenderbuffer(36160,36064+q,36161,V.__webglColorRenderbuffer[q])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),He(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),G(34067,M,xe);for(let b=0;b<6;b++)pe(V.__webglFramebuffer[b],A,M,36064,34069+b);T(M,xe)&&L(34067),t.unbindTexture()}else if(oe){const b=A.texture;for(let q=0,ie=b.length;q<ie;q++){const le=b[q],ae=i.get(le);t.bindTexture(3553,ae.__webglTexture),G(3553,le,xe),pe(V.__webglFramebuffer,A,le,36064+q,3553),T(le,xe)&&L(3553)}t.unbindTexture()}else{let b=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?b=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,ee.__webglTexture),G(b,M,xe),pe(V.__webglFramebuffer,A,M,36064,b),T(M,xe)&&L(b),t.unbindTexture()}A.depthBuffer&&ve(A)}function yt(A){const M=S(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,ne=V.length;ee<ne;ee++){const oe=V[ee];if(T(oe,M)){const xe=A.isWebGLCubeRenderTarget?34067:3553,b=i.get(oe).__webglTexture;t.bindTexture(xe,b),L(xe),t.unbindTexture()}}}function rn(A){if(o&&A.samples>0&&Ge(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ee=A.height;let ne=16384;const oe=[],xe=A.stencilBuffer?33306:36096,b=i.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let ie=0;ie<M.length;ie++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ie,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ie,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let ie=0;ie<M.length;ie++){oe.push(36064+ie),A.depthBuffer&&oe.push(xe);const le=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(le===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),q&&n.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[ie]),le===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),q){const ae=i.get(M[ie]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ae,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,ne,9728),p&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let ie=0;ie<M.length;ie++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ie,36161,b.__webglColorRenderbuffer[ie]);const le=i.get(M[ie]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ie,3553,le,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function xt(A){return Math.min(f,A.samples)}function Ge(A){const M=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vn(A){const M=a.render.frame;_.get(A)!==M&&(_.set(A,M),A.update())}function sn(A,M){const V=A.encoding,ee=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Dd||V!==Zr&&(V===je?o===!1?e.has("EXT_sRGB")===!0&&ee===zn?(A.format=Dd,A.minFilter=Qt,A.generateMipmaps=!1):M=Cy.sRGBToLinear(M):(ee!==zn||ne!==Kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=N,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ge}function r3(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===Kr)return 5121;if(s===zw)return 32819;if(s===Uw)return 32820;if(s===Nw)return 5120;if(s===Ow)return 5122;if(s===My)return 5123;if(s===Fw)return 5124;if(s===Dr)return 5125;if(s===Ji)return 5126;if(s===Mo)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bw)return 6406;if(s===zn)return 6408;if(s===Hw)return 6409;if(s===Gw)return 6410;if(s===Vr)return 6402;if(s===ua)return 34041;if(s===Ww)return 6403;if(s===Vw)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Dd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jw)return 36244;if(s===Xw)return 33319;if(s===Yw)return 33320;if(s===$w)return 36249;if(s===Wc||s===jc||s===Xc||s===Yc)if(a===je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$m||s===qm||s===Km||s===Zm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$m)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Km)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qw)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qm||s===Jm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qm)return a===je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jm)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===ag||s===og||s===lg||s===ug||s===cg||s===fg||s===dg||s===hg)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===eg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ng)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ig)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ag)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===og)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ug)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hg)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pg)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===pg)return a===je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Zs?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class s3 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nr extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a3={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,i);if(u.joints[m.jointName]===void 0){const v=new Nr;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[m.jointName]=v,u.add(v)}const g=u.joints[m.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a3)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}}class o3 extends Xt{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Vr,c!==Vr&&c!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Vr&&(i=Dr),i===void 0&&c===ua&&(i=Zs),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class l3 extends ss{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,u=null,c=null,f=null,d=null,p=null;const _=t.getContextAttributes();let m=null,h=null;const g=[],v=[],y=new Wt;y.layers.enable(1),y.viewport=new qe;const S=new Wt;S.layers.enable(2),S.viewport=new qe;const x=[y,S],T=new s3;T.layers.enable(1),T.layers.enable(2);let L=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let N=g[P];return N===void 0&&(N=new Sf,g[P]=N),N.getTargetRaySpace()},this.getControllerGrip=function(P){let N=g[P];return N===void 0&&(N=new Sf,g[P]=N),N.getGripSpace()},this.getHand=function(P){let N=g[P];return N===void 0&&(N=new Sf,g[P]=N),N.getHandSpace()};function C(P){const N=v.indexOf(P.inputSource);if(N===-1)return;const $=g[N];$!==void 0&&$.dispatchEvent({type:P.type,data:P.inputSource})}function D(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",X);for(let P=0;P<g.length;P++){const N=v[P];N!==null&&(v[P]=null,g[P].disconnect(N))}L=null,w=null,e.setRenderTarget(m),d=null,f=null,c=null,r=null,h=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",D),r.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:d}),h=new Qr(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Kr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let N=null,$=null,Y=null;_.depth&&(Y=_.stencil?35056:33190,N=_.stencil?ua:Vr,$=_.stencil?Zs:Dr);const Q={colorFormat:32856,depthFormat:Y,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(Q),r.updateRenderState({layers:[f]}),h=new Qr(f.textureWidth,f.textureHeight,{format:zn,type:Kr,depthTexture:new o3(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ue=e.properties.get(h);ue.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function X(P){for(let N=0;N<P.removed.length;N++){const $=P.removed[N],Y=v.indexOf($);Y>=0&&(v[Y]=null,g[Y].dispatchEvent({type:"disconnected",data:$}))}for(let N=0;N<P.added.length;N++){const $=P.added[N];let Y=v.indexOf($);if(Y===-1){for(let ue=0;ue<g.length;ue++)if(ue>=v.length){v.push($),Y=ue;break}else if(v[ue]===null){v[ue]=$,Y=ue;break}if(Y===-1)break}const Q=g[Y];Q&&Q.dispatchEvent({type:"connected",data:$})}}const te=new R,U=new R;function O(P,N,$){te.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition($.matrixWorld);const Y=te.distanceTo(U),Q=N.projectionMatrix.elements,ue=$.projectionMatrix.elements,_e=Q[14]/(Q[10]-1),G=Q[14]/(Q[10]+1),ke=(Q[9]+1)/Q[5],ye=(Q[9]-1)/Q[5],we=(Q[8]-1)/Q[0],pe=(ue[8]+1)/ue[0],He=_e*we,Le=_e*pe,ve=Y/(-we+pe),mt=ve*-we;N.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(mt),P.translateZ(ve),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Lt=_e+ve,yt=G+ve,rn=He-mt,xt=Le+(Y-mt),Ge=ke*G/yt*Lt,vn=ye*G/yt*Lt;P.projectionMatrix.makePerspective(rn,xt,Ge,vn,Lt,yt)}function W(P,N){N===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(N.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;T.near=S.near=y.near=P.near,T.far=S.far=y.far=P.far,(L!==T.near||w!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,w=T.far);const N=P.parent,$=T.cameras;W(T,N);for(let Q=0;Q<$.length;Q++)W($[Q],N);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),P.matrix.copy(T.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const Y=P.children;for(let Q=0,ue=Y.length;Q<ue;Q++)Y[Q].updateMatrixWorld(!0);$.length===2?O(T,y,S):T.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(P){f!==null&&(f.fixedFoveation=P),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=P)};let K=null;function Z(P,N){if(u=N.getViewerPose(l||a),p=N,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Y=!1;$.length!==T.cameras.length&&(T.cameras.length=0,Y=!0);for(let Q=0;Q<$.length;Q++){const ue=$[Q];let _e=null;if(d!==null)_e=d.getViewport(ue);else{const ke=c.getViewSubImage(f,ue);_e=ke.viewport,Q===0&&(e.setRenderTargetTextures(h,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(h))}let G=x[Q];G===void 0&&(G=new Wt,G.layers.enable(Q),G.viewport=new qe,x[Q]=G),G.matrix.fromArray(ue.transform.matrix),G.projectionMatrix.fromArray(ue.projectionMatrix),G.viewport.set(_e.x,_e.y,_e.width,_e.height),Q===0&&T.matrix.copy(G.matrix),Y===!0&&T.cameras.push(G)}}for(let $=0;$<g.length;$++){const Y=v[$],Q=g[$];Y!==null&&Q!==void 0&&Q.update(Y,N,l||a)}K&&K(P,N),p=null}const k=new Oy;k.setAnimationLoop(Z),this.setAnimationLoop=function(P){K=P},this.dispose=function(){}}}function u3(n,e){function t(m,h){m.fogColor.value.copy(h.color),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,g,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),c(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&d(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),p(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?o(m,h,g,v):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===An&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===An&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let y;h.aoMap?y=h.aoMap:h.lightMap&&(y=h.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function o(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uvTransform.value.copy(g.matrix))}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===An&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function p(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function c3(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function u(v,y){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",h));const x=y.program;i.updateUBOMapping(v,x);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const y=f();v.__bindingPointIndex=y;const S=n.createBuffer(),x=v.__size,T=v.usage;return n.bindBuffer(35345,S),n.bufferData(35345,x,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],S=v.uniforms,x=v.__cache;n.bindBuffer(35345,y);for(let T=0,L=S.length;T<L;T++){const w=S[T];if(p(w,T,x)===!0){const C=w.value,D=w.__offset;typeof C=="number"?(w.__data[0]=C,n.bufferSubData(35345,D,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):C.toArray(w.__data),n.bufferSubData(35345,D,w.__data))}}n.bindBuffer(35345,null)}function p(v,y,S){const x=v.value;if(S[y]===void 0)return typeof x=="number"?S[y]=x:S[y]=x.clone(),!0;if(typeof x=="number"){if(S[y]!==x)return S[y]=x,!0}else{const T=S[y];if(T.equals(x)===!1)return T.copy(x),!0}return!1}function _(v){const y=v.uniforms;let S=0;const x=16;let T=0;for(let L=0,w=y.length;L<w;L++){const C=y[L],D=m(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,L>0){T=S%x;const X=x-T;T!==0&&X-D.boundary<0&&(S+=x-T,C.__offset=S)}S+=D.storage}return T=S%x,T>0&&(S+=x-T),v.__size=S,v.__cache={},this}function m(v){const y=v.value,S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function h(v){const y=v.target;y.removeEventListener("dispose",h);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:g}}function f3(){const n=To("canvas");return n.style.display="block",n}function Vy(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:f3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zr,this.physicallyCorrectLights=!1,this.toneMapping=xi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let h=!1,g=0,v=0,y=null,S=-1,x=null;const T=new qe,L=new qe;let w=null,C=e.width,D=e.height,X=1,te=null,U=null;const O=new qe(0,0,C,D),W=new qe(0,0,C,D);let K=!1;const Z=new np;let k=!1,P=!1,N=null;const $=new Be,Y=new Ee,Q=new R,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return y===null?X:1}let G=t;function ke(E,z){for(let H=0;H<E.length;H++){const F=E[H],j=e.getContext(F,z);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qh}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",tt,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),G=ke(z,E),G===null)throw ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,we,pe,He,Le,ve,mt,Lt,yt,rn,xt,Ge,vn,sn,A,M,V,ee,ne,oe,xe,b,q,ie;function le(){ye=new wT(G),we=new gT(G,ye,n),ye.init(we),b=new r3(G,ye,we),pe=new n3(G,ye,we),He=new ET,Le=new H2,ve=new i3(G,ye,pe,Le,we,b,He),mt=new _T(m),Lt=new ST(m),yt=new OM(G,we),q=new pT(G,ye,yt,we),rn=new MT(G,yt,He,q),xt=new LT(G,rn,yt,He),ne=new CT(G,we,ve),M=new vT(Le),Ge=new V2(m,mt,Lt,ye,we,q,M),vn=new u3(m,Le),sn=new W2,A=new K2(ye,we),ee=new hT(m,mt,pe,xt,c,a),V=new t3(m,xt,we),ie=new c3(G,He,we,pe),oe=new mT(G,ye,He,we),xe=new bT(G,ye,He,we),He.programs=Ge.programs,m.capabilities=we,m.extensions=ye,m.properties=Le,m.renderLists=sn,m.shadowMap=V,m.state=pe,m.info=He}le();const ae=new l3(m,G);this.xr=ae,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(C,D,!1))},this.getSize=function(E){return E.set(C,D)},this.setSize=function(E,z,H){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,D=z,e.width=Math.floor(E*X),e.height=Math.floor(z*X),H!==!1&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(C*X,D*X).floor()},this.setDrawingBufferSize=function(E,z,H){C=E,D=z,X=H,e.width=Math.floor(E*H),e.height=Math.floor(z*H),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,z,H,F){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,z,H,F),pe.viewport(T.copy(O).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,z,H,F){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,z,H,F),pe.scissor(L.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){pe.setScissorTest(K=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,z=!0,H=!0){let F=0;E&&(F|=16384),z&&(F|=256),H&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),sn.dispose(),A.dispose(),Le.dispose(),mt.dispose(),Lt.dispose(),xt.dispose(),q.dispose(),ie.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ue),ae.removeEventListener("sessionend",Et),N&&(N.dispose(),N=null),ht.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=He.autoReset,z=V.enabled,H=V.autoUpdate,F=V.needsUpdate,j=V.type;le(),He.autoReset=E,V.enabled=z,V.autoUpdate=H,V.needsUpdate=F,V.type=j}function tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function I(E){const z=E.target;z.removeEventListener("dispose",I),se(z)}function se(E){B(E),Le.remove(E)}function B(E){const z=Le.get(E).programs;z!==void 0&&(z.forEach(function(H){Ge.releaseProgram(H)}),E.isShaderMaterial&&Ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,H,F,j,ge){z===null&&(z=ue);const be=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Ox(E,z,H,F,j);pe.setMaterial(F,be);let Te=H.index;const We=H.attributes.position;if(Te===null){if(We===void 0||We.count===0)return}else if(Te.count===0)return;let Oe=1;F.wireframe===!0&&(Te=rn.getWireframeAttribute(H),Oe=2),q.setup(j,F,Pe,H,Te);let Fe,lt=oe;Te!==null&&(Fe=yt.get(Te),lt=xe,lt.setIndex(Fe));const _r=Te!==null?Te.count:We.count,os=H.drawRange.start*Oe,ls=H.drawRange.count*Oe,Wn=ge!==null?ge.start*Oe:0,Ve=ge!==null?ge.count*Oe:1/0,us=Math.max(os,Wn),gt=Math.min(_r,os+ls,Wn+Ve)-1,yn=Math.max(0,gt-us+1);if(yn!==0){if(j.isMesh)F.wireframe===!0?(pe.setLineWidth(F.wireframeLinewidth*_e()),lt.setMode(1)):lt.setMode(4);else if(j.isLine){let Ii=F.linewidth;Ii===void 0&&(Ii=1),pe.setLineWidth(Ii*_e()),j.isLineSegments?lt.setMode(1):j.isLineLoop?lt.setMode(2):lt.setMode(3)}else j.isPoints?lt.setMode(0):j.isSprite&&lt.setMode(4);if(j.isInstancedMesh)lt.renderInstances(us,yn,j.count);else if(H.isInstancedBufferGeometry){const Ii=Math.min(H.instanceCount,H._maxInstanceCount);lt.renderInstances(us,yn,Ii)}else lt.render(us,yn)}},this.compile=function(E,z){function H(F,j,ge){F.transparent===!0&&F.side===vi?(F.side=An,F.needsUpdate=!0,Yo(F,j,ge),F.side=qr,F.needsUpdate=!0,Yo(F,j,ge),F.side=vi):Yo(F,j,ge)}d=A.get(E),d.init(),_.push(d),E.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(m.physicallyCorrectLights),E.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let ge=0;ge<j.length;ge++){const be=j[ge];H(be,E,F)}else H(j,E,F)}),_.pop(),d=null};let fe=null;function ce(E){fe&&fe(E)}function Ue(){ht.stop()}function Et(){ht.start()}const ht=new Oy;ht.setAnimationLoop(ce),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(E){fe=E,ae.setAnimationLoop(E),E===null?ht.stop():ht.start()},ae.addEventListener("sessionstart",Ue),ae.addEventListener("sessionend",Et),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(z),z=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,z,y),d=A.get(E,_.length),d.init(),_.push(d),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix($),P=this.localClippingEnabled,k=M.init(this.clippingPlanes,P,z),f=sn.get(E,p.length),f.init(),p.push(f),Di(E,z,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(te,U),k===!0&&M.beginShadows();const H=d.state.shadowsArray;if(V.render(H,E,z),k===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,E),d.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const F=z.cameras;for(let j=0,ge=F.length;j<ge;j++){const be=F[j];ot(f,E,be,be.viewport)}}else ot(f,E,z);y!==null&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(m,E,z),q.resetDefaultState(),S=-1,x=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Di(E,z,H,F){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){F&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const be=xt.update(E),Pe=E.material;Pe.visible&&f.push(E,be,Pe,H,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==He.render.frame&&(E.skeleton.update(),E.skeleton.frame=He.render.frame),!E.frustumCulled||Z.intersectsObject(E))){F&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const be=xt.update(E),Pe=E.material;if(Array.isArray(Pe)){const Te=be.groups;for(let We=0,Oe=Te.length;We<Oe;We++){const Fe=Te[We],lt=Pe[Fe.materialIndex];lt&&lt.visible&&f.push(E,be,lt,H,Q.z,Fe)}}else Pe.visible&&f.push(E,be,Pe,H,Q.z,null)}}const ge=E.children;for(let be=0,Pe=ge.length;be<Pe;be++)Di(ge[be],z,H,F)}function ot(E,z,H,F){const j=E.opaque,ge=E.transmissive,be=E.transparent;d.setupLightsView(H),ge.length>0&&ii(j,z,H),F&&pe.viewport(T.copy(F)),j.length>0&&_n(j,z,H),ge.length>0&&_n(ge,z,H),be.length>0&&_n(be,z,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ii(E,z,H){const F=we.isWebGL2;N===null&&(N=new Qr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Mo:Kr,minFilter:va,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(Y),F?N.setSize(Y.x,Y.y):N.setSize(ku(Y.x),ku(Y.y));const j=m.getRenderTarget();m.setRenderTarget(N),m.clear();const ge=m.toneMapping;m.toneMapping=xi,_n(E,z,H),m.toneMapping=ge,ve.updateMultisampleRenderTarget(N),ve.updateRenderTargetMipmap(N),m.setRenderTarget(j)}function _n(E,z,H){const F=z.isScene===!0?z.overrideMaterial:null;for(let j=0,ge=E.length;j<ge;j++){const be=E[j],Pe=be.object,Te=be.geometry,We=F===null?be.material:F,Oe=be.group;Pe.layers.test(H.layers)&&Nx(Pe,z,H,Te,We,Oe)}}function Nx(E,z,H,F,j,ge){E.onBeforeRender(m,z,H,F,j,ge),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(m,z,H,F,E,ge),j.transparent===!0&&j.side===vi?(j.side=An,j.needsUpdate=!0,m.renderBufferDirect(H,z,F,j,E,ge),j.side=qr,j.needsUpdate=!0,m.renderBufferDirect(H,z,F,j,E,ge),j.side=vi):m.renderBufferDirect(H,z,F,j,E,ge),E.onAfterRender(m,z,H,F,j,ge)}function Yo(E,z,H){z.isScene!==!0&&(z=ue);const F=Le.get(E),j=d.state.lights,ge=d.state.shadowsArray,be=j.state.version,Pe=Ge.getParameters(E,j.state,ge,z,H),Te=Ge.getProgramCacheKey(Pe);let We=F.programs;F.environment=E.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(E.isMeshStandardMaterial?Lt:mt).get(E.envMap||F.environment),We===void 0&&(E.addEventListener("dispose",I),We=new Map,F.programs=We);let Oe=We.get(Te);if(Oe!==void 0){if(F.currentProgram===Oe&&F.lightsStateVersion===be)return Rp(E,Pe),Oe}else Pe.uniforms=Ge.getUniforms(E),E.onBuild(H,Pe,m),E.onBeforeCompile(Pe,m),Oe=Ge.acquireProgram(Pe,Te),We.set(Te,Oe),F.uniforms=Pe.uniforms;const Fe=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=M.uniform),Rp(E,Pe),F.needsLights=zx(E),F.lightsStateVersion=be,F.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix);const lt=Oe.getUniforms(),_r=au.seqWithValue(lt.seq,Fe);return F.currentProgram=Oe,F.uniformsList=_r,Oe}function Rp(E,z){const H=Le.get(E);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Ox(E,z,H,F,j){z.isScene!==!0&&(z=ue),ve.resetTextureUnits();const ge=z.fog,be=F.isMeshStandardMaterial?z.environment:null,Pe=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Zr,Te=(F.isMeshStandardMaterial?Lt:mt).get(F.envMap||be),We=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!F.normalMap&&!!H.attributes.tangent,Fe=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,_r=!!H.morphAttributes.color,os=F.toneMapped?m.toneMapping:xi,ls=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Wn=ls!==void 0?ls.length:0,Ve=Le.get(F),us=d.state.lights;if(k===!0&&(P===!0||E!==x)){const an=E===x&&F.id===S;M.setState(F,E,an)}let gt=!1;F.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==us.state.version||Ve.outputEncoding!==Pe||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Te||F.fog===!0&&Ve.fog!==ge||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==M.numPlanes||Ve.numIntersection!==M.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Oe||Ve.morphTargets!==Fe||Ve.morphNormals!==lt||Ve.morphColors!==_r||Ve.toneMapping!==os||we.isWebGL2===!0&&Ve.morphTargetsCount!==Wn)&&(gt=!0):(gt=!0,Ve.__version=F.version);let yn=Ve.currentProgram;gt===!0&&(yn=Yo(F,z,j));let Ii=!1,ba=!1,mc=!1;const Vt=yn.getUniforms(),yr=Ve.uniforms;if(pe.useProgram(yn.program)&&(Ii=!0,ba=!0,mc=!0),F.id!==S&&(S=F.id,ba=!0),Ii||x!==E){if(Vt.setValue(G,"projectionMatrix",E.projectionMatrix),we.logarithmicDepthBuffer&&Vt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,ba=!0,mc=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const an=Vt.map.cameraPosition;an!==void 0&&an.setValue(G,Q.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Vt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&Vt.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){Vt.setOptional(G,j,"bindMatrix"),Vt.setOptional(G,j,"bindMatrixInverse");const an=j.skeleton;an&&(we.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Vt.setValue(G,"boneTexture",an.boneTexture,ve),Vt.setValue(G,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gc=H.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&we.isWebGL2===!0)&&ne.update(j,H,F,yn),(ba||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Vt.setValue(G,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(yr.envMap.value=Te,yr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ba&&(Vt.setValue(G,"toneMappingExposure",m.toneMappingExposure),Ve.needsLights&&Fx(yr,mc),ge&&F.fog===!0&&vn.refreshFogUniforms(yr,ge),vn.refreshMaterialUniforms(yr,F,X,D,N),au.upload(G,Ve.uniformsList,yr,ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(au.upload(G,Ve.uniformsList,yr,ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Vt.setValue(G,"center",j.center),Vt.setValue(G,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(G,"normalMatrix",j.normalMatrix),Vt.setValue(G,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const an=F.uniformsGroups;for(let vc=0,Ux=an.length;vc<Ux;vc++)if(we.isWebGL2){const Dp=an[vc];ie.update(Dp,yn),ie.bind(Dp,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function Fx(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function zx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,z,H){Le.get(E.texture).__webglTexture=z,Le.get(E.depthTexture).__webglTexture=H;const F=Le.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=H===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const H=Le.get(E);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,H=0){y=E,g=z,v=H;let F=!0;if(E){const Te=Le.get(E);Te.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(E):Te.__hasExternalTextures&&ve.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture)}let j=null,ge=!1,be=!1;if(E){const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(be=!0);const We=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=We[z],ge=!0):we.isWebGL2&&E.samples>0&&ve.useMultisampledRTT(E)===!1?j=Le.get(E).__webglMultisampledFramebuffer:j=We,T.copy(E.viewport),L.copy(E.scissor),w=E.scissorTest}else T.copy(O).multiplyScalar(X).floor(),L.copy(W).multiplyScalar(X).floor(),w=K;if(pe.bindFramebuffer(36160,j)&&we.drawBuffers&&F&&pe.drawBuffers(E,j),pe.viewport(T),pe.scissor(L),pe.setScissorTest(w),ge){const Te=Le.get(E.texture);G.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,H)}else if(be){const Te=Le.get(E.texture),We=z||0;G.framebufferTextureLayer(36160,36064,Te.__webglTexture,H||0,We)}S=-1},this.readRenderTargetPixels=function(E,z,H,F,j,ge,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){pe.bindFramebuffer(36160,Pe);try{const Te=E.texture,We=Te.format,Oe=Te.type;if(We!==zn&&b.convert(We)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===Mo&&(ye.has("EXT_color_buffer_half_float")||we.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Oe!==Kr&&b.convert(Oe)!==G.getParameter(35738)&&!(Oe===Ji&&(we.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-F&&H>=0&&H<=E.height-j&&G.readPixels(z,H,F,j,b.convert(We),b.convert(Oe),ge)}finally{const Te=y!==null?Le.get(y).__webglFramebuffer:null;pe.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(E,z,H=0){const F=Math.pow(2,-H),j=Math.floor(z.image.width*F),ge=Math.floor(z.image.height*F);ve.setTexture2D(z,0),G.copyTexSubImage2D(3553,H,0,0,E.x,E.y,j,ge),pe.unbindTexture()},this.copyTextureToTexture=function(E,z,H,F=0){const j=z.image.width,ge=z.image.height,be=b.convert(H.format),Pe=b.convert(H.type);ve.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,F,E.x,E.y,j,ge,be,Pe,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,F,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):G.texSubImage2D(3553,F,E.x,E.y,be,Pe,z.image),F===0&&H.generateMipmaps&&G.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,H,F,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,be=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Te=b.convert(F.format),We=b.convert(F.type);let Oe;if(F.isData3DTexture)ve.setTexture3D(F,0),Oe=32879;else if(F.isDataArrayTexture)ve.setTexture2DArray(F,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Fe=G.getParameter(3314),lt=G.getParameter(32878),_r=G.getParameter(3316),os=G.getParameter(3315),ls=G.getParameter(32877),Wn=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Wn.width),G.pixelStorei(32878,Wn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(Oe,j,z.x,z.y,z.z,ge,be,Pe,Te,We,Wn.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Oe,j,z.x,z.y,z.z,ge,be,Pe,Te,Wn.data)):G.texSubImage3D(Oe,j,z.x,z.y,z.z,ge,be,Pe,Te,We,Wn),G.pixelStorei(3314,Fe),G.pixelStorei(32878,lt),G.pixelStorei(3316,_r),G.pixelStorei(3315,os),G.pixelStorei(32877,ls),j===0&&F.generateMipmaps&&G.generateMipmap(Oe),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){g=0,v=0,y=null,pe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class d3 extends Vy{}d3.prototype.isWebGL1Renderer=!0;class h3 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class p3{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new R;class ap{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ap(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jg=new R,e0=new qe,t0=new qe,m3=new R,n0=new Be;class g3 extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;e0.fromBufferAttribute(r.attributes.skinIndex,e),t0.fromBufferAttribute(r.attributes.skinWeight,e),Jg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=t0.getComponent(s);if(a!==0){const o=e0.getComponent(s);n0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(m3.copy(Jg).applyMatrix4(n0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hy extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class v3 extends Xt{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Rt,c=Rt,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const i0=new Be,_3=new Be;class op{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:_3;i0.multiplyMatrices(o,t[s]),i0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new op(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ey(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new v3(t,e,e,zn,Ji);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Hy),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Gy extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const r0=new R,s0=new R,a0=new Be,wf=new tp,Rl=new ya;class lp extends dt{constructor(e=new ti,t=new Gy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)r0.fromBufferAttribute(t,r-1),s0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=r0.distanceTo(s0);e.setAttribute("lineDistance",new Si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;a0.copy(r).invert(),wf.copy(e.ray).applyMatrix4(a0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new R,c=new R,f=new R,d=new R,p=this.isLineSegments?2:1,_=i.index,h=i.attributes.position;if(_!==null){const g=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let y=g,S=v-1;y<S;y+=p){const x=_.getX(y),T=_.getX(y+1);if(u.fromBufferAttribute(h,x),c.fromBufferAttribute(h,T),wf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=g,S=v-1;y<S;y+=p){if(u.fromBufferAttribute(h,y),c.fromBufferAttribute(h,y+1),wf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const o0=new R,l0=new R;class y3 extends lp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)o0.fromBufferAttribute(t,r),l0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+o0.distanceTo(l0);e.setAttribute("lineDistance",new Si(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x3 extends lp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wy extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u0=new Be,Nd=new tp,Dl=new ya,Il=new R;class S3 extends dt{constructor(e=new ti,t=new Wy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;u0.copy(r).invert(),Nd.copy(e.ray).applyMatrix4(u0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p;_<m;_++){const h=u.getX(_);Il.fromBufferAttribute(f,h),c0(Il,h,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p;_<m;_++)Il.fromBufferAttribute(f,_),c0(Il,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function c0(n,e,t,i,r,s,a){const o=Nd.distanceSqToPoint(n);if(o<t){const l=new R;Nd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class rc extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class as extends rc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Hi(n,e,t){return jy(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function kl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function jy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function w3(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function f0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function Xy(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Ho{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class M3 extends Ho{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mg,endingEnd:mg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case gg:s=e,o=2*t-i;break;case vg:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gg:a=e,l=2*i-t;break;case vg:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),m=_*_,h=m*_,g=-d*h+2*d*m-d*_,v=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*_+1,y=(-1-p)*h+(1.5+p)*m+.5*_,S=p*h-p*m;for(let x=0;x!==o;++x)s[x]=g*a[c+x]+v*a[u+x]+y*a[l+x]+S*a[f+x];return s}}class b3 extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(i-t)/(r-t),f=1-c;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[l+d]*c;return s}}class E3 extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kl(t,this.TimeBufferType),this.values=kl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kl(e.times,Array),values:kl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new E3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new b3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Hi(i,s,a),this.values=Hi(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&jy(r))for(let o=0,l=r.length;o!==l;++o){const u=r[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=Hi(this.times),t=Hi(this.values),i=this.getValueSize(),r=this.getInterpolation()===$c,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(r)l=!0;else{const f=o*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const m=t[f+_];if(m!==t[d+_]||m!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,u=0;u!==i;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=Hi(e,0,a),this.values=Hi(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=Hi(this.times,0),t=Hi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=ca;class Sa extends ni{}Sa.prototype.ValueTypeName="bool";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=bo;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class Yy extends ni{}Yy.prototype.ValueTypeName="color";class Ao extends ni{}Ao.prototype.ValueTypeName="number";class T3 extends Ho{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let u=e*o;for(let c=u+o;u!==c;u+=4)Ti.slerpFlat(s,0,a,u-o,a,u,l);return s}}class es extends ni{InterpolantFactoryMethodLinear(e){return new T3(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=ca;es.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends ni{}wa.prototype.ValueTypeName="string";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=bo;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends ni{}Co.prototype.ValueTypeName="vector";class A3{constructor(e,t=-1,i,r=Kw){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(L3(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(ni.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],u=[];l.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const c=w3(l);l=f0(l,1,c),u=f0(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),a.push(new Ao(".morphTargetInfluences["+t[o].name+"]",l,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const u=e[o],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,m){if(p.length!==0){const h=[],g=[];Xy(p,h,g,_),h.length!==0&&m.push(new f(d,h,g))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let m=0;m<d[_].morphTargets.length;m++)p[d[_].morphTargets[m]]=-1;for(const m in p){const h=[],g=[];for(let v=0;v!==d[_].morphTargets.length;++v){const y=d[_];h.push(y.time),g.push(y.morphTarget===m?1:0)}r.push(new Ao(".morphTargetInfluence["+m+"]",h,g))}l=p.length*a}else{const p=".bones["+t[f].name+"]";i(Co,p+".position",d,"pos",r),i(es,p+".quaternion",d,"rot",r),i(Co,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C3(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ao;case"vector":case"vector2":case"vector3":case"vector4":return Co;case"color":return Yy;case"quaternion":return es;case"bool":case"boolean":return Sa;case"string":return wa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function L3(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C3(n.type);if(n.times===void 0){const t=[],i=[];Xy(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const da={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class P3{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const R3=new P3;class Go{constructor(e){this.manager=e!==void 0?e:R3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ui={};class D3 extends Error{constructor(e,t){super(e),this.response=t}}class $y extends Go{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=da.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:r});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ui[e],f=u.body.getReader(),d=u.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let m=0;const h=new ReadableStream({start(g){v();function v(){f.read().then(({done:y,value:S})=>{if(y)g.close();else{m+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:p});for(let T=0,L=c.length;T<L;T++){const w=c[T];w.onProgress&&w.onProgress(x)}g.enqueue(S),v()}})}}});return new Response(h)}else throw new D3(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{da.add(e,u);const c=ui[e];delete ui[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ui[e];if(c===void 0)throw this.manager.itemError(e),u;delete ui[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I3 extends Go{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=da.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=To("img");function l(){c(),da.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class k3 extends Go{constructor(e){super(e)}load(e,t,i,r){const s=new Xt,a=new I3(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class sc extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const d0=new Be,h0=new R,p0=new R;class up{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h0.setFromMatrixPosition(e.matrixWorld),t.position.copy(h0),p0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p0),t.updateMatrixWorld(),d0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N3 extends up{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Eo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O3 extends sc{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new N3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const m0=new Be,Oa=new R,Mf=new R;class F3 extends up{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oa),Mf.copy(i.position),Mf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-Oa.x,-Oa.y,-Oa.z),m0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(m0)}}class z3 extends sc{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new F3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class U3 extends up{constructor(){super(new rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qy extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.shadow=new U3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B3 extends sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V3 extends Go{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=da.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){da.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class H3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=g0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=g0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function g0(){return(typeof performance>"u"?Date:performance).now()}const cp="\\[\\]\\.:\\/",G3=new RegExp("["+cp+"]","g"),fp="[^"+cp+"]",W3="[^"+cp.replace("\\.","")+"]",j3=/((?:WC+[\/:])*)/.source.replace("WC",fp),X3=/(WCOD+)?/.source.replace("WCOD",W3),Y3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fp),$3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fp),q3=new RegExp("^"+j3+X3+Y3+$3+"$"),K3=["material","materials","bones","map"];class Z3{constructor(e,t,i){const r=i||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Xe{constructor(e,t,i){this.path=t,this.parsedPath=i||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,i):new Xe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G3,"")}static parseTrackName(e){const t=q3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);K3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=Z3;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class v0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);class Q3 extends Go{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new dA(t)})}load(e,t,i,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Gr.extractUrlBase(e),this.manager.itemStart(e);const o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $y(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,a,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={};if(typeof e=="string")s=e;else if(Gr.decodeText(new Uint8Array(e,0,4))===Ky){try{a[De.KHR_BINARY_GLTF]=new hA(e)}catch(f){r&&r(f);return}s=a[De.KHR_BINARY_GLTF].content}else s=Gr.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new TA(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);o[f.name]=f,a[f.name]=!0}if(l.extensionsUsed)for(let c=0;c<l.extensionsUsed.length;++c){const f=l.extensionsUsed[c],d=l.extensionsRequired||[];switch(f){case De.KHR_MATERIALS_UNLIT:a[f]=new tA;break;case De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[f]=new gA;break;case De.KHR_DRACO_MESH_COMPRESSION:a[f]=new pA(l,this.dracoLoader);break;case De.KHR_TEXTURE_TRANSFORM:a[f]=new mA;break;case De.KHR_MESH_QUANTIZATION:a[f]=new vA;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function J3(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const De={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class eA{constructor(e){this.parser=e,this.name=De.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Ae(16777215);l.color!==void 0&&c.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new qy(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new z3(c),u.distance=f;break;case"spot":u=new O3(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class tA{constructor(){this.name=De.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,i){const r=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,je))}return Promise.all(r)}}class nA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class iA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(o,o)}return Promise.all(s)}}class rA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class sA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,je)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class aA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class oA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(o[0],o[1],o[2]),Promise.all(s)}}class lA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class uA{constructor(e){this.parser=e,this.name=De.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:as}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,je)),Promise.all(s)}}class cA{constructor(e){this.parser=e,this.name=De.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class fA{constructor(e){this.parser=e,this.name=De.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dA{constructor(e){this.name=De.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,d=new Uint8Array(o,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(c*f);return a.decodeGltfBuffer(new Uint8Array(p),c,f,d,r.mode,r.filter),p})})}else return null}}const Ky="glTF",Fa=12,_0={JSON:1313821514,BIN:5130562};class hA{constructor(e){this.name=De.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fa);if(this.header={magic:Gr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ky)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fa,r=new DataView(e,Fa);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===_0.JSON){const l=new Uint8Array(e,Fa+s,a);this.content=Gr.decodeText(l)}else if(o===_0.BIN){const l=Fa+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=De.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},u={};for(const c in a){const f=Fd[c]||c.toLowerCase();o[f]=a[c]}for(const c in e.attributes){const f=Fd[c]||c.toLowerCase();if(a[c]!==void 0){const d=i.accessors[e.attributes[c]],p=Lo[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f){r.decodeDracoFile(c,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}f(d)},o,u)})})}}class mA{constructor(){this.name=De.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Od extends rc{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Ae().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const u in o)l.uniforms[u]=o[u];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class gA{constructor(){this.name=De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Od}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new Ae(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",r.diffuseTexture,je)),e.emissive=new Ae(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Ae(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",a)),s.push(i.assignTexture(e,"specularMap",a,je))}return Promise.all(s)}createMaterial(e){const t=new Od(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Jh,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class vA{constructor(){this.name=De.KHR_MESH_QUANTIZATION}}class Zy extends Ho{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,c=r-t,f=(i-t)/c,d=f*f,p=d*f,_=e*u,m=_-u,h=-2*p+3*d,g=p-d,v=1-h,y=g-d+f;for(let S=0;S!==o;S++){const x=a[m+S+o],T=a[m+S+l]*c,L=a[_+S+o],w=a[_+S]*c;s[S]=v*x+y*T+h*L+g*w}return s}}const _A=new Ti;class yA extends Zy{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return _A.fromArray(s).normalize().toArray(s),s}}const ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y0={9728:Rt,9729:Qt,9984:Ld,9985:wy,9986:Pd,9987:va},x0={33071:Mn,33648:Iu,10497:la},S0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xA={CUBICSPLINE:void 0,LINEAR:ca,STEP:bo},bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new rc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qr})),n.DefaultMaterial}function za(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ar(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wA(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function MA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bA(n){const e=n.extensions&&n.extensions[De.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+w0(e.attributes):t=n.indices+":"+w0(n.attributes)+":"+n.mode,t}function w0(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function zd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class TA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new J3,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new k3(this.options.manager):this.textureLoader=new V3(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $y(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};za(s,o,r),Ar(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[u,c]of a.children.entries())s(c,o.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[De.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(Gr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=S0[r.type],u=Lo[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let m,h;if(p&&p!==f){const g=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let y=t.cache.get(v);y||(m=new u(o,g*p,r.count*p/c),y=new p3(m,p/c),t.cache.add(v,y)),h=new ap(y,l,d%p/c,_)}else o===null?m=new u(r.count*l):m=new u(o,d,r.count*l),h=new dn(m,l,_);if(r.sparse!==void 0){const g=S0.SCALAR,v=Lo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,x=new v(a[1],y,r.sparse.count*g),T=new u(a[2],S,r.sparse.count*l);o!==null&&(h=new dn(h.array.slice(),h.itemSize,h.normalized));for(let L=0,w=x.length;L<w;L++){const C=x[L];if(h.setX(C,T[L*l]),l>=2&&h.setY(C,T[L*l+1]),l>=3&&h.setZ(C,T[L*l+2]),l>=4&&h.setW(C,T[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,a.name&&(c.name=a.name);const d=(s.samplers||{})[a.sampler]||{};return c.magFilter=y0[d.magFilter]||Qt,c.minFilter=y0[d.minFilter]||va,c.wrapS=x0[d.wrapS]||la,c.wrapT=x0[d.wrapT]||la,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){const h=new Xt(m);h.needsUpdate=!0,d(h)}),t.load(Gr.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return u===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||EA(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[De.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[De.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[De.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.encoding=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Wy,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Gy,ei.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return rc}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},u=[];if(l[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=f.getMaterialType(),u.push(f.extendParams(o,s,t))}else if(l[De.KHR_MATERIALS_UNLIT]){const f=r[De.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",f.baseColorTexture,je)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=vi);const c=s.alphaMode||bf.OPAQUE;if(c===bf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===bf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==kr&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==kr&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==kr&&(o.emissive=new Ae().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==kr&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,je)),Promise.all(u).then(function(){let f;return a===Od?f=r[De.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):f=new a(o),s.name&&(f.name=s.name),Ar(f,s),t.associations.set(f,{materials:e}),s.extensions&&za(r,f,s),f})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[De.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return M0(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],c=bA(u),f=r[c];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[De.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=M0(new ti,u,t),r[c]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,u=a.length;l<u;l++){const c=a[l].material===void 0?SA(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,_=c.length;p<_;p++){const m=c[p],h=a[p];let g;const v=u[p];if(h.mode===ci.TRIANGLES||h.mode===ci.TRIANGLE_STRIP||h.mode===ci.TRIANGLE_FAN||h.mode===void 0)g=s.isSkinnedMesh===!0?new g3(m,v):new qn(m,v),g.isSkinnedMesh===!0&&!g.geometry.attributes.skinWeight.normalized&&g.normalizeSkinWeights(),h.mode===ci.TRIANGLE_STRIP?g.geometry=b0(g.geometry,Zw):h.mode===ci.TRIANGLE_FAN&&(g.geometry=b0(g.geometry,by));else if(h.mode===ci.LINES)g=new y3(m,v);else if(h.mode===ci.LINE_STRIP)g=new lp(m,v);else if(h.mode===ci.LINE_LOOP)g=new x3(m,v);else if(h.mode===ci.POINTS)g=new S3(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(g.geometry.morphAttributes).length>0&&MA(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ar(g,s),h.extensions&&za(r,g,h),t.assignFinalMaterial(g),f.push(g)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const d=new Nr;t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Wt(mM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new rp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ar(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const i=this.json.animations[e],r=[],s=[],a=[],o=[],l=[];for(let u=0,c=i.channels.length;u<c;u++){const f=i.channels[u],d=i.samplers[f.sampler],p=f.target,_=p.node,m=i.parameters!==void 0?i.parameters[d.input]:d.input,h=i.parameters!==void 0?i.parameters[d.output]:d.output;r.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",h)),o.push(d),l.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2],p=u[3],_=u[4],m=[];for(let g=0,v=c.length;g<v;g++){const y=c[g],S=f[g],x=d[g],T=p[g],L=_[g];if(y===void 0)continue;y.updateMatrix();let w;switch(Gi[L.path]){case Gi.weights:w=Ao;break;case Gi.rotation:w=es;break;case Gi.position:case Gi.scale:default:w=Co;break}const C=y.name?y.name:y.uuid,D=T.interpolation!==void 0?xA[T.interpolation]:ca,X=[];Gi[L.path]===Gi.weights?y.traverse(function(U){U.morphTargetInfluences&&X.push(U.name?U.name:U.uuid)}):X.push(C);let te=x.array;if(x.normalized){const U=zd(te.constructor),O=new Float32Array(te.length);for(let W=0,K=te.length;W<K;W++)O[W]=te[W]*U;te=O}for(let U=0,O=X.length;U<O;U++){const W=new w(X[U]+"."+Gi[L.path],S.array,te,D);T.interpolation==="CUBICSPLINE"&&(W.createInterpolant=function(Z){const k=this instanceof es?yA:Zy;return new k(this.times,this.values,this.getValueSize()/3,Z)},W.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(W)}}const h=i.name?i.name:"animation_"+e;return new A3(h,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,u=r.weights.length;l<u;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this.extensions,r=this,s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"";return function(){const o=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new Hy:o.length>1?l=new Nr:o.length===1?l=o[0]:l=new dt,l!==o[0])for(let u=0,c=o.length;u<c;u++)l.add(o[u]);if(s.name&&(l.userData.name=s.name,l.name=a),Ar(l,s),s.extensions&&za(i,l,s),s.matrix!==void 0){const u=new Be;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],s=this,a=new Nr;r.name&&(a.name=s.createUniqueName(r.name)),Ar(a,r),r.extensions&&za(i,a,r);const o=r.nodes||[],l=[];for(let u=0,c=o.length;u<c;u++)l.push(Qy(o[u],a,t,s));return Promise.all(l).then(function(){const u=c=>{const f=new Map;for(const[d,p]of s.associations)(d instanceof ei||d instanceof Xt)&&f.set(d,p);return c.traverse(d=>{const p=s.associations.get(d);p!=null&&f.set(d,p)}),f};return s.associations=u(a),a})}}function Qy(n,e,t,i){const r=t.nodes[n];return i.getDependency("node",n).then(function(s){if(r.skin===void 0)return s;let a;return i.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let u=0,c=a.joints.length;u<c;u++)l.push(i.getDependency("node",a.joints[u]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const u=[],c=[];for(let f=0,d=o.length;f<d;f++){const p=o[f];if(p){u.push(p);const _=new Be;a.inverseBindMatrices!==void 0&&_.fromArray(a.inverseBindMatrices.array,f*16),c.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[f])}l.bind(new op(u,c),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(r.children){const o=r.children;for(let l=0,u=o.length;l<u;l++){const c=o[l];a.push(Qy(c,s,t,i))}}return Promise.all(a)})}function AA(n,e,t){const i=e.attributes,r=new _a;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(u[0],u[1],u[2])),o.normalized){const c=zd(Lo[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,l=new R;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const m=zd(Lo[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new ya;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function M0(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Fd[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Ar(n,e),AA(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?wA(n,e.targets,t):n})}function b0(n,e){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===by)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s}let CA=[{id:1,title:"Software Engineer Intern",location:"San Jose, CA",description:"Automated provisioning crucial AWS infrastructures using the latest AMIs, providing an invaluable solution that could potentially save over $100,000 from security vulnerabilities.",buttonText:"View Presentation",date:"June 2022 - August 2022",icon:"work",link:"https://docs.google.com/presentation/d/1U8rsCI62kaBzWlpb4Fy96FTAkWF7GCsvmIFL9AxjuUM/edit?usp=sharing",img:"images/verizon.jpg"},{id:2,title:"Mobile App Developer Intern",location:"Santa Barbara, CA",description:"Created, from scratch, a mobile IOS app in Flutter that tracks your habits and practices mindfulness.  This app is right now being used at the forefront of groundbreaking research being conducted at META Lab in UCSB.",buttonText:"View App",date:"August 2021 - June 2022",icon:"work",link:"https://apps.apple.com/app/curiosity-application/id1620492635?platform=iphone",img:"images/UCSB2.png"}];var ac={},Ce={exports:{}},LA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PA=LA,RA=PA;function Jy(){}function ex(){}ex.resetWarningCache=Jy;var DA=function(){function n(i,r,s,a,o,l){if(l!==RA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ex,resetWarningCache:Jy};return t.PropTypes=t,t};Ce.exports=DA();var dp={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var i=[],r=0;r<arguments.length;r++){var s=arguments[r];if(!!s){var a=typeof s;if(a==="string"||a==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var o=t.apply(null,s);o&&i.push(o)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&i.push(l)}}}return i.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(dp);ac.__esModule=!0;ac.default=void 0;var IA=hp(ft.exports),Wi=hp(Ce.exports),kA=hp(dp.exports);function hp(n){return n&&n.__esModule?n:{default:n}}const pp=({animate:n,className:e,layout:t,lineColor:i,children:r})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),IA.default.createElement("div",{className:(0,kA.default)(e,"vertical-timeline",{"vertical-timeline--animate":n,"vertical-timeline--two-columns":t==="2-columns","vertical-timeline--one-column-left":t==="1-column"||t==="1-column-left","vertical-timeline--one-column-right":t==="1-column-right"})},r));pp.propTypes={children:Wi.default.oneOfType([Wi.default.arrayOf(Wi.default.node),Wi.default.node]).isRequired,className:Wi.default.string,animate:Wi.default.bool,layout:Wi.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:Wi.default.string};pp.defaultProps={animate:!0,className:"",layout:"2-columns",lineColor:"#FFF"};var NA=pp;ac.default=NA;var oc={};function Ud(){return Ud=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ud.apply(this,arguments)}function OA(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Bd(n,e)}function Bd(n,e){return Bd=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},Bd(n,e)}function FA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}var Vd=new Map,Nl=new WeakMap,E0=0,tx=void 0;function zA(n){tx=n}function UA(n){return n?(Nl.has(n)||(E0+=1,Nl.set(n,E0.toString())),Nl.get(n)):"0"}function BA(n){return Object.keys(n).sort().filter(function(e){return n[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?UA(n.root):n[e])}).toString()}function VA(n){var e=BA(n),t=Vd.get(e);if(!t){var i=new Map,r,s=new IntersectionObserver(function(a){a.forEach(function(o){var l,u=o.isIntersecting&&r.some(function(c){return o.intersectionRatio>=c});n.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(l=i.get(o.target))==null||l.forEach(function(c){c(u,o)})})},n);r=s.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:s,elements:i},Vd.set(e,t)}return t}function mp(n,e,t,i){if(t===void 0&&(t={}),i===void 0&&(i=tx),typeof window.IntersectionObserver>"u"&&i!==void 0){var r=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var s=VA(t),a=s.id,o=s.observer,l=s.elements,u=l.get(n)||[];return l.has(n)||l.set(n,u),u.push(e),o.observe(n),function(){u.splice(u.indexOf(e),1),u.length===0&&(l.delete(n),o.unobserve(n)),l.size===0&&(o.disconnect(),Vd.delete(a))}}var HA=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function T0(n){return typeof n.children!="function"}var Nu=function(n){OA(e,n);function e(i){var r;return r=n.call(this,i)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(s){r.node&&(r.unobserve(),!s&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=s||null,r.observeNode()},r.handleChange=function(s,a){s&&r.props.triggerOnce&&r.unobserve(),T0(r.props)||r.setState({inView:s,entry:a}),r.props.onChange&&r.props.onChange(s,a)},r.state={inView:!!i.initialInView,entry:void 0},r}var t=e.prototype;return t.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},t.componentWillUnmount=function(){this.unobserve(),this.node=null},t.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,s=r.threshold,a=r.root,o=r.rootMargin,l=r.trackVisibility,u=r.delay,c=r.fallbackInView;this._unobserveCb=mp(this.node,this.handleChange,{threshold:s,root:a,rootMargin:o,trackVisibility:l,delay:u},c)}},t.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},t.render=function(){if(!T0(this.props)){var r=this.state,s=r.inView,a=r.entry;return this.props.children({inView:s,entry:a,ref:this.handleNode})}var o=this.props,l=o.children,u=o.as,c=FA(o,HA);return ft.exports.createElement(u||"div",Ud({ref:this.handleNode},c),l)},e}(ft.exports.Component);Nu.displayName="InView";Nu.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function GA(n){var e=n===void 0?{}:n,t=e.threshold,i=e.delay,r=e.trackVisibility,s=e.rootMargin,a=e.root,o=e.triggerOnce,l=e.skip,u=e.initialInView,c=e.fallbackInView,f=ft.exports.useRef(),d=ft.exports.useState({inView:!!u}),p=d[0],_=d[1],m=ft.exports.useCallback(function(g){f.current!==void 0&&(f.current(),f.current=void 0),!l&&g&&(f.current=mp(g,function(v,y){_({inView:v,entry:y}),y.isIntersecting&&o&&f.current&&(f.current(),f.current=void 0)},{root:a,rootMargin:s,threshold:t,trackVisibility:r,delay:i},c))},[Array.isArray(t)?t.toString():t,a,s,o,l,r,c,i]);ft.exports.useEffect(function(){!f.current&&p.entry&&!o&&!l&&_({inView:!!u})});var h=[m,p.inView,p.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const WA=Object.freeze(Object.defineProperty({__proto__:null,InView:Nu,default:Nu,defaultFallbackInView:zA,observe:mp,useInView:GA},Symbol.toStringTag,{value:"Module"})),jA=Hx(WA);oc.__esModule=!0;oc.default=void 0;var ji=gp(ft.exports),nt=gp(Ce.exports),Ol=gp(dp.exports),XA=jA;function gp(n){return n&&n.__esModule?n:{default:n}}const vp=({children:n,className:e,contentArrowStyle:t,contentStyle:i,date:r,dateClassName:s,icon:a,iconClassName:o,iconOnClick:l,onTimelineElementClick:u,iconStyle:c,id:f,position:d,style:p,textClassName:_,intersectionObserverProps:m,visible:h})=>ji.default.createElement(XA.InView,m,({inView:g,ref:v})=>ji.default.createElement("div",{ref:v,id:f,className:(0,Ol.default)(e,"vertical-timeline-element",{"vertical-timeline-element--left":d==="left","vertical-timeline-element--right":d==="right","vertical-timeline-element--no-children":n===""}),style:p},ji.default.createElement(ji.default.Fragment,null,ji.default.createElement("span",{style:c,onClick:l,className:(0,Ol.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||h,"is-hidden":!(g||h)})},a),ji.default.createElement("div",{style:i,onClick:u,className:(0,Ol.default)(_,"vertical-timeline-element-content",{"bounce-in":g||h,"is-hidden":!(g||h)})},ji.default.createElement("div",{style:t,className:"vertical-timeline-element-content-arrow"}),n,ji.default.createElement("span",{className:(0,Ol.default)(s,"vertical-timeline-element-date")},r)))));vp.propTypes={children:nt.default.oneOfType([nt.default.arrayOf(nt.default.node),nt.default.node]),className:nt.default.string,contentArrowStyle:nt.default.shape({}),contentStyle:nt.default.shape({}),date:nt.default.node,dateClassName:nt.default.string,icon:nt.default.element,iconClassName:nt.default.string,iconStyle:nt.default.shape({}),iconOnClick:nt.default.func,onTimelineElementClick:nt.default.func,id:nt.default.string,position:nt.default.string,style:nt.default.shape({}),textClassName:nt.default.string,visible:nt.default.bool,intersectionObserverProps:nt.default.shape({root:nt.default.object,rootMargin:nt.default.string,threshold:nt.default.number,triggerOnce:nt.default.bool})};vp.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}};var YA=vp;oc.default=YA;var A0={VerticalTimeline:ac.default,VerticalTimelineElement:oc.default};var lc={exports:{}},uc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $A=ft.exports,qA=Symbol.for("react.element"),KA=Symbol.for("react.fragment"),ZA=Object.prototype.hasOwnProperty,QA=$A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JA={key:!0,ref:!0,__self:!0,__source:!0};function nx(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)ZA.call(e,i)&&!JA.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qA,type:n,key:s,ref:a,props:r,_owner:QA.current}}uc.Fragment=KA;uc.jsx=nx;uc.jsxs=nx;(function(n){n.exports=uc})(lc);const eC=lc.exports.Fragment,Me=lc.exports.jsx,Kn=lc.exports.jsxs;function tC(){let n={background:"#06D6A0"},e={background:"#f9c74f"};return Kn("div",{children:[Me("h1",{children:"Timeline"}),Me(A0.VerticalTimeline,{children:CA.map(t=>{let i=t.icon==="work",r=t.buttonText!==void 0&&t.buttonText!==null&&t.buttonText!=="";return Kn(A0.VerticalTimelineElement,{date:t.date,dateClassName:"date",iconStyle:i?n:e,icon:i?Me("svg",{id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Kn("g",{children:[Me("path",{d:"m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z"}),Me("path",{d:"m134.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -61.139 195.981)"}),Me("path",{d:"m234.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -31.85 266.691)"})]})}):Me("svg",{id:"Layer_1","enable-background":"new 0 0 512.001 512.001",height:"512",viewBox:"0 0 512.001 512.001",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Me("path",{d:"m478.091 132.55-222.091-94.415-221.216 94.018-.874.396c-20.988 10.135-33.981 30.909-33.91 54.216s13.193 44.001 34.244 54.006l48.034 20.096h-1.278v137.793c-12.505 6.763-21 19.992-21 35.206 0 22.091 17.909 40 40 40s40-17.909 40-40c0-14.388-7.6-26.996-19-34.044v-122.756l135 56.479 129.551-54.185c11.972 21.713 22.549 50.553 29.223 79.727-59.217 16.151-112.495 38.673-158.774 67.117-26.608-16.354-55.543-30.739-86.579-43.093-4.305-1.657-8.072-3.043-11.368-4.202 12.99 13.714 21.181 32.001 21.876 52.171 23.22 10.574 44.993 22.426 65.162 35.55l10.909 7.098 10.908-7.098c49.641-32.302 108.838-57.03 175.948-73.499l18.085-4.438-3.138-18.355c-6.488-37.953-19.432-76.702-35.178-106.483l54.263-22.695.868-.388c21.051-10.005 34.172-30.699 34.244-54.006s-12.921-44.082-33.909-54.216zm-17.147 71.919-204.944 85.719-93.771-39.22 133.794-56.787-51.156-21.741-134.203 56.96-59.609-24.932c-6.907-3.439-11.031-10.074-11.055-17.827s4.059-14.412 10.942-17.894l205.058-87.149 205.059 87.15c6.883 3.482 10.966 10.142 10.942 17.894-.024 7.753-4.149 14.388-11.057 17.827z"})}),children:[Me("img",{src:t.img}),Me("h3",{class:"font-sans font-bold",children:t.title}),Me("h5",{class:"font-sans",className:"vertical-timeline-element-subtitle",children:t.location}),Me("p",{class:"font-sans",id:"description",children:t.description}),r&&Me("a",{className:`button ${i?"workButton":"schoolButton"}`,href:t.link,target:"_blank",children:t.buttonText})]},t.key)})})]})}function Fl(n){return Me(eC,{children:Me("li",{className:"cards__item",children:Kn("div",{className:"cards__item__link",children:[Me("figure",{className:"cards__item__pic-wrap","data-category":n.label,children:Me("a",{href:n.link,target:"_blank",children:Me("img",{className:"cards__item__img",alt:"Travel Image",src:n.src})})}),Kn("div",{className:"cards__item__info",children:[Me("h1",{children:n.title}),Me("p",{className:"cards__item__text",style:{whiteSpace:"pre-wrap"},children:n.text})]})]})})})}function nC(){return Kn("div",{class:"p-4 bg-white shadow-xl ",children:[Me("h1",{children:"Projects"}),Me("div",{}),Me("div",{class:"flex flex-col items-center max-w-1120px w-9/10 m-auto m-0",children:Kn("div",{class:"mt-3.125 mb-2.813 inline-block relative ",className:"cards__wrapper",children:[Kn("ul",{className:"cards__items",children:[Me(Fl,{src:"images/aboutImg.png",text:"Uses a Generative Adversarial Network to generate images of anime backgrounds. (This is an image generated by the AI btw)",title:"Ganime",link:"https://github.com/cjyu81/Project-GANime"}),Me(Fl,{src:"images/anya.PNG",text:"Enables collaboration through realtime drawing. (pls dont judge my drawing, I was using a mouse T-T) ",title:"Brainstormy",link:"https://github.com/anthien30/brainstormy"})]}),Me("div",{}),Kn("ul",{className:"cards__items",children:[Me(Fl,{src:"images/wordship.jpg",text:"Connects a Wordle clone to a manic shooter game. (We won a speaker but it never came T-T)",title:"Wordship",link:"https://devpost.com/software/wordship"}),Me(Fl,{src:"images/youtify.jpg",text:"Converts Spotify Playlists to Youtube Playlists.",title:"You-tify",link:"https://devpost.com/software/you-tify"})]})]})})]})}/**
 * @remix-run/router v1.0.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Hd.apply(this,arguments)}var Or;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Or||(Or={}));const C0="popstate";function iC(n){n===void 0&&(n={});function e(i,r){var s,a;let{pathname:o,search:l,hash:u}=i.location;return Gd("",{pathname:o,search:l,hash:u},((s=r.state)==null?void 0:s.usr)||null,((a=r.state)==null?void 0:a.key)||"default")}function t(i,r){return typeof r=="string"?r:sC(r)}return aC(e,t,null,n)}function rC(){return Math.random().toString(36).substr(2,8)}function L0(n){return{usr:n.state,key:n.key}}function Gd(n,e,t,i){return t===void 0&&(t=null),Hd({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ix(e):e,{state:t,key:(e==null?void 0:e.key)||i||rC()})}function sC(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ix(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function aC(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Or.Pop,l=null;function u(){o=Or.Pop,l&&l({action:o,location:d.location})}function c(p,_){o=Or.Push;let m=Gd(d.location,p,_);t==null||t(m,p);let h=L0(m),g=d.createHref(m);try{a.pushState(h,"",g)}catch{r.location.assign(g)}s&&l&&l({action:o,location:m})}function f(p,_){o=Or.Replace;let m=Gd(d.location,p,_);t==null||t(m,p);let h=L0(m),g=d.createHref(m);a.replaceState(h,"",g),s&&l&&l({action:o,location:m})}let d={get action(){return o},get location(){return n(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(C0,u),l=p,()=>{r.removeEventListener(C0,u),l=null}},createHref(p){return e(r,p)},push:c,replace:f,go(p){return a.go(p)}};return d}var P0;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(P0||(P0={}));function oC(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function lC(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uC(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}const cC=typeof Object.is=="function"?Object.is:uC,{useState:fC,useEffect:dC,useLayoutEffect:hC,useDebugValue:pC}=Df;function mC(n,e,t){const i=e(),[{inst:r},s]=fC({inst:{value:i,getSnapshot:e}});return hC(()=>{r.value=i,r.getSnapshot=e,Ef(r)&&s({inst:r})},[n,i,e]),dC(()=>(Ef(r)&&s({inst:r}),n(()=>{Ef(r)&&s({inst:r})})),[n]),pC(i),i}function Ef(n){const e=n.getSnapshot,t=n.value;try{const i=e();return!cC(t,i)}catch{return!0}}function gC(n,e,t){return e()}const vC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_C=!vC,yC=_C?gC:mC;"useSyncExternalStore"in Df&&(n=>n.useSyncExternalStore)(Df);const xC=ft.exports.createContext(null),rx=ft.exports.createContext(null);function SC(){return ft.exports.useContext(rx)!=null}var R0;(function(n){n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator"})(R0||(R0={}));function wC(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Or.Pop,navigator:s,static:a=!1}=n;SC()&&lC(!1);let o=e.replace(/^\/*/,"/"),l=ft.exports.useMemo(()=>({basename:o,navigator:s,static:a}),[o,s,a]);typeof i=="string"&&(i=ix(i));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default"}=i,_=ft.exports.useMemo(()=>{let m=oC(u,o);return m==null?null:{pathname:m,search:c,hash:f,state:d,key:p}},[o,u,c,f,d,p]);return _==null?null:Me(xC.Provider,{value:l,children:Me(rx.Provider,{children:t,value:{location:_,navigationType:r}})})}var D0;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(D0||(D0={}));new Promise(()=>{});/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function MC(n){let{basename:e,children:t,window:i}=n,r=ft.exports.useRef();r.current==null&&(r.current=iC({window:i,v5Compat:!0}));let s=r.current,[a,o]=ft.exports.useState({action:s.action,location:s.location});return ft.exports.useLayoutEffect(()=>s.listen(o),[s]),Me(wC,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:s})}const I0={type:"change"},Tf={type:"start"},k0={type:"end"};class bC extends ss{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",sn),this._domElementKeyEvents=b},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(I0),i.update(),s=r.NONE},this.update=function(){const b=new R,q=new Ti().setFromUnitVectors(e.up,new R(0,1,0)),ie=q.clone().invert(),le=new R,ae=new Ti,Se=2*Math.PI;return function(){const tt=i.object.position;b.copy(tt).sub(i.target),b.applyQuaternion(q),o.setFromVector3(b),i.autoRotate&&s===r.NONE&&C(L()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let I=i.minAzimuthAngle,se=i.maxAzimuthAngle;return isFinite(I)&&isFinite(se)&&(I<-Math.PI?I+=Se:I>Math.PI&&(I-=Se),se<-Math.PI?se+=Se:se>Math.PI&&(se-=Se),I<=se?o.theta=Math.max(I,Math.min(se,o.theta)):o.theta=o.theta>(I+se)/2?Math.max(I,o.theta):Math.min(se,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=u,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),b.setFromSpherical(o),b.applyQuaternion(ie),tt.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||le.distanceToSquared(i.object.position)>a||8*(1-ae.dot(i.object.quaternion))>a?(i.dispatchEvent(I0),le.copy(i.object.position),ae.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",V),i.domElement.removeEventListener("pointerdown",mt),i.domElement.removeEventListener("pointercancel",rn),i.domElement.removeEventListener("wheel",vn),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",yt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",sn)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new v0,l=new v0;let u=1;const c=new R;let f=!1;const d=new Ee,p=new Ee,_=new Ee,m=new Ee,h=new Ee,g=new Ee,v=new Ee,y=new Ee,S=new Ee,x=[],T={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function C(b){l.theta-=b}function D(b){l.phi-=b}const X=function(){const b=new R;return function(ie,le){b.setFromMatrixColumn(le,0),b.multiplyScalar(-ie),c.add(b)}}(),te=function(){const b=new R;return function(ie,le){i.screenSpacePanning===!0?b.setFromMatrixColumn(le,1):(b.setFromMatrixColumn(le,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(ie),c.add(b)}}(),U=function(){const b=new R;return function(ie,le){const ae=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;b.copy(Se).sub(i.target);let Ne=b.length();Ne*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ie*Ne/ae.clientHeight,i.object.matrix),te(2*le*Ne/ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(ie*(i.object.right-i.object.left)/i.object.zoom/ae.clientWidth,i.object.matrix),te(le*(i.object.top-i.object.bottom)/i.object.zoom/ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(b){i.object.isPerspectiveCamera?u/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(b){i.object.isPerspectiveCamera?u*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){d.set(b.clientX,b.clientY)}function Z(b){v.set(b.clientX,b.clientY)}function k(b){m.set(b.clientX,b.clientY)}function P(b){p.set(b.clientX,b.clientY),_.subVectors(p,d).multiplyScalar(i.rotateSpeed);const q=i.domElement;C(2*Math.PI*_.x/q.clientHeight),D(2*Math.PI*_.y/q.clientHeight),d.copy(p),i.update()}function N(b){y.set(b.clientX,b.clientY),S.subVectors(y,v),S.y>0?O(w()):S.y<0&&W(w()),v.copy(y),i.update()}function $(b){h.set(b.clientX,b.clientY),g.subVectors(h,m).multiplyScalar(i.panSpeed),U(g.x,g.y),m.copy(h),i.update()}function Y(b){b.deltaY<0?W(w()):b.deltaY>0&&O(w()),i.update()}function Q(b){let q=!1;switch(b.code){case i.keys.UP:U(0,i.keyPanSpeed),q=!0;break;case i.keys.BOTTOM:U(0,-i.keyPanSpeed),q=!0;break;case i.keys.LEFT:U(i.keyPanSpeed,0),q=!0;break;case i.keys.RIGHT:U(-i.keyPanSpeed,0),q=!0;break}q&&(b.preventDefault(),i.update())}function ue(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const b=.5*(x[0].pageX+x[1].pageX),q=.5*(x[0].pageY+x[1].pageY);d.set(b,q)}}function _e(){if(x.length===1)m.set(x[0].pageX,x[0].pageY);else{const b=.5*(x[0].pageX+x[1].pageX),q=.5*(x[0].pageY+x[1].pageY);m.set(b,q)}}function G(){const b=x[0].pageX-x[1].pageX,q=x[0].pageY-x[1].pageY,ie=Math.sqrt(b*b+q*q);v.set(0,ie)}function ke(){i.enableZoom&&G(),i.enablePan&&_e()}function ye(){i.enableZoom&&G(),i.enableRotate&&ue()}function we(b){if(x.length==1)p.set(b.pageX,b.pageY);else{const ie=xe(b),le=.5*(b.pageX+ie.x),ae=.5*(b.pageY+ie.y);p.set(le,ae)}_.subVectors(p,d).multiplyScalar(i.rotateSpeed);const q=i.domElement;C(2*Math.PI*_.x/q.clientHeight),D(2*Math.PI*_.y/q.clientHeight),d.copy(p)}function pe(b){if(x.length===1)h.set(b.pageX,b.pageY);else{const q=xe(b),ie=.5*(b.pageX+q.x),le=.5*(b.pageY+q.y);h.set(ie,le)}g.subVectors(h,m).multiplyScalar(i.panSpeed),U(g.x,g.y),m.copy(h)}function He(b){const q=xe(b),ie=b.pageX-q.x,le=b.pageY-q.y,ae=Math.sqrt(ie*ie+le*le);y.set(0,ae),S.set(0,Math.pow(y.y/v.y,i.zoomSpeed)),O(S.y),v.copy(y)}function Le(b){i.enableZoom&&He(b),i.enablePan&&pe(b)}function ve(b){i.enableZoom&&He(b),i.enableRotate&&we(b)}function mt(b){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Lt),i.domElement.addEventListener("pointerup",yt)),ee(b),b.pointerType==="touch"?A(b):xt(b))}function Lt(b){i.enabled!==!1&&(b.pointerType==="touch"?M(b):Ge(b))}function yt(b){ne(b),x.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",yt)),i.dispatchEvent(k0),s=r.NONE}function rn(b){ne(b)}function xt(b){let q;switch(b.button){case 0:q=i.mouseButtons.LEFT;break;case 1:q=i.mouseButtons.MIDDLE;break;case 2:q=i.mouseButtons.RIGHT;break;default:q=-1}switch(q){case fs.DOLLY:if(i.enableZoom===!1)return;Z(b),s=r.DOLLY;break;case fs.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;k(b),s=r.PAN}else{if(i.enableRotate===!1)return;K(b),s=r.ROTATE}break;case fs.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;K(b),s=r.ROTATE}else{if(i.enablePan===!1)return;k(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tf)}function Ge(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;P(b);break;case r.DOLLY:if(i.enableZoom===!1)return;N(b);break;case r.PAN:if(i.enablePan===!1)return;$(b);break}}function vn(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(Tf),Y(b),i.dispatchEvent(k0))}function sn(b){i.enabled===!1||i.enablePan===!1||Q(b)}function A(b){switch(oe(b),x.length){case 1:switch(i.touches.ONE){case ds.ROTATE:if(i.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case ds.PAN:if(i.enablePan===!1)return;_e(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ds.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(),s=r.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tf)}function M(b){switch(oe(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;we(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(b),i.update();break;default:s=r.NONE}}function V(b){i.enabled!==!1&&b.preventDefault()}function ee(b){x.push(b)}function ne(b){delete T[b.pointerId];for(let q=0;q<x.length;q++)if(x[q].pointerId==b.pointerId){x.splice(q,1);return}}function oe(b){let q=T[b.pointerId];q===void 0&&(q=new Ee,T[b.pointerId]=q),q.set(b.pageX,b.pageY)}function xe(b){const q=b.pointerId===x[0].pointerId?x[1]:x[0];return T[q.pointerId]}i.domElement.addEventListener("contextmenu",V),i.domElement.addEventListener("pointerdown",mt),i.domElement.addEventListener("pointercancel",rn),i.domElement.addEventListener("wheel",vn,{passive:!1}),this.update()}}class EC{constructor(e){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.width=window.innerWidth/2,this.height=window.innerHeight/2,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=e,this.clock=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0}initialize(){this.scene=new h3,this.camera=new Wt(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=48;const e=document.getElementById(this.canvasId);this.renderer=new Vy({canvas:e,antialias:!0}),this.renderer.setSize(this.width,this.height),this.clock=new H3,this.controls=new bC(this.camera,this.renderer.domElement),this.ambientLight=new B3(16777215,.9),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new qy(16777215,2),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}}function N0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function de(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N0(Object(t),!0).forEach(function(i){bt(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N0(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ou(n){return Ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ou(n)}function TC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function O0(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function AC(n,e,t){return e&&O0(n.prototype,e),t&&O0(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function bt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _p(n,e){return LC(n)||RC(n,e)||sx(n,e)||IC()}function Wo(n){return CC(n)||PC(n)||sx(n)||DC()}function CC(n){if(Array.isArray(n))return Wd(n)}function LC(n){if(Array.isArray(n))return n}function PC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function RC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function sx(n,e){if(!!n){if(typeof n=="string")return Wd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wd(n,e)}}function Wd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function DC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var F0=function(){},yp={},ax={},ox=null,lx={mark:F0,measure:F0};try{typeof window<"u"&&(yp=window),typeof document<"u"&&(ax=document),typeof MutationObserver<"u"&&(ox=MutationObserver),typeof performance<"u"&&(lx=performance)}catch{}var kC=yp.navigator||{},z0=kC.userAgent,U0=z0===void 0?"":z0,dr=yp,et=ax,B0=ox,zl=lx;dr.document;var Ri=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",ux=~U0.indexOf("MSIE")||~U0.indexOf("Trident/"),Ul,Bl,Vl,Hl,Gl,Ai="___FONT_AWESOME___",jd=16,cx="fa",fx="svg-inline--fa",ts="data-fa-i2svg",Xd="data-fa-pseudo-element",NC="data-fa-pseudo-element-pending",xp="data-prefix",Sp="data-icon",V0="fontawesome-i2svg",OC="async",FC=["HTML","HEAD","STYLE","SCRIPT"],dx=function(){try{return!0}catch{return!1}}(),Qe="classic",ct="sharp",wp=[Qe,ct];function jo(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[Qe]}})}var Po=jo((Ul={},bt(Ul,Qe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),bt(Ul,ct,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ul)),Ro=jo((Bl={},bt(Bl,Qe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),bt(Bl,ct,{solid:"fass"}),Bl)),Do=jo((Vl={},bt(Vl,Qe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),bt(Vl,ct,{fass:"fa-solid"}),Vl)),zC=jo((Hl={},bt(Hl,Qe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),bt(Hl,ct,{"fa-solid":"fass"}),Hl)),UC=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,hx="fa-layers-text",BC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,VC=jo((Gl={},bt(Gl,Qe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),bt(Gl,ct,{900:"fass"}),Gl)),px=[1,2,3,4,5,6,7,8,9,10],HC=px.concat([11,12,13,14,15,16,17,18,19,20]),GC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Io=new Set;Object.keys(Ro[Qe]).map(Io.add.bind(Io));Object.keys(Ro[ct]).map(Io.add.bind(Io));var WC=[].concat(wp,Wo(Io),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fr.GROUP,Fr.SWAP_OPACITY,Fr.PRIMARY,Fr.SECONDARY]).concat(px.map(function(n){return"".concat(n,"x")})).concat(HC.map(function(n){return"w-".concat(n)})),io=dr.FontAwesomeConfig||{};function jC(n){var e=et.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function XC(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(et&&typeof et.querySelector=="function"){var YC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];YC.forEach(function(n){var e=_p(n,2),t=e[0],i=e[1],r=XC(jC(t));r!=null&&(io[i]=r)})}var mx={styleDefault:"solid",familyDefault:"classic",cssPrefix:cx,replacementClass:fx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};io.familyPrefix&&(io.cssPrefix=io.familyPrefix);var ha=de(de({},mx),io);ha.autoReplaceSvg||(ha.observeMutations=!1);var me={};Object.keys(mx).forEach(function(n){Object.defineProperty(me,n,{enumerable:!0,set:function(t){ha[n]=t,ro.forEach(function(i){return i(me)})},get:function(){return ha[n]}})});Object.defineProperty(me,"familyPrefix",{enumerable:!0,set:function(e){ha.cssPrefix=e,ro.forEach(function(t){return t(me)})},get:function(){return ha.cssPrefix}});dr.FontAwesomeConfig=me;var ro=[];function $C(n){return ro.push(n),function(){ro.splice(ro.indexOf(n),1)}}var Xi=jd,Zn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qC(n){if(!(!n||!Ri)){var e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=et.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return et.head.insertBefore(e,i),n}}var KC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ko(){for(var n=12,e="";n-- >0;)e+=KC[Math.random()*62|0];return e}function Ma(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Mp(n){return n.classList?Ma(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function gx(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ZC(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(gx(n[t]),'" ')},"").trim()}function cc(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function bp(n){return n.size!==Zn.size||n.x!==Zn.x||n.y!==Zn.y||n.rotate!==Zn.rotate||n.flipX||n.flipY}function QC(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function JC(n){var e=n.transform,t=n.width,i=t===void 0?jd:t,r=n.height,s=r===void 0?jd:r,a=n.startCentered,o=a===void 0?!1:a,l="";return o&&ux?l+="translate(".concat(e.x/Xi-i/2,"em, ").concat(e.y/Xi-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Xi,"em), calc(-50% + ").concat(e.y/Xi,"em)) "):l+="translate(".concat(e.x/Xi,"em, ").concat(e.y/Xi,"em) "),l+="scale(".concat(e.size/Xi*(e.flipX?-1:1),", ").concat(e.size/Xi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var eL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
    transition-delay: 0s;
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function vx(){var n=cx,e=fx,t=me.cssPrefix,i=me.replacementClass,r=eL;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}var H0=!1;function Af(){me.autoAddCss&&!H0&&(qC(vx()),H0=!0)}var tL={mixout:function(){return{dom:{css:vx,insertCss:Af}}},hooks:function(){return{beforeDOMElementCreation:function(){Af()},beforeI2svg:function(){Af()}}}},Ci=dr||{};Ci[Ai]||(Ci[Ai]={});Ci[Ai].styles||(Ci[Ai].styles={});Ci[Ai].hooks||(Ci[Ai].hooks={});Ci[Ai].shims||(Ci[Ai].shims=[]);var Un=Ci[Ai],_x=[],nL=function n(){et.removeEventListener("DOMContentLoaded",n),Fu=1,_x.map(function(e){return e()})},Fu=!1;Ri&&(Fu=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),Fu||et.addEventListener("DOMContentLoaded",nL));function iL(n){!Ri||(Fu?setTimeout(n,0):_x.push(n))}function Xo(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?gx(n):"<".concat(e," ").concat(ZC(i),">").concat(s.map(Xo).join(""),"</").concat(e,">")}function G0(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var rL=function(e,t){return function(i,r,s,a){return e.call(t,i,r,s,a)}},Cf=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?rL(t,r):t,l,u,c;for(i===void 0?(l=1,c=e[s[0]]):(l=0,c=i);l<a;l++)u=s[l],c=o(c,e[u],u,e);return c};function sL(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Yd(n){var e=sL(n);return e.length===1?e[0].toString(16):null}function aL(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function W0(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function $d(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=W0(e);typeof Un.hooks.addPack=="function"&&!r?Un.hooks.addPack(n,W0(e)):Un.styles[n]=de(de({},Un.styles[n]||{}),s),n==="fas"&&$d("fa",e)}var Wl,jl,Xl,Vs=Un.styles,oL=Un.shims,lL=(Wl={},bt(Wl,Qe,Object.values(Do[Qe])),bt(Wl,ct,Object.values(Do[ct])),Wl),Ep=null,yx={},xx={},Sx={},wx={},Mx={},uL=(jl={},bt(jl,Qe,Object.keys(Po[Qe])),bt(jl,ct,Object.keys(Po[ct])),jl);function cL(n){return~WC.indexOf(n)}function fL(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!cL(r)?r:null}var bx=function(){var e=function(s){return Cf(Vs,function(a,o,l){return a[l]=Cf(o,s,{}),a},{})};yx=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),xx=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Mx=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in Vs||me.autoFetchSvg,i=Cf(oL,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Sx=i.names,wx=i.unicodes,Ep=fc(me.styleDefault,{family:me.familyDefault})};$C(function(n){Ep=fc(n.styleDefault,{family:me.familyDefault})});bx();function Tp(n,e){return(yx[n]||{})[e]}function dL(n,e){return(xx[n]||{})[e]}function zr(n,e){return(Mx[n]||{})[e]}function Ex(n){return Sx[n]||{prefix:null,iconName:null}}function hL(n){var e=wx[n],t=Tp("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function hr(){return Ep}var Ap=function(){return{prefix:null,iconName:null,rest:[]}};function fc(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?Qe:t,r=Po[i][n],s=Ro[i][n]||Ro[i][r],a=n in Un.styles?n:null;return s||a||null}var j0=(Xl={},bt(Xl,Qe,Object.keys(Do[Qe])),bt(Xl,ct,Object.keys(Do[ct])),Xl);function dc(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,s=(e={},bt(e,Qe,"".concat(me.cssPrefix,"-").concat(Qe)),bt(e,ct,"".concat(me.cssPrefix,"-").concat(ct)),e),a=null,o=Qe;(n.includes(s[Qe])||n.some(function(u){return j0[Qe].includes(u)}))&&(o=Qe),(n.includes(s[ct])||n.some(function(u){return j0[ct].includes(u)}))&&(o=ct);var l=n.reduce(function(u,c){var f=fL(me.cssPrefix,c);if(Vs[c]?(c=lL[o].includes(c)?zC[o][c]:c,a=c,u.prefix=c):uL[o].indexOf(c)>-1?(a=c,u.prefix=fc(c,{family:o})):f?u.iconName=f:c!==me.replacementClass&&c!==s[Qe]&&c!==s[ct]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var d=a==="fa"?Ex(u.iconName):{},p=zr(u.prefix,u.iconName);d.prefix&&(a=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Vs.far&&Vs.fas&&!me.autoFetchSvg&&(u.prefix="fas")}return u},Ap());return(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ct&&(Vs.fass||me.autoFetchSvg)&&(l.prefix="fass",l.iconName=zr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=hr()||"fas"),l}var pL=function(){function n(){TC(this,n),this.definitions={}}return AC(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=de(de({},t.definitions[o]||{}),a[o]),$d(o,a[o]);var l=Do[Qe][o];l&&$d(l,a[o]),bx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,u=a.icon,c=u[2];t[o]||(t[o]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(t[o][f]=u)}),t[o][l]=u}),t}}]),n}(),X0=[],Hs={},Qs={},mL=Object.keys(Qs);function gL(n,e){var t=e.mixoutsTo;return X0=n,Hs={},Object.keys(Qs).forEach(function(i){mL.indexOf(i)===-1&&delete Qs[i]}),X0.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),Ou(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Hs[a]||(Hs[a]=[]),Hs[a].push(s[a])})}i.provides&&i.provides(Qs)}),t}function qd(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Hs[n]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function ns(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Hs[n]||[];r.forEach(function(s){s.apply(null,t)})}function Li(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qs[n]?Qs[n].apply(null,e):void 0}function Kd(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||hr();if(!!e)return e=zr(t,e)||e,G0(Tx.definitions,t,e)||G0(Un.styles,t,e)}var Tx=new pL,vL=function(){me.autoReplaceSvg=!1,me.observeMutations=!1,ns("noAuto")},_L={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ri?(ns("beforeI2svg",e),Li("pseudoElements2svg",e),Li("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;me.autoReplaceSvg===!1&&(me.autoReplaceSvg=!0),me.observeMutations=!0,iL(function(){xL({autoReplaceSvgRoot:t}),ns("watch",e)})}},yL={icon:function(e){if(e===null)return null;if(Ou(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:zr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=fc(e[0]);return{prefix:i,iconName:zr(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(me.cssPrefix,"-"))>-1||e.match(UC))){var r=dc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||hr(),iconName:zr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=hr();return{prefix:s,iconName:zr(s,e)||e}}}},gn={noAuto:vL,config:me,dom:_L,parse:yL,library:Tx,findIconDefinition:Kd,toHtml:Xo},xL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?et:t;(Object.keys(Un.styles).length>0||me.autoFetchSvg)&&Ri&&me.autoReplaceSvg&&gn.dom.i2svg({node:i})};function hc(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Xo(i)})}}),Object.defineProperty(n,"node",{get:function(){if(!!Ri){var i=et.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function SL(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,a=n.transform;if(bp(a)&&t.found&&!i.found){var o=t.width,l=t.height,u={x:o/l/2,y:.5};r.style=cc(de(de({},s),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function wL(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,a=s===!0?"".concat(e,"-").concat(me.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},r),{},{id:a}),children:i}]}]}function Cp(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,a=n.transform,o=n.symbol,l=n.title,u=n.maskId,c=n.titleId,f=n.extra,d=n.watchable,p=d===void 0?!1:d,_=i.found?i:t,m=_.width,h=_.height,g=r==="fak",v=[me.replacementClass,s?"".concat(me.cssPrefix,"-").concat(s):""].filter(function(C){return f.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(f.classes).join(" "),y={children:[],attributes:de(de({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})},S=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/h*16*.0625,"em")}:{};p&&(y.attributes[ts]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||ko())},children:[l]}),delete y.attributes.title);var x=de(de({},y),{},{prefix:r,iconName:s,main:t,mask:i,maskId:u,transform:a,symbol:o,styles:de(de({},S),f.styles)}),T=i.found&&t.found?Li("generateAbstractMask",x)||{children:[],attributes:{}}:Li("generateAbstractIcon",x)||{children:[],attributes:{}},L=T.children,w=T.attributes;return x.children=L,x.attributes=w,o?wL(x):SL(x)}function Y0(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,a=n.extra,o=n.watchable,l=o===void 0?!1:o,u=de(de(de({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(u[ts]="");var c=de({},a.styles);bp(r)&&(c.transform=JC({transform:r,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);var f=cc(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function ML(n){var e=n.content,t=n.title,i=n.extra,r=de(de(de({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=cc(i.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var Lf=Un.styles;function Zd(n){var e=n[0],t=n[1],i=n.slice(4),r=_p(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(me.cssPrefix,"-").concat(Fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Fr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(Fr.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var bL={found:!1,width:512,height:512};function EL(n,e){!dx&&!me.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Qd(n,e){var t=e;return e==="fa"&&me.styleDefault!==null&&(e=hr()),new Promise(function(i,r){if(Li("missingIconAbstract"),t==="fa"){var s=Ex(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&Lf[e]&&Lf[e][n]){var a=Lf[e][n];return i(Zd(a))}EL(n,e),i(de(de({},bL),{},{icon:me.showMissingIcons&&n?Li("missingIconAbstract")||{}:{}}))})}var $0=function(){},Jd=me.measurePerformance&&zl&&zl.mark&&zl.measure?zl:{mark:$0,measure:$0},ja='FA "6.2.0"',TL=function(e){return Jd.mark("".concat(ja," ").concat(e," begins")),function(){return Ax(e)}},Ax=function(e){Jd.mark("".concat(ja," ").concat(e," ends")),Jd.measure("".concat(ja," ").concat(e),"".concat(ja," ").concat(e," begins"),"".concat(ja," ").concat(e," ends"))},Lp={begin:TL,end:Ax},ou=function(){};function q0(n){var e=n.getAttribute?n.getAttribute(ts):null;return typeof e=="string"}function AL(n){var e=n.getAttribute?n.getAttribute(xp):null,t=n.getAttribute?n.getAttribute(Sp):null;return e&&t}function CL(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(me.replacementClass)}function LL(){if(me.autoReplaceSvg===!0)return lu.replace;var n=lu[me.autoReplaceSvg];return n||lu.replace}function PL(n){return et.createElementNS("http://www.w3.org/2000/svg",n)}function RL(n){return et.createElement(n)}function Cx(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?PL:RL:t;if(typeof n=="string")return et.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])});var s=n.children||[];return s.forEach(function(a){r.appendChild(Cx(a,{ceFn:i}))}),r}function DL(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var lu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(Cx(r),t)}),t.getAttribute(ts)===null&&me.keepOriginalSource){var i=et.createComment(DL(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~Mp(t).indexOf(me.replacementClass))return lu.replace(e);var r=new RegExp("".concat(me.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,l){return l===me.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return Xo(o)}).join(`
`);t.setAttribute(ts,""),t.innerHTML=a}};function K0(n){n()}function Lx(n,e){var t=typeof e=="function"?e:ou;if(n.length===0)t();else{var i=K0;me.mutateApproach===OC&&(i=dr.requestAnimationFrame||K0),i(function(){var r=LL(),s=Lp.begin("mutate");n.map(r),s(),t()})}}var Pp=!1;function Px(){Pp=!0}function eh(){Pp=!1}var zu=null;function Z0(n){if(!!B0&&!!me.observeMutations){var e=n.treeCallback,t=e===void 0?ou:e,i=n.nodeCallback,r=i===void 0?ou:i,s=n.pseudoElementsCallback,a=s===void 0?ou:s,o=n.observeMutationsRoot,l=o===void 0?et:o;zu=new B0(function(u){if(!Pp){var c=hr();Ma(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!q0(f.addedNodes[0])&&(me.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&me.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&q0(f.target)&&~GC.indexOf(f.attributeName))if(f.attributeName==="class"&&AL(f.target)){var d=dc(Mp(f.target)),p=d.prefix,_=d.iconName;f.target.setAttribute(xp,p||c),_&&f.target.setAttribute(Sp,_)}else CL(f.target)&&r(f.target)})}}),Ri&&zu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IL(){!zu||zu.disconnect()}function kL(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function NL(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=dc(Mp(n));return r.prefix||(r.prefix=hr()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=dL(r.prefix,n.innerText)||Tp(r.prefix,Yd(n.innerText))),!r.iconName&&me.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function OL(n){var e=Ma(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return me.autoA11y&&(t?e["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(i||ko()):(e["aria-hidden"]="true",e.focusable="false")),e}function FL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=NL(n),i=t.iconName,r=t.prefix,s=t.rest,a=OL(n),o=qd("parseNodeAttributes",{},n),l=e.styleParser?kL(n):[];return de({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:Zn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var zL=Un.styles;function Rx(n){var e=me.autoReplaceSvg==="nest"?Q0(n,{styleParser:!1}):Q0(n);return~e.extra.classes.indexOf(hx)?Li("generateLayersText",n,e):Li("generateSvgReplacementMutation",n,e)}var pr=new Set;wp.map(function(n){pr.add("fa-".concat(n))});Object.keys(Po[Qe]).map(pr.add.bind(pr));Object.keys(Po[ct]).map(pr.add.bind(pr));pr=Wo(pr);function J0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ri)return Promise.resolve();var t=et.documentElement.classList,i=function(f){return t.add("".concat(V0,"-").concat(f))},r=function(f){return t.remove("".concat(V0,"-").concat(f))},s=me.autoFetchSvg?pr:wp.map(function(c){return"fa-".concat(c)}).concat(Object.keys(zL));s.includes("fa")||s.push("fa");var a=[".".concat(hx,":not([").concat(ts,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ts,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Ma(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Lp.begin("onTree"),u=o.reduce(function(c,f){try{var d=Rx(f);d&&c.push(d)}catch(p){dx||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Lx(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function UL(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rx(n).then(function(t){t&&Lx([t],e)})}function BL(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Kd(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Kd(r||{})),n(i,de(de({},t),{},{mask:r}))}}var VL=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Zn:i,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,u=t.maskId,c=u===void 0?null:u,f=t.title,d=f===void 0?null:f,p=t.titleId,_=p===void 0?null:p,m=t.classes,h=m===void 0?[]:m,g=t.attributes,v=g===void 0?{}:g,y=t.styles,S=y===void 0?{}:y;if(!!e){var x=e.prefix,T=e.iconName,L=e.icon;return hc(de({type:"icon"},e),function(){return ns("beforeDOMElementCreation",{iconDefinition:e,params:t}),me.autoA11y&&(d?v["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(_||ko()):(v["aria-hidden"]="true",v.focusable="false")),Cp({icons:{main:Zd(L),mask:l?Zd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:de(de({},Zn),r),symbol:a,title:d,maskId:c,titleId:_,extra:{attributes:v,styles:S,classes:h}})})}},HL={mixout:function(){return{icon:BL(VL)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=J0,t.nodeCallback=UL,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?et:i,s=t.callback,a=s===void 0?function(){}:s;return J0(r,a)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,a=i.titleId,o=i.prefix,l=i.transform,u=i.symbol,c=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,_){Promise.all([Qd(r,o),c.iconName?Qd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var h=_p(m,2),g=h[0],v=h[1];p([t,Cp({icons:{main:g,mask:v},prefix:o,iconName:r,transform:l,symbol:u,maskId:f,title:s,titleId:a,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=cc(o);l.length>0&&(r.style=l);var u;return bp(a)&&(u=Li("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(u||s.icon),{children:i,attributes:r}}}},GL={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return hc({type:"layer"},function(){ns("beforeDOMElementCreation",{assembler:t,params:i});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(me.cssPrefix,"-layers")].concat(Wo(s)).join(" ")},children:a}]})}}}},WL={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,a=i.classes,o=a===void 0?[]:a,l=i.attributes,u=l===void 0?{}:l,c=i.styles,f=c===void 0?{}:c;return hc({type:"counter",content:t},function(){return ns("beforeDOMElementCreation",{content:t,params:i}),ML({content:t.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(me.cssPrefix,"-layers-counter")].concat(Wo(o))}})})}}}},jL={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Zn:r,a=i.title,o=a===void 0?null:a,l=i.classes,u=l===void 0?[]:l,c=i.attributes,f=c===void 0?{}:c,d=i.styles,p=d===void 0?{}:d;return hc({type:"text",content:t},function(){return ns("beforeDOMElementCreation",{content:t,params:i}),Y0({content:t,transform:de(de({},Zn),s),title:o,extra:{attributes:f,styles:p,classes:["".concat(me.cssPrefix,"-layers-text")].concat(Wo(u))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,a=i.extra,o=null,l=null;if(ux){var u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,l=c.height/u}return me.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,Y0({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},XL=new RegExp('"',"ug"),ev=[1105920,1112319];function YL(n){var e=n.replace(XL,""),t=aL(e,0),i=t>=ev[0]&&t<=ev[1],r=e.length===2?e[0]===e[1]:!1;return{value:Yd(r?e[0]:e),isSecondary:i||r}}function tv(n,e){var t="".concat(NC).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=Ma(n.children),a=s.filter(function(L){return L.getAttribute(Xd)===e})[0],o=dr.getComputedStyle(n,e),l=o.getPropertyValue("font-family").match(BC),u=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(a&&!l)return n.removeChild(a),i();if(l&&c!=="none"&&c!==""){var f=o.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ct:Qe,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ro[d][l[2].toLowerCase()]:VC[d][u],_=YL(f),m=_.value,h=_.isSecondary,g=l[0].startsWith("FontAwesome"),v=Tp(p,m),y=v;if(g){var S=hL(m);S.iconName&&S.prefix&&(v=S.iconName,p=S.prefix)}if(v&&!h&&(!a||a.getAttribute(xp)!==p||a.getAttribute(Sp)!==y)){n.setAttribute(t,y),a&&n.removeChild(a);var x=FL(),T=x.extra;T.attributes[Xd]=e,Qd(v,p).then(function(L){var w=Cp(de(de({},x),{},{icons:{main:L,mask:Ap()},prefix:p,iconName:y,extra:T,watchable:!0})),C=et.createElement("svg");e==="::before"?n.insertBefore(C,n.firstChild):n.appendChild(C),C.outerHTML=w.map(function(D){return Xo(D)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function $L(n){return Promise.all([tv(n,"::before"),tv(n,"::after")])}function qL(n){return n.parentNode!==document.head&&!~FC.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Xd)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function nv(n){if(!!Ri)return new Promise(function(e,t){var i=Ma(n.querySelectorAll("*")).filter(qL).map($L),r=Lp.begin("searchPseudoElements");Px(),Promise.all(i).then(function(){r(),eh(),e()}).catch(function(){r(),eh(),t()})})}var KL={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=nv,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?et:i;me.searchPseudoElements&&nv(r)}}},iv=!1,ZL={mixout:function(){return{dom:{unwatch:function(){Px(),iv=!0}}}},hooks:function(){return{bootstrap:function(){Z0(qd("mutationObserverCallbacks",{}))},noAuto:function(){IL()},watch:function(t){var i=t.observeMutationsRoot;iv?eh():Z0(qd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},rv=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},t)},QL={mixout:function(){return{parse:{transform:function(t){return rv(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=rv(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:de({},p.outer),children:[{tag:"g",attributes:de({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:de(de({},i.icon.attributes),p.path)}]}]}}}},Pf={x:0,y:0,width:"100%",height:"100%"};function sv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function JL(n){return n.tag==="g"?n.children:[n]}var eP={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?dc(r.split(" ").map(function(a){return a.trim()})):Ap();return s.prefix||(s.prefix=hr()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,u=s.width,c=s.icon,f=a.width,d=a.icon,p=QC({transform:l,containerWidth:f,iconWidth:u}),_={tag:"rect",attributes:de(de({},Pf),{},{fill:"white"})},m=c.children?{children:c.children.map(sv)}:{},h={tag:"g",attributes:de({},p.inner),children:[sv(de({tag:c.tag,attributes:de(de({},c.attributes),p.path)},m))]},g={tag:"g",attributes:de({},p.outer),children:[h]},v="mask-".concat(o||ko()),y="clip-".concat(o||ko()),S={tag:"mask",attributes:de(de({},Pf),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,g]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:JL(d)},S]};return i.push(x,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Pf)}),{children:i,attributes:r}}}},tP={provides:function(e){var t=!1;dr.matchMedia&&(t=dr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:de(de({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=de(de({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:de(de({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:de(de({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:de(de({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:de(de({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:de(de({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},nP={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},iP=[tL,HL,GL,WL,jL,KL,ZL,QL,eP,tP,nP];gL(iP,{mixoutsTo:gn});gn.noAuto;gn.config;var rP=gn.library;gn.dom;var th=gn.parse;gn.findIconDefinition;gn.toHtml;var sP=gn.icon;gn.layer;gn.text;gn.counter;function av(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function er(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?av(Object(t),!0).forEach(function(i){Gs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):av(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Uu(n){return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uu(n)}function Gs(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function aP(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function oP(n,e){if(n==null)return{};var t=aP(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function nh(n){return lP(n)||uP(n)||cP(n)||fP()}function lP(n){if(Array.isArray(n))return ih(n)}function uP(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function cP(n,e){if(!!n){if(typeof n=="string")return ih(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ih(n,e)}}function ih(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function fP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dP(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,a=n.shake,o=n.flash,l=n.spin,u=n.spinPulse,c=n.spinReverse,f=n.pulse,d=n.fixedWidth,p=n.inverse,_=n.border,m=n.listItem,h=n.flip,g=n.size,v=n.rotation,y=n.pull,S=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":_,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},Gs(e,"fa-".concat(g),typeof g<"u"&&g!==null),Gs(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Gs(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Gs(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(S).map(function(x){return S[x]?x:null}).filter(function(x){return x})}function hP(n){return n=n-0,n===n}function Dx(n){return hP(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var pP=["style"];function mP(n){return n.charAt(0).toUpperCase()+n.slice(1)}function gP(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=Dx(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[mP(r)]=s:e[r]=s,e},{})}function Ix(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return Ix(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=gP(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Dx(u)]=c}return l},{attrs:{}}),s=t.style,a=s===void 0?{}:s,o=oP(t,pP);return r.attrs.style=er(er({},r.attrs.style),a),n.apply(void 0,[e.tag,er(er({},r.attrs),o)].concat(nh(i)))}var kx=!1;try{kx=!0}catch{}function vP(){if(!kx&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function ov(n){if(n&&Uu(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(th.icon)return th.icon(n);if(n===null)return null;if(n&&Uu(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Rf(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gs({},n,e):{}}var pc=Bu.forwardRef(function(n,e){var t=n.icon,i=n.mask,r=n.symbol,s=n.className,a=n.title,o=n.titleId,l=n.maskId,u=ov(t),c=Rf("classes",[].concat(nh(dP(n)),nh(s.split(" ")))),f=Rf("transform",typeof n.transform=="string"?th.transform(n.transform):n.transform),d=Rf("mask",ov(i)),p=sP(u,er(er(er(er({},c),f),d),{},{symbol:r,title:a,titleId:o,maskId:l}));if(!p)return vP("Could not find icon",u),null;var _=p.abstract,m={ref:e};return Object.keys(n).forEach(function(h){pc.defaultProps.hasOwnProperty(h)||(m[h]=n[h])}),_P(_[0],m)});pc.displayName="FontAwesomeIcon";pc.propTypes={beat:Ce.exports.bool,border:Ce.exports.bool,beatFade:Ce.exports.bool,bounce:Ce.exports.bool,className:Ce.exports.string,fade:Ce.exports.bool,flash:Ce.exports.bool,mask:Ce.exports.oneOfType([Ce.exports.object,Ce.exports.array,Ce.exports.string]),maskId:Ce.exports.string,fixedWidth:Ce.exports.bool,inverse:Ce.exports.bool,flip:Ce.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ce.exports.oneOfType([Ce.exports.object,Ce.exports.array,Ce.exports.string]),listItem:Ce.exports.bool,pull:Ce.exports.oneOf(["right","left"]),pulse:Ce.exports.bool,rotation:Ce.exports.oneOf([0,90,180,270]),shake:Ce.exports.bool,size:Ce.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ce.exports.bool,spinPulse:Ce.exports.bool,spinReverse:Ce.exports.bool,symbol:Ce.exports.oneOfType([Ce.exports.bool,Ce.exports.string]),title:Ce.exports.string,titleId:Ce.exports.string,transform:Ce.exports.oneOfType([Ce.exports.string,Ce.exports.object]),swapOpacity:Ce.exports.bool};pc.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var _P=Ix.bind(null,Bu.createElement),yP={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},xP=yP,SP={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wP=SP;rP.add(xP,wP);function MP(){return Me("div",{className:"p-5",children:[{image:"fa-github",url:"https://github.com/moomoo2202"},{image:"fa-youtube",url:"https://www.youtube.com/user/moomoo02Gaming"},{image:"fa-discord",url:"https://discordapp.com/users/708372877002539089/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/vincehnguyen/"},{image:"fa-twitter",url:"https://twitter.com/moomoo02_"}].map((e,t)=>Me("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":`My ${e.image.split("-")[1]}`,children:Me("i",{style:{padding:"10px"},className:`fab ${e.image}  fa-5x socialicons`})},`social-icon-${t}`))})}function bP(){return ft.exports.useEffect(()=>{const n=new EC("myThreeJsCanvas");n.initialize(),n.animate();let e;new Q3().load("/models/shiba/scene.gltf",r=>{e=r,console.log(e),r.scene.rotation.y=Math.PI/8,r.scene.position.y=3,r.scene.scale.set(10,10,10),n.scene.add(r.scene)});const i=()=>{e&&(e.scene.rotation.x+=.01,e.scene.rotation.y+=.01,e.scene.rotation.z+=.01),requestAnimationFrame(i)};i()},[]),Kn("div",{class:"xl container mx-auto",children:[Me("div",{className:"title",children:"Vince Nguyen"}),Me(tC,{}),Me(nC,{}),Me("h1",{class:"pt-20 pb-20",children:"Meet my friend !!! (Sorry idk what he is doing)"}),Me("canvas",{class:"flex items-center justify-center h-screen",className:"canvas",id:"myThreeJsCanvas"}),Me("h1",{class:"pt-20 pb-10",children:"Now lets be friends :)"}),Me(MP,{}),Me("h3",{children:"Created by Vince Nguyen 2022"})]})}If.createRoot(document.getElementById("root")).render(Me(Bu.StrictMode,{children:Me(MC,{children:Me(bP,{})})}));
