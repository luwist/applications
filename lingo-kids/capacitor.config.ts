import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.lingo.kids',
  appName: 'Tabla didactica didactica para niños',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchAutoHide: true
    },
  },
};

export default config;
