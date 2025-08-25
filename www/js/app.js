// 1. Registra o Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso!');
        })
        .catch(err => {
          console.error('Falha ao registrar o Service Worker: ', err);
        });
    });
  }
  
  // 2. Verifica o status da conexão
  function isOnline() {
    return navigator.onLine;
  }
  
  // 3. Decide para onde ir
  function navigate() {
    // ❗️ MUITO IMPORTANTE: Troque a URL abaixo pela URL do seu site!
    const onlineUrl = "https://inteligenciatitan.com.br"; 
  
    if (isOnline()) {
      // Se estiver online, vai para o seu site
      window.location.href = onlineUrl;
    }
    // Se estiver offline, o Service Worker já terá interceptado a navegação
    // e mostrado a 'offline.html' antes mesmo deste script terminar de rodar.
    // Por segurança, podemos adicionar uma checagem, mas o sw.js já cuida disso.
  }
  
  // Inicia a navegação
  navigate();