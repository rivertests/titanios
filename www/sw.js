const CACHE_NAME = 'titan-ia-offline-shell-v2'; // Mudei a versão para forçar a atualização
const FILES_TO_CACHE = [
  '/', // Importante para pegar o index.html na raiz
  'index.html',
  'assets/css/style.css',
  'assets/images/logo.png'
];

// Instala o Service Worker e armazena o "shell" do app em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pré-cacheando o shell offline');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Responde com o conteúdo do cache quando a busca na rede falhar
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});