
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { NgModule } from '@angular/core';
import {FormsModule  } from '@angular/forms';
import { PlaylistComponent } from './playlist.component';


@NgModule({
    imports: [
        CommonModule,//common built-in directive, ngIf, etc
        FormsModule, //for template drive form approach
       
    ],
    exports: [
       
    ],
    declarations: [
        PlaylistComponent,
        SongComponent
        
],
    providers: [],
})
export class PlaylistModule { }
