import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  {
    path: 'landingPage',
    component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        title:'Staycation-Home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'booking',
        title:'Staycation-Booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'rooms',
        title:'Staycation-Explore',
        loadChildren: () =>
          import('./rooms/rooms.module').then((m) => m.RoomsModule),
      },
      {
        path: 'favorites',
        title:'Staycation-Favorites',
        loadChildren: () =>
          import('./favorites/favorites.module').then((m) => m.FavoritesModule),
      }
    ],
  },
];
const RouterOptions:ExtraOptions = {
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
