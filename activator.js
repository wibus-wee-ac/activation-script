"use strict";function e(e){return"object"==typeof e?JSON.stringify(e):e}function t(e){try{return JSON.parse(e)}catch(t){return e}}function s(e){const t=e.split("?")[1],s={};if(t){const e=t.split("&");for(const t of e){const[e,a]=t.split("=");s[e]=a}}return s}function a(e){if(!e.includes("?"))return{path:e,params:{}};const[t]=e.split("?");return{url:t,params:s(e),raw:e}}const n=["get","put","delete","head","options","patch","post"],r={};for(const e of n)r[e]=(t,s)=>{$httpClient[e](t,s)};const o={};for(const e of n)o[e]=t=>new Promise(((s,a)=>{r[e](t,((e,t,n)=>{e?a(e):s({status:t.status,headers:t.headers,data:n})}))}));function i(t){return t.body&&(t.body=e(t.body)),{response:{...t}}}function c(t){var s;return t.body&&(t.body=e(t.body)),(null===(s=t.response)||void 0===s?void 0:s.body)&&(t.response.body=e(t.response.body)),{...t}}const u={"401934ec-0a54-433c-a299-2a363501d4be":154474,"f3c67e87-8e95-474d-ace6-5bf28b86dd97":121974,"ca3120ca-f2f7-4d8b-89ec-76effe34431b":221204},l={"64fd88be-79c0-4167-8078-680ddef8cbc5":9273},d={id:"47596ad9-a811-4ebf-ac8a-03fc7b6d2a17",name:"Wibus Wee",created_at:(new Date).toISOString()};function p(e){const t=u[e]||0,s=l[e]||1;return{license_key:{id:1,status:"active",key:e,activation_limit:1,activation_usage:0,created_at:(new Date).toISOString(),expires_at:null},meta:{store_id:s,order_id:2,order_item_id:3,variant_id:5,variant_name:"Default",product_id:t,product_name:"Lemon Squeezy",customer_id:1,customer_name:"Wibus Wee",customer_email:"luke@skywalker.com"}}}function f(){const e=t($request.body);return(null==e?void 0:e.license_key)||(null==e?void 0:e.licenseKey)||a($request.url).params.license_key||a($request.url).params.licenseKey||""}function b(){return $request.headers["x-raycast-unblock"]?(console.log("Raycast Unblock request"),c({headers:{...$request.headers,"x-raycast-unblock":void 0}})):c({url:$request.url.replace("https://backend.raycast.com","http://127.0.0.1:3000"),headers:$request.headers,body:$request.body})}const y={dashboard:{base:"http://as.as",customs:[{base:"test",func:async()=>{console.log("Test");const e=await o.get({url:"https://baidu.com"});return i({body:{status:e.status,headers:e.headers,data:"Test Success!"}})}},{base:"",func:()=>i({status:200,body:"Dashboard"})}]},lemonSqueezy:{base:"https://api.lemonsqueezy.com/v1/licenses",activate:function(){const e=f();return i({body:{activated:!0,instance:d,...p(e),error:null}})},validate:function(){const e=f();return i({body:{valid:!0,error:null,instance:d,...p(e)}})},customs:[{base:"deactivate",func:function(){return i({body:{deactivated:!0,error:null,...p(f())}})}}]},paddle:{base:"https://v3.paddleapi.com/3.2/license",activate:function(){const e=$request.body;if(!e)return i({headers:{"Content-Type":"application/json; charset=UTF-8"},body:{success:!1,response:{error:"[Surge] Activator: No body found"}}});const t=e.split("&");let s="";for(const e of t)e.includes("product_id")&&(s=e.split("=")[1]);return i({headers:{"Content-Type":"application/json"},body:{success:!0,response:{product_id:s,activation_id:"@wibus-wee",type:"activate",expires:1,expiry_date:1999999999999},signature:""}})},validate:{base:"verify",func:function(){return i({body:{success:!0,response:{type:"personal",expires:1,expiry_date:1999999999999},signature:""}})}}},gumroad:{base:"https://api.gumroad.com/v2/licenses",validate:{base:"verify",func:function(){console.log($request);const e=$request.url,t=$request.body;let a=s(e);return 0===Object.keys(a).length&&(a=s(`${$request.url}?${t}`)),i({headers:{"Content-Type":"application/json; charset=utf-8"},body:{success:!0,uses:1,purchase:{seller_id:"123",product_id:a.product_permalink,product_name:a.product_permalink,permalink:a.product_permalink,product_permalink:a.product_permalink,email:"wibus@qq.com",price:100,gumroad_fee:0,currency:"usd",quantity:1,discover_fee_charged:!1,can_contact:!1,referrer:"none",order_number:1234,sale_id:"1",sale_timestamp:"2099-07-16T19:00:00Z",license_key:a.license_key,refunded:!1,disputed:!1,dispute_won:!1,id:"1234",created_at:"2023-07-16T19:00:00Z"}}})}}},itunes:{base:"https://buy.itunes.apple.com",customs:[{base:"verifyReceipt",func:function(){return i({body:{status:0,receipt:{in_app:[{expires_date_ms:40960188e5,expires_date:"2100-01-01T00:00:00Z"}]}}})}}]},raycast:{base:"https://backend.raycast.com/api/v1",activate:{base:"me",func:function(){return function(){const e=JSON.parse($response.body);return c({headers:{...$response.headers},body:{...e,has_active_subscription:!0,has_pro_features:!0,has_better_ai:!0,eligible_for_pro_features:!0,eligible_for_ai:!0,eligible_for_gpt4:!0,eligible_for_ai_citations:!0,eligible_for_developer_hub:!0,eligible_for_application_settings:!0,publishing_bot:!0,can_upgrade_to_pro:!1,admin:!0}})}()},type:"http-response"},customs:[{base:"translations",func:async function(){var e;const s=t($request.body),a={text:s.q,source_lang:s.source||"auto",target_lang:s.target},n={jsonrpc:"2.0",method:"LMT_handle_texts",id:1e3*Math.floor(1e5*Math.random()+1e5),params:{texts:[{text:"",requestAlternatives:3}],timestamp:0,splitting:"newlines",lang:{source_lang_user_selected:a.source_lang.toUpperCase(),target_lang:null===(e=a.target_lang)||void 0===e?void 0:e.toUpperCase()}}};n.params.texts=[{text:a.text,requestAlternatives:3}],n.params.timestamp=function(e){const t=(new Date).getTime();return 0!==e?t-t%(e+1)+(e+1):t}((a.text||"").split("i").length-1);let r=JSON.stringify(n);r=[0,3].includes((n.id+5)%29)||(n.id+3)%13==0?r.replace('"method":"','"method" : "'):r.replace('"method":"','"method": "');return i({headers:{"Content-Type":"application/json; charset=utf-8"},body:{data:{translations:[{translatedText:(await o.post({url:"https://www2.deepl.com/jsonrpc",headers:{"Content-Type":"application/json; charset=utf-8"},body:r}).then((e=>{var s,n,r,o,i,c;const u=t(e.data),{result:l}=u;return{code:200,message:"success",data:null===(n=null===(s=null==l?void 0:l.texts)||void 0===s?void 0:s[0])||void 0===n?void 0:n.text,source_lang:(null==a?void 0:a.source_lang)||(null==l?void 0:l.lang)||"auto",target_lang:(null==a?void 0:a.target_lang)||"en",alternatives:null===(c=null===(i=null===(o=null===(r=l.texts)||void 0===r?void 0:r[0])||void 0===o?void 0:o.alternatives)||void 0===i?void 0:i.map)||void 0===c?void 0:c.call(i,(e=>e.text))}})).catch((e=>({code:500,data:null,message:e})))).data||""}]}}})}},{base:"me/trial_status",func:function(){const e=$request.body||"{}",t=JSON.parse(e);return t.organizations=[],t.trial_limits={commands_limit:999,quicklinks_limit:999,snippets_limit:999},i({body:t})}},{base:"me/sync",func:b},{base:"ai/models",func:b},{base:"ai/chat_completions",func:b}]},shottr:{base:["https://shottr.cc"],validate:{base:"licensing/verify.php",func:function(){return i({body:{hash:t($request.body).hash,tier:"1"}})}},customs:[{base:"api/telemetry.php",func:function(){return i({body:{result:"success"}})}}]},locafe:{base:"https://lo.cafe/api",customs:[{base:"notchnook-verify-key",func:function(){return i({body:{valid:!0}})}}]},kerlig:{base:"https://b.kerlig.local/api/v1",customs:[{base:"license",func:function(){return i({headers:{status:"200"}})}}]}},m=$request.url.split("?")[0];function _(e,t,s=!0){if(Array.isArray(t)){for(const a of t)if(_(e,a,s))return!0;return!1}return e=e.replace(/\/$/,""),t.includes("*")&&(s=!1),t=t.replace("*","").replace(/\/$/,""),!(!s||e!==t)||!(s||!e.includes(t))}async function h(){async function e(e){if("object"==typeof e){e.base=e.base.replace(/\/$/,"");const t=await async function(e){return(_(m,e.base)||m.replace(/\/$/,"")===e.base.replace(/\/$/,""))&&await e.func()}(e);if(t)return t}}console.log(`[activator] ${m}`);for(const t in y){const s=y[t];if(_(m,s.base,!1)){console.log(`[activator] ${m} is matched`);for(const t in s){const a=s[t];if("base"===t)continue;if("object"==typeof a&&Array.isArray(a)){for(const t of a){const a=await e({...t,base:`${s.base}/${t.base.replace(/^\//,"")}`});if(a)return console.log(`[activator] Handle customs: ${t.base}`),a}continue}if("object"==typeof a&&!Array.isArray(a)){const n=await e({...a,base:`${s.base}/${a.base.replace(/^\//,"")}`});if(n)return console.log(`[activator] Handle ${t}: ${a.base}`),n;continue}const n="string"==typeof s.base?s.base:s.base.find((e=>_(m,e,!1)));if(console.log(`[activator] ${m} | ${n} | ${t}`),_(m,`${n}/${t}`)){if("function"==typeof a)return console.log(`[activator] Handle ${t}`),await a();if("string"==typeof a)return i({body:a})}}}}return console.log(`[activator] ${m} is not matched`),c({})}const g=new class{constructor(){this.start=Date.now()}startTimer(){this.start=Date.now()}endTimer(){this.end=Date.now()}getDuration(){return this.end?this.end-this.start:Date.now()-this.start}getDurationInSeconds(){return this.getDuration()/1e3}};g.startTimer(),console.log("===== Activator Script Handler ====="),console.log(`===== Author: @wibus-wee | Version: 1.3.0 | Commit: ${"e406c02504a44803c8436357364d9b73689f4ebc".slice(0,7)||"main"} =====`),(async()=>{$done(await h().catch((e=>(console.log(`Error -> ${e}`),i({status:500,body:{msg:"Activation Script Error. Please check the logs for more details.",error:{message:e.message,stack:e.stack}}})))).finally((()=>{g.endTimer(),console.log(`===== Finished in ${g.getDurationInSeconds()}s =====`)})))})();
