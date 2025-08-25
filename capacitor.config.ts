import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Titan IA',
  webDir: 'www',
  // ADICIONE ESTE BLOCO ABAIXO
  server: {
    // Esta linha diz ao iOS para não abrir este domínio no Safari.
    hostname: 'inteligenciatitan.com.br'
  }
};

export default config;