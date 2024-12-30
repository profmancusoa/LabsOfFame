import{s as ys,n as R,r as jn,o as Es,f as Ut}from"../chunks/scheduler.B_icLcTO.js";import{S as ks,i as Ss,e as f,s as b,b as Te,c as p,d as v,y as je,h as P,g as _,f as ye,o as u,j as Qe,k as d,z as be,A as J,l as Mt,B as gt,C as bs}from"../chunks/index.CmRns2Hh.js";import{L as Ps,g as Wn,i as Rs,a as As,_ as vn,C as In,r as wn,b as Cs,S as Ze,c as de,d as Ke,E as jt,e as Ns,f as zn,h as B,F as Wt,j as Os,k as Gn,l as Ls,m as Ds,q as et,n as Us,o as Ms,p as Vs,s as Vt,t as Ft,u as Tn,v as Fs,w as qs,x as xs,y as Hs,z as js,A as Ws,B as zs,D as Gs,G as Bs,H as Ks,I as $s}from"../chunks/index.esm2017.CGn04Fuk.js";function zt(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Bn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Js=Bn,Kn=new jt("auth","Firebase",Bn());/**
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
 */const mt=new Ps("@firebase/auth");function Ys(n,...e){mt.logLevel<=zn.WARN&&mt.warn(`Auth (${Ze}): ${n}`,...e)}function dt(n,...e){mt.logLevel<=zn.ERROR&&mt.error(`Auth (${Ze}): ${n}`,...e)}/**
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
 */function oe(n,...e){throw Bt(n,...e)}function ne(n,...e){return Bt(n,...e)}function Gt(n,e,t){const s=Object.assign(Object.assign({},Js()),{[e]:t});return new jt("auth","Firebase",s).create(e,{appName:n.name})}function Ne(n){return Gt(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xs(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&oe(n,"argument-error"),Gt(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bt(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Kn.create(n,...e)}function g(n,e,...t){if(!n)throw Bt(e,...t)}function he(n){const e="INTERNAL ASSERTION FAILED: "+n;throw dt(e),new Error(e)}function ge(n,e){n||he(e)}/**
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
 */function qt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Qs(){return yn()==="http:"||yn()==="https:"}function yn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Zs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qs()||Cs()||"connection"in navigator)?navigator.onLine:!0}function ei(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class tt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ge(t>e,"Short delay should be less than long delay!"),this.isMobile=Rs()||As()}get(){return Zs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kt(n,e){ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $n{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ti={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ni=new tt(3e4,6e4);function $t(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $e(n,e,t,s,i={}){return Jn(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=et(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),$n.fetch()(Yn(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Jn(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},ti),e);try{const i=new ii(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ut(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ut(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ut(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ut(n,"user-disabled",o);const m=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gt(n,m,h);oe(n,m)}}catch(i){if(i instanceof Wt)throw i;oe(n,"network-request-failed",{message:String(i)})}}async function si(n,e,t,s,i={}){const r=await $e(n,e,t,s,i);return"mfaPendingCredential"in r&&oe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Yn(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Kt(n.config,i):`${n.config.apiScheme}://${i}`}class ii{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ne(this.auth,"network-request-failed")),ni.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ut(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ne(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function ri(n,e){return $e(n,"POST","/v1/accounts:delete",e)}async function Xn(n,e){return $e(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ye(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oi(n,e=!1){const t=Ke(n),s=await t.getIdToken(e),i=Jt(s);g(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ye(Lt(i.auth_time)),issuedAtTime:Ye(Lt(i.iat)),expirationTime:Ye(Lt(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Lt(n){return Number(n)*1e3}function Jt(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Os(t);return i?JSON.parse(i):(dt("Failed to decode base64 JWT payload"),null)}catch(i){return dt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function En(n){const e=Jt(n);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xe(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Wt&&ai(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ai({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ci{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _t(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Xe(n,Xn(t,{idToken:s}));g(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qn(r.providerUserInfo):[],a=ui(n.providerData,o),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),m=c?h:!1,I={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xt(r.createdAt,r.lastLoginAt),isAnonymous:m};Object.assign(n,I)}async function li(n){const e=Ke(n);await _t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ui(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Qn(n){return n.map(e=>{var{providerId:t}=e,s=zt(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function di(n,e){const t=await Jn(n,{},async()=>{const s=et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Yn(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$n.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hi(n,e){return $e(n,"POST","/v2/accounts:revokeToken",$t(n,e))}/**
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
 */class We{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):En(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){g(e.length!==0,"internal-error");const t=En(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await di(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new We;return s&&(g(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(g(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(g(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new We,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function we(n,e){g(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fe{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ci(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xe(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oi(this,e)}reload(){return li(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _t(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await Xe(this,ri(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,h,m;const I=(s=t.displayName)!==null&&s!==void 0?s:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,A=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,H=(o=t.photoURL)!==null&&o!==void 0?o:void 0,U=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,w=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:q,emailVerified:x,isAnonymous:C,providerData:k,stsTokenManager:j}=t;g(q&&j,e,"internal-error");const X=We.fromJSON(this.name,j);g(typeof q=="string",e,"internal-error"),we(I,e.name),we(E,e.name),g(typeof x=="boolean",e,"internal-error"),g(typeof C=="boolean",e,"internal-error"),we(A,e.name),we(H,e.name),we(U,e.name),we(O,e.name),we(w,e.name),we(K,e.name);const N=new fe({uid:q,auth:e,email:E,emailVerified:x,displayName:I,isAnonymous:C,photoURL:H,phoneNumber:A,tenantId:U,stsTokenManager:X,createdAt:w,lastLoginAt:K});return k&&Array.isArray(k)&&(N.providerData=k.map(W=>Object.assign({},W))),O&&(N._redirectEventId=O),N}static async _fromIdTokenResponse(e,t,s=!1){const i=new We;i.updateFromServerResponse(t);const r=new fe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _t(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];g(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Qn(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new We;a.updateFromIdToken(s);const c=new fe({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new xt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,h),c}}/**
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
 */const kn=new Map;function pe(n){ge(n instanceof Function,"Expected a class definition");let e=kn.get(n);return e?(ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kn.set(n,e),e)}/**
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
 */class Zn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zn.type="NONE";const Sn=Zn;/**
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
 */function ht(n,e,t){return`firebase:${n}:${e}:${t}`}class ze{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,r),this.fullPersistenceKey=ht("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ze(pe(Sn),e,s);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=i[0]||pe(Sn);const o=ht(s,e.config.apiKey,e.name);let a=null;for(const h of t)try{const m=await h._get(o);if(m){const I=fe._fromJSON(e,m);h!==r&&(a=I),r=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ze(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new ze(r,e,s))}}/**
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
 */function bn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ns(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(es(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(is(e))return"Blackberry";if(rs(e))return"Webos";if(Yt(e))return"Safari";if((e.includes("chrome/")||ts(e))&&!e.includes("edge/"))return"Chrome";if(ss(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function es(n=B()){return/firefox\//i.test(n)}function Yt(n=B()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ts(n=B()){return/crios\//i.test(n)}function ns(n=B()){return/iemobile/i.test(n)}function ss(n=B()){return/android/i.test(n)}function is(n=B()){return/blackberry/i.test(n)}function rs(n=B()){return/webos/i.test(n)}function Tt(n=B()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fi(n=B()){var e;return Tt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pi(){return Ms()&&document.documentMode===10}function os(n=B()){return Tt(n)||ss(n)||rs(n)||is(n)||/windows phone/i.test(n)||ns(n)}function gi(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function as(n,e=[]){let t;switch(n){case"Browser":t=bn(B());break;case"Worker":t=`${bn(B())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ze}/${s}`}/**
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
 */class mi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function _i(n,e={}){return $e(n,"GET","/v2/passwordPolicy",$t(n,e))}/**
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
 */const vi=6;class Ii{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vi,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class wi{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pn(this),this.idTokenSubscription=new Pn(this),this.beforeStateQueue=new mi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xn(this,{idToken:e}),s=await fe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(de(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _t(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ei()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(Ne(this));const t=e?Ke(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _i(this),t=new Ii(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hi(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pe(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ys(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yt(n){return Ke(n)}class Pn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ns(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ti(n){Xt=n}function yi(n){return Xt.loadJS(n)}function Ei(){return Xt.gapiScript}function ki(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Si(n,e){const t=Gn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Us(r,e??{}))return i;oe(i,"already-initialized")}return t.initialize({options:e})}function bi(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Pi(n,e,t){const s=yt(n);g(s._canInitEmulator,s,"emulator-config-failed"),g(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=cs(e),{host:o,port:a}=Ri(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ai()}function cs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ri(n){const e=cs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Rn(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Rn(o)}}}function Rn(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ai(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ls{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,t){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function Ge(n,e){return si(n,"POST","/v1/accounts:signInWithIdp",$t(n,e))}/**
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
 */const Ci="http://localhost";class Oe extends ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=zt(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Oe(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ge(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ge(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ge(e,t)}buildRequest(){const e={requestUri:Ci,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=et(t)}return e}}/**
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
 */class Qt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nt extends Qt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ee extends nt{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
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
 */class ue extends nt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oe._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ue.credential(t,s)}catch{return null}}}ue.GOOGLE_SIGN_IN_METHOD="google.com";ue.PROVIDER_ID="google.com";/**
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
 */class ke extends nt{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com";ke.PROVIDER_ID="github.com";/**
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
 */class Se extends nt{constructor(){super("twitter.com")}static credential(e,t){return Oe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Se.credential(t,s)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
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
 */class Be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await fe._fromIdTokenResponse(e,s,i),o=An(s);return new Be({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=An(s);return new Be({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function An(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class vt extends Wt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,vt.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new vt(e,t,s,i)}}function us(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?vt._fromErrorAndOperation(n,r,e,s):r})}async function Ni(n,e,t=!1){const s=await Xe(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Be._forOperation(n,"link",s)}/**
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
 */async function Oi(n,e,t=!1){const{auth:s}=n;if(de(s.app))return Promise.reject(Ne(s));const i="reauthenticate";try{const r=await Xe(n,us(s,i,e,n),t);g(r.idToken,s,"internal-error");const o=Jt(r.idToken);g(o,s,"internal-error");const{sub:a}=o;return g(n.uid===a,s,"user-mismatch"),Be._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&oe(s,"user-mismatch"),r}}/**
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
 */async function Li(n,e,t=!1){if(de(n.app))return Promise.reject(Ne(n));const s="signIn",i=await us(n,s,e),r=await Be._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Di(n,e,t,s){return Ke(n).onIdTokenChanged(e,t,s)}function Ui(n,e,t){return Ke(n).beforeAuthStateChanged(e,t)}const It="__sak";/**
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
 */class ds{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mi(){const n=B();return Yt(n)||Tt(n)}const Vi=1e3,Fi=10;class hs extends ds{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mi()&&gi(),this.fallbackToPolling=os(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);pi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fi):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Vi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hs.type="LOCAL";const qi=hs;/**
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
 */class fs extends ds{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fs.type="SESSION";const ps=fs;/**
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
 */function xi(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Et(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async h=>h(t.origin,r)),c=await xi(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Et.receivers=[];/**
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
 */function Zt(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const h=Zt("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(I){const E=I;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(E.data.response);break;default:clearTimeout(m),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function re(){return window}function ji(n){re().location.href=n}/**
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
 */function gs(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Wi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gi(){return gs()?self:null}/**
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
 */const ms="firebaseLocalStorageDb",Bi=1,wt="firebaseLocalStorage",_s="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kt(n,e){return n.transaction([wt],e?"readwrite":"readonly").objectStore(wt)}function Ki(){const n=indexedDB.deleteDatabase(ms);return new st(n).toPromise()}function Ht(){const n=indexedDB.open(ms,Bi);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(wt,{keyPath:_s})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(wt)?e(s):(s.close(),await Ki(),e(await Ht()))})})}async function Cn(n,e,t){const s=kt(n,!0).put({[_s]:e,value:t});return new st(s).toPromise()}async function $i(n,e){const t=kt(n,!1).get(e),s=await new st(t).toPromise();return s===void 0?null:s.value}function Nn(n,e){const t=kt(n,!0).delete(e);return new st(t).toPromise()}const Ji=800,Yi=3;class vs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ht(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Yi)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(Gi()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wi(),!this.activeServiceWorker)return;this.sender=new Hi(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ht();return await Cn(e,It,"1"),await Nn(e,It),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cn(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>$i(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=kt(i,!1).getAll();return new st(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ji)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vs.type="LOCAL";const Xi=vs;new tt(3e4,6e4);/**
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
 */function Is(n,e){return e?pe(e):(g(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class en extends ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qi(n){return Li(n.auth,new en(n),n.bypassAuthState)}function Zi(n){const{auth:e,user:t}=n;return g(t,e,"internal-error"),Oi(t,new en(n),n.bypassAuthState)}async function er(n){const{auth:e,user:t}=n;return g(t,e,"internal-error"),Ni(t,new en(n),n.bypassAuthState)}/**
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
 */class ws{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qi;case"linkViaPopup":case"linkViaRedirect":return er;case"reauthViaPopup":case"reauthViaRedirect":return Zi;default:oe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tr=new tt(2e3,1e4);async function nr(n,e,t){if(de(n.app))return Promise.reject(ne(n,"operation-not-supported-in-this-environment"));const s=yt(n);Xs(n,e,Qt);const i=Is(s,t);return new Ce(s,"signInViaPopup",e,i).executeNotNull()}class Ce extends ws{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ce.currentPopupAction&&Ce.currentPopupAction.cancel(),Ce.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=Zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ce.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tr.get())};e()}}Ce.currentPopupAction=null;/**
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
 */const sr="pendingRedirect",ft=new Map;class ir extends ws{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ft.get(this.auth._key());if(!e){try{const s=await rr(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ft.set(this.auth._key(),e)}return this.bypassAuthState||ft.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rr(n,e){const t=cr(e),s=ar(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function or(n,e){ft.set(n._key(),e)}function ar(n){return pe(n._redirectPersistence)}function cr(n){return ht(sr,n.config.apiKey,n.name)}async function lr(n,e,t=!1){if(de(n.app))return Promise.reject(Ne(n));const s=yt(n),i=Is(s,e),o=await new ir(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ur=10*60*1e3;class dr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ts(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ne(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ur&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ts({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hr(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ts(n);default:return!1}}/**
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
 */async function fr(n,e={}){return $e(n,"GET","/v1/projects",e)}/**
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
 */const pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gr=/^https?/;async function mr(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fr(n);for(const t of e)try{if(_r(t))return}catch{}oe(n,"unauthorized-domain")}function _r(n){const e=qt(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!gr.test(t))return!1;if(pr.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const vr=new tt(3e4,6e4);function Ln(){const n=re().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ir(n){return new Promise((e,t)=>{var s,i,r;function o(){Ln(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ln(),t(ne(n,"network-request-failed"))},timeout:vr.get()})}if(!((i=(s=re().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=re().gapi)===null||r===void 0)&&r.load)o();else{const a=ki("iframefcb");return re()[a]=()=>{gapi.load?o():t(ne(n,"network-request-failed"))},yi(`${Ei()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw pt=null,e})}let pt=null;function wr(n){return pt=pt||Ir(n),pt}/**
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
 */const Tr=new tt(5e3,15e3),yr="__/auth/iframe",Er="emulator/auth/iframe",kr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function br(n){const e=n.config;g(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kt(e,Er):`https://${n.config.authDomain}/${yr}`,s={apiKey:e.apiKey,appName:n.name,v:Ze},i=Sr.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${et(s).slice(1)}`}async function Pr(n){const e=await wr(n),t=re().gapi;return g(t,n,"internal-error"),e.open({where:document.body,url:br(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ne(n,"network-request-failed"),a=re().setTimeout(()=>{r(o)},Tr.get());function c(){re().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Rr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ar=500,Cr=600,Nr="_blank",Or="http://localhost";class Dn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lr(n,e,t,s=Ar,i=Cr){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rr),{width:s.toString(),height:i.toString(),top:r,left:o}),h=B().toLowerCase();t&&(a=ts(h)?Nr:t),es(h)&&(e=e||Or,c.scrollbars="yes");const m=Object.entries(c).reduce((E,[A,H])=>`${E}${A}=${H},`,"");if(fi(h)&&a!=="_self")return Dr(e||"",a),new Dn(null);const I=window.open(e||"",a,m);g(I,n,"popup-blocked");try{I.focus()}catch{}return new Dn(I)}function Dr(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Ur="__/auth/handler",Mr="emulator/auth/handler",Vr=encodeURIComponent("fac");async function Un(n,e,t,s,i,r){g(n.config.authDomain,n,"auth-domain-config-required"),g(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ze,eventId:i};if(e instanceof Qt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,I]of Object.entries({}))o[m]=I}if(e instanceof nt){const m=e.getScopes().filter(I=>I!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const c=await n._getAppCheckToken(),h=c?`#${Vr}=${encodeURIComponent(c)}`:"";return`${Fr(n)}?${et(a).slice(1)}${h}`}function Fr({config:n}){return n.emulator?Kt(n,Mr):`https://${n.authDomain}/${Ur}`}/**
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
 */const Dt="webStorageSupport";class qr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ps,this._completeRedirectFn=lr,this._overrideRedirectResult=or}async _openPopup(e,t,s,i){var r;ge((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Un(e,t,s,qt(),i);return Lr(e,o,Zt())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Un(e,t,s,qt(),i);return ji(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ge(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Pr(e),s=new dr(e);return t.register("authEvent",i=>(g(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dt,{type:Dt},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Dt];o!==void 0&&t(!!o),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return os()||Yt()||Tt()}}const xr=qr;var Mn="@firebase/auth",Vn="1.7.5";/**
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
 */class Hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jr(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wr(n){vn(new In("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(n)},h=new wi(s,i,r,c);return bi(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),vn(new In("auth-internal",e=>{const t=yt(e.getProvider("auth").getImmediate());return(s=>new Hr(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Mn,Vn,jr(n)),wn(Mn,Vn,"esm2017")}/**
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
 */const zr=5*60,Gr=Wn("authIdTokenMaxAge")||zr;let Fn=null;const Br=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Gr)return;const i=t==null?void 0:t.token;Fn!==i&&(Fn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(n=Ds()){const e=Gn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Si(n,{popupRedirectResolver:xr,persistence:[Xi,qi,ps]}),s=Wn("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Br(r.toString());Ui(t,o,()=>o(t.currentUser)),Di(t,a=>o(a))}}const i=Ls("auth");return i&&Pi(t,`http://${i}`),t}function $r(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ti({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ne("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",$r().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wr("Browser");function qn(n,e,t){const s=n.slice();return s[28]=e[t],s[29]=e,s[30]=t,s}function xn(n){let e,t,s;return{c(){e=f("input"),this.h()},l(i){e=p(i,"INPUT",{id:!0,type:!0,class:!0}),this.h()},h(){u(e,"id","submit"),u(e,"type","button"),e.value="Assegna Punti",u(e,"class","svelte-1opegqg")},m(i,r){Qe(i,e,r),t||(s=J(e,"click",n[15]),t=!0)},p:R,d(i){i&&_(e),t=!1,s()}}}function Jr(n){return{c:R,l:R,m:R,d:R}}function Yr(n){let e,t;return{c(){e=f("img"),this.h()},l(s){e=p(s,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){u(e,"class","rounded-full"),Ut(e.src,t=n[31])||u(e,"src",t),u(e,"width","40"),u(e,"height","40"),u(e,"alt","dummy")},m(s,i){Qe(s,e,i)},d(s){s&&_(e)}}}function Xr(n){return{c:R,l:R,m:R,d:R}}function Qr(n){return{c:R,l:R,m:R,p:R,d:R}}function Zr(n){let e,t,s;return{c(){e=f("img"),this.h()},l(i){e=p(i,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){u(e,"class","rounded-full"),Ut(e.src,t=n[31])||u(e,"src",t),u(e,"width","40"),u(e,"height","40"),u(e,"alt",s=n[28])},m(i,r){Qe(i,e,r)},p(i,r){r[0]&2&&!Ut(e.src,t=i[31])&&u(e,"src",t),r[0]&2&&s!==(s=i[28])&&u(e,"alt",s)},d(i){i&&_(e)}}}function eo(n){return{c:R,l:R,m:R,p:R,d:R}}function Hn(n){let e,t,s,i,r,o,a,c=n[28]+"",h,m,I,E,A,H,U,O,w,K,q,x,C,k,j,X,N,W,L={ctx:n,current:null,token:null,hasCatch:!1,pending:eo,then:Zr,catch:Qr,value:31};Vt(r=Ft(n[28]),L);function Pe(){n[18].call(w,n[30])}function Y(){n[19].call(k,n[30])}return{c(){e=f("tr"),t=f("td"),s=f("div"),i=f("div"),L.block.c(),o=b(),a=f("div"),h=Te(c),m=b(),I=f("td"),E=f("div"),A=Te(n[2]),H=b(),U=f("td"),O=f("div"),w=f("input"),q=b(),x=f("td"),C=f("div"),k=f("input"),X=b(),this.h()},l($){e=p($,"TR",{});var l=v(e);t=p(l,"TD",{class:!0});var T=v(t);s=p(T,"DIV",{class:!0});var D=v(s);i=p(D,"DIV",{class:!0});var me=v(i);L.block.l(me),me.forEach(_),o=P(D),a=p(D,"DIV",{class:!0});var ae=v(a);h=ye(ae,c),ae.forEach(_),D.forEach(_),T.forEach(_),m=P(l),I=p(l,"TD",{class:!0});var _e=v(I);E=p(_e,"DIV",{class:!0});var ce=v(E);A=ye(ce,n[2]),ce.forEach(_),_e.forEach(_),H=P(l),U=p(l,"TD",{class:!0});var Q=v(U);O=p(Q,"DIV",{class:!0});var Z=v(O);w=p(Z,"INPUT",{type:!0,placeholder:!0,class:!0}),Z.forEach(_),Q.forEach(_),q=P(l),x=p(l,"TD",{class:!0});var se=v(x);C=p(se,"DIV",{class:!0});var Je=v(C);k=p(Je,"INPUT",{type:!0,placeholder:!0,class:!0}),Je.forEach(_),se.forEach(_),X=P(l),l.forEach(_),this.h()},h(){u(i,"class","w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"),u(a,"class","font-medium text-gray-800"),u(s,"class","flex items-center"),u(t,"class","p-2 whitespace-nowrap"),u(E,"class","text-left"),u(I,"class","p-2 whitespace-nowrap"),u(w,"type","number"),u(w,"placeholder","0"),w.disabled=K=n[1].length==0||n[2]=="NONE",u(w,"class","svelte-1opegqg"),u(O,"class","text-left font-medium text-green-500"),u(U,"class","p-2 whitespace-nowrap"),u(k,"type","text"),u(k,"placeholder",""),k.disabled=j=n[1].length==0||n[2]=="NONE",u(k,"class","svelte-1opegqg"),u(C,"class","text-lg text-center"),u(x,"class","p-2 whitespace-nowrap")},m($,l){Qe($,e,l),d(e,t),d(t,s),d(s,i),L.block.m(i,L.anchor=null),L.mount=()=>i,L.anchor=null,d(s,o),d(s,a),d(a,h),d(e,m),d(e,I),d(I,E),d(E,A),d(e,H),d(e,U),d(U,O),d(O,w),be(w,n[3][n[30]+1].points),d(e,q),d(e,x),d(x,C),d(C,k),be(k,n[3][n[30]+1].comment),d(e,X),N||(W=[J(w,"input",Pe),J(k,"input",Y)],N=!0)},p($,l){n=$,L.ctx=n,l[0]&2&&r!==(r=Ft(n[28]))&&Vt(r,L)||xs(L,n,l),l[0]&2&&c!==(c=n[28]+"")&&Mt(h,c),l[0]&4&&Mt(A,n[2]),l[0]&6&&K!==(K=n[1].length==0||n[2]=="NONE")&&(w.disabled=K),l[0]&8&&gt(w.value)!==n[3][n[30]+1].points&&be(w,n[3][n[30]+1].points),l[0]&6&&j!==(j=n[1].length==0||n[2]=="NONE")&&(k.disabled=j),l[0]&8&&k.value!==n[3][n[30]+1].comment&&be(k,n[3][n[30]+1].comment)},d($){$&&_(e),L.block.d(),L.token=null,L=null,N=!1,jn(W)}}}function to(n){let e,t,s,i="Close",r,o,a="OK, operazione conclusa correttamente!!!",c,h,m,I="Seleziona una Classe",E,A,H,U,O,w,K,q,x,C,k,j,X,N,W,L="Seleziona una Materia",Pe,Y,$,l,T,D,me,ae,_e,ce,Q,Z,se,Je='<tr><th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Studente</div></th> <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Materia</div></th> <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Punti</div></th> <th class="p-2 whitespace-nowrap"><div class="font-semibold text-center">Commento</div></th></tr>',St,le,ee,Le,ve,Re,bt,Ae,tn="TUTTI",Pt,De,Ue,it,Rt,Me,Ve,z,rt,At,Fe,qe,G,ot,Ct,Nt,nn,F=n[1].length>0&&n[2]!="NONE"&&xn(n),ie={ctx:n,current:null,token:null,hasCatch:!1,pending:Xr,then:Yr,catch:Jr,value:31};Vt(Ft("dummy"),ie);let xe=Tn(n[1]),M=[];for(let V=0;V<xe.length;V+=1)M[V]=Hn(qn(n,xe,V));return{c(){e=f("main"),t=f("dialog"),s=f("button"),s.textContent=i,r=b(),o=f("p"),o.textContent=a,c=b(),h=f("div"),m=f("div"),m.textContent=I,E=b(),A=f("div"),H=Te("3 INFO"),O=b(),w=f("div"),K=Te("4 INFO"),x=b(),C=f("div"),k=Te("5 INFO"),X=b(),N=f("div"),W=f("div"),W.textContent=L,Pe=b(),Y=f("div"),$=Te("TPSI"),T=b(),D=f("div"),me=Te("RETI"),_e=b(),F&&F.c(),ce=b(),Q=f("div"),Z=f("table"),se=f("thead"),se.innerHTML=Je,St=b(),le=f("tbody"),ee=f("tr"),Le=f("td"),ve=f("div"),Re=f("div"),ie.block.c(),bt=b(),Ae=f("div"),Ae.textContent=tn,Pt=b(),De=f("td"),Ue=f("div"),it=Te(n[2]),Rt=b(),Me=f("td"),Ve=f("div"),z=f("input"),At=b(),Fe=f("td"),qe=f("div"),G=f("input"),Ct=b();for(let V=0;V<M.length;V+=1)M[V].c();this.h()},l(V){e=p(V,"MAIN",{class:!0});var y=v(e);t=p(y,"DIALOG",{id:!0,class:!0});var S=v(t);s=p(S,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),je(s)!=="svelte-1eidiir"&&(s.textContent=i),r=P(S),o=p(S,"P",{"data-svelte-h":!0}),je(o)!=="svelte-19ilara"&&(o.textContent=a),S.forEach(_),c=P(y),h=p(y,"DIV",{class:!0});var te=v(h);m=p(te,"DIV",{class:!0,"data-svelte-h":!0}),je(m)!=="svelte-1lomfd3"&&(m.textContent=I),E=P(te),A=p(te,"DIV",{class:!0});var sn=v(A);H=ye(sn,"3 INFO"),sn.forEach(_),O=P(te),w=p(te,"DIV",{class:!0});var rn=v(w);K=ye(rn,"4 INFO"),rn.forEach(_),x=P(te),C=p(te,"DIV",{class:!0});var on=v(C);k=ye(on,"5 INFO"),on.forEach(_),te.forEach(_),X=P(y),N=p(y,"DIV",{class:!0});var He=v(N);W=p(He,"DIV",{class:!0,"data-svelte-h":!0}),je(W)!=="svelte-1hy1xpb"&&(W.textContent=L),Pe=P(He),Y=p(He,"DIV",{class:!0});var an=v(Y);$=ye(an,"TPSI"),an.forEach(_),T=P(He),D=p(He,"DIV",{class:!0});var cn=v(D);me=ye(cn,"RETI"),cn.forEach(_),He.forEach(_),_e=P(y),F&&F.l(y),ce=P(y),Q=p(y,"DIV",{class:!0});var ln=v(Q);Z=p(ln,"TABLE",{class:!0});var at=v(Z);se=p(at,"THEAD",{class:!0,"data-svelte-h":!0}),je(se)!=="svelte-zt2vju"&&(se.innerHTML=Je),St=P(at),le=p(at,"TBODY",{class:!0});var ct=v(le);ee=p(ct,"TR",{});var Ie=v(ee);Le=p(Ie,"TD",{class:!0});var un=v(Le);ve=p(un,"DIV",{class:!0});var lt=v(ve);Re=p(lt,"DIV",{class:!0});var dn=v(Re);ie.block.l(dn),dn.forEach(_),bt=P(lt),Ae=p(lt,"DIV",{class:!0,"data-svelte-h":!0}),je(Ae)!=="svelte-1s9bbg4"&&(Ae.textContent=tn),lt.forEach(_),un.forEach(_),Pt=P(Ie),De=p(Ie,"TD",{class:!0});var hn=v(De);Ue=p(hn,"DIV",{class:!0});var fn=v(Ue);it=ye(fn,n[2]),fn.forEach(_),hn.forEach(_),Rt=P(Ie),Me=p(Ie,"TD",{class:!0});var pn=v(Me);Ve=p(pn,"DIV",{class:!0});var gn=v(Ve);z=p(gn,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),gn.forEach(_),pn.forEach(_),At=P(Ie),Fe=p(Ie,"TD",{class:!0});var mn=v(Fe);qe=p(mn,"DIV",{class:!0});var _n=v(qe);G=p(_n,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),_n.forEach(_),mn.forEach(_),Ie.forEach(_),Ct=P(ct);for(let Ot=0;Ot<M.length;Ot+=1)M[Ot].l(ct);ct.forEach(_),at.forEach(_),ln.forEach(_),y.forEach(_),this.h()},h(){u(s,"id","modale_button"),s.autofocus=!0,u(s,"class","svelte-1opegqg"),u(t,"id","modale"),u(t,"class","svelte-1opegqg"),u(m,"class","etichetta svelte-1opegqg"),u(A,"class",U="classe "+(n[0]==3?"selected":"unselected")+" svelte-1opegqg"),u(w,"class",q="classe "+(n[0]==4?"selected":"unselected")+" svelte-1opegqg"),u(C,"class",j="classe "+(n[0]==5?"selected":"unselected")+" svelte-1opegqg"),u(h,"class","classi svelte-1opegqg"),u(W,"class","etichetta svelte-1opegqg"),u(Y,"class",l="materia "+(n[2]=="TPSI"?"selected":"unselected")+" svelte-1opegqg"),u(D,"class",ae="materia "+(n[2]=="RETI"?"selected":"unselected")+" svelte-1opegqg"),u(N,"class","materie svelte-1opegqg"),u(se,"class","text-xs font-semibold uppercase text-gray-400 bg-gray-50"),u(Re,"class","w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"),u(Ae,"class","font-medium text-gray-800"),u(ve,"class","flex items-center"),u(Le,"class","p-2 whitespace-nowrap"),u(Ue,"class","text-left"),u(De,"class","p-2 whitespace-nowrap"),u(z,"id","tutti_punti"),u(z,"type","number"),u(z,"placeholder","0"),z.disabled=rt=n[1].length==0||n[2]=="NONE",u(z,"class","svelte-1opegqg"),u(Ve,"class","text-left font-medium text-green-500"),u(Me,"class","p-2 whitespace-nowrap"),u(G,"id","tutti_commento"),u(G,"type","text"),u(G,"placeholder",""),G.disabled=ot=n[1].length==0||n[2]=="NONE",u(G,"class","svelte-1opegqg"),u(qe,"class","text-lg text-center"),u(Fe,"class","p-2 whitespace-nowrap"),u(le,"class","text-sm divide-y divide-gray-200"),u(Z,"class","table-auto w-full"),u(Q,"class","tabella svelte-1opegqg"),u(e,"class","svelte-1opegqg")},m(V,y){Qe(V,e,y),d(e,t),d(t,s),d(t,r),d(t,o),d(e,c),d(e,h),d(h,m),d(h,E),d(h,A),d(A,H),d(h,O),d(h,w),d(w,K),d(h,x),d(h,C),d(C,k),d(e,X),d(e,N),d(N,W),d(N,Pe),d(N,Y),d(Y,$),d(N,T),d(N,D),d(D,me),d(e,_e),F&&F.m(e,null),d(e,ce),d(e,Q),d(Q,Z),d(Z,se),d(Z,St),d(Z,le),d(le,ee),d(ee,Le),d(Le,ve),d(ve,Re),ie.block.m(Re,ie.anchor=null),ie.mount=()=>Re,ie.anchor=null,d(ve,bt),d(ve,Ae),d(ee,Pt),d(ee,De),d(De,Ue),d(Ue,it),d(ee,Rt),d(ee,Me),d(Me,Ve),d(Ve,z),be(z,n[3][0].points),d(ee,At),d(ee,Fe),d(Fe,qe),d(qe,G),be(G,n[3][0].comment),d(le,Ct);for(let S=0;S<M.length;S+=1)M[S]&&M[S].m(le,null);s.focus(),Nt||(nn=[J(s,"click",n[9]),J(A,"click",n[10]),J(w,"click",n[11]),J(C,"click",n[12]),J(Y,"click",n[13]),J(D,"click",n[14]),J(z,"change",n[6]),J(z,"input",n[16]),J(G,"change",n[7]),J(G,"input",n[17])],Nt=!0)},p(V,y){if(n=V,y[0]&1&&U!==(U="classe "+(n[0]==3?"selected":"unselected")+" svelte-1opegqg")&&u(A,"class",U),y[0]&1&&q!==(q="classe "+(n[0]==4?"selected":"unselected")+" svelte-1opegqg")&&u(w,"class",q),y[0]&1&&j!==(j="classe "+(n[0]==5?"selected":"unselected")+" svelte-1opegqg")&&u(C,"class",j),y[0]&4&&l!==(l="materia "+(n[2]=="TPSI"?"selected":"unselected")+" svelte-1opegqg")&&u(Y,"class",l),y[0]&4&&ae!==(ae="materia "+(n[2]=="RETI"?"selected":"unselected")+" svelte-1opegqg")&&u(D,"class",ae),n[1].length>0&&n[2]!="NONE"?F?F.p(n,y):(F=xn(n),F.c(),F.m(e,ce)):F&&(F.d(1),F=null),y[0]&4&&Mt(it,n[2]),y[0]&6&&rt!==(rt=n[1].length==0||n[2]=="NONE")&&(z.disabled=rt),y[0]&8&&gt(z.value)!==n[3][0].points&&be(z,n[3][0].points),y[0]&6&&ot!==(ot=n[1].length==0||n[2]=="NONE")&&(G.disabled=ot),y[0]&8&&G.value!==n[3][0].comment&&be(G,n[3][0].comment),y[0]&14){xe=Tn(n[1]);let S;for(S=0;S<xe.length;S+=1){const te=qn(n,xe,S);M[S]?M[S].p(te,y):(M[S]=Hn(te),M[S].c(),M[S].m(le,null))}for(;S<M.length;S+=1)M[S].d(1);M.length=xe.length}},i:R,o:R,d(V){V&&_(e),F&&F.d(),ie.block.d(),ie.token=null,ie=null,bs(M,V),Nt=!1,jn(nn)}}}function no(n,e,t){let s,i,r=[],o="NONE",a=[{student:"TUTTI",points:0,comment:""}];const c=Fs(zs),h=qs(c),m=Kr(),I=async()=>{const l=new ue;try{const D=(await nr(m,l)).user;return console.log("Utente autenticato:",D.uid),D}catch(T){console.log(T)}},E=()=>{let l=new Date,T=l.getFullYear(),D=String(l.getMonth()+1).padStart(2,"0"),me=String(l.getDate()).padStart(2,"0"),ae=String(l.getHours()).padStart(2,"0"),_e=String(l.getMinutes()).padStart(2,"0"),ce=String(l.getSeconds()).padStart(2,"0"),Q=String(l.getMilliseconds()).padStart(3,"0");return`${T}_${D}_${me}_${ae}:${_e}:${ce}.${Q}`},A=l=>Number(l[0])>6?`${l[1]}-${String(Number(l[1])+1)}`:`${String(Number(l[1])-1)}-${l[1]}`,H=async l=>{try{const T=Gs(Bs(h,"leaderboard","toQuery","queries"),`${l.username}_${l.subject}_${E()}`);return await Ks(T,{username:l.username,subject:l.subject,as:A(new Date().toLocaleString("it-IT").split(",")[0].split("/").slice(1)),quadrimestre:$s(),time_stamp:E(),points:l.points,class:l.class,comment:l.comment}),console.log(`Query con ${l.username} aggiunta correttamente`),`Query con ${l.username} aggiunta correttamente`}catch(T){return console.log(T),T}},U=async()=>{for(let l of a)l.student!="TUTTI"&&l.points>0&&await H({username:l.student,subject:o,points:l.points,class:i,comment:l.comment});s.showModal()},O=l=>{switch(l){case 3:t(1,r=[...Ws]);break;case 4:t(1,r=[...js]);break;case 5:t(1,r=[...Hs]);break}t(0,i=l),t(3,a=[{student:"TUTTI",points:0,comment:""}]),r.forEach(T=>{a.push({student:T,points:0,comment:""})})},w=()=>{let l=a[0].points;for(let T=1;T<a.length;T++)t(3,a[T].points=l,a)},K=()=>{let l=a[0].comment;for(let T=1;T<a.length;T++)t(3,a[T].comment=l,a)},q=()=>{s.close();for(let l=0;l<a.length;l++)t(3,a[l].points=0,a),t(3,a[l].comment="",a)};Es(async()=>{await I(),s=document.getElementById("modale")});const x=()=>q(),C=()=>O(3),k=()=>O(4),j=()=>O(5),X=()=>t(2,o="TPSI"),N=()=>t(2,o="RETI"),W=()=>{U()};function L(){a[0].points=gt(this.value),t(3,a)}function Pe(){a[0].comment=this.value,t(3,a)}function Y(l){a[l+1].points=gt(this.value),t(3,a)}function $(l){a[l+1].comment=this.value,t(3,a)}return[i,r,o,a,U,O,w,K,q,x,C,k,j,X,N,W,L,Pe,Y,$]}class oo extends ks{constructor(e){super(),Ss(this,e,no,to,ys,{},null,[-1,-1])}}export{oo as component};
