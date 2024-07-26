import{s as We,c as et,x as $,u as tt,g as nt,a as st,y as be,z as ye,A as vn,B as Me,i as cs,r as zn,C as Y,n as St,D as ui,k as hi,o as tl}from"../chunks/scheduler.DgBBsiCx.js";import{S as Ue,i as ze,e as A,c as x,d as P,g as v,y as Re,o as C,j as T,k,t as O,a as L,q as As,n as xs,z as H,m as Ae,A as fe,B as _e,C as In,b as xe,f as Pe,l as Dt,s as ae,u as pe,D as nl,E as de,h as ce,v as ge,w as me,x as ve,F as sl,G as Ge,H as bn,I as di}from"../chunks/index.QlzZvLOd.js";function fi(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gt(n,e){const t={},s={},i={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(s[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);n[r]=l}else for(const a in o)i[a]=1}for(const o in s)o in t||(t[o]=void 0);return t}const Ps="-";function il(n){const e=ol(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;function i(o){const l=o.split(Ps);return l[0]===""&&l.length!==1&&l.shift(),_r(l,e)||rl(o)}function r(o,l){const a=t[o]||[];return l&&s[o]?[...a,...s[o]]:a}return{getClassGroupId:i,getConflictingClassGroupIds:r}}function _r(n,e){var o;if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),i=s?_r(n.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=n.join(Ps);return(o=e.validators.find(({validator:l})=>l(r)))==null?void 0:o.classGroupId}const _i=/^\[(.+)\]$/;function rl(n){if(_i.test(n)){const e=_i.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function ol(n){const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return al(Object.entries(n.classGroups),t).forEach(([r,o])=>{us(o,s,r,e)}),s}function us(n,e,t,s){n.forEach(i=>{if(typeof i=="string"){const r=i===""?e:pi(e,i);r.classGroupId=t;return}if(typeof i=="function"){if(ll(i)){us(i(s),e,t,s);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([r,o])=>{us(o,pi(e,r),t,s)})})}function pi(n,e){let t=n;return e.split(Ps).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t}function ll(n){return n.isThemeGetter}function al(n,e){return e?n.map(([t,s])=>{const i=s.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,l])=>[e+o,l])):r);return[t,i]}):n}function cl(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;function i(r,o){t.set(r,o),e++,e>n&&(e=0,s=t,t=new Map)}return{get(r){let o=t.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){t.has(r)?t.set(r,o):i(r,o)}}}const pr="!";function ul(n){const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,i=e[0],r=e.length;function o(l){const a=[];let c=0,u=0,h;for(let m=0;m<l.length;m++){let E=l[m];if(c===0){if(E===i&&(s||l.slice(m,m+r)===e)){a.push(l.slice(u,m)),u=m+r;continue}if(E==="/"){h=m;continue}}E==="["?c++:E==="]"&&c--}const d=a.length===0?l:l.substring(u),f=d.startsWith(pr),p=f?d.substring(1):d,_=h&&h>u?h-u:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:_}}return t?function(a){return t({className:a,parseClassName:o})}:o}function hl(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e}function dl(n){return{cache:cl(n.cacheSize),parseClassName:ul(n),...il(n)}}const fl=/\s+/;function _l(n,e){const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:i}=e,r=new Set;return n.trim().split(fl).map(o=>{const{modifiers:l,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let h=!!u,d=s(h?c.substring(0,u):c);if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=s(c),!d)return{isTailwindClass:!1,originalClassName:o};h=!1}const f=hl(l).join(":");return{isTailwindClass:!0,modifierId:a?f+pr:f,classGroupId:d,originalClassName:o,hasPostfixModifier:h}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:l,classGroupId:a,hasPostfixModifier:c}=o,u=l+a;return r.has(u)?!1:(r.add(u),i(a,c).forEach(h=>r.add(l+h)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function hs(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=gr(e))&&(s&&(s+=" "),s+=t);return s}function gr(n){if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=gr(n[s]))&&(t&&(t+=" "),t+=e);return t}function pl(n,...e){let t,s,i,r=o;function o(a){const c=e.reduce((u,h)=>h(u),n());return t=dl(c),s=t.cache.get,i=t.cache.set,r=l,l(a)}function l(a){const c=s(a);if(c)return c;const u=_l(a,t);return i(a,u),u}return function(){return r(hs.apply(null,arguments))}}function U(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const mr=/^\[(?:([a-z-]+):)?(.+)\]$/i,gl=/^\d+\/\d+$/,ml=new Set(["px","full","screen"]),vl=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,bl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Cl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wl=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Oe(n){return ut(n)||ml.has(n)||gl.test(n)}function je(n){return Ot(n,"length",Al)}function ut(n){return!!n&&!Number.isNaN(Number(n))}function yn(n){return Ot(n,"number",ut)}function Bt(n){return!!n&&Number.isInteger(Number(n))}function El(n){return n.endsWith("%")&&ut(n.slice(0,-1))}function w(n){return mr.test(n)}function qe(n){return vl.test(n)}const Il=new Set(["length","size","percentage"]);function Sl(n){return Ot(n,Il,vr)}function Tl(n){return Ot(n,"position",vr)}const kl=new Set(["image","url"]);function Nl(n){return Ot(n,kl,Pl)}function Rl(n){return Ot(n,"",xl)}function Wt(){return!0}function Ot(n,e,t){const s=mr.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1}function Al(n){return bl.test(n)&&!yl.test(n)}function vr(){return!1}function xl(n){return Cl.test(n)}function Pl(n){return wl.test(n)}function Dl(){const n=U("colors"),e=U("spacing"),t=U("blur"),s=U("brightness"),i=U("borderColor"),r=U("borderRadius"),o=U("borderSpacing"),l=U("borderWidth"),a=U("contrast"),c=U("grayscale"),u=U("hueRotate"),h=U("invert"),d=U("gap"),f=U("gradientColorStops"),p=U("gradientColorStopPositions"),_=U("inset"),m=U("margin"),E=U("opacity"),R=U("padding"),X=U("saturate"),Ne=U("scale"),se=U("sepia"),rt=U("skew"),ie=U("space"),ot=U("translate"),y=()=>["auto","contain","none"],vt=()=>["auto","hidden","clip","visible","scroll"],le=()=>["auto",w,e],M=()=>[w,e],lt=()=>["",Oe,je],Ce=()=>["auto",ut,w],we=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],De=()=>["solid","dashed","dotted","double","none"],bt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],yt=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",w],V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>[ut,yn],he=()=>[ut,w];return{cacheSize:500,separator:":",theme:{colors:[Wt],spacing:[Oe,je],blur:["none","",qe,w],brightness:q(),borderColor:[n],borderRadius:["none","","full",qe,w],borderSpacing:M(),borderWidth:lt(),contrast:q(),grayscale:j(),hueRotate:he(),invert:j(),gap:M(),gradientColorStops:[n],gradientColorStopPositions:[El,je],inset:le(),margin:le(),opacity:q(),padding:M(),saturate:q(),scale:q(),sepia:j(),skew:he(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",w]}],container:["container"],columns:[{columns:[qe]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...we(),w]}],overflow:[{overflow:vt()}],"overflow-x":[{"overflow-x":vt()}],"overflow-y":[{"overflow-y":vt()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Bt,w]}],basis:[{basis:le()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",w]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",Bt,w]}],"grid-cols":[{"grid-cols":[Wt]}],"col-start-end":[{col:["auto",{span:["full",Bt,w]},w]}],"col-start":[{"col-start":Ce()}],"col-end":[{"col-end":Ce()}],"grid-rows":[{"grid-rows":[Wt]}],"row-start-end":[{row:["auto",{span:[Bt,w]},w]}],"row-start":[{"row-start":Ce()}],"row-end":[{"row-end":Ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",w]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",w]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...yt()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...yt(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...yt(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[ie]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ie]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",w,e]}],"min-w":[{"min-w":[w,e,"min","max","fit"]}],"max-w":[{"max-w":[w,e,"none","full","min","max","fit","prose",{screen:[qe]},qe]}],h:[{h:[w,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[w,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[w,e,"auto","min","max","fit"]}],"font-size":[{text:["base",qe,je]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",yn]}],"font-family":[{font:[Wt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",w]}],"line-clamp":[{"line-clamp":["none",ut,yn]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Oe,w]}],"list-image":[{"list-image":["none",w]}],"list-style-type":[{list:["none","disc","decimal",w]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...De(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Oe,je]}],"underline-offset":[{"underline-offset":["auto",Oe,w]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",w]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",w]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...we(),Tl]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Sl]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nl]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...De(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:De()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...De()]}],"outline-offset":[{"outline-offset":[Oe,w]}],"outline-w":[{outline:[Oe,je]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:lt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Oe,je]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",qe,Rl]}],"shadow-color":[{shadow:[Wt]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...bt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":bt()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",qe,w]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[X]}],sepia:[{sepia:[se]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[X]}],"backdrop-sepia":[{"backdrop-sepia":[se]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",w]}],duration:[{duration:he()}],ease:[{ease:["linear","in","out","in-out",w]}],delay:[{delay:he()}],animate:[{animate:["none","spin","ping","pulse","bounce",w]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Ne]}],"scale-x":[{"scale-x":[Ne]}],"scale-y":[{"scale-y":[Ne]}],rotate:[{rotate:[Bt,w]}],"translate-x":[{"translate-x":[ot]}],"translate-y":[{"translate-y":[ot]}],"skew-x":[{"skew-x":[rt]}],"skew-y":[{"skew-y":[rt]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",w]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",w]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",w]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Oe,je,yn]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ke=pl(Dl);function Ol(n){let e,t,s,i,r;const o=n[11].default,l=et(o,n,n[10],null);let a=[n[4],{class:s=ke("w-full text-left text-sm",n[3][n[2]],n[5].class)}],c={};for(let u=0;u<a.length;u+=1)c=$(c,a[u]);return{c(){e=A("div"),t=A("table"),l&&l.c(),this.h()},l(u){e=x(u,"DIV",{class:!0});var h=P(e);t=x(h,"TABLE",{class:!0});var d=P(t);l&&l.l(d),d.forEach(v),h.forEach(v),this.h()},h(){Re(t,c),C(e,"class",i=hs(n[0],n[1]&&"shadow-md sm:rounded-lg"))},m(u,h){T(u,e,h),k(e,t),l&&l.m(t,null),r=!0},p(u,[h]){l&&l.p&&(!r||h&1024)&&tt(l,o,u,u[10],r?st(o,u[10],h,null):nt(u[10]),null),Re(t,c=gt(a,[h&16&&u[4],(!r||h&36&&s!==(s=ke("w-full text-left text-sm",u[3][u[2]],u[5].class)))&&{class:s}])),(!r||h&3&&i!==(i=hs(u[0],u[1]&&"shadow-md sm:rounded-lg")))&&C(e,"class",i)},i(u){r||(O(l,u),r=!0)},o(u){L(l,u),r=!1},d(u){u&&v(e),l&&l.d(u)}}}function Ml(n,e,t){const s=["divClass","striped","hoverable","noborder","shadow","color","customeColor"];let i=be(e,s),{$$slots:r={},$$scope:o}=e,{divClass:l="relative overflow-x-auto"}=e,{striped:a=!1}=e,{hoverable:c=!1}=e,{noborder:u=!1}=e,{shadow:h=!1}=e,{color:d="default"}=e,{customeColor:f=""}=e;const p={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:f};return n.$$set=_=>{t(5,e=$($({},e),ye(_))),t(4,i=be(e,s)),"divClass"in _&&t(0,l=_.divClass),"striped"in _&&t(6,a=_.striped),"hoverable"in _&&t(7,c=_.hoverable),"noborder"in _&&t(8,u=_.noborder),"shadow"in _&&t(1,h=_.shadow),"color"in _&&t(2,d=_.color),"customeColor"in _&&t(9,f=_.customeColor),"$$scope"in _&&t(10,o=_.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&vn("striped",a),n.$$.dirty&128&&vn("hoverable",c),n.$$.dirty&256&&vn("noborder",u),n.$$.dirty&4&&vn("color",d)},e=ye(e),[l,h,d,p,i,e,a,c,u,f,o,r]}class Ll extends Ue{constructor(e){super(),ze(this,e,Ml,Ol,We,{divClass:0,striped:6,hoverable:7,noborder:8,shadow:1,color:2,customeColor:9})}}function Fl(n){let e,t;const s=n[2].default,i=et(s,n,n[1],null);return{c(){e=A("tbody"),i&&i.c(),this.h()},l(r){e=x(r,"TBODY",{class:!0});var o=P(e);i&&i.l(o),o.forEach(v),this.h()},h(){C(e,"class",n[0])},m(r,o){T(r,e,o),i&&i.m(e,null),t=!0},p(r,[o]){i&&i.p&&(!t||o&2)&&tt(i,s,r,r[1],t?st(s,r[1],o,null):nt(r[1]),null),(!t||o&1)&&C(e,"class",r[0])},i(r){t||(O(i,r),t=!0)},o(r){L(i,r),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Bl(n,e,t){let{$$slots:s={},$$scope:i}=e,{tableBodyClass:r=void 0}=e;return n.$$set=o=>{"tableBodyClass"in o&&t(0,r=o.tableBodyClass),"$$scope"in o&&t(1,i=o.$$scope)},[r,i,s]}class Wl extends Ue{constructor(e){super(),ze(this,e,Bl,Fl,We,{tableBodyClass:0})}}function Ul(n){let e;const t=n[6].default,s=et(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&tt(s,t,i,i[5],e?st(t,i[5],r,null):nt(i[5]),null)},i(i){e||(O(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function zl(n){let e,t,s,i;const r=n[6].default,o=et(r,n,n[5],null);return{c(){e=A("button"),o&&o.c()},l(l){e=x(l,"BUTTON",{});var a=P(e);o&&o.l(a),a.forEach(v)},m(l,a){T(l,e,a),o&&o.m(e,null),t=!0,s||(i=H(e,"click",function(){cs(n[1].onclick)&&n[1].onclick.apply(this,arguments)}),s=!0)},p(l,a){n=l,o&&o.p&&(!t||a&32)&&tt(o,r,n,n[5],t?st(r,n[5],a,null):nt(n[5]),null)},i(l){t||(O(o,l),t=!0)},o(l){L(o,l),t=!1},d(l){l&&v(e),o&&o.d(l),s=!1,i()}}}function Hl(n){let e,t,s,i;const r=[zl,Ul],o=[];function l(u,h){return u[1].onclick?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[0]}],c={};for(let u=0;u<a.length;u+=1)c=$(c,a[u]);return{c(){e=A("td"),s.c(),this.h()},l(u){e=x(u,"TD",{class:!0});var h=P(e);s.l(h),h.forEach(v),this.h()},h(){Re(e,c)},m(u,h){T(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(As(),L(o[d],1,1,()=>{o[d]=null}),xs(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),O(s,1),s.m(e,null)),Re(e,c=gt(a,[h&4&&u[2],(!i||h&1)&&{class:u[0]}]))},i(u){i||(O(s),i=!0)},o(u){L(s),i=!1},d(u){u&&v(e),o[t].d()}}}function Vl(n,e,t){const s=["tdClass"];let i=be(e,s),{$$slots:r={},$$scope:o}=e,{tdClass:l="px-6 py-4 whitespace-nowrap font-medium "}=e,a="default";a=Me("color");let c;return n.$$set=u=>{t(1,e=$($({},e),ye(u))),t(2,i=be(e,s)),"tdClass"in u&&t(3,l=u.tdClass),"$$scope"in u&&t(5,o=u.$$scope)},n.$$.update=()=>{t(0,c=ke(l,a==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",e.class))},e=ye(e),[c,e,i,l,a,o,r]}class $n extends Ue{constructor(e){super(),ze(this,e,Vl,Hl,We,{tdClass:3})}}function Gl(n){let e,t,s,i;const r=n[4].default,o=et(r,n,n[3],null);let l=[n[1],{class:n[0]}],a={};for(let c=0;c<l.length;c+=1)a=$(a,l[c]);return{c(){e=A("tr"),o&&o.c(),this.h()},l(c){e=x(c,"TR",{class:!0});var u=P(e);o&&o.l(u),u.forEach(v),this.h()},h(){Re(e,a)},m(c,u){T(c,e,u),o&&o.m(e,null),t=!0,s||(i=[H(e,"click",n[5]),H(e,"contextmenu",n[6]),H(e,"dblclick",n[7])],s=!0)},p(c,[u]){o&&o.p&&(!t||u&8)&&tt(o,r,c,c[3],t?st(r,c[3],u,null):nt(c[3]),null),Re(e,a=gt(l,[u&2&&c[1],(!t||u&1)&&{class:c[0]}]))},i(c){t||(O(o,c),t=!0)},o(c){L(o,c),t=!1},d(c){c&&v(e),o&&o.d(c),s=!1,zn(i)}}}function jl(n,e,t){const s=["color"];let i=be(e,s),{$$slots:r={},$$scope:o}=e,{color:l=Me("color")}=e;const a={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},c={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},u={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let h;function d(_){Y.call(this,n,_)}function f(_){Y.call(this,n,_)}function p(_){Y.call(this,n,_)}return n.$$set=_=>{t(11,e=$($({},e),ye(_))),t(1,i=be(e,s)),"color"in _&&t(2,l=_.color),"$$scope"in _&&t(3,o=_.$$scope)},n.$$.update=()=>{t(0,h=ke([!Me("noborder")&&"border-b last:border-b-0",a[l],Me("hoverable")&&c[l],Me("striped")&&u[l],e.class]))},e=ye(e),[h,i,l,o,r,d,f,p]}class ql extends Ue{constructor(e){super(),ze(this,e,jl,Gl,We,{color:2})}}function Yl(n){let e;const t=n[6].default,s=et(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&tt(s,t,i,i[5],e?st(t,i[5],r,null):nt(i[5]),null)},i(i){e||(O(s,i),e=!0)},o(i){L(s,i),e=!1},d(i){s&&s.d(i)}}}function Kl(n){let e,t;const s=n[6].default,i=et(s,n,n[5],null);return{c(){e=A("tr"),i&&i.c()},l(r){e=x(r,"TR",{});var o=P(e);i&&i.l(o),o.forEach(v)},m(r,o){T(r,e,o),i&&i.m(e,null),t=!0},p(r,o){i&&i.p&&(!t||o&32)&&tt(i,s,r,r[5],t?st(s,r[5],o,null):nt(r[5]),null)},i(r){t||(O(i,r),t=!0)},o(r){L(i,r),t=!1},d(r){r&&v(e),i&&i.d(r)}}}function Ql(n){let e,t,s,i;const r=[Kl,Yl],o=[];function l(u,h){return u[0]?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[1]}],c={};for(let u=0;u<a.length;u+=1)c=$(c,a[u]);return{c(){e=A("thead"),s.c(),this.h()},l(u){e=x(u,"THEAD",{class:!0});var h=P(e);s.l(h),h.forEach(v),this.h()},h(){Re(e,c)},m(u,h){T(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(As(),L(o[d],1,1,()=>{o[d]=null}),xs(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),O(s,1),s.m(e,null)),Re(e,c=gt(a,[h&4&&u[2],(!i||h&2)&&{class:u[1]}]))},i(u){i||(O(s),i=!0)},o(u){L(s),i=!1},d(u){u&&v(e),o[t].d()}}}function $l(n,e,t){let s;const i=["theadClass","defaultRow"];let r=be(e,i),{$$slots:o={},$$scope:l}=e,{theadClass:a="text-xs uppercase"}=e,{defaultRow:c=!0}=e,u;u=Me("color");let h=Me("noborder"),d=Me("striped");const p={default:h||d?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let _=u==="default"?"text-gray-700 dark:text-gray-400":u==="custom"?"":"text-white  dark:text-white",m=d?"":u==="default"?"border-gray-700":u==="custom"?"":`border-${u}-400`;return n.$$set=E=>{t(13,e=$($({},e),ye(E))),t(2,r=be(e,i)),"theadClass"in E&&t(3,a=E.theadClass),"defaultRow"in E&&t(0,c=E.defaultRow),"$$scope"in E&&t(5,l=E.$$scope)},n.$$.update=()=>{t(1,s=ke(a,_,d&&m,p[u],e.class))},e=ye(e),[c,s,r,a,u,l,o]}class Xl extends Ue{constructor(e){super(),ze(this,e,$l,Ql,We,{theadClass:3,defaultRow:0})}}function Jl(n){let e,t,s,i,r;const o=n[4].default,l=et(o,n,n[3],null);let a=[n[1],{class:t=ke(n[0],n[2].class)}],c={};for(let u=0;u<a.length;u+=1)c=$(c,a[u]);return{c(){e=A("th"),l&&l.c(),this.h()},l(u){e=x(u,"TH",{class:!0});var h=P(e);l&&l.l(h),h.forEach(v),this.h()},h(){Re(e,c)},m(u,h){T(u,e,h),l&&l.m(e,null),s=!0,i||(r=[H(e,"click",n[5]),H(e,"focus",n[6]),H(e,"keydown",n[7]),H(e,"keypress",n[8]),H(e,"keyup",n[9]),H(e,"mouseenter",n[10]),H(e,"mouseleave",n[11]),H(e,"mouseover",n[12])],i=!0)},p(u,[h]){l&&l.p&&(!s||h&8)&&tt(l,o,u,u[3],s?st(o,u[3],h,null):nt(u[3]),null),Re(e,c=gt(a,[h&2&&u[1],(!s||h&5&&t!==(t=ke(u[0],u[2].class)))&&{class:t}]))},i(u){s||(O(l,u),s=!0)},o(u){L(l,u),s=!1},d(u){u&&v(e),l&&l.d(u),i=!1,zn(r)}}}function Zl(n,e,t){const s=["padding"];let i=be(e,s),{$$slots:r={},$$scope:o}=e,{padding:l="px-6 py-3"}=e;function a(m){Y.call(this,n,m)}function c(m){Y.call(this,n,m)}function u(m){Y.call(this,n,m)}function h(m){Y.call(this,n,m)}function d(m){Y.call(this,n,m)}function f(m){Y.call(this,n,m)}function p(m){Y.call(this,n,m)}function _(m){Y.call(this,n,m)}return n.$$set=m=>{t(2,e=$($({},e),ye(m))),t(1,i=be(e,s)),"padding"in m&&t(0,l=m.padding),"$$scope"in m&&t(3,o=m.$$scope)},e=ye(e),[l,i,e,o,r,a,c,u,h,d,f,p,_]}class Xn extends Ue{constructor(e){super(),ze(this,e,Zl,Jl,We,{padding:0})}}function ea(n){let e,t,s,i,r,o,l,a=n[4].id&&n[4].title&&gi(n),c=n[5].id&&n[5].desc&&mi(n),u=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=ke("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],h={};for(let d=0;d<u.length;d+=1)h=$(h,u[d]);return{c(){e=fe("svg"),a&&a.c(),t=Ae(),c&&c.c(),s=fe("path"),i=fe("path"),r=fe("path"),this.h()},l(d){e=_e(d,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var f=P(e);a&&a.l(f),t=Ae(),c&&c.l(f),s=_e(f,"path",{d:!0}),P(s).forEach(v),i=_e(f,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),P(i).forEach(v),r=_e(f,"path",{d:!0}),P(r).forEach(v),f.forEach(v),this.h()},h(){C(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),C(i,"fill-rule","evenodd"),C(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),C(i,"clip-rule","evenodd"),C(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),In(e,h)},m(d,f){T(d,e,f),a&&a.m(e,null),k(e,t),c&&c.m(e,null),k(e,s),k(e,i),k(e,r)},p(d,f){d[4].id&&d[4].title?a?a.p(d,f):(a=gi(d),a.c(),a.m(e,t)):a&&(a.d(1),a=null),d[5].id&&d[5].desc?c?c.p(d,f):(c=mi(d),c.c(),c.m(e,s)):c&&(c.d(1),c=null),In(e,h=gt(u,[{xmlns:"http://www.w3.org/2000/svg"},f&4&&{fill:d[2]},f&1024&&d[10],f&2049&&o!==(o=ke("shrink-0",d[8][d[0]??"md"],d[11].class))&&{class:o},f&2&&{role:d[1]},f&64&&{"aria-label":d[6]},f&128&&l!==(l=d[7]?d[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(d){d&&v(e),a&&a.d(),c&&c.d()}}}function ta(n){let e,t,s,i,r,o,l,a,c,u=n[4].id&&n[4].title&&vi(n),h=n[5].id&&n[5].desc&&bi(n),d=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=ke("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],f={};for(let p=0;p<d.length;p+=1)f=$(f,d[p]);return{c(){e=fe("svg"),u&&u.c(),t=Ae(),h&&h.c(),s=fe("path"),i=fe("path"),r=fe("path"),this.h()},l(p){e=_e(p,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var _=P(e);u&&u.l(_),t=Ae(),h&&h.l(_),s=_e(_,"path",{d:!0}),P(s).forEach(v),i=_e(_,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),P(i).forEach(v),r=_e(_,"path",{d:!0}),P(r).forEach(v),_.forEach(v),this.h()},h(){C(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),C(i,"fill-rule","evenodd"),C(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),C(i,"clip-rule","evenodd"),C(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),In(e,f)},m(p,_){T(p,e,_),u&&u.m(e,null),k(e,t),h&&h.m(e,null),k(e,s),k(e,i),k(e,r),a||(c=[H(e,"click",n[12]),H(e,"keydown",n[13]),H(e,"keyup",n[14]),H(e,"focus",n[15]),H(e,"blur",n[16]),H(e,"mouseenter",n[17]),H(e,"mouseleave",n[18]),H(e,"mouseover",n[19]),H(e,"mouseout",n[20])],a=!0)},p(p,_){p[4].id&&p[4].title?u?u.p(p,_):(u=vi(p),u.c(),u.m(e,t)):u&&(u.d(1),u=null),p[5].id&&p[5].desc?h?h.p(p,_):(h=bi(p),h.c(),h.m(e,s)):h&&(h.d(1),h=null),In(e,f=gt(d,[{xmlns:"http://www.w3.org/2000/svg"},_&4&&{fill:p[2]},_&1024&&p[10],_&2049&&o!==(o=ke("shrink-0",p[8][p[0]??"md"],p[11].class))&&{class:o},_&2&&{role:p[1]},_&64&&{"aria-label":p[6]},_&128&&l!==(l=p[7]?p[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(p){p&&v(e),u&&u.d(),h&&h.d(),a=!1,zn(c)}}}function gi(n){let e,t=n[4].title+"",s,i;return{c(){e=fe("title"),s=xe(t),this.h()},l(r){e=_e(r,"title",{id:!0});var o=P(e);s=Pe(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[4].id)},m(r,o){T(r,e,o),k(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Dt(s,t),o&16&&i!==(i=r[4].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function mi(n){let e,t=n[5].desc+"",s,i;return{c(){e=fe("desc"),s=xe(t),this.h()},l(r){e=_e(r,"desc",{id:!0});var o=P(e);s=Pe(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[5].id)},m(r,o){T(r,e,o),k(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Dt(s,t),o&32&&i!==(i=r[5].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function vi(n){let e,t=n[4].title+"",s,i;return{c(){e=fe("title"),s=xe(t),this.h()},l(r){e=_e(r,"title",{id:!0});var o=P(e);s=Pe(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[4].id)},m(r,o){T(r,e,o),k(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Dt(s,t),o&16&&i!==(i=r[4].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function bi(n){let e,t=n[5].desc+"",s,i;return{c(){e=fe("desc"),s=xe(t),this.h()},l(r){e=_e(r,"desc",{id:!0});var o=P(e);s=Pe(o,t),o.forEach(v),this.h()},h(){C(e,"id",i=n[5].id)},m(r,o){T(r,e,o),k(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Dt(s,t),o&32&&i!==(i=r[5].id)&&C(e,"id",i)},d(r){r&&v(e)}}}function na(n){let e;function t(r,o){return r[3]?ta:ea}let s=t(n),i=s(n);return{c(){i.c(),e=Ae()},l(r){i.l(r),e=Ae()},m(r,o){i.m(r,o),T(r,e,o)},p(r,[o]){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:St,o:St,d(r){r&&v(e),i.d(r)}}}function sa(n,e,t){const s=["size","role","color","withEvents","title","desc","ariaLabel"];let i=be(e,s);const r=Me("iconCtx")??{},o={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let{size:l=r.size||"md"}=e,{role:a=r.role||"img"}=e,{color:c=r.color||"currentColor"}=e,{withEvents:u=r.withEvents||!1}=e,{title:h={}}=e,{desc:d={}}=e,f=`${h.id||""} ${d.id||""}`,p=!1,{ariaLabel:_="award solid"}=e;function m(y){Y.call(this,n,y)}function E(y){Y.call(this,n,y)}function R(y){Y.call(this,n,y)}function X(y){Y.call(this,n,y)}function Ne(y){Y.call(this,n,y)}function se(y){Y.call(this,n,y)}function rt(y){Y.call(this,n,y)}function ie(y){Y.call(this,n,y)}function ot(y){Y.call(this,n,y)}return n.$$set=y=>{t(11,e=$($({},e),ye(y))),t(10,i=be(e,s)),"size"in y&&t(0,l=y.size),"role"in y&&t(1,a=y.role),"color"in y&&t(2,c=y.color),"withEvents"in y&&t(3,u=y.withEvents),"title"in y&&t(4,h=y.title),"desc"in y&&t(5,d=y.desc),"ariaLabel"in y&&t(6,_=y.ariaLabel)},n.$$.update=()=>{n.$$.dirty&48&&(h.id||d.id?t(7,p=!0):t(7,p=!1))},e=ye(e),[l,a,c,u,h,d,_,p,o,f,i,e,m,E,R,X,Ne,se,rt,ie,ot]}class ia extends Ue{constructor(e){super(),ze(this,e,sa,na,We,{size:0,role:1,color:2,withEvents:3,title:4,desc:5,ariaLabel:6})}}function yi(n,e,t){const s=n.slice();return s[1]=e[t],s[3]=t,s}function ra(n){let e;return{c(){e=xe("Pos")},l(t){e=Pe(t,"Pos")},m(t,s){T(t,e,s)},d(t){t&&v(e)}}}function oa(n){let e;return{c(){e=xe("Nome")},l(t){e=Pe(t,"Nome")},m(t,s){T(t,e,s)},d(t){t&&v(e)}}}function la(n){let e;return{c(){e=xe("Punteggio")},l(t){e=Pe(t,"Punteggio")},m(t,s){T(t,e,s)},d(t){t&&v(e)}}}function aa(n){let e,t,s,i,r,o;return e=new Xn({props:{padding:br,$$slots:{default:[ra]},$$scope:{ctx:n}}}),s=new Xn({props:{class:yr,$$slots:{default:[oa]},$$scope:{ctx:n}}}),r=new Xn({props:{class:Cr,$$slots:{default:[la]},$$scope:{ctx:n}}}),{c(){pe(e.$$.fragment),t=ae(),pe(s.$$.fragment),i=ae(),pe(r.$$.fragment)},l(l){ge(e.$$.fragment,l),t=ce(l),ge(s.$$.fragment,l),i=ce(l),ge(r.$$.fragment,l)},m(l,a){me(e,l,a),T(l,t,a),me(s,l,a),T(l,i,a),me(r,l,a),o=!0},p(l,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:l}),e.$set(c);const u={};a&16&&(u.$$scope={dirty:a,ctx:l}),s.$set(u);const h={};a&16&&(h.$$scope={dirty:a,ctx:l}),r.$set(h)},i(l){o||(O(e.$$.fragment,l),O(s.$$.fragment,l),O(r.$$.fragment,l),o=!0)},o(l){L(e.$$.fragment,l),L(s.$$.fragment,l),L(r.$$.fragment,l),o=!1},d(l){l&&(v(t),v(i)),ve(e,l),ve(s,l),ve(r,l)}}}function ca(n){let e,t=n[3]+1+"",s;return{c(){e=A("div"),s=xe(t),this.h()},l(i){e=x(i,"DIV",{class:!0});var r=P(e);s=Pe(r,t),r.forEach(v),this.h()},h(){C(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){T(i,e,r),k(e,s)},p:St,i:St,o:St,d(i){i&&v(e)}}}function ua(n){let e,t;return e=new ia({props:{size:"xl",color:va(n[3])}}),{c(){pe(e.$$.fragment)},l(s){ge(e.$$.fragment,s)},m(s,i){me(e,s,i),t=!0},p:St,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){ve(e,s)}}}function ha(n){let e,t,s,i;const r=[ua,ca],o=[];function l(a,c){return a[3]>=0&&a[3]<=2?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=Ae()},l(a){t.l(a),s=Ae()},m(a,c){o[e].m(a,c),T(a,s,c),i=!0},p(a,c){t.p(a,c)},i(a){i||(O(t),i=!0)},o(a){L(t),i=!1},d(a){a&&v(s),o[e].d(a)}}}function da(n){let e,t,s,i,r,o,l=n[1].username+"",a;return{c(){e=A("img"),i=ae(),r=A("div"),o=A("div"),a=xe(l),this.h()},l(c){e=x(c,"IMG",{class:!0,src:!0,alt:!0}),i=ce(c),r=x(c,"DIV",{class:!0});var u=P(r);o=x(u,"DIV",{class:!0});var h=P(o);a=Pe(h,l),h.forEach(v),u.forEach(v),this.h()},h(){C(e,"class","lg:w-2/6 w-3/6 rounded-full"),ui(e.src,t=n[1].avatar)||C(e,"src",t),C(e,"alt",s=n[1].username+" avatar"),C(o,"class","text-base gamer-font text-4xl pr-6 svelte-15orbzf"),C(r,"class","ps-3 pr-6")},m(c,u){T(c,e,u),T(c,i,u),T(c,r,u),k(r,o),k(o,a)},p(c,u){u&1&&!ui(e.src,t=c[1].avatar)&&C(e,"src",t),u&1&&s!==(s=c[1].username+" avatar")&&C(e,"alt",s),u&1&&l!==(l=c[1].username+"")&&Dt(a,l)},d(c){c&&(v(e),v(i),v(r))}}}function fa(n){let e,t=n[1].points+"",s;return{c(){e=A("div"),s=xe(t),this.h()},l(i){e=x(i,"DIV",{class:!0});var r=P(e);s=Pe(r,t),r.forEach(v),this.h()},h(){C(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){T(i,e,r),k(e,s)},p(i,r){r&1&&t!==(t=i[1].points+"")&&Dt(s,t)},d(i){i&&v(e)}}}function _a(n){let e,t,s,i,r,o,l;return e=new $n({props:{tdClass:br,class:"text-center",$$slots:{default:[ha]},$$scope:{ctx:n}}}),s=new $n({props:{class:"flex items-center px-6 py-4 text-gray-900 dark:text-white "+yr+" space-x-4",$$slots:{default:[da]},$$scope:{ctx:n}}}),r=new $n({props:{class:Cr,$$slots:{default:[fa]},$$scope:{ctx:n}}}),{c(){pe(e.$$.fragment),t=ae(),pe(s.$$.fragment),i=ae(),pe(r.$$.fragment),o=ae()},l(a){ge(e.$$.fragment,a),t=ce(a),ge(s.$$.fragment,a),i=ce(a),ge(r.$$.fragment,a),o=ce(a)},m(a,c){me(e,a,c),T(a,t,c),me(s,a,c),T(a,i,c),me(r,a,c),T(a,o,c),l=!0},p(a,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const h={};c&17&&(h.$$scope={dirty:c,ctx:a}),s.$set(h);const d={};c&17&&(d.$$scope={dirty:c,ctx:a}),r.$set(d)},i(a){l||(O(e.$$.fragment,a),O(s.$$.fragment,a),O(r.$$.fragment,a),l=!0)},o(a){L(e.$$.fragment,a),L(s.$$.fragment,a),L(r.$$.fragment,a),l=!1},d(a){a&&(v(t),v(i),v(o)),ve(e,a),ve(s,a),ve(r,a)}}}function Ci(n){let e,t;return e=new ql({props:{$$slots:{default:[_a]},$$scope:{ctx:n}}}),{c(){pe(e.$$.fragment)},l(s){ge(e.$$.fragment,s)},m(s,i){me(e,s,i),t=!0},p(s,i){const r={};i&17&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){ve(e,s)}}}function pa(n){let e,t,s=fi(n[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=Ci(yi(n,s,o));const r=o=>L(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ae()},l(o){for(let l=0;l<i.length;l+=1)i[l].l(o);e=Ae()},m(o,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,l);T(o,e,l),t=!0},p(o,l){if(l&1){s=fi(o[0]);let a;for(a=0;a<s.length;a+=1){const c=yi(o,s,a);i[a]?(i[a].p(c,l),O(i[a],1)):(i[a]=Ci(c),i[a].c(),O(i[a],1),i[a].m(e.parentNode,e))}for(As(),a=s.length;a<i.length;a+=1)r(a);xs()}},i(o){if(!t){for(let l=0;l<s.length;l+=1)O(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)L(i[l]);t=!1},d(o){o&&v(e),sl(i,o)}}}function ga(n){let e,t,s,i;return e=new Xl({props:{$$slots:{default:[aa]},$$scope:{ctx:n}}}),s=new Wl({props:{tableBodyClass:"divide-y",$$slots:{default:[pa]},$$scope:{ctx:n}}}),{c(){pe(e.$$.fragment),t=ae(),pe(s.$$.fragment)},l(r){ge(e.$$.fragment,r),t=ce(r),ge(s.$$.fragment,r)},m(r,o){me(e,r,o),T(r,t,o),me(s,r,o),i=!0},p(r,o){const l={};o&16&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const a={};o&17&&(a.$$scope={dirty:o,ctx:r}),s.$set(a)},i(r){i||(O(e.$$.fragment,r),O(s.$$.fragment,r),i=!0)},o(r){L(e.$$.fragment,r),L(s.$$.fragment,r),i=!1},d(r){r&&v(t),ve(e,r),ve(s,r)}}}function ma(n){let e,t=`/* Nello style di Svelte questo stile viene rimosso in quanto 
	   non usato nella pagina ma nel componente TableBodyCell.
	   Come workaround lo metto nel HTML
	*/
    svg {
      display: block;
      text-align: center;
      margin: auto;
    }`,s,i,r,o,l;return o=new Ll({props:{hoverable:!0,class:"text-center",$$slots:{default:[ga]},$$scope:{ctx:n}}}),{c(){e=A("style"),e.textContent=t,s=ae(),i=A("div"),r=A("div"),pe(o.$$.fragment),this.h()},l(a){const c=nl("svelte-e4duco",document.head);e=x(c,"STYLE",{"data-svelte-h":!0}),de(e)!=="svelte-1lbw6gp"&&(e.textContent=t),c.forEach(v),s=ce(a),i=x(a,"DIV",{class:!0});var u=P(i);r=x(u,"DIV",{class:!0});var h=P(r);ge(o.$$.fragment,h),h.forEach(v),u.forEach(v),this.h()},h(){C(r,"class","lg:w-2/5"),C(i,"class","lg:flex lg:justify-center")},m(a,c){k(document.head,e),T(a,s,c),T(a,i,c),k(i,r),me(o,r,null),l=!0},p(a,[c]){const u={};c&17&&(u.$$scope={dirty:c,ctx:a}),o.$set(u)},i(a){l||(O(o.$$.fragment,a),l=!0)},o(a){L(o.$$.fragment,a),l=!1},d(a){a&&(v(s),v(i)),v(e),ve(o)}}}const br="px-4 py-6 w-1/6",yr="w-3/5",Cr="w-1/4";function va(n){const e="#ffd700",t="#949494",s="#cd7f32";switch(n){case 0:return e;case 1:return t;case 2:return s}}function ba(n,e,t){let{items:s}=e;return n.$$set=i=>{"items"in i&&t(0,s=i.items)},[s]}class ya extends Ue{constructor(e){super(),ze(this,e,ba,ma,We,{items:0})}}var wi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw Mt(e)},Mt=function(n){return new Error("Firebase Database ("+wr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ca=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ds={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Er(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ca(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new wa;const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(n){const e=Er(n);return Ds.encodeByteArray(e,!0)},Sn=function(n){return Ir(n).replace(/\./g,"")},ds=function(n){try{return Ds.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){return Sr(void 0,n)}function Sr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ia(t)||(n[t]=Sr(n[t],e[t]));return n}function Ia(n){return n!=="__proto__"}/**
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
 */function Sa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ta=()=>Sa().__FIREBASE_DEFAULTS__,ka=()=>{if(typeof process>"u"||typeof wi>"u")return;const n=wi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Na=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ds(n[1]);return e&&JSON.parse(e)},Tr=()=>{try{return Ta()||ka()||Na()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ra=n=>{var e,t;return(t=(e=Tr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Aa=n=>{const e=Ra(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},kr=()=>{var n;return(n=Tr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Sn(JSON.stringify(t)),Sn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pa())}function Da(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rr(){return wr.NODE_ADMIN===!0}function Oa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ma(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="FirebaseError";class ln extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=La,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Fa(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,s)}}function Fa(n,e){return n.replace(Ba,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ba=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){return JSON.parse(n)}function K(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Qt(ds(r[0])||""),t=Qt(ds(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Wa=function(n){const e=xr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ua=function(n){const e=xr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Rt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ei(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function fs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ii(r)&&Ii(o)){if(!fs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ii(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Pr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function an(n){return n&&n._delegate?n._delegate:n}class $t{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ga{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Os;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qa(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ja(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ja(n){return n===at?void 0:n}function qa(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ya{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ga(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Ka={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Qa=B.INFO,$a={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Xa=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=$a[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dr{constructor(e){this.name=e,this._logLevel=Qa,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Ja=(n,e)=>e.some(t=>n instanceof t);let Si,Ti;function Za(){return Si||(Si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ec(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Or=new WeakMap,_s=new WeakMap,Mr=new WeakMap,Jn=new WeakMap,Ms=new WeakMap;function tc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ye(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Or.set(t,n)}).catch(()=>{}),Ms.set(e,n),e}function nc(n){if(_s.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});_s.set(n,e)}let ps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sc(n){ps=n(ps)}function ic(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Zn(this),e,...t);return Mr.set(s,e.sort?e.sort():[e]),Ye(s)}:ec().includes(n)?function(...e){return n.apply(Zn(this),e),Ye(Or.get(this))}:function(...e){return Ye(n.apply(Zn(this),e))}}function rc(n){return typeof n=="function"?ic(n):(n instanceof IDBTransaction&&nc(n),Ja(n,Za())?new Proxy(n,ps):n)}function Ye(n){if(n instanceof IDBRequest)return tc(n);if(Jn.has(n))return Jn.get(n);const e=rc(n);return e!==n&&(Jn.set(n,e),Ms.set(e,n)),e}const Zn=n=>Ms.get(n);function oc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Ye(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ye(o.result),a.oldVersion,a.newVersion,Ye(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const lc=["get","getKey","getAll","getAllKeys","count"],ac=["put","add","delete","clear"],es=new Map;function ki(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(es.get(e))return es.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ac.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return es.set(e,r),r}sc(n=>({...n,get:(e,t,s)=>ki(e,t)||n.get(e,t,s),has:(e,t)=>!!ki(e,t)||n.has(e,t)}));/**
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
 */class cc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gs="@firebase/app",Ni="0.10.7";/**
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
 */const dt=new Dr("@firebase/app"),hc="@firebase/app-compat",dc="@firebase/analytics-compat",fc="@firebase/analytics",_c="@firebase/app-check-compat",pc="@firebase/app-check",gc="@firebase/auth",mc="@firebase/auth-compat",vc="@firebase/database",bc="@firebase/database-compat",yc="@firebase/functions",Cc="@firebase/functions-compat",wc="@firebase/installations",Ec="@firebase/installations-compat",Ic="@firebase/messaging",Sc="@firebase/messaging-compat",Tc="@firebase/performance",kc="@firebase/performance-compat",Nc="@firebase/remote-config",Rc="@firebase/remote-config-compat",Ac="@firebase/storage",xc="@firebase/storage-compat",Pc="@firebase/firestore",Dc="@firebase/vertexai-preview",Oc="@firebase/firestore-compat",Mc="firebase",Lc="10.12.4";/**
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
 */const ms="[DEFAULT]",Fc={[gs]:"fire-core",[hc]:"fire-core-compat",[fc]:"fire-analytics",[dc]:"fire-analytics-compat",[pc]:"fire-app-check",[_c]:"fire-app-check-compat",[gc]:"fire-auth",[mc]:"fire-auth-compat",[vc]:"fire-rtdb",[bc]:"fire-rtdb-compat",[yc]:"fire-fn",[Cc]:"fire-fn-compat",[wc]:"fire-iid",[Ec]:"fire-iid-compat",[Ic]:"fire-fcm",[Sc]:"fire-fcm-compat",[Tc]:"fire-perf",[kc]:"fire-perf-compat",[Nc]:"fire-rc",[Rc]:"fire-rc-compat",[Ac]:"fire-gcs",[xc]:"fire-gcs-compat",[Pc]:"fire-fst",[Oc]:"fire-fst-compat",[Dc]:"fire-vertex","fire-js":"fire-js",[Mc]:"fire-js-all"};/**
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
 */const kn=new Map,Bc=new Map,vs=new Map;function Ri(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(vs.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,n);for(const t of kn.values())Ri(t,n);for(const t of Bc.values())Ri(t,n);return!0}function Wc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Ar("app","Firebase",Uc);/**
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
 */class zc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Hc=Lc;function Lr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ms,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ke.create("bad-app-name",{appName:String(i)});if(t||(t=kr()),!t)throw Ke.create("no-options");const r=kn.get(i);if(r){if(fs(t,r.options)&&fs(s,r.config))return r;throw Ke.create("duplicate-app",{appName:i})}const o=new Ya(i);for(const a of vs.values())o.addComponent(a);const l=new zc(t,s,o);return kn.set(i,l),l}function Vc(n=ms){const e=kn.get(n);if(!e&&n===ms&&kr())return Lr();if(!e)throw Ke.create("no-app",{appName:n});return e}function Tt(n,e,t){var s;let i=(s=Fc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(l.join(" "));return}Nn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gc="firebase-heartbeat-database",jc=1,Xt="firebase-heartbeat-store";let ts=null;function Fr(){return ts||(ts=oc(Gc,jc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),ts}async function qc(n){try{const t=(await Fr()).transaction(Xt),s=await t.objectStore(Xt).get(Br(n));return await t.done,s}catch(e){if(e instanceof ln)dt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Ai(n,e){try{const s=(await Fr()).transaction(Xt,"readwrite");await s.objectStore(Xt).put(e,Br(n)),await s.done}catch(t){if(t instanceof ln)dt.warn(t.message);else{const s=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(s.message)}}}function Br(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yc=1024,Kc=30*24*60*60*1e3;class Qc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Kc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xi(),{heartbeatsToSend:s,unsentEntries:i}=$c(this._heartbeatsCache.heartbeats),r=Sn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xi(){return new Date().toISOString().substring(0,10)}function $c(n,e=Yc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pi(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oa()?Ma().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pi(n){return Sn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jc(n){Nn(new $t("platform-logger",e=>new cc(e),"PRIVATE")),Nn(new $t("heartbeat",e=>new Qc(e),"PRIVATE")),Tt(gs,Ni,n),Tt(gs,Ni,"esm2017"),Tt("fire-js","")}Jc("");var Zc="firebase",eu="10.12.4";/**
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
 */Tt(Zc,eu,"app");var Di={};const Oi="@firebase/database",Mi="1.0.6";/**
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
 */let Wr="";function tu(n){Wr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),K(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return He(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nu(e)}}catch{}return new su},ht=Ur("localStorage"),iu=Ur("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Dr("@firebase/database"),ru=function(){let n=1;return function(){return n++}}(),zr=function(n){const e=Va(n),t=new Ha;t.update(e);const s=t.digest();return Ds.encodeByteArray(s)},cn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cn.apply(null,s):typeof s=="object"?e+=K(s):e+=s,e+=" "}return e};let Gt=null,Li=!0;const ou=function(n,e){g(!e,"Can't turn on custom loggers persistently."),kt.logLevel=B.VERBOSE,Gt=kt.log.bind(kt)},te=function(...n){if(Li===!0&&(Li=!1,Gt===null&&iu.get("logging_enabled")===!0&&ou()),Gt){const e=cn.apply(null,n);Gt(e)}},un=function(n){return function(...e){te(n,...e)}},bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+cn(...n);kt.error(e)},Be=function(...n){const e=`FIREBASE FATAL ERROR: ${cn(...n)}`;throw kt.error(e),new Error(e)},ue=function(...n){const e="FIREBASE WARNING: "+cn(...n);kt.warn(e)},lu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},au=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},At="[MIN_NAME]",ft="[MAX_NAME]",Lt=function(n,e){if(n===e)return 0;if(n===At||e===ft)return-1;if(e===At||n===ft)return 1;{const t=Fi(n),s=Fi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},cu=function(n,e){return n===e?0:n<e?-1:1},Ut=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+K(e))},Ls=function(n){if(typeof n!="object"||n===null)return K(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=K(e[s]),t+=":",t+=Ls(n[e[s]]);return t+="}",t},Vr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function oe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Gr=function(n){g(!Hr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},uu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function du(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const fu=new RegExp("^-?(0*)\\d{1,10}$"),_u=-2147483648,pu=2147483647,Fi=function(n){if(fu.test(n)){const e=Number(n);if(e>=_u&&e<=pu)return e}return null},hn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ue("Exception was thrown by user callback.",t),e},Math.floor(0))}},gu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ue(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="5",jr="v",qr="s",Yr="r",Kr="f",Qr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$r="ls",Xr="p",ys="ac",Jr="websocket",Zr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ht.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ht.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function to(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===Jr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Zr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bu(n)&&(t.ns=n.namespace);const i=[];return oe(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.counters_={}}incrementCounter(e,t=1){He(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ea(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns={},ss={};function Bs(n){const e=n.toString();return ns[e]||(ns[e]=new yu),ns[e]}function Cu(n,e){const t=n.toString();return ss[t]||(ss[t]=e()),ss[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="start",Eu="close",Iu="pLPCommand",Su="pRTLPCB",no="id",so="pw",io="ser",Tu="cb",ku="seg",Nu="ts",Ru="d",Au="dframe",ro=1870,oo=30,xu=ro-oo,Pu=25e3,Du=3e4;class Et{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=un(e),this.stats_=Bs(t),this.urlFn=a=>(this.appCheckToken&&(a[ys]=this.appCheckToken),to(t,Zr,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Du)),au(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ws((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bi)this.id=l,this.password=a;else if(o===Eu)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Bi]="t",s[io]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jr]=Fs,this.transportSessionId&&(s[qr]=this.transportSessionId),this.lastSessionId&&(s[$r]=this.lastSessionId),this.applicationId&&(s[Xr]=this.applicationId),this.appCheckToken&&(s[ys]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qr.test(location.hostname)&&(s[Yr]=Kr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Et.forceAllow_=!0}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){return Et.forceAllow_?!0:!Et.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uu()&&!hu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ir(t),i=Vr(s,xu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Au]="t",s[no]=e,s[so]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=K(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ws{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ru(),window[Iu+this.uniqueCallbackIdentifier]=e,window[Su+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ws.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){te("frame writing exception"),l.stack&&te(l.stack),te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[no]=this.myID,e[so]=this.myPW,e[io]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oo+s.length<=ro;){const o=this.pendingSegs.shift();s=s+"&"+ku+i+"="+o.seg+"&"+Nu+i+"="+o.ts+"&"+Ru+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Pu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=16384,Mu=45e3;let Rn=null;typeof MozWebSocket<"u"?Rn=MozWebSocket:typeof WebSocket<"u"&&(Rn=WebSocket);class Ee{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=un(this.connId),this.stats_=Bs(t),this.connURL=Ee.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[jr]=Fs,typeof location<"u"&&location.hostname&&Qr.test(location.hostname)&&(o[Yr]=Kr),t&&(o[qr]=t),s&&(o[$r]=s),i&&(o[ys]=i),r&&(o[Xr]=r),to(e,Jr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ht.set("previous_websocket_failure",!0);try{let s;Rr(),this.mySock=new Rn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Rn!==null&&!Ee.forceDisallow_}static previouslyFailed(){return ht.isInMemoryStorage||ht.get("previous_websocket_failure")===!0}markConnectionHealthy(){ht.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Qt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=K(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Vr(t,Ou);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ee.responsesRequiredToBeHealthy=2;Ee.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Et,Ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ee&&Ee.isAvailable();let s=t&&!Ee.previouslyFailed();if(e.webSocketOnly&&(t||ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ee];else{const i=this.transports_=[];for(const r of Jt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Jt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=6e4,Fu=5e3,Bu=10*1024,Wu=100*1024,is="t",Wi="d",Uu="s",Ui="r",zu="e",zi="o",Hi="a",Vi="n",Gi="p",Hu="h";class Vu{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=un("c:"+this.id+":"),this.transportManager_=new Jt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(is in e){const t=e[is];t===Hi?this.upgradeIfSecondaryHealthy_():t===Ui?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ut("t",e),s=Ut("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ut("t",e),s=Ut("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ut(is,e);if(Wi in e){const s=e[Wi];if(t===Hu){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Vi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Uu?this.onConnectionShutdown_(s):t===Ui?this.onReset_(s):t===zu?bs("Server Error: "+s):t===zi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fs!==s&&ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ht.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ao{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new An}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=32,qi=768;class F{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function D(){return new F("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xe(n){return n.pieces_.length-n.pieceNum_}function W(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new F(n.pieces_,e)}function co(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Gu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function uo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ho(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new F(e,0)}function Q(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof F)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new F(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function ne(n,e){const t=N(n),s=N(e);if(t===null)return e;if(t===s)return ne(W(n),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function fo(n,e){if(Xe(n)!==Xe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ie(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Xe(n)>Xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class ju{constructor(e,t){this.errorPrefix_=t,this.parts_=uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hn(this.parts_[s]);_o(this)}}function qu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hn(e),_o(n)}function Yu(n){const e=n.parts_.pop();n.byteLength_-=Hn(e),n.parts_.length>0&&(n.byteLength_-=1)}function _o(n){if(n.byteLength_>qi)throw new Error(n.errorPrefix_+"has a key path longer than "+qi+" bytes ("+n.byteLength_+").");if(n.parts_.length>ji)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ji+") or object contains a cycle "+ct(n))}function ct(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends ao{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Us}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=1e3,Ku=60*5*1e3,Yi=30*1e3,Qu=1.3,$u=3e4,Xu="server_kill",Ki=3;class Fe extends lo{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Fe.nextPersistentConnectionId_++,this.log_=un("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zt,this.maxReconnectDelay_=Ku,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Rr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Us.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&An.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(K(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Os,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Fe.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&He(e,"w")){const s=Rt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ua(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wa(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+K(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bs("Unrecognized action received from server: "+K(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$u&&(this.reconnectDelay_=zt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Vu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ue(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xu)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ue(h),a())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ei(this.interruptReasons_)&&(this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ls(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new F(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ki&&(this.reconnectDelay_=Yi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ki&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Wr.replace(/\./g,"-")]=1,Nr()?e["framework.cordova"]=1:Da()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=An.getInstance().currentlyOnline();return Ei(this.interruptReasons_)&&e}}Fe.nextPersistentConnectionId_=0;Fe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new I(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new I(At,e),i=new I(At,t);return this.compare(s,i)!==0}minPost(){return I.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;class po extends Vn{static get __EMPTY_NODE(){return Cn}static set __EMPTY_NODE(e){Cn=e}compare(e,t){return Lt(e.name,t.name)}isDefinedOn(e){throw Mt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(ft,Cn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Cn)}toString(){return".key"}}const Nt=new po;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Z.RED,this.left=i??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,s,i,r){return new Z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class Ju{copy(e,t,s,i,r){return this}insert(e,t,s){return new Z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new wn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new wn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new wn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new Ju;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e){return Lt(n.name,e.name)}function zs(n,e){return Lt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;function eh(n){Cs=n}const go=function(n){return typeof n=="number"?"number:"+Gr(n):"string:"+n},mo=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&He(e,".sv"),"Priority must be a string or number.")}else g(n===Cs||n.isEmpty(),"priority of unexpected type.");g(n===Cs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mo(this.priorityNode_)}static set __childrenNodeConstructor(e){Qi=e}static get __childrenNodeConstructor(){return Qi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:N(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=N(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||Xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+go(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Gr(this.value_):e+=this.value_,this.lazyHash_=zr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo,bo;function th(n){vo=n}function nh(n){bo=n}class sh extends Vn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Lt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(ft,new J("[PRIORITY-POST]",bo))}makePost(e,t){const s=vo(e);return new I(t,new J("[PRIORITY-POST]",s))}toString(){return".priority"}}const G=new sh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=Math.log(2);class rh{constructor(e){const t=r=>parseInt(Math.log(r)/ih,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xn=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new Z(d,h.node,Z.BLACK,null,null);{const f=parseInt(u/2,10)+a,p=i(a,f),_=i(f+1,c);return h=n[f],d=t?t(h):h,new Z(d,h.node,Z.BLACK,p,_)}},r=function(a){let c=null,u=null,h=n.length;const d=function(p,_){const m=h-p,E=h;h-=p;const R=i(m+1,E),X=n[m],Ne=t?t(X):X;f(new Z(Ne,X.node,_,null,R))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<a.count;++p){const _=a.nextBitIsOne(),m=Math.pow(2,a.count-(p+1));_?d(m,Z.BLACK):(d(m,Z.BLACK),d(m,Z.RED))}return u},o=new rh(n.length),l=r(o);return new re(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;const wt={};class Le{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(wt&&G,"ChildrenNode.ts has not been loaded"),rs=rs||new Le({".priority":wt},{".priority":G}),rs}get(e){const t=Rt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return He(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=xn(s,e.getCompare()):l=wt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new Le(u,c)}addToIndexes(e,t){const s=Tn(this.indexes_,(i,r)=>{const o=Rt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===wt)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(I.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),xn(l,o.getCompare())}else return wt;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new I(e.name,l))),a.insert(e,e.node)}});return new Le(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tn(this.indexes_,i=>{if(i===wt)return i;{const r=t.get(e.name);return r?i.remove(new I(e.name,r)):i}});return new Le(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class b{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ht||(Ht=new b(new re(zs),null,Le.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ht}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ht:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new I(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ht:this.priorityNode_;return new b(i,o,r)}}updateChild(e,t){const s=N(e);if(s===null)return t;{g(N(e)!==".priority"||Xe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(W(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(G,(o,l)=>{t[o]=l.val(e),s++,r&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+go(this.getPriority().val())+":"),this.forEachChild(G,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":zr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===dn?-1:0}withIndex(e){if(e===Nt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(G),i=t.getIterator(G);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nt?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oh extends b{constructor(){super(new re(zs),b.EMPTY_NODE,Le.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const dn=new oh;Object.defineProperties(I,{MIN:{value:new I(At,b.EMPTY_NODE)},MAX:{value:new I(ft,dn)}});po.__EMPTY_NODE=b.EMPTY_NODE;J.__childrenNodeConstructor=b;eh(dn);nh(dn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=!0;function ee(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,ee(e))}if(!(n instanceof Array)&&lh){const t=[];let s=!1;if(oe(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=ee(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new I(o,a)))}}),t.length===0)return b.EMPTY_NODE;const r=xn(t,Zu,o=>o.name,zs);if(s){const o=xn(t,G.getCompare());return new b(r,ee(e),new Le({".priority":o},{".priority":G}))}else return new b(r,ee(e),Le.Default)}else{let t=b.EMPTY_NODE;return oe(n,(s,i)=>{if(He(n,s)&&s.substring(0,1)!=="."){const r=ee(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ee(e))}}th(ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends Vn{constructor(e){super(),this.indexPath_=e,g(!S(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Lt(e.name,t.name):r}makePost(e,t){const s=ee(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,s);return new I(t,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,dn);return new I(ft,e)}toString(){return uo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends Vn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Lt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const s=ee(e);return new I(t,s)}toString(){return".value"}}const uh=new ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return{type:"value",snapshotNode:n}}function xt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Zt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function en(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Zt(t,l)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xt(t,s)):o.trackChildChange(en(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(G,(i,r)=>{t.hasChild(i)||s.trackChildChange(Zt(i,r))}),t.isLeafNode()||t.forEachChild(G,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(en(i,r,o))}else s.trackChildChange(xt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.indexedFilter_=new Hs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tn.getStartPost_(e),this.endPost_=tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new I(t,s))||(s=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=b.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const r=this;return t.forEachChild(G,(o,l)=>{r.matches(new I(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new I(t,s))||(s=b.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const l=e;g(l.numChildren()===this.limit_,"");const a=new I(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(en(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Zt(t,h));const _=l.updateImmediateChild(t,b.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(xt(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Zt(c.name,c.node)),r.trackChildChange(xt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=G}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:At}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ft}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===G}copy(){const e=new Vs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fh(n){return n.loadsAllData()?new Hs(n.getIndex()):n.hasLimit()?new dh(n):new tn(n)}function $i(n){const e={};if(n.isDefault())return e;let t;if(n.index_===G?t="$priority":n.index_===uh?t="$value":n.index_===Nt?t="$key":(g(n.index_ instanceof ah,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=K(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=K(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+K(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=K(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+K(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==G&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends lo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=un("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pn.getListenId_(e,s),l={};this.listens_[o]=l;const a=$i(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Rt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Pn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=$i(e._queryParams),s=e._path.toString(),i=new Os;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+za(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Qt(l.responseText)}catch{ue("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ue("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return{value:null,children:new Map}}function Co(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=N(e);n.children.has(s)||n.children.set(s,Dn());const i=n.children.get(s);e=W(e),Co(i,e,t)}}function ws(n,e,t){n.value!==null?t(e,n.value):ph(n,(s,i)=>{const r=new F(e.toString()+"/"+s);ws(i,r,t)})}function ph(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&oe(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=10*1e3,mh=30*1e3,vh=5*60*1e3;class bh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gh(e);const s=Ji+(mh-Ji)*Math.random();jt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;oe(e,(i,r)=>{r>0&&He(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*vh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Se||(Se={}));function wo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function js(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Se.ACK_USER_WRITE,this.source=wo()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new F(e));return new On(D(),t,this.revert)}}else return g(N(this.path)===e,"operationForChild called for unrelated child."),new On(W(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.source=e,this.path=t,this.type=Se.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new nn(this.source,D()):new nn(this.source,W(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Se.OVERWRITE}operationForChild(e){return S(this.path)?new _t(this.source,D(),this.snap.getImmediateChild(e)):new _t(this.source,W(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Se.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new F(e));return t.isEmpty()?null:t.value?new _t(this.source,D(),t.value):new sn(this.source,D(),t)}else return g(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sn(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ch(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hh(o.childName,o.snapshotNode))}),Vt(n,i,"child_removed",e,s,t),Vt(n,i,"child_added",e,s,t),Vt(n,i,"child_moved",r,s,t),Vt(n,i,"child_changed",e,s,t),Vt(n,i,"value",e,s,t),i}function Vt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Eh(n,l,a)),o.forEach(l=>{const a=wh(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function wh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eh(n,e,t){if(e.childName==null||t.childName==null)throw Mt("Should only compare child_ events.");const s=new I(e.childName,e.snapshotNode),i=new I(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e){return{eventCache:n,serverCache:e}}function qt(n,e,t,s){return Gn(new Je(e,t,s),n.serverCache)}function Eo(n,e,t,s){return Gn(n.eventCache,new Je(e,t,s))}function Mn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os;const Ih=()=>(os||(os=new re(cu)),os);class z{constructor(e,t=Ih()){this.value=e,this.children=t}static fromObject(e){let t=new z(null);return oe(e,(s,i)=>{t=t.set(new F(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:D(),value:this.value};if(S(e))return null;{const s=N(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(W(e),t);return r!=null?{path:Q(new F(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=N(e),s=this.children.get(t);return s!==null?s.subtree(W(e)):new z(null)}}set(e,t){if(S(e))return new z(t,this.children);{const s=N(e),r=(this.children.get(s)||new z(null)).set(W(e),t),o=this.children.insert(s,r);return new z(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new z(null):new z(null,this.children);{const t=N(e),s=this.children.get(t);if(s){const i=s.remove(W(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new z(null):new z(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=N(e),s=this.children.get(t);return s?s.get(W(e)):null}}setTree(e,t){if(S(e))return t;{const s=N(e),r=(this.children.get(s)||new z(null)).setTree(W(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new z(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,D(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(S(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(W(e),Q(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,D(),t)}foreachOnPath_(e,t,s){if(S(e))return this;{this.value&&s(t,this.value);const i=N(e),r=this.children.get(i);return r?r.foreachOnPath_(W(e),Q(t,i),s):new z(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.writeTree_=e}static empty(){return new Te(new z(null))}}function Yt(n,e,t){if(S(e))return new Te(new z(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ne(i,e);return r=r.updateChild(o,t),new Te(n.writeTree_.set(i,r))}else{const i=new z(t),r=n.writeTree_.setTree(e,i);return new Te(r)}}}function Zi(n,e,t){let s=n;return oe(t,(i,r)=>{s=Yt(s,Q(e,i),r)}),s}function er(n,e){if(S(e))return Te.empty();{const t=n.writeTree_.setTree(e,new z(null));return new Te(t)}}function Es(n,e){return mt(n,e)!=null}function mt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ne(t.path,e)):null}function tr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(G,(s,i)=>{e.push(new I(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new I(s,i.value))}),e}function Qe(n,e){if(S(e))return n;{const t=mt(n,e);return t!=null?new Te(new z(t)):new Te(n.writeTree_.subtree(e))}}function Is(n){return n.writeTree_.isEmpty()}function Pt(n,e){return Io(D(),n.writeTree_,e)}function Io(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Io(Q(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Q(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n,e){return No(e,n)}function Sh(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Yt(n.visibleWrites,e,t)),n.lastWriteId=s}function Th(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function kh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Nh(l,s.path)?i=!1:Ie(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Rh(n),!0;if(s.snap)n.visibleWrites=er(n.visibleWrites,s.path);else{const l=s.children;oe(l,a=>{n.visibleWrites=er(n.visibleWrites,Q(s.path,a))})}return!0}else return!1}function Nh(n,e){if(n.snap)return Ie(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ie(Q(n.path,t),e))return!0;return!1}function Rh(n){n.visibleWrites=So(n.allWrites,Ah,D()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ah(n){return n.visible}function So(n,e,t){let s=Te.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Ie(t,o)?(l=ne(t,o),s=Yt(s,l,r.snap)):Ie(o,t)&&(l=ne(o,t),s=Yt(s,D(),r.snap.getChild(l)));else if(r.children){if(Ie(t,o))l=ne(t,o),s=Zi(s,l,r.children);else if(Ie(o,t))if(l=ne(o,t),S(l))s=Zi(s,D(),r.children);else{const a=Rt(r.children,N(l));if(a){const c=a.getChild(W(l));s=Yt(s,D(),c)}}}else throw Mt("WriteRecord should have .snap or .children")}}return s}function To(n,e,t,s,i){if(!s&&!i){const r=mt(n.visibleWrites,e);if(r!=null)return r;{const o=Qe(n.visibleWrites,e);if(Is(o))return t;if(t==null&&!Es(o,D()))return null;{const l=t||b.EMPTY_NODE;return Pt(o,l)}}}else{const r=Qe(n.visibleWrites,e);if(!i&&Is(r))return t;if(!i&&t==null&&!Es(r,D()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ie(c.path,e)||Ie(e,c.path))},l=So(n.allWrites,o,e),a=t||b.EMPTY_NODE;return Pt(l,a)}}}function xh(n,e,t){let s=b.EMPTY_NODE;const i=mt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(G,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Qe(n.visibleWrites,e);return t.forEachChild(G,(o,l)=>{const a=Pt(Qe(r,new F(o)),l);s=s.updateImmediateChild(o,a)}),tr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qe(n.visibleWrites,e);return tr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ph(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,t);if(Es(n.visibleWrites,r))return null;{const o=Qe(n.visibleWrites,r);return Is(o)?i.getChild(t):Pt(o,i.getChild(t))}}function Dh(n,e,t,s){const i=Q(e,t),r=mt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Qe(n.visibleWrites,i);return Pt(o,s.getNode().getImmediateChild(t))}else return null}function Oh(n,e){return mt(n.visibleWrites,e)}function Mh(n,e,t,s,i,r,o){let l;const a=Qe(n.visibleWrites,e),c=mt(a,D());if(c!=null)l=c;else if(t!=null)l=Pt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Lh(){return{visibleWrites:Te.empty(),allWrites:[],lastWriteId:-1}}function Ln(n,e,t,s){return To(n.writeTree,n.treePath,e,t,s)}function qs(n,e){return xh(n.writeTree,n.treePath,e)}function nr(n,e,t,s){return Ph(n.writeTree,n.treePath,e,t,s)}function Fn(n,e){return Oh(n.writeTree,Q(n.treePath,e))}function Fh(n,e,t,s,i,r){return Mh(n.writeTree,n.treePath,e,t,s,i,r)}function Ys(n,e,t){return Dh(n.writeTree,n.treePath,e,t)}function ko(n,e){return No(Q(n.treePath,e),n.writeTree)}function No(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,en(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Zt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,xt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,en(s,e.snapshotNode,i.oldSnap));else throw Mt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ro=new Wh;class Ks{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ys(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=Fh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){return{filter:n}}function zh(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Hh(n,e,t,s,i){const r=new Bh;let o,l;if(t.type===Se.OVERWRITE){const c=t;c.source.fromUser?o=Ss(n,e,c.path,c.snap,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!S(c.path),o=Bn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===Se.MERGE){const c=t;c.source.fromUser?o=Gh(n,e,c.path,c.children,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ts(n,e,c.path,c.children,s,i,l,r))}else if(t.type===Se.ACK_USER_WRITE){const c=t;c.revert?o=Yh(n,e,c.path,s,i,r):o=jh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Se.LISTEN_COMPLETE)o=qh(n,e,t.path,s,r);else throw Mt("Unknown operation type: "+t.type);const a=r.getChanges();return Vh(e,o,a),{viewCache:o,changes:a}}function Vh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(yo(Mn(e)))}}function Ao(n,e,t,s,i,r){const o=e.eventCache;if(Fn(s,t)!=null)return e;{let l,a;if(S(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),u=c instanceof b?c:b.EMPTY_NODE,h=qs(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ln(s,pt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){g(Xe(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=nr(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=W(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=nr(s,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ys(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return qt(e,l,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function Bn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(S(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),f,null)}else{const f=N(t);if(!a.isCompleteForPath(t)&&Xe(t)>1)return e;const p=W(t),m=a.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(a.getNode(),m):c=u.updateChild(a.getNode(),f,m,p,Ro,null)}const h=Eo(e,c,a.isFullyInitialized()||S(t),u.filtersNodes()),d=new Ks(i,h,r);return Ao(n,h,t,i,d,l)}function Ss(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ks(i,e,r);if(S(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=qt(e,c,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=qt(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=W(t),f=l.getNode().getImmediateChild(h);let p;if(S(d))p=s;else{const _=u.getCompleteChild(h);_!=null?co(d)===".priority"&&_.getChild(ho(d)).isEmpty()?p=_:p=_.updateChild(d,s):p=b.EMPTY_NODE}if(f.equals(p))a=e;else{const _=n.filter.updateChild(l.getNode(),h,p,d,u,o);a=qt(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function sr(n,e){return n.eventCache.isCompleteForChild(e)}function Gh(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Q(t,a);sr(e,N(u))&&(l=Ss(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Q(t,a);sr(e,N(u))||(l=Ss(n,l,u,c,i,r,o))}),l}function ir(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ts(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;S(t)?c=s:c=new z(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=ir(n,f,d);a=Bn(n,a,new F(h),p,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),_=ir(n,p,d);a=Bn(n,a,new F(h),_,i,r,o,l)}}),a}function jh(n,e,t,s,i,r,o){if(Fn(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(S(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Bn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(S(t)){let c=new z(null);return a.getNode().forEachChild(Nt,(u,h)=>{c=c.set(new F(u),h)}),Ts(n,e,t,c,i,r,l,o)}else return e}else{let c=new z(null);return s.foreach((u,h)=>{const d=Q(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),Ts(n,e,t,c,i,r,l,o)}}function qh(n,e,t,s,i){const r=e.serverCache,o=Eo(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return Ao(n,o,t,s,Ro,i)}function Yh(n,e,t,s,i,r){let o;if(Fn(s,t)!=null)return e;{const l=new Ks(s,e,i),a=e.eventCache.getNode();let c;if(S(t)||N(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ln(s,pt(e));else{const h=e.serverCache.getNode();g(h instanceof b,"serverChildren would be complete if leaf node"),u=qs(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=N(t);let h=Ys(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,W(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,b.EMPTY_NODE,W(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ln(s,pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fn(s,D())!=null,qt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hs(s.getIndex()),r=fh(s);this.processor_=Uh(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(b.EMPTY_NODE,l.getNode(),null),u=new Je(a,o.isFullyInitialized(),i.filtersNodes()),h=new Je(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gn(h,u),this.eventGenerator_=new yh(this.query_)}get query(){return this.query_}}function Qh(n){return n.viewCache_.serverCache.getNode()}function $h(n){return Mn(n.viewCache_)}function Xh(n,e){const t=pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function rr(n){return n.eventRegistrations_.length===0}function Jh(n,e){n.eventRegistrations_.push(e)}function or(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function lr(n,e,t,s){e.type===Se.MERGE&&e.source.queryId!==null&&(g(pt(n.viewCache_),"We should always have a full cache before handling merges"),g(Mn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Hh(n.processor_,i,e,t,s);return zh(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,xo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(G,(r,o)=>{s.push(xt(r,o))}),t.isFullyInitialized()&&s.push(yo(t.getNode())),xo(n,s,t.getNode(),e)}function xo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Ch(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;class Po{constructor(){this.views=new Map}}function ed(n){g(!Wn,"__referenceConstructor has already been defined"),Wn=n}function td(){return g(Wn,"Reference.ts has not been loaded"),Wn}function nd(n){return n.views.size===0}function Qs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),lr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(lr(o,e,t,s));return r}}function Do(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Ln(t,i?s:null),a=!1;l?a=!0:s instanceof b?(l=qs(t,s),a=!1):(l=b.EMPTY_NODE,a=!1);const c=Gn(new Je(l,a,!1),new Je(s,i,!1));return new Kh(e,c)}return o}function sd(n,e,t,s,i,r){const o=Do(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Jh(o,t),Zh(o,t)}function id(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ze(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(or(c,t,s)),rr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(or(a,t,s)),rr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ze(n)&&r.push(new(td())(e._repo,e._path)),{removed:r,events:o}}function Oo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $e(n,e){let t=null;for(const s of n.views.values())t=t||Xh(s,e);return t}function Mo(n,e){if(e._queryParams.loadsAllData())return qn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Lo(n,e){return Mo(n,e)!=null}function Ze(n){return qn(n)!=null}function qn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;function rd(n){g(!Un,"__referenceConstructor has already been defined"),Un=n}function od(){return g(Un,"Reference.ts has not been loaded"),Un}let ld=1;class ar{constructor(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=Lh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ad(n,e,t,s,i){return Sh(n.pendingWriteTree_,e,t,s,i),i?_n(n,new _t(wo(),e,t)):[]}function It(n,e,t=!1){const s=Th(n.pendingWriteTree_,e);if(kh(n.pendingWriteTree_,e)){let r=new z(null);return s.snap!=null?r=r.set(D(),!0):oe(s.children,o=>{r=r.set(new F(o),!0)}),_n(n,new On(s.path,r,t))}else return[]}function fn(n,e,t){return _n(n,new _t(Gs(),e,t))}function cd(n,e,t){const s=z.fromObject(t);return _n(n,new sn(Gs(),e,s))}function ud(n,e){return _n(n,new nn(Gs(),e))}function hd(n,e,t){const s=$s(n,t);if(s){const i=Xs(s),r=i.path,o=i.queryId,l=ne(r,e),a=new nn(js(o),l);return Js(n,r,a)}else return[]}function Fo(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Lo(o,e))){const a=id(o,e,t,s);nd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Ze(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=pd(d);for(let p=0;p<f.length;++p){const _=f[p],m=_.query,E=Ho(n,_);n.listenProvider_.startListening(Kt(m),rn(n,m),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Kt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Yn(d));n.listenProvider_.stopListening(Kt(d),f)}))}gd(n,c)}return l}function Bo(n,e,t,s){const i=$s(n,s);if(i!=null){const r=Xs(i),o=r.path,l=r.queryId,a=ne(o,e),c=new _t(js(l),a,t);return Js(n,o,c)}else return[]}function dd(n,e,t,s){const i=$s(n,s);if(i){const r=Xs(i),o=r.path,l=r.queryId,a=ne(o,e),c=z.fromObject(t),u=new sn(js(l),a,c);return Js(n,o,u)}else return[]}function fd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=ne(d,i);r=r||$e(f,p),o=o||Ze(f)});let l=n.syncPointTree_.get(i);l?(o=o||Ze(l),r=r||$e(l,D())):(l=new Po,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=b.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const _=$e(p,D());_&&(r=r.updateImmediateChild(f,_))}));const c=Lo(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Yn(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=md();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=jn(n.pendingWriteTree_,i);let h=sd(l,e,t,u,r,a);if(!c&&!o&&!s){const d=Mo(l,e);h=h.concat(vd(n,e,d))}return h}function Wo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=ne(o,e),c=$e(l,a);if(c)return c});return To(i,e,r,t,!0)}function _d(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=ne(c,t);s=s||$e(u,h)});let i=n.syncPointTree_.get(t);i?s=s||$e(i,D()):(i=new Po,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Je(s,!0,!1):null,l=jn(n.pendingWriteTree_,e._path),a=Do(i,e,l,r?o.getNode():b.EMPTY_NODE,r);return $h(a)}function _n(n,e){return Uo(e,n.syncPointTree_,null,jn(n.pendingWriteTree_,D()))}function Uo(n,e,t,s){if(S(n.path))return zo(n,e,t,s);{const i=e.get(D());t==null&&i!=null&&(t=$e(i,D()));let r=[];const o=N(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=ko(s,o);r=r.concat(Uo(l,a,c,u))}return i&&(r=r.concat(Qs(i,n,s,t))),r}}function zo(n,e,t,s){const i=e.get(D());t==null&&i!=null&&(t=$e(i,D()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=ko(s,o),u=n.operationForChild(o);u&&(r=r.concat(zo(u,l,a,c)))}),i&&(r=r.concat(Qs(i,n,s,t))),r}function Ho(n,e){const t=e.query,s=rn(n,t);return{hashFn:()=>(Qh(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?hd(n,t._path,s):ud(n,t._path);{const r=du(i,t);return Fo(n,t,null,r)}}}}function rn(n,e){const t=Yn(e);return n.queryToTagMap.get(t)}function Yn(n){return n._path.toString()+"$"+n._queryIdentifier}function $s(n,e){return n.tagToQueryMap.get(e)}function Xs(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new F(n.substr(0,e))}}function Js(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=jn(n.pendingWriteTree_,e);return Qs(s,t,i,null)}function pd(n){return n.fold((e,t,s)=>{if(t&&Ze(t))return[qn(t)];{let i=[];return t&&(i=Oo(t)),oe(s,(r,o)=>{i=i.concat(o)}),i}})}function Kt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(od())(n._repo,n._path):n}function gd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Yn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function md(){return ld++}function vd(n,e,t){const s=e._path,i=rn(n,e),r=Ho(n,t),o=n.listenProvider_.startListening(Kt(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)g(!Ze(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!S(c)&&u&&Ze(u))return[qn(u).query];{let d=[];return u&&(d=d.concat(Oo(u).map(f=>f.query))),oe(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Kt(u),rn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class ei{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Q(this.path_,e);return new ei(this.syncTree_,t)}node(){return Wo(this.syncTree_,this.path_)}}const bd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},cr=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Cd(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},Cd=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wd=function(n,e,t,s){return ti(e,new ei(t,n),s)},Ed=function(n,e,t){return ti(n,new Zs(e),t)};function ti(n,e,t){const s=n.getPriority().val(),i=cr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=cr(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new J(l,ee(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new J(i))),o.forEachChild(G,(l,a)=>{const c=ti(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function si(n,e){let t=e instanceof F?e:new F(e),s=n,i=N(t);for(;i!==null;){const r=Rt(s.node.children,i)||{children:{},childCount:0};s=new ni(i,s,r),t=W(t),i=N(t)}return s}function Ft(n){return n.node.value}function Vo(n,e){n.node.value=e,ks(n)}function Go(n){return n.node.childCount>0}function Id(n){return Ft(n)===void 0&&!Go(n)}function Kn(n,e){oe(n.node.children,(t,s)=>{e(new ni(t,n,s))})}function jo(n,e,t,s){t&&!s&&e(n),Kn(n,i=>{jo(i,e,!0,s)}),t&&s&&e(n)}function Sd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pn(n){return new F(n.parent===null?n.name:pn(n.parent)+"/"+n.name)}function ks(n){n.parent!==null&&Td(n.parent,n.name,n)}function Td(n,e,t){const s=Id(t),i=He(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ks(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ks(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Nd=/[\[\].#$\u0000-\u001F\u007F]/,ls=10*1024*1024,qo=function(n){return typeof n=="string"&&n.length!==0&&!kd.test(n)},Yo=function(n){return typeof n=="string"&&n.length!==0&&!Nd.test(n)},Rd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yo(n)},Ko=function(n,e,t){const s=t instanceof F?new ju(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ct(s));if(typeof e=="function")throw new Error(n+"contains a function "+ct(s)+" with contents = "+e.toString());if(Hr(e))throw new Error(n+"contains "+e.toString()+" "+ct(s));if(typeof e=="string"&&e.length>ls/3&&Hn(e)>ls)throw new Error(n+"contains a string greater than "+ls+" utf8 bytes "+ct(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qo(o)))throw new Error(n+" contains an invalid key ("+o+") "+ct(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qu(s,o),Ko(n,l,s),Yu(s)}),i&&r)throw new Error(n+' contains ".value" child '+ct(s)+" in addition to actual children.")}},Qo=function(n,e,t,s){if(!Yo(t))throw new Error(Pr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ad=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qo(n,e,t)},xd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Rd(t))throw new Error(Pr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!fo(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function it(n,e,t){Dd(n,t),Od(n,s=>Ie(s,e)||Ie(e,s))}function Od(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Md(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Md(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Gt&&te("event: "+t.toString()),hn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="repo_interrupt",Fd=25;class Bd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dn(),this.transactionQueueTree_=new ni,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wd(n,e,t){if(n.stats_=Bs(n.repoInfo_),n.forceRestClient_||gu())n.server_=new Pn(n.repoInfo_,(s,i,r,o)=>{ur(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>hr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{K(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Fe(n.repoInfo_,e,(s,i,r,o)=>{ur(n,s,i,r,o)},s=>{hr(n,s)},s=>{zd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Cu(n.repoInfo_,()=>new bh(n.stats_,n.server_)),n.infoData_=new _h,n.infoSyncTree_=new ar({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=fn(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ii(n,"connected",!1),n.serverSyncTree_=new ar({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);it(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ud(n){const t=n.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function $o(n){return bd({timestamp:Ud(n)})}function ur(n,e,t,s,i){n.dataUpdateCount++;const r=new F(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=Tn(t,c=>ee(c));o=dd(n.serverSyncTree_,r,a,i)}else{const a=ee(t);o=Bo(n.serverSyncTree_,r,a,i)}else if(s){const a=Tn(t,c=>ee(c));o=cd(n.serverSyncTree_,r,a)}else{const a=ee(t);o=fn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=li(n,r)),it(n.eventQueue_,l,o)}function hr(n,e){ii(n,"connected",e),e===!1&&Gd(n)}function zd(n,e){oe(e,(t,s)=>{ii(n,t,s)})}function ii(n,e,t){const s=new F("/.info/"+e),i=ee(t);n.infoData_.updateSnapshot(s,i);const r=fn(n.infoSyncTree_,s,i);it(n.eventQueue_,s,r)}function Hd(n){return n.nextWriteId_++}function Vd(n,e,t){const s=_d(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=ee(i).withIndex(e._queryParams.getIndex());fd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=fn(n.serverSyncTree_,e._path,r);else{const l=rn(n.serverSyncTree_,e);o=Bo(n.serverSyncTree_,e._path,r,l)}return it(n.eventQueue_,e._path,o),Fo(n.serverSyncTree_,e,t,null,!0),r},i=>(ri(n,"get for query "+K(e)+" failed: "+i),Promise.reject(new Error(i))))}function Gd(n){ri(n,"onDisconnectEvents");const e=$o(n),t=Dn();ws(n.onDisconnect_,D(),(i,r)=>{const o=wd(i,r,n.serverSyncTree_,e);Co(t,i,o)});let s=[];ws(t,D(),(i,r)=>{s=s.concat(fn(n.serverSyncTree_,i,r));const o=Kd(n,i);li(n,o)}),n.onDisconnect_=Dn(),it(n.eventQueue_,D(),s)}function jd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ld)}function ri(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function Xo(n,e,t){return Wo(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function oi(n,e=n.transactionQueueTree_){if(e||Qn(n,e),Ft(e)){const t=Zo(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&qd(n,pn(e),t)}else Go(e)&&Kn(e,t=>{oi(n,t)})}function qd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Xo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{ri(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(It(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Qn(n,si(n.transactionQueueTree_,e)),oi(n,n.transactionQueueTree_),it(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)hn(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ue("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}li(n,e)}},o)}function li(n,e){const t=Jo(n,e),s=pn(t),i=Zo(n,t);return Yd(n,i,s),s}function Yd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ne(t,a.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(It(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Fd)u=!0,h="maxretry",i=i.concat(It(n.serverSyncTree_,a.currentWriteId,!0));else{const d=Xo(n,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){Ko("transaction failed: Data returned ",f,a.path);let p=ee(f);typeof f=="object"&&f!=null&&He(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=a.currentWriteId,E=$o(n),R=Ed(p,d,E);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=R,a.currentWriteId=Hd(n),o.splice(o.indexOf(m),1),i=i.concat(ad(n.serverSyncTree_,a.path,R,a.currentWriteId,a.applyLocally)),i=i.concat(It(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",i=i.concat(It(n.serverSyncTree_,a.currentWriteId,!0))}it(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Qn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)hn(s[l]);oi(n,n.transactionQueueTree_)}function Jo(n,e){let t,s=n.transactionQueueTree_;for(t=N(e);t!==null&&Ft(s)===void 0;)s=si(s,t),e=W(e),t=N(e);return s}function Zo(n,e){const t=[];return el(n,e,t),t.sort((s,i)=>s.order-i.order),t}function el(n,e,t){const s=Ft(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Kn(e,i=>{el(n,i,t)})}function Qn(n,e){const t=Ft(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Vo(e,t.length>0?t:void 0)}Kn(e,s=>{Qn(n,s)})}function Kd(n,e){const t=pn(Jo(n,e)),s=si(n.transactionQueueTree_,e);return Sd(s,i=>{as(n,i)}),as(n,s),jo(s,i=>{as(n,i)}),t}function as(n,e){const t=Ft(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(It(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vo(e,void 0):t.length=r+1,it(n.eventQueue_,pn(e),i);for(let o=0;o<s.length;o++)hn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $d(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ue(`Invalid query segment '${t}' in query '${n}'`)}return e}const dr=function(n,e){const t=Xd(n),s=t.namespace;t.domain==="firebase.com"&&Be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||lu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new eo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new F(t.pathString)}},Xd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Qd(n.substring(u,h)));const d=$d(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+K(this.snapshot.exportVal())}}class Zd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ai{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return S(this._path)?null:co(this._path)}get ref(){return new Ve(this._repo,this._path)}get _queryIdentifier(){const e=Xi(this._queryParams),t=Ls(e);return t==="{}"?"default":t}get _queryObject(){return Xi(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof ai))return!1;const t=this._repo===e._repo,s=fo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gu(this._path)}}class Ve extends ai{constructor(e,t){super(e,t,new Vs,!1)}get parent(){const e=ho(this._path);return e===null?null:new Ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class on{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new F(e),s=Ns(this.ref,e);return new on(this._node.getChild(t),s,G)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new on(i,Ns(this.ref,s),G)))}hasChild(e){const t=new F(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tf(n,e){return n=an(n),n._checkNotDeleted("ref"),n._root}function Ns(n,e){return n=an(n),N(n._path)===null?Ad("child","path",e):Qo("child","path",e),new Ve(n._repo,Q(n._path,e))}function nf(n){n=an(n);const e=new ef(()=>{}),t=new ci(e);return Vd(n._repo,n,t).then(s=>new on(s,new Ve(n._repo,n._path),n._queryParams.getIndex()))}class ci{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Jd("value",this,new on(e.snapshotNode,new Ve(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zd(this,e,t):null}matches(e){return e instanceof ci?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ed(Ve);rd(Ve);/**
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
 */const sf="FIREBASE_DATABASE_EMULATOR_HOST",Rs={};let rf=!1;function of(n,e,t,s){n.repoInfo_=new eo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function lf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=dr(r,i),l=o.repoInfo,a;typeof process<"u"&&Di&&(a=Di[sf]),a?(r=`http://${a}?ns=${l.namespace}`,o=dr(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new vu(n.name,n.options,e);xd("Invalid Firebase Database URL",o),S(o.path)||Be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=cf(l,n,c,new mu(n.name,t));return new uf(u,n)}function af(n,e){const t=Rs[e];(!t||t[n.key]!==n)&&Be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),jd(n),delete t[n.key]}function cf(n,e,t,s){let i=Rs[e.name];i||(i={},Rs[e.name]=i);let r=i[n.toURLString()];return r&&Be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Bd(n,rf,t,s),i[n.toURLString()]=r,r}class uf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ve(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(af(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Be("Cannot call "+e+" on a deleted database.")}}function hf(n=Vc(),e){const t=Wc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Aa("database");s&&df(t,...s)}return t}function df(n,e,t,s={}){n=an(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Be("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new En(En.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:xa(s.mockUserToken,n.app.options.projectId);r=new En(o)}of(i,e,t,r)}/**
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
 */function ff(n){tu(Hc),Nn(new $t("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Tt(Oi,Mi,n),Tt(Oi,Mi,"esm2017")}Fe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Fe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ff();function fr(n){let e,t=`Classifica generale di tutti gli studenti di informatica non relativa a
        classe o materia scolastica`;return{c(){e=A("p"),e.textContent=t,this.h()},l(s){e=x(s,"P",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-73n2sd"&&(e.textContent=t),this.h()},h(){C(e,"class","svelte-1yu2ldh")},m(s,i){T(s,e,i)},d(s){s&&v(e)}}}function _f(n){let e,t,s,i="Seleziona la classe:",r,o,l,a="3 Info",c,u="4 Info",h,d="5 Info",f,p,_,m="Seleziona la materia:",E,R,X,Ne="TPSI",se,rt="Informatica",ie,ot="Sistemi e Reti",y,vt="Totale materie",le,M="Generale",lt,Ce,we,De,bt,yt,j=n[2]==="all"&&fr();return we=new ya({props:{items:n[0]}}),{c(){e=A("div"),t=A("div"),s=A("label"),s.textContent=i,r=ae(),o=A("select"),l=A("option"),l.textContent=a,c=A("option"),c.textContent=u,h=A("option"),h.textContent=d,f=ae(),p=A("div"),_=A("label"),_.textContent=m,E=ae(),R=A("select"),X=A("option"),X.textContent=Ne,se=A("option"),se.textContent=rt,ie=A("option"),ie.textContent=ot,y=A("option"),y.textContent=vt,le=A("option"),le.textContent=M,lt=ae(),j&&j.c(),Ce=ae(),pe(we.$$.fragment),this.h()},l(V){e=x(V,"DIV",{class:!0});var q=P(e);t=x(q,"DIV",{});var he=P(t);s=x(he,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),de(s)!=="svelte-fizozt"&&(s.textContent=i),r=ce(he),o=x(he,"SELECT",{name:!0,id:!0,class:!0});var gn=P(o);l=x(gn,"OPTION",{"data-svelte-h":!0}),de(l)!=="svelte-1avwpfu"&&(l.textContent=a),c=x(gn,"OPTION",{"data-svelte-h":!0}),de(c)!=="svelte-q3x82o"&&(c.textContent=u),h=x(gn,"OPTION",{"data-svelte-h":!0}),de(h)!=="svelte-70otfa"&&(h.textContent=d),gn.forEach(v),he.forEach(v),f=ce(q),p=x(q,"DIV",{});var mn=P(p);_=x(mn,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),de(_)!=="svelte-1ch515j"&&(_.textContent=m),E=ce(mn),R=x(mn,"SELECT",{name:!0,id:!0,class:!0});var Ct=P(R);X=x(Ct,"OPTION",{"data-svelte-h":!0}),de(X)!=="svelte-q6yvwu"&&(X.textContent=Ne),se=x(Ct,"OPTION",{"data-svelte-h":!0}),de(se)!=="svelte-12xyn8s"&&(se.textContent=rt),ie=x(Ct,"OPTION",{"data-svelte-h":!0}),de(ie)!=="svelte-1l6801"&&(ie.textContent=ot),y=x(Ct,"OPTION",{"data-svelte-h":!0}),de(y)!=="svelte-11v1trh"&&(y.textContent=vt),le=x(Ct,"OPTION",{"data-svelte-h":!0}),de(le)!=="svelte-1c99w4k"&&(le.textContent=M),Ct.forEach(v),mn.forEach(v),q.forEach(v),lt=ce(V),j&&j.l(V),Ce=ce(V),ge(we.$$.fragment,V),this.h()},h(){C(s,"for","select-class"),C(s,"class","svelte-1yu2ldh"),l.__value="3",Ge(l,l.__value),c.__value="4",Ge(c,c.__value),h.__value="5",Ge(h,h.__value),C(o,"name","classe"),C(o,"id","classe"),C(o,"class","svelte-1yu2ldh"),n[1]===void 0&&hi(()=>n[4].call(o)),C(_,"for","select-subject"),C(_,"class","svelte-1yu2ldh"),X.__value="TPSI",Ge(X,X.__value),se.__value="informatica",Ge(se,se.__value),ie.__value="reti",Ge(ie,ie.__value),y.__value="sum-subjects",Ge(y,y.__value),le.__value="all",Ge(le,le.__value),C(R,"name","materia"),C(R,"id","materia"),C(R,"class","svelte-1yu2ldh"),n[2]===void 0&&hi(()=>n[5].call(R)),C(e,"class","select-container svelte-1yu2ldh")},m(V,q){T(V,e,q),k(e,t),k(t,s),k(t,r),k(t,o),k(o,l),k(o,c),k(o,h),bn(o,n[1],!0),k(e,f),k(e,p),k(p,_),k(p,E),k(p,R),k(R,X),k(R,se),k(R,ie),k(R,y),k(R,le),bn(R,n[2],!0),T(V,lt,q),j&&j.m(V,q),T(V,Ce,q),me(we,V,q),De=!0,bt||(yt=[H(o,"change",n[4]),H(o,"change",function(){cs(n[3](n[2],n[1]))&&n[3](n[2],n[1]).apply(this,arguments)}),H(R,"change",n[5]),H(R,"change",function(){cs(n[3](n[2],n[1]))&&n[3](n[2],n[1]).apply(this,arguments)})],bt=!0)},p(V,[q]){n=V,q&2&&bn(o,n[1]),q&4&&bn(R,n[2]),n[2]==="all"?j||(j=fr(),j.c(),j.m(Ce.parentNode,Ce)):j&&(j.d(1),j=null);const he={};q&1&&(he.items=n[0]),we.$set(he)},i(V){De||(O(we.$$.fragment,V),De=!0)},o(V){L(we.$$.fragment,V),De=!1},d(V){V&&(v(e),v(lt),v(Ce)),j&&j.d(V),ve(we,V),bt=!1,zn(yt)}}}function pf(n,e,t){Lr({apiKey:"AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",authDomain:"lambsoffame.firebaseapp.com",databaseURL:"https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",projectId:"lambsoffame",storageBucket:"lambsoffame.appspot.com",messagingSenderId:"583547239362",appId:"1:583547239362:web:eda69c76496ccc9cbd345b"});const i=async()=>{const f=tf(hf());return(await nf(Ns(f,"leaderboard/"))).val()},r=f=>{let p=Object.values(u.TPSI).concat(Object.values(u.reti),Object.values(u.informatica)).filter(_=>_.class==f);t(0,l=Array.from(new Set(p.map(_=>_.username))).map(_=>p.filter(m=>m.username===_)).map(_=>({username:_[0].username,avatar:_[0].avatar,class:_[0].class,points:_.reduce((m,E)=>m+E.points,0)})).sort((_,m)=>m.points-_.points))},o=async(f,p)=>{switch(f){case"sum-subjects":r(p);break;case"all":t(0,l=Object.values(u.generale).sort((m,E)=>E.points-m.points));break;default:let _=u[`${f}`];t(0,l=Object.values(_).sort((m,E)=>E.points-m.points).filter(m=>m.class==p));break}};tl(async()=>{u=await i(),o("TPSI",3)});let l=[],a,c,u={};function h(){a=di(this),t(1,a)}function d(){c=di(this),t(2,c)}return[l,a,c,o,h,d]}class vf extends Ue{constructor(e){super(),ze(this,e,pf,_f,We,{})}}export{vf as component};
