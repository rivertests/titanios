import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Titan IA',
  webDir: 'www',
  // ADICIONE ESTE BLOCO ABAIXO
  server: {
    // ❗️ MUITO IMPORTANTE: Troque pela URL real do seu site!
    url: "https://inteligenciatitan.com.br",
    // Esta linha permite que o app volte para os arquivos locais se a URL não carregar
    errorPath: "index.html" 
  }
};

export default config;