"use strict";var precacheConfig=[["/index.html","f58e3c95841488092a3e1692cac2901c"],["/static/css/main.ccfa7bb0.css","1f20961fcf508354e541e8d234850eef"],["/static/js/main.9af1d907.js","77423fcb2e3e7358157a816731587706"],["/static/media/BILLY DERRINGER Dev_Resume_2018.38e57511.pdf","38e575114135ca03807d7528dcc2d9a0"],["/static/media/addition.4cac3b1f.jpeg","4cac3b1fa10939816a92f7dc17113173"],["/static/media/charger-bg.e903c2f4.jpg","e903c2f4b0f19edea4f85b4a77feba25"],["/static/media/dictionary.82ec27b7.jpg","82ec27b76fd92b78f28e051b96d6ed6c"],["/static/media/jewelry-bg.4e31ea93.jpg","4e31ea93af631c62fb5e9b99d217798d"],["/static/media/national-park.00b76481.jpg","00b764812e16f86ec51da737071de1bf"],["/static/media/neon-arrow.0f407926.jpg","0f407926f2653fdd6294802661734076"],["/static/media/neon-room-sm.1cf3e27c.jpg","1cf3e27c7b3c445cf036a31d9581df36"],["/static/media/neon-room.f661efbb.jpg","f661efbb5f4edb82e7d9e41aacb59630"],["/static/media/neon-triangle.ce014fa1.jpg","ce014fa15ee9b1459a97d5159ac30831"],["/static/media/party-balloons.ecbd32cd.jpg","ecbd32cd849daf4601b411971befc2ab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});