self.addEventListener('install',event=>{
    console.log('Install evnet');
});
self.addEventListener('activate',event=>{
    console.log('Activate evnet');
});
self.addEventListener('fetch',event=>{
    console.log('Install evnet:',event.request.url);
});
const cacheName='cache-v1';
const resourcesToPrecache=[
    '/',
    'index.html',
    './style/style.css',
    '/script/script.js',
    './images/logo.png',
    './images/logo1.png',
    './images/code.jpg',
    './images/crypto.png',
    './images/CS.jpg',
    './images/d&d.jpg',
    './images/icon.png',
    './images/m1.jpg',
    './images/m2.jpeg',
    './images/m3.jpeg',
    './images/m4.jpg',
    './images/m5.jpeg',
    './images/m6.jpeg',
    './images/m7.jpeg',
    './images/m8.jpg',
    './images/nfs.jpg',
    './images/pc.png',
    './images/poster.jpg',
    './images/pubg.jpg',
    './images/searchit.jpg',
    './images/tdc.jpg',
    './images/tpp.jpeg',
    './images/tq.jpeg',
    './style/event.css',
    'civil.html',
    'codedebug.html',
    'contactus.html',
    'crypto.html',
    'cs.hmtl',
    'cse.html',
    'ece.html',
    'eee.html',
    'events.html',
    'explore.html',
    'ise.html',
    'mech.html',
    'nfs.html',
    'pc.html',
    'pubg.html',
    'searchit.html',
    'tdc.html',
    'techquiz.html',
    'tpp.html'
];
self.addEventListener('install',event=>{
    console.log('service worker install event');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache=>{
                return cache.addAll(resourcesToPrecache);
            })
    );
});
self.addEventListener('fetch',event=>{
    event.respondWith(caches.match(event.request)
    .then(cachedResponse=> {
        return cachedResponse||fetch(event.request);
    })
    );
});