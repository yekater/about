import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // 1. Home route (for both "/home" and the root "/")
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // 2. Songs list route
  { path: 'songs', component: SongsComponent },

  // 3. Wildcard route for 404 Not Found (MUST be the last route)
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // main export AppRoutingModule:
  exports: [RouterModule]
})
export class AppRoutingModule { } // class export