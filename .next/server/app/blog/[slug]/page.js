(()=>{var e={};e.id=953,e.ids=[953],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},81055:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>d,tree:()=>u});var r=n(70260),o=n(28203),i=n(25155),l=n.n(i),a=n(67292),s={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>a[e]);n.d(t,s);let u=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,98494)),"D:\\LinkGen.in\\app\\blog\\[slug]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,86364))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,53215)),"D:\\LinkGen.in\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,86364))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\LinkGen.in\\app\\blog\\[slug]\\page.tsx"],p={require:n,loadChunk:()=>Promise.resolve()},d=new r.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},48809:(e,t,n)=>{Promise.resolve().then(n.bind(n,11070))},13961:(e,t,n)=>{Promise.resolve().then(n.bind(n,75958))},75958:(e,t,n)=>{"use strict";n.d(t,{default:()=>nz});var r={};n.r(r),n.d(r,{boolean:()=>v,booleanish:()=>k,commaOrSpaceSeparated:()=>C,commaSeparated:()=>T,number:()=>w,overloadedBoolean:()=>x,spaceSeparated:()=>S});var o={};n.r(o),n.d(o,{attentionMarkers:()=>tL,contentInitial:()=>tC,disable:()=>tP,document:()=>tT,flow:()=>tE,flowInitial:()=>tI,insideSpan:()=>tq,string:()=>tA,text:()=>tD});var i=n(45512),l=n(79334),a=n(41310);let s=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,u=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,c={};function p(e,t){return((t||c).jsx?u:s).test(e)}let d=/[ \t\n\f\r]/g;function h(e){return""===e.replace(d,"")}class f{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}}function m(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new f(n,r,t)}function g(e){return e.toLowerCase()}f.prototype.normal={},f.prototype.property={},f.prototype.space=void 0;class y{constructor(e,t){this.attribute=t,this.property=e}}y.prototype.attribute="",y.prototype.booleanish=!1,y.prototype.boolean=!1,y.prototype.commaOrSpaceSeparated=!1,y.prototype.commaSeparated=!1,y.prototype.defined=!1,y.prototype.mustUseProperty=!1,y.prototype.number=!1,y.prototype.overloadedBoolean=!1,y.prototype.property="",y.prototype.spaceSeparated=!1,y.prototype.space=void 0;let b=0,v=I(),k=I(),x=I(),w=I(),S=I(),T=I(),C=I();function I(){return 2**++b}let E=Object.keys(r);class A extends y{constructor(e,t,n,o){let i=-1;if(super(e,t),function(e,t,n){n&&(e[t]=n)}(this,"space",o),"number"==typeof n)for(;++i<E.length;){let e=E[i];(function(e,t,n){n&&(e[t]=n)})(this,E[i],(n&r[e])===r[e])}}}function D(e){let t={},n={};for(let[r,o]of Object.entries(e.properties)){let i=new A(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[g(r)]=r,n[g(i.attribute)]=r}return new f(t,n,e.space)}A.prototype.defined=!0;let q=D({properties:{ariaActiveDescendant:null,ariaAtomic:k,ariaAutoComplete:null,ariaBusy:k,ariaChecked:k,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:S,ariaCurrent:null,ariaDescribedBy:S,ariaDetails:null,ariaDisabled:k,ariaDropEffect:S,ariaErrorMessage:null,ariaExpanded:k,ariaFlowTo:S,ariaGrabbed:k,ariaHasPopup:null,ariaHidden:k,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:S,ariaLevel:w,ariaLive:null,ariaModal:k,ariaMultiLine:k,ariaMultiSelectable:k,ariaOrientation:null,ariaOwns:S,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:k,ariaReadOnly:k,ariaRelevant:null,ariaRequired:k,ariaRoleDescription:S,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:k,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null},transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase()});function L(e,t){return t in e?e[t]:t}function P(e,t){return L(e,t.toLowerCase())}let N=D({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:T,acceptCharset:S,accessKey:S,action:null,allow:null,allowFullScreen:v,allowPaymentRequest:v,allowUserMedia:v,alt:null,as:null,async:v,autoCapitalize:null,autoComplete:S,autoFocus:v,autoPlay:v,blocking:S,capture:null,charSet:null,checked:v,cite:null,className:S,cols:w,colSpan:null,content:null,contentEditable:k,controls:v,controlsList:S,coords:w|T,crossOrigin:null,data:null,dateTime:null,decoding:null,default:v,defer:v,dir:null,dirName:null,disabled:v,download:x,draggable:k,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:v,formTarget:null,headers:S,height:w,hidden:x,high:w,href:null,hrefLang:null,htmlFor:S,httpEquiv:S,id:null,imageSizes:null,imageSrcSet:null,inert:v,inputMode:null,integrity:null,is:null,isMap:v,itemId:null,itemProp:S,itemRef:S,itemScope:v,itemType:S,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:v,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:v,muted:v,name:null,nonce:null,noModule:v,noValidate:v,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:v,optimum:w,pattern:null,ping:S,placeholder:null,playsInline:v,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:v,referrerPolicy:null,rel:S,required:v,reversed:v,rows:w,rowSpan:w,sandbox:S,scope:null,scoped:v,seamless:v,selected:v,shadowRootClonable:v,shadowRootDelegatesFocus:v,shadowRootMode:null,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:k,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:v,useMap:null,value:k,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:S,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:v,declare:v,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:v,noHref:v,noShade:v,noWrap:v,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:k,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:v,disableRemotePlayback:v,prefix:null,property:null,results:w,security:null,unselectable:null},space:"html",transform:P}),O=D({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:C,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:S,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:v,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:T,g2:T,glyphName:T,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:C,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:S,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:C,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:C,rev:C,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:C,requiredFeatures:C,requiredFonts:C,requiredFormats:C,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:C,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:C,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:C,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:L}),R=D({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase()}),M=D({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:P}),z=D({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase()}),F=m([q,N,R,M,z],"html"),B=m([q,O,R,M,z],"svg"),U=/[A-Z]/g,j=/-[a-z]/g,Y=/^data[-\w.:]+$/i;function H(e){return"-"+e.toLowerCase()}function V(e){return e.charAt(1).toUpperCase()}let _={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var G=n(39617);let W=J("end"),K=J("start");function J(e){return function(t){let n=t&&t.position&&t.position[e]||{};if("number"==typeof n.line&&n.line>0&&"number"==typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"==typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Q(e){return e&&"object"==typeof e?"position"in e||"type"in e?$(e.position):"start"in e||"end"in e?$(e):"line"in e||"column"in e?Z(e):"":""}function Z(e){return X(e&&e.line)+":"+X(e&&e.column)}function $(e){return Z(e&&e.start)+"-"+Z(e&&e.end)}function X(e){return e&&"number"==typeof e?e:1}class ee extends Error{constructor(e,t,n){super(),"string"==typeof t&&(n=t,t=void 0);let r="",o={},i=!1;if(t&&(o="line"in t&&"column"in t?{place:t}:"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"==typeof e?r=e:!o.cause&&e&&(i=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&"string"==typeof n){let e=n.indexOf(":");-1===e?o.ruleId=n:(o.source=n.slice(0,e),o.ruleId=n.slice(e+1))}if(!o.place&&o.ancestors&&o.ancestors){let e=o.ancestors[o.ancestors.length-1];e&&(o.place=e.position)}let l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=l?l.line:void 0,this.name=Q(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=i&&o.cause&&"string"==typeof o.cause.stack?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ee.prototype.file="",ee.prototype.name="",ee.prototype.reason="",ee.prototype.message="",ee.prototype.stack="",ee.prototype.column=void 0,ee.prototype.line=void 0,ee.prototype.ancestors=void 0,ee.prototype.cause=void 0,ee.prototype.fatal=void 0,ee.prototype.place=void 0,ee.prototype.ruleId=void 0,ee.prototype.source=void 0;let et={}.hasOwnProperty,en=new Map,er=/[A-Z]/g,eo=new Set(["table","tbody","thead","tfoot","tr"]),ei=new Set(["td","th"]),el="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ea(e,t,n){return"element"===t.type?function(e,t,n){let r=e.schema,o=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(o=B,e.schema=o),e.ancestors.push(t);let i=ep(e,t.tagName,!1),l=function(e,t){let n,r;let o={};for(r in t.properties)if("children"!==r&&et.call(t.properties,r)){let i=function(e,t,n){let r=function(e,t){let n=g(t),r=t,o=y;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&Y.test(t)){if("-"===t.charAt(4)){let e=t.slice(5).replace(j,V);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!j.test(e)){let n=e.replace(U,H);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}o=A}return new o(r,t)}(e.schema,t);if(!(null==n||"number"==typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){let n={};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):n.join(" ").trim()),"style"===r.property){let t="object"==typeof n?n:function(e,t){try{return G(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};let t=new ee("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=el+"#cannot-parse-style-attribute",t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){let t;let n={};for(t in e)et.call(e,t)&&(n[function(e){let t=e.replace(er,eh);return"ms-"===t.slice(0,3)&&(t="-"+t),t}(t)]=e[t]);return n}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?_[r.property]||r.property:r.attribute,n]}}(e,r,t.properties[r]);if(i){let[r,l]=i;e.tableCellAlignToStyle&&"align"===r&&"string"==typeof l&&ei.has(t.tagName)?n=l:o[r]=l}}return n&&((o.style||(o.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=n),o}(e,t),a=ec(e,t);return eo.has(t.tagName)&&(a=a.filter(function(e){return"string"!=typeof e||!("object"==typeof e?"text"===e.type&&h(e.value):h(e))})),es(e,l,i,t),eu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ed(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){let r=e.schema,o=r;"svg"===t.name&&"html"===r.space&&(o=B,e.schema=o),e.ancestors.push(t);let i=null===t.name?e.Fragment:ep(e,t.name,!0),l=function(e,t){let n={};for(let r of t.attributes)if("mdxJsxExpressionAttribute"===r.type){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let o=t.expression;o.type;let i=o.properties[0];i.type,Object.assign(n,e.evaluater.evaluateExpression(i.argument))}else ed(e,t.position)}else{let o;let i=r.name;if(r.value&&"object"==typeof r.value){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,o=e.evaluater.evaluateExpression(t.expression)}else ed(e,t.position)}else o=null===r.value||r.value;n[i]=o}return n}(e,t),a=ec(e,t);return es(e,l,i,t),eu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,i,l,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ed(e,t.position)}(e,t):"root"===t.type?function(e,t,n){let r={};return eu(r,ec(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?t.value:void 0}function es(e,t,n,r){"string"!=typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function eu(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function ec(e,t){let n=[],r=-1,o=e.passKeys?new Map:en;for(;++r<t.children.length;){let i;let l=t.children[r];if(e.passKeys){let e="element"===l.type?l.tagName:"mdxJsxFlowElement"===l.type||"mdxJsxTextElement"===l.type?l.name:void 0;if(e){let t=o.get(e)||0;i=e+"-"+t,o.set(e,t+1)}}let a=ea(e,l,i);void 0!==a&&n.push(a)}return n}function ep(e,t,n){let r;if(n){if(t.includes(".")){let e;let n=t.split("."),o=-1;for(;++o<n.length;){let t=p(n[o])?{type:"Identifier",name:n[o]}:{type:"Literal",value:n[o]};e=e?{type:"MemberExpression",object:e,property:t,computed:!!(o&&"Literal"===t.type),optional:!1}:t}r=e}else r=p(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t}}else r={type:"Literal",value:t};if("Literal"===r.type){let t=r.value;return et.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ed(e)}function ed(e,t){let n=new ee("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=el+"#cannot-handle-mdx-estrees-without-createevaluater",n}function eh(e){return"-"+e.toLowerCase()}let ef={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var em=n(58009);let eg={};function ey(e,t,n){if(e&&"object"==typeof e){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return eb(e.children,t,n)}return Array.isArray(e)?eb(e,t,n):""}function eb(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=ey(e[o],t,n);return r.join("")}function ev(e,t,n,r){let o;let i=e.length,l=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)(o=Array.from(r)).unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);l<r.length;)(o=r.slice(l,l+1e4)).unshift(t,0),e.splice(...o),l+=1e4,t+=1e4}function ek(e,t){return e.length>0?(ev(e,e.length,0,t),e):t}class ex{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=null==t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){this.setCursor(Math.trunc(e));let r=this.right.splice(this.right.length-(t||0),Number.POSITIVE_INFINITY);return n&&ew(this.left,n),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),ew(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),ew(this.right,e.reverse())}setCursor(e){if(e!==this.left.length&&(!(e>this.left.length)||0!==this.right.length)&&(!(e<0)||0!==this.left.length)){if(e<this.left.length){let t=this.left.splice(e,Number.POSITIVE_INFINITY);ew(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);ew(this.left,t.reverse())}}}}function ew(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function eS(e){let t,n,r,o,i,l,a;let s={},u=-1,c=new ex(e);for(;++u<c.length;){for(;u in s;)u=s[u];if(t=c.get(u),u&&"chunkFlow"===t[1].type&&"listItemPrefix"===c.get(u-1)[1].type&&((r=0)<(l=t[1]._tokenizer.events).length&&"lineEndingBlank"===l[r][1].type&&(r+=2),r<l.length&&"content"===l[r][1].type))for(;++r<l.length&&"content"!==l[r][1].type;)"chunkText"===l[r][1].type&&(l[r][1]._isInFirstContentOfListItem=!0,r++);if("enter"===t[0])t[1].contentType&&(Object.assign(s,function(e,t){let n,r;let o=e.get(t)[1],i=e.get(t)[2],l=t-1,a=[],s=o._tokenizer;!s&&(s=i.parser[o.contentType](o.start),o._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));let u=s.events,c=[],p={},d=-1,h=o,f=0,m=0,g=[0];for(;h;){for(;e.get(++l)[1]!==h;);a.push(l),!h._tokenizer&&(n=i.sliceStream(h),h.next||n.push(null),r&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(n),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),r=h,h=h.next}for(h=o;++d<u.length;)"exit"===u[d][0]&&"enter"===u[d-1][0]&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(m=d+1,g.push(m),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):g.pop(),d=g.length;d--;){let t=u.slice(g[d],g[d+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),d=-1;++d<c.length;)p[f+c[d][0]]=f+c[d][1],f+=c[d][1]-c[d][0]-1;return p}(c,u)),u=s[u],a=!0);else if(t[1]._container){for(r=u,n=void 0;r--;)if("lineEnding"===(o=c.get(r))[1].type||"lineEndingBlank"===o[1].type)"enter"===o[0]&&(n&&(c.get(n)[1].type="lineEndingBlank"),o[1].type="lineEnding",n=r);else if("linePrefix"===o[1].type||"listItemIndent"===o[1].type);else break;n&&(t[1].end={...c.get(n)[1].start},(i=c.slice(n,u)).unshift(t),c.splice(n,u-n+1,i))}}return ev(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!a}let eT={}.hasOwnProperty,eC=ez(/[A-Za-z]/),eI=ez(/[\dA-Za-z]/),eE=ez(/[#-'*+\--9=?A-Z^-~]/);function eA(e){return null!==e&&(e<32||127===e)}let eD=ez(/\d/),eq=ez(/[\dA-Fa-f]/),eL=ez(/[!-/:-@[-`{-~]/);function eP(e){return null!==e&&e<-2}function eN(e){return null!==e&&(e<0||32===e)}function eO(e){return -2===e||-1===e||32===e}let eR=ez(/\p{P}|\p{S}/u),eM=ez(/\s/);function ez(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function eF(e,t,n,r){let o=r?r-1:Number.POSITIVE_INFINITY,i=0;return function(r){return eO(r)?(e.enter(n),function r(l){return eO(l)&&i++<o?(e.consume(l),r):(e.exit(n),t(l))}(r)):t(r)}}let eB={tokenize:function(e){let t;let n=e.attempt(this.parser.constructs.contentInitial,function(t){if(null===t){e.consume(t);return}return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eF(e,n,"linePrefix")},function(n){return e.enter("paragraph"),function n(r){let o=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=o),t=o,function t(r){if(null===r){e.exit("chunkText"),e.exit("paragraph"),e.consume(r);return}return eP(r)?(e.consume(r),e.exit("chunkText"),n):(e.consume(r),t)}(r)}(n)});return n}},eU={tokenize:function(e){let t,n,r;let o=this,i=[],l=0;return a;function a(t){if(l<i.length){let n=i[l];return o.containerState=n[1],e.attempt(n[0].continuation,s,u)(t)}return u(t)}function s(e){if(l++,o.containerState._closeFlow){let n;o.containerState._closeFlow=void 0,t&&y();let r=o.events.length,i=r;for(;i--;)if("exit"===o.events[i][0]&&"chunkFlow"===o.events[i][1].type){n=o.events[i][1].end;break}g(l);let a=r;for(;a<o.events.length;)o.events[a][1].end={...n},a++;return ev(o.events,i+1,0,o.events.slice(r)),o.events.length=a,u(e)}return a(e)}function u(n){if(l===i.length){if(!t)return d(n);if(t.currentConstruct&&t.currentConstruct.concrete)return f(n);o.interrupt=!!(t.currentConstruct&&!t._gfmTableDynamicInterruptHack)}return o.containerState={},e.check(ej,c,p)(n)}function c(e){return t&&y(),g(l),d(e)}function p(e){return o.parser.lazy[o.now().line]=l!==i.length,r=o.now().offset,f(e)}function d(t){return o.containerState={},e.attempt(ej,h,f)(t)}function h(e){return l++,i.push([o.currentConstruct,o.containerState]),d(e)}function f(r){if(null===r){t&&y(),g(0),e.consume(r);return}return t=t||o.parser.flow(o.now()),e.enter("chunkFlow",{_tokenizer:t,contentType:"flow",previous:n}),function t(n){if(null===n){m(e.exit("chunkFlow"),!0),g(0),e.consume(n);return}return eP(n)?(e.consume(n),m(e.exit("chunkFlow")),l=0,o.interrupt=void 0,a):(e.consume(n),t)}(r)}function m(e,i){let a=o.sliceStream(e);if(i&&a.push(null),e.previous=n,n&&(n.next=e),n=e,t.defineSkip(e.start),t.write(a),o.parser.lazy[e.start.line]){let e,n,i=t.events.length;for(;i--;)if(t.events[i][1].start.offset<r&&(!t.events[i][1].end||t.events[i][1].end.offset>r))return;let a=o.events.length,s=a;for(;s--;)if("exit"===o.events[s][0]&&"chunkFlow"===o.events[s][1].type){if(e){n=o.events[s][1].end;break}e=!0}for(g(l),i=a;i<o.events.length;)o.events[i][1].end={...n},i++;ev(o.events,s+1,0,o.events.slice(a)),o.events.length=i}}function g(t){let n=i.length;for(;n-- >t;){let t=i[n];o.containerState=t[1],t[0].exit.call(o,e)}i.length=t}function y(){t.write([null]),n=void 0,t=void 0,o.containerState._closeFlow=void 0}}},ej={tokenize:function(e,t,n){return eF(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}},eY={partial:!0,tokenize:function(e,t,n){return function(t){return eO(t)?eF(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||eP(e)?t(e):n(e)}}},eH={resolve:function(e){return eS(e),e},tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?o(t):eP(t)?e.check(eV,i,o)(t):(e.consume(t),r)}function o(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function i(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}},eV={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eF(e,o,"linePrefix")};function o(o){if(null===o||eP(o))return n(o);let i=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}},e_={tokenize:function(e){let t=this,n=e.attempt(eY,function(r){if(null===r){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n},e.attempt(this.parser.constructs.flowInitial,r,eF(e,e.attempt(this.parser.constructs.flow,r,e.attempt(eH,r)),"linePrefix")));return n;function r(r){if(null===r){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}},eG={resolveAll:eQ()},eW=eJ("string"),eK=eJ("text");function eJ(e){return{resolveAll:eQ("text"===e?eZ:void 0),tokenize:function(t){let n=this,r=this.parser.constructs[e],o=t.attempt(r,i,l);return i;function i(e){return s(e)?o(e):l(e)}function l(e){if(null===e){t.consume(e);return}return t.enter("data"),t.consume(e),a}function a(e){return s(e)?(t.exit("data"),o(e)):(t.consume(e),a)}function s(e){if(null===e)return!0;let t=r[e],o=-1;if(t)for(;++o<t.length;){let e=t[o];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}}function eQ(e){return function(t,n){let r,o=-1;for(;++o<=t.length;)void 0===r?t[o]&&"data"===t[o][1].type&&(r=o,o++):t[o]&&"data"===t[o][1].type||(o!==r+2&&(t[r][1].end=t[o-1][1].end,t.splice(r+2,o-r-2),o=r+2),r=void 0);return e?e(t,n):t}}function eZ(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let r;let o=e[n-1][1],i=t.sliceStream(o),l=i.length,a=-1,s=0;for(;l--;){let e=i[l];if("string"==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)s++,a--;if(a)break;a=-1}else if(-2===e)r=!0,s++;else if(-1===e);else{l++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||r||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?a:o.start._bufferIndex+a,_index:o.start._index+l,line:o.end.line,column:o.end.column-s,offset:o.end.offset-s},end:{...o.end}};o.end={...i.start},o.start.offset===o.end.offset?Object.assign(o,i):(e.splice(n,0,["enter",i,t],["exit",i,t]),n+=2)}n++}return e}let e$={name:"thematicBreak",tokenize:function(e,t,n){let r,o=0;return function(i){return e.enter("thematicBreak"),r=i,function i(l){return l===r?(e.enter("thematicBreakSequence"),function t(n){return n===r?(e.consume(n),o++,t):(e.exit("thematicBreakSequence"),eO(n)?eF(e,i,"whitespace")(n):i(n))}(l)):o>=3&&(null===l||eP(l))?(e.exit("thematicBreak"),t(l)):n(l)}(i)}}},eX={continuation:{tokenize:function(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(eY,function(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,eF(e,t,"listItemIndent",r.containerState.size+1)(n)},function(n){return r.containerState.furtherBlankLines||!eO(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(e0,t,o)(n))});function o(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,eF(e,e.attempt(eX,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,t,n){let r=this,o=r.events[r.events.length-1],i=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,l=0;return function(t){let o=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===o?!r.containerState.marker||t===r.containerState.marker:eD(t)){if(r.containerState.type||(r.containerState.type=o,e.enter(o,{_container:!0})),"listUnordered"===o)return e.enter("listItemPrefix"),42===t||45===t?e.check(e$,n,a)(t):a(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),function t(o){return eD(o)&&++l<10?(e.consume(o),t):(!r.interrupt||l<2)&&(r.containerState.marker?o===r.containerState.marker:41===o||46===o)?(e.exit("listItemValue"),a(o)):n(o)}(t)}return n(t)};function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(eY,r.interrupt?n:s,e.attempt(e1,c,u))}function s(e){return r.containerState.initialBlankLine=!0,i++,c(e)}function u(t){return eO(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),c):n(t)}function c(n){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}}},e1={partial:!0,tokenize:function(e,t,n){let r=this;return eF(e,function(e){let o=r.events[r.events.length-1];return!eO(e)&&o&&"listItemPrefixWhitespace"===o[1].type?t(e):n(e)},"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},e0={partial:!0,tokenize:function(e,t,n){let r=this;return eF(e,function(e){let o=r.events[r.events.length-1];return o&&"listItemIndent"===o[1].type&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(e):n(e)},"listItemIndent",r.containerState.size+1)}},e2={continuation:{tokenize:function(e,t,n){let r=this;return function(t){return eO(t)?eF(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):o(t)};function o(r){return e.attempt(e2,t,n)(r)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,t,n){let r=this;return function(t){if(62===t){let n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),o}return n(t)};function o(n){return eO(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}}};function e4(e,t,n,r,o,i,l,a,s){let u=s||Number.POSITIVE_INFINITY,c=0;return function(t){return 60===t?(e.enter(r),e.enter(o),e.enter(i),e.consume(t),e.exit(i),p):null===t||32===t||41===t||eA(t)?n(t):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),f(t))};function p(n){return 62===n?(e.enter(i),e.consume(n),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(n))}function d(t){return 62===t?(e.exit("chunkString"),e.exit(a),p(t)):null===t||60===t||eP(t)?n(t):(e.consume(t),92===t?h:d)}function h(t){return 60===t||62===t||92===t?(e.consume(t),d):d(t)}function f(o){return!c&&(null===o||41===o||eN(o))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(o)):c<u&&40===o?(e.consume(o),c++,f):41===o?(e.consume(o),c--,f):null===o||32===o||40===o||eA(o)?n(o):(e.consume(o),92===o?m:f)}function m(t){return 40===t||41===t||92===t?(e.consume(t),f):f(t)}}function e3(e,t,n,r,o,i){let l;let a=this,s=0;return function(t){return e.enter(r),e.enter(o),e.consume(t),e.exit(o),e.enter(i),u};function u(p){return s>999||null===p||91===p||93===p&&!l||94===p&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(p):93===p?(e.exit(i),e.enter(o),e.consume(p),e.exit(o),e.exit(r),t):eP(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(t){return null===t||91===t||93===t||eP(t)||s++>999?(e.exit("chunkString"),u(t)):(e.consume(t),l||(l=!eO(t)),92===t?p:c)}function p(t){return 91===t||92===t||93===t?(e.consume(t),s++,c):c(t)}}function e5(e,t,n,r,o,i){let l;return function(t){return 34===t||39===t||40===t?(e.enter(r),e.enter(o),e.consume(t),e.exit(o),l=40===t?41:t,a):n(t)};function a(n){return n===l?(e.enter(o),e.consume(n),e.exit(o),e.exit(r),t):(e.enter(i),s(n))}function s(t){return t===l?(e.exit(i),a(l)):null===t?n(t):eP(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),eF(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(t))}function u(t){return t===l||null===t||eP(t)?(e.exit("chunkString"),s(t)):(e.consume(t),92===t?c:u)}function c(t){return t===l||92===t?(e.consume(t),u):u(t)}}function e6(e,t){let n;return function r(o){return eP(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):eO(o)?eF(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}function e9(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}let e7={partial:!0,tokenize:function(e,t,n){return function(t){return eN(t)?e6(e,r)(t):n(t)};function r(t){return e5(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function o(t){return eO(t)?eF(e,i,"whitespace")(t):i(t)}function i(e){return null===e||eP(e)?t(e):n(e)}}},e8={name:"codeIndented",tokenize:function(e,t,n){let r=this;return function(t){return e.enter("codeIndented"),eF(e,o,"linePrefix",5)(t)};function o(t){let o=r.events[r.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?function t(n){return null===n?i(n):eP(n)?e.attempt(te,t,i)(n):(e.enter("codeFlowValue"),function n(r){return null===r||eP(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(t):n(t)}function i(n){return e.exit("codeIndented"),t(n)}}},te={partial:!0,tokenize:function(e,t,n){let r=this;return o;function o(t){return r.parser.lazy[r.now().line]?n(t):eP(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o):eF(e,i,"linePrefix",5)(t)}function i(e){let i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(e):eP(e)?o(e):n(e)}}},tt={name:"setextUnderline",resolveTo:function(e,t){let n,r,o,i=e.length;for(;i--;)if("enter"===e[i][0]){if("content"===e[i][1].type){n=i;break}"paragraph"===e[i][1].type&&(r=i)}else"content"===e[i][1].type&&e.splice(i,1),o||"definition"!==e[i][1].type||(o=i);let l={type:"setextHeading",start:{...e[n][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",l,t]),e.splice(o+1,0,["exit",e[n][1],t]),e[n][1].end={...e[o][1].end}):e[n][1]=l,e.push(["exit",l,t]),e},tokenize:function(e,t,n){let r;let o=this;return function(t){let l,a=o.events.length;for(;a--;)if("lineEnding"!==o.events[a][1].type&&"linePrefix"!==o.events[a][1].type&&"content"!==o.events[a][1].type){l="paragraph"===o.events[a][1].type;break}return!o.parser.lazy[o.now().line]&&(o.interrupt||l)?(e.enter("setextHeadingLine"),r=t,e.enter("setextHeadingLineSequence"),function t(n){return n===r?(e.consume(n),t):(e.exit("setextHeadingLineSequence"),eO(n)?eF(e,i,"lineSuffix")(n):i(n))}(t)):n(t)};function i(r){return null===r||eP(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}}},tn=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tr=["pre","script","style","textarea"],to={partial:!0,tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(eY,t,n)}}},ti={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return eP(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o):n(t)};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}},tl={partial:!0,tokenize:function(e,t,n){let r=this;return function(t){return null===t?n(t):(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o)};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}},ta={concrete:!0,name:"codeFenced",tokenize:function(e,t,n){let r;let o=this,i={partial:!0,tokenize:function(e,t,n){let i=0;return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l};function l(t){return e.enter("codeFencedFence"),eO(t)?eF(e,s,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):s(t)}function s(t){return t===r?(e.enter("codeFencedFenceSequence"),function t(o){return o===r?(i++,e.consume(o),t):i>=a?(e.exit("codeFencedFenceSequence"),eO(o)?eF(e,u,"whitespace")(o):u(o)):n(o)}(t)):n(t)}function u(r){return null===r||eP(r)?(e.exit("codeFencedFence"),t(r)):n(r)}}},l=0,a=0;return function(t){return function(t){let i=o.events[o.events.length-1];return l=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,r=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),function t(o){return o===r?(a++,e.consume(o),t):a<3?n(o):(e.exit("codeFencedFenceSequence"),eO(o)?eF(e,s,"whitespace")(o):s(o))}(t)}(t)};function s(i){return null===i||eP(i)?(e.exit("codeFencedFence"),o.interrupt?t(i):e.check(tl,c,f)(i)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),function t(o){return null===o||eP(o)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),s(o)):eO(o)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),eF(e,u,"whitespace")(o)):96===o&&o===r?n(o):(e.consume(o),t)}(i))}function u(t){return null===t||eP(t)?s(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),function t(o){return null===o||eP(o)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),s(o)):96===o&&o===r?n(o):(e.consume(o),t)}(t))}function c(t){return e.attempt(i,f,p)(t)}function p(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),d}function d(t){return l>0&&eO(t)?eF(e,h,"linePrefix",l+1)(t):h(t)}function h(t){return null===t||eP(t)?e.check(tl,c,f)(t):(e.enter("codeFlowValue"),function t(n){return null===n||eP(n)?(e.exit("codeFlowValue"),h(n)):(e.consume(n),t)}(t))}function f(n){return e.exit("codeFenced"),t(n)}}},ts={AElig:"\xc6",AMP:"&",Aacute:"\xc1",Abreve:"Ă",Acirc:"\xc2",Acy:"А",Afr:"\uD835\uDD04",Agrave:"\xc0",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"\uD835\uDD38",ApplyFunction:"⁡",Aring:"\xc5",Ascr:"\uD835\uDC9C",Assign:"≔",Atilde:"\xc3",Auml:"\xc4",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"\uD835\uDD05",Bopf:"\uD835\uDD39",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"\xa9",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"\xc7",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"\xb8",CenterDot:"\xb7",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"\uD835\uDC9E",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"\uD835\uDD07",DiacriticalAcute:"\xb4",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"\uD835\uDD3B",Dot:"\xa8",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"\xa8",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"\uD835\uDC9F",Dstrok:"Đ",ENG:"Ŋ",ETH:"\xd0",Eacute:"\xc9",Ecaron:"Ě",Ecirc:"\xca",Ecy:"Э",Edot:"Ė",Efr:"\uD835\uDD08",Egrave:"\xc8",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"\uD835\uDD3C",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"\xcb",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"\uD835\uDD09",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"\uD835\uDD3D",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"\uD835\uDD0A",Gg:"⋙",Gopf:"\uD835\uDD3E",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"\uD835\uDCA2",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"\xcd",Icirc:"\xce",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"\xcc",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"\uD835\uDD40",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"\xcf",Jcirc:"Ĵ",Jcy:"Й",Jfr:"\uD835\uDD0D",Jopf:"\uD835\uDD41",Jscr:"\uD835\uDCA5",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"\uD835\uDD0E",Kopf:"\uD835\uDD42",Kscr:"\uD835\uDCA6",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"\uD835\uDD0F",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"\uD835\uDD43",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"\uD835\uDD10",MinusPlus:"∓",Mopf:"\uD835\uDD44",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",Nfr:"\uD835\uDD11",NoBreak:"⁠",NonBreakingSpace:"\xa0",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"\uD835\uDCA9",Ntilde:"\xd1",Nu:"Ν",OElig:"Œ",Oacute:"\xd3",Ocirc:"\xd4",Ocy:"О",Odblac:"Ő",Ofr:"\uD835\uDD12",Ograve:"\xd2",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"\uD835\uDD46",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"\uD835\uDCAA",Oslash:"\xd8",Otilde:"\xd5",Otimes:"⨷",Ouml:"\xd6",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"\uD835\uDD13",Phi:"Φ",Pi:"Π",PlusMinus:"\xb1",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"\uD835\uDCAB",Psi:"Ψ",QUOT:'"',Qfr:"\uD835\uDD14",Qopf:"ℚ",Qscr:"\uD835\uDCAC",RBarr:"⤐",REG:"\xae",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"\uD835\uDD16",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"\uD835\uDD4A",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"\uD835\uDCAE",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"\xde",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"\uD835\uDD17",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"\uD835\uDD4B",TripleDot:"⃛",Tscr:"\uD835\uDCAF",Tstrok:"Ŧ",Uacute:"\xda",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"\xdb",Ucy:"У",Udblac:"Ű",Ufr:"\uD835\uDD18",Ugrave:"\xd9",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"\uD835\uDD4C",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"\uD835\uDCB0",Utilde:"Ũ",Uuml:"\xdc",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"\uD835\uDD19",Vopf:"\uD835\uDD4D",Vscr:"\uD835\uDCB1",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"\uD835\uDD1A",Wopf:"\uD835\uDD4E",Wscr:"\uD835\uDCB2",Xfr:"\uD835\uDD1B",Xi:"Ξ",Xopf:"\uD835\uDD4F",Xscr:"\uD835\uDCB3",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"\xdd",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"\uD835\uDD1C",Yopf:"\uD835\uDD50",Yscr:"\uD835\uDCB4",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"\uD835\uDCB5",aacute:"\xe1",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"\xe2",acute:"\xb4",acy:"а",aelig:"\xe6",af:"⁡",afr:"\uD835\uDD1E",agrave:"\xe0",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"\xc5",angzarr:"⍼",aogon:"ą",aopf:"\uD835\uDD52",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"\xe5",ascr:"\uD835\uDCB6",ast:"*",asymp:"≈",asympeq:"≍",atilde:"\xe3",auml:"\xe4",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"\uD835\uDD1F",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"\uD835\uDD53",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"\xa6",bscr:"\uD835\uDCB7",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"\xe7",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"\xb8",cemptyv:"⦲",cent:"\xa2",centerdot:"\xb7",cfr:"\uD835\uDD20",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"\xae",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"\uD835\uDD54",coprod:"∐",copy:"\xa9",copysr:"℗",crarr:"↵",cross:"✗",cscr:"\uD835\uDCB8",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"\xa4",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"\xb0",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"\uD835\uDD21",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"\xa8",digamma:"ϝ",disin:"⋲",div:"\xf7",divide:"\xf7",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"\uD835\uDD55",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"\uD835\uDCB9",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"\xe9",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"\xea",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"\uD835\uDD22",eg:"⪚",egrave:"\xe8",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"\uD835\uDD56",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"\xf0",euml:"\xeb",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"\uD835\uDD23",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"\uD835\uDD57",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"\xbd",frac13:"⅓",frac14:"\xbc",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"\xbe",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"\uD835\uDCBB",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"\uD835\uDD24",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"\uD835\uDD58",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"\xbd",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"\uD835\uDD25",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"\uD835\uDD59",horbar:"―",hscr:"\uD835\uDCBD",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"\xed",ic:"⁣",icirc:"\xee",icy:"и",iecy:"е",iexcl:"\xa1",iff:"⇔",ifr:"\uD835\uDD26",igrave:"\xec",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"\uD835\uDD5A",iota:"ι",iprod:"⨼",iquest:"\xbf",iscr:"\uD835\uDCBE",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"\xef",jcirc:"ĵ",jcy:"й",jfr:"\uD835\uDD27",jmath:"ȷ",jopf:"\uD835\uDD5B",jscr:"\uD835\uDCBF",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"\uD835\uDD28",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"\uD835\uDD5C",kscr:"\uD835\uDCC0",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"\xab",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"\uD835\uDD29",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"\uD835\uDD5D",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"\uD835\uDCC1",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"\xaf",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"\uD835\uDD2A",mho:"℧",micro:"\xb5",mid:"∣",midast:"*",midcir:"⫰",middot:"\xb7",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"\uD835\uDD5E",mp:"∓",mscr:"\uD835\uDCC2",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:"\xa0",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"\uD835\uDD2B",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"\uD835\uDD5F",not:"\xac",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"\uD835\uDCC3",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"\xf1",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"\xf3",oast:"⊛",ocir:"⊚",ocirc:"\xf4",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"\uD835\uDD2C",ogon:"˛",ograve:"\xf2",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"\uD835\uDD60",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"\xaa",ordm:"\xba",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"\xf8",osol:"⊘",otilde:"\xf5",otimes:"⊗",otimesas:"⨶",ouml:"\xf6",ovbar:"⌽",par:"∥",para:"\xb6",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"\uD835\uDD2D",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"\xb1",plussim:"⨦",plustwo:"⨧",pm:"\xb1",pointint:"⨕",popf:"\uD835\uDD61",pound:"\xa3",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"\uD835\uDCC5",psi:"ψ",puncsp:" ",qfr:"\uD835\uDD2E",qint:"⨌",qopf:"\uD835\uDD62",qprime:"⁗",qscr:"\uD835\uDCC6",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"\xbb",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"\xae",rfisht:"⥽",rfloor:"⌋",rfr:"\uD835\uDD2F",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"\uD835\uDD63",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"\uD835\uDCC7",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"\xa7",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"\uD835\uDD30",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"\xad",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"\uD835\uDD64",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"\uD835\uDCC8",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"\xaf",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"\xdf",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"\uD835\uDD31",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"\xfe",tilde:"˜",times:"\xd7",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"\uD835\uDD65",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"\uD835\uDCC9",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"\xfa",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"\xfb",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"\uD835\uDD32",ugrave:"\xf9",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"\xa8",uogon:"ų",uopf:"\uD835\uDD66",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"\uD835\uDCCA",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"\xfc",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"\uD835\uDD33",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"\uD835\uDD67",vprop:"∝",vrtri:"⊳",vscr:"\uD835\uDCCB",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"\uD835\uDD34",wopf:"\uD835\uDD68",wp:"℘",wr:"≀",wreath:"≀",wscr:"\uD835\uDCCC",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"\uD835\uDD35",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"\uD835\uDD69",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"\uD835\uDCCD",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"\xfd",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"\xa5",yfr:"\uD835\uDD36",yicy:"ї",yopf:"\uD835\uDD6A",yscr:"\uD835\uDCCE",yucy:"ю",yuml:"\xff",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"\uD835\uDD37",zhcy:"ж",zigrarr:"⇝",zopf:"\uD835\uDD6B",zscr:"\uD835\uDCCF",zwj:"‍",zwnj:"‌"},tu={}.hasOwnProperty;function tc(e){return!!tu.call(ts,e)&&ts[e]}let tp={name:"characterReference",tokenize:function(e,t,n){let r,o;let i=this,l=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),a};function a(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),r=31,o=eI,u(t))}function s(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,o=eq,u):(e.enter("characterReferenceValue"),r=7,o=eD,u(t))}function u(a){if(59===a&&l){let r=e.exit("characterReferenceValue");return o!==eI||tc(i.sliceSerialize(r))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(a)}return o(a)&&l++<r?(e.consume(a),u):n(a)}}},td={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return eL(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}},th={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),eF(e,t,"linePrefix")}}};function tf(e,t,n){let r=[],o=-1;for(;++o<e.length;){let i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}let tm={name:"labelEnd",resolveAll:function(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),"labelImage"===r.type||"labelLink"===r.type||"labelEnd"===r.type){let e="labelImage"===r.type?4:2;r.type="data",t+=e}}return e.length!==n.length&&ev(e,0,e.length,n),e},resolveTo:function(e,t){let n,r,o,i,l=e.length,a=0;for(;l--;)if(n=e[l][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[l][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(o){if("enter"===e[l][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=l,"labelLink"!==n.type)){a=2;break}}else"labelEnd"===n.type&&(o=l);let s={type:"labelLink"===e[r][1].type?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[r][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[r+a+2][1].end},end:{...e[o-2][1].start}};return i=ek(i=[["enter",s,t],["enter",u,t]],e.slice(r+1,r+a+3)),i=ek(i,[["enter",c,t]]),i=ek(i,tf(t.parser.constructs.insideSpan.null,e.slice(r+a+4,o-3),t)),i=ek(i,[["exit",c,t],e[o-2],e[o-1],["exit",u,t]]),i=ek(i,e.slice(o+1)),i=ek(i,[["exit",s,t]]),ev(e,r,e.length,i),e},tokenize:function(e,t,n){let r,o;let i=this,l=i.events.length;for(;l--;)if(("labelImage"===i.events[l][1].type||"labelLink"===i.events[l][1].type)&&!i.events[l][1]._balanced){r=i.events[l][1];break}return function(t){return r?r._inactive?c(t):(o=i.parser.defined.includes(e9(i.sliceSerialize({start:r.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a):n(t)};function a(t){return 40===t?e.attempt(tg,u,o?u:c)(t):91===t?e.attempt(ty,u,o?s:c)(t):o?u(t):c(t)}function s(t){return e.attempt(tb,u,c)(t)}function u(e){return t(e)}function c(e){return r._balanced=!0,n(e)}}},tg={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return eN(t)?e6(e,o)(t):o(t)}function o(t){return 41===t?u(t):e4(e,i,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function i(t){return eN(t)?e6(e,a)(t):u(t)}function l(e){return n(e)}function a(t){return 34===t||39===t||40===t?e5(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):u(t)}function s(t){return eN(t)?e6(e,u)(t):u(t)}function u(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},ty={tokenize:function(e,t,n){let r=this;return function(t){return e3.call(r,e,o,i,"reference","referenceMarker","referenceString")(t)};function o(e){return r.parser.defined.includes(e9(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function i(e){return n(e)}}},tb={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}},tv={name:"labelStartImage",resolveAll:tm.resolveAll,tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),o};function o(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),i):n(t)}function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}};function tk(e){return null===e||eN(e)||eM(e)?1:eR(e)?2:void 0}let tx={name:"attention",resolveAll:function(e,t){let n,r,o,i,l,a,s,u,c=-1;for(;++c<e.length;)if("enter"===e[c][0]&&"attentionSequence"===e[c][1].type&&e[c][1]._close){for(n=c;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[c][1]).charCodeAt(0)){if((e[n][1]._close||e[c][1]._open)&&(e[c][1].end.offset-e[c][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[c][1].end.offset-e[c][1].start.offset)%3))continue;a=e[n][1].end.offset-e[n][1].start.offset>1&&e[c][1].end.offset-e[c][1].start.offset>1?2:1;let p={...e[n][1].end},d={...e[c][1].start};tw(p,-a),tw(d,a),i={type:a>1?"strongSequence":"emphasisSequence",start:p,end:{...e[n][1].end}},l={type:a>1?"strongSequence":"emphasisSequence",start:{...e[c][1].start},end:d},o={type:a>1?"strongText":"emphasisText",start:{...e[n][1].end},end:{...e[c][1].start}},r={type:a>1?"strong":"emphasis",start:{...i.start},end:{...l.end}},e[n][1].end={...i.start},e[c][1].start={...l.end},s=[],e[n][1].end.offset-e[n][1].start.offset&&(s=ek(s,[["enter",e[n][1],t],["exit",e[n][1],t]])),s=ek(s,[["enter",r,t],["enter",i,t],["exit",i,t],["enter",o,t]]),s=ek(s,tf(t.parser.constructs.insideSpan.null,e.slice(n+1,c),t)),s=ek(s,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",r,t]]),e[c][1].end.offset-e[c][1].start.offset?(u=2,s=ek(s,[["enter",e[c][1],t],["exit",e[c][1],t]])):u=0,ev(e,n-1,c-n+3,s),c=n+s.length-u-2;break}}for(c=-1;++c<e.length;)"attentionSequence"===e[c][1].type&&(e[c][1].type="data");return e},tokenize:function(e,t){let n;let r=this.parser.constructs.attentionMarkers.null,o=this.previous,i=tk(o);return function(l){return n=l,e.enter("attentionSequence"),function l(a){if(a===n)return e.consume(a),l;let s=e.exit("attentionSequence"),u=tk(a),c=!u||2===u&&i||r.includes(a),p=!i||2===i&&u||r.includes(o);return s._open=!!(42===n?c:c&&(i||!p)),s._close=!!(42===n?p:p&&(u||!c)),t(a)}(l)}}};function tw(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}let tS={name:"labelStartLink",resolveAll:tm.resolveAll,tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),o};function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}}},tT={42:eX,43:eX,45:eX,48:eX,49:eX,50:eX,51:eX,52:eX,53:eX,54:eX,55:eX,56:eX,57:eX,62:e2},tC={91:{name:"definition",tokenize:function(e,t,n){let r;let o=this;return function(t){return e.enter("definition"),e3.call(o,e,i,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)};function i(t){return(r=e9(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),58===t)?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),l):n(t)}function l(t){return eN(t)?e6(e,a)(t):a(t)}function a(t){return e4(e,s,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function s(t){return e.attempt(e7,u,u)(t)}function u(t){return eO(t)?eF(e,c,"whitespace")(t):c(t)}function c(i){return null===i||eP(i)?(e.exit("definition"),o.parser.defined.push(r),t(i)):n(i)}}}},tI={[-2]:e8,[-1]:e8,32:e8},tE={35:{name:"headingAtx",resolve:function(e,t){let n,r,o=e.length-2,i=3;return"whitespace"===e[3][1].type&&(i+=2),o-2>i&&"whitespace"===e[o][1].type&&(o-=2),"atxHeadingSequence"===e[o][1].type&&(i===o-1||o-4>i&&"whitespace"===e[o-2][1].type)&&(o-=i+1===o?2:4),o>i&&(n={type:"atxHeadingText",start:e[i][1].start,end:e[o][1].end},r={type:"chunkText",start:e[i][1].start,end:e[o][1].end,contentType:"text"},ev(e,i,o-i+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]])),e},tokenize:function(e,t,n){let r=0;return function(o){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),function o(i){return 35===i&&r++<6?(e.consume(i),o):null===i||eN(i)?(e.exit("atxHeadingSequence"),function n(r){return 35===r?(e.enter("atxHeadingSequence"),function t(r){return 35===r?(e.consume(r),t):(e.exit("atxHeadingSequence"),n(r))}(r)):null===r||eP(r)?(e.exit("atxHeading"),t(r)):eO(r)?eF(e,n,"whitespace")(r):(e.enter("atxHeadingText"),function t(r){return null===r||35===r||eN(r)?(e.exit("atxHeadingText"),n(r)):(e.consume(r),t)}(r))}(i)):n(i)}(o)}}},42:e$,45:[tt,e$],60:{concrete:!0,name:"htmlFlow",resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},tokenize:function(e,t,n){let r,o,i,l,a;let s=this;return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),u};function u(l){return 33===l?(e.consume(l),c):47===l?(e.consume(l),o=!0,h):63===l?(e.consume(l),r=3,s.interrupt?t:P):eC(l)?(e.consume(l),i=String.fromCharCode(l),f):n(l)}function c(o){return 45===o?(e.consume(o),r=2,p):91===o?(e.consume(o),r=5,l=0,d):eC(o)?(e.consume(o),r=4,s.interrupt?t:P):n(o)}function p(r){return 45===r?(e.consume(r),s.interrupt?t:P):n(r)}function d(r){let o="CDATA[";return r===o.charCodeAt(l++)?(e.consume(r),l===o.length)?s.interrupt?t:T:d:n(r)}function h(t){return eC(t)?(e.consume(t),i=String.fromCharCode(t),f):n(t)}function f(l){if(null===l||47===l||62===l||eN(l)){let a=47===l,u=i.toLowerCase();return!a&&!o&&tr.includes(u)?(r=1,s.interrupt?t(l):T(l)):tn.includes(i.toLowerCase())?(r=6,a)?(e.consume(l),m):s.interrupt?t(l):T(l):(r=7,s.interrupt&&!s.parser.lazy[s.now().line]?n(l):o?function t(n){return eO(n)?(e.consume(n),t):w(n)}(l):g(l))}return 45===l||eI(l)?(e.consume(l),i+=String.fromCharCode(l),f):n(l)}function m(r){return 62===r?(e.consume(r),s.interrupt?t:T):n(r)}function g(t){return 47===t?(e.consume(t),w):58===t||95===t||eC(t)?(e.consume(t),y):eO(t)?(e.consume(t),g):w(t)}function y(t){return 45===t||46===t||58===t||95===t||eI(t)?(e.consume(t),y):b(t)}function b(t){return 61===t?(e.consume(t),v):eO(t)?(e.consume(t),b):g(t)}function v(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),a=t,k):eO(t)?(e.consume(t),v):function t(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||eN(n)?b(n):(e.consume(n),t)}(t)}function k(t){return t===a?(e.consume(t),a=null,x):null===t||eP(t)?n(t):(e.consume(t),k)}function x(e){return 47===e||62===e||eO(e)?g(e):n(e)}function w(t){return 62===t?(e.consume(t),S):n(t)}function S(t){return null===t||eP(t)?T(t):eO(t)?(e.consume(t),S):n(t)}function T(t){return 45===t&&2===r?(e.consume(t),A):60===t&&1===r?(e.consume(t),D):62===t&&4===r?(e.consume(t),N):63===t&&3===r?(e.consume(t),P):93===t&&5===r?(e.consume(t),L):eP(t)&&(6===r||7===r)?(e.exit("htmlFlowData"),e.check(to,O,C)(t)):null===t||eP(t)?(e.exit("htmlFlowData"),C(t)):(e.consume(t),T)}function C(t){return e.check(ti,I,O)(t)}function I(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),E}function E(t){return null===t||eP(t)?C(t):(e.enter("htmlFlowData"),T(t))}function A(t){return 45===t?(e.consume(t),P):T(t)}function D(t){return 47===t?(e.consume(t),i="",q):T(t)}function q(t){if(62===t){let n=i.toLowerCase();return tr.includes(n)?(e.consume(t),N):T(t)}return eC(t)&&i.length<8?(e.consume(t),i+=String.fromCharCode(t),q):T(t)}function L(t){return 93===t?(e.consume(t),P):T(t)}function P(t){return 62===t?(e.consume(t),N):45===t&&2===r?(e.consume(t),P):T(t)}function N(t){return null===t||eP(t)?(e.exit("htmlFlowData"),O(t)):(e.consume(t),N)}function O(n){return e.exit("htmlFlow"),t(n)}}},61:tt,95:e$,96:ta,126:ta},tA={38:tp,92:td},tD={[-5]:th,[-4]:th,[-3]:th,33:tv,38:tp,42:tx,60:[{name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o};function o(t){return eC(t)?(e.consume(t),i):64===t?n(t):a(t)}function i(t){return 43===t||45===t||46===t||eI(t)?(r=1,function t(n){return 58===n?(e.consume(n),r=0,l):(43===n||45===n||46===n||eI(n))&&r++<32?(e.consume(n),t):(r=0,a(n))}(t)):a(t)}function l(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||eA(r)?n(r):(e.consume(r),l)}function a(t){return 64===t?(e.consume(t),s):eE(t)?(e.consume(t),a):n(t)}function s(o){return eI(o)?function o(i){return 46===i?(e.consume(i),r=0,s):62===i?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):function t(i){if((45===i||eI(i))&&r++<63){let n=45===i?t:o;return e.consume(i),n}return n(i)}(i)}(o):n(o)}}},{name:"htmlText",tokenize:function(e,t,n){let r,o,i;let l=this;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),a};function a(t){return 33===t?(e.consume(t),s):47===t?(e.consume(t),k):63===t?(e.consume(t),b):eC(t)?(e.consume(t),w):n(t)}function s(t){return 45===t?(e.consume(t),u):91===t?(e.consume(t),o=0,h):eC(t)?(e.consume(t),y):n(t)}function u(t){return 45===t?(e.consume(t),d):n(t)}function c(t){return null===t?n(t):45===t?(e.consume(t),p):eP(t)?(i=c,q(t)):(e.consume(t),c)}function p(t){return 45===t?(e.consume(t),d):c(t)}function d(e){return 62===e?D(e):45===e?p(e):c(e)}function h(t){let r="CDATA[";return t===r.charCodeAt(o++)?(e.consume(t),o===r.length?f:h):n(t)}function f(t){return null===t?n(t):93===t?(e.consume(t),m):eP(t)?(i=f,q(t)):(e.consume(t),f)}function m(t){return 93===t?(e.consume(t),g):f(t)}function g(t){return 62===t?D(t):93===t?(e.consume(t),g):f(t)}function y(t){return null===t||62===t?D(t):eP(t)?(i=y,q(t)):(e.consume(t),y)}function b(t){return null===t?n(t):63===t?(e.consume(t),v):eP(t)?(i=b,q(t)):(e.consume(t),b)}function v(e){return 62===e?D(e):b(e)}function k(t){return eC(t)?(e.consume(t),x):n(t)}function x(t){return 45===t||eI(t)?(e.consume(t),x):function t(n){return eP(n)?(i=t,q(n)):eO(n)?(e.consume(n),t):D(n)}(t)}function w(t){return 45===t||eI(t)?(e.consume(t),w):47===t||62===t||eN(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),D):58===t||95===t||eC(t)?(e.consume(t),T):eP(t)?(i=S,q(t)):eO(t)?(e.consume(t),S):D(t)}function T(t){return 45===t||46===t||58===t||95===t||eI(t)?(e.consume(t),T):function t(n){return 61===n?(e.consume(n),C):eP(n)?(i=t,q(n)):eO(n)?(e.consume(n),t):S(n)}(t)}function C(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),r=t,I):eP(t)?(i=C,q(t)):eO(t)?(e.consume(t),C):(e.consume(t),E)}function I(t){return t===r?(e.consume(t),r=void 0,A):null===t?n(t):eP(t)?(i=I,q(t)):(e.consume(t),I)}function E(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||eN(t)?S(t):(e.consume(t),E)}function A(e){return 47===e||62===e||eN(e)?S(e):n(e)}function D(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function q(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),L}function L(t){return eO(t)?eF(e,P,"linePrefix",l.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):P(t)}function P(t){return e.enter("htmlTextData"),i(t)}}}],91:tS,92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return eP(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}},td],93:tm,95:tx,96:{name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let t,n,r=e.length-4,o=3;if(("lineEnding"===e[3][1].type||"space"===e[o][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type)){for(t=o;++t<r;)if("codeTextData"===e[t][1].type){e[o][1].type="codeTextPadding",e[r][1].type="codeTextPadding",o+=2,r-=2;break}}for(t=o-1,r++;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):(t===r||"lineEnding"===e[t][1].type)&&(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},tokenize:function(e,t,n){let r,o,i=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),function t(n){return 96===n?(e.consume(n),i++,t):(e.exit("codeTextSequence"),l(n))}(t)};function l(s){return null===s?n(s):32===s?(e.enter("space"),e.consume(s),e.exit("space"),l):96===s?(o=e.enter("codeTextSequence"),r=0,function n(l){return 96===l?(e.consume(l),r++,n):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(l)):(o.type="codeTextData",a(l))}(s)):eP(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),l):(e.enter("codeTextData"),a(s))}function a(t){return null===t||32===t||96===t||eP(t)?(e.exit("codeTextData"),l(t)):(e.consume(t),a)}}}},tq={null:[tx,eG]},tL={null:[42,95]},tP={null:[]},tN=/[\0\t\n\r]/g;function tO(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(65535&n)==65535||(65535&n)==65534||n>1114111?"�":String.fromCodePoint(n)}let tR=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function tM(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){let e=n.charCodeAt(1),t=120===e||88===e;return tO(n.slice(t?2:1),t?16:10)}return tc(n)||e}let tz={}.hasOwnProperty;function tF(e){return{line:e.line,column:e.column,offset:e.offset}}function tB(e,t){if(e)throw Error("Cannot close `"+e.type+"` ("+Q({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Q({start:t.start,end:t.end})+") is open");throw Error("Cannot close document, a token (`"+t.type+"`, "+Q({start:t.start,end:t.end})+") is still open")}function tU(e){let t=this;t.parser=function(n){var r,i;let l,a,s,u;return"string"!=typeof(r={...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})&&(i=r,r=void 0),(function(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(y),autolinkProtocol:u,autolinkEmail:u,atxHeading:r(f),blockQuote:r(function(){return{type:"blockquote",children:[]}}),characterEscape:u,characterReference:u,codeFenced:r(h),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:r(h,o),codeText:r(function(){return{type:"inlineCode",value:""}},o),codeTextData:u,data:u,codeFlowValue:u,definition:r(function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:r(function(){return{type:"emphasis",children:[]}}),hardBreakEscape:r(m),hardBreakTrailing:r(m),htmlFlow:r(g,o),htmlFlowData:u,htmlText:r(g,o),htmlTextData:u,image:r(function(){return{type:"image",title:null,url:"",alt:null}}),label:o,link:r(y),listItem:r(function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}),listItemValue:function(e){this.data.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0)},listOrdered:r(b,function(){this.data.expectingFirstListItemValue=!0}),listUnordered:r(b),paragraph:r(function(){return{type:"paragraph",children:[]}}),reference:function(){this.data.referenceType="collapsed"},referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:r(f),strong:r(function(){return{type:"strong",children:[]}}),thematicBreak:r(function(){return{type:"thematicBreak"}})},exit:{atxHeading:l(),atxHeadingSequence:function(e){let t=this.stack[this.stack.length-1];if(!t.depth){let n=this.sliceSerialize(e).length;t.depth=n}},autolink:l(),autolinkEmail:function(e){c.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:function(e){c.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)},blockQuote:l(),characterEscapeValue:c,characterReferenceMarkerHexadecimal:d,characterReferenceMarkerNumeric:d,characterReferenceValue:function(e){let t;let n=this.sliceSerialize(e),r=this.data.characterReferenceType;r?(t=tO(n,"characterReferenceMarkerNumeric"===r?10:16),this.data.characterReferenceType=void 0):t=tc(n);let o=this.stack[this.stack.length-1];o.value+=t},characterReference:function(e){this.stack.pop().position.end=tF(e.end)},codeFenced:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}),codeFencedFence:function(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)},codeFencedFenceInfo:function(){let e=this.resume();this.stack[this.stack.length-1].lang=e},codeFencedFenceMeta:function(){let e=this.resume();this.stack[this.stack.length-1].meta=e},codeFlowValue:c,codeIndented:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),codeTextData:c,data:c,definition:l(),definitionDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},definitionLabelString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=e9(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},emphasis:l(),hardBreakEscape:l(p),hardBreakTrailing:l(p),htmlFlow:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlFlowData:c,htmlText:l(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlTextData:c,image:l(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),label:function(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){let t=e.children;n.children=t}else n.alt=t},labelText:function(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=t.replace(tR,tM),n.identifier=e9(t).toLowerCase()},lineEnding:function(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){n.children[n.children.length-1].position.end=tF(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(u.call(this,e),c.call(this,e))},link:l(function(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=e9(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"},resourceDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},resourceTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},resource:function(){this.data.inReference=void 0},setextHeading:l(function(){this.data.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:function(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2},setextHeadingText:function(){this.data.setextHeadingSlurpLineEnding=!0},strong:l(),thematicBreak:l()}};(function e(t,n){let r=-1;for(;++r<n.length;){let o=n[r];Array.isArray(o)?e(t,o):function(e,t){let n;for(n in t)if(tz.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r)}}}(t,o)}})(t,(e||{}).mdastExtensions||[]);let n={};return function(e){let r={type:"root",children:[]},l={stack:[r],tokenStack:[],config:t,enter:i,exit:a,buffer:o,resume:s,data:n},u=[],c=-1;for(;++c<e.length;)("listOrdered"===e[c][1].type||"listUnordered"===e[c][1].type)&&("enter"===e[c][0]?u.push(c):c=function(e,t,n){let r,o,i,l,a=t-1,s=-1,u=!1;for(;++a<=n;){let t=e[a];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?s++:s--,l=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||l||s||i||(i=a),l=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:l=void 0}if(!s&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===s&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let l=a;for(o=void 0;l--;){let t=e[l];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;o&&(e[o][1].type="lineEndingBlank",u=!0),t[1].type="lineEnding",o=l}else if("linePrefix"===t[1].type||"blockQuotePrefix"===t[1].type||"blockQuotePrefixWhitespace"===t[1].type||"blockQuoteMarker"===t[1].type||"listItemIndent"===t[1].type);else break}i&&(!o||i<o)&&(r._spread=!0),r.end=Object.assign({},o?e[o][1].start:t[1].end),e.splice(o||a,0,["exit",r,t[2]]),a++,n++}if("listItemPrefix"===t[1].type){let o={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=o,e.splice(a,0,["enter",o,t[2]]),a++,n++,i=void 0,l=!0}}}return e[t][1]._spread=u,n}(e,u.pop(),c));for(c=-1;++c<e.length;){let n=t[e[c][0]];tz.call(n,e[c][1].type)&&n[e[c][1].type].call(Object.assign({sliceSerialize:e[c][2].sliceSerialize},l),e[c][1])}if(l.tokenStack.length>0){let e=l.tokenStack[l.tokenStack.length-1];(e[1]||tB).call(l,void 0,e[0])}for(r.position={start:tF(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:tF(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},c=-1;++c<t.transforms.length;)r=t.transforms[c](r)||r;return r};function r(e,t){return function(n){i.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:"fragment",children:[]})}function i(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:tF(t.start),end:void 0}}function l(e){return function(t){e&&e.call(this,t),a.call(this,t)}}function a(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||tB).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+Q({start:e.start,end:e.end})+"): it’s not open");n.position.end=tF(e.end)}function s(){return ey(this.stack.pop(),"boolean"!=typeof eg.includeImageAlt||eg.includeImageAlt,"boolean"!=typeof eg.includeHtml||eg.includeHtml)}function u(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];n&&"text"===n.type||((n={type:"text",value:""}).position={start:tF(e.start),end:void 0},t.push(n)),this.stack.push(n)}function c(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=tF(e.end)}function p(){this.data.atHardBreak=!0}function d(e){this.data.characterReferenceType=e.type}function h(){return{type:"code",lang:null,meta:null,value:""}}function f(){return{type:"heading",depth:0,children:[]}}function m(){return{type:"break"}}function g(){return{type:"html",value:""}}function y(){return{type:"link",title:null,url:"",children:[]}}function b(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}})(i)(function(e){for(;!eS(e););return e}((function(e){let t={constructs:function(e){let t={},n=-1;for(;++n<e.length;)(function(e,t){let n;for(n in t){let r;let o=(eT.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];if(i)for(r in i){eT.call(o,r)||(o[r]=[]);let e=i[r];(function(e,t){let n=-1,r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);ev(e,0,0,r)})(o[r],Array.isArray(e)?e:e?[e]:[])}}})(t,e[n]);return t}([o,...(e||{}).extensions||[]]),content:n(eB),defined:[],document:n(eU),flow:n(e_),lazy:{},string:n(eW),text:n(eK)};return t;function n(e){return function(n){return function(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},o={},i=[],l=[],a=[],s={attempt:f(function(e,t){m(e,t.from)}),check:f(h),consume:function(e){eP(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,g()):-1!==e&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=e},enter:function(e,t){let n=t||{};return n.type=e,n.start=d(),u.events.push(["enter",n,u]),a.push(n),n},exit:function(e){let t=a.pop();return t.end=d(),u.events.push(["exit",t,u]),t},interrupt:f(h,{interrupt:!0})},u={code:null,containerState:{},defineSkip:function(e){o[e.line]=e.column,g()},events:[],now:d,parser:e,previous:null,sliceSerialize:function(e,t){return function(e,t){let n,r=-1,o=[];for(;++r<e.length;){let i;let l=e[r];if("string"==typeof l)i=l;else switch(l){case -5:i="\r";break;case -4:i="\n";break;case -3:i="\r\n";break;case -2:i=t?" ":"	";break;case -1:if(!t&&n)continue;i=" ";break;default:i=String.fromCharCode(l)}n=-2===l,o.push(i)}return o.join("")}(p(e),t)},sliceStream:p,write:function(e){return(l=ek(l,e),function(){let e;for(;r._index<l.length;){let n=l[r._index];if("string"==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;){var t;t=n.charCodeAt(r._bufferIndex),c=c(t)}else c=c(n)}}(),null!==l[l.length-1])?[]:(m(t,0),u.events=tf(i,u.events,u),u.events)}},c=t.tokenize.call(u,s);return t.resolveAll&&i.push(t),u;function p(e){return function(e,t){let n;let r=t.start._index,o=t.start._bufferIndex,i=t.end._index,l=t.end._bufferIndex;if(r===i)n=[e[r].slice(o,l)];else{if(n=e.slice(r,i),o>-1){let e=n[0];"string"==typeof e?n[0]=e.slice(o):n.shift()}l>0&&n.push(e[i].slice(0,l))}return n}(l,e)}function d(){let{_bufferIndex:e,_index:t,line:n,column:o,offset:i}=r;return{_bufferIndex:e,_index:t,line:n,column:o,offset:i}}function h(e,t){t.restore()}function f(e,t){return function(n,o,i){let l,c,p,h;return Array.isArray(n)?f(n):"tokenize"in n?f([n]):function(e){let t=null!==e&&n[e],r=null!==e&&n.null;return f([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(e)};function f(e){return(l=e,c=0,0===e.length)?i:m(e[c])}function m(e){return function(n){return(h=function(){let e=d(),t=u.previous,n=u.currentConstruct,o=u.events.length,i=Array.from(a);return{from:o,restore:function(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=o,a=i,g()}}}(),p=e,e.partial||(u.currentConstruct=e),e.name&&u.parser.constructs.disable.null.includes(e.name))?b(n):e.tokenize.call(t?Object.assign(Object.create(u),t):u,s,y,b)(n)}}function y(t){return e(p,h),o}function b(e){return(h.restore(),++c<l.length)?m(l[c]):i}}}function m(e,t){e.resolveAll&&!i.includes(e)&&i.push(e),e.resolve&&ev(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function g(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}(t,e,n)}}})(i).document().write((a=1,s="",u=!0,function(e,t,n){let r,o,i,c,p;let d=[];for(e=s+("string"==typeof e?e.toString():new TextDecoder(t||void 0).decode(e)),i=0,s="",u&&(65279===e.charCodeAt(0)&&i++,u=void 0);i<e.length;){if(tN.lastIndex=i,c=(r=tN.exec(e))&&void 0!==r.index?r.index:e.length,p=e.charCodeAt(c),!r){s=e.slice(i);break}if(10===p&&i===c&&l)d.push(-3),l=void 0;else switch(l&&(d.push(-5),l=void 0),i<c&&(d.push(e.slice(i,c)),a+=c-i),p){case 0:d.push(65533),a++;break;case 9:for(o=4*Math.ceil(a/4),d.push(-2);a++<o;)d.push(-1);break;case 10:d.push(-4),a=1;break;default:l=!0,a=1}i=c+1}return n&&(l&&d.push(-5),s&&d.push(s),d.push(null)),d})(n,r,!0))))}}let tj="object"==typeof self?self:globalThis,tY=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=o=>{if(e.has(o))return e.get(o);let[i,l]=t[o];switch(i){case 0:case -1:return n(l,o);case 1:{let e=n([],o);for(let t of l)e.push(r(t));return e}case 2:{let e=n({},o);for(let[t,n]of l)e[r(t)]=r(n);return e}case 3:return n(new Date(l),o);case 4:{let{source:e,flags:t}=l;return n(new RegExp(e,t),o)}case 5:{let e=n(new Map,o);for(let[t,n]of l)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,o);for(let t of l)e.add(r(t));return e}case 7:{let{name:e,message:t}=l;return n(new tj[e](t),o)}case 8:return n(BigInt(l),o);case"BigInt":return n(Object(BigInt(l)),o);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{let{buffer:e}=new Uint8Array(l);return n(new DataView(e),l)}}return n(new tj[i](l),o)};return r},tH=e=>tY(new Map,e)(0),{toString:tV}={},{keys:t_}=Object,tG=e=>{let t=typeof e;if("object"!==t||!e)return[0,t];let n=tV.call(e).slice(8,-1);switch(n){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,n]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},tW=([e,t])=>0===e&&("function"===t||"symbol"===t),tK=(e,t,n,r)=>{let o=(e,t)=>{let o=r.push(e)-1;return n.set(t,o),o},i=r=>{if(n.has(r))return n.get(r);let[l,a]=tG(r);switch(l){case 0:{let t=r;switch(a){case"bigint":l=8,t=r.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+a);t=null;break;case"undefined":return o([-1],r)}return o([l,t],r)}case 1:{if(a){let e=r;return"DataView"===a?e=new Uint8Array(r.buffer):"ArrayBuffer"===a&&(e=new Uint8Array(r)),o([a,[...e]],r)}let e=[],t=o([l,e],r);for(let t of r)e.push(i(t));return t}case 2:{if(a)switch(a){case"BigInt":return o([a,r.toString()],r);case"Boolean":case"Number":case"String":return o([a,r.valueOf()],r)}if(t&&"toJSON"in r)return i(r.toJSON());let n=[],s=o([l,n],r);for(let t of t_(r))(e||!tW(tG(r[t])))&&n.push([i(t),i(r[t])]);return s}case 3:return o([l,r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return o([l,{source:e,flags:t}],r)}case 5:{let t=[],n=o([l,t],r);for(let[n,o]of r)(e||!(tW(tG(n))||tW(tG(o))))&&t.push([i(n),i(o)]);return n}case 6:{let t=[],n=o([l,t],r);for(let n of r)(e||!tW(tG(n)))&&t.push(i(n));return n}}let{message:s}=r;return o([l,{name:a,message:s}],r)};return i},tJ=(e,{json:t,lossy:n}={})=>{let r=[];return tK(!(t||n),!!t,new Map,r)(e),r},tQ="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?tH(tJ(e,t)):structuredClone(e):(e,t)=>tH(tJ(e,t));function tZ(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let i=e.charCodeAt(n),l="";if(37===i&&eI(e.charCodeAt(n+1))&&eI(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(l=String.fromCharCode(i));else if(i>55295&&i<57344){let t=e.charCodeAt(n+1);i<56320&&t>56319&&t<57344?(l=String.fromCharCode(i,t),o=1):l="�"}else l=String.fromCharCode(i);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+o+1,l=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function t$(e,t){let n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function tX(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}let t1=function(e){if(null==e)return t2;if("function"==typeof e)return t0(e);if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=t1(e[n]);return t0(function(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1})}(e):t0(function(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0});if("string"==typeof e)return t0(function(t){return t&&t.type===e});throw Error("Expected function, string, or object as test")};function t0(e){return function(t,n,r){var o;return!!(null!==(o=t)&&"object"==typeof o&&"type"in o&&e.call(this,t,"number"==typeof n?n:void 0,r||void 0))}}function t2(){return!0}let t4=[];function t3(e,t,n,r){let o,i,l;"function"==typeof t&&"function"!=typeof n?(i=void 0,l=t,o=n):(i=t,l=n,o=r),function(e,t,n,r){let o;"function"==typeof t&&"function"!=typeof n?(r=n,n=t):o=t;let i=t1(o),l=r?-1:1;(function e(o,a,s){let u=o&&"object"==typeof o?o:{};if("string"==typeof u.type){let e="string"==typeof u.tagName?u.tagName:"string"==typeof u.name?u.name:void 0;Object.defineProperty(c,"name",{value:"node (\x1b[33m"+o.type+(e?"<"+e+">":"")+"\x1b[39m)"})}return c;function c(){var u;let c,p,d,h=t4;if((!t||i(o,a,s[s.length-1]||void 0))&&!1===(h=Array.isArray(u=n(o,s))?u:"number"==typeof u?[!0,u]:null==u?t4:[u])[0])return h;if("children"in o&&o.children&&o.children&&"skip"!==h[0])for(p=(r?o.children.length:-1)+l,d=s.concat(o);p>-1&&p<o.children.length;){if(!1===(c=e(o.children[p],p,d)())[0])return c;p="number"==typeof c[1]?c[1]:p+l}return h}})(e,void 0,[])()}(e,i,function(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return l(e,r,n)},o)}function t5(e,t){let n=t.referenceType,r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),i=o[0];i&&"text"===i.type?i.value="["+i.value:o.unshift({type:"text",value:"["});let l=o[o.length-1];return l&&"text"===l.type?l.value+=r:o.push({type:"text",value:r}),o}function t6(e){let t=e.spread;return null==t?e.children.length>1:t}function t9(e,t,n){let r=0,o=e.length;if(t){let t=e.codePointAt(r);for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(o-1);for(;9===t||32===t;)o--,t=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}let t7={blockquote:function(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){let n=t.value?t.value+"\n":"",r={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i={type:"element",tagName:"pre",properties:{},children:[i=e.applyData(t,i)]},e.patch(t,i),i},delete:function(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){let n;let r="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",o=String(t.identifier).toUpperCase(),i=tZ(o.toLowerCase()),l=e.footnoteOrder.indexOf(o),a=e.footnoteCounts.get(o);void 0===a?(a=0,e.footnoteOrder.push(o),n=e.footnoteOrder.length):n=l+1,a+=1,e.footnoteCounts.set(o,a);let s={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+i,id:r+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(n)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)},heading:function(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t5(e,t);let o={src:tZ(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(o.title=r.title);let i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)},image:function(e,t){let n={src:tZ(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return t5(e,t);let o={href:tZ(r.url||"")};null!==r.title&&void 0!==r.title&&(o.title=r.title);let i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)},link:function(e,t){let n={href:tZ(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){let r=e.all(t),o=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=t6(n[r])}return t}(n):t6(t),i={},l=[];if("boolean"==typeof t.checked){let e;let n=r[0];n&&"element"===n.type&&"p"===n.tagName?e=n:(e={type:"element",tagName:"p",properties:{},children:[]},r.unshift(e)),e.children.length>0&&e.children.unshift({type:"text",value:" "}),e.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let e=r[a];(o||0!==a||"element"!==e.type||"p"!==e.tagName)&&l.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||o?l.push(e):l.push(...e.children)}let s=r[r.length-1];s&&(o||"element"!==s.type||"p"!==s.tagName)&&l.push({type:"text",value:"\n"});let u={type:"element",tagName:"li",properties:i,children:l};return e.patch(t,u),e.applyData(t,u)},list:function(e,t){let n={},r=e.all(t),o=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++o<r.length;){let e=r[o];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)},paragraph:function(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),o.push(n)}if(n.length>0){let r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},i=K(t.children[1]),l=W(t.children[t.children.length-1]);i&&l&&(r.position={start:i,end:l}),o.push(r)}let i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)},tableCell:function(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){let r=n?n.children:void 0,o=0===(r?r.indexOf(t):1)?"th":"td",i=n&&"table"===n.type?n.align:void 0,l=i?i.length:t.children.length,a=-1,s=[];for(;++a<l;){let n=t.children[a],r={},l=i?i[a]:void 0;l&&(r.align=l);let u={type:"element",tagName:o,properties:r,children:[]};n&&(u.children=e.all(n),e.patch(n,u),u=e.applyData(n,u)),s.push(u)}let u={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,u),e.applyData(t,u)},text:function(e,t){let n={type:"text",value:function(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,i=[];for(;r;)i.push(t9(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(t9(t.slice(o),o>0,!1)),i.join("")}(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:t8,yaml:t8,definition:t8,footnoteDefinition:t8};function t8(){}let ne={}.hasOwnProperty,nt={};function nn(e,t){e.position&&(t.position=function(e){let t=K(e),n=W(e);if(t&&n)return{start:t,end:n}}(e))}function nr(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;"string"==typeof t&&("element"===n.type?n.tagName=t:n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}),"element"===n.type&&o&&Object.assign(n.properties,tQ(o)),"children"in n&&n.children&&null!=r&&(n.children=r)}return n}function no(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function ni(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function nl(e,t){let n=function(e,t){let n=t||nt,r=new Map,o=new Map,i={all:function(e){let t=[];if("children"in e){let n=e.children,r=-1;for(;++r<n.length;){let o=i.one(n[r],e);if(o){if(r&&"break"===n[r-1].type&&(Array.isArray(o)||"text"!==o.type||(o.value=ni(o.value)),!Array.isArray(o)&&"element"===o.type)){let e=o.children[0];e&&"text"===e.type&&(e.value=ni(e.value))}Array.isArray(o)?t.push(...o):t.push(o)}}}return t},applyData:nr,definitionById:r,footnoteById:o,footnoteCounts:new Map,footnoteOrder:[],handlers:{...t7,...n.handlers},one:function(e,t){let n=e.type,r=i.handlers[n];if(ne.call(i.handlers,n)&&r)return r(i,e,t);if(i.options.passThrough&&i.options.passThrough.includes(n)){if("children"in e){let{children:t,...n}=e,r=tQ(n);return r.children=i.all(e),r}return tQ(e)}return(i.options.unknownHandler||function(e,t){let n=t.data||{},r="value"in t&&!(ne.call(n,"hProperties")||ne.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)})(i,e,t)},options:n,patch:nn,wrap:no};return t3(e,function(e){if("definition"===e.type||"footnoteDefinition"===e.type){let t="definition"===e.type?r:o,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),i}(e,t),r=n.one(e,void 0),o=function(e){let t="string"==typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||t$,r=e.options.footnoteBackLabel||tX,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[],s=-1;for(;++s<e.footnoteOrder.length;){let o=e.footnoteById.get(e.footnoteOrder[s]);if(!o)continue;let i=e.all(o),l=String(o.identifier).toUpperCase(),u=tZ(l.toLowerCase()),c=0,p=[],d=e.footnoteCounts.get(l);for(;void 0!==d&&++c<=d;){p.length>0&&p.push({type:"text",value:" "});let e="string"==typeof n?n:n(s,c);"string"==typeof e&&(e={type:"text",value:e}),p.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+u+(c>1?"-"+c:""),dataFootnoteBackref:"",ariaLabel:"string"==typeof r?r:r(s,c),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}let h=i[i.length-1];if(h&&"element"===h.type&&"p"===h.tagName){let e=h.children[h.children.length-1];e&&"text"===e.type?e.value+=" ":h.children.push({type:"text",value:" "}),h.children.push(...p)}else i.push(...p);let f={type:"element",tagName:"li",properties:{id:t+"fn-"+u},children:e.wrap(i,!0)};e.patch(o,f),a.push(f)}if(0!==a.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...tQ(l),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:"\n"}]}}(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:"\n"},o),i}function na(e,t){return e&&"run"in e?async function(n,r){let o=nl(n,{file:r,...t});await e.run(o,r)}:function(n,r){return nl(n,{file:r,...e||t})}}function ns(e){if(e)throw e}var nu=n(55149);function nc(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}let np=require("node:path"),nd=require("node:process");function nh(e){return!!(null!==e&&"object"==typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}let nf=require("node:url"),nm=["history","path","basename","stem","extname","dirname"];class ng{constructor(e){let t,n;t=e?nh(e)?{path:e}:"string"==typeof e||function(e){return!!(e&&"object"==typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":nd.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<nm.length;){let e=nm[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)nm.includes(n)||(this[n]=t[n])}get basename(){return"string"==typeof this.path?np.basename(this.path):void 0}set basename(e){nb(e,"basename"),ny(e,"basename"),this.path=np.join(this.dirname||"",e)}get dirname(){return"string"==typeof this.path?np.dirname(this.path):void 0}set dirname(e){nv(this.basename,"dirname"),this.path=np.join(e||"",this.basename)}get extname(){return"string"==typeof this.path?np.extname(this.path):void 0}set extname(e){if(ny(e,"extname"),nv(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=np.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){nh(e)&&(e=(0,nf.fileURLToPath)(e)),nb(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"==typeof this.path?np.basename(this.path,this.extname):void 0}set stem(e){nb(e,"stem"),ny(e,"stem"),this.path=np.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new ee(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return void 0===this.value?"":"string"==typeof this.value?this.value:new TextDecoder(e||void 0).decode(this.value)}}function ny(e,t){if(e&&e.includes(np.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+np.sep+"`")}function nb(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function nv(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}let nk=function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},nx={}.hasOwnProperty;class nw extends nk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=function(){let e=[],t={run:function(...t){let n=-1,r=t.pop();if("function"!=typeof r)throw TypeError("Expected function as last argument, not "+r);(function o(i,...l){let a=e[++n],s=-1;if(i){r(i);return}for(;++s<t.length;)(null===l[s]||void 0===l[s])&&(l[s]=t[s]);t=l,a?(function(e,t){let n;return function(...t){let i;let l=e.length>t.length;l&&t.push(r);try{i=e.apply(this,t)}catch(e){if(l&&n)throw e;return r(e)}l||(i&&i.then&&"function"==typeof i.then?i.then(o,r):i instanceof Error?r(i):o(i))};function r(e,...o){n||(n=!0,t(e,...o))}function o(e){r(null,e)}})(a,o)(...l):r(null,...l)})(null,...t)},use:function(n){if("function"!=typeof n)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}()}copy(){let e=new nw,t=-1;for(;++t<this.attachers.length;){let n=this.attachers[t];e.use(...n)}return e.data(nu(!0,{},this.namespace)),e}data(e,t){return"string"==typeof e?2==arguments.length?(nI("data",this.frozen),this.namespace[e]=t,this):nx.call(this.namespace,e)&&this.namespace[e]||void 0:e?(nI("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;for(;++this.freezeIndex<this.attachers.length;){let[e,...t]=this.attachers[this.freezeIndex];if(!1===t[0])continue;!0===t[0]&&(t[0]=void 0);let n=e.call(this,...t);"function"==typeof n&&this.transformers.use(n)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();let t=nD(e),n=this.parser||this.Parser;return nT("parse",n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),nT("process",this.parser||this.Parser),nC("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,o){let i=nD(e),l=n.parse(i);function a(e,n){e||!n?o(e):r?r(n):t(void 0,n)}n.run(l,i,function(e,t,r){if(e||!t||!r)return a(e);let o=n.stringify(t,r);"string"==typeof o||o&&"object"==typeof o&&"byteLength"in o&&"byteOffset"in o?r.value=o:r.result=o,a(e,r)})}}processSync(e){let t,n=!1;return this.freeze(),nT("processSync",this.parser||this.Parser),nC("processSync",this.compiler||this.Compiler),this.process(e,function(e,r){n=!0,ns(e),t=r}),nA("processSync","process",n),t}run(e,t,n){nE(e),this.freeze();let r=this.transformers;return n||"function"!=typeof t||(n=t,t=void 0),n?o(void 0,n):new Promise(o);function o(o,i){let l=nD(t);r.run(e,l,function(t,r,l){let a=r||e;t?i(t):o?o(a):n(void 0,a,l)})}}runSync(e,t){let n,r=!1;return this.run(e,t,function(e,t){ns(e),n=t,r=!0}),nA("runSync","run",r),n}stringify(e,t){this.freeze();let n=nD(t),r=this.compiler||this.Compiler;return nC("stringify",r),nE(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(nI("use",this.frozen),null==e);else if("function"==typeof e)l(e,t);else if("object"==typeof e)Array.isArray(e)?i(e):o(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function o(e){if(!("plugins"in e)&&!("settings"in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");i(e.plugins),e.settings&&(r.settings=nu(!0,r.settings,e.settings))}function i(e){let t=-1;if(null==e);else if(Array.isArray(e))for(;++t<e.length;)!function(e){if("function"==typeof e)l(e,[]);else if("object"==typeof e){if(Array.isArray(e)){let[t,...n]=e;l(t,n)}else o(e)}else throw TypeError("Expected usable value, not `"+e+"`")}(e[t]);else throw TypeError("Expected a list of plugins, not `"+e+"`")}function l(e,t){let r=-1,o=-1;for(;++r<n.length;)if(n[r][0]===e){o=r;break}if(-1===o)n.push([e,...t]);else if(t.length>0){let[r,...i]=t,l=n[o][1];nc(l)&&nc(r)&&(r=nu(!0,l,r)),n[o]=[e,r,...i]}}}}let nS=new nw().freeze();function nT(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `parser`")}function nC(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `compiler`")}function nI(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function nE(e){if(!nc(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}function nA(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function nD(e){return e&&"object"==typeof e&&"message"in e&&"messages"in e?e:new ng(e)}let nq=[],nL={allowDangerousHtml:!0},nP=/^(https?|ircs?|mailto|xmpp)$/i,nN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function nO(e){let t=function(e){let t=e.rehypePlugins||nq,n=e.remarkPlugins||nq,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...nL}:nL;return nS().use(tU).use(n).use(na,r).use(t)}(e),n=function(e){let t=e.children||"",n=new ng;return"string"==typeof t&&(n.value=t),n}(e);return function(e,t){let n=t.allowedElements,r=t.allowElement,o=t.components,l=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,u=t.urlTransform||nR;for(let e of nN)Object.hasOwn(t,e.from)&&(e.from,e.to&&e.to,e.id);return t3(e,function(e,t,o){if("raw"===e.type&&o&&"number"==typeof t)return a?o.children.splice(t,1):o.children[t]={type:"text",value:e.value},t;if("element"===e.type){let t;for(t in ef)if(Object.hasOwn(ef,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=ef[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=u(String(n||""),t,e))}}if("element"===e.type){let i=n?!n.includes(e.tagName):!!l&&l.includes(e.tagName);if(!i&&r&&"number"==typeof t&&(i=!r(e,t,o)),i&&o&&"number"==typeof t)return s&&e.children?o.children.splice(t,1,...e.children):o.children.splice(t,1),t}}),function(e,t){var n,r,o;let i;if(!t||void 0===t.Fragment)throw TypeError("Expected `Fragment` in options");let l=t.filePath||void 0;if(t.development){if("function"!=typeof t.jsxDEV)throw TypeError("Expected `jsxDEV` in options when `development: true`");n=t.jsxDEV,i=function(e,t,r,o){let i=Array.isArray(r.children),a=K(e);return n(t,r,o,i,{columnNumber:a?a.column-1:void 0,fileName:l,lineNumber:a?a.line:void 0},void 0)}}else{if("function"!=typeof t.jsx)throw TypeError("Expected `jsx` in production options");if("function"!=typeof t.jsxs)throw TypeError("Expected `jsxs` in production options");r=t.jsx,o=t.jsxs,i=function(e,t,n,i){let l=Array.isArray(n.children)?o:r;return i?l(t,n,i):l(t,n)}}let a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:i,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?B:F,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},s=ea(a,e,void 0);return s&&"string"!=typeof s?s:a.create(e,a.Fragment,{children:s||void 0},void 0)}(e,{Fragment:i.Fragment,components:o,ignoreInvalidStyle:!0,jsx:i.jsx,jsxs:i.jsxs,passKeys:!0,passNode:!0})}(t.runSync(t.parse(n),n),e)}function nR(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return -1===t||-1!==o&&t>o||-1!==n&&t>n||-1!==r&&t>r||nP.test(e.slice(0,t))?e:""}var nM=n(95228);function nz(){let e=(0,l.useParams)(),t=e?.slug,n=a.A.find(e=>e.slug===t),[r,o]=(0,em.useState)(0),[s,u]=(0,em.useState)([]),[c,p]=(0,em.useState)("");return n?(0,i.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,i.jsx)("div",{className:"fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-200",style:{width:`${r}%`}}),(0,i.jsx)("section",{className:"relative pt-20 md:pt-24 pb-14 border-b border-border",children:(0,i.jsxs)(nM.m,{className:"space-y-6",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground",children:[(0,i.jsx)("span",{className:"bg-primary/10 text-primary px-3 py-1 rounded-full font-medium",children:n.category}),(0,i.jsx)("span",{children:n.publishDate}),(0,i.jsx)("span",{children:n.readingTime})]}),(0,i.jsxs)("h1",{className:"text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl",children:[(0,i.jsx)("span",{className:"text-primary",children:n.title.charAt(0)}),n.title.slice(1)]}),(0,i.jsx)("p",{className:"text-base md:text-lg text-muted-foreground max-w-2xl",children:n.excerpt})]})}),(0,i.jsx)("section",{className:"py-14 md:py-16",children:(0,i.jsx)(nM.m,{children:(0,i.jsx)("div",{className:"overflow-hidden rounded-3xl border border-border shadow-xl",children:(0,i.jsx)("img",{src:n.coverImage,alt:n.title,className:"w-full h-[300px] md:h-[500px] object-cover"})})})}),(0,i.jsxs)(nM.m,{className:"grid grid-cols-1 lg:grid-cols-4 gap-10",children:[(0,i.jsx)("article",{className:"lg:col-span-3 pb-20",children:(0,i.jsx)("div",{className:"prose md:prose-lg max-w-none dark:prose-invert",children:(0,i.jsx)(nO,{components:{h2:({children:e})=>{let t=String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-");return(0,i.jsx)("h2",{id:t,children:e})},h3:({children:e})=>{let t=String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-");return(0,i.jsx)("h3",{id:t,children:e})}},children:n.content})})}),(0,i.jsx)("aside",{className:"hidden lg:block",children:(0,i.jsxs)("div",{className:"sticky top-24 bg-card border border-border rounded-xl p-5 shadow-sm",children:[(0,i.jsx)("h4",{className:"font-semibold mb-4 text-sm uppercase text-muted-foreground",children:"Table of Contents"}),(0,i.jsx)("div",{className:"space-y-3 text-sm",children:s.map(e=>(0,i.jsx)("a",{href:`#${e.id}`,className:`block pl-3 border-l-2 transition ${c===e.id?"text-primary border-primary font-medium":"text-muted-foreground border-transparent hover:text-primary"}`,children:e.text},e.id))})]})})]})]}):(0,i.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-background",children:(0,i.jsx)("p",{className:"text-muted-foreground",children:"Article not found."})})}},55149:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},l=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,o=t.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!i)return!1;for(r in e);return void 0===r||t.call(e,r)},a=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},s=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(o)return o(e,n).value}return e[n]};e.exports=function e(){var t,n,r,o,u,c,p=arguments[0],d=1,h=arguments.length,f=!1;for("boolean"==typeof p&&(f=p,p=arguments[1]||{},d=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});d<h;++d)if(t=arguments[d],null!=t)for(n in t)r=s(p,n),p!==(o=s(t,n))&&(f&&o&&(l(o)||(u=i(o)))?(u?(u=!1,c=r&&i(r)?r:[]):c=r&&l(r)?r:{},a(p,{name:n,newValue:e(f,c,o)})):void 0!==o&&a(p,{name:n,newValue:o}));return p}},61265:e=>{"use strict";var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,s=/^\s+|\s+$/g;function u(e){return e?e.replace(s,""):""}e.exports=function(e,s){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];s=s||{};var c=1,p=1;function d(e){var t=e.match(n);t&&(c+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function h(){var e={line:c,column:p};return function(t){return t.position=new f(e),g(r),t}}function f(e){this.start=e,this.end={line:c,column:p},this.source=s.source}function m(t){var n=Error(s.source+":"+c+":"+p+": "+t);if(n.reason=t,n.filename=s.source,n.line=c,n.column=p,n.source=e,s.silent);else throw n}function g(t){var n=t.exec(e);if(n){var r=n[0];return d(r),e=e.slice(r.length),n}}function y(e){var t;for(e=e||[];t=b();)!1!==t&&e.push(t);return e}function b(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return m("End of comment missing");var r=e.slice(2,n-2);return p+=2,d(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}return f.prototype.content=e,g(r),function(){var e,n=[];for(y(n);e=function(){var e=h(),n=g(o);if(n){if(b(),!g(i))return m("property missing ':'");var r=g(l),s=e({type:"declaration",property:u(n[0].replace(t,"")),value:r?u(r[0].replace(t,"")):""});return g(a),s}}();)!1!==e&&(n.push(e),y(n));return n}()}},39617:function(e,t,n){"use strict";var r=(this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(n(20457)),o=n(76697);function i(e,t){var n={};return e&&"string"==typeof e&&(0,r.default)(e,function(e,r){e&&r&&(n[(0,o.camelCase)(e,t)]=r)}),n}i.default=i,e.exports=i},76697:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,o=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,l=/^-(ms)-/,a=function(e,t){return t.toUpperCase()},s=function(e,t){return"".concat(t,"-")};t.camelCase=function(e,t){var u;return(void 0===t&&(t={}),!(u=e)||o.test(u)||n.test(u))?e:(e=e.toLowerCase(),(e=t.reactCompat?e.replace(l,s):e.replace(i,s)).replace(r,a))}},20457:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=null;if(!e||"string"!=typeof e)return n;let r=(0,o.default)(e),i="function"==typeof t;return r.forEach(e=>{if("declaration"!==e.type)return;let{property:r,value:o}=e;i?t(r,o,e):o&&((n=n||{})[r]=o)}),n};let o=r(n(61265))},98494:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,generateStaticParams:()=>l});var r=n(62740),o=n(11070);let i=[{title:"How to Write a Bio for Instagram (Complete Guide for USA Creators)",slug:"how-to-write-a-bio-for-instagram",excerpt:"Learn how to write a professional, catchy and SEO-optimized Instagram bio that attracts followers in the United States.",coverImage:"/blog/instagram-bio.png",category:"Instagram Growth",publishDate:"15 Feb 2026",readingTime:"8 min read",content:`
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
`}];async function l(){return i.map(e=>({slug:e.slug}))}async function a({params:e}){let{slug:t}=await e;return(0,r.jsx)(o.default,{})}},11070:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});let r=(0,n(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\LinkGen.in\\\\components\\\\tools\\\\BlogArticle.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\LinkGen.in\\components\\tools\\BlogArticle.tsx","default")}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,459,77,763,897],()=>n(81055));module.exports=r})();