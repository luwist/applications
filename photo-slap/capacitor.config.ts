import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.photo.slap',
  appName: 'Relevamiento Visual',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchAutoHide: true
    },
  },
};

export default config;
