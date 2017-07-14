import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { NavbarComponent } from './core/navbar/navbar.component';
import { EmitterService } from './service/emitter.service';
import { LandingGuard } from './landing/landing.guard';
import { SearchService } from './service/search.service';
import { PlaylistModule } from './playlist/playlist.module';
import { NavigationService } from './service/navigation.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongComponent } from './playlist/song/song.component';
import { SearchComponent } from './search/search.component';





const routes: Routes = [
  { path: '', redirectTo:'landing', pathMatch:"full" },
  { path: 'landing', component: LandingComponent },
  { path: 'playlist', component:PlaylistComponent, canActivate:[LandingGuard]},
  { path: 'search', component: SearchComponent, canActivate:[LandingGuard] }
];



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    LandingComponent,
    SearchComponent,
   
   
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    PlaylistModule
    
  ], 
  providers: [
    {provide:SearchService, useClass:SearchService},
    NavigationService,
    SearchService,
    LandingGuard,
    EmitterService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
