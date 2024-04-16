var le=Object.defineProperty;var ae=(n,t,e)=>t in n?le(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var st=(n,t,e)=>(ae(n,typeof t!="symbol"?t+"":t,e),e);import"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/components/card/card.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,pt=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),mt=new WeakMap;class qt{constructor(t,e,i){if(this._$cssResult$=!0,i!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mt.set(e,t))}return t}toString(){return this.cssText}}const ce=n=>new qt(typeof n=="string"?n:n+"",void 0,ut),de=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new qt(e,n,ut)},$e=(n,t)=>{if(pt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=Z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},vt=pt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ce(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pe,defineProperty:ue,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:fe,getPrototypeOf:ge}=Object,v=globalThis,yt=v.trustedTypes,me=yt?yt.emptyScript:"",it=v.reactiveElementPolyfillSupport,k=(n,t)=>n,ct={toAttribute(n,t){switch(t){case Boolean:n=n?me:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ft=(n,t)=>!pe(n,t),St={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:Ft};var It,jt;(It=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(jt=v.litPropertyMetadata)!=null||(v.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=St){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ue(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){var o;const{get:s,set:r}=(o=_e(this.prototype,t))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const h=s==null?void 0:s.call(this);r.call(this,a),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:St}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=ge(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,i=[...Ae(e),...fe(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(vt(s))}else t!==void 0&&e.push(vt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;const t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return $e(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:ct).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:ct;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){if(i!=null||(i=this.constructor.getPropertyOptions(t)),!((s=i.hasChanged)!=null?s:Ft)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){var s;this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&((s=this._$Ej)!=null?s:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((i=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}var Bt;N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[k("elementProperties")]=new Map,N[k("finalized")]=new Map,it==null||it({ReactiveElement:N}),((Bt=v.reactiveElementVersions)!=null?Bt:v.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Y=I.trustedTypes,Et=Y?Y.createPolicy("lit-html",{createHTML:n=>n}):void 0,Kt="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,Jt="?"+m,ve=`<${Jt}>`,x=document,D=()=>x.createComment(""),z=n=>n===null||typeof n!="object"&&typeof n!="function",Zt=Array.isArray,ye=n=>Zt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,wt=/>/g,y=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,Ct=/"/g,Qt=/^(?:script|style|textarea|title)$/i,Se=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),T=Se(1),P=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ht=new WeakMap,b=x.createTreeWalker(x,129);function Yt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}const Ee=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=R;for(let a=0;a<e;a++){const h=n[a];let c,d,l=-1,p=0;for(;p<h.length&&(o.lastIndex=p,d=o.exec(h),d!==null);)p=o.lastIndex,o===R?d[1]==="!--"?o=bt:d[1]!==void 0?o=wt:d[2]!==void 0?(Qt.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=y):d[3]!==void 0&&(o=y):o===y?d[0]===">"?(o=s!=null?s:R,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?y:d[3]==='"'?Ct:xt):o===Ct||o===xt?o=y:o===bt||o===wt?o=R:(o=y,s=void 0);const $=o===y&&n[a+1].startsWith("/>")?" ":"";r+=o===R?h+ve:l>=0?(i.push(c),h.slice(0,l)+Kt+h.slice(l)+m+$):h+m+(l===-2?a:$)}return[Yt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[c,d]=Ee(t,e);if(this.el=W.createElement(c,i),b.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(Kt)){const p=d[o++],$=s.getAttribute(l).split(m),u=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:u[2],strings:$,ctor:u[1]==="."?we:u[1]==="?"?xe:u[1]==="@"?Ce:tt}),s.removeAttribute(l)}else l.startsWith(m)&&(h.push({type:6,index:r}),s.removeAttribute(l));if(Qt.test(s.tagName)){const l=s.textContent.split(m),p=l.length-1;if(p>0){s.textContent=Y?Y.emptyScript:"";for(let $=0;$<p;$++)s.append(l[$],D()),b.nextNode(),h.push({type:2,index:++r});s.append(l[p],D())}}}else if(s.nodeType===8)if(s.data===Jt)h.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)h.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function U(n,t,e=n,i){var o,a,h;if(t===P)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=z(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?((h=e._$Co)!=null?h:e._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=U(n,s._$AS(n,t.values),s,i)),t}class be{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;const{el:{content:e},parts:i}=this._$AD,s=((c=t==null?void 0:t.creationScope)!=null?c:x).importNode(e,!0);b.currentNode=s;let r=b.nextNode(),o=0,a=0,h=i[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new F(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new He(r,this,t)),this._$AV.push(d),h=i[++a]}o!==(h==null?void 0:h.index)&&(r=b.nextNode(),o++)}return b.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,s){var r;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(r=s==null?void 0:s.isConnected)!=null?r:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),z(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ye(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Yt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new be(s,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Ht.get(t.strings);return e===void 0&&Ht.set(t.strings,e=new W(t)),e}k(t){Zt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new F(this.S(D()),this.S(D()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=U(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const a=t;let h,c;for(t=r[0],h=0;h<r.length-1;h++)c=U(this,a[i+h],e,h),c===P&&(c=this._$AH[h]),o||(o=!z(c)||c!==this._$AH[h]),c===_?t=_:t!==_&&(t+=(c!=null?c:"")+r[h+1]),this._$AH[h]=c}o&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class we extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class xe extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class Ce extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=U(this,t,e,0))!=null?o:_)===P)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const ot=I.litHtmlPolyfillSupport;var Dt;ot==null||ot(W,F),((Dt=I.litHtmlVersions)!=null?Dt:I.litHtmlVersions=[]).push("3.1.2");const Te=(n,t,e)=>{var r,o;const i=(r=e==null?void 0:e.renderBefore)!=null?r:t;let s=i._$litPart$;if(s===void 0){const a=(o=e==null?void 0:e.renderBefore)!=null?o:null;i._$litPart$=s=new F(t.insertBefore(D(),a),a,void 0,e!=null?e:{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return(i=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Te(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var zt;j._$litElement$=!0,j.finalized=!0,(zt=globalThis.litElementHydrateSupport)==null||zt.call(globalThis,{LitElement:j});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:j});var Wt;((Wt=globalThis.litElementVersions)!=null?Wt:globalThis.litElementVersions=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,G=B.trustedTypes,Tt=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,_t="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,At="?"+g,Ne=`<${At}>`,C=document,X=()=>C.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",Gt=Array.isArray,Xt=n=>Gt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nt=/-->/g,Pt=/>/g,S=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Mt=/"/g,te=/^(?:script|style|textarea|title)$/i,M=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Rt=new WeakMap,w=C.createTreeWalker(C,129);function ee(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}const se=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=O;for(let a=0;a<e;a++){const h=n[a];let c,d,l=-1,p=0;for(;p<h.length&&(o.lastIndex=p,d=o.exec(h),d!==null);)p=o.lastIndex,o===O?d[1]==="!--"?o=Nt:d[1]!==void 0?o=Pt:d[2]!==void 0?(te.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=S):d[3]!==void 0&&(o=S):o===S?d[0]===">"?(o=s!=null?s:O,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?S:d[3]==='"'?Mt:Ut):o===Mt||o===Ut?o=S:o===Nt||o===Pt?o=O:(o=S,s=void 0);const $=o===S&&n[a+1].startsWith("/>")?" ":"";r+=o===O?h+Ne:l>=0?(i.push(c),h.slice(0,l)+_t+h.slice(l)+g+$):h+g+(l===-2?a:$)}return[ee(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[c,d]=se(t,e);if(this.el=q.createElement(c,i),w.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=w.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(_t)){const p=d[o++],$=s.getAttribute(l).split(g),u=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:u[2],strings:$,ctor:u[1]==="."?ne:u[1]==="?"?oe:u[1]==="@"?re:J}),s.removeAttribute(l)}else l.startsWith(g)&&(h.push({type:6,index:r}),s.removeAttribute(l));if(te.test(s.tagName)){const l=s.textContent.split(g),p=l.length-1;if(p>0){s.textContent=G?G.emptyScript:"";for(let $=0;$<p;$++)s.append(l[$],X()),w.nextNode(),h.push({type:2,index:++r});s.append(l[p],X())}}}else if(s.nodeType===8)if(s.data===At)h.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)h.push({type:7,index:r}),l+=g.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function H(n,t,e=n,i){var o,a,h;if(t===M)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=V(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?((h=e._$Co)!=null?h:e._$Co=[])[i]=s:e._$Cl=s),s!==void 0&&(t=H(n,s._$AS(n,t.values),s,i)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;const{el:{content:e},parts:i}=this._$AD,s=((c=t==null?void 0:t.creationScope)!=null?c:C).importNode(e,!0);w.currentNode=s;let r=w.nextNode(),o=0,a=0,h=i[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new K(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new he(r,this,t)),this._$AV.push(d),h=i[++a]}o!==(h==null?void 0:h.index)&&(r=w.nextNode(),o++)}return w.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,i,s){var r;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(r=s==null?void 0:s.isConnected)!=null?r:!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),V(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==A&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=q.createElement(ee(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new ie(s,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new q(t)),e}k(t){Gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new K(this.S(X()),this.S(X()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=H(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const a=t;let h,c;for(t=r[0],h=0;h<r.length-1;h++)c=H(this,a[i+h],e,h),c===M&&(c=this._$AH[h]),o||(o=!V(c)||c!==this._$AH[h]),c===A?t=A:t!==A&&(t+=(c!=null?c:"")+r[h+1]),this._$AH[h]=c}o&&!s&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ne extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class oe extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class re extends J{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=H(this,t,e,0))!=null?o:A)===M)return;const i=this._$AH,s=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==A&&(i===A||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)==null?void 0:e.host)!=null?i:this.element,t):this._$AH.handleEvent(t)}}class he{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const Pe={P:_t,A:g,C:At,M:1,L:se,R:ie,D:Xt,V:H,I:K,H:J,N:oe,U:re,B:ne,F:he},lt=B.litHtmlPolyfillSupport;var Vt;lt==null||lt(q,K),((Vt=B.litHtmlVersions)!=null?Vt:B.litHtmlVersions=[]).push("3.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Me=n=>(...t)=>({_$litDirective$:n,values:t});class Re{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Oe}=Pe,Ot=()=>document.createComment(""),L=(n,t,e)=>{var r;const i=n._$AA.parentNode,s=t===void 0?n._$AB:t._$AA;if(e===void 0){const o=i.insertBefore(Ot(),s),a=i.insertBefore(Ot(),s);e=new Oe(o,a,n,n.options)}else{const o=e._$AB.nextSibling,a=e._$AM,h=a!==n;if(h){let c;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(o!==s||h){let c=e._$AA;for(;c!==o;){const d=c.nextSibling;i.insertBefore(c,s),c=d}}}return e},E=(n,t,e=n)=>(n._$AI(t,e),n),Le={},ke=(n,t=Le)=>n._$AH=t,Ie=n=>n._$AH,at=n=>{var i;(i=n._$AP)==null||i.call(n,!1,!0);let t=n._$AA;const e=n._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(n,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},kt=Me(class extends Re{constructor(n){if(super(n),n.type!==Ue.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],r=[];let o=0;for(const a of n)s[o]=i?i(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){var ft;const s=Ie(n),{values:r,keys:o}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=o,r;const a=(ft=this.ut)!=null?ft:this.ut=[],h=[];let c,d,l=0,p=s.length-1,$=0,u=r.length-1;for(;l<=p&&$<=u;)if(s[l]===null)l++;else if(s[p]===null)p--;else if(a[l]===o[$])h[$]=E(s[l],r[$]),l++,$++;else if(a[p]===o[u])h[u]=E(s[p],r[u]),p--,u--;else if(a[l]===o[u])h[u]=E(s[l],r[u]),L(n,h[u+1],s[l]),l++,u--;else if(a[p]===o[$])h[$]=E(s[p],r[$]),L(n,s[l],s[p]),p--,$++;else if(c===void 0&&(c=Lt(o,$,u),d=Lt(a,l,p)),c.has(a[l]))if(c.has(a[p])){const f=d.get(o[$]),et=f!==void 0?s[f]:null;if(et===null){const gt=L(n,s[l]);E(gt,r[$]),h[$]=gt}else h[$]=E(et,r[$]),L(n,s[l],et),s[f]=null;$++}else at(s[p]),p--;else at(s[l]),l++;for(;$<=u;){const f=L(n,h[u+1]);E(f,r[$]),h[$++]=f}for(;l<=p;){const f=s[l++];f!==null&&at(f)}return this.ut=o,ke(n,h),M}});class dt extends j{constructor(){super(),this.json={},this.episodes=[],this.tags=new Set([])}async connectedCallback(){super.connectedCallback();const t=await fetch("/motu-quotes/assets/motu.json");this.json=await t.json(),this.episodes=this.json.episodes;for(let e of this.episodes)new Set(e.tags).forEach(s=>this.tags.add(s));this.dispatchEvent(new CustomEvent("tags-change",{detail:{tags:this.tags}}))}refreshFilter(t){const e=this.json.episodes,i=[];for(let s of e)(new Set(s.tags).intersection(t).size>0||t.size==0)&&i.push(s);this.episodes=i,this.performUpdate()}render(){return T`
      ${kt(this.episodes,t=>t.number,(t,e)=>{var r;let i="";const s=[].concat((r=t.videoSrc)!=null?r:[]);return s.length?i=T`
              <video slot="image" muted loop autoplay playsinline>
              ${kt(s,o=>T`<source src="/motu-quotes/assets/images/${o}" type="${o.endsWith("webm")?"video/webm":"video/mp4"}"></source>`)}
             </video>`:t.imageSrc?i=T`
              <img
                slot="image"
                src="/motu-quotes/assets/images/${t.imageSrc}"
                alt="A kitten walks towards camera on top of pallet."
              />
            `:i=T`
              <img
                slot="image"
                src="/motu-quotes/assets/images/default.webp"
                alt="A kitten walks towards camera on top of pallet."
              />
            `,T`
            <sl-card id="episode-${t.number}" class="card-overview">
              <strong>${t.title}</strong><br />
              <div class="description">${t.description||""}</div><br />
              <small>Episode ${t.number}</small>
              ${i!=null?i:_}
            </sl-card>
          `})}
    `}}st(dt,"properties",{episodes:{}}),st(dt,"styles",de`
    .card-overview {
      margin: 16px;
      width: 100%;
      max-width: min(400px, 100vw - 64px);
    }

    .card-overview small {
      color: var(--sl-color-neutral-500);
    }

    .card-overview img {
      object-fit: cover;
      aspect-ratio: 4 / 3;
    }

    .card-overview video {
      object-fit: cover;
      aspect-ratio: 4 / 3;
      width: 100%;
    }

    .description {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `);customElements.define("card-view",dt);const $t=document.querySelector("sl-select"),Q=document.querySelector("card-view");Q.addEventListener("tags-change",n=>{console.log("tags-change",n);for(let e of Q.tags){const i=e.charAt(0).toUpperCase()+e.slice(1);$t.insertAdjacentHTML("beforeend",`<sl-option value="${e.replaceAll(" ","-")}">${i}</sl-option>`)}const t=new Set($t.getAttribute("value").split(" ").map(e=>e.replaceAll("-"," ")));console.log(t),Q.refreshFilter(t)},{once:!0});$t.addEventListener("sl-change",n=>{console.log("sl-change");const t=new Set(n.target.selectedOptions.map(e=>e.value.replaceAll("-"," ")));Q.refreshFilter(t)});
