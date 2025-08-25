const CACHE_NAME = 'titan-ia-offline-v1';
const OFFLINE_URL = 'offline.html';

// Lista de todos os arquivos que a sua página offline precisa para funcionar
const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  'assets/css/style.css',
  'assets/images/logo.png' // Adicione aqui outras imagens ou scripts da página offline
];

// Evento 'install': Guarda os arquivos offline em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pré-cacheando arquivos offline');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Evento 'activate': Limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Limpando cache antigo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Evento 'fetch': Intercepta as requisições
self.addEventListener('fetch', (event) => {
  // Apenas para requisições de navegação (abrir a página)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Tenta buscar a página da rede primeiro
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // Se falhar (offline), retorna a página offline do cache
          console.log('[ServiceWorker] Fetch falhou; retornando página offline.');
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});