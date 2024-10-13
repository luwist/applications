import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"pixel-labs-38e6c","appId":"1:197192128147:web:dcb7827b1a978e52fe9f66","storageBucket":"pixel-labs-38e6c.appspot.com","locationId":"us-central","apiKey":"AIzaSyCBs_jwCqo2c-hbea5T8GB4FcGGk0z4X_w","authDomain":"pixel-labs-38e6c.firebaseapp.com","messagingSenderId":"197192128147"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
