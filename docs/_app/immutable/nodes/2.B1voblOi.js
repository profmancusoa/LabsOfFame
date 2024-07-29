import{x as ll,y as al,p as an,h as cl,s as we,z as K,n as oe,A as _e,B as pe,c as Ke,u as Qe,g as Xe,a as $e,C as cn,D as xe,i as mr,r as Pn,E as X,F as ss,k as ul,e as li,G as ai,o as hl}from"../chunks/scheduler.Twx1ZmqP.js";import{q as xn,a as P,n as Dn,t as A,S as Ee,i as Ie,y as ae,z as ce,d as N,g as m,o as v,A as gt,j as w,k as D,e as V,c as H,B as Re,C as j,m as Ae,b as ye,f as Ce,l as Le,s as he,u as ne,D as dl,E as br,h as de,v as se,w as ie,x as re,F as vr,G as ci,H as ui,I as fl,J as hi}from"../chunks/index.CSyJyLKo.js";import{_ as _l}from"../chunks/preload-helper.D6kgxu3v.js";function di(n,e){const t=e.token={};function s(i,r,o,l){if(e.token!==t)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const c=i&&(e.current=i)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==r&&h&&(xn(),P(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Dn())}):e.block.d(1),c.c(),A(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&cl()}if(ll(n)){const i=al();if(n.then(r=>{an(i),s(e.then,1,e.value,r),an(null)},r=>{if(an(i),s(e.catch,2,e.error,r),an(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,n),!0;e.resolved=n}}function pl(n,e,t){const s=e.slice(),{resolved:i}=n;n.current===n.then&&(s[n.value]=i),n.current===n.catch&&(s[n.error]=i),n.block.p(s,t)}function _n(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Je(n,e){const t={},s={},i={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(s[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);n[r]=l}else for(const a in o)i[a]=1}for(const o in s)o in t||(t[o]=void 0);return t}const Is="-";function gl(n){const e=bl(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;function i(o){const l=o.split(Is);return l[0]===""&&l.length!==1&&l.shift(),yr(l,e)||ml(o)}function r(o,l){const a=t[o]||[];return l&&s[o]?[...a,...s[o]]:a}return{getClassGroupId:i,getConflictingClassGroupIds:r}}function yr(n,e){var o;if(n.length===0)return e.classGroupId;const t=n[0],s=e.nextPart.get(t),i=s?yr(n.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=n.join(Is);return(o=e.validators.find(({validator:l})=>l(r)))==null?void 0:o.classGroupId}const fi=/^\[(.+)\]$/;function ml(n){if(fi.test(n)){const e=fi.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function bl(n){const{theme:e,prefix:t}=n,s={nextPart:new Map,validators:[]};return yl(Object.entries(n.classGroups),t).forEach(([r,o])=>{is(o,s,r,e)}),s}function is(n,e,t,s){n.forEach(i=>{if(typeof i=="string"){const r=i===""?e:_i(e,i);r.classGroupId=t;return}if(typeof i=="function"){if(vl(i)){is(i(s),e,t,s);return}e.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([r,o])=>{is(o,_i(e,r),t,s)})})}function _i(n,e){let t=n;return e.split(Is).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t}function vl(n){return n.isThemeGetter}function yl(n,e){return e?n.map(([t,s])=>{const i=s.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,l])=>[e+o,l])):r);return[t,i]}):n}function Cl(n){if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;function i(r,o){t.set(r,o),e++,e>n&&(e=0,s=t,t=new Map)}return{get(r){let o=t.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){t.has(r)?t.set(r,o):i(r,o)}}}const Cr="!";function wl(n){const{separator:e,experimentalParseClassName:t}=n,s=e.length===1,i=e[0],r=e.length;function o(l){const a=[];let c=0,u=0,h;for(let b=0;b<l.length;b++){let E=l[b];if(c===0){if(E===i&&(s||l.slice(b,b+r)===e)){a.push(l.slice(u,b)),u=b+r;continue}if(E==="/"){h=b;continue}}E==="["?c++:E==="]"&&c--}const d=a.length===0?l:l.substring(u),_=d.startsWith(Cr),f=_?d.substring(1):d,p=h&&h>u?h-u:void 0;return{modifiers:a,hasImportantModifier:_,baseClassName:f,maybePostfixModifierPosition:p}}return t?function(a){return t({className:a,parseClassName:o})}:o}function El(n){if(n.length<=1)return n;const e=[];let t=[];return n.forEach(s=>{s[0]==="["?(e.push(...t.sort(),s),t=[]):t.push(s)}),e.push(...t.sort()),e}function Il(n){return{cache:Cl(n.cacheSize),parseClassName:wl(n),...gl(n)}}const Sl=/\s+/;function Tl(n,e){const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:i}=e,r=new Set;return n.trim().split(Sl).map(o=>{const{modifiers:l,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let h=!!u,d=s(h?c.substring(0,u):c);if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=s(c),!d)return{isTailwindClass:!1,originalClassName:o};h=!1}const _=El(l).join(":");return{isTailwindClass:!0,modifierId:a?_+Cr:_,classGroupId:d,originalClassName:o,hasPostfixModifier:h}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:l,classGroupId:a,hasPostfixModifier:c}=o,u=l+a;return r.has(u)?!1:(r.add(u),i(a,c).forEach(h=>r.add(l+h)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function rs(){let n=0,e,t,s="";for(;n<arguments.length;)(e=arguments[n++])&&(t=wr(e))&&(s&&(s+=" "),s+=t);return s}function wr(n){if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=wr(n[s]))&&(t&&(t+=" "),t+=e);return t}function kl(n,...e){let t,s,i,r=o;function o(a){const c=e.reduce((u,h)=>h(u),n());return t=Il(c),s=t.cache.get,i=t.cache.set,r=l,l(a)}function l(a){const c=s(a);if(c)return c;const u=Tl(a,t);return i(a,u),u}return function(){return r(rs.apply(null,arguments))}}function z(n){const e=t=>t[n]||[];return e.isThemeGetter=!0,e}const Er=/^\[(?:([a-z-]+):)?(.+)\]$/i,Nl=/^\d+\/\d+$/,Rl=new Set(["px","full","screen"]),Al=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ol=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Pe(n){return nt(n)||Rl.has(n)||Nl.test(n)}function We(n){return Ct(n,"length",Vl)}function nt(n){return!!n&&!Number.isNaN(Number(n))}function un(n){return Ct(n,"number",nt)}function kt(n){return!!n&&Number.isInteger(Number(n))}function Ml(n){return n.endsWith("%")&&nt(n.slice(0,-1))}function S(n){return Er.test(n)}function ze(n){return Al.test(n)}const Ll=new Set(["length","size","percentage"]);function Fl(n){return Ct(n,Ll,Ir)}function Bl(n){return Ct(n,"position",Ir)}const Wl=new Set(["image","url"]);function zl(n){return Ct(n,Wl,Gl)}function Ul(n){return Ct(n,"",Hl)}function Nt(){return!0}function Ct(n,e,t){const s=Er.exec(n);return s?s[1]?typeof e=="string"?s[1]===e:e.has(s[1]):t(s[2]):!1}function Vl(n){return Pl.test(n)&&!xl.test(n)}function Ir(){return!1}function Hl(n){return Dl.test(n)}function Gl(n){return Ol.test(n)}function jl(){const n=z("colors"),e=z("spacing"),t=z("blur"),s=z("brightness"),i=z("borderColor"),r=z("borderRadius"),o=z("borderSpacing"),l=z("borderWidth"),a=z("contrast"),c=z("grayscale"),u=z("hueRotate"),h=z("invert"),d=z("gap"),_=z("gradientColorStops"),f=z("gradientColorStopPositions"),p=z("inset"),b=z("margin"),E=z("opacity"),M=z("padding"),W=z("saturate"),q=z("scale"),L=z("sepia"),I=z("skew"),Q=z("space"),me=z("translate"),C=()=>["auto","contain","none"],ct=()=>["auto","hidden","clip","visible","scroll"],Vn=()=>["auto",S,e],G=()=>[S,e],si=()=>["",Pe,We],rn=()=>["auto",nt,S],ii=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],on=()=>["solid","dashed","dotted","double","none"],ri=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Hn=()=>["start","end","center","between","around","evenly","stretch"],St=()=>["","0",S],oi=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Tt=()=>[nt,un],ln=()=>[nt,S];return{cacheSize:500,separator:":",theme:{colors:[Nt],spacing:[Pe,We],blur:["none","",ze,S],brightness:Tt(),borderColor:[n],borderRadius:["none","","full",ze,S],borderSpacing:G(),borderWidth:si(),contrast:Tt(),grayscale:St(),hueRotate:ln(),invert:St(),gap:G(),gradientColorStops:[n],gradientColorStopPositions:[Ml,We],inset:Vn(),margin:Vn(),opacity:Tt(),padding:G(),saturate:Tt(),scale:Tt(),sepia:St(),skew:ln(),space:G(),translate:G()},classGroups:{aspect:[{aspect:["auto","square","video",S]}],container:["container"],columns:[{columns:[ze]}],"break-after":[{"break-after":oi()}],"break-before":[{"break-before":oi()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ii(),S]}],overflow:[{overflow:ct()}],"overflow-x":[{"overflow-x":ct()}],"overflow-y":[{"overflow-y":ct()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",kt,S]}],basis:[{basis:Vn()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",S]}],grow:[{grow:St()}],shrink:[{shrink:St()}],order:[{order:["first","last","none",kt,S]}],"grid-cols":[{"grid-cols":[Nt]}],"col-start-end":[{col:["auto",{span:["full",kt,S]},S]}],"col-start":[{"col-start":rn()}],"col-end":[{"col-end":rn()}],"grid-rows":[{"grid-rows":[Nt]}],"row-start-end":[{row:["auto",{span:[kt,S]},S]}],"row-start":[{"row-start":rn()}],"row-end":[{"row-end":rn()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",S]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",S]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...Hn()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Hn(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Hn(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[Q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",S,e]}],"min-w":[{"min-w":[S,e,"min","max","fit"]}],"max-w":[{"max-w":[S,e,"none","full","min","max","fit","prose",{screen:[ze]},ze]}],h:[{h:[S,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[S,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[S,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[S,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ze,We]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",un]}],"font-family":[{font:[Nt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",S]}],"line-clamp":[{"line-clamp":["none",nt,un]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Pe,S]}],"list-image":[{"list-image":["none",S]}],"list-style-type":[{list:["none","disc","decimal",S]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...on(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Pe,We]}],"underline-offset":[{"underline-offset":["auto",Pe,S]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ii(),Bl]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fl]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},zl]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...on(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:on()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...on()]}],"outline-offset":[{"outline-offset":[Pe,S]}],"outline-w":[{outline:[Pe,We]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:si()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[Pe,We]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",ze,Ul]}],"shadow-color":[{shadow:[Nt]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...ri(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ri()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[s]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",ze,S]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[W]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[W]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",S]}],duration:[{duration:ln()}],ease:[{ease:["linear","in","out","in-out",S]}],delay:[{delay:ln()}],animate:[{animate:["none","spin","ping","pulse","bounce",S]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[q]}],"scale-x":[{"scale-x":[q]}],"scale-y":[{"scale-y":[q]}],rotate:[{rotate:[kt,S]}],"translate-x":[{"translate-x":[me]}],"translate-y":[{"translate-y":[me]}],"skew-x":[{"skew-x":[I]}],"skew-y":[{"skew-y":[I]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",S]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Pe,We,un]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ve=kl(jl);function ql(n){let e,t,s,i,r=[n[5],{role:"status"},{class:i=ve("inline -mt-px animate-spin dark:text-gray-600",n[3],n[0],n[4],n[6].class)},{viewBox:"0 0 100 101"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"}],o={};for(let l=0;l<r.length;l+=1)o=K(o,r[l]);return{c(){e=ae("svg"),t=ae("path"),s=ae("path"),this.h()},l(l){e=ce(l,"svg",{role:!0,class:!0,viewBox:!0,fill:!0,xmlns:!0});var a=N(e);t=ce(a,"path",{d:!0,fill:!0}),N(t).forEach(m),s=ce(a,"path",{d:!0,fill:!0}),N(s).forEach(m),a.forEach(m),this.h()},h(){v(t,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),v(t,"fill",n[2]),v(s,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),v(s,"fill",n[1]),gt(e,o)},m(l,a){w(l,e,a),D(e,t),D(e,s)},p(l,[a]){a&4&&v(t,"fill",l[2]),a&2&&v(s,"fill",l[1]),gt(e,o=Je(r,[a&32&&l[5],{role:"status"},a&65&&i!==(i=ve("inline -mt-px animate-spin dark:text-gray-600",l[3],l[0],l[4],l[6].class))&&{class:i},{viewBox:"0 0 100 101"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"}]))},i:oe,o:oe,d(l){l&&m(e)}}}function Yl(n,e,t){const s=["color","bg","customColor","size","currentFill","currentColor"];let i=_e(e,s),{color:r="primary"}=e,{bg:o="text-gray-300"}=e,{customColor:l=""}=e,{size:a="8"}=e,{currentFill:c="currentFill"}=e,{currentColor:u="currentColor"}=e,h=`w-${a} h-${a}`;c!=="currentFill"&&(r=void 0);const d={primary:"fill-primary-600",blue:"fill-blue-600",gray:"fill-gray-600 dark:fill-gray-300",green:"fill-green-500",red:"fill-red-600",yellow:"fill-yellow-400",pink:"fill-pink-600",purple:"fill-purple-600",white:"fill-white",custom:l};let _=r===void 0?"":d[r]??d.blue;return n.$$set=f=>{t(6,e=K(K({},e),pe(f))),t(5,i=_e(e,s)),"color"in f&&t(7,r=f.color),"bg"in f&&t(0,o=f.bg),"customColor"in f&&t(8,l=f.customColor),"size"in f&&t(9,a=f.size),"currentFill"in f&&t(1,c=f.currentFill),"currentColor"in f&&t(2,u=f.currentColor)},e=pe(e),[o,c,u,h,_,i,e,r,l,a]}class Kl extends Ee{constructor(e){super(),Ie(this,e,Yl,ql,we,{color:7,bg:0,customColor:8,size:9,currentFill:1,currentColor:2})}}function Ql(n){let e,t,s,i,r;const o=n[11].default,l=Ke(o,n,n[10],null);let a=[n[4],{class:s=ve("w-full text-left text-sm",n[3][n[2]],n[5].class)}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=V("div"),t=V("table"),l&&l.c(),this.h()},l(u){e=H(u,"DIV",{class:!0});var h=N(e);t=H(h,"TABLE",{class:!0});var d=N(t);l&&l.l(d),d.forEach(m),h.forEach(m),this.h()},h(){Re(t,c),v(e,"class",i=rs(n[0],n[1]&&"shadow-md sm:rounded-lg"))},m(u,h){w(u,e,h),D(e,t),l&&l.m(t,null),r=!0},p(u,[h]){l&&l.p&&(!r||h&1024)&&Qe(l,o,u,u[10],r?$e(o,u[10],h,null):Xe(u[10]),null),Re(t,c=Je(a,[h&16&&u[4],(!r||h&36&&s!==(s=ve("w-full text-left text-sm",u[3][u[2]],u[5].class)))&&{class:s}])),(!r||h&3&&i!==(i=rs(u[0],u[1]&&"shadow-md sm:rounded-lg")))&&v(e,"class",i)},i(u){r||(A(l,u),r=!0)},o(u){P(l,u),r=!1},d(u){u&&m(e),l&&l.d(u)}}}function Xl(n,e,t){const s=["divClass","striped","hoverable","noborder","shadow","color","customeColor"];let i=_e(e,s),{$$slots:r={},$$scope:o}=e,{divClass:l="relative overflow-x-auto"}=e,{striped:a=!1}=e,{hoverable:c=!1}=e,{noborder:u=!1}=e,{shadow:h=!1}=e,{color:d="default"}=e,{customeColor:_=""}=e;const f={default:"text-gray-500 dark:text-gray-400",blue:"text-blue-100 dark:text-blue-100",green:"text-green-100 dark:text-green-100",red:"text-red-100 dark:text-red-100",yellow:"text-yellow-100 dark:text-yellow-100",purple:"text-purple-100 dark:text-purple-100",indigo:"text-indigo-100 dark:text-indigo-100",pink:"text-pink-100 dark:text-pink-100",custom:_};return n.$$set=p=>{t(5,e=K(K({},e),pe(p))),t(4,i=_e(e,s)),"divClass"in p&&t(0,l=p.divClass),"striped"in p&&t(6,a=p.striped),"hoverable"in p&&t(7,c=p.hoverable),"noborder"in p&&t(8,u=p.noborder),"shadow"in p&&t(1,h=p.shadow),"color"in p&&t(2,d=p.color),"customeColor"in p&&t(9,_=p.customeColor),"$$scope"in p&&t(10,o=p.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&cn("striped",a),n.$$.dirty&128&&cn("hoverable",c),n.$$.dirty&256&&cn("noborder",u),n.$$.dirty&4&&cn("color",d)},e=pe(e),[l,h,d,f,i,e,a,c,u,_,o,r]}class $l extends Ee{constructor(e){super(),Ie(this,e,Xl,Ql,we,{divClass:0,striped:6,hoverable:7,noborder:8,shadow:1,color:2,customeColor:9})}}function Jl(n){let e,t;const s=n[2].default,i=Ke(s,n,n[1],null);return{c(){e=V("tbody"),i&&i.c(),this.h()},l(r){e=H(r,"TBODY",{class:!0});var o=N(e);i&&i.l(o),o.forEach(m),this.h()},h(){v(e,"class",n[0])},m(r,o){w(r,e,o),i&&i.m(e,null),t=!0},p(r,[o]){i&&i.p&&(!t||o&2)&&Qe(i,s,r,r[1],t?$e(s,r[1],o,null):Xe(r[1]),null),(!t||o&1)&&v(e,"class",r[0])},i(r){t||(A(i,r),t=!0)},o(r){P(i,r),t=!1},d(r){r&&m(e),i&&i.d(r)}}}function Zl(n,e,t){let{$$slots:s={},$$scope:i}=e,{tableBodyClass:r=void 0}=e;return n.$$set=o=>{"tableBodyClass"in o&&t(0,r=o.tableBodyClass),"$$scope"in o&&t(1,i=o.$$scope)},[r,i,s]}class ea extends Ee{constructor(e){super(),Ie(this,e,Zl,Jl,we,{tableBodyClass:0})}}function ta(n){let e;const t=n[6].default,s=Ke(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Qe(s,t,i,i[5],e?$e(t,i[5],r,null):Xe(i[5]),null)},i(i){e||(A(s,i),e=!0)},o(i){P(s,i),e=!1},d(i){s&&s.d(i)}}}function na(n){let e,t,s,i;const r=n[6].default,o=Ke(r,n,n[5],null);return{c(){e=V("button"),o&&o.c()},l(l){e=H(l,"BUTTON",{});var a=N(e);o&&o.l(a),a.forEach(m)},m(l,a){w(l,e,a),o&&o.m(e,null),t=!0,s||(i=j(e,"click",function(){mr(n[1].onclick)&&n[1].onclick.apply(this,arguments)}),s=!0)},p(l,a){n=l,o&&o.p&&(!t||a&32)&&Qe(o,r,n,n[5],t?$e(r,n[5],a,null):Xe(n[5]),null)},i(l){t||(A(o,l),t=!0)},o(l){P(o,l),t=!1},d(l){l&&m(e),o&&o.d(l),s=!1,i()}}}function sa(n){let e,t,s,i;const r=[na,ta],o=[];function l(u,h){return u[1].onclick?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[0]}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=V("td"),s.c(),this.h()},l(u){e=H(u,"TD",{class:!0});var h=N(e);s.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){w(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(xn(),P(o[d],1,1,()=>{o[d]=null}),Dn(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),A(s,1),s.m(e,null)),Re(e,c=Je(a,[h&4&&u[2],(!i||h&1)&&{class:u[0]}]))},i(u){i||(A(s),i=!0)},o(u){P(s),i=!1},d(u){u&&m(e),o[t].d()}}}function ia(n,e,t){const s=["tdClass"];let i=_e(e,s),{$$slots:r={},$$scope:o}=e,{tdClass:l="px-6 py-4 whitespace-nowrap font-medium "}=e,a="default";a=xe("color");let c;return n.$$set=u=>{t(1,e=K(K({},e),pe(u))),t(2,i=_e(e,s)),"tdClass"in u&&t(3,l=u.tdClass),"$$scope"in u&&t(5,o=u.$$scope)},n.$$.update=()=>{t(0,c=ve(l,a==="default"?"text-gray-900 dark:text-white":"text-blue-50 whitespace-nowrap dark:text-blue-100",e.class))},e=pe(e),[c,e,i,l,a,o,r]}class Gn extends Ee{constructor(e){super(),Ie(this,e,ia,sa,we,{tdClass:3})}}function ra(n){let e,t,s,i;const r=n[4].default,o=Ke(r,n,n[3],null);let l=[n[1],{class:n[0]}],a={};for(let c=0;c<l.length;c+=1)a=K(a,l[c]);return{c(){e=V("tr"),o&&o.c(),this.h()},l(c){e=H(c,"TR",{class:!0});var u=N(e);o&&o.l(u),u.forEach(m),this.h()},h(){Re(e,a)},m(c,u){w(c,e,u),o&&o.m(e,null),t=!0,s||(i=[j(e,"click",n[5]),j(e,"contextmenu",n[6]),j(e,"dblclick",n[7])],s=!0)},p(c,[u]){o&&o.p&&(!t||u&8)&&Qe(o,r,c,c[3],t?$e(r,c[3],u,null):Xe(c[3]),null),Re(e,a=Je(l,[u&2&&c[1],(!t||u&1)&&{class:c[0]}]))},i(c){t||(A(o,c),t=!0)},o(c){P(o,c),t=!1},d(c){c&&m(e),o&&o.d(c),s=!1,Pn(i)}}}function oa(n,e,t){const s=["color"];let i=_e(e,s),{$$slots:r={},$$scope:o}=e,{color:l=xe("color")}=e;const a={default:"bg-white dark:bg-gray-800 dark:border-gray-700",blue:"bg-blue-500 border-blue-400",green:"bg-green-500 border-green-400",red:"bg-red-500 border-red-400",yellow:"bg-yellow-500 border-yellow-400",purple:"bg-purple-500 border-purple-400",custom:""},c={default:"hover:bg-gray-50 dark:hover:bg-gray-600",blue:"hover:bg-blue-400",green:"hover:bg-green-400",red:"hover:bg-red-400",yellow:"hover:bg-yellow-400",purple:"hover:bg-purple-400",custom:""},u={default:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",blue:"odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",green:"odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",red:"odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",yellow:"odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",purple:"odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",custom:""};let h;function d(p){X.call(this,n,p)}function _(p){X.call(this,n,p)}function f(p){X.call(this,n,p)}return n.$$set=p=>{t(11,e=K(K({},e),pe(p))),t(1,i=_e(e,s)),"color"in p&&t(2,l=p.color),"$$scope"in p&&t(3,o=p.$$scope)},n.$$.update=()=>{t(0,h=ve([!xe("noborder")&&"border-b last:border-b-0",a[l],xe("hoverable")&&c[l],xe("striped")&&u[l],e.class]))},e=pe(e),[h,i,l,o,r,d,_,f]}class la extends Ee{constructor(e){super(),Ie(this,e,oa,ra,we,{color:2})}}function aa(n){let e;const t=n[6].default,s=Ke(t,n,n[5],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&32)&&Qe(s,t,i,i[5],e?$e(t,i[5],r,null):Xe(i[5]),null)},i(i){e||(A(s,i),e=!0)},o(i){P(s,i),e=!1},d(i){s&&s.d(i)}}}function ca(n){let e,t;const s=n[6].default,i=Ke(s,n,n[5],null);return{c(){e=V("tr"),i&&i.c()},l(r){e=H(r,"TR",{});var o=N(e);i&&i.l(o),o.forEach(m)},m(r,o){w(r,e,o),i&&i.m(e,null),t=!0},p(r,o){i&&i.p&&(!t||o&32)&&Qe(i,s,r,r[5],t?$e(s,r[5],o,null):Xe(r[5]),null)},i(r){t||(A(i,r),t=!0)},o(r){P(i,r),t=!1},d(r){r&&m(e),i&&i.d(r)}}}function ua(n){let e,t,s,i;const r=[ca,aa],o=[];function l(u,h){return u[0]?0:1}t=l(n),s=o[t]=r[t](n);let a=[n[2],{class:n[1]}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=V("thead"),s.c(),this.h()},l(u){e=H(u,"THEAD",{class:!0});var h=N(e);s.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){w(u,e,h),o[t].m(e,null),i=!0},p(u,[h]){let d=t;t=l(u),t===d?o[t].p(u,h):(xn(),P(o[d],1,1,()=>{o[d]=null}),Dn(),s=o[t],s?s.p(u,h):(s=o[t]=r[t](u),s.c()),A(s,1),s.m(e,null)),Re(e,c=Je(a,[h&4&&u[2],(!i||h&2)&&{class:u[1]}]))},i(u){i||(A(s),i=!0)},o(u){P(s),i=!1},d(u){u&&m(e),o[t].d()}}}function ha(n,e,t){let s;const i=["theadClass","defaultRow"];let r=_e(e,i),{$$slots:o={},$$scope:l}=e,{theadClass:a="text-xs uppercase"}=e,{defaultRow:c=!0}=e,u;u=xe("color");let h=xe("noborder"),d=xe("striped");const f={default:h||d?"":"bg-gray-50 dark:bg-gray-700",blue:"bg-blue-600",green:"bg-green-600",red:"bg-red-600",yellow:"bg-yellow-600",purple:"bg-purple-600",custom:""};let p=u==="default"?"text-gray-700 dark:text-gray-400":u==="custom"?"":"text-white  dark:text-white",b=d?"":u==="default"?"border-gray-700":u==="custom"?"":`border-${u}-400`;return n.$$set=E=>{t(13,e=K(K({},e),pe(E))),t(2,r=_e(e,i)),"theadClass"in E&&t(3,a=E.theadClass),"defaultRow"in E&&t(0,c=E.defaultRow),"$$scope"in E&&t(5,l=E.$$scope)},n.$$.update=()=>{t(1,s=ve(a,p,d&&b,f[u],e.class))},e=pe(e),[c,s,r,a,u,l,o]}class da extends Ee{constructor(e){super(),Ie(this,e,ha,ua,we,{theadClass:3,defaultRow:0})}}function fa(n){let e,t,s,i,r;const o=n[4].default,l=Ke(o,n,n[3],null);let a=[n[1],{class:t=ve(n[0],n[2].class)}],c={};for(let u=0;u<a.length;u+=1)c=K(c,a[u]);return{c(){e=V("th"),l&&l.c(),this.h()},l(u){e=H(u,"TH",{class:!0});var h=N(e);l&&l.l(h),h.forEach(m),this.h()},h(){Re(e,c)},m(u,h){w(u,e,h),l&&l.m(e,null),s=!0,i||(r=[j(e,"click",n[5]),j(e,"focus",n[6]),j(e,"keydown",n[7]),j(e,"keypress",n[8]),j(e,"keyup",n[9]),j(e,"mouseenter",n[10]),j(e,"mouseleave",n[11]),j(e,"mouseover",n[12])],i=!0)},p(u,[h]){l&&l.p&&(!s||h&8)&&Qe(l,o,u,u[3],s?$e(o,u[3],h,null):Xe(u[3]),null),Re(e,c=Je(a,[h&2&&u[1],(!s||h&5&&t!==(t=ve(u[0],u[2].class)))&&{class:t}]))},i(u){s||(A(l,u),s=!0)},o(u){P(l,u),s=!1},d(u){u&&m(e),l&&l.d(u),i=!1,Pn(r)}}}function _a(n,e,t){const s=["padding"];let i=_e(e,s),{$$slots:r={},$$scope:o}=e,{padding:l="px-6 py-3"}=e;function a(b){X.call(this,n,b)}function c(b){X.call(this,n,b)}function u(b){X.call(this,n,b)}function h(b){X.call(this,n,b)}function d(b){X.call(this,n,b)}function _(b){X.call(this,n,b)}function f(b){X.call(this,n,b)}function p(b){X.call(this,n,b)}return n.$$set=b=>{t(2,e=K(K({},e),pe(b))),t(1,i=_e(e,s)),"padding"in b&&t(0,l=b.padding),"$$scope"in b&&t(3,o=b.$$scope)},e=pe(e),[l,i,e,o,r,a,c,u,h,d,_,f,p]}class jn extends Ee{constructor(e){super(),Ie(this,e,_a,fa,we,{padding:0})}}function pa(n){let e,t,s,i,r,o,l,a=n[4].id&&n[4].title&&pi(n),c=n[5].id&&n[5].desc&&gi(n),u=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=ve("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],h={};for(let d=0;d<u.length;d+=1)h=K(h,u[d]);return{c(){e=ae("svg"),a&&a.c(),t=Ae(),c&&c.c(),s=ae("path"),i=ae("path"),r=ae("path"),this.h()},l(d){e=ce(d,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var _=N(e);a&&a.l(_),t=Ae(),c&&c.l(_),s=ce(_,"path",{d:!0}),N(s).forEach(m),i=ce(_,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),N(i).forEach(m),r=ce(_,"path",{d:!0}),N(r).forEach(m),_.forEach(m),this.h()},h(){v(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),v(i,"fill-rule","evenodd"),v(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),v(i,"clip-rule","evenodd"),v(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),gt(e,h)},m(d,_){w(d,e,_),a&&a.m(e,null),D(e,t),c&&c.m(e,null),D(e,s),D(e,i),D(e,r)},p(d,_){d[4].id&&d[4].title?a?a.p(d,_):(a=pi(d),a.c(),a.m(e,t)):a&&(a.d(1),a=null),d[5].id&&d[5].desc?c?c.p(d,_):(c=gi(d),c.c(),c.m(e,s)):c&&(c.d(1),c=null),gt(e,h=Je(u,[{xmlns:"http://www.w3.org/2000/svg"},_&4&&{fill:d[2]},_&1024&&d[10],_&2049&&o!==(o=ve("shrink-0",d[8][d[0]??"md"],d[11].class))&&{class:o},_&2&&{role:d[1]},_&64&&{"aria-label":d[6]},_&128&&l!==(l=d[7]?d[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(d){d&&m(e),a&&a.d(),c&&c.d()}}}function ga(n){let e,t,s,i,r,o,l,a,c,u=n[4].id&&n[4].title&&mi(n),h=n[5].id&&n[5].desc&&bi(n),d=[{xmlns:"http://www.w3.org/2000/svg"},{fill:n[2]},n[10],{class:o=ve("shrink-0",n[8][n[0]??"md"],n[11].class)},{role:n[1]},{"aria-label":n[6]},{"aria-describedby":l=n[7]?n[9]:void 0},{viewBox:"0 0 24 24"}],_={};for(let f=0;f<d.length;f+=1)_=K(_,d[f]);return{c(){e=ae("svg"),u&&u.c(),t=Ae(),h&&h.c(),s=ae("path"),i=ae("path"),r=ae("path"),this.h()},l(f){e=ce(f,"svg",{xmlns:!0,fill:!0,class:!0,role:!0,"aria-label":!0,"aria-describedby":!0,viewBox:!0});var p=N(e);u&&u.l(p),t=Ae(),h&&h.l(p),s=ce(p,"path",{d:!0}),N(s).forEach(m),i=ce(p,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),N(i).forEach(m),r=ce(p,"path",{d:!0}),N(r).forEach(m),p.forEach(m),this.h()},h(){v(s,"d","M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"),v(i,"fill-rule","evenodd"),v(i,"d","M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),v(i,"clip-rule","evenodd"),v(r,"d","M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"),gt(e,_)},m(f,p){w(f,e,p),u&&u.m(e,null),D(e,t),h&&h.m(e,null),D(e,s),D(e,i),D(e,r),a||(c=[j(e,"click",n[12]),j(e,"keydown",n[13]),j(e,"keyup",n[14]),j(e,"focus",n[15]),j(e,"blur",n[16]),j(e,"mouseenter",n[17]),j(e,"mouseleave",n[18]),j(e,"mouseover",n[19]),j(e,"mouseout",n[20])],a=!0)},p(f,p){f[4].id&&f[4].title?u?u.p(f,p):(u=mi(f),u.c(),u.m(e,t)):u&&(u.d(1),u=null),f[5].id&&f[5].desc?h?h.p(f,p):(h=bi(f),h.c(),h.m(e,s)):h&&(h.d(1),h=null),gt(e,_=Je(d,[{xmlns:"http://www.w3.org/2000/svg"},p&4&&{fill:f[2]},p&1024&&f[10],p&2049&&o!==(o=ve("shrink-0",f[8][f[0]??"md"],f[11].class))&&{class:o},p&2&&{role:f[1]},p&64&&{"aria-label":f[6]},p&128&&l!==(l=f[7]?f[9]:void 0)&&{"aria-describedby":l},{viewBox:"0 0 24 24"}]))},d(f){f&&m(e),u&&u.d(),h&&h.d(),a=!1,Pn(c)}}}function pi(n){let e,t=n[4].title+"",s,i;return{c(){e=ae("title"),s=ye(t),this.h()},l(r){e=ce(r,"title",{id:!0});var o=N(e);s=Ce(o,t),o.forEach(m),this.h()},h(){v(e,"id",i=n[4].id)},m(r,o){w(r,e,o),D(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Le(s,t),o&16&&i!==(i=r[4].id)&&v(e,"id",i)},d(r){r&&m(e)}}}function gi(n){let e,t=n[5].desc+"",s,i;return{c(){e=ae("desc"),s=ye(t),this.h()},l(r){e=ce(r,"desc",{id:!0});var o=N(e);s=Ce(o,t),o.forEach(m),this.h()},h(){v(e,"id",i=n[5].id)},m(r,o){w(r,e,o),D(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Le(s,t),o&32&&i!==(i=r[5].id)&&v(e,"id",i)},d(r){r&&m(e)}}}function mi(n){let e,t=n[4].title+"",s,i;return{c(){e=ae("title"),s=ye(t),this.h()},l(r){e=ce(r,"title",{id:!0});var o=N(e);s=Ce(o,t),o.forEach(m),this.h()},h(){v(e,"id",i=n[4].id)},m(r,o){w(r,e,o),D(e,s)},p(r,o){o&16&&t!==(t=r[4].title+"")&&Le(s,t),o&16&&i!==(i=r[4].id)&&v(e,"id",i)},d(r){r&&m(e)}}}function bi(n){let e,t=n[5].desc+"",s,i;return{c(){e=ae("desc"),s=ye(t),this.h()},l(r){e=ce(r,"desc",{id:!0});var o=N(e);s=Ce(o,t),o.forEach(m),this.h()},h(){v(e,"id",i=n[5].id)},m(r,o){w(r,e,o),D(e,s)},p(r,o){o&32&&t!==(t=r[5].desc+"")&&Le(s,t),o&32&&i!==(i=r[5].id)&&v(e,"id",i)},d(r){r&&m(e)}}}function ma(n){let e;function t(r,o){return r[3]?ga:pa}let s=t(n),i=s(n);return{c(){i.c(),e=Ae()},l(r){i.l(r),e=Ae()},m(r,o){i.m(r,o),w(r,e,o)},p(r,[o]){s===(s=t(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},i:oe,o:oe,d(r){r&&m(e),i.d(r)}}}function ba(n,e,t){const s=["size","role","color","withEvents","title","desc","ariaLabel"];let i=_e(e,s);const r=xe("iconCtx")??{},o={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let{size:l=r.size||"md"}=e,{role:a=r.role||"img"}=e,{color:c=r.color||"currentColor"}=e,{withEvents:u=r.withEvents||!1}=e,{title:h={}}=e,{desc:d={}}=e,_=`${h.id||""} ${d.id||""}`,f=!1,{ariaLabel:p="award solid"}=e;function b(C){X.call(this,n,C)}function E(C){X.call(this,n,C)}function M(C){X.call(this,n,C)}function W(C){X.call(this,n,C)}function q(C){X.call(this,n,C)}function L(C){X.call(this,n,C)}function I(C){X.call(this,n,C)}function Q(C){X.call(this,n,C)}function me(C){X.call(this,n,C)}return n.$$set=C=>{t(11,e=K(K({},e),pe(C))),t(10,i=_e(e,s)),"size"in C&&t(0,l=C.size),"role"in C&&t(1,a=C.role),"color"in C&&t(2,c=C.color),"withEvents"in C&&t(3,u=C.withEvents),"title"in C&&t(4,h=C.title),"desc"in C&&t(5,d=C.desc),"ariaLabel"in C&&t(6,p=C.ariaLabel)},n.$$.update=()=>{n.$$.dirty&48&&(h.id||d.id?t(7,f=!0):t(7,f=!1))},e=pe(e),[l,a,c,u,h,d,p,f,o,_,i,e,b,E,M,W,q,L,I,Q,me]}class va extends Ee{constructor(e){super(),Ie(this,e,ba,ma,we,{size:0,role:1,color:2,withEvents:3,title:4,desc:5,ariaLabel:6})}}const Ss=""+new URL("../assets/user_placeholder.DVBT-4R5.png",import.meta.url).href,ya=Object.freeze(Object.defineProperty({__proto__:null,default:Ss},Symbol.toStringTag,{value:"Module"}));function vi(n,e,t){const s=n.slice();return s[6]=e[t],s[8]=t,s}function Ca(n){let e;return{c(){e=ye("Pos")},l(t){e=Ce(t,"Pos")},m(t,s){w(t,e,s)},d(t){t&&m(e)}}}function wa(n){let e;return{c(){e=ye("Nome")},l(t){e=Ce(t,"Nome")},m(t,s){w(t,e,s)},d(t){t&&m(e)}}}function Ea(n){let e;return{c(){e=ye("Punteggio")},l(t){e=Ce(t,"Punteggio")},m(t,s){w(t,e,s)},d(t){t&&m(e)}}}function Ia(n){let e,t,s,i,r,o;return e=new jn({props:{padding:Sr,$$slots:{default:[Ca]},$$scope:{ctx:n}}}),s=new jn({props:{class:Tr,$$slots:{default:[wa]},$$scope:{ctx:n}}}),r=new jn({props:{class:kr,$$slots:{default:[Ea]},$$scope:{ctx:n}}}),{c(){ne(e.$$.fragment),t=he(),ne(s.$$.fragment),i=he(),ne(r.$$.fragment)},l(l){se(e.$$.fragment,l),t=de(l),se(s.$$.fragment,l),i=de(l),se(r.$$.fragment,l)},m(l,a){ie(e,l,a),w(l,t,a),ie(s,l,a),w(l,i,a),ie(r,l,a),o=!0},p(l,a){const c={};a&2048&&(c.$$scope={dirty:a,ctx:l}),e.$set(c);const u={};a&2048&&(u.$$scope={dirty:a,ctx:l}),s.$set(u);const h={};a&2048&&(h.$$scope={dirty:a,ctx:l}),r.$set(h)},i(l){o||(A(e.$$.fragment,l),A(s.$$.fragment,l),A(r.$$.fragment,l),o=!0)},o(l){P(e.$$.fragment,l),P(s.$$.fragment,l),P(r.$$.fragment,l),o=!1},d(l){l&&(m(t),m(i)),re(e,l),re(s,l),re(r,l)}}}function Sa(n){let e,t=n[8]+1+"",s;return{c(){e=V("div"),s=ye(t),this.h()},l(i){e=H(i,"DIV",{class:!0});var r=N(e);s=Ce(r,t),r.forEach(m),this.h()},h(){v(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){w(i,e,r),D(e,s)},p:oe,i:oe,o:oe,d(i){i&&m(e)}}}function Ta(n){let e,t;return e=new va({props:{size:"xl",color:Fa(n[8])}}),{c(){ne(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,i){ie(e,s,i),t=!0},p:oe,i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function ka(n){let e,t,s,i;const r=[Ta,Sa],o=[];function l(a,c){return a[8]>=0&&a[8]<=2?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=Ae()},l(a){t.l(a),s=Ae()},m(a,c){o[e].m(a,c),w(a,s,c),i=!0},p(a,c){t.p(a,c)},i(a){i||(A(t),i=!0)},o(a){P(t),i=!1},d(a){a&&m(s),o[e].d(a)}}}function Na(n){let e=l+"",t,s,i,r,o;function l(){return n[2](n[10])}return{c(){t=ye(e),s=he(),i=V("img"),this.h()},l(a){t=Ce(a,e),s=de(a),i=H(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(i,"class","lg:w-2/6 w-3/6 rounded-full"),ss(i.src,r=Ss)||v(i,"src",r),v(i,"alt",o=n[6].username+" avatar")},m(a,c){w(a,t,c),w(a,s,c),w(a,i,c)},p(a,c){n=a,c&1&&e!==(e=l+"")&&Le(t,e),c&1&&o!==(o=n[6].username+" avatar")&&v(i,"alt",o)},i:oe,o:oe,d(a){a&&(m(t),m(s),m(i))}}}function Ra(n){let e,t,s;return{c(){e=V("img"),this.h()},l(i){e=H(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","lg:w-2/6 w-3/6 rounded-full"),ss(e.src,t=n[9])||v(e,"src",t),v(e,"alt",s=n[6].username+" avatar")},m(i,r){w(i,e,r)},p(i,r){r&1&&!ss(e.src,t=i[9])&&v(e,"src",t),r&1&&s!==(s=i[6].username+" avatar")&&v(e,"alt",s)},i:oe,o:oe,d(i){i&&m(e)}}}function Aa(n){let e,t;return e=new Kl({props:{size:"8"}}),{c(){ne(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,i){ie(e,s,i),t=!0},p:oe,i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Pa(n){let e,t,s,i,r=n[6].username+"",o,l,a={ctx:n,current:null,token:null,hasCatch:!0,pending:Aa,then:Ra,catch:Na,value:9,error:10,blocks:[,,,]};return di(e=n[1](n[6].username),a),{c(){a.block.c(),t=he(),s=V("div"),i=V("div"),o=ye(r),this.h()},l(c){a.block.l(c),t=de(c),s=H(c,"DIV",{class:!0});var u=N(s);i=H(u,"DIV",{class:!0});var h=N(i);o=Ce(h,r),h.forEach(m),u.forEach(m),this.h()},h(){v(i,"class","text-base gamer-font text-4xl pr-6 svelte-15orbzf"),v(s,"class","ps-3 pr-6")},m(c,u){a.block.m(c,a.anchor=u),a.mount=()=>t.parentNode,a.anchor=t,w(c,t,u),w(c,s,u),D(s,i),D(i,o),l=!0},p(c,u){n=c,a.ctx=n,u&1&&e!==(e=n[1](n[6].username))&&di(e,a)||pl(a,n,u),(!l||u&1)&&r!==(r=n[6].username+"")&&Le(o,r)},i(c){l||(A(a.block),l=!0)},o(c){for(let u=0;u<3;u+=1){const h=a.blocks[u];P(h)}l=!1},d(c){c&&(m(t),m(s)),a.block.d(c),a.token=null,a=null}}}function xa(n){let e,t=n[6].points+"",s;return{c(){e=V("div"),s=ye(t),this.h()},l(i){e=H(i,"DIV",{class:!0});var r=N(e);s=Ce(r,t),r.forEach(m),this.h()},h(){v(e,"class","text-base gamer-font text-4xl svelte-15orbzf")},m(i,r){w(i,e,r),D(e,s)},p(i,r){r&1&&t!==(t=i[6].points+"")&&Le(s,t)},d(i){i&&m(e)}}}function Da(n){let e,t,s,i,r,o,l;return e=new Gn({props:{tdClass:Sr,class:"text-center",$$slots:{default:[ka]},$$scope:{ctx:n}}}),s=new Gn({props:{class:"flex items-center px-6 py-4 text-gray-900 dark:text-white "+Tr+" space-x-4",$$slots:{default:[Pa]},$$scope:{ctx:n}}}),r=new Gn({props:{class:kr,$$slots:{default:[xa]},$$scope:{ctx:n}}}),{c(){ne(e.$$.fragment),t=he(),ne(s.$$.fragment),i=he(),ne(r.$$.fragment),o=he()},l(a){se(e.$$.fragment,a),t=de(a),se(s.$$.fragment,a),i=de(a),se(r.$$.fragment,a),o=de(a)},m(a,c){ie(e,a,c),w(a,t,c),ie(s,a,c),w(a,i,c),ie(r,a,c),w(a,o,c),l=!0},p(a,c){const u={};c&2048&&(u.$$scope={dirty:c,ctx:a}),e.$set(u);const h={};c&2049&&(h.$$scope={dirty:c,ctx:a}),s.$set(h);const d={};c&2049&&(d.$$scope={dirty:c,ctx:a}),r.$set(d)},i(a){l||(A(e.$$.fragment,a),A(s.$$.fragment,a),A(r.$$.fragment,a),l=!0)},o(a){P(e.$$.fragment,a),P(s.$$.fragment,a),P(r.$$.fragment,a),l=!1},d(a){a&&(m(t),m(i),m(o)),re(e,a),re(s,a),re(r,a)}}}function yi(n){let e,t;return e=new la({props:{$$slots:{default:[Da]},$$scope:{ctx:n}}}),{c(){ne(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,i){ie(e,s,i),t=!0},p(s,i){const r={};i&2049&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){re(e,s)}}}function Oa(n){let e,t,s=_n(n[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=yi(vi(n,s,o));const r=o=>P(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ae()},l(o){for(let l=0;l<i.length;l+=1)i[l].l(o);e=Ae()},m(o,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,l);w(o,e,l),t=!0},p(o,l){if(l&3){s=_n(o[0]);let a;for(a=0;a<s.length;a+=1){const c=vi(o,s,a);i[a]?(i[a].p(c,l),A(i[a],1)):(i[a]=yi(c),i[a].c(),A(i[a],1),i[a].m(e.parentNode,e))}for(xn(),a=s.length;a<i.length;a+=1)r(a);Dn()}},i(o){if(!t){for(let l=0;l<s.length;l+=1)A(i[l]);t=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)P(i[l]);t=!1},d(o){o&&m(e),vr(i,o)}}}function Ma(n){let e,t,s,i;return e=new da({props:{$$slots:{default:[Ia]},$$scope:{ctx:n}}}),s=new ea({props:{tableBodyClass:"divide-y",$$slots:{default:[Oa]},$$scope:{ctx:n}}}),{c(){ne(e.$$.fragment),t=he(),ne(s.$$.fragment)},l(r){se(e.$$.fragment,r),t=de(r),se(s.$$.fragment,r)},m(r,o){ie(e,r,o),w(r,t,o),ie(s,r,o),i=!0},p(r,o){const l={};o&2048&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const a={};o&2049&&(a.$$scope={dirty:o,ctx:r}),s.$set(a)},i(r){i||(A(e.$$.fragment,r),A(s.$$.fragment,r),i=!0)},o(r){P(e.$$.fragment,r),P(s.$$.fragment,r),i=!1},d(r){r&&m(t),re(e,r),re(s,r)}}}function La(n){let e,t=`/* Nello style di Svelte questo stile viene rimosso in quanto 
	   non usato nella pagina ma nel componente TableBodyCell.
	   Come workaround lo metto nel HTML
	*/
    svg {
      display: block;
      text-align: center;
      margin: auto;
    }`,s,i,r,o,l;return o=new $l({props:{hoverable:!0,class:"text-center",$$slots:{default:[Ma]},$$scope:{ctx:n}}}),{c(){e=V("style"),e.textContent=t,s=he(),i=V("div"),r=V("div"),ne(o.$$.fragment),this.h()},l(a){const c=dl("svelte-e4duco",document.head);e=H(c,"STYLE",{"data-svelte-h":!0}),br(e)!=="svelte-1lbw6gp"&&(e.textContent=t),c.forEach(m),s=de(a),i=H(a,"DIV",{class:!0});var u=N(i);r=H(u,"DIV",{class:!0});var h=N(r);se(o.$$.fragment,h),h.forEach(m),u.forEach(m),this.h()},h(){v(r,"class","lg:w-2/5"),v(i,"class","lg:flex lg:justify-center")},m(a,c){D(document.head,e),w(a,s,c),w(a,i,c),D(i,r),ie(o,r,null),l=!0},p(a,[c]){const u={};c&2049&&(u.$$scope={dirty:c,ctx:a}),o.$set(u)},i(a){l||(A(o.$$.fragment,a),l=!0)},o(a){P(o.$$.fragment,a),l=!1},d(a){a&&(m(s),m(i)),m(e),re(o)}}}const Sr="px-4 py-6 w-1/6",Tr="w-3/5",kr="w-1/4";function Fa(n){const e="#ffd700",t="#949494",s="#cd7f32";switch(n){case 0:return e;case 1:return t;case 2:return s}}function Ba(n,e,t){let{items:s}=e;const i=Object.assign({"./avatars/user_placeholder.png":()=>_l(()=>Promise.resolve().then(()=>ya),void 0,import.meta.url)});function r(c){return Object.keys(c).forEach(h=>{let d=i[h];delete c[h];const _=h.replace("./avatars/","").replace(".png","");c[_]=d}),c}const o=r(i);async function l(c){const u=c.toLowerCase();return Object.hasOwn(o,u)?(await o[u]()).default:Ss}const a=c=>(console.log(c),"");return n.$$set=c=>{"items"in c&&t(0,s=c.items)},[s,l,a]}class Wa extends Ee{constructor(e){super(),Ie(this,e,Ba,La,we,{items:0})}}var Ci={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(n,e){if(!n)throw wt(e)},wt=function(n){return new Error("Firebase Database ("+Nr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},za=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(t[u],t[h],t[d],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):za(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new Ua;const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const f=c<<6&192|h;s.push(f)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ua extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ar=function(n){const e=Rr(n);return Ts.encodeByteArray(e,!0)},pn=function(n){return Ar(n).replace(/\./g,"")},os=function(n){try{return Ts.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){return Pr(void 0,n)}function Pr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ha(t)||(n[t]=Pr(n[t],e[t]));return n}function Ha(n){return n!=="__proto__"}/**
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
 */function Ga(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ja=()=>Ga().__FIREBASE_DEFAULTS__,qa=()=>{if(typeof process>"u"||typeof Ci>"u")return;const n=Ci.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ya=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&os(n[1]);return e&&JSON.parse(e)},xr=()=>{try{return ja()||qa()||Ya()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ka=n=>{var e,t;return(t=(e=xr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qa=n=>{const e=Ka(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Dr=()=>{var n;return(n=xr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Xa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pn(JSON.stringify(t)),pn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Or(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($a())}function Ja(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mr(){return Nr.NODE_ADMIN===!0}function Za(){try{return typeof indexedDB=="object"}catch{return!1}}function ec(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="FirebaseError";class Qt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tc,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?nc(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,l,s)}}function nc(n,e){return n.replace(sc,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Bt(os(r[0])||""),t=Bt(os(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ic=function(n){const e=Fr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rc=function(n){const e=Fr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ls(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ei(r)&&Ei(o)){if(!ls(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ei(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Br(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},On=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Xt(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const et="[DEFAULT]";/**
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
 */class cc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ks;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hc(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uc(n){return n===et?void 0:n}function hc(n){return n.instantiationMode==="EAGER"}/**
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
 */class dc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const fc={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},_c=F.INFO,pc={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},gc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=pc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wr{constructor(e){this.name=e,this._logLevel=_c,this._logHandler=gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const mc=(n,e)=>e.some(t=>n instanceof t);let Ii,Si;function bc(){return Ii||(Ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vc(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zr=new WeakMap,as=new WeakMap,Ur=new WeakMap,qn=new WeakMap,Ns=new WeakMap;function yc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ue(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zr.set(t,n)}).catch(()=>{}),Ns.set(e,n),e}function Cc(n){if(as.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});as.set(n,e)}let cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ur.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wc(n){cs=n(cs)}function Ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Yn(this),e,...t);return Ur.set(s,e.sort?e.sort():[e]),Ue(s)}:vc().includes(n)?function(...e){return n.apply(Yn(this),e),Ue(zr.get(this))}:function(...e){return Ue(n.apply(Yn(this),e))}}function Ic(n){return typeof n=="function"?Ec(n):(n instanceof IDBTransaction&&Cc(n),mc(n,bc())?new Proxy(n,cs):n)}function Ue(n){if(n instanceof IDBRequest)return yc(n);if(qn.has(n))return qn.get(n);const e=Ic(n);return e!==n&&(qn.set(n,e),Ns.set(e,n)),e}const Yn=n=>Ns.get(n);function Sc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Ue(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ue(o.result),a.oldVersion,a.newVersion,Ue(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Tc=["get","getKey","getAll","getAllKeys","count"],kc=["put","add","delete","clear"],Kn=new Map;function Ti(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kn.get(e))return Kn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=kc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Kn.set(e,r),r}wc(n=>({...n,get:(e,t,s)=>Ti(e,t)||n.get(e,t,s),has:(e,t)=>!!Ti(e,t)||n.has(e,t)}));/**
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
 */class Nc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",ki="0.10.7";/**
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
 */const it=new Wr("@firebase/app"),Ac="@firebase/app-compat",Pc="@firebase/analytics-compat",xc="@firebase/analytics",Dc="@firebase/app-check-compat",Oc="@firebase/app-check",Mc="@firebase/auth",Lc="@firebase/auth-compat",Fc="@firebase/database",Bc="@firebase/database-compat",Wc="@firebase/functions",zc="@firebase/functions-compat",Uc="@firebase/installations",Vc="@firebase/installations-compat",Hc="@firebase/messaging",Gc="@firebase/messaging-compat",jc="@firebase/performance",qc="@firebase/performance-compat",Yc="@firebase/remote-config",Kc="@firebase/remote-config-compat",Qc="@firebase/storage",Xc="@firebase/storage-compat",$c="@firebase/firestore",Jc="@firebase/vertexai-preview",Zc="@firebase/firestore-compat",eu="firebase",tu="10.12.4";/**
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
 */const hs="[DEFAULT]",nu={[us]:"fire-core",[Ac]:"fire-core-compat",[xc]:"fire-analytics",[Pc]:"fire-analytics-compat",[Oc]:"fire-app-check",[Dc]:"fire-app-check-compat",[Mc]:"fire-auth",[Lc]:"fire-auth-compat",[Fc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[Wc]:"fire-fn",[zc]:"fire-fn-compat",[Uc]:"fire-iid",[Vc]:"fire-iid-compat",[Hc]:"fire-fcm",[Gc]:"fire-fcm-compat",[jc]:"fire-perf",[qc]:"fire-perf-compat",[Yc]:"fire-rc",[Kc]:"fire-rc-compat",[Qc]:"fire-gcs",[Xc]:"fire-gcs-compat",[$c]:"fire-fst",[Zc]:"fire-fst-compat",[Jc]:"fire-vertex","fire-js":"fire-js",[eu]:"fire-js-all"};/**
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
 */const mn=new Map,su=new Map,ds=new Map;function Ni(n,e){try{n.container.addComponent(e)}catch(t){it.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(ds.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,n);for(const t of mn.values())Ni(t,n);for(const t of su.values())Ni(t,n);return!0}function iu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ru={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Lr("app","Firebase",ru);/**
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
 */class ou{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const lu=tu;function Vr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hs,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ve.create("bad-app-name",{appName:String(i)});if(t||(t=Dr()),!t)throw Ve.create("no-options");const r=mn.get(i);if(r){if(ls(t,r.options)&&ls(s,r.config))return r;throw Ve.create("duplicate-app",{appName:i})}const o=new dc(i);for(const a of ds.values())o.addComponent(a);const l=new ou(t,s,o);return mn.set(i,l),l}function au(n=hs){const e=mn.get(n);if(!e&&n===hs&&Dr())return Vr();if(!e)throw Ve.create("no-app",{appName:n});return e}function ft(n,e,t){var s;let i=(s=nu[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(l.join(" "));return}bn(new Wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cu="firebase-heartbeat-database",uu=1,zt="firebase-heartbeat-store";let Qn=null;function Hr(){return Qn||(Qn=Sc(cu,uu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),Qn}async function hu(n){try{const t=(await Hr()).transaction(zt),s=await t.objectStore(zt).get(Gr(n));return await t.done,s}catch(e){if(e instanceof Qt)it.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(t.message)}}}async function Ri(n,e){try{const s=(await Hr()).transaction(zt,"readwrite");await s.objectStore(zt).put(e,Gr(n)),await s.done}catch(t){if(t instanceof Qt)it.warn(t.message);else{const s=Ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});it.warn(s.message)}}}function Gr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const du=1024,fu=30*24*60*60*1e3;class _u{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ai();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ai(),{heartbeatsToSend:s,unsentEntries:i}=pu(this._heartbeatsCache.heartbeats),r=pn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ai(){return new Date().toISOString().substring(0,10)}function pu(n,e=du){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pi(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Za()?ec().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pi(n){return pn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function mu(n){bn(new Wt("platform-logger",e=>new Nc(e),"PRIVATE")),bn(new Wt("heartbeat",e=>new _u(e),"PRIVATE")),ft(us,ki,n),ft(us,ki,"esm2017"),ft("fire-js","")}mu("");var bu="firebase",vu="10.12.4";/**
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
 */ft(bu,vu,"app");var xi={};const Di="@firebase/database",Oi="1.0.6";/**
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
 */let jr="";function yu(n){jr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Bt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Cu(e)}}catch{}return new wu},st=qr("localStorage"),Eu=qr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Wr("@firebase/database"),Iu=function(){let n=1;return function(){return n++}}(),Yr=function(n){const e=ac(n),t=new lc;t.update(e);const s=t.digest();return Ts.encodeByteArray(s)},$t=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$t.apply(null,s):typeof s=="object"?e+=$(s):e+=s,e+=" "}return e};let Dt=null,Mi=!0;const Su=function(n,e){g(!e,"Can't turn on custom loggers persistently."),_t.logLevel=F.VERBOSE,Dt=_t.log.bind(_t)},le=function(...n){if(Mi===!0&&(Mi=!1,Dt===null&&Eu.get("logging_enabled")===!0&&Su()),Dt){const e=$t.apply(null,n);Dt(e)}},Jt=function(n){return function(...e){le(n,...e)}},fs=function(...n){const e="FIREBASE INTERNAL ERROR: "+$t(...n);_t.error(e)},Me=function(...n){const e=`FIREBASE FATAL ERROR: ${$t(...n)}`;throw _t.error(e),new Error(e)},be=function(...n){const e="FIREBASE WARNING: "+$t(...n);_t.warn(e)},Tu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ku=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},bt="[MIN_NAME]",rt="[MAX_NAME]",Et=function(n,e){if(n===e)return 0;if(n===bt||e===rt)return-1;if(e===bt||n===rt)return 1;{const t=Li(n),s=Li(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Nu=function(n,e){return n===e?0:n<e?-1:1},Rt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},Rs=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$(e[s]),t+=":",t+=Rs(n[e[s]]);return t+="}",t},Qr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ge(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Xr=function(n){g(!Kr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ru=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Au=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const xu=new RegExp("^-?(0*)\\d{1,10}$"),Du=-2147483648,Ou=2147483647,Li=function(n){if(xu.test(n)){const e=Number(n);if(e>=Du&&e<=Ou)return e}return null},Zt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw be("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ot=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Lu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="5",$r="v",Jr="s",Zr="r",eo="f",to=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,no="ls",so="p",_s="ac",io="websocket",ro="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=st.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&st.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Bu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function lo(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===io)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ro)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bu(n)&&(t.ns=n.namespace);const i=[];return ge(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.counters_={}}incrementCounter(e,t=1){Fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Va(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={},$n={};function Ps(n){const e=n.toString();return Xn[e]||(Xn[e]=new Wu),Xn[e]}function zu(n,e){const t=n.toString();return $n[t]||($n[t]=e()),$n[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Zt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="start",Vu="close",Hu="pLPCommand",Gu="pRTLPCB",ao="id",co="pw",uo="ser",ju="cb",qu="seg",Yu="ts",Ku="d",Qu="dframe",ho=1870,fo=30,Xu=ho-fo,$u=25e3,Ju=3e4;class ht{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jt(e),this.stats_=Ps(t),this.urlFn=a=>(this.appCheckToken&&(a[_s]=this.appCheckToken),lo(t,ro,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Uu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ju)),ku(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xs((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fi)this.id=l,this.password=a;else if(o===Vu)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fi]="t",s[uo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ju]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$r]=As,this.transportSessionId&&(s[Jr]=this.transportSessionId),this.lastSessionId&&(s[no]=this.lastSessionId),this.applicationId&&(s[so]=this.applicationId),this.appCheckToken&&(s[_s]=this.appCheckToken),typeof location<"u"&&location.hostname&&to.test(location.hostname)&&(s[Zr]=eo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ht.forceAllow_=!0}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){return ht.forceAllow_?!0:!ht.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ru()&&!Au()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ar(t),i=Qr(s,Xu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Qu]="t",s[ao]=e,s[co]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class xs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Iu(),window[Hu+this.uniqueCallbackIdentifier]=e,window[Gu+this.uniqueCallbackIdentifier]=t,this.myIFrame=xs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){le("frame writing exception"),l.stack&&le(l.stack),le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ao]=this.myID,e[co]=this.myPW,e[uo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fo+s.length<=ho;){const o=this.pendingSegs.shift();s=s+"&"+qu+i+"="+o.seg+"&"+Yu+i+"="+o.ts+"&"+Ku+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor($u)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=16384,eh=45e3;let vn=null;typeof MozWebSocket<"u"?vn=MozWebSocket:typeof WebSocket<"u"&&(vn=WebSocket);class Se{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jt(this.connId),this.stats_=Ps(t),this.connURL=Se.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[$r]=As,typeof location<"u"&&location.hostname&&to.test(location.hostname)&&(o[Zr]=eo),t&&(o[Jr]=t),s&&(o[no]=s),i&&(o[_s]=i),r&&(o[so]=r),lo(e,io,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,st.set("previous_websocket_failure",!0);try{let s;Mr(),this.mySock=new vn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&vn!==null&&!Se.forceDisallow_}static previouslyFailed(){return st.isInMemoryStorage||st.get("previous_websocket_failure")===!0}markConnectionHealthy(){st.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Bt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Qr(t,Zu);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Se.responsesRequiredToBeHealthy=2;Se.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ht,Se]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Se&&Se.isAvailable();let s=t&&!Se.previouslyFailed();if(e.webSocketOnly&&(t||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Se];else{const i=this.transports_=[];for(const r of Ut.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ut.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=6e4,nh=5e3,sh=10*1024,ih=100*1024,Jn="t",Bi="d",rh="s",Wi="r",oh="e",zi="o",Ui="a",Vi="n",Hi="p",lh="h";class ah{constructor(e,t,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jt("c:"+this.id+":"),this.transportManager_=new Ut(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ih?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jn in e){const t=e[Jn];t===Ui?this.upgradeIfSecondaryHealthy_():t===Wi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rt("t",e),s=Rt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ui,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rt("t",e),s=Rt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rt(Jn,e);if(Bi in e){const s=e[Bi];if(t===lh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Vi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rh?this.onConnectionShutdown_(s):t===Wi?this.onReset_(s):t===oh?fs("Server Error: "+s):t===zi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),As!==s&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(th))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(st.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends po{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Or()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yn}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=32,ji=768;class O{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new O("")}function R(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function je(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new O(n.pieces_,e)}function go(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ch(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function mo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function bo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new O(e,0)}function J(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof O)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new O(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function ue(n,e){const t=R(n),s=R(e);if(t===null)return e;if(t===s)return ue(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vo(n,e){if(je(n)!==je(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Te(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(je(n)>je(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class uh{constructor(e,t){this.errorPrefix_=t,this.parts_=mo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=On(this.parts_[s]);yo(this)}}function hh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=On(e),yo(n)}function dh(n){const e=n.parts_.pop();n.byteLength_-=On(e),n.parts_.length>0&&(n.byteLength_-=1)}function yo(n){if(n.byteLength_>ji)throw new Error(n.errorPrefix_+"has a key path longer than "+ji+" bytes ("+n.byteLength_+").");if(n.parts_.length>Gi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gi+") or object contains a cycle "+tt(n))}function tt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends po{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ds}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,fh=60*5*1e3,qi=30*1e3,_h=1.3,ph=3e4,gh="server_kill",Yi=3;class Oe extends _o{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Oe.nextPersistentConnectionId_++,this.log_=Jt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=fh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Mr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ds.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_($(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;Oe.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Fe(e,"w")){const s=mt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ic(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):fs("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ph&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_h)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){g(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?le("getToken() completed but was canceled"):(le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new ah(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(gh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&be(h),a())}}}interrupt(e){le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wi(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Rs(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new O(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){le("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yi&&(this.reconnectDelay_=qi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){le("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+jr.replace(/\./g,"-")]=1,Or()?e["framework.cordova"]=1:Ja()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yn.getInstance().currentlyOnline();return wi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(bt,e),i=new T(bt,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;class Co extends Mn{static get __EMPTY_NODE(){return hn}static set __EMPTY_NODE(e){hn=e}compare(e,t){return Et(e.name,t.name)}isDefinedOn(e){throw wt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(rt,hn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,hn)}toString(){return".key"}}const pt=new Co;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??ee.RED,this.left=i??fe.EMPTY_NODE,this.right=r??fe.EMPTY_NODE}copy(e,t,s,i,r){return new ee(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class mh{copy(e,t,s,i,r){return this}insert(e,t,s){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class fe{constructor(e,t=fe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new fe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new dn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new dn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new dn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new dn(this.root_,null,this.comparator_,!0,e)}}fe.EMPTY_NODE=new mh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n,e){return Et(n.name,e.name)}function Os(n,e){return Et(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;function vh(n){ps=n}const wo=function(n){return typeof n=="number"?"number:"+Xr(n):"string:"+n},Eo=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fe(e,".sv"),"Priority must be a string or number.")}else g(n===ps||n.isEmpty(),"priority of unexpected type.");g(n===ps||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class Z{constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eo(this.priorityNode_)}static set __childrenNodeConstructor(e){Ki=e}static get __childrenNodeConstructor(){return Ki}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:R(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=R(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Xr(this.value_):e+=this.value_,this.lazyHash_=Yr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Z.VALUE_TYPE_ORDER.indexOf(t),r=Z.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io,So;function yh(n){Io=n}function Ch(n){So=n}class wh extends Mn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Et(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(rt,new Z("[PRIORITY-POST]",So))}makePost(e,t){const s=Io(e);return new T(t,new Z("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new wh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=Math.log(2);class Ih{constructor(e){const t=r=>parseInt(Math.log(r)/Eh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cn=function(n,e,t,s){n.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=n[a],d=t?t(h):h,new ee(d,h.node,ee.BLACK,null,null);{const _=parseInt(u/2,10)+a,f=i(a,_),p=i(_+1,c);return h=n[_],d=t?t(h):h,new ee(d,h.node,ee.BLACK,f,p)}},r=function(a){let c=null,u=null,h=n.length;const d=function(f,p){const b=h-f,E=h;h-=f;const M=i(b+1,E),W=n[b],q=t?t(W):W;_(new ee(q,W.node,p,null,M))},_=function(f){c?(c.left=f,c=f):(u=f,c=f)};for(let f=0;f<a.count;++f){const p=a.nextBitIsOne(),b=Math.pow(2,a.count-(f+1));p?d(b,ee.BLACK):(d(b,ee.BLACK),d(b,ee.RED))}return u},o=new Ih(n.length),l=r(o);return new fe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;const ut={};class De{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(ut&&Y,"ChildrenNode.ts has not been loaded"),Zn=Zn||new De({".priority":ut},{".priority":Y}),Zn}get(e){const t=mt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof fe?t:null}hasIndex(e){return Fe(this.indexSet_,e.toString())}addIndex(e,t){g(e!==pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Cn(s,e.getCompare()):l=ut;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new De(u,c)}addToIndexes(e,t){const s=gn(this.indexes_,(i,r)=>{const o=mt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===ut)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(T.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Cn(l,o.getCompare())}else return ut;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new T(e.name,l))),a.insert(e,e.node)}});return new De(s,this.indexSet_)}removeFromIndexes(e,t){const s=gn(this.indexes_,i=>{if(i===ut)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new De(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt;class y{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Eo(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pt||(Pt=new y(new fe(Os),null,De.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pt}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Pt:t}}getChild(e){const t=R(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pt:this.priorityNode_;return new y(i,o,r)}}updateChild(e,t){const s=R(e);if(s===null)return t;{g(R(e)!==".priority"||je(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(B(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,l)=>{t[o]=l.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wo(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Yr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===en?-1:0}withIndex(e){if(e===pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pt?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sh extends y{constructor(){super(new fe(Os),y.EMPTY_NODE,De.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const en=new Sh;Object.defineProperties(T,{MIN:{value:new T(bt,y.EMPTY_NODE)},MAX:{value:new T(rt,en)}});Co.__EMPTY_NODE=y.EMPTY_NODE;Z.__childrenNodeConstructor=y;vh(en);Ch(en);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=!0;function te(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,te(e))}if(!(n instanceof Array)&&Th){const t=[];let s=!1;if(ge(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=te(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new T(o,a)))}}),t.length===0)return y.EMPTY_NODE;const r=Cn(t,bh,o=>o.name,Os);if(s){const o=Cn(t,Y.getCompare());return new y(r,te(e),new De({".priority":o},{".priority":Y}))}else return new y(r,te(e),De.Default)}else{let t=y.EMPTY_NODE;return ge(n,(s,i)=>{if(Fe(n,s)&&s.substring(0,1)!=="."){const r=te(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(te(e))}}yh(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Mn{constructor(e){super(),this.indexPath_=e,g(!k(e)&&R(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Et(e.name,t.name):r}makePost(e,t){const s=te(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,en);return new T(rt,e)}toString(){return mo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Mn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Et(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=te(e);return new T(t,s)}toString(){return".value"}}const Rh=new Nh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){return{type:"value",snapshotNode:n}}function vt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ht(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ah(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Vt(t,l)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vt(t,s)):o.trackChildChange(Ht(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(Vt(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ht(i,r,o))}else s.trackChildChange(vt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.indexedFilter_=new Ms(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gt.getStartPost_(e),this.endPost_=Gt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new T(t,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,l)=>{r.matches(new T(o,l))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new T(t,s))||(s=y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;g(l.numChildren()===this.limit_,"");const a=new T(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ht(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Vt(t,h));const p=l.updateImmediateChild(t,y.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(vt(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Vt(c.name,c.node)),r.trackChildChange(vt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Ls;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xh(n){return n.loadsAllData()?new Ms(n.getIndex()):n.hasLimit()?new Ph(n):new Gt(n)}function Qi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===Rh?t="$value":n.index_===pt?t="$key":(g(n.index_ instanceof kh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends _o{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Jt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wn.getListenId_(e,s),l={};this.listens_[o]=l;const a=Qi(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),mt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=wn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Qi(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oc(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Bt(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return{value:null,children:new Map}}function ko(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=R(e);n.children.has(s)||n.children.set(s,En());const i=n.children.get(s);e=B(e),ko(i,e,t)}}function gs(n,e,t){n.value!==null?t(e,n.value):Oh(n,(s,i)=>{const r=new O(e.toString()+"/"+s);gs(i,r,t)})}function Oh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ge(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=10*1e3,Lh=30*1e3,Fh=5*60*1e3;class Bh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Mh(e);const s=$i+(Lh-$i)*Math.random();Ot(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ge(e,(i,r)=>{r>0&&Fe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ke||(ke={}));function No(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ke.ACK_USER_WRITE,this.source=No()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new O(e));return new In(x(),t,this.revert)}}else return g(R(this.path)===e,"operationForChild called for unrelated child."),new In(B(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.source=e,this.path=t,this.type=ke.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new jt(this.source,x()):new jt(this.source,B(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ke.OVERWRITE}operationForChild(e){return k(this.path)?new ot(this.source,x(),this.snap.getImmediateChild(e)):new ot(this.source,B(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ke.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new O(e));return t.isEmpty()?null:t.value?new ot(this.source,x(),t.value):new qt(this.source,x(),t)}else return g(R(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=R(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ah(o.childName,o.snapshotNode))}),xt(n,i,"child_removed",e,s,t),xt(n,i,"child_added",e,s,t),xt(n,i,"child_moved",r,s,t),xt(n,i,"child_changed",e,s,t),xt(n,i,"value",e,s,t),i}function xt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>Vh(n,l,a)),o.forEach(l=>{const a=Uh(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function Uh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Vh(n,e,t){if(e.childName==null||t.childName==null)throw wt("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e){return{eventCache:n,serverCache:e}}function Mt(n,e,t,s){return Ln(new qe(e,t,s),n.serverCache)}function Ro(n,e,t,s){return Ln(n.eventCache,new qe(e,t,s))}function Sn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function lt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const Hh=()=>(es||(es=new fe(Nu)),es);class U{constructor(e,t=Hh()){this.value=e,this.children=t}static fromObject(e){let t=new U(null);return ge(e,(s,i)=>{t=t.set(new O(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(k(e))return null;{const s=R(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:J(new O(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=R(e),s=this.children.get(t);return s!==null?s.subtree(B(e)):new U(null)}}set(e,t){if(k(e))return new U(t,this.children);{const s=R(e),r=(this.children.get(s)||new U(null)).set(B(e),t),o=this.children.insert(s,r);return new U(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new U(null):new U(null,this.children);{const t=R(e),s=this.children.get(t);if(s){const i=s.remove(B(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new U(null):new U(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=R(e),s=this.children.get(t);return s?s.get(B(e)):null}}setTree(e,t){if(k(e))return t;{const s=R(e),r=(this.children.get(s)||new U(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new U(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(J(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(k(e))return null;{const r=R(e),o=this.children.get(r);return o?o.findOnPath_(B(e),J(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,s){if(k(e))return this;{this.value&&s(t,this.value);const i=R(e),r=this.children.get(i);return r?r.foreachOnPath_(B(e),J(t,i),s):new U(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(J(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new U(null))}}function Lt(n,e,t){if(k(e))return new Ne(new U(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ue(i,e);return r=r.updateChild(o,t),new Ne(n.writeTree_.set(i,r))}else{const i=new U(t),r=n.writeTree_.setTree(e,i);return new Ne(r)}}}function Ji(n,e,t){let s=n;return ge(t,(i,r)=>{s=Lt(s,J(e,i),r)}),s}function Zi(n,e){if(k(e))return Ne.empty();{const t=n.writeTree_.setTree(e,new U(null));return new Ne(t)}}function ms(n,e){return at(n,e)!=null}function at(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ue(t.path,e)):null}function er(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function He(n,e){if(k(e))return n;{const t=at(n,e);return t!=null?new Ne(new U(t)):new Ne(n.writeTree_.subtree(e))}}function bs(n){return n.writeTree_.isEmpty()}function yt(n,e){return Ao(x(),n.writeTree_,e)}function Ao(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ao(J(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(J(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n,e){return Oo(e,n)}function Gh(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Lt(n.visibleWrites,e,t)),n.lastWriteId=s}function jh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function qh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Yh(l,s.path)?i=!1:Te(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Kh(n),!0;if(s.snap)n.visibleWrites=Zi(n.visibleWrites,s.path);else{const l=s.children;ge(l,a=>{n.visibleWrites=Zi(n.visibleWrites,J(s.path,a))})}return!0}else return!1}function Yh(n,e){if(n.snap)return Te(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Te(J(n.path,t),e))return!0;return!1}function Kh(n){n.visibleWrites=Po(n.allWrites,Qh,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Qh(n){return n.visible}function Po(n,e,t){let s=Ne.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)Te(t,o)?(l=ue(t,o),s=Lt(s,l,r.snap)):Te(o,t)&&(l=ue(o,t),s=Lt(s,x(),r.snap.getChild(l)));else if(r.children){if(Te(t,o))l=ue(t,o),s=Ji(s,l,r.children);else if(Te(o,t))if(l=ue(o,t),k(l))s=Ji(s,x(),r.children);else{const a=mt(r.children,R(l));if(a){const c=a.getChild(B(l));s=Lt(s,x(),c)}}}else throw wt("WriteRecord should have .snap or .children")}}return s}function xo(n,e,t,s,i){if(!s&&!i){const r=at(n.visibleWrites,e);if(r!=null)return r;{const o=He(n.visibleWrites,e);if(bs(o))return t;if(t==null&&!ms(o,x()))return null;{const l=t||y.EMPTY_NODE;return yt(o,l)}}}else{const r=He(n.visibleWrites,e);if(!i&&bs(r))return t;if(!i&&t==null&&!ms(r,x()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Te(c.path,e)||Te(e,c.path))},l=Po(n.allWrites,o,e),a=t||y.EMPTY_NODE;return yt(l,a)}}}function Xh(n,e,t){let s=y.EMPTY_NODE;const i=at(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=He(n.visibleWrites,e);return t.forEachChild(Y,(o,l)=>{const a=yt(He(r,new O(o)),l);s=s.updateImmediateChild(o,a)}),er(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=He(n.visibleWrites,e);return er(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $h(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=J(e,t);if(ms(n.visibleWrites,r))return null;{const o=He(n.visibleWrites,r);return bs(o)?i.getChild(t):yt(o,i.getChild(t))}}function Jh(n,e,t,s){const i=J(e,t),r=at(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=He(n.visibleWrites,i);return yt(o,s.getNode().getImmediateChild(t))}else return null}function Zh(n,e){return at(n.visibleWrites,e)}function ed(n,e,t,s,i,r,o){let l;const a=He(n.visibleWrites,e),c=at(a,x());if(c!=null)l=c;else if(t!=null)l=yt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function td(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function Tn(n,e,t,s){return xo(n.writeTree,n.treePath,e,t,s)}function Ws(n,e){return Xh(n.writeTree,n.treePath,e)}function tr(n,e,t,s){return $h(n.writeTree,n.treePath,e,t,s)}function kn(n,e){return Zh(n.writeTree,J(n.treePath,e))}function nd(n,e,t,s,i,r){return ed(n.writeTree,n.treePath,e,t,s,i,r)}function zs(n,e,t){return Jh(n.writeTree,n.treePath,e,t)}function Do(n,e){return Oo(J(n.treePath,e),n.writeTree)}function Oo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,vt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.oldSnap));else throw wt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Mo=new id;class Us{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:lt(this.viewCache_),r=nd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){return{filter:n}}function od(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ld(n,e,t,s,i){const r=new sd;let o,l;if(t.type===ke.OVERWRITE){const c=t;c.source.fromUser?o=vs(n,e,c.path,c.snap,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!k(c.path),o=Nn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===ke.MERGE){const c=t;c.source.fromUser?o=cd(n,e,c.path,c.children,s,i,r):(g(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ys(n,e,c.path,c.children,s,i,l,r))}else if(t.type===ke.ACK_USER_WRITE){const c=t;c.revert?o=dd(n,e,c.path,s,i,r):o=ud(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ke.LISTEN_COMPLETE)o=hd(n,e,t.path,s,r);else throw wt("Unknown operation type: "+t.type);const a=r.getChanges();return ad(e,o,a),{viewCache:o,changes:a}}function ad(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Sn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(To(Sn(e)))}}function Lo(n,e,t,s,i,r){const o=e.eventCache;if(kn(s,t)!=null)return e;{let l,a;if(k(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=lt(e),u=c instanceof y?c:y.EMPTY_NODE,h=Ws(s,u);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Tn(s,lt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=R(t);if(c===".priority"){g(je(t)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=tr(s,t,u,a);h!=null?l=n.filter.updatePriority(u,h):l=o.getNode()}else{const u=B(t);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=tr(s,t,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=zs(s,c,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Mt(e,l,o.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function Nn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(k(t))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(t,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=R(t);if(!a.isCompleteForPath(t)&&je(t)>1)return e;const f=B(t),b=a.getNode().getImmediateChild(_).updateChild(f,s);_===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),_,b,f,Mo,null)}const h=Ro(e,c,a.isFullyInitialized()||k(t),u.filtersNodes()),d=new Us(i,h,r);return Lo(n,h,t,i,d,l)}function vs(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const u=new Us(i,e,r);if(k(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Mt(e,c,!0,n.filter.filtersNodes());else{const h=R(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=Mt(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=B(t),_=l.getNode().getImmediateChild(h);let f;if(k(d))f=s;else{const p=u.getCompleteChild(h);p!=null?go(d)===".priority"&&p.getChild(bo(d)).isEmpty()?f=p:f=p.updateChild(d,s):f=y.EMPTY_NODE}if(_.equals(f))a=e;else{const p=n.filter.updateChild(l.getNode(),h,f,d,u,o);a=Mt(e,p,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function nr(n,e){return n.eventCache.isCompleteForChild(e)}function cd(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=J(t,a);nr(e,R(u))&&(l=vs(n,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=J(t,a);nr(e,R(u))||(l=vs(n,l,u,c,i,r,o))}),l}function sr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ys(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;k(t)?c=s:c=new U(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),f=sr(n,_,d);a=Nn(n,a,new O(h),f,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const f=e.serverCache.getNode().getImmediateChild(h),p=sr(n,f,d);a=Nn(n,a,new O(h),p,i,r,o,l)}}),a}function ud(n,e,t,s,i,r,o){if(kn(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(k(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Nn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(k(t)){let c=new U(null);return a.getNode().forEachChild(pt,(u,h)=>{c=c.set(new O(u),h)}),ys(n,e,t,c,i,r,l,o)}else return e}else{let c=new U(null);return s.foreach((u,h)=>{const d=J(t,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),ys(n,e,t,c,i,r,l,o)}}function hd(n,e,t,s,i){const r=e.serverCache,o=Ro(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return Lo(n,o,t,s,Mo,i)}function dd(n,e,t,s,i,r){let o;if(kn(s,t)!=null)return e;{const l=new Us(s,e,i),a=e.eventCache.getNode();let c;if(k(t)||R(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Tn(s,lt(e));else{const h=e.serverCache.getNode();g(h instanceof y,"serverChildren would be complete if leaf node"),u=Ws(s,h)}u=u,c=n.filter.updateFullNode(a,u,r)}else{const u=R(t);let h=zs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=n.filter.updateChild(a,u,h,B(t),l,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(a,u,y.EMPTY_NODE,B(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tn(s,lt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||kn(s,x())!=null,Mt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ms(s.getIndex()),r=xh(s);this.processor_=rd(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,l.getNode(),null),u=new qe(a,o.isFullyInitialized(),i.filtersNodes()),h=new qe(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ln(h,u),this.eventGenerator_=new Wh(this.query_)}get query(){return this.query_}}function _d(n){return n.viewCache_.serverCache.getNode()}function pd(n){return Sn(n.viewCache_)}function gd(n,e){const t=lt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(R(e)).isEmpty())?t.getChild(e):null}function ir(n){return n.eventRegistrations_.length===0}function md(n,e){n.eventRegistrations_.push(e)}function rr(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function or(n,e,t,s){e.type===ke.MERGE&&e.source.queryId!==null&&(g(lt(n.viewCache_),"We should always have a full cache before handling merges"),g(Sn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ld(n.processor_,i,e,t,s);return od(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Fo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function bd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(vt(r,o))}),t.isFullyInitialized()&&s.push(To(t.getNode())),Fo(n,s,t.getNode(),e)}function Fo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return zh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class Bo{constructor(){this.views=new Map}}function vd(n){g(!Rn,"__referenceConstructor has already been defined"),Rn=n}function yd(){return g(Rn,"Reference.ts has not been loaded"),Rn}function Cd(n){return n.views.size===0}function Vs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),or(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(or(o,e,t,s));return r}}function Wo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Tn(t,i?s:null),a=!1;l?a=!0:s instanceof y?(l=Ws(t,s),a=!1):(l=y.EMPTY_NODE,a=!1);const c=Ln(new qe(l,a,!1),new qe(s,i,!1));return new fd(e,c)}return o}function wd(n,e,t,s,i,r){const o=Wo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),md(o,t),bd(o,t)}function Ed(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ye(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(rr(c,t,s)),ir(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(rr(a,t,s)),ir(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ye(n)&&r.push(new(yd())(e._repo,e._path)),{removed:r,events:o}}function zo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ge(n,e){let t=null;for(const s of n.views.values())t=t||gd(s,e);return t}function Uo(n,e){if(e._queryParams.loadsAllData())return Bn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Vo(n,e){return Uo(n,e)!=null}function Ye(n){return Bn(n)!=null}function Bn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An;function Id(n){g(!An,"__referenceConstructor has already been defined"),An=n}function Sd(){return g(An,"Reference.ts has not been loaded"),An}let Td=1;class lr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new U(null),this.pendingWriteTree_=td(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kd(n,e,t,s,i){return Gh(n.pendingWriteTree_,e,t,s,i),i?nn(n,new ot(No(),e,t)):[]}function dt(n,e,t=!1){const s=jh(n.pendingWriteTree_,e);if(qh(n.pendingWriteTree_,e)){let r=new U(null);return s.snap!=null?r=r.set(x(),!0):ge(s.children,o=>{r=r.set(new O(o),!0)}),nn(n,new In(s.path,r,t))}else return[]}function tn(n,e,t){return nn(n,new ot(Fs(),e,t))}function Nd(n,e,t){const s=U.fromObject(t);return nn(n,new qt(Fs(),e,s))}function Rd(n,e){return nn(n,new jt(Fs(),e))}function Ad(n,e,t){const s=Hs(n,t);if(s){const i=Gs(s),r=i.path,o=i.queryId,l=ue(r,e),a=new jt(Bs(o),l);return js(n,r,a)}else return[]}function Ho(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Vo(o,e))){const a=Ed(o,e,t,s);Cd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,_)=>Ye(_));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Od(d);for(let f=0;f<_.length;++f){const p=_[f],b=p.query,E=Ko(n,p);n.listenProvider_.startListening(Ft(b),Yt(n,b),E.hashFn,E.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Ft(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(Wn(d));n.listenProvider_.stopListening(Ft(d),_)}))}Md(n,c)}return l}function Go(n,e,t,s){const i=Hs(n,s);if(i!=null){const r=Gs(i),o=r.path,l=r.queryId,a=ue(o,e),c=new ot(Bs(l),a,t);return js(n,o,c)}else return[]}function Pd(n,e,t,s){const i=Hs(n,s);if(i){const r=Gs(i),o=r.path,l=r.queryId,a=ue(o,e),c=U.fromObject(t),u=new qt(Bs(l),a,c);return js(n,o,u)}else return[]}function xd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const f=ue(d,i);r=r||Ge(_,f),o=o||Ye(_)});let l=n.syncPointTree_.get(i);l?(o=o||Ye(l),r=r||Ge(l,x())):(l=new Bo,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,f)=>{const p=Ge(f,x());p&&(r=r.updateImmediateChild(_,p))}));const c=Vo(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Wn(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Ld();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const u=Fn(n.pendingWriteTree_,i);let h=wd(l,e,t,u,r,a);if(!c&&!o&&!s){const d=Uo(l,e);h=h.concat(Fd(n,e,d))}return h}function jo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=ue(o,e),c=Ge(l,a);if(c)return c});return xo(i,e,r,t,!0)}function Dd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=ue(c,t);s=s||Ge(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Ge(i,x()):(i=new Bo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new qe(s,!0,!1):null,l=Fn(n.pendingWriteTree_,e._path),a=Wo(i,e,l,r?o.getNode():y.EMPTY_NODE,r);return pd(a)}function nn(n,e){return qo(e,n.syncPointTree_,null,Fn(n.pendingWriteTree_,x()))}function qo(n,e,t,s){if(k(n.path))return Yo(n,e,t,s);{const i=e.get(x());t==null&&i!=null&&(t=Ge(i,x()));let r=[];const o=R(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,u=Do(s,o);r=r.concat(qo(l,a,c,u))}return i&&(r=r.concat(Vs(i,n,s,t))),r}}function Yo(n,e,t,s){const i=e.get(x());t==null&&i!=null&&(t=Ge(i,x()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Do(s,o),u=n.operationForChild(o);u&&(r=r.concat(Yo(u,l,a,c)))}),i&&(r=r.concat(Vs(i,n,s,t))),r}function Ko(n,e){const t=e.query,s=Yt(n,t);return{hashFn:()=>(_d(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ad(n,t._path,s):Rd(n,t._path);{const r=Pu(i,t);return Ho(n,t,null,r)}}}}function Yt(n,e){const t=Wn(e);return n.queryToTagMap.get(t)}function Wn(n){return n._path.toString()+"$"+n._queryIdentifier}function Hs(n,e){return n.tagToQueryMap.get(e)}function Gs(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new O(n.substr(0,e))}}function js(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=Fn(n.pendingWriteTree_,e);return Vs(s,t,i,null)}function Od(n){return n.fold((e,t,s)=>{if(t&&Ye(t))return[Bn(t)];{let i=[];return t&&(i=zo(t)),ge(s,(r,o)=>{i=i.concat(o)}),i}})}function Ft(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sd())(n._repo,n._path):n}function Md(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Wn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ld(){return Td++}function Fd(n,e,t){const s=e._path,i=Yt(n,e),r=Ko(n,t),o=n.listenProvider_.startListening(Ft(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)g(!Ye(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!k(c)&&u&&Ye(u))return[Bn(u).query];{let d=[];return u&&(d=d.concat(zo(u).map(_=>_.query))),ge(h,(_,f)=>{d=d.concat(f)}),d}});for(let c=0;c<a.length;++c){const u=a[c];n.listenProvider_.stopListening(Ft(u),Yt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qs(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=J(this.path_,e);return new Ys(this.syncTree_,t)}node(){return jo(this.syncTree_,this.path_)}}const Bd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ar=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Wd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return zd(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Wd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},zd=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ud=function(n,e,t,s){return Ks(e,new Ys(t,n),s)},Vd=function(n,e,t){return Ks(n,new qs(e),t)};function Ks(n,e,t){const s=n.getPriority().val(),i=ar(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=ar(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new Z(l,te(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Z(i))),o.forEachChild(Y,(l,a)=>{const c=Ks(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Xs(n,e){let t=e instanceof O?e:new O(e),s=n,i=R(t);for(;i!==null;){const r=mt(s.node.children,i)||{children:{},childCount:0};s=new Qs(i,s,r),t=B(t),i=R(t)}return s}function It(n){return n.node.value}function Qo(n,e){n.node.value=e,Cs(n)}function Xo(n){return n.node.childCount>0}function Hd(n){return It(n)===void 0&&!Xo(n)}function zn(n,e){ge(n.node.children,(t,s)=>{e(new Qs(t,n,s))})}function $o(n,e,t,s){t&&!s&&e(n),zn(n,i=>{$o(i,e,!0,s)}),t&&s&&e(n)}function Gd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sn(n){return new O(n.parent===null?n.name:sn(n.parent)+"/"+n.name)}function Cs(n){n.parent!==null&&jd(n.parent,n.name,n)}function jd(n,e,t){const s=Hd(t),i=Fe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Cs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Cs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/[\[\].#$\/\u0000-\u001F\u007F]/,Yd=/[\[\].#$\u0000-\u001F\u007F]/,ts=10*1024*1024,Jo=function(n){return typeof n=="string"&&n.length!==0&&!qd.test(n)},Zo=function(n){return typeof n=="string"&&n.length!==0&&!Yd.test(n)},Kd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zo(n)},el=function(n,e,t){const s=t instanceof O?new uh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tt(s));if(typeof e=="function")throw new Error(n+"contains a function "+tt(s)+" with contents = "+e.toString());if(Kr(e))throw new Error(n+"contains "+e.toString()+" "+tt(s));if(typeof e=="string"&&e.length>ts/3&&On(e)>ts)throw new Error(n+"contains a string greater than "+ts+" utf8 bytes "+tt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ge(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jo(o)))throw new Error(n+" contains an invalid key ("+o+") "+tt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hh(s,o),el(n,l,s),dh(s)}),i&&r)throw new Error(n+' contains ".value" child '+tt(s)+" in addition to actual children.")}},tl=function(n,e,t,s){if(!Zo(t))throw new Error(Br(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tl(n,e,t)},Xd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Kd(t))throw new Error(Br(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jd(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!vo(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ze(n,e,t){Jd(n,t),Zd(n,s=>Te(s,e)||Te(e,s))}function Zd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(ef(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ef(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Dt&&le("event: "+t.toString()),Zt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="repo_interrupt",nf=25;class sf{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $d,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=En(),this.transactionQueueTree_=new Qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rf(n,e,t){if(n.stats_=Ps(n.repoInfo_),n.forceRestClient_||Mu())n.server_=new wn(n.repoInfo_,(s,i,r,o)=>{cr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ur(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{cr(n,s,i,r,o)},s=>{ur(n,s)},s=>{lf(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=zu(n.repoInfo_,()=>new Bh(n.stats_,n.server_)),n.infoData_=new Dh,n.infoSyncTree_=new lr({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=tn(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$s(n,"connected",!1),n.serverSyncTree_=new lr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Ze(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function of(n){const t=n.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function nl(n){return Bd({timestamp:of(n)})}function cr(n,e,t,s,i){n.dataUpdateCount++;const r=new O(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=gn(t,c=>te(c));o=Pd(n.serverSyncTree_,r,a,i)}else{const a=te(t);o=Go(n.serverSyncTree_,r,a,i)}else if(s){const a=gn(t,c=>te(c));o=Nd(n.serverSyncTree_,r,a)}else{const a=te(t);o=tn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ei(n,r)),Ze(n.eventQueue_,l,o)}function ur(n,e){$s(n,"connected",e),e===!1&&uf(n)}function lf(n,e){ge(e,(t,s)=>{$s(n,t,s)})}function $s(n,e,t){const s=new O("/.info/"+e),i=te(t);n.infoData_.updateSnapshot(s,i);const r=tn(n.infoSyncTree_,s,i);Ze(n.eventQueue_,s,r)}function af(n){return n.nextWriteId_++}function cf(n,e,t){const s=Dd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=te(i).withIndex(e._queryParams.getIndex());xd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=tn(n.serverSyncTree_,e._path,r);else{const l=Yt(n.serverSyncTree_,e);o=Go(n.serverSyncTree_,e._path,r,l)}return Ze(n.eventQueue_,e._path,o),Ho(n.serverSyncTree_,e,t,null,!0),r},i=>(Js(n,"get for query "+$(e)+" failed: "+i),Promise.reject(new Error(i))))}function uf(n){Js(n,"onDisconnectEvents");const e=nl(n),t=En();gs(n.onDisconnect_,x(),(i,r)=>{const o=Ud(i,r,n.serverSyncTree_,e);ko(t,i,o)});let s=[];gs(t,x(),(i,r)=>{s=s.concat(tn(n.serverSyncTree_,i,r));const o=_f(n,i);ei(n,o)}),n.onDisconnect_=En(),Ze(n.eventQueue_,x(),s)}function hf(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tf)}function Js(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),le(t,...e)}function sl(n,e,t){return jo(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function Zs(n,e=n.transactionQueueTree_){if(e||Un(n,e),It(e)){const t=rl(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&df(n,sn(e),t)}else Xo(e)&&zn(e,t=>{Zs(n,t)})}function df(n,e,t){const s=t.map(c=>c.currentWriteId),i=sl(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ue(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Js(n,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(dt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Un(n,Xs(n.transactionQueueTree_,e)),Zs(n,n.transactionQueueTree_),Ze(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Zt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{be("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}ei(n,e)}},o)}function ei(n,e){const t=il(n,e),s=sn(t),i=rl(n,t);return ff(n,i,s),s}function ff(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ue(t,a.path);let u=!1,h;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=nf)u=!0,h="maxretry",i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0));else{const d=sl(n,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){el("transaction failed: Data returned ",_,a.path);let f=te(_);typeof _=="object"&&_!=null&&Fe(_,".priority")||(f=f.updatePriority(d.getPriority()));const b=a.currentWriteId,E=nl(n),M=Vd(f,d,E);a.currentOutputSnapshotRaw=f,a.currentOutputSnapshotResolved=M,a.currentWriteId=af(n),o.splice(o.indexOf(b),1),i=i.concat(kd(n.serverSyncTree_,a.path,M,a.currentWriteId,a.applyLocally)),i=i.concat(dt(n.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(dt(n.serverSyncTree_,a.currentWriteId,!0))}Ze(n.eventQueue_,t,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Un(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Zt(s[l]);Zs(n,n.transactionQueueTree_)}function il(n,e){let t,s=n.transactionQueueTree_;for(t=R(e);t!==null&&It(s)===void 0;)s=Xs(s,t),e=B(e),t=R(e);return s}function rl(n,e){const t=[];return ol(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ol(n,e,t){const s=It(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);zn(e,i=>{ol(n,i,t)})}function Un(n,e){const t=It(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Qo(e,t.length>0?t:void 0)}zn(e,s=>{Un(n,s)})}function _f(n,e){const t=sn(il(n,e)),s=Xs(n.transactionQueueTree_,e);return Gd(s,i=>{ns(n,i)}),ns(n,s),$o(s,i=>{ns(n,i)}),t}function ns(n,e){const t=It(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(dt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qo(e,void 0):t.length=r+1,Ze(n.eventQueue_,sn(e),i);for(let o=0;o<s.length;o++)Zt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):be(`Invalid query segment '${t}' in query '${n}'`)}return e}const hr=function(n,e){const t=mf(n),s=t.namespace;t.domain==="firebase.com"&&Me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new oo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new O(t.pathString)}},mf=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=pf(n.substring(u,h)));const d=gf(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const f=e.indexOf(".");s=e.substring(0,f).toLowerCase(),t=e.substring(f+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class vf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ti{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return k(this._path)?null:go(this._path)}get ref(){return new Be(this._repo,this._path)}get _queryIdentifier(){const e=Xi(this._queryParams),t=Rs(e);return t==="{}"?"default":t}get _queryObject(){return Xi(this._queryParams)}isEqual(e){if(e=Xt(e),!(e instanceof ti))return!1;const t=this._repo===e._repo,s=vo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ch(this._path)}}class Be extends ti{constructor(e,t){super(e,t,new Ls,!1)}get parent(){const e=bo(this._path);return e===null?null:new Be(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new O(e),s=ws(this.ref,e);return new Kt(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kt(i,ws(this.ref,s),Y)))}hasChild(e){const t=new O(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cf(n,e){return n=Xt(n),n._checkNotDeleted("ref"),n._root}function ws(n,e){return n=Xt(n),R(n._path)===null?Qd("child","path",e):tl("child","path",e),new Be(n._repo,J(n._path,e))}function wf(n){n=Xt(n);const e=new yf(()=>{}),t=new ni(e);return cf(n._repo,n,t).then(s=>new Kt(s,new Be(n._repo,n._path),n._queryParams.getIndex()))}class ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new bf("value",this,new Kt(e.snapshotNode,new Be(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vf(this,e,t):null}matches(e){return e instanceof ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}vd(Be);Id(Be);/**
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
 */const Ef="FIREBASE_DATABASE_EMULATOR_HOST",Es={};let If=!1;function Sf(n,e,t,s){n.repoInfo_=new oo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Tf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),le("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=hr(r,i),l=o.repoInfo,a;typeof process<"u"&&xi&&(a=xi[Ef]),a?(r=`http://${a}?ns=${l.namespace}`,o=hr(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new Fu(n.name,n.options,e);Xd("Invalid Firebase Database URL",o),k(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Nf(l,n,c,new Lu(n.name,t));return new Rf(u,n)}function kf(n,e){const t=Es[e];(!t||t[n.key]!==n)&&Me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),hf(n),delete t[n.key]}function Nf(n,e,t,s){let i=Es[e.name];i||(i={},Es[e.name]=i);let r=i[n.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sf(n,If,t,s),i[n.toURLString()]=r,r}class Rf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Be(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function Af(n=au(),e){const t=iu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qa("database");s&&Pf(t,...s)}return t}function Pf(n,e,t,s={}){n=Xt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fn(fn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Xa(s.mockUserToken,n.app.options.projectId);r=new fn(o)}Sf(i,e,t,r)}/**
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
 */function xf(n){yu(lu),bn(new Wt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Tf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ft(Di,Oi,n),ft(Di,Oi,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xf();function dr(n,e,t){const s=n.slice();return s[4]=e[t],s}function fr(n){let e,t=n[4].text+"",s,i;return{c(){e=V("option"),s=ye(t),this.h()},l(r){e=H(r,"OPTION",{});var o=N(e);s=Ce(o,t),o.forEach(m),this.h()},h(){e.__value=i=n[4].value,ui(e,e.__value)},m(r,o){w(r,e,o),D(e,s)},p(r,o){o&4&&t!==(t=r[4].text+"")&&Le(s,t),o&4&&i!==(i=r[4].value)&&(e.__value=i,ui(e,e.__value))},d(r){r&&m(e)}}}function Df(n){let e,t,s,i=_n(n[2]),r=[];for(let o=0;o<i.length;o+=1)r[o]=fr(dr(n,i,o));return{c(){e=V("select");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=H(o,"SELECT",{name:!0,id:!0,class:!0});var l=N(e);for(let a=0;a<r.length;a+=1)r[a].l(l);l.forEach(m),this.h()},h(){v(e,"name","classe"),v(e,"id","classe"),v(e,"class","custom_select w-full p-4 mb-5 rounded-md bg-white cursor-pointer appearance-none bg-no-repeat focus:outline-none border-none svelte-12i34vl"),n[0]===void 0&&ul(()=>n[3].call(e))},m(o,l){w(o,e,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);ci(e,n[0],!0),t||(s=[j(e,"change",n[3]),j(e,"change",function(){mr(n[1])&&n[1].apply(this,arguments)})],t=!0)},p(o,[l]){if(n=o,l&4){i=_n(n[2]);let a;for(a=0;a<i.length;a+=1){const c=dr(n,i,a);r[a]?r[a].p(c,l):(r[a]=fr(c),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}l&5&&ci(e,n[0])},i:oe,o:oe,d(o){o&&m(e),vr(r,o),t=!1,Pn(s)}}}function Of(n,e,t){let{value:s}=e,{on_change:i}=e,{options:r}=e;function o(){s=fl(this),t(0,s),t(2,r)}return n.$$set=l=>{"value"in l&&t(0,s=l.value),"on_change"in l&&t(1,i=l.on_change),"options"in l&&t(2,r=l.options)},[s,i,r,o]}class _r extends Ee{constructor(e){super(),Ie(this,e,Of,Df,we,{value:0,on_change:1,options:2})}}function Mf(n){let e,t;return{c(){e=V("label"),t=ye(n[0]),this.h()},l(s){e=H(s,"LABEL",{class:!0,for:!0});var i=N(e);t=Ce(i,n[0]),i.forEach(m),this.h()},h(){v(e,"class","block mb-2.5 font-bold"),v(e,"for",n[1])},m(s,i){w(s,e,i),D(e,t)},p(s,[i]){i&1&&Le(t,s[0]),i&2&&v(e,"for",s[1])},i:oe,o:oe,d(s){s&&m(e)}}}function Lf(n,e,t){let{text:s}=e,{parent:i}=e;return n.$$set=r=>{"text"in r&&t(0,s=r.text),"parent"in r&&t(1,i=r.parent)},[s,i]}class pr extends Ee{constructor(e){super(),Ie(this,e,Lf,Mf,we,{text:0,parent:1})}}function gr(n){let e,t=`Classifica generale di tutti gli studenti di informatica non relativa a
        classe o materia scolastica`;return{c(){e=V("p"),e.textContent=t,this.h()},l(s){e=H(s,"P",{class:!0,"data-svelte-h":!0}),br(e)!=="svelte-1vcu4f2"&&(e.textContent=t),this.h()},h(){v(e,"class","paragraph svelte-it1jb3")},m(s,i){w(s,e,i)},d(s){s&&m(e)}}}function Ff(n){let e,t,s,i,r,o,l,a,c,u,h,d,_,f,p,b;s=new pr({props:{parent:"select-class",text:"Seleziona la classe:"}});function E(I){n[7](I)}let M={options:n[4],on_change:n[6]};n[1]!==void 0&&(M.value=n[1]),r=new _r({props:M}),li.push(()=>hi(r,"value",E)),c=new pr({props:{parent:"select-subject",text:"Seleziona la materia:"}});function W(I){n[9](I)}let q={options:n[5],on_change:n[8]};n[2]!==void 0&&(q.value=n[2]),h=new _r({props:q}),li.push(()=>hi(h,"value",W));let L=n[2]==="all"&&gr();return p=new Wa({props:{items:n[0]}}),{c(){e=V("div"),t=V("div"),ne(s.$$.fragment),i=he(),ne(r.$$.fragment),l=he(),a=V("div"),ne(c.$$.fragment),u=he(),ne(h.$$.fragment),_=he(),L&&L.c(),f=he(),ne(p.$$.fragment),this.h()},l(I){e=H(I,"DIV",{class:!0});var Q=N(e);t=H(Q,"DIV",{});var me=N(t);se(s.$$.fragment,me),i=de(me),se(r.$$.fragment,me),me.forEach(m),l=de(Q),a=H(Q,"DIV",{});var C=N(a);se(c.$$.fragment,C),u=de(C),se(h.$$.fragment,C),C.forEach(m),Q.forEach(m),_=de(I),L&&L.l(I),f=de(I),se(p.$$.fragment,I),this.h()},h(){v(e,"class","select-container flex justify-between max-w-screen-sm rounded-xl m-auto p-5 bg-slate-50  svelte-it1jb3")},m(I,Q){w(I,e,Q),D(e,t),ie(s,t,null),D(t,i),ie(r,t,null),D(e,l),D(e,a),ie(c,a,null),D(a,u),ie(h,a,null),w(I,_,Q),L&&L.m(I,Q),w(I,f,Q),ie(p,I,Q),b=!0},p(I,[Q]){const me={};Q&6&&(me.on_change=I[6]),!o&&Q&2&&(o=!0,me.value=I[1],ai(()=>o=!1)),r.$set(me);const C={};Q&6&&(C.on_change=I[8]),!d&&Q&4&&(d=!0,C.value=I[2],ai(()=>d=!1)),h.$set(C),I[2]==="all"?L||(L=gr(),L.c(),L.m(f.parentNode,f)):L&&(L.d(1),L=null);const ct={};Q&1&&(ct.items=I[0]),p.$set(ct)},i(I){b||(A(s.$$.fragment,I),A(r.$$.fragment,I),A(c.$$.fragment,I),A(h.$$.fragment,I),A(p.$$.fragment,I),b=!0)},o(I){P(s.$$.fragment,I),P(r.$$.fragment,I),P(c.$$.fragment,I),P(h.$$.fragment,I),P(p.$$.fragment,I),b=!1},d(I){I&&(m(e),m(_),m(f)),re(s),re(r),re(c),re(h),L&&L.d(I),re(p,I)}}}function Bf(n,e,t){Vr({apiKey:"AIzaSyBv2SwNbM94fs7et1ts6aClTXreO5a6zDM",authDomain:"lambsoffame.firebaseapp.com",databaseURL:"https://lambsoffame-default-rtdb.europe-west1.firebasedatabase.app",projectId:"lambsoffame",storageBucket:"lambsoffame.appspot.com",messagingSenderId:"583547239362",appId:"1:583547239362:web:eda69c76496ccc9cbd345b"});const i=async()=>{const E=Cf(Af());return(await wf(ws(E,"leaderboard/"))).val()},r=E=>{let M=Object.values(u.TPSI).concat(Object.values(u.reti),Object.values(u.informatica)).filter(W=>W.class==E);t(0,l=Array.from(new Set(M.map(W=>W.username))).map(W=>M.filter(q=>q.username===W)).map(W=>({username:W[0].username,avatar:W[0].avatar,class:W[0].class,points:W.reduce((q,L)=>q+L.points,0)})).sort((W,q)=>q.points-W.points))},o=async(E,M)=>{switch(E){case"sum-subjects":r(M);break;case"all":t(0,l=Object.values(u.generale).sort((q,L)=>L.points-q.points));break;default:let W=u[`${E}`];t(0,l=Object.values(W).sort((q,L)=>L.points-q.points).filter(q=>q.class==M));break}};hl(async()=>{u=await i(),o("TPSI",3)});let l=[],a,c,u={};const h=[{value:3,text:"3 INFO"},{value:4,text:"4 INFO"},{value:5,text:"5 INFO"}],d=[{value:"TPSI",text:"TPSI"},{value:"informatica",text:"Informatica"},{value:"reti",text:"Sistemi e Reti"},{value:"sub-subjects",text:"Totale materie"},{value:"all",text:"Generale"}],_=()=>o(c,a);function f(E){a=E,t(1,a)}const p=()=>o(c,a);function b(E){c=E,t(2,c)}return[l,a,c,o,h,d,_,f,p,b]}class Vf extends Ee{constructor(e){super(),Ie(this,e,Bf,Ff,we,{})}}export{Vf as component};
