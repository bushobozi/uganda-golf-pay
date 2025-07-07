(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var su={exports:{}};/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var cA=su.exports,Gm;function uA(){return Gm||(Gm=1,function(t,e){(function(n,i){t.exports=i()})(cA,function(){const n=new Map,i={set(_,c,p){n.has(_)||n.set(_,new Map);const v=n.get(_);v.has(c)||v.size===0?v.set(c,p):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(v.keys())[0]}.`)},get:(_,c)=>n.has(_)&&n.get(_).get(c)||null,remove(_,c){if(!n.has(_))return;const p=n.get(_);p.delete(c),p.size===0&&n.delete(_)}},s="transitionend",r=_=>(_&&window.CSS&&window.CSS.escape&&(_=_.replace(/#([^\s"#']+)/g,(c,p)=>`#${CSS.escape(p)}`)),_),o=_=>{_.dispatchEvent(new Event(s))},l=_=>!(!_||typeof _!="object")&&(_.jquery!==void 0&&(_=_[0]),_.nodeType!==void 0),u=_=>l(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(r(_)):null,h=_=>{if(!l(_)||_.getClientRects().length===0)return!1;const c=getComputedStyle(_).getPropertyValue("visibility")==="visible",p=_.closest("details:not([open])");if(!p)return c;if(p!==_){const v=_.closest("summary");if(v&&v.parentNode!==p||v===null)return!1}return c},f=_=>!_||_.nodeType!==Node.ELEMENT_NODE||!!_.classList.contains("disabled")||(_.disabled!==void 0?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false"),m=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const c=_.getRootNode();return c instanceof ShadowRoot?c:null}return _ instanceof ShadowRoot?_:_.parentNode?m(_.parentNode):null},y=()=>{},w=_=>{_.offsetHeight},N=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,V=[],F=()=>document.documentElement.dir==="rtl",Y=_=>{var c;c=()=>{const p=N();if(p){const v=_.NAME,k=p.fn[v];p.fn[v]=_.jQueryInterface,p.fn[v].Constructor=_,p.fn[v].noConflict=()=>(p.fn[v]=k,_.jQueryInterface)}},document.readyState==="loading"?(V.length||document.addEventListener("DOMContentLoaded",()=>{for(const p of V)p()}),V.push(c)):c()},z=(_,c=[],p=_)=>typeof _=="function"?_.call(...c):p,X=(_,c,p=!0)=>{if(!p)return void z(_);const v=($=>{if(!$)return 0;let{transitionDuration:G,transitionDelay:se}=window.getComputedStyle($);const he=Number.parseFloat(G),fe=Number.parseFloat(se);return he||fe?(G=G.split(",")[0],se=se.split(",")[0],1e3*(Number.parseFloat(G)+Number.parseFloat(se))):0})(c)+5;let k=!1;const D=({target:$})=>{$===c&&(k=!0,c.removeEventListener(s,D),z(_))};c.addEventListener(s,D),setTimeout(()=>{k||o(c)},v)},Q=(_,c,p,v)=>{const k=_.length;let D=_.indexOf(c);return D===-1?!p&&v?_[k-1]:_[0]:(D+=p?1:-1,v&&(D=(D+k)%k),_[Math.max(0,Math.min(D,k-1))])},ye=/[^.]*(?=\..*)\.|.*/,be=/\..*/,R=/::\d+$/,b={};let C=1;const P={mouseenter:"mouseover",mouseleave:"mouseout"},O=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function M(_,c){return c&&`${c}::${C++}`||_.uidEvent||C++}function A(_){const c=M(_);return _.uidEvent=c,b[c]=b[c]||{},b[c]}function Nt(_,c,p=null){return Object.values(_).find(v=>v.callable===c&&v.delegationSelector===p)}function Zt(_,c,p){const v=typeof c=="string",k=v?p:c||p;let D=Pe(_);return O.has(D)||(D=_),[v,k,D]}function gt(_,c,p,v,k){if(typeof c!="string"||!_)return;let[D,$,G]=Zt(c,p,v);c in P&&($=(Se=>function(Ae){if(!Ae.relatedTarget||Ae.relatedTarget!==Ae.delegateTarget&&!Ae.delegateTarget.contains(Ae.relatedTarget))return Se.call(this,Ae)})($));const se=A(_),he=se[G]||(se[G]={}),fe=Nt(he,$,D?p:null);if(fe)return void(fe.oneOff=fe.oneOff&&k);const ce=M($,c.replace(ye,"")),Ne=D?function(Te,Se,Ae){return function Re(ot){const dt=Te.querySelectorAll(Se);for(let{target:Fe}=ot;Fe&&Fe!==this;Fe=Fe.parentNode)for(const Xe of dt)if(Xe===Fe)return ue(ot,{delegateTarget:Fe}),Re.oneOff&&S.off(Te,ot.type,Se,Ae),Ae.apply(Fe,[ot])}}(_,p,$):function(Te,Se){return function Ae(Re){return ue(Re,{delegateTarget:Te}),Ae.oneOff&&S.off(Te,Re.type,Se),Se.apply(Te,[Re])}}(_,$);Ne.delegationSelector=D?p:null,Ne.callable=$,Ne.oneOff=k,Ne.uidEvent=ce,he[ce]=Ne,_.addEventListener(G,Ne,D)}function De(_,c,p,v,k){const D=Nt(c[p],v,k);D&&(_.removeEventListener(p,D,!!k),delete c[p][D.uidEvent])}function xe(_,c,p,v){const k=c[p]||{};for(const[D,$]of Object.entries(k))D.includes(v)&&De(_,c,p,$.callable,$.delegationSelector)}function Pe(_){return _=_.replace(be,""),P[_]||_}const S={on(_,c,p,v){gt(_,c,p,v,!1)},one(_,c,p,v){gt(_,c,p,v,!0)},off(_,c,p,v){if(typeof c!="string"||!_)return;const[k,D,$]=Zt(c,p,v),G=$!==c,se=A(_),he=se[$]||{},fe=c.startsWith(".");if(D===void 0){if(fe)for(const ce of Object.keys(se))xe(_,se,ce,c.slice(1));for(const[ce,Ne]of Object.entries(he)){const Te=ce.replace(R,"");G&&!c.includes(Te)||De(_,se,$,Ne.callable,Ne.delegationSelector)}}else{if(!Object.keys(he).length)return;De(_,se,$,D,k?p:null)}},trigger(_,c,p){if(typeof c!="string"||!_)return null;const v=N();let k=null,D=!0,$=!0,G=!1;c!==Pe(c)&&v&&(k=v.Event(c,p),v(_).trigger(k),D=!k.isPropagationStopped(),$=!k.isImmediatePropagationStopped(),G=k.isDefaultPrevented());const se=ue(new Event(c,{bubbles:D,cancelable:!0}),p);return G&&se.preventDefault(),$&&_.dispatchEvent(se),se.defaultPrevented&&k&&k.preventDefault(),se}};function ue(_,c={}){for(const[p,v]of Object.entries(c))try{_[p]=v}catch{Object.defineProperty(_,p,{configurable:!0,get:()=>v})}return _}function Ye(_){if(_==="true")return!0;if(_==="false")return!1;if(_===Number(_).toString())return Number(_);if(_===""||_==="null")return null;if(typeof _!="string")return _;try{return JSON.parse(decodeURIComponent(_))}catch{return _}}function Ve(_){return _.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const St={setDataAttribute(_,c,p){_.setAttribute(`data-bs-${Ve(c)}`,p)},removeDataAttribute(_,c){_.removeAttribute(`data-bs-${Ve(c)}`)},getDataAttributes(_){if(!_)return{};const c={},p=Object.keys(_.dataset).filter(v=>v.startsWith("bs")&&!v.startsWith("bsConfig"));for(const v of p){let k=v.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1),c[k]=Ye(_.dataset[v])}return c},getDataAttribute:(_,c)=>Ye(_.getAttribute(`data-bs-${Ve(c)}`))};class jt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,p){const v=l(p)?St.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof v=="object"?v:{},...l(p)?St.getDataAttributes(p):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,p=this.constructor.DefaultType){for(const[k,D]of Object.entries(p)){const $=c[k],G=l($)?"element":(v=$)==null?`${v}`:Object.prototype.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(D).test(G))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${k}" provided type "${G}" but expected type "${D}".`)}var v}}class rt extends jt{constructor(c,p){super(),(c=u(c))&&(this._element=c,this._config=this._getConfig(p),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,p,v=!0){X(c,p,v)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return i.get(u(c),this.DATA_KEY)}static getOrCreateInstance(c,p={}){return this.getInstance(c)||new this(c,typeof p=="object"?p:null)}static get VERSION(){return"5.3.7"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const H=_=>{let c=_.getAttribute("data-bs-target");if(!c||c==="#"){let p=_.getAttribute("href");if(!p||!p.includes("#")&&!p.startsWith("."))return null;p.includes("#")&&!p.startsWith("#")&&(p=`#${p.split("#")[1]}`),c=p&&p!=="#"?p.trim():null}return c?c.split(",").map(p=>r(p)).join(","):null},B={find:(_,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,_)),findOne:(_,c=document.documentElement)=>Element.prototype.querySelector.call(c,_),children:(_,c)=>[].concat(..._.children).filter(p=>p.matches(c)),parents(_,c){const p=[];let v=_.parentNode.closest(c);for(;v;)p.push(v),v=v.parentNode.closest(c);return p},prev(_,c){let p=_.previousElementSibling;for(;p;){if(p.matches(c))return[p];p=p.previousElementSibling}return[]},next(_,c){let p=_.nextElementSibling;for(;p;){if(p.matches(c))return[p];p=p.nextElementSibling}return[]},focusableChildren(_){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(p=>`${p}:not([tabindex^="-"])`).join(",");return this.find(c,_).filter(p=>!f(p)&&h(p))},getSelectorFromElement(_){const c=H(_);return c&&B.findOne(c)?c:null},getElementFromSelector(_){const c=H(_);return c?B.findOne(c):null},getMultipleElementsFromSelector(_){const c=H(_);return c?B.find(c):[]}},re=(_,c="hide")=>{const p=`click.dismiss${_.EVENT_KEY}`,v=_.NAME;S.on(document,p,`[data-bs-dismiss="${v}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),f(this))return;const D=B.getElementFromSelector(this)||this.closest(`.${v}`);_.getOrCreateInstance(D)[c]()})},de=".bs.alert",He=`close${de}`,T=`closed${de}`;class I extends rt{static get NAME(){return"alert"}close(){if(S.trigger(this._element,He).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),S.trigger(this._element,T),this.dispose()}static jQueryInterface(c){return this.each(function(){const p=I.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}re(I,"close"),Y(I);const x='[data-bs-toggle="button"]';class j extends rt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const p=j.getOrCreateInstance(this);c==="toggle"&&p[c]()})}}S.on(document,"click.bs.button.data-api",x,_=>{_.preventDefault();const c=_.target.closest(x);j.getOrCreateInstance(c).toggle()}),Y(j);const W=".bs.swipe",q=`touchstart${W}`,ae=`touchmove${W}`,ne=`touchend${W}`,te=`pointerdown${W}`,Z=`pointerup${W}`,ge={endCallback:null,leftCallback:null,rightCallback:null},oe={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pe extends jt{constructor(c,p){super(),this._element=c,c&&pe.isSupported()&&(this._config=this._getConfig(p),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ge}static get DefaultType(){return oe}static get NAME(){return"swipe"}dispose(){S.off(this._element,W)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),z(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const p=c/this._deltaX;this._deltaX=0,p&&z(p>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,te,c=>this._start(c)),S.on(this._element,Z,c=>this._end(c)),this._element.classList.add("pointer-event")):(S.on(this._element,q,c=>this._start(c)),S.on(this._element,ae,c=>this._move(c)),S.on(this._element,ne,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const _e=".bs.carousel",ve=".data-api",Ce="ArrowLeft",$e="ArrowRight",It="next",Et="prev",Ft="left",Ot="right",Si=`slide${_e}`,ns=`slid${_e}`,Ut=`keydown${_e}`,xn=`mouseenter${_e}`,oo=`mouseleave${_e}`,Ea=`dragstart${_e}`,hc=`load${_e}${ve}`,dc=`click${_e}${ve}`,Os="carousel",Ds="active",ao=".active",Ri=".carousel-item",fc=ao+Ri,lo={[Ce]:Ot,[$e]:Ft},pc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},mr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class is extends rt{constructor(c,p){super(c,p),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=B.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Os&&this.cycle()}static get Default(){return pc}static get DefaultType(){return mr}static get NAME(){return"carousel"}next(){this._slide(It)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(Et)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?S.one(this._element,ns,()=>this.cycle()):this.cycle())}to(c){const p=this._getItems();if(c>p.length-1||c<0)return;if(this._isSliding)return void S.one(this._element,ns,()=>this.to(c));const v=this._getItemIndex(this._getActive());if(v===c)return;const k=c>v?It:Et;this._slide(k,p[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&S.on(this._element,Ut,c=>this._keydown(c)),this._config.pause==="hover"&&(S.on(this._element,xn,()=>this.pause()),S.on(this._element,oo,()=>this._maybeEnableCycle())),this._config.touch&&pe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const p of B.find(".carousel-item img",this._element))S.on(p,Ea,v=>v.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(Ft)),rightCallback:()=>this._slide(this._directionToOrder(Ot)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new pe(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const p=lo[c.key];p&&(c.preventDefault(),this._slide(this._directionToOrder(p)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const p=B.findOne(ao,this._indicatorsElement);p.classList.remove(Ds),p.removeAttribute("aria-current");const v=B.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);v&&(v.classList.add(Ds),v.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const p=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=p||this._config.defaultInterval}_slide(c,p=null){if(this._isSliding)return;const v=this._getActive(),k=c===It,D=p||Q(this._getItems(),v,k,this._config.wrap);if(D===v)return;const $=this._getItemIndex(D),G=ce=>S.trigger(this._element,ce,{relatedTarget:D,direction:this._orderToDirection(c),from:this._getItemIndex(v),to:$});if(G(Si).defaultPrevented||!v||!D)return;const se=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement($),this._activeElement=D;const he=k?"carousel-item-start":"carousel-item-end",fe=k?"carousel-item-next":"carousel-item-prev";D.classList.add(fe),w(D),v.classList.add(he),D.classList.add(he),this._queueCallback(()=>{D.classList.remove(he,fe),D.classList.add(Ds),v.classList.remove(Ds,fe,he),this._isSliding=!1,G(ns)},v,this._isAnimated()),se&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return B.findOne(fc,this._element)}_getItems(){return B.find(Ri,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return F()?c===Ft?Et:It:c===Ft?It:Et}_orderToDirection(c){return F()?c===Et?Ft:Ot:c===Et?Ot:Ft}static jQueryInterface(c){return this.each(function(){const p=is.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}}else p.to(c)})}}S.on(document,dc,"[data-bs-slide], [data-bs-slide-to]",function(_){const c=B.getElementFromSelector(this);if(!c||!c.classList.contains(Os))return;_.preventDefault();const p=is.getOrCreateInstance(c),v=this.getAttribute("data-bs-slide-to");return v?(p.to(v),void p._maybeEnableCycle()):St.getDataAttribute(this,"slide")==="next"?(p.next(),void p._maybeEnableCycle()):(p.prev(),void p._maybeEnableCycle())}),S.on(window,hc,()=>{const _=B.find('[data-bs-ride="carousel"]');for(const c of _)is.getOrCreateInstance(c)}),Y(is);const Dt=".bs.collapse",mc=`show${Dt}`,gr=`shown${Dt}`,_r=`hide${Dt}`,Lh=`hidden${Dt}`,Vh=`click${Dt}.data-api`,Pi="show",xs="collapse",co="collapsing",uo=`:scope .${xs} .${xs}`,ho='[data-bs-toggle="collapse"]',wa={parent:null,toggle:!0},fo={parent:"(null|element)",toggle:"boolean"};class In extends rt{constructor(c,p){super(c,p),this._isTransitioning=!1,this._triggerArray=[];const v=B.find(ho);for(const k of v){const D=B.getSelectorFromElement(k),$=B.find(D).filter(G=>G===this._element);D!==null&&$.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return wa}static get DefaultType(){return fo}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(k=>k!==this._element).map(k=>In.getOrCreateInstance(k,{toggle:!1}))),c.length&&c[0]._isTransitioning||S.trigger(this._element,mc).defaultPrevented)return;for(const k of c)k.hide();const p=this._getDimension();this._element.classList.remove(xs),this._element.classList.add(co),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const v=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(co),this._element.classList.add(xs,Pi),this._element.style[p]="",S.trigger(this._element,gr)},this._element,!0),this._element.style[p]=`${this._element[v]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,_r).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,w(this._element),this._element.classList.add(co),this._element.classList.remove(xs,Pi);for(const p of this._triggerArray){const v=B.getElementFromSelector(p);v&&!this._isShown(v)&&this._addAriaAndCollapsedClass([p],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(co),this._element.classList.add(xs),S.trigger(this._element,Lh)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(Pi)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=u(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(ho);for(const p of c){const v=B.getElementFromSelector(p);v&&this._addAriaAndCollapsedClass([p],this._isShown(v))}}_getFirstLevelChildren(c){const p=B.find(uo,this._config.parent);return B.find(c,this._config.parent).filter(v=>!p.includes(v))}_addAriaAndCollapsedClass(c,p){if(c.length)for(const v of c)v.classList.toggle("collapsed",!p),v.setAttribute("aria-expanded",p)}static jQueryInterface(c){const p={};return typeof c=="string"&&/show|hide/.test(c)&&(p.toggle=!1),this.each(function(){const v=In.getOrCreateInstance(this,p);if(typeof c=="string"){if(v[c]===void 0)throw new TypeError(`No method named "${c}"`);v[c]()}})}}S.on(document,Vh,ho,function(_){(_.target.tagName==="A"||_.delegateTarget&&_.delegateTarget.tagName==="A")&&_.preventDefault();for(const c of B.getMultipleElementsFromSelector(this))In.getOrCreateInstance(c,{toggle:!1}).toggle()}),Y(In);var Ht="top",un="bottom",en="right",$t="left",yr="auto",ss=[Ht,un,en,$t],rs="start",ui="end",ba="clippingParents",vr="viewport",Jn="popper",ki="reference",Er=ss.reduce(function(_,c){return _.concat([c+"-"+rs,c+"-"+ui])},[]),Ta=[].concat(ss,[yr]).reduce(function(_,c){return _.concat([c,c+"-"+rs,c+"-"+ui])},[]),Ia="beforeRead",Aa="read",Ca="afterRead",po="beforeMain",mo="main",Sa="afterMain",Ra="beforeWrite",gc="write",_c="afterWrite",Pa=[Ia,Aa,Ca,po,mo,Sa,Ra,gc,_c];function jn(_){return _?(_.nodeName||"").toLowerCase():null}function An(_){if(_==null)return window;if(_.toString()!=="[object Window]"){var c=_.ownerDocument;return c&&c.defaultView||window}return _}function Cn(_){return _ instanceof An(_).Element||_ instanceof Element}function Rt(_){return _ instanceof An(_).HTMLElement||_ instanceof HTMLElement}function Ms(_){return typeof ShadowRoot<"u"&&(_ instanceof An(_).ShadowRoot||_ instanceof ShadowRoot)}const Ls={name:"applyStyles",enabled:!0,phase:"write",fn:function(_){var c=_.state;Object.keys(c.elements).forEach(function(p){var v=c.styles[p]||{},k=c.attributes[p]||{},D=c.elements[p];Rt(D)&&jn(D)&&(Object.assign(D.style,v),Object.keys(k).forEach(function($){var G=k[$];G===!1?D.removeAttribute($):D.setAttribute($,G===!0?"":G)}))})},effect:function(_){var c=_.state,p={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,p.popper),c.styles=p,c.elements.arrow&&Object.assign(c.elements.arrow.style,p.arrow),function(){Object.keys(c.elements).forEach(function(v){var k=c.elements[v],D=c.attributes[v]||{},$=Object.keys(c.styles.hasOwnProperty(v)?c.styles[v]:p[v]).reduce(function(G,se){return G[se]="",G},{});Rt(k)&&jn(k)&&(Object.assign(k.style,$),Object.keys(D).forEach(function(G){k.removeAttribute(G)}))})}},requires:["computeStyles"]};function Hn(_){return _.split("-")[0]}var Ke=Math.max,os=Math.min,Zn=Math.round;function as(){var _=navigator.userAgentData;return _!=null&&_.brands&&Array.isArray(_.brands)?_.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function yc(){return!/^((?!chrome|android).)*safari/i.test(as())}function ls(_,c,p){c===void 0&&(c=!1),p===void 0&&(p=!1);var v=_.getBoundingClientRect(),k=1,D=1;c&&Rt(_)&&(k=_.offsetWidth>0&&Zn(v.width)/_.offsetWidth||1,D=_.offsetHeight>0&&Zn(v.height)/_.offsetHeight||1);var $=(Cn(_)?An(_):window).visualViewport,G=!yc()&&p,se=(v.left+(G&&$?$.offsetLeft:0))/k,he=(v.top+(G&&$?$.offsetTop:0))/D,fe=v.width/k,ce=v.height/D;return{width:fe,height:ce,top:he,right:se+fe,bottom:he+ce,left:se,x:se,y:he}}function ka(_){var c=ls(_),p=_.offsetWidth,v=_.offsetHeight;return Math.abs(c.width-p)<=1&&(p=c.width),Math.abs(c.height-v)<=1&&(v=c.height),{x:_.offsetLeft,y:_.offsetTop,width:p,height:v}}function vc(_,c){var p=c.getRootNode&&c.getRootNode();if(_.contains(c))return!0;if(p&&Ms(p)){var v=c;do{if(v&&_.isSameNode(v))return!0;v=v.parentNode||v.host}while(v)}return!1}function hi(_){return An(_).getComputedStyle(_)}function Fh(_){return["table","td","th"].indexOf(jn(_))>=0}function Mn(_){return((Cn(_)?_.ownerDocument:_.document)||window.document).documentElement}function Wn(_){return jn(_)==="html"?_:_.assignedSlot||_.parentNode||(Ms(_)?_.host:null)||Mn(_)}function Na(_){return Rt(_)&&hi(_).position!=="fixed"?_.offsetParent:null}function Vs(_){for(var c=An(_),p=Na(_);p&&Fh(p)&&hi(p).position==="static";)p=Na(p);return p&&(jn(p)==="html"||jn(p)==="body"&&hi(p).position==="static")?c:p||function(v){var k=/firefox/i.test(as());if(/Trident/i.test(as())&&Rt(v)&&hi(v).position==="fixed")return null;var D=Wn(v);for(Ms(D)&&(D=D.host);Rt(D)&&["html","body"].indexOf(jn(D))<0;){var $=hi(D);if($.transform!=="none"||$.perspective!=="none"||$.contain==="paint"||["transform","perspective"].indexOf($.willChange)!==-1||k&&$.willChange==="filter"||k&&$.filter&&$.filter!=="none")return D;D=D.parentNode}return null}(_)||c}function go(_){return["top","bottom"].indexOf(_)>=0?"x":"y"}function ei(_,c,p){return Ke(_,os(c,p))}function Ec(_){return Object.assign({},{top:0,right:0,bottom:0,left:0},_)}function wc(_,c){return c.reduce(function(p,v){return p[v]=_,p},{})}const bc={name:"arrow",enabled:!0,phase:"main",fn:function(_){var c,p=_.state,v=_.name,k=_.options,D=p.elements.arrow,$=p.modifiersData.popperOffsets,G=Hn(p.placement),se=go(G),he=[$t,en].indexOf(G)>=0?"height":"width";if(D&&$){var fe=function(at,st){return Ec(typeof(at=typeof at=="function"?at(Object.assign({},st.rects,{placement:st.placement})):at)!="number"?at:wc(at,ss))}(k.padding,p),ce=ka(D),Ne=se==="y"?Ht:$t,Te=se==="y"?un:en,Se=p.rects.reference[he]+p.rects.reference[se]-$[se]-p.rects.popper[he],Ae=$[se]-p.rects.reference[se],Re=Vs(D),ot=Re?se==="y"?Re.clientHeight||0:Re.clientWidth||0:0,dt=Se/2-Ae/2,Fe=fe[Ne],Xe=ot-ce[he]-fe[Te],Me=ot/2-ce[he]/2+dt,Be=ei(Fe,Me,Xe),it=se;p.modifiersData[v]=((c={})[it]=Be,c.centerOffset=Be-Me,c)}},effect:function(_){var c=_.state,p=_.options.element,v=p===void 0?"[data-popper-arrow]":p;v!=null&&(typeof v!="string"||(v=c.elements.popper.querySelector(v)))&&vc(c.elements.popper,v)&&(c.elements.arrow=v)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Sn(_){return _.split("-")[1]}var Uh={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Tc(_){var c,p=_.popper,v=_.popperRect,k=_.placement,D=_.variation,$=_.offsets,G=_.position,se=_.gpuAcceleration,he=_.adaptive,fe=_.roundOffsets,ce=_.isFixed,Ne=$.x,Te=Ne===void 0?0:Ne,Se=$.y,Ae=Se===void 0?0:Se,Re=typeof fe=="function"?fe({x:Te,y:Ae}):{x:Te,y:Ae};Te=Re.x,Ae=Re.y;var ot=$.hasOwnProperty("x"),dt=$.hasOwnProperty("y"),Fe=$t,Xe=Ht,Me=window;if(he){var Be=Vs(p),it="clientHeight",at="clientWidth";Be===An(p)&&hi(Be=Mn(p)).position!=="static"&&G==="absolute"&&(it="scrollHeight",at="scrollWidth"),(k===Ht||(k===$t||k===en)&&D===ui)&&(Xe=un,Ae-=(ce&&Be===Me&&Me.visualViewport?Me.visualViewport.height:Be[it])-v.height,Ae*=se?1:-1),k!==$t&&(k!==Ht&&k!==un||D!==ui)||(Fe=en,Te-=(ce&&Be===Me&&Me.visualViewport?Me.visualViewport.width:Be[at])-v.width,Te*=se?1:-1)}var st,xt=Object.assign({position:G},he&&Uh),qn=fe===!0?function(fi,Pn){var ni=fi.x,ii=fi.y,Pt=Pn.devicePixelRatio||1;return{x:Zn(ni*Pt)/Pt||0,y:Zn(ii*Pt)/Pt||0}}({x:Te,y:Ae},An(p)):{x:Te,y:Ae};return Te=qn.x,Ae=qn.y,se?Object.assign({},xt,((st={})[Xe]=dt?"0":"",st[Fe]=ot?"0":"",st.transform=(Me.devicePixelRatio||1)<=1?"translate("+Te+"px, "+Ae+"px)":"translate3d("+Te+"px, "+Ae+"px, 0)",st)):Object.assign({},xt,((c={})[Xe]=dt?Ae+"px":"",c[Fe]=ot?Te+"px":"",c.transform="",c))}const Fs={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(_){var c=_.state,p=_.options,v=p.gpuAcceleration,k=v===void 0||v,D=p.adaptive,$=D===void 0||D,G=p.roundOffsets,se=G===void 0||G,he={placement:Hn(c.placement),variation:Sn(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:k,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,Tc(Object.assign({},he,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:$,roundOffsets:se})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,Tc(Object.assign({},he,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:se})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var cs={passive:!0};const _o={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(_){var c=_.state,p=_.instance,v=_.options,k=v.scroll,D=k===void 0||k,$=v.resize,G=$===void 0||$,se=An(c.elements.popper),he=[].concat(c.scrollParents.reference,c.scrollParents.popper);return D&&he.forEach(function(fe){fe.addEventListener("scroll",p.update,cs)}),G&&se.addEventListener("resize",p.update,cs),function(){D&&he.forEach(function(fe){fe.removeEventListener("scroll",p.update,cs)}),G&&se.removeEventListener("resize",p.update,cs)}},data:{}};var wr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ni(_){return _.replace(/left|right|bottom|top/g,function(c){return wr[c]})}var Ic={start:"end",end:"start"};function yo(_){return _.replace(/start|end/g,function(c){return Ic[c]})}function ht(_){var c=An(_);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function Oa(_){return ls(Mn(_)).left+ht(_).scrollLeft}function Da(_){var c=hi(_),p=c.overflow,v=c.overflowX,k=c.overflowY;return/auto|scroll|overlay|hidden/.test(p+k+v)}function xa(_){return["html","body","#document"].indexOf(jn(_))>=0?_.ownerDocument.body:Rt(_)&&Da(_)?_:xa(Wn(_))}function Us(_,c){var p;c===void 0&&(c=[]);var v=xa(_),k=v===((p=_.ownerDocument)==null?void 0:p.body),D=An(v),$=k?[D].concat(D.visualViewport||[],Da(v)?v:[]):v,G=c.concat($);return k?G:G.concat(Us(Wn($)))}function vo(_){return Object.assign({},_,{left:_.x,top:_.y,right:_.x+_.width,bottom:_.y+_.height})}function br(_,c,p){return c===vr?vo(function(v,k){var D=An(v),$=Mn(v),G=D.visualViewport,se=$.clientWidth,he=$.clientHeight,fe=0,ce=0;if(G){se=G.width,he=G.height;var Ne=yc();(Ne||!Ne&&k==="fixed")&&(fe=G.offsetLeft,ce=G.offsetTop)}return{width:se,height:he,x:fe+Oa(v),y:ce}}(_,p)):Cn(c)?function(v,k){var D=ls(v,!1,k==="fixed");return D.top=D.top+v.clientTop,D.left=D.left+v.clientLeft,D.bottom=D.top+v.clientHeight,D.right=D.left+v.clientWidth,D.width=v.clientWidth,D.height=v.clientHeight,D.x=D.left,D.y=D.top,D}(c,p):vo(function(v){var k,D=Mn(v),$=ht(v),G=(k=v.ownerDocument)==null?void 0:k.body,se=Ke(D.scrollWidth,D.clientWidth,G?G.scrollWidth:0,G?G.clientWidth:0),he=Ke(D.scrollHeight,D.clientHeight,G?G.scrollHeight:0,G?G.clientHeight:0),fe=-$.scrollLeft+Oa(v),ce=-$.scrollTop;return hi(G||D).direction==="rtl"&&(fe+=Ke(D.clientWidth,G?G.clientWidth:0)-se),{width:se,height:he,x:fe,y:ce}}(Mn(_)))}function Ma(_){var c,p=_.reference,v=_.element,k=_.placement,D=k?Hn(k):null,$=k?Sn(k):null,G=p.x+p.width/2-v.width/2,se=p.y+p.height/2-v.height/2;switch(D){case Ht:c={x:G,y:p.y-v.height};break;case un:c={x:G,y:p.y+p.height};break;case en:c={x:p.x+p.width,y:se};break;case $t:c={x:p.x-v.width,y:se};break;default:c={x:p.x,y:p.y}}var he=D?go(D):null;if(he!=null){var fe=he==="y"?"height":"width";switch($){case rs:c[he]=c[he]-(p[fe]/2-v[fe]/2);break;case ui:c[he]=c[he]+(p[fe]/2-v[fe]/2)}}return c}function hn(_,c){c===void 0&&(c={});var p=c,v=p.placement,k=v===void 0?_.placement:v,D=p.strategy,$=D===void 0?_.strategy:D,G=p.boundary,se=G===void 0?ba:G,he=p.rootBoundary,fe=he===void 0?vr:he,ce=p.elementContext,Ne=ce===void 0?Jn:ce,Te=p.altBoundary,Se=Te!==void 0&&Te,Ae=p.padding,Re=Ae===void 0?0:Ae,ot=Ec(typeof Re!="number"?Re:wc(Re,ss)),dt=Ne===Jn?ki:Jn,Fe=_.rects.popper,Xe=_.elements[Se?dt:Ne],Me=function(Pn,ni,ii,Pt){var Di=ni==="clippingParents"?function(ct){var kn=Us(Wn(ct)),si=["absolute","fixed"].indexOf(hi(ct).position)>=0&&Rt(ct)?Vs(ct):ct;return Cn(si)?kn.filter(function(Ws){return Cn(Ws)&&vc(Ws,si)&&jn(Ws)!=="body"}):[]}(Pn):[].concat(ni),xi=[].concat(Di,[ii]),Co=xi[0],Gt=xi.reduce(function(ct,kn){var si=br(Pn,kn,Pt);return ct.top=Ke(si.top,ct.top),ct.right=os(si.right,ct.right),ct.bottom=os(si.bottom,ct.bottom),ct.left=Ke(si.left,ct.left),ct},br(Pn,Co,Pt));return Gt.width=Gt.right-Gt.left,Gt.height=Gt.bottom-Gt.top,Gt.x=Gt.left,Gt.y=Gt.top,Gt}(Cn(Xe)?Xe:Xe.contextElement||Mn(_.elements.popper),se,fe,$),Be=ls(_.elements.reference),it=Ma({reference:Be,element:Fe,placement:k}),at=vo(Object.assign({},Fe,it)),st=Ne===Jn?at:Be,xt={top:Me.top-st.top+ot.top,bottom:st.bottom-Me.bottom+ot.bottom,left:Me.left-st.left+ot.left,right:st.right-Me.right+ot.right},qn=_.modifiersData.offset;if(Ne===Jn&&qn){var fi=qn[k];Object.keys(xt).forEach(function(Pn){var ni=[en,un].indexOf(Pn)>=0?1:-1,ii=[Ht,un].indexOf(Pn)>=0?"y":"x";xt[Pn]+=fi[ii]*ni})}return xt}function Ac(_,c){c===void 0&&(c={});var p=c,v=p.placement,k=p.boundary,D=p.rootBoundary,$=p.padding,G=p.flipVariations,se=p.allowedAutoPlacements,he=se===void 0?Ta:se,fe=Sn(v),ce=fe?G?Er:Er.filter(function(Se){return Sn(Se)===fe}):ss,Ne=ce.filter(function(Se){return he.indexOf(Se)>=0});Ne.length===0&&(Ne=ce);var Te=Ne.reduce(function(Se,Ae){return Se[Ae]=hn(_,{placement:Ae,boundary:k,rootBoundary:D,padding:$})[Hn(Ae)],Se},{});return Object.keys(Te).sort(function(Se,Ae){return Te[Se]-Te[Ae]})}const Cc={name:"flip",enabled:!0,phase:"main",fn:function(_){var c=_.state,p=_.options,v=_.name;if(!c.modifiersData[v]._skip){for(var k=p.mainAxis,D=k===void 0||k,$=p.altAxis,G=$===void 0||$,se=p.fallbackPlacements,he=p.padding,fe=p.boundary,ce=p.rootBoundary,Ne=p.altBoundary,Te=p.flipVariations,Se=Te===void 0||Te,Ae=p.allowedAutoPlacements,Re=c.options.placement,ot=Hn(Re),dt=se||(ot!==Re&&Se?function(ct){if(Hn(ct)===yr)return[];var kn=Ni(ct);return[yo(ct),kn,yo(kn)]}(Re):[Ni(Re)]),Fe=[Re].concat(dt).reduce(function(ct,kn){return ct.concat(Hn(kn)===yr?Ac(c,{placement:kn,boundary:fe,rootBoundary:ce,padding:he,flipVariations:Se,allowedAutoPlacements:Ae}):kn)},[]),Xe=c.rects.reference,Me=c.rects.popper,Be=new Map,it=!0,at=Fe[0],st=0;st<Fe.length;st++){var xt=Fe[st],qn=Hn(xt),fi=Sn(xt)===rs,Pn=[Ht,un].indexOf(qn)>=0,ni=Pn?"width":"height",ii=hn(c,{placement:xt,boundary:fe,rootBoundary:ce,altBoundary:Ne,padding:he}),Pt=Pn?fi?en:$t:fi?un:Ht;Xe[ni]>Me[ni]&&(Pt=Ni(Pt));var Di=Ni(Pt),xi=[];if(D&&xi.push(ii[qn]<=0),G&&xi.push(ii[Pt]<=0,ii[Di]<=0),xi.every(function(ct){return ct})){at=xt,it=!1;break}Be.set(xt,xi)}if(it)for(var Co=function(ct){var kn=Fe.find(function(si){var Ws=Be.get(si);if(Ws)return Ws.slice(0,ct).every(function(Vc){return Vc})});if(kn)return at=kn,"break"},Gt=Se?3:1;Gt>0&&Co(Gt)!=="break";Gt--);c.placement!==at&&(c.modifiersData[v]._skip=!0,c.placement=at,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function $s(_,c,p){return p===void 0&&(p={x:0,y:0}),{top:_.top-c.height-p.y,right:_.right-c.width+p.x,bottom:_.bottom-c.height+p.y,left:_.left-c.width-p.x}}function La(_){return[Ht,en,un,$t].some(function(c){return _[c]>=0})}const Eo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(_){var c=_.state,p=_.name,v=c.rects.reference,k=c.rects.popper,D=c.modifiersData.preventOverflow,$=hn(c,{elementContext:"reference"}),G=hn(c,{altBoundary:!0}),se=$s($,v),he=$s(G,k,D),fe=La(se),ce=La(he);c.modifiersData[p]={referenceClippingOffsets:se,popperEscapeOffsets:he,isReferenceHidden:fe,hasPopperEscaped:ce},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":fe,"data-popper-escaped":ce})}},Tr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(_){var c=_.state,p=_.options,v=_.name,k=p.offset,D=k===void 0?[0,0]:k,$=Ta.reduce(function(fe,ce){return fe[ce]=function(Ne,Te,Se){var Ae=Hn(Ne),Re=[$t,Ht].indexOf(Ae)>=0?-1:1,ot=typeof Se=="function"?Se(Object.assign({},Te,{placement:Ne})):Se,dt=ot[0],Fe=ot[1];return dt=dt||0,Fe=(Fe||0)*Re,[$t,en].indexOf(Ae)>=0?{x:Fe,y:dt}:{x:dt,y:Fe}}(ce,c.rects,D),fe},{}),G=$[c.placement],se=G.x,he=G.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=se,c.modifiersData.popperOffsets.y+=he),c.modifiersData[v]=$}},wo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(_){var c=_.state,p=_.name;c.modifiersData[p]=Ma({reference:c.rects.reference,element:c.rects.popper,placement:c.placement})},data:{}},Ir={name:"preventOverflow",enabled:!0,phase:"main",fn:function(_){var c=_.state,p=_.options,v=_.name,k=p.mainAxis,D=k===void 0||k,$=p.altAxis,G=$!==void 0&&$,se=p.boundary,he=p.rootBoundary,fe=p.altBoundary,ce=p.padding,Ne=p.tether,Te=Ne===void 0||Ne,Se=p.tetherOffset,Ae=Se===void 0?0:Se,Re=hn(c,{boundary:se,rootBoundary:he,padding:ce,altBoundary:fe}),ot=Hn(c.placement),dt=Sn(c.placement),Fe=!dt,Xe=go(ot),Me=Xe==="x"?"y":"x",Be=c.modifiersData.popperOffsets,it=c.rects.reference,at=c.rects.popper,st=typeof Ae=="function"?Ae(Object.assign({},c.rects,{placement:c.placement})):Ae,xt=typeof st=="number"?{mainAxis:st,altAxis:st}:Object.assign({mainAxis:0,altAxis:0},st),qn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,fi={x:0,y:0};if(Be){if(D){var Pn,ni=Xe==="y"?Ht:$t,ii=Xe==="y"?un:en,Pt=Xe==="y"?"height":"width",Di=Be[Xe],xi=Di+Re[ni],Co=Di-Re[ii],Gt=Te?-at[Pt]/2:0,ct=dt===rs?it[Pt]:at[Pt],kn=dt===rs?-at[Pt]:-it[Pt],si=c.elements.arrow,Ws=Te&&si?ka(si):{width:0,height:0},Vc=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Mm=Vc[ni],Lm=Vc[ii],Fc=ei(0,it[Pt],Ws[Pt]),tA=Fe?it[Pt]/2-Gt-Fc-Mm-xt.mainAxis:ct-Fc-Mm-xt.mainAxis,nA=Fe?-it[Pt]/2+Gt+Fc+Lm+xt.mainAxis:kn+Fc+Lm+xt.mainAxis,Jh=c.elements.arrow&&Vs(c.elements.arrow),iA=Jh?Xe==="y"?Jh.clientTop||0:Jh.clientLeft||0:0,Vm=(Pn=qn?.[Xe])!=null?Pn:0,sA=Di+nA-Vm,Fm=ei(Te?os(xi,Di+tA-Vm-iA):xi,Di,Te?Ke(Co,sA):Co);Be[Xe]=Fm,fi[Xe]=Fm-Di}if(G){var Um,rA=Xe==="x"?Ht:$t,oA=Xe==="x"?un:en,Dr=Be[Me],Uc=Me==="y"?"height":"width",$m=Dr+Re[rA],Bm=Dr-Re[oA],Zh=[Ht,$t].indexOf(ot)!==-1,jm=(Um=qn?.[Me])!=null?Um:0,Hm=Zh?$m:Dr-it[Uc]-at[Uc]-jm+xt.altAxis,Wm=Zh?Dr+it[Uc]+at[Uc]-jm-xt.altAxis:Bm,qm=Te&&Zh?function(aA,lA,ed){var zm=ei(aA,lA,ed);return zm>ed?ed:zm}(Hm,Dr,Wm):ei(Te?Hm:$m,Dr,Te?Wm:Bm);Be[Me]=qm,fi[Me]=qm-Dr}c.modifiersData[v]=fi}},requiresIfExists:["offset"]};function $h(_,c,p){p===void 0&&(p=!1);var v,k,D=Rt(c),$=Rt(c)&&function(ce){var Ne=ce.getBoundingClientRect(),Te=Zn(Ne.width)/ce.offsetWidth||1,Se=Zn(Ne.height)/ce.offsetHeight||1;return Te!==1||Se!==1}(c),G=Mn(c),se=ls(_,$,p),he={scrollLeft:0,scrollTop:0},fe={x:0,y:0};return(D||!D&&!p)&&((jn(c)!=="body"||Da(G))&&(he=(v=c)!==An(v)&&Rt(v)?{scrollLeft:(k=v).scrollLeft,scrollTop:k.scrollTop}:ht(v)),Rt(c)?((fe=ls(c,!0)).x+=c.clientLeft,fe.y+=c.clientTop):G&&(fe.x=Oa(G))),{x:se.left+he.scrollLeft-fe.x,y:se.top+he.scrollTop-fe.y,width:se.width,height:se.height}}function Sc(_){var c=new Map,p=new Set,v=[];function k(D){p.add(D.name),[].concat(D.requires||[],D.requiresIfExists||[]).forEach(function($){if(!p.has($)){var G=c.get($);G&&k(G)}}),v.push(D)}return _.forEach(function(D){c.set(D.name,D)}),_.forEach(function(D){p.has(D.name)||k(D)}),v}var Bs={placement:"bottom",modifiers:[],strategy:"absolute"};function Va(){for(var _=arguments.length,c=new Array(_),p=0;p<_;p++)c[p]=arguments[p];return!c.some(function(v){return!(v&&typeof v.getBoundingClientRect=="function")})}function Ar(_){_===void 0&&(_={});var c=_,p=c.defaultModifiers,v=p===void 0?[]:p,k=c.defaultOptions,D=k===void 0?Bs:k;return function($,G,se){se===void 0&&(se=D);var he,fe,ce={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bs,D),modifiersData:{},elements:{reference:$,popper:G},attributes:{},styles:{}},Ne=[],Te=!1,Se={state:ce,setOptions:function(Re){var ot=typeof Re=="function"?Re(ce.options):Re;Ae(),ce.options=Object.assign({},D,ce.options,ot),ce.scrollParents={reference:Cn($)?Us($):$.contextElement?Us($.contextElement):[],popper:Us(G)};var dt,Fe,Xe=function(Me){var Be=Sc(Me);return Pa.reduce(function(it,at){return it.concat(Be.filter(function(st){return st.phase===at}))},[])}((dt=[].concat(v,ce.options.modifiers),Fe=dt.reduce(function(Me,Be){var it=Me[Be.name];return Me[Be.name]=it?Object.assign({},it,Be,{options:Object.assign({},it.options,Be.options),data:Object.assign({},it.data,Be.data)}):Be,Me},{}),Object.keys(Fe).map(function(Me){return Fe[Me]})));return ce.orderedModifiers=Xe.filter(function(Me){return Me.enabled}),ce.orderedModifiers.forEach(function(Me){var Be=Me.name,it=Me.options,at=it===void 0?{}:it,st=Me.effect;if(typeof st=="function"){var xt=st({state:ce,name:Be,instance:Se,options:at});Ne.push(xt||function(){})}}),Se.update()},forceUpdate:function(){if(!Te){var Re=ce.elements,ot=Re.reference,dt=Re.popper;if(Va(ot,dt)){ce.rects={reference:$h(ot,Vs(dt),ce.options.strategy==="fixed"),popper:ka(dt)},ce.reset=!1,ce.placement=ce.options.placement,ce.orderedModifiers.forEach(function(st){return ce.modifiersData[st.name]=Object.assign({},st.data)});for(var Fe=0;Fe<ce.orderedModifiers.length;Fe++)if(ce.reset!==!0){var Xe=ce.orderedModifiers[Fe],Me=Xe.fn,Be=Xe.options,it=Be===void 0?{}:Be,at=Xe.name;typeof Me=="function"&&(ce=Me({state:ce,options:it,name:at,instance:Se})||ce)}else ce.reset=!1,Fe=-1}}},update:(he=function(){return new Promise(function(Re){Se.forceUpdate(),Re(ce)})},function(){return fe||(fe=new Promise(function(Re){Promise.resolve().then(function(){fe=void 0,Re(he())})})),fe}),destroy:function(){Ae(),Te=!0}};if(!Va($,G))return Se;function Ae(){Ne.forEach(function(Re){return Re()}),Ne=[]}return Se.setOptions(se).then(function(Re){!Te&&se.onFirstUpdate&&se.onFirstUpdate(Re)}),Se}}var Fa=Ar(),Ua=Ar({defaultModifiers:[_o,wo,Fs,Ls]}),bo=Ar({defaultModifiers:[_o,wo,Fs,Ls,Tr,Cc,Ir,bc,Eo]});const Cr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Sa,afterRead:Ca,afterWrite:_c,applyStyles:Ls,arrow:bc,auto:yr,basePlacements:ss,beforeMain:po,beforeRead:Ia,beforeWrite:Ra,bottom:un,clippingParents:ba,computeStyles:Fs,createPopper:bo,createPopperBase:Fa,createPopperLite:Ua,detectOverflow:hn,end:ui,eventListeners:_o,flip:Cc,hide:Eo,left:$t,main:mo,modifierPhases:Pa,offset:Tr,placements:Ta,popper:Jn,popperGenerator:Ar,popperOffsets:wo,preventOverflow:Ir,read:Aa,reference:ki,right:en,start:rs,top:Ht,variationPlacements:Er,viewport:vr,write:gc},Symbol.toStringTag,{value:"Module"})),$a="dropdown",Oi=".bs.dropdown",di=".data-api",Rc="ArrowUp",Ba="ArrowDown",Pc=`hide${Oi}`,kc=`hidden${Oi}`,To=`show${Oi}`,Rn=`shown${Oi}`,ja=`click${Oi}${di}`,Ha=`keydown${Oi}${di}`,js=`keyup${Oi}${di}`,a="show",d='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',g=`${d}.${a}`,E=".dropdown-menu",L=F()?"top-end":"top-start",U=F()?"top-start":"top-end",ie=F()?"bottom-end":"bottom-start",nt=F()?"bottom-start":"bottom-end",Bt=F()?"left-start":"right-start",We=F()?"right-start":"left-start",Wt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},qt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class zt extends rt{constructor(c,p){super(c,p),this._popper=null,this._parent=this._element.parentNode,this._menu=B.next(this._element,E)[0]||B.prev(this._element,E)[0]||B.findOne(E,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Wt}static get DefaultType(){return qt}static get NAME(){return $a}toggle(){return this._isShown()?this.hide():this.show()}show(){if(f(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!S.trigger(this._element,To,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const p of[].concat(...document.body.children))S.on(p,"mouseover",y);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(a),this._element.classList.add(a),S.trigger(this._element,Rn,c)}}hide(){if(f(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!S.trigger(this._element,Pc,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))S.off(p,"mouseover",y);this._popper&&this._popper.destroy(),this._menu.classList.remove(a),this._element.classList.remove(a),this._element.setAttribute("aria-expanded","false"),St.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,kc,c),this._element.focus()}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!l(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Cr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let c=this._element;this._config.reference==="parent"?c=this._parent:l(this._config.reference)?c=u(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const p=this._getPopperConfig();this._popper=bo(c,this._menu,p)}_isShown(){return this._menu.classList.contains(a)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return Bt;if(c.classList.contains("dropstart"))return We;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const p=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?p?U:L:p?nt:ie}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(St.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...z(this._config.popperConfig,[void 0,c])}}_selectMenuItem({key:c,target:p}){const v=B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(k=>h(k));v.length&&Q(v,p,c===Ba,!v.includes(p)).focus()}static jQueryInterface(c){return this.each(function(){const p=zt.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const p=B.find(g);for(const v of p){const k=zt.getInstance(v);if(!k||k._config.autoClose===!1)continue;const D=c.composedPath(),$=D.includes(k._menu);if(D.includes(k._element)||k._config.autoClose==="inside"&&!$||k._config.autoClose==="outside"&&$||k._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const G={relatedTarget:k._element};c.type==="click"&&(G.clickEvent=c),k._completeHide(G)}}static dataApiKeydownHandler(c){const p=/input|textarea/i.test(c.target.tagName),v=c.key==="Escape",k=[Rc,Ba].includes(c.key);if(!k&&!v||p&&!v)return;c.preventDefault();const D=this.matches(d)?this:B.prev(this,d)[0]||B.next(this,d)[0]||B.findOne(d,c.delegateTarget.parentNode),$=zt.getOrCreateInstance(D);if(k)return c.stopPropagation(),$.show(),void $._selectMenuItem(c);$._isShown()&&(c.stopPropagation(),$.hide(),D.focus())}}S.on(document,Ha,d,zt.dataApiKeydownHandler),S.on(document,Ha,E,zt.dataApiKeydownHandler),S.on(document,ja,zt.clearMenus),S.on(document,js,zt.clearMenus),S.on(document,ja,d,function(_){_.preventDefault(),zt.getOrCreateInstance(this).toggle()}),Y(zt);const Ln="backdrop",Sr="show",Io=`mousedown.bs.${Ln}`,HT={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},WT={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class om extends jt{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return HT}static get DefaultType(){return WT}static get NAME(){return Ln}show(c){if(!this._config.isVisible)return void z(c);this._append();const p=this._getElement();this._config.isAnimated&&w(p),p.classList.add(Sr),this._emulateAnimation(()=>{z(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(Sr),this._emulateAnimation(()=>{this.dispose(),z(c)})):z(c)}dispose(){this._isAppended&&(S.off(this._element,Io),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=u(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),S.on(c,Io,()=>{z(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){X(c,this._getElement(),this._config.isAnimated)}}const Nc=".bs.focustrap",qT=`focusin${Nc}`,zT=`keydown.tab${Nc}`,am="backward",GT={autofocus:!0,trapElement:null},KT={autofocus:"boolean",trapElement:"element"};class lm extends jt{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return GT}static get DefaultType(){return KT}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Nc),S.on(document,qT,c=>this._handleFocusin(c)),S.on(document,zT,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Nc))}_handleFocusin(c){const{trapElement:p}=this._config;if(c.target===document||c.target===p||p.contains(c.target))return;const v=B.focusableChildren(p);v.length===0?p.focus():this._lastTabNavDirection===am?v[v.length-1].focus():v[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?am:"forward")}}const cm=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",um=".sticky-top",Oc="padding-right",hm="margin-right";class Bh{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Oc,p=>p+c),this._setElementAttributes(cm,Oc,p=>p+c),this._setElementAttributes(um,hm,p=>p-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Oc),this._resetElementAttributes(cm,Oc),this._resetElementAttributes(um,hm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,p,v){const k=this.getWidth();this._applyManipulationCallback(c,D=>{if(D!==this._element&&window.innerWidth>D.clientWidth+k)return;this._saveInitialAttribute(D,p);const $=window.getComputedStyle(D).getPropertyValue(p);D.style.setProperty(p,`${v(Number.parseFloat($))}px`)})}_saveInitialAttribute(c,p){const v=c.style.getPropertyValue(p);v&&St.setDataAttribute(c,p,v)}_resetElementAttributes(c,p){this._applyManipulationCallback(c,v=>{const k=St.getDataAttribute(v,p);k!==null?(St.removeDataAttribute(v,p),v.style.setProperty(p,k)):v.style.removeProperty(p)})}_applyManipulationCallback(c,p){if(l(c))p(c);else for(const v of B.find(c,this._element))p(v)}}const ti=".bs.modal",QT=`hide${ti}`,YT=`hidePrevented${ti}`,dm=`hidden${ti}`,fm=`show${ti}`,XT=`shown${ti}`,JT=`resize${ti}`,ZT=`click.dismiss${ti}`,eI=`mousedown.dismiss${ti}`,tI=`keydown.dismiss${ti}`,nI=`click${ti}.data-api`,pm="modal-open",mm="show",jh="modal-static",iI={backdrop:!0,focus:!0,keyboard:!0},sI={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Rr extends rt{constructor(c,p){super(c,p),this._dialog=B.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Bh,this._addEventListeners()}static get Default(){return iI}static get DefaultType(){return sI}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||S.trigger(this._element,fm,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(pm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(S.trigger(this._element,QT).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(mm),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){S.off(window,ti),S.off(this._dialog,ti),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new om({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new lm({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const p=B.findOne(".modal-body",this._dialog);p&&(p.scrollTop=0),w(this._element),this._element.classList.add(mm),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,XT,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,tI,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),S.on(window,JT,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,eI,c=>{S.one(this._element,ZT,p=>{this._element===c.target&&this._element===p.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(pm),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,dm)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(S.trigger(this._element,YT).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==="hidden"||this._element.classList.contains(jh)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(jh),this._queueCallback(()=>{this._element.classList.remove(jh),this._queueCallback(()=>{this._element.style.overflowY=p},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,p=this._scrollBar.getWidth(),v=p>0;if(v&&!c){const k=F()?"paddingLeft":"paddingRight";this._element.style[k]=`${p}px`}if(!v&&c){const k=F()?"paddingRight":"paddingLeft";this._element.style[k]=`${p}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,p){return this.each(function(){const v=Rr.getOrCreateInstance(this,c);if(typeof c=="string"){if(v[c]===void 0)throw new TypeError(`No method named "${c}"`);v[c](p)}})}}S.on(document,nI,'[data-bs-toggle="modal"]',function(_){const c=B.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&_.preventDefault(),S.one(c,fm,v=>{v.defaultPrevented||S.one(c,dm,()=>{h(this)&&this.focus()})});const p=B.findOne(".modal.show");p&&Rr.getInstance(p).hide(),Rr.getOrCreateInstance(c).toggle(this)}),re(Rr),Y(Rr);const us=".bs.offcanvas",gm=".data-api",rI=`load${us}${gm}`,_m="show",ym="showing",vm="hiding",Em=".offcanvas.show",oI=`show${us}`,aI=`shown${us}`,lI=`hide${us}`,wm=`hidePrevented${us}`,bm=`hidden${us}`,cI=`resize${us}`,uI=`click${us}${gm}`,hI=`keydown.dismiss${us}`,dI={backdrop:!0,keyboard:!0,scroll:!1},fI={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class hs extends rt{constructor(c,p){super(c,p),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return dI}static get DefaultType(){return fI}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||S.trigger(this._element,oI,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Bh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ym),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_m),this._element.classList.remove(ym),S.trigger(this._element,aI,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(S.trigger(this._element,lI).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(vm),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(_m,vm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Bh().reset(),S.trigger(this._element,bm)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new om({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():S.trigger(this._element,wm)}:null})}_initializeFocusTrap(){return new lm({trapElement:this._element})}_addEventListeners(){S.on(this._element,hI,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():S.trigger(this._element,wm))})}static jQueryInterface(c){return this.each(function(){const p=hs.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c](this)}})}}S.on(document,uI,'[data-bs-toggle="offcanvas"]',function(_){const c=B.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),f(this))return;S.one(c,bm,()=>{h(this)&&this.focus()});const p=B.findOne(Em);p&&p!==c&&hs.getInstance(p).hide(),hs.getOrCreateInstance(c).toggle(this)}),S.on(window,rI,()=>{for(const _ of B.find(Em))hs.getOrCreateInstance(_).show()}),S.on(window,cI,()=>{for(const _ of B.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(_).position!=="fixed"&&hs.getOrCreateInstance(_).hide()}),re(hs),Y(hs);const Tm={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},pI=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),mI=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,gI=(_,c)=>{const p=_.nodeName.toLowerCase();return c.includes(p)?!pI.has(p)||!!mI.test(_.nodeValue):c.filter(v=>v instanceof RegExp).some(v=>v.test(p))},_I={allowList:Tm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},yI={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},vI={entry:"(string|element|function|null)",selector:"(string|element)"};class EI extends jt{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return _I}static get DefaultType(){return yI}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[k,D]of Object.entries(this._config.content))this._setContent(c,D,k);const p=c.children[0],v=this._resolvePossibleFunction(this._config.extraClass);return v&&p.classList.add(...v.split(" ")),p}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[p,v]of Object.entries(c))super._typeCheckConfig({selector:p,entry:v},vI)}_setContent(c,p,v){const k=B.findOne(v,c);k&&((p=this._resolvePossibleFunction(p))?l(p)?this._putElementInTemplate(u(p),k):this._config.html?k.innerHTML=this._maybeSanitize(p):k.textContent=p:k.remove())}_maybeSanitize(c){return this._config.sanitize?function(p,v,k){if(!p.length)return p;if(k&&typeof k=="function")return k(p);const D=new window.DOMParser().parseFromString(p,"text/html"),$=[].concat(...D.body.querySelectorAll("*"));for(const G of $){const se=G.nodeName.toLowerCase();if(!Object.keys(v).includes(se)){G.remove();continue}const he=[].concat(...G.attributes),fe=[].concat(v["*"]||[],v[se]||[]);for(const ce of he)gI(ce,fe)||G.removeAttribute(ce.nodeName)}return D.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return z(c,[void 0,this])}_putElementInTemplate(c,p){if(this._config.html)return p.innerHTML="",void p.append(c);p.textContent=c.textContent}}const wI=new Set(["sanitize","allowList","sanitizeFn"]),Hh="fade",Dc="show",bI=".tooltip-inner",Im=".modal",Am="hide.bs.modal",Wa="hover",Wh="focus",qh="click",TI={AUTO:"auto",TOP:"top",RIGHT:F()?"left":"right",BOTTOM:"bottom",LEFT:F()?"right":"left"},II={allowList:Tm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},AI={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Pr extends rt{constructor(c,p){if(Cr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(c,p),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return II}static get DefaultType(){return AI}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(Im),Am,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=S.trigger(this._element,this.constructor.eventName("show")),p=(m(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!p)return;this._disposePopper();const v=this._getTipElement();this._element.setAttribute("aria-describedby",v.getAttribute("id"));const{container:k}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(k.append(v),S.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(v),v.classList.add(Dc),"ontouchstart"in document.documentElement)for(const D of[].concat(...document.body.children))S.on(D,"mouseover",y);this._queueCallback(()=>{S.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!S.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Dc),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))S.off(c,"mouseover",y);this._activeTrigger[qh]=!1,this._activeTrigger[Wh]=!1,this._activeTrigger[Wa]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const p=this._getTemplateFactory(c).toHtml();if(!p)return null;p.classList.remove(Hh,Dc),p.classList.add(`bs-${this.constructor.NAME}-auto`);const v=(k=>{do k+=Math.floor(1e6*Math.random());while(document.getElementById(k));return k})(this.constructor.NAME).toString();return p.setAttribute("id",v),this._isAnimated()&&p.classList.add(Hh),p}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new EI({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[bI]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Hh)}_isShown(){return this.tip&&this.tip.classList.contains(Dc)}_createPopper(c){const p=z(this._config.placement,[this,c,this._element]),v=TI[p.toUpperCase()];return bo(this._element,c,this._getPopperConfig(v))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(p=>Number.parseInt(p,10)):typeof c=="function"?p=>c(p,this._element):c}_resolvePossibleFunction(c){return z(c,[this._element,this._element])}_getPopperConfig(c){const p={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:v=>{this._getTipElement().setAttribute("data-popper-placement",v.state.placement)}}]};return{...p,...z(this._config.popperConfig,[void 0,p])}}_setListeners(){const c=this._config.trigger.split(" ");for(const p of c)if(p==="click")S.on(this._element,this.constructor.eventName("click"),this._config.selector,v=>{const k=this._initializeOnDelegatedTarget(v);k._activeTrigger[qh]=!(k._isShown()&&k._activeTrigger[qh]),k.toggle()});else if(p!=="manual"){const v=p===Wa?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),k=p===Wa?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");S.on(this._element,v,this._config.selector,D=>{const $=this._initializeOnDelegatedTarget(D);$._activeTrigger[D.type==="focusin"?Wh:Wa]=!0,$._enter()}),S.on(this._element,k,this._config.selector,D=>{const $=this._initializeOnDelegatedTarget(D);$._activeTrigger[D.type==="focusout"?Wh:Wa]=$._element.contains(D.relatedTarget),$._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(Im),Am,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,p){clearTimeout(this._timeout),this._timeout=setTimeout(c,p)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const p=St.getDataAttributes(this._element);for(const v of Object.keys(p))wI.has(v)&&delete p[v];return c={...p,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:u(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[p,v]of Object.entries(this._config))this.constructor.Default[p]!==v&&(c[p]=v);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const p=Pr.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}}Y(Pr);const CI=".popover-header",SI=".popover-body",RI={...Pr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},PI={...Pr.DefaultType,content:"(null|string|element|function)"};class xc extends Pr{static get Default(){return RI}static get DefaultType(){return PI}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[CI]:this._getTitle(),[SI]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const p=xc.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c]()}})}}Y(xc);const zh=".bs.scrollspy",kI=`activate${zh}`,Cm=`click${zh}`,NI=`load${zh}.data-api`,Ao="active",Gh="[href]",Sm=".nav-link",OI=`${Sm}, .nav-item > ${Sm}, .list-group-item`,DI={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},xI={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class qa extends rt{constructor(c,p){super(c,p),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return DI}static get DefaultType(){return xI}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=u(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(p=>Number.parseFloat(p))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,Cm),S.on(this._config.target,Cm,Gh,c=>{const p=this._observableSections.get(c.target.hash);if(p){c.preventDefault();const v=this._rootElement||window,k=p.offsetTop-this._element.offsetTop;if(v.scrollTo)return void v.scrollTo({top:k,behavior:"smooth"});v.scrollTop=k}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(p=>this._observerCallback(p),c)}_observerCallback(c){const p=$=>this._targetLinks.get(`#${$.target.id}`),v=$=>{this._previousScrollData.visibleEntryTop=$.target.offsetTop,this._process(p($))},k=(this._rootElement||document.documentElement).scrollTop,D=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const $ of c){if(!$.isIntersecting){this._activeTarget=null,this._clearActiveClass(p($));continue}const G=$.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(D&&G){if(v($),!k)return}else D||G||v($)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=B.find(Gh,this._config.target);for(const p of c){if(!p.hash||f(p))continue;const v=B.findOne(decodeURI(p.hash),this._element);h(v)&&(this._targetLinks.set(decodeURI(p.hash),p),this._observableSections.set(p.hash,v))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(Ao),this._activateParents(c),S.trigger(this._element,kI,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))B.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(Ao);else for(const p of B.parents(c,".nav, .list-group"))for(const v of B.prev(p,OI))v.classList.add(Ao)}_clearActiveClass(c){c.classList.remove(Ao);const p=B.find(`${Gh}.${Ao}`,c);for(const v of p)v.classList.remove(Ao)}static jQueryInterface(c){return this.each(function(){const p=qa.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}S.on(window,NI,()=>{for(const _ of B.find('[data-bs-spy="scroll"]'))qa.getOrCreateInstance(_)}),Y(qa);const kr=".bs.tab",MI=`hide${kr}`,LI=`hidden${kr}`,VI=`show${kr}`,FI=`shown${kr}`,UI=`click${kr}`,$I=`keydown${kr}`,BI=`load${kr}`,jI="ArrowLeft",Rm="ArrowRight",HI="ArrowUp",Pm="ArrowDown",Kh="Home",km="End",Nr="active",Nm="fade",Qh="show",Om=".dropdown-toggle",Yh=`:not(${Om})`,Dm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Xh=`.nav-link${Yh}, .list-group-item${Yh}, [role="tab"]${Yh}, ${Dm}`,WI=`.${Nr}[data-bs-toggle="tab"], .${Nr}[data-bs-toggle="pill"], .${Nr}[data-bs-toggle="list"]`;class Or extends rt{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,$I,p=>this._keydown(p)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const p=this._getActiveElem(),v=p?S.trigger(p,MI,{relatedTarget:c}):null;S.trigger(c,VI,{relatedTarget:p}).defaultPrevented||v&&v.defaultPrevented||(this._deactivate(p,c),this._activate(c,p))}_activate(c,p){c&&(c.classList.add(Nr),this._activate(B.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),S.trigger(c,FI,{relatedTarget:p})):c.classList.add(Qh)},c,c.classList.contains(Nm)))}_deactivate(c,p){c&&(c.classList.remove(Nr),c.blur(),this._deactivate(B.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),S.trigger(c,LI,{relatedTarget:p})):c.classList.remove(Qh)},c,c.classList.contains(Nm)))}_keydown(c){if(![jI,Rm,HI,Pm,Kh,km].includes(c.key))return;c.stopPropagation(),c.preventDefault();const p=this._getChildren().filter(k=>!f(k));let v;if([Kh,km].includes(c.key))v=p[c.key===Kh?0:p.length-1];else{const k=[Rm,Pm].includes(c.key);v=Q(p,c.target,k,!0)}v&&(v.focus({preventScroll:!0}),Or.getOrCreateInstance(v).show())}_getChildren(){return B.find(Xh,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,p){this._setAttributeIfNotExists(c,"role","tablist");for(const v of p)this._setInitialAttributesOnChild(v)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const p=this._elemIsActive(c),v=this._getOuterElement(c);c.setAttribute("aria-selected",p),v!==c&&this._setAttributeIfNotExists(v,"role","presentation"),p||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const p=B.getElementFromSelector(c);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,p){const v=this._getOuterElement(c);if(!v.classList.contains("dropdown"))return;const k=(D,$)=>{const G=B.findOne(D,v);G&&G.classList.toggle($,p)};k(Om,Nr),k(".dropdown-menu",Qh),v.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(c,p,v){c.hasAttribute(p)||c.setAttribute(p,v)}_elemIsActive(c){return c.classList.contains(Nr)}_getInnerElement(c){return c.matches(Xh)?c:B.findOne(Xh,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const p=Or.getOrCreateInstance(this);if(typeof c=="string"){if(p[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);p[c]()}})}}S.on(document,UI,Dm,function(_){["A","AREA"].includes(this.tagName)&&_.preventDefault(),f(this)||Or.getOrCreateInstance(this).show()}),S.on(window,BI,()=>{for(const _ of B.find(WI))Or.getOrCreateInstance(_)}),Y(Or);const Hs=".bs.toast",qI=`mouseover${Hs}`,zI=`mouseout${Hs}`,GI=`focusin${Hs}`,KI=`focusout${Hs}`,QI=`hide${Hs}`,YI=`hidden${Hs}`,XI=`show${Hs}`,JI=`shown${Hs}`,xm="hide",Mc="show",Lc="showing",ZI={animation:"boolean",autohide:"boolean",delay:"number"},eA={animation:!0,autohide:!0,delay:5e3};class za extends rt{constructor(c,p){super(c,p),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return eA}static get DefaultType(){return ZI}static get NAME(){return"toast"}show(){S.trigger(this._element,XI).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(xm),w(this._element),this._element.classList.add(Mc,Lc),this._queueCallback(()=>{this._element.classList.remove(Lc),S.trigger(this._element,JI),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(S.trigger(this._element,QI).defaultPrevented||(this._element.classList.add(Lc),this._queueCallback(()=>{this._element.classList.add(xm),this._element.classList.remove(Lc,Mc),S.trigger(this._element,YI)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Mc),super.dispose()}isShown(){return this._element.classList.contains(Mc)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,p){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=p;break;case"focusin":case"focusout":this._hasKeyboardInteraction=p}if(p)return void this._clearTimeout();const v=c.relatedTarget;this._element===v||this._element.contains(v)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,qI,c=>this._onInteraction(c,!0)),S.on(this._element,zI,c=>this._onInteraction(c,!1)),S.on(this._element,GI,c=>this._onInteraction(c,!0)),S.on(this._element,KI,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const p=za.getOrCreateInstance(this,c);if(typeof c=="string"){if(p[c]===void 0)throw new TypeError(`No method named "${c}"`);p[c](this)}})}}return re(za),Y(za),{Alert:I,Button:j,Carousel:is,Collapse:In,Dropdown:zt,Modal:Rr,Offcanvas:hs,Popover:xc,ScrollSpy:qa,Tab:Or,Toast:za,Tooltip:Pr}})}(su)),su.exports}uA();const hA=()=>{};var Km={};/**
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
 */const Xy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const le=function(t,e){if(!t)throw la(e)},la=function(t){return new Error("Firebase Database ("+Xy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Jy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dA=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=r>>2,m=(r&3)<<4|l>>4;let y=(l&15)<<2|h>>6,w=h&63;u||(w=64,o||(y=64)),i.push(n[f],n[m],n[y],n[w])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||h==null||m==null)throw new fA;const y=r<<2|l>>4;if(i.push(y),h!==64){const w=l<<4&240|h>>2;if(i.push(w),m!==64){const N=h<<6&192|m;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zy=function(t){const e=Jy(t);return rh.encodeByteArray(e,!0)},vu=function(t){return Zy(t).replace(/\./g,"")},Eu=function(t){try{return rh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pA(t){return ev(void 0,t)}function ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mA(n)||(t[n]=ev(t[n],e[n]));return t}function mA(t){return t!=="__proto__"}/**
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
 */function gA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _A=()=>gA().__FIREBASE_DEFAULTS__,yA=()=>{if(typeof process>"u"||typeof Km>"u")return;const t=Km.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Eu(t[1]);return e&&JSON.parse(e)},oh=()=>{try{return hA()||_A()||yA()||vA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tv=t=>{var e,n;return(n=(e=oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},EA=t=>{const e=tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},nv=()=>{var t;return(t=oh())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=oh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),""].join(".")}const ol={};function bA(){const t={prod:[],emulator:[]};for(const e of Object.keys(ol))ol[e]?t.emulator.push(e):t.prod.push(e);return t}function TA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qm=!1;function rv(t,e){if(typeof window>"u"||typeof document>"u"||!ca(window.location.host)||ol[t]===e||ol[t]||Qm)return;ol[t]=e;function n(y){return`__firebase__banner__${y}`}const i="__firebase__banner",r=bA().prod.length>0;function o(){const y=document.getElementById(i);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,w){y.setAttribute("width","24"),y.setAttribute("id",w),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Qm=!0,o()},y}function f(y,w){y.setAttribute("id",w),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=TA(i),w=n("text"),N=document.getElementById(w)||document.createElement("span"),V=n("learnmore"),F=document.getElementById(V)||document.createElement("a"),Y=n("preprendIcon"),z=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const X=y.element;l(X),f(F,V);const Q=h();u(z,Y),X.append(z,N,F,Q),document.body.appendChild(X)}r?(N.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bn())}function IA(){var t;const e=(t=oh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ov(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const t=bn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){return Xy.NODE_ADMIN===!0}function PA(){return!IA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function av(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const NA="FirebaseError";class es extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=NA,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?OA(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new es(s,l,i)}}function OA(t,e){return t.replace(DA,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const DA=/\{\$([^}]+)}/g;/**
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
 */function Rl(t){return JSON.parse(t)}function on(t){return JSON.stringify(t)}/**
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
 */const lv=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Rl(Eu(r[0])||""),n=Rl(Eu(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},xA=function(t){const e=lv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MA=function(t){const e=lv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ks(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ko(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wu(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ym(r)&&Ym(o)){if(!qr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
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
 */function ha(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class LA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let m=0;m<16;m++)i[m]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let m=0;m<16;m++)i[m]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let m=16;m<80;m++){const y=i[m-3]^i[m-8]^i[m-14]^i[m-16];i[m]=(y<<1|y>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,f;for(let m=0;m<80;m++){m<40?m<20?(h=l^r&(o^l),f=1518500249):(h=r^o^l,f=1859775393):m<60?(h=r&o|l&(r|o),f=2400959708):(h=r^o^l,f=3395469782);const y=(s<<5|s>>>27)+h+u+f+i[m]&4294967295;u=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=y}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function VA(t,e){const n=new FA(t,e);return n.subscribe.bind(n)}class FA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");UA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=td),s.error===void 0&&(s.error=td),s.complete===void 0&&(s.complete=td);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}function $A(t,e){return`${t} failed: ${e} argument `}/**
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
 */const BA=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,le(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ah=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function li(t){return t&&t._delegate?t._delegate:t}class Ii{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class jA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Sl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WA(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:HA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HA(t){return t===Lr?void 0:t}function WA(t){return t.instantiationMode==="EAGER"}/**
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
 */class qA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const zA={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},GA=Ue.INFO,KA={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},QA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=KA[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=GA,this._logHandler=QA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const YA=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function XA(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JA(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,Dd=new WeakMap,uv=new WeakMap,nd=new WeakMap,kf=new WeakMap;function ZA(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(tr(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cv.set(n,t)}).catch(()=>{}),kf.set(e,t),e}function eC(t){if(Dd.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Dd.set(t,e)}let xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tC(t){xd=t(xd)}function nC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(id(this),e,...n);return uv.set(i,e.sort?e.sort():[e]),tr(i)}:JA().includes(t)?function(...e){return t.apply(id(this),e),tr(cv.get(this))}:function(...e){return tr(t.apply(id(this),e))}}function iC(t){return typeof t=="function"?nC(t):(t instanceof IDBTransaction&&eC(t),YA(t,XA())?new Proxy(t,xd):t)}function tr(t){if(t instanceof IDBRequest)return ZA(t);if(nd.has(t))return nd.get(t);const e=iC(t);return e!==t&&(nd.set(t,e),kf.set(e,t)),e}const id=t=>kf.get(t);function sC(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=tr(o);return i&&o.addEventListener("upgradeneeded",u=>{i(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{r&&u.addEventListener("close",()=>r()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const rC=["get","getKey","getAll","getAllKeys","count"],oC=["put","add","delete","clear"],sd=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=oC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||rC.includes(n)))return;const r=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return sd.set(e,r),r}tC(t=>({...t,get:(e,n,i)=>Zm(e,n)||t.get(e,n,i),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class aC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lC(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function lC(t){const e=t.getComponent();return e?.type==="VERSION"}const Md="@firebase/app",eg="0.13.2";/**
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
 */const As=new zl("@firebase/app"),cC="@firebase/app-compat",uC="@firebase/analytics-compat",hC="@firebase/analytics",dC="@firebase/app-check-compat",fC="@firebase/app-check",pC="@firebase/auth",mC="@firebase/auth-compat",gC="@firebase/database",_C="@firebase/data-connect",yC="@firebase/database-compat",vC="@firebase/functions",EC="@firebase/functions-compat",wC="@firebase/installations",bC="@firebase/installations-compat",TC="@firebase/messaging",IC="@firebase/messaging-compat",AC="@firebase/performance",CC="@firebase/performance-compat",SC="@firebase/remote-config",RC="@firebase/remote-config-compat",PC="@firebase/storage",kC="@firebase/storage-compat",NC="@firebase/firestore",OC="@firebase/ai",DC="@firebase/firestore-compat",xC="firebase",MC="11.10.0";/**
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
 */const Ld="[DEFAULT]",LC={[Md]:"fire-core",[cC]:"fire-core-compat",[hC]:"fire-analytics",[uC]:"fire-analytics-compat",[fC]:"fire-app-check",[dC]:"fire-app-check-compat",[pC]:"fire-auth",[mC]:"fire-auth-compat",[gC]:"fire-rtdb",[_C]:"fire-data-connect",[yC]:"fire-rtdb-compat",[vC]:"fire-fn",[EC]:"fire-fn-compat",[wC]:"fire-iid",[bC]:"fire-iid-compat",[TC]:"fire-fcm",[IC]:"fire-fcm-compat",[AC]:"fire-perf",[CC]:"fire-perf-compat",[SC]:"fire-rc",[RC]:"fire-rc-compat",[PC]:"fire-gcs",[kC]:"fire-gcs-compat",[NC]:"fire-fst",[DC]:"fire-fst-compat",[OC]:"fire-vertex","fire-js":"fire-js",[xC]:"fire-js-all"};/**
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
 */const bu=new Map,VC=new Map,Vd=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(Vd.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of bu.values())tg(n,t);for(const n of VC.values())tg(n,t);return!0}function Nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ri(t){return t==null?!1:t.settings!==void 0}/**
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
 */const FC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new ua("app","Firebase",FC);/**
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
 */class UC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=MC;function hv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ld,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=nv()),!n)throw nr.create("no-options");const r=bu.get(s);if(r){if(qr(n,r.options)&&qr(i,r.config))return r;throw nr.create("duplicate-app",{appName:s})}const o=new qA(s);for(const u of Vd.values())o.addComponent(u);const l=new UC(n,i,o);return bu.set(s,l),l}function Of(t=Ld){const e=bu.get(t);if(!e&&t===Ld&&nv())return hv();if(!e)throw nr.create("no-app",{appName:t});return e}function Yn(t,e,n){var i;let s=(i=LC[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(l.join(" "));return}Ki(new Ii(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $C="firebase-heartbeat-database",BC=1,Pl="firebase-heartbeat-store";let rd=null;function dv(){return rd||(rd=sC($C,BC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pl)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function jC(t){try{const n=(await dv()).transaction(Pl),i=await n.objectStore(Pl).get(fv(t));return await n.done,i}catch(e){if(e instanceof es)As.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e?.message});As.warn(n.message)}}}async function ng(t,e){try{const i=(await dv()).transaction(Pl,"readwrite");await i.objectStore(Pl).put(e,fv(t)),await i.done}catch(n){if(n instanceof es)As.warn(n.message);else{const i=nr.create("idb-set",{originalErrorMessage:n?.message});As.warn(i.message)}}}function fv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HC=1024,WC=30;class qC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ig();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>WC){const o=KC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){As.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ig(),{heartbeatsToSend:i,unsentEntries:s}=zC(this._heartbeatsCache.heartbeats),r=vu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return As.warn(n),""}}}function ig(){return new Date().toISOString().substring(0,10)}function zC(t,e=HC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),sg(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return av()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jC(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sg(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}function KC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function QC(t){Ki(new Ii("platform-logger",e=>new aC(e),"PRIVATE")),Ki(new Ii("heartbeat",e=>new qC(e),"PRIVATE")),Yn(Md,eg,t),Yn(Md,eg,"esm2017"),Yn("fire-js","")}QC("");function Df(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YC=pv,mv=new ua("auth","Firebase",pv());/**
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
 */const Tu=new zl("@firebase/auth");function XC(t,...e){Tu.logLevel<=Ue.WARN&&Tu.warn(`Auth (${pr}): ${t}`,...e)}function ru(t,...e){Tu.logLevel<=Ue.ERROR&&Tu.error(`Auth (${pr}): ${t}`,...e)}/**
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
 */function Cs(t,...e){throw xf(t,...e)}function Hi(t,...e){return xf(t,...e)}function gv(t,e,n){const i=Object.assign(Object.assign({},YC()),{[e]:n});return new ua("auth","Firebase",i).create(e,{appName:t.name})}function Br(t){return gv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return mv.create(t,...e)}function Ie(t,e,...n){if(!t)throw xf(e,...n)}function _s(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function Ss(t,e){t||_s(e)}/**
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
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JC(){return rg()==="http:"||rg()==="https:"}function rg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JC()||CA()||"connection"in navigator)?navigator.onLine:!0}function e0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ss(n>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||ov()}get(){return ZC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mf(t,e){Ss(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _v{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const t0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const n0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i0=new Gl(3e4,6e4);function Lf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function da(t,e,n,i,s={}){return yv(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=ha(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},r);return AA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ca(t.emulatorConfig.host)&&(h.credentials="include"),_v.fetch()(await vv(t,t.config.apiHost,n,l),h)})}async function yv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},t0),e);try{const s=new r0(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $c(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $c(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $c(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $c(t,"user-disabled",o);const f=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw gv(t,f,h);Cs(t,f)}}catch(s){if(s instanceof es)throw s;Cs(t,"network-request-failed",{message:String(s)})}}async function s0(t,e,n,i,s={}){const r=await da(t,e,n,i,s);return"mfaPendingCredential"in r&&Cs(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function vv(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?Mf(t.config,s):`${t.config.apiScheme}://${s}`;return n0.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class r0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Hi(this.auth,"network-request-failed")),i0.get())})}}function $c(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Hi(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function o0(t,e){return da(t,"POST","/v1/accounts:delete",e)}async function Iu(t,e){return da(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function al(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a0(t,e=!1){const n=li(t),i=await n.getIdToken(e),s=Vf(i);Ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:al(od(s.auth_time)),issuedAtTime:al(od(s.iat)),expirationTime:al(od(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function od(t){return Number(t)*1e3}function Vf(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eu(n);return s?JSON.parse(s):(ru("Failed to decode base64 JWT payload"),null)}catch(s){return ru("Caught error parsing JWT payload as JSON",s?.toString()),null}}function og(t){const e=Vf(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof es&&l0(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function l0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class c0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Au(t){var e;const n=t.auth,i=await t.getIdToken(),s=await kl(t,Iu(n,{idToken:i}));Ie(s?.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ev(r.providerUserInfo):[],l=h0(t.providerData,o),u=t.isAnonymous,h=!(t.email&&r.passwordHash)&&!l?.length,f=u?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Ud(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function u0(t){const e=li(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h0(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ev(t){return t.map(e=>{var{providerId:n}=e,i=Df(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function d0(t,e){const n=await yv(t,{},async()=>{const i=ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await vv(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return t.emulatorConfig&&ca(t.emulatorConfig.host)&&(u.credentials="include"),_v.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f0(t,e){return da(t,"POST","/v2/accounts:revokeToken",Lf(t,e))}/**
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
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await d0(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Lo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
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
 */function qs(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yi{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ud(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await kl(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a0(this,e)}reload(){return u0(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ri(this.auth.app))return Promise.reject(Br(this.auth));const e=await this.getIdToken();return await kl(this,o0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,u,h,f;const m=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,w=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,Y=(h=n.createdAt)!==null&&h!==void 0?h:void 0,z=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:X,emailVerified:Q,isAnonymous:ye,providerData:be,stsTokenManager:R}=n;Ie(X&&R,e,"internal-error");const b=Lo.fromJSON(this.name,R);Ie(typeof X=="string",e,"internal-error"),qs(m,e.name),qs(y,e.name),Ie(typeof Q=="boolean",e,"internal-error"),Ie(typeof ye=="boolean",e,"internal-error"),qs(w,e.name),qs(N,e.name),qs(V,e.name),qs(F,e.name),qs(Y,e.name),qs(z,e.name);const C=new yi({uid:X,auth:e,email:y,emailVerified:Q,displayName:m,isAnonymous:ye,photoURL:N,phoneNumber:w,tenantId:V,stsTokenManager:b,createdAt:Y,lastLoginAt:z});return be&&Array.isArray(be)&&(C.providerData=be.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,n,i=!1){const s=new Lo;s.updateFromServerResponse(n);const r=new yi({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Au(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];Ie(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ev(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!r?.length,l=new Lo;l.updateFromIdToken(i);const u=new yi({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!r?.length};return Object.assign(u,h),u}}/**
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
 */const ag=new Map;function ys(t){Ss(t instanceof Function,"Expected a class definition");let e=ag.get(t);return e?(Ss(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ag.set(t,e),e)}/**
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
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wv.type="NONE";const lg=wv;/**
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
 */function ou(t,e,n){return`firebase:${t}:${e}:${n}`}class Vo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ou(this.userKey,s.apiKey,r),this.fullPersistenceKey=ou("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Iu(this.auth,{idToken:e}).catch(()=>{});return n?yi._fromGetAccountInfoResponse(this.auth,n,e):null}return yi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Vo(ys(lg),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||ys(lg);const o=ou(i,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const y=await Iu(e,{idToken:f}).catch(()=>{});if(!y)break;m=await yi._fromGetAccountInfoResponse(e,y,f)}else m=yi._fromJSON(e,f);h!==r&&(l=m),r=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new Vo(r,e,i):(r=u[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new Vo(r,e,i))}}/**
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
 */function cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sv(e))return"Blackberry";if(Rv(e))return"Webos";if(Tv(e))return"Safari";if((e.includes("chrome/")||Iv(e))&&!e.includes("edge/"))return"Chrome";if(Cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function bv(t=bn()){return/firefox\//i.test(t)}function Tv(t=bn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iv(t=bn()){return/crios\//i.test(t)}function Av(t=bn()){return/iemobile/i.test(t)}function Cv(t=bn()){return/android/i.test(t)}function Sv(t=bn()){return/blackberry/i.test(t)}function Rv(t=bn()){return/webos/i.test(t)}function Ff(t=bn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p0(t=bn()){var e;return Ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m0(){return SA()&&document.documentMode===10}function Pv(t=bn()){return Ff(t)||Cv(t)||Rv(t)||Sv(t)||/windows phone/i.test(t)||Av(t)}/**
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
 */function kv(t,e=[]){let n;switch(t){case"Browser":n=cg(bn());break;case"Worker":n=`${cg(bn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${i}`}/**
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
 */class g0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const u=e(r);o(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function _0(t,e={}){return da(t,"GET","/v2/passwordPolicy",Lf(t,e))}/**
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
 */const y0=6;class v0{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:y0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsUppercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class E0{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ug(this),this.idTokenSubscription=new ug(this),this.beforeStateQueue=new g0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ys(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Vo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Iu(this,{idToken:e}),i=await yi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ri(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u?.user&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ri(this.app))return Promise.reject(Br(this));const n=e?li(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ri(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ri(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _0(this),n=new v0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await f0(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ys(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[ys(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,i,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ri(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&XC(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Uf(t){return li(t)}class ug{constructor(e){this.auth=e,this.observer=null,this.addObserver=VA(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w0(t){$f=t}function b0(t){return $f.loadJS(t)}function T0(){return $f.gapiScript}function I0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Nv(t,e){const n=Nf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(qr(r,e??{}))return s;Cs(s,"already-initialized")}return n.initialize({options:e})}function A0(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ys);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function C0(t,e,n){const i=Uf(t);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Ov(e),{host:o,port:l}=S0(e),u=l===null?"":`:${l}`,h={url:`${r}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(qr(h,i.config.emulator)&&qr(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,ca(o)?(sv(`${r}//${o}${u}`),rv("Auth",!0)):R0()}function Ov(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=Ov(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:hg(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,n){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}/**
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
 */async function Fo(t,e){return s0(t,"POST","/v1/accounts:signInWithIdp",Lf(t,e))}/**
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
 */const P0="http://localhost";class zr extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cs("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Df(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new zr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Fo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fo(e,n)}buildRequest(){const e={requestUri:P0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ha(n)}return e}}/**
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
 */class xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kl extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ys extends Kl{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ys.credentialFromTaggedObject(e)}static credentialFromError(e){return Ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ys.credential(e.oauthAccessToken)}catch{return null}}}Ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ys.PROVIDER_ID="facebook.com";/**
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
 */class Xs extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Xs.credential(n,i)}catch{return null}}}Xs.GOOGLE_SIGN_IN_METHOD="google.com";Xs.PROVIDER_ID="google.com";/**
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
 */class Js extends Kl{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:Js.PROVIDER_ID,signInMethod:Js.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Js.credentialFromTaggedObject(e)}static credentialFromError(e){return Js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Js.credential(e.oauthAccessToken)}catch{return null}}}Js.GITHUB_SIGN_IN_METHOD="github.com";Js.PROVIDER_ID="github.com";/**
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
 */class Zs extends Kl{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Zs.credential(n,i)}catch{return null}}}Zs.TWITTER_SIGN_IN_METHOD="twitter.com";Zs.PROVIDER_ID="twitter.com";/**
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
 */class Qo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await yi._fromIdTokenResponse(e,i,s),o=dg(i);return new Qo({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=dg(i);return new Qo({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cu extends es{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Cu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Cu(e,n,i,s)}}function Mv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Cu._fromErrorAndOperation(t,r,e,i):r})}async function k0(t,e,n=!1){const i=await kl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qo._forOperation(t,"link",i)}/**
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
 */async function N0(t,e,n=!1){const{auth:i}=t;if(ri(i.app))return Promise.reject(Br(i));const s="reauthenticate";try{const r=await kl(t,Mv(i,s,e,t),n);Ie(r.idToken,i,"internal-error");const o=Vf(r.idToken);Ie(o,i,"internal-error");const{sub:l}=o;return Ie(t.uid===l,i,"user-mismatch"),Qo._forOperation(t,s,r)}catch(r){throw r?.code==="auth/user-not-found"&&Cs(i,"user-mismatch"),r}}/**
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
 */async function O0(t,e,n=!1){if(ri(t.app))return Promise.reject(Br(t));const i="signIn",s=await Mv(t,i,e),r=await Qo._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Lv(t,e,n,i){return li(t).onIdTokenChanged(e,n,i)}function D0(t,e,n){return li(t).beforeAuthStateChanged(e,n)}const Su="__sak";/**
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
 */class Vv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const x0=1e3,M0=10;class Fv extends Vv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);m0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,M0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},x0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fv.type="LOCAL";const Uv=Fv;/**
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
 */class $v extends Vv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$v.type="SESSION";const Bf=$v;/**
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
 */function L0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,r)),u=await L0(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
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
 */function jf(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class V0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,u)=>{const h=jf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(y.data.response);break;default:clearTimeout(f),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wi(){return window}function F0(t){Wi().location.href=t}/**
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
 */function Bv(){return typeof Wi().WorkerGlobalScope<"u"&&typeof Wi().importScripts=="function"}async function U0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $0(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B0(){return Bv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",j0=1,Ru="firebaseLocalStorage",Hv="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ch(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function H0(){const t=indexedDB.deleteDatabase(jv);return new Ql(t).toPromise()}function $d(){const t=indexedDB.open(jv,j0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ru,{keyPath:Hv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ru)?e(i):(i.close(),await H0(),e(await $d()))})})}async function fg(t,e,n){const i=ch(t,!0).put({[Hv]:e,value:n});return new Ql(i).toPromise()}async function W0(t,e){const n=ch(t,!1).get(e),i=await new Ql(n).toPromise();return i===void 0?null:i.value}function pg(t,e){const n=ch(t,!0).delete(e);return new Ql(n).toPromise()}const q0=800,z0=3;class Wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>z0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(B0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U0(),!this.activeServiceWorker)return;this.sender=new V0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await fg(e,Su,"1"),await pg(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>W0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ch(s,!1).getAll();return new Ql(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wv.type="LOCAL";const qv=Wv;new Gl(3e4,6e4);/**
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
 */function G0(t,e){return e?ys(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends Dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K0(t){return O0(t.auth,new Hf(t),t.bypassAuthState)}function Q0(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),N0(n,new Hf(t),t.bypassAuthState)}async function Y0(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),k0(n,new Hf(t),t.bypassAuthState)}/**
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
 */class zv{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K0;case"linkViaPopup":case"linkViaRedirect":return Y0;case"reauthViaPopup":case"reauthViaRedirect":return Q0;default:Cs(this.auth,"internal-error")}}resolve(e){Ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X0=new Gl(2e3,1e4);class Do extends zv{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Ss(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X0.get())};e()}}Do.currentPopupAction=null;/**
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
 */const J0="pendingRedirect",au=new Map;class Z0 extends zv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=au.get(this.auth._key());if(!e){try{const i=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}au.set(this.auth._key(),e)}return this.bypassAuthState||au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=iS(e),i=nS(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function tS(t,e){au.set(t._key(),e)}function nS(t){return ys(t._redirectPersistence)}function iS(t){return ou(J0,t.config.apiKey,t.name)}async function sS(t,e,n=!1){if(ri(t.app))return Promise.reject(Br(t));const i=Uf(t),s=G0(i,e),o=await new Z0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const rS=10*60*1e3;class oS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Gv(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Hi(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function aS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gv(t);default:return!1}}/**
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
 */async function lS(t,e={}){return da(t,"GET","/v1/projects",e)}/**
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
 */const cS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function hS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lS(t);for(const n of e)try{if(dS(n))return}catch{}Cs(t,"unauthorized-domain")}function dS(t){const e=Fd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!uS.test(n))return!1;if(cS.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const fS=new Gl(3e4,6e4);function gg(){const t=Wi().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pS(t){return new Promise((e,n)=>{var i,s,r;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(Hi(t,"network-request-failed"))},timeout:fS.get()})}if(!((s=(i=Wi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Wi().gapi)===null||r===void 0)&&r.load)o();else{const l=I0("iframefcb");return Wi()[l]=()=>{gapi.load?o():n(Hi(t,"network-request-failed"))},b0(`${T0()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw lu=null,e})}let lu=null;function mS(t){return lu=lu||pS(t),lu}/**
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
 */const gS=new Gl(5e3,15e3),_S="__/auth/iframe",yS="emulator/auth/iframe",vS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wS(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,yS):`https://${t.config.authDomain}/${_S}`,i={apiKey:e.apiKey,appName:t.name,v:pr},s=ES.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ha(i).slice(1)}`}async function bS(t){const e=await mS(t),n=Wi().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:wS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Hi(t,"network-request-failed"),l=Wi().setTimeout(()=>{r(o)},gS.get());function u(){Wi().clearTimeout(l),s(i)}i.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const TS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IS=500,AS=600,CS="_blank",SS="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RS(t,e,n,i=IS,s=AS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u=Object.assign(Object.assign({},TS),{width:i.toString(),height:s.toString(),top:r,left:o}),h=bn().toLowerCase();n&&(l=Iv(h)?CS:n),bv(h)&&(e=e||SS,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[w,N])=>`${y}${w}=${N},`,"");if(p0(h)&&l!=="_self")return PS(e||"",l),new _g(null);const m=window.open(e||"",l,f);Ie(m,t,"popup-blocked");try{m.focus()}catch{}return new _g(m)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const kS="__/auth/handler",NS="emulator/auth/handler",OS=encodeURIComponent("fac");async function yg(t,e,n,i,s,r){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:pr,eventId:s};if(e instanceof xv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Kl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${OS}=${encodeURIComponent(u)}`:"";return`${DS(t)}?${ha(l).slice(1)}${h}`}function DS({config:t}){return t.emulator?Mf(t,NS):`https://${t.authDomain}/${kS}`}/**
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
 */const ad="webStorageSupport";class xS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bf,this._completeRedirectFn=sS,this._overrideRedirectResult=tS}async _openPopup(e,n,i,s){var r;Ss((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await yg(e,n,i,Fd(),s);return RS(e,o,jf())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await yg(e,n,i,Fd(),s);return F0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ss(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await bS(e),i=new oS(e);return n.register("authEvent",s=>(Ie(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ad,{type:ad},s=>{var r;const o=(r=s?.[0])===null||r===void 0?void 0:r[ad];o!==void 0&&n(!!o),Cs(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pv()||Tv()||Ff()}}const Kv=xS;var vg="@firebase/auth",Eg="1.10.8";/**
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
 */class MS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VS(t){Ki(new Ii("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kv(t)},h=new E0(i,s,r,u);return A0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ki(new Ii("auth-internal",e=>{const n=Uf(e.getProvider("auth").getImmediate());return(i=>new MS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(vg,Eg,LS(t)),Yn(vg,Eg,"esm2017")}/**
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
 */const FS=5*60,US=iv("authIdTokenMaxAge")||FS;let wg=null;const $S=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>US)return;const s=n?.token;wg!==s&&(wg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BS(t=Of()){const e=Nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nv(t,{popupRedirectResolver:Kv,persistence:[qv,Uv,Bf]}),i=iv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=$S(r.toString());D0(n,o,()=>o(n.currentUser)),Lv(n,l=>o(l))}}const s=tv("auth");return s&&C0(n,`http://${s}`),n}function jS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}w0({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Hi("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",jS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VS("Browser");/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ut={},Uo=[],qi=()=>{},HS=()=>!1,uh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qf=t=>t.startsWith("onUpdate:"),Tn=Object.assign,zf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WS=Object.prototype.hasOwnProperty,et=(t,e)=>WS.call(t,e),we=Array.isArray,$o=t=>Yl(t)==="[object Map]",fa=t=>Yl(t)==="[object Set]",bg=t=>Yl(t)==="[object Date]",ke=t=>typeof t=="function",Vt=t=>typeof t=="string",Qi=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",Qv=t=>(pt(t)||ke(t))&&ke(t.then)&&ke(t.catch),Yv=Object.prototype.toString,Yl=t=>Yv.call(t),qS=t=>Yl(t).slice(8,-1),Xv=t=>Yl(t)==="[object Object]",Gf=t=>Vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ll=Wf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zS=/-(\w)/g,or=hh(t=>t.replace(zS,(e,n)=>n?n.toUpperCase():"")),GS=/\B([A-Z])/g,to=hh(t=>t.replace(GS,"-$1").toLowerCase()),Jv=hh(t=>t.charAt(0).toUpperCase()+t.slice(1)),ld=hh(t=>t?`on${Jv(t)}`:""),ir=(t,e)=>!Object.is(t,e),cu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Pu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Tg;const dh=()=>Tg||(Tg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fh(t){if(we(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Vt(i)?XS(i):fh(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Vt(t)||pt(t))return t}const KS=/;(?![^(]*\))/g,QS=/:([^]+)/,YS=/\/\*[^]*?\*\//g;function XS(t){const e={};return t.replace(YS,"").split(KS).forEach(n=>{if(n){const i=n.split(QS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kf(t){let e="";if(Vt(t))e=t;else if(we(t))for(let n=0;n<t.length;n++){const i=Kf(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const JS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ZS=Wf(JS);function Zv(t){return!!t||t===""}function eR(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Xl(t[i],e[i]);return n}function Xl(t,e){if(t===e)return!0;let n=bg(t),i=bg(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Qi(t),i=Qi(e),n||i)return t===e;if(n=we(t),i=we(e),n||i)return n&&i?eR(t,e):!1;if(n=pt(t),i=pt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!Xl(t[o],e[o]))return!1}}return String(t)===String(e)}function Qf(t,e){return t.findIndex(n=>Xl(n,e))}const eE=t=>!!(t&&t.__v_isRef===!0),Vn=t=>Vt(t)?t:t==null?"":we(t)||pt(t)&&(t.toString===Yv||!ke(t.toString))?eE(t)?Vn(t.value):JSON.stringify(t,tE,2):String(t),tE=(t,e)=>eE(e)?tE(t,e.value):$o(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[cd(i,r)+" =>"]=s,n),{})}:fa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cd(n))}:Qi(e)?cd(e):pt(e)&&!we(e)&&!Xv(e)?String(e):e,cd=(t,e="")=>{var n;return Qi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fn;class nE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Fn,!e&&Fn&&(this.index=(Fn.scopes||(Fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Fn;try{return Fn=this,e()}finally{Fn=n}}}on(){++this._on===1&&(this.prevScope=Fn,Fn=this)}off(){this._on>0&&--this._on===0&&(Fn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iE(t){return new nE(t)}function tR(){return Fn}let ft;const ud=new WeakSet;class sE{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fn&&Fn.active&&Fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ud.has(this)&&(ud.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ig(this),aE(this);const e=ft,n=bi;ft=this,bi=!0;try{return this.fn()}finally{lE(this),ft=e,bi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jf(e);this.deps=this.depsTail=void 0,Ig(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ud.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jd(this)&&this.run()}get dirty(){return jd(this)}}let rE=0,cl,ul;function oE(t,e=!1){if(t.flags|=8,e){t.next=ul,ul=t;return}t.next=cl,cl=t}function Yf(){rE++}function Xf(){if(--rE>0)return;if(ul){let e=ul;for(ul=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cl;){let e=cl;for(cl=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function aE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lE(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Jf(i),nR(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function jd(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function cE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Nl)||(t.globalVersion=Nl,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!jd(t))))return;t.flags|=2;const e=t.dep,n=ft,i=bi;ft=t,bi=!0;try{aE(t);const s=t.fn(t._value);(e.version===0||ir(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=n,bi=i,lE(t),t.flags&=-3}}function Jf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Jf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function nR(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let bi=!0;const uE=[];function Rs(){uE.push(bi),bi=!1}function Ps(){const t=uE.pop();bi=t===void 0?!0:t}function Ig(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let Nl=0;class iR{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!bi||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new iR(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,hE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=i)}return n}trigger(e){this.version++,Nl++,this.notify(e)}notify(e){Yf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xf()}}}function hE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hE(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hd=new WeakMap,jr=Symbol(""),Wd=Symbol(""),Ol=Symbol("");function pn(t,e,n){if(bi&&ft){let i=Hd.get(t);i||Hd.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Zf),s.map=i,s.key=n),s.track()}}function ms(t,e,n,i,s,r){const o=Hd.get(t);if(!o){Nl++;return}const l=u=>{u&&u.trigger()};if(Yf(),e==="clear")o.forEach(l);else{const u=we(t),h=u&&Gf(n);if(u&&n==="length"){const f=Number(i);o.forEach((m,y)=>{(y==="length"||y===Ol||!Qi(y)&&y>=f)&&l(m)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ol)),e){case"add":u?h&&l(o.get("length")):(l(o.get(jr)),$o(t)&&l(o.get(Wd)));break;case"delete":u||(l(o.get(jr)),$o(t)&&l(o.get(Wd)));break;case"set":$o(t)&&l(o.get(jr));break}}Xf()}function So(t){const e=Ze(t);return e===t?e:(pn(e,"iterate",Ol),ai(t)?e:e.map(rn))}function ph(t){return pn(t=Ze(t),"iterate",Ol),t}const sR={__proto__:null,[Symbol.iterator](){return hd(this,Symbol.iterator,rn)},concat(...t){return So(this).concat(...t.map(e=>we(e)?So(e):e))},entries(){return hd(this,"entries",t=>(t[1]=rn(t[1]),t))},every(t,e){return ds(this,"every",t,e,void 0,arguments)},filter(t,e){return ds(this,"filter",t,e,n=>n.map(rn),arguments)},find(t,e){return ds(this,"find",t,e,rn,arguments)},findIndex(t,e){return ds(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ds(this,"findLast",t,e,rn,arguments)},findLastIndex(t,e){return ds(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ds(this,"forEach",t,e,void 0,arguments)},includes(...t){return dd(this,"includes",t)},indexOf(...t){return dd(this,"indexOf",t)},join(t){return So(this).join(t)},lastIndexOf(...t){return dd(this,"lastIndexOf",t)},map(t,e){return ds(this,"map",t,e,void 0,arguments)},pop(){return Ga(this,"pop")},push(...t){return Ga(this,"push",t)},reduce(t,...e){return Ag(this,"reduce",t,e)},reduceRight(t,...e){return Ag(this,"reduceRight",t,e)},shift(){return Ga(this,"shift")},some(t,e){return ds(this,"some",t,e,void 0,arguments)},splice(...t){return Ga(this,"splice",t)},toReversed(){return So(this).toReversed()},toSorted(t){return So(this).toSorted(t)},toSpliced(...t){return So(this).toSpliced(...t)},unshift(...t){return Ga(this,"unshift",t)},values(){return hd(this,"values",rn)}};function hd(t,e,n){const i=ph(t),s=i[e]();return i!==t&&!ai(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const rR=Array.prototype;function ds(t,e,n,i,s,r){const o=ph(t),l=o!==t&&!ai(t),u=o[e];if(u!==rR[e]){const m=u.apply(t,r);return l?rn(m):m}let h=n;o!==t&&(l?h=function(m,y){return n.call(this,rn(m),y,t)}:n.length>2&&(h=function(m,y){return n.call(this,m,y,t)}));const f=u.call(o,h,i);return l&&s?s(f):f}function Ag(t,e,n,i){const s=ph(t);let r=n;return s!==t&&(ai(t)?n.length>3&&(r=function(o,l,u){return n.call(this,o,l,u,t)}):r=function(o,l,u){return n.call(this,o,rn(l),u,t)}),s[e](r,...i)}function dd(t,e,n){const i=Ze(t);pn(i,"iterate",Ol);const s=i[e](...n);return(s===-1||s===!1)&&np(n[0])?(n[0]=Ze(n[0]),i[e](...n)):s}function Ga(t,e,n=[]){Rs(),Yf();const i=Ze(t)[e].apply(t,n);return Xf(),Ps(),i}const oR=Wf("__proto__,__v_isRef,__isVue"),dE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi));function aR(t){Qi(t)||(t=String(t));const e=Ze(this);return pn(e,"has",t),e.hasOwnProperty(t)}class fE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?_R:_E:r?gE:mE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=we(e);if(!s){let u;if(o&&(u=sR[n]))return u;if(n==="hasOwnProperty")return aR}const l=Reflect.get(e,n,wn(e)?e:i);return(Qi(n)?dE.has(n):oR(n))||(s||pn(e,"get",n),r)?l:wn(l)?o&&Gf(n)?l:l.value:pt(l)?s?vE(l):mh(l):l}}class pE extends fE{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const u=ar(r);if(!ai(i)&&!ar(i)&&(r=Ze(r),i=Ze(i)),!we(e)&&wn(r)&&!wn(i))return u?!1:(r.value=i,!0)}const o=we(e)&&Gf(n)?Number(n)<e.length:et(e,n),l=Reflect.set(e,n,i,wn(e)?e:s);return e===Ze(s)&&(o?ir(i,r)&&ms(e,"set",n,i):ms(e,"add",n,i)),l}deleteProperty(e,n){const i=et(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ms(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Qi(n)||!dE.has(n))&&pn(e,"has",n),i}ownKeys(e){return pn(e,"iterate",we(e)?"length":jr),Reflect.ownKeys(e)}}class lR extends fE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cR=new pE,uR=new lR,hR=new pE(!0);const qd=t=>t,Bc=t=>Reflect.getPrototypeOf(t);function dR(t,e,n){return function(...i){const s=this.__v_raw,r=Ze(s),o=$o(r),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,h=s[t](...i),f=n?qd:e?ku:rn;return!e&&pn(r,"iterate",u?Wd:jr),{next(){const{value:m,done:y}=h.next();return y?{value:m,done:y}:{value:l?[f(m[0]),f(m[1])]:f(m),done:y}},[Symbol.iterator](){return this}}}}function jc(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fR(t,e){const n={get(s){const r=this.__v_raw,o=Ze(r),l=Ze(s);t||(ir(s,l)&&pn(o,"get",s),pn(o,"get",l));const{has:u}=Bc(o),h=e?qd:t?ku:rn;if(u.call(o,s))return h(r.get(s));if(u.call(o,l))return h(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&pn(Ze(s),"iterate",jr),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Ze(r),l=Ze(s);return t||(ir(s,l)&&pn(o,"has",s),pn(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,u=Ze(l),h=e?qd:t?ku:rn;return!t&&pn(u,"iterate",jr),l.forEach((f,m)=>s.call(r,h(f),h(m),o))}};return Tn(n,t?{add:jc("add"),set:jc("set"),delete:jc("delete"),clear:jc("clear")}:{add(s){!e&&!ai(s)&&!ar(s)&&(s=Ze(s));const r=Ze(this);return Bc(r).has.call(r,s)||(r.add(s),ms(r,"add",s,s)),this},set(s,r){!e&&!ai(r)&&!ar(r)&&(r=Ze(r));const o=Ze(this),{has:l,get:u}=Bc(o);let h=l.call(o,s);h||(s=Ze(s),h=l.call(o,s));const f=u.call(o,s);return o.set(s,r),h?ir(r,f)&&ms(o,"set",s,r):ms(o,"add",s,r),this},delete(s){const r=Ze(this),{has:o,get:l}=Bc(r);let u=o.call(r,s);u||(s=Ze(s),u=o.call(r,s)),l&&l.call(r,s);const h=r.delete(s);return u&&ms(r,"delete",s,void 0),h},clear(){const s=Ze(this),r=s.size!==0,o=s.clear();return r&&ms(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=dR(s,t,e)}),n}function ep(t,e){const n=fR(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(et(n,s)&&s in i?n:i,s,r)}const pR={get:ep(!1,!1)},mR={get:ep(!1,!0)},gR={get:ep(!0,!1)};const mE=new WeakMap,gE=new WeakMap,_E=new WeakMap,_R=new WeakMap;function yR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vR(t){return t.__v_skip||!Object.isExtensible(t)?0:yR(qS(t))}function mh(t){return ar(t)?t:tp(t,!1,cR,pR,mE)}function yE(t){return tp(t,!1,hR,mR,gE)}function vE(t){return tp(t,!0,uR,gR,_E)}function tp(t,e,n,i,s){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=vR(t);if(r===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,r===2?i:n);return s.set(t,l),l}function Bo(t){return ar(t)?Bo(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function ai(t){return!!(t&&t.__v_isShallow)}function np(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function EE(t){return!et(t,"__v_skip")&&Object.isExtensible(t)&&Bd(t,"__v_skip",!0),t}const rn=t=>pt(t)?mh(t):t,ku=t=>pt(t)?vE(t):t;function wn(t){return t?t.__v_isRef===!0:!1}function Kt(t){return wE(t,!1)}function ER(t){return wE(t,!0)}function wE(t,e){return wn(t)?t:new wR(t,e)}class wR{constructor(e,n){this.dep=new Zf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:rn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ai(e)||ar(e);e=i?e:Ze(e),ir(e,n)&&(this._rawValue=e,this._value=i?e:rn(e),this.dep.trigger())}}function zi(t){return wn(t)?t.value:t}const bR={get:(t,e,n)=>e==="__v_raw"?t:zi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return wn(s)&&!wn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bE(t){return Bo(t)?t:new Proxy(t,bR)}class TR{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return oE(this,!0),!0}get value(){const e=this.dep.track();return cE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function IR(t,e,n=!1){let i,s;return ke(t)?i=t:(i=t.get,s=t.set),new TR(i,s,n)}const Hc={},Nu=new WeakMap;let Vr;function AR(t,e=!1,n=Vr){if(n){let i=Nu.get(n);i||Nu.set(n,i=[]),i.push(t)}}function CR(t,e,n=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:u}=n,h=Q=>s?Q:ai(Q)||s===!1||s===0?gs(Q,1):gs(Q);let f,m,y,w,N=!1,V=!1;if(wn(t)?(m=()=>t.value,N=ai(t)):Bo(t)?(m=()=>h(t),N=!0):we(t)?(V=!0,N=t.some(Q=>Bo(Q)||ai(Q)),m=()=>t.map(Q=>{if(wn(Q))return Q.value;if(Bo(Q))return h(Q);if(ke(Q))return u?u(Q,2):Q()})):ke(t)?e?m=u?()=>u(t,2):t:m=()=>{if(y){Rs();try{y()}finally{Ps()}}const Q=Vr;Vr=f;try{return u?u(t,3,[w]):t(w)}finally{Vr=Q}}:m=qi,e&&s){const Q=m,ye=s===!0?1/0:s;m=()=>gs(Q(),ye)}const F=tR(),Y=()=>{f.stop(),F&&F.active&&zf(F.effects,f)};if(r&&e){const Q=e;e=(...ye)=>{Q(...ye),Y()}}let z=V?new Array(t.length).fill(Hc):Hc;const X=Q=>{if(!(!(f.flags&1)||!f.dirty&&!Q))if(e){const ye=f.run();if(s||N||(V?ye.some((be,R)=>ir(be,z[R])):ir(ye,z))){y&&y();const be=Vr;Vr=f;try{const R=[ye,z===Hc?void 0:V&&z[0]===Hc?[]:z,w];z=ye,u?u(e,3,R):e(...R)}finally{Vr=be}}}else f.run()};return l&&l(X),f=new sE(m),f.scheduler=o?()=>o(X,!1):X,w=Q=>AR(Q,!1,f),y=f.onStop=()=>{const Q=Nu.get(f);if(Q){if(u)u(Q,4);else for(const ye of Q)ye();Nu.delete(f)}},e?i?X(!0):z=f.run():o?o(X.bind(null,!0),!0):f.run(),Y.pause=f.pause.bind(f),Y.resume=f.resume.bind(f),Y.stop=Y,Y}function gs(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,wn(t))gs(t.value,e,n);else if(we(t))for(let i=0;i<t.length;i++)gs(t[i],e,n);else if(fa(t)||$o(t))t.forEach(i=>{gs(i,e,n)});else if(Xv(t)){for(const i in t)gs(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&gs(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jl(t,e,n,i){try{return i?t(...i):t()}catch(s){gh(s,e,n)}}function Yi(t,e,n,i){if(ke(t)){const s=Jl(t,e,n,i);return s&&Qv(s)&&s.catch(r=>{gh(r,e,n)}),s}if(we(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Yi(t[r],e,n,i));return s}}function gh(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let l=e.parent;const u=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](t,u,h)===!1)return}l=l.parent}if(r){Rs(),Jl(r,null,10,[t,u,h]),Ps();return}}SR(t,n,s,i,o)}function SR(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const On=[];let Fi=-1;const jo=[];let Gs=null,Po=0;const TE=Promise.resolve();let Ou=null;function ip(t){const e=Ou||TE;return t?e.then(this?t.bind(this):t):e}function RR(t){let e=Fi+1,n=On.length;for(;e<n;){const i=e+n>>>1,s=On[i],r=Dl(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function sp(t){if(!(t.flags&1)){const e=Dl(t),n=On[On.length-1];!n||!(t.flags&2)&&e>=Dl(n)?On.push(t):On.splice(RR(e),0,t),t.flags|=1,IE()}}function IE(){Ou||(Ou=TE.then(CE))}function PR(t){we(t)?jo.push(...t):Gs&&t.id===-1?Gs.splice(Po+1,0,t):t.flags&1||(jo.push(t),t.flags|=1),IE()}function Cg(t,e,n=Fi+1){for(;n<On.length;n++){const i=On[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;On.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function AE(t){if(jo.length){const e=[...new Set(jo)].sort((n,i)=>Dl(n)-Dl(i));if(jo.length=0,Gs){Gs.push(...e);return}for(Gs=e,Po=0;Po<Gs.length;Po++){const n=Gs[Po];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gs=null,Po=0}}const Dl=t=>t.id==null?t.flags&2?-1:1/0:t.id;function CE(t){try{for(Fi=0;Fi<On.length;Fi++){const e=On[Fi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fi<On.length;Fi++){const e=On[Fi];e&&(e.flags&=-2)}Fi=-1,On.length=0,AE(),Ou=null,(On.length||jo.length)&&CE()}}let Kn=null,SE=null;function Du(t){const e=Kn;return Kn=t,SE=t&&t.type.__scopeId||null,e}function rp(t,e=Kn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Mg(-1);const r=Du(e);let o;try{o=t(...s)}finally{Du(r),i._d&&Mg(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Mi(t,e){if(Kn===null)return t;const n=Eh(Kn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,u=ut]=e[s];r&&(ke(r)&&(r={mounted:r,updated:r}),r.deep&&gs(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return t}function xr(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let u=l.dir[i];u&&(Rs(),Yi(u,n,8,[t.el,l,t,e]),Ps())}}const kR=Symbol("_vte"),NR=t=>t.__isTeleport;function op(t,e){t.shapeFlag&6&&t.component?(t.transition=e,op(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pa(t,e){return ke(t)?Tn({name:t.name},e,{setup:t}):t}function RE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hl(t,e,n,i,s=!1){if(we(t)){t.forEach((N,V)=>hl(N,e&&(we(e)?e[V]:e),n,i,s));return}if(dl(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&hl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Eh(i.component):i.el,o=s?null:r,{i:l,r:u}=t,h=e&&e.r,f=l.refs===ut?l.refs={}:l.refs,m=l.setupState,y=Ze(m),w=m===ut?()=>!1:N=>et(y,N);if(h!=null&&h!==u&&(Vt(h)?(f[h]=null,w(h)&&(m[h]=null)):wn(h)&&(h.value=null)),ke(u))Jl(u,l,12,[o,f]);else{const N=Vt(u),V=wn(u);if(N||V){const F=()=>{if(t.f){const Y=N?w(u)?m[u]:f[u]:u.value;s?we(Y)&&zf(Y,r):we(Y)?Y.includes(r)||Y.push(r):N?(f[u]=[r],w(u)&&(m[u]=f[u])):(u.value=[r],t.k&&(f[t.k]=u.value))}else N?(f[u]=o,w(u)&&(m[u]=o)):V&&(u.value=o,t.k&&(f[t.k]=o))};o?(F.id=-1,zn(F,n)):F()}}}dh().requestIdleCallback;dh().cancelIdleCallback;const dl=t=>!!t.type.__asyncLoader,PE=t=>t.type.__isKeepAlive;function OR(t,e){kE(t,"a",e)}function DR(t,e){kE(t,"da",e)}function kE(t,e,n=yn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_h(e,i,n),n){let s=n.parent;for(;s&&s.parent;)PE(s.parent.vnode)&&xR(i,e,n,s),s=s.parent}}function xR(t,e,n,i){const s=_h(e,t,i,!0);NE(()=>{zf(i[e],s)},n)}function _h(t,e,n=yn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Rs();const l=Zl(n),u=Yi(e,n,t,o);return l(),Ps(),u});return i?s.unshift(r):s.push(r),r}}const Ns=t=>(e,n=yn)=>{(!Ml||t==="sp")&&_h(t,(...i)=>e(...i),n)},MR=Ns("bm"),LR=Ns("m"),VR=Ns("bu"),FR=Ns("u"),UR=Ns("bum"),NE=Ns("um"),$R=Ns("sp"),BR=Ns("rtg"),jR=Ns("rtc");function HR(t,e=yn){_h("ec",t,e)}const WR=Symbol.for("v-ndc");function Wc(t,e,n,i){let s;const r=n,o=we(t);if(o||Vt(t)){const l=o&&Bo(t);let u=!1,h=!1;l&&(u=!ai(t),h=ar(t),t=ph(t)),s=new Array(t.length);for(let f=0,m=t.length;f<m;f++)s[f]=e(u?h?ku(rn(t[f])):rn(t[f]):t[f],f,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,r)}else if(pt(t))if(t[Symbol.iterator])s=Array.from(t,(l,u)=>e(l,u,void 0,r));else{const l=Object.keys(t);s=new Array(l.length);for(let u=0,h=l.length;u<h;u++){const f=l[u];s[u]=e(t[f],f,u,r)}}else s=[];return s}const zd=t=>t?XE(t)?Eh(t):zd(t.parent):null,fl=Tn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zd(t.parent),$root:t=>zd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>DE(t),$forceUpdate:t=>t.f||(t.f=()=>{sp(t.update)}),$nextTick:t=>t.n||(t.n=ip.bind(t.proxy)),$watch:t=>hP.bind(t)}),fd=(t,e)=>t!==ut&&!t.__isScriptSetup&&et(t,e),qR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:u}=t;let h;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(fd(i,e))return o[e]=1,i[e];if(s!==ut&&et(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&et(h,e))return o[e]=3,r[e];if(n!==ut&&et(n,e))return o[e]=4,n[e];Gd&&(o[e]=0)}}const f=fl[e];let m,y;if(f)return e==="$attrs"&&pn(t.attrs,"get",""),f(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==ut&&et(n,e))return o[e]=4,n[e];if(y=u.config.globalProperties,et(y,e))return y[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return fd(s,e)?(s[e]=n,!0):i!==ut&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==ut&&et(t,o)||fd(e,o)||(l=r[0])&&et(l,o)||et(i,o)||et(fl,o)||et(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sg(t){return we(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gd=!0;function zR(t){const e=DE(t),n=t.proxy,i=t.ctx;Gd=!1,e.beforeCreate&&Rg(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:u,inject:h,created:f,beforeMount:m,mounted:y,beforeUpdate:w,updated:N,activated:V,deactivated:F,beforeDestroy:Y,beforeUnmount:z,destroyed:X,unmounted:Q,render:ye,renderTracked:be,renderTriggered:R,errorCaptured:b,serverPrefetch:C,expose:P,inheritAttrs:O,components:M,directives:A,filters:Nt}=e;if(h&&GR(h,i,null),o)for(const De in o){const xe=o[De];ke(xe)&&(i[De]=xe.bind(n))}if(s){const De=s.call(n,n);pt(De)&&(t.data=mh(De))}if(Gd=!0,r)for(const De in r){const xe=r[De],Pe=ke(xe)?xe.bind(n,n):ke(xe.get)?xe.get.bind(n,n):qi,S=!ke(xe)&&ke(xe.set)?xe.set.bind(n):qi,ue=$n({get:Pe,set:S});Object.defineProperty(i,De,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Ye=>ue.value=Ye})}if(l)for(const De in l)OE(l[De],i,n,De);if(u){const De=ke(u)?u.call(n):u;Reflect.ownKeys(De).forEach(xe=>{uu(xe,De[xe])})}f&&Rg(f,t,"c");function gt(De,xe){we(xe)?xe.forEach(Pe=>De(Pe.bind(n))):xe&&De(xe.bind(n))}if(gt(MR,m),gt(LR,y),gt(VR,w),gt(FR,N),gt(OR,V),gt(DR,F),gt(HR,b),gt(jR,be),gt(BR,R),gt(UR,z),gt(NE,Q),gt($R,C),we(P))if(P.length){const De=t.exposed||(t.exposed={});P.forEach(xe=>{Object.defineProperty(De,xe,{get:()=>n[xe],set:Pe=>n[xe]=Pe})})}else t.exposed||(t.exposed={});ye&&t.render===qi&&(t.render=ye),O!=null&&(t.inheritAttrs=O),M&&(t.components=M),A&&(t.directives=A),C&&RE(t)}function GR(t,e,n=qi){we(t)&&(t=Kd(t));for(const i in t){const s=t[i];let r;pt(s)?"default"in s?r=Gi(s.from||i,s.default,!0):r=Gi(s.from||i):r=Gi(s),wn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Rg(t,e,n){Yi(we(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function OE(t,e,n,i){let s=i.includes(".")?zE(n,i):()=>n[i];if(Vt(t)){const r=e[t];ke(r)&&pl(s,r)}else if(ke(t))pl(s,t.bind(n));else if(pt(t))if(we(t))t.forEach(r=>OE(r,e,n,i));else{const r=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(r)&&pl(s,r,t)}}function DE(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let u;return l?u=l:!s.length&&!n&&!i?u=e:(u={},s.length&&s.forEach(h=>xu(u,h,o,!0)),xu(u,e,o)),pt(e)&&r.set(e,u),u}function xu(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&xu(t,r,n,!0),s&&s.forEach(o=>xu(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=KR[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const KR={data:Pg,props:kg,emits:kg,methods:nl,computed:nl,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:nl,directives:nl,watch:YR,provide:Pg,inject:QR};function Pg(t,e){return e?t?function(){return Tn(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function QR(t,e){return nl(Kd(t),Kd(e))}function Kd(t){if(we(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nn(t,e){return t?[...new Set([].concat(t,e))]:e}function nl(t,e){return t?Tn(Object.create(null),t,e):e}function kg(t,e){return t?we(t)&&we(e)?[...new Set([...t,...e])]:Tn(Object.create(null),Sg(t),Sg(e??{})):e}function YR(t,e){if(!t)return e;if(!e)return t;const n=Tn(Object.create(null),t);for(const i in e)n[i]=Nn(t[i],e[i]);return n}function xE(){return{app:null,config:{isNativeTag:HS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XR=0;function JR(t,e){return function(i,s=null){ke(i)||(i=Tn({},i)),s!=null&&!pt(s)&&(s=null);const r=xE(),o=new WeakSet,l=[];let u=!1;const h=r.app={_uid:XR++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:DP,get config(){return r.config},set config(f){},use(f,...m){return o.has(f)||(f&&ke(f.install)?(o.add(f),f.install(h,...m)):ke(f)&&(o.add(f),f(h,...m))),h},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),h},component(f,m){return m?(r.components[f]=m,h):r.components[f]},directive(f,m){return m?(r.directives[f]=m,h):r.directives[f]},mount(f,m,y){if(!u){const w=h._ceVNode||ln(i,s);return w.appContext=r,y===!0?y="svg":y===!1&&(y=void 0),t(w,f,y),u=!0,h._container=f,f.__vue_app__=h,Eh(w.component)}},onUnmount(f){l.push(f)},unmount(){u&&(Yi(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,m){return r.provides[f]=m,h},runWithContext(f){const m=Ho;Ho=h;try{return f()}finally{Ho=m}}};return h}}let Ho=null;function uu(t,e){if(yn){let n=yn.provides;const i=yn.parent&&yn.parent.provides;i===n&&(n=yn.provides=Object.create(i)),n[t]=e}}function Gi(t,e,n=!1){const i=yn||Kn;if(i||Ho){let s=Ho?Ho._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}const ME={},LE=()=>Object.create(ME),VE=t=>Object.getPrototypeOf(t)===ME;function ZR(t,e,n,i=!1){const s={},r=LE();t.propsDefaults=Object.create(null),FE(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:yE(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function eP(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=Ze(s),[u]=t.propsOptions;let h=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let y=f[m];if(yh(t.emitsOptions,y))continue;const w=e[y];if(u)if(et(r,y))w!==r[y]&&(r[y]=w,h=!0);else{const N=or(y);s[N]=Qd(u,l,N,w,t,!1)}else w!==r[y]&&(r[y]=w,h=!0)}}}else{FE(t,e,s,r)&&(h=!0);let f;for(const m in l)(!e||!et(e,m)&&((f=to(m))===m||!et(e,f)))&&(u?n&&(n[m]!==void 0||n[f]!==void 0)&&(s[m]=Qd(u,l,m,void 0,t,!0)):delete s[m]);if(r!==l)for(const m in r)(!e||!et(e,m))&&(delete r[m],h=!0)}h&&ms(t.attrs,"set","")}function FE(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(ll(u))continue;const h=e[u];let f;s&&et(s,f=or(u))?!r||!r.includes(f)?n[f]=h:(l||(l={}))[f]=h:yh(t.emitsOptions,u)||(!(u in i)||h!==i[u])&&(i[u]=h,o=!0)}if(r){const u=Ze(n),h=l||ut;for(let f=0;f<r.length;f++){const m=r[f];n[m]=Qd(s,u,m,h[m],t,!et(h,m))}}return o}function Qd(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=et(o,"default");if(l&&i===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&ke(u)){const{propsDefaults:h}=s;if(n in h)i=h[n];else{const f=Zl(s);i=h[n]=u.call(null,e),f()}}else i=u;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===to(n))&&(i=!0))}return i}const tP=new WeakMap;function UE(t,e,n=!1){const i=n?tP:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let u=!1;if(!ke(t)){const f=m=>{u=!0;const[y,w]=UE(m,e,!0);Tn(o,y),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!u)return pt(t)&&i.set(t,Uo),Uo;if(we(r))for(let f=0;f<r.length;f++){const m=or(r[f]);Ng(m)&&(o[m]=ut)}else if(r)for(const f in r){const m=or(f);if(Ng(m)){const y=r[f],w=o[m]=we(y)||ke(y)?{type:y}:Tn({},y),N=w.type;let V=!1,F=!0;if(we(N))for(let Y=0;Y<N.length;++Y){const z=N[Y],X=ke(z)&&z.name;if(X==="Boolean"){V=!0;break}else X==="String"&&(F=!1)}else V=ke(N)&&N.name==="Boolean";w[0]=V,w[1]=F,(V||et(w,"default"))&&l.push(m)}}const h=[o,l];return pt(t)&&i.set(t,h),h}function Ng(t){return t[0]!=="$"&&!ll(t)}const ap=t=>t[0]==="_"||t==="$stable",lp=t=>we(t)?t.map($i):[$i(t)],nP=(t,e,n)=>{if(e._n)return e;const i=rp((...s)=>lp(e(...s)),n);return i._c=!1,i},$E=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ap(s))continue;const r=t[s];if(ke(r))e[s]=nP(s,r,i);else if(r!=null){const o=lp(r);e[s]=()=>o}}},BE=(t,e)=>{const n=lp(e);t.slots.default=()=>n},jE=(t,e,n)=>{for(const i in e)(n||!ap(i))&&(t[i]=e[i])},iP=(t,e,n)=>{const i=t.slots=LE();if(t.vnode.shapeFlag&32){const s=e.__;s&&Bd(i,"__",s,!0);const r=e._;r?(jE(i,e,n),n&&Bd(i,"_",r,!0)):$E(e,i)}else e&&BE(t,e)},sP=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ut;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:jE(s,e,n):(r=!e.$stable,$E(e,s)),o=e}else e&&(BE(t,e),o={default:1});if(r)for(const l in s)!ap(l)&&o[l]==null&&delete s[l]},zn=yP;function rP(t){return oP(t)}function oP(t,e){const n=dh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:u,setText:h,setElementText:f,parentNode:m,nextSibling:y,setScopeId:w=qi,insertStaticContent:N}=t,V=(T,I,x,j=null,W=null,q=null,ae=void 0,ne=null,te=!!I.dynamicChildren)=>{if(T===I)return;T&&!Ka(T,I)&&(j=H(T),Ye(T,W,q,!0),T=null),I.patchFlag===-2&&(te=!1,I.dynamicChildren=null);const{type:Z,ref:ge,shapeFlag:oe}=I;switch(Z){case vh:F(T,I,x,j);break;case lr:Y(T,I,x,j);break;case md:T==null&&z(I,x,j,ae);break;case Dn:M(T,I,x,j,W,q,ae,ne,te);break;default:oe&1?ye(T,I,x,j,W,q,ae,ne,te):oe&6?A(T,I,x,j,W,q,ae,ne,te):(oe&64||oe&128)&&Z.process(T,I,x,j,W,q,ae,ne,te,de)}ge!=null&&W?hl(ge,T&&T.ref,q,I||T,!I):ge==null&&T&&T.ref!=null&&hl(T.ref,null,q,T,!0)},F=(T,I,x,j)=>{if(T==null)i(I.el=l(I.children),x,j);else{const W=I.el=T.el;I.children!==T.children&&h(W,I.children)}},Y=(T,I,x,j)=>{T==null?i(I.el=u(I.children||""),x,j):I.el=T.el},z=(T,I,x,j)=>{[T.el,T.anchor]=N(T.children,I,x,j,T.el,T.anchor)},X=({el:T,anchor:I},x,j)=>{let W;for(;T&&T!==I;)W=y(T),i(T,x,j),T=W;i(I,x,j)},Q=({el:T,anchor:I})=>{let x;for(;T&&T!==I;)x=y(T),s(T),T=x;s(I)},ye=(T,I,x,j,W,q,ae,ne,te)=>{I.type==="svg"?ae="svg":I.type==="math"&&(ae="mathml"),T==null?be(I,x,j,W,q,ae,ne,te):C(T,I,W,q,ae,ne,te)},be=(T,I,x,j,W,q,ae,ne)=>{let te,Z;const{props:ge,shapeFlag:oe,transition:pe,dirs:_e}=T;if(te=T.el=o(T.type,q,ge&&ge.is,ge),oe&8?f(te,T.children):oe&16&&b(T.children,te,null,j,W,pd(T,q),ae,ne),_e&&xr(T,null,j,"created"),R(te,T,T.scopeId,ae,j),ge){for(const Ce in ge)Ce!=="value"&&!ll(Ce)&&r(te,Ce,null,ge[Ce],q,j);"value"in ge&&r(te,"value",null,ge.value,q),(Z=ge.onVnodeBeforeMount)&&Vi(Z,j,T)}_e&&xr(T,null,j,"beforeMount");const ve=aP(W,pe);ve&&pe.beforeEnter(te),i(te,I,x),((Z=ge&&ge.onVnodeMounted)||ve||_e)&&zn(()=>{Z&&Vi(Z,j,T),ve&&pe.enter(te),_e&&xr(T,null,j,"mounted")},W)},R=(T,I,x,j,W)=>{if(x&&w(T,x),j)for(let q=0;q<j.length;q++)w(T,j[q]);if(W){let q=W.subTree;if(I===q||KE(q.type)&&(q.ssContent===I||q.ssFallback===I)){const ae=W.vnode;R(T,ae,ae.scopeId,ae.slotScopeIds,W.parent)}}},b=(T,I,x,j,W,q,ae,ne,te=0)=>{for(let Z=te;Z<T.length;Z++){const ge=T[Z]=ne?Ks(T[Z]):$i(T[Z]);V(null,ge,I,x,j,W,q,ae,ne)}},C=(T,I,x,j,W,q,ae)=>{const ne=I.el=T.el;let{patchFlag:te,dynamicChildren:Z,dirs:ge}=I;te|=T.patchFlag&16;const oe=T.props||ut,pe=I.props||ut;let _e;if(x&&Mr(x,!1),(_e=pe.onVnodeBeforeUpdate)&&Vi(_e,x,I,T),ge&&xr(I,T,x,"beforeUpdate"),x&&Mr(x,!0),(oe.innerHTML&&pe.innerHTML==null||oe.textContent&&pe.textContent==null)&&f(ne,""),Z?P(T.dynamicChildren,Z,ne,x,j,pd(I,W),q):ae||xe(T,I,ne,null,x,j,pd(I,W),q,!1),te>0){if(te&16)O(ne,oe,pe,x,W);else if(te&2&&oe.class!==pe.class&&r(ne,"class",null,pe.class,W),te&4&&r(ne,"style",oe.style,pe.style,W),te&8){const ve=I.dynamicProps;for(let Ce=0;Ce<ve.length;Ce++){const $e=ve[Ce],It=oe[$e],Et=pe[$e];(Et!==It||$e==="value")&&r(ne,$e,It,Et,W,x)}}te&1&&T.children!==I.children&&f(ne,I.children)}else!ae&&Z==null&&O(ne,oe,pe,x,W);((_e=pe.onVnodeUpdated)||ge)&&zn(()=>{_e&&Vi(_e,x,I,T),ge&&xr(I,T,x,"updated")},j)},P=(T,I,x,j,W,q,ae)=>{for(let ne=0;ne<I.length;ne++){const te=T[ne],Z=I[ne],ge=te.el&&(te.type===Dn||!Ka(te,Z)||te.shapeFlag&198)?m(te.el):x;V(te,Z,ge,null,j,W,q,ae,!0)}},O=(T,I,x,j,W)=>{if(I!==x){if(I!==ut)for(const q in I)!ll(q)&&!(q in x)&&r(T,q,I[q],null,W,j);for(const q in x){if(ll(q))continue;const ae=x[q],ne=I[q];ae!==ne&&q!=="value"&&r(T,q,ne,ae,W,j)}"value"in x&&r(T,"value",I.value,x.value,W)}},M=(T,I,x,j,W,q,ae,ne,te)=>{const Z=I.el=T?T.el:l(""),ge=I.anchor=T?T.anchor:l("");let{patchFlag:oe,dynamicChildren:pe,slotScopeIds:_e}=I;_e&&(ne=ne?ne.concat(_e):_e),T==null?(i(Z,x,j),i(ge,x,j),b(I.children||[],x,ge,W,q,ae,ne,te)):oe>0&&oe&64&&pe&&T.dynamicChildren?(P(T.dynamicChildren,pe,x,W,q,ae,ne),(I.key!=null||W&&I===W.subTree)&&HE(T,I,!0)):xe(T,I,x,ge,W,q,ae,ne,te)},A=(T,I,x,j,W,q,ae,ne,te)=>{I.slotScopeIds=ne,T==null?I.shapeFlag&512?W.ctx.activate(I,x,j,ae,te):Nt(I,x,j,W,q,ae,te):Zt(T,I,te)},Nt=(T,I,x,j,W,q,ae)=>{const ne=T.component=CP(T,j,W);if(PE(T)&&(ne.ctx.renderer=de),RP(ne,!1,ae),ne.asyncDep){if(W&&W.registerDep(ne,gt,ae),!T.el){const te=ne.subTree=ln(lr);Y(null,te,I,x)}}else gt(ne,T,I,x,W,q,ae)},Zt=(T,I,x)=>{const j=I.component=T.component;if(gP(T,I,x))if(j.asyncDep&&!j.asyncResolved){De(j,I,x);return}else j.next=I,j.update();else I.el=T.el,j.vnode=I},gt=(T,I,x,j,W,q,ae)=>{const ne=()=>{if(T.isMounted){let{next:oe,bu:pe,u:_e,parent:ve,vnode:Ce}=T;{const Ot=WE(T);if(Ot){oe&&(oe.el=Ce.el,De(T,oe,ae)),Ot.asyncDep.then(()=>{T.isUnmounted||ne()});return}}let $e=oe,It;Mr(T,!1),oe?(oe.el=Ce.el,De(T,oe,ae)):oe=Ce,pe&&cu(pe),(It=oe.props&&oe.props.onVnodeBeforeUpdate)&&Vi(It,ve,oe,Ce),Mr(T,!0);const Et=Dg(T),Ft=T.subTree;T.subTree=Et,V(Ft,Et,m(Ft.el),H(Ft),T,W,q),oe.el=Et.el,$e===null&&_P(T,Et.el),_e&&zn(_e,W),(It=oe.props&&oe.props.onVnodeUpdated)&&zn(()=>Vi(It,ve,oe,Ce),W)}else{let oe;const{el:pe,props:_e}=I,{bm:ve,m:Ce,parent:$e,root:It,type:Et}=T,Ft=dl(I);Mr(T,!1),ve&&cu(ve),!Ft&&(oe=_e&&_e.onVnodeBeforeMount)&&Vi(oe,$e,I),Mr(T,!0);{It.ce&&It.ce._def.shadowRoot!==!1&&It.ce._injectChildStyle(Et);const Ot=T.subTree=Dg(T);V(null,Ot,x,j,T,W,q),I.el=Ot.el}if(Ce&&zn(Ce,W),!Ft&&(oe=_e&&_e.onVnodeMounted)){const Ot=I;zn(()=>Vi(oe,$e,Ot),W)}(I.shapeFlag&256||$e&&dl($e.vnode)&&$e.vnode.shapeFlag&256)&&T.a&&zn(T.a,W),T.isMounted=!0,I=x=j=null}};T.scope.on();const te=T.effect=new sE(ne);T.scope.off();const Z=T.update=te.run.bind(te),ge=T.job=te.runIfDirty.bind(te);ge.i=T,ge.id=T.uid,te.scheduler=()=>sp(ge),Mr(T,!0),Z()},De=(T,I,x)=>{I.component=T;const j=T.vnode.props;T.vnode=I,T.next=null,eP(T,I.props,j,x),sP(T,I.children,x),Rs(),Cg(T),Ps()},xe=(T,I,x,j,W,q,ae,ne,te=!1)=>{const Z=T&&T.children,ge=T?T.shapeFlag:0,oe=I.children,{patchFlag:pe,shapeFlag:_e}=I;if(pe>0){if(pe&128){S(Z,oe,x,j,W,q,ae,ne,te);return}else if(pe&256){Pe(Z,oe,x,j,W,q,ae,ne,te);return}}_e&8?(ge&16&&rt(Z,W,q),oe!==Z&&f(x,oe)):ge&16?_e&16?S(Z,oe,x,j,W,q,ae,ne,te):rt(Z,W,q,!0):(ge&8&&f(x,""),_e&16&&b(oe,x,j,W,q,ae,ne,te))},Pe=(T,I,x,j,W,q,ae,ne,te)=>{T=T||Uo,I=I||Uo;const Z=T.length,ge=I.length,oe=Math.min(Z,ge);let pe;for(pe=0;pe<oe;pe++){const _e=I[pe]=te?Ks(I[pe]):$i(I[pe]);V(T[pe],_e,x,null,W,q,ae,ne,te)}Z>ge?rt(T,W,q,!0,!1,oe):b(I,x,j,W,q,ae,ne,te,oe)},S=(T,I,x,j,W,q,ae,ne,te)=>{let Z=0;const ge=I.length;let oe=T.length-1,pe=ge-1;for(;Z<=oe&&Z<=pe;){const _e=T[Z],ve=I[Z]=te?Ks(I[Z]):$i(I[Z]);if(Ka(_e,ve))V(_e,ve,x,null,W,q,ae,ne,te);else break;Z++}for(;Z<=oe&&Z<=pe;){const _e=T[oe],ve=I[pe]=te?Ks(I[pe]):$i(I[pe]);if(Ka(_e,ve))V(_e,ve,x,null,W,q,ae,ne,te);else break;oe--,pe--}if(Z>oe){if(Z<=pe){const _e=pe+1,ve=_e<ge?I[_e].el:j;for(;Z<=pe;)V(null,I[Z]=te?Ks(I[Z]):$i(I[Z]),x,ve,W,q,ae,ne,te),Z++}}else if(Z>pe)for(;Z<=oe;)Ye(T[Z],W,q,!0),Z++;else{const _e=Z,ve=Z,Ce=new Map;for(Z=ve;Z<=pe;Z++){const Ut=I[Z]=te?Ks(I[Z]):$i(I[Z]);Ut.key!=null&&Ce.set(Ut.key,Z)}let $e,It=0;const Et=pe-ve+1;let Ft=!1,Ot=0;const Si=new Array(Et);for(Z=0;Z<Et;Z++)Si[Z]=0;for(Z=_e;Z<=oe;Z++){const Ut=T[Z];if(It>=Et){Ye(Ut,W,q,!0);continue}let xn;if(Ut.key!=null)xn=Ce.get(Ut.key);else for($e=ve;$e<=pe;$e++)if(Si[$e-ve]===0&&Ka(Ut,I[$e])){xn=$e;break}xn===void 0?Ye(Ut,W,q,!0):(Si[xn-ve]=Z+1,xn>=Ot?Ot=xn:Ft=!0,V(Ut,I[xn],x,null,W,q,ae,ne,te),It++)}const ns=Ft?lP(Si):Uo;for($e=ns.length-1,Z=Et-1;Z>=0;Z--){const Ut=ve+Z,xn=I[Ut],oo=Ut+1<ge?I[Ut+1].el:j;Si[Z]===0?V(null,xn,x,oo,W,q,ae,ne,te):Ft&&($e<0||Z!==ns[$e]?ue(xn,x,oo,2):$e--)}}},ue=(T,I,x,j,W=null)=>{const{el:q,type:ae,transition:ne,children:te,shapeFlag:Z}=T;if(Z&6){ue(T.component.subTree,I,x,j);return}if(Z&128){T.suspense.move(I,x,j);return}if(Z&64){ae.move(T,I,x,de);return}if(ae===Dn){i(q,I,x);for(let oe=0;oe<te.length;oe++)ue(te[oe],I,x,j);i(T.anchor,I,x);return}if(ae===md){X(T,I,x);return}if(j!==2&&Z&1&&ne)if(j===0)ne.beforeEnter(q),i(q,I,x),zn(()=>ne.enter(q),W);else{const{leave:oe,delayLeave:pe,afterLeave:_e}=ne,ve=()=>{T.ctx.isUnmounted?s(q):i(q,I,x)},Ce=()=>{oe(q,()=>{ve(),_e&&_e()})};pe?pe(q,ve,Ce):Ce()}else i(q,I,x)},Ye=(T,I,x,j=!1,W=!1)=>{const{type:q,props:ae,ref:ne,children:te,dynamicChildren:Z,shapeFlag:ge,patchFlag:oe,dirs:pe,cacheIndex:_e}=T;if(oe===-2&&(W=!1),ne!=null&&(Rs(),hl(ne,null,x,T,!0),Ps()),_e!=null&&(I.renderCache[_e]=void 0),ge&256){I.ctx.deactivate(T);return}const ve=ge&1&&pe,Ce=!dl(T);let $e;if(Ce&&($e=ae&&ae.onVnodeBeforeUnmount)&&Vi($e,I,T),ge&6)jt(T.component,x,j);else{if(ge&128){T.suspense.unmount(x,j);return}ve&&xr(T,null,I,"beforeUnmount"),ge&64?T.type.remove(T,I,x,de,j):Z&&!Z.hasOnce&&(q!==Dn||oe>0&&oe&64)?rt(Z,I,x,!1,!0):(q===Dn&&oe&384||!W&&ge&16)&&rt(te,I,x),j&&Ve(T)}(Ce&&($e=ae&&ae.onVnodeUnmounted)||ve)&&zn(()=>{$e&&Vi($e,I,T),ve&&xr(T,null,I,"unmounted")},x)},Ve=T=>{const{type:I,el:x,anchor:j,transition:W}=T;if(I===Dn){St(x,j);return}if(I===md){Q(T);return}const q=()=>{s(x),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(T.shapeFlag&1&&W&&!W.persisted){const{leave:ae,delayLeave:ne}=W,te=()=>ae(x,q);ne?ne(T.el,q,te):te()}else q()},St=(T,I)=>{let x;for(;T!==I;)x=y(T),s(T),T=x;s(I)},jt=(T,I,x)=>{const{bum:j,scope:W,job:q,subTree:ae,um:ne,m:te,a:Z,parent:ge,slots:{__:oe}}=T;Og(te),Og(Z),j&&cu(j),ge&&we(oe)&&oe.forEach(pe=>{ge.renderCache[pe]=void 0}),W.stop(),q&&(q.flags|=8,Ye(ae,T,I,x)),ne&&zn(ne,I),zn(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},rt=(T,I,x,j=!1,W=!1,q=0)=>{for(let ae=q;ae<T.length;ae++)Ye(T[ae],I,x,j,W)},H=T=>{if(T.shapeFlag&6)return H(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=y(T.anchor||T.el),x=I&&I[kR];return x?y(x):I};let B=!1;const re=(T,I,x)=>{T==null?I._vnode&&Ye(I._vnode,null,null,!0):V(I._vnode||null,T,I,null,null,null,x),I._vnode=T,B||(B=!0,Cg(),AE(),B=!1)},de={p:V,um:Ye,m:ue,r:Ve,mt:Nt,mc:b,pc:xe,pbc:P,n:H,o:t};return{render:re,hydrate:void 0,createApp:JR(re)}}function pd({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function aP(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function HE(t,e,n=!1){const i=t.children,s=e.children;if(we(i)&&we(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Ks(s[r]),l.el=o.el),!n&&l.patchFlag!==-2&&HE(o,l)),l.type===vh&&(l.el=o.el),l.type===lr&&!l.el&&(l.el=o.el)}}function lP(t){const e=t.slice(),n=[0];let i,s,r,o,l;const u=t.length;for(i=0;i<u;i++){const h=t[i];if(h!==0){if(s=n[n.length-1],t[s]<h){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<h?r=l+1:o=l;h<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function WE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:WE(e)}function Og(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cP=Symbol.for("v-scx"),uP=()=>Gi(cP);function pl(t,e,n){return qE(t,e,n)}function qE(t,e,n=ut){const{immediate:i,deep:s,flush:r,once:o}=n,l=Tn({},n),u=e&&i||!e&&r!=="post";let h;if(Ml){if(r==="sync"){const w=uP();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!u){const w=()=>{};return w.stop=qi,w.resume=qi,w.pause=qi,w}}const f=yn;l.call=(w,N,V)=>Yi(w,f,N,V);let m=!1;r==="post"?l.scheduler=w=>{zn(w,f&&f.suspense)}:r!=="sync"&&(m=!0,l.scheduler=(w,N)=>{N?w():sp(w)}),l.augmentJob=w=>{e&&(w.flags|=4),m&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const y=CR(t,e,l);return Ml&&(h?h.push(y):u&&y()),y}function hP(t,e,n){const i=this.proxy,s=Vt(t)?t.includes(".")?zE(i,t):()=>i[t]:t.bind(i,i);let r;ke(e)?r=e:(r=e.handler,n=e);const o=Zl(this),l=qE(s,r.bind(i),n);return o(),l}function zE(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const dP=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${or(e)}Modifiers`]||t[`${to(e)}Modifiers`];function fP(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ut;let s=n;const r=e.startsWith("update:"),o=r&&dP(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>Vt(f)?f.trim():f)),o.number&&(s=n.map(Pu)));let l,u=i[l=ld(e)]||i[l=ld(or(e))];!u&&r&&(u=i[l=ld(to(e))]),u&&Yi(u,t,6,s);const h=i[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Yi(h,t,6,s)}}function GE(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!ke(t)){const u=h=>{const f=GE(h,e,!0);f&&(l=!0,Tn(o,f))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!r&&!l?(pt(t)&&i.set(t,null),null):(we(r)?r.forEach(u=>o[u]=null):Tn(o,r),pt(t)&&i.set(t,o),o)}function yh(t,e){return!t||!uh(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,to(e))||et(t,e))}function Dg(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:u,render:h,renderCache:f,props:m,data:y,setupState:w,ctx:N,inheritAttrs:V}=t,F=Du(t);let Y,z;try{if(n.shapeFlag&4){const Q=s||i,ye=Q;Y=$i(h.call(ye,Q,f,m,w,y,N)),z=l}else{const Q=e;Y=$i(Q.length>1?Q(m,{attrs:l,slots:o,emit:u}):Q(m,null)),z=e.props?l:pP(l)}}catch(Q){ml.length=0,gh(Q,t,1),Y=ln(lr)}let X=Y;if(z&&V!==!1){const Q=Object.keys(z),{shapeFlag:ye}=X;Q.length&&ye&7&&(r&&Q.some(qf)&&(z=mP(z,r)),X=Yo(X,z,!1,!0))}return n.dirs&&(X=Yo(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&op(X,n.transition),Y=X,Du(F),Y}const pP=t=>{let e;for(const n in t)(n==="class"||n==="style"||uh(n))&&((e||(e={}))[n]=t[n]);return e},mP=(t,e)=>{const n={};for(const i in t)(!qf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function gP(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:u}=e,h=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return i?xg(i,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const y=f[m];if(o[y]!==i[y]&&!yh(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?xg(i,o,h):!0:!!o;return!1}function xg(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!yh(n,r))return!0}return!1}function _P({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const KE=t=>t.__isSuspense;function yP(t,e){e&&e.pendingBranch?we(t)?e.effects.push(...t):e.effects.push(t):PR(t)}const Dn=Symbol.for("v-fgt"),vh=Symbol.for("v-txt"),lr=Symbol.for("v-cmt"),md=Symbol.for("v-stc"),ml=[];let Qn=null;function wt(t=!1){ml.push(Qn=t?null:[])}function vP(){ml.pop(),Qn=ml[ml.length-1]||null}let xl=1;function Mg(t,e=!1){xl+=t,t<0&&Qn&&e&&(Qn.hasOnce=!0)}function QE(t){return t.dynamicChildren=xl>0?Qn||Uo:null,vP(),xl>0&&Qn&&Qn.push(t),t}function At(t,e,n,i,s,r){return QE(ee(t,e,n,i,s,r,!0))}function EP(t,e,n,i,s){return QE(ln(t,e,n,i,s,!0))}function Mu(t){return t?t.__v_isVNode===!0:!1}function Ka(t,e){return t.type===e.type&&t.key===e.key}const YE=({key:t})=>t??null,hu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Vt(t)||wn(t)||ke(t)?{i:Kn,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,i=0,s=null,r=t===Dn?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&YE(e),ref:e&&hu(e),scopeId:SE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kn};return l?(cp(u,n),r&128&&t.normalize(u)):n&&(u.shapeFlag|=Vt(n)?8:16),xl>0&&!o&&Qn&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Qn.push(u),u}const ln=wP;function wP(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===WR)&&(t=lr),Mu(t)){const l=Yo(t,e,!0);return n&&cp(l,n),xl>0&&!r&&Qn&&(l.shapeFlag&6?Qn[Qn.indexOf(t)]=l:Qn.push(l)),l.patchFlag=-2,l}if(OP(t)&&(t=t.__vccOpts),e){e=bP(e);let{class:l,style:u}=e;l&&!Vt(l)&&(e.class=Kf(l)),pt(u)&&(np(u)&&!we(u)&&(u=Tn({},u)),e.style=fh(u))}const o=Vt(t)?1:KE(t)?128:NR(t)?64:pt(t)?4:ke(t)?2:0;return ee(t,e,n,i,s,o,r,!0)}function bP(t){return t?np(t)||VE(t)?Tn({},t):t:null}function Yo(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:u}=t,h=e?TP(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&YE(h),ref:e&&e.ref?n&&r?we(r)?r.concat(hu(e)):[r,hu(e)]:hu(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yo(t.ssContent),ssFallback:t.ssFallback&&Yo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&i&&op(f,u.clone(f)),f}function tn(t=" ",e=0){return ln(vh,null,t,e)}function Li(t="",e=!1){return e?(wt(),EP(lr,null,t)):ln(lr,null,t)}function $i(t){return t==null||typeof t=="boolean"?ln(lr):we(t)?ln(Dn,null,t.slice()):Mu(t)?Ks(t):ln(vh,null,String(t))}function Ks(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yo(t)}function cp(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(we(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),cp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!VE(e)?e._ctx=Kn:s===3&&Kn&&(Kn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Kn},n=32):(e=String(e),i&64?(n=16,e=[tn(e)]):n=8);t.children=e,t.shapeFlag|=n}function TP(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Kf([e.class,i.class]));else if(s==="style")e.style=fh([e.style,i.style]);else if(uh(s)){const r=e[s],o=i[s];o&&r!==o&&!(we(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Vi(t,e,n,i=null){Yi(t,e,7,[n,i])}const IP=xE();let AP=0;function CP(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||IP,r={uid:AP++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:UE(i,s),emitsOptions:GE(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fP.bind(null,r),t.ce&&t.ce(r),r}let yn=null;const SP=()=>yn||Kn;let Lu,Yd;{const t=dh(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Lu=e("__VUE_INSTANCE_SETTERS__",n=>yn=n),Yd=e("__VUE_SSR_SETTERS__",n=>Ml=n)}const Zl=t=>{const e=yn;return Lu(t),t.scope.on(),()=>{t.scope.off(),Lu(e)}},Lg=()=>{yn&&yn.scope.off(),Lu(null)};function XE(t){return t.vnode.shapeFlag&4}let Ml=!1;function RP(t,e=!1,n=!1){e&&Yd(e);const{props:i,children:s}=t.vnode,r=XE(t);ZR(t,i,r,e),iP(t,s,n||e);const o=r?PP(t,e):void 0;return e&&Yd(!1),o}function PP(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qR);const{setup:i}=n;if(i){Rs();const s=t.setupContext=i.length>1?NP(t):null,r=Zl(t),o=Jl(i,t,0,[t.props,s]),l=Qv(o);if(Ps(),r(),(l||t.sp)&&!dl(t)&&RE(t),l){if(o.then(Lg,Lg),e)return o.then(u=>{Vg(t,u)}).catch(u=>{gh(u,t,0)});t.asyncDep=o}else Vg(t,o)}else JE(t)}function Vg(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=bE(e)),JE(t)}function JE(t,e,n){const i=t.type;t.render||(t.render=i.render||qi);{const s=Zl(t);Rs();try{zR(t)}finally{Ps(),s()}}}const kP={get(t,e){return pn(t,"get",""),t[e]}};function NP(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kP),slots:t.slots,emit:t.emit,expose:e}}function Eh(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bE(EE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fl)return fl[n](t)},has(e,n){return n in e||n in fl}})):t.proxy}function OP(t){return ke(t)&&"__vccOpts"in t}const $n=(t,e)=>IR(t,e,Ml);function ZE(t,e,n){const i=arguments.length;return i===2?pt(e)&&!we(e)?Mu(e)?ln(t,null,[e]):ln(t,e):ln(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Mu(n)&&(n=[n]),ln(t,e,n))}const DP="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xd;const Fg=typeof window<"u"&&window.trustedTypes;if(Fg)try{Xd=Fg.createPolicy("vue",{createHTML:t=>t})}catch{}const ew=Xd?t=>Xd.createHTML(t):t=>t,xP="http://www.w3.org/2000/svg",MP="http://www.w3.org/1998/Math/MathML",ps=typeof document<"u"?document:null,Ug=ps&&ps.createElement("template"),LP={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?ps.createElementNS(xP,t):e==="mathml"?ps.createElementNS(MP,t):n?ps.createElement(t,{is:n}):ps.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ps.createTextNode(t),createComment:t=>ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ug.innerHTML=ew(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Ug.content;if(i==="svg"||i==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},VP=Symbol("_vtc");function FP(t,e,n){const i=t[VP];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $g=Symbol("_vod"),UP=Symbol("_vsh"),$P=Symbol(""),BP=/(^|;)\s*display\s*:/;function jP(t,e,n){const i=t.style,s=Vt(n);let r=!1;if(n&&!s){if(e)if(Vt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&du(i,l,"")}else for(const o in e)n[o]==null&&du(i,o,"");for(const o in n)o==="display"&&(r=!0),du(i,o,n[o])}else if(s){if(e!==n){const o=i[$P];o&&(n+=";"+o),i.cssText=n,r=BP.test(n)}}else e&&t.removeAttribute("style");$g in t&&(t[$g]=r?i.display:"",t[UP]&&(i.display="none"))}const Bg=/\s*!important$/;function du(t,e,n){if(we(n))n.forEach(i=>du(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=HP(t,e);Bg.test(n)?t.setProperty(to(i),n.replace(Bg,""),"important"):t[i]=n}}const jg=["Webkit","Moz","ms"],gd={};function HP(t,e){const n=gd[e];if(n)return n;let i=or(e);if(i!=="filter"&&i in t)return gd[e]=i;i=Jv(i);for(let s=0;s<jg.length;s++){const r=jg[s]+i;if(r in t)return gd[e]=r}return e}const Hg="http://www.w3.org/1999/xlink";function Wg(t,e,n,i,s,r=ZS(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hg,e.slice(6,e.length)):t.setAttributeNS(Hg,e,n):n==null||r&&!Zv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Qi(n)?String(n):n)}function qg(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ew(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zv(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function er(t,e,n,i){t.addEventListener(e,n,i)}function WP(t,e,n,i){t.removeEventListener(e,n,i)}const zg=Symbol("_vei");function qP(t,e,n,i,s=null){const r=t[zg]||(t[zg]={}),o=r[e];if(i&&o)o.value=i;else{const[l,u]=zP(e);if(i){const h=r[e]=QP(i,s);er(t,l,h,u)}else o&&(WP(t,l,o,u),r[e]=void 0)}}const Gg=/(?:Once|Passive|Capture)$/;function zP(t){let e;if(Gg.test(t)){e={};let i;for(;i=t.match(Gg);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):to(t.slice(2)),e]}let _d=0;const GP=Promise.resolve(),KP=()=>_d||(GP.then(()=>_d=0),_d=Date.now());function QP(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Yi(YP(i,n.value),e,5,[i])};return n.value=t,n.attached=KP(),n}function YP(t,e){if(we(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Kg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,XP=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?FP(t,i,o):e==="style"?jP(t,n,i):uh(e)?qf(e)||qP(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JP(t,e,i,o))?(qg(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wg(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Vt(i))?qg(t,or(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wg(t,e,i,o))};function JP(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kg(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kg(e)&&Vt(n)?!1:e in t}const Xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return we(e)?n=>cu(e,n):e};function ZP(t){t.target.composing=!0}function Qg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Es=Symbol("_assign"),Qa={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Es]=Xo(s);const r=i||s.props&&s.props.type==="number";er(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Pu(l)),t[Es](l)}),n&&er(t,"change",()=>{t.value=t.value.trim()}),e||(er(t,"compositionstart",ZP),er(t,"compositionend",Qg),er(t,"change",Qg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Es]=Xo(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Pu(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===u)||(t.value=u))}},ek={deep:!0,created(t,e,n){t[Es]=Xo(n),er(t,"change",()=>{const i=t._modelValue,s=Ll(t),r=t.checked,o=t[Es];if(we(i)){const l=Qf(i,s),u=l!==-1;if(r&&!u)o(i.concat(s));else if(!r&&u){const h=[...i];h.splice(l,1),o(h)}}else if(fa(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(tw(t,r))})},mounted:Yg,beforeUpdate(t,e,n){t[Es]=Xo(n),Yg(t,e,n)}};function Yg(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(we(e))s=Qf(e,i.props.value)>-1;else if(fa(e))s=e.has(i.props.value);else{if(e===n)return;s=Xl(e,tw(t,!0))}t.checked!==s&&(t.checked=s)}const qc={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=fa(e);er(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pu(Ll(o)):Ll(o));t[Es](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,ip(()=>{t._assigning=!1})}),t[Es]=Xo(i)},mounted(t,{value:e}){Xg(t,e)},beforeUpdate(t,e,n){t[Es]=Xo(n)},updated(t,{value:e}){t._assigning||Xg(t,e)}};function Xg(t,e){const n=t.multiple,i=we(e);if(!(n&&!i&&!fa(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],l=Ll(o);if(n)if(i){const u=typeof l;u==="string"||u==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=Qf(e,l)>-1}else o.selected=e.has(l);else if(Xl(Ll(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ll(t){return"_value"in t?t._value:t.value}function tw(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tk=Tn({patchProp:XP},LP);let Jg;function nk(){return Jg||(Jg=rP(tk))}const ik=(...t)=>{const e=nk().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=rk(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sk(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sk(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rk(t){return Vt(t)?document.querySelector(t):t}/**
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
 */const ok=new Map,ak={activated:!1,tokenObservers:[]};function Ai(t){return ok.get(t)||Object.assign({},ak)}const Zg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class lk{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Sl,this.pending.promise.catch(n=>{}),await ck(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Sl,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ck(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const uk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Vu=new ua("appCheck","AppCheck",uk);function nw(t){if(!Ai(t).activated)throw Vu.create("use-before-activation",{appName:t.name})}/**
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
 */const hk="firebase-app-check-database",dk=1,Jd="firebase-app-check-store";let zc=null;function fk(){return zc||(zc=new Promise((t,e)=>{try{const n=indexedDB.open(hk,dk);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Vu.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(Jd,{keyPath:"compositeKey"})}}}catch(n){e(Vu.create("storage-open",{originalErrorMessage:n?.message}))}}),zc)}function pk(t,e){return mk(gk(t),e)}async function mk(t,e){const i=(await fk()).transaction(Jd,"readwrite"),r=i.objectStore(Jd).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=u=>{o()},i.onerror=u=>{var h;l(Vu.create("storage-set",{originalErrorMessage:(h=u.target.error)===null||h===void 0?void 0:h.message}))}})}function gk(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Zd=new zl("@firebase/app-check");function e_(t,e){return av()?pk(t,e).catch(n=>{Zd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const _k={error:"UNKNOWN_ERROR"};function yk(t){return rh.encodeString(JSON.stringify(t),!1)}async function ef(t,e=!1,n=!1){const i=t.app;nw(i);const s=Ai(i);let r=s.token,o;if(r&&!il(r)&&(s.token=void 0,r=void 0),!r){const h=await s.cachedTokenPromise;h&&(il(h)?r=h:await e_(i,void 0))}if(!e&&r&&il(r))return{token:r.token};let l=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),r=await Ai(i).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Zd.warn(h.message):n&&Zd.error(h),o=h}let u;return r?o?il(r)?u={token:r.token,internalError:o}:u=n_(o):(u={token:r.token},s.token=r,await e_(i,r)):u=n_(o),l&&bk(i,u),u}async function vk(t){const e=t.app;nw(e);const{provider:n}=Ai(e);{const{token:i}=await n.getToken();return{token:i}}}function Ek(t,e,n,i){const{app:s}=t,r=Ai(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&il(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),t_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>t_(t))}function iw(t,e){const n=Ai(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function t_(t){const{app:e}=t,n=Ai(e);let i=n.tokenRefresher;i||(i=wk(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function wk(t){const{app:e}=t;return new lk(async()=>{const n=Ai(e);let i;if(n.token?i=await ef(t,!0):i=await ef(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Ai(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Zg.RETRIAL_MIN_WAIT,Zg.RETRIAL_MAX_WAIT)}function bk(t,e){const n=Ai(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function il(t){return t.expireTimeMillis-Date.now()>0}function n_(t){return{token:yk(_k),error:t}}/**
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
 */class Tk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ai(this.app);for(const n of e)iw(this.app,n.next);return Promise.resolve()}}function Ik(t,e){return new Tk(t,e)}function Ak(t){return{getToken:e=>ef(t,e),getLimitedUseToken:()=>vk(t),addTokenListener:e=>Ek(t,"INTERNAL",e),removeTokenListener:e=>iw(t.app,e)}}const Ck="@firebase/app-check",Sk="0.10.1",Rk="app-check",i_="app-check-internal";function Pk(){Ki(new Ii(Rk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ik(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(i_).initialize()})),Ki(new Ii(i_,t=>{const e=t.getProvider("app-check").getImmediate();return Ak(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yn(Ck,Sk)}Pk();var kk="firebase",Nk="11.10.0";/**
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
 */Yn(kk,Nk,"app");const sw=Symbol("firebaseApp");function rw(t){return SP()&&Gi(sw,null)||Of(t)}const Gc=new WeakMap;function Ok(t,e){if(!Gc.has(t)){const n=iE(!0);Gc.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Gc.delete(t)}}return Gc.get(t)}const Dk=new WeakMap,Kc=new WeakMap;function xk(t){const e=rw(t);if(!Kc.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{Kc.set(e,r),n(r.value)}];Kc.set(e,s)}return Kc.get(e)}function Mk(t,e){Lv(e,n=>{const i=xk();t.value=n,Array.isArray(i)&&i[1](t)})}var s_={};const r_="@firebase/database",o_="1.0.20";/**
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
 */let ow="";function Lk(t){ow=t}/**
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
 */class Vk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),on(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Fk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ks(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const aw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vk(e)}}catch{}return new Fk},Ur=aw("localStorage"),Uk=aw("sessionStorage");/**
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
 */const Wo=new zl("@firebase/database"),$k=function(){let t=1;return function(){return t++}}(),lw=function(t){const e=BA(t),n=new LA;n.update(e);const i=n.digest();return rh.encodeByteArray(i)},ec=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ec.apply(null,i):typeof i=="object"?e+=on(i):e+=i,e+=" "}return e};let gl=null,a_=!0;const Bk=function(t,e){le(!0,"Can't turn on custom loggers persistently."),Wo.logLevel=Ue.VERBOSE,gl=Wo.log.bind(Wo)},mn=function(...t){if(a_===!0&&(a_=!1,gl===null&&Uk.get("logging_enabled")===!0&&Bk()),gl){const e=ec.apply(null,t);gl(e)}},tc=function(t){return function(...e){mn(t,...e)}},tf=function(...t){const e="FIREBASE INTERNAL ERROR: "+ec(...t);Wo.error(e)},Gr=function(...t){const e=`FIREBASE FATAL ERROR: ${ec(...t)}`;throw Wo.error(e),new Error(e)},Xn=function(...t){const e="FIREBASE WARNING: "+ec(...t);Wo.warn(e)},jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Hk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jo="[MIN_NAME]",Kr="[MAX_NAME]",ma=function(t,e){if(t===e)return 0;if(t===Jo||e===Kr)return-1;if(e===Jo||t===Kr)return 1;{const n=l_(t),i=l_(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Wk=function(t,e){return t===e?0:t<e?-1:1},Ya=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+on(e))},up=function(t){if(typeof t!="object"||t===null)return on(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=on(e[i]),n+=":",n+=up(t[e[i]]);return n+="}",n},uw=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function ci(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hw=function(t){le(!cw(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,u;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let m="";for(u=0;u<64;u+=8){let y=parseInt(f.substr(u,8),2).toString(16);y.length===1&&(y="0"+y),m=m+y}return m.toLowerCase()},qk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Gk=new RegExp("^-?(0*)\\d{1,10}$"),Kk=-2147483648,Qk=2147483647,l_=function(t){if(Gk.test(t)){const e=Number(t);if(e>=Kk&&e<=Qk)return e}return null},nc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xn("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_l=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Xk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ri(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Jk{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xn(e)}}/**
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
 */const hp="5",dw="v",fw="s",pw="r",mw="f",gw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_w="ls",yw="p",nf="ac",vw="websocket",Ew="long_polling";/**
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
 */class Zk{constructor(e,n,i,s,r=!1,o="",l=!1,u=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ww(t,e,n){le(typeof e=="string","typeof type must == string"),le(typeof n=="object","typeof params must == object");let i;if(e===vw)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ew)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eN(t)&&(n.ns=t.namespace);const s=[];return ci(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class tN{constructor(){this.counters_={}}incrementCounter(e,n=1){ks(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pA(this.counters_)}}/**
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
 */const yd={},vd={};function dp(t){const e=t.toString();return yd[e]||(yd[e]=new tN),yd[e]}function nN(t,e){const n=t.toString();return vd[n]||(vd[n]=e()),vd[n]}/**
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
 */class iN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&nc(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const c_="start",sN="close",rN="pLPCommand",oN="pRTLPCB",bw="id",Tw="pw",Iw="ser",aN="cb",lN="seg",cN="ts",uN="d",hN="dframe",Aw=1870,Cw=30,dN=Aw-Cw,fN=25e3,pN=3e4;class xo{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tc(e),this.stats_=dp(n),this.urlFn=u=>(this.appCheckToken&&(u[nf]=this.appCheckToken),ww(n,Ew,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new iN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pN)),Hk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fp((...r)=>{const[o,l,u,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===c_)this.id=l,this.password=u;else if(o===sN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[c_]="t",i[Iw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[aN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[dw]=hp,this.transportSessionId&&(i[fw]=this.transportSessionId),this.lastSessionId&&(i[_w]=this.lastSessionId),this.applicationId&&(i[yw]=this.applicationId),this.appCheckToken&&(i[nf]=this.appCheckToken),typeof location<"u"&&location.hostname&&gw.test(location.hostname)&&(i[pw]=mw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xo.forceAllow_=!0}static forceDisallow(){xo.forceDisallow_=!0}static isAvailable(){return xo.forceAllow_?!0:!xo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qk()&&!zk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=on(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Zy(n),s=uw(i,dN);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[hN]="t",i[bw]=e,i[Tw]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=on(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fp{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$k(),window[rN+this.uniqueCallbackIdentifier]=e,window[oN+this.uniqueCallbackIdentifier]=n,this.myIFrame=fp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){mn("frame writing exception"),l.stack&&mn(l.stack),mn(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bw]=this.myID,e[Tw]=this.myPW,e[Iw]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cw+i.length<=Aw;){const o=this.pendingSegs.shift();i=i+"&"+lN+s+"="+o.seg+"&"+cN+s+"="+o.ts+"&"+uN+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(fN)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const mN=16384,gN=45e3;let Fu=null;typeof MozWebSocket<"u"?Fu=MozWebSocket:typeof WebSocket<"u"&&(Fu=WebSocket);class mi{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tc(this.connId),this.stats_=dp(n),this.connURL=mi.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[dw]=hp,typeof location<"u"&&location.hostname&&gw.test(location.hostname)&&(o[pw]=mw),n&&(o[fw]=n),i&&(o[_w]=i),s&&(o[nf]=s),r&&(o[yw]=r),ww(e,vw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ur.set("previous_websocket_failure",!0);try{let i;RA(),this.mySock=new Fu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Fu!==null&&!mi.forceDisallow_}static previouslyFailed(){return Ur.isInMemoryStorage||Ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Rl(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=on(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=uw(n,mN);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mi.responsesRequiredToBeHealthy=2;mi.healthyTimeout=3e4;/**
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
 */class Vl{static get ALL_TRANSPORTS(){return[xo,mi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mi&&mi.isAvailable();let i=n&&!mi.previouslyFailed();if(e.webSocketOnly&&(n||Xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[mi];else{const s=this.transports_=[];for(const r of Vl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Vl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vl.globalTransportInitialized_=!1;/**
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
 */const _N=6e4,yN=5e3,vN=10*1024,EN=100*1024,Ed="t",u_="d",wN="s",h_="r",bN="e",d_="o",f_="a",p_="n",m_="p",TN="h";class IN{constructor(e,n,i,s,r,o,l,u,h,f){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tc("c:"+this.id+":"),this.transportManager_=new Vl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=_l(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ed in e){const n=e[Ed];n===f_?this.upgradeIfSecondaryHealthy_():n===h_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===d_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ya("t",e),i=Ya("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:f_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:p_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ya("t",e),i=Ya("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ya(Ed,e);if(u_ in e){const i=e[u_];if(n===TN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===p_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wN?this.onConnectionShutdown_(i):n===h_?this.onReset_(i):n===bN?tf("Server Error: "+i):n===d_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hp!==i&&Xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),_l(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_N))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_l(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:m_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sw{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Rw{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){le(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Uu extends Rw{static getInstance(){return new Uu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const g_=32,__=768;class vt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function lt(){return new vt("")}function ze(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cr(t){return t.pieces_.length-t.pieceNum_}function yt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new vt(t.pieces_,e)}function Pw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new vt(e,0)}function Xt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof vt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new vt(n,0)}function je(t){return t.pieceNum_>=t.pieces_.length}function oi(t,e){const n=ze(t),i=ze(e);if(n===null)return e;if(n===i)return oi(yt(t),yt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ow(t,e){if(cr(t)!==cr(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function vi(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(cr(t)>cr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class CN{constructor(e,n){this.errorPrefix_=n,this.parts_=kw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ah(this.parts_[i]);Dw(this)}}function SN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ah(e),Dw(t)}function RN(t){const e=t.parts_.pop();t.byteLength_-=ah(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dw(t){if(t.byteLength_>__)throw new Error(t.errorPrefix_+"has a key path longer than "+__+" bytes ("+t.byteLength_+").");if(t.parts_.length>g_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+g_+") or object contains a cycle "+Fr(t))}function Fr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class pp extends Rw{static getInstance(){return new pp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xa=1e3,PN=60*5*1e3,y_=30*1e3,kN=1.3,NN=3e4,ON="server_kill",v_=3;class ws extends Sw{constructor(e,n,i,s,r,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=ws.nextPersistentConnectionId_++,this.log_=tc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xa,this.maxReconnectDelay_=PN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(on(r)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Sl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const u=l.d,h=l.s;ws.warnOnListenWarnings_(u,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ks(e,"w")){const i=Ko(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=y_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xA(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+on(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tf("Unrecognized action received from server: "+on(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NN&&(this.reconnectDelay_=Xa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ws.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,i())},h=function(m){le(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(m)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[m,y]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?mn("getToken() completed but was canceled"):(mn("getToken() completed. Creating connection."),this.authToken_=m&&m.accessToken,this.appCheckToken_=y&&y.token,l=new IN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,w=>{Xn(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(ON)},r))}catch(m){this.log_("Failed to get token: "+m),o||(this.repoInfo_.nodeAdmin&&Xn(m),u())}}}interrupt(e){mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Od(this.interruptReasons_)&&(this.reconnectDelay_=Xa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>up(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new vt(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){mn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=v_&&(this.reconnectDelay_=y_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=v_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ow.replace(/\./g,"-")]=1,Pf()?e["framework.cordova"]=1:ov()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uu.getInstance().currentlyOnline();return Od(this.interruptReasons_)&&e}}ws.nextPersistentConnectionId_=0;ws.nextConnectionId_=0;/**
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
 */class Ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ge(e,n)}}/**
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
 */class wh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Ge(Jo,e),s=new Ge(Jo,n);return this.compare(i,s)!==0}minPost(){return Ge.MIN}}/**
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
 */let Qc;class xw extends wh{static get __EMPTY_NODE(){return Qc}static set __EMPTY_NODE(e){Qc=e}compare(e,n){return ma(e.name,n.name)}isDefinedOn(e){throw la("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ge.MIN}maxPost(){return new Ge(Kr,Qc)}makePost(e,n){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new Ge(e,Qc)}toString(){return".key"}}const qo=new xw;/**
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
 */let Yc=class{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Gn=class sl{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??sl.RED,this.left=s??Bi.EMPTY_NODE,this.right=r??Bi.EMPTY_NODE}copy(e,n,i,s,r){return new sl(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Bi.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,sl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,sl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Gn.RED=!0;Gn.BLACK=!1;class DN{copy(e,n,i,s,r){return this}insert(e,n,i){return new Gn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Bi=class fu{constructor(e,n=fu.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new fu(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Gn.BLACK,null,null))}remove(e){return new fu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gn.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Yc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Yc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Yc(this.root_,null,this.comparator_,!0,e)}};Bi.EMPTY_NODE=new DN;/**
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
 */function xN(t,e){return ma(t.name,e.name)}function mp(t,e){return ma(t,e)}/**
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
 */let sf;function MN(t){sf=t}const Mw=function(t){return typeof t=="number"?"number:"+hw(t):"string:"+t},Lw=function(t){if(t.isLeafNode()){const e=t.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ks(e,".sv"),"Priority must be a string or number.")}else le(t===sf||t.isEmpty(),"priority of unexpected type.");le(t===sf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let E_;class Qt{static set __childrenNodeConstructor(e){E_=e}static get __childrenNodeConstructor(){return E_}constructor(e,n=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return je(e)?this:ze(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ze(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(le(i!==".priority"||cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(yt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Mw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hw(this.value_):e+=this.value_,this.lazyHash_=lw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Qt.VALUE_TYPE_ORDER.indexOf(n),r=Qt.VALUE_TYPE_ORDER.indexOf(i);return le(s>=0,"Unknown leaf type: "+n),le(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vw,Fw;function LN(t){Vw=t}function VN(t){Fw=t}class FN extends wh{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ma(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ge.MIN}maxPost(){return new Ge(Kr,new Qt("[PRIORITY-POST]",Fw))}makePost(e,n){const i=Vw(e);return new Ge(n,new Qt("[PRIORITY-POST]",i))}toString(){return".priority"}}const vn=new FN;/**
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
 */const UN=Math.log(2);class $N{constructor(e){const n=r=>parseInt(Math.log(r)/UN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $u=function(t,e,n,i){t.sort(e);const s=function(u,h){const f=h-u;let m,y;if(f===0)return null;if(f===1)return m=t[u],y=n?n(m):m,new Gn(y,m.node,Gn.BLACK,null,null);{const w=parseInt(f/2,10)+u,N=s(u,w),V=s(w+1,h);return m=t[w],y=n?n(m):m,new Gn(y,m.node,Gn.BLACK,N,V)}},r=function(u){let h=null,f=null,m=t.length;const y=function(N,V){const F=m-N,Y=m;m-=N;const z=s(F+1,Y),X=t[F],Q=n?n(X):X;w(new Gn(Q,X.node,V,null,z))},w=function(N){h?(h.left=N,h=N):(f=N,h=N)};for(let N=0;N<u.count;++N){const V=u.nextBitIsOne(),F=Math.pow(2,u.count-(N+1));V?y(F,Gn.BLACK):(y(F,Gn.BLACK),y(F,Gn.RED))}return f},o=new $N(t.length),l=r(o);return new Bi(i||e,l)};/**
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
 */let wd;const Ro={};class vs{static get Default(){return le(Ro&&vn,"ChildrenNode.ts has not been loaded"),wd=wd||new vs({".priority":Ro},{".priority":vn}),wd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ko(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bi?n:null}hasIndex(e){return ks(this.indexSet_,e.toString())}addIndex(e,n){le(e!==qo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Ge.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=$u(i,e.getCompare()):l=Ro;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const f=Object.assign({},this.indexes_);return f[u]=l,new vs(f,h)}addToIndexes(e,n){const i=wu(this.indexes_,(s,r)=>{const o=Ko(this.indexSet_,r);if(le(o,"Missing index implementation for "+r),s===Ro)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(Ge.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),$u(l,o.getCompare())}else return Ro;else{const l=n.get(e.name);let u=s;return l&&(u=u.remove(new Ge(e.name,l))),u.insert(e,e.node)}});return new vs(i,this.indexSet_)}removeFromIndexes(e,n){const i=wu(this.indexes_,s=>{if(s===Ro)return s;{const r=n.get(e.name);return r?s.remove(new Ge(e.name,r)):s}});return new vs(i,this.indexSet_)}}/**
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
 */let Ja;class tt{static get EMPTY_NODE(){return Ja||(Ja=new tt(new Bi(mp),null,vs.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Lw(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ja}updatePriority(e){return this.children_.isEmpty()?this:new tt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ja:n}}getChild(e){const n=ze(e);return n===null?this:this.getImmediateChild(n).getChild(yt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(le(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Ge(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ja:this.priorityNode_;return new tt(s,o,r)}}updateChild(e,n){const i=ze(e);if(i===null)return n;{le(ze(e)!==".priority"||cr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(yt(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(vn,(o,l)=>{n[o]=l.val(e),i++,r&&tt.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Mw(this.getPriority().val())+":"),this.forEachChild(vn,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":lw(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ge(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===qo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new tt(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(vn),s=n.getIterator(vn);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qo?null:this.indexMap_.get(e.toString())}}tt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BN extends tt{constructor(){super(new Bi(mp),tt.EMPTY_NODE,vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tt.EMPTY_NODE}isEmpty(){return!1}}const ic=new BN;Object.defineProperties(Ge,{MIN:{value:new Ge(Jo,tt.EMPTY_NODE)},MAX:{value:new Ge(Kr,ic)}});xw.__EMPTY_NODE=tt.EMPTY_NODE;Qt.__childrenNodeConstructor=tt;MN(ic);VN(ic);/**
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
 */const jN=!0;function gn(t,e=null){if(t===null)return tt.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qt(n,gn(e))}if(!(t instanceof Array)&&jN){const n=[];let i=!1;if(ci(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=gn(l);u.isEmpty()||(i=i||!u.getPriority().isEmpty(),n.push(new Ge(o,u)))}}),n.length===0)return tt.EMPTY_NODE;const r=$u(n,xN,o=>o.name,mp);if(i){const o=$u(n,vn.getCompare());return new tt(r,gn(e),new vs({".priority":o},{".priority":vn}))}else return new tt(r,gn(e),vs.Default)}else{let n=tt.EMPTY_NODE;return ci(t,(i,s)=>{if(ks(t,i)&&i.substring(0,1)!=="."){const r=gn(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(gn(e))}}LN(gn);/**
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
 */class HN extends wh{constructor(e){super(),this.indexPath_=e,le(!je(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ma(e.name,n.name):r}makePost(e,n){const i=gn(e),s=tt.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ge(n,s)}maxPost(){const e=tt.EMPTY_NODE.updateChild(this.indexPath_,ic);return new Ge(Kr,e)}toString(){return kw(this.indexPath_,0).join("/")}}/**
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
 */class WN extends wh{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ma(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ge.MIN}maxPost(){return Ge.MAX}makePost(e,n){const i=gn(e);return new Ge(n,i)}toString(){return".value"}}const qN=new WN;/**
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
 */function zN(t){return{type:"value",snapshotNode:t}}function GN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function KN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function w_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jo}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vn}copy(){const e=new gp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vn?n="$priority":t.index_===qN?n="$value":t.index_===qo?n="$key":(le(t.index_ instanceof HN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=on(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=on(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+on(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=on(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+on(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function T_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vn&&(e.i=t.index_.toString()),e}/**
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
 */class Bu extends Sw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=tc("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Bu.getListenId_(e,i),l={};this.listens_[o]=l;const u=b_(e._queryParams);this.restRequest_(r+".json",u,(h,f)=>{let m=f;if(h===404&&(m=null,h=null),h===null&&this.onDataUpdate_(r,m,!1,i),Ko(this.listens_,o)===l){let y;h?h===401?y="permission_denied":y="rest_error:"+h:y="ok",s(y,null)}})}unlisten(e,n){const i=Bu.getListenId_(e,n);delete this.listens_[i]}get(e){const n=b_(e._queryParams),i=e._path.toString(),s=new Sl;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ha(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=Rl(l.responseText)}catch{Xn("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,u)}else l.status!==401&&l.status!==404&&Xn("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class YN{constructor(){this.rootNode_=tt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ju(){return{value:null,children:new Map}}function Uw(t,e,n){if(je(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ze(e);t.children.has(i)||t.children.set(i,ju());const s=t.children.get(i);e=yt(e),Uw(s,e,n)}}function rf(t,e,n){t.value!==null?n(e,t.value):XN(t,(i,s)=>{const r=new vt(e.toString()+"/"+i);rf(s,r,n)})}function XN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class JN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ci(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const I_=10*1e3,ZN=30*1e3,e1=5*60*1e3;class t1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JN(e);const i=I_+(ZN-I_)*Math.random();_l(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ci(e,(s,r)=>{r>0&&ks(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),_l(this.reportStats_.bind(this),Math.floor(Math.random()*2*e1))}}/**
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
 */var ji;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ji||(ji={}));function $w(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hu{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ji.ACK_USER_WRITE,this.source=$w()}operationForChild(e){if(je(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new vt(e));return new Hu(lt(),n,this.revert)}}else return le(ze(this.path)===e,"operationForChild called for unrelated child."),new Hu(yt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ji.OVERWRITE}operationForChild(e){return je(this.path)?new Qr(this.source,lt(),this.snap.getImmediateChild(e)):new Qr(this.source,yt(this.path),this.snap)}}/**
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
 */class Fl{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ji.MERGE}operationForChild(e){if(je(this.path)){const n=this.children.subtree(new vt(e));return n.isEmpty()?null:n.value?new Qr(this.source,lt(),n.value):new Fl(this.source,lt(),n)}else return le(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fl(this.source,yt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class _p{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(je(e))return this.isFullyInitialized()&&!this.filtered_;const n=ze(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function n1(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(QN(o.childName,o.snapshotNode))}),Za(t,s,"child_removed",e,i,n),Za(t,s,"child_added",e,i,n),Za(t,s,"child_moved",r,i,n),Za(t,s,"child_changed",e,i,n),Za(t,s,"value",e,i,n),s}function Za(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,u)=>s1(t,l,u)),o.forEach(l=>{const u=i1(t,l,r);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(u,t.query_))})})}function i1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function s1(t,e,n){if(e.childName==null||n.childName==null)throw la("Should only compare child_ events.");const i=new Ge(e.childName,e.snapshotNode),s=new Ge(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Hw(t,e){return{eventCache:t,serverCache:e}}function yl(t,e,n,i){return Hw(new _p(e,n,i),t.serverCache)}function Ww(t,e,n,i){return Hw(t.eventCache,new _p(e,n,i))}function of(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let bd;const r1=()=>(bd||(bd=new Bi(Wk)),bd);class _t{static fromObject(e){let n=new _t(null);return ci(e,(i,s)=>{n=n.set(new vt(i),s)}),n}constructor(e,n=r1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:lt(),value:this.value};if(je(e))return null;{const i=ze(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(yt(e),n);return r!=null?{path:Xt(new vt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(je(e))return this;{const n=ze(e),i=this.children.get(n);return i!==null?i.subtree(yt(e)):new _t(null)}}set(e,n){if(je(e))return new _t(n,this.children);{const i=ze(e),r=(this.children.get(i)||new _t(null)).set(yt(e),n),o=this.children.insert(i,r);return new _t(this.value,o)}}remove(e){if(je(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const n=ze(e),i=this.children.get(n);if(i){const s=i.remove(yt(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new _t(null):new _t(this.value,r)}else return this}}get(e){if(je(e))return this.value;{const n=ze(e),i=this.children.get(n);return i?i.get(yt(e)):null}}setTree(e,n){if(je(e))return n;{const i=ze(e),r=(this.children.get(i)||new _t(null)).setTree(yt(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new _t(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Xt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,lt(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(je(e))return null;{const r=ze(e),o=this.children.get(r);return o?o.findOnPath_(yt(e),Xt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,lt(),n)}foreachOnPath_(e,n,i){if(je(e))return this;{this.value&&i(n,this.value);const s=ze(e),r=this.children.get(s);return r?r.foreachOnPath_(yt(e),Xt(n,s),i):new _t(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Xt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Ti{constructor(e){this.writeTree_=e}static empty(){return new Ti(new _t(null))}}function vl(t,e,n){if(je(e))return new Ti(new _t(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=oi(s,e);return r=r.updateChild(o,n),new Ti(t.writeTree_.set(s,r))}else{const s=new _t(n),r=t.writeTree_.setTree(e,s);return new Ti(r)}}}function A_(t,e,n){let i=t;return ci(n,(s,r)=>{i=vl(i,Xt(e,s),r)}),i}function C_(t,e){if(je(e))return Ti.empty();{const n=t.writeTree_.setTree(e,new _t(null));return new Ti(n)}}function af(t,e){return no(t,e)!=null}function no(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(oi(n.path,e)):null}function S_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vn,(i,s)=>{e.push(new Ge(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ge(i,s.value))}),e}function sr(t,e){if(je(e))return t;{const n=no(t,e);return n!=null?new Ti(new _t(n)):new Ti(t.writeTree_.subtree(e))}}function lf(t){return t.writeTree_.isEmpty()}function Zo(t,e){return qw(lt(),t.writeTree_,e)}function qw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(le(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=qw(Xt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Xt(t,".priority"),i)),n}}/**
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
 */function zw(t,e){return Xw(e,t)}function o1(t,e,n,i,s){le(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=vl(t.visibleWrites,e,n)),t.lastWriteId=i}function a1(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function l1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);le(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&c1(l,i.path)?s=!1:vi(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return u1(t),!0;if(i.snap)t.visibleWrites=C_(t.visibleWrites,i.path);else{const l=i.children;ci(l,u=>{t.visibleWrites=C_(t.visibleWrites,Xt(i.path,u))})}return!0}else return!1}function c1(t,e){if(t.snap)return vi(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vi(Xt(t.path,n),e))return!0;return!1}function u1(t){t.visibleWrites=Gw(t.allWrites,h1,lt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function h1(t){return t.visible}function Gw(t,e,n){let i=Ti.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)vi(n,o)?(l=oi(n,o),i=vl(i,l,r.snap)):vi(o,n)&&(l=oi(o,n),i=vl(i,lt(),r.snap.getChild(l)));else if(r.children){if(vi(n,o))l=oi(n,o),i=A_(i,l,r.children);else if(vi(o,n))if(l=oi(o,n),je(l))i=A_(i,lt(),r.children);else{const u=Ko(r.children,ze(l));if(u){const h=u.getChild(yt(l));i=vl(i,lt(),h)}}}else throw la("WriteRecord should have .snap or .children")}}return i}function Kw(t,e,n,i,s){if(!i&&!s){const r=no(t.visibleWrites,e);if(r!=null)return r;{const o=sr(t.visibleWrites,e);if(lf(o))return n;if(n==null&&!af(o,lt()))return null;{const l=n||tt.EMPTY_NODE;return Zo(o,l)}}}else{const r=sr(t.visibleWrites,e);if(!s&&lf(r))return n;if(!s&&n==null&&!af(r,lt()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(vi(h.path,e)||vi(e,h.path))},l=Gw(t.allWrites,o,e),u=n||tt.EMPTY_NODE;return Zo(l,u)}}}function d1(t,e,n){let i=tt.EMPTY_NODE;const s=no(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(vn,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=sr(t.visibleWrites,e);return n.forEachChild(vn,(o,l)=>{const u=Zo(sr(r,new vt(o)),l);i=i.updateImmediateChild(o,u)}),S_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=sr(t.visibleWrites,e);return S_(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function f1(t,e,n,i,s){le(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Xt(e,n);if(af(t.visibleWrites,r))return null;{const o=sr(t.visibleWrites,r);return lf(o)?s.getChild(n):Zo(o,s.getChild(n))}}function p1(t,e,n,i){const s=Xt(e,n),r=no(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=sr(t.visibleWrites,s);return Zo(o,i.getNode().getImmediateChild(n))}else return null}function m1(t,e){return no(t.visibleWrites,e)}function g1(t,e,n,i,s,r,o){let l;const u=sr(t.visibleWrites,e),h=no(u,lt());if(h!=null)l=h;else if(n!=null)l=Zo(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],m=o.getCompare(),y=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let w=y.getNext();for(;w&&f.length<s;)m(w,i)!==0&&f.push(w),w=y.getNext();return f}else return[]}function _1(){return{visibleWrites:Ti.empty(),allWrites:[],lastWriteId:-1}}function cf(t,e,n,i){return Kw(t.writeTree,t.treePath,e,n,i)}function Qw(t,e){return d1(t.writeTree,t.treePath,e)}function R_(t,e,n,i){return f1(t.writeTree,t.treePath,e,n,i)}function Wu(t,e){return m1(t.writeTree,Xt(t.treePath,e))}function y1(t,e,n,i,s,r){return g1(t.writeTree,t.treePath,e,n,i,s,r)}function yp(t,e,n){return p1(t.writeTree,t.treePath,e,n)}function Yw(t,e){return Xw(Xt(t.treePath,e),t.writeTree)}function Xw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class v1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;le(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),le(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,w_(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,KN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,GN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,w_(i,e.snapshotNode,s.oldSnap));else throw la("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class E1{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Jw=new E1;class vp{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _p(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yp(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yr(this.viewCache_),r=y1(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function w1(t,e){le(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function b1(t,e,n,i,s){const r=new v1;let o,l;if(n.type===ji.OVERWRITE){const h=n;h.source.fromUser?o=uf(t,e,h.path,h.snap,i,s,r):(le(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!je(h.path),o=qu(t,e,h.path,h.snap,i,s,l,r))}else if(n.type===ji.MERGE){const h=n;h.source.fromUser?o=I1(t,e,h.path,h.children,i,s,r):(le(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,h.path,h.children,i,s,l,r))}else if(n.type===ji.ACK_USER_WRITE){const h=n;h.revert?o=S1(t,e,h.path,i,s,r):o=A1(t,e,h.path,h.affectedTree,i,s,r)}else if(n.type===ji.LISTEN_COMPLETE)o=C1(t,e,n.path,i,r);else throw la("Unknown operation type: "+n.type);const u=r.getChanges();return T1(e,o,u),{viewCache:o,changes:u}}function T1(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=of(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(zN(of(e)))}}function Zw(t,e,n,i,s,r){const o=e.eventCache;if(Wu(i,n)!=null)return e;{let l,u;if(je(n))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Yr(e),f=h instanceof tt?h:tt.EMPTY_NODE,m=Qw(i,f);l=t.filter.updateFullNode(e.eventCache.getNode(),m,r)}else{const h=cf(i,Yr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=ze(n);if(h===".priority"){le(cr(n)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const m=R_(i,n,f,u);m!=null?l=t.filter.updatePriority(f,m):l=o.getNode()}else{const f=yt(n);let m;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const y=R_(i,n,o.getNode(),u);y!=null?m=o.getNode().getImmediateChild(h).updateChild(f,y):m=o.getNode().getImmediateChild(h)}else m=yp(i,h,e.serverCache);m!=null?l=t.filter.updateChild(o.getNode(),h,m,f,s,r):l=o.getNode()}}return yl(e,l,o.isFullyInitialized()||je(n),t.filter.filtersNodes())}}function qu(t,e,n,i,s,r,o,l){const u=e.serverCache;let h;const f=o?t.filter:t.filter.getIndexedFilter();if(je(n))h=f.updateFullNode(u.getNode(),i,null);else if(f.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,i);h=f.updateFullNode(u.getNode(),w,null)}else{const w=ze(n);if(!u.isCompleteForPath(n)&&cr(n)>1)return e;const N=yt(n),F=u.getNode().getImmediateChild(w).updateChild(N,i);w===".priority"?h=f.updatePriority(u.getNode(),F):h=f.updateChild(u.getNode(),w,F,N,Jw,null)}const m=Ww(e,h,u.isFullyInitialized()||je(n),f.filtersNodes()),y=new vp(s,m,r);return Zw(t,m,n,s,y,l)}function uf(t,e,n,i,s,r,o){const l=e.eventCache;let u,h;const f=new vp(s,e,r);if(je(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),u=yl(e,h,!0,t.filter.filtersNodes());else{const m=ze(n);if(m===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),i),u=yl(e,h,l.isFullyInitialized(),l.isFiltered());else{const y=yt(n),w=l.getNode().getImmediateChild(m);let N;if(je(y))N=i;else{const V=f.getCompleteChild(m);V!=null?Pw(y)===".priority"&&V.getChild(Nw(y)).isEmpty()?N=V:N=V.updateChild(y,i):N=tt.EMPTY_NODE}if(w.equals(N))u=e;else{const V=t.filter.updateChild(l.getNode(),m,N,y,f,o);u=yl(e,V,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function P_(t,e){return t.eventCache.isCompleteForChild(e)}function I1(t,e,n,i,s,r,o){let l=e;return i.foreach((u,h)=>{const f=Xt(n,u);P_(e,ze(f))&&(l=uf(t,l,f,h,s,r,o))}),i.foreach((u,h)=>{const f=Xt(n,u);P_(e,ze(f))||(l=uf(t,l,f,h,s,r,o))}),l}function k_(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function hf(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;je(n)?h=i:h=new _t(null).setTree(n,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((m,y)=>{if(f.hasChild(m)){const w=e.serverCache.getNode().getImmediateChild(m),N=k_(t,w,y);u=qu(t,u,new vt(m),N,s,r,o,l)}}),h.children.inorderTraversal((m,y)=>{const w=!e.serverCache.isCompleteForChild(m)&&y.value===null;if(!f.hasChild(m)&&!w){const N=e.serverCache.getNode().getImmediateChild(m),V=k_(t,N,y);u=qu(t,u,new vt(m),V,s,r,o,l)}}),u}function A1(t,e,n,i,s,r,o){if(Wu(s,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(i.value!=null){if(je(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return qu(t,e,n,u.getNode().getChild(n),s,r,l,o);if(je(n)){let h=new _t(null);return u.getNode().forEachChild(qo,(f,m)=>{h=h.set(new vt(f),m)}),hf(t,e,n,h,s,r,l,o)}else return e}else{let h=new _t(null);return i.foreach((f,m)=>{const y=Xt(n,f);u.isCompleteForPath(y)&&(h=h.set(f,u.getNode().getChild(y)))}),hf(t,e,n,h,s,r,l,o)}}function C1(t,e,n,i,s){const r=e.serverCache,o=Ww(e,r.getNode(),r.isFullyInitialized()||je(n),r.isFiltered());return Zw(t,o,n,i,Jw,s)}function S1(t,e,n,i,s,r){let o;if(Wu(i,n)!=null)return e;{const l=new vp(i,e,s),u=e.eventCache.getNode();let h;if(je(n)||ze(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=cf(i,Yr(e));else{const m=e.serverCache.getNode();le(m instanceof tt,"serverChildren would be complete if leaf node"),f=Qw(i,m)}f=f,h=t.filter.updateFullNode(u,f,r)}else{const f=ze(n);let m=yp(i,f,e.serverCache);m==null&&e.serverCache.isCompleteForChild(f)&&(m=u.getImmediateChild(f)),m!=null?h=t.filter.updateChild(u,f,m,yt(n),l,r):e.eventCache.getNode().hasChild(f)?h=t.filter.updateChild(u,f,tt.EMPTY_NODE,yt(n),l,r):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cf(i,Yr(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Wu(i,lt())!=null,yl(e,h,o,t.filter.filtersNodes())}}function R1(t,e){const n=Yr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!je(e)&&!n.getImmediateChild(ze(e)).isEmpty())?n.getChild(e):null}function N_(t,e,n,i){e.type===ji.MERGE&&e.source.queryId!==null&&(le(Yr(t.viewCache_),"We should always have a full cache before handling merges"),le(of(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=b1(t.processor_,s,e,n,i);return w1(t.processor_,r.viewCache),le(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,P1(t,r.changes,r.viewCache.eventCache.getNode())}function P1(t,e,n,i){const s=t.eventRegistrations_;return n1(t.eventGenerator_,e,n,s)}/**
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
 */let O_;function k1(t){le(!O_,"__referenceConstructor has already been defined"),O_=t}function Ep(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return le(r!=null,"SyncTree gave us an op for an invalid query."),N_(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(N_(o,e,n,i));return r}}function wp(t,e){let n=null;for(const i of t.views.values())n=n||R1(i,e);return n}/**
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
 */let D_;function N1(t){le(!D_,"__referenceConstructor has already been defined"),D_=t}class x_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=_1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function O1(t,e,n,i,s){return o1(t.pendingWriteTree_,e,n,i,s),s?Th(t,new Qr($w(),e,n)):[]}function Mo(t,e,n=!1){const i=a1(t.pendingWriteTree_,e);if(l1(t.pendingWriteTree_,e)){let r=new _t(null);return i.snap!=null?r=r.set(lt(),!0):ci(i.children,o=>{r=r.set(new vt(o),!0)}),Th(t,new Hu(i.path,r,n))}else return[]}function bh(t,e,n){return Th(t,new Qr(Bw(),e,n))}function D1(t,e,n){const i=_t.fromObject(n);return Th(t,new Fl(Bw(),e,i))}function x1(t,e,n,i){const s=ib(t,i);if(s!=null){const r=sb(s),o=r.path,l=r.queryId,u=oi(o,e),h=new Qr(jw(l),u,n);return rb(t,o,h)}else return[]}function M1(t,e,n,i){const s=ib(t,i);if(s){const r=sb(s),o=r.path,l=r.queryId,u=oi(o,e),h=_t.fromObject(n),f=new Fl(jw(l),u,h);return rb(t,o,f)}else return[]}function eb(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=oi(o,e),h=wp(l,u);if(h)return h});return Kw(s,e,r,n,!0)}function Th(t,e){return tb(e,t.syncPointTree_,null,zw(t.pendingWriteTree_,lt()))}function tb(t,e,n,i){if(je(t.path))return nb(t,e,n,i);{const s=e.get(lt());n==null&&s!=null&&(n=wp(s,lt()));let r=[];const o=ze(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const h=n?n.getImmediateChild(o):null,f=Yw(i,o);r=r.concat(tb(l,u,h,f))}return s&&(r=r.concat(Ep(s,t,i,n))),r}}function nb(t,e,n,i){const s=e.get(lt());n==null&&s!=null&&(n=wp(s,lt()));let r=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,h=Yw(i,o),f=t.operationForChild(o);f&&(r=r.concat(nb(f,l,u,h)))}),s&&(r=r.concat(Ep(s,t,i,n))),r}function ib(t,e){return t.tagToQueryMap.get(e)}function sb(t){const e=t.indexOf("$");return le(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new vt(t.substr(0,e))}}function rb(t,e,n){const i=t.syncPointTree_.get(e);le(i,"Missing sync point for query tag that we're tracking");const s=zw(t.pendingWriteTree_,e);return Ep(i,n,s,null)}/**
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
 */class bp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bp(n)}node(){return this.node_}}class Tp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xt(this.path_,e);return new Tp(this.syncTree_,n)}node(){return eb(this.syncTree_,this.path_)}}const L1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},M_=function(t,e,n){if(!t||typeof t!="object")return t;if(le(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return V1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return F1(t[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},V1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:le(!1,"Unexpected server value: "+t)}},F1=function(t,e,n){t.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&le(!1,"Unexpected increment value: "+i);const s=e.node();if(le(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},U1=function(t,e,n,i){return Ip(e,new Tp(n,t),i)},$1=function(t,e,n){return Ip(t,new bp(e),n)};function Ip(t,e,n){const i=t.getPriority().val(),s=M_(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=M_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Qt(l,gn(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Qt(s))),o.forEachChild(vn,(l,u)=>{const h=Ip(u,e.getImmediateChild(l),n);h!==u&&(r=r.updateImmediateChild(l,h))}),r}}/**
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
 */class Ap{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Cp(t,e){let n=e instanceof vt?e:new vt(e),i=t,s=ze(n);for(;s!==null;){const r=Ko(i.node.children,s)||{children:{},childCount:0};i=new Ap(s,i,r),n=yt(n),s=ze(n)}return i}function ga(t){return t.node.value}function ob(t,e){t.node.value=e,df(t)}function ab(t){return t.node.childCount>0}function B1(t){return ga(t)===void 0&&!ab(t)}function Ih(t,e){ci(t.node.children,(n,i)=>{e(new Ap(n,t,i))})}function lb(t,e,n,i){n&&e(t),Ih(t,s=>{lb(s,e,!0)})}function j1(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function sc(t){return new vt(t.parent===null?t.name:sc(t.parent)+"/"+t.name)}function df(t){t.parent!==null&&H1(t.parent,t.name,t)}function H1(t,e,n){const i=B1(n),s=ks(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,df(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,df(t))}/**
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
 */const W1=/[\[\].#$\/\u0000-\u001F\u007F]/,q1=/[\[\].#$\u0000-\u001F\u007F]/,Td=10*1024*1024,cb=function(t){return typeof t=="string"&&t.length!==0&&!W1.test(t)},z1=function(t){return typeof t=="string"&&t.length!==0&&!q1.test(t)},G1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),z1(t)},ub=function(t,e,n){const i=n instanceof vt?new CN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fr(i));if(typeof e=="function")throw new Error(t+"contains a function "+Fr(i)+" with contents = "+e.toString());if(cw(e))throw new Error(t+"contains "+e.toString()+" "+Fr(i));if(typeof e=="string"&&e.length>Td/3&&ah(e)>Td)throw new Error(t+"contains a string greater than "+Td+" utf8 bytes "+Fr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ci(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cb(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SN(i,o),ub(t,l,i),RN(i)}),s&&r)throw new Error(t+' contains ".value" child '+Fr(i)+" in addition to actual children.")}},K1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!G1(n))throw new Error($A(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Q1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Y1(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ow(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function io(t,e,n){Y1(t,n),X1(t,i=>vi(i,e)||vi(e,i))}function X1(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(J1(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function J1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();gl&&mn("event: "+n.toString()),nc(i)}}}/**
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
 */const Z1="repo_interrupt",eO=25;class tO{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Q1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ju(),this.transactionQueueTree_=new Ap,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nO(t,e,n){if(t.stats_=dp(t.repoInfo_),t.forceRestClient_||Yk())t.server_=new Bu(t.repoInfo_,(i,s,r,o)=>{L_(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>V_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{on(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ws(t.repoInfo_,e,(i,s,r,o)=>{L_(t,i,s,r,o)},i=>{V_(t,i)},i=>{sO(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=nN(t.repoInfo_,()=>new t1(t.stats_,t.server_)),t.infoData_=new YN,t.infoSyncTree_=new x_({startListening:(i,s,r,o)=>{let l=[];const u=t.infoData_.getNode(i._path);return u.isEmpty()||(l=bh(t.infoSyncTree_,i._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Sp(t,"connected",!1),t.serverSyncTree_=new x_({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,u)=>{const h=o(l,u);io(t.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function iO(t){const n=t.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hb(t){return L1({timestamp:iO(t)})}function L_(t,e,n,i,s){t.dataUpdateCount++;const r=new vt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const u=wu(n,h=>gn(h));o=M1(t.serverSyncTree_,r,u,s)}else{const u=gn(n);o=x1(t.serverSyncTree_,r,u,s)}else if(i){const u=wu(n,h=>gn(h));o=D1(t.serverSyncTree_,r,u)}else{const u=gn(n);o=bh(t.serverSyncTree_,r,u)}let l=r;o.length>0&&(l=Pp(t,r)),io(t.eventQueue_,l,o)}function V_(t,e){Sp(t,"connected",e),e===!1&&oO(t)}function sO(t,e){ci(e,(n,i)=>{Sp(t,n,i)})}function Sp(t,e,n){const i=new vt("/.info/"+e),s=gn(n);t.infoData_.updateSnapshot(i,s);const r=bh(t.infoSyncTree_,i,s);io(t.eventQueue_,i,r)}function rO(t){return t.nextWriteId_++}function oO(t){db(t,"onDisconnectEvents");const e=hb(t),n=ju();rf(t.onDisconnect_,lt(),(s,r)=>{const o=U1(s,r,t.serverSyncTree_,e);Uw(n,s,o)});let i=[];rf(n,lt(),(s,r)=>{i=i.concat(bh(t.serverSyncTree_,s,r));const o=uO(t,s);Pp(t,o)}),t.onDisconnect_=ju(),io(t.eventQueue_,lt(),i)}function aO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Z1)}function db(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mn(n,...e)}function fb(t,e,n){return eb(t.serverSyncTree_,e,n)||tt.EMPTY_NODE}function Rp(t,e=t.transactionQueueTree_){if(e||Ah(t,e),ga(e)){const n=mb(t,e);le(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&lO(t,sc(e),n)}else ab(e)&&Ih(e,n=>{Rp(t,n)})}function lO(t,e,n){const i=n.map(h=>h.currentWriteId),s=fb(t,e,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const f=n[h];le(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const m=oi(e,f.path);r=r.updateChild(m,f.currentOutputSnapshotRaw)}const l=r.val(!0),u=e;t.server_.put(u.toString(),l,h=>{db(t,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const m=[];for(let y=0;y<n.length;y++)n[y].status=2,f=f.concat(Mo(t.serverSyncTree_,n[y].currentWriteId)),n[y].onComplete&&m.push(()=>n[y].onComplete(null,!0,n[y].currentOutputSnapshotResolved)),n[y].unwatcher();Ah(t,Cp(t.transactionQueueTree_,e)),Rp(t,t.transactionQueueTree_),io(t.eventQueue_,e,f);for(let y=0;y<m.length;y++)nc(m[y])}else{if(h==="datastale")for(let m=0;m<n.length;m++)n[m].status===3?n[m].status=4:n[m].status=0;else{Xn("transaction at "+u.toString()+" failed: "+h);for(let m=0;m<n.length;m++)n[m].status=4,n[m].abortReason=h}Pp(t,e)}},o)}function Pp(t,e){const n=pb(t,e),i=sc(n),s=mb(t,n);return cO(t,s,i),i}function cO(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],h=oi(n,u.path);let f=!1,m;if(le(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,m=u.abortReason,s=s.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=eO)f=!0,m="maxretry",s=s.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0));else{const y=fb(t,u.path,o);u.currentInputSnapshot=y;const w=e[l].update(y.val());if(w!==void 0){ub("transaction failed: Data returned ",w,u.path);let N=gn(w);typeof w=="object"&&w!=null&&ks(w,".priority")||(N=N.updatePriority(y.getPriority()));const F=u.currentWriteId,Y=hb(t),z=$1(N,y,Y);u.currentOutputSnapshotRaw=N,u.currentOutputSnapshotResolved=z,u.currentWriteId=rO(t),o.splice(o.indexOf(F),1),s=s.concat(O1(t.serverSyncTree_,u.path,z,u.currentWriteId,u.applyLocally)),s=s.concat(Mo(t.serverSyncTree_,F,!0))}else f=!0,m="nodata",s=s.concat(Mo(t.serverSyncTree_,u.currentWriteId,!0))}io(t.eventQueue_,n,s),s=[],f&&(e[l].status=2,function(y){setTimeout(y,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(m==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(m),!1,null))))}Ah(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)nc(i[l]);Rp(t,t.transactionQueueTree_)}function pb(t,e){let n,i=t.transactionQueueTree_;for(n=ze(e);n!==null&&ga(i)===void 0;)i=Cp(i,n),e=yt(e),n=ze(e);return i}function mb(t,e){const n=[];return gb(t,e,n),n.sort((i,s)=>i.order-s.order),n}function gb(t,e,n){const i=ga(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ih(e,s=>{gb(t,s,n)})}function Ah(t,e){const n=ga(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ob(e,n.length>0?n:void 0)}Ih(e,i=>{Ah(t,i)})}function uO(t,e){const n=sc(pb(t,e)),i=Cp(t.transactionQueueTree_,e);return j1(i,s=>{Id(t,s)}),Id(t,i),lb(i,s=>{Id(t,s)}),n}function Id(t,e){const n=ga(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(le(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(le(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Mo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ob(e,void 0):n.length=r+1,io(t.eventQueue_,sc(e),s);for(let o=0;o<i.length;o++)nc(i[o])}}/**
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
 */function hO(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Xn(`Invalid query segment '${n}' in query '${t}'`)}return e}const F_=function(t,e){const n=fO(t),i=n.namespace;n.domain==="firebase.com"&&Gr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jk();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zk(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new vt(n.pathString)}},fO=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(l=t.substring(0,h-1),t=t.substring(h+2));let f=t.indexOf("/");f===-1&&(f=t.length);let m=t.indexOf("?");m===-1&&(m=t.length),e=t.substring(0,Math.min(f,m)),f<m&&(s=hO(t.substring(f,m)));const y=dO(t.substring(Math.min(t.length,m)));h=e.indexOf(":"),h>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const w=e.slice(0,h);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const N=e.indexOf(".");i=e.substring(0,N).toLowerCase(),n=e.substring(N+1),r=i}"ns"in y&&(r=y.ns)}return{host:e,port:u,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */class kp{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return je(this._path)?null:Pw(this._path)}get ref(){return new _a(this._repo,this._path)}get _queryIdentifier(){const e=T_(this._queryParams),n=up(e);return n==="{}"?"default":n}get _queryObject(){return T_(this._queryParams)}isEqual(e){if(e=li(e),!(e instanceof kp))return!1;const n=this._repo===e._repo,i=Ow(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+AN(this._path)}}class _a extends kp{constructor(e,n){super(e,n,new gp,!1)}get parent(){const e=Nw(this._path);return e===null?null:new _a(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}k1(_a);N1(_a);/**
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
 */const pO="FIREBASE_DATABASE_EMULATOR_HOST",ff={};let mO=!1;function gO(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mn("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=F_(r,s),l=o.repoInfo,u;typeof process<"u"&&s_&&(u=s_[pO]),u?(r=`http://${u}?ns=${l.namespace}`,o=F_(r,s),l=o.repoInfo):o.repoInfo.secure;const h=new Jk(t.name,t.options,e);K1("Invalid Firebase Database URL",o),je(o.path)||Gr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=yO(l,t,h,new Xk(t,n));return new vO(f,t)}function _O(t,e){const n=ff[e];(!n||n[t.key]!==t)&&Gr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aO(t),delete n[t.key]}function yO(t,e,n,i){let s=ff[e.name];s||(s={},ff[e.name]=s);let r=s[t.toURLString()];return r&&Gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tO(t,mO,n,i),s[t.toURLString()]=r,r}class vO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _a(this._repo,lt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_O(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function EO(t){Lk(pr),Ki(new Ii("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gO(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Yn(r_,o_,t),Yn(r_,o_,"esm2017")}ws.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ws.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EO();var U_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Np;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function C(){}C.prototype=b.prototype,R.D=b.prototype,R.prototype=new C,R.prototype.constructor=R,R.C=function(P,O,M){for(var A=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)A[Nt-2]=arguments[Nt];return b.prototype[O].apply(P,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,b,C){C||(C=0);var P=Array(16);if(typeof b=="string")for(var O=0;16>O;++O)P[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;16>O;++O)P[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=R.g[0],C=R.g[1],O=R.g[2];var M=R.g[3],A=b+(M^C&(O^M))+P[0]+3614090360&4294967295;b=C+(A<<7&4294967295|A>>>25),A=M+(O^b&(C^O))+P[1]+3905402710&4294967295,M=b+(A<<12&4294967295|A>>>20),A=O+(C^M&(b^C))+P[2]+606105819&4294967295,O=M+(A<<17&4294967295|A>>>15),A=C+(b^O&(M^b))+P[3]+3250441966&4294967295,C=O+(A<<22&4294967295|A>>>10),A=b+(M^C&(O^M))+P[4]+4118548399&4294967295,b=C+(A<<7&4294967295|A>>>25),A=M+(O^b&(C^O))+P[5]+1200080426&4294967295,M=b+(A<<12&4294967295|A>>>20),A=O+(C^M&(b^C))+P[6]+2821735955&4294967295,O=M+(A<<17&4294967295|A>>>15),A=C+(b^O&(M^b))+P[7]+4249261313&4294967295,C=O+(A<<22&4294967295|A>>>10),A=b+(M^C&(O^M))+P[8]+1770035416&4294967295,b=C+(A<<7&4294967295|A>>>25),A=M+(O^b&(C^O))+P[9]+2336552879&4294967295,M=b+(A<<12&4294967295|A>>>20),A=O+(C^M&(b^C))+P[10]+4294925233&4294967295,O=M+(A<<17&4294967295|A>>>15),A=C+(b^O&(M^b))+P[11]+2304563134&4294967295,C=O+(A<<22&4294967295|A>>>10),A=b+(M^C&(O^M))+P[12]+1804603682&4294967295,b=C+(A<<7&4294967295|A>>>25),A=M+(O^b&(C^O))+P[13]+4254626195&4294967295,M=b+(A<<12&4294967295|A>>>20),A=O+(C^M&(b^C))+P[14]+2792965006&4294967295,O=M+(A<<17&4294967295|A>>>15),A=C+(b^O&(M^b))+P[15]+1236535329&4294967295,C=O+(A<<22&4294967295|A>>>10),A=b+(O^M&(C^O))+P[1]+4129170786&4294967295,b=C+(A<<5&4294967295|A>>>27),A=M+(C^O&(b^C))+P[6]+3225465664&4294967295,M=b+(A<<9&4294967295|A>>>23),A=O+(b^C&(M^b))+P[11]+643717713&4294967295,O=M+(A<<14&4294967295|A>>>18),A=C+(M^b&(O^M))+P[0]+3921069994&4294967295,C=O+(A<<20&4294967295|A>>>12),A=b+(O^M&(C^O))+P[5]+3593408605&4294967295,b=C+(A<<5&4294967295|A>>>27),A=M+(C^O&(b^C))+P[10]+38016083&4294967295,M=b+(A<<9&4294967295|A>>>23),A=O+(b^C&(M^b))+P[15]+3634488961&4294967295,O=M+(A<<14&4294967295|A>>>18),A=C+(M^b&(O^M))+P[4]+3889429448&4294967295,C=O+(A<<20&4294967295|A>>>12),A=b+(O^M&(C^O))+P[9]+568446438&4294967295,b=C+(A<<5&4294967295|A>>>27),A=M+(C^O&(b^C))+P[14]+3275163606&4294967295,M=b+(A<<9&4294967295|A>>>23),A=O+(b^C&(M^b))+P[3]+4107603335&4294967295,O=M+(A<<14&4294967295|A>>>18),A=C+(M^b&(O^M))+P[8]+1163531501&4294967295,C=O+(A<<20&4294967295|A>>>12),A=b+(O^M&(C^O))+P[13]+2850285829&4294967295,b=C+(A<<5&4294967295|A>>>27),A=M+(C^O&(b^C))+P[2]+4243563512&4294967295,M=b+(A<<9&4294967295|A>>>23),A=O+(b^C&(M^b))+P[7]+1735328473&4294967295,O=M+(A<<14&4294967295|A>>>18),A=C+(M^b&(O^M))+P[12]+2368359562&4294967295,C=O+(A<<20&4294967295|A>>>12),A=b+(C^O^M)+P[5]+4294588738&4294967295,b=C+(A<<4&4294967295|A>>>28),A=M+(b^C^O)+P[8]+2272392833&4294967295,M=b+(A<<11&4294967295|A>>>21),A=O+(M^b^C)+P[11]+1839030562&4294967295,O=M+(A<<16&4294967295|A>>>16),A=C+(O^M^b)+P[14]+4259657740&4294967295,C=O+(A<<23&4294967295|A>>>9),A=b+(C^O^M)+P[1]+2763975236&4294967295,b=C+(A<<4&4294967295|A>>>28),A=M+(b^C^O)+P[4]+1272893353&4294967295,M=b+(A<<11&4294967295|A>>>21),A=O+(M^b^C)+P[7]+4139469664&4294967295,O=M+(A<<16&4294967295|A>>>16),A=C+(O^M^b)+P[10]+3200236656&4294967295,C=O+(A<<23&4294967295|A>>>9),A=b+(C^O^M)+P[13]+681279174&4294967295,b=C+(A<<4&4294967295|A>>>28),A=M+(b^C^O)+P[0]+3936430074&4294967295,M=b+(A<<11&4294967295|A>>>21),A=O+(M^b^C)+P[3]+3572445317&4294967295,O=M+(A<<16&4294967295|A>>>16),A=C+(O^M^b)+P[6]+76029189&4294967295,C=O+(A<<23&4294967295|A>>>9),A=b+(C^O^M)+P[9]+3654602809&4294967295,b=C+(A<<4&4294967295|A>>>28),A=M+(b^C^O)+P[12]+3873151461&4294967295,M=b+(A<<11&4294967295|A>>>21),A=O+(M^b^C)+P[15]+530742520&4294967295,O=M+(A<<16&4294967295|A>>>16),A=C+(O^M^b)+P[2]+3299628645&4294967295,C=O+(A<<23&4294967295|A>>>9),A=b+(O^(C|~M))+P[0]+4096336452&4294967295,b=C+(A<<6&4294967295|A>>>26),A=M+(C^(b|~O))+P[7]+1126891415&4294967295,M=b+(A<<10&4294967295|A>>>22),A=O+(b^(M|~C))+P[14]+2878612391&4294967295,O=M+(A<<15&4294967295|A>>>17),A=C+(M^(O|~b))+P[5]+4237533241&4294967295,C=O+(A<<21&4294967295|A>>>11),A=b+(O^(C|~M))+P[12]+1700485571&4294967295,b=C+(A<<6&4294967295|A>>>26),A=M+(C^(b|~O))+P[3]+2399980690&4294967295,M=b+(A<<10&4294967295|A>>>22),A=O+(b^(M|~C))+P[10]+4293915773&4294967295,O=M+(A<<15&4294967295|A>>>17),A=C+(M^(O|~b))+P[1]+2240044497&4294967295,C=O+(A<<21&4294967295|A>>>11),A=b+(O^(C|~M))+P[8]+1873313359&4294967295,b=C+(A<<6&4294967295|A>>>26),A=M+(C^(b|~O))+P[15]+4264355552&4294967295,M=b+(A<<10&4294967295|A>>>22),A=O+(b^(M|~C))+P[6]+2734768916&4294967295,O=M+(A<<15&4294967295|A>>>17),A=C+(M^(O|~b))+P[13]+1309151649&4294967295,C=O+(A<<21&4294967295|A>>>11),A=b+(O^(C|~M))+P[4]+4149444226&4294967295,b=C+(A<<6&4294967295|A>>>26),A=M+(C^(b|~O))+P[11]+3174756917&4294967295,M=b+(A<<10&4294967295|A>>>22),A=O+(b^(M|~C))+P[2]+718787259&4294967295,O=M+(A<<15&4294967295|A>>>17),A=C+(M^(O|~b))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+M&4294967295}i.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var C=b-this.blockSize,P=this.B,O=this.h,M=0;M<b;){if(O==0)for(;M<=C;)s(this,R,M),M+=this.blockSize;if(typeof R=="string"){for(;M<b;)if(P[O++]=R.charCodeAt(M++),O==this.blockSize){s(this,P),O=0;break}}else for(;M<b;)if(P[O++]=R[M++],O==this.blockSize){s(this,P),O=0;break}}this.h=O,this.o+=b},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var C=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=C&255,C/=256;for(this.u(R),R=Array(16),b=C=0;4>b;++b)for(var P=0;32>P;P+=8)R[C++]=this.g[b]>>>P&255;return R};function r(R,b){var C=l;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=b(R)}function o(R,b){this.h=b;for(var C=[],P=!0,O=R.length-1;0<=O;O--){var M=R[O]|0;P&&M==b||(C[O]=M,P=!1)}this.g=C}var l={};function u(R){return-128<=R&&128>R?r(R,function(b){return new o([b|0],0>b?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return m;if(0>R)return F(h(-R));for(var b=[],C=1,P=0;R>=C;P++)b[P]=R/C|0,C*=4294967296;return new o(b,0)}function f(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return F(f(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=h(Math.pow(b,8)),P=m,O=0;O<R.length;O+=8){var M=Math.min(8,R.length-O),A=parseInt(R.substring(O,O+M),b);8>M?(M=h(Math.pow(b,M)),P=P.j(M).add(h(A))):(P=P.j(C),P=P.add(h(A)))}return P}var m=u(0),y=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-F(this).m();for(var R=0,b=1,C=0;C<this.g.length;C++){var P=this.i(C);R+=(0<=P?P:4294967296+P)*b,b*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N(this))return"0";if(V(this))return"-"+F(this).toString(R);for(var b=h(Math.pow(R,6)),C=this,P="";;){var O=Q(C,b).g;C=Y(C,O.j(b));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(R);if(C=O,N(C))return M+P;for(;6>M.length;)M="0"+M;P=M+P}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function N(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function V(R){return R.h==-1}t.l=function(R){return R=Y(this,R),V(R)?-1:N(R)?0:1};function F(R){for(var b=R.g.length,C=[],P=0;P<b;P++)C[P]=~R.g[P];return new o(C,~R.h).add(y)}t.abs=function(){return V(this)?F(this):this},t.add=function(R){for(var b=Math.max(this.g.length,R.g.length),C=[],P=0,O=0;O<=b;O++){var M=P+(this.i(O)&65535)+(R.i(O)&65535),A=(M>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);P=A>>>16,M&=65535,A&=65535,C[O]=A<<16|M}return new o(C,C[C.length-1]&-2147483648?-1:0)};function Y(R,b){return R.add(F(b))}t.j=function(R){if(N(this)||N(R))return m;if(V(this))return V(R)?F(this).j(F(R)):F(F(this).j(R));if(V(R))return F(this.j(F(R)));if(0>this.l(w)&&0>R.l(w))return h(this.m()*R.m());for(var b=this.g.length+R.g.length,C=[],P=0;P<2*b;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<R.g.length;O++){var M=this.i(P)>>>16,A=this.i(P)&65535,Nt=R.i(O)>>>16,Zt=R.i(O)&65535;C[2*P+2*O]+=A*Zt,z(C,2*P+2*O),C[2*P+2*O+1]+=M*Zt,z(C,2*P+2*O+1),C[2*P+2*O+1]+=A*Nt,z(C,2*P+2*O+1),C[2*P+2*O+2]+=M*Nt,z(C,2*P+2*O+2)}for(P=0;P<b;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=b;P<2*b;P++)C[P]=0;return new o(C,0)};function z(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function X(R,b){this.g=R,this.h=b}function Q(R,b){if(N(b))throw Error("division by zero");if(N(R))return new X(m,m);if(V(R))return b=Q(F(R),b),new X(F(b.g),F(b.h));if(V(b))return b=Q(R,F(b)),new X(F(b.g),b.h);if(30<R.g.length){if(V(R)||V(b))throw Error("slowDivide_ only works with positive integers.");for(var C=y,P=b;0>=P.l(R);)C=ye(C),P=ye(P);var O=be(C,1),M=be(P,1);for(P=be(P,2),C=be(C,2);!N(P);){var A=M.add(P);0>=A.l(R)&&(O=O.add(C),M=A),P=be(P,1),C=be(C,1)}return b=Y(R,O.j(b)),new X(O,b)}for(O=m;0<=R.l(b);){for(C=Math.max(1,Math.floor(R.m()/b.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),M=h(C),A=M.j(b);V(A)||0<A.l(R);)C-=P,M=h(C),A=M.j(b);N(M)&&(M=y),O=O.add(M),R=Y(R,A)}return new X(O,R)}t.A=function(R){return Q(this,R).h},t.and=function(R){for(var b=Math.max(this.g.length,R.g.length),C=[],P=0;P<b;P++)C[P]=this.i(P)&R.i(P);return new o(C,this.h&R.h)},t.or=function(R){for(var b=Math.max(this.g.length,R.g.length),C=[],P=0;P<b;P++)C[P]=this.i(P)|R.i(P);return new o(C,this.h|R.h)},t.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),C=[],P=0;P<b;P++)C[P]=this.i(P)^R.i(P);return new o(C,this.h^R.h)};function ye(R){for(var b=R.g.length+1,C=[],P=0;P<b;P++)C[P]=R.i(P)<<1|R.i(P-1)>>>31;return new o(C,R.h)}function be(R,b){var C=b>>5;b%=32;for(var P=R.g.length-C,O=[],M=0;M<P;M++)O[M]=0<b?R.i(M+C)>>>b|R.i(M+C+1)<<32-b:R.i(M+C);return new o(O,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Np=o}).apply(typeof U_<"u"?U_:typeof self<"u"?self:typeof window<"u"?window:{});var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _b,rl,yb,pu,pf,vb,Eb,wb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,g){return a==Array.prototype||a==Object.prototype||(a[d]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xc=="object"&&Xc];for(var d=0;d<a.length;++d){var g=a[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var i=n(this);function s(a,d){if(d)e:{var g=i;a=a.split(".");for(var E=0;E<a.length-1;E++){var L=a[E];if(!(L in g))break e;g=g[L]}a=a[a.length-1],E=g[a],d=d(E),d!=E&&d!=null&&e(g,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var g=0,E=!1,L={next:function(){if(!E&&g<a.length){var U=g++;return{value:d(U,a[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return r(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,g){return a.call.apply(a.bind,arguments)}function m(a,d,g){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function y(a,d,g){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function w(a,d){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function N(a,d){function g(){}g.prototype=d.prototype,a.aa=d.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(E,L,U){for(var ie=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)ie[nt-2]=arguments[nt];return d.prototype[L].apply(E,ie)}}function V(a){const d=a.length;if(0<d){const g=Array(d);for(let E=0;E<d;E++)g[E]=a[E];return g}return[]}function F(a,d){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(u(E)){const L=a.length||0,U=E.length||0;a.length=L+U;for(let ie=0;ie<U;ie++)a[L+ie]=E[ie]}else a.push(E)}}class Y{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function z(a){return/^[\s\xa0]*$/.test(a)}function X(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var ye=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function be(a,d,g){for(const E in a)d.call(g,a[E],E,a)}function R(a,d){for(const g in a)d.call(void 0,a[g],g,a)}function b(a){const d={};for(const g in a)d[g]=a[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,d){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)a[g]=E[g];for(let U=0;U<C.length;U++)g=C[U],Object.prototype.hasOwnProperty.call(E,g)&&(a[g]=E[g])}}function O(a){var d=1;a=a.split(":");const g=[];for(;0<d&&a.length;)g.push(a.shift()),d--;return a.length&&g.push(a.join(":")),g}function M(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Pe;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Nt{constructor(){this.h=this.g=null}add(d,g){const E=Zt.get();E.set(d,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Zt=new Y(()=>new gt,a=>a.reset());class gt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let De,xe=!1,Pe=new Nt,S=()=>{const a=l.Promise.resolve(void 0);De=()=>{a.then(ue)}};var ue=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(g){M(g)}var d=Zt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}xe=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var St=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,d),l.removeEventListener("test",g,d)}catch{}return a}();function jt(a,d){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ye){e:{try{Q(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=a.fromElement:g=="mouseout"&&(d=a.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}N(jt,Ve);var rt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),B=0;function re(a,d,g,E,L){this.listener=a,this.proxy=null,this.src=d,this.type=g,this.capture=!!E,this.ha=L,this.key=++B,this.da=this.fa=!1}function de(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function He(a){this.src=a,this.g={},this.h=0}He.prototype.add=function(a,d,g,E,L){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var ie=I(a,d,E,L);return-1<ie?(d=a[ie],g||(d.fa=!1)):(d=new re(d,this.src,U,!!E,L),d.fa=g,a.push(d)),d};function T(a,d){var g=d.type;if(g in a.g){var E=a.g[g],L=Array.prototype.indexOf.call(E,d,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(de(d),a.g[g].length==0&&(delete a.g[g],a.h--))}}function I(a,d,g,E){for(var L=0;L<a.length;++L){var U=a[L];if(!U.da&&U.listener==d&&U.capture==!!g&&U.ha==E)return L}return-1}var x="closure_lm_"+(1e6*Math.random()|0),j={};function W(a,d,g,E,L){if(Array.isArray(d)){for(var U=0;U<d.length;U++)W(a,d[U],g,E,L);return null}return g=_e(g),a&&a[H]?a.K(d,g,h(E)?!!E.capture:!1,L):q(a,d,g,!1,E,L)}function q(a,d,g,E,L,U){if(!d)throw Error("Invalid event type");var ie=h(L)?!!L.capture:!!L,nt=oe(a);if(nt||(a[x]=nt=new He(a)),g=nt.add(d,g,E,ie,U),g.proxy)return g;if(E=ae(),g.proxy=E,E.src=a,E.listener=g,a.addEventListener)St||(L=ie),L===void 0&&(L=!1),a.addEventListener(d.toString(),E,L);else if(a.attachEvent)a.attachEvent(Z(d.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ae(){function a(g){return d.call(a.src,a.listener,g)}const d=ge;return a}function ne(a,d,g,E,L){if(Array.isArray(d))for(var U=0;U<d.length;U++)ne(a,d[U],g,E,L);else E=h(E)?!!E.capture:!!E,g=_e(g),a&&a[H]?(a=a.i,d=String(d).toString(),d in a.g&&(U=a.g[d],g=I(U,g,E,L),-1<g&&(de(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete a.g[d],a.h--)))):a&&(a=oe(a))&&(d=a.g[d.toString()],a=-1,d&&(a=I(d,g,E,L)),(g=-1<a?d[a]:null)&&te(g))}function te(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[H])T(d.i,a);else{var g=a.type,E=a.proxy;d.removeEventListener?d.removeEventListener(g,E,a.capture):d.detachEvent?d.detachEvent(Z(g),E):d.addListener&&d.removeListener&&d.removeListener(E),(g=oe(d))?(T(g,a),g.h==0&&(g.src=null,d[x]=null)):de(a)}}}function Z(a){return a in j?j[a]:j[a]="on"+a}function ge(a,d){if(a.da)a=!0;else{d=new jt(d,this);var g=a.listener,E=a.ha||a.src;a.fa&&te(a),a=g.call(E,d)}return a}function oe(a){return a=a[x],a instanceof He?a:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(a){return typeof a=="function"?a:(a[pe]||(a[pe]=function(d){return a.handleEvent(d)}),a[pe])}function ve(){Ye.call(this),this.i=new He(this),this.M=this,this.F=null}N(ve,Ye),ve.prototype[H]=!0,ve.prototype.removeEventListener=function(a,d,g,E){ne(this,a,d,g,E)};function Ce(a,d){var g,E=a.F;if(E)for(g=[];E;E=E.F)g.push(E);if(a=a.M,E=d.type||d,typeof d=="string")d=new Ve(d,a);else if(d instanceof Ve)d.target=d.target||a;else{var L=d;d=new Ve(E,a),P(d,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var ie=d.g=g[U];L=$e(ie,E,!0,d)&&L}if(ie=d.g=a,L=$e(ie,E,!0,d)&&L,L=$e(ie,E,!1,d)&&L,g)for(U=0;U<g.length;U++)ie=d.g=g[U],L=$e(ie,E,!1,d)&&L}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var g=a.g[d],E=0;E<g.length;E++)de(g[E]);delete a.g[d],a.h--}}this.F=null},ve.prototype.K=function(a,d,g,E){return this.i.add(String(a),d,!1,g,E)},ve.prototype.L=function(a,d,g,E){return this.i.add(String(a),d,!0,g,E)};function $e(a,d,g,E){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,U=0;U<d.length;++U){var ie=d[U];if(ie&&!ie.da&&ie.capture==g){var nt=ie.listener,Bt=ie.ha||ie.src;ie.fa&&T(a.i,ie),L=nt.call(Bt,E)!==!1&&L}}return L&&!E.defaultPrevented}function It(a,d,g){if(typeof a=="function")g&&(a=y(a,g));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Et(a){a.g=It(()=>{a.g=null,a.i&&(a.i=!1,Et(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ft extends Ye{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(a){Ye.call(this),this.h=a,this.g={}}N(Ot,Ye);var Si=[];function ns(a){be(a.g,function(d,g){this.g.hasOwnProperty(g)&&te(d)},a),a.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),ns(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ut=l.JSON.stringify,xn=l.JSON.parse,oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ea(){}Ea.prototype.h=null;function hc(a){return a.h||(a.h=a.i())}function dc(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ds(){Ve.call(this,"d")}N(Ds,Ve);function ao(){Ve.call(this,"c")}N(ao,Ve);var Ri={},fc=null;function lo(){return fc=fc||new ve}Ri.La="serverreachability";function pc(a){Ve.call(this,Ri.La,a)}N(pc,Ve);function mr(a){const d=lo();Ce(d,new pc(d))}Ri.STAT_EVENT="statevent";function is(a,d){Ve.call(this,Ri.STAT_EVENT,a),this.stat=d}N(is,Ve);function Dt(a){const d=lo();Ce(d,new is(d,a))}Ri.Ma="timingevent";function mc(a,d){Ve.call(this,Ri.Ma,a),this.size=d}N(mc,Ve);function gr(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function Lh(a,d,g,E,L,U){a.info(function(){if(a.g)if(U)for(var ie="",nt=U.split("&"),Bt=0;Bt<nt.length;Bt++){var We=nt[Bt].split("=");if(1<We.length){var Wt=We[0];We=We[1];var qt=Wt.split("_");ie=2<=qt.length&&qt[1]=="type"?ie+(Wt+"="+We+"&"):ie+(Wt+"=redacted&")}}else ie=null;else ie=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+d+`
`+g+`
`+ie})}function Vh(a,d,g,E,L,U,ie){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+d+`
`+g+`
`+U+" "+ie})}function Pi(a,d,g,E){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+co(a,g)+(E?" "+E:"")})}function xs(a,d){a.info(function(){return"TIMEOUT: "+d})}_r.prototype.info=function(){};function co(a,d){if(!a.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var E=g[a];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ie=1;ie<L.length;ie++)L[ie]=""}}}}return Ut(g)}catch{return d}}var uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ho={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function fo(){}N(fo,Ea),fo.prototype.g=function(){return new XMLHttpRequest},fo.prototype.i=function(){return{}},wa=new fo;function In(a,d,g,E){this.j=a,this.i=d,this.l=g,this.R=E||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ht}function Ht(){this.i=null,this.g="",this.h=!1}var un={},en={};function $t(a,d,g){a.L=1,a.v=os(Rt(d)),a.m=g,a.P=!0,yr(a,null)}function yr(a,d){a.F=Date.now(),ui(a),a.A=Rt(a.v);var g=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),go(g.i,"t",E),a.C=0,g=a.j.J,a.h=new Ht,a.g=Pc(a.j,g?d:null,!a.m),0<a.O&&(a.M=new Ft(y(a.Y,a,a.g),a.O)),d=a.U,g=a.g,E=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Si[0]=L.toString()),L=Si);for(var U=0;U<L.length;U++){var ie=W(g,L[U],E||d.handleEvent,!1,d.h||d);if(!ie)break;d.g[ie.key]=ie}d=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),mr(),Lh(a.i,a.u,a.A,a.l,a.R,a.m)}In.prototype.ca=function(a){a=a.target;const d=this.M;d&&hn(a)==3?d.j():this.Y(a)},In.prototype.Y=function(a){try{if(a==this.g)e:{const qt=hn(this.g);var d=this.g.Ba();const zt=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||Ac(this.g)))){this.J||qt!=4||d==7||(d==8||0>=zt?mr(3):mr(2)),vr(this);var g=this.g.Z();this.X=g;t:if(ss(this)){var E=Ac(this.g);a="";var L=E.length,U=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ki(this),Jn(this);var ie="";break t}this.h.i=new l.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(E[d],{stream:!(U&&d==L-1)});E.length=0,this.h.g+=a,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=g==200,Vh(this.i,this.u,this.A,this.l,this.R,qt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var nt,Bt=this.g;if((nt=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(nt)){var We=nt;break t}}We=null}if(g=We)Pi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,g);else{this.o=!1,this.s=3,Dt(12),ki(this),Jn(this);break e}}if(this.P){g=!0;let Ln;for(;!this.J&&this.C<ie.length;)if(Ln=rs(this,ie),Ln==en){qt==4&&(this.s=4,Dt(14),g=!1),Pi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==un){this.s=4,Dt(15),Pi(this.i,this.l,ie,"[Invalid Chunk]"),g=!1;break}else Pi(this.i,this.l,Ln,null),Er(this,Ln);if(ss(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||ie.length!=0||this.h.h||(this.s=1,Dt(16),g=!1),this.o=this.o&&g,!g)Pi(this.i,this.l,ie,"[Invalid Chunked Response]"),ki(this),Jn(this);else if(0<ie.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ua(Wt),Wt.M=!0,Dt(11))}}else Pi(this.i,this.l,ie,null),Er(this,ie);qt==4&&ki(this),this.o&&!this.J&&(qt==4?$a(this.j,this):(this.o=!1,ui(this)))}else Cc(this.g),g==400&&0<ie.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),ki(this),Jn(this)}}}catch{}finally{}};function ss(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function rs(a,d){var g=a.C,E=d.indexOf(`
`,g);return E==-1?en:(g=Number(d.substring(g,E)),isNaN(g)?un:(E+=1,E+g>d.length?en:(d=d.slice(E,E+g),a.C=E+g,d)))}In.prototype.cancel=function(){this.J=!0,ki(this)};function ui(a){a.S=Date.now()+a.I,ba(a,a.I)}function ba(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gr(y(a.ba,a),d)}function vr(a){a.B&&(l.clearTimeout(a.B),a.B=null)}In.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xs(this.i,this.A),this.L!=2&&(mr(),Dt(17)),ki(this),this.s=2,Jn(this)):ba(this,this.S-a)};function Jn(a){a.j.G==0||a.J||$a(a.j,a)}function ki(a){vr(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,ns(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Er(a,d){try{var g=a.j;if(g.G!=0&&(g.g==a||po(g.h,a))){if(!a.K&&po(g.h,a)&&g.G==3){try{var E=g.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Cr(g),Tr(g);else break e;Fa(g),Dt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=gr(y(g.Za,g),6e3));if(1>=Ca(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else di(g,11)}else if((a.K||g.g==a)&&Cr(g),!z(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let We=L[d];if(g.T=We[0],We=We[1],g.G==2)if(We[0]=="c"){g.K=We[1],g.ia=We[2];const Wt=We[3];Wt!=null&&(g.la=Wt,g.j.info("VER="+g.la));const qt=We[4];qt!=null&&(g.Aa=qt,g.j.info("SVER="+g.Aa));const zt=We[5];zt!=null&&typeof zt=="number"&&0<zt&&(E=1.5*zt,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Ln=a.g;if(Ln){const Sr=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sr){var U=E.h;U.g||Sr.indexOf("spdy")==-1&&Sr.indexOf("quic")==-1&&Sr.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(mo(U,U.h),U.h=null))}if(E.D){const Io=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Io&&(E.ya=Io,Ke(E.I,E.D,Io))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var ie=a;if(E.qa=Ba(E,E.J?E.ia:null,E.W),ie.K){Sa(E.h,ie);var nt=ie,Bt=E.L;Bt&&(nt.I=Bt),nt.B&&(vr(nt),ui(nt)),E.g=ie}else Ar(E);0<g.i.length&&Ir(g)}else We[0]!="stop"&&We[0]!="close"||di(g,7);else g.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?di(g,7):Eo(g):We[0]!="noop"&&g.l&&g.l.ta(We),g.v=0)}}mr(4)}catch{}}var Ta=class{constructor(a,d){this.g=a,this.map=d}};function Ia(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ca(a){return a.h?1:a.g?a.g.size:0}function po(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function mo(a,d){a.g?a.g.add(d):a.h=d}function Sa(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Ia.prototype.cancel=function(){if(this.i=Ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ra(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const g of a.g.values())d=d.concat(g.D);return d}return V(a.i)}function gc(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],g=a.length,E=0;E<g;E++)d.push(a[E]);return d}d=[],g=0;for(E in a)d[g++]=a[E];return d}function _c(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var g=0;g<a;g++)d.push(g);return d}d=[],g=0;for(const E in a)d[g++]=E;return d}}}function Pa(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var g=_c(a),E=gc(a),L=E.length,U=0;U<L;U++)d.call(void 0,E[U],g&&g[U],a)}var jn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function An(a,d){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var E=a[g].indexOf("="),L=null;if(0<=E){var U=a[g].substring(0,E);L=a[g].substring(E+1)}else U=a[g];d(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Cn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cn){this.h=a.h,Ms(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var d=a.i,g=new Mn;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Hn(this,g),this.m=a.m}else a&&(d=String(a).match(jn))?(this.h=!1,Ms(this,d[1]||"",!0),this.o=Zn(d[2]||""),this.g=Zn(d[3]||"",!0),Ls(this,d[4]),this.l=Zn(d[5]||"",!0),Hn(this,d[6]||"",!0),this.m=Zn(d[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}Cn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(as(d,ls,!0),":");var g=this.g;return(g||d=="file")&&(a.push("//"),(d=this.o)&&a.push(as(d,ls,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(as(g,g.charAt(0)=="/"?vc:ka,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",as(g,Fh)),a.join("")};function Rt(a){return new Cn(a)}function Ms(a,d,g){a.j=g?Zn(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Hn(a,d,g){d instanceof Mn?(a.i=d,Ec(a.i,a.h)):(g||(d=as(d,hi)),a.i=new Mn(d,a.h))}function Ke(a,d,g){a.i.set(d,g)}function os(a){return Ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zn(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function as(a,d,g){return typeof a=="string"?(a=encodeURI(a).replace(d,yc),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yc(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ls=/[#\/\?@]/g,ka=/[#\?:]/g,vc=/[#\?]/g,hi=/[#\?@]/g,Fh=/#/g;function Mn(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&An(a.i,function(d,g){a.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Mn.prototype,t.add=function(a,d){Wn(this),this.i=null,a=ei(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(d),this.h+=1,this};function Na(a,d){Wn(a),d=ei(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Vs(a,d){return Wn(a),d=ei(a,d),a.g.has(d)}t.forEach=function(a,d){Wn(this),this.g.forEach(function(g,E){g.forEach(function(L){a.call(d,L,E,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let E=0;E<d.length;E++){const L=a[E];for(let U=0;U<L.length;U++)g.push(d[E])}return g},t.V=function(a){Wn(this);let d=[];if(typeof a=="string")Vs(this,a)&&(d=d.concat(this.g.get(ei(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)d=d.concat(a[g])}return d},t.set=function(a,d){return Wn(this),this.i=null,a=ei(this,a),Vs(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function go(a,d,g){Na(a,d),0<g.length&&(a.i=null,a.g.set(ei(a,d),V(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var E=d[g];const U=encodeURIComponent(String(E)),ie=this.V(E);for(E=0;E<ie.length;E++){var L=U;ie[E]!==""&&(L+="="+encodeURIComponent(String(ie[E]))),a.push(L)}}return this.i=a.join("&")};function ei(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ec(a,d){d&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(Na(this,E),go(this,L,g))},a)),a.j=d}function wc(a,d){const g=new _r;if(l.Image){const E=new Image;E.onload=w(Sn,g,"TestLoadImage: loaded",!0,d,E),E.onerror=w(Sn,g,"TestLoadImage: error",!1,d,E),E.onabort=w(Sn,g,"TestLoadImage: abort",!1,d,E),E.ontimeout=w(Sn,g,"TestLoadImage: timeout",!1,d,E),l.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else d(!1)}function bc(a,d){const g=new _r,E=new AbortController,L=setTimeout(()=>{E.abort(),Sn(g,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Sn(g,"TestPingServer: ok",!0,d):Sn(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Sn(g,"TestPingServer: error",!1,d)})}function Sn(a,d,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function Uh(){this.g=new oo}function Tc(a,d,g){const E=g||"";try{Pa(a,function(L,U){let ie=L;h(L)&&(ie=Ut(L)),d.push(E+U+"="+encodeURIComponent(ie))})}catch(L){throw d.push(E+"type="+encodeURIComponent("_badmap")),L}}function Fs(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Fs,Ea),Fs.prototype.g=function(){return new cs(this.l,this.j)},Fs.prototype.i=function(a){return function(){return a}}({});function cs(a,d){ve.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(cs,ve),t=cs.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_o(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _o(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?wr(this):Ni(this),this.readyState==3&&_o(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,wr(this))},t.Qa=function(a){this.g&&(this.response=a,wr(this))},t.ga=function(){this.g&&wr(this)};function wr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ni(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=d.next();return a.join(`\r
`)};function Ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ic(a){let d="";return be(a,function(g,E){d+=E,d+=":",d+=g,d+=`\r
`}),d}function yo(a,d,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Ic(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Ke(a,d,g))}function ht(a){ve.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ht,ve);var Oa=/^https?$/i,Da=["POST","PUT"];t=ht.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?hc(this.o):hc(wa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(U){xa(this,U);return}if(a=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Da,d,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ie]of g)this.g.setRequestHeader(U,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){xa(this,U)}};function xa(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Us(a),br(a)}function Us(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ce(this,"complete"),Ce(this,"abort"),br(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),ht.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vo(this):this.bb())},t.bb=function(){vo(this)};function vo(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)It(a.Ea,0,a);else if(Ce(a,"readystatechange"),hn(a)==4){a.h=!1;try{const ie=a.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var E;if(E=ie===0){var L=String(a.D).match(jn)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),E=!Oa.test(L?L.toLowerCase():"")}g=E}if(g)Ce(a,"complete"),Ce(a,"success");else{a.m=6;try{var U=2<hn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Us(a)}}finally{br(a)}}}}function br(a,d){if(a.g){Ma(a);const g=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ce(a,"ready");try{g.onreadystatechange=E}catch{}}}function Ma(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),xn(d)}};function Ac(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cc(a){const d={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(z(a[E]))continue;var g=O(a[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=d[L]||[];d[L]=U,U.push(g)}R(d,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||d}function La(a){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ia(a&&a.concurrentRequestLimit),this.Da=new Uh,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=La.prototype,t.la=8,t.G=1,t.connect=function(a,d,g,E){Dt(0),this.W=a,this.H=d||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Ba(this,null,this.W),Ir(this)};function Eo(a){if(wo(a),a.G==3){var d=a.U++,g=Rt(a.I);if(Ke(g,"SID",a.K),Ke(g,"RID",d),Ke(g,"TYPE","terminate"),Bs(a,g),d=new In(a,a.j,d),d.L=2,d.v=os(Rt(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=d.v,g=!0),g||(d.g=Pc(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ui(d)}Rc(a)}function Tr(a){a.g&&(Ua(a),a.g.cancel(),a.g=null)}function wo(a){Tr(a),a.u&&(l.clearTimeout(a.u),a.u=null),Cr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ir(a){if(!Aa(a.h)&&!a.s){a.s=!0;var d=a.Ga;De||S(),xe||(De(),xe=!0),Pe.add(d,a),a.B=0}}function $h(a,d){return Ca(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gr(y(a.Ga,a,d),Oi(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new In(this,this.j,a);let U=this.o;if(this.S&&(U?(U=b(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Va(this,L,d),g=Rt(this.I),Ke(g,"RID",a),Ke(g,"CVER",22),this.D&&Ke(g,"X-HTTP-Session-Id",this.D),Bs(this,g),U&&(this.O?d="headers="+encodeURIComponent(String(Ic(U)))+"&"+d:this.m&&yo(g,this.m,U)),mo(this.h,L),this.Ua&&Ke(g,"TYPE","init"),this.P?(Ke(g,"$req",d),Ke(g,"SID","null"),L.T=!0,$t(L,g,null)):$t(L,g,d),this.G=2}}else this.G==3&&(a?Sc(this,a):this.i.length==0||Aa(this.h)||Sc(this))};function Sc(a,d){var g;d?g=d.l:g=a.U++;const E=Rt(a.I);Ke(E,"SID",a.K),Ke(E,"RID",g),Ke(E,"AID",a.T),Bs(a,E),a.m&&a.o&&yo(E,a.m,a.o),g=new In(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Va(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),mo(a.h,g),$t(g,E,d)}function Bs(a,d){a.H&&be(a.H,function(g,E){Ke(d,E,g)}),a.l&&Pa({},function(g,E){Ke(d,E,g)})}function Va(a,d,g){g=Math.min(a.i.length,g);var E=a.l?y(a.l.Na,a.l,a):null;e:{var L=a.i;let U=-1;for(;;){const ie=["count="+g];U==-1?0<g?(U=L[0].g,ie.push("ofs="+U)):U=0:ie.push("ofs="+U);let nt=!0;for(let Bt=0;Bt<g;Bt++){let We=L[Bt].g;const Wt=L[Bt].map;if(We-=U,0>We)U=Math.max(0,L[Bt].g-100),nt=!1;else try{Tc(Wt,ie,"req"+We+"_")}catch{E&&E(Wt)}}if(nt){E=ie.join("&");break e}}}return a=a.i.splice(0,g),d.D=a,E}function Ar(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;De||S(),xe||(De(),xe=!0),Pe.add(d,a),a.v=0}}function Fa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gr(y(a.Fa,a),Oi(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,bo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gr(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Tr(this),bo(this))};function Ua(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function bo(a){a.g=new In(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Rt(a.qa);Ke(d,"RID","rpc"),Ke(d,"SID",a.K),Ke(d,"AID",a.T),Ke(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ke(d,"TO",a.ja),Ke(d,"TYPE","xmlhttp"),Bs(a,d),a.m&&a.o&&yo(d,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=os(Rt(d)),g.m=null,g.P=!0,yr(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Tr(this),Fa(this),Dt(19))};function Cr(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function $a(a,d){var g=null;if(a.g==d){Cr(a),Ua(a),a.g=null;var E=2}else if(po(a.h,d))g=d.D,Sa(a.h,d),E=1;else return;if(a.G!=0){if(d.o)if(E==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;E=lo(),Ce(E,new mc(E,g)),Ir(a)}else Ar(a);else if(L=d.s,L==3||L==0&&0<d.X||!(E==1&&$h(a,d)||E==2&&Fa(a)))switch(g&&0<g.length&&(d=a.h,d.i=d.i.concat(g)),L){case 1:di(a,5);break;case 4:di(a,10);break;case 3:di(a,6);break;default:di(a,2)}}}function Oi(a,d){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*d}function di(a,d){if(a.j.info("Error code "+d),d==2){var g=y(a.fb,a),E=a.Xa;const L=!E;E=new Cn(E||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ms(E,"https"),os(E),L?wc(E.toString(),g):bc(E.toString(),g)}else Dt(2);a.G=0,a.l&&a.l.sa(d),Rc(a),wo(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Rc(a){if(a.G=0,a.ka=[],a.l){const d=Ra(a.h);(d.length!=0||a.i.length!=0)&&(F(a.ka,d),F(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function Ba(a,d,g){var E=g instanceof Cn?Rt(g):new Cn(g);if(E.g!="")d&&(E.g=d+"."+E.g),Ls(E,E.s);else{var L=l.location;E=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var U=new Cn(null);E&&Ms(U,E),d&&(U.g=d),L&&Ls(U,L),g&&(U.l=g),E=U}return g=a.D,d=a.ya,g&&d&&Ke(E,g,d),Ke(E,"VER",a.la),Bs(a,E),E}function Pc(a,d,g){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ht(new Fs({eb:g})):new ht(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}t=kc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,d){return new Rn(a,d)};function Rn(a,d){ve.call(this),this.g=new La(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!z(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!z(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new js(this)}N(Rn,ve),Rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rn.prototype.close=function(){Eo(this.g)},Rn.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Ut(a),a=g);d.i.push(new Ta(d.Ya++,a)),d.G==3&&Ir(d)},Rn.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,Rn.aa.N.call(this)};function ja(a){Ds.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const g in d){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}N(ja,Ds);function Ha(){ao.call(this),this.status=1}N(Ha,ao);function js(a){this.g=a}N(js,kc),js.prototype.ua=function(){Ce(this.g,"a")},js.prototype.ta=function(a){Ce(this.g,new ja(a))},js.prototype.sa=function(a){Ce(this.g,new Ha)},js.prototype.ra=function(){Ce(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,Rn.prototype.send=Rn.prototype.o,Rn.prototype.open=Rn.prototype.m,Rn.prototype.close=Rn.prototype.close,wb=function(){return new To},Eb=function(){return lo()},vb=Ri,pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,pu=uo,ho.COMPLETE="complete",yb=ho,dc.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",ve.prototype.listen=ve.prototype.K,rl=dc,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,_b=ht}).apply(typeof Xc<"u"?Xc:typeof self<"u"?self:typeof window<"u"?window:{});const $_="@firebase/firestore",B_="4.8.0";/**
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
 */class fn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
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
 */let ya="11.10.0";/**
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
 */const Xr=new zl("@firebase/firestore");function ko(){return Xr.logLevel}function me(t,...e){if(Xr.logLevel<=Ue.DEBUG){const n=e.map(Op);Xr.debug(`Firestore (${ya}): ${t}`,...n)}}function Jr(t,...e){if(Xr.logLevel<=Ue.ERROR){const n=e.map(Op);Xr.error(`Firestore (${ya}): ${t}`,...n)}}function ea(t,...e){if(Xr.logLevel<=Ue.WARN){const n=e.map(Op);Xr.warn(`Firestore (${ya}): ${t}`,...n)}}function Op(t){if(typeof t=="string")return t;try{/**
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
 */function Le(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,bb(t,i,n)}function bb(t,e,n){let i=`FIRESTORE (${ya}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Jr(i),new Error(i)}function kt(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||bb(e,s,i)}function mt(t,e){return t}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends es{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Tb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(fn.UNAUTHENTICATED))}shutdown(){}}class bO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TO{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){kt(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(kt(typeof i.accessToken=="string",31837,{l:i}),new Tb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return kt(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class IO{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AO{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new IO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(fn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ri(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){kt(this.o===void 0,3512);const i=r=>{r.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new j_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(kt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new j_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */function RO(){return new TextEncoder}/**
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
 */class Dp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=SO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%62))}return i}}function Qe(t,e){return t<e?-1:t>e?1:0}function mf(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return Qe(i,s);{const r=RO(),o=PO(r.encode(H_(t,n)),r.encode(H_(e,n)));return o!==0?o:Qe(i,s)}}n+=i>65535?2:1}return Qe(t.length,e.length)}function H_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function PO(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Qe(t[n],e[n]);return Qe(t.length,e.length)}function ta(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */const W_="__name__";class Ui{constructor(e,n,i){n===void 0?n=0:n>e.length&&Le(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Le(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=Ui.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return Qe(e.length,n.length)}static compareSegments(e,n){const i=Ui.isNumericId(e),s=Ui.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Ui.extractNumericId(e).compare(Ui.extractNumericId(n)):mf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Np.fromString(e.substring(4,e.length-2))}}class Ct extends Ui{construct(e,n,i){return new Ct(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ee(J.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ct(n)}static emptyPath(){return new Ct([])}}const kO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends Ui{construct(e,n,i){return new an(e,n,i)}static isValidIdentifier(e){return kO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===W_}static keyField(){return new an([W_])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Ee(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Ee(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Ee(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new Ee(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new an(n)}static emptyPath(){return new an([])}}/**
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
 */class Oe{constructor(e){this.path=e}static fromPath(e){return new Oe(Ct.fromString(e))}static fromName(e){return new Oe(Ct.fromString(e).popFirst(5))}static empty(){return new Oe(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ct.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oe(new Ct(e.slice()))}}/**
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
 */function Ib(t,e,n){if(!n)throw new Ee(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NO(t,e,n,i){if(e===!0&&i===!0)throw new Ee(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q_(t){if(!Oe.isDocumentKey(t))throw new Ee(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z_(t){if(Oe.isDocumentKey(t))throw new Ee(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ab(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Le(12329,{type:typeof t})}function Cb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xp(t);throw new Ee(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){const n={typeString:t};return e&&(n.value=e),n}function rc(t,e){if(!Ab(t))throw new Ee(J.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const o=t[i];if(s&&typeof o!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new Ee(J.INVALID_ARGUMENT,n);return!0}/**
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
 */const G_=-62135596800,K_=1e6;class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*K_);return new Tt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ee(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ee(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<G_)throw new Ee(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/K_}_compareTo(e){return this.seconds===e.seconds?Qe(this.nanoseconds,e.nanoseconds):Qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rc(e,Tt._jsonSchema))return new Tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-G_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Tt._jsonSchemaVersion="firestore/timestamp/1.0",Tt._jsonSchema={type:Lt("string",Tt._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
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
 */class bt{static fromTimestamp(e){return new bt(e)}static min(){return new bt(new Tt(0,0))}static max(){return new bt(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ul=-1;function OO(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=bt.fromTimestamp(i===1e9?new Tt(n+1,0):new Tt(n,i));return new ur(s,Oe.empty(),e)}function DO(t){return new ur(t.readTime,t.key,Ul)}class ur{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new ur(bt.min(),Oe.empty(),Ul)}static max(){return new ur(bt.max(),Oe.empty(),Ul)}}function xO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Oe.comparator(t.documentKey,e.documentKey),n!==0?n:Qe(t.largestBatchId,e.largestBatchId))}/**
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
 */const MO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mp(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==MO)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,i)=>{n(e)})}static reject(e){return new K((n,i)=>{i(e)})}static waitFor(e){return new K((n,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&n()},u=>i(u))}),o=!0,r===s&&n()})}static or(e){let n=K.resolve(!1);for(const i of e)n=n.next(s=>s?K.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new K((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let u=0;u<r;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,n){return new K((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function VO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this._e(i),this.ae=i=>n.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Lp.ue=-1;/**
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
 */const Vp=-1;function Fp(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function FO(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sb="";function UO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Q_(e)),e=$O(t.get(n),e);return Q_(e)}function $O(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case Sb:n+="";break;default:n+=r}}return n}function Q_(t){return t+Sb+""}/**
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
 */function Y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function va(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Bn{constructor(e,n){this.comparator=e,this.root=n||nn.EMPTY}insert(e,n){return new Bn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new Bn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jc(this.root,e,this.comparator,!0)}}class Jc{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??nn.RED,this.left=s??nn.EMPTY,this.right=r??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new nn(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Le(27949);return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw Le(57766)}get value(){throw Le(16141)}get color(){throw Le(16727)}get left(){throw Le(29726)}get right(){throw Le(36894)}copy(e,n,i,s,r){return this}insert(e,n,i){return new nn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class cn{constructor(e){this.comparator=e,this.data=new Bn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new X_(this.data.getIterator())}getIteratorFrom(e){return new X_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new cn(this.comparator);return n.data=e,n}}class X_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ei{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new Ei([])}unionWith(e){let n=new cn(an.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ei(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class BO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xi{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new BO("Invalid base64 string: "+r):r}}(e);return new Xi(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Xi(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xi.EMPTY_BYTE_STRING=new Xi("");const jO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(kt(!!t,39018),typeof t=="string"){let e=0;const n=jO.exec(t);if(kt(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:sn(t.seconds),nanos:sn(t.nanos)}}function sn(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function na(t){return typeof t=="string"?Xi.fromBase64String(t):Xi.fromUint8Array(t)}/**
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
 */const Pb="server_timestamp",kb="__type__",Nb="__previous_value__",Ob="__local_write_time__";function Up(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[kb])===null||n===void 0?void 0:n.stringValue)===Pb}function $p(t){const e=t.mapValue.fields[Nb];return Up(e)?$p(e):e}function Gu(t){const e=Zr(t.mapValue.fields[Ob].timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class HO{constructor(e,n,i,s,r,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Ku="(default)";class Qu{constructor(e,n){this.projectId=e,this.database=n||Ku}static empty(){return new Qu("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof Qu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Db="__type__",WO="__max__",Zc={mapValue:{}},xb="__vector__",gf="value";function eo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Up(t)?4:zO(t)?9007199254740991:qO(t)?10:11:Le(28295,{value:t})}function Ji(t,e){if(t===e)return!0;const n=eo(t);if(n!==eo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gu(t).isEqual(Gu(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Zr(s.timestampValue),l=Zr(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return na(s.bytesValue).isEqual(na(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return sn(s.geoPointValue.latitude)===sn(r.geoPointValue.latitude)&&sn(s.geoPointValue.longitude)===sn(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return sn(s.integerValue)===sn(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=sn(s.doubleValue),l=sn(r.doubleValue);return o===l?zu(o)===zu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ta(t.arrayValue.values||[],e.arrayValue.values||[],Ji);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Y_(o)!==Y_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Ji(o[u],l[u])))return!1;return!0}(t,e);default:return Le(52216,{left:t})}}function $l(t,e){return(t.values||[]).find(n=>Ji(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=eo(t),i=eo(e);if(n!==i)return Qe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=sn(r.integerValue||r.doubleValue),u=sn(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return J_(t.timestampValue,e.timestampValue);case 4:return J_(Gu(t),Gu(e));case 5:return mf(t.stringValue,e.stringValue);case 6:return function(r,o){const l=na(r),u=na(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Qe(l[h],u[h]);if(f!==0)return f}return Qe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Qe(sn(r.latitude),sn(o.latitude));return l!==0?l:Qe(sn(r.longitude),sn(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Z_(t.arrayValue,e.arrayValue);case 10:return function(r,o){var l,u,h,f;const m=r.fields||{},y=o.fields||{},w=(l=m[gf])===null||l===void 0?void 0:l.arrayValue,N=(u=y[gf])===null||u===void 0?void 0:u.arrayValue,V=Qe(((h=w?.values)===null||h===void 0?void 0:h.length)||0,((f=N?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Z_(w,N)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===Zc.mapValue&&o===Zc.mapValue)return 0;if(r===Zc.mapValue)return 1;if(o===Zc.mapValue)return-1;const l=r.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=mf(u[m],f[m]);if(y!==0)return y;const w=ia(l[u[m]],h[f[m]]);if(w!==0)return w}return Qe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Le(23264,{le:n})}}function J_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Qe(t,e);const n=Zr(t),i=Zr(e),s=Qe(n.seconds,i.seconds);return s!==0?s:Qe(n.nanos,i.nanos)}function Z_(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=ia(n[s],i[s]);if(r)return r}return Qe(n.length,i.length)}function sa(t){return _f(t)}function _f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Zr(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return na(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=_f(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${_f(n.fields[o])}`;return s+"}"}(t.mapValue):Le(61005,{value:t})}function mu(t){switch(eo(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$p(t);return e?16+mu(e):16;case 5:return 2*t.stringValue.length;case 6:return na(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+mu(r),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return va(i.fields,(r,o)=>{s+=r.length+mu(o)}),s}(t.mapValue);default:throw Le(13486,{value:t})}}function yf(t){return!!t&&"integerValue"in t}function Bp(t){return!!t&&"arrayValue"in t}function gu(t){return!!t&&"mapValue"in t}function qO(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Db])===null||n===void 0?void 0:n.stringValue)===xb}function El(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return va(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=El(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=El(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WO}/**
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
 */class gi{constructor(e){this.value=e}static empty(){return new gi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=El(n)}setAll(e){let n=an.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=l.popLast()}o?i[l.lastSegment()]=El(o):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];gu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){va(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new gi(El(this.value))}}function Mb(t){const e=[];return va(t.fields,(n,i)=>{const s=new an([n]);if(gu(i)){const r=Mb(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ei(e)}/**
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
 */class pi{constructor(e,n,i,s,r,o,l){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pi(e,0,bt.min(),bt.min(),bt.min(),gi.empty(),0)}static newFoundDocument(e,n,i,s){return new pi(e,1,n,bt.min(),i,s,0)}static newNoDocument(e,n){return new pi(e,2,n,bt.min(),bt.min(),gi.empty(),0)}static newUnknownDocument(e,n){return new pi(e,3,n,bt.min(),bt.min(),gi.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yu{constructor(e,n){this.position=e,this.inclusive=n}}function ey(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=Oe.comparator(Oe.fromName(o.referenceValue),n.key):i=ia(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ji(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function GO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lb{}class Jt extends Lb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QO(e,n,i):n==="array-contains"?new JO(e,i):n==="in"?new ZO(e,i):n==="not-in"?new eD(e,i):n==="array-contains-any"?new tD(e,i):new Jt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new YO(e,i):new XO(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ia(n,this.value)):n!==null&&eo(this.value)===eo(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends Lb{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new hr(e,n)}matches(e){return Vb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Vb(t){return t.op==="and"}function Fb(t){return KO(t)&&Vb(t)}function KO(t){for(const e of t.filters)if(e instanceof hr)return!1;return!0}function vf(t){if(t instanceof Jt)return t.field.canonicalString()+t.op.toString()+sa(t.value);if(Fb(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function Ub(t,e){return t instanceof Jt?function(i,s){return s instanceof Jt&&i.op===s.op&&i.field.isEqual(s.field)&&Ji(i.value,s.value)}(t,e):t instanceof hr?function(i,s){return s instanceof hr&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&Ub(o,s.filters[l]),!0):!1}(t,e):void Le(19439)}function $b(t){return t instanceof Jt?function(n){return`${n.field.canonicalString()} ${n.op} ${sa(n.value)}`}(t):t instanceof hr?function(n){return n.op.toString()+" {"+n.getFilters().map($b).join(" ,")+"}"}(t):"Filter"}class QO extends Jt{constructor(e,n,i){super(e,n,i),this.key=Oe.fromName(i.referenceValue)}matches(e){const n=Oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class YO extends Jt{constructor(e,n){super(e,"in",n),this.keys=Bb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XO extends Jt{constructor(e,n){super(e,"not-in",n),this.keys=Bb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Oe.fromName(i.referenceValue))}class JO extends Jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bp(n)&&$l(n.arrayValue,this.value)}}class ZO extends Jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$l(this.value.arrayValue,n)}}class eD extends Jt{constructor(e,n){super(e,"not-in",n)}matches(e){if($l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$l(this.value.arrayValue,n)}}class tD extends Jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>$l(this.value.arrayValue,i))}}/**
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
 */class nD{constructor(e,n=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.Pe=null}}function ny(t,e=null,n=[],i=[],s=null,r=null,o=null){return new nD(t,e,n,i,s,r,o)}function jp(t){const e=mt(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>vf(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Fp(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>sa(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>sa(i)).join(",")),e.Pe=n}return e.Pe}function Hp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ub(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ty(t.startAt,e.startAt)&&ty(t.endAt,e.endAt)}/**
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
 */class Ch{constructor(e,n=null,i=[],s=[],r=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iD(t,e,n,i,s,r,o,l){return new Ch(t,e,n,i,s,r,o,l)}function sD(t){return new Ch(t)}function iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rD(t){return t.collectionGroup!==null}function wl(t){const e=mt(t);if(e.Te===null){e.Te=[];const n=new Set;for(const r of e.explicitOrderBy)e.Te.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new cn(an.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.Te.push(new Xu(r,i))}),n.has(an.keyField().canonicalString())||e.Te.push(new Xu(an.keyField(),i))}return e.Te}function Wr(t){const e=mt(t);return e.Ie||(e.Ie=oD(e,wl(t))),e.Ie}function oD(t,e){if(t.limitType==="F")return ny(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Xu(s.field,r)});const n=t.endAt?new Yu(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Yu(t.startAt.position,t.startAt.inclusive):null;return ny(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ef(t,e,n){return new Ch(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jb(t,e){return Hp(Wr(t),Wr(e))&&t.limitType===e.limitType}function Hb(t){return`${jp(Wr(t))}|lt:${t.limitType}`}function el(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>$b(s)).join(", ")}]`),Fp(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>sa(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>sa(s)).join(",")),`Target(${i})`}(Wr(t))}; limitType=${t.limitType})`}function Wp(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):Oe.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of wl(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,l,u){const h=ey(o,l,u);return o.inclusive?h<=0:h<0}(i.startAt,wl(i),s)||i.endAt&&!function(o,l,u){const h=ey(o,l,u);return o.inclusive?h>=0:h>0}(i.endAt,wl(i),s))}(t,e)}function aD(t){return(e,n)=>{let i=!1;for(const s of wl(t)){const r=lD(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function lD(t,e,n){const i=t.field.isKeyField()?Oe.comparator(e.key,n.key):function(r,o,l){const u=o.data.field(r),h=l.data.field(r);return u!==null&&h!==null?ia(u,h):Le(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Le(19790,{direction:t.dir})}}/**
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
 */class so{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){va(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Rb(this.inner)}size(){return this.innerSize}}/**
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
 */const cD=new Bn(Oe.comparator);function Ju(){return cD}const Wb=new Bn(Oe.comparator);function eu(...t){let e=Wb;for(const n of t)e=e.insert(n.key,n);return e}function qb(t){let e=Wb;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function $r(){return bl()}function zb(){return bl()}function bl(){return new so(t=>t.toString(),(t,e)=>t.isEqual(e))}const uD=new Bn(Oe.comparator),hD=new cn(Oe.comparator);function _n(...t){let e=hD;for(const n of t)e=e.add(n);return e}const dD=new cn(Qe);function fD(){return dD}/**
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
 */function qp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function Gb(t){return{integerValue:""+t}}function pD(t,e){return FO(e)?Gb(e):qp(t,e)}/**
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
 */class Sh{constructor(){this._=void 0}}function mD(t,e,n){return t instanceof Bl?function(s,r){const o={fields:{[kb]:{stringValue:Pb},[Ob]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Up(r)&&(r=$p(r)),r&&(o.fields[Nb]=r),{mapValue:o}}(n,e):t instanceof jl?Qb(t,e):t instanceof Hl?Yb(t,e):function(s,r){const o=Kb(s,r),l=sy(o)+sy(s.Ee);return yf(o)&&yf(s.Ee)?Gb(l):qp(s.serializer,l)}(t,e)}function gD(t,e,n){return t instanceof jl?Qb(t,e):t instanceof Hl?Yb(t,e):n}function Kb(t,e){return t instanceof Zu?function(i){return yf(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Bl extends Sh{}class jl extends Sh{constructor(e){super(),this.elements=e}}function Qb(t,e){const n=Xb(e);for(const i of t.elements)n.some(s=>Ji(s,i))||n.push(i);return{arrayValue:{values:n}}}class Hl extends Sh{constructor(e){super(),this.elements=e}}function Yb(t,e){let n=Xb(e);for(const i of t.elements)n=n.filter(s=>!Ji(s,i));return{arrayValue:{values:n}}}class Zu extends Sh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function sy(t){return sn(t.integerValue||t.doubleValue)}function Xb(t){return Bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class _D{constructor(e,n){this.field=e,this.transform=n}}function yD(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof jl&&s instanceof jl||i instanceof Hl&&s instanceof Hl?ta(i.elements,s.elements,Ji):i instanceof Zu&&s instanceof Zu?Ji(i.Ee,s.Ee):i instanceof Bl&&s instanceof Bl}(t.transform,e.transform)}class vD{constructor(e,n){this.version=e,this.transformResults=n}}class bs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bs}static exists(e){return new bs(void 0,e)}static updateTime(e){return new bs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rh{}function Jb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eT(t.key,bs.none()):new ac(t.key,t.data,bs.none());{const n=t.data,i=gi.empty();let s=new cn(an.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ro(t.key,i,new Ei(s.toArray()),bs.none())}}function ED(t,e,n){t instanceof ac?function(s,r,o){const l=s.value.clone(),u=oy(s.fieldTransforms,r,o.transformResults);l.setAll(u),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ro?function(s,r,o){if(!_u(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=oy(s.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(Zb(s)),u.setAll(l),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Tl(t,e,n,i){return t instanceof ac?function(r,o,l,u){if(!_u(r.precondition,o))return l;const h=r.value.clone(),f=ay(r.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,i):t instanceof ro?function(r,o,l,u){if(!_u(r.precondition,o))return l;const h=ay(r.fieldTransforms,u,o),f=o.data;return f.setAll(Zb(r)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(m=>m.field))}(t,e,n,i):function(r,o,l){return _u(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wD(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Kb(i.transform,s||null);r!=null&&(n===null&&(n=gi.empty()),n.set(i.field,r))}return n||null}function ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ta(i,s,(r,o)=>yD(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ac extends Rh{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ro extends Rh{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Zb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function oy(t,e,n){const i=new Map;kt(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,gD(o,l,n[s]))}return i}function ay(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,mD(r,o,e))}return i}class eT extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bD extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TD{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&ED(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Tl(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Tl(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=zb();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(s.key)?null:l;const u=Jb(o,l);u!==null&&i.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(bt.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_n())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,(n,i)=>ry(n,i))&&ta(this.baseMutations,e.baseMutations,(n,i)=>ry(n,i))}}class zp{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){kt(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let s=function(){return uD}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new zp(e,n,i,s)}}/**
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
 */class ID{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Mt,qe;function AD(t){switch(t){case J.OK:return Le(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Le(15467,{code:t})}}function CD(t){if(t===void 0)return Jr("GRPC error has no .code"),J.UNKNOWN;switch(t){case Mt.OK:return J.OK;case Mt.CANCELLED:return J.CANCELLED;case Mt.UNKNOWN:return J.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return J.INTERNAL;case Mt.UNAVAILABLE:return J.UNAVAILABLE;case Mt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Mt.NOT_FOUND:return J.NOT_FOUND;case Mt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Mt.ABORTED:return J.ABORTED;case Mt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Mt.DATA_LOSS:return J.DATA_LOSS;default:return Le(39323,{code:t})}}(qe=Mt||(Mt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Np([4294967295,4294967295],0);class SD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RD(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PD(t,e){return wf(t,e.toTimestamp())}function zo(t){return kt(!!t,49232),bt.fromTimestamp(function(n){const i=Zr(n);return new Tt(i.seconds,i.nanos)}(t))}function tT(t,e){return bf(t,e).canonicalString()}function bf(t,e){const n=function(s){return new Ct(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kD(t){const e=Ct.fromString(t);return kt(FD(e),10190,{key:e.toString()}),e}function Tf(t,e){return tT(t.databaseId,e.path)}function ND(t){const e=kD(t);return e.length===4?Ct.emptyPath():DD(e)}function OD(t){return new Ct(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DD(t){return kt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ly(t,e,n){return{name:Tf(t,e),fields:n.value.mapValue.fields}}function xD(t,e){let n;if(e instanceof ac)n={update:ly(t,e.key,e.value)};else if(e instanceof eT)n={delete:Tf(t,e.key)};else if(e instanceof ro)n={update:ly(t,e.key,e.data),updateMask:VD(e.fieldMask)};else{if(!(e instanceof bD))return Le(16599,{Rt:e.type});n={verify:Tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Hl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zu)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Le(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:PD(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Le(27497)}(t,e.precondition)),n}function MD(t,e){return t&&t.length>0?(kt(e!==void 0,14353),t.map(n=>function(s,r){let o=s.updateTime?zo(s.updateTime):zo(r);return o.isEqual(bt.min())&&(o=zo(r)),new vD(o,s.transformResults||[])}(n,e))):[]}function LD(t){let e=ND(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){kt(i===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(m){const y=nT(m);return y instanceof hr&&Fb(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(N){return new Xu(No(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Fp(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,w=m.values||[];return new Yu(w,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,w=m.values||[];return new Yu(w,y)}(n.endAt)),iD(e,s,o,r,l,"F",u,h)}function nT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=No(n.unaryFilter.field);return Jt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=No(n.unaryFilter.field);return Jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=No(n.unaryFilter.field);return Jt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=No(n.unaryFilter.field);return Jt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Le(61313);default:return Le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Jt.create(No(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Le(58110);default:return Le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hr.create(n.compositeFilter.filters.map(i=>nT(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Le(1026)}}(n.compositeFilter.op))}(t):Le(30097,{filter:t})}function No(t){return an.fromServerFormat(t.fieldPath)}function VD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FD(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class UD{constructor(e){this.gt=e}}function $D(t){const e=LD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
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
 */class BD{constructor(){this.Dn=new jD}addToCollectionParentIndex(e,n){return this.Dn.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(ur.min())}updateCollectionGroup(e,n,i){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class jD{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new cn(Ct.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new cn(Ct.comparator)).toArray()}}/**
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
 */const cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iT=41943040;class Un{static withCacheSize(e){return new Un(e,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Un.DEFAULT_COLLECTION_PERCENTILE=10,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Un.DEFAULT=new Un(iT,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Un.DISABLED=new Un(-1,0,0);/**
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
 */class ra{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ra(0)}static ur(){return new ra(-1)}}/**
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
 */const uy="LruGarbageCollector",HD=1048576;function hy([t,e],[n,i]){const s=Qe(t,n);return s===0?Qe(e,i):s}class WD{constructor(e){this.Tr=e,this.buffer=new cn(hy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();hy(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qD{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){me(uy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){oc(n)?me(uy,"Ignoring IndexedDB error during garbage collection: ",n):await Mp(n)}await this.Rr(3e5)})}}class zD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return K.resolve(Lp.ue);const i=new WD(n);return this.Vr.forEachTarget(e,s=>i.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>i.Er(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(cy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let i,s,r,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(i=m,l=Date.now(),this.removeTargets(e,i,n))).next(m=>(r=m,u=Date.now(),this.removeOrphanedDocuments(e,i))).next(m=>(h=Date.now(),ko()<=Ue.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:m})))}}function GD(t,e){return new zD(t,e)}/**
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
 */class KD{constructor(){this.changes=new so(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pi.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?K.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YD{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Tl(i.mutation,s,Ei.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,_n()).next(()=>i))}getLocalViewOfDocuments(e,n,i=_n()){const s=$r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=eu();return r.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,_n()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,i,s){let r=Ju();const o=bl(),l=function(){return bl()}();return n.forEach((u,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ro)?r=r.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Tl(f.mutation,h,f.mutation.getFieldMask(),Tt.now())):o.set(h.key,Ei.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new QD(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const i=bl();let s=new Bn((o,l)=>o-l),r=_n();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=i.get(u)||Ei.empty();f=l.applyToLocalView(h,f),i.set(u,f);const m=(s.get(l.batchId)||_n()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=zb();f.forEach(y=>{if(!r.has(y)){const w=Jb(n.get(y),i.get(y));w!==null&&m.set(y,w),r=r.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return K.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return Oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):K.resolve($r());let l=Ul,u=r;return o.next(h=>K.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),r.get(f)?K.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,u,h,_n())).next(f=>({batchId:l,changes:qb(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Oe(n)).next(i=>{let s=eu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=eu();return this.indexManager.getCollectionParents(e,r).next(l=>K.forEach(l,u=>{const h=function(m,y){return new Ch(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pi.newInvalidDocument(f)))});let l=eu();return o.forEach((u,h)=>{const f=r.get(u);f!==void 0&&Tl(f.mutation,h,Ei.empty(),Tt.now()),Wp(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class XD{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return K.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zo(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:$D(s.bundledQuery),readTime:zo(s.readTime)}}(n)),K.resolve()}}/**
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
 */class JD{constructor(){this.overlays=new Bn(Oe.comparator),this.kr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const i=$r();return K.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.wt(e,n,r)}),K.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.kr.delete(i)),K.resolve()}getOverlaysForCollection(e,n,i){const s=$r(),r=n.length+1,o=new Oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>i&&s.set(u.getKey(),u)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Bn((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let f=r.get(h.largestBatchId);f===null&&(f=$r(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=$r(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return K.resolve(l)}wt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new ID(n,i));let r=this.kr.get(n);r===void 0&&(r=_n(),this.kr.set(n,r)),this.kr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.sessionToken=Xi.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
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
 */class Gp{constructor(){this.qr=new cn(Yt.Qr),this.$r=new cn(Yt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const i=new Yt(e,n);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Wr(new Yt(e,n))}Gr(e,n){e.forEach(i=>this.removeReference(i,n))}zr(e){const n=new Oe(new Ct([])),i=new Yt(n,e),s=new Yt(n,e+1),r=[];return this.$r.forEachInRange([i,s],o=>{this.Wr(o),r.push(o.key)}),r}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Oe(new Ct([])),i=new Yt(n,e),s=new Yt(n,e+1);let r=_n();return this.$r.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Yt(e,0),i=this.qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Yt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Oe.comparator(e.key,n.key)||Qe(e.Hr,n.Hr)}static Ur(e,n){return Qe(e.Hr,n.Hr)||Oe.comparator(e.key,n.key)}}/**
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
 */class ex{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new cn(Yt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TD(r,n,i,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Yt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),r=s<0?0:s;return K.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Vp:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Yt(n,0),s=new Yt(n,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],o=>{const l=this.Zr(o.Hr);r.push(l)}),K.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new cn(Qe);return n.forEach(s=>{const r=new Yt(s,0),o=new Yt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],l=>{i=i.add(l.Hr)})}),K.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Oe.isDocumentKey(r)||(r=r.child(""));const o=new Yt(new Oe(r),0);let l=new cn(Qe);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)},o),K.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(i=>{const s=this.Zr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){kt(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return K.forEach(n.mutations,s=>{const r=new Yt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=i})}rr(e){}containsKey(e,n){const i=new Yt(n,0),s=this.Yr.firstAfterOrEqual(i);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tx{constructor(e){this.ni=e,this.docs=function(){return new Bn(Oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return K.resolve(i?i.document.mutableCopy():pi.newInvalidDocument(n))}getEntries(e,n){let i=Ju();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():pi.newInvalidDocument(s))}),K.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ju();const o=n.path,l=new Oe(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||xO(DO(f),i)<=0||(s.has(f.key)||Wp(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return K.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Le(9500)}ri(e,n){return K.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new nx(this)}getSize(e){return K.resolve(this.size)}}class nx extends KD{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(i)}),K.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class ix{constructor(e){this.persistence=e,this.ii=new so(n=>jp(n),Hp),this.lastRemoteSnapshotVersion=bt.min(),this.highestTargetId=0,this.si=0,this.oi=new Gp,this.targetCount=0,this._i=ra.ar()}forEachTarget(e,n){return this.ii.forEach((i,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.si&&(this.si=n),K.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ra(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.hr(n),K.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),K.waitFor(r).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const i=this.ii.get(n)||null;return K.resolve(i)}addMatchingKeys(e,n,i){return this.oi.Kr(n,i),K.resolve()}removeMatchingKeys(e,n,i){this.oi.Gr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const i=this.oi.Jr(n);return K.resolve(i)}containsKey(e,n){return K.resolve(this.oi.containsKey(n))}}/**
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
 */class sT{constructor(e,n){this.ai={},this.overlays={},this.ui=new Lp(0),this.ci=!1,this.ci=!0,this.li=new ZD,this.referenceDelegate=e(this),this.hi=new ix(this),this.indexManager=new BD,this.remoteDocumentCache=function(s){return new tx(s)}(i=>this.referenceDelegate.Pi(i)),this.serializer=new UD(n),this.Ti=new XD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ai[e.toKey()];return i||(i=new ex(n,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,i){me("MemoryPersistence","Starting transaction:",e);const s=new sx(this.ui.next());return this.referenceDelegate.Ii(),i(s).next(r=>this.referenceDelegate.di(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ei(e,n){return K.or(Object.values(this.ai).map(i=>()=>i.containsKey(e,n)))}}class sx extends LO{constructor(e){super(),this.currentSequenceNumber=e}}class Kp{constructor(e){this.persistence=e,this.Ai=new Gp,this.Ri=null}static Vi(e){return new Kp(e)}get mi(){if(this.Ri)return this.Ri;throw Le(60996)}addReference(e,n,i){return this.Ai.addReference(i,n),this.mi.delete(i.toString()),K.resolve()}removeReference(e,n,i){return this.Ai.removeReference(i,n),this.mi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),K.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.mi.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,i=>{const s=Oe.fromPath(i);return this.fi(e,s).next(r=>{r||n.removeEntry(s,bt.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(i=>{i?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return K.or([()=>K.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class eh{constructor(e,n){this.persistence=e,this.gi=new so(i=>UO(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=GD(this,n)}static Vi(e,n){return new eh(e,n)}Ii(){}di(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}yr(e){let n=0;return this.gr(e,i=>{n++}).next(()=>n)}gr(e,n){return K.forEach(this.gi,(i,s)=>this.Sr(e,i,s).next(r=>r?K.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(i++,r.removeEntry(o,bt.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,n,i){return this.gi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),K.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mu(e.data.value)),n}Sr(e,n,i){return K.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return K.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qp{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Is=i,this.ds=s}static Es(e,n){let i=_n(),s=_n();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Qp(e,n.fromCache,i,s)}}/**
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
 */class rx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ox{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return PA()?8:VO(bn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.ps(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ys(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new rx;return this.ws(e,n,o).next(l=>{if(r.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>r.result)}Ss(e,n,i,s){return i.documentReadCount<this.Vs?(ko()<=Ue.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",el(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(ko()<=Ue.DEBUG&&me("QueryEngine","Query:",el(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(ko()<=Ue.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",el(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wr(n))):K.resolve())}ps(e,n){if(iy(n))return K.resolve(null);let i=Wr(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ef(n,null,"F"),i=Wr(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=_n(...r);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Ef(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,i,s){return iy(n)||s.isEqual(bt.min())?K.resolve(null):this.gs.getDocuments(e,i).next(r=>{const o=this.bs(n,r);return this.Ds(n,o,i,s)?K.resolve(null):(ko()<=Ue.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),el(n)),this.vs(e,o,n,OO(s,Ul)).next(l=>l))})}bs(e,n){let i=new cn(aD(e));return n.forEach((s,r)=>{Wp(e,r)&&(i=i.add(r))}),i}Ds(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(e,n,i){return ko()<=Ue.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",el(n)),this.gs.getDocumentsMatchingQuery(e,n,ur.min(),i)}vs(e,n,i,s){return this.gs.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */const ax="LocalStore";class lx{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Bn(Qe),this.Ms=new so(r=>jp(r),Hp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YD(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function cx(t,e,n,i){return new lx(t,e,n,i)}async function rT(t,e){const n=mt(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Ns(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let u=_n();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(i,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ux(t,e){const n=mt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let w=K.resolve();return y.forEach(N=>{w=w.next(()=>f.getEntry(u,N)).next(V=>{const F=h.docVersions.get(N);kt(F!==null,48541),V.version.compareTo(F)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=_n();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function hx(t){const e=mt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function dx(t,e){const n=mt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Vp),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class dy{constructor(){this.activeTargetIds=fD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fx{constructor(){this.Fo=new dy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,i){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new dy,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class px{xo(e){}shutdown(){}}/**
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
 */const fy="ConnectivityMonitor";class py{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){me(fy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){me(fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tu=null;function If(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
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
 */const Ad="RestConnection",mx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class gx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Ku?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,r){const o=If(),l=this.Go(e,n.toUriEncodedString());me(Ad,`Sending RPC '${e}' ${o}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,r);const{host:h}=new URL(l),f=ca(h);return this.jo(e,l,u,i,f).then(m=>(me(Ad,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ea(Ad,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",i),m})}Jo(e,n,i,s,r,o){return this.Wo(e,n,i,s,r)}zo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ya}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}Go(e,n){const i=mx[e];return`${this.$o}/v1/${n}:${i}`}terminate(){}}/**
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
 */class _x{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const dn="WebChannelConnection";class yx extends gx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,i,s,r){const o=If();return new Promise((l,u)=>{const h=new _b;h.setWithCredentials(!0),h.listenOnce(yb.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case pu.NO_ERROR:const m=h.getResponseJson();me(dn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case pu.TIMEOUT:me(dn,`RPC '${e}' ${o} timed out`),u(new Ee(J.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const y=h.getStatus();if(me(dn,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w?.error;if(N&&N.status&&N.message){const V=function(Y){const z=Y.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(z)>=0?z:J.UNKNOWN}(N.status);u(new Ee(V,N.message))}else u(new Ee(J.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Ee(J.UNAVAILABLE,"Connection failed."));break;default:Le(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{me(dn,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);me(dn,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,i,15)})}P_(e,n,i){const s=If(),r=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wb(),l=Eb(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,i),u.encodeInitMessageHeaders=!0;const f=r.join("");me(dn,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let y=!1,w=!1;const N=new _x({Ho:F=>{w?me(dn,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(y||(me(dn,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),me(dn,`RPC '${e}' stream ${s} sending:`,F),m.send(F))},Yo:()=>m.close()}),V=(F,Y,z)=>{F.listen(Y,X=>{try{z(X)}catch(Q){setTimeout(()=>{throw Q},0)}})};return V(m,rl.EventType.OPEN,()=>{w||(me(dn,`RPC '${e}' stream ${s} transport opened.`),N.s_())}),V(m,rl.EventType.CLOSE,()=>{w||(w=!0,me(dn,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(m))}),V(m,rl.EventType.ERROR,F=>{w||(w=!0,ea(dn,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),N.__(new Ee(J.UNAVAILABLE,"The operation could not be completed")))}),V(m,rl.EventType.MESSAGE,F=>{var Y;if(!w){const z=F.data[0];kt(!!z,16349);const X=z,Q=X?.error||((Y=X[0])===null||Y===void 0?void 0:Y.error);if(Q){me(dn,`RPC '${e}' stream ${s} received error:`,Q);const ye=Q.status;let be=function(C){const P=Mt[C];if(P!==void 0)return CD(P)}(ye),R=Q.message;be===void 0&&(be=J.INTERNAL,R="Unknown error status: "+ye+" with message "+Q.message),w=!0,N.__(new Ee(be,R)),m.close()}else me(dn,`RPC '${e}' stream ${s} received:`,z),N.a_(z)}}),V(l,vb.STAT_EVENT,F=>{F.stat===pf.PROXY?me(dn,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===pf.NOPROXY&&me(dn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Cd(){return typeof document<"u"?document:null}/**
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
 */function Ph(t){return new SD(t,!0)}/**
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
 */class oT{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-i);s>0&&me("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const my="PersistentStream";class vx{constructor(e,n,i,s,r,o,l,u){this.Fi=e,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new oT(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(Jr(n.toString()),Jr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.b_===n&&this.W_(i,s)},i=>{e(()=>{const s=new Ee(J.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)})})}W_(e,n){const i=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.e_(()=>{i(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{i(()=>this.G_(s))}),this.stream.onMessage(s=>{i(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return me(my,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(me(my,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ex extends vx{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return kt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,kt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){kt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=MD(e.writeResults,e.commitTime),i=zo(e.commitTime);return this.listener.ta(i,n)}na(){const e={};e.database=OD(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>xD(this.serializer,i))};this.k_(n)}}/**
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
 */class wx{}class bx extends wx{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Ee(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Wo(e,bf(n,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Ee(J.UNKNOWN,r.toString())})}Jo(e,n,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,bf(n,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ee(J.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Tx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Jr(n),this._a=!1):me("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const lc="RemoteStore";class Ix{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo(o=>{i.enqueueAndForget(async()=>{uc(this)&&(me(lc,"Restarting streams for network reachability change."),await async function(u){const h=mt(u);h.Ia.add(4),await cc(h),h.Aa.set("Unknown"),h.Ia.delete(4),await kh(h)}(this))})}),this.Aa=new Tx(i,s)}}async function kh(t){if(uc(t))for(const e of t.da)await e(!0)}async function cc(t){for(const e of t.da)await e(!1)}function uc(t){return mt(t).Ia.size===0}async function aT(t,e,n){if(!oc(e))throw e;t.Ia.add(1),await cc(t),t.Aa.set("Offline"),n||(n=()=>hx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me(lc,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await kh(t)})}function lT(t,e){return e().catch(n=>aT(t,n,e))}async function Nh(t){const e=mt(t),n=dr(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Vp;for(;Ax(e);)try{const s=await dx(e.localStore,i);if(s===null){e.Pa.length===0&&n.B_();break}i=s.batchId,Cx(e,s)}catch(s){await aT(e,s)}cT(e)&&uT(e)}function Ax(t){return uc(t)&&t.Pa.length<10}function Cx(t,e){t.Pa.push(e);const n=dr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function cT(t){return uc(t)&&!dr(t).M_()&&t.Pa.length>0}function uT(t){dr(t).start()}async function Sx(t){dr(t).na()}async function Rx(t){const e=dr(t);for(const n of t.Pa)e.X_(n.mutations)}async function Px(t,e,n){const i=t.Pa.shift(),s=zp.from(i,e,n);await lT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nh(t)}async function kx(t,e){e&&dr(t).Z_&&await async function(i,s){if(function(o){return AD(o)&&o!==J.ABORTED}(s.code)){const r=i.Pa.shift();dr(i).N_(),await lT(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Nh(i)}}(t,e),cT(t)&&uT(t)}async function gy(t,e){const n=mt(t);n.asyncQueue.verifyOperationInProgress(),me(lc,"RemoteStore received new credentials");const i=uc(n);n.Ia.add(3),await cc(n),i&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await kh(n)}async function Nx(t,e){const n=mt(t);e?(n.Ia.delete(2),await kh(n)):e||(n.Ia.add(2),await cc(n),n.Aa.set("Unknown"))}function dr(t){return t.ma||(t.ma=function(n,i,s){const r=mt(n);return r.ia(),new Ex(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:Sx.bind(null,t),n_:kx.bind(null,t),ea:Rx.bind(null,t),ta:Px.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Nh(t)):(await t.ma.stop(),t.Pa.length>0&&(me(lc,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Yp{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new Yp(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hT(t,e){if(Jr("AsyncQueue",`${e}: ${t}`),oc(t))return new Ee(J.UNAVAILABLE,`${e}: ${t}`);throw t}class Ox{constructor(){this.queries=_y(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,i){const s=mt(n),r=s.queries;s.queries=_y(),r.forEach((o,l)=>{for(const u of l.wa)u.onError(i)})})(this,new Ee(J.ABORTED,"Firestore shutting down"))}}function _y(){return new so(t=>Hb(t),jb)}function Dx(t){t.Da.forEach(e=>{e.next()})}var yy,vy;(vy=yy||(yy={})).Fa="default",vy.Cache="cache";const xx="SyncEngine";class Mx{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new so(l=>Hb(l),jb),this.Tu=new Map,this.Iu=new Set,this.du=new Bn(Oe.comparator),this.Eu=new Map,this.Au=new Gp,this.Ru={},this.Vu=new Map,this.mu=ra.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Lx(t,e,n){const i=$x(t);try{const s=await function(o,l){const u=mt(o),h=Tt.now(),f=l.reduce((w,N)=>w.add(N.key),_n());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let N=Ju(),V=_n();return u.Os.getEntries(w,f).next(F=>{N=F,N.forEach((Y,z)=>{z.isValidDocument()||(V=V.add(Y))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,N)).next(F=>{m=F;const Y=[];for(const z of l){const X=wD(z,m.get(z.key).overlayedDocument);X!=null&&Y.push(new ro(z.key,X,Mb(X.value.mapValue),bs.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,Y,l)}).next(F=>{y=F;const Y=F.applyToLocalDocumentSet(m,V);return u.documentOverlayCache.saveOverlays(w,F.batchId,Y)})}).then(()=>({batchId:y.batchId,changes:qb(m)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Bn(Qe)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(i,s.batchId,n),await Oh(i,s.changes),await Nh(i.remoteStore)}catch(s){const r=hT(s,"Failed to persist write");n.reject(r)}}function Ey(t,e,n){const i=mt(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Pu.forEach((r,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=mt(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.wa)y.va(l)&&(h=!0)}),h&&Dx(u)}(i.eventManager,e),s.length&&i.hu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Vx(t,e){const n=mt(t),i=e.batch.batchId;try{const s=await ux(n.localStore,e);fT(n,i,null),dT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Oh(n,s)}catch(s){await Mp(s)}}async function Fx(t,e,n){const i=mt(t);try{const s=await function(o,l){const u=mt(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(kt(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(i.localStore,e);fT(i,e,n),dT(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Oh(i,s)}catch(s){await Mp(s)}}function dT(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function fT(t,e,n){const i=mt(t);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Ru[i.currentUser.toKey()]=s}}async function Oh(t,e,n){const i=mt(t),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach((l,u)=>{o.push(i.gu(u,e,n).then(h=>{var f;if((h||n)&&i.isPrimaryClient){const m=h?!h.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Qp.Es(u.targetId,h);r.push(m)}}))}),await Promise.all(o),i.hu.J_(s),await async function(u,h){const f=mt(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>K.forEach(h,y=>K.forEach(y.Is,w=>f.persistence.referenceDelegate.addReference(m,y.targetId,w)).next(()=>K.forEach(y.ds,w=>f.persistence.referenceDelegate.removeReference(m,y.targetId,w)))))}catch(m){if(!oc(m))throw m;me(ax,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const w=f.Fs.get(y),N=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(y,V)}}}(i.localStore,r))}async function Ux(t,e){const n=mt(t);if(!n.currentUser.isEqual(e)){me(xx,"User change. New user:",e.toKey());const i=await rT(n.localStore,e);n.currentUser=e,function(r,o){r.Vu.forEach(l=>{l.forEach(u=>{u.reject(new Ee(J.CANCELLED,o))})}),r.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Oh(n,i.Bs)}}function $x(t){const e=mt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fx.bind(null,e),e}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ph(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return cx(this.persistence,new ox,e.initialUser,this.serializer)}Du(e){return new sT(Kp.Vi,this.serializer)}bu(e){return new fx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class Bx extends th{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){kt(this.persistence.referenceDelegate instanceof eh,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new qD(i,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Un.withCacheSize(this.cacheSizeBytes):Un.DEFAULT;return new sT(i=>eh.Vi(i,n),this.serializer)}}class Af{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ey(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ux.bind(null,this.syncEngine),await Nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ox}()}createDatastore(e){const n=Ph(e.databaseInfo.databaseId),i=function(r){return new yx(r)}(e.databaseInfo);return function(r,o,l,u){return new bx(r,o,l,u)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,l){return new Ix(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ey(this.syncEngine,n,0),function(){return py.C()?new py:new px}())}createSyncEngine(e,n){return function(s,r,o,l,u,h,f){const m=new Mx(s,r,o,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const r=mt(s);me(lc,"RemoteStore shutting down."),r.Ia.add(5),await cc(r),r.Ea.shutdown(),r.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Af.provider={build:()=>new Af};/**
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
 */const fr="FirestoreClient";class jx{constructor(e,n,i,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=fn.UNAUTHENTICATED,this.clientId=Dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{me(fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(me(fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=hT(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress(),me(fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await rT(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>{ea("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{me("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{ea("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hx(t);me(fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>gy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gy(e.remoteStore,s)),t._onlineComponents=e}async function Hx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){me(fr,"Using user provided OfflineComponentProvider");try{await Sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ea("Error using user provided cache. Falling back to memory cache: "+n),await Sd(t,new th)}}else me(fr,"Using default OfflineComponentProvider"),await Sd(t,new Bx(void 0));return t._offlineComponents}async function Wx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(me(fr,"Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(me(fr,"Using default OnlineComponentProvider"),await wy(t,new Af))),t._onlineComponents}function qx(t){return Wx(t).then(e=>e.syncEngine)}/**
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
 */function pT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const by=new Map;/**
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
 */const mT="firestore.googleapis.com",Ty=!0;class Iy{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mT,this.ssl=Ty}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HD)throw new Ee(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pT((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ee(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ee(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ee(J.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ee(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ee(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new wO;switch(i.type){case"firstParty":return new AO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ee(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=by.get(n);i&&(me("ComponentProvider","Removing Datastore"),by.delete(n),i.terminate())}(this),Promise.resolve()}}function zx(t,e,n,i={}){var s;t=Cb(t,Dh);const r=ca(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;r&&(sv(`https://${u}`),rv("Firestore",!0)),o.host!==mT&&o.host!==u&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:r,emulatorOptions:i});if(!qr(h,l)&&(t._setSettings(h),i.mockUserToken)){let f,m;if(typeof i.mockUserToken=="string")f=i.mockUserToken,m=fn.MOCK_USER;else{f=wA(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new Ee(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new fn(y)}t._authCredentials=new bO(new Tb(f,m))}}/**
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
 */class Xp{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xp(this.firestore,e,this._query)}}class En{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}toJSON(){return{type:En._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(rc(n,En._jsonSchema))return new En(e,i||null,new Oe(Ct.fromString(n.referencePath)))}}En._jsonSchemaVersion="firestore/documentReference/1.0",En._jsonSchema={type:Lt("string",En._jsonSchemaVersion),referencePath:Lt("string")};class rr extends Xp{constructor(e,n,i){super(e,n,sD(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new Oe(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function Gx(t,e,...n){if(t=li(t),Ib("collection","path",e),t instanceof Dh){const i=Ct.fromString(e,...n);return z_(i),new rr(t,null,i)}{if(!(t instanceof En||t instanceof rr))throw new Ee(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ct.fromString(e,...n));return z_(i),new rr(t.firestore,null,i)}}function Kx(t,e,...n){if(t=li(t),arguments.length===1&&(e=Dp.newId()),Ib("doc","path",e),t instanceof Dh){const i=Ct.fromString(e,...n);return q_(i),new En(t,null,new Oe(i))}{if(!(t instanceof En||t instanceof rr))throw new Ee(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ct.fromString(e,...n));return q_(i),new En(t.firestore,t instanceof rr?t.converter:null,new Oe(i))}}/**
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
 */const Ay="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new oT(this,"async_queue_retry"),this.oc=()=>{const i=Cd();i&&me(Ay,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const n=Cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Hr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!oc(e))throw e;me(Ay,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,Jr("INTERNAL UNHANDLED ERROR: ",Sy(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Yp.createAndSchedule(this,e,n,i,r=>this.lc(r));return this.ec.push(s),s}ac(){this.tc&&Le(47125,{hc:Sy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Sy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gT extends Dh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Cy,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function _T(t,e){const n=typeof t=="object"?t:Of(),i=typeof t=="string"?t:Ku,s=Nf(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=EA("firestore");r&&zx(s,...r)}return s}function Qx(t){if(t._terminated)throw new Ee(J.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Yx(t),t._firestoreClient}function Yx(t){var e,n,i;const s=t._freezeSettings(),r=function(l,u,h,f){return new HO(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new jx(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(Xi.fromBase64String(e))}catch(n){throw new Ee(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(Xi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_i._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rc(e,_i._jsonSchema))return _i.fromBase64String(e.bytes)}}_i._jsonSchemaVersion="firestore/bytes/1.0",_i._jsonSchema={type:Lt("string",_i._jsonSchemaVersion),bytes:Lt("string")};/**
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
 */class Jp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ee(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zp{constructor(e){this._methodName=e}}/**
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
 */class Ts{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ee(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ee(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qe(this._lat,e._lat)||Qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ts._jsonSchemaVersion}}static fromJSON(e){if(rc(e,Ts._jsonSchema))return new Ts(e.latitude,e.longitude)}}Ts._jsonSchemaVersion="firestore/geoPoint/1.0",Ts._jsonSchema={type:Lt("string",Ts._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Is._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rc(e,Is._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Is(e.vectorValues);throw new Ee(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Is._jsonSchemaVersion="firestore/vectorValue/1.0",Is._jsonSchema={type:Lt("string",Is._jsonSchemaVersion),vectorValues:Lt("object")};/**
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
 */const Xx=/^__.*__$/;class Jx{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ro(e,this.data,this.fieldMask,n,this.fieldTransforms):new ac(e,this.data,n,this.fieldTransforms)}}function yT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Le(40011,{Ec:t})}}class em{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new em(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:i,mc:!1});return s.fc(e),s}gc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return nh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(yT(this.Ec)&&Xx.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Zx{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ph(e)}Dc(e,n,i,s=!1){return new em({Ec:e,methodName:n,bc:i,path:an.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eM(t){const e=t._freezeSettings(),n=Ph(t._databaseId);return new Zx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tM(t,e,n,i,s,r={}){const o=t.Dc(r.merge||r.mergeFields?2:0,e,n,s);bT("Data must be an object, but it was:",o,i);const l=ET(i,o);let u,h;if(r.merge)u=new Ei(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const m of r.mergeFields){const y=nM(e,m,n);if(!o.contains(y))throw new Ee(J.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);sM(f,y)||f.push(y)}u=new Ei(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Jx(new gi(l),u,h)}class tm extends Zp{_toFieldTransform(e){return new _D(e.path,new Bl)}isEqual(e){return e instanceof tm}}function vT(t,e){if(wT(t=li(t)))return bT("Unsupported field value:",e,t),ET(t,e);if(t instanceof Zp)return function(i,s){if(!yT(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let u=vT(l,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=li(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return pD(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Tt.fromDate(i);return{timestampValue:wf(s.serializer,r)}}if(i instanceof Tt){const r=new Tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wf(s.serializer,r)}}if(i instanceof Ts)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof _i)return{bytesValue:RD(s.serializer,i._byteString)};if(i instanceof En){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:tT(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Is)return function(o,l){return{mapValue:{fields:{[Db]:{stringValue:xb},[gf]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return qp(l.serializer,h)})}}}}}}(i,s);throw s.wc(`Unsupported field value: ${xp(i)}`)}(t,e)}function ET(t,e){const n={};return Rb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):va(t,(i,s)=>{const r=vT(s,e.Vc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function wT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof Ts||t instanceof _i||t instanceof En||t instanceof Zp||t instanceof Is)}function bT(t,e,n){if(!wT(n)||!Ab(n)){const i=xp(n);throw i==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+i)}}function nM(t,e,n){if((e=li(e))instanceof Jp)return e._internalPath;if(typeof e=="string")return TT(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const iM=new RegExp("[~\\*/\\[\\]]");function TT(t,e,n){if(e.search(iM)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jp(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${i}`),o&&(u+=` in document ${s}`),u+=")"),new Ee(J.INVALID_ARGUMENT,l+t+u)}function sM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class IT{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new En(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(AT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rM extends IT{data(){return super.data()}}function AT(t,e){return typeof e=="string"?TT(t,e):e instanceof Jp?e._internalPath:e._delegate._internalPath}/**
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
 */function oM(t,e,n){let i;return i=t?t.toFirestore(e):e,i}class nu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Go extends IT{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(AT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ee(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Go._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Go._jsonSchemaVersion="firestore/documentSnapshot/1.0",Go._jsonSchema={type:Lt("string",Go._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class yu extends Go{data(e={}){return super.data(e)}}class Il{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new nu(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new yu(this._firestore,this._userDataWriter,i.key,i,new nu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ee(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new yu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nu(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const u=new yu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nu(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:aM(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ee(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Il._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(r=>{r._document!==null&&(n.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Le(61501,{type:t})}}Il._jsonSchemaVersion="firestore/querySnapshot/1.0",Il._jsonSchema={type:Lt("string",Il._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};function lM(t,e){const n=Cb(t.firestore,gT),i=Kx(t),s=oM(t.converter,e);return cM(n,[tM(eM(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,bs.exists(!1))]).then(()=>i)}function cM(t,e){return function(i,s){const r=new Hr;return i.asyncQueue.enqueueAndForget(async()=>Lx(await qx(i),s,r)),r.promise}(Qx(t),e)}function uM(){return new tm("serverTimestamp")}(function(e,n=!0){(function(s){ya=s})(pr),Ki(new Ii("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new gT(new TO(i.getProvider("auth-internal")),new CO(o,i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Ee(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qu(h.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Yn($_,B_,e),Yn($_,B_,"esm2017")})();/**
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
 */const CT="firebasestorage.googleapis.com",hM="storageBucket",dM=2*60*1e3,fM=10*60*1e3;/**
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
 */class ts extends es{constructor(e,n,i=0){super(Rd(e),`Firebase Storage: ${n} (${Rd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ts.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Zi;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Zi||(Zi={}));function Rd(t){return"storage/"+t}function pM(){const t="An unknown error occurred, please check the error payload for server response.";return new ts(Zi.UNKNOWN,t)}function mM(){return new ts(Zi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gM(){return new ts(Zi.CANCELED,"User canceled the upload/download.")}function _M(t){return new ts(Zi.INVALID_URL,"Invalid URL '"+t+"'.")}function yM(t){return new ts(Zi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ry(t){return new ts(Zi.INVALID_ARGUMENT,t)}function ST(){return new ts(Zi.APP_DELETED,"The Firebase app was deleted.")}function vM(t){return new ts(Zi.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class wi{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=wi.makeFromUrl(e,n)}catch{return new wi(e,"")}if(i.path==="")return i;throw yM(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(Q){Q.path_=decodeURIComponent(Q.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${f}/b/${s}/o${y}`,"i"),N={bucket:1,path:3},V=n===CT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",Y=new RegExp(`^https?://${V}/${s}/${F}`,"i"),X=[{regex:l,indices:u,postModify:r},{regex:w,indices:N,postModify:h},{regex:Y,indices:{bucket:1,path:2},postModify:h}];for(let Q=0;Q<X.length;Q++){const ye=X[Q],be=ye.regex.exec(e);if(be){const R=be[ye.indices.bucket];let b=be[ye.indices.path];b||(b=""),i=new wi(R,b),ye.postModify(i);break}}if(i==null)throw _M(e);return i}}class EM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wM(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...F){h||(h=!0,e.apply(null,F))}function m(F){s=setTimeout(()=>{s=null,t(w,u())},F)}function y(){r&&clearTimeout(r)}function w(F,...Y){if(h){y();return}if(F){y(),f.call(null,F,...Y);return}if(u()||o){y(),f.call(null,F,...Y);return}i<64&&(i*=2);let X;l===1?(l=2,X=0):X=(i+Math.random())*1e3,m(X)}let N=!1;function V(F){N||(N=!0,y(),!h&&(s!==null?(F||(l=2),clearTimeout(s),m(0)):F||(l=1)))}return m(0),r=setTimeout(()=>{o=!0,V(!0)},n),V}function bM(t){t(!1)}/**
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
 */function TM(t){return t!==void 0}function Py(t,e,n,i){if(i<e)throw Ry(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Ry(`Invalid value for '${t}'. Expected ${n} or less.`)}function IM(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var ih;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ih||(ih={}));/**
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
 */function AM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class CM{constructor(e,n,i,s,r,o,l,u,h,f,m,y=!0,w=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,V)=>{this.resolve_=N,this.reject_=V,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new iu(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===ih.NO_ERROR,u=r.getStatus();if(!l||AM(u,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===ih.ABORT;i(!1,new iu(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;i(!0,new iu(h,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());TM(u)?r(u):r()}catch(u){o(u)}else if(l!==null){const u=pM();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?ST():gM();o(u)}else{const u=mM();o(u)}};this.canceled_?n(!1,new iu(!1,null,!0)):this.backoffId_=wM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class iu{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function SM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function PM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NM(t,e,n,i,s,r,o=!0,l=!1){const u=IM(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return PM(f,e),SM(f,n),RM(f,r),kM(f,i),new CM(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function OM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class sh{constructor(e,n){this._service=e,n instanceof wi?this._location=n:this._location=wi.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sh(e,n)}get root(){const e=new wi(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DM(this._location.path)}get storage(){return this._service}get parent(){const e=OM(this._location.path);if(e===null)return null;const n=new wi(this._location.bucket,e);return new sh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vM(e)}}function ky(t,e){const n=e?.[hM];return n==null?null:wi.makeFromBucketSpec(n,t)}class xM{constructor(e,n,i,s,r,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=CT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dM,this._maxUploadRetryTime=fM,this._requests=new Set,s!=null?this._bucket=wi.makeFromBucketSpec(s,this._host):this._bucket=ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wi.makeFromBucketSpec(this._url,e):this._bucket=ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ri(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sh(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new EM(ST());{const o=NM(e,this._appId,i,s,n,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Ny="@firebase/storage",Oy="0.13.14";/**
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
 */const MM="storage";function LM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xM(n,i,s,e,pr)}function VM(){Ki(new Ii(MM,LM,"PUBLIC").setMultipleInstances(!0)),Yn(Ny,Oy,""),Yn(Ny,Oy,"esm2017")}VM();function FM(t){return _T(rw(t))}function UM(t){return BM({initialUser:t,dependencies:{popupRedirectResolver:Kv,persistence:[qv,Uv,Bf]}})}const $M=Symbol("VueFireAuth");function BM({dependencies:t,initialUser:e}){return(n,i)=>{const[s,r]=jM(n,i,e,t);Mk(s,r)}}function jM(t,e,n,i,s=Nv(t,i)){const r=Ok(t,e).run(()=>Kt(n));return Dk.set(t,r),e.provide($M,s),[r,s]}function HM(t,{firebaseApp:e,modules:n=[]}){t.provide(sw,e);for(const i of n)i(e,t)}const WM={apiKey:"AIzaSyBFvqoBvhNsieo2CoCPlICpfenIJ8C18TI",authDomain:"ajdocs-28aca.firebaseapp.com",projectId:"ajdocs-28aca",storageBucket:"ajdocs-28aca.firebasestorage.app",messagingSenderId:"115814771752",appId:"1:115814771752:web:64d0ba291947217c79191d"},nm=hv(WM);_T(nm);BS(nm);/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const qM=Symbol();var Dy;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dy||(Dy={}));function zM(){const t=iE(!0),e=t.run(()=>Kt({}));let n=[],i=[];const s=EE({install(r){s._a=r,r.provide(qM,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Oo=typeof document<"u";function RT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function GM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&RT(t.default)}const Je=Object.assign;function Pd(t,e){const n={};for(const i in e){const s=e[i];n[i]=Ci(s)?s.map(t):t(s)}return n}const Al=()=>{},Ci=Array.isArray,PT=/#/g,KM=/&/g,QM=/\//g,YM=/=/g,XM=/\?/g,kT=/\+/g,JM=/%5B/g,ZM=/%5D/g,NT=/%5E/g,eL=/%60/g,OT=/%7B/g,tL=/%7C/g,DT=/%7D/g,nL=/%20/g;function im(t){return encodeURI(""+t).replace(tL,"|").replace(JM,"[").replace(ZM,"]")}function iL(t){return im(t).replace(OT,"{").replace(DT,"}").replace(NT,"^")}function Cf(t){return im(t).replace(kT,"%2B").replace(nL,"+").replace(PT,"%23").replace(KM,"%26").replace(eL,"`").replace(OT,"{").replace(DT,"}").replace(NT,"^")}function sL(t){return Cf(t).replace(YM,"%3D")}function rL(t){return im(t).replace(PT,"%23").replace(XM,"%3F")}function oL(t){return t==null?"":rL(t).replace(QM,"%2F")}function Wl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aL=/\/$/,lL=t=>t.replace(aL,"");function kd(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(i=e.slice(0,u),r=e.slice(u+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=dL(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Wl(o)}}function cL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uL(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&oa(e.matched[i],n.matched[s])&&xT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oa(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hL(t[n],e[n]))return!1;return!0}function hL(t,e){return Ci(t)?My(t,e):Ci(e)?My(e,t):t===e}function My(t,e){return Ci(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function dL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const zs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ql;(function(t){t.pop="pop",t.push="push"})(ql||(ql={}));var Cl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cl||(Cl={}));function fL(t){if(!t)if(Oo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lL(t)}const pL=/^[^#]+#/;function mL(t,e){return t.replace(pL,"#")+e}function gL(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const xh=()=>({left:window.scrollX,top:window.scrollY});function _L(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gL(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ly(t,e){return(history.state?history.state.position-e:-1)+t}const Sf=new Map;function yL(t,e){Sf.set(t,e)}function vL(t){const e=Sf.get(t);return Sf.delete(t),e}let EL=()=>location.protocol+"//"+location.host;function MT(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,u=s.slice(l);return u[0]!=="/"&&(u="/"+u),xy(u,"")}return xy(n,t)+i+s}function wL(t,e,n,i){let s=[],r=[],o=null;const l=({state:y})=>{const w=MT(t,location),N=n.value,V=e.value;let F=0;if(y){if(n.value=w,e.value=y,o&&o===N){o=null;return}F=V?y.position-V.position:0}else i(w);s.forEach(Y=>{Y(n.value,N,{delta:F,type:ql.pop,direction:F?F>0?Cl.forward:Cl.back:Cl.unknown})})};function u(){o=n.value}function h(y){s.push(y);const w=()=>{const N=s.indexOf(y);N>-1&&s.splice(N,1)};return r.push(w),w}function f(){const{history:y}=window;y.state&&y.replaceState(Je({},y.state,{scroll:xh()}),"")}function m(){for(const y of r)y();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:h,destroy:m}}function Vy(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?xh():null}}function bL(t){const{history:e,location:n}=window,i={value:MT(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(u,h,f){const m=t.indexOf("#"),y=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+u:EL()+t+u;try{e[f?"replaceState":"pushState"](h,"",y),s.value=h}catch(w){console.error(w),n[f?"replace":"assign"](y)}}function o(u,h){const f=Je({},e.state,Vy(s.value.back,u,s.value.forward,!0),h,{position:s.value.position});r(u,f,!0),i.value=u}function l(u,h){const f=Je({},s.value,e.state,{forward:u,scroll:xh()});r(f.current,f,!0);const m=Je({},Vy(i.value,u,null),{position:f.position+1},h);r(u,m,!1),i.value=u}return{location:i,state:s,push:l,replace:o}}function TL(t){t=fL(t);const e=bL(t),n=wL(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Je({location:"",base:t,go:i,createHref:mL.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function IL(t){return typeof t=="string"||t&&typeof t=="object"}function LT(t){return typeof t=="string"||typeof t=="symbol"}const VT=Symbol("");var Fy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fy||(Fy={}));function aa(t,e){return Je(new Error,{type:t,[VT]:!0},e)}function fs(t,e){return t instanceof Error&&VT in t&&(e==null||!!(t.type&e))}const Uy="[^/]+?",AL={sensitive:!1,strict:!1,start:!0,end:!0},CL=/[.+*?^${}()[\]/\\]/g;function SL(t,e){const n=Je({},AL,e),i=[];let s=n.start?"^":"";const r=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let m=0;m<h.length;m++){const y=h[m];let w=40+(n.sensitive?.25:0);if(y.type===0)m||(s+="/"),s+=y.value.replace(CL,"\\$&"),w+=40;else if(y.type===1){const{value:N,repeatable:V,optional:F,regexp:Y}=y;r.push({name:N,repeatable:V,optional:F});const z=Y||Uy;if(z!==Uy){w+=10;try{new RegExp(`(${z})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${N}" (${z}): `+Q.message)}}let X=V?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;m||(X=F&&h.length<2?`(?:/${X})`:"/"+X),F&&(X+="?"),s+=X,w+=20,F&&(w+=-8),V&&(w+=-20),z===".*"&&(w+=-50)}f.push(w)}i.push(f)}if(n.strict&&n.end){const h=i.length-1;i[h][i[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),m={};if(!f)return null;for(let y=1;y<f.length;y++){const w=f[y]||"",N=r[y-1];m[N.name]=w&&N.repeatable?w.split("/"):w}return m}function u(h){let f="",m=!1;for(const y of t){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const w of y)if(w.type===0)f+=w.value;else if(w.type===1){const{value:N,repeatable:V,optional:F}=w,Y=N in h?h[N]:"";if(Ci(Y)&&!V)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const z=Ci(Y)?Y.join("/"):Y;if(!z)if(F)y.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${N}"`);f+=z}}return f||"/"}return{re:o,score:i,keys:r,parse:l,stringify:u}}function RL(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function FT(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=RL(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if($y(i))return 1;if($y(s))return-1}return s.length-i.length}function $y(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PL={type:0,value:""},kL=/[a-zA-Z0-9_]/;function NL(t){if(!t)return[[]];if(t==="/")return[[PL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,u,h="",f="";function m(){h&&(n===0?r.push({type:0,value:h}):n===1||n===2||n===3?(r.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:h,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),h="")}function y(){h+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:u==="/"?(h&&m(),o()):u===":"?(m(),n=1):y();break;case 4:y(),n=i;break;case 1:u==="("?n=2:kL.test(u)?y():(m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:n=3:f+=u;break;case 3:m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),m(),o(),s}function OL(t,e,n){const i=SL(NL(t.path),n),s=Je(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DL(t,e){const n=[],i=new Map;e=Wy({strict:!1,end:!0,sensitive:!1},e);function s(m){return i.get(m)}function r(m,y,w){const N=!w,V=jy(m);V.aliasOf=w&&w.record;const F=Wy(e,m),Y=[V];if("alias"in m){const Q=typeof m.alias=="string"?[m.alias]:m.alias;for(const ye of Q)Y.push(jy(Je({},V,{components:w?w.record.components:V.components,path:ye,aliasOf:w?w.record:V})))}let z,X;for(const Q of Y){const{path:ye}=Q;if(y&&ye[0]!=="/"){const be=y.record.path,R=be[be.length-1]==="/"?"":"/";Q.path=y.record.path+(ye&&R+ye)}if(z=OL(Q,y,F),w?w.alias.push(z):(X=X||z,X!==z&&X.alias.push(z),N&&m.name&&!Hy(z)&&o(m.name)),UT(z)&&u(z),V.children){const be=V.children;for(let R=0;R<be.length;R++)r(be[R],z,w&&w.children[R])}w=w||z}return X?()=>{o(X)}:Al}function o(m){if(LT(m)){const y=i.get(m);y&&(i.delete(m),n.splice(n.indexOf(y),1),y.children.forEach(o),y.alias.forEach(o))}else{const y=n.indexOf(m);y>-1&&(n.splice(y,1),m.record.name&&i.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function l(){return n}function u(m){const y=LL(m,n);n.splice(y,0,m),m.record.name&&!Hy(m)&&i.set(m.record.name,m)}function h(m,y){let w,N={},V,F;if("name"in m&&m.name){if(w=i.get(m.name),!w)throw aa(1,{location:m});F=w.record.name,N=Je(By(y.params,w.keys.filter(X=>!X.optional).concat(w.parent?w.parent.keys.filter(X=>X.optional):[]).map(X=>X.name)),m.params&&By(m.params,w.keys.map(X=>X.name))),V=w.stringify(N)}else if(m.path!=null)V=m.path,w=n.find(X=>X.re.test(V)),w&&(N=w.parse(V),F=w.record.name);else{if(w=y.name?i.get(y.name):n.find(X=>X.re.test(y.path)),!w)throw aa(1,{location:m,currentLocation:y});F=w.record.name,N=Je({},y.params,m.params),V=w.stringify(N)}const Y=[];let z=w;for(;z;)Y.unshift(z.record),z=z.parent;return{name:F,path:V,params:N,matched:Y,meta:ML(Y)}}t.forEach(m=>r(m));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function By(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function jy(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Hy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ML(t){return t.reduce((e,n)=>Je(e,n.meta),{})}function Wy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function LL(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;FT(t,e[r])<0?i=r:n=r+1}const s=VL(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function VL(t){let e=t;for(;e=e.parent;)if(UT(e)&&FT(t,e)===0)return e}function UT({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function FL(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(kT," "),o=r.indexOf("="),l=Wl(o<0?r:r.slice(0,o)),u=o<0?null:Wl(r.slice(o+1));if(l in e){let h=e[l];Ci(h)||(h=e[l]=[h]),h.push(u)}else e[l]=u}return e}function qy(t){let e="";for(let n in t){const i=t[n];if(n=sL(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ci(i)?i.map(r=>r&&Cf(r)):[i&&Cf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function UL(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Ci(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const $L=Symbol(""),zy=Symbol(""),sm=Symbol(""),$T=Symbol(""),Rf=Symbol("");function tl(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,u)=>{const h=y=>{y===!1?u(aa(4,{from:n,to:e})):y instanceof Error?u(y):IL(y)?u(aa(2,{from:e,to:y})):(o&&i.enterCallbacks[s]===o&&typeof y=="function"&&o.push(y),l())},f=r(()=>t.call(i&&i.instances[s],e,n,h));let m=Promise.resolve(f);t.length<3&&(m=m.then(h)),m.catch(y=>u(y))})}function Nd(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const l in o.components){let u=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(RT(u)){const f=(u.__vccOpts||u)[e];f&&r.push(Qs(f,n,i,o,l,s))}else{let h=u();r.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const m=GM(f)?f.default:f;o.mods[l]=f,o.components[l]=m;const w=(m.__vccOpts||m)[e];return w&&Qs(w,n,i,o,l,s)()}))}}return r}function Gy(t){const e=Gi(sm),n=Gi($T),i=$n(()=>{const u=zi(t.to);return e.resolve(u)}),s=$n(()=>{const{matched:u}=i.value,{length:h}=u,f=u[h-1],m=n.matched;if(!f||!m.length)return-1;const y=m.findIndex(oa.bind(null,f));if(y>-1)return y;const w=Ky(u[h-2]);return h>1&&Ky(f)===w&&m[m.length-1].path!==w?m.findIndex(oa.bind(null,u[h-2])):y}),r=$n(()=>s.value>-1&&WL(n.params,i.value.params)),o=$n(()=>s.value>-1&&s.value===n.matched.length-1&&xT(n.params,i.value.params));function l(u={}){if(HL(u)){const h=e[zi(t.replace)?"replace":"push"](zi(t.to)).catch(Al);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:i,href:$n(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}function BL(t){return t.length===1?t[0]:t}const jL=pa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gy,setup(t,{slots:e}){const n=mh(Gy(t)),{options:i}=Gi(sm),s=$n(()=>({[Qy(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qy(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&BL(e.default(n));return t.custom?r:ZE("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),rm=jL;function HL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WL(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Ci(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ky(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qy=(t,e,n)=>t??e??n,qL=pa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Gi(Rf),s=$n(()=>t.route||i.value),r=Gi(zy,0),o=$n(()=>{let h=zi(r);const{matched:f}=s.value;let m;for(;(m=f[h])&&!m.components;)h++;return h}),l=$n(()=>s.value.matched[o.value]);uu(zy,$n(()=>o.value+1)),uu($L,l),uu(Rf,s);const u=Kt();return pl(()=>[u.value,l.value,t.name],([h,f,m],[y,w,N])=>{f&&(f.instances[m]=h,w&&w!==f&&h&&h===y&&(f.leaveGuards.size||(f.leaveGuards=w.leaveGuards),f.updateGuards.size||(f.updateGuards=w.updateGuards))),h&&f&&(!w||!oa(f,w)||!y)&&(f.enterCallbacks[m]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,m=l.value,y=m&&m.components[f];if(!y)return Yy(n.default,{Component:y,route:h});const w=m.props[f],N=w?w===!0?h.params:typeof w=="function"?w(h):w:null,F=ZE(y,Je({},N,e,{onVnodeUnmounted:Y=>{Y.component.isUnmounted&&(m.instances[f]=null)},ref:u}));return Yy(n.default,{Component:F,route:h})||F}}});function Yy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BT=qL;function zL(t){const e=DL(t.routes,t),n=t.parseQuery||FL,i=t.stringifyQuery||qy,s=t.history,r=tl(),o=tl(),l=tl(),u=ER(zs);let h=zs;Oo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Pd.bind(null,H=>""+H),m=Pd.bind(null,oL),y=Pd.bind(null,Wl);function w(H,B){let re,de;return LT(H)?(re=e.getRecordMatcher(H),de=B):de=H,e.addRoute(de,re)}function N(H){const B=e.getRecordMatcher(H);B&&e.removeRoute(B)}function V(){return e.getRoutes().map(H=>H.record)}function F(H){return!!e.getRecordMatcher(H)}function Y(H,B){if(B=Je({},B||u.value),typeof H=="string"){const x=kd(n,H,B.path),j=e.resolve({path:x.path},B),W=s.createHref(x.fullPath);return Je(x,j,{params:y(j.params),hash:Wl(x.hash),redirectedFrom:void 0,href:W})}let re;if(H.path!=null)re=Je({},H,{path:kd(n,H.path,B.path).path});else{const x=Je({},H.params);for(const j in x)x[j]==null&&delete x[j];re=Je({},H,{params:m(x)}),B.params=m(B.params)}const de=e.resolve(re,B),He=H.hash||"";de.params=f(y(de.params));const T=cL(i,Je({},H,{hash:iL(He),path:de.path})),I=s.createHref(T);return Je({fullPath:T,hash:He,query:i===qy?UL(H.query):H.query||{}},de,{redirectedFrom:void 0,href:I})}function z(H){return typeof H=="string"?kd(n,H,u.value.path):Je({},H)}function X(H,B){if(h!==H)return aa(8,{from:B,to:H})}function Q(H){return R(H)}function ye(H){return Q(Je(z(H),{replace:!0}))}function be(H){const B=H.matched[H.matched.length-1];if(B&&B.redirect){const{redirect:re}=B;let de=typeof re=="function"?re(H):re;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=z(de):{path:de},de.params={}),Je({query:H.query,hash:H.hash,params:de.path!=null?{}:H.params},de)}}function R(H,B){const re=h=Y(H),de=u.value,He=H.state,T=H.force,I=H.replace===!0,x=be(re);if(x)return R(Je(z(x),{state:typeof x=="object"?Je({},He,x.state):He,force:T,replace:I}),B||re);const j=re;j.redirectedFrom=B;let W;return!T&&uL(i,de,re)&&(W=aa(16,{to:j,from:de}),ue(de,de,!0,!1)),(W?Promise.resolve(W):P(j,de)).catch(q=>fs(q)?fs(q,2)?q:S(q):xe(q,j,de)).then(q=>{if(q){if(fs(q,2))return R(Je({replace:I},z(q.to),{state:typeof q.to=="object"?Je({},He,q.to.state):He,force:T}),B||j)}else q=M(j,de,!0,I,He);return O(j,de,q),q})}function b(H,B){const re=X(H,B);return re?Promise.reject(re):Promise.resolve()}function C(H){const B=St.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(H):H()}function P(H,B){let re;const[de,He,T]=GL(H,B);re=Nd(de.reverse(),"beforeRouteLeave",H,B);for(const x of de)x.leaveGuards.forEach(j=>{re.push(Qs(j,H,B))});const I=b.bind(null,H,B);return re.push(I),rt(re).then(()=>{re=[];for(const x of r.list())re.push(Qs(x,H,B));return re.push(I),rt(re)}).then(()=>{re=Nd(He,"beforeRouteUpdate",H,B);for(const x of He)x.updateGuards.forEach(j=>{re.push(Qs(j,H,B))});return re.push(I),rt(re)}).then(()=>{re=[];for(const x of T)if(x.beforeEnter)if(Ci(x.beforeEnter))for(const j of x.beforeEnter)re.push(Qs(j,H,B));else re.push(Qs(x.beforeEnter,H,B));return re.push(I),rt(re)}).then(()=>(H.matched.forEach(x=>x.enterCallbacks={}),re=Nd(T,"beforeRouteEnter",H,B,C),re.push(I),rt(re))).then(()=>{re=[];for(const x of o.list())re.push(Qs(x,H,B));return re.push(I),rt(re)}).catch(x=>fs(x,8)?x:Promise.reject(x))}function O(H,B,re){l.list().forEach(de=>C(()=>de(H,B,re)))}function M(H,B,re,de,He){const T=X(H,B);if(T)return T;const I=B===zs,x=Oo?history.state:{};re&&(de||I?s.replace(H.fullPath,Je({scroll:I&&x&&x.scroll},He)):s.push(H.fullPath,He)),u.value=H,ue(H,B,re,I),S()}let A;function Nt(){A||(A=s.listen((H,B,re)=>{if(!jt.listening)return;const de=Y(H),He=be(de);if(He){R(Je(He,{replace:!0,force:!0}),de).catch(Al);return}h=de;const T=u.value;Oo&&yL(Ly(T.fullPath,re.delta),xh()),P(de,T).catch(I=>fs(I,12)?I:fs(I,2)?(R(Je(z(I.to),{force:!0}),de).then(x=>{fs(x,20)&&!re.delta&&re.type===ql.pop&&s.go(-1,!1)}).catch(Al),Promise.reject()):(re.delta&&s.go(-re.delta,!1),xe(I,de,T))).then(I=>{I=I||M(de,T,!1),I&&(re.delta&&!fs(I,8)?s.go(-re.delta,!1):re.type===ql.pop&&fs(I,20)&&s.go(-1,!1)),O(de,T,I)}).catch(Al)}))}let Zt=tl(),gt=tl(),De;function xe(H,B,re){S(H);const de=gt.list();return de.length?de.forEach(He=>He(H,B,re)):console.error(H),Promise.reject(H)}function Pe(){return De&&u.value!==zs?Promise.resolve():new Promise((H,B)=>{Zt.add([H,B])})}function S(H){return De||(De=!H,Nt(),Zt.list().forEach(([B,re])=>H?re(H):B()),Zt.reset()),H}function ue(H,B,re,de){const{scrollBehavior:He}=t;if(!Oo||!He)return Promise.resolve();const T=!re&&vL(Ly(H.fullPath,0))||(de||!re)&&history.state&&history.state.scroll||null;return ip().then(()=>He(H,B,T)).then(I=>I&&_L(I)).catch(I=>xe(I,H,B))}const Ye=H=>s.go(H);let Ve;const St=new Set,jt={currentRoute:u,listening:!0,addRoute:w,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:V,resolve:Y,options:t,push:Q,replace:ye,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:gt.add,isReady:Pe,install(H){const B=this;H.component("RouterLink",rm),H.component("RouterView",BT),H.config.globalProperties.$router=B,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>zi(u)}),Oo&&!Ve&&u.value===zs&&(Ve=!0,Q(s.location).catch(He=>{}));const re={};for(const He in zs)Object.defineProperty(re,He,{get:()=>u.value[He],enumerable:!0});H.provide(sm,B),H.provide($T,yE(re)),H.provide(Rf,u);const de=H.unmount;St.add(H),H.unmount=function(){St.delete(H),St.size<1&&(h=zs,A&&A(),A=null,u.value=zs,Ve=!1,De=!1),de()}}};function rt(H){return H.reduce((B,re)=>B.then(()=>C(re)),Promise.resolve())}return jt}function GL(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(h=>oa(h,l))?i.push(l):n.push(l));const u=t.matched[o];u&&(e.matched.find(h=>oa(h,u))||s.push(u))}return[n,i,s]}const KL="/images/logo.png",QL={class:"bg-white shadow-sm p-2 position-sticky w-100",style:{top:"0"}},YL={class:"container mx-auto d-flex justify-content-center align-items-center"},XL=pa({__name:"NavBar",setup(t){return(e,n)=>(wt(),At("div",QL,[ee("div",YL,[ln(zi(rm),{to:"/",class:"text-decoration-none text-dark fs-4"},{default:rp(()=>n[0]||(n[0]=[ee("img",{src:KL,loading:"lazy",width:"70",height:"70",alt:"Uganda Golf Logo",class:"me-2"},null,-1)])),_:1,__:[0]})])]))}}),JL=pa({__name:"App",setup(t){return(e,n)=>(wt(),At(Dn,null,[ln(zi(XL)),ln(zi(BT))],64))}}),ZL="/images/tournmentphoto.png",eV="/images/golfopen.jpg",tV={class:"bg-light grid w-100 px-4 py-5"},nV={class:"bg-white rounded-4 shadow p-4 w-100",style:{"max-width":"600px"}},iV={class:"w-100 mb-4"},sV={class:"progress",style:{height:"10px"}},rV={key:0},oV={key:1},aV={class:"row"},lV={class:"col-md-6"},cV={class:"col-md-6"},uV={class:"col-md-6"},hV={class:"col-md-6"},dV=["value"],fV={class:"col-md-12"},pV={key:0,class:"alert alert-danger mt-3",role:"alert"},mV={key:2},gV={class:"mb-3"},_V=["value"],yV={key:0,class:"mb-3"},vV={class:"mb-2"},EV=["value"],wV={key:1,class:"mb-2"},bV=["value"],TV={key:2,class:"alert alert-danger mt-3",role:"alert"},IV={key:3},AV={class:"mb-2"},CV={class:"alert alert-success mt-3"},SV={key:0},RV={key:1},PV={key:1},kV={class:"mb-2"},NV={class:"form-check"},OV={key:0,class:"alert alert-danger mt-3",role:"alert"},DV={class:"d-flex gap-2 mt-4"},xV=["disabled"],MV={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},LV=pa({__name:"HomeView",setup(t){const e=FM(),n=Kt(!1),i=Kt(""),s=Kt(1),r=[{id:1,title:"Welcome"},{id:2,title:"Personal Details"},{id:3,title:"Golf Details"},{id:4,title:"Registration Payment"}],o=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","DR Congo (Congo-Kinshasa)","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],l=["Entebbe Club","Garuga Golf Club, Kihihi","Jinja Club","Kabale Sports Club","Kilembe Mines Golf Club","Kinyara Golf Club","Lake Victoria Serena Golf Resort & Spa","Lira Sports & Golf Club","Lugazi Hills Golf & Country Club","Mary Louise Simpkins Memorial Golf Club, Namulonge","Masindi Golf Club","Mbale Sports Club","Mbarara Sports Club","Palm Valley Golf & Country Club","Soroti Golf Club","Toro Club","Tororo Club","Uganda Golf Club","West Nile Club","Other"],u=[{name:"Ladies Open",subsidiaries:[{name:"LADIES SILVER EVENT",price:"300,000 UGX"},{name:"LADIES BRONZE EVENT",price:"200,000 UGX"},{name:"SUBSIDIARY (MEN) EVENT",price:"100,000 UGX"}]},{name:"Seniors Open",subsidiaries:[{name:"SENIORS OPEN",price:"200,000 UGX"}]},{name:"Amateur Open",subsidiaries:[{name:"AMATEUR GROSS EVENT",price:"400,000 UGX"},{name:"SUBSIDIARY GROUP C",price:"100,000 UGX"},{name:"SUBSIDIARY GROUP B",price:"100,000 UGX"},{name:"SUBSIDIARY TEST",price:"1,000 UGX"}]},{name:"Professional Open",subsidiaries:[{name:"PRO-AM",price:"100,000 UGX"},{name:"PROFESSIONAL EVENT USD",price:"USD 130"},{name:"PROFESSIONAL EVENT UGX",price:"UGX 450,000"},{name:"SUBSIDIARY EVENT",price:"100,000 UGX"}]}],h=Kt(""),f=Kt(""),m=Kt(""),y=Kt(""),w=Kt("Uganda"),N=Kt(""),V=Kt(""),F=Kt(u[1].name),Y=$n(()=>V.value==="Other"),z=Kt(!0),X=Kt(!0),Q=Kt(!1),ye=Kt(""),be=$n(()=>u.find(Pe=>Pe.name===F.value));pl(F,()=>{ye.value=""});const R=()=>{s.value<r.length&&s.value++},b=()=>{s.value>1&&s.value--},C=$n(()=>(s.value-1)/(r.length-1)*100);function P(Pe){if(Pe===2&&(!h.value||!m.value||!y.value||!w.value||!N.value))return i.value="Please fill in all fields marked with * in Personal Details .i.e First Name, Last Name, Email, Country, and Phone.",n.value=!0,!1;if(Pe===3){if(!V.value||!F.value)return i.value="Please select your club and event (fields marked with *).",n.value=!0,!1;const S=u.find(ue=>ue.name===F.value);if(S&&S.subsidiaries.length>0&&!ye.value)return i.value="Please select a subsidiary for this event.",n.value=!0,!1}return Pe===4&&!X.value?(i.value="Please confirm your information (checkbox marked with *).",n.value=!0,!1):(n.value=!1,!0)}function O(){s.value=1,h.value="",f.value="",m.value="",y.value="",w.value="Uganda",N.value="",V.value="",F.value="",X.value=!1}function M(){P(s.value)&&R()}function A(){b()}function Nt(){const Pe=u.find(Ve=>Ve.name===F.value);let S=0,ue="",Ye="UGX";if(Pe&&Pe.subsidiaries.length&&ye.value){const Ve=Pe.subsidiaries.find(St=>St.name===ye.value);Ve&&Ve.price&&(Ve.price.includes("USD")?(Ye="USD",S=parseInt(Ve.price.replace(/[^0-9]/g,""))):(Ye="UGX",S=parseInt(Ve.price.replace(/[^0-9]/g,""))),ue=Ve.price)}else Pe&&Pe.subsidiaries.length===0&&(S=0);return{amount:S,subsidiaryPrice:ue,currency:Ye}}function Zt(Pe,S){const{amount:ue,subsidiaryPrice:Ye,currency:Ve}=Nt(),St=Pe||ue,jt=S||Ve,rt={firstName:h.value,otherName:f.value,lastName:m.value,email:y.value,country:w.value,phone:N.value,club:V.value,event:F.value,subsidiary:ye.value,subsidiaryPrice:Ye,amount:St,currency:jt,paymentConfirmation:z.value,registrationStatus:!0,paymentMethod:"flutterwave",timestamp:uM()};return lM(Gx(e,"registrations"),rt)}function gt(Pe,S){Q.value=!0,Zt(Pe,S).then(()=>{alert("Registration and payment submitted successfully!"),Q.value=!1,O()}).catch(ue=>{console.error("Error adding document: ",ue),alert("Registration failed. Please try again."),Q.value=!1})}function De(){const{amount:Pe,currency:S}=Nt();if(Pe<=0){alert("Invalid event or subsidiary selected. Please select a valid event and subsidiary.");return}xe({public_key:"FLWPUBK-d44ee7d9f04ceb2d7e3669f33a0228b4-X",tx_ref:`tx-${Date.now()}`,amount:Pe,currency:S,payment_options:S==="USD"?"card":"card, ussd, banktransfer, mobilemoneyuganda",customer:{name:`${h.value} ${f.value||""} ${m.value}`,email:y.value,phone_number:N.value},callback:ue=>{ue.status==="successful"?gt(Pe,S):alert("Payment failed. Please try again.")},onclose:()=>{console.log("Payment closed")}})}function xe(Pe){typeof window<"u"&&window.FlutterwaveCheckout?window.FlutterwaveCheckout({...Pe,callback:S=>{Pe.callback(S)},onclose:()=>{Pe.onclose()}}):(alert("Flutterwave payment library not loaded. Please try again later."),Pe.onclose())}return(Pe,S)=>(wt(),At("main",tV,[S[37]||(S[37]=ee("div",{class:"d-flex justify-content-center align-items-center mb-3"},[ee("img",{src:ZL,alt:"tournamnet image",loading:"lazy",style:{width:"250px"}})],-1)),ee("div",nV,[ee("form",null,[ee("div",iV,[ee("div",sV,[ee("div",{class:"progress-bar bg-success",style:fh({width:C.value+"%"})},null,4)])]),s.value===1?(wt(),At("div",rV,[S[10]||(S[10]=ee("h4",null,"Uganda Golf Union",-1)),S[11]||(S[11]=ee("p",null,"Welcome to our golf registration form. Click next to get started.",-1)),ee("div",{class:"d-flex justify-content-between my-3"},[ee("button",{type:"button",class:"btn btn-success w-100",onClick:R},"Next")]),S[12]||(S[12]=ee("div",{class:"d-flex gap-1 mt-2"},[ee("img",{src:eV,alt:"Tournament Photo",style:{width:"50%",height:"10%","object-fit":"cover"},class:"flex-fill"})],-1))])):Li("",!0),s.value===2?(wt(),At("div",oV,[S[19]||(S[19]=ee("h4",null,"Personal Details",-1)),ee("div",aV,[ee("div",lV,[ee("div",null,[S[13]||(S[13]=ee("label",{class:"form-label mt-1",for:"firstName"},[tn("First Name"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("input",{id:"firstName",type:"text",class:"form-control","onUpdate:modelValue":S[0]||(S[0]=ue=>h.value=ue)},null,512),[[Qa,h.value]])])]),ee("div",cV,[ee("div",null,[S[14]||(S[14]=ee("label",{class:"form-label mt-1",for:"lastName"},[tn("Last Name"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("input",{id:"lastName",type:"text",class:"form-control","onUpdate:modelValue":S[1]||(S[1]=ue=>m.value=ue)},null,512),[[Qa,m.value]])])]),ee("div",uV,[ee("div",null,[S[15]||(S[15]=ee("label",{class:"form-label mt-1",for:"email"},[tn("Email"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("input",{id:"email",type:"email",class:"form-control","onUpdate:modelValue":S[2]||(S[2]=ue=>y.value=ue)},null,512),[[Qa,y.value]])])]),ee("div",hV,[ee("div",null,[S[17]||(S[17]=ee("label",{class:"form-label mt-1",for:"country"},[tn("Country"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("select",{"onUpdate:modelValue":S[3]||(S[3]=ue=>w.value=ue),class:"form-select"},[S[16]||(S[16]=ee("option",{value:null},"Select a country...",-1)),(wt(),At(Dn,null,Wc(o,ue=>ee("option",{key:ue,value:ue},Vn(ue),9,dV)),64))],512),[[qc,w.value]])])]),ee("div",fV,[ee("div",null,[S[18]||(S[18]=ee("label",{class:"form-label mt-1",for:"tel"},[tn("Phone"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("input",{type:"tel",id:"tel",class:"form-control","onUpdate:modelValue":S[4]||(S[4]=ue=>N.value=ue)},null,512),[[Qa,N.value]])])])]),n.value?(wt(),At("div",pV,Vn(i.value),1)):Li("",!0),ee("div",{class:"d-flex gap-2 mt-3"},[ee("button",{type:"button",class:"btn btn-secondary flex-fill",onClick:A},"PREV"),ee("button",{type:"button",class:"btn btn-success flex-fill",onClick:M},"Next")])])):Li("",!0),s.value===3?(wt(),At("div",mV,[S[27]||(S[27]=ee("h4",null,"Select Golf Club and Event",-1)),ee("div",gV,[S[21]||(S[21]=ee("label",{class:"form-label",for:"club"},[tn("Select Your Club "),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("select",{id:"club",class:"form-select","onUpdate:modelValue":S[5]||(S[5]=ue=>V.value=ue)},[S[20]||(S[20]=ee("option",{value:""},"Select a club...",-1)),(wt(),At(Dn,null,Wc(l,ue=>ee("option",{key:ue,value:ue},Vn(ue),9,_V)),64))],512),[[qc,V.value]])]),Y.value?(wt(),At("div",yV,[S[22]||(S[22]=ee("label",{class:"form-label",for:"otherClub"},"Enter Club Name",-1)),Mi(ee("input",{id:"otherClub",type:"text",class:"form-control","onUpdate:modelValue":S[6]||(S[6]=ue=>V.value=ue),placeholder:"Enter your club name"},null,512),[[Qa,V.value]])])):Li("",!0),ee("div",vV,[S[24]||(S[24]=ee("label",{for:"event",class:"form-label"},[tn("Choose Your Open"),ee("span",{class:"text-danger"},"*")],-1)),Mi(ee("select",{id:"event",class:"form-select","onUpdate:modelValue":S[7]||(S[7]=ue=>F.value=ue)},[S[23]||(S[23]=ee("option",{value:""},"Select an opening...",-1)),(wt(),At(Dn,null,Wc(u,ue=>ee("option",{key:ue.name,value:ue.name},Vn(ue.name),9,EV)),64))],512),[[qc,F.value]])]),be.value&&be.value.subsidiaries.length?(wt(),At("div",wV,[S[26]||(S[26]=ee("label",{for:"subsidiary",class:"form-label"},"Select Your Event",-1)),Mi(ee("select",{id:"subsidiary",class:"form-select","onUpdate:modelValue":S[8]||(S[8]=ue=>ye.value=ue)},[S[25]||(S[25]=ee("option",{value:""},"Select event...",-1)),(wt(!0),At(Dn,null,Wc(be.value.subsidiaries,ue=>(wt(),At("option",{key:ue.name,value:ue.name},Vn(ue.name)+" ("+Vn(ue.price)+") ",9,bV))),128))],512),[[qc,ye.value]])])):Li("",!0),n.value?(wt(),At("div",TV,Vn(i.value),1)):Li("",!0),ee("div",{class:"d-flex gap-2 mt-3"},[ee("button",{type:"button",class:"btn btn-secondary flex-fill",onClick:A},"PREV"),ee("button",{type:"button",class:"btn btn-success flex-fill",onClick:M},"Next")])])):Li("",!0),s.value===4?(wt(),At("div",IV,[S[36]||(S[36]=ee("h4",null,"Payment",-1)),ee("div",AV,[ee("div",CV,[S[31]||(S[31]=tn(" Hello ")),ee("strong",null,Vn(h.value)+" "+Vn(m.value),1),S[32]||(S[32]=tn("! This is the event you are registering for: ")),ee("strong",null,Vn(F.value),1),be.value&&be.value.subsidiaries.length?(wt(),At(Dn,{key:0},[ye.value?(wt(),At("span",SV,[S[28]||(S[28]=tn(" at a cost of ")),ee("strong",null,Vn(be.value.subsidiaries.find(ue=>ue.name===ye.value)?.price||"N/A"),1),S[29]||(S[29]=tn(" for ")),ee("strong",null,Vn(be.value.subsidiaries.find(ue=>ue.name===ye.value)?.name||"N/A")+". ",1)])):(wt(),At("span",RV,S[30]||(S[30]=[ee("strong",null,"Please select a subsidiary to see the price.",-1)])))],64)):(wt(),At("strong",PV,"No price available for this event.")),S[33]||(S[33]=tn(' Click the "Confirm Information" checkbox below to proceed with the payment. '))])]),ee("div",kV,[ee("div",NV,[Mi(ee("input",{type:"checkbox",id:"confirmCheck","onUpdate:modelValue":S[9]||(S[9]=ue=>X.value=ue),class:"form-check-input"},null,512),[[ek,X.value]]),S[34]||(S[34]=ee("label",{for:"confirmCheck",class:"form-check-label"},[tn("Confirm Information"),ee("span",{class:"text-danger"},"*")],-1))])]),n.value?(wt(),At("div",OV,Vn(i.value),1)):Li("",!0),ee("div",DV,[ee("button",{type:"button",class:"btn btn-secondary flex-fill",onClick:A},"PREV"),ee("button",{type:"button",class:"btn btn-success flex-fill",disabled:Q.value||!X.value,onClick:De},[Q.value?(wt(),At("span",MV)):Li("",!0),S[35]||(S[35]=tn(" PAY NOW"))],8,xV)])])):Li("",!0)])])]))}}),jT=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},VV=jT(LV,[["__scopeId","data-v-a9c2c6e3"]]),FV={class:"grid"},UV={class:"d-flex flex-column align-items-center justify-content-center"},$V={class:"text-center"},BV=pa({__name:"Error404",setup(t){return(e,n)=>(wt(),At("div",FV,[ee("div",UV,[ee("div",$V,[n[1]||(n[1]=ee("h1",{class:"display-1 fw-bold"},"404",-1)),n[2]||(n[2]=ee("p",{class:"fs-3"},[ee("span",{class:"text-danger"},"Opps!"),tn(" Page not found.")],-1)),n[3]||(n[3]=ee("p",{class:"lead"}," The page you’re looking for doesn’t exist. ",-1)),ln(zi(rm),{to:"/",class:"btn btn-primary"},{default:rp(()=>n[0]||(n[0]=[ee("i",{class:"bi bi-arrow-left-circle"},null,-1),tn(" Previous Page ")])),_:1,__:[0]})])])]))}}),jV=jT(BV,[["__scopeId","data-v-cb65a651"]]),HV=zL({history:TL("/"),routes:[{path:"/",name:"home",component:VV},{path:"/:catchAll(.*)",name:"404",component:jV}],scrollBehavior(t,e,n){return n||{top:0}}}),Mh=ik(JL);Mh.use(zM());Mh.use(HM,{firebaseApp:nm,modules:[UM()]});Mh.use(HV);Mh.mount("#app");
