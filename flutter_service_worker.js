'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3e16114ebfbc5c504c542cdadd1b1f05",
"index.html": "a03d77b8ce6ad12062be4099e8561c84",
"/": "a03d77b8ce6ad12062be4099e8561c84",
"main.dart.js": "52c94e7284afaa539c03cf86ee67c24e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b26a054f11c1ba873fc15dcea04351f4",
".git/config": "a144659eb761d55a9b2d115c41dd7b4a",
".git/objects/95/a6728065d55191f79dd3b449329bb5a9f28485": "aeef1944f118ee04186e9627d7317fdd",
".git/objects/0c/10f85e5d3a0bb0448906fb15affde2312f94ee": "a8dd3233f02bab87ac100ecfd5460b68",
".git/objects/68/74426df453b53df715a9a7d07de528d755c9e8": "544e3cfed571aa0fc023a72f31b18c28",
".git/objects/03/2bc8f4add8d2419a7d647625c1ecfb0e9de340": "1174e844f2348178617839375c465725",
".git/objects/32/61a833b1cdc38abbb56359a4e30088bc4e19fb": "682bec65e41ac38f5f5086d0b47f4dd0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/5c207031ad549064c3685457a7309b1ce73654": "f9b7a1bc604176eadfdd1d7d330087bb",
".git/objects/34/c1f7aa003ffc0df1334d86eafc421283f6753b": "c4bb34922a78e7a2970faaa73f752dc2",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/9c110b10dee620eb1a4e789e59eb5c8393faaf": "7b23e887d7d377a032f05c1187bbe509",
".git/objects/b5/0b318c7e83072b42564f5d686452214f619147": "f516482dbcb0adbecd278168b617742c",
".git/objects/d9/19d592a2a40d99a572a66e1efb8ec847edeb66": "3975bd9435ed8f34c8a0a9c5ca02334f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/8b9f578f341f2d370ac6e523b95224ab788869": "b4e45244be314706942df79d17c65eb6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/18/4dabbf371bc070890b6e86e0b81f03b899c103": "e8a12e16ebaed06833187d67f307a4af",
".git/objects/16/1a48c32514418745340f5ea6c99676c7538de7": "9174c25c6c940a0a273b7cc23528bd86",
".git/objects/89/0f24fffcaa19650b69b2faeee4b081b78c5719": "f069fcdd1ba8c74397aacb77d463a56c",
".git/objects/1a/b8bf934d9d4d0d84dd99f6ce8ba117e84ecf76": "6f7e1637e597b6c4f9aab8431f012e9b",
".git/objects/17/fa760613108e34e4cf4cf04da99092d0eb4869": "6d4a6e7dc2b6f6474636646468bf0c46",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/b99d33029a02fa457c3ea7ff3566ff2bee925b": "e3a687bffb18b274168d70136f6ee906",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/ed31c05cbfc1f2b274abb435253aea2fed300d": "0d63175addfaea39db00196655401a5e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/524e55041cd954c0e924ae07cf98dbba911c53": "c5521f09d981c8ea5a39e94b141985e8",
".git/objects/07/0a1b3a28b2aad5bb576b86dd66701d5d06fabf": "00f72e56d1900dc67521442ecd2b6636",
".git/objects/38/09797e2a813d79bbc5a72247c6386485ebf8df": "3ffaa53a2cd16005d582aaa8b30ab3e8",
".git/objects/5c/6b5e438344ecc0962a2fb093fe0939094de653": "fb97aa47b4f792e1acf89f06425b8c6d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/0a/6a8cd31e132586363bf36ec801e964e87295be": "c3dfba0a8ba2d0545d0e93d6636b2e7a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/50b80d1d9d99e3b0f63f76d4aaa066710afee1": "11d23a02507b4861c221a789d4ba28b6",
".git/objects/a0/cb2ed093ff7464743f1d45c58939ce4aa5c1a0": "36f79e577a6e02babebcc16023d38181",
".git/objects/b1/96fe719c3d732150bb8fb6d8a7637187a145ee": "f74e789a500400910ba9945f4e6ed19f",
".git/objects/b6/099e9bb27497aaf736a32b6a957ce94b74ecdb": "50931e06cc52b65f9c2e47c2eaf28cd6",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/97aca502497095cb63af57c91ddea5c7f0e33f": "245a25f965441a939edcba69137d1d41",
".git/objects/de/38a8beda6e7401049a7775d56ff9bba4f0bd08": "5bf868e22e53ea05a8dde856e691c627",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/d29c3b1ba6b78ee3767f9c96b3d8ee81230342": "2d6411b1ccf7213f352a691dafaa1aa2",
".git/objects/ea/25d8a0ad9b77754b4a2c57638fd02a63ce53d2": "6d725a507c0a5b55466ed4a5b83f6e03",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/e7951d555f6ed9595f5c2d002b3073f6788391": "1f913ab1b764a927a260b7e80fc72784",
".git/objects/f8/ae4b8bf674f7e2d4b6b790eb6d155adde6961f": "d1d13ac7c6d83a144bf7ff643b7b0e45",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/71/5ed703b8c7b9b7f7fe7bfdb57119acf154eea6": "72bb57c1e234a56d722dcf66085d61c4",
".git/objects/49/805a7992d0d54c0f7aa475a7ea5ebd4c9a584f": "3dda42fa3d80eaffee2b4e2d03c07701",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24be6183274f2a877023a7f1582225e9",
".git/logs/refs/heads/main": "c070e5129e04e278d94c9e01aa328419",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "646a9fa2cfcc8e77b32c7de1a3964010",
".git/index": "90ab7aa7eb8a9d488da8679d7556c808",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"Archive.zip": "9757eba5a2e96867185c806e2c7c81f7",
"assets/AssetManifest.json": "c84305cff50e22e0e57eb91e89924e81",
"assets/NOTICES": "88d908bbdbfc98bc4c998f06279fdb0d",
"assets/FontManifest.json": "8ebbadab67752b96d82aaa7984fd4502",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ae3a94a583842f2f381649cc3d2d987f",
"assets/fonts/MaterialIcons-Regular.otf": "6861154609697a726c5ec78c9022d4cd",
"assets/assets/languages/en.json": "6b7dc59b32c450f98d59a3c90109f564",
"assets/assets/languages/ar.json": "8addb1b8ce87aa593bcc98f51fdc0f1e",
"assets/assets/icons/home/true.svg": "5682008bb1827932eb010f3f0e42121f",
"assets/assets/icons/home/true_yellow.svg": "3bec573ae47a78b6a68bcbfe4b4c9662",
"assets/assets/icons/home/remove_item.png": "7113a6dddd136c4aed1238ffa4272473",
"assets/assets/icons/home/true_language.svg": "abde47f450a186f73265606e1af50280",
"assets/assets/icons/home/true_green.png": "b7404bb9178dae25805acc93a0dc9e68",
"assets/assets/icons/home/remove_item.svg": "12dbc67c1372c715226280b40860ebfe",
"assets/assets/icons/home/true_yellow.png": "0d1ffce84179ae9025d17715363977b0",
"assets/assets/icons/other/close.svg": "e545ea33d481eb3c3ffc126955481e32",
"assets/assets/fonts/ALSALAM-Medium.ttf": "df5630ccc6a264e4dae4c6ebd4969c43",
"assets/assets/fonts/HacenTunisia.ttf": "71d28deb511b542c0cd67c0c5e276e80",
"assets/assets/fonts/ALSALAM-Heavy.ttf": "f466dfb87b587371ea602c81867aa3d0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
