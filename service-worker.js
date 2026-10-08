/* IMPORTANTE: mude esse número toda vez que publicar uma atualização
   relevante, para forçar os usuários a receberem a nova versão. */
const CACHE_VERSION = "v2";
const CACHE_NAME = "organograma-agibank-" + CACHE_VERSION;

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./offline.html",
  "./css/style.css",
  "./js/data.js",
  "./js/app.js",
  "./js/register-sw.js",
  "./manifest.json",
  "./Assets/logo-agi-blue.svg",
  "./Assets/agi-icone.png",
  "./Assets/qr-code.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return response;
        })
        .catch(() => {
          if (req.mode === "navigate") {
            return caches.match("./offline.html");
          }
        });
    })
  );
});
