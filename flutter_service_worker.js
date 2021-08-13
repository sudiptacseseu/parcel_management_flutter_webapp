'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b20037073927e12bf4e37344828a2e61",
".git/config": "aef041109992756a14b800526e3f13a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66974e7090a9d2354f9922de473697c5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c3899723195d38e585d4b5aff8763dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbbfe3764806c05ff777298cba221b69",
".git/logs/refs/heads/master": "bbbfe3764806c05ff777298cba221b69",
".git/logs/refs/remotes/origin/master": "1a858e4bcbc0429aaee689e48be189ef",
".git/objects/03/8fc80d2f6b3fdacb3ddd2f3881227f9f13b6f1": "203aab4d2142b39a6942219410f08550",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/6338bd934444232491d50d9341fecb0292340b": "dfe6c6abda1d4bc513f77dcdd1197b24",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/f7e38b52342d22872888f55a836efb30030930": "776838630c7893cdc91ef2c20d567ef2",
".git/objects/15/895aae03583f69f518c6ec577d70293a82ed09": "bf293a7e2edd923d6fc86581c1290cbd",
".git/objects/1b/df222723458f194b7485d23855aaf30074e3df": "190dd3b668ff7af535eef390725f8e1f",
".git/objects/1c/2206a4852aa27827267ac4b9bcccc5d0ee2044": "3750ec842a6303689de60e4e0a807817",
".git/objects/1f/bcf81a4b01ea6327f52334aa79a8cc8f6e6d6d": "982155a58bf53243b2cbbd256f54b380",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/8df5bacce1f796ff79fa741d31a54a360ed5d1": "688b81d25cdef77fe6f7de78e45cbb43",
".git/objects/28/b51615616adb115ee026835a79211b9fec3fa8": "6dd4ad0eaa13811df73ee791f5fb016c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/b9b1988684f155ba6daa46a747c14a7bae639b": "2093e609d2691f789e6695c7546e341a",
".git/objects/36/80a01c5073ee4ffcf8ee5510a2e27bd2f1c3ad": "df45667ea2c2cb8cfb38bcb47db4c333",
".git/objects/3a/852f75c7e46db9462e2b4eb1645548d43261c5": "ef58339f18f7a60407348bee88993ec0",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/68b0d1379dcdd71410325cef34a53375d36723": "b9872d2374085b52f0b0f672a009f1d0",
".git/objects/3f/f432a43bd18d7bb9b63239e52c074847e17f3e": "ff94f114ff21d90fbff0131e624264d2",
".git/objects/46/613900c71d01feb3ad257822a3059bd2cba3ad": "b85ee7813d00fc42c1dfdf542cea070b",
".git/objects/49/410638e4b2b540d14955f40b8ec53543be72fa": "b5588a7c54245a3a2ba3cca33d940fd9",
".git/objects/50/c9eb1bad40d47218167af8bf9396d336ea05ad": "e332f7f3991650f4824eca57c5d365e8",
".git/objects/52/997344e8b4a6c76a089b94a4100deb026b8ec6": "6b2104d5cc91a45442847419cb9930f3",
".git/objects/55/b0d81c8838d439bcfd85799dd599dcadf6107a": "c1ff34cf5b7c292fd84dbbd4e703153b",
".git/objects/5a/5ef431336c2c6556d61edfdafa0967c257f6d0": "3707be01cf20689737a496e5101de550",
".git/objects/5c/f3357e495a9e3a79f779f6d73686852ac24cef": "ac7c87ca930d2045c14e0b55c160274b",
".git/objects/5d/278c5900121f428a55fe889628c5345e7e6e40": "388b9303eaab97fe5043dae3901a5194",
".git/objects/67/93cbbd5c92bd57662a4a91a91107448b03936d": "c764dc45377ea93422f65efd2fb8b1c3",
".git/objects/6b/660b1b9431ce94835be6e2dc3b5ce0ccb5ce9f": "36f484eb8e5108e26faffaebcc2c0045",
".git/objects/6f/26dc2af8338f3ecc85aa03a4c7dd54b03bbbe0": "e7e579817acaf2e32de399f19bbd6d03",
".git/objects/74/f75c0876d599926c8c88917ecf5dab38377ea4": "9e5863f0b75fd69272a2707e4a66caf8",
".git/objects/78/a4de3f6c9d96e2e35bd448738a39697e0679b3": "b228ba52461c1a1178a8c264806d095f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/e3297c361bf1350823855383477d14cb9758a8": "e1c82997445966910eed21c6f51c9cbc",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/85/71110497eaecef97a21d4299743b2912b88495": "b0a4688fb279dddbffa324007854598a",
".git/objects/86/f3082f43ee0c64396d35e7174f16d9fbc2ebe9": "3d461afae9ec9fc602a62f2b5311f8c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1454a59d5408e957c4a03fbd5a5ff7b28fa0ad": "cbe5f1e9a75abbdd1703af9da98f32ea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6ed22ad5e82e53496e331139ab4cacdf0e3922": "ff81db7cb78e12a9c5a77f96800b44e4",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/d2e8827829810d41ffc009cfba44c7577c8a19": "f7d107b3720f0327abd2bf5c73a1bc79",
".git/objects/94/c00d4456fae696be3a97ce3d5919a656a43b7a": "465eb5090f012b49938dea4d7521c002",
".git/objects/98/f8c1f57cb3413029a4f79dde053c1466e98840": "9cf1d6d191d69a17e9f1480fd5cca676",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/4bc77f566350784f7d94e7f90762202a32c313": "0ec03e73b29ed0d7e61d555b5f17a870",
".git/objects/ac/6c3c0a7c305a30293de6ed4b56ab73805457f3": "f2063ca4532f1a7d6f2452f4b578b5e1",
".git/objects/ac/9e035dccfd418822e47ad5263fcf003394374f": "3c2a98d1ea1a4e0e9ae30b8630a36ccb",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/b8a3f0d8ee541300f2f23f6e11d34c371696eb": "bd885a94487aac5518d7889a971cf3e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d0/e8904b4e6b78b049811478061686e8330d2872": "96c1fca546eb4fa6708d39d8363ddc75",
".git/objects/d6/489565b4736946a0d1de950f06f61c032d3c8f": "7b3b3373c810837d5c5f8f2239677021",
".git/objects/d6/95d7cd744092f16e65879c686c9b716fa2b62b": "1f60d04220c8857037440bdf466023b3",
".git/objects/dd/67ddba31e41f6133d3f214df3d4bae824387a3": "dd7d212e4acdb654639c4750426d688c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/b3acd1aa047fd72523a1d1dd1cf489ab3cbe74": "e6a3d95e2530d16c24b4b379820a807f",
".git/objects/ef/7224b5895d352ffb134890ada5bdcb9b4ac4c9": "47d08920bc63c2587dd5af545351fe73",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/fb/c2e9365830ab35aa11b5eebbcc7588c0ec6eac": "96188ea4a0bd85b807b0a81bf1fc490b",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fd/2da3c6511f1ecbb91995a0355856e996e2c8cc": "f86bda871a76a13031cf634df6204713",
".git/ORIG_HEAD": "2c57620772d0c99b8c00aed66e8145f3",
".git/refs/heads/master": "8a3ab9596d5e95acbd5395f12f3a4f9c",
".git/refs/remotes/origin/master": "8a3ab9596d5e95acbd5395f12f3a4f9c",
"assets/AssetManifest.json": "e79578dffeeb3fe213c3200871fc6459",
"assets/FontManifest.json": "a09ab0f14154e706008a371330e1df77",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/fonts/Lobster-Regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/lib/assets/images/add_parcel.png": "895c9c9c5fa90ca6cce20fb6e1badde6",
"assets/lib/assets/images/assign_delivery_man.png": "78de516aeeb6500a8d58f86c980a13e4",
"assets/lib/assets/images/checklist2.png": "3a693e89623666181891f4991293cd13",
"assets/lib/assets/images/delivered.png": "6d56f8012c545e108b334887a5600e05",
"assets/lib/assets/images/hub3.png": "377e1b6919a42320aa38bf9ad3fe9e3b",
"assets/lib/assets/images/id_card.png": "b4f1bdb2fd79f970adfcc1f8a74ea721",
"assets/lib/assets/images/in_progress.png": "f4da2c40739a8b55f1a578319e9e4906",
"assets/lib/assets/images/on_the_way.png": "5afbb3a80f21e5501575725ede3bed34",
"assets/lib/assets/images/parcels.png": "71e59f10602f51a2e80438e303380dd7",
"assets/lib/assets/images/parcel_check.png": "51d613e0c363275668e73271727d18e1",
"assets/lib/assets/images/payment_status.png": "b0f5c3a042db404099276762cc66911e",
"assets/lib/assets/images/pending.png": "6ff76b7ff23170b44a04c47f805ca1a2",
"assets/lib/assets/images/pending_payment.png": "a2613c31da6e39df1ce787c51dc0173c",
"assets/lib/assets/images/picked.png": "adff74e0c35107ddf4940d0f8973c199",
"assets/lib/assets/images/profile.png": "53985be5b4f64836443c11b51af23bc6",
"assets/lib/assets/images/received_cash.png": "05e0b1a2d941c1a416ca6b877740888a",
"assets/lib/assets/images/seller.png": "82ecf9e6511eb17ce9af247715120dfe",
"assets/lib/assets/images/upcomming_parcels.png": "051744833145a5fdaca7eff1a6ffcdfd",
"assets/lib/assets/images/update_status.png": "26c80ad244ceae84fc185a7c28d27df7",
"assets/NOTICES": "4be3865bfec386dbd5e4c624c6ac0056",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bdf4e6a0152a58534747045098858214",
"/": "bdf4e6a0152a58534747045098858214",
"main.dart.js": "255154f3a59f996bc58f112406cbe901",
"manifest.json": "1598fbc2d38a6adb9d5095ce54d0b1f9",
"README.md": "a702414816fa3091190d0f16705f09d0",
"version.json": "c7b612c003284f33f4b6e06db4763c1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
