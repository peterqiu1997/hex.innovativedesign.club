"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f2a8358b603bcee9815af106f634f7b6"],["/static/css/main.fbb0ca1e.css","8792ab5e995618ee18d23e169bf14aab"],["/static/js/main.bed9dea2.js","cad34a1c834b18f370428c6ec9038a22"],["/static/media/App.386e2d58.scss","386e2d58846967405157c34c5bd56c06"],["/static/media/DinPro-Medium.48a3635c.otf","48a3635ce1e76c0122a143b076f51adf"],["/static/media/arrow.d364dda8.png","d364dda8c87356c147d9b83fa122c63b"],["/static/media/bottom_ferns.4ddf42cc.png","4ddf42cc4427e0de6565408d5be8543e"],["/static/media/bottom_plants.e1657c36.png","e1657c36cdcaff3b9034b27a1f9ab95a"],["/static/media/green_card.3f43d1ad.png","3f43d1adb4d26d598202c4bc02edcae8"],["/static/media/pink_card.32a29fea.png","32a29fea228f52d3f39c45c178127f75"],["/static/media/red_card_nav.80f59794.png","80f5979468c23262e7ad15230ddae4a3"],["/static/media/top_left_ferns.8f7e60a7.png","8f7e60a79fee81b3c20214916969d81a"],["/static/media/top_left_plants.43360e8b.png","43360e8bd890e202a587a1584eb21ad1"],["/static/media/top_right_ferns.74ac3ae4.png","74ac3ae4952ed931496d5ade306c5fb4"],["/static/media/top_right_plants.a223f74c.png","a223f74ccae0e4495ff885091da49ff6"],["/static/media/yellow_and_green_cards.2c3067ab.png","2c3067ab7df59f0479e033df938fadb1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});