"use strict";var precacheConfig=[["/index.html","6460165867fe8ceef6ba0fcd9c301b29"],["/static/css/main.4c33ded2.css","1542f865eb289a81a014158617e2263d"],["/static/js/main.5bb04d2b.js","50317598b3790ca2daa5e9c083788d7c"],["/static/media/BILLY DERRINGER Dev_Resume_2018.92db1523.pdf","92db15231edc20bc12aabcc65a023b21"],["/static/media/addition.dcd4e6f1.jpeg","dcd4e6f1c135385a612dbc63b4f5a981"],["/static/media/charger-bg.71ce884a.jpg","71ce884a238321fa146c30c573559ce6"],["/static/media/dictionary.12fb8e18.jpg","12fb8e18cc9e2ebed11dad7399745971"],["/static/media/jewelry-bg.4e31ea93.jpg","4e31ea93af631c62fb5e9b99d217798d"],["/static/media/national-park.9cca603a.jpg","9cca603a59845d3fa2619e8637b49fa5"],["/static/media/neon-arrow.50be86ad.jpg","50be86ad7fe2b7e4fcbd0e3c344beddd"],["/static/media/neon-room.f661efbb.jpg","f661efbb5f4edb82e7d9e41aacb59630"],["/static/media/neon-triangle.ce014fa1.jpg","ce014fa15ee9b1459a97d5159ac30831"],["/static/media/party-balloons.b7b68e9b.jpg","b7b68e9b54ed80ecef525ce9f7dadaa8"],["/static/media/students-graduating.11f9f5b2.jpg","11f9f5b2211a9ea22c407a369650c5e7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});