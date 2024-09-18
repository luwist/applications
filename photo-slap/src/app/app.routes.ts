import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.page').then((m) => m.ExplorePage),
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/statistics/statistics.page').then(
            (m) => m.StatisticsPage
          ),
      },
      {
        path: 'photography',
        loadComponent: () =>
          import('./pages/photography/photography.page').then(
            (m) => m.PhotographyPage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
];
