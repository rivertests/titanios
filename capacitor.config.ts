import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Titan IA',
  webDir: 'www',
  plugins: {
    StatusBar: {
      style: 'DARK' // Define os ícones da status bar como brancos
    },
    SplashScreen: {
      launchShowDuration: 0 // Garante que a splash screen fique visível até mandarmos esconder
    }
  }
};

export default config;