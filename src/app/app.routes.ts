import { Routes } from '@angular/router';
import { SeriesComponent } from './features/series/pages/series/series.component';
import { SeriesDetailsComponent } from './features/series/pages/series-details/series-details.component';
import { MoviesComponent } from './features/movies/pages/movies/movies.component';
import { MovieDetailsComponent } from './features/movies/pages/movie-details/movie-details.component';
import { ActorsComponent } from './features/actors/pages/actors/actors.component';
import { ActorDetailsComponent } from './features/actors/pages/actor-details/actor-details.component';
import { NotFoundComponent } from './features/general/pages/not-found/not-found.component';
import { AboutUsComponent } from './features/general/pages/about-us/about-us.component';
import { HomeComponent } from './features/general/pages/home/home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { AuthLayoutComponent } from './shared/components/templates/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/components/templates/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },

      { path: 'movies', component: MoviesComponent, pathMatch: 'full' },
      { path: 'movie/:id', component: MovieDetailsComponent, pathMatch: 'full' },

      {path: 'series', component: SeriesComponent, pathMatch: 'full' },
      { path: 'serie/:id', component: SeriesDetailsComponent, pathMatch: 'full' },

      { path: 'actors', component: ActorsComponent, pathMatch: 'full' },
      { path: 'actor/:id', component: ActorDetailsComponent, pathMatch: 'full' },

      {path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
      {path: 'contact-us', component: AboutUsComponent, pathMatch: 'full'},
    ]
  },
  { path: 'auth', component: AuthLayoutComponent,
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'login', component: LoginComponent, pathMatch:'full'},
      {path:'register', component: RegisterComponent, pathMatch:'full'},
    ]
  },
  { path: '**', component: NotFoundComponent },
];
