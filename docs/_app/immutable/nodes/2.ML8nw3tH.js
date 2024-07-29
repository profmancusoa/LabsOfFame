import{s as Se,c as Ye,x as J,u as Ke,g as $e,a as Qe,y as ge,z as me,A as ln,B as Pe,i as _r,r as An,C as $,n as Ne,D as ii,k as il,e as ri,E as oi,o as rl}from"../chunks/scheduler.ekRcpiyW.js";import{S as Te,i as ke,e as V,c as G,d as R,g as m,y as Re,o as I,j as S,k as B,t as A,a as P,q as ys,n as Cs,z as j,m as Ae,A as _e,B as pe,C as dn,b as be,f as ve,l as Xe,s as he,u as se,D as ol,E as pr,h as de,v as ie,w as re,x as oe,F as gr,G as li,H as ai,I as ll,J as ci}from"../chunks/index.CYBkWOey.js";function fn(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function lt(n,e){const t={},s={},i={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(s[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);n[r]=l}else for(const a in o)i[a]=1}for(const o in s)o in t||(t[o]=void 0);return t}const ws="-";function al(n){const e=ul(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;function i(o){const l=o.split(ws);return l[0]===""&&l.length!==1&&l.shift(),mr(l,e)||cl(o)}function r(o,l){const a=t[o]||[];return l&&s[o]?[...a,...s[o]]:a}return{getClassGroupId:i,getConflictingClassGroupIds:r}}function mr(n,e){var o;if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),i=s?mr(n.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=n.join(ws);return(o=e.validators.find(({validator:l})=>l(r)))==null?void 0:o.classGroupId}const ui=/^\[(.+)\]$/;function cl(n){if(ui.test(n)){const e=ui.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function ul(n){const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return dl(Object.entries(n.classGroups),t).forEach(([r,o])=>{es(o,s,r,e)}),s}function es(n,e,t,s){n.forEach(i=>{if(typeof i=="string"){const r=i===""?e:hi(e,i);r.classGroupId=t;return}if(typeof i=="function"){if(hl(i)){es(i(s),e,t,s);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([r,o])=>{es(o,hi(e,r),t,s)})})}function hi(n,e){let t=n;return e.split(ws).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t}function hl(n){return n.isThemeGetter}function dl(n,e){return e?n.map(([t,s])=>{const i=s.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,l])=>[e+o,l])):r);return[t,i]}):n}function fl(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;function i(r,o){t.set(r,o),e++,e>n&&(e=0,s=t,t=new Map)}return{get(r){let o=t.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){t.has(r)?t.set(r,o):i(r,o)}}}const br="!";function _l(n){const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,i=e[0],r=e.length;function o(l){const a=[];let c=0,u=0,h;for(let b=0;b<l.length;b++){let C=l[b];if(c===0){if(C===i&&(s||l.slice(b,b+r)===e)){a.push(l.slice(u,b)),u=b+r;continue}if(C==="/"){h=b;continue}}C==="["?c++:C==="]"&&c--}const d=a.length===0?l:l.substring(u),f=d.startsWith(br),_=f?d.substring(1):d,p=h&&h>u?h-u:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:_,maybePostfixModifierPosition:p}}return t?function(a){return t({className:a,parseClassName:o})}:o}function pl(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e}function gl(n){return{cache:fl(n.cacheSize),parseClassName:_l(n),...al(n)}}const ml=/\s+/;function bl(n,e){const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:i}=e,r=new Set;return n.trim().split(ml).map(o=>{const{modifiers:l,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let h=!!u,d=s(h?c.substring(0,u):c);if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=s(c),!d)return{isTailwindClass:!1,originalClassName:o};h=!1}const f=pl(l).join(":");return{isTailwindClass:!0,modifierId:a?f+br:f,classGroupId:d,originalClassName:o,hasPostfixModifier:h}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:l,classGroupId:a,hasPostfixModifier:c}=o,u=l+a;return r.has(u)?!1:(r.add(u),i(a,c).forEach(h=>r.add(l+h)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function ts(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=vr(e))&&(s&&(s+=" "),s+=t);return s}function vr(n){if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=vr(n[s]))&&(t&&(t+=" "),t+=e);return t}function vl(n,...e){let t,s,i,r=o;function o(a){const c=e.reduce((u,h)=>h(u),n());return t=gl(c),s=t.cache.get,i=t.cache.set,r=l,l(a)}function l(a){const c=s(a);if(c)return c;const u=bl(a,t);return i(a,u),u}return function(){return r(ts.apply(null,arguments))}}function U(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const yr=/^\[(?:([a-z-]+):)?(.+)\]$/i,yl=/^\d+\/\d+$/,Cl=new Set(["px","full","screen"]),wl=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,El=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Il=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Sl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Tl=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function xe(n){return tt(n)||Cl.has(n)||yl.test(n)}function Be(n){return yt(n,"length",Ol)}function tt(n){return!!n&&!Number.isNaN(Number(n))}function an(n){return yt(n,"number",tt)}function Tt(n){return!!n&&Number.isInteger(Number(n))}function kl(n){return n.endsWith("%")&&tt(n.slice(0,-1))}function E(n){return yr.test(n)}function We(n){return wl.test(n)}const Nl=new Set(["length","size","percentage"]);function Rl(n){return yt(n,Nl,Cr)}function Al(n){return yt(n,"position",Cr)}const xl=new Set(["image","url"]);function Pl(n){return yt(n,xl,Ll)}function Dl(n){return yt(n,"",Ml)}function kt(){return!0}function yt(n,e,t){const s=yr.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1}function Ol(n){return El.test(n)&&!Il.test(n)}function Cr(){return!1}function Ml(n){return Sl.test(n)}function Ll(n){return Tl.test(n)}function Fl(){const n=U("colors"),e=U("spacing"),t=U("blur"),s=U("brightness"),i=U("borderColor"),r=U("borderRadius"),o=U("borderSpacing"),l=U("borderWidth"),a=U("contrast"),c=U("grayscale"),u=U("hueRotate"),h=U("invert"),d=U("gap"),f=U("gradientColorStops"),_=U("gradientColorStopPositions"),p=U("inset"),b=U("margin"),C=U("opacity"),O=U("padding"),W=U("saturate"),q=U("scale"),M=U("sepia"),w=U("skew"),K=U("space"),ue=U("translate"),y=()=>["auto","contain","none"],ct=()=>["auto","hidden","clip","visible","scroll"],Wn=()=>["auto",E,e],H=()=>[E,e],ei=()=>["",xe,Be],sn=()=>["auto",tt,E],ti=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],rn=()=>["solid","dashed","dotted","double","none"],ni=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Un=()=>["start","end","center","between","around","evenly","stretch"],It=()=>["","0",E],si=()=>["auto","avoid","all","avoid-page","page","left","right","column"],St=()=>[tt,an],on=()=>[tt,E];return{cacheSize:500,separator:":",theme:{colors:[kt],spacing:[xe,Be],blur:["none","",We,E],brightness:St(),borderColor:[n],borderRadius:["none","","full",We,E],borderSpacing:H(),borderWidth:ei(),contrast:St(),grayscale:It(),hueRotate:on(),invert:It(),gap:H(),gradientColorStops:[n],gradientColorStopPositions:[kl,Be],inset:Wn(),margin:Wn(),opacity:St(),padding:H(),saturate:St(),scale:St(),sepia:It(),skew:on(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",E]}],container:["container"],columns:[{columns:[We]}],"break-after":[{"break-after":si()}],"break-before":[{"break-before":si()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ti(),E]}],overflow:[{overflow:ct()}],"overflow-x":[{"overflow-x":ct()}],"overflow-y":[{"overflow-y":ct()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Tt,E]}],basis:[{basis:Wn()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",E]}],grow:[{grow:It()}],shrink:[{shrink:It()}],order:[{order:["first","last","none",Tt,E]}],"grid-cols":[{"grid-cols":[kt]}],"col-start-end":[{col:["auto",{span:["full",Tt,E]},E]}],"col-start":[{"col-start":sn()}],"col-end":[{"col-end":sn()}],"grid-rows":[{"grid-rows":[kt]}],"row-start-end":[{row:["auto",{span:[Tt,E]},E]}],"row-start":[{"row-start":sn()}],"row-end":[{"row-end":sn()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",E]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",E]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...Un()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Un(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Un(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[O]}],px:[{px:[O]}],py:[{py:[O]}],ps:[{ps:[O]}],pe:[{pe:[O]}],pt:[{pt:[O]}],pr:[{pr:[O]}],pb:[{pb:[O]}],pl:[{pl:[O]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",E,e]}],"min-w":[{"min-w":[E,e,"min","max","fit"]}],"max-w":[{"max-w":[E,e,"none","full","min","max","fit","prose",{screen:[We]},We]}],h:[{h:[E,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[E,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[E,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[E,e,"auto","min","max","fit"]}],"font-size":[{text:["base",We,Be]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",an]}],"font-family":[{font:[kt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",E]}],"line-clamp":[{"line-clamp":["none",tt,an]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",xe,E]}],"list-image":[{"list-image":["none",E]}],"list-style-type":[{list:["none","disc","decimal",E]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...rn(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",xe,Be]}],"underline-offset":[{"underline-offset":["auto",xe,E]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",E]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",E]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ti(),Al]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Rl]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pl]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...rn(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:rn()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...rn()]}],"outline-offset":[{"outline-offset":[xe,E]}],"outline-w":[{outline:[xe,Be]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:ei()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[xe,Be]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",We,Dl]}],"shadow-color":[{shadow:[kt]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...ni(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ni()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",We,E]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[W]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[W]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",E]}],duration:[{duration:on()}],ease:[{ease:["linear","in","out","in-out",E]}],delay:[{delay:on()}],animate:[{animate:["none","spin","ping","pulse","bounce",E]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[q]}],"scale-x":[{"scale-x":[q]}],"scale-y":[{"scale-y":[q]}],rotate:[{rotate:[Tt,E]}],"translate-x":[{"translate-x":[ue]}],"translate-y":[{"translate-y":[ue]}],"skew-x":[{"skew-x":[w]}],"skew-y":[{"skew-y":[w]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",E]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",E]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",E]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[xe,Be,an]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Ie=vl(Fl);function Bl(n){let e,t,s,i,r;const o=n[11].default,l=Ye(o,n,n[10],null);let a=[n[4],{class:s=Ie("w-full text-left text-sm",n[3][n[2]],n[5].class)}],c={};for(let u=0;u<a.length;u+=1)c=J(c,a[u]);return{c(){e=V("div"),t=V("table"),l&&l.c(),this.h()},l(u){e=G(u,"DIV",{class:!0});var h=R(e);t=G(h,"TABLE",{class:!0});var d=R(t);l&&l.l(d),d.forEach(m),h.forEach(m),this.h()},h(){Re(t,c),I(e,"class",i=ts(n[0],n[1]&&"shadow-md sm:rounded-lg"))},m(u,h){S(u,e,h),B(e,t),l&&l.m(t,null),r=!0},p(u,[h]){l&&l.p&&(!r||h&1024)&&Ke(l,o,u,u[10],r?Qe(o,u[10],h,null):$e(u[10]),null),Re(t,c=lt(a,[h&16&&u[4],(!r||h&36&&s!==(s=Ie("w-full text-left text-sm",u[3][u[2]],u[5].class)))&&{class:s}])),(!r||h&3&&i!==(i=ts(u[0],u[1]&&"shadow-md sm:rounded-lg")))&&I(e,"class",i)},i(u){r||(A(l,u),r=!0)},o(u){P(l,u),r=!1},d(u){u&&m(e),l&&l.d(u)}}}function Wl(n,e,t){const s=["divClass","striped","hoverable","noborder","shadow","color","customeColor"];let i=ge(e,s),{$$slots:r={},$$scope:o}=e,{divClass:l="relative overflow-x-auto"}=e,{striped:a=!1}=e,{hoverable:c=!1}=e,{noborder:u=!1}=e,{shadow:h=!1}=e,{color:d="default"}=e,{customeColor:f=""}=e;const _={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:f};return n.$$set=p=>{t(5,e=J(J({},e),me(p))),t(4,i=ge(e,s)),"divClass"in p&&t(0,l=p.divClass),"striped"in p&&t(6,a=p.striped),"hoverable"in p&&t(7,c=p.hoverable),"noborder"in p&&t(8,u=p.noborder),"shadow"in p&&t(1,h=p.shadow),"color"in p&&t(2,d=p.color),"customeColor"in p&&t(9,f=p.customeColor),"$$scope"in p&&t(10,o=p.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&ln("striped",a),n.$$.dirty&128&&ln("hoverable",c),n.$$.dirty&256&&ln("noborder",u),n.$$.dirty&4&&ln("color",d)},e=me(e),[l,h,d,_,i,e,a,c,u,f,o,r]}class Ul extends Te{constructor(e){super(),ke(this,e,Wl,Bl,Se,{divClass:0,striped:6,hoverable:7,noborder:8,shadow:1,color:2,customeColor:9})}}function zl(n){let e,t;const s=n[2].default,i=Ye(s,n,n[1],null);return{c(){e=V("tbody"),i&&i.c(),this.h()},l(r){e=G(r,"TBODY",{class:!0});var o=R(e);i&&i.l(o),o.forEach(m),this.h()},h(){I(e,"class",n[0])},m(r,o){S(r,e,o),i&&i.m(e,null),t=!0},p(r,[o]){i&&i.p&&(!t||o&2)&&Ke(i,s,r,r[1],t?Qe(s,r[1],o,null):$e(r[1]),null),(!t||o&1)&&I(e,"class",r[0])},i(r){t||(A(i,r),t=!0)},o(r){P(i,r),t=!1},d(r){r&&m(e),i&&i.d(r)}}}function Hl(n,e,t){let{$$slots:s={},$$scope:i}=e,{tableBodyClass:r=void 0}=e;return n.$$set=o=>{"tableBodyClass"in o&&t(0,r=o.tableBodyClass),"$$scope"in o&&t(1,i=o.$$scope)},[r,i,s]}class Vl extends Te{constructor(e){super(),ke(this,e,Hl,zl,Se,{tableBodyClass:0})}}function Gl(n){let e;const t=n[6].default,s=Ye(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Ke(s,t,i,i[5],e?Qe(t,i[5],r,null):$e(i[5]),null)},i(i){e||(A(s,i),e=!0)},o(i){P(s,i),e=!1},d(i){s&&s.d(i)}}}function jl(n){let e,t,s,i;const r=n[6].default,o=Ye(r,n,n[5],null);return{c(){e=V("button"),o&&o.c()},l(l){e=G(l,"BUTTON",{});var a=R(e);o&&o.l(a),a.forEach(m)},m(l,a){S(l,e,a),o&&o.m(e,null),t=!0,s||(i=j(e,"click",function(){_r(n[1].onclick)&&n[1].onclick.apply(this,arguments)}),s=!0)},p(l,a){n=l,o&&o.p&&(!t||a&32)&&Ke(o,r,n,n[5],t?Qe(r,n[5],a,null):$e(n[5]),null)},i(l){t||(A(o,l),t=!0)},o(l){P(o,l),t=!1},d(l){l&&m(e),o&&o.d(l),s=!1,i()}}}function ql(n){let e,t,s,i;const r=[jl,Gl],o=[];function l(u,h){return u[1].onclick?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[0]}],c={};for(let u=0;u<a.length;u+=1)c=J(c,a[u]);return{c(){e=V("td"),s.c(),this.h()},l(u){e=G(u,"TD",{class:!0});var h=R(e);s.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){S(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(ys(),P(o[d],1,1,()=>{o[d]=null}),Cs(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),A(s,1),s.m(e,null)),Re(e,c=lt(a,[h&4&&u[2],(!i||h&1)&&{class:u[0]}]))},i(u){i||(A(s),i=!0)},o(u){P(s),i=!1},d(u){u&&m(e),o[t].d()}}}function Yl(n,e,t){const s=["tdClass"];let i=ge(e,s),{$$slots:r={},$$scope:o}=e,{tdClass:l="px-6 py-4 whitespace-nowrap font-medium "}=e,a="default";a=Pe("color");let c;return n.$$set=u=>{t(1,e=J(J({},e),me(u))),t(2,i=ge(e,s)),"tdClass"in u&&t(3,l=u.tdClass),"$$scope"in u&&t(5,o=u.$$scope)},n.$$.update=()=>{t(0,c=Ie(l,a==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",e.class))},e=me(e),[c,e,i,l,a,o,r]}class zn extends Te{constructor(e){super(),ke(this,e,Yl,ql,Se,{tdClass:3})}}function Kl(n){let e,t,s,i;const r=n[4].default,o=Ye(r,n,n[3],null);let l=[n[1],{class:n[0]}],a={};for(let c=0;c<l.length;c+=1)a=J(a,l[c]);return{c(){e=V("tr"),o&&o.c(),this.h()},l(c){e=G(c,"TR",{class:!0});var u=R(e);o&&o.l(u),u.forEach(m),this.h()},h(){Re(e,a)},m(c,u){S(c,e,u),o&&o.m(e,null),t=!0,s||(i=[j(e,"click",n[5]),j(e,"contextmenu",n[6]),j(e,"dblclick",n[7])],s=!0)},p(c,[u]){o&&o.p&&(!t||u&8)&&Ke(o,r,c,c[3],t?Qe(r,c[3],u,null):$e(c[3]),null),Re(e,a=lt(l,[u&2&&c[1],(!t||u&1)&&{class:c[0]}]))},i(c){t||(A(o,c),t=!0)},o(c){P(o,c),t=!1},d(c){c&&m(e),o&&o.d(c),s=!1,An(i)}}}function $l(n,e,t){const s=["color"];let i=ge(e,s),{$$slots:r={},$$scope:o}=e,{color:l=Pe("color")}=e;const a={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},c={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},u={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let h;function d(p){$.call(this,n,p)}function f(p){$.call(this,n,p)}function _(p){$.call(this,n,p)}return n.$$set=p=>{t(11,e=J(J({},e),me(p))),t(1,i=ge(e,s)),"color"in p&&t(2,l=p.color),"$$scope"in p&&t(3,o=p.$$scope)},n.$$.update=()=>{t(0,h=Ie([!Pe("noborder")&&"border-b last:border-b-0",a[l],Pe("hoverable")&&c[l],Pe("striped")&&u[l],e.class]))},e=me(e),[h,i,l,o,r,d,f,_]}class Ql extends Te{constructor(e){super(),ke(this,e,$l,Kl,Se,{color:2})}}function Xl(n){let e;const t=n[6].default,s=Ye(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Ke(s,t,i,i[5],e?Qe(t,i[5],r,null):$e(i[5]),null)},i(i){e||(A(s,i),e=!0)},o(i){P(s,i),e=!1},d(i){s&&s.d(i)}}}function Jl(n){let e,t;const s=n[6].default,i=Ye(s,n,n[5],null);return{c(){e=V("tr"),i&&i.c()},l(r){e=G(r,"TR",{});var o=R(e);i&&i.l(o),o.forEach(m)},m(r,o){S(r,e,o),i&&i.m(e,null),t=!0},p(r,o){i&&i.p&&(!t||o&32)&&Ke(i,s,r,r[5],t?Qe(s,r[5],o,null):$e(r[5]),null)},i(r){t||(A(i,r),t=!0)},o(r){P(i,r),t=!1},d(r){r&&m(e),i&&i.d(r)}}}function Zl(n){let e,t,s,i;const r=[Jl,Xl],o=[];function l(u,h){return u[0]?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[1]}],c={};for(let u=0;u<a.length;u+=1)c=J(c,a[u]);return{c(){e=V("thead"),s.c(),this.h()},l(u){e=G(u,"THEAD",{class:!0});var h=R(e);s.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){S(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(ys(),P(o[d],1,1,()=>{o[d]=null}),Cs(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),A(s,1),s.m(e,null)),Re(e,c=lt(a,[h&4&&u[2],(!i||h&2)&&{class:u[1]}]))},i(u){i||(A(s),i=!0)},o(u){P(s),i=!1},d(u){u&&m(e),o[t].d()}}}function ea(n,e,t){let s;const i=["theadClass","defaultRow"];let r=ge(e,i),{$$slots:o={},$$scope:l}=e,{theadClass:a="text-xs uppercase"}=e,{defaultRow:c=!0}=e,u;u=Pe("color");let h=Pe("noborder"),d=Pe("striped");const _={default:h||d?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let p=u==="default"?"text-gray-700 dark:text-gray-400":u==="custom"?"":"text-white  dark:text-white",b=d?"":u==="default"?"border-gray-700":u==="custom"?"":`border-${u}-400`;return n.$$set=C=>{t(13,e=J(J({},e),me(C))),t(2,r=ge(e,i)),"theadClass"in C&&t(3,a=C.theadClass),"defaultRow"in C&&t(0,c=C.defaultRow),"$$scope"in C&&t(5,l=C.$$scope)},n.$$.update=()=>{t(1,s=Ie(a,p,d&&b,_[u],e.class))},e=me(e),[c,s,r,a,u,l,o]}class ta extends Te{constructor(e){super(),ke(this,e,ea,Zl,Se,{theadClass:3,defaultRow:0})}}function na(n){let e,t,s,i,r;const o=n[4].default,l=Ye(o,n,n[3],null);let a=[n[1],{class:t=Ie(n[0],n[2].class)}],c={};for(let u=0;u<a.length;u+=1)c=J(c,a[u]);return{c(){e=V("th"),l&&l.c(),this.h()},l(u){e=G(u,"TH",{class:!0});var h=R(e);l&&l.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){S(u,e,h),l&&l.m(e,null),s=!0,i||(r=[j(e,"click",n[5]),j(e,"focus",n[6]),j(e,"keydown",n[7]),j(e,"keypress",n[8]),j(e,"keyup",n[9]),j(e,"mouseenter",n[10]),j(e,"mouseleave",n[11]),j(e,"mouseover",n[12])],i=!0)},p(u,[h]){l&&l.p&&(!s||h&8)&&Ke(l,o,u,u[3],s?Qe(o,u[3],h,null):$e(u[3]),null),Re(e,c=lt(a,[h&2&&u[1],(!s||h&5&&t!==(t=Ie(u[0],u[2].class)))&&{class:t}]))},i(u){s||(A(l,u),s=!0)},o(u){P(l,u),s=!1},d(u){u&&m(e),l&&l.d(u),i=!1,An(r)}}}function sa(n,e,t){const s=["padding"];let i=ge(e,s),{$$slots:r={},$$scope:o}=e,{padding:l="px-6 py-3"}=e;function a(b){$.call(this,n,b)}function c(b){$.call(this,n,b)}function u(b){$.call(this,n,b)}function h(b){$.call(this,n,b)}function d(b){$.call(this,n,b)}function f(b){$.call(this,n,b)}function _(b){$.call(this,n,b)}function p(b){$.call(this,n,b)}return n.$$set=b=>{t(2,e=J(J({},e),me(b))),t(1,i=ge(e,s)),"padding"in b&&t(0,l=b.padding),"$$scope"in b&&t(3,o=b.$$scope)},e=me(e),[l,i,e,o,r,a,c,u,h,d,f,_,p]}class Hn extends Te{constructor(e){super(),ke(this,e,sa,na,Se,{padding:0})}}function ia(n){let e,t,s,i,r,o,l,a=n[4].id&&n[4].title&&di(n),c=n[5].id&&n[5].desc&&fi(n),u=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=Ie("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],h={};for(let d=0;d<u.length;d+=1)h=J(h,u[d]);return{c(){e=_e("svg"),a&&a.c(),t=Ae(),c&&c.c(),s=_e("path"),i=_e("path"),r=_e("path"),this.h()},l(d){e=pe(d,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var f=R(e);a&&a.l(f),t=Ae(),c&&c.l(f),s=pe(f,"path",{d:!0}),R(s).forEach(m),i=pe(f,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),R(i).forEach(m),r=pe(f,"path",{d:!0}),R(r).forEach(m),f.forEach(m),this.h()},h(){I(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),I(i,"fill-rule","evenodd"),I(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),I(i,"clip-rule","evenodd"),I(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),dn(e,h)},m(d,f){S(d,e,f),a&&a.m(e,null),B(e,t),c&&c.m(e,null),B(e,s),B(e,i),B(e,r)},p(d,f){d[4].id&&d[4].title?a?a.p(d,f):(a=di(d),a.c(),a.m(e,t)):a&&(a.d(1),a=null),d[5].id&&d[5].desc?c?c.p(d,f):(c=fi(d),c.c(),c.m(e,s)):c&&(c.d(1),c=null),dn(e,h=lt(u,[{xmlns:"http://www.w3.org/2000/svg"},f&4&&{fill:d[2]},f&1024&&d[10],f&2049&&o!==(o=Ie("shrink-0",d[8][d[0]??"md"],d[11].class))&&{class:o},f&2&&{role:d[1]},f&64&&{"aria-label":d[6]},f&128&&l!==(l=d[7]?d[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(d){d&&m(e),a&&a.d(),c&&c.d()}}}function ra(n){let e,t,s,i,r,o,l,a,c,u=n[4].id&&n[4].title&&_i(n),h=n[5].id&&n[5].desc&&pi(n),d=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=Ie("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],f={};for(let _=0;_<d.length;_+=1)f=J(f,d[_]);return{c(){e=_e("svg"),u&&u.c(),t=Ae(),h&&h.c(),s=_e("path"),i=_e("path"),r=_e("path"),this.h()},l(_){e=pe(_,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var p=R(e);u&&u.l(p),t=Ae(),h&&h.l(p),s=pe(p,"path",{d:!0}),R(s).forEach(m),i=pe(p,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),R(i).forEach(m),r=pe(p,"path",{d:!0}),R(r).forEach(m),p.forEach(m),this.h()},h(){I(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),I(i,"fill-rule","evenodd"),I(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),I(i,"clip-rule","evenodd"),I(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),dn(e,f)},m(_,p){S(_,e,p),u&&u.m(e,null),B(e,t),h&&h.m(e,null),B(e,s),B(e,i),B(e,r),a||(c=[j(e,"click",n[12]),j(e,"keydown",n[13]),j(e,"keyup",n[14]),j(e,"focus",n[15]),j(e,"blur",n[16]),j(e,"mouseenter",n[17]),j(e,"mouseleave",n[18]),j(e,"mouseover",n[19]),j(e,"mouseout",n[20])],a=!0)},p(_,p){_[4].id&&_[4].title?u?u.p(_,p):(u=_i(_),u.c(),u.m(e,t)):u&&(u.d(1),u=null),_[5].id&&_[5].desc?h?h.p(_,p):(h=pi(_),h.c(),h.m(e,s)):h&&(h.d(1),h=null),dn(e,f=lt(d,[{xmlns:"http://www.w3.org/2000/svg"},p&4&&{fill:_[2]},p&1024&&_[10],p&2049&&o!==(o=Ie("shrink-0",_[8][_[0]??"md"],_[11].class))&&{class:o},p&2&&{role:_[1]},p&64&&{"aria-label":_[6]},p&128&&l!==(l=_[7]?_[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(_){_&&m(e),u&&u.d(),h&&h.d(),a=!1,An(c)}}}function di(n){let e,t=n[4].title+"",s,i;return{c(){e=_e("title"),s=be(t),this.h()},l(r){e=pe(r,"title",{id:!0});var o=R(e);s=ve(o,t),o.forEach(m),this.h()},h(){I(e,"id",i=n[4].id)},m(r,o){S(r,e,o),B(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Xe(s,t),o&16&&i!==(i=r[4].id)&&I(e,"id",i)},d(r){r&&m(e)}}}function fi(n){let e,t=n[5].desc+"",s,i;return{c(){e=_e("desc"),s=be(t),this.h()},l(r){e=pe(r,"desc",{id:!0});var o=R(e);s=ve(o,t),o.forEach(m),this.h()},h(){I(e,"id",i=n[5].id)},m(r,o){S(r,e,o),B(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Xe(s,t),o&32&&i!==(i=r[5].id)&&I(e,"id",i)},d(r){r&&m(e)}}}function _i(n){let e,t=n[4].title+"",s,i;return{c(){e=_e("title"),s=be(t),this.h()},l(r){e=pe(r,"title",{id:!0});var o=R(e);s=ve(o,t),o.forEach(m),this.h()},h(){I(e,"id",i=n[4].id)},m(r,o){S(r,e,o),B(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Xe(s,t),o&16&&i!==(i=r[4].id)&&I(e,"id",i)},d(r){r&&m(e)}}}function pi(n){let e,t=n[5].desc+"",s,i;return{c(){e=_e("desc"),s=be(t),this.h()},l(r){e=pe(r,"desc",{id:!0});var o=R(e);s=ve(o,t),o.forEach(m),this.h()},h(){I(e,"id",i=n[5].id)},m(r,o){S(r,e,o),B(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Xe(s,t),o&32&&i!==(i=r[5].id)&&I(e,"id",i)},d(r){r&&m(e)}}}function oa(n){let e;function t(r,o){return r[3]?ra:ia}let s=t(n),i=s(n);return{c(){i.c(),e=Ae()},l(r){i.l(r),e=Ae()},m(r,o){i.m(r,o),S(r,e,o)},p(r,[o]){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:Ne,o:Ne,d(r){r&&m(e),i.d(r)}}}function la(n,e,t){const s=["size","role","color","withEvents","title","desc","ariaLabel"];let i=ge(e,s);const r=Pe("iconCtx")??{},o={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let{size:l=r.size||"md"}=e,{role:a=r.role||"img"}=e,{color:c=r.color||"currentColor"}=e,{withEvents:u=r.withEvents||!1}=e,{title:h={}}=e,{desc:d={}}=e,f=`${h.id||""} ${d.id||""}`,_=!1,{ariaLabel:p="award solid"}=e;function b(y){$.call(this,n,y)}function C(y){$.call(this,n,y)}function O(y){$.call(this,n,y)}function W(y){$.call(this,n,y)}function q(y){$.call(this,n,y)}function M(y){$.call(this,n,y)}function w(y){$.call(this,n,y)}function K(y){$.call(this,n,y)}function ue(y){$.call(this,n,y)}return n.$$set=y=>{t(11,e=J(J({},e),me(y))),t(10,i=ge(e,s)),"size"in y&&t(0,l=y.size),"role"in y&&t(1,a=y.role),"color"in y&&t(2,c=y.color),"withEvents"in y&&t(3,u=y.withEvents),"title"in y&&t(4,h=y.title),"desc"in y&&t(5,d=y.desc),"ariaLabel"in y&&t(6,p=y.ariaLabel)},n.$$.update=()=>{n.$$.dirty&48&&(h.id||d.id?t(7,_=!0):t(7,_=!1))},e=me(e),[l,a,c,u,h,d,p,_,o,f,i,e,b,C,O,W,q,M,w,K,ue]}class aa extends Te{constructor(e){super(),ke(this,e,la,oa,Se,{size:0,role:1,color:2,withEvents:3,title:4,desc:5,ariaLabel:6})}}function gi(n,e,t){const s=n.slice();return s[1]=e[t],s[3]=t,s}function ca(n){let e;return{c(){e=be("Pos")},l(t){e=ve(t,"Pos")},m(t,s){S(t,e,s)},d(t){t&&m(e)}}}function ua(n){let e;return{c(){e=be("Nome")},l(t){e=ve(t,"Nome")},m(t,s){S(t,e,s)},d(t){t&&m(e)}}}function ha(n){let e;return{c(){e=be("Punteggio")},l(t){e=ve(t,"Punteggio")},m(t,s){S(t,e,s)},d(t){t&&m(e)}}}function da(n){let e,t,s,i,r,o;return e=new Hn({props:{padding:wr,$$slots:{default:[ca]},$$scope:{ctx:n}}}),s=new Hn({props:{class:Er,$$slots:{default:[ua]},$$scope:{ctx:n}}}),r=new Hn({props:{class:Ir,$$slots:{default:[ha]},$$scope:{ctx:n}}}),{c(){se(e.$$.fragment),t=he(),se(s.$$.fragment),i=he(),se(r.$$.fragment)},l(l){ie(e.$$.fragment,l),t=de(l),ie(s.$$.fragment,l),i=de(l),ie(r.$$.fragment,l)},m(l,a){re(e,l,a),S(l,t,a),re(s,l,a),S(l,i,a),re(r,l,a),o=!0},p(l,a){const c={};a&16&&(c.$$scope={dirty:a,ctx:l}),e.$set(c);const u={};a&16&&(u.$$scope={dirty:a,ctx:l}),s.$set(u);const h={};a&16&&(h.$$scope={dirty:a,ctx:l}),r.$set(h)},i(l){o||(A(e.$$.fragment,l),A(s.$$.fragment,l),A(r.$$.fragment,l),o=!0)},o(l){P(e.$$.fragment,l),P(s.$$.fragment,l),P(r.$$.fragment,l),o=!1},d(l){l&&(m(t),m(i)),oe(e,l),oe(s,l),oe(r,l)}}}function fa(n){let e,t=n[3]+1+"",s;return{c(){e=V("div"),s=be(t),this.h()},l(i){e=G(i,"DIV",{class:!0});var r=R(e);s=ve(r,t),r.forEach(m),this.h()},h(){I(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){S(i,e,r),B(e,s)},p:Ne,i:Ne,o:Ne,d(i){i&&m(e)}}}function _a(n){let e,t;return e=new aa({props:{size:"xl",color:wa(n[3])}}),{c(){se(e.$$.fragment)},l(s){ie(e.$$.fragment,s)},m(s,i){re(e,s,i),t=!0},p:Ne,i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){oe(e,s)}}}function pa(n){let e,t,s,i;const r=[_a,fa],o=[];function l(a,c){return a[3]>=0&&a[3]<=2?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=Ae()},l(a){t.l(a),s=Ae()},m(a,c){o[e].m(a,c),S(a,s,c),i=!0},p(a,c){t.p(a,c)},i(a){i||(A(t),i=!0)},o(a){P(t),i=!1},d(a){a&&m(s),o[e].d(a)}}}function ga(n){let e,t,s,i,r,o,l=n[1].username+"",a;return{c(){e=V("img"),i=he(),r=V("div"),o=V("div"),a=be(l),this.h()},l(c){e=G(c,"IMG",{class:!0,src:!0,alt:!0}),i=de(c),r=G(c,"DIV",{class:!0});var u=R(r);o=G(u,"DIV",{class:!0});var h=R(o);a=ve(h,l),h.forEach(m),u.forEach(m),this.h()},h(){I(e,"class","lg:w-2/6 w-3/6 rounded-full"),ii(e.src,t=n[1].avatar)||I(e,"src",t),I(e,"alt",s=n[1].username+" avatar"),I(o,"class","text-base gamer-font text-4xl pr-6 svelte-15orbzf"),I(r,"class","ps-3 pr-6")},m(c,u){S(c,e,u),S(c,i,u),S(c,r,u),B(r,o),B(o,a)},p(c,u){u&1&&!ii(e.src,t=c[1].avatar)&&I(e,"src",t),u&1&&s!==(s=c[1].username+" avatar")&&I(e,"alt",s),u&1&&l!==(l=c[1].username+"")&&Xe(a,l)},d(c){c&&(m(e),m(i),m(r))}}}function ma(n){let e,t=n[1].points+"",s;return{c(){e=V("div"),s=be(t),this.h()},l(i){e=G(i,"DIV",{class:!0});var r=R(e);s=ve(r,t),r.forEach(m),this.h()},h(){I(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){S(i,e,r),B(e,s)},p(i,r){r&1&&t!==(t=i[1].points+"")&&Xe(s,t)},d(i){i&&m(e)}}}function ba(n){let e,t,s,i,r,o,l;return e=new zn({props:{tdClass:wr,class:"text-center",$$slots:{default:[pa]},$$scope:{ctx:n}}}),s=new zn({props:{class:"flex items-center px-6 py-4 text-gray-900 dark:text-white "+Er+" space-x-4",$$slots:{default:[ga]},$$scope:{ctx:n}}}),r=new zn({props:{class:Ir,$$slots:{default:[ma]},$$scope:{ctx:n}}}),{c(){se(e.$$.fragment),t=he(),se(s.$$.fragment),i=he(),se(r.$$.fragment),o=he()},l(a){ie(e.$$.fragment,a),t=de(a),ie(s.$$.fragment,a),i=de(a),ie(r.$$.fragment,a),o=de(a)},m(a,c){re(e,a,c),S(a,t,c),re(s,a,c),S(a,i,c),re(r,a,c),S(a,o,c),l=!0},p(a,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const h={};c&17&&(h.$$scope={dirty:c,ctx:a}),s.$set(h);const d={};c&17&&(d.$$scope={dirty:c,ctx:a}),r.$set(d)},i(a){l||(A(e.$$.fragment,a),A(s.$$.fragment,a),A(r.$$.fragment,a),l=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),P(r.$$.fragment,a),l=!1},d(a){a&&(m(t),m(i),m(o)),oe(e,a),oe(s,a),oe(r,a)}}}function mi(n){let e,t;return e=new Ql({props:{$$slots:{default:[ba]},$$scope:{ctx:n}}}),{c(){se(e.$$.fragment)},l(s){ie(e.$$.fragment,s)},m(s,i){re(e,s,i),t=!0},p(s,i){const r={};i&17&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){oe(e,s)}}}function va(n){let e,t,s=fn(n[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=mi(gi(n,s,o));const r=o=>P(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ae()},l(o){for(let l=0;l<i.length;l+=1)i[l].l(o);e=Ae()},m(o,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,l);S(o,e,l),t=!0},p(o,l){if(l&1){s=fn(o[0]);let a;for(a=0;a<s.length;a+=1){const c=gi(o,s,a);i[a]?(i[a].p(c,l),A(i[a],1)):(i[a]=mi(c),i[a].c(),A(i[a],1),i[a].m(e.parentNode,e))}for(ys(),a=s.length;a<i.length;a+=1)r(a);Cs()}},i(o){if(!t){for(let l=0;l<s.length;l+=1)A(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)P(i[l]);t=!1},d(o){o&&m(e),gr(i,o)}}}function ya(n){let e,t,s,i;return e=new ta({props:{$$slots:{default:[da]},$$scope:{ctx:n}}}),s=new Vl({props:{tableBodyClass:"divide-y",$$slots:{default:[va]},$$scope:{ctx:n}}}),{c(){se(e.$$.fragment),t=he(),se(s.$$.fragment)},l(r){ie(e.$$.fragment,r),t=de(r),ie(s.$$.fragment,r)},m(r,o){re(e,r,o),S(r,t,o),re(s,r,o),i=!0},p(r,o){const l={};o&16&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const a={};o&17&&(a.$$scope={dirty:o,ctx:r}),s.$set(a)},i(r){i||(A(e.$$.fragment,r),A(s.$$.fragment,r),i=!0)},o(r){P(e.$$.fragment,r),P(s.$$.fragment,r),i=!1},d(r){r&&m(t),oe(e,r),oe(s,r)}}}function Ca(n){let e,t=`/* Nello style di Svelte questo stile viene rimosso in quanto 
	   non usato nella pagina ma nel componente TableBodyCell.
	   Come workaround lo metto nel HTML
	*/
    svg {
      display: block;
      text-align: center;
      margin: auto;
    }`,s,i,r,o,l;return o=new Ul({props:{hoverable:!0,class:"text-center",$$slots:{default:[ya]},$$scope:{ctx:n}}}),{c(){e=V("style"),e.textContent=t,s=he(),i=V("div"),r=V("div"),se(o.$$.fragment),this.h()},l(a){const c=ol("svelte-e4duco",document.head);e=G(c,"STYLE",{"data-svelte-h":!0}),pr(e)!=="svelte-1lbw6gp"&&(e.textContent=t),c.forEach(m),s=de(a),i=G(a,"DIV",{class:!0});var u=R(i);r=G(u,"DIV",{class:!0});var h=R(r);ie(o.$$.fragment,h),h.forEach(m),u.forEach(m),this.h()},h(){I(r,"class","lg:w-2/5"),I(i,"class","lg:flex lg:justify-center")},m(a,c){B(document.head,e),S(a,s,c),S(a,i,c),B(i,r),re(o,r,null),l=!0},p(a,[c]){const u={};c&17&&(u.$$scope={dirty:c,ctx:a}),o.$set(u)},i(a){l||(A(o.$$.fragment,a),l=!0)},o(a){P(o.$$.fragment,a),l=!1},d(a){a&&(m(s),m(i)),m(e),oe(o)}}}const wr="px-4 py-6 w-1/6",Er="w-3/5",Ir="w-1/4";function wa(n){const e="#ffd700",t="#949494",s="#cd7f32";switch(n){case 0:return e;case 1:return t;case 2:return s}}function Ea(n,e,t){let{items:s}=e;return n.$$set=i=>{"items"in i&&t(0,s=i.items)},[s]}class Ia extends Te{constructor(e){super(),ke(this,e,Ea,Ca,Se,{items:0})}}var bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw Ct(e)},Ct=function(n){return new Error("Firebase Database ("+Sr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sa=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Tr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Ta;const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ta extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kr=function(n){const e=Tr(n);return Es.encodeByteArray(e,!0)},_n=function(n){return kr(n).replace(/\./g,"")},ns=function(n){try{return Es.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){return Nr(void 0,n)}function Nr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Na(t)||(n[t]=Nr(n[t],e[t]));return n}function Na(n){return n!=="__proto__"}/**
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
 */function Ra(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Aa=()=>Ra().__FIREBASE_DEFAULTS__,xa=()=>{if(typeof process>"u"||typeof bi>"u")return;const n=bi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ns(n[1]);return e&&JSON.parse(e)},Rr=()=>{try{return Aa()||xa()||Pa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Da=n=>{var e,t;return(t=(e=Rr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Oa=n=>{const e=Da(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ar=()=>{var n;return(n=Rr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ma(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_n(JSON.stringify(t)),_n(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(La())}function Fa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pr(){return Sr.NODE_ADMIN===!0}function Ba(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="FirebaseError";class Kt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ua,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?za(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,l,s)}}function za(n,e){return n.replace(Ha,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ha=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){return JSON.parse(n)}function Q(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ft(ns(r[0])||""),t=Ft(ns(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Va=function(n){const e=Or(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ga=function(n){const e=Or(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function gt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ss(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(yi(r)&&yi(o)){if(!ss(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function yi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Mr(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function $t(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ze="[DEFAULT]";/**
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
 */class Ka{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Is;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qa(e))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ze){return this.instances.has(e)}getOptions(e=Ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$a(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ze){return this.component?this.component.multipleInstances?e:Ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $a(n){return n===Ze?void 0:n}function Qa(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ka(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Ja={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Za=L.INFO,ec={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},tc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=ec[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=Za,this._logHandler=tc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ja[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const nc=(n,e)=>e.some(t=>n instanceof t);let Ci,wi;function sc(){return Ci||(Ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ic(){return wi||(wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fr=new WeakMap,is=new WeakMap,Br=new WeakMap,Vn=new WeakMap,Ss=new WeakMap;function rc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ue(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fr.set(t,n)}).catch(()=>{}),Ss.set(e,n),e}function oc(n){if(is.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});is.set(n,e)}let rs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return is.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Br.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lc(n){rs=n(rs)}function ac(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Gn(this),e,...t);return Br.set(s,e.sort?e.sort():[e]),Ue(s)}:ic().includes(n)?function(...e){return n.apply(Gn(this),e),Ue(Fr.get(this))}:function(...e){return Ue(n.apply(Gn(this),e))}}function cc(n){return typeof n=="function"?ac(n):(n instanceof IDBTransaction&&oc(n),nc(n,sc())?new Proxy(n,rs):n)}function Ue(n){if(n instanceof IDBRequest)return rc(n);if(Vn.has(n))return Vn.get(n);const e=cc(n);return e!==n&&(Vn.set(n,e),Ss.set(e,n)),e}const Gn=n=>Ss.get(n);function uc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Ue(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ue(o.result),a.oldVersion,a.newVersion,Ue(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const hc=["get","getKey","getAll","getAllKeys","count"],dc=["put","add","delete","clear"],jn=new Map;function Ei(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=dc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return jn.set(e,r),r}lc(n=>({...n,get:(e,t,s)=>Ei(e,t)||n.get(e,t,s),has:(e,t)=>!!Ei(e,t)||n.has(e,t)}));/**
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
 */class fc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_c(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function _c(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const os="@firebase/app",Ii="0.10.7";/**
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
 */const st=new Lr("@firebase/app"),pc="@firebase/app-compat",gc="@firebase/analytics-compat",mc="@firebase/analytics",bc="@firebase/app-check-compat",vc="@firebase/app-check",yc="@firebase/auth",Cc="@firebase/auth-compat",wc="@firebase/database",Ec="@firebase/database-compat",Ic="@firebase/functions",Sc="@firebase/functions-compat",Tc="@firebase/installations",kc="@firebase/installations-compat",Nc="@firebase/messaging",Rc="@firebase/messaging-compat",Ac="@firebase/performance",xc="@firebase/performance-compat",Pc="@firebase/remote-config",Dc="@firebase/remote-config-compat",Oc="@firebase/storage",Mc="@firebase/storage-compat",Lc="@firebase/firestore",Fc="@firebase/vertexai-preview",Bc="@firebase/firestore-compat",Wc="firebase",Uc="10.12.4";/**
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
 */const ls="[DEFAULT]",zc={[os]:"fire-core",[pc]:"fire-core-compat",[mc]:"fire-analytics",[gc]:"fire-analytics-compat",[vc]:"fire-app-check",[bc]:"fire-app-check-compat",[yc]:"fire-auth",[Cc]:"fire-auth-compat",[wc]:"fire-rtdb",[Ec]:"fire-rtdb-compat",[Ic]:"fire-fn",[Sc]:"fire-fn-compat",[Tc]:"fire-iid",[kc]:"fire-iid-compat",[Nc]:"fire-fcm",[Rc]:"fire-fcm-compat",[Ac]:"fire-perf",[xc]:"fire-perf-compat",[Pc]:"fire-rc",[Dc]:"fire-rc-compat",[Oc]:"fire-gcs",[Mc]:"fire-gcs-compat",[Lc]:"fire-fst",[Bc]:"fire-fst-compat",[Fc]:"fire-vertex","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
 */const gn=new Map,Hc=new Map,as=new Map;function Si(n,e){try{n.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if(as.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,n);for(const t of gn.values())Si(t,n);for(const t of Hc.values())Si(t,n);return!0}function Vc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Gc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ze=new Dr("app","Firebase",Gc);/**
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
 */class jc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
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
 */const qc=Uc;function Wr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ze.create("bad-app-name",{appName:String(i)});if(t||(t=Ar()),!t)throw ze.create("no-options");const r=gn.get(i);if(r){if(ss(t,r.options)&&ss(s,r.config))return r;throw ze.create("duplicate-app",{appName:i})}const o=new Xa(i);for(const a of as.values())o.addComponent(a);const l=new jc(t,s,o);return gn.set(i,l),l}function Yc(n=ls){const e=gn.get(n);if(!e&&n===ls&&Ar())return Wr();if(!e)throw ze.create("no-app",{appName:n});return e}function ft(n,e,t){var s;let i=(s=zc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(l.join(" "));return}mn(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kc="firebase-heartbeat-database",$c=1,Wt="firebase-heartbeat-store";let qn=null;function Ur(){return qn||(qn=uc(Kc,$c,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ze.create("idb-open",{originalErrorMessage:n.message})})),qn}async function Qc(n){try{const t=(await Ur()).transaction(Wt),s=await t.objectStore(Wt).get(zr(n));return await t.done,s}catch(e){if(e instanceof Kt)st.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function Ti(n,e){try{const s=(await Ur()).transaction(Wt,"readwrite");await s.objectStore(Wt).put(e,zr(n)),await s.done}catch(t){if(t instanceof Kt)st.warn(t.message);else{const s=ze.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(s.message)}}}function zr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xc=1024,Jc=30*24*60*60*1e3;class Zc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ki();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Jc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ki(),{heartbeatsToSend:s,unsentEntries:i}=eu(this._heartbeatsCache.heartbeats),r=_n(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ki(){return new Date().toISOString().substring(0,10)}function eu(n,e=Xc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ni(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ni(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ba()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ni(n){return _n(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nu(n){mn(new Bt("platform-logger",e=>new fc(e),"PRIVATE")),mn(new Bt("heartbeat",e=>new Zc(e),"PRIVATE")),ft(os,Ii,n),ft(os,Ii,"esm2017"),ft("fire-js","")}nu("");var su="firebase",iu="10.12.4";/**
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
 */ft(su,iu,"app");var Ri={};const Ai="@firebase/database",xi="1.0.6";/**
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
 */let Hr="";function ru(n){Hr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ft(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ou(e)}}catch{}return new lu},nt=Vr("localStorage"),au=Vr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Lr("@firebase/database"),cu=function(){let n=1;return function(){return n++}}(),Gr=function(n){const e=Ya(n),t=new qa;t.update(e);const s=t.digest();return Es.encodeByteArray(s)},Qt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qt.apply(null,s):typeof s=="object"?e+=Q(s):e+=s,e+=" "}return e};let Pt=null,Pi=!0;const uu=function(n,e){g(!e,"Can't turn on custom loggers persistently."),_t.logLevel=L.VERBOSE,Pt=_t.log.bind(_t)},ne=function(...n){if(Pi===!0&&(Pi=!1,Pt===null&&au.get("logging_enabled")===!0&&uu()),Pt){const e=Qt.apply(null,n);Pt(e)}},Xt=function(n){return function(...e){ne(n,...e)}},cs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qt(...n);_t.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${Qt(...n)}`;throw _t.error(e),new Error(e)},fe=function(...n){const e="FIREBASE WARNING: "+Qt(...n);_t.warn(e)},hu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},du=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mt="[MIN_NAME]",it="[MAX_NAME]",wt=function(n,e){if(n===e)return 0;if(n===mt||e===it)return-1;if(e===mt||n===it)return 1;{const t=Di(n),s=Di(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},fu=function(n,e){return n===e?0:n<e?-1:1},Nt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Q(e))},Ts=function(n){if(typeof n!="object"||n===null)return Q(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Q(e[s]),t+=":",t+=Ts(n[e[s]]);return t+="}",t},qr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ce(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Yr=function(n){g(!jr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},_u=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const mu=new RegExp("^-?(0*)\\d{1,10}$"),bu=-2147483648,vu=2147483647,Di=function(n){if(mu.test(n)){const e=Number(n);if(e>=bu&&e<=vu)return e}return null},Jt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw fe("Exception was thrown by user callback.",t),e},Math.floor(0))}},yu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Cu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fe(e)}}class hn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="5",Kr="v",$r="s",Qr="r",Xr="f",Jr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zr="ls",eo="p",us="ac",to="websocket",no="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Eu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function io(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===to)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===no)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Eu(n)&&(t.ns=n.namespace);const i=[];return ce(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.counters_={}}incrementCounter(e,t=1){Le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ka(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn={},Kn={};function Ns(n){const e=n.toString();return Yn[e]||(Yn[e]=new Iu),Yn[e]}function Su(n,e){const t=n.toString();return Kn[t]||(Kn[t]=e()),Kn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Jt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="start",ku="close",Nu="pLPCommand",Ru="pRTLPCB",ro="id",oo="pw",lo="ser",Au="cb",xu="seg",Pu="ts",Du="d",Ou="dframe",ao=1870,co=30,Mu=ao-co,Lu=25e3,Fu=3e4;class ht{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xt(e),this.stats_=Ns(t),this.urlFn=a=>(this.appCheckToken&&(a[us]=this.appCheckToken),io(t,no,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Tu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fu)),du(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rs((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oi)this.id=l,this.password=a;else if(o===ku)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Oi]="t",s[lo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Au]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kr]=ks,this.transportSessionId&&(s[$r]=this.transportSessionId),this.lastSessionId&&(s[Zr]=this.lastSessionId),this.applicationId&&(s[eo]=this.applicationId),this.appCheckToken&&(s[us]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jr.test(location.hostname)&&(s[Qr]=Xr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ht.forceAllow_=!0}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){return ht.forceAllow_?!0:!ht.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_u()&&!pu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=kr(t),i=qr(s,Mu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ou]="t",s[ro]=e,s[oo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Rs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cu(),window[Nu+this.uniqueCallbackIdentifier]=e,window[Ru+this.uniqueCallbackIdentifier]=t,this.myIFrame=Rs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ne("frame writing exception"),l.stack&&ne(l.stack),ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ro]=this.myID,e[oo]=this.myPW,e[lo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+co+s.length<=ao;){const o=this.pendingSegs.shift();s=s+"&"+xu+i+"="+o.seg+"&"+Pu+i+"="+o.ts+"&"+Du+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Lu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=16384,Wu=45e3;let bn=null;typeof MozWebSocket<"u"?bn=MozWebSocket:typeof WebSocket<"u"&&(bn=WebSocket);class ye{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xt(this.connId),this.stats_=Ns(t),this.connURL=ye.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Kr]=ks,typeof location<"u"&&location.hostname&&Jr.test(location.hostname)&&(o[Qr]=Xr),t&&(o[$r]=t),s&&(o[Zr]=s),i&&(o[us]=i),r&&(o[eo]=r),io(e,to,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nt.set("previous_websocket_failure",!0);try{let s;Pr(),this.mySock=new bn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bn!==null&&!ye.forceDisallow_}static previouslyFailed(){return nt.isInMemoryStorage||nt.get("previous_websocket_failure")===!0}markConnectionHealthy(){nt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ft(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=qr(t,Bu);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ht,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let s=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of Ut.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ut.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=6e4,zu=5e3,Hu=10*1024,Vu=100*1024,$n="t",Mi="d",Gu="s",Li="r",ju="e",Fi="o",Bi="a",Wi="n",Ui="p",qu="h";class Yu{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xt("c:"+this.id+":"),this.transportManager_=new Ut(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Dt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($n in e){const t=e[$n];t===Bi?this.upgradeIfSecondaryHealthy_():t===Li?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Nt("t",e),s=Nt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ui,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Nt("t",e),s=Nt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Nt($n,e);if(Mi in e){const s=e[Mi];if(t===qu){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Wi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Gu?this.onConnectionShutdown_(s):t===Li?this.onReset_(s):t===ju?cs("Server Error: "+s):t===Fi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ks!==s&&fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Dt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ui,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ho{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vn}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=32,Hi=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new D("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ge(n){return n.pieces_.length-n.pieceNum_}function F(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function fo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ku(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _o(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function po(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function X(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function le(n,e){const t=N(n),s=N(e);if(t===null)return e;if(t===s)return le(F(n),F(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function go(n,e){if(Ge(n)!==Ge(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ce(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ge(n)>Ge(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class $u{constructor(e,t){this.errorPrefix_=t,this.parts_=_o(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=xn(this.parts_[s]);mo(this)}}function Qu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=xn(e),mo(n)}function Xu(n){const e=n.parts_.pop();n.byteLength_-=xn(e),n.parts_.length>0&&(n.byteLength_-=1)}function mo(n){if(n.byteLength_>Hi)throw new Error(n.errorPrefix_+"has a key path longer than "+Hi+" bytes ("+n.byteLength_+").");if(n.parts_.length>zi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zi+") or object contains a cycle "+et(n))}function et(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends ho{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new As}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Ju=60*5*1e3,Vi=30*1e3,Zu=1.3,eh=3e4,th="server_kill",Gi=3;class Oe extends uo{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Oe.nextPersistentConnectionId_++,this.log_=Xt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Ju,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Pr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");As.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Q(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Oe.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Le(e,"w")){const s=gt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ga(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Va(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Q(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cs("Unrecognized action received from server: "+Q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eh&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Yu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{fe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(th)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&fe(h),a())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vi(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ts(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gi&&(this.reconnectDelay_=Vi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Hr.replace(/\./g,"-")]=1,xr()?e["framework.cordova"]=1:Fa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vn.getInstance().currentlyOnline();return vi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(mt,e),i=new T(mt,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn;class bo extends Pn{static get __EMPTY_NODE(){return cn}static set __EMPTY_NODE(e){cn=e}compare(e,t){return wt(e.name,t.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(it,cn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,cn)}toString(){return".key"}}const pt=new bo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ee.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,s,i,r){return new ee(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class nh{copy(e,t,s,i,r){return this}insert(e,t,s){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new un(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new un(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new un(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new un(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new nh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n,e){return wt(n.name,e.name)}function xs(n,e){return wt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;function ih(n){hs=n}const vo=function(n){return typeof n=="number"?"number:"+Yr(n):"string:"+n},yo=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Le(e,".sv"),"Priority must be a string or number.")}else g(n===hs||n.isEmpty(),"priority of unexpected type.");g(n===hs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;class Z{constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yo(this.priorityNode_)}static set __childrenNodeConstructor(e){ji=e}static get __childrenNodeConstructor(){return ji}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:N(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=N(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||Ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(F(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yr(this.value_):e+=this.value_,this.lazyHash_=Gr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Z.VALUE_TYPE_ORDER.indexOf(t),r=Z.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co,wo;function rh(n){Co=n}function oh(n){wo=n}class lh extends Pn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?wt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(it,new Z("[PRIORITY-POST]",wo))}makePost(e,t){const s=Co(e);return new T(t,new Z("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new lh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=Math.log(2);class ch{constructor(e){const t=r=>parseInt(Math.log(r)/ah,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yn=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new ee(d,h.node,ee.BLACK,null,null);{const f=parseInt(u/2,10)+a,_=i(a,f),p=i(f+1,c);return h=n[f],d=t?t(h):h,new ee(d,h.node,ee.BLACK,_,p)}},r=function(a){let c=null,u=null,h=n.length;const d=function(_,p){const b=h-_,C=h;h-=_;const O=i(b+1,C),W=n[b],q=t?t(W):W;f(new ee(q,W.node,p,null,O))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<a.count;++_){const p=a.nextBitIsOne(),b=Math.pow(2,a.count-(_+1));p?d(b,ee.BLACK):(d(b,ee.BLACK),d(b,ee.RED))}return u},o=new ch(n.length),l=r(o);return new ae(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn;const ut={};class De{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(ut&&Y,"ChildrenNode.ts has not been loaded"),Qn=Qn||new De({".priority":ut},{".priority":Y}),Qn}get(e){const t=gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Le(this.indexSet_,e.toString())}addIndex(e,t){g(e!==pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=yn(s,e.getCompare()):l=ut;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new De(u,c)}addToIndexes(e,t){const s=pn(this.indexes_,(i,r)=>{const o=gt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===ut)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(T.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),yn(l,o.getCompare())}else return ut;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new T(e.name,l))),a.insert(e,e.node)}});return new De(s,this.indexSet_)}removeFromIndexes(e,t){const s=pn(this.indexes_,i=>{if(i===ut)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new De(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At;class v{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&yo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return At||(At=new v(new ae(xs),null,De.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||At}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?At:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(F(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?At:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=N(e);if(s===null)return t;{g(N(e)!==".priority"||Ge(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(F(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,l)=>{t[o]=l.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vo(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Gr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zt?-1:0}withIndex(e){if(e===pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pt?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uh extends v{constructor(){super(new ae(xs),v.EMPTY_NODE,De.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Zt=new uh;Object.defineProperties(T,{MIN:{value:new T(mt,v.EMPTY_NODE)},MAX:{value:new T(it,Zt)}});bo.__EMPTY_NODE=v.EMPTY_NODE;Z.__childrenNodeConstructor=v;ih(Zt);oh(Zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=!0;function te(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,te(e))}if(!(n instanceof Array)&&hh){const t=[];let s=!1;if(ce(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=te(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new T(o,a)))}}),t.length===0)return v.EMPTY_NODE;const r=yn(t,sh,o=>o.name,xs);if(s){const o=yn(t,Y.getCompare());return new v(r,te(e),new De({".priority":o},{".priority":Y}))}else return new v(r,te(e),De.Default)}else{let t=v.EMPTY_NODE;return ce(n,(s,i)=>{if(Le(n,s)&&s.substring(0,1)!=="."){const r=te(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(te(e))}}rh(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends Pn{constructor(e){super(),this.indexPath_=e,g(!k(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?wt(e.name,t.name):r}makePost(e,t){const s=te(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Zt);return new T(it,e)}toString(){return _o(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends Pn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?wt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=te(e);return new T(t,s)}toString(){return".value"}}const _h=new fh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){return{type:"value",snapshotNode:n}}function bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ht(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ph(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(zt(t,l)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(bt(t,s)):o.trackChildChange(Ht(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(zt(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ht(i,r,o))}else s.trackChildChange(bt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.indexedFilter_=new Ps(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vt.getStartPost_(e),this.endPost_=Vt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new T(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,l)=>{r.matches(new T(o,l))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new T(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const l=e;g(l.numChildren()===this.limit_,"");const a=new T(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ht(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(zt(t,h));const p=l.updateImmediateChild(t,v.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bt(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(zt(c.name,c.node)),r.trackChildChange(bt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:it}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Ds;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mh(n){return n.loadsAllData()?new Ps(n.getIndex()):n.hasLimit()?new gh(n):new Vt(n)}function qi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===_h?t="$value":n.index_===pt?t="$key":(g(n.index_ instanceof dh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Q(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Q(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Q(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Q(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Yi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends uo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Cn.getListenId_(e,s),l={};this.listens_[o]=l;const a=qi(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),gt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Cn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=qi(e._queryParams),s=e._path.toString(),i=new Is;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ja(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ft(l.responseText)}catch{fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return{value:null,children:new Map}}function Io(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=N(e);n.children.has(s)||n.children.set(s,wn());const i=n.children.get(s);e=F(e),Io(i,e,t)}}function ds(n,e,t){n.value!==null?t(e,n.value):vh(n,(s,i)=>{const r=new D(e.toString()+"/"+s);ds(i,r,t)})}function vh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ce(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=10*1e3,Ch=30*1e3,wh=5*60*1e3;class Eh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new yh(e);const s=Ki+(Ch-Ki)*Math.random();Dt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ce(e,(i,r)=>{r>0&&Le(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Dt(this.reportStats_.bind(this),Math.floor(Math.random()*2*wh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(we||(we={}));function So(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Os(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ms(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=we.ACK_USER_WRITE,this.source=So()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new En(x(),t,this.revert)}}else return g(N(this.path)===e,"operationForChild called for unrelated child."),new En(F(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.source=e,this.path=t,this.type=we.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new Gt(this.source,x()):new Gt(this.source,F(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=we.OVERWRITE}operationForChild(e){return k(this.path)?new rt(this.source,x(),this.snap.getImmediateChild(e)):new rt(this.source,F(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=we.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new rt(this.source,x(),t.value):new jt(this.source,x(),t)}else return g(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jt(this.source,F(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ph(o.childName,o.snapshotNode))}),xt(n,i,"child_removed",e,s,t),xt(n,i,"child_added",e,s,t),xt(n,i,"child_moved",r,s,t),xt(n,i,"child_changed",e,s,t),xt(n,i,"value",e,s,t),i}function xt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>kh(n,l,a)),o.forEach(l=>{const a=Th(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Th(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function kh(n,e,t){if(e.childName==null||t.childName==null)throw Ct("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){return{eventCache:n,serverCache:e}}function Ot(n,e,t,s){return Dn(new je(e,t,s),n.serverCache)}function To(n,e,t,s){return Dn(n.eventCache,new je(e,t,s))}function In(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ot(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn;const Nh=()=>(Xn||(Xn=new ae(fu)),Xn);class z{constructor(e,t=Nh()){this.value=e,this.children=t}static fromObject(e){let t=new z(null);return ce(e,(s,i)=>{t=t.set(new D(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(k(e))return null;{const s=N(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(F(e),t);return r!=null?{path:X(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=N(e),s=this.children.get(t);return s!==null?s.subtree(F(e)):new z(null)}}set(e,t){if(k(e))return new z(t,this.children);{const s=N(e),r=(this.children.get(s)||new z(null)).set(F(e),t),o=this.children.insert(s,r);return new z(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new z(null):new z(null,this.children);{const t=N(e),s=this.children.get(t);if(s){const i=s.remove(F(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new z(null):new z(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=N(e),s=this.children.get(t);return s?s.get(F(e)):null}}setTree(e,t){if(k(e))return t;{const s=N(e),r=(this.children.get(s)||new z(null)).setTree(F(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new z(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(X(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(k(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(F(e),X(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,s){if(k(e))return this;{this.value&&s(t,this.value);const i=N(e),r=this.children.get(i);return r?r.foreachOnPath_(F(e),X(t,i),s):new z(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(X(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.writeTree_=e}static empty(){return new Ee(new z(null))}}function Mt(n,e,t){if(k(e))return new Ee(new z(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=le(i,e);return r=r.updateChild(o,t),new Ee(n.writeTree_.set(i,r))}else{const i=new z(t),r=n.writeTree_.setTree(e,i);return new Ee(r)}}}function $i(n,e,t){let s=n;return ce(t,(i,r)=>{s=Mt(s,X(e,i),r)}),s}function Qi(n,e){if(k(e))return Ee.empty();{const t=n.writeTree_.setTree(e,new z(null));return new Ee(t)}}function fs(n,e){return at(n,e)!=null}function at(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(le(t.path,e)):null}function Xi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function He(n,e){if(k(e))return n;{const t=at(n,e);return t!=null?new Ee(new z(t)):new Ee(n.writeTree_.subtree(e))}}function _s(n){return n.writeTree_.isEmpty()}function vt(n,e){return ko(x(),n.writeTree_,e)}function ko(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ko(X(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(X(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e){return xo(e,n)}function Rh(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Mt(n.visibleWrites,e,t)),n.lastWriteId=s}function Ah(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function xh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ph(l,s.path)?i=!1:Ce(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Dh(n),!0;if(s.snap)n.visibleWrites=Qi(n.visibleWrites,s.path);else{const l=s.children;ce(l,a=>{n.visibleWrites=Qi(n.visibleWrites,X(s.path,a))})}return!0}else return!1}function Ph(n,e){if(n.snap)return Ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ce(X(n.path,t),e))return!0;return!1}function Dh(n){n.visibleWrites=No(n.allWrites,Oh,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Oh(n){return n.visible}function No(n,e,t){let s=Ee.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Ce(t,o)?(l=le(t,o),s=Mt(s,l,r.snap)):Ce(o,t)&&(l=le(o,t),s=Mt(s,x(),r.snap.getChild(l)));else if(r.children){if(Ce(t,o))l=le(t,o),s=$i(s,l,r.children);else if(Ce(o,t))if(l=le(o,t),k(l))s=$i(s,x(),r.children);else{const a=gt(r.children,N(l));if(a){const c=a.getChild(F(l));s=Mt(s,x(),c)}}}else throw Ct("WriteRecord should have .snap or .children")}}return s}function Ro(n,e,t,s,i){if(!s&&!i){const r=at(n.visibleWrites,e);if(r!=null)return r;{const o=He(n.visibleWrites,e);if(_s(o))return t;if(t==null&&!fs(o,x()))return null;{const l=t||v.EMPTY_NODE;return vt(o,l)}}}else{const r=He(n.visibleWrites,e);if(!i&&_s(r))return t;if(!i&&t==null&&!fs(r,x()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ce(c.path,e)||Ce(e,c.path))},l=No(n.allWrites,o,e),a=t||v.EMPTY_NODE;return vt(l,a)}}}function Mh(n,e,t){let s=v.EMPTY_NODE;const i=at(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=He(n.visibleWrites,e);return t.forEachChild(Y,(o,l)=>{const a=vt(He(r,new D(o)),l);s=s.updateImmediateChild(o,a)}),Xi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=He(n.visibleWrites,e);return Xi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Lh(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=X(e,t);if(fs(n.visibleWrites,r))return null;{const o=He(n.visibleWrites,r);return _s(o)?i.getChild(t):vt(o,i.getChild(t))}}function Fh(n,e,t,s){const i=X(e,t),r=at(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=He(n.visibleWrites,i);return vt(o,s.getNode().getImmediateChild(t))}else return null}function Bh(n,e){return at(n.visibleWrites,e)}function Wh(n,e,t,s,i,r,o){let l;const a=He(n.visibleWrites,e),c=at(a,x());if(c!=null)l=c;else if(t!=null)l=vt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Uh(){return{visibleWrites:Ee.empty(),allWrites:[],lastWriteId:-1}}function Sn(n,e,t,s){return Ro(n.writeTree,n.treePath,e,t,s)}function Ls(n,e){return Mh(n.writeTree,n.treePath,e)}function Ji(n,e,t,s){return Lh(n.writeTree,n.treePath,e,t,s)}function Tn(n,e){return Bh(n.writeTree,X(n.treePath,e))}function zh(n,e,t,s,i,r){return Wh(n.writeTree,n.treePath,e,t,s,i,r)}function Fs(n,e,t){return Fh(n.writeTree,n.treePath,e,t)}function Ao(n,e){return xo(X(n.treePath,e),n.writeTree)}function xo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,zt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,bt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Po=new Vh;class Bs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ot(this.viewCache_),r=zh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){return{filter:n}}function jh(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function qh(n,e,t,s,i){const r=new Hh;let o,l;if(t.type===we.OVERWRITE){const c=t;c.source.fromUser?o=ps(n,e,c.path,c.snap,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),o=kn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===we.MERGE){const c=t;c.source.fromUser?o=Kh(n,e,c.path,c.children,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=gs(n,e,c.path,c.children,s,i,l,r))}else if(t.type===we.ACK_USER_WRITE){const c=t;c.revert?o=Xh(n,e,c.path,s,i,r):o=$h(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===we.LISTEN_COMPLETE)o=Qh(n,e,t.path,s,r);else throw Ct("Unknown operation type: "+t.type);const a=r.getChanges();return Yh(e,o,a),{viewCache:o,changes:a}}function Yh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=In(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Eo(In(e)))}}function Do(n,e,t,s,i,r){const o=e.eventCache;if(Tn(s,t)!=null)return e;{let l,a;if(k(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ot(e),u=c instanceof v?c:v.EMPTY_NODE,h=Ls(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Sn(s,ot(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){g(Ge(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ji(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=F(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ji(s,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Fs(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Ot(e,l,o.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function kn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(k(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),f,null)}else{const f=N(t);if(!a.isCompleteForPath(t)&&Ge(t)>1)return e;const _=F(t),b=a.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),f,b,_,Po,null)}const h=To(e,c,a.isFullyInitialized()||k(t),u.filtersNodes()),d=new Bs(i,h,r);return Do(n,h,t,i,d,l)}function ps(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Bs(i,e,r);if(k(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Ot(e,c,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Ot(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=F(t),f=l.getNode().getImmediateChild(h);let _;if(k(d))_=s;else{const p=u.getCompleteChild(h);p!=null?fo(d)===".priority"&&p.getChild(po(d)).isEmpty()?_=p:_=p.updateChild(d,s):_=v.EMPTY_NODE}if(f.equals(_))a=e;else{const p=n.filter.updateChild(l.getNode(),h,_,d,u,o);a=Ot(e,p,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function Zi(n,e){return n.eventCache.isCompleteForChild(e)}function Kh(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=X(t,a);Zi(e,N(u))&&(l=ps(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=X(t,a);Zi(e,N(u))||(l=ps(n,l,u,c,i,r,o))}),l}function er(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function gs(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;k(t)?c=s:c=new z(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=er(n,f,d);a=kn(n,a,new D(h),_,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),p=er(n,_,d);a=kn(n,a,new D(h),p,i,r,o,l)}}),a}function $h(n,e,t,s,i,r,o){if(Tn(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(k(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return kn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(k(t)){let c=new z(null);return a.getNode().forEachChild(pt,(u,h)=>{c=c.set(new D(u),h)}),gs(n,e,t,c,i,r,l,o)}else return e}else{let c=new z(null);return s.foreach((u,h)=>{const d=X(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),gs(n,e,t,c,i,r,l,o)}}function Qh(n,e,t,s,i){const r=e.serverCache,o=To(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return Do(n,o,t,s,Po,i)}function Xh(n,e,t,s,i,r){let o;if(Tn(s,t)!=null)return e;{const l=new Bs(s,e,i),a=e.eventCache.getNode();let c;if(k(t)||N(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sn(s,ot(e));else{const h=e.serverCache.getNode();g(h instanceof v,"serverChildren would be complete if leaf node"),u=Ls(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=N(t);let h=Fs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,F(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,v.EMPTY_NODE,F(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sn(s,ot(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Tn(s,x())!=null,Ot(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ps(s.getIndex()),r=mh(s);this.processor_=Gh(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,l.getNode(),null),u=new je(a,o.isFullyInitialized(),i.filtersNodes()),h=new je(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Dn(h,u),this.eventGenerator_=new Ih(this.query_)}get query(){return this.query_}}function Zh(n){return n.viewCache_.serverCache.getNode()}function ed(n){return In(n.viewCache_)}function td(n,e){const t=ot(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function tr(n){return n.eventRegistrations_.length===0}function nd(n,e){n.eventRegistrations_.push(e)}function nr(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function sr(n,e,t,s){e.type===we.MERGE&&e.source.queryId!==null&&(g(ot(n.viewCache_),"We should always have a full cache before handling merges"),g(In(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=qh(n.processor_,i,e,t,s);return jh(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Oo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function sd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(bt(r,o))}),t.isFullyInitialized()&&s.push(Eo(t.getNode())),Oo(n,s,t.getNode(),e)}function Oo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Sh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn;class Mo{constructor(){this.views=new Map}}function id(n){g(!Nn,"__referenceConstructor has already been defined"),Nn=n}function rd(){return g(Nn,"Reference.ts has not been loaded"),Nn}function od(n){return n.views.size===0}function Ws(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),sr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(sr(o,e,t,s));return r}}function Lo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Sn(t,i?s:null),a=!1;l?a=!0:s instanceof v?(l=Ls(t,s),a=!1):(l=v.EMPTY_NODE,a=!1);const c=Dn(new je(l,a,!1),new je(s,i,!1));return new Jh(e,c)}return o}function ld(n,e,t,s,i,r){const o=Lo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),nd(o,t),sd(o,t)}function ad(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=qe(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(nr(c,t,s)),tr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(nr(a,t,s)),tr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!qe(n)&&r.push(new(rd())(e._repo,e._path)),{removed:r,events:o}}function Fo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ve(n,e){let t=null;for(const s of n.views.values())t=t||td(s,e);return t}function Bo(n,e){if(e._queryParams.loadsAllData())return Mn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Wo(n,e){return Bo(n,e)!=null}function qe(n){return Mn(n)!=null}function Mn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;function cd(n){g(!Rn,"__referenceConstructor has already been defined"),Rn=n}function ud(){return g(Rn,"Reference.ts has not been loaded"),Rn}let hd=1;class ir{constructor(e){this.listenProvider_=e,this.syncPointTree_=new z(null),this.pendingWriteTree_=Uh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dd(n,e,t,s,i){return Rh(n.pendingWriteTree_,e,t,s,i),i?tn(n,new rt(So(),e,t)):[]}function dt(n,e,t=!1){const s=Ah(n.pendingWriteTree_,e);if(xh(n.pendingWriteTree_,e)){let r=new z(null);return s.snap!=null?r=r.set(x(),!0):ce(s.children,o=>{r=r.set(new D(o),!0)}),tn(n,new En(s.path,r,t))}else return[]}function en(n,e,t){return tn(n,new rt(Os(),e,t))}function fd(n,e,t){const s=z.fromObject(t);return tn(n,new jt(Os(),e,s))}function _d(n,e){return tn(n,new Gt(Os(),e))}function pd(n,e,t){const s=Us(n,t);if(s){const i=zs(s),r=i.path,o=i.queryId,l=le(r,e),a=new Gt(Ms(o),l);return Hs(n,r,a)}else return[]}function Uo(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Wo(o,e))){const a=ad(o,e,t,s);od(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>qe(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=vd(d);for(let _=0;_<f.length;++_){const p=f[_],b=p.query,C=jo(n,p);n.listenProvider_.startListening(Lt(b),qt(n,b),C.hashFn,C.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Lt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Ln(d));n.listenProvider_.stopListening(Lt(d),f)}))}yd(n,c)}return l}function zo(n,e,t,s){const i=Us(n,s);if(i!=null){const r=zs(i),o=r.path,l=r.queryId,a=le(o,e),c=new rt(Ms(l),a,t);return Hs(n,o,c)}else return[]}function gd(n,e,t,s){const i=Us(n,s);if(i){const r=zs(i),o=r.path,l=r.queryId,a=le(o,e),c=z.fromObject(t),u=new jt(Ms(l),a,c);return Hs(n,o,u)}else return[]}function md(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=le(d,i);r=r||Ve(f,_),o=o||qe(f)});let l=n.syncPointTree_.get(i);l?(o=o||qe(l),r=r||Ve(l,x())):(l=new Mo,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const p=Ve(_,x());p&&(r=r.updateImmediateChild(f,p))}));const c=Wo(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ln(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Cd();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=On(n.pendingWriteTree_,i);let h=ld(l,e,t,u,r,a);if(!c&&!o&&!s){const d=Bo(l,e);h=h.concat(wd(n,e,d))}return h}function Ho(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=le(o,e),c=Ve(l,a);if(c)return c});return Ro(i,e,r,t,!0)}function bd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=le(c,t);s=s||Ve(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Ve(i,x()):(i=new Mo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new je(s,!0,!1):null,l=On(n.pendingWriteTree_,e._path),a=Lo(i,e,l,r?o.getNode():v.EMPTY_NODE,r);return ed(a)}function tn(n,e){return Vo(e,n.syncPointTree_,null,On(n.pendingWriteTree_,x()))}function Vo(n,e,t,s){if(k(n.path))return Go(n,e,t,s);{const i=e.get(x());t==null&&i!=null&&(t=Ve(i,x()));let r=[];const o=N(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Ao(s,o);r=r.concat(Vo(l,a,c,u))}return i&&(r=r.concat(Ws(i,n,s,t))),r}}function Go(n,e,t,s){const i=e.get(x());t==null&&i!=null&&(t=Ve(i,x()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Ao(s,o),u=n.operationForChild(o);u&&(r=r.concat(Go(u,l,a,c)))}),i&&(r=r.concat(Ws(i,n,s,t))),r}function jo(n,e){const t=e.query,s=qt(n,t);return{hashFn:()=>(Zh(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pd(n,t._path,s):_d(n,t._path);{const r=gu(i,t);return Uo(n,t,null,r)}}}}function qt(n,e){const t=Ln(e);return n.queryToTagMap.get(t)}function Ln(n){return n._path.toString()+"$"+n._queryIdentifier}function Us(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Hs(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=On(n.pendingWriteTree_,e);return Ws(s,t,i,null)}function vd(n){return n.fold((e,t,s)=>{if(t&&qe(t))return[Mn(t)];{let i=[];return t&&(i=Fo(t)),ce(s,(r,o)=>{i=i.concat(o)}),i}})}function Lt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ud())(n._repo,n._path):n}function yd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Ln(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Cd(){return hd++}function wd(n,e,t){const s=e._path,i=qt(n,e),r=jo(n,t),o=n.listenProvider_.startListening(Lt(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)g(!qe(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!k(c)&&u&&qe(u))return[Mn(u).query];{let d=[];return u&&(d=d.concat(Fo(u).map(f=>f.query))),ce(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Lt(u),qt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vs(t)}node(){return this.node_}}class Gs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=X(this.path_,e);return new Gs(this.syncTree_,t)}node(){return Ho(this.syncTree_,this.path_)}}const Ed=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},rr=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Id(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Sd(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Id=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},Sd=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Td=function(n,e,t,s){return js(e,new Gs(t,n),s)},kd=function(n,e,t){return js(n,new Vs(e),t)};function js(n,e,t){const s=n.getPriority().val(),i=rr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=rr(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Z(l,te(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Z(i))),o.forEachChild(Y,(l,a)=>{const c=js(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ys(n,e){let t=e instanceof D?e:new D(e),s=n,i=N(t);for(;i!==null;){const r=gt(s.node.children,i)||{children:{},childCount:0};s=new qs(i,s,r),t=F(t),i=N(t)}return s}function Et(n){return n.node.value}function qo(n,e){n.node.value=e,ms(n)}function Yo(n){return n.node.childCount>0}function Nd(n){return Et(n)===void 0&&!Yo(n)}function Fn(n,e){ce(n.node.children,(t,s)=>{e(new qs(t,n,s))})}function Ko(n,e,t,s){t&&!s&&e(n),Fn(n,i=>{Ko(i,e,!0,s)}),t&&s&&e(n)}function Rd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function nn(n){return new D(n.parent===null?n.name:nn(n.parent)+"/"+n.name)}function ms(n){n.parent!==null&&Ad(n.parent,n.name,n)}function Ad(n,e,t){const s=Nd(t),i=Le(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ms(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ms(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=/[\[\].#$\/\u0000-\u001F\u007F]/,Pd=/[\[\].#$\u0000-\u001F\u007F]/,Jn=10*1024*1024,$o=function(n){return typeof n=="string"&&n.length!==0&&!xd.test(n)},Qo=function(n){return typeof n=="string"&&n.length!==0&&!Pd.test(n)},Dd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qo(n)},Xo=function(n,e,t){const s=t instanceof D?new $u(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+et(s));if(typeof e=="function")throw new Error(n+"contains a function "+et(s)+" with contents = "+e.toString());if(jr(e))throw new Error(n+"contains "+e.toString()+" "+et(s));if(typeof e=="string"&&e.length>Jn/3&&xn(e)>Jn)throw new Error(n+"contains a string greater than "+Jn+" utf8 bytes "+et(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$o(o)))throw new Error(n+" contains an invalid key ("+o+") "+et(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qu(s,o),Xo(n,l,s),Xu(s)}),i&&r)throw new Error(n+' contains ".value" child '+et(s)+" in addition to actual children.")}},Jo=function(n,e,t,s){if(!Qo(t))throw new Error(Mr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Od=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Jo(n,e,t)},Md=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$o(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Dd(t))throw new Error(Mr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!go(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Je(n,e,t){Fd(n,t),Bd(n,s=>Ce(s,e)||Ce(e,s))}function Bd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Wd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Wd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Pt&&ne("event: "+t.toString()),Jt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="repo_interrupt",zd=25;class Hd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ld,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wn(),this.transactionQueueTree_=new qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vd(n,e,t){if(n.stats_=Ns(n.repoInfo_),n.forceRestClient_||yu())n.server_=new Cn(n.repoInfo_,(s,i,r,o)=>{or(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>lr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Q(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{or(n,s,i,r,o)},s=>{lr(n,s)},s=>{jd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Su(n.repoInfo_,()=>new Eh(n.stats_,n.server_)),n.infoData_=new bh,n.infoSyncTree_=new ir({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=en(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ks(n,"connected",!1),n.serverSyncTree_=new ir({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Je(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Gd(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zo(n){return Ed({timestamp:Gd(n)})}function or(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=pn(t,c=>te(c));o=gd(n.serverSyncTree_,r,a,i)}else{const a=te(t);o=zo(n.serverSyncTree_,r,a,i)}else if(s){const a=pn(t,c=>te(c));o=fd(n.serverSyncTree_,r,a)}else{const a=te(t);o=en(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Xs(n,r)),Je(n.eventQueue_,l,o)}function lr(n,e){Ks(n,"connected",e),e===!1&&Kd(n)}function jd(n,e){ce(e,(t,s)=>{Ks(n,t,s)})}function Ks(n,e,t){const s=new D("/.info/"+e),i=te(t);n.infoData_.updateSnapshot(s,i);const r=en(n.infoSyncTree_,s,i);Je(n.eventQueue_,s,r)}function qd(n){return n.nextWriteId_++}function Yd(n,e,t){const s=bd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=te(i).withIndex(e._queryParams.getIndex());md(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=en(n.serverSyncTree_,e._path,r);else{const l=qt(n.serverSyncTree_,e);o=zo(n.serverSyncTree_,e._path,r,l)}return Je(n.eventQueue_,e._path,o),Uo(n.serverSyncTree_,e,t,null,!0),r},i=>($s(n,"get for query "+Q(e)+" failed: "+i),Promise.reject(new Error(i))))}function Kd(n){$s(n,"onDisconnectEvents");const e=Zo(n),t=wn();ds(n.onDisconnect_,x(),(i,r)=>{const o=Td(i,r,n.serverSyncTree_,e);Io(t,i,o)});let s=[];ds(t,x(),(i,r)=>{s=s.concat(en(n.serverSyncTree_,i,r));const o=Jd(n,i);Xs(n,o)}),n.onDisconnect_=wn(),Je(n.eventQueue_,x(),s)}function $d(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ud)}function $s(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ne(t,...e)}function el(n,e,t){return Ho(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Qs(n,e=n.transactionQueueTree_){if(e||Bn(n,e),Et(e)){const t=nl(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Qd(n,nn(e),t)}else Yo(e)&&Fn(e,t=>{Qs(n,t)})}function Qd(n,e,t){const s=t.map(c=>c.currentWriteId),i=el(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{$s(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(dt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Bn(n,Ys(n.transactionQueueTree_,e)),Qs(n,n.transactionQueueTree_),Je(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Jt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Xs(n,e)}},o)}function Xs(n,e){const t=tl(n,e),s=nn(t),i=nl(n,t);return Xd(n,i,s),s}function Xd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=le(t,a.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=zd)u=!0,h="maxretry",i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0));else{const d=el(n,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){Xo("transaction failed: Data returned ",f,a.path);let _=te(f);typeof f=="object"&&f!=null&&Le(f,".priority")||(_=_.updatePriority(d.getPriority()));const b=a.currentWriteId,C=Zo(n),O=kd(_,d,C);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=O,a.currentWriteId=qd(n),o.splice(o.indexOf(b),1),i=i.concat(dd(n.serverSyncTree_,a.path,O,a.currentWriteId,a.applyLocally)),i=i.concat(dt(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0))}Je(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Bn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Jt(s[l]);Qs(n,n.transactionQueueTree_)}function tl(n,e){let t,s=n.transactionQueueTree_;for(t=N(e);t!==null&&Et(s)===void 0;)s=Ys(s,t),e=F(e),t=N(e);return s}function nl(n,e){const t=[];return sl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function sl(n,e,t){const s=Et(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Fn(e,i=>{sl(n,i,t)})}function Bn(n,e){const t=Et(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,qo(e,t.length>0?t:void 0)}Fn(e,s=>{Bn(n,s)})}function Jd(n,e){const t=nn(tl(n,e)),s=Ys(n.transactionQueueTree_,e);return Rd(s,i=>{Zn(n,i)}),Zn(n,s),Ko(s,i=>{Zn(n,i)}),t}function Zn(n,e){const t=Et(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(dt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qo(e,void 0):t.length=r+1,Je(n.eventQueue_,nn(e),i);for(let o=0;o<s.length;o++)Jt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ef(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):fe(`Invalid query segment '${t}' in query '${n}'`)}return e}const ar=function(n,e){const t=tf(n),s=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||hu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new so(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},tf=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Zd(n.substring(u,h)));const d=ef(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Q(this.snapshot.exportVal())}}class sf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Js{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return k(this._path)?null:fo(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=Yi(this._queryParams),t=Ts(e);return t==="{}"?"default":t}get _queryObject(){return Yi(this._queryParams)}isEqual(e){if(e=$t(e),!(e instanceof Js))return!1;const t=this._repo===e._repo,s=go(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ku(this._path)}}class Fe extends Js{constructor(e,t){super(e,t,new Ds,!1)}get parent(){const e=po(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=bs(this.ref,e);return new Yt(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Yt(i,bs(this.ref,s),Y)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function of(n,e){return n=$t(n),n._checkNotDeleted("ref"),n._root}function bs(n,e){return n=$t(n),N(n._path)===null?Od("child","path",e):Jo("child","path",e),new Fe(n._repo,X(n._path,e))}function lf(n){n=$t(n);const e=new rf(()=>{}),t=new Zs(e);return Yd(n._repo,n,t).then(s=>new Yt(s,new Fe(n._repo,n._path),n._queryParams.getIndex()))}class Zs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new nf("value",this,new Yt(e.snapshotNode,new Fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new sf(this,e,t):null}matches(e){return e instanceof Zs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}id(Fe);cd(Fe);/**
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
 */const af="FIREBASE_DATABASE_EMULATOR_HOST",vs={};let cf=!1;function uf(n,e,t,s){n.repoInfo_=new so(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function hf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ar(r,i),l=o.repoInfo,a;typeof process<"u"&&Ri&&(a=Ri[af]),a?(r=`http://${a}?ns=${l.namespace}`,o=ar(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new wu(n.name,n.options,e);Md("Invalid Firebase Database URL",o),k(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ff(l,n,c,new Cu(n.name,t));return new _f(u,n)}function df(n,e){const t=vs[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$d(n),delete t[n.key]}function ff(n,e,t,s){let i=vs[e.name];i||(i={},vs[e.name]=i);let r=i[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hd(n,cf,t,s),i[n.toURLString()]=r,r}class _f{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(df(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function pf(n=Yc(),e){const t=Vc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Oa("database");s&&gf(t,...s)}return t}function gf(n,e,t,s={}){n=$t(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new hn(hn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ma(s.mockUserToken,n.app.options.projectId);r=new hn(o)}uf(i,e,t,r)}/**
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
 */function mf(n){ru(qc),mn(new Bt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return hf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ft(Ai,xi,n),ft(Ai,xi,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mf();function cr(n,e,t){const s=n.slice();return s[4]=e[t],s}function ur(n){let e,t=n[4].text+"",s,i;return{c(){e=V("option"),s=be(t),this.h()},l(r){e=G(r,"OPTION",{});var o=R(e);s=ve(o,t),o.forEach(m),this.h()},h(){e.__value=i=n[4].value,ai(e,e.__value)},m(r,o){S(r,e,o),B(e,s)},p(r,o){o&4&&t!==(t=r[4].text+"")&&Xe(s,t),o&4&&i!==(i=r[4].value)&&(e.__value=i,ai(e,e.__value))},d(r){r&&m(e)}}}function bf(n){let e,t,s,i=fn(n[2]),r=[];for(let o=0;o<i.length;o+=1)r[o]=ur(cr(n,i,o));return{c(){e=V("select");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=G(o,"SELECT",{name:!0,id:!0,class:!0});var l=R(e);for(let a=0;a<r.length;a+=1)r[a].l(l);l.forEach(m),this.h()},h(){I(e,"name","classe"),I(e,"id","classe"),I(e,"class","custom_select w-full p-4 mb-5 rounded-md bg-white cursor-pointer appearance-none bg-no-repeat focus:outline-none border-none svelte-12i34vl"),n[0]===void 0&&il(()=>n[3].call(e))},m(o,l){S(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);li(e,n[0],!0),t||(s=[j(e,"change",n[3]),j(e,"change",function(){_r(n[1])&&n[1].apply(this,arguments)})],t=!0)},p(o,[l]){if(n=o,l&4){i=fn(n[2]);let a;for(a=0;a<i.length;a+=1){const c=cr(n,i,a);r[a]?r[a].p(c,l):(r[a]=ur(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}l&5&&li(e,n[0])},i:Ne,o:Ne,d(o){o&&m(e),gr(r,o),t=!1,An(s)}}}function vf(n,e,t){let{value:s}=e,{on_change:i}=e,{options:r}=e;function o(){s=ll(this),t(0,s),t(2,r)}return n.$$set=l=>{"value"in l&&t(0,s=l.value),"on_change"in l&&t(1,i=l.on_change),"options"in l&&t(2,r=l.options)},[s,i,r,o]}class hr extends Te{constructor(e){super(),ke(this,e,vf,bf,Se,{value:0,on_change:1,options:2})}}function yf(n){let e,t;return{c(){e=V("label"),t=be(n[0]),this.h()},l(s){e=G(s,"LABEL",{class:!0,for:!0});var i=R(e);t=ve(i,n[0]),i.forEach(m),this.h()},h(){I(e,"class","block mb-2.5 font-bold"),I(e,"for",n[1])},m(s,i){S(s,e,i),B(e,t)},p(s,[i]){i&1&&Xe(t,s[0]),i&2&&I(e,"for",s[1])},i:Ne,o:Ne,d(s){s&&m(e)}}}function Cf(n,e,t){let{text:s}=e,{parent:i}=e;return n.$$set=r=>{"text"in r&&t(0,s=r.text),"parent"in r&&t(1,i=r.parent)},[s,i]}class dr extends Te{constructor(e){super(),ke(this,e,Cf,yf,Se,{text:0,parent:1})}}function fr(n){let e,t=`Classifica generale di tutti gli studenti di informatica non relativa a
        classe o materia scolastica`;return{c(){e=V("p"),e.textContent=t,this.h()},l(s){e=G(s,"P",{class:!0,"data-svelte-h":!0}),pr(e)!=="svelte-1vcu4f2"&&(e.textContent=t),this.h()},h(){I(e,"class","paragraph svelte-it1jb3")},m(s,i){S(s,e,i)},d(s){s&&m(e)}}}function wf(n){let e,t,s,i,r,o,l,a,c,u,h,d,f,_,p,b;s=new dr({props:{parent:"select-class",text:"Seleziona la classe:"}});function C(w){n[7](w)}let O={options:n[4],on_change:n[6]};n[1]!==void 0&&(O.value=n[1]),r=new hr({props:O}),ri.push(()=>ci(r,"value",C)),c=new dr({props:{parent:"select-subject",text:"Seleziona la materia:"}});function W(w){n[9](w)}let q={options:n[5],on_change:n[8]};n[2]!==void 0&&(q.value=n[2]),h=new hr({props:q}),ri.push(()=>ci(h,"value",W));let M=n[2]==="all"&&fr();return p=new Ia({props:{items:n[0]}}),{c(){e=V("div"),t=V("div"),se(s.$$.fragment),i=he(),se(r.$$.fragment),l=he(),a=V("div"),se(c.$$.fragment),u=he(),se(h.$$.fragment),f=he(),M&&M.c(),_=he(),se(p.$$.fragment),this.h()},l(w){e=G(w,"DIV",{class:!0});var K=R(e);t=G(K,"DIV",{});var ue=R(t);ie(s.$$.fragment,ue),i=de(ue),ie(r.$$.fragment,ue),ue.forEach(m),l=de(K),a=G(K,"DIV",{});var y=R(a);ie(c.$$.fragment,y),u=de(y),ie(h.$$.fragment,y),y.forEach(m),K.forEach(m),f=de(w),M&&M.l(w),_=de(w),ie(p.$$.fragment,w),this.h()},h(){I(e,"class","select-container flex justify-between max-w-screen-sm rounded-xl m-auto p-5 bg-slate-50  svelte-it1jb3")},m(w,K){S(w,e,K),B(e,t),re(s,t,null),B(t,i),re(r,t,null),B(e,l),B(e,a),re(c,a,null),B(a,u),re(h,a,null),S(w,f,K),M&&M.m(w,K),S(w,_,K),re(p,w,K),b=!0},p(w,[K]){const ue={};K&6&&(ue.on_change=w[6]),!o&&K&2&&(o=!0,ue.value=w[1],oi(()=>o=!1)),r.$set(ue);const y={};K&6&&(y.on_change=w[8]),!d&&K&4&&(d=!0,y.value=w[2],oi(()=>d=!1)),h.$set(y),w[2]==="all"?M||(M=fr(),M.c(),M.m(_.parentNode,_)):M&&(M.d(1),M=null);const ct={};K&1&&(ct.items=w[0]),p.$set(ct)},i(w){b||(A(s.$$.fragment,w),A(r.$$.fragment,w),A(c.$$.fragment,w),A(h.$$.fragment,w),A(p.$$.fragment,w),b=!0)},o(w){P(s.$$.fragment,w),P(r.$$.fragment,w),P(c.$$.fragment,w),P(h.$$.fragment,w),P(p.$$.fragment,w),b=!1},d(w){w&&(m(e),m(f),m(_)),oe(s),oe(r),oe(c),oe(h),M&&M.d(w),oe(p,w)}}}function Ef(n,e,t){Wr({apiKey:"AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",authDomain:"lambsoffame.firebaseapp.com",databaseURL:"https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",projectId:"lambsoffame",storageBucket:"lambsoffame.appspot.com",messagingSenderId:"583547239362",appId:"1:583547239362:web:eda69c76496ccc9cbd345b"});const i=async()=>{const C=of(pf());return(await lf(bs(C,"leaderboard/"))).val()},r=C=>{let O=Object.values(u.TPSI).concat(Object.values(u.reti),Object.values(u.informatica)).filter(W=>W.class==C);t(0,l=Array.from(new Set(O.map(W=>W.username))).map(W=>O.filter(q=>q.username===W)).map(W=>({username:W[0].username,avatar:W[0].avatar,class:W[0].class,points:W.reduce((q,M)=>q+M.points,0)})).sort((W,q)=>q.points-W.points))},o=async(C,O)=>{switch(C){case"sum-subjects":r(O);break;case"all":t(0,l=Object.values(u.generale).sort((q,M)=>M.points-q.points));break;default:let W=u[`${C}`];t(0,l=Object.values(W).sort((q,M)=>M.points-q.points).filter(q=>q.class==O));break}};rl(async()=>{u=await i(),o("TPSI",3)});let l=[],a,c,u={};const h=[{value:3,text:"3 INFO"},{value:4,text:"4 INFO"},{value:5,text:"5 INFO"}],d=[{value:"TPSI",text:"TPSI"},{value:"informatica",text:"Informatica"},{value:"reti",text:"Sistemi e Reti"},{value:"sub-subjects",text:"Totale materie"},{value:"all",text:"Generale"}],f=()=>o(c,a);function _(C){a=C,t(1,a)}const p=()=>o(c,a);function b(C){c=C,t(2,c)}return[l,a,c,o,h,d,f,_,p,b]}class Tf extends Te{constructor(e){super(),ke(this,e,Ef,wf,Se,{})}}export{Tf as component};
