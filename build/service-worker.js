"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/hex.innovativedesign.club/index.html","cab22ae94691e072411ac051c7590769"],["/hex.innovativedesign.club/static/css/main.bf53d70c.css","c2ddfee9abfc512b0b0027a2a1343a34"],["/hex.innovativedesign.club/static/js/main.948660eb.js","b79e7c8bd6e4207d02e6a4d13df321ff"],["/hex.innovativedesign.club/static/media/App.a4966978.scss","a49669781412877e5d6d6e32c97a384f"],["/hex.innovativedesign.club/static/media/DinPro-Medium.48a3635c.otf","48a3635ce1e76c0122a143b076f51adf"],["/hex.innovativedesign.club/static/media/arrow.d364dda8.png","d364dda8c87356c147d9b83fa122c63b"],["/hex.innovativedesign.club/static/media/bottom_ferns.4ddf42cc.png","4ddf42cc4427e0de6565408d5be8543e"],["/hex.innovativedesign.club/static/media/bottom_plants.e1657c36.png","e1657c36cdcaff3b9034b27a1f9ab95a"],["/hex.innovativedesign.club/static/media/green_card.3f43d1ad.png","3f43d1adb4d26d598202c4bc02edcae8"],["/hex.innovativedesign.club/static/media/pink_card.32a29fea.png","32a29fea228f52d3f39c45c178127f75"],["/hex.innovativedesign.club/static/media/red_card_nav.80f59794.png","80f5979468c23262e7ad15230ddae4a3"],["/hex.innovativedesign.club/static/media/top_left_ferns.8f7e60a7.png","8f7e60a79fee81b3c20214916969d81a"],["/hex.innovativedesign.club/static/media/top_left_plants.43360e8b.png","43360e8bd890e202a587a1584eb21ad1"],["/hex.innovativedesign.club/static/media/top_right_ferns.74ac3ae4.png","74ac3ae4952ed931496d5ade306c5fb4"],["/hex.innovativedesign.club/static/media/top_right_plants.a223f74c.png","a223f74ccae0e4495ff885091da49ff6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),i=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/hex.innovativedesign.club/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});