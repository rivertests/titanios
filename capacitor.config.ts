import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.inteligenciatitan.app',
  appName: 'Titan IA',
  webDir: 'www',
  plugins: {
    StatusBar: {
      style: 'DARK'
    },
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;