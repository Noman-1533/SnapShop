import{a as nr}from"./chunk-MNE3NL3O.js";import{a as ir}from"./chunk-BSH4CSOU.js";import{a as ar}from"./chunk-VEJBAZE2.js";import{a as sr}from"./chunk-ZQNPR7F3.js";import"./chunk-4CJOZYTH.js";import"./chunk-E5WWWRRR.js";import{a as or}from"./chunk-E4M3446G.js";import{a as rr}from"./chunk-NR4KKSSU.js";import{a as lr}from"./chunk-BW45LEOL.js";import{a as cr}from"./chunk-AATAVQJH.js";import{A as Si,B as be,C as W,D as rn,F as w,Fa as Vi,G as S,Ga as Hi,H as K,Ha as x,Ia as se,Ja as qi,K as $e,Ka as sn,L as ae,La as Be,M as ee,Ma as on,Na as bt,Oa as Ki,P as Ei,Q as P,Qa as Wi,R as ki,Ra as Ui,S as Ge,T as xi,Ta as Yi,U as Ci,Ua as Qi,V as Ti,Va as Gi,W as an,Wa as Xi,X as gt,Xa as ln,Za as Zi,_ as Pi,a as pt,aa as Mi,ab as Ji,ba as Ai,bb as er,c as yi,ca as Oi,da as Ni,ea as Ii,eb as tr,fa as Di,ga as Li,ja as yt,ka as Fi,l as T,la as Ri,m as Pe,ma as zi,n as ge,na as vt,o as Me,p as vi,pa as ji,q as Ae,r as ye,ra as $i,s as Y,t as Q,u as nn,v as bi,w as z,wa as Bi,x as ve,y as _i,z as wi}from"./chunk-ITCRWGAV.js";function fr(i){return new T(3e3,!1)}function Ya(){return new T(3100,!1)}function Qa(){return new T(3101,!1)}function Ga(i){return new T(3001,!1)}function Xa(i){return new T(3003,!1)}function Za(i){return new T(3004,!1)}function Ja(i,e){return new T(3005,!1)}function es(){return new T(3006,!1)}function ts(){return new T(3007,!1)}function ns(i,e){return new T(3008,!1)}function is(i){return new T(3002,!1)}function rs(i,e,t,n,r){return new T(3010,!1)}function as(){return new T(3011,!1)}function ss(){return new T(3012,!1)}function os(){return new T(3200,!1)}function ls(){return new T(3202,!1)}function cs(){return new T(3013,!1)}function fs(i){return new T(3014,!1)}function us(i){return new T(3015,!1)}function ds(i){return new T(3016,!1)}function ms(i,e){return new T(3404,!1)}function hs(i){return new T(3502,!1)}function ps(i){return new T(3503,!1)}function gs(){return new T(3300,!1)}function ys(i){return new T(3504,!1)}function vs(i){return new T(3301,!1)}function bs(i,e){return new T(3302,!1)}function _s(i){return new T(3303,!1)}function ws(i,e){return new T(3400,!1)}function Ss(i){return new T(3401,!1)}function Es(i){return new T(3402,!1)}function ks(i,e){return new T(3505,!1)}function _e(i){switch(i.length){case 0:return new Be;case 1:return i[0];default:return new on(i)}}function kr(i,e,t=new Map,n=new Map){let r=[],a=[],s=-1,o=null;if(e.forEach(l=>{let c=l.get("offset"),f=c==s,u=f&&o||new Map;l.forEach((d,m)=>{let h=m,v=d;if(m!=="offset")switch(h=i.normalizePropertyName(h,r),v){case bt:v=t.get(m);break;case se:v=n.get(m);break;default:v=i.normalizeStyleValue(m,h,v,r);break}u.set(h,v)}),f||a.push(u),o=u,s=c}),r.length)throw hs(r);return a}function On(i,e,t,n){switch(e){case"start":i.onStart(()=>n(t&&cn(t,"start",i)));break;case"done":i.onDone(()=>n(t&&cn(t,"done",i)));break;case"destroy":i.onDestroy(()=>n(t&&cn(t,"destroy",i)));break}}function cn(i,e,t){let n=t.totalTime,r=!!t.disabled,a=Nn(i.element,i.triggerName,i.fromState,i.toState,e||i.phaseName,n??i.totalTime,r),s=i._data;return s!=null&&(a._data=s),a}function Nn(i,e,t,n,r="",a=0,s){return{element:i,triggerName:e,fromState:t,toState:n,phaseName:r,totalTime:a,disabled:!!s}}function X(i,e,t){let n=i.get(e);return n||i.set(e,n=t),n}function ur(i){let e=i.indexOf(":"),t=i.substring(1,e),n=i.slice(e+1);return[t,n]}var xs=typeof document>"u"?null:document.documentElement;function In(i){let e=i.parentNode||i.host||null;return e===xs?null:e}function Cs(i){return i.substring(1,6)=="ebkit"}var Oe=null,dr=!1;function Ts(i){Oe||(Oe=Ps()||{},dr=Oe.style?"WebkitAppearance"in Oe.style:!1);let e=!0;return Oe.style&&!Cs(i)&&(e=i in Oe.style,!e&&dr&&(e="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in Oe.style)),e}function Ps(){return typeof document<"u"?document.body:null}function xr(i,e){for(;e;){if(e===i)return!0;e=In(e)}return!1}function Cr(i,e,t){if(t)return Array.from(i.querySelectorAll(e));let n=i.querySelector(e);return n?[n]:[]}var Dn=(()=>{let e=class e{validateStyleProperty(n){return Ts(n)}matchesElement(n,r){return!1}containsElement(n,r){return xr(n,r)}getParentElement(n){return In(n)}query(n,r,a){return Cr(n,r,a)}computeStyle(n,r,a){return a||""}animate(n,r,a,s,o,l=[],c){return new Be(a,s)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let i=e;return i})(),zn=class zn{};zn.NOOP=new Dn;var De=zn,Le=class{};var Ms=1e3,Tr="{{",As="}}",Pr="ng-enter",pn="ng-leave",_t="ng-trigger",xt=".ng-trigger",mr="ng-animating",gn=".ng-animating";function ce(i){if(typeof i=="number")return i;let e=i.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:yn(parseFloat(e[1]),e[2])}function yn(i,e){switch(e){case"s":return i*Ms;default:return i}}function Ct(i,e,t){return i.hasOwnProperty("duration")?i:Os(i,e,t)}function Os(i,e,t){let n=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,a=0,s="";if(typeof i=="string"){let o=i.match(n);if(o===null)return e.push(fr(i)),{duration:0,delay:0,easing:""};r=yn(parseFloat(o[1]),o[2]);let l=o[3];l!=null&&(a=yn(parseFloat(l),o[4]));let c=o[5];c&&(s=c)}else r=i;if(!t){let o=!1,l=e.length;r<0&&(e.push(Ya()),o=!0),a<0&&(e.push(Qa()),o=!0),o&&e.splice(l,0,fr(i))}return{duration:r,delay:a,easing:s}}function Ns(i){return i.length?i[0]instanceof Map?i:i.map(e=>new Map(Object.entries(e))):[]}function oe(i,e,t){e.forEach((n,r)=>{let a=Ln(r);t&&!t.has(r)&&t.set(r,i.style[a]),i.style[a]=n})}function Ie(i,e){e.forEach((t,n)=>{let r=Ln(n);i.style[r]=""})}function Xe(i){return Array.isArray(i)?i.length==1?i[0]:qi(i):i}function Is(i,e,t){let n=e.params||{},r=Mr(i);r.length&&r.forEach(a=>{n.hasOwnProperty(a)||t.push(Ga(a))})}var vn=new RegExp(`${Tr}\\s*(.+?)\\s*${As}`,"g");function Mr(i){let e=[];if(typeof i=="string"){let t;for(;t=vn.exec(i);)e.push(t[1]);vn.lastIndex=0}return e}function Je(i,e,t){let n=`${i}`,r=n.replace(vn,(a,s)=>{let o=e[s];return o==null&&(t.push(Xa(s)),o=""),o.toString()});return r==n?i:r}var Ds=/-+([a-z0-9])/g;function Ln(i){return i.replace(Ds,(...e)=>e[1].toUpperCase())}function Ls(i,e){return i===0||e===0}function Fs(i,e,t){if(t.size&&e.length){let n=e[0],r=[];if(t.forEach((a,s)=>{n.has(s)||r.push(s),n.set(s,a)}),r.length)for(let a=1;a<e.length;a++){let s=e[a];r.forEach(o=>s.set(o,Fn(i,o)))}}return e}function G(i,e,t){switch(e.type){case x.Trigger:return i.visitTrigger(e,t);case x.State:return i.visitState(e,t);case x.Transition:return i.visitTransition(e,t);case x.Sequence:return i.visitSequence(e,t);case x.Group:return i.visitGroup(e,t);case x.Animate:return i.visitAnimate(e,t);case x.Keyframes:return i.visitKeyframes(e,t);case x.Style:return i.visitStyle(e,t);case x.Reference:return i.visitReference(e,t);case x.AnimateChild:return i.visitAnimateChild(e,t);case x.AnimateRef:return i.visitAnimateRef(e,t);case x.Query:return i.visitQuery(e,t);case x.Stagger:return i.visitStagger(e,t);default:throw Za(e.type)}}function Fn(i,e){return window.getComputedStyle(i)[e]}var Rs=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Tt=class extends Le{normalizePropertyName(e,t){return Ln(e)}normalizeStyleValue(e,t,n,r){let a="",s=n.toString().trim();if(Rs.has(t)&&n!==0&&n!=="0")if(typeof n=="number")a="px";else{let o=n.match(/^[+-]?[\d\.]+([a-z]*)$/);o&&o[1].length==0&&r.push(Ja(e,n))}return s+a}};var Pt="*";function zs(i,e){let t=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(n=>js(n,t,e)):t.push(i),t}function js(i,e,t){if(i[0]==":"){let l=$s(i,t);if(typeof l=="function"){e.push(l);return}i=l}let n=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return t.push(us(i)),e;let r=n[1],a=n[2],s=n[3];e.push(hr(r,s));let o=r==Pt&&s==Pt;a[0]=="<"&&!o&&e.push(hr(s,r))}function $s(i,e){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,n)=>parseFloat(n)>parseFloat(t);case":decrement":return(t,n)=>parseFloat(n)<parseFloat(t);default:return e.push(ds(i)),"* => *"}}var wt=new Set(["true","1"]),St=new Set(["false","0"]);function hr(i,e){let t=wt.has(i)||St.has(i),n=wt.has(e)||St.has(e);return(r,a)=>{let s=i==Pt||i==r,o=e==Pt||e==a;return!s&&t&&typeof r=="boolean"&&(s=r?wt.has(i):St.has(i)),!o&&n&&typeof a=="boolean"&&(o=a?wt.has(e):St.has(e)),s&&o}}var Ar=":self",Bs=new RegExp(`s*${Ar}s*,?`,"g");function Or(i,e,t,n){return new bn(i).build(e,t,n)}var pr="",bn=class{constructor(e){this._driver=e}build(e,t,n){let r=new _n(t);return this._resetContextStyleTimingState(r),G(this,Xe(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=pr,e.collectedStyles=new Map,e.collectedStyles.set(pr,new Map),e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0,a=[],s=[];return e.name.charAt(0)=="@"&&t.errors.push(es()),e.definitions.forEach(o=>{if(this._resetContextStyleTimingState(t),o.type==x.State){let l=o,c=l.name;c.toString().split(/\s*,\s*/).forEach(f=>{l.name=f,a.push(this.visitState(l,t))}),l.name=c}else if(o.type==x.Transition){let l=this.visitTransition(o,t);n+=l.queryCount,r+=l.depCount,s.push(l)}else t.errors.push(ts())}),{type:x.Trigger,name:e.name,states:a,transitions:s,queryCount:n,depCount:r,options:null}}visitState(e,t){let n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){let a=new Set,s=r||{};n.styles.forEach(o=>{o instanceof Map&&o.forEach(l=>{Mr(l).forEach(c=>{s.hasOwnProperty(c)||a.add(c)})})}),a.size&&t.errors.push(ns(e.name,[...a.values()]))}return{type:x.State,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let n=G(this,Xe(e.animation),t),r=zs(e.expr,t.errors);return{type:x.Transition,matchers:r,animation:n,queryCount:t.queryCount,depCount:t.depCount,options:Ne(e.options)}}visitSequence(e,t){return{type:x.Sequence,steps:e.steps.map(n=>G(this,n,t)),options:Ne(e.options)}}visitGroup(e,t){let n=t.currentTime,r=0,a=e.steps.map(s=>{t.currentTime=n;let o=G(this,s,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:x.Group,steps:a,options:Ne(e.options)}}visitAnimate(e,t){let n=Ks(e.timings,t.errors);t.currentAnimateTimings=n;let r,a=e.styles?e.styles:sn({});if(a.type==x.Keyframes)r=this.visitKeyframes(a,t);else{let s=e.styles,o=!1;if(!s){o=!0;let c={};n.easing&&(c.easing=n.easing),s=sn(c)}t.currentTime+=n.duration+n.delay;let l=this.visitStyle(s,t);l.isEmptyStep=o,r=l}return t.currentAnimateTimings=null,{type:x.Animate,timings:n,style:r,options:null}}visitStyle(e,t){let n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){let n=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let o of r)typeof o=="string"?o===se?n.push(o):t.errors.push(is(o)):n.push(new Map(Object.entries(o)));let a=!1,s=null;return n.forEach(o=>{if(o instanceof Map&&(o.has("easing")&&(s=o.get("easing"),o.delete("easing")),!a)){for(let l of o.values())if(l.toString().indexOf(Tr)>=0){a=!0;break}}}),{type:x.Style,styles:n,easing:s,offset:e.offset,containsDynamicStyles:a,options:null}}_validateStyleAst(e,t){let n=t.currentAnimateTimings,r=t.currentTime,a=t.currentTime;n&&a>0&&(a-=n.duration+n.delay),e.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),f=c.get(l),u=!0;f&&(a!=r&&a>=f.startTime&&r<=f.endTime&&(t.errors.push(rs(l,f.startTime,f.endTime,a,r)),u=!1),a=f.startTime),u&&c.set(l,{startTime:a,endTime:r}),t.options&&Is(o,t.options,t.errors)})})}visitKeyframes(e,t){let n={type:x.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(as()),n;let r=1,a=0,s=[],o=!1,l=!1,c=0,f=e.steps.map(A=>{let k=this._makeStyleAst(A,t),M=k.offset!=null?k.offset:qs(k.styles),O=0;return M!=null&&(a++,O=k.offset=M),l=l||O<0||O>1,o=o||O<c,c=O,s.push(O),k});l&&t.errors.push(ss()),o&&t.errors.push(os());let u=e.steps.length,d=0;a>0&&a<u?t.errors.push(ls()):a==0&&(d=r/(u-1));let m=u-1,h=t.currentTime,v=t.currentAnimateTimings,E=v.duration;return f.forEach((A,k)=>{let M=d>0?k==m?1:d*k:s[k],O=M*E;t.currentTime=h+v.delay+O,v.duration=O,this._validateStyleAst(A,t),A.offset=M,n.styles.push(A)}),n}visitReference(e,t){return{type:x.Reference,animation:G(this,Xe(e.animation),t),options:Ne(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:x.AnimateChild,options:Ne(e.options)}}visitAnimateRef(e,t){return{type:x.AnimateRef,animation:this.visitReference(e.animation,t),options:Ne(e.options)}}visitQuery(e,t){let n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[a,s]=Vs(e.selector);t.currentQuerySelector=n.length?n+" "+a:a,X(t.collectedStyles,t.currentQuerySelector,new Map);let o=G(this,Xe(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:x.Query,selector:a,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:o,originalSelector:e.selector,options:Ne(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(cs());let n=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Ct(e.timings,t.errors,!0);return{type:x.Stagger,animation:G(this,Xe(e.animation),t),timings:n,options:null}}};function Vs(i){let e=!!i.split(/\s*,\s*/).find(t=>t==Ar);return e&&(i=i.replace(Bs,"")),i=i.replace(/@\*/g,xt).replace(/@\w+/g,t=>xt+"-"+t.slice(1)).replace(/:animating/g,gn),[i,e]}function Hs(i){return i?pt({},i):null}var _n=class{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}};function qs(i){if(typeof i=="string")return null;let e=null;if(Array.isArray(i))i.forEach(t=>{if(t instanceof Map&&t.has("offset")){let n=t;e=parseFloat(n.get("offset")),n.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let t=i;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function Ks(i,e){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let a=Ct(i,e).duration;return fn(a,0,"")}let t=i;if(t.split(/\s+/).some(a=>a.charAt(0)=="{"&&a.charAt(1)=="{")){let a=fn(0,0,"");return a.dynamic=!0,a.strValue=t,a}let r=Ct(t,e);return fn(r.duration,r.delay,r.easing)}function Ne(i){return i?(i=pt({},i),i.params&&(i.params=Hs(i.params))):i={},i}function fn(i,e,t){return{duration:i,delay:e,easing:t}}function Rn(i,e,t,n,r,a,s=null,o=!1){return{type:1,element:i,keyframes:e,preStyleProps:t,postStyleProps:n,duration:r,delay:a,totalTime:r+a,easing:s,subTimeline:o}}var et=class{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Ws=1,Us=":enter",Ys=new RegExp(Us,"g"),Qs=":leave",Gs=new RegExp(Qs,"g");function Nr(i,e,t,n,r,a=new Map,s=new Map,o,l,c=[]){return new wn().buildKeyframes(i,e,t,n,r,a,s,o,l,c)}var wn=class{buildKeyframes(e,t,n,r,a,s,o,l,c,f=[]){c=c||new et;let u=new Sn(e,t,c,r,a,f,[]);u.options=l;let d=l.delay?ce(l.delay):0;u.currentTimeline.delayNextStep(d),u.currentTimeline.setStyles([s],null,u.errors,l),G(this,n,u);let m=u.timelines.filter(h=>h.containsAnimation());if(m.length&&o.size){let h;for(let v=m.length-1;v>=0;v--){let E=m[v];if(E.element===t){h=E;break}}h&&!h.allowOnlyTimelineStyles()&&h.setStyles([o],null,u.errors,l)}return m.length?m.map(h=>h.buildKeyframes()):[Rn(t,[],[],[],0,d,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let n=t.subInstructions.get(t.element);if(n){let r=t.createSubContext(e.options),a=t.currentTimeline.currentTime,s=this._visitSubInstructions(n,r,r.options);a!=s&&t.transformIntoNewTimeline(s)}t.previousNode=e}visitAnimateRef(e,t){let n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,n),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,n){for(let r of e){let a=r?.delay;if(a){let s=typeof a=="number"?a:ce(Je(a,r?.params??{},t.errors));n.delayNextStep(s)}}}_visitSubInstructions(e,t,n){let a=t.currentTimeline.currentTime,s=n.duration!=null?ce(n.duration):null,o=n.delay!=null?ce(n.delay):null;return s!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,s,o);a=Math.max(a,c.duration+c.delay)}),a}visitReference(e,t){t.updateOptions(e.options,!0),G(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let n=t.subContextCount,r=t,a=e.options;if(a&&(a.params||a.delay)&&(r=t.createSubContext(a),r.transformIntoNewTimeline(),a.delay!=null)){r.previousNode.type==x.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Mt);let s=ce(a.delay);r.delayNextStep(s)}e.steps.length&&(e.steps.forEach(s=>G(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let n=[],r=t.currentTimeline.currentTime,a=e.options&&e.options.delay?ce(e.options.delay):0;e.steps.forEach(s=>{let o=t.createSubContext(e.options);a&&o.delayNextStep(a),G(this,s,o),r=Math.max(r,o.currentTimeline.currentTime),n.push(o.currentTimeline)}),n.forEach(s=>t.currentTimeline.mergeTimelineCollectedStyles(s)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let n=e.strValue,r=t.params?Je(n,t.params,t.errors):n;return Ct(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());let a=e.style;a.type==x.Keyframes?this.visitKeyframes(a,t):(t.incrementTime(n.duration),this.visitStyle(a,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.hasCurrentStyleProperties()&&n.forwardFrame();let a=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(a):n.setStyles(e.styles,a,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let n=t.currentAnimateTimings,r=t.currentTimeline.duration,a=n.duration,o=t.createSubContext().currentTimeline;o.easing=n.easing,e.styles.forEach(l=>{let c=l.offset||0;o.forwardTime(c*a),o.setStyles(l.styles,l.easing,t.errors,t.options),o.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(o),t.transformIntoNewTimeline(r+a),t.previousNode=e}visitQuery(e,t){let n=t.currentTimeline.currentTime,r=e.options||{},a=r.delay?ce(r.delay):0;a&&(t.previousNode.type===x.Style||n==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Mt);let s=n,o=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=o.length;let l=null;o.forEach((c,f)=>{t.currentQueryIndex=f;let u=t.createSubContext(e.options,c);a&&u.delayNextStep(a),c===t.element&&(l=u.currentTimeline),G(this,e.animation,u),u.currentTimeline.applyStylesToKeyframe();let d=u.currentTimeline.currentTime;s=Math.max(s,d)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(s),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let n=t.parentContext,r=t.currentTimeline,a=e.timings,s=Math.abs(a.duration),o=s*(t.currentQueryTotal-1),l=s*t.currentQueryIndex;switch(a.duration<0?"reverse":a.easing){case"reverse":l=o-l;break;case"full":l=n.currentStaggerTime;break}let f=t.currentTimeline;l&&f.delayNextStep(l);let u=f.currentTime;G(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-u+(r.startTime-n.currentTimeline.startTime)}},Mt={},Sn=class i{constructor(e,t,n,r,a,s,o,l){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=a,this.errors=s,this.timelines=o,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Mt,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=l||new At(this._driver,t,0),o.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let n=e,r=this.options;n.duration!=null&&(r.duration=ce(n.duration)),n.delay!=null&&(r.delay=ce(n.delay));let a=n.params;if(a){let s=r.params;s||(s=this.options.params={}),Object.keys(a).forEach(o=>{(!t||!s.hasOwnProperty(o))&&(s[o]=Je(a[o],s,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let n=e.params={};Object.keys(t).forEach(r=>{n[r]=t[r]})}}return e}createSubContext(e=null,t,n){let r=t||this.element,a=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return a.previousNode=this.previousNode,a.currentAnimateTimings=this.currentAnimateTimings,a.options=this._copyOptions(),a.updateOptions(e),a.currentQueryIndex=this.currentQueryIndex,a.currentQueryTotal=this.currentQueryTotal,a.parentContext=this,this.subContextCount++,a}transformIntoNewTimeline(e){return this.previousNode=Mt,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(n??0)+e.delay,easing:""},a=new En(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(a),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,a,s){let o=[];if(r&&o.push(this.element),e.length>0){e=e.replace(Ys,"."+this._enterClassName),e=e.replace(Gs,"."+this._leaveClassName);let l=n!=1,c=this._driver.query(this.element,e,l);n!==0&&(c=n<0?c.slice(c.length+n,c.length):c.slice(0,n)),o.push(...c)}return!a&&o.length==0&&s.push(fs(t)),o}},At=class i{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new i(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ws,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,n]of this._globalTimelineStyles)this._backFill.set(t,n||se),this._currentKeyframe.set(t,se);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&this._previousKeyframe.set("easing",t);let a=r&&r.params||{},s=Xs(e,this._globalTimelineStyles);for(let[o,l]of s){let c=Je(l,a,n);this._pendingStyles.set(o,c),this._localTimelineStyles.has(o)||this._backFill.set(o,this._globalTimelineStyles.get(o)??se),this._updateStyle(o,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,n)=>{let r=this._styleSummary.get(n);(!r||t.time>r.time)&&this._updateStyle(n,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,n=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((o,l)=>{let c=new Map([...this._backFill,...o]);c.forEach((f,u)=>{f===bt?e.add(u):f===se&&t.add(u)}),n||c.set("offset",l/this.duration),r.push(c)});let a=[...e.values()],s=[...t.values()];if(n){let o=r[0],l=new Map(o);o.set("offset",0),l.set("offset",1),r=[o,l]}return Rn(this.element,r,a,s,this.duration,this.startTime,this.easing,!1)}},En=class extends At{constructor(e,t,n,r,a,s,o=!1){super(e,t,s.delay),this.keyframes=n,this.preStyleProps=r,this.postStyleProps=a,this._stretchStartingKeyframe=o,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let a=[],s=n+t,o=t/s,l=new Map(e[0]);l.set("offset",0),a.push(l);let c=new Map(e[0]);c.set("offset",gr(o)),a.push(c);let f=e.length-1;for(let u=1;u<=f;u++){let d=new Map(e[u]),m=d.get("offset"),h=t+m*n;d.set("offset",gr(h/s)),a.push(d)}n=s,t=0,r="",e=a}return Rn(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}};function gr(i,e=3){let t=Math.pow(10,e-1);return Math.round(i*t)/t}function Xs(i,e){let t=new Map,n;return i.forEach(r=>{if(r==="*"){n??=e.keys();for(let a of n)t.set(a,se)}else for(let[a,s]of r)t.set(a,s)}),t}function yr(i,e,t,n,r,a,s,o,l,c,f,u,d){return{type:0,element:i,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:a,toState:n,toStyles:s,timelines:o,queriedElements:l,preStyleProps:c,postStyleProps:f,totalTime:u,errors:d}}var un={},Ot=class{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return Zs(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,n):new Map}build(e,t,n,r,a,s,o,l,c,f){let u=[],d=this.ast.options&&this.ast.options.params||un,m=o&&o.params||un,h=this.buildStyles(n,m,u),v=l&&l.params||un,E=this.buildStyles(r,v,u),A=new Set,k=new Map,M=new Map,O=r==="void",R={params:Ir(v,d),delay:this.ast.options?.delay},$=f?[]:Nr(e,t,this.ast.animation,a,s,h,E,R,c,u),D=0;return $.forEach(B=>{D=Math.max(B.duration+B.delay,D)}),u.length?yr(t,this._triggerName,n,r,O,h,E,[],[],k,M,D,u):($.forEach(B=>{let H=B.element,he=X(k,H,new Set);B.preStyleProps.forEach(Ce=>he.add(Ce));let mi=X(M,H,new Set);B.postStyleProps.forEach(Ce=>mi.add(Ce)),H!==t&&A.add(H)}),yr(t,this._triggerName,n,r,O,h,E,$,[...A.values()],k,M,D))}};function Zs(i,e,t,n,r){return i.some(a=>a(e,t,n,r))}function Ir(i,e){let t=pt({},e);return Object.entries(i).forEach(([n,r])=>{r!=null&&(t[n]=r)}),t}var kn=class{constructor(e,t,n){this.styles=e,this.defaultParams=t,this.normalizer=n}buildStyles(e,t){let n=new Map,r=Ir(e,this.defaultParams);return this.styles.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,o)=>{s&&(s=Je(s,r,t));let l=this.normalizer.normalizePropertyName(o,t);s=this.normalizer.normalizeStyleValue(o,l,s,t),n.set(o,s)})}),n}};function Js(i,e,t){return new xn(i,e,t)}var xn=class{constructor(e,t,n){this.name=e,this.ast=t,this._normalizer=n,this.transitionFactories=[],this.states=new Map,t.states.forEach(r=>{let a=r.options&&r.options.params||{};this.states.set(r.name,new kn(r.style,a,n))}),vr(this.states,"true","1"),vr(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new Ot(e,r,this.states))}),this.fallbackTransition=eo(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(s=>s.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}};function eo(i,e,t){let n=[(s,o)=>!0],r={type:x.Sequence,steps:[],options:null},a={type:x.Transition,animation:r,matchers:n,options:null,queryCount:0,depCount:0};return new Ot(i,a,e)}function vr(i,e,t){i.has(e)?i.has(t)||i.set(t,i.get(e)):i.has(t)&&i.set(e,i.get(t))}var to=new et,Cn=class{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations=new Map,this._playersById=new Map,this.players=[]}register(e,t){let n=[],r=[],a=Or(this._driver,t,n,r);if(n.length)throw ps(n);r.length&&void 0,this._animations.set(e,a)}_buildPlayer(e,t,n){let r=e.element,a=kr(this._normalizer,e.keyframes,t,n);return this._driver.animate(r,a,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){let r=[],a=this._animations.get(e),s,o=new Map;if(a?(s=Nr(this._driver,t,a,Pr,pn,new Map,new Map,n,to,r),s.forEach(f=>{let u=X(o,f.element,new Map);f.postStyleProps.forEach(d=>u.set(d,null))})):(r.push(gs()),s=[]),r.length)throw ys(r);o.forEach((f,u)=>{f.forEach((d,m)=>{f.set(m,this._driver.computeStyle(u,m,se))})});let l=s.map(f=>{let u=o.get(f.element);return this._buildPlayer(f,new Map,u)}),c=_e(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw vs(e);return t}listen(e,t,n,r){let a=Nn(t,"","","");return On(this._getPlayer(e),n,a,r),()=>{}}command(e,t,n,r){if(n=="register"){this.register(e,r[0]);return}if(n=="create"){let s=r[0]||{};this.create(e,t,s);return}let a=this._getPlayer(e);switch(n){case"play":a.play();break;case"pause":a.pause();break;case"reset":a.reset();break;case"restart":a.restart();break;case"finish":a.finish();break;case"init":a.init();break;case"setPosition":a.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},br="ng-animate-queued",no=".ng-animate-queued",dn="ng-animate-disabled",io=".ng-animate-disabled",ro="ng-star-inserted",ao=".ng-star-inserted",so=[],Dr={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},oo={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ne="__ng_removed",tt=class{get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let n=e&&e.hasOwnProperty("value"),r=n?e.value:e;if(this.value=co(r),n){let a=e,{value:s}=a,o=yi(a,["value"]);this.options=o}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let n=this.options.params;Object.keys(t).forEach(r=>{n[r]==null&&(n[r]=t[r])})}}},Ze="void",mn=new tt(Ze),Tn=class{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,te(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.has(t))throw bs(n,t);if(n==null||n.length==0)throw _s(t);if(!fo(n))throw ws(n,t);let a=X(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};a.push(s);let o=X(this._engine.statesByElement,e,new Map);return o.has(t)||(te(e,_t),te(e,_t+"-"+t),o.set(t,mn)),()=>{this._engine.afterFlush(()=>{let l=a.indexOf(s);l>=0&&a.splice(l,1),this._triggers.has(t)||o.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Ss(e);return t}trigger(e,t,n,r=!0){let a=this._getTrigger(t),s=new nt(this.id,t,e),o=this._engine.statesByElement.get(e);o||(te(e,_t),te(e,_t+"-"+t),this._engine.statesByElement.set(e,o=new Map));let l=o.get(t),c=new tt(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),o.set(t,c),l||(l=mn),!(c.value===Ze)&&l.value===c.value){if(!ho(l.params,c.params)){let v=[],E=a.matchStyles(l.value,l.params,v),A=a.matchStyles(c.value,c.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{Ie(e,E),oe(e,A)})}return}let d=X(this._engine.playersByElement,e,[]);d.forEach(v=>{v.namespaceId==this.id&&v.triggerName==t&&v.queued&&v.destroy()});let m=a.matchTransition(l.value,c.value,e,c.params),h=!1;if(!m){if(!r)return;m=a.fallbackTransition,h=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:m,fromState:l,toState:c,player:s,isFallbackTransition:h}),h||(te(e,br),s.onStart(()=>{Ve(e,br)})),s.onDone(()=>{let v=this.players.indexOf(s);v>=0&&this.players.splice(v,1);let E=this._engine.playersByElement.get(e);if(E){let A=E.indexOf(s);A>=0&&E.splice(A,1)}}),this.players.push(s),d.push(s),s}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(n=>n.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let n=this._engine.driver.query(e,xt,!0);n.forEach(r=>{if(r[ne])return;let a=this._engine.fetchNamespacesByElement(r);a.size?a.forEach(s=>s.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,n,r){let a=this._engine.statesByElement.get(e),s=new Map;if(a){let o=[];if(a.forEach((l,c)=>{if(s.set(c,l.value),this._triggers.has(c)){let f=this.trigger(e,c,Ze,r);f&&o.push(f)}}),o.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,s),n&&_e(o).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),n=this._engine.statesByElement.get(e);if(t&&n){let r=new Set;t.forEach(a=>{let s=a.name;if(r.has(s))return;r.add(s);let l=this._triggers.get(s).fallbackTransition,c=n.get(s)||mn,f=new tt(Ze),u=new nt(this.id,s,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:s,transition:l,fromState:c,toState:f,player:u,isFallbackTransition:!0})})}}removeNode(e,t){let n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){let a=n.players.length?n.playersByQueriedElement.get(e):[];if(a&&a.length)r=!0;else{let s=e;for(;s=s.parentNode;)if(n.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{let a=e[ne];(!a||a===Dr)&&(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){te(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(n=>{let r=n.player;if(r.destroyed)return;let a=n.element,s=this._elementListeners.get(a);s&&s.forEach(o=>{if(o.name==n.triggerName){let l=Nn(a,n.triggerName,n.fromState.value,n.toState.value);l._data=e,On(n.player,o.phase,l,o.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((n,r)=>{let a=n.transition.ast.depCount,s=r.transition.ast.depCount;return a==0||s==0?a-s:this._engine.driver.containsElement(n.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},Pn=class{_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,n,r){this.bodyNode=e,this.driver=t,this._normalizer=n,this.scheduler=r,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(a,s)=>{}}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(n=>{n.queued&&e.push(n)})}),e}createNamespace(e,t){let n=new Tn(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){let n=this._namespaceList,r=this.namespacesByHostElement;if(n.length-1>=0){let s=!1,o=this.driver.getParentElement(t);for(;o;){let l=r.get(o);if(l){let c=n.indexOf(l);n.splice(c+1,0,e),s=!0;break}o=this.driver.getParentElement(o)}s||n.unshift(e)}else n.push(e);return r.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(e);this.namespacesByHostElement.delete(n.hostElement);let r=this._namespaceList.indexOf(n);r>=0&&this._namespaceList.splice(r,1),n.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,n=this.statesByElement.get(e);if(n){for(let r of n.values())if(r.namespaceId){let a=this._fetchNamespace(r.namespaceId);a&&t.add(a)}}return t}trigger(e,t,n,r){if(Et(t)){let a=this._fetchNamespace(e);if(a)return a.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!Et(t))return;let a=t[ne];if(a&&a.setForRemoval){a.setForRemoval=!1,a.setForMove=!0;let s=this.collectedLeaveElements.indexOf(t);s>=0&&this.collectedLeaveElements.splice(s,1)}if(e){let s=this._fetchNamespace(e);s&&s.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),te(e,dn)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Ve(e,dn))}removeNode(e,t,n){if(Et(t)){this.scheduler?.notify();let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,n):this.markElementAsRemoved(e,t,!1,n);let a=this.namespacesByHostElement.get(t);a&&a.id!==e&&a.removeNode(t,n)}else this._onRemovalComplete(t,n)}markElementAsRemoved(e,t,n,r,a){this.collectedLeaveElements.push(t),t[ne]={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:a}}listen(e,t,n,r,a){return Et(t)?this._fetchNamespace(e).listen(t,n,r,a):()=>{}}_buildInstruction(e,t,n,r,a){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,a)}destroyInnerAnimations(e){let t=this.driver.query(e,xt,!0);t.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,gn,!0),t.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return _e(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[ne];if(t&&t.setForRemoval){if(e[ne]=Dr,t.namespaceId){this.destroyInnerAnimations(e);let n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(dn)&&this.markElementAsDisabled(e,!1),this.driver.query(e,io,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,r)=>this._balanceNamespaceList(n,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let r=this.collectedEnterElements[n];te(r,ro)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{t=this._flushAnimations(n,e)}finally{for(let r=0;r<n.length;r++)n[r]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let r=this.collectedLeaveElements[n];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],t.length?_e(t).onDone(()=>{n.forEach(r=>r())}):n.forEach(r=>r())}}reportError(e){throw Es(e)}_flushAnimations(e,t){let n=new et,r=[],a=new Map,s=[],o=new Map,l=new Map,c=new Map,f=new Set;this.disabledNodes.forEach(g=>{f.add(g);let b=this.driver.query(g,no,!0);for(let _=0;_<b.length;_++)f.add(b[_])});let u=this.bodyNode,d=Array.from(this.statesByElement.keys()),m=Sr(d,this.collectedEnterElements),h=new Map,v=0;m.forEach((g,b)=>{let _=Pr+v++;h.set(b,_),g.forEach(C=>te(C,_))});let E=[],A=new Set,k=new Set;for(let g=0;g<this.collectedLeaveElements.length;g++){let b=this.collectedLeaveElements[g],_=b[ne];_&&_.setForRemoval&&(E.push(b),A.add(b),_.hasAnimation?this.driver.query(b,ao,!0).forEach(C=>A.add(C)):k.add(b))}let M=new Map,O=Sr(d,Array.from(A));O.forEach((g,b)=>{let _=pn+v++;M.set(b,_),g.forEach(C=>te(C,_))}),e.push(()=>{m.forEach((g,b)=>{let _=h.get(b);g.forEach(C=>Ve(C,_))}),O.forEach((g,b)=>{let _=M.get(b);g.forEach(C=>Ve(C,_))}),E.forEach(g=>{this.processLeaveNode(g)})});let R=[],$=[];for(let g=this._namespaceList.length-1;g>=0;g--)this._namespaceList[g].drainQueuedTransitions(t).forEach(_=>{let C=_.player,V=_.element;if(R.push(C),this.collectedEnterElements.length){let q=V[ne];if(q&&q.setForMove){if(q.previousTriggersValues&&q.previousTriggersValues.has(_.triggerName)){let Te=q.previousTriggersValues.get(_.triggerName),J=this.statesByElement.get(_.element);if(J&&J.has(_.triggerName)){let ht=J.get(_.triggerName);ht.value=Te,J.set(_.triggerName,ht)}}C.destroy();return}}let re=!u||!this.driver.containsElement(u,V),U=M.get(V),pe=h.get(V),L=this._buildInstruction(_,n,pe,U,re);if(L.errors&&L.errors.length){$.push(L);return}if(re){C.onStart(()=>Ie(V,L.fromStyles)),C.onDestroy(()=>oe(V,L.toStyles)),r.push(C);return}if(_.isFallbackTransition){C.onStart(()=>Ie(V,L.fromStyles)),C.onDestroy(()=>oe(V,L.toStyles)),r.push(C);return}let gi=[];L.timelines.forEach(q=>{q.stretchStartingKeyframe=!0,this.disabledNodes.has(q.element)||gi.push(q)}),L.timelines=gi,n.append(V,L.timelines);let Ua={instruction:L,player:C,element:V};s.push(Ua),L.queriedElements.forEach(q=>X(o,q,[]).push(C)),L.preStyleProps.forEach((q,Te)=>{if(q.size){let J=l.get(Te);J||l.set(Te,J=new Set),q.forEach((ht,tn)=>J.add(tn))}}),L.postStyleProps.forEach((q,Te)=>{let J=c.get(Te);J||c.set(Te,J=new Set),q.forEach((ht,tn)=>J.add(tn))})});if($.length){let g=[];$.forEach(b=>{g.push(ks(b.triggerName,b.errors))}),R.forEach(b=>b.destroy()),this.reportError(g)}let D=new Map,B=new Map;s.forEach(g=>{let b=g.element;n.has(b)&&(B.set(b,b),this._beforeAnimationBuild(g.player.namespaceId,g.instruction,D))}),r.forEach(g=>{let b=g.element;this._getPreviousPlayers(b,!1,g.namespaceId,g.triggerName,null).forEach(C=>{X(D,b,[]).push(C),C.destroy()})});let H=E.filter(g=>Er(g,l,c)),he=new Map;wr(he,this.driver,k,c,se).forEach(g=>{Er(g,l,c)&&H.push(g)});let Ce=new Map;m.forEach((g,b)=>{wr(Ce,this.driver,new Set(g),l,bt)}),H.forEach(g=>{let b=he.get(g),_=Ce.get(g);he.set(g,new Map([...b?.entries()??[],..._?.entries()??[]]))});let en=[],hi=[],pi={};s.forEach(g=>{let{element:b,player:_,instruction:C}=g;if(n.has(b)){if(f.has(b)){_.onDestroy(()=>oe(b,C.toStyles)),_.disabled=!0,_.overrideTotalTime(C.totalTime),r.push(_);return}let V=pi;if(B.size>1){let U=b,pe=[];for(;U=U.parentNode;){let L=B.get(U);if(L){V=L;break}pe.push(U)}pe.forEach(L=>B.set(L,V))}let re=this._buildAnimation(_.namespaceId,C,D,a,Ce,he);if(_.setRealPlayer(re),V===pi)en.push(_);else{let U=this.playersByElement.get(V);U&&U.length&&(_.parentPlayer=_e(U)),r.push(_)}}else Ie(b,C.fromStyles),_.onDestroy(()=>oe(b,C.toStyles)),hi.push(_),f.has(b)&&r.push(_)}),hi.forEach(g=>{let b=a.get(g.element);if(b&&b.length){let _=_e(b);g.setRealPlayer(_)}}),r.forEach(g=>{g.parentPlayer?g.syncPlayerEvents(g.parentPlayer):g.destroy()});for(let g=0;g<E.length;g++){let b=E[g],_=b[ne];if(Ve(b,pn),_&&_.hasAnimation)continue;let C=[];if(o.size){let re=o.get(b);re&&re.length&&C.push(...re);let U=this.driver.query(b,gn,!0);for(let pe=0;pe<U.length;pe++){let L=o.get(U[pe]);L&&L.length&&C.push(...L)}}let V=C.filter(re=>!re.destroyed);V.length?uo(this,b,V):this.processLeaveNode(b)}return E.length=0,en.forEach(g=>{this.players.push(g),g.onDone(()=>{g.destroy();let b=this.players.indexOf(g);this.players.splice(b,1)}),g.play()}),en}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,a){let s=[];if(t){let o=this.playersByQueriedElement.get(e);o&&(s=o)}else{let o=this.playersByElement.get(e);if(o){let l=!a||a==Ze;o.forEach(c=>{c.queued||!l&&c.triggerName!=r||s.push(c)})}}return(n||r)&&(s=s.filter(o=>!(n&&n!=o.namespaceId||r&&r!=o.triggerName))),s}_beforeAnimationBuild(e,t,n){let r=t.triggerName,a=t.element,s=t.isRemovalTransition?void 0:e,o=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,f=c!==a,u=X(n,c,[]);this._getPreviousPlayers(c,f,s,o,t.toState).forEach(m=>{let h=m.getRealPlayer();h.beforeDestroy&&h.beforeDestroy(),m.destroy(),u.push(m)})}Ie(a,t.fromStyles)}_buildAnimation(e,t,n,r,a,s){let o=t.triggerName,l=t.element,c=[],f=new Set,u=new Set,d=t.timelines.map(h=>{let v=h.element;f.add(v);let E=v[ne];if(E&&E.removedBeforeQueried)return new Be(h.duration,h.delay);let A=v!==l,k=mo((n.get(v)||so).map(D=>D.getRealPlayer())).filter(D=>{let B=D;return B.element?B.element===v:!1}),M=a.get(v),O=s.get(v),R=kr(this._normalizer,h.keyframes,M,O),$=this._buildPlayer(h,R,k);if(h.subTimeline&&r&&u.add(v),A){let D=new nt(e,o,v);D.setRealPlayer($),c.push(D)}return $});c.forEach(h=>{X(this.playersByQueriedElement,h.element,[]).push(h),h.onDone(()=>lo(this.playersByQueriedElement,h.element,h))}),f.forEach(h=>te(h,mr));let m=_e(d);return m.onDestroy(()=>{f.forEach(h=>Ve(h,mr)),oe(l,t.toStyles)}),u.forEach(h=>{X(r,h,[]).push(m)}),m}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new Be(e.duration,e.delay)}},nt=class{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new Be,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,n)=>{t.forEach(r=>On(e,n,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){X(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function lo(i,e,t){let n=i.get(e);if(n){if(n.length){let r=n.indexOf(t);n.splice(r,1)}n.length==0&&i.delete(e)}return n}function co(i){return i??null}function Et(i){return i&&i.nodeType===1}function fo(i){return i=="start"||i=="done"}function _r(i,e){let t=i.style.display;return i.style.display=e??"none",t}function wr(i,e,t,n,r){let a=[];t.forEach(l=>a.push(_r(l)));let s=[];n.forEach((l,c)=>{let f=new Map;l.forEach(u=>{let d=e.computeStyle(c,u,r);f.set(u,d),(!d||d.length==0)&&(c[ne]=oo,s.push(c))}),i.set(c,f)});let o=0;return t.forEach(l=>_r(l,a[o++])),s}function Sr(i,e){let t=new Map;if(i.forEach(o=>t.set(o,[])),e.length==0)return t;let n=1,r=new Set(e),a=new Map;function s(o){if(!o)return n;let l=a.get(o);if(l)return l;let c=o.parentNode;return t.has(c)?l=c:r.has(c)?l=n:l=s(c),a.set(o,l),l}return e.forEach(o=>{let l=s(o);l!==n&&t.get(l).push(o)}),t}function te(i,e){i.classList?.add(e)}function Ve(i,e){i.classList?.remove(e)}function uo(i,e,t){_e(t).onDone(()=>i.processLeaveNode(e))}function mo(i){let e=[];return Lr(i,e),e}function Lr(i,e){for(let t=0;t<i.length;t++){let n=i[t];n instanceof on?Lr(n.players,e):e.push(n)}}function ho(i,e){let t=Object.keys(i),n=Object.keys(e);if(t.length!=n.length)return!1;for(let r=0;r<t.length;r++){let a=t[r];if(!e.hasOwnProperty(a)||i[a]!==e[a])return!1}return!0}function Er(i,e,t){let n=t.get(i);if(!n)return!1;let r=e.get(i);return r?n.forEach(a=>r.add(a)):e.set(i,n),t.delete(i),!0}var qe=class{constructor(e,t,n,r){this._driver=t,this._normalizer=n,this._triggerCache={},this.onRemovalComplete=(a,s)=>{},this._transitionEngine=new Pn(e.body,t,n,r),this._timelineEngine=new Cn(e.body,t,n),this._transitionEngine.onRemovalComplete=(a,s)=>this.onRemovalComplete(a,s)}registerTrigger(e,t,n,r,a){let s=e+"-"+r,o=this._triggerCache[s];if(!o){let l=[],c=[],f=Or(this._driver,a,l,c);if(l.length)throw ms(r,l);c.length&&void 0,o=Js(r,f,this._normalizer),this._triggerCache[s]=o}this._transitionEngine.registerTrigger(t,r,o)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n){this._transitionEngine.removeNode(e,t,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if(n.charAt(0)=="@"){let[a,s]=ur(n),o=r;this._timelineEngine.command(a,t,s,o)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,a){if(n.charAt(0)=="@"){let[s,o]=ur(n);return this._timelineEngine.listen(s,t,o,a)}return this._transitionEngine.listen(e,t,n,r,a)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function po(i,e){let t=null,n=null;return Array.isArray(e)&&e.length?(t=hn(e[0]),e.length>1&&(n=hn(e[e.length-1]))):e instanceof Map&&(t=hn(e)),t||n?new Mn(i,t,n):null}var He=class He{constructor(e,t,n){this._element=e,this._startStyles=t,this._endStyles=n,this._state=0;let r=He.initialStylesByElement.get(e);r||He.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&oe(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(oe(this._element,this._initialStyles),this._endStyles&&(oe(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(He.initialStylesByElement.delete(this._element),this._startStyles&&(Ie(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ie(this._element,this._endStyles),this._endStyles=null),oe(this._element,this._initialStyles),this._state=3)}};He.initialStylesByElement=new WeakMap;var Mn=He;function hn(i){let e=null;return i.forEach((t,n)=>{go(n)&&(e=e||new Map,e.set(n,t))}),e}function go(i){return i==="display"||i==="position"}var Nt=class{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(n=>{t.push(Object.fromEntries(n))}),t}_triggerWebAnimation(e,t,n){return e.animate(this._convertKeyframesToObject(t),n)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,r)=>{r!=="offset"&&e.set(r,this._finished?n:Fn(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},It=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}matchesElement(e,t){return!1}containsElement(e,t){return xr(e,t)}getParentElement(e){return In(e)}query(e,t,n){return Cr(e,t,n)}computeStyle(e,t,n){return Fn(e,t)}animate(e,t,n,r,a,s=[]){let o=r==0?"both":"forwards",l={duration:n,delay:r,fill:o};a&&(l.easing=a);let c=new Map,f=s.filter(m=>m instanceof Nt);Ls(n,r)&&f.forEach(m=>{m.currentSnapshot.forEach((h,v)=>c.set(v,h))});let u=Ns(t).map(m=>new Map(m));u=Fs(e,u,c);let d=po(e,u);return new Nt(e,u,l,d)}};var kt="@",Fr="@.disabled",Dt=class{constructor(e,t,n,r){this.namespaceId=e,this.delegate=t,this.engine=n,this._onDestroy=r,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n,r=!0){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){t.charAt(0)==kt&&t==Fr?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},An=class extends Dt{constructor(e,t,n,r,a){super(t,n,r,a),this.factory=e,this.namespaceId=t}setProperty(e,t,n){t.charAt(0)==kt?t.charAt(1)=="."&&t==Fr?(n=n===void 0?!0:!!n,this.disableAnimations(e,n)):this.engine.process(this.namespaceId,e,t.slice(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if(t.charAt(0)==kt){let r=yo(e),a=t.slice(1),s="";return a.charAt(0)!=kt&&([a,s]=vo(a)),this.engine.listen(this.namespaceId,r,a,s,o=>{let l=o._data||-1;this.factory.scheduleListenerCallback(l,n,o)})}return this.delegate.listen(e,t,n)}};function yo(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function vo(i){let e=i.indexOf("."),t=i.substring(0,e),n=i.slice(e+1);return[t,n]}var Lt=class{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,t.onRemovalComplete=(r,a)=>{let s=a?.parentNode(r);s&&a.removeChild(s,r)}}createRenderer(e,t){let n="",r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,f=c.get(r);if(!f){let u=()=>c.delete(r);f=new Dt(n,r,this.engine,u),c.set(r,f)}return f}let a=t.id,s=t.id+"-"+this._currentId;this._currentId++,this.engine.register(s,e);let o=c=>{Array.isArray(c)?c.forEach(o):this.engine.registerTrigger(a,s,e,c.name,c)};return t.data.animation.forEach(o),new An(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(n));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(a=>{let[s,o]=a;s(o)}),this._animationCallbacksBuffer=[]})}),r.push([t,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}};var _o=(()=>{let e=class e extends qe{constructor(n,r,a){super(n,r,a,vi(_i,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(Me(Oi),Me(De),Me(Le))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac});let i=e;return i})();function wo(){return new Tt}function So(i,e,t){return new Lt(i,e,t)}var zr=[{provide:Le,useFactory:wo},{provide:qe,useClass:_o},{provide:wi,useFactory:So,deps:[Ri,qe,Si]}],Rr=[{provide:De,useFactory:()=>new It},{provide:nn,useValue:"BrowserAnimations"},...zr],Eo=[{provide:De,useClass:Dn},{provide:nn,useValue:"NoopAnimations"},...zr],jr=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:n.disableAnimations?Eo:Rr}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e}),e.\u0275inj=ge({providers:Rr,imports:[vt]});let i=e;return i})();function $r(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function p(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$r(Object(t),!0).forEach(function(n){j(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):$r(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Ut(i){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(i)}function ko(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Br(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function xo(i,e,t){return e&&Br(i.prototype,e),t&&Br(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function j(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function ei(i,e){return To(i)||Mo(i,e)||da(i,e)||Oo()}function ut(i){return Co(i)||Po(i)||da(i)||Ao()}function Co(i){if(Array.isArray(i))return Hn(i)}function To(i){if(Array.isArray(i))return i}function Po(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Mo(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n=[],r=!0,a=!1,s,o;try{for(t=t.call(i);!(r=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));r=!0);}catch(l){a=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function da(i,e){if(i){if(typeof i=="string")return Hn(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Hn(i,e)}}function Hn(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Ao(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vr=function(){},ti={},ma={},ha=null,pa={mark:Vr,measure:Vr};try{typeof window<"u"&&(ti=window),typeof document<"u"&&(ma=document),typeof MutationObserver<"u"&&(ha=MutationObserver),typeof performance<"u"&&(pa=performance)}catch{}var No=ti.navigator||{},Hr=No.userAgent,qr=Hr===void 0?"":Hr,Ee=ti,I=ma,Kr=ha,Ft=pa,Rc=!!Ee.document,me=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",ga=~qr.indexOf("MSIE")||~qr.indexOf("Trident/"),Rt,zt,jt,$t,Bt,fe="___FONT_AWESOME___",qn=16,ya="fa",va="svg-inline--fa",ze="data-fa-i2svg",Kn="data-fa-pseudo-element",Io="data-fa-pseudo-element-pending",ni="data-prefix",ii="data-icon",Wr="fontawesome-i2svg",Do="async",Lo=["HTML","HEAD","STYLE","SCRIPT"],ba=function(){try{return!0}catch{return!1}}(),N="classic",F="sharp",ri=[N,F];function dt(i){return new Proxy(i,{get:function(t,n){return n in t?t[n]:t[N]}})}var st=dt((Rt={},j(Rt,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),j(Rt,F,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Rt)),ot=dt((zt={},j(zt,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j(zt,F,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),zt)),lt=dt((jt={},j(jt,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j(jt,F,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),jt)),Fo=dt(($t={},j($t,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j($t,F,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$t)),Ro=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_a="fa-layers-text",zo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jo=dt((Bt={},j(Bt,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j(Bt,F,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Bt)),wa=[1,2,3,4,5,6,7,8,9,10],$o=wa.concat([11,12,13,14,15,16,17,18,19,20]),Bo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(ot[N]).map(ct.add.bind(ct));Object.keys(ot[F]).map(ct.add.bind(ct));var Vo=[].concat(ri,ut(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fe.GROUP,Fe.SWAP_OPACITY,Fe.PRIMARY,Fe.SECONDARY]).concat(wa.map(function(i){return"".concat(i,"x")})).concat($o.map(function(i){return"w-".concat(i)})),rt=Ee.FontAwesomeConfig||{};function Ho(i){var e=I.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function qo(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}I&&typeof I.querySelector=="function"&&(Ur=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ur.forEach(function(i){var e=ei(i,2),t=e[0],n=e[1],r=qo(Ho(t));r!=null&&(rt[n]=r)}));var Ur,Sa={styleDefault:"solid",familyDefault:"classic",cssPrefix:ya,replacementClass:va,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var Ye=p(p({},Sa),rt);Ye.autoReplaceSvg||(Ye.observeMutations=!1);var y={};Object.keys(Sa).forEach(function(i){Object.defineProperty(y,i,{enumerable:!0,set:function(t){Ye[i]=t,at.forEach(function(n){return n(y)})},get:function(){return Ye[i]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){Ye.cssPrefix=e,at.forEach(function(t){return t(y)})},get:function(){return Ye.cssPrefix}});Ee.FontAwesomeConfig=y;var at=[];function Ko(i){return at.push(i),function(){at.splice(at.indexOf(i),1)}}var Se=qn,le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wo(i){if(!(!i||!me)){var e=I.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;for(var t=I.head.childNodes,n=null,r=t.length-1;r>-1;r--){var a=t[r],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=a)}return I.head.insertBefore(e,n),i}}var Uo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ft(){for(var i=12,e="";i-- >0;)e+=Uo[Math.random()*62|0];return e}function Qe(i){for(var e=[],t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function ai(i){return i.classList?Qe(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ea(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yo(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Ea(i[t]),'" ')},"").trim()}function Gt(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(i[t].trim(),";")},"")}function si(i){return i.size!==le.size||i.x!==le.x||i.y!==le.y||i.rotate!==le.rotate||i.flipX||i.flipY}function Qo(i){var e=i.transform,t=i.containerWidth,n=i.iconWidth,r={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Go(i){var e=i.transform,t=i.width,n=t===void 0?qn:t,r=i.height,a=r===void 0?qn:r,s=i.startCentered,o=s===void 0?!1:s,l="";return o&&ga?l+="translate(".concat(e.x/Se-n/2,"em, ").concat(e.y/Se-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Se,"em), calc(-50% + ").concat(e.y/Se,"em)) "):l+="translate(".concat(e.x/Se,"em, ").concat(e.y/Se,"em) "),l+="scale(".concat(e.size/Se*(e.flipX?-1:1),", ").concat(e.size/Se*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Xo=`:root, :host {
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
}`;function ka(){var i=ya,e=va,t=y.cssPrefix,n=y.replacementClass,r=Xo;if(t!==i||n!==e){var a=new RegExp("\\.".concat(i,"\\-"),"g"),s=new RegExp("\\--".concat(i,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var Yr=!1;function jn(){y.autoAddCss&&!Yr&&(Wo(ka()),Yr=!0)}var Zo={mixout:function(){return{dom:{css:ka,insertCss:jn}}},hooks:function(){return{beforeDOMElementCreation:function(){jn()},beforeI2svg:function(){jn()}}}},ue=Ee||{};ue[fe]||(ue[fe]={});ue[fe].styles||(ue[fe].styles={});ue[fe].hooks||(ue[fe].hooks={});ue[fe].shims||(ue[fe].shims=[]);var ie=ue[fe],xa=[],Jo=function i(){I.removeEventListener("DOMContentLoaded",i),Yt=1,xa.map(function(e){return e()})},Yt=!1;me&&(Yt=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),Yt||I.addEventListener("DOMContentLoaded",Jo));function el(i){me&&(Yt?setTimeout(i,0):xa.push(i))}function mt(i){var e=i.tag,t=i.attributes,n=t===void 0?{}:t,r=i.children,a=r===void 0?[]:r;return typeof i=="string"?Ea(i):"<".concat(e," ").concat(Yo(n),">").concat(a.map(mt).join(""),"</").concat(e,">")}function Qr(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var tl=function(e,t){return function(n,r,a,s){return e.call(t,n,r,a,s)}},$n=function(e,t,n,r){var a=Object.keys(e),s=a.length,o=r!==void 0?tl(t,r):t,l,c,f;for(n===void 0?(l=1,f=e[a[0]]):(l=0,f=n);l<s;l++)c=a[l],f=o(f,e[c],c,e);return f};function nl(i){for(var e=[],t=0,n=i.length;t<n;){var r=i.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var a=i.charCodeAt(t++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Wn(i){var e=nl(i);return e.length===1?e[0].toString(16):null}function il(i,e){var t=i.length,n=i.charCodeAt(e),r;return n>=55296&&n<=56319&&t>e+1&&(r=i.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Gr(i){return Object.keys(i).reduce(function(e,t){var n=i[t],r=!!n.icon;return r?e[n.iconName]=n.icon:e[t]=n,e},{})}function Un(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,a=Gr(e);typeof ie.hooks.addPack=="function"&&!r?ie.hooks.addPack(i,Gr(e)):ie.styles[i]=p(p({},ie.styles[i]||{}),a),i==="fas"&&Un("fa",e)}var Vt,Ht,qt,Ke=ie.styles,rl=ie.shims,al=(Vt={},j(Vt,N,Object.values(lt[N])),j(Vt,F,Object.values(lt[F])),Vt),oi=null,Ca={},Ta={},Pa={},Ma={},Aa={},sl=(Ht={},j(Ht,N,Object.keys(st[N])),j(Ht,F,Object.keys(st[F])),Ht);function ol(i){return~Vo.indexOf(i)}function ll(i,e){var t=e.split("-"),n=t[0],r=t.slice(1).join("-");return n===i&&r!==""&&!ol(r)?r:null}var Oa=function(){var e=function(a){return $n(Ke,function(s,o,l){return s[l]=$n(o,a,{}),s},{})};Ca=e(function(r,a,s){if(a[3]&&(r[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),Ta=e(function(r,a,s){if(r[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),Aa=e(function(r,a,s){var o=a[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var t="far"in Ke||y.autoFetchSvg,n=$n(rl,function(r,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Pa=n.names,Ma=n.unicodes,oi=Xt(y.styleDefault,{family:y.familyDefault})};Ko(function(i){oi=Xt(i.styleDefault,{family:y.familyDefault})});Oa();function li(i,e){return(Ca[i]||{})[e]}function cl(i,e){return(Ta[i]||{})[e]}function Re(i,e){return(Aa[i]||{})[e]}function Na(i){return Pa[i]||{prefix:null,iconName:null}}function fl(i){var e=Ma[i],t=li("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ke(){return oi}var ci=function(){return{prefix:null,iconName:null,rest:[]}};function Xt(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,n=t===void 0?N:t,r=st[n][i],a=ot[n][i]||ot[n][r],s=i in ie.styles?i:null;return a||s||null}var Xr=(qt={},j(qt,N,Object.keys(lt[N])),j(qt,F,Object.keys(lt[F])),qt);function Zt(i){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=(e={},j(e,N,"".concat(y.cssPrefix,"-").concat(N)),j(e,F,"".concat(y.cssPrefix,"-").concat(F)),e),s=null,o=N;(i.includes(a[N])||i.some(function(c){return Xr[N].includes(c)}))&&(o=N),(i.includes(a[F])||i.some(function(c){return Xr[F].includes(c)}))&&(o=F);var l=i.reduce(function(c,f){var u=ll(y.cssPrefix,f);if(Ke[f]?(f=al[o].includes(f)?Fo[o][f]:f,s=f,c.prefix=f):sl[o].indexOf(f)>-1?(s=f,c.prefix=Xt(f,{family:o})):u?c.iconName=u:f!==y.replacementClass&&f!==a[N]&&f!==a[F]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var d=s==="fa"?Na(c.iconName):{},m=Re(c.prefix,c.iconName);d.prefix&&(s=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Ke.far&&Ke.fas&&!y.autoFetchSvg&&(c.prefix="fas")}return c},ci());return(i.includes("fa-brands")||i.includes("fab"))&&(l.prefix="fab"),(i.includes("fa-duotone")||i.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===F&&(Ke.fass||y.autoFetchSvg)&&(l.prefix="fass",l.iconName=Re(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=ke()||"fas"),l}var ul=function(){function i(){ko(this,i),this.definitions={}}return xo(i,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){t.definitions[o]=p(p({},t.definitions[o]||{}),s[o]),Un(o,s[o]);var l=lt[N][o];l&&Un(l,s[o]),Oa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var s=r[a],o=s.prefix,l=s.iconName,c=s.icon,f=c[2];t[o]||(t[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(t[o][u]=c)}),t[o][l]=c}),t}}]),i}(),Zr=[],We={},Ue={},dl=Object.keys(Ue);function ml(i,e){var t=e.mixoutsTo;return Zr=i,We={},Object.keys(Ue).forEach(function(n){dl.indexOf(n)===-1&&delete Ue[n]}),Zr.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(t[s]=r[s]),Ut(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){t[s]||(t[s]={}),t[s][o]=r[s][o]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(s){We[s]||(We[s]=[]),We[s].push(a[s])})}n.provides&&n.provides(Ue)}),t}function Yn(i,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var a=We[i]||[];return a.forEach(function(s){e=s.apply(null,[e].concat(n))}),e}function je(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=We[i]||[];r.forEach(function(a){a.apply(null,t)})}function de(){var i=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ue[i]?Ue[i].apply(null,e):void 0}function Qn(i){i.prefix==="fa"&&(i.prefix="fas");var e=i.iconName,t=i.prefix||ke();if(e)return e=Re(t,e)||e,Qr(Ia.definitions,t,e)||Qr(ie.styles,t,e)}var Ia=new ul,hl=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,je("noAuto")},pl={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return me?(je("beforeI2svg",e),de("pseudoElements2svg",e),de("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,el(function(){yl({autoReplaceSvgRoot:t}),je("watch",e)})}},gl={icon:function(e){if(e===null)return null;if(Ut(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Re(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Xt(e[0]);return{prefix:n,iconName:Re(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(Ro))){var r=Zt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ke(),iconName:Re(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=ke();return{prefix:a,iconName:Re(a,e)||e}}}},Z={noAuto:hl,config:y,dom:pl,parse:gl,library:Ia,findIconDefinition:Qn,toHtml:mt},yl=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?I:t;(Object.keys(ie.styles).length>0||y.autoFetchSvg)&&me&&y.autoReplaceSvg&&Z.dom.i2svg({node:n})};function Jt(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(n){return mt(n)})}}),Object.defineProperty(i,"node",{get:function(){if(me){var n=I.createElement("div");return n.innerHTML=i.html,n.children}}}),i}function vl(i){var e=i.children,t=i.main,n=i.mask,r=i.attributes,a=i.styles,s=i.transform;if(si(s)&&t.found&&!n.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=Gt(p(p({},a),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function bl(i){var e=i.prefix,t=i.iconName,n=i.children,r=i.attributes,a=i.symbol,s=a===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},r),{},{id:s}),children:n}]}]}function fi(i){var e=i.icons,t=e.main,n=e.mask,r=i.prefix,a=i.iconName,s=i.transform,o=i.symbol,l=i.title,c=i.maskId,f=i.titleId,u=i.extra,d=i.watchable,m=d===void 0?!1:d,h=n.found?n:t,v=h.width,E=h.height,A=r==="fak",k=[y.replacementClass,a?"".concat(y.cssPrefix,"-").concat(a):""].filter(function(H){return u.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(u.classes).join(" "),M={children:[],attributes:p(p({},u.attributes),{},{"data-prefix":r,"data-icon":a,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(E)})},O=A&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/E*16*.0625,"em")}:{};m&&(M.attributes[ze]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||ft())},children:[l]}),delete M.attributes.title);var R=p(p({},M),{},{prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:s,symbol:o,styles:p(p({},O),u.styles)}),$=n.found&&t.found?de("generateAbstractMask",R)||{children:[],attributes:{}}:de("generateAbstractIcon",R)||{children:[],attributes:{}},D=$.children,B=$.attributes;return R.children=D,R.attributes=B,o?bl(R):vl(R)}function Jr(i){var e=i.content,t=i.width,n=i.height,r=i.transform,a=i.title,s=i.extra,o=i.watchable,l=o===void 0?!1:o,c=p(p(p({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(c[ze]="");var f=p({},s.styles);si(r)&&(f.transform=Go({transform:r,startCentered:!0,width:t,height:n}),f["-webkit-transform"]=f.transform);var u=Gt(f);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function _l(i){var e=i.content,t=i.title,n=i.extra,r=p(p(p({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),a=Gt(n.styles);a.length>0&&(r.style=a);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var Bn=ie.styles;function Gn(i){var e=i[0],t=i[1],n=i.slice(4),r=ei(n,1),a=r[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Fe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Fe.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:s}}var wl={found:!1,width:512,height:512};function Sl(i,e){!ba&&!y.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Xn(i,e){var t=e;return e==="fa"&&y.styleDefault!==null&&(e=ke()),new Promise(function(n,r){var a={found:!1,width:512,height:512,icon:de("missingIconAbstract")||{}};if(t==="fa"){var s=Na(i)||{};i=s.iconName||i,e=s.prefix||e}if(i&&e&&Bn[e]&&Bn[e][i]){var o=Bn[e][i];return n(Gn(o))}Sl(i,e),n(p(p({},wl),{},{icon:y.showMissingIcons&&i?de("missingIconAbstract")||{}:{}}))})}var ea=function(){},Zn=y.measurePerformance&&Ft&&Ft.mark&&Ft.measure?Ft:{mark:ea,measure:ea},it='FA "6.5.2"',El=function(e){return Zn.mark("".concat(it," ").concat(e," begins")),function(){return Da(e)}},Da=function(e){Zn.mark("".concat(it," ").concat(e," ends")),Zn.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},ui={begin:El,end:Da},Kt=function(){};function ta(i){var e=i.getAttribute?i.getAttribute(ze):null;return typeof e=="string"}function kl(i){var e=i.getAttribute?i.getAttribute(ni):null,t=i.getAttribute?i.getAttribute(ii):null;return e&&t}function xl(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(y.replacementClass)}function Cl(){if(y.autoReplaceSvg===!0)return Wt.replace;var i=Wt[y.autoReplaceSvg];return i||Wt.replace}function Tl(i){return I.createElementNS("http://www.w3.org/2000/svg",i)}function Pl(i){return I.createElement(i)}function La(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?i.tag==="svg"?Tl:Pl:t;if(typeof i=="string")return I.createTextNode(i);var r=n(i.tag);Object.keys(i.attributes||[]).forEach(function(s){r.setAttribute(s,i.attributes[s])});var a=i.children||[];return a.forEach(function(s){r.appendChild(La(s,{ceFn:n}))}),r}function Ml(i){var e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wt={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(La(r),t)}),t.getAttribute(ze)===null&&y.keepOriginalSource){var n=I.createComment(Ml(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~ai(t).indexOf(y.replacementClass))return Wt.replace(e);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,l){return l===y.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",a.toNode.join(" "))}var s=n.map(function(o){return mt(o)}).join(`
`);t.setAttribute(ze,""),t.innerHTML=s}};function na(i){i()}function Fa(i,e){var t=typeof e=="function"?e:Kt;if(i.length===0)t();else{var n=na;y.mutateApproach===Do&&(n=Ee.requestAnimationFrame||na),n(function(){var r=Cl(),a=ui.begin("mutate");i.map(r),a(),t()})}}var di=!1;function Ra(){di=!0}function Jn(){di=!1}var Qt=null;function ia(i){if(Kr&&y.observeMutations){var e=i.treeCallback,t=e===void 0?Kt:e,n=i.nodeCallback,r=n===void 0?Kt:n,a=i.pseudoElementsCallback,s=a===void 0?Kt:a,o=i.observeMutationsRoot,l=o===void 0?I:o;Qt=new Kr(function(c){if(!di){var f=ke();Qe(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ta(u.addedNodes[0])&&(y.searchPseudoElements&&s(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&y.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&ta(u.target)&&~Bo.indexOf(u.attributeName))if(u.attributeName==="class"&&kl(u.target)){var d=Zt(ai(u.target)),m=d.prefix,h=d.iconName;u.target.setAttribute(ni,m||f),h&&u.target.setAttribute(ii,h)}else xl(u.target)&&r(u.target)})}}),me&&Qt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Al(){Qt&&Qt.disconnect()}function Ol(i){var e=i.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,r){var a=r.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),t}function Nl(i){var e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),n=i.innerText!==void 0?i.innerText.trim():"",r=Zt(ai(i));return r.prefix||(r.prefix=ke()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=cl(r.prefix,i.innerText)||li(r.prefix,Wn(i.innerText))),!r.iconName&&y.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=i.firstChild.data)),r}function Il(i){var e=Qe(i.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),t=i.getAttribute("title"),n=i.getAttribute("data-fa-title-id");return y.autoA11y&&(t?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(n||ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function Dl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ra(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Nl(i),n=t.iconName,r=t.prefix,a=t.rest,s=Il(i),o=Yn("parseNodeAttributes",{},i),l=e.styleParser?Ol(i):[];return p({iconName:n,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var Ll=ie.styles;function za(i){var e=y.autoReplaceSvg==="nest"?ra(i,{styleParser:!1}):ra(i);return~e.extra.classes.indexOf(_a)?de("generateLayersText",i,e):de("generateSvgReplacementMutation",i,e)}var xe=new Set;ri.map(function(i){xe.add("fa-".concat(i))});Object.keys(st[N]).map(xe.add.bind(xe));Object.keys(st[F]).map(xe.add.bind(xe));xe=ut(xe);function aa(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!me)return Promise.resolve();var t=I.documentElement.classList,n=function(u){return t.add("".concat(Wr,"-").concat(u))},r=function(u){return t.remove("".concat(Wr,"-").concat(u))},a=y.autoFetchSvg?xe:ri.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ll));a.includes("fa")||a.push("fa");var s=[".".concat(_a,":not([").concat(ze,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(ze,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Qe(i.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ui.begin("onTree"),c=o.reduce(function(f,u){try{var d=za(u);d&&f.push(d)}catch(m){ba||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(d){Fa(d,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),u(d)})})}function Fl(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(i).then(function(t){t&&Fa([t],e)})}function Rl(i){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Qn(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Qn(r||{})),i(n,p(p({},t),{},{mask:r}))}}var zl=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?le:n,a=t.symbol,s=a===void 0?!1:a,o=t.mask,l=o===void 0?null:o,c=t.maskId,f=c===void 0?null:c,u=t.title,d=u===void 0?null:u,m=t.titleId,h=m===void 0?null:m,v=t.classes,E=v===void 0?[]:v,A=t.attributes,k=A===void 0?{}:A,M=t.styles,O=M===void 0?{}:M;if(e){var R=e.prefix,$=e.iconName,D=e.icon;return Jt(p({type:"icon"},e),function(){return je("beforeDOMElementCreation",{iconDefinition:e,params:t}),y.autoA11y&&(d?k["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(h||ft()):(k["aria-hidden"]="true",k.focusable="false")),fi({icons:{main:Gn(D),mask:l?Gn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:$,transform:p(p({},le),r),symbol:s,title:d,maskId:f,titleId:h,extra:{attributes:k,styles:O,classes:E}})})}},jl={mixout:function(){return{icon:Rl(zl)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=aa,t.nodeCallback=Fl,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,r=n===void 0?I:n,a=t.callback,s=a===void 0?function(){}:a;return aa(r,s)},e.generateSvgReplacementMutation=function(t,n){var r=n.iconName,a=n.title,s=n.titleId,o=n.prefix,l=n.transform,c=n.symbol,f=n.mask,u=n.maskId,d=n.extra;return new Promise(function(m,h){Promise.all([Xn(r,o),f.iconName?Xn(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var E=ei(v,2),A=E[0],k=E[1];m([t,fi({icons:{main:A,mask:k},prefix:o,iconName:r,transform:l,symbol:c,maskId:u,title:a,titleId:s,extra:d,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,a=t.main,s=t.transform,o=t.styles,l=Gt(o);l.length>0&&(r.style=l);var c;return si(s)&&(c=de("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},$l={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,a=r===void 0?[]:r;return Jt({type:"layer"},function(){je("beforeDOMElementCreation",{assembler:t,params:n});var s=[];return t(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(ut(a)).join(" ")},children:s}]})}}}},Bl={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,a=r===void 0?null:r,s=n.classes,o=s===void 0?[]:s,l=n.attributes,c=l===void 0?{}:l,f=n.styles,u=f===void 0?{}:f;return Jt({type:"counter",content:t},function(){return je("beforeDOMElementCreation",{content:t,params:n}),_l({content:t.toString(),title:a,extra:{attributes:c,styles:u,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(ut(o))}})})}}}},Vl={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?le:r,s=n.title,o=s===void 0?null:s,l=n.classes,c=l===void 0?[]:l,f=n.attributes,u=f===void 0?{}:f,d=n.styles,m=d===void 0?{}:d;return Jt({type:"text",content:t},function(){return je("beforeDOMElementCreation",{content:t,params:n}),Jr({content:t,transform:p(p({},le),a),title:o,extra:{attributes:u,styles:m,classes:["".concat(y.cssPrefix,"-layers-text")].concat(ut(c))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var r=n.title,a=n.transform,s=n.extra,o=null,l=null;if(ga){var c=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/c,l=f.height/c}return y.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Jr({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:s,watchable:!0})])}}},Hl=new RegExp('"',"ug"),sa=[1105920,1112319];function ql(i){var e=i.replace(Hl,""),t=il(e,0),n=t>=sa[0]&&t<=sa[1],r=e.length===2?e[0]===e[1]:!1;return{value:Wn(r?e[0]:e),isSecondary:n||r}}function oa(i,e){var t="".concat(Io).concat(e.replace(":","-"));return new Promise(function(n,r){if(i.getAttribute(t)!==null)return n();var a=Qe(i.children),s=a.filter(function(D){return D.getAttribute(Kn)===e})[0],o=Ee.getComputedStyle(i,e),l=o.getPropertyValue("font-family").match(zo),c=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(s&&!l)return i.removeChild(s),n();if(l&&f!=="none"&&f!==""){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?F:N,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ot[d][l[2].toLowerCase()]:jo[d][c],h=ql(u),v=h.value,E=h.isSecondary,A=l[0].startsWith("FontAwesome"),k=li(m,v),M=k;if(A){var O=fl(v);O.iconName&&O.prefix&&(k=O.iconName,m=O.prefix)}if(k&&!E&&(!s||s.getAttribute(ni)!==m||s.getAttribute(ii)!==M)){i.setAttribute(t,M),s&&i.removeChild(s);var R=Dl(),$=R.extra;$.attributes[Kn]=e,Xn(k,m).then(function(D){var B=fi(p(p({},R),{},{icons:{main:D,mask:ci()},prefix:m,iconName:M,extra:$,watchable:!0})),H=I.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(H,i.firstChild):i.appendChild(H),H.outerHTML=B.map(function(he){return mt(he)}).join(`
`),i.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function Kl(i){return Promise.all([oa(i,"::before"),oa(i,"::after")])}function Wl(i){return i.parentNode!==document.head&&!~Lo.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Kn)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function la(i){if(me)return new Promise(function(e,t){var n=Qe(i.querySelectorAll("*")).filter(Wl).map(Kl),r=ui.begin("searchPseudoElements");Ra(),Promise.all(n).then(function(){r(),Jn(),e()}).catch(function(){r(),Jn(),t()})})}var Ul={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=la,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?I:n;y.searchPseudoElements&&la(r)}}},ca=!1,Yl={mixout:function(){return{dom:{unwatch:function(){Ra(),ca=!0}}}},hooks:function(){return{bootstrap:function(){ia(Yn("mutationObserverCallbacks",{}))},noAuto:function(){Al()},watch:function(t){var n=t.observeMutationsRoot;ca?Jn():ia(Yn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},fa=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},Ql={mixout:function(){return{parse:{transform:function(t){return fa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=fa(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,a=t.containerWidth,s=t.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:u,path:d};return{tag:"g",attributes:p({},m.outer),children:[{tag:"g",attributes:p({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:p(p({},n.icon.attributes),m.path)}]}]}}}},Vn={x:0,y:0,width:"100%",height:"100%"};function ua(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function Gl(i){return i.tag==="g"?i.children:[i]}var Xl={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),a=r?Zt(r.split(" ").map(function(s){return s.trim()})):ci();return a.prefix||(a.prefix=ke()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,r=t.attributes,a=t.main,s=t.mask,o=t.maskId,l=t.transform,c=a.width,f=a.icon,u=s.width,d=s.icon,m=Qo({transform:l,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:p(p({},Vn),{},{fill:"white"})},v=f.children?{children:f.children.map(ua)}:{},E={tag:"g",attributes:p({},m.inner),children:[ua(p({tag:f.tag,attributes:p(p({},f.attributes),m.path)},v))]},A={tag:"g",attributes:p({},m.outer),children:[E]},k="mask-".concat(o||ft()),M="clip-".concat(o||ft()),O={tag:"mask",attributes:p(p({},Vn),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,A]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Gl(d)},O]};return n.push(R,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(k,")")},Vn)}),{children:n,attributes:r}}}},Zl={provides:function(e){var t=!1;Ee.matchMedia&&(t=Ee.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=p(p({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:p(p({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Jl={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return t.symbol=a,t}}}},ec=[Zo,jl,$l,Bl,Vl,Ul,Yl,Ql,Xl,Zl,Jl];ml(ec,{mixoutsTo:Z});var zc=Z.noAuto,jc=Z.config,$c=Z.library,Bc=Z.dom,tc=Z.parse,Vc=Z.findIconDefinition,Hc=Z.toHtml,nc=Z.icon,qc=Z.layer,ic=Z.text,rc=Z.counter;var ja=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e}),e.\u0275inj=ge({});let i=e;return i})();var ac=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-U5EB2L3U.js").then(i=>i.HomeModule)},{path:"products",loadChildren:()=>import("./chunk-TT4MTPS3.js").then(i=>i.ProductModule)},{path:"shopping",loadChildren:()=>import("./chunk-YETXQBN7.js").then(i=>i.ShoppingModule)},{path:"profile",loadChildren:()=>import("./chunk-6FJDXMQT.js").then(i=>i.ProfileModule)},{path:"authentication",loadChildren:()=>import("./chunk-NO2YIG4F.js").then(i=>i.AuthModule)},{path:"contact",loadChildren:()=>import("./chunk-4RKZFXMA.js").then(i=>i.ContactModule)},{path:"about",loadChildren:()=>import("./chunk-DOD2XHTE.js").then(i=>i.AboutModule)}],$a=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e}),e.\u0275inj=ge({imports:[ln.forRoot(ac,{scrollPositionRestoration:"enabled"}),ln]});let i=e;return i})();var Ba=(()=>{let e=class e{constructor(n,r){this.http=n,this.dataService=r}getItems(){return this.dataService.getAllProducts()}getCategory(){return this.dataService.getAllCategories()}getItemById(n){return this.dataService.getSingleProduct(+n)}searchItems(n,r,a){if(!n)return[];let s=r.filter(l=>l.title.toLowerCase().includes(n.toLowerCase())),o=a.filter(l=>l.toLowerCase().includes(n.toLowerCase()));return[...s,...o]}};e.\u0275fac=function(r){return new(r||e)(Me(yt),Me(Zi))},e.\u0275prov=Pe({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var cc=i=>({expanded:i}),Va=()=>["product-list"],fc=i=>({paramName:i}),uc=i=>({Category:i});function dc(i,e){if(i&1){let t=$e();w(0,"a",36),ae("click",function(){Y(t);let r=ee(3);return Q(r.clearSearch())}),K(1,"img",37),w(2,"div",38)(3,"div",39),P(4),Pi(5,"slice"),S(),w(6,"div",40),P(7),S()()()}if(i&2){let t=ee().$implicit;W("routerLink",an(9,Va))("queryParams",gt(10,fc,t.id)),z(),W("src",t.image,bi),z(3),Ge(" ",Mi(5,5,t.title,0,20),"... "),z(3),Ge("",t.price,"$")}}function mc(i,e){if(i&1){let t=$e();w(0,"a",41),ae("click",function(){Y(t);let r=ee(3);return Q(r.clearSearch())}),P(1),S()}if(i&2){let t=ee().$implicit;W("routerLink",an(3,Va))("queryParams",gt(4,uc,t)),z(),Ge(" ",t," ")}}function hc(i,e){if(i&1&&(w(0,"li",33),be(1,dc,8,12,"a",34)(2,mc,2,6,"a",35),S()),i&2){let t=e.$implicit,n=ee(2);z(),W("ngIf",n.isProduct(t)),z(),W("ngIf",n.isCategory(t))}}function pc(i,e){if(i&1&&(w(0,"ul",31),be(1,hc,3,2,"li",32),S()),i&2){let t=ee();z(),W("ngForOf",t.filteredItems)}}function gc(i,e){if(i&1&&(w(0,"span",42),P(1),S()),i&2){let t=ee();z(),ki(t.currentCartItem)}}function yc(i,e){i&1&&(w(0,"button",43),K(1,"i",44),S())}function vc(i,e){if(i&1){let t=$e();w(0,"button",45),ae("click",function(){Y(t);let r=ee();return Q(r.logout())}),P(1," log out "),S()}}function bc(i,e){if(i&1){let t=$e();w(0,"button",45),ae("click",function(){Y(t);let r=ee();return Q(r.logIn())}),P(1,"log In"),S()}}function _c(i,e){if(i&1&&(w(0,"a",48),P(1),S()),i&2){let t=ee().$implicit;W("routerLink",t.name==="Products"?"/product-list":"/"+t.name.toLowerCase()),z(),Ge(" ",t.name," ")}}function wc(i,e){if(i&1&&(w(0,"li",46),be(1,_c,2,2,"a",47),S()),i&2){let t=e.$implicit,n=ee();z(),W("ngIf",t.name!=="login"||!n.isLoggedIn)}}var Ha=(()=>{let e=class e{constructor(n,r,a,s,o,l){this.router=n,this.authService=r,this.cartService=a,this.userService=s,this.headerService=o,this.http=l,this.isCollapsed=!0,this.isLoggedIn=!1,this.items=[],this.filteredItems=[],this.searchText="",this.isSearchExpanded=!1,this.headerText=[{name:"Home"},{name:"Contact"},{name:"About"},{name:"Products"}],this.clickSearch=!1,this.router.events.subscribe(c=>{c instanceof Ui&&this.clearSearch()})}ngOnInit(){this.headerService.getItems().subscribe(n=>{this.items=n}),this.headerService.getCategory().subscribe(n=>{this.categoryies=n}),this.authService.loggedIn.subscribe(n=>{this.isLoggedIn=n,console.log("logged user ",this.isLoggedIn)}),this.userService.loginChanged.subscribe(n=>{this.userId=n,this.getCartItemNumber()})}onSearch(n){this.searchText=n.target.value,this.searchText.trim()===""?(this.clickSearch=!0,this.filteredItems=[]):(this.filteredItems=this.headerService.searchItems(this.searchText,this.items,this.categoryies),console.log("item:",this.filteredItems))}isProduct(n){return typeof n=="object"}isCategory(n){return typeof n!="object"}expandSearch(){this.isSearchExpanded=!0}collapseSearch(){this.isSearchExpanded=!1}onClickSearch(){this.clickSearch=!1,this.router.navigate(["/home"])}onKeyPress(n){n.key==="Enter"&&this.clickSearch&&this.onClickSearch()}clearSearch(){this.searchText="",this.filteredItems=[]}onBlur(){this.isSearchExpanded=!1,this.clearSearch()}handleOutsideClick(){this.isSearchExpanded&&this.collapseSearch()}getCartItemNumber(){this.key=this.cartService.setKey("cart",this.userId),this.cartService.getCartItemNumber(this.key).subscribe({next:n=>{this.currentCartItem=this.cartService.getCartItems(n).length}})}onClick(n){let r=this.headerText[n].name;r==="Products"&&(r="product-list"),this.router.navigate(["/"+r.toLocaleLowerCase()])}homeClick(){this.router.navigate(["/home"])}addToCart(){this.authService.loggedIn.subscribe(n=>{n?this.router.navigate(["/cart"]):this.router.navigate(["/login"])})}logIn(){this.router.navigate(["/login"])}logout(){localStorage.removeItem("loggedInUser"),this.authService.loggedIn.next(!1),this.userService.LoggedUser=null,this.userService.LoggedUserId=-1,this.userService.loginChanged.next(-1),this.cartService.availableCoupon.forEach(n=>{n.used=!1}),this.router.navigate(["/home"])}toggleNavMenu(){this.isCollapsed=!this.isCollapsed}ngOnDestroy(){this.cartUpdateSubscription&&this.cartUpdateSubscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)(ve(Qi),ve(rr),ve(Ji),ve(er),ve(Ba),ve(yt))},e.\u0275cmp=Ae({type:e,selectors:[["app-header"]],decls:38,vars:12,consts:[["login",""],[1,"navigation"],[1,"topBlackNav"],[1,"leftTextTopbar"],[1,"middleTextTopbar"],[1,"font-weight-bold"],[1,"languageTopbar"],[1,"ri-arrow-right-s-line"],[1,"navbar","navbar-expand-lg","navbar-light","bg-white","py-3","fixed-top"],[1,"container"],[1,"navbar-brand","d-flex","justify-content-around","align-items-center","order-lg-0"],["src","../../assets/images/shopping-bag-icon.png","alt","site icon"],[1,"fw-lighter","ms-2",3,"click"],[1,"order-lg-2","nav-btns"],["type","button",1,"btn","position-relative"],[1,"search-container"],[1,"input-group","searchgroup",3,"ngClass"],["type","text","placeholder","Search ..",1,"form-control",3,"click","blur","ngModelChange","input","keypress","ngModel"],[1,"input-group-text","search-icon"],[1,"fa","fa-search"],["class","list-group suggestions",4,"ngIf"],["type","button",1,"btn","position-relative","shoppingIcon",3,"click"],[1,"ri-shopping-cart-2-line"],["class","position-absolute top-0 start-100 translate-middle badge bg-primary",4,"ngIf"],["type","button","class","btn position-relative shoppingIcon","routerLink","/profile","routerLinkActive","active",4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf","ngIfElse"],["type","button","data-bs-target","#navMenu",1,"navbar-toggler","border-0",3,"click"],[1,"ri-menu-3-line"],["id","navMenu",1,"collapse","navbar-collapse","order-lg-1"],[1,"navbar-nav","mx-auto","text-center"],["class","nav-item px-2 py-2",4,"ngFor","ngForOf"],[1,"list-group","suggestions"],["class","list-group-item d-flex align-items-center justify-content-between",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","align-items-center","justify-content-between"],["class","text-decoration-none text-dark w-100 d-flex align-items-center",3,"routerLink","queryParams","click",4,"ngIf"],["class","text-decoration-none d-block py-2 px-3 text-dark",3,"routerLink","queryParams","click",4,"ngIf"],[1,"text-decoration-none","text-dark","w-100","d-flex","align-items-center",3,"click","routerLink","queryParams"],["alt","","width","60px","height","60px",1,"img-thumbnail",3,"src"],[1,"ms-3","me-auto"],[1,"fw-bold"],[1,"text-muted"],[1,"text-decoration-none","d-block","py-2","px-3","text-dark",3,"click","routerLink","queryParams"],[1,"position-absolute","top-0","start-100","translate-middle","badge","bg-primary"],["type","button","routerLink","/profile","routerLinkActive","active",1,"btn","position-relative","shoppingIcon"],[1,"ri-user-3-line"],[1,"btn","btn-primary",3,"click"],[1,"nav-item","px-2","py-2"],["class","nav-link text-dark","routerLinkActive","active",3,"routerLink",4,"ngIf"],["routerLinkActive","active",1,"nav-link","text-dark",3,"routerLink"]],template:function(r,a){if(r&1){let s=$e();w(0,"nav",1)(1,"div",2),K(2,"div",3),w(3,"div",4)(4,"p"),P(5,"Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"),S(),w(6,"a",5),P(7,"ShopNow"),S()(),w(8,"div",6)(9,"a"),P(10,"English "),K(11,"i",7),S()()()(),w(12,"nav",8)(13,"div",9)(14,"a",10),K(15,"img",11),w(16,"span",12),ae("click",function(){return Y(s),Q(a.homeClick())}),P(17,"SnapShop"),S()(),w(18,"div",13)(19,"button",14)(20,"div",15)(21,"div",16)(22,"input",17),ae("click",function(){return Y(s),Q(a.expandSearch())})("blur",function(){return Y(s),Q(a.collapseSearch())}),Ti("ngModelChange",function(l){return Y(s),Ci(a.searchText,l)||(a.searchText=l),Q(l)}),ae("input",function(l){return Y(s),Q(a.onSearch(l))})("keypress",function(l){return Y(s),Q(a.onKeyPress(l))}),S(),w(23,"span",18),K(24,"i",19),S(),be(25,pc,2,1,"ul",20),S()()(),w(26,"button",21),ae("click",function(){return Y(s),Q(a.addToCart())}),K(27,"i",22),be(28,gc,2,1,"span",23),S(),be(29,yc,2,0,"button",24)(30,vc,2,0,"button",25)(31,bc,2,0,"ng-template",null,0,Ai),S(),w(33,"button",26),ae("click",function(){return Y(s),Q(a.toggleNavMenu())}),K(34,"i",27),S(),w(35,"div",28)(36,"ul",29),be(37,wc,2,1,"li",30),S()()()()}if(r&2){let s=Ei(32);z(21),W("ngClass",gt(10,cc,a.isSearchExpanded)),z(),xi("ngModel",a.searchText),z(3),W("ngIf",a.filteredItems.length>0),z(3),W("ngIf",a.isLoggedIn),z(),W("ngIf",a.isLoggedIn),z(),W("ngIf",a.isLoggedIn)("ngIfElse",s),z(5),rn("collapse",a.isCollapsed),z(2),W("ngForOf",a.headerText)}},dependencies:[Ni,Ii,Di,Gi,Xi,ji,$i,Bi,Li],styles:['.navigation[_ngcontent-%COMP%]{height:120px;width:100%;position:fixed;top:0;z-index:1005}.topBlackNav[_ngcontent-%COMP%]{height:35px;width:100%;background-color:#000;display:flex;justify-content:space-around;align-items:center;color:#fff;font-size:13px;padding:0 15px}.middleTextTopbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px}.middleTextTopbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.middleTextTopbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:bolder;font-size:13px;cursor:pointer}.middleTextTopbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;transition:.3s}.languageTopbar[_ngcontent-%COMP%]{display:flex;align-items:center}.languageTopbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}@media (max-width: 1200px){.topBlackNav[_ngcontent-%COMP%]{font-size:12px!important}}@media (max-width: 992px){.topBlackNav[_ngcontent-%COMP%]{text-align:center;padding:5px 15px}.languageTopbar[_ngcontent-%COMP%]{margin-top:5px}}@media (max-width: 768px){.topBlackNav[_ngcontent-%COMP%]{font-size:11px}.middleTextTopbar[_ngcontent-%COMP%]{gap:5px}}@media (max-width: 576px){.topBlackNav[_ngcontent-%COMP%]{font-size:10px}.middleTextTopbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none;margin:10px 0}.languageTopbar[_ngcontent-%COMP%]{margin-bottom:5px}}@media (max-width: 480px){.topBlackNav[_ngcontent-%COMP%]{font-size:10px}.middleTextTopbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}}.navbar[_ngcontent-%COMP%]{top:35px;box-shadow:0 0 0 1px #6361610d,inset 0 0 0 1px #dee3eb}.nav_Link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ri-user-3-line[_ngcontent-%COMP%]:hover, .ri-menu-3-fill[_ngcontent-%COMP%]:hover, .ri-shopping-cart-2-line[_ngcontent-%COMP%]:hover{color:#d74048;scale:1.08;transition:.3s}.ri-user-3-line[_ngcontent-%COMP%]{font-size:20px}.ri-menu-3-fill[_ngcontent-%COMP%]{font-size:20px;font-weight:600;display:none}.ri-shopping-cart-2-line[_ngcontent-%COMP%]{font-size:20px}.icon-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.active-link[_ngcontent-%COMP%]{color:#007bff}.icon-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:color .3s ease}.searchgroup[_ngcontent-%COMP%]{margin-top:10px}.searchgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;background-color:#f5f5f5;width:20vw;height:40px}.searchgroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px;border:none;width:40px;background-color:#f5f5f5;border-radius:4px}.dropdown[_ngcontent-%COMP%]{display:none}.dropDownIcon[_ngcontent-%COMP%]{border:none;background-color:transparent;font-size:20px}.dropdown-menu[_ngcontent-%COMP%]{border:none;background-color:#3f3d3d}.dropdown-item[_ngcontent-%COMP%]{color:#d1c6c6}.btn[_ngcontent-%COMP%]:active{background-color:transparent!important;border:2px solid var(--button-color);transition:.5s;color:#000}.nav-link[_ngcontent-%COMP%]:hover, .fw-lighter[_ngcontent-%COMP%]:hover{color:var(--button-color)!important;cursor:pointer;scale:1.03;transition:.3s}.logout-parent[_ngcontent-%COMP%]{display:flex}.btn-primary[_ngcontent-%COMP%]{background-color:var(--button-color);border:none;box-shadow:none;text-transform:lowercase;border-radius:4px}.btn-primary[_ngcontent-%COMP%]:hover{scale:1.04;transition:.1s;box-shadow:none}.cartItemNumber[_ngcontent-%COMP%]{color:#f0eaea;font-size:13px;background-color:var(--button-color);padding:1px 6px;border-radius:35px;position:absolute}.carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;font-family:var(--lg-font)}.carousel-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-color:#fff!important}.carousel-item[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{border-color:pink!important}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before{position:absolute;content:"";width:4px;height:50px;background-color:var(--pink);left:-20px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.btn[_ngcontent-%COMP%]{box-shadow:none!important}.bg-primary[_ngcontent-%COMP%]{background-color:var(--button-color)!important;border-radius:35px!important}.navbar[_ngcontent-%COMP%]{font-family:Trebuchet MS,sans-serif!important}.search-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.suggestions[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:20%;width:100%;background-color:#fff;border:1px solid #ddd;border-top:none;z-index:1000;list-style:none;margin:0;padding:0;overflow:scroll;min-height:25rem}.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 12px}.suggestions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#333;display:block}.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.nav-link.active[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline}.searchgroup[_ngcontent-%COMP%]{position:relative;display:flex}.form-control[_ngcontent-%COMP%]{padding-right:40px;width:100%}.input-group-text[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);border:none;background:transparent;pointer-events:none}.search-icon[_ngcontent-%COMP%]{color:#7e7777}.suggestions[_ngcontent-%COMP%]{position:absolute;background-color:#fff;width:100%;z-index:1000;list-style:none;padding:0;margin:0;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.shoppingIcon.active[_ngcontent-%COMP%]{border-radius:35px;border:1px solid var(--button-color)}@media (max-width: 990px){.dropdown[_ngcontent-%COMP%]{display:block}.bottom[_ngcontent-%COMP%]{justify-content:space-between;padding:0px 4vw}.searchgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:30vw}}@media (max-width: 390px){.mid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none}.mid[_ngcontent-%COMP%]{justify-content:none;text-align:center;margin-right:30vw;text-decoration:underline}}.search-container[_ngcontent-%COMP%]{position:relative}.searchgroup[_ngcontent-%COMP%]{width:200px;max-width:100%;transition:width .3s ease-in-out}.searchgroup.expanded[_ngcontent-%COMP%]{width:350px}.input-group-text.search-icon[_ngcontent-%COMP%]{cursor:pointer}.suggestions[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:100%;background:#fff;border:1px solid #ccc;border-radius:0 0 5px 5px;z-index:1000}.suggestions[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px}.suggestions[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.suggestions[_ngcontent-%COMP%]   img.img-thumbnail[_ngcontent-%COMP%]{border:none}.suggestions[_ngcontent-%COMP%]   .fw-bold[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:.5rem}.suggestions[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%]{font-size:.875rem}.suggestions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]{background:none;border:none;padding:0}.suggestions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:#000}.nav-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}']});let i=e;return i})();var qa=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ae({type:e,selectors:[["app-footer"]],decls:72,vars:0,consts:[[1,"footer"],[1,"first"],["href","",1,"subs"],["href",""],[1,"input-container"],["type","search","placeholder","Enter your email"],[1,"ri-send-plane-2-line"],[1,"second"],[1,"fifth"],[1,"qr"],[1,"Images"],["src","../assets/footerImages/qrcode.png"],[1,"storeImage"],["src","./assets/footerImages/apple.png"],[1,"socialMedia"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-square-twitter"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"]],template:function(r,a){r&1&&(w(0,"footer",0)(1,"div",1)(2,"h5"),P(3,"SnapShop"),S(),w(4,"ul")(5,"li")(6,"a",2),P(7,"Subscribe"),S()(),w(8,"li")(9,"a",3),P(10,"Get 10% off your first order"),S()(),w(11,"li")(12,"div",4),K(13,"input",5)(14,"i",6),S()()()(),w(15,"div",7)(16,"h5"),P(17,"Support"),S(),w(18,"ul")(19,"li"),P(20,"111 Bijoy sarani, Dhaka"),S(),w(21,"li"),P(22,"SnapShop.com"),S(),w(23,"li"),P(24,"+88015-88888-9999"),S()()(),w(25,"div",1)(26,"h5"),P(27,"Account"),S(),w(28,"ul")(29,"li")(30,"a",3),P(31,"My Account"),S()(),w(32,"li")(33,"a",3),P(34,"Login/Register"),S()(),w(35,"li")(36,"a",3),P(37,"Cart"),S()(),w(38,"li")(39,"a",3),P(40,"Shop"),S()()()(),w(41,"div",1)(42,"h5"),P(43,"Quick Link"),S(),w(44,"ul")(45,"li")(46,"a",3),P(47,"Privacy Policy"),S()(),w(48,"li")(49,"a",3),P(50,"Terms Of Use"),S()(),w(51,"li")(52,"a",3),P(53,"FAQ"),S()(),w(54,"li")(55,"a",3),P(56,"Contact"),S()()()(),w(57,"div",8)(58,"h5"),P(59,"Download App"),S(),w(60,"ul")(61,"li",9),P(62,"Save $3 with App New User Only"),S(),w(63,"div",10),K(64,"img",11),w(65,"div",12),K(66,"img",13),S()(),w(67,"div",14),K(68,"i",15)(69,"i",16)(70,"i",17)(71,"i",18),S()()()())},styles:[".footer[_ngcontent-%COMP%]{height:300px;width:100%;background-color:#000;display:flex;color:#fff;font-size:10px;text-decoration:none;list-style:none;justify-content:space-around;align-items:center}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.first[_ngcontent-%COMP%], .second[_ngcontent-%COMP%], .fifth[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;height:150px;width:180px}.first[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;border:2px solid white;border-radius:2px;height:30px;padding:5px;color:#fff}.footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:500;text-align:left;margin-left:32px}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.subs[_ngcontent-%COMP%]{font-size:15px}li[_ngcontent-%COMP%]{font-size:13px}ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.qr[_ngcontent-%COMP%]{font-size:10px;color:#999991;font-weight:700}.Images[_ngcontent-%COMP%]{display:flex;justify-content:none}.Images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px}.socialMedia[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:17px}.storeImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;margin-left:5px}.input-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.input-container[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]{width:100%;padding:10px}.input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;right:10px;transform:translateY(-50%);pointer-events:none;color:#888}.input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px}@media (max-width: 820px){.footer[_ngcontent-%COMP%]{flex-direction:column;height:auto;gap:40px;padding:40px}}"]});let i=e;return i})();var Ka=(()=>{let e=class e{constructor(){this.title="SnapShop"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Ae({type:e,selectors:[["app-root"]],decls:3,vars:0,template:function(r,a){r&1&&K(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[Yi,Ha,qa]});let i=e;return i})();var Wa=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e,bootstrap:[Ka]}),e.\u0275inj=ge({providers:[Ki],imports:[vt,$a,ja,Fi,Vi,Hi,jr,Wi,ar,nr,sr,or,ir,lr,cr,tr]});let i=e;return i})();zi().bootstrapModule(Wa).catch(i=>console.error(i));
