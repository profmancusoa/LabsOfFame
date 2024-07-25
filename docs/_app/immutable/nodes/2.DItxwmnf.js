import{s as Le,c as Je,x as K,u as Ze,g as et,a as tt,y as pe,z as ge,A as pn,B as Pe,i as os,r as Bn,C as j,n as wt,D as li,k as ai,o as Xo}from"../chunks/scheduler.DgBBsiCx.js";import{S as Fe,i as Be,e as D,c as O,d as x,g as v,y as Ne,o as C,j as k,k as T,t as M,a as L,q as Ns,n as ks,z as H,m as ke,A as le,B as ae,C as Cn,b as Re,f as Ae,l as At,s as ce,u as he,D as Jo,E as Te,h as ue,v as de,w as fe,x as _e,F as Zo,G as lt,H as gn,I as ci}from"../chunks/index.QlzZvLOd.js";function ui(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gt(n,e){const t={},s={},i={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(s[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);n[r]=l}else for(const a in o)i[a]=1}for(const o in s)o in t||(t[o]=void 0);return t}const Rs="-";function el(n){const e=nl(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;function i(o){const l=o.split(Rs);return l[0]===""&&l.length!==1&&l.shift(),ur(l,e)||tl(o)}function r(o,l){const a=t[o]||[];return l&&s[o]?[...a,...s[o]]:a}return{getClassGroupId:i,getConflictingClassGroupIds:r}}function ur(n,e){var o;if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),i=s?ur(n.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=n.join(Rs);return(o=e.validators.find(({validator:l})=>l(r)))==null?void 0:o.classGroupId}const hi=/^\[(.+)\]$/;function tl(n){if(hi.test(n)){const e=hi.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function nl(n){const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return il(Object.entries(n.classGroups),t).forEach(([r,o])=>{ls(o,s,r,e)}),s}function ls(n,e,t,s){n.forEach(i=>{if(typeof i=="string"){const r=i===""?e:di(e,i);r.classGroupId=t;return}if(typeof i=="function"){if(sl(i)){ls(i(s),e,t,s);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([r,o])=>{ls(o,di(e,r),t,s)})})}function di(n,e){let t=n;return e.split(Rs).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t}function sl(n){return n.isThemeGetter}function il(n,e){return e?n.map(([t,s])=>{const i=s.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,l])=>[e+o,l])):r);return[t,i]}):n}function rl(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;function i(r,o){t.set(r,o),e++,e>n&&(e=0,s=t,t=new Map)}return{get(r){let o=t.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){t.has(r)?t.set(r,o):i(r,o)}}}const hr="!";function ol(n){const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,i=e[0],r=e.length;function o(l){const a=[];let c=0,u=0,h;for(let m=0;m<l.length;m++){let S=l[m];if(c===0){if(S===i&&(s||l.slice(m,m+r)===e)){a.push(l.slice(u,m)),u=m+r;continue}if(S==="/"){h=m;continue}}S==="["?c++:S==="]"&&c--}const d=a.length===0?l:l.substring(u),_=d.startsWith(hr),p=_?d.substring(1):d,f=h&&h>u?h-u:void 0;return{modifiers:a,hasImportantModifier:_,baseClassName:p,maybePostfixModifierPosition:f}}return t?function(a){return t({className:a,parseClassName:o})}:o}function ll(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e}function al(n){return{cache:rl(n.cacheSize),parseClassName:ol(n),...el(n)}}const cl=/\s+/;function ul(n,e){const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:i}=e,r=new Set;return n.trim().split(cl).map(o=>{const{modifiers:l,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let h=!!u,d=s(h?c.substring(0,u):c);if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=s(c),!d)return{isTailwindClass:!1,originalClassName:o};h=!1}const _=ll(l).join(":");return{isTailwindClass:!0,modifierId:a?_+hr:_,classGroupId:d,originalClassName:o,hasPostfixModifier:h}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:l,classGroupId:a,hasPostfixModifier:c}=o,u=l+a;return r.has(u)?!1:(r.add(u),i(a,c).forEach(h=>r.add(l+h)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function as(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=dr(e))&&(s&&(s+=" "),s+=t);return s}function dr(n){if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=dr(n[s]))&&(t&&(t+=" "),t+=e);return t}function hl(n,...e){let t,s,i,r=o;function o(a){const c=e.reduce((u,h)=>h(u),n());return t=al(c),s=t.cache.get,i=t.cache.set,r=l,l(a)}function l(a){const c=s(a);if(c)return c;const u=ul(a,t);return i(a,u),u}return function(){return r(as.apply(null,arguments))}}function U(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const fr=/^\[(?:([a-z-]+):)?(.+)\]$/i,dl=/^\d+\/\d+$/,fl=new Set(["px","full","screen"]),_l=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,gl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ml=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vl=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function xe(n){return ut(n)||fl.has(n)||dl.test(n)}function Ve(n){return xt(n,"length",Tl)}function ut(n){return!!n&&!Number.isNaN(Number(n))}function mn(n){return xt(n,"number",ut)}function Lt(n){return!!n&&Number.isInteger(Number(n))}function bl(n){return n.endsWith("%")&&ut(n.slice(0,-1))}function w(n){return fr.test(n)}function Ge(n){return _l.test(n)}const yl=new Set(["length","size","percentage"]);function Cl(n){return xt(n,yl,_r)}function wl(n){return xt(n,"position",_r)}const El=new Set(["image","url"]);function Il(n){return xt(n,El,kl)}function Sl(n){return xt(n,"",Nl)}function Ft(){return!0}function xt(n,e,t){const s=fr.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1}function Tl(n){return pl.test(n)&&!gl.test(n)}function _r(){return!1}function Nl(n){return ml.test(n)}function kl(n){return vl.test(n)}function Rl(){const n=U("colors"),e=U("spacing"),t=U("blur"),s=U("brightness"),i=U("borderColor"),r=U("borderRadius"),o=U("borderSpacing"),l=U("borderWidth"),a=U("contrast"),c=U("grayscale"),u=U("hueRotate"),h=U("invert"),d=U("gap"),_=U("gradientColorStops"),p=U("gradientColorStopPositions"),f=U("inset"),m=U("margin"),S=U("opacity"),R=U("padding"),Q=U("saturate"),Ie=U("scale"),ne=U("sepia"),st=U("skew"),se=U("space"),it=U("translate"),y=()=>["auto","contain","none"],vt=()=>["auto","hidden","clip","visible","scroll"],ze=()=>["auto",w,e],A=()=>[w,e],rt=()=>["",xe,Ve],He=()=>["auto",ut,w],Mt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>["start","end","center","between","around","evenly","stretch"],Se=()=>["","0",w],ot=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ve=()=>[ut,mn],_n=()=>[ut,w];return{cacheSize:500,separator:":",theme:{colors:[Ft],spacing:[xe,Ve],blur:["none","",Ge,w],brightness:ve(),borderColor:[n],borderRadius:["none","","full",Ge,w],borderSpacing:A(),borderWidth:rt(),contrast:ve(),grayscale:Se(),hueRotate:_n(),invert:Se(),gap:A(),gradientColorStops:[n],gradientColorStopPositions:[bl,Ve],inset:ze(),margin:ze(),opacity:ve(),padding:A(),saturate:ve(),scale:ve(),sepia:Se(),skew:_n(),space:A(),translate:A()},classGroups:{aspect:[{aspect:["auto","square","video",w]}],container:["container"],columns:[{columns:[Ge]}],"break-after":[{"break-after":ot()}],"break-before":[{"break-before":ot()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Mt(),w]}],overflow:[{overflow:vt()}],"overflow-x":[{"overflow-x":vt()}],"overflow-y":[{"overflow-y":vt()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Lt,w]}],basis:[{basis:ze()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",w]}],grow:[{grow:Se()}],shrink:[{shrink:Se()}],order:[{order:["first","last","none",Lt,w]}],"grid-cols":[{"grid-cols":[Ft]}],"col-start-end":[{col:["auto",{span:["full",Lt,w]},w]}],"col-start":[{"col-start":He()}],"col-end":[{"col-end":He()}],"grid-rows":[{"grid-rows":[Ft]}],"row-start-end":[{row:["auto",{span:[Lt,w]},w]}],"row-start":[{"row-start":He()}],"row-end":[{"row-end":He()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",w]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",w]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...me()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...me(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...me(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[se]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[se]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",w,e]}],"min-w":[{"min-w":[w,e,"min","max","fit"]}],"max-w":[{"max-w":[w,e,"none","full","min","max","fit","prose",{screen:[Ge]},Ge]}],h:[{h:[w,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[w,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Ge,Ve]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mn]}],"font-family":[{font:[Ft]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",w]}],"line-clamp":[{"line-clamp":["none",ut,mn]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",xe,w]}],"list-image":[{"list-image":["none",w]}],"list-style-type":[{list:["none","disc","decimal",w]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",xe,Ve]}],"underline-offset":[{"underline-offset":["auto",xe,w]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",w]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",w]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Mt(),wl]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Cl]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Il]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[xe,w]}],"outline-w":[{outline:[xe,Ve]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:rt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[xe,Ve]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Ge,Sl]}],"shadow-color":[{shadow:[Ft]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",Ge,w]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[Q]}],sepia:[{sepia:[ne]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[Q]}],"backdrop-sepia":[{"backdrop-sepia":[ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",w]}],duration:[{duration:_n()}],ease:[{ease:["linear","in","out","in-out",w]}],delay:[{delay:_n()}],animate:[{animate:["none","spin","ping","pulse","bounce",w]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Ie]}],"scale-x":[{"scale-x":[Ie]}],"scale-y":[{"scale-y":[Ie]}],rotate:[{rotate:[Lt,w]}],"translate-x":[{"translate-x":[it]}],"translate-y":[{"translate-y":[it]}],"skew-x":[{"skew-x":[st]}],"skew-y":[{"skew-y":[st]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",w]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",w]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",w]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[xe,Ve,mn]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ee=hl(Rl);function Al(n){let e,t,s,i,r;const o=n[11].default,l=Je(o,n,n[10],null);let a=[n[4],{class:s=Ee("w-full text-left text-sm",n[3][n[2]],n[5].class)}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=D("div"),t=D("table"),l&&l.c(),this.h()},l(u){e=O(u,"DIV",{class:!0});var h=x(e);t=O(h,"TABLE",{class:!0});var d=x(t);l&&l.l(d),d.forEach(v),h.forEach(v),this.h()},h(){Ne(t,c),C(e,"class",i=as(n[0],n[1]&&"shadow-md sm:rounded-lg"))},m(u,h){k(u,e,h),T(e,t),l&&l.m(t,null),r=!0},p(u,[h]){l&&l.p&&(!r||h&1024)&&Ze(l,o,u,u[10],r?tt(o,u[10],h,null):et(u[10]),null),Ne(t,c=gt(a,[h&16&&u[4],(!r||h&36&&s!==(s=Ee("w-full text-left text-sm",u[3][u[2]],u[5].class)))&&{class:s}])),(!r||h&3&&i!==(i=as(u[0],u[1]&&"shadow-md sm:rounded-lg")))&&C(e,"class",i)},i(u){r||(M(l,u),r=!0)},o(u){L(l,u),r=!1},d(u){u&&v(e),l&&l.d(u)}}}function xl(n,e,t){const s=["divClass","striped","hoverable","noborder","shadow","color","customeColor"];let i=pe(e,s),{$$slots:r={},$$scope:o}=e,{divClass:l="relative overflow-x-auto"}=e,{striped:a=!1}=e,{hoverable:c=!1}=e,{noborder:u=!1}=e,{shadow:h=!1}=e,{color:d="default"}=e,{customeColor:_=""}=e;const p={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:_};return n.$$set=f=>{t(5,e=K(K({},e),ge(f))),t(4,i=pe(e,s)),"divClass"in f&&t(0,l=f.divClass),"striped"in f&&t(6,a=f.striped),"hoverable"in f&&t(7,c=f.hoverable),"noborder"in f&&t(8,u=f.noborder),"shadow"in f&&t(1,h=f.shadow),"color"in f&&t(2,d=f.color),"customeColor"in f&&t(9,_=f.customeColor),"$$scope"in f&&t(10,o=f.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&pn("striped",a),n.$$.dirty&128&&pn("hoverable",c),n.$$.dirty&256&&pn("noborder",u),n.$$.dirty&4&&pn("color",d)},e=ge(e),[l,h,d,p,i,e,a,c,u,_,o,r]}class Pl extends Fe{constructor(e){super(),Be(this,e,xl,Al,Le,{divClass:0,striped:6,hoverable:7,noborder:8,shadow:1,color:2,customeColor:9})}}function Dl(n){let e,t;const s=n[2].default,i=Je(s,n,n[1],null);return{c(){e=D("tbody"),i&&i.c(),this.h()},l(r){e=O(r,"TBODY",{class:!0});var o=x(e);i&&i.l(o),o.forEach(v),this.h()},h(){C(e,"class",n[0])},m(r,o){k(r,e,o),i&&i.m(e,null),t=!0},p(r,[o]){i&&i.p&&(!t||o&2)&&Ze(i,s,r,r[1],t?tt(s,r[1],o,null):et(r[1]),null),(!t||o&1)&&C(e,"class",r[0])},i(r){t||(M(i,r),t=!0)},o(r){L(i,r),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Ol(n,e,t){let{$$slots:s={},$$scope:i}=e,{tableBodyClass:r=void 0}=e;return n.$$set=o=>{"tableBodyClass"in o&&t(0,r=o.tableBodyClass),"$$scope"in o&&t(1,i=o.$$scope)},[r,i,s]}class Ml extends Fe{constructor(e){super(),Be(this,e,Ol,Dl,Le,{tableBodyClass:0})}}function Ll(n){let e;const t=n[6].default,s=Je(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Ze(s,t,i,i[5],e?tt(t,i[5],r,null):et(i[5]),null)},i(i){e||(M(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function Fl(n){let e,t,s,i;const r=n[6].default,o=Je(r,n,n[5],null);return{c(){e=D("button"),o&&o.c()},l(l){e=O(l,"BUTTON",{});var a=x(e);o&&o.l(a),a.forEach(v)},m(l,a){k(l,e,a),o&&o.m(e,null),t=!0,s||(i=H(e,"click",function(){os(n[1].onclick)&&n[1].onclick.apply(this,arguments)}),s=!0)},p(l,a){n=l,o&&o.p&&(!t||a&32)&&Ze(o,r,n,n[5],t?tt(r,n[5],a,null):et(n[5]),null)},i(l){t||(M(o,l),t=!0)},o(l){L(o,l),t=!1},d(l){l&&v(e),o&&o.d(l),s=!1,i()}}}function Bl(n){let e,t,s,i;const r=[Fl,Ll],o=[];function l(u,h){return u[1].onclick?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[0]}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=D("td"),s.c(),this.h()},l(u){e=O(u,"TD",{class:!0});var h=x(e);s.l(h),h.forEach(v),this.h()},h(){Ne(e,c)},m(u,h){k(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(Ns(),L(o[d],1,1,()=>{o[d]=null}),ks(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),M(s,1),s.m(e,null)),Ne(e,c=gt(a,[h&4&&u[2],(!i||h&1)&&{class:u[0]}]))},i(u){i||(M(s),i=!0)},o(u){L(s),i=!1},d(u){u&&v(e),o[t].d()}}}function Wl(n,e,t){const s=["tdClass"];let i=pe(e,s),{$$slots:r={},$$scope:o}=e,{tdClass:l="px-6 py-4 whitespace-nowrap font-medium "}=e,a="default";a=Pe("color");let c;return n.$$set=u=>{t(1,e=K(K({},e),ge(u))),t(2,i=pe(e,s)),"tdClass"in u&&t(3,l=u.tdClass),"$$scope"in u&&t(5,o=u.$$scope)},n.$$.update=()=>{t(0,c=Ee(l,a==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",e.class))},e=ge(e),[c,e,i,l,a,o,r]}class Yn extends Fe{constructor(e){super(),Be(this,e,Wl,Bl,Le,{tdClass:3})}}function Ul(n){let e,t,s,i;const r=n[4].default,o=Je(r,n,n[3],null);let l=[n[1],{class:n[0]}],a={};for(let c=0;c<l.length;c+=1)a=K(a,l[c]);return{c(){e=D("tr"),o&&o.c(),this.h()},l(c){e=O(c,"TR",{class:!0});var u=x(e);o&&o.l(u),u.forEach(v),this.h()},h(){Ne(e,a)},m(c,u){k(c,e,u),o&&o.m(e,null),t=!0,s||(i=[H(e,"click",n[5]),H(e,"contextmenu",n[6]),H(e,"dblclick",n[7])],s=!0)},p(c,[u]){o&&o.p&&(!t||u&8)&&Ze(o,r,c,c[3],t?tt(r,c[3],u,null):et(c[3]),null),Ne(e,a=gt(l,[u&2&&c[1],(!t||u&1)&&{class:c[0]}]))},i(c){t||(M(o,c),t=!0)},o(c){L(o,c),t=!1},d(c){c&&v(e),o&&o.d(c),s=!1,Bn(i)}}}function zl(n,e,t){const s=["color"];let i=pe(e,s),{$$slots:r={},$$scope:o}=e,{color:l=Pe("color")}=e;const a={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},c={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},u={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let h;function d(f){j.call(this,n,f)}function _(f){j.call(this,n,f)}function p(f){j.call(this,n,f)}return n.$$set=f=>{t(11,e=K(K({},e),ge(f))),t(1,i=pe(e,s)),"color"in f&&t(2,l=f.color),"$$scope"in f&&t(3,o=f.$$scope)},n.$$.update=()=>{t(0,h=Ee([!Pe("noborder")&&"border-b last:border-b-0",a[l],Pe("hoverable")&&c[l],Pe("striped")&&u[l],e.class]))},e=ge(e),[h,i,l,o,r,d,_,p]}class Hl extends Fe{constructor(e){super(),Be(this,e,zl,Ul,Le,{color:2})}}function Vl(n){let e;const t=n[6].default,s=Je(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Ze(s,t,i,i[5],e?tt(t,i[5],r,null):et(i[5]),null)},i(i){e||(M(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function Gl(n){let e,t;const s=n[6].default,i=Je(s,n,n[5],null);return{c(){e=D("tr"),i&&i.c()},l(r){e=O(r,"TR",{});var o=x(e);i&&i.l(o),o.forEach(v)},m(r,o){k(r,e,o),i&&i.m(e,null),t=!0},p(r,o){i&&i.p&&(!t||o&32)&&Ze(i,s,r,r[5],t?tt(s,r[5],o,null):et(r[5]),null)},i(r){t||(M(i,r),t=!0)},o(r){L(i,r),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function jl(n){let e,t,s,i;const r=[Gl,Vl],o=[];function l(u,h){return u[0]?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[1]}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=D("thead"),s.c(),this.h()},l(u){e=O(u,"THEAD",{class:!0});var h=x(e);s.l(h),h.forEach(v),this.h()},h(){Ne(e,c)},m(u,h){k(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(Ns(),L(o[d],1,1,()=>{o[d]=null}),ks(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),M(s,1),s.m(e,null)),Ne(e,c=gt(a,[h&4&&u[2],(!i||h&2)&&{class:u[1]}]))},i(u){i||(M(s),i=!0)},o(u){L(s),i=!1},d(u){u&&v(e),o[t].d()}}}function ql(n,e,t){let s;const i=["theadClass","defaultRow"];let r=pe(e,i),{$$slots:o={},$$scope:l}=e,{theadClass:a="text-xs uppercase"}=e,{defaultRow:c=!0}=e,u;u=Pe("color");let h=Pe("noborder"),d=Pe("striped");const p={default:h||d?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let f=u==="default"?"text-gray-700 dark:text-gray-400":u==="custom"?"":"text-white  dark:text-white",m=d?"":u==="default"?"border-gray-700":u==="custom"?"":`border-${u}-400`;return n.$$set=S=>{t(13,e=K(K({},e),ge(S))),t(2,r=pe(e,i)),"theadClass"in S&&t(3,a=S.theadClass),"defaultRow"in S&&t(0,c=S.defaultRow),"$$scope"in S&&t(5,l=S.$$scope)},n.$$.update=()=>{t(1,s=Ee(a,f,d&&m,p[u],e.class))},e=ge(e),[c,s,r,a,u,l,o]}class Yl extends Fe{constructor(e){super(),Be(this,e,ql,jl,Le,{theadClass:3,defaultRow:0})}}function Kl(n){let e,t,s,i,r;const o=n[4].default,l=Je(o,n,n[3],null);let a=[n[1],{class:t=Ee(n[0],n[2].class)}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=D("th"),l&&l.c(),this.h()},l(u){e=O(u,"TH",{class:!0});var h=x(e);l&&l.l(h),h.forEach(v),this.h()},h(){Ne(e,c)},m(u,h){k(u,e,h),l&&l.m(e,null),s=!0,i||(r=[H(e,"click",n[5]),H(e,"focus",n[6]),H(e,"keydown",n[7]),H(e,"keypress",n[8]),H(e,"keyup",n[9]),H(e,"mouseenter",n[10]),H(e,"mouseleave",n[11]),H(e,"mouseover",n[12])],i=!0)},p(u,[h]){l&&l.p&&(!s||h&8)&&Ze(l,o,u,u[3],s?tt(o,u[3],h,null):et(u[3]),null),Ne(e,c=gt(a,[h&2&&u[1],(!s||h&5&&t!==(t=Ee(u[0],u[2].class)))&&{class:t}]))},i(u){s||(M(l,u),s=!0)},o(u){L(l,u),s=!1},d(u){u&&v(e),l&&l.d(u),i=!1,Bn(r)}}}function Ql(n,e,t){const s=["padding"];let i=pe(e,s),{$$slots:r={},$$scope:o}=e,{padding:l="px-6 py-3"}=e;function a(m){j.call(this,n,m)}function c(m){j.call(this,n,m)}function u(m){j.call(this,n,m)}function h(m){j.call(this,n,m)}function d(m){j.call(this,n,m)}function _(m){j.call(this,n,m)}function p(m){j.call(this,n,m)}function f(m){j.call(this,n,m)}return n.$$set=m=>{t(2,e=K(K({},e),ge(m))),t(1,i=pe(e,s)),"padding"in m&&t(0,l=m.padding),"$$scope"in m&&t(3,o=m.$$scope)},e=ge(e),[l,i,e,o,r,a,c,u,h,d,_,p,f]}class Kn extends Fe{constructor(e){super(),Be(this,e,Ql,Kl,Le,{padding:0})}}function $l(n){let e,t,s,i,r,o,l,a=n[4].id&&n[4].title&&fi(n),c=n[5].id&&n[5].desc&&_i(n),u=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=Ee("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],h={};for(let d=0;d<u.length;d+=1)h=K(h,u[d]);return{c(){e=le("svg"),a&&a.c(),t=ke(),c&&c.c(),s=le("path"),i=le("path"),r=le("path"),this.h()},l(d){e=ae(d,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var _=x(e);a&&a.l(_),t=ke(),c&&c.l(_),s=ae(_,"path",{d:!0}),x(s).forEach(v),i=ae(_,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),x(i).forEach(v),r=ae(_,"path",{d:!0}),x(r).forEach(v),_.forEach(v),this.h()},h(){C(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),C(i,"fill-rule","evenodd"),C(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),C(i,"clip-rule","evenodd"),C(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),Cn(e,h)},m(d,_){k(d,e,_),a&&a.m(e,null),T(e,t),c&&c.m(e,null),T(e,s),T(e,i),T(e,r)},p(d,_){d[4].id&&d[4].title?a?a.p(d,_):(a=fi(d),a.c(),a.m(e,t)):a&&(a.d(1),a=null),d[5].id&&d[5].desc?c?c.p(d,_):(c=_i(d),c.c(),c.m(e,s)):c&&(c.d(1),c=null),Cn(e,h=gt(u,[{xmlns:"http://www.w3.org/2000/svg"},_&4&&{fill:d[2]},_&1024&&d[10],_&2049&&o!==(o=Ee("shrink-0",d[8][d[0]??"md"],d[11].class))&&{class:o},_&2&&{role:d[1]},_&64&&{"aria-label":d[6]},_&128&&l!==(l=d[7]?d[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(d){d&&v(e),a&&a.d(),c&&c.d()}}}function Xl(n){let e,t,s,i,r,o,l,a,c,u=n[4].id&&n[4].title&&pi(n),h=n[5].id&&n[5].desc&&gi(n),d=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=Ee("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],_={};for(let p=0;p<d.length;p+=1)_=K(_,d[p]);return{c(){e=le("svg"),u&&u.c(),t=ke(),h&&h.c(),s=le("path"),i=le("path"),r=le("path"),this.h()},l(p){e=ae(p,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var f=x(e);u&&u.l(f),t=ke(),h&&h.l(f),s=ae(f,"path",{d:!0}),x(s).forEach(v),i=ae(f,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),x(i).forEach(v),r=ae(f,"path",{d:!0}),x(r).forEach(v),f.forEach(v),this.h()},h(){C(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),C(i,"fill-rule","evenodd"),C(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),C(i,"clip-rule","evenodd"),C(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),Cn(e,_)},m(p,f){k(p,e,f),u&&u.m(e,null),T(e,t),h&&h.m(e,null),T(e,s),T(e,i),T(e,r),a||(c=[H(e,"click",n[12]),H(e,"keydown",n[13]),H(e,"keyup",n[14]),H(e,"focus",n[15]),H(e,"blur",n[16]),H(e,"mouseenter",n[17]),H(e,"mouseleave",n[18]),H(e,"mouseover",n[19]),H(e,"mouseout",n[20])],a=!0)},p(p,f){p[4].id&&p[4].title?u?u.p(p,f):(u=pi(p),u.c(),u.m(e,t)):u&&(u.d(1),u=null),p[5].id&&p[5].desc?h?h.p(p,f):(h=gi(p),h.c(),h.m(e,s)):h&&(h.d(1),h=null),Cn(e,_=gt(d,[{xmlns:"http://www.w3.org/2000/svg"},f&4&&{fill:p[2]},f&1024&&p[10],f&2049&&o!==(o=Ee("shrink-0",p[8][p[0]??"md"],p[11].class))&&{class:o},f&2&&{role:p[1]},f&64&&{"aria-label":p[6]},f&128&&l!==(l=p[7]?p[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(p){p&&v(e),u&&u.d(),h&&h.d(),a=!1,Bn(c)}}}function fi(n){let e,t=n[4].title+"",s,i;return{c(){e=le("title"),s=Re(t),this.h()},l(r){e=ae(r,"title",{id:!0});var o=x(e);s=Ae(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[4].id)},m(r,o){k(r,e,o),T(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&At(s,t),o&16&&i!==(i=r[4].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function _i(n){let e,t=n[5].desc+"",s,i;return{c(){e=le("desc"),s=Re(t),this.h()},l(r){e=ae(r,"desc",{id:!0});var o=x(e);s=Ae(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[5].id)},m(r,o){k(r,e,o),T(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&At(s,t),o&32&&i!==(i=r[5].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function pi(n){let e,t=n[4].title+"",s,i;return{c(){e=le("title"),s=Re(t),this.h()},l(r){e=ae(r,"title",{id:!0});var o=x(e);s=Ae(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[4].id)},m(r,o){k(r,e,o),T(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&At(s,t),o&16&&i!==(i=r[4].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function gi(n){let e,t=n[5].desc+"",s,i;return{c(){e=le("desc"),s=Re(t),this.h()},l(r){e=ae(r,"desc",{id:!0});var o=x(e);s=Ae(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[5].id)},m(r,o){k(r,e,o),T(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&At(s,t),o&32&&i!==(i=r[5].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function Jl(n){let e;function t(r,o){return r[3]?Xl:$l}let s=t(n),i=s(n);return{c(){i.c(),e=ke()},l(r){i.l(r),e=ke()},m(r,o){i.m(r,o),k(r,e,o)},p(r,[o]){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:wt,o:wt,d(r){r&&v(e),i.d(r)}}}function Zl(n,e,t){const s=["size","role","color","withEvents","title","desc","ariaLabel"];let i=pe(e,s);const r=Pe("iconCtx")??{},o={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let{size:l=r.size||"md"}=e,{role:a=r.role||"img"}=e,{color:c=r.color||"currentColor"}=e,{withEvents:u=r.withEvents||!1}=e,{title:h={}}=e,{desc:d={}}=e,_=`${h.id||""} ${d.id||""}`,p=!1,{ariaLabel:f="award solid"}=e;function m(y){j.call(this,n,y)}function S(y){j.call(this,n,y)}function R(y){j.call(this,n,y)}function Q(y){j.call(this,n,y)}function Ie(y){j.call(this,n,y)}function ne(y){j.call(this,n,y)}function st(y){j.call(this,n,y)}function se(y){j.call(this,n,y)}function it(y){j.call(this,n,y)}return n.$$set=y=>{t(11,e=K(K({},e),ge(y))),t(10,i=pe(e,s)),"size"in y&&t(0,l=y.size),"role"in y&&t(1,a=y.role),"color"in y&&t(2,c=y.color),"withEvents"in y&&t(3,u=y.withEvents),"title"in y&&t(4,h=y.title),"desc"in y&&t(5,d=y.desc),"ariaLabel"in y&&t(6,f=y.ariaLabel)},n.$$.update=()=>{n.$$.dirty&48&&(h.id||d.id?t(7,p=!0):t(7,p=!1))},e=ge(e),[l,a,c,u,h,d,f,p,o,_,i,e,m,S,R,Q,Ie,ne,st,se,it]}class ea extends Fe{constructor(e){super(),Be(this,e,Zl,Jl,Le,{size:0,role:1,color:2,withEvents:3,title:4,desc:5,ariaLabel:6})}}function mi(n,e,t){const s=n.slice();return s[1]=e[t],s[3]=t,s}function ta(n){let e;return{c(){e=Re("Pos")},l(t){e=Ae(t,"Pos")},m(t,s){k(t,e,s)},d(t){t&&v(e)}}}function na(n){let e;return{c(){e=Re("Nome")},l(t){e=Ae(t,"Nome")},m(t,s){k(t,e,s)},d(t){t&&v(e)}}}function sa(n){let e;return{c(){e=Re("Punteggio")},l(t){e=Ae(t,"Punteggio")},m(t,s){k(t,e,s)},d(t){t&&v(e)}}}function ia(n){let e,t,s,i,r,o;return e=new Kn({props:{padding:pr,$$slots:{default:[ta]},$$scope:{ctx:n}}}),s=new Kn({props:{class:gr,$$slots:{default:[na]},$$scope:{ctx:n}}}),r=new Kn({props:{class:mr,$$slots:{default:[sa]},$$scope:{ctx:n}}}),{c(){he(e.$$.fragment),t=ce(),he(s.$$.fragment),i=ce(),he(r.$$.fragment)},l(l){de(e.$$.fragment,l),t=ue(l),de(s.$$.fragment,l),i=ue(l),de(r.$$.fragment,l)},m(l,a){fe(e,l,a),k(l,t,a),fe(s,l,a),k(l,i,a),fe(r,l,a),o=!0},p(l,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:l}),e.$set(c);const u={};a&16&&(u.$$scope={dirty:a,ctx:l}),s.$set(u);const h={};a&16&&(h.$$scope={dirty:a,ctx:l}),r.$set(h)},i(l){o||(M(e.$$.fragment,l),M(s.$$.fragment,l),M(r.$$.fragment,l),o=!0)},o(l){L(e.$$.fragment,l),L(s.$$.fragment,l),L(r.$$.fragment,l),o=!1},d(l){l&&(v(t),v(i)),_e(e,l),_e(s,l),_e(r,l)}}}function ra(n){let e,t=n[3]+1+"",s;return{c(){e=D("div"),s=Re(t),this.h()},l(i){e=O(i,"DIV",{class:!0});var r=x(e);s=Ae(r,t),r.forEach(v),this.h()},h(){C(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){k(i,e,r),T(e,s)},p:wt,i:wt,o:wt,d(i){i&&v(e)}}}function oa(n){let e,t;return e=new ea({props:{size:"xl",color:_a(n[3])}}),{c(){he(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,i){fe(e,s,i),t=!0},p:wt,i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){_e(e,s)}}}function la(n){let e,t,s,i;const r=[oa,ra],o=[];function l(a,c){return a[3]>=0&&a[3]<=2?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=ke()},l(a){t.l(a),s=ke()},m(a,c){o[e].m(a,c),k(a,s,c),i=!0},p(a,c){t.p(a,c)},i(a){i||(M(t),i=!0)},o(a){L(t),i=!1},d(a){a&&v(s),o[e].d(a)}}}function aa(n){let e,t,s,i,r,o,l=n[1].username+"",a;return{c(){e=D("img"),i=ce(),r=D("div"),o=D("div"),a=Re(l),this.h()},l(c){e=O(c,"IMG",{class:!0,src:!0,alt:!0}),i=ue(c),r=O(c,"DIV",{class:!0});var u=x(r);o=O(u,"DIV",{class:!0});var h=x(o);a=Ae(h,l),h.forEach(v),u.forEach(v),this.h()},h(){C(e,"class","lg:w-2/6 w-3/6 rounded-full"),li(e.src,t=n[1].avatar)||C(e,"src",t),C(e,"alt",s=n[1].username+" avatar"),C(o,"class","text-base gamer-font text-4xl pr-6 svelte-15orbzf"),C(r,"class","ps-3 pr-6")},m(c,u){k(c,e,u),k(c,i,u),k(c,r,u),T(r,o),T(o,a)},p(c,u){u&1&&!li(e.src,t=c[1].avatar)&&C(e,"src",t),u&1&&s!==(s=c[1].username+" avatar")&&C(e,"alt",s),u&1&&l!==(l=c[1].username+"")&&At(a,l)},d(c){c&&(v(e),v(i),v(r))}}}function ca(n){let e,t=n[1].points+"",s;return{c(){e=D("div"),s=Re(t),this.h()},l(i){e=O(i,"DIV",{class:!0});var r=x(e);s=Ae(r,t),r.forEach(v),this.h()},h(){C(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){k(i,e,r),T(e,s)},p(i,r){r&1&&t!==(t=i[1].points+"")&&At(s,t)},d(i){i&&v(e)}}}function ua(n){let e,t,s,i,r,o,l;return e=new Yn({props:{tdClass:pr,class:"text-center",$$slots:{default:[la]},$$scope:{ctx:n}}}),s=new Yn({props:{class:"flex items-center px-6 py-4 text-gray-900 dark:text-white "+gr+" space-x-4",$$slots:{default:[aa]},$$scope:{ctx:n}}}),r=new Yn({props:{class:mr,$$slots:{default:[ca]},$$scope:{ctx:n}}}),{c(){he(e.$$.fragment),t=ce(),he(s.$$.fragment),i=ce(),he(r.$$.fragment),o=ce()},l(a){de(e.$$.fragment,a),t=ue(a),de(s.$$.fragment,a),i=ue(a),de(r.$$.fragment,a),o=ue(a)},m(a,c){fe(e,a,c),k(a,t,c),fe(s,a,c),k(a,i,c),fe(r,a,c),k(a,o,c),l=!0},p(a,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const h={};c&17&&(h.$$scope={dirty:c,ctx:a}),s.$set(h);const d={};c&17&&(d.$$scope={dirty:c,ctx:a}),r.$set(d)},i(a){l||(M(e.$$.fragment,a),M(s.$$.fragment,a),M(r.$$.fragment,a),l=!0)},o(a){L(e.$$.fragment,a),L(s.$$.fragment,a),L(r.$$.fragment,a),l=!1},d(a){a&&(v(t),v(i),v(o)),_e(e,a),_e(s,a),_e(r,a)}}}function vi(n){let e,t;return e=new Hl({props:{$$slots:{default:[ua]},$$scope:{ctx:n}}}),{c(){he(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,i){fe(e,s,i),t=!0},p(s,i){const r={};i&17&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){_e(e,s)}}}function ha(n){let e,t,s=ui(n[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=vi(mi(n,s,o));const r=o=>L(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=ke()},l(o){for(let l=0;l<i.length;l+=1)i[l].l(o);e=ke()},m(o,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,l);k(o,e,l),t=!0},p(o,l){if(l&1){s=ui(o[0]);let a;for(a=0;a<s.length;a+=1){const c=mi(o,s,a);i[a]?(i[a].p(c,l),M(i[a],1)):(i[a]=vi(c),i[a].c(),M(i[a],1),i[a].m(e.parentNode,e))}for(Ns(),a=s.length;a<i.length;a+=1)r(a);ks()}},i(o){if(!t){for(let l=0;l<s.length;l+=1)M(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)L(i[l]);t=!1},d(o){o&&v(e),Zo(i,o)}}}function da(n){let e,t,s,i;return e=new Yl({props:{$$slots:{default:[ia]},$$scope:{ctx:n}}}),s=new Ml({props:{tableBodyClass:"divide-y",$$slots:{default:[ha]},$$scope:{ctx:n}}}),{c(){he(e.$$.fragment),t=ce(),he(s.$$.fragment)},l(r){de(e.$$.fragment,r),t=ue(r),de(s.$$.fragment,r)},m(r,o){fe(e,r,o),k(r,t,o),fe(s,r,o),i=!0},p(r,o){const l={};o&16&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const a={};o&17&&(a.$$scope={dirty:o,ctx:r}),s.$set(a)},i(r){i||(M(e.$$.fragment,r),M(s.$$.fragment,r),i=!0)},o(r){L(e.$$.fragment,r),L(s.$$.fragment,r),i=!1},d(r){r&&v(t),_e(e,r),_e(s,r)}}}function fa(n){let e,t=`/* Nello style di Svelte questo stile viene rimosso in quanto 
	   non usato nella pagina ma nel componente TableBodyCell.
	   Come workaround lo metto nel HTML
	*/
    svg {
      display: block;
      text-align: center;
      margin: auto;
    }`,s,i,r,o,l;return o=new Pl({props:{hoverable:!0,class:"text-center",$$slots:{default:[da]},$$scope:{ctx:n}}}),{c(){e=D("style"),e.textContent=t,s=ce(),i=D("div"),r=D("div"),he(o.$$.fragment),this.h()},l(a){const c=Jo("svelte-e4duco",document.head);e=O(c,"STYLE",{"data-svelte-h":!0}),Te(e)!=="svelte-1lbw6gp"&&(e.textContent=t),c.forEach(v),s=ue(a),i=O(a,"DIV",{class:!0});var u=x(i);r=O(u,"DIV",{class:!0});var h=x(r);de(o.$$.fragment,h),h.forEach(v),u.forEach(v),this.h()},h(){C(r,"class","lg:w-2/5"),C(i,"class","lg:flex lg:justify-center")},m(a,c){T(document.head,e),k(a,s,c),k(a,i,c),T(i,r),fe(o,r,null),l=!0},p(a,[c]){const u={};c&17&&(u.$$scope={dirty:c,ctx:a}),o.$set(u)},i(a){l||(M(o.$$.fragment,a),l=!0)},o(a){L(o.$$.fragment,a),l=!1},d(a){a&&(v(s),v(i)),v(e),_e(o)}}}const pr="px-4 py-6 w-1/6",gr="w-3/5",mr="w-1/4";function _a(n){const e="#ffd700",t="#949494",s="#cd7f32";switch(n){case 0:return e;case 1:return t;case 2:return s}}function pa(n,e,t){let{items:s}=e;return n.$$set=i=>{"items"in i&&t(0,s=i.items)},[s]}class ga extends Fe{constructor(e){super(),Be(this,e,pa,fa,Le,{items:0})}}var bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw Pt(e)},Pt=function(n){return new Error("Firebase Database ("+vr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ma=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(t[u],t[h],t[d],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(br(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ma(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new va;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class va extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yr=function(n){const e=br(n);return As.encodeByteArray(e,!0)},wn=function(n){return yr(n).replace(/\./g,"")},cs=function(n){try{return As.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){return Cr(void 0,n)}function Cr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ya(t)||(n[t]=Cr(n[t],e[t]));return n}function ya(n){return n!=="__proto__"}/**
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
 */function Ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wa=()=>Ca().__FIREBASE_DEFAULTS__,Ea=()=>{if(typeof process>"u"||typeof bi>"u")return;const n=bi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cs(n[1]);return e&&JSON.parse(e)},wr=()=>{try{return wa()||Ea()||Ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sa=n=>{var e,t;return(t=(e=wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ta=n=>{const e=Sa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Er=()=>{var n;return(n=wr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Na(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wn(JSON.stringify(t)),wn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ir(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ka())}function Ra(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sr(){return vr.NODE_ADMIN===!0}function Aa(){try{return typeof indexedDB=="object"}catch{return!1}}function xa(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="FirebaseError";class rn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pa,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Da(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new rn(i,l,s)}}function Da(n,e){return n.replace(Oa,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Oa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return JSON.parse(n)}function q(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Yt(cs(r[0])||""),t=Yt(cs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ma=function(n){const e=Nr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},La=function(n){const e=Nr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Tt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function En(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function us(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ci(r)&&Ci(o)){if(!us(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ci(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function kr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function on(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const at="[DEFAULT]";/**
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
 */class Ua{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xs;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ha(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:za(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function za(n){return n===at?void 0:n}function Ha(n){return n.instantiationMode==="EAGER"}/**
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
 */class Va{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ua(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Ga={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},ja=B.INFO,qa={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ya=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=qa[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=ja,this._logHandler=Ya,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ga[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Ka=(n,e)=>e.some(t=>n instanceof t);let wi,Ei;function Qa(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $a(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ar=new WeakMap,hs=new WeakMap,xr=new WeakMap,Qn=new WeakMap,Ps=new WeakMap;function Xa(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(je(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ar.set(t,n)}).catch(()=>{}),Ps.set(e,n),e}function Ja(n){if(hs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hs.set(n,e)}let ds={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Za(n){ds=n(ds)}function ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($n(this),e,...t);return xr.set(s,e.sort?e.sort():[e]),je(s)}:$a().includes(n)?function(...e){return n.apply($n(this),e),je(Ar.get(this))}:function(...e){return je(n.apply($n(this),e))}}function tc(n){return typeof n=="function"?ec(n):(n instanceof IDBTransaction&&Ja(n),Ka(n,Qa())?new Proxy(n,ds):n)}function je(n){if(n instanceof IDBRequest)return Xa(n);if(Qn.has(n))return Qn.get(n);const e=tc(n);return e!==n&&(Qn.set(n,e),Ps.set(e,n)),e}const $n=n=>Ps.get(n);function nc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=je(o);return s&&o.addEventListener("upgradeneeded",a=>{s(je(o.result),a.oldVersion,a.newVersion,je(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const sc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],Xn=new Map;function Ii(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ic.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Xn.set(e,r),r}Za(n=>({...n,get:(e,t,s)=>Ii(e,t)||n.get(e,t,s),has:(e,t)=>!!Ii(e,t)||n.has(e,t)}));/**
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
 */class rc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fs="@firebase/app",Si="0.10.7";/**
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
 */const dt=new Rr("@firebase/app"),lc="@firebase/app-compat",ac="@firebase/analytics-compat",cc="@firebase/analytics",uc="@firebase/app-check-compat",hc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",_c="@firebase/database",pc="@firebase/database-compat",gc="@firebase/functions",mc="@firebase/functions-compat",vc="@firebase/installations",bc="@firebase/installations-compat",yc="@firebase/messaging",Cc="@firebase/messaging-compat",wc="@firebase/performance",Ec="@firebase/performance-compat",Ic="@firebase/remote-config",Sc="@firebase/remote-config-compat",Tc="@firebase/storage",Nc="@firebase/storage-compat",kc="@firebase/firestore",Rc="@firebase/vertexai-preview",Ac="@firebase/firestore-compat",xc="firebase",Pc="10.12.4";/**
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
 */const _s="[DEFAULT]",Dc={[fs]:"fire-core",[lc]:"fire-core-compat",[cc]:"fire-analytics",[ac]:"fire-analytics-compat",[hc]:"fire-app-check",[uc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[_c]:"fire-rtdb",[pc]:"fire-rtdb-compat",[gc]:"fire-fn",[mc]:"fire-fn-compat",[vc]:"fire-iid",[bc]:"fire-iid-compat",[yc]:"fire-fcm",[Cc]:"fire-fcm-compat",[wc]:"fire-perf",[Ec]:"fire-perf-compat",[Ic]:"fire-rc",[Sc]:"fire-rc-compat",[Tc]:"fire-gcs",[Nc]:"fire-gcs-compat",[kc]:"fire-fst",[Ac]:"fire-fst-compat",[Rc]:"fire-vertex","fire-js":"fire-js",[xc]:"fire-js-all"};/**
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
 */const In=new Map,Oc=new Map,ps=new Map;function Ti(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Sn(n){const e=n.name;if(ps.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,n);for(const t of In.values())Ti(t,n);for(const t of Oc.values())Ti(t,n);return!0}function Mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Lc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Tr("app","Firebase",Lc);/**
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
 */class Fc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Bc=Pc;function Pr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_s,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(t||(t=Er()),!t)throw qe.create("no-options");const r=In.get(i);if(r){if(us(t,r.options)&&us(s,r.config))return r;throw qe.create("duplicate-app",{appName:i})}const o=new Va(i);for(const a of ps.values())o.addComponent(a);const l=new Fc(t,s,o);return In.set(i,l),l}function Wc(n=_s){const e=In.get(n);if(!e&&n===_s&&Er())return Pr();if(!e)throw qe.create("no-app",{appName:n});return e}function Et(n,e,t){var s;let i=(s=Dc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(l.join(" "));return}Sn(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Uc="firebase-heartbeat-database",zc=1,Qt="firebase-heartbeat-store";let Jn=null;function Dr(){return Jn||(Jn=nc(Uc,zc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qt)}catch(t){console.warn(t)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),Jn}async function Hc(n){try{const t=(await Dr()).transaction(Qt),s=await t.objectStore(Qt).get(Or(n));return await t.done,s}catch(e){if(e instanceof rn)dt.warn(e.message);else{const t=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Ni(n,e){try{const s=(await Dr()).transaction(Qt,"readwrite");await s.objectStore(Qt).put(e,Or(n)),await s.done}catch(t){if(t instanceof rn)dt.warn(t.message);else{const s=qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function Or(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vc=1024,Gc=30*24*60*60*1e3;class jc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ki();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Gc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ki(),{heartbeatsToSend:s,unsentEntries:i}=qc(this._heartbeatsCache.heartbeats),r=wn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ki(){return new Date().toISOString().substring(0,10)}function qc(n,e=Vc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ri(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ri(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Yc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aa()?xa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ni(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ri(n){return wn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kc(n){Sn(new Kt("platform-logger",e=>new rc(e),"PRIVATE")),Sn(new Kt("heartbeat",e=>new jc(e),"PRIVATE")),Et(fs,Si,n),Et(fs,Si,"esm2017"),Et("fire-js","")}Kc("");var Qc="firebase",$c="10.12.4";/**
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
 */Et(Qc,$c,"app");var Ai={};const xi="@firebase/database",Pi="1.0.6";/**
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
 */let Mr="";function Xc(n){Mr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Yt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return We(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jc(e)}}catch{}return new Zc},ht=Lr("localStorage"),eu=Lr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Rr("@firebase/database"),tu=function(){let n=1;return function(){return n++}}(),Fr=function(n){const e=Wa(n),t=new Ba;t.update(e);const s=t.digest();return As.encodeByteArray(s)},ln=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ln.apply(null,s):typeof s=="object"?e+=q(s):e+=s,e+=" "}return e};let Ht=null,Di=!0;const nu=function(n,e){g(!e,"Can't turn on custom loggers persistently."),It.logLevel=B.VERBOSE,Ht=It.log.bind(It)},Z=function(...n){if(Di===!0&&(Di=!1,Ht===null&&eu.get("logging_enabled")===!0&&nu()),Ht){const e=ln.apply(null,n);Ht(e)}},an=function(n){return function(...e){Z(n,...e)}},gs=function(...n){const e="FIREBASE INTERNAL ERROR: "+ln(...n);It.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${ln(...n)}`;throw It.error(e),new Error(e)},oe=function(...n){const e="FIREBASE WARNING: "+ln(...n);It.warn(e)},su=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Br=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},iu=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Nt="[MIN_NAME]",ft="[MAX_NAME]",Dt=function(n,e){if(n===e)return 0;if(n===Nt||e===ft)return-1;if(e===Nt||n===ft)return 1;{const t=Oi(n),s=Oi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ru=function(n,e){return n===e?0:n<e?-1:1},Bt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+q(e))},Ds=function(n){if(typeof n!="object"||n===null)return q(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=q(e[s]),t+=":",t+=Ds(n[e[s]]);return t+="}",t},Wr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ur=function(n){g(!Br(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ou=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function au(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const cu=new RegExp("^-?(0*)\\d{1,10}$"),uu=-2147483648,hu=2147483647,Oi=function(n){if(cu.test(n)){const e=Number(n);if(e>=uu&&e<=hu)return e}return null},cn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},du=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class fu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',oe(e)}}class yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="5",zr="v",Hr="s",Vr="r",Gr="f",jr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qr="ls",Yr="p",ms="ac",Kr="websocket",Qr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function pu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xr(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===Kr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Qr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pu(n)&&(t.ns=n.namespace);const i=[];return re(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.counters_={}}incrementCounter(e,t=1){We(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ba(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={},es={};function Ms(n){const e=n.toString();return Zn[e]||(Zn[e]=new gu),Zn[e]}function mu(n,e){const t=n.toString();return es[t]||(es[t]=e()),es[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&cn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="start",bu="close",yu="pLPCommand",Cu="pRTLPCB",Jr="id",Zr="pw",eo="ser",wu="cb",Eu="seg",Iu="ts",Su="d",Tu="dframe",to=1870,no=30,Nu=to-no,ku=25e3,Ru=3e4;class yt{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=an(e),this.stats_=Ms(t),this.urlFn=a=>(this.appCheckToken&&(a[ms]=this.appCheckToken),Xr(t,Qr,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ru)),iu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ls((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mi)this.id=l,this.password=a;else if(o===bu)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Mi]="t",s[eo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[wu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zr]=Os,this.transportSessionId&&(s[Hr]=this.transportSessionId),this.lastSessionId&&(s[qr]=this.lastSessionId),this.applicationId&&(s[Yr]=this.applicationId),this.appCheckToken&&(s[ms]=this.appCheckToken),typeof location<"u"&&location.hostname&&jr.test(location.hostname)&&(s[Vr]=Gr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yt.forceAllow_=!0}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){return yt.forceAllow_?!0:!yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ou()&&!lu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=yr(t),i=Wr(s,Nu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Tu]="t",s[Jr]=e,s[Zr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ls{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tu(),window[yu+this.uniqueCallbackIdentifier]=e,window[Cu+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ls.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Z("frame writing exception"),l.stack&&Z(l.stack),Z(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jr]=this.myID,e[Zr]=this.myPW,e[eo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+no+s.length<=to;){const o=this.pendingSegs.shift();s=s+"&"+Eu+i+"="+o.seg+"&"+Iu+i+"="+o.ts+"&"+Su+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ku)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=16384,xu=45e3;let Tn=null;typeof MozWebSocket<"u"?Tn=MozWebSocket:typeof WebSocket<"u"&&(Tn=WebSocket);class be{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=an(this.connId),this.stats_=Ms(t),this.connURL=be.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[zr]=Os,typeof location<"u"&&location.hostname&&jr.test(location.hostname)&&(o[Vr]=Gr),t&&(o[Hr]=t),s&&(o[qr]=s),i&&(o[ms]=i),r&&(o[Yr]=r),Xr(e,Kr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ht.set("previous_websocket_failure",!0);try{let s;Sr(),this.mySock=new Tn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){be.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tn!==null&&!be.forceDisallow_}static previouslyFailed(){return ht.isInMemoryStorage||ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Yt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Wr(t,Au);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}be.responsesRequiredToBeHealthy=2;be.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yt,be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=be&&be.isAvailable();let s=t&&!be.previouslyFailed();if(e.webSocketOnly&&(t||oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[be];else{const i=this.transports_=[];for(const r of $t.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$t.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$t.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=6e4,Du=5e3,Ou=10*1024,Mu=100*1024,ts="t",Li="d",Lu="s",Fi="r",Fu="e",Bi="o",Wi="a",Ui="n",zi="p",Bu="h";class Wu{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=an("c:"+this.id+":"),this.transportManager_=new $t(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ou?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ts in e){const t=e[ts];t===Wi?this.upgradeIfSecondaryHealthy_():t===Fi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Bi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bt("t",e),s=Bt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ui,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bt("t",e),s=Bt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bt(ts,e);if(Li in e){const s=e[Li];if(t===Bu){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ui){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lu?this.onConnectionShutdown_(s):t===Fi?this.onReset_(s):t===Fu?gs("Server Error: "+s):t===Bi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Os!==s&&oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Vt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Du))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends io{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ir()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nn}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=32,Vi=768;class F{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new F("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qe(n){return n.pieces_.length-n.pieceNum_}function W(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new F(n.pieces_,e)}function ro(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function lo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new F(e,0)}function Y(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof F)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new F(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function te(n,e){const t=N(n),s=N(e);if(t===null)return e;if(t===s)return te(W(n),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ao(n,e){if(Qe(n)!==Qe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ye(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qe(n)>Qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class zu{constructor(e,t){this.errorPrefix_=t,this.parts_=oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wn(this.parts_[s]);co(this)}}function Hu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wn(e),co(n)}function Vu(n){const e=n.parts_.pop();n.byteLength_-=Wn(e),n.parts_.length>0&&(n.byteLength_-=1)}function co(n){if(n.byteLength_>Vi)throw new Error(n.errorPrefix_+"has a key path longer than "+Vi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hi+") or object contains a cycle "+ct(n))}function ct(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends io{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Fs}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1e3,Gu=60*5*1e3,Gi=30*1e3,ju=1.3,qu=3e4,Yu="server_kill",ji=3;class Oe extends so{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Oe.nextPersistentConnectionId_++,this.log_=an("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wt,this.maxReconnectDelay_=Gu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Sr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(q(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Oe.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&We(e,"w")){const s=Tt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||La(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ma(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gs("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qu&&(this.reconnectDelay_=Wt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ju)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Z("getToken() completed but was canceled"):(Z("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Wu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yu)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&oe(h),a())}}}interrupt(e){Z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yi(this.interruptReasons_)&&(this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ds(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new F(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ji&&(this.reconnectDelay_=Gi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ji&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Mr.replace(/\./g,"-")]=1,Ir()?e["framework.cordova"]=1:Ra()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nn.getInstance().currentlyOnline();return yi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(Nt,e),i=new E(Nt,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class uo extends Un{static get __EMPTY_NODE(){return vn}static set __EMPTY_NODE(e){vn=e}compare(e,t){return Dt(e.name,t.name)}isDefinedOn(e){throw Pt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(ft,vn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,vn)}toString(){return".key"}}const St=new uo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??X.RED,this.left=i??ie.EMPTY_NODE,this.right=r??ie.EMPTY_NODE}copy(e,t,s,i,r){return new X(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ie.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class Ku{copy(e,t,s,i,r){return this}insert(e,t,s){return new X(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ie{constructor(e,t=ie.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ie(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bn(this.root_,null,this.comparator_,!0,e)}}ie.EMPTY_NODE=new Ku;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,e){return Dt(n.name,e.name)}function Bs(n,e){return Dt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;function $u(n){vs=n}const ho=function(n){return typeof n=="number"?"number:"+Ur(n):"string:"+n},fo=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&We(e,".sv"),"Priority must be a string or number.")}else g(n===vs||n.isEmpty(),"priority of unexpected type.");g(n===vs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;class ${constructor(e,t=$.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fo(this.priorityNode_)}static set __childrenNodeConstructor(e){qi=e}static get __childrenNodeConstructor(){return qi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:N(e)===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=N(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||Qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ho(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ur(this.value_):e+=this.value_,this.lazyHash_=Fr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=$.VALUE_TYPE_ORDER.indexOf(t),r=$.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o,po;function Xu(n){_o=n}function Ju(n){po=n}class Zu extends Un{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Dt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(ft,new $("[PRIORITY-POST]",po))}makePost(e,t){const s=_o(e);return new E(t,new $("[PRIORITY-POST]",s))}toString(){return".priority"}}const V=new Zu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=Math.log(2);class th{constructor(e){const t=r=>parseInt(Math.log(r)/eh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kn=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new X(d,h.node,X.BLACK,null,null);{const _=parseInt(u/2,10)+a,p=i(a,_),f=i(_+1,c);return h=n[_],d=t?t(h):h,new X(d,h.node,X.BLACK,p,f)}},r=function(a){let c=null,u=null,h=n.length;const d=function(p,f){const m=h-p,S=h;h-=p;const R=i(m+1,S),Q=n[m],Ie=t?t(Q):Q;_(new X(Ie,Q.node,f,null,R))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const f=a.nextBitIsOne(),m=Math.pow(2,a.count-(p+1));f?d(m,X.BLACK):(d(m,X.BLACK),d(m,X.RED))}return u},o=new th(n.length),l=r(o);return new ie(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;const bt={};class De{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(bt&&V,"ChildrenNode.ts has not been loaded"),ns=ns||new De({".priority":bt},{".priority":V}),ns}get(e){const t=Tt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ie?t:null}hasIndex(e){return We(this.indexSet_,e.toString())}addIndex(e,t){g(e!==St,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=kn(s,e.getCompare()):l=bt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new De(u,c)}addToIndexes(e,t){const s=En(this.indexes_,(i,r)=>{const o=Tt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===bt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(E.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),kn(l,o.getCompare())}else return bt;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new E(e.name,l))),a.insert(e,e.node)}});return new De(s,this.indexSet_)}removeFromIndexes(e,t){const s=En(this.indexes_,i=>{if(i===bt)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new De(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class b{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&fo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ut||(Ut=new b(new ie(Bs),null,De.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ut}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ut:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ut:this.priorityNode_;return new b(i,o,r)}}updateChild(e,t){const s=N(e);if(s===null)return t;{g(N(e)!==".priority"||Qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(W(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(V,(o,l)=>{t[o]=l.val(e),s++,r&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ho(this.getPriority().val())+":"),this.forEachChild(V,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===un?-1:0}withIndex(e){if(e===St||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===St||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(V),i=t.getIterator(V);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===St?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nh extends b{constructor(){super(new ie(Bs),b.EMPTY_NODE,De.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const un=new nh;Object.defineProperties(E,{MIN:{value:new E(Nt,b.EMPTY_NODE)},MAX:{value:new E(ft,un)}});uo.__EMPTY_NODE=b.EMPTY_NODE;$.__childrenNodeConstructor=b;$u(un);Ju(un);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=!0;function J(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $(t,J(e))}if(!(n instanceof Array)&&sh){const t=[];let s=!1;if(re(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=J(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new E(o,a)))}}),t.length===0)return b.EMPTY_NODE;const r=kn(t,Qu,o=>o.name,Bs);if(s){const o=kn(t,V.getCompare());return new b(r,J(e),new De({".priority":o},{".priority":V}))}else return new b(r,J(e),De.Default)}else{let t=b.EMPTY_NODE;return re(n,(s,i)=>{if(We(n,s)&&s.substring(0,1)!=="."){const r=J(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(J(e))}}Xu(J);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends Un{constructor(e){super(),this.indexPath_=e,g(!I(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Dt(e.name,t.name):r}makePost(e,t){const s=J(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,un);return new E(ft,e)}toString(){return oo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends Un{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Dt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=J(e);return new E(t,s)}toString(){return".value"}}const oh=new rh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n){return{type:"value",snapshotNode:n}}function kt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Xt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Jt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Xt(t,l)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(kt(t,s)):o.trackChildChange(Jt(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(V,(i,r)=>{t.hasChild(i)||s.trackChildChange(Xt(i,r))}),t.isLeafNode()||t.forEachChild(V,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Jt(i,r,o))}else s.trackChildChange(kt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.indexedFilter_=new Ws(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zt.getStartPost_(e),this.endPost_=Zt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new E(t,s))||(s=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=b.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const r=this;return t.forEachChild(V,(o,l)=>{r.matches(new E(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Zt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new E(t,s))||(s=b.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;g(l.numChildren()===this.limit_,"");const a=new E(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Jt(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Xt(t,h));const f=l.updateImmediateChild(t,b.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(kt(d.name,d.node)),f.updateImmediateChild(d.name,d.node)):f}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Xt(c.name,c.node)),r.trackChildChange(kt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=V}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ft}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===V}copy(){const e=new Us;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ch(n){return n.loadsAllData()?new Ws(n.getIndex()):n.hasLimit()?new ah(n):new Zt(n)}function Yi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===V?t="$priority":n.index_===oh?t="$value":n.index_===St?t="$key":(g(n.index_ instanceof ih,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=q(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=q(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+q(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=q(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ki(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==V&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends so{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=an("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rn.getListenId_(e,s),l={};this.listens_[o]=l;const a=Yi(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Tt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Rn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Yi(e._queryParams),s=e._path.toString(),i=new xs;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fa(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Yt(l.responseText)}catch{oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return{value:null,children:new Map}}function mo(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=N(e);n.children.has(s)||n.children.set(s,An());const i=n.children.get(s);e=W(e),mo(i,e,t)}}function bs(n,e,t){n.value!==null?t(e,n.value):hh(n,(s,i)=>{const r=new F(e.toString()+"/"+s);bs(i,r,t)})}function hh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&re(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=10*1e3,fh=30*1e3,_h=5*60*1e3;class ph{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new dh(e);const s=Qi+(fh-Qi)*Math.random();Vt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;re(e,(i,r)=>{r>0&&We(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Vt(this.reportStats_.bind(this),Math.floor(Math.random()*2*_h))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ce||(Ce={}));function vo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ce.ACK_USER_WRITE,this.source=vo()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new F(e));return new xn(P(),t,this.revert)}}else return g(N(this.path)===e,"operationForChild called for unrelated child."),new xn(W(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.source=e,this.path=t,this.type=Ce.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new en(this.source,P()):new en(this.source,W(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ce.OVERWRITE}operationForChild(e){return I(this.path)?new _t(this.source,P(),this.snap.getImmediateChild(e)):new _t(this.source,W(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ce.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new F(e));return t.isEmpty()?null:t.value?new _t(this.source,P(),t.value):new tn(this.source,P(),t)}else return g(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tn(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lh(o.childName,o.snapshotNode))}),zt(n,i,"child_removed",e,s,t),zt(n,i,"child_added",e,s,t),zt(n,i,"child_moved",r,s,t),zt(n,i,"child_changed",e,s,t),zt(n,i,"value",e,s,t),i}function zt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>bh(n,l,a)),o.forEach(l=>{const a=vh(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function vh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bh(n,e,t){if(e.childName==null||t.childName==null)throw Pt("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n,e){return{eventCache:n,serverCache:e}}function Gt(n,e,t,s){return zn(new $e(e,t,s),n.serverCache)}function bo(n,e,t,s){return zn(n.eventCache,new $e(e,t,s))}function Pn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;const yh=()=>(ss||(ss=new ie(ru)),ss);class z{constructor(e,t=yh()){this.value=e,this.children=t}static fromObject(e){let t=new z(null);return re(e,(s,i)=>{t=t.set(new F(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(I(e))return null;{const s=N(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(W(e),t);return r!=null?{path:Y(new F(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=N(e),s=this.children.get(t);return s!==null?s.subtree(W(e)):new z(null)}}set(e,t){if(I(e))return new z(t,this.children);{const s=N(e),r=(this.children.get(s)||new z(null)).set(W(e),t),o=this.children.insert(s,r);return new z(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new z(null):new z(null,this.children);{const t=N(e),s=this.children.get(t);if(s){const i=s.remove(W(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new z(null):new z(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=N(e),s=this.children.get(t);return s?s.get(W(e)):null}}setTree(e,t){if(I(e))return t;{const s=N(e),r=(this.children.get(s)||new z(null)).setTree(W(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new z(this.value,o)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Y(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(W(e),Y(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=N(e),r=this.children.get(i);return r?r.foreachOnPath_(W(e),Y(t,i),s):new z(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Y(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new z(null))}}function jt(n,e,t){if(I(e))return new we(new z(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=te(i,e);return r=r.updateChild(o,t),new we(n.writeTree_.set(i,r))}else{const i=new z(t),r=n.writeTree_.setTree(e,i);return new we(r)}}}function $i(n,e,t){let s=n;return re(t,(i,r)=>{s=jt(s,Y(e,i),r)}),s}function Xi(n,e){if(I(e))return we.empty();{const t=n.writeTree_.setTree(e,new z(null));return new we(t)}}function ys(n,e){return mt(n,e)!=null}function mt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(te(t.path,e)):null}function Ji(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(V,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function Ye(n,e){if(I(e))return n;{const t=mt(n,e);return t!=null?new we(new z(t)):new we(n.writeTree_.subtree(e))}}function Cs(n){return n.writeTree_.isEmpty()}function Rt(n,e){return yo(P(),n.writeTree_,e)}function yo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=yo(Y(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Y(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,e){return Io(e,n)}function Ch(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=jt(n.visibleWrites,e,t)),n.lastWriteId=s}function wh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Eh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ih(l,s.path)?i=!1:ye(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Sh(n),!0;if(s.snap)n.visibleWrites=Xi(n.visibleWrites,s.path);else{const l=s.children;re(l,a=>{n.visibleWrites=Xi(n.visibleWrites,Y(s.path,a))})}return!0}else return!1}function Ih(n,e){if(n.snap)return ye(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ye(Y(n.path,t),e))return!0;return!1}function Sh(n){n.visibleWrites=Co(n.allWrites,Th,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Th(n){return n.visible}function Co(n,e,t){let s=we.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)ye(t,o)?(l=te(t,o),s=jt(s,l,r.snap)):ye(o,t)&&(l=te(o,t),s=jt(s,P(),r.snap.getChild(l)));else if(r.children){if(ye(t,o))l=te(t,o),s=$i(s,l,r.children);else if(ye(o,t))if(l=te(o,t),I(l))s=$i(s,P(),r.children);else{const a=Tt(r.children,N(l));if(a){const c=a.getChild(W(l));s=jt(s,P(),c)}}}else throw Pt("WriteRecord should have .snap or .children")}}return s}function wo(n,e,t,s,i){if(!s&&!i){const r=mt(n.visibleWrites,e);if(r!=null)return r;{const o=Ye(n.visibleWrites,e);if(Cs(o))return t;if(t==null&&!ys(o,P()))return null;{const l=t||b.EMPTY_NODE;return Rt(o,l)}}}else{const r=Ye(n.visibleWrites,e);if(!i&&Cs(r))return t;if(!i&&t==null&&!ys(r,P()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ye(c.path,e)||ye(e,c.path))},l=Co(n.allWrites,o,e),a=t||b.EMPTY_NODE;return Rt(l,a)}}}function Nh(n,e,t){let s=b.EMPTY_NODE;const i=mt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(V,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ye(n.visibleWrites,e);return t.forEachChild(V,(o,l)=>{const a=Rt(Ye(r,new F(o)),l);s=s.updateImmediateChild(o,a)}),Ji(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ye(n.visibleWrites,e);return Ji(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kh(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(ys(n.visibleWrites,r))return null;{const o=Ye(n.visibleWrites,r);return Cs(o)?i.getChild(t):Rt(o,i.getChild(t))}}function Rh(n,e,t,s){const i=Y(e,t),r=mt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ye(n.visibleWrites,i);return Rt(o,s.getNode().getImmediateChild(t))}else return null}function Ah(n,e){return mt(n.visibleWrites,e)}function xh(n,e,t,s,i,r,o){let l;const a=Ye(n.visibleWrites,e),c=mt(a,P());if(c!=null)l=c;else if(t!=null)l=Rt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Ph(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Dn(n,e,t,s){return wo(n.writeTree,n.treePath,e,t,s)}function Vs(n,e){return Nh(n.writeTree,n.treePath,e)}function Zi(n,e,t,s){return kh(n.writeTree,n.treePath,e,t,s)}function On(n,e){return Ah(n.writeTree,Y(n.treePath,e))}function Dh(n,e,t,s,i,r){return xh(n.writeTree,n.treePath,e,t,s,i,r)}function Gs(n,e,t){return Rh(n.writeTree,n.treePath,e,t)}function Eo(n,e){return Io(Y(n.treePath,e),n.writeTree)}function Io(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Jt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Xt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,kt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Jt(s,e.snapshotNode,i.oldSnap));else throw Pt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const So=new Mh;class js{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $e(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=Dh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){return{filter:n}}function Fh(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Bh(n,e,t,s,i){const r=new Oh;let o,l;if(t.type===Ce.OVERWRITE){const c=t;c.source.fromUser?o=ws(n,e,c.path,c.snap,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=Mn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Ce.MERGE){const c=t;c.source.fromUser?o=Uh(n,e,c.path,c.children,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Es(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Ce.ACK_USER_WRITE){const c=t;c.revert?o=Vh(n,e,c.path,s,i,r):o=zh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ce.LISTEN_COMPLETE)o=Hh(n,e,t.path,s,r);else throw Pt("Unknown operation type: "+t.type);const a=r.getChanges();return Wh(e,o,a),{viewCache:o,changes:a}}function Wh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Pn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(go(Pn(e)))}}function To(n,e,t,s,i,r){const o=e.eventCache;if(On(s,t)!=null)return e;{let l,a;if(I(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),u=c instanceof b?c:b.EMPTY_NODE,h=Vs(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Dn(s,pt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){g(Qe(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Zi(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=W(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Zi(s,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Gs(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Gt(e,l,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function Mn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=N(t);if(!a.isCompleteForPath(t)&&Qe(t)>1)return e;const p=W(t),m=a.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=u.updatePriority(a.getNode(),m):c=u.updateChild(a.getNode(),_,m,p,So,null)}const h=bo(e,c,a.isFullyInitialized()||I(t),u.filtersNodes()),d=new js(i,h,r);return To(n,h,t,i,d,l)}function ws(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new js(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Gt(e,c,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Gt(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=W(t),_=l.getNode().getImmediateChild(h);let p;if(I(d))p=s;else{const f=u.getCompleteChild(h);f!=null?ro(d)===".priority"&&f.getChild(lo(d)).isEmpty()?p=f:p=f.updateChild(d,s):p=b.EMPTY_NODE}if(_.equals(p))a=e;else{const f=n.filter.updateChild(l.getNode(),h,p,d,u,o);a=Gt(e,f,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function er(n,e){return n.eventCache.isCompleteForChild(e)}function Uh(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Y(t,a);er(e,N(u))&&(l=ws(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Y(t,a);er(e,N(u))||(l=ws(n,l,u,c,i,r,o))}),l}function tr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Es(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;I(t)?c=s:c=new z(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=tr(n,_,d);a=Mn(n,a,new F(h),p,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),f=tr(n,p,d);a=Mn(n,a,new F(h),f,i,r,o,l)}}),a}function zh(n,e,t,s,i,r,o){if(On(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(I(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Mn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(I(t)){let c=new z(null);return a.getNode().forEachChild(St,(u,h)=>{c=c.set(new F(u),h)}),Es(n,e,t,c,i,r,l,o)}else return e}else{let c=new z(null);return s.foreach((u,h)=>{const d=Y(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Es(n,e,t,c,i,r,l,o)}}function Hh(n,e,t,s,i){const r=e.serverCache,o=bo(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return To(n,o,t,s,So,i)}function Vh(n,e,t,s,i,r){let o;if(On(s,t)!=null)return e;{const l=new js(s,e,i),a=e.eventCache.getNode();let c;if(I(t)||N(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Dn(s,pt(e));else{const h=e.serverCache.getNode();g(h instanceof b,"serverChildren would be complete if leaf node"),u=Vs(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=N(t);let h=Gs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,W(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,b.EMPTY_NODE,W(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dn(s,pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||On(s,P())!=null,Gt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ws(s.getIndex()),r=ch(s);this.processor_=Lh(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(b.EMPTY_NODE,l.getNode(),null),u=new $e(a,o.isFullyInitialized(),i.filtersNodes()),h=new $e(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=zn(h,u),this.eventGenerator_=new gh(this.query_)}get query(){return this.query_}}function jh(n){return n.viewCache_.serverCache.getNode()}function qh(n){return Pn(n.viewCache_)}function Yh(n,e){const t=pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function nr(n){return n.eventRegistrations_.length===0}function Kh(n,e){n.eventRegistrations_.push(e)}function sr(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ir(n,e,t,s){e.type===Ce.MERGE&&e.source.queryId!==null&&(g(pt(n.viewCache_),"We should always have a full cache before handling merges"),g(Pn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Bh(n.processor_,i,e,t,s);return Fh(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,No(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Qh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(V,(r,o)=>{s.push(kt(r,o))}),t.isFullyInitialized()&&s.push(go(t.getNode())),No(n,s,t.getNode(),e)}function No(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return mh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class ko{constructor(){this.views=new Map}}function $h(n){g(!Ln,"__referenceConstructor has already been defined"),Ln=n}function Xh(){return g(Ln,"Reference.ts has not been loaded"),Ln}function Jh(n){return n.views.size===0}function qs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),ir(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ir(o,e,t,s));return r}}function Ro(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Dn(t,i?s:null),a=!1;l?a=!0:s instanceof b?(l=Vs(t,s),a=!1):(l=b.EMPTY_NODE,a=!1);const c=zn(new $e(l,a,!1),new $e(s,i,!1));return new Gh(e,c)}return o}function Zh(n,e,t,s,i,r){const o=Ro(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Kh(o,t),Qh(o,t)}function ed(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Xe(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(sr(c,t,s)),nr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(sr(a,t,s)),nr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Xe(n)&&r.push(new(Xh())(e._repo,e._path)),{removed:r,events:o}}function Ao(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ke(n,e){let t=null;for(const s of n.views.values())t=t||Yh(s,e);return t}function xo(n,e){if(e._queryParams.loadsAllData())return Vn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Po(n,e){return xo(n,e)!=null}function Xe(n){return Vn(n)!=null}function Vn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;function td(n){g(!Fn,"__referenceConstructor has already been defined"),Fn=n}function nd(){return g(Fn,"Reference.ts has not been loaded"),Fn}let sd=1;class rr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=Ph(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function id(n,e,t,s,i){return Ch(n.pendingWriteTree_,e,t,s,i),i?dn(n,new _t(vo(),e,t)):[]}function Ct(n,e,t=!1){const s=wh(n.pendingWriteTree_,e);if(Eh(n.pendingWriteTree_,e)){let r=new z(null);return s.snap!=null?r=r.set(P(),!0):re(s.children,o=>{r=r.set(new F(o),!0)}),dn(n,new xn(s.path,r,t))}else return[]}function hn(n,e,t){return dn(n,new _t(zs(),e,t))}function rd(n,e,t){const s=z.fromObject(t);return dn(n,new tn(zs(),e,s))}function od(n,e){return dn(n,new en(zs(),e))}function ld(n,e,t){const s=Ys(n,t);if(s){const i=Ks(s),r=i.path,o=i.queryId,l=te(r,e),a=new en(Hs(o),l);return Qs(n,r,a)}else return[]}function Do(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Po(o,e))){const a=ed(o,e,t,s);Jh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,_)=>Xe(_));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=hd(d);for(let p=0;p<_.length;++p){const f=_[p],m=f.query,S=Bo(n,f);n.listenProvider_.startListening(qt(m),nn(n,m),S.hashFn,S.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(qt(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(Gn(d));n.listenProvider_.stopListening(qt(d),_)}))}dd(n,c)}return l}function Oo(n,e,t,s){const i=Ys(n,s);if(i!=null){const r=Ks(i),o=r.path,l=r.queryId,a=te(o,e),c=new _t(Hs(l),a,t);return Qs(n,o,c)}else return[]}function ad(n,e,t,s){const i=Ys(n,s);if(i){const r=Ks(i),o=r.path,l=r.queryId,a=te(o,e),c=z.fromObject(t),u=new tn(Hs(l),a,c);return Qs(n,o,u)}else return[]}function cd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const p=te(d,i);r=r||Ke(_,p),o=o||Xe(_)});let l=n.syncPointTree_.get(i);l?(o=o||Xe(l),r=r||Ke(l,P())):(l=new ko,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=b.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const f=Ke(p,P());f&&(r=r.updateImmediateChild(_,f))}));const c=Po(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Gn(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=fd();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const u=Hn(n.pendingWriteTree_,i);let h=Zh(l,e,t,u,r,a);if(!c&&!o&&!s){const d=xo(l,e);h=h.concat(_d(n,e,d))}return h}function Mo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=te(o,e),c=Ke(l,a);if(c)return c});return wo(i,e,r,t,!0)}function ud(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=te(c,t);s=s||Ke(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Ke(i,P()):(i=new ko,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new $e(s,!0,!1):null,l=Hn(n.pendingWriteTree_,e._path),a=Ro(i,e,l,r?o.getNode():b.EMPTY_NODE,r);return qh(a)}function dn(n,e){return Lo(e,n.syncPointTree_,null,Hn(n.pendingWriteTree_,P()))}function Lo(n,e,t,s){if(I(n.path))return Fo(n,e,t,s);{const i=e.get(P());t==null&&i!=null&&(t=Ke(i,P()));let r=[];const o=N(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Eo(s,o);r=r.concat(Lo(l,a,c,u))}return i&&(r=r.concat(qs(i,n,s,t))),r}}function Fo(n,e,t,s){const i=e.get(P());t==null&&i!=null&&(t=Ke(i,P()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Eo(s,o),u=n.operationForChild(o);u&&(r=r.concat(Fo(u,l,a,c)))}),i&&(r=r.concat(qs(i,n,s,t))),r}function Bo(n,e){const t=e.query,s=nn(n,t);return{hashFn:()=>(jh(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ld(n,t._path,s):od(n,t._path);{const r=au(i,t);return Do(n,t,null,r)}}}}function nn(n,e){const t=Gn(e);return n.queryToTagMap.get(t)}function Gn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ys(n,e){return n.tagToQueryMap.get(e)}function Ks(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new F(n.substr(0,e))}}function Qs(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=Hn(n.pendingWriteTree_,e);return qs(s,t,i,null)}function hd(n){return n.fold((e,t,s)=>{if(t&&Xe(t))return[Vn(t)];{let i=[];return t&&(i=Ao(t)),re(s,(r,o)=>{i=i.concat(o)}),i}})}function qt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nd())(n._repo,n._path):n}function dd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Gn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function fd(){return sd++}function _d(n,e,t){const s=e._path,i=nn(n,e),r=Bo(n,t),o=n.listenProvider_.startListening(qt(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)g(!Xe(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!I(c)&&u&&Xe(u))return[Vn(u).query];{let d=[];return u&&(d=d.concat(Ao(u).map(_=>_.query))),re(h,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(qt(u),nn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $s(t)}node(){return this.node_}}class Xs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new Xs(this.syncTree_,t)}node(){return Mo(this.syncTree_,this.path_)}}const pd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},or=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return gd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return md(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},gd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},md=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},vd=function(n,e,t,s){return Js(e,new Xs(t,n),s)},bd=function(n,e,t){return Js(n,new $s(e),t)};function Js(n,e,t){const s=n.getPriority().val(),i=or(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=or(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new $(l,J(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $(i))),o.forEachChild(V,(l,a)=>{const c=Js(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ei(n,e){let t=e instanceof F?e:new F(e),s=n,i=N(t);for(;i!==null;){const r=Tt(s.node.children,i)||{children:{},childCount:0};s=new Zs(i,s,r),t=W(t),i=N(t)}return s}function Ot(n){return n.node.value}function Wo(n,e){n.node.value=e,Is(n)}function Uo(n){return n.node.childCount>0}function yd(n){return Ot(n)===void 0&&!Uo(n)}function jn(n,e){re(n.node.children,(t,s)=>{e(new Zs(t,n,s))})}function zo(n,e,t,s){t&&!s&&e(n),jn(n,i=>{zo(i,e,!0,s)}),t&&s&&e(n)}function Cd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fn(n){return new F(n.parent===null?n.name:fn(n.parent)+"/"+n.name)}function Is(n){n.parent!==null&&wd(n.parent,n.name,n)}function wd(n,e,t){const s=yd(t),i=We(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Is(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Is(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=/[\[\].#$\/\u0000-\u001F\u007F]/,Id=/[\[\].#$\u0000-\u001F\u007F]/,is=10*1024*1024,Ho=function(n){return typeof n=="string"&&n.length!==0&&!Ed.test(n)},Vo=function(n){return typeof n=="string"&&n.length!==0&&!Id.test(n)},Sd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vo(n)},Go=function(n,e,t){const s=t instanceof F?new zu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ct(s));if(typeof e=="function")throw new Error(n+"contains a function "+ct(s)+" with contents = "+e.toString());if(Br(e))throw new Error(n+"contains "+e.toString()+" "+ct(s));if(typeof e=="string"&&e.length>is/3&&Wn(e)>is)throw new Error(n+"contains a string greater than "+is+" utf8 bytes "+ct(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ho(o)))throw new Error(n+" contains an invalid key ("+o+") "+ct(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hu(s,o),Go(n,l,s),Vu(s)}),i&&r)throw new Error(n+' contains ".value" child '+ct(s)+" in addition to actual children.")}},jo=function(n,e,t,s){if(!Vo(t))throw new Error(kr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Td=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jo(n,e,t)},Nd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ho(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sd(t))throw new Error(kr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ao(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function nt(n,e,t){Rd(n,t),Ad(n,s=>ye(s,e)||ye(e,s))}function Ad(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(xd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function xd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ht&&Z("event: "+t.toString()),cn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="repo_interrupt",Dd=25;class Od{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=An(),this.transactionQueueTree_=new Zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Md(n,e,t){if(n.stats_=Ms(n.repoInfo_),n.forceRestClient_||du())n.server_=new Rn(n.repoInfo_,(s,i,r,o)=>{lr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ar(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{lr(n,s,i,r,o)},s=>{ar(n,s)},s=>{Fd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=mu(n.repoInfo_,()=>new ph(n.stats_,n.server_)),n.infoData_=new uh,n.infoSyncTree_=new rr({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=hn(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ti(n,"connected",!1),n.serverSyncTree_=new rr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);nt(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ld(n){const t=n.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qo(n){return pd({timestamp:Ld(n)})}function lr(n,e,t,s,i){n.dataUpdateCount++;const r=new F(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=En(t,c=>J(c));o=ad(n.serverSyncTree_,r,a,i)}else{const a=J(t);o=Oo(n.serverSyncTree_,r,a,i)}else if(s){const a=En(t,c=>J(c));o=rd(n.serverSyncTree_,r,a)}else{const a=J(t);o=hn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ii(n,r)),nt(n.eventQueue_,l,o)}function ar(n,e){ti(n,"connected",e),e===!1&&Ud(n)}function Fd(n,e){re(e,(t,s)=>{ti(n,t,s)})}function ti(n,e,t){const s=new F("/.info/"+e),i=J(t);n.infoData_.updateSnapshot(s,i);const r=hn(n.infoSyncTree_,s,i);nt(n.eventQueue_,s,r)}function Bd(n){return n.nextWriteId_++}function Wd(n,e,t){const s=ud(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=J(i).withIndex(e._queryParams.getIndex());cd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=hn(n.serverSyncTree_,e._path,r);else{const l=nn(n.serverSyncTree_,e);o=Oo(n.serverSyncTree_,e._path,r,l)}return nt(n.eventQueue_,e._path,o),Do(n.serverSyncTree_,e,t,null,!0),r},i=>(ni(n,"get for query "+q(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ud(n){ni(n,"onDisconnectEvents");const e=qo(n),t=An();bs(n.onDisconnect_,P(),(i,r)=>{const o=vd(i,r,n.serverSyncTree_,e);mo(t,i,o)});let s=[];bs(t,P(),(i,r)=>{s=s.concat(hn(n.serverSyncTree_,i,r));const o=Gd(n,i);ii(n,o)}),n.onDisconnect_=An(),nt(n.eventQueue_,P(),s)}function zd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Pd)}function ni(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Z(t,...e)}function Yo(n,e,t){return Mo(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function si(n,e=n.transactionQueueTree_){if(e||qn(n,e),Ot(e)){const t=Qo(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Hd(n,fn(e),t)}else Uo(e)&&jn(e,t=>{si(n,t)})}function Hd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Yo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{ni(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Ct(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();qn(n,ei(n.transactionQueueTree_,e)),si(n,n.transactionQueueTree_),nt(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)cn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}ii(n,e)}},o)}function ii(n,e){const t=Ko(n,e),s=fn(t),i=Qo(n,t);return Vd(n,i,s),s}function Vd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=te(t,a.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Ct(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Dd)u=!0,h="maxretry",i=i.concat(Ct(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Yo(n,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Go("transaction failed: Data returned ",_,a.path);let p=J(_);typeof _=="object"&&_!=null&&We(_,".priority")||(p=p.updatePriority(d.getPriority()));const m=a.currentWriteId,S=qo(n),R=bd(p,d,S);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=R,a.currentWriteId=Bd(n),o.splice(o.indexOf(m),1),i=i.concat(id(n.serverSyncTree_,a.path,R,a.currentWriteId,a.applyLocally)),i=i.concat(Ct(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(Ct(n.serverSyncTree_,a.currentWriteId,!0))}nt(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}qn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)cn(s[l]);si(n,n.transactionQueueTree_)}function Ko(n,e){let t,s=n.transactionQueueTree_;for(t=N(e);t!==null&&Ot(s)===void 0;)s=ei(s,t),e=W(e),t=N(e);return s}function Qo(n,e){const t=[];return $o(n,e,t),t.sort((s,i)=>s.order-i.order),t}function $o(n,e,t){const s=Ot(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);jn(e,i=>{$o(n,i,t)})}function qn(n,e){const t=Ot(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Wo(e,t.length>0?t:void 0)}jn(e,s=>{qn(n,s)})}function Gd(n,e){const t=fn(Ko(n,e)),s=ei(n.transactionQueueTree_,e);return Cd(s,i=>{rs(n,i)}),rs(n,s),zo(s,i=>{rs(n,i)}),t}function rs(n,e){const t=Ot(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ct(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wo(e,void 0):t.length=r+1,nt(n.eventQueue_,fn(e),i);for(let o=0;o<s.length;o++)cn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const cr=function(n,e){const t=Yd(n),s=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||su();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $r(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new F(t.pathString)}},Yd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=jd(n.substring(u,h)));const d=qd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class Qd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ri{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:ro(this._path)}get ref(){return new Ue(this._repo,this._path)}get _queryIdentifier(){const e=Ki(this._queryParams),t=Ds(e);return t==="{}"?"default":t}get _queryObject(){return Ki(this._queryParams)}isEqual(e){if(e=on(e),!(e instanceof ri))return!1;const t=this._repo===e._repo,s=ao(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uu(this._path)}}class Ue extends ri{constructor(e,t){super(e,t,new Us,!1)}get parent(){const e=lo(this._path);return e===null?null:new Ue(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class sn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new F(e),s=Ss(this.ref,e);return new sn(this._node.getChild(t),s,V)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new sn(i,Ss(this.ref,s),V)))}hasChild(e){const t=new F(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xd(n,e){return n=on(n),n._checkNotDeleted("ref"),n._root}function Ss(n,e){return n=on(n),N(n._path)===null?Td("child","path",e):jo("child","path",e),new Ue(n._repo,Y(n._path,e))}function Jd(n){n=on(n);const e=new $d(()=>{}),t=new oi(e);return Wd(n._repo,n,t).then(s=>new sn(s,new Ue(n._repo,n._path),n._queryParams.getIndex()))}class oi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Kd("value",this,new sn(e.snapshotNode,new Ue(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Qd(this,e,t):null}matches(e){return e instanceof oi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}$h(Ue);td(Ue);/**
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
 */const Zd="FIREBASE_DATABASE_EMULATOR_HOST",Ts={};let ef=!1;function tf(n,e,t,s){n.repoInfo_=new $r(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function nf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=cr(r,i),l=o.repoInfo,a;typeof process<"u"&&Ai&&(a=Ai[Zd]),a?(r=`http://${a}?ns=${l.namespace}`,o=cr(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new _u(n.name,n.options,e);Nd("Invalid Firebase Database URL",o),I(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=rf(l,n,c,new fu(n.name,t));return new of(u,n)}function sf(n,e){const t=Ts[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),zd(n),delete t[n.key]}function rf(n,e,t,s){let i=Ts[e.name];i||(i={},Ts[e.name]=i);let r=i[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Od(n,ef,t,s),i[n.toURLString()]=r,r}class of{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Md(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ue(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function lf(n=Wc(),e){const t=Mc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ta("database");s&&af(t,...s)}return t}function af(n,e,t,s={}){n=on(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new yn(yn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Na(s.mockUserToken,n.app.options.projectId);r=new yn(o)}tf(i,e,t,r)}/**
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
 */function cf(n){Xc(Bc),Sn(new Kt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Et(xi,Pi,n),Et(xi,Pi,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};cf();function uf(n){let e,t,s,i="Seleziona la classe:",r,o,l,a="3 Info",c,u="4 Info",h,d="5 Info",_,p,f,m="Seleziona la materia:",S,R,Q,Ie="TPSI",ne,st="Informatica",se,it="Sistemi e Reti",y,vt="Totale",ze,A,rt,He,Mt;return A=new ga({props:{items:n[0]}}),{c(){e=D("div"),t=D("div"),s=D("label"),s.textContent=i,r=ce(),o=D("select"),l=D("option"),l.textContent=a,c=D("option"),c.textContent=u,h=D("option"),h.textContent=d,_=ce(),p=D("div"),f=D("label"),f.textContent=m,S=ce(),R=D("select"),Q=D("option"),Q.textContent=Ie,ne=D("option"),ne.textContent=st,se=D("option"),se.textContent=it,y=D("option"),y.textContent=vt,ze=ce(),he(A.$$.fragment),this.h()},l(G){e=O(G,"DIV",{class:!0});var ee=x(e);t=O(ee,"DIV",{});var me=x(t);s=O(me,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),Te(s)!=="svelte-fizozt"&&(s.textContent=i),r=ue(me),o=O(me,"SELECT",{name:!0,id:!0,class:!0});var Se=x(o);l=O(Se,"OPTION",{"data-svelte-h":!0}),Te(l)!=="svelte-1avwpfu"&&(l.textContent=a),c=O(Se,"OPTION",{"data-svelte-h":!0}),Te(c)!=="svelte-q3x82o"&&(c.textContent=u),h=O(Se,"OPTION",{"data-svelte-h":!0}),Te(h)!=="svelte-70otfa"&&(h.textContent=d),Se.forEach(v),me.forEach(v),_=ue(ee),p=O(ee,"DIV",{});var ot=x(p);f=O(ot,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),Te(f)!=="svelte-1ch515j"&&(f.textContent=m),S=ue(ot),R=O(ot,"SELECT",{name:!0,id:!0,class:!0});var ve=x(R);Q=O(ve,"OPTION",{"data-svelte-h":!0}),Te(Q)!=="svelte-q6yvwu"&&(Q.textContent=Ie),ne=O(ve,"OPTION",{"data-svelte-h":!0}),Te(ne)!=="svelte-12xyn8s"&&(ne.textContent=st),se=O(ve,"OPTION",{"data-svelte-h":!0}),Te(se)!=="svelte-1l6801"&&(se.textContent=it),y=O(ve,"OPTION",{"data-svelte-h":!0}),Te(y)!=="svelte-ksj1rm"&&(y.textContent=vt),ve.forEach(v),ot.forEach(v),ee.forEach(v),ze=ue(G),de(A.$$.fragment,G),this.h()},h(){C(s,"for","select-class"),C(s,"class","svelte-mi7nng"),l.__value="3",lt(l,l.__value),c.__value="4",lt(c,c.__value),h.__value="5",lt(h,h.__value),C(o,"name","classe"),C(o,"id","classe"),C(o,"class","svelte-mi7nng"),n[1]===void 0&&ai(()=>n[4].call(o)),C(f,"for","select-subject"),C(f,"class","svelte-mi7nng"),Q.__value="TPSI",lt(Q,Q.__value),ne.__value="informatica",lt(ne,ne.__value),se.__value="reti",lt(se,se.__value),y.__value="all",lt(y,y.__value),C(R,"name","materia"),C(R,"id","materia"),C(R,"class","svelte-mi7nng"),n[2]===void 0&&ai(()=>n[5].call(R)),C(e,"class","select-container svelte-mi7nng")},m(G,ee){k(G,e,ee),T(e,t),T(t,s),T(t,r),T(t,o),T(o,l),T(o,c),T(o,h),gn(o,n[1],!0),T(e,_),T(e,p),T(p,f),T(p,S),T(p,R),T(R,Q),T(R,ne),T(R,se),T(R,y),gn(R,n[2],!0),k(G,ze,ee),fe(A,G,ee),rt=!0,He||(Mt=[H(o,"change",n[4]),H(o,"change",function(){os(n[3](n[2],n[1]))&&n[3](n[2],n[1]).apply(this,arguments)}),H(R,"change",n[5]),H(R,"change",function(){os(n[3](n[2],n[1]))&&n[3](n[2],n[1]).apply(this,arguments)})],He=!0)},p(G,[ee]){n=G,ee&2&&gn(o,n[1]),ee&4&&gn(R,n[2]);const me={};ee&1&&(me.items=n[0]),A.$set(me)},i(G){rt||(M(A.$$.fragment,G),rt=!0)},o(G){L(A.$$.fragment,G),rt=!1},d(G){G&&(v(e),v(ze)),_e(A,G),He=!1,Bn(Mt)}}}function hf(n,e,t){Pr({apiKey:"AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",authDomain:"lambsoffame.firebaseapp.com",databaseURL:"https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",projectId:"lambsoffame",storageBucket:"lambsoffame.appspot.com",messagingSenderId:"583547239362",appId:"1:583547239362:web:eda69c76496ccc9cbd345b"});const i=async()=>{const d=Xd(lf());return(await Jd(Ss(d,"leaderboard/"))).val()},r=async(d,_)=>{if(d==="all"){let p=Object.values(c.TPSI).concat(Object.values(c.reti),Object.values(c.informatica)).filter(f=>f.class==_);t(0,o=Array.from(new Set(p.map(f=>f.username))).map(f=>p.filter(m=>m.username===f)).map(f=>({username:f[0].username,avatar:f[0].avatar,class:f[0].class,points:f.reduce((m,S)=>m+S.points,0)})).sort((f,m)=>m.points-f.points))}else{let p=c[`${d}`];t(0,o=Object.values(p).sort((f,m)=>m.points-f.points).filter(f=>f.class==_))}};Xo(async()=>{c=await i(),r("TPSI",3)});let o=[],l,a,c={};function u(){l=ci(this),t(1,l)}function h(){a=ci(this),t(2,a)}return[o,l,a,r,u,h]}class _f extends Fe{constructor(e){super(),Be(this,e,hf,uf,Le,{})}}export{_f as component};
