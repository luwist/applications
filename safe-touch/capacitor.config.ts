import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.alarma.robo',
  appName: 'Alarma de Robo',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchAutoHide: true
    },
  },
};

export default config;
